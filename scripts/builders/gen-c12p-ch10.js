// scripts/builders/gen-c12p-ch10.js
// Class 12 Physics - Chapter 10: Wave Optics (17 Questions)
const { createQCard, saveChapter } = require('./c12p-helper');

const chNum = 10;
const chTitle = "Wave Optics";
const nextChTitle = "Dual Nature of Radiation and Matter";

const svgDiagram = `
  <div style="display:flex; justify-content:center; margin:24px 0;">
    <svg viewBox="0 0 760 220" style="width:100%; max-width:760px; height:auto; background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb"/>
        </marker>
      </defs>
      <!-- Title -->
      <text x="380" y="24" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#1e293b">Young's Double-Slit Experiment (YDSE) & Single Slit Diffraction</text>
      
      <!-- Slit screen -->
      <line x1="120" y1="40" x2="120" y2="85" stroke="#334155" stroke-width="4"/>
      <line x1="120" y1="95" x2="120" y2="145" stroke="#334155" stroke-width="4"/>
      <line x1="120" y1="155" x2="120" y2="200" stroke="#334155" stroke-width="4"/>
      
      <text x="95" y="92" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#2563eb">S₁</text>
      <text x="95" y="152" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#2563eb">S₂</text>

      <!-- Slit separation d -->
      <line x1="108" y1="90" x2="108" y2="150" stroke="#64748b" stroke-width="1.5"/>
      <text x="100" y="124" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#64748b">d</text>

      <!-- Observation Screen -->
      <line x1="330" y1="40" x2="330" y2="200" stroke="#334155" stroke-width="3"/>
      
      <!-- Rays to Point P -->
      <line x1="120" y1="90" x2="330" y2="70" stroke="#2563eb" stroke-width="1.8"/>
      <line x1="120" y1="150" x2="330" y2="70" stroke="#2563eb" stroke-width="1.8"/>
      
      <circle cx="330" cy="70" r="4" fill="#dc2626"/>
      <text x="340" y="74" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#dc2626">P (y)</text>
      
      <line x1="120" y1="120" x2="330" y2="120" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,2"/>
      <text x="340" y="124" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#64748b">O (Central Max)</text>

      <!-- Key Formulae -->
      <text x="390" y="55" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e293b">Core Principles & Relations:</text>
      <text x="390" y="80" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Path Difference: $\\Delta x = \\frac{y d}{D} = d \\sin \\theta$</text>
      <text x="390" y="105" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Bright Fringes (Maxima): $y_n = n \\frac{\\lambda D}{d}, \\quad n = 0, \\pm 1, \\pm 2$</text>
      <text x="390" y="130" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Dark Fringes (Minima): $y_n' = (2n - 1) \\frac{\\lambda D}{2d}$</text>
      <text x="390" y="155" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Fringe Width: $\\beta = \\frac{\\lambda D}{d}, \\quad \\theta = \\frac{\\lambda}{d}$</text>
      <text x="390" y="180" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Single Slit Central Max Width: $\\beta_0 = \\frac{2\\lambda D}{a}$</text>
      <text x="390" y="205" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Fresnel Distance: $Z_F = \\frac{a^2}{\\lambda}$</text>
    </svg>
  </div>
`;

const questions = [
  // 10.1
  createQCard(
    "c12p-ch10-q1",
    "Q 10.1",
    "Exercise 10.1",
    `Monochromatic light of wavelength $589 \\text{ nm}$ is incident from air on a water surface. What are the wavelength, frequency and speed of:<br>
    <strong>(a)</strong> reflected light, and<br>
    <strong>(b)</strong> refracted light?<br>
    Refractive index of water is $1.33$.`,
    `<p><strong>Given:</strong><br>
    Wavelength in air $\\lambda = 589 \\text{ nm} = 5.89 \\times 10^{-7} \\text{ m}$<br>
    Speed of light in air $c = 3.0 \\times 10^8 \\text{ m s}^{-1}$<br>
    Refractive index of water $\\mu = 1.33$</p>

    <p><strong>Frequency of Light:</strong><br>
    Frequency is an intrinsic property of the source and remains invariant upon reflection and refraction:
    \\[
    \\nu = \\frac{c}{\\lambda} = \\frac{3.0 \\times 10^8 \\text{ m s}^{-1}}{5.89 \\times 10^{-7} \\text{ m}} \\approx 5.093 \\times 10^{14} \\text{ Hz}
    \\]</p>

    <p><strong>(a) Reflected Light:</strong><br>
    The reflected light remains in air:
    • Speed: $v = c = 3.0 \\times 10^8 \\text{ m s}^{-1}$<br>
    • Frequency: $\\nu = 5.09 \\times 10^{14} \\text{ Hz}$<br>
    • Wavelength: $\\lambda = 589 \\text{ nm}$</p>

    <p><strong>(b) Refracted Light:</strong><br>
    The refracted light propagates in water:
    • Speed:
    \\[
    v = \\frac{c}{\\mu} = \\frac{3.0 \\times 10^8}{1.33} \\approx 2.256 \\times 10^8 \\text{ m s}^{-1}
    \\]
    • Frequency: Unchanged, $\\nu = 5.09 \\times 10^{14} \\text{ Hz}$<br>
    • Wavelength:
    \\[
    \\lambda' = \\frac{\\lambda}{\\mu} = \\frac{589 \\text{ nm}}{1.33} \\approx 442.85 \\text{ nm} \\approx 443 \\text{ nm}
    \\]</p>`,
    "3 Marks",
    [
      ["Calculation of frequency $\\nu = 5.09 \\times 10^{14}\\text{ Hz}$ (invariant)", "1 Mark"],
      ["Values for reflected light ($c, \\nu, \\lambda$)", "1 Mark"],
      ["Values for refracted light ($v = 2.26 \\times 10^8\\text{ m/s}, \\lambda' = 443\\text{ nm}$)", "1 Mark"]
    ]
  ),

  // 10.2
  createQCard(
    "c12p-ch10-q2",
    "Q 10.2",
    "Exercise 10.2",
    `What is the shape of the wavefront in each of the following cases:<br>
    <strong>(a)</strong> Light diverging from a point source.<br>
    <strong>(b)</strong> Light emerging out of a convex lens when a point source is placed at its focus.<br>
    <strong>(c)</strong> The portion of the wavefront of light from a distant star intercepted by the Earth.`,
    `<p><strong>(a) Point source:</strong><br>
    Light propagates outward equally in all directions from a point source in an isotropic medium. The locus of points having the same phase is a sphere. Hence, the wavefront is <strong>Spherical</strong>.</p>

    <p><strong>(b) Point source at the focus of a convex lens:</strong><br>
    After passing through the convex lens, the refracted rays emerge as a parallel beam of light parallel to the principal axis. The surface normal to a parallel beam of rays is a plane. Hence, the wavefront is a <strong>Plane wavefront</strong>.</p>

    <p><strong>(c) Distant star intercepted by Earth:</strong><br>
    The star acts as a point source located at astronomical distance ($r \\to \\infty$). The wavefront originating from it is spherical, but over the relatively small aperture of an observation instrument or the Earth's radius, a tiny portion of a sphere of enormous radius is effectively flat. Hence, it is a <strong>Plane wavefront</strong>.</p>`,
    "3 Marks",
    [
      ["Spherical wavefront for point source with reasoning", "1 Mark"],
      ["Plane wavefront emerging from lens with reasoning", "1 Mark"],
      ["Plane wavefront from distant star with reasoning", "1 Mark"]
    ]
  ),

  // 10.3
  createQCard(
    "c12p-ch10-q3",
    "Q 10.3",
    "Exercise 10.3",
    `<strong>(a)</strong> The refractive index of glass is $1.5$. What is the speed of light in glass? (Speed of light in vacuum is $3.0 \\times 10^8 \\text{ m s}^{-1}$).<br>
    <strong>(b)</strong> Is the speed of light in glass independent of the colour of light? If not, which of the two colours red and violet travels slower in a glass prism?`,
    `<p><strong>(a) Speed of Light in Glass:</strong><br>
    \\[
    v = \\frac{c}{\\mu} = \\frac{3.0 \\times 10^8 \\text{ m s}^{-1}}{1.5} = 2.0 \\times 10^8 \\text{ m s}^{-1}
    \\]</p>

    <p><strong>(b) Dependence on Colour (Wavelength):</strong><br>
    • <strong>No</strong>, the speed of light in glass is NOT independent of colour.<br>
    • According to Cauchy's dispersion formula:
    \\[
    \\mu(\\lambda) = A + \\frac{B}{\\lambda^2} + \\dots
    \\]
    Since wavelength of red light is greater than that of violet light ($\\lambda_{red} > \\lambda_{violet}$), the refractive index for violet is greater than that for red:
    \\[
    \\mu_{violet} > \\mu_{red}
    \\]
    Since $v = \\frac{c}{\\mu}$:
    \\[
    v_{violet} < v_{red}
    \\]
    Therefore, <strong>violet light travels slower</strong> than red light in glass.</p>`,
    "3 Marks",
    [
      ["Calculation $v = 2.0 \\times 10^8\\text{ m s}^{-1}$", "1 Mark"],
      ["Explanation of dispersion and Cauchy's relation $\\mu \\propto 1/\\lambda^2$", "1 Mark"],
      ["Deduction that violet travels slower ($v_v < v_r$)", "1 Mark"]
    ]
  ),

  // 10.4
  createQCard(
    "c12p-ch10-q4",
    "Q 10.4",
    "Exercise 10.4",
    `In a Young’s double-slit experiment, the slits are separated by $0.28 \\text{ mm}$ and the screen is placed $1.4 \\text{ m}$ away. The distance between the central bright fringe and the fourth bright fringe is measured to be $1.2 \\text{ cm}$. Determine the wavelength of light used in the experiment.`,
    `<p><strong>Given:</strong><br>
    Slit separation $d = 0.28 \\text{ mm} = 0.28 \\times 10^{-3} \\text{ m}$<br>
    Screen distance $D = 1.4 \\text{ m}$<br>
    Order of fringe $n = 4$<br>
    Distance to 4th bright fringe $y_4 = 1.2 \\text{ cm} = 1.2 \\times 10^{-2} \\text{ m}$</p>

    <p><strong>Formula for $n$-th Bright Fringe:</strong><br>
    \\[
    y_n = n \\frac{\\lambda D}{d} \\implies \\lambda = \\frac{y_n d}{n D}
    \\]</p>

    <p><strong>Calculation:</strong><br>
    \\[
    \\lambda = \\frac{(1.2 \\times 10^{-2} \\text{ m}) \\times (0.28 \\times 10^{-3} \\text{ m})}{4 \\times 1.4 \\text{ m}} = \\frac{0.336 \\times 10^{-5}}{5.6} = 0.06 \\times 10^{-5} = 6.0 \\times 10^{-7} \\text{ m}
    \\]
    In nanometres:
    \\[
    \\lambda = 600 \\text{ nm} = 6000 \\text{ \\AA}
    \\]</p>`,
    "2 Marks",
    [
      ["Formula $y_n = n \\lambda D / d$", "1 Mark"],
      ["Calculation yielding $\\lambda = 600\\text{ nm}$", "1 Mark"]
    ]
  ),

  // 10.5
  createQCard(
    "c12p-ch10-q5",
    "Q 10.5",
    "Exercise 10.5",
    `In Young’s double-slit experiment using monochromatic light of wavelength $\\lambda$, the intensity of light at a point on the screen where path difference is $\\lambda$ is $K$ units. What is the intensity of light at a point where path difference is $\\lambda/3$?`,
    `<p><strong>Formula for Resultant Intensity in Interference:</strong><br>
    For two identical coherent sources of intensity $I_0$:
    \\[
    I = 4 I_0 \\cos^2\\left(\\frac{\\phi}{2}\\right)
    \\]
    where phase difference is $\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.</p>

    <p><strong>Step 1: When Path Difference $\\Delta x_1 = \\lambda$:</strong><br>
    Phase difference:
    \\[
    \\phi_1 = \\frac{2\\pi}{\\lambda} (\\lambda) = 2\\pi
    \\]
    Intensity:
    \\[
    I_1 = 4 I_0 \\cos^2\\left(\\frac{2\\pi}{2}\\right) = 4 I_0 \\cos^2(\\pi) = 4 I_0 (-1)^2 = 4 I_0 = K \\implies I_0 = \\frac{K}{4}
    \\]</p>

    <p><strong>Step 2: When Path Difference $\\Delta x_2 = \\frac{\\lambda}{3}$:</strong><br>
    Phase difference:
    \\[
    \\phi_2 = \\frac{2\\pi}{\\lambda} \\left( \\frac{\\lambda}{3} \\right) = \\frac{2\\pi}{3} = 120^\\circ
    \\]
    Intensity:
    \\[
    I_2 = 4 I_0 \\cos^2\\left( \\frac{2\\pi/3}{2} \\right) = 4 I_0 \\cos^2\\left(\\frac{\\pi}{3}\\right) = 4 I_0 \\left(\\frac{1}{2}\\right)^2 = 4 I_0 \\times \\frac{1}{4} = I_0
    \\]
    Since $4I_0 = K$, we have:
    \\[
    I_2 = \\frac{K}{4}
    \\]
    <p><strong>Result:</strong> The intensity of light at the point is <strong>$\\frac{K}{4}$ units</strong>.</p>`,
    "2 Marks",
    [
      ["Intensity formula $I = 4I_0 \\cos^2(\\phi/2)$ and finding $4I_0 = K$", "1 Mark"],
      ["Phase $\\phi = 2\\pi/3$ giving $I_2 = K/4$", "1 Mark"]
    ]
  ),

  // 10.6
  createQCard(
    "c12p-ch10-q6",
    "Q 10.6",
    "Exercise 10.6",
    `A beam of light consisting of two wavelengths, $650 \\text{ nm}$ and $520 \\text{ nm}$, is used to obtain interference fringes in a Young’s double-slit experiment ($d = 2.0 \\text{ mm}, D = 120 \\text{ cm}$).<br>
    <strong>(a)</strong> Find the distance of the third bright fringe on the screen from the central maximum for wavelength $650 \\text{ nm}$.<br>
    <strong>(b)</strong> What is the least distance from the central maximum where the bright fringes due to both the wavelengths coincide?`,
    `<p><strong>Given:</strong><br>
    $\\lambda_1 = 650 \\text{ nm} = 6.5 \\times 10^{-7} \\text{ m}$, $\\lambda_2 = 520 \\text{ nm} = 5.2 \\times 10^{-7} \\text{ m}$<br>
    $d = 2.0 \\text{ mm} = 2.0 \\times 10^{-3} \\text{ m}$, $D = 120 \\text{ cm} = 1.2 \\text{ m}$</p>

    <p><strong>(a) Distance of 3rd Bright Fringe for $\\lambda_1 = 650 \\text{ nm}$:</strong><br>
    \\[
    y_3 = 3 \\frac{\\lambda_1 D}{d} = 3 \\times \\frac{(6.5 \\times 10^{-7}) \\times 1.2}{2.0 \\times 10^{-3}} = 3 \\times \\frac{7.8 \\times 10^{-7}}{2.0 \\times 10^{-3}} = 3 \\times (3.9 \\times 10^{-4}) = 1.17 \\times 10^{-3} \\text{ m} = 1.17 \\text{ mm}
    \\]</p>

    <p><strong>(b) Coincidence of Bright Fringes:</strong><br>
    Let the $n$-th bright fringe of $\\lambda_1$ coincide with the $m$-th bright fringe of $\\lambda_2$ at distance $y$:
    \\[
    y = n \\frac{\\lambda_1 D}{d} = m \\frac{\\lambda_2 D}{d} \\implies n \\lambda_1 = m \\lambda_2
    \\]
    \\[
    \\frac{n}{m} = \\frac{\\lambda_2}{\\lambda_1} = \\frac{520 \\text{ nm}}{650 \\text{ nm}} = \\frac{52}{65} = \\frac{4}{5}
    \\]
    The smallest non-zero integers are $n = 4$ and $m = 5$.<br>
    The least distance from the central maximum is:
    \\[
    y = 4 \\frac{\\lambda_1 D}{d} = 4 \\times \\frac{(6.5 \\times 10^{-7}) \\times 1.2}{2.0 \\times 10^{-3}} = 4 \\times (3.9 \\times 10^{-4}) = 1.56 \\times 10^{-3} \\text{ m} = 1.56 \\text{ mm}
    \\]</p>`,
    "3 Marks",
    [
      ["Calculation for 3rd fringe $y_3 = 1.17\\text{ mm}$", "1 Mark"],
      ["Coincidence condition $n\\lambda_1 = m\\lambda_2$ yielding $n/m = 4/5$", "1 Mark"],
      ["Least distance calculation $y = 1.56\\text{ mm}$", "1 Mark"]
    ]
  ),

  // 10.7
  createQCard(
    "c12p-ch10-q7",
    "Q 10.7",
    "Exercise 10.7",
    `In a double-slit experiment the angular width of a fringe is found to be $0.2^\\circ$ on a screen placed $1.0 \\text{ m}$ away. The wavelength of light used is $600 \\text{ nm}$. What will be the angular width of the fringe if the entire experimental apparatus is immersed in water? Take refractive index of water to be $4/3$.`,
    `<p><strong>Given:</strong><br>
    Angular fringe width in air $\\theta = 0.2^\\circ$<br>
    Refractive index of water $\\mu = \\frac{4}{3} \\approx 1.33$</p>

    <p><strong>Formula for Angular Fringe Width:</strong><br>
    The angular fringe width is:
    \\[
    \\theta = \\frac{\\beta}{D} = \\frac{\\lambda}{d}
    \\]</p>

    <p><strong>When Immersed in Water:</strong><br>
    The slit separation $d$ remains unchanged, while the wavelength of light decreases to:
    \\[
    \\lambda' = \\frac{\\lambda}{\\mu}
    \\]
    Therefore, the new angular fringe width is:
    \\[
    \\theta' = \\frac{\\lambda'}{d} = \\frac{\\lambda}{\\mu d} = \\frac{\\theta}{\\mu}
    \\]
    \\[
    \\theta' = \\frac{0.2^\\circ}{4/3} = 0.2^\\circ \\times \\frac{3}{4} = 0.15^\\circ
    \\]
    <p><strong>Result:</strong> The new angular width of the fringe in water is <strong>$0.15^\\circ$</strong>.</p>`,
    "2 Marks",
    [
      ["Relation $\\theta = \\lambda/d$ and $\\theta' = \\theta/\\mu$", "1 Mark"],
      ["Calculation yielding $\\theta' = 0.15^\\circ$", "1 Mark"]
    ]
  ),

  // 10.8
  createQCard(
    "c12p-ch10-q8",
    "Q 10.8",
    "Exercise 10.8",
    `What is the Brewster angle for air to glass transition? (Refractive index of glass $= 1.5$).`,
    `<p><strong>Brewster’s Law:</strong><br>
    Brewster's law states that when unpolarized light is incident at Brewster's angle $i_B$ (or polarizing angle $p$), the reflected light is completely plane polarized perpendicular to the plane of incidence, and the reflected and refracted rays are mutually perpendicular ($i_B + r = 90^\\circ$):
    \\[
    \\tan i_B = \\mu
    \\]</p>

    <p><strong>Calculation:</strong><br>
    Given $\\mu = 1.5$:
    \\[
    i_B = \\arctan(1.5) \\approx 56.31^\\circ \\approx 56.3^\\circ
    \\]
    <p><strong>Result:</strong> The Brewster angle is <strong>$56.3^\\circ$</strong>.</p>`,
    "2 Marks",
    [
      ["Brewster's law statement $\\tan i_B = \\mu$", "1 Mark"],
      ["Calculation $i_B \\approx 56.3^\\circ$", "1 Mark"]
    ]
  ),

  // 10.9
  createQCard(
    "c12p-ch10-q9",
    "Q 10.9",
    "Exercise 10.9",
    `Light of wavelength $5000 \\text{ \\AA}$ falls on a plane reflecting surface. What are the wavelength and frequency of reflected light? For what angle of incidence is the reflected ray normal to the incident ray?`,
    `<p><strong>Given:</strong><br>
    $\\lambda = 5000 \\text{ \\AA} = 5.0 \\times 10^{-7} \\text{ m}$, $c = 3.0 \\times 10^8 \\text{ m s}^{-1}$</p>

    <p><strong>1. Wavelength and Frequency of Reflected Light:</strong><br>
    Reflection occurs in the same medium (air). Hence speed and wavelength remain unaltered:
    • Wavelength: $\\lambda_{ref} = 5000 \\text{ \\AA} = 5.0 \\times 10^{-7} \\text{ m}$<br>
    • Frequency:
    \\[
    \\nu = \\frac{c}{\\lambda} = \\frac{3.0 \\times 10^8 \\text{ m s}^{-1}}{5.0 \\times 10^{-7} \\text{ m}} = 6.0 \\times 10^{14} \\text{ Hz}
    \\]</p>

    <p><strong>2. Condition for Reflected Ray Normal to Incident Ray:</strong><br>
    The total deviation between incident and reflected ray is $\\delta = 180^\\circ - 2i$.<br>
    Angle between incident ray and reflected ray is:
    \\[
    i + r = 90^\\circ
    \\]
    By law of reflection $r = i$:
    \\[
    i + i = 90^\\circ \\implies 2i = 90^\\circ \\implies i = 45^\\circ
    \\]
    <p><strong>Result:</strong> The angle of incidence is <strong>$45^\\circ$</strong>.</p>`,
    "2 Marks",
    [
      ["Frequency calculation $\\nu = 6.0 \\times 10^{14}\\text{ Hz}$ and invariant $\\lambda$", "1 Mark"],
      ["Angle of incidence $i = 45^\\circ$", "1 Mark"]
    ]
  ),

  // 10.10
  createQCard(
    "c12p-ch10-q10",
    "Q 10.10",
    "Exercise 10.10",
    `Estimate the distance for which ray optics is a good approximation for an aperture of $4.0 \\text{ mm}$ and wavelength $400 \\text{ nm}$.`,
    `<p><strong>Given:</strong><br>
    Aperture size $a = 4.0 \\text{ mm} = 4.0 \\times 10^{-3} \\text{ m}$<br>
    Wavelength $\\lambda = 400 \\text{ nm} = 400 \\times 10^{-9} \\text{ m} = 4.0 \\times 10^{-7} \\text{ m}$</p>

    <p><strong>Fresnel Distance ($Z_F$):</strong><br>
    Ray optics remains a valid approximation over distances much smaller than the Fresnel distance $Z_F$, beyond which diffraction spreading exceeds the geometric size of the aperture:
    \\[
    Z_F = \\frac{a^2}{\\lambda}
    \\]</p>

    <p><strong>Calculation:</strong><br>
    \\[
    Z_F = \\frac{(4.0 \\times 10^{-3} \\text{ m})^2}{4.0 \\times 10^{-7} \\text{ m}} = \\frac{16.0 \\times 10^{-6}}{4.0 \\times 10^{-7}} = 40 \\text{ m}
    \\]
    <p><strong>Result:</strong> Ray optics is a good approximation up to a distance of <strong>$40 \\text{ m}$</strong>.</p>`,
    "2 Marks",
    [
      ["Formula for Fresnel distance $Z_F = a^2/\\lambda$", "1 Mark"],
      ["Evaluation $Z_F = 40\\text{ m}$", "1 Mark"]
    ]
  ),

  // 10.11
  createQCard(
    "c12p-ch10-q11",
    "Q 10.11",
    "Exercise 10.11",
    `The $6563 \\text{ \\AA} \\ H_\\alpha$ line emitted by hydrogen in a star is found to be red-shifted by $15 \\text{ \\AA}$. Estimate the speed with which the star is receding from the Earth.`,
    `<p><strong>Given:</strong><br>
    Original wavelength $\\lambda = 6563 \\text{ \\AA}$<br>
    Red shift $\\Delta \\lambda = +15 \\text{ \\AA}$<br>
    Speed of light $c = 3.0 \\times 10^8 \\text{ m s}^{-1}$</p>

    <p><strong>Doppler Shift Formula for Light ($v \\ll c$):</strong><br>
    For a source receding from the observer, the fractional change in wavelength is:
    \\[
    \\frac{\\Delta \\lambda}{\\lambda} = \\frac{v_{radial}}{c}
    \\]</p>

    <p><strong>Calculation of Recessional Speed $v$:</strong><br>
    \\[
    v = c \\left( \\frac{\\Delta \\lambda}{\\lambda} \\right) = (3.0 \\times 10^8 \\text{ m s}^{-1}) \\times \\left( \\frac{15 \\text{ \\AA}}{6563 \\text{ \\AA}} \\right)
    \\]
    \\[
    v = \\frac{45 \\times 10^8}{6563} \\approx 6.857 \\times 10^5 \\text{ m s}^{-1} \\approx 6.86 \\times 10^5 \\text{ m s}^{-1} = 686 \\text{ km s}^{-1}
    \\]
    <p><strong>Result:</strong> The star is receding away from Earth at a speed of approximately <strong>$686 \\text{ km s}^{-1}$</strong>.</p>`,
    "2 Marks",
    [
      ["Doppler formula $\\Delta\\lambda/\\lambda = v/c$", "1 Mark"],
      ["Calculation $v \\approx 6.86 \\times 10^5\\text{ m s}^{-1} = 686\\text{ km/s}$", "1 Mark"]
    ]
  ),

  // 10.12
  createQCard(
    "c12p-ch10-q12",
    "Q 10.12",
    "Exercise 10.12",
    `State Huygens' Principle of wave propagation. Using this principle, construct the reflected wavefront for a plane wave incident on a plane reflecting surface and derive the laws of reflection.`,
    `<p><strong>Huygens' Principle:</strong></p>
    <ol style="line-height:1.8;">
      <li>Every point on a primary wavefront acts as a fresh source of secondary spherical wavelets which spread out in all directions with the speed of the wave in that medium.</li>
      <li>The forward common envelope (tangential surface) to these secondary wavelets at any later time gives the new position of the wavefront.</li>
    </ol>

    <p><strong>Proof of Laws of Reflection:</strong><br>
    Consider a plane wavefront $AB$ incident at angle $i$ on a plane reflecting surface $MN$.<br>
    Let $v$ be the speed of light in the medium.<br>
    At $t = 0$, end $A$ touches the mirror while end $B$ is at distance $BC$ from the mirror ($BC = v \\tau$).<br>
    In time $\\tau$, secondary wavelets from $A$ grow into a hemisphere of radius $AD = v \\tau$.<br>
    Tangential envelope $CD$ represents the reflected wavefront, making angle $r$ with $MN$.</p>

    <p><strong>Geometric Congruence:</strong><br>
    Consider $\\triangle ABC$ and $\\triangle ADC$ on base $AC$:
    1. $BC = AD = v \\tau$ (by construction)<br>
    2. $\\angle ABC = \\angle ADC = 90^\\circ$ (rays are perpendicular to wavefronts)<br>
    3. $AC = AC$ (common hypotenuse)<br>
    By RHS congruence theorem:
    \\[
    \\triangle ABC \\cong \\triangle ADC
    \\]
    Therefore:
    \\[
    \\angle BAC = \\angle DCA \\implies i = r
    \\]
    (Angle of incidence equals angle of reflection).<br>
    Furthermore, the incident wavefront, reflecting surface, and reflected wavefront are all perpendicular to the plane of the paper, proving that the incident ray, reflected ray, and normal lie in the same plane.</p>`,
    "5 Marks",
    [
      ["Clear statement of Huygens' two postulates", "1.5 Marks"],
      ["Diagram and wavefront construction ($BC = AD = v\\tau$)", "1.5 Marks"],
      ["RHS congruence proof demonstrating $\\angle i = \\angle r$", "1.5 Marks"],
      ["Statement of coplanarity", "0.5 Mark"]
    ]
  ),

  // 10.13
  createQCard(
    "c12p-ch10-q13",
    "Q 10.13",
    "Exercise 10.13",
    `Using Huygens' principle, verify Snell’s law of refraction:
    \\[
    \\frac{\\sin i}{\\sin r} = \\frac{v_1}{v_2} = \\frac{\\mu_2}{\\mu_1}
    \\]
    for a plane wave propagating from a rarer medium 1 to a denser medium 2 across a plane interface.`,
    `<p><strong>Refraction Construction by Huygens' Wave Theory:</strong><br>
    Let $MN$ be a plane boundary separating medium 1 (speed $v_1$, refractive index $\\mu_1$) and medium 2 (speed $v_2$, refractive index $\\mu_2$).<br>
    A plane wavefront $AB$ is incident at angle $i$ on $MN$.<br>
    Let $\\tau$ be the time taken by point $B$ to reach $C$ on the interface:
    \\[
    BC = v_1 \\tau
    \\]
    During this same time $\\tau$, the secondary wavelet originating from $A$ propagates into medium 2 with speed $v_2$, forming a sphere of radius:
    \\[
    AE = v_2 \\tau
    \\]
    The tangent plane $CE$ drawn from $C$ to this wavelet represents the refracted wavefront, making angle of refraction $r$ with $MN$.</p>

    <p><strong>Mathematical Derivation:</strong><br>
    From right-angled $\\triangle ABC$:
    \\[
    \\sin i = \\frac{BC}{AC} = \\frac{v_1 \\tau}{AC}
    \\]
    From right-angled $\\triangle AEC$:
    \\[
    \\sin r = \\frac{AE}{AC} = \\frac{v_2 \\tau}{AC}
    \\]
    Dividing the two equations:
    \\[
    \\frac{\\sin i}{\\sin r} = \\frac{v_1 \\tau / AC}{v_2 \\tau / AC} = \\frac{v_1}{v_2}
    \\]
    Since refractive index $\\mu = \\frac{c}{v} \\implies v_1 = \\frac{c}{\\mu_1}$ and $v_2 = \\frac{c}{\\mu_2}$:
    \\[
    \\frac{\\sin i}{\\sin r} = \\frac{c/\\mu_1}{c/\\mu_2} = \\frac{\\mu_2}{\\mu_1} = \\, ^1\\mu_2
    \\]
    This proves Snell's law of refraction. If $v_1 > v_2$, $\\sin i > \\sin r \\implies i > r$, meaning the refracted ray bends towards the normal in a denser medium.</p>`,
    "5 Marks",
    [
      ["Wavefront construction with speeds $v_1\\tau$ and $v_2\\tau$", "1.5 Marks"],
      ["Trigonometric expressions $\\sin i = v_1\\tau/AC$ and $\\sin r = v_2\\tau/AC$", "1.5 Marks"],
      ["Ratio yielding $\\frac{\\sin i}{\\sin r} = \\frac{v_1}{v_2} = \\frac{\\mu_2}{\\mu_1}$ (Snell's Law)", "1.5 Marks"],
      ["Physical deduction regarding bending towards the normal", "0.5 Mark"]
    ]
  ),

  // 10.14
  createQCard(
    "c12p-ch10-q14",
    "Q 10.14",
    "Exercise 10.14",
    `In a single-slit diffraction experiment, a slit of width $0.20 \\text{ mm}$ is illuminated by monochromatic light of wavelength $500 \\text{ nm}$. The screen is placed at a distance of $1.0 \\text{ m}$. Calculate:<br>
    <strong>(a)</strong> the angular spread of the central maximum,<br>
    <strong>(b)</strong> the linear width of the central diffraction maximum.`,
    `<p><strong>Given:</strong><br>
    Slit width $a = 0.20 \\text{ mm} = 2.0 \\times 10^{-4} \\text{ m}$<br>
    Wavelength $\\lambda = 500 \\text{ nm} = 5.0 \\times 10^{-7} \\text{ m}$<br>
    Screen distance $D = 1.0 \\text{ m}$</p>

    <p><strong>(a) Angular Spread of Central Maximum ($2\\theta$):</strong><br>
    First minima occur at $\\sin \\theta = \\pm \\frac{\\lambda}{a} \\approx \\theta$:
    \\[
    2\\theta = \\frac{2\\lambda}{a} = \\frac{2 \\times (5.0 \\times 10^{-7} \\text{ m})}{2.0 \\times 10^{-4} \\text{ m}} = 5.0 \\times 10^{-3} \\text{ rad}
    \\]</p>

    <p><strong>(b) Linear Width of Central Maximum ($\\beta_0$):</strong><br>
    \\[
    \\beta_0 = 2 y_1 = \\frac{2\\lambda D}{a} = (2\\theta) D = (5.0 \\times 10^{-3} \\text{ rad}) \\times 1.0 \\text{ m} = 5.0 \\times 10^{-3} \\text{ m} = 5.0 \\text{ mm}
    \\]
    <p><strong>Result:</strong> Angular width $= 5.0 \\times 10^{-3} \\text{ rad}$ and linear width $= 5.0 \\text{ mm}$.</p>`,
    "2 Marks",
    [
      ["Formula and calculation of angular width $2\\theta = 5.0 \\times 10^{-3}\\text{ rad}$", "1 Mark"],
      ["Calculation of linear width $\\beta_0 = 5.0\\text{ mm}$", "1 Mark"]
    ]
  ),

  // 10.15
  createQCard(
    "c12p-ch10-q15",
    "Q 10.15",
    "Exercise 10.15",
    `State four distinct points of difference between Interference and Diffraction of light.`,
    `<p><strong>Comparison Table:</strong></p>
    <table style="width:100%; border-collapse:collapse; margin:12px 0;">
      <thead>
        <tr style="background:#f1f5f9; text-align:left;">
          <th style="padding:8px; border:1px solid #cbd5e1;">Feature</th>
          <th style="padding:8px; border:1px solid #cbd5e1;">Interference</th>
          <th style="padding:8px; border:1px solid #cbd5e1;">Diffraction</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Source</strong></td>
          <td style="padding:8px; border:1px solid #cbd5e1;">Superposition of waves originating from two separate coherent sources (slits).</td>
          <td style="padding:8px; border:1px solid #cbd5e1;">Superposition of secondary wavelets originating from different parts of the same wavefront.</td>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Fringe Width</strong></td>
          <td style="padding:8px; border:1px solid #cbd5e1;">All interference fringes are of equal width ($\\beta = \\frac{\\lambda D}{d}$).</td>
          <td style="padding:8px; border:1px solid #cbd5e1;">Diffraction fringes are of unequal width; central maximum is twice as wide as secondary maxima.</td>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Intensity of Maxima</strong></td>
          <td style="padding:8px; border:1px solid #cbd5e1;">All bright fringes have equal intensity ($I_{max} = 4I_0$).</td>
          <td style="padding:8px; border:1px solid #cbd5e1;">Intensity decreases rapidly for successive secondary maxima ($I_0 : I_0/22 : I_0/61$).</td>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Contrast at Minima</strong></td>
          <td style="padding:8px; border:1px solid #cbd5e1;">Minima are generally perfectly dark ($I_{min} = 0$), giving sharp contrast.</td>
          <td style="padding:8px; border:1px solid #cbd5e1;">Minima are not completely dark; poor contrast between fringes.</td>
        </tr>
      </tbody>
    </table>`,
    "3 Marks",
    [
      ["Four distinct, rigorous physical comparison criteria", "3 Marks"]
    ]
  ),

  // 10.16
  createQCard(
    "c12p-ch10-q16",
    "Q 10.16",
    "Exercise 10.16",
    `In Young’s double-slit experiment, describe how the interference fringe pattern is affected if:<br>
    <strong>(a)</strong> the separation between the slits $d$ is decreased,<br>
    <strong>(b)</strong> the screen is moved further away ($D$ is increased),<br>
    <strong>(c)</strong> the source slit $S$ is moved closer to the double-slit plane ($S_1-S_2$),<br>
    <strong>(d)</strong> the monochromatic source is replaced by a white light source.`,
    `<p><strong>Fringe Width Formula:</strong> $\\beta = \\frac{\\lambda D}{d}$</p>
    <ol style="line-height:1.8;">
      <li><strong>(a) Slit separation $d$ decreased:</strong><br>
      Since $\\beta \\propto \\frac{1}{d}$, the fringe width $\\beta$ <strong>increases</strong>. The fringes become wider and more spread out on the screen.</li>

      <li><strong>(b) Screen distance $D$ increased:</strong><br>
      Since $\\beta \\propto D$, the fringe width $\\beta$ <strong>increases</strong> proportionally. However, the brightness (intensity) of fringes decreases slightly due to greater spreading.</li>

      <li><strong>(c) Source slit moved closer to double-slit plane:</strong><br>
      For sustained interference fringes, the condition $\\frac{s}{S} < \\frac{\\lambda}{d}$ must be satisfied (where $s$ is source width and $S$ is distance from source to double slit). If $S$ is decreased, $s/S$ increases. If $S$ becomes too small, interference patterns from different portions of the broad source overlap and wash out the pattern. As long as the condition holds, the pattern becomes brighter.</li>

      <li><strong>(d) Monochromatic source replaced by white light:</strong><br>
      • At the centre of the screen, path difference $\\Delta x = 0$ for all wavelengths; hence the <strong>central fringe is pure white</strong>.<br>
      • On either side, since $\\beta \\propto \\lambda$, violet fringes ($\\,\\lambda_v \\approx 400 \\text{ nm}$) form closest to the centre, followed by other colors, ending with red ($\\,\\lambda_r \\approx 700 \\text{ nm}$). Thus, a few colored fringes are observed.<br>
      • At larger distances from the centre, multiple orders of different colors overlap completely, resulting in a uniform white illumination.</li>
    </ol>`,
    "3 Marks",
    [
      ["Effect of $d$ decrease and $D$ increase on $\\beta$", "1 Mark"],
      ["Source slit proximity effect and coherence condition", "1 Mark"],
      ["White light pattern (white central fringe, coloured borders, uniform illumination)", "1 Mark"]
    ]
  ),

  // 10.17
  createQCard(
    "c12p-ch10-q17",
    "Q 10.17",
    "Exercise 10.17",
    `What are coherent sources of light? Why can two independent incandescent light bulbs never act as coherent sources? How are coherent sources produced in the laboratory?`,
    `<p><strong>Definition of Coherent Sources:</strong><br>
    Two light sources are defined to be <strong>coherent</strong> if they emit light waves that have:<br>
    1. Exactly the <strong>same frequency</strong> (and same wavelength), and<br>
    2. A <strong>constant phase difference</strong> (zero or fixed) with respect to time.</p>

    <p><strong>Why Two Independent Bulbs Cannot Be Coherent:</strong><br>
    • Light emission from an ordinary bulb occurs through spontaneous de-excitation of excited atoms.<br>
    • Individual atoms emit independent wave-packets lasting only about $10^{-8} \\text{ s}$.<br>
    • After each $10^{-8} \\text{ s}$, a fresh atom emits a wave-packet with an arbitrary, completely random initial phase.<br>
    • Consequently, the phase difference between waves from two independent bulbs changes abruptly millions of times per second ($10^8 \\text{ times s}^{-1}$).<br>
    • The human eye and optical detectors can only record the time-averaged intensity over many cycles, washing out interference fringes into uniform illumination ($I = I_1 + I_2$).</p>

    <p><strong>Laboratory Production of Coherent Sources:</strong><br>
    Coherent sources are derived from a <strong>single parent light source</strong> using two main methods:
    1. <strong>Division of Wavefront:</strong> Dividing a single wavefront into two parts using two pinholes/slits (Young’s experiment), Fresnel’s biprism, or Lloyd’s mirror.<br>
    2. <strong>Division of Amplitude:</strong> Dividing the amplitude of an incident beam into reflected and transmitted parts using partial reflection at thin films (Newton's rings, thin dielectric films).</p>`,
    "3 Marks",
    [
      ["Precise definition of coherence (frequency & constant phase)", "1 Mark"],
      ["Explanation of random atomic transitions ($10^{-8}\\text{ s}$) in independent bulbs", "1 Mark"],
      ["Techniques: Division of wavefront and division of amplitude", "1 Mark"]
    ]
  )
];

saveChapter(chNum, chTitle, svgDiagram, "Exercises 10.1 to 10.17", questions, nextChTitle);
