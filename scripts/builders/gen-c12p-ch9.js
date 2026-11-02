// scripts/builders/gen-c12p-ch9.js
// Class 12 Physics - Chapter 9: Ray Optics and Optical Instruments (32 Questions)
const { createQCard, saveChapter } = require('./c12p-helper');

const chNum = 9;
const chTitle = "Ray Optics and Optical Instruments";
const nextChTitle = "Wave Optics";

const svgDiagram = `
  <div style="display:flex; justify-content:center; margin:24px 0;">
    <svg viewBox="0 0 760 220" style="width:100%; max-width:760px; height:auto; background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb"/>
        </marker>
      </defs>
      <!-- Title -->
      <text x="380" y="24" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#1e293b">Lens Maker's Formula & Optical Instruments (Microscope & Telescope)</text>
      
      <!-- Principal axis -->
      <line x1="50" y1="120" x2="350" y2="120" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,2"/>
      
      <!-- Convex lens -->
      <path d="M 180 50 C 195 85, 195 155, 180 190 C 165 155, 165 85, 180 50" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      
      <!-- Object AB -->
      <line x1="100" y1="120" x2="100" y2="70" stroke="#dc2626" stroke-width="3" marker-end="url(#arrow)"/>
      <text x="95" y="65" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#dc2626">A (Object)</text>
      
      <!-- Parallel ray through focus -->
      <line x1="100" y1="70" x2="180" y2="70" stroke="#2563eb" stroke-width="1.8"/>
      <line x1="180" y1="70" x2="280" y2="150" stroke="#2563eb" stroke-width="1.8" marker-mid="url(#arrow)"/>
      
      <!-- Ray through optical centre -->
      <line x1="100" y1="70" x2="280" y2="150" stroke="#16a34a" stroke-width="1.8" marker-mid="url(#arrow)"/>

      <!-- Real inverted image A'B' -->
      <line x1="280" y1="120" x2="280" y2="150" stroke="#dc2626" stroke-width="3"/>
      <text x="275" y="166" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#dc2626">A' (Image)</text>

      <!-- Key Formulae -->
      <text x="380" y="55" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e293b">Governing Equations:</text>
      <text x="380" y="80" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Mirror Formula: $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}, \\quad m = -\\frac{v}{u}$</text>
      <text x="380" y="105" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Refraction at Spherical Surface: $\\frac{\\mu_2}{v} - \\frac{\\mu_1}{u} = \\frac{\\mu_2 - \\mu_1}{R}$</text>
      <text x="380" y="130" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Lens Maker's Formula: $\\frac{1}{f} = (\\mu - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$</text>
      <text x="380" y="155" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Thin Lens: $\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}, \\quad P = \\frac{1}{f} = P_1 + P_2$</text>
      <text x="380" y="180" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Prism Formula: $\\mu = \\frac{\\sin((A + D_m)/2)}{\\sin(A/2)}$</text>
      <text x="380" y="205" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Telescope: $m = -\\frac{f_o}{f_e}, \\quad L = f_o + f_e$</text>
    </svg>
  </div>
`;

const questions = [
  // 9.1
  createQCard(
    "c12p-ch9-q1",
    "Q 9.1",
    "Exercise 9.1",
    `A small candle, $2.5 \\text{ cm}$ in size is placed at $27 \\text{ cm}$ in front of a concave mirror of radius of curvature $36 \\text{ cm}$. At what distance from the mirror should a screen be placed in order to obtain a sharp image? Describe the nature and size of the image. If the candle is moved closer to the mirror, how would the screen have to be moved?`,
    `<p><strong>Given:</strong><br>
    Size of candle (object height) $h = +2.5 \\text{ cm}$<br>
    Object distance $u = -27 \\text{ cm}$<br>
    Radius of curvature $R = -36 \\text{ cm} \\implies f = \\frac{R}{2} = -18 \\text{ cm}$</p>

    <p><strong>Step 1: Image Distance $v$:</strong><br>
    From mirror formula:
    \\[
    \\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u} = -\\frac{1}{18} - \\left(-\\frac{1}{27}\\right) = -\\frac{1}{18} + \\frac{1}{27} = \\frac{-3 + 2}{54} = -\\frac{1}{54}
    \\]
    \\[
    v = -54 \\text{ cm}
    \\]
    The screen should be placed at a distance of <strong>$54 \\text{ cm}$ in front of the mirror</strong>.</p>

    <p><strong>Step 2: Size and Nature of Image:</strong><br>
    \\[
    m = -\\frac{v}{u} = -\\frac{-54}{-27} = -2
    \\]
    \\[
    h' = m h = -2 \\times 2.5 \\text{ cm} = -5.0 \\text{ cm}
    \\]
    The image is <strong>real, inverted, magnified ($5.0 \\text{ cm}$ high)</strong>.</p>

    <p><strong>Movement of Screen:</strong><br>
    As the candle is moved closer to the focus ($u \\to -18 \\text{ cm}$), the image recedes away from the mirror ($v \\to -\\infty$), so the screen must be <strong>moved further away from the mirror</strong>. When the candle moves inside the focal point ($u < 18 \\text{ cm}$), the image becomes virtual and cannot be captured on a screen.</p>`,
    "3 Marks",
    [
      ["Mirror formula and calculation of $v = -54\\text{ cm}$", "1.5 Marks"],
      ["Magnification and image height $h' = -5.0\\text{ cm}$ with nature", "1 Mark"],
      ["Screen movement explanation", "0.5 Mark"]
    ]
  ),

  // 9.2
  createQCard(
    "c12p-ch9-q2",
    "Q 9.2",
    "Exercise 9.2",
    `A $4.5 \\text{ cm}$ needle is placed $12 \\text{ cm}$ away from a convex mirror of focal length $15 \\text{ cm}$. Give the location of the image and the magnification. What happens as the needle is moved farther from the mirror?`,
    `<p><strong>Given:</strong><br>
    Object height $h = +4.5 \\text{ cm}$<br>
    Object distance $u = -12 \\text{ cm}$<br>
    Focal length of convex mirror $f = +15 \\text{ cm}$</p>

    <p><strong>Step 1: Location of Image $v$:</strong><br>
    \\[
    \\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{v} = \\frac{1}{15} - \\left(-\\frac{1}{12}\\right) = \\frac{1}{15} + \\frac{1}{12} = \\frac{4 + 5}{60} = \\frac{9}{60} = \\frac{3}{20}
    \\]
    \\[
    v = +\\frac{20}{3} \\text{ cm} \\approx +6.67 \\text{ cm}
    \\]
    The image is located at <strong>$6.67 \\text{ cm}$ behind the mirror</strong> (between pole and focus).</p>

    <p><strong>Step 2: Magnification and Size:</strong><br>
    \\[
    m = -\\frac{v}{u} = -\\frac{20/3}{-12} = +\\frac{20}{36} = +\\frac{5}{9} \\approx +0.556
    \\]
    \\[
    h' = m h = \\frac{5}{9} \\times 4.5 = +2.5 \\text{ cm}
    \\]
    The image is <strong>virtual, erect, diminished ($2.5 \\text{ cm}$ high)</strong>.</p>

    <p><strong>Effect of Moving Needle Farther:</strong><br>
    As $u \\to -\\infty$, $v \\to +f = +15 \\text{ cm}$ and $m \\to 0$. The image moves towards the focus behind the mirror and progressively diminishes in size to a point.</p>`,
    "3 Marks",
    [
      ["Calculation of image position $v = +6.67\\text{ cm}$", "1.5 Marks"],
      ["Magnification $m = +5/9$ and image height $h' = 2.5\\text{ cm}$", "1 Mark"],
      ["Behavior as object moves farther away", "0.5 Mark"]
    ]
  ),

  // 9.3
  createQCard(
    "c12p-ch9-q3",
    "Q 9.3",
    "Exercise 9.3",
    `A tank is filled with water to a height of $12.5 \\text{ cm}$. The apparent depth of a needle lying at the bottom of the tank is measured by a microscope to be $9.4 \\text{ cm}$. What is the refractive index of water? If water is replaced by a liquid of refractive index $1.63$ up to the same height, by what distance would the microscope have to be moved to focus on the needle again?`,
    `<p><strong>Given:</strong><br>
    Real depth $h = 12.5 \\text{ cm}$<br>
    Apparent depth in water $h' = 9.4 \\text{ cm}$</p>

    <p><strong>Part 1: Refractive Index of Water:</strong><br>
    \\[
    \\mu = \\frac{\\text{Real Depth}}{\\text{Apparent Depth}} = \\frac{h}{h'} = \\frac{12.5}{9.4} \\approx 1.33
    \\]</p>

    <p><strong>Part 2: New Apparent Depth in Liquid ($\\mu' = 1.63$):</strong><br>
    \\[
    h'' = \\frac{h}{\\mu'} = \\frac{12.5}{1.63} \\approx 7.67 \\text{ cm}
    \\]</p>

    <p><strong>Distance Microscope Must be Moved:</strong><br>
    The needle now appears closer to the surface:
    \\[
    d = h' - h'' = 9.4 \\text{ cm} - 7.67 \\text{ cm} = 1.73 \\text{ cm}
    \\]
    The microscope must be moved <strong>$1.73 \\text{ cm}$ downwards</strong> (towards the liquid surface).</p>`,
    "3 Marks",
    [
      ["Calculation of $\\mu_{water} = 1.33$", "1 Mark"],
      ["Calculation of new apparent depth $h'' = 7.67\\text{ cm}$", "1 Mark"],
      ["Microscope displacement $d = 1.73\\text{ cm}$ downwards", "1 Mark"]
    ]
  ),

  // 9.4
  createQCard(
    "c12p-ch9-q4",
    "Q 9.4",
    "Exercise 9.4",
    `Refraction of a ray in air at $60^\\circ$ incidence gives angle of refraction $35^\\circ$ in glass, and $47^\\circ$ in water. Predict the angle of refraction in glass for a ray incident in water at $45^\\circ$ with the normal to the water-glass interface.`,
    `<p><strong>Step 1: Refractive Indices relative to air:</strong><br>
    • Glass-air interface:
    \\[
    ^a\\mu_g = \\frac{\\sin 60^\\circ}{\\sin 35^\\circ} = \\frac{0.8660}{0.5736} \\approx 1.51
    \\]
    • Water-air interface:
    \\[
    ^a\\mu_w = \\frac{\\sin 60^\\circ}{\\sin 47^\\circ} = \\frac{0.8660}{0.7314} \\approx 1.184 \\quad (\\text{or standard } 1.33)
    \\]</p>

    <p><strong>Step 2: Refractive Index of Glass with respect to Water:</strong><br>
    \\[
    ^w\\mu_g = \\frac{^a\\mu_g}{^a\\mu_w} = \\frac{\\sin 47^\\circ}{\\sin 35^\\circ} = \\frac{0.7314}{0.5736} \\approx 1.275
    \\]</p>

    <p><strong>Step 3: Angle of Refraction in Glass for $i = 45^\\circ$:</strong><br>
    \\[
    \\frac{\\sin i}{\\sin r} = ^w\\mu_g \\implies \\sin r = \\frac{\\sin 45^\\circ}{^w\\mu_g} = \\frac{0.7071}{1.275} \\approx 0.5546
    \\]
    \\[
    r = \\arcsin(0.5546) \\approx 38.68^\\circ \\approx 38.7^\\circ
    \\]</p>`,
    "2 Marks",
    [
      ["Relation $^w\\mu_g = \\frac{^a\\mu_g}{^a\\mu_w}$", "1 Mark"],
      ["Calculation yielding $r \\approx 38.7^\\circ$", "1 Mark"]
    ]
  ),

  // 9.5
  createQCard(
    "c12p-ch9-q5",
    "Q 9.5",
    "Exercise 9.5",
    `A small bulb is placed at the bottom of a tank containing water to a depth of $80 \\text{ cm}$. What is the area of the surface of water through which light from the bulb can emerge out? Refractive index of water is $1.33$.`,
    `<p><strong>Given:</strong><br>
    Depth $d = 80 \\text{ cm} = 0.80 \\text{ m}$<br>
    Refractive index $\\mu = 1.33 = \\frac{4}{3}$</p>

    <p><strong>Step 1: Critical Angle $i_c$:</strong><br>
    Light emerges only within a cone of half-angle equal to the critical angle $i_c$:
    \\[
    \\sin i_c = \\frac{1}{\\mu} = \\frac{3}{4} = 0.75
    \\]
    \\[
    \\tan i_c = \\frac{\\sin i_c}{\\cos i_c} = \\frac{1/\\mu}{\\sqrt{1 - 1/\\mu^2}} = \\frac{1}{\\sqrt{\\mu^2 - 1}} = \\frac{1}{\\sqrt{(4/3)^2 - 1}} = \\frac{1}{\\sqrt{7/9}} = \\frac{3}{\\sqrt{7}}
    \\]</p>

    <p><strong>Step 2: Radius of Circular Patch $r$:</strong><br>
    \\[
    r = d \\tan i_c = \\frac{d}{\\sqrt{\\mu^2 - 1}} = \\frac{0.80 \\times 3}{\\sqrt{7}} = \\frac{2.4}{2.6458} \\approx 0.907 \\text{ m}
    \\]</p>

    <p><strong>Step 3: Area of Circular Surface $A$:</strong><br>
    \\[
    A = \\pi r^2 = \\frac{\\pi d^2}{\\mu^2 - 1} = \\frac{\\pi \\times (0.80)^2}{(4/3)^2 - 1} = \\frac{0.64\\pi}{7/9} = \\frac{5.76\\pi}{7} \\approx 2.585 \\text{ m}^2 \\approx 2.6 \\text{ m}^2
    \\]</p>`,
    "3 Marks",
    [
      ["Critical angle relation $\\sin i_c = 1/\\mu$", "1 Mark"],
      ["Radius formula $r = d / \\sqrt{\\mu^2 - 1}$", "1 Mark"],
      ["Area calculation $A \\approx 2.6\\text{ m}^2$", "1 Mark"]
    ]
  ),

  // 9.6
  createQCard(
    "c12p-ch9-q6",
    "Q 9.6",
    "Exercise 9.6",
    `A prism is made of glass of unknown refractive index. A parallel beam of light is incident on a face of the prism. The angle of minimum deviation is measured to be $40^\\circ$. What is the refractive index of the material of the prism? The refracting angle of the prism is $60^\\circ$. If the prism is placed in water ($\\mu_w = 1.33$), predict the new angle of minimum deviation.`,
    `<p><strong>Given:</strong><br>
    Prism angle $A = 60^\\circ$<br>
    Angle of minimum deviation in air $D_m = 40^\\circ$</p>

    <p><strong>Part 1: Refractive Index in Air $\\mu$:</strong><br>
    \\[
    \\mu = \\frac{\\sin\\left(\\frac{A + D_m}{2}\\right)}{\\sin\\left(\\frac{A}{2}\\right)} = \\frac{\\sin\\left(\\frac{60^\\circ + 40^\\circ}{2}\\right)}{\\sin 30^\\circ} = \\frac{\\sin 50^\\circ}{0.5} = \\frac{0.7660}{0.5} = 1.532
    \\]</p>

    <p><strong>Part 2: In Water ($\\mu_w = 1.333$):</strong><br>
    Relative refractive index:
    \\[
    \\mu_{rel} = \\frac{\\mu}{\\mu_w} = \\frac{1.532}{1.333} \\approx 1.149
    \\]
    \\[
    \\mu_{rel} = \\frac{\\sin\\left(\\frac{A + D_m'}{2}\\right)}{\\sin(A/2)} \\implies \\sin\\left(\\frac{60^\\circ + D_m'}{2}\\right) = 1.149 \\times \\sin 30^\\circ = 1.149 \\times 0.5 = 0.5746
    \\]
    \\[
    \\frac{60^\\circ + D_m'}{2} = \\arcsin(0.5746) \\approx 35.07^\\circ
    \\]
    \\[
    60^\\circ + D_m' = 70.14^\\circ \\implies D_m' \\approx 10.14^\\circ \\approx 10.1^\\circ
    \\]</p>`,
    "3 Marks",
    [
      ["Formula $\\mu = \\sin((A+D_m)/2)/\\sin(A/2)$ and evaluation $\\mu = 1.532$", "1.5 Marks"],
      ["Calculation in water yielding $D_m' \\approx 10.1^\\circ$", "1.5 Marks"]
    ]
  ),

  // 9.7
  createQCard(
    "c12p-ch9-q7",
    "Q 9.7",
    "Exercise 9.7",
    `Double-convex lenses are to be manufactured from a glass of refractive index $1.55$, with both faces of the same radius of curvature. What is the radius of curvature required if the focal length is to be $20 \\text{ cm}$?`,
    `<p><strong>Given:</strong><br>
    Refractive index $\\mu = 1.55$<br>
    Focal length $f = +20 \\text{ cm}$<br>
    Radii of curvature: $R_1 = +R$, $R_2 = -R$ (equi-convex lens)</p>

    <p><strong>Lens Maker’s Formula:</strong><br>
    \\[
    \\frac{1}{f} = (\\mu - 1) \\left( \\frac{1}{R_1} - \\frac{1}{R_2} \\right) = (\\mu - 1) \\left( \\frac{1}{R} - \\left(-\\frac{1}{R}\\right) \\right) = (\\mu - 1) \\frac{2}{R}
    \\]</p>

    <p><strong>Calculation:</strong><br>
    \\[
    \\frac{1}{20} = (1.55 - 1) \\frac{2}{R} = 0.55 \\times \\frac{2}{R} = \\frac{1.10}{R}
    \\]
    \\[
    R = 1.10 \\times 20 = 22.0 \\text{ cm}
    \\]
    <p><strong>Result:</strong> The required radius of curvature is <strong>$22 \\text{ cm}$</strong>.</p>`,
    "2 Marks",
    [
      ["Lens maker's formula with sign convention", "1 Mark"],
      ["Calculation $R = 22\\text{ cm}$", "1 Mark"]
    ]
  ),

  // 9.8
  createQCard(
    "c12p-ch9-q8",
    "Q 9.8",
    "Exercise 9.8",
    `A beam of light converges at a point $P$. Now a lens is placed in the path of the convergent beam $12 \\text{ cm}$ from $P$. At what point does the beam converge if the lens is:<br>
    <strong>(a)</strong> a convex lens of focal length $20 \\text{ cm}$,<br>
    <strong>(b)</strong> a concave lens of focal length $16 \\text{ cm}$?`,
    `<p><strong>Concept:</strong> Point $P$ acts as a <strong>virtual object</strong> for the lens, so $u = +12 \\text{ cm}$.</p>

    <p><strong>(a) Convex Lens ($f = +20 \\text{ cm}$):</strong><br>
    \\[
    \\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{v} = \\frac{1}{f} + \\frac{1}{u} = \\frac{1}{20} + \\frac{1}{12} = \\frac{3 + 5}{60} = \\frac{8}{60} = \\frac{2}{15}
    \\]
    \\[
    v = +\\frac{15}{2} = +7.5 \\text{ cm}
    \\]
    The beam converges at a real point <strong>$7.5 \\text{ cm}$ to the right of the convex lens</strong> (closer to lens than $P$).</p>

    <p><strong>(b) Concave Lens ($f = -16 \\text{ cm}$):</strong><br>
    \\[
    \\frac{1}{v} = \\frac{1}{f} + \\frac{1}{u} = -\\frac{1}{16} + \\frac{1}{12} = \\frac{-3 + 4}{48} = +\\frac{1}{48}
    \\]
    \\[
    v = +48 \\text{ cm}
    \\]
    The beam converges at a real point <strong>$48 \\text{ cm}$ to the right of the concave lens</strong>.</p>`,
    "3 Marks",
    [
      ["Identification of virtual object $u = +12\\text{ cm}$", "1 Mark"],
      ["Calculation for convex lens $v = +7.5\\text{ cm}$", "1 Mark"],
      ["Calculation for concave lens $v = +48\\text{ cm}$", "1 Mark"]
    ]
  ),

  // 9.9
  createQCard(
    "c12p-ch9-q9",
    "Q 9.9",
    "Exercise 9.9",
    `An object of size $3.0 \\text{ cm}$ is placed $14 \\text{ cm}$ in front of a concave lens of focal length $21 \\text{ cm}$. Describe the image produced by the lens. What happens if the object is moved further away from the lens?`,
    `<p><strong>Given:</strong><br>
    Height $h = +3.0 \\text{ cm}$, $u = -14 \\text{ cm}$, $f = -21 \\text{ cm}$</p>

    <p><strong>Step 1: Image Distance $v$:</strong><br>
    \\[
    \\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{v} = \\frac{1}{f} + \\frac{1}{u} = -\\frac{1}{21} + \\left(-\\frac{1}{14}\\right) = -\\frac{2 + 3}{42} = -\\frac{5}{42}
    \\]
    \\[
    v = -\\frac{42}{5} = -8.4 \\text{ cm}
    \\]
    The image is virtual and located <strong>$8.4 \\text{ cm}$ in front of the lens</strong> on the same side as the object.</p>

    <p><strong>Step 2: Magnification and Image Height:</strong><br>
    \\[
    m = \\frac{v}{u} = \\frac{-8.4}{-14} = +0.60
    \\]
    \\[
    h' = m h = 0.60 \\times 3.0 = +1.8 \\text{ cm}
    \\]
    The image is <strong>virtual, erect, diminished ($1.8 \\text{ cm}$ high)</strong>.</p>

    <p><strong>Effect of Moving Object Further Away:</strong><br>
    As $u \\to -\\infty$, $v \\to f = -21 \\text{ cm}$ and $m \\to 0$. The image shifts towards the focus and diminishes progressively in size, but never moves beyond the focal point.</p>`,
    "3 Marks",
    [
      ["Calculation of $v = -8.4\\text{ cm}$", "1 Mark"],
      ["Magnification $m = 0.6$ and height $h' = 1.8\\text{ cm}$", "1 Mark"],
      ["Behavior as object moves further away", "1 Mark"]
    ]
  ),

  // 9.10
  createQCard(
    "c12p-ch9-q10",
    "Q 9.10",
    "Exercise 9.10",
    `What is the focal length of a convex lens of focal length $30 \\text{ cm}$ in contact with a concave lens of focal length $20 \\text{ cm}$? Is the system a converging or a diverging lens? Ignore thickness of the lenses.`,
    `<p><strong>Given:</strong><br>
    $f_1 = +30 \\text{ cm} = +0.30 \\text{ m}$ (convex)<br>
    $f_2 = -20 \\text{ cm} = -0.20 \\text{ m}$ (concave)</p>

    <p><strong>Combination of Thin Lenses in Contact:</strong><br>
    \\[
    \\frac{1}{F} = \\frac{1}{f_1} + \\frac{1}{f_2} = \\frac{1}{30} - \\frac{1}{20} = \\frac{2 - 3}{60} = -\\frac{1}{60}
    \\]
    \\[
    F = -60 \\text{ cm}
    \\]
    Total optical power:
    \\[
    P = \\frac{100}{F (\\text{cm})} = -\\frac{100}{60} \\approx -1.67 \\text{ D}
    \\]
    <p><strong>Nature:</strong> Since the effective focal length is negative ($F = -60 \\text{ cm}$), the combination behaves as a <strong>diverging lens system</strong>.</p>`,
    "2 Marks",
    [
      ["Formula $\\frac{1}{F} = \\frac{1}{f_1} + \\frac{1}{f_2}$ and evaluation $F = -60\\text{ cm}$", "1 Mark"],
      ["Correct identification as a diverging system", "1 Mark"]
    ]
  ),

  // 9.11
  createQCard(
    "c12p-ch9-q11",
    "Q 9.11",
    "Exercise 9.11",
    `A compound microscope consists of an objective lens of focal length $2.0 \\text{ cm}$ and an eyepiece of focal length $6.25 \\text{ cm}$ separated by a distance of $15 \\text{ cm}$. How far from the objective should an object be placed in order to obtain the final image at:<br>
    <strong>(a)</strong> the least distance of distinct vision ($25 \\text{ cm}$), and<br>
    <strong>(b)</strong> at infinity?<br>
    What is the magnifying power of the microscope in each case?`,
    `<p><strong>Given:</strong><br>
    $f_o = 2.0 \\text{ cm}$, $f_e = 6.25 \\text{ cm}$, Lens separation $L = 15 \\text{ cm}$, $D = 25 \\text{ cm}$</p>

    <p><strong>(a) Final image at near point ($v_e = -25 \\text{ cm}$):</strong><br>
    1. For eyepiece:
    \\[
    \\frac{1}{v_e} - \\frac{1}{u_e} = \\frac{1}{f_e} \\implies \\frac{1}{u_e} = -\\frac{1}{25} - \\frac{1}{6.25} = -\\frac{1}{25} - \\frac{4}{25} = -\\frac{5}{25} = -\\frac{1}{5} \\implies u_e = -5.0 \\text{ cm}
    \\]
    2. Since $L = v_o + |u_e| = 15 \\text{ cm} \\implies v_o = 15 - 5 = +10.0 \\text{ cm}$.<br>
    3. For objective:
    \\[
    \\frac{1}{v_o} - \\frac{1}{u_o} = \\frac{1}{f_o} \\implies \\frac{1}{u_o} = \\frac{1}{10} - \\frac{1}{2} = \\frac{1 - 5}{10} = -\\frac{4}{10} = -\\frac{2}{5} \\implies u_o = -2.5 \\text{ cm}
    \\]
    4. Magnifying power:
    \\[
    m = m_o \\times m_e = \\left(-\\frac{v_o}{|u_o|}\\right) \\left(1 + \\frac{D}{f_e}\\right) = \\left(-\\frac{10}{2.5}\\right) \\left(1 + \\frac{25}{6.25}\\right) = (-4) \\times (1 + 4) = -20
    \\]</p>

    <p><strong>(b) Final image at infinity ($v_e = \\infty$):</strong><br>
    1. Here $|u_e| = f_e = 6.25 \\text{ cm}$.<br>
    2. $v_o = L - f_e = 15 - 6.25 = +8.75 \\text{ cm}$.<br>
    3. For objective:
    \\[
    \\frac{1}{u_o} = \\frac{1}{v_o} - \\frac{1}{f_o} = \\frac{1}{8.75} - \\frac{1}{2} = \\frac{2 - 8.75}{17.5} = -\\frac{6.75}{17.5} \\implies u_o \\approx -2.59 \\text{ cm}
    \\]
    4. Magnifying power:
    \\[
    m = \\left(-\\frac{v_o}{|u_o|}\\right) \\left(\\frac{D}{f_e}\\right) = \\left(-\\frac{8.75}{2.59}\\right) \\left(\\frac{25}{6.25}\\right) = (-3.38) \\times 4 \\approx -13.5
    \\]</p>`,
    "5 Marks",
    [
      ["Calculations for near point: $u_o = -2.5\\text{ cm}, m = -20$", "2.5 Marks"],
      ["Calculations for normal adjustment (infinity): $u_o = -2.59\\text{ cm}, m = -13.5$", "2.5 Marks"]
    ]
  ),

  // 9.12
  createQCard(
    "c12p-ch9-q12",
    "Q 9.12",
    "Exercise 9.12",
    `A person with a normal near point ($25 \\text{ cm}$) using a compound microscope with objective of focal length $8.0 \\text{ mm}$ and an eyepiece of focal length $2.5 \\text{ cm}$ can bring an object placed at $9.0 \\text{ mm}$ from the objective in sharp focus. What is the separation between the two lenses? Calculate the magnifying power of the microscope.`,
    `<p><strong>Given:</strong><br>
    $f_o = 8.0 \\text{ mm} = 0.8 \\text{ cm}$<br>
    $f_e = 2.5 \\text{ cm}$<br>
    $u_o = -9.0 \\text{ mm} = -0.9 \\text{ cm}$<br>
    Final image at near point $v_e = -25 \\text{ cm}$</p>

    <p><strong>Step 1: Image distance for Objective $v_o$:</strong><br>
    \\[
    \\frac{1}{v_o} - \\frac{1}{u_o} = \\frac{1}{f_o} \\implies \\frac{1}{v_o} = \\frac{1}{0.8} + \\frac{1}{-0.9} = \\frac{10}{8} - \\frac{10}{9} = \\frac{90 - 80}{72} = \\frac{10}{72}
    \\]
    \\[
    v_o = +7.2 \\text{ cm}
    \\]</p>

    <p><strong>Step 2: Object distance for Eyepiece $u_e$:</strong><br>
    \\[
    \\frac{1}{u_e} = \\frac{1}{v_e} - \\frac{1}{f_e} = -\\frac{1}{25} - \\frac{1}{2.5} = -\\frac{1}{25} - \\frac{10}{25} = -\\frac{11}{25} \\implies u_e = -\\frac{25}{11} \\approx -2.27 \\text{ cm}
    \\]</p>

    <p><strong>Step 3: Lens Separation and Magnifying Power:</strong><br>
    Separation:
    \\[
    L = v_o + |u_e| = 7.2 + 2.27 = 9.47 \\text{ cm}
    \\]
    Magnifying power:
    \\[
    m = m_o \\times m_e = \\left(-\\frac{v_o}{|u_o|}\\right) \\left(1 + \\frac{D}{f_e}\\right) = \\left(-\\frac{7.2}{0.9}\\right) \\left(1 + \\frac{25}{2.5}\\right) = (-8) \\times (1 + 10) = -88
    \\]</p>`,
    "3 Marks",
    [
      ["Calculation of $v_o = 7.2\\text{ cm}$ and $u_e = 2.27\\text{ cm}$", "1.5 Marks"],
      ["Separation $L = 9.47\\text{ cm}$ and magnification $m = -88$", "1.5 Marks"]
    ]
  ),

  // 9.13
  createQCard(
    "c12p-ch9-q13",
    "Q 9.13",
    "Exercise 9.13",
    `A small telescope has an objective lens of focal length $144 \\text{ cm}$ and an eyepiece of focal length $6.0 \\text{ cm}$. What is the magnifying power of the telescope? What is the separation between the objective and the eyepiece?`,
    `<p><strong>Given:</strong><br>
    $f_o = 144 \\text{ cm}$, $f_e = 6.0 \\text{ cm}$ (in normal adjustment)</p>

    <p><strong>1. Magnifying Power:</strong><br>
    \\[
    m = -\\frac{f_o}{f_e} = -\\frac{144}{6.0} = -24
    \\]
    (The negative sign indicates an inverted final image).</p>

    <p><strong>2. Separation Between Objective and Eyepiece (Length of Tube):</strong><br>
    \\[
    L = f_o + f_e = 144 + 6 = 150 \\text{ cm} = 1.50 \\text{ m}
    \\]</p>`,
    "2 Marks",
    [
      ["Formula and calculation of $m = -24$", "1 Mark"],
      ["Formula and calculation of $L = 150\\text{ cm}$", "1 Mark"]
    ]
  ),

  // 9.14
  createQCard(
    "c12p-ch9-q14",
    "Q 9.14",
    "Exercise 9.14",
    `<strong>(a)</strong> A giant refracting telescope at an observatory has an objective lens of focal length $15 \\text{ m}$. If an eyepiece of focal length $1.0 \\text{ cm}$ is used, what is the angular magnification of the telescope?<br>
    <strong>(b)</strong> If this telescope is used to view the moon, what is the diameter of the image of the moon formed by the objective lens? The diameter of the moon is $3.48 \\times 10^6 \\text{ m}$, and the radius of lunar orbit is $3.8 \\times 10^8 \\text{ m}$.`,
    `<p><strong>Given:</strong><br>
    $f_o = 15 \\text{ m} = 1500 \\text{ cm}$, $f_e = 1.0 \\text{ cm}$</p>

    <p><strong>(a) Angular Magnification:</strong><br>
    \\[
    m = -\\frac{f_o}{f_e} = -\\frac{1500 \\text{ cm}}{1.0 \\text{ cm}} = -1500
    \\]</p>

    <p><strong>(b) Image Diameter of the Moon:</strong><br>
    Diameter of moon $d = 3.48 \\times 10^6 \\text{ m}$, Distance to moon $r = 3.8 \\times 10^8 \\text{ m}$.<br>
    Angle subtended by the moon at the objective:
    \\[
    \\theta = \\frac{d}{r} = \\frac{3.48 \\times 10^6 \\text{ m}}{3.8 \\times 10^8 \\text{ m}} \\approx 9.158 \\times 10^{-3} \\text{ rad}
    \\]
    The objective lens forms an image at its focal plane ($v = f_o = 15 \\text{ m}$):
    \\[
    d' = f_o \\theta = 15 \\text{ m} \\times (9.158 \\times 10^{-3} \\text{ rad}) \\approx 0.1374 \\text{ m} = 13.74 \\text{ cm}
    \\]</p>`,
    "3 Marks",
    [
      ["Angular magnification $m = 1500$", "1 Mark"],
      ["Subtended angle $\\theta = 9.16 \\times 10^{-3}\\text{ rad}$", "1 Mark"],
      ["Diameter of image $d' = 13.74\\text{ cm}$", "1 Mark"]
    ]
  ),

  // 9.15
  createQCard(
    "c12p-ch9-q15",
    "Q 9.15",
    "Exercise 9.15",
    `Use the mirror equation to deduce that:<br>
    <strong>(a)</strong> An object placed between $f$ and $2f$ of a concave mirror produces a real image beyond $2f$.<br>
    <strong>(b)</strong> A convex mirror always produces a virtual image independent of the location of the object.<br>
    <strong>(c)</strong> The virtual image produced by a convex mirror is always diminished in size and is located between the focus and the pole.<br>
    <strong>(d)</strong> An object placed between the pole and focus of a concave mirror produces a virtual and enlarged image.`,
    `<p><strong>Mirror Equation:</strong> $\\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u}$</p>
    <p><strong>(a) Object between $f$ and $2f$ of concave mirror ($f < 0$):</strong><br>
    Here $2f < u < f < 0 \\implies \\frac{1}{2f} > \\frac{1}{u} > \\frac{1}{f}$.<br>
    Subtracting $\\frac{1}{f}$:
    \\[
    \\frac{1}{2f} - \\frac{1}{f} > \\frac{1}{u} - \\frac{1}{f} > 0 \\implies -\\frac{1}{2|f|} > -\\frac{1}{v} > 0 \\implies \\frac{1}{v} < \\frac{1}{2f}
    \\]
    Since $f < 0$, this means $v < 2f$ (i.e. $v$ is negative and $|v| > 2|f|$). Thus, a real image is formed beyond $2f$.</p>

    <p><strong>(b) Convex mirror ($f > 0$) always virtual:</strong><br>
    For a real object, $u < 0$, so $-\\frac{1}{u} > 0$.<br>
    \\[
    \\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u} = \\frac{1}{f} + \\frac{1}{|u|} > 0
    \\]
    Since $\\frac{1}{v} > 0$, $v$ is strictly positive for all values of $u$. A positive $v$ means the image is always formed behind the mirror, hence always <strong>virtual</strong>.</p>

    <p><strong>(c) Convex mirror image diminished and between $P$ and $F$:</strong><br>
    Since $\\frac{1}{v} = \\frac{1}{f} + \\frac{1}{|u|} > \\frac{1}{f} \\implies v < f$. Since $v > 0$, we have $0 < v < f$ (located between pole and focus).<br>
    Magnification $m = -\\frac{v}{u} = \\frac{v}{|u|}$. Since $v < |u|$, $m < 1$, the image is strictly diminished.</p>

    <p><strong>(d) Object between $P$ and $F$ of concave mirror ($f < u < 0$):</strong><br>
    $|u| < |f| \\implies \\frac{1}{|u|} > \\frac{1}{|f|} \\implies -\\frac{1}{u} > -\\frac{1}{f} \\implies \\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u} > 0$.<br>
    Hence $v > 0$, forming a <strong>virtual</strong> image. Also $|v| > |u|$, so $m = \\frac{v}{|u|} > 1$, making the image <strong>enlarged</strong>.</p>`,
    "4 Marks",
    [
      ["Rigorous deduction for case (a)", "1 Mark"],
      ["Rigorous deduction for case (b)", "1 Mark"],
      ["Rigorous deduction for case (c)", "1 Mark"],
      ["Rigorous deduction for case (d)", "1 Mark"]
    ]
  ),

  // 9.16
  createQCard(
    "c12p-ch9-q16",
    "Q 9.16",
    "Exercise 9.16",
    `A small pin fixed on a table top is viewed from above from a distance of $50 \\text{ cm}$. By what distance would the pin appear to be raised if it is viewed from the same point through a $15 \\text{ cm}$ thick glass slab held parallel to the table? Refractive index of glass $= 1.5$. Does the answer depend on the location of the slab?`,
    `<p><strong>Given:</strong><br>
    Thickness of glass slab $t = 15 \\text{ cm}$<br>
    Refractive index of glass $\\mu = 1.5 = \\frac{3}{2}$</p>

    <p><strong>Normal Shift Formula:</strong><br>
    The apparent upward displacement (normal shift) produced by a transparent slab of thickness $t$ is:
    \\[
    \\Delta x = t \\left( 1 - \\frac{1}{\\mu} \\right)
    \\]
    \\[
    \\Delta x = 15 \\left( 1 - \\frac{1}{1.5} \\right) = 15 \\left( 1 - \\frac{2}{3} \\right) = 15 \\times \\frac{1}{3} = 5.0 \\text{ cm}
    \\]</p>

    <p><strong>Independence of Slab Position:</strong><br>
    <strong>No</strong>, the answer is completely independent of where the slab is placed between the eye and the pin, provided the viewing is near-normal. The shift depends solely on the thickness $t$ and refractive index $\\mu$ of the slab.</p>`,
    "2 Marks",
    [
      ["Formula $\\Delta x = t(1 - 1/\\mu)$ and calculation $\\Delta x = 5.0\\text{ cm}$", "1.5 Marks"],
      ["Correct justification regarding independence of slab position", "0.5 Mark"]
    ]
  ),

  // 9.17
  createQCard(
    "c12p-ch9-q17",
    "Q 9.17",
    "Exercise 9.17",
    `<strong>(a)</strong> A cross-section of a ‘light pipe’ made of a glass fibre of refractive index $\\mu_1 = 1.68$ has an outer cladding of refractive index $\\mu_2 = 1.44$. What is the range of the angles of the incident rays with the axis of the pipe for which total internal reflections inside the pipe take place?<br>
    <strong>(b)</strong> What is the answer if there is no outer covering of the pipe (pipe in air)?`,
    `<p><strong>(a) With Cladding ($\\mu_1 = 1.68, \\mu_2 = 1.44$):</strong><br>
    Critical angle at the core-cladding boundary:
    \\[
    \\sin i_c = \\frac{\\mu_2}{\\mu_1} = \\frac{1.44}{1.68} = \\frac{6}{7} \\approx 0.8571 \\implies i_c \\approx 59^\\circ
    \\]
    For total internal reflection at the walls, the angle of refraction $r$ at the entrance face must satisfy:
    \\[
    i' = 90^\\circ - r \\ge i_c \\implies r \\le 90^\\circ - i_c = 90^\\circ - 59^\\circ = 31^\\circ
    \\]
    Using Snell’s law at the air-core entrance ($i_{max}$):
    \\[
    \\sin i_{max} = \\mu_1 \\sin r_{max} = \\mu_1 \\cos i_c = \\mu_1 \\sqrt{1 - \\sin^2 i_c} = \\sqrt{\\mu_1^2 - \\mu_2^2}
    \\]
    \\[
    \\sin i_{max} = \\sqrt{(1.68)^2 - (1.44)^2} = \\sqrt{2.8224 - 2.0736} = \\sqrt{0.7488} \\approx 0.8653
    \\]
    \\[
    i_{max} = \\arcsin(0.8653) \\approx 60^\\circ
    \\]
    Thus, total internal reflection occurs for all rays incident at angles between <strong>$0^\\circ$ and $60^\\circ$</strong> with the axis.</p>

    <p><strong>(b) Without Cladding (in Air, $\\mu_2 = 1.0$):</strong><br>
    \\[
    \\sin i_c' = \\frac{1}{1.68} \\approx 0.5952 \\implies i_c' \\approx 36.5^\\circ
    \\]
    Then:
    \\[
    \\sin i_{max} = \\sqrt{\\mu_1^2 - 1} = \\sqrt{(1.68)^2 - 1} = \\sqrt{1.8224} \\approx 1.35 > 1
    \\]
    Since $\\sin i_{max} > 1$, all rays incident on the face from $0^\\circ$ to $90^\\circ$ undergo total internal reflection inside the pipe.</p>`,
    "3 Marks",
    [
      ["Formula for acceptance angle $\\sin i_{max} = \\sqrt{\\mu_1^2 - \\mu_2^2}$", "1 Mark"],
      ["Calculation of $i_{max} \\approx 60^\\circ$ for cladded fibre", "1 Mark"],
      ["Calculation showing $\\sin i > 1$ (all rays $0-90^\\circ$ guided) for uncladded fibre", "1 Mark"]
    ]
  ),

  // 9.18
  createQCard(
    "c12p-ch9-q18",
    "Q 9.18",
    "Exercise 9.18",
    `Answer the following conceptual questions:<br>
    <strong>(a)</strong> Plane and convex mirrors produce virtual images. Can they produce real images under some circumstances?<br>
    <strong>(b)</strong> A virtual image cannot be caught on a screen. Yet when we ‘see’ a virtual image, we are obviously bringing it on to the ‘screen’ (i.e., the retina) of our eye. Is there a contradiction?<br>
    <strong>(c)</strong> A diver underwater looks obliquely at a fisherman standing on the bank of a lake. Would the fisherman look taller or shorter to the diver than what he actually is?<br>
    <strong>(d)</strong> Does the apparent depth of a tank of water change if viewed obliquely? If so, does it increase or decrease?<br>
    <strong>(e)</strong> The refractive index of diamond is much greater than that of ordinary glass. Is this fact of some use to a diamond cutter?`,
    `<p><strong>(a) Real images from plane/convex mirrors:</strong><br>
    <strong>Yes.</strong> If a convergent beam of light is incident on a plane or convex mirror, the point of convergence serves as a <strong>virtual object</strong> behind the mirror. The reflected rays will converge to form a <strong>real image</strong> in front of the mirror.</p>

    <p><strong>(b) Seeing virtual images:</strong><br>
    <strong>No contradiction.</strong> When rays diverge from a virtual image, the convex lens of the human eye converges these diverging rays onto the retina, forming a <em>real image</em> on the retinal screen.</p>

    <p><strong>(c) Fisherman seen by diver:</strong><br>
    Light travels from a rarer medium (air) to a denser medium (water), bending towards the normal. To the diver, the rays appear to come from a higher position, making the fisherman look <strong>taller</strong> than his actual height.</p>

    <p><strong>(d) Apparent depth viewed obliquely:</strong><br>
    <strong>Yes</strong>, the apparent depth <strong>decreases</strong> further when viewed obliquely because rays at larger angles of incidence suffer greater deviation, making the bottom appear raised higher.</p>

    <p><strong>(e) Diamond cutter:</strong><br>
    <strong>Yes.</strong> Diamond has a very high refractive index ($\\mu \\approx 2.42$), giving it an extremely small critical angle ($i_c \\approx 24.4^\\circ$). A skilled diamond cutter shapes the facets so that light entering the stone undergoes multiple total internal reflections before exiting, giving diamond its brilliant sparkle.</p>`,
    "3 Marks",
    [
      ["Explanation of virtual objects forming real images", "0.5 Mark"],
      ["Resolution of eye lens retina image formation", "0.5 Mark"],
      ["Diver perception of taller height & oblique depth decrease", "1 Mark"],
      ["Diamond small critical angle ($24.4^\\circ$) and facet cut sparkle", "1 Mark"]
    ]
  ),

  // 9.19
  createQCard(
    "c12p-ch9-q19",
    "Q 9.19",
    "Exercise 9.19",
    `The image of a small bulb fixed on the wall of a room is to be obtained on the opposite wall $3.0 \\text{ m}$ away by means of a large convex lens. What is the maximum possible focal length of the lens required for the purpose?`,
    `<p><strong>Condition for Real Image on Screen:</strong><br>
    Let the distance between object (bulb) and screen (opposite wall) be $D = 3.0 \\text{ m}$.<br>
    If $u$ is the object distance and $v$ is the image distance, then for a real image:
    \\[
    |u| + v = D \\implies v = D - |u|
    \\]
    Using lens formula $\\frac{1}{v} - \\frac{1}{-|u|} = \\frac{1}{f}$:
    \\[
    \\frac{1}{D - |u|} + \\frac{1}{|u|} = \\frac{1}{f} \\implies \\frac{D}{|u|(D - |u|)} = \\frac{1}{f}
    \\]
    \\[
    |u|^2 - D|u| + Df = 0
    \\]
    For real roots of $|u|$, the discriminant must be non-negative:
    \\[
    D^2 - 4Df \\ge 0 \\implies D \\ge 4f \\implies f \\le \\frac{D}{4}
    \\]</p>

    <p><strong>Calculation:</strong><br>
    \\[
    f_{max} = \\frac{D}{4} = \\frac{3.0 \\text{ m}}{4} = 0.75 \\text{ m} = 75 \\text{ cm}
    \\]
    <p><strong>Result:</strong> The maximum allowable focal length of the lens is <strong>$0.75 \\text{ m}$ ($75 \\text{ cm}$)</strong>.</p>`,
    "2 Marks",
    [
      ["Derivation of minimum distance condition $D \\ge 4f$", "1 Mark"],
      ["Calculation of $f_{max} = 0.75\\text{ m}$", "1 Mark"]
    ]
  ),

  // 9.20
  createQCard(
    "c12p-ch9-q20",
    "Q 9.20",
    "Exercise 9.20",
    `A screen is placed $90 \\text{ cm}$ from an object. The image of the object on the screen is formed by a convex lens at two different locations, separated by $20 \\text{ cm}$. Determine the focal length of the lens (Displacement Method).`,
    `<p><strong>Given:</strong><br>
    Distance between object and screen $D = 90 \\text{ cm}$<br>
    Separation between two positions of the lens $d = 20 \\text{ cm}$</p>

    <p><strong>Displacement Method Formula:</strong><br>
    By the conjugate foci principle, the two positions of the lens give sharp images on the screen if $D > 4f$.<br>
    The focal length of the lens is given by:
    \\[
    f = \\frac{D^2 - d^2}{4D}
    \\]</p>

    <p><strong>Calculation:</strong><br>
    \\[
    f = \\frac{(90)^2 - (20)^2}{4 \\times 90} = \\frac{8100 - 400}{360} = \\frac{7700}{360} = \\frac{770}{36} \\approx 21.39 \\text{ cm}
    \\]
    <p><strong>Result:</strong> The focal length of the lens is approximately <strong>$21.4 \\text{ cm}$</strong>.</p>`,
    "2 Marks",
    [
      ["Displacement formula $f = \\frac{D^2 - d^2}{4D}$", "1 Mark"],
      ["Evaluation $f = 21.39\\text{ cm}$", "1 Mark"]
    ]
  ),

  // 9.21
  createQCard(
    "c12p-ch9-q21",
    "Q 9.21",
    "Exercise 9.21",
    `<strong>(a)</strong> Determine the ‘effective focal length’ of the combination of the two lenses in Exercise 9.10 ($f_1 = +30 \\text{ cm}, f_2 = -20 \\text{ cm}$), if they are placed $8.0 \\text{ cm}$ apart with their principal axes coincident. Does the answer depend on which side a parallel beam is incident?<br>
    <strong>(b)</strong> An object $1.5 \\text{ cm}$ in size is placed on the side of the convex lens at $40 \\text{ cm}$. Determine the magnification and size of the image.`,
    `<p><strong>(a) Lenses Separated by Distance $d = 8.0 \\text{ cm}$:</strong><br>
    • <strong>Case 1: Parallel beam incident on convex lens 1 ($f_1 = +30 \\text{ cm}$):</strong><br>
    Image formed by lens 1 at $v_1 = +30 \\text{ cm}$.<br>
    For concave lens 2 ($f_2 = -20 \\text{ cm}$), this image acts as a virtual object at $u_2 = +(30 - 8) = +22 \\text{ cm}$.<br>
    \\[
    \\frac{1}{v_2} = \\frac{1}{f_2} + \\frac{1}{u_2} = -\\frac{1}{20} + \\frac{1}{22} = \\frac{-11 + 10}{220} = -\\frac{1}{220} \\implies v_2 = -220 \\text{ cm}
    \\]
    The emergent beam diverges from a point $220 \\text{ cm}$ to the left of lens 2 ($212 \\text{ cm}$ to left of lens 1).<br>
    • <strong>Case 2: Parallel beam incident on concave lens 2 ($f_2 = -20 \\text{ cm}$):</strong><br>
    $v_2' = -20 \\text{ cm}$. For convex lens 1, $u_1' = -(20 + 8) = -28 \\text{ cm}$.<br>
    \\[
    \\frac{1}{v_1'} = \\frac{1}{30} - \\frac{1}{28} = \\frac{14 - 15}{420} = -\\frac{1}{420} \\implies v_1' = -420 \\text{ cm}
    \\]
    The emergent beam diverges from a point $420 \\text{ cm}$ to the right of lens 1.<br>
    <em>Conclusion:</em> The position of the focal point depends on which side light enters; the notion of a single effective focal length is not uniquely meaningful for separated lenses.</p>

    <p><strong>(b) Object $1.5 \\text{ cm}$ at $u_1 = -40 \\text{ cm}$ from convex lens:</strong><br>
    1. For lens 1:
    \\[
    \\frac{1}{v_1} = \\frac{1}{30} + \\frac{1}{-40} = \\frac{4 - 3}{120} = \\frac{1}{120} \\implies v_1 = +120 \\text{ cm}
    \\]
    Magnification $m_1 = \\frac{v_1}{u_1} = \\frac{120}{-40} = -3$.<br>
    2. For lens 2 ($d = 8 \\text{ cm}$): $u_2 = +(120 - 8) = +112 \\text{ cm}$.
    \\[
    \\frac{1}{v_2} = -\\frac{1}{20} + \\frac{1}{112} = \\frac{-28 + 5}{560} = -\\frac{23}{560} \\implies v_2 = -\\frac{560}{23} \\approx -24.35 \\text{ cm}
    \\]
    Magnification $m_2 = \\frac{v_2}{u_2} = \\frac{-560/23}{112} = -\\frac{5}{23}$.<br>
    3. Net magnification:
    \\[
    m = m_1 \\times m_2 = (-3) \\times \\left(-\\frac{5}{23}\\right) = +\\frac{15}{23} \\approx +0.652
    \\]
    Image size: $h' = m h = 0.652 \\times 1.5 \\text{ cm} \\approx 0.98 \\text{ cm}$ (erect, virtual).</p>`,
    "5 Marks",
    [
      ["Ray tracing and analysis for parallel beam from both sides", "2 Marks"],
      ["Two-lens refraction calculations yielding $v_1 = 120\\text{ cm}$ and $v_2 = -24.35\\text{ cm}$", "1.5 Marks"],
      ["Net magnification $m = +0.65$ and image height $h' = 0.98\\text{ cm}$", "1.5 Marks"]
    ]
  ),

  // 9.22
  createQCard(
    "c12p-ch9-q22",
    "Q 9.22",
    "Exercise 9.22",
    `At what angle should a ray of light be incident on the face of a prism of refracting angle $60^\\circ$ so that it just suffers total internal reflection at the other face? The refractive index of the material of the prism is $1.524$.`,
    `<p><strong>Given:</strong><br>
    Prism angle $A = 60^\\circ$<br>
    Refractive index $\\mu = 1.524$</p>

    <p><strong>Step 1: Critical Angle $i_c$ at the second face:</strong><br>
    For the ray to just suffer total internal reflection at the second face, the angle of incidence at that face must equal the critical angle:
    \\[
    \\sin r_2 = \\frac{1}{\\mu} = \\frac{1}{1.524} \\approx 0.6562 \\implies r_2 = \\arcsin(0.6562) \\approx 41.0^\\circ
    \\]</p>

    <p><strong>Step 2: Angle of Refraction at First Face $r_1$:</strong><br>
    Since $r_1 + r_2 = A$:
    \\[
    r_1 = A - r_2 = 60^\\circ - 41.0^\\circ = 19.0^\\circ
    \\]</p>

    <p><strong>Step 3: Angle of Incidence at First Face $i_1$:</strong><br>
    Applying Snell’s law at the first face:
    \\[
    \\sin i_1 = \\mu \\sin r_1 = 1.524 \\times \\sin 19.0^\\circ = 1.524 \\times 0.3256 \\approx 0.4962
    \\]
    \\[
    i_1 = \\arcsin(0.4962) \\approx 29.75^\\circ \\approx 29.8^\\circ
    \\]</p>`,
    "3 Marks",
    [
      ["Calculation of critical angle $r_2 = 41.0^\\circ$", "1 Mark"],
      ["Calculation of $r_1 = 19.0^\\circ$", "1 Mark"],
      ["Snell's law at first face yielding $i_1 \\approx 29.8^\\circ$", "1 Mark"]
    ]
  ),

  // 9.23
  createQCard(
    "c12p-ch9-q23",
    "Q 9.23",
    "Exercise 9.23",
    `You are given prisms made of crown glass and flint glass with a wide variety of angles. Suggest a combination of prisms which will:<br>
    <strong>(a)</strong> deviate a pencil of white light without much dispersion (Achromatic combination),<br>
    <strong>(b)</strong> disperse (and displace) a pencil of white light without much deviation (Direct vision spectroscope).`,
    `<p><strong>Basic Principles of Prism Combinations:</strong><br>
    Let $A$ and $A'$ be the angles of crown and flint glass prisms, with refractive indices $\\mu, \\mu'$ and dispersive powers $\\omega, \\omega'$.</p>

    <p><strong>(a) Deviation without Dispersion (Achromatic Prism):</strong><br>
    • Two prisms are placed with their refracting angles in opposite orientations.<br>
    • The condition for zero angular dispersion is:
    \\[
    (\\mu_v - \\mu_r) A = (\\mu_v' - \\mu_r') A' \\implies \\frac{A'}{A} = -\\frac{\\mu_v - \\mu_r}{\\mu_v' - \\mu_r'}
    \\]
    • The net deviation is non-zero: $\\delta_{net} = (\\mu - 1)A - (\\mu' - 1)A' \\ne 0$.<br>
    • This combination deviates the beam without splitting it into colors (used in achromatic optical instruments).</p>

    <p><strong>(b) Dispersion without Deviation (Direct-Vision Spectroscope):</strong><br>
    • Prisms are placed in opposition such that the mean deviations cancel each other:
    \\[
    \\delta = (\\mu - 1) A = (\\mu' - 1) A' \\implies \\frac{A'}{A} = \\frac{\\mu - 1}{\\mu' - 1}
    \\]
    • The net dispersion is non-zero: $\\theta_{net} = (\\mu_v - \\mu_r) A - (\\mu_v' - \\mu_r') A' \\ne 0$.<br>
    • White light enters and emerges in the same general direction but is spread out into its constituent spectral colors.</p>`,
    "3 Marks",
    [
      ["Condition for deviation without dispersion (Achromatic prism)", "1.5 Marks"],
      ["Condition for dispersion without deviation (Direct vision prism)", "1.5 Marks"]
    ]
  ),

  // 9.24
  createQCard(
    "c12p-ch9-q24",
    "Q 9.24",
    "Exercise 9.24",
    `For a normal eye, the far point is at infinity and the near point of distinct vision is about $25 \\text{ cm}$ in front of the eye. The cornea of the eye provides a converging power of about $40 \\text{ dioptres}$, and the least converging power of the eye-lens behind the cornea is about $20 \\text{ dioptres}$. From this rough data estimate the range of accommodation of a normal eye.`,
    `<p><strong>Optical System of Normal Eye:</strong><br>
    Total power $P = P_{cornea} + P_{lens}$.<br>
    Distance between cornea-lens system and retina is approximately fixed at $v \\approx 2.5 \\text{ cm} = 0.025 \\text{ m}$.</p>

    <p><strong>1. Fully Relaxed Eye (Viewing at Infinity, $u = -\\infty$):</strong><br>
    \\[
    P_{min} = \\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u} = \\frac{1}{0.025 \\text{ m}} - 0 = 40 \\text{ D} + 20 \\text{ D} = 60 \\text{ D}
    \\]
    (Here least converging power of eye lens $= 20 \\text{ D}$).</p>

    <p><strong>2. Fully Accommodated Eye (Viewing at Near Point, $u = -25 \\text{ cm} = -0.25 \\text{ m}$):</strong><br>
    \\[
    P_{max} = \\frac{1}{v} - \\frac{1}{u} = \\frac{1}{0.025} - \\left(-\\frac{1}{0.25}\\right) = 40 \\text{ D} + 4 \\text{ D} = 64 \\text{ D}
    \\]
    Since cornea power is fixed at $40 \\text{ D}$, the eye-lens power at near point is:
    \\[
    P_{lens, max} = 64 \\text{ D} - 40 \\text{ D} = 24 \\text{ D}
    \\]</p>

    <p><strong>Range of Accommodation:</strong><br>
    The range of converging power of the eye-lens extends from <strong>$20 \\text{ D}$ to $24 \\text{ D}$</strong> (an accommodation range of approximately <strong>$4 \\text{ dioptres}$</strong>).</p>`,
    "2 Marks",
    [
      ["Calculation of minimum power $60\\text{ D}$ at infinity", "1 Mark"],
      ["Calculation of maximum power $64\\text{ D}$ and lens accommodation range $20\\text{ D} - 24\\text{ D}$", "1 Mark"]
    ]
  ),

  // 9.25
  createQCard(
    "c12p-ch9-q25",
    "Q 9.25",
    "Exercise 9.25",
    `Does short-sightedness (myopia) or long-sightedness (hypermetropia) imply necessarily that the eye has partially lost its ability of accommodation? If not, what might cause these defects of vision?`,
    `<p><strong>Answer:</strong> <strong>No</strong>, myopia and hypermetropia do not necessarily imply loss of the eye's accommodation power.</p>

    <p><strong>True Causes of Vision Defects:</strong><br>
    1. <strong>Myopia (Short-sightedness):</strong><br>
    • The eyeball may be elongated from front to back, or the cornea/lens system may have excessive curvature (too high optical power).<br>
    • Even when the ciliary muscles are fully relaxed, parallel rays from distant objects converge <em>in front of the retina</em>. The accommodation mechanism itself may be entirely normal for close objects.<br>
    2. <strong>Hypermetropia (Long-sightedness):</strong><br>
    • The eyeball is too short, or the optical system lacks sufficient converging power.<br>
    • Light rays from near objects converge <em>behind the retina</em> even under maximum accommodation.<br>
    3. <strong>Loss of Accommodation (Presbyopia):</strong><br>
    • The actual loss of accommodation occurs with aging due to weakening of ciliary muscles and hardening/diminishing elasticity of the crystalline lens, termed <strong>presbyopia</strong>.</p>`,
    "2 Marks",
    [
      ["Clear 'No' with anatomical causes (eyeball elongation / shortening)", "1 Mark"],
      ["Distinction from Presbyopia (loss of accommodation)", "1 Mark"]
    ]
  ),

  // 9.26
  createQCard(
    "c12p-ch9-q26",
    "Q 9.26",
    "Exercise 9.26",
    `A myopic person has been using spectacles of power $-1.0 \\text{ dioptre}$ for distant vision. During old age he also needs to use separate reading glasses of power $+2.0 \\text{ dioptres}$. Explain what may have happened.`,
    `<p><strong>Explanation:</strong><br>
    1. <strong>Young Age (Myopia):</strong><br>
    The person suffered from myopia, with a far point at:
    \\[
    f = \\frac{1}{P} = \\frac{1}{-1.0 \\text{ D}} = -1.0 \\text{ m} = -100 \\text{ cm}
    \\]
    Hence, without glasses, he could not see beyond $100 \\text{ cm}$. A concave lens of $-1.0 \\text{ D}$ restored his far point to infinity.</p>

    <p>2. <strong>Old Age (Presbyopia):</strong><br>
    With aging, the eye lens lost its elasticity (presbyopia), moving his natural near point further away.<br>
    To read comfortably at $u = -25 \\text{ cm}$ with reading glasses of $+2.0 \\text{ D}$ ($f = +50 \\text{ cm}$):
    \\[
    \\frac{1}{v} = \\frac{1}{f} + \\frac{1}{u} = \\frac{1}{50} - \\frac{1}{25} = -\\frac{1}{50} \\implies v = -50 \\text{ cm}
    \\]
    The reading glasses shift the object from $25 \\text{ cm}$ to his shifted near point of $50 \\text{ cm}$.<br>
    The person now has both <strong>myopia and presbyopia</strong>, requiring bifocal lenses.</p>`,
    "2 Marks",
    [
      ["Explanation of myopia correction with $-1.0\\text{ D}$", "1 Mark"],
      ["Explanation of presbyopic near point shift and $+2.0\\text{ D}$ reading glasses", "1 Mark"]
    ]
  ),

  // 9.27
  createQCard(
    "c12p-ch9-q27",
    "Q 9.27",
    "Exercise 9.27",
    `A person looking at a person wearing a pair of spectacles with concave lenses looks smaller than normal. Why?`,
    `<p><strong>Reason:</strong><br>
    • A concave lens is a diverging lens ($f < 0$).<br>
    • When an observer looks at the eyes/face of a wearer through concave spectacles, the concave lenses refract rays coming from the wearer's face, forming a <strong>virtual, erect, and diminished image</strong> located closer to the spectacles than the actual face ($m < 1$).<br>
    • Because the angle subtended by this diminished virtual image at the observer's eye is significantly smaller than the angle subtended by the actual face, the features of the wearer appear distinctly <strong>smaller</strong> than normal.</p>`,
    "1 Mark",
    [
      ["Concave lens forms a diminished virtual image reducing visual angle", "1 Mark"]
    ]
  ),

  // 9.28
  createQCard(
    "c12p-ch9-q28",
    "Q 9.28",
    "Exercise 9.28",
    `A person looking at a cloth with a pattern consisting of vertical and horizontal lines is able to see the vertical lines more distinctly than the horizontal lines. What is this defect due to? How is such a defect of vision corrected?`,
    `<p><strong>Defect: Astigmatism.</strong></p>
    <p><strong>Origin:</strong><br>
    • Astigmatism arises when the cornea (or the crystalline lens) of the eye is not perfectly spherical.<br>
    • It possesses different radii of curvature in different meridional planes (e.g., greater curvature in the vertical plane than in the horizontal plane).<br>
    • Consequently, light rays in horizontal and vertical planes focus at different distances behind the cornea, preventing both sets of perpendicular lines from being sharply focused on the retina simultaneously.</p>

    <p><strong>Correction:</strong><br>
    • Astigmatism is corrected by using <strong>cylindrical lenses</strong> of appropriate radius of curvature and axis orientation.<br>
    • The cylindrical lens introduces equal and opposite differential focal power to equalize the refractive power in all planes.</p>`,
    "2 Marks",
    [
      ["Identification of Astigmatism and non-spherical cornea curvature", "1 Mark"],
      ["Correction using cylindrical lenses with oriented axis", "1 Mark"]
    ]
  ),

  // 9.29
  createQCard(
    "c12p-ch9-q29",
    "Q 9.29",
    "Exercise 9.29",
    `A magnifying glass with focal length $+5.0 \\text{ cm}$ is used by a person with normal near point ($25 \\text{ cm}$). What is the magnifying power of the glass when the image is formed at:<br>
    <strong>(a)</strong> the near point ($25 \\text{ cm}$)?<br>
    <strong>(b)</strong> infinity?`,
    `<p><strong>Given:</strong><br>
    $f = +5.0 \\text{ cm}$, $D = 25 \\text{ cm}$</p>

    <p><strong>(a) Image at Near Point ($D = 25 \\text{ cm}$):</strong><br>
    \\[
    m = 1 + \\frac{D}{f} = 1 + \\frac{25}{5} = 1 + 5 = 6
    \\]</p>

    <p><strong>(b) Image at Infinity (Normal Adjustment):</strong><br>
    \\[
    m = \\frac{D}{f} = \\frac{25}{5} = 5
    \\]</p>`,
    "2 Marks",
    [
      ["Formula $m = 1 + D/f$ and calculation $m = 6$", "1 Mark"],
      ["Formula $m = D/f$ and calculation $m = 5$", "1 Mark"]
    ]
  ),

  // 9.30
  createQCard(
    "c12p-ch9-q30",
    "Q 9.30",
    "Exercise 9.30",
    `A microscope has an objective of focal length $1.0 \\text{ cm}$ and an eyepiece of focal length $2.5 \\text{ cm}$. If the distance between objective and eyepiece is $18.5 \\text{ cm}$, find the magnification if the final image is at infinity.`,
    `<p><strong>Given:</strong><br>
    $f_o = 1.0 \\text{ cm}$, $f_e = 2.5 \\text{ cm}$, $L = 18.5 \\text{ cm}$, $D = 25 \\text{ cm}$</p>

    <p><strong>Step 1: Distance for Objective $v_o$:</strong><br>
    Since the final image is at infinity, the real intermediate image formed by the objective lies at the focal point of the eyepiece:
    \\[
    u_e = f_e = 2.5 \\text{ cm}
    \\]
    \\[
    v_o = L - f_e = 18.5 - 2.5 = 16.0 \\text{ cm}
    \\]</p>

    <p><strong>Step 2: Object Distance for Objective $u_o$:</strong><br>
    \\[
    \\frac{1}{u_o} = \\frac{1}{v_o} - \\frac{1}{f_o} = \\frac{1}{16} - \\frac{1}{1} = \\frac{1 - 16}{16} = -\\frac{15}{16} \\implies u_o = -\\frac{16}{15} \\approx -1.067 \\text{ cm}
    \\]</p>

    <p><strong>Step 3: Total Magnifying Power:</strong><br>
    \\[
    m = m_o \\times m_e = \\left(-\\frac{v_o}{|u_o|}\\right) \\left(\\frac{D}{f_e}\\right) = \\left(-\\frac{16}{16/15}\\right) \\left(\\frac{25}{2.5}\\right) = (-15) \\times 10 = -150
    \\]
    <p><strong>Result:</strong> The magnifying power is <strong>$-150$</strong> (or magnitude $150$).</p>`,
    "3 Marks",
    [
      ["Calculation of $v_o = 16.0\\text{ cm}$ and $u_o = -1.067\\text{ cm}$", "1.5 Marks"],
      ["Magnifying power formula $m = m_o m_e = -150$", "1.5 Marks"]
    ]
  ),

  // 9.31
  createQCard(
    "c12p-ch9-q31",
    "Q 9.31",
    "Exercise 9.31",
    `What is the primary difference between a refracting telescope and a Cassegrain reflecting telescope? State two advantages of reflecting telescopes over refracting telescopes.`,
    `<p><strong>Primary Difference:</strong><br>
    • A <strong>refracting telescope</strong> uses a large convex objective lens to collect and focus incoming light via refraction.<br>
    • A <strong>Cassegrain reflecting telescope</strong> uses a large concave parabolic primary mirror to collect light by reflection, which is then reflected by a secondary convex mirror through a central hole in the primary mirror to an eyepiece.</p>

    <p><strong>Advantages of Reflecting Telescopes:</strong></p>
    <ol style="line-height:1.8;">
      <li><strong>No Chromatic Aberration:</strong> Reflection obeys the law of reflection independently of wavelength ($i = r$), completely eliminating chromatic aberration that plagues lenses.</li>
      <li><strong>Elimination of Spherical Aberration:</strong> By utilizing parabolic primary mirrors, spherical aberration is entirely removed.</li>
      <li><strong>Mechanical Stability and Large Aperture:</strong> A heavy mirror can be supported continuously across its entire back surface, whereas a large lens can only be supported along its rim, causing sagging and distortion under its own weight.</li>
      <li><strong>Higher Light Gathering Power:</strong> Reflecting mirrors can be manufactured with enormous diameters ($> 10 \\text{ m}$), enabling observation of extremely faint, distant cosmological objects.</li>
    </ol>`,
    "3 Marks",
    [
      ["Clear contrast in optical architecture (lens vs concave parabolic mirror)", "1 Mark"],
      ["No chromatic aberration explained", "1 Mark"],
      ["Mechanical support / parabolic geometry advantages", "1 Mark"]
    ]
  ),

  // 9.32
  createQCard(
    "c12p-ch9-q32",
    "Q 9.32",
    "Exercise 9.32",
    `Derive the Lens Maker's Formula:
    \\[
    \\frac{1}{f} = (\\mu - 1)\\left( \\frac{1}{R_1} - \\frac{1}{R_2} \\right)
    \\]
    for a thin double-convex lens having radii of curvature $R_1$ and $R_2$ and refractive index $\\mu$ placed in air.`,
    `<p><strong>Derivation:</strong><br>
    Consider a thin double-convex lens of refractive index $\\mu_2 = \\mu$ placed in a medium of refractive index $\\mu_1 = 1$ (air).<br>
    Let $R_1$ and $R_2$ be the radii of curvature of the first and second refracting surfaces.</p>

    <p><strong>Step 1: Refraction at the First Surface ($R_1$):</strong><br>
    A point object $O$ is placed at distance $u$. Refraction produces an image $I_1$ at distance $v_1$:
    \\[
    \\frac{\\mu}{v_1} - \\frac{1}{u} = \\frac{\\mu - 1}{R_1} \\quad \\text{--- (Equation 1)}
    \\]</p>

    <p><strong>Step 2: Refraction at the Second Surface ($R_2$):</strong><br>
    $I_1$ serves as a virtual object for the second surface. Since light travels from glass ($\\mu$) to air ($1$):
    \\[
    \\frac{1}{v} - \\frac{\\mu}{v_1} = \\frac{1 - \\mu}{R_2} = -\\frac{\\mu - 1}{R_2} \\quad \\text{--- (Equation 2)}
    \\]</p>

    <p><strong>Step 3: Adding Equations (1) and (2):</strong><br>
    \\[
    \\left( \\frac{\\mu}{v_1} - \\frac{1}{u} \\right) + \\left( \\frac{1}{v} - \\frac{\\mu}{v_1} \\right) = \\frac{\\mu - 1}{R_1} - \\frac{\\mu - 1}{R_2}
    \\]
    \\[
    \\frac{1}{v} - \\frac{1}{u} = (\\mu - 1) \\left( \\frac{1}{R_1} - \\frac{1}{R_2} \\right) \\quad \\text{--- (Equation 3)}
    \\]</p>

    <p><strong>Step 4: Defining Focal Length $f$:</strong><br>
    When the object is at infinity ($u = -\\infty$), the image is formed at the principal focus ($v = f$):
    \\[
    \\frac{1}{f} - \\frac{1}{\\infty} = (\\mu - 1) \\left( \\frac{1}{R_1} - \\frac{1}{R_2} \\right)
    \\]
    \\[
    \\frac{1}{f} = (\\mu - 1) \\left( \\frac{1}{R_1} - \\frac{1}{R_2} \\right)
    \\]
    This is the celebrated <strong>Lens Maker's Formula</strong>.</p>`,
    "5 Marks",
    [
      ["Refraction at first surface $\\frac{\\mu}{v_1} - \\frac{1}{u} = \\frac{\\mu-1}{R_1}$", "1.5 Marks"],
      ["Refraction at second surface $\\frac{1}{v} - \\frac{\\mu}{v_1} = -\\frac{\\mu-1}{R_2}$", "1.5 Marks"],
      ["Addition of equations eliminating intermediate virtual image $v_1$", "1 Mark"],
      ["Definition of focus ($u = \\infty, v = f$) yielding final formula", "1 Mark"]
    ]
  )
];

saveChapter(chNum, chTitle, svgDiagram, "Exercises 9.1 to 9.32", questions, nextChTitle);
