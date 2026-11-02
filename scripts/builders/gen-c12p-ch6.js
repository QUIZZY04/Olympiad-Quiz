// scripts/builders/gen-c12p-ch6.js
// Class 12 Physics - Chapter 6: Electromagnetic Induction (17 Questions)
const { createQCard, saveChapter } = require('./c12p-helper');

const chNum = 6;
const chTitle = "Electromagnetic Induction";
const nextChTitle = "Alternating Current";

const svgDiagram = `
  <div style="display:flex; justify-content:center; margin:24px 0;">
    <svg viewBox="0 0 760 220" style="width:100%; max-width:760px; height:auto; background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb"/>
        </marker>
        <marker id="arrowGreen" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#16a34a"/>
        </marker>
      </defs>
      <!-- Title -->
      <text x="380" y="26" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#1e293b">Faraday's Law $\\varepsilon = -\\frac{d\\Phi_B}{dt}$ & Motional EMF (Lenz's Law)</text>
      
      <!-- U-shaped rails -->
      <path d="M 120 70 L 320 70 M 120 150 L 320 150 M 120 70 L 120 150" fill="none" stroke="#64748b" stroke-width="4"/>
      <!-- Magnetic field into page (x) -->
      <g stroke="#94a3b8" stroke-width="1.5">
        <line x1="150" y1="90" x2="160" y2="100"/><line x1="160" y1="90" x2="150" y2="100"/>
        <line x1="200" y1="90" x2="210" y2="100"/><line x1="210" y1="90" x2="200" y2="100"/>
        <line x1="250" y1="90" x2="260" y2="100"/><line x1="260" y1="90" x2="250" y2="100"/>
        <line x1="150" y1="120" x2="160" y2="130"/><line x1="160" y1="120" x2="150" y2="130"/>
        <line x1="200" y1="120" x2="210" y2="130"/><line x1="210" y1="120" x2="200" y2="130"/>
        <line x1="250" y1="120" x2="260" y2="130"/><line x1="260" y1="120" x2="250" y2="130"/>
      </g>
      <!-- Moving Rod PQ -->
      <rect x="230" y="60" width="10" height="100" rx="3" fill="#ef4444" stroke="#b91c1c" stroke-width="1.5"/>
      <text x="235" y="52" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#b91c1c">P (+)</text>
      <text x="235" y="176" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#b91c1c">Q (-)</text>
      <!-- Velocity arrow -->
      <line x1="245" y1="110" x2="285" y2="110" stroke="#16a34a" stroke-width="2.5" marker-end="url(#arrowGreen)"/>
      <text x="290" y="114" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#16a34a">v</text>

      <!-- Key Formulas & Principles -->
      <text x="360" y="70" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b">Core Principles & Formulae:</text>
      <text x="360" y="95" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Magnetic Flux: $\\Phi_B = \\mathbf{B} \\cdot \\mathbf{A} = B A \\cos \\theta$</text>
      <text x="360" y="120" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Faraday's Law: $\\varepsilon = -N \\frac{d\\Phi_B}{dt}$ (Lenz's law gives negative sign)</text>
      <text x="360" y="145" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Motional EMF: $\\varepsilon = B l v$, Rotating rod: $\\varepsilon = \\frac{1}{2} B l^2 \\omega$</text>
      <text x="360" y="170" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Self Inductance: $\\varepsilon = -L \\frac{dI}{dt}$, $L = \\mu_0 n^2 A l = \\frac{\\mu_0 N^2 A}{l}$</text>
      <text x="360" y="195" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Mutual Inductance: $M_{12} = M_{21} = \\mu_0 n_1 n_2 \\pi r_1^2 l$</text>
    </svg>
  </div>
`;

const questions = [
  // 6.1
  createQCard(
    "c12p-ch6-q1",
    "Q 6.1",
    "Exercise 6.1",
    `Predict the direction of induced current in the situations described by the following figures:<br>
    <strong>(a)</strong> A bar magnet with its North pole facing a closed circular loop is moved rapidly towards the loop.<br>
    <strong>(b)</strong> The South pole of a magnet is being moved away from a closed planar coil.<br>
    <strong>(c)</strong> A tapping key is suddenly closed in a circuit with a coil placed near a second closed coil.<br>
    <strong>(d)</strong> A rheostat setting is adjusted such that current through the primary coil increases.<br>
    <strong>(e)</strong> A tapping key in the primary circuit is just released (opened).<br>
    <strong>(f)</strong> A straight wire carrying current is placed beside a circular loop, and the current in the straight wire is steadily decreasing.`,
    `<p><strong>Application of Lenz’s Law:</strong><br>
    Lenz's law states that the polarity of induced emf is such that it produces a current whose magnetic field opposes the change in magnetic flux that produces it.</p>
    <ol style="line-height:1.8;">
      <li><strong>(a) North pole approaching loop:</strong><br>
      The magnetic flux through the loop increases. To oppose the approach of the North pole, the facing side of the loop develops a <strong>North polarity</strong>. According to the clock rule, the induced current flows in the <strong>counter-clockwise direction</strong> (anti-clockwise) when viewed from the magnet's side.</li>
      <li><strong>(b) South pole moving away from coil:</strong><br>
      The magnetic flux is decreasing. To oppose the receding South pole, the facing side of the coil develops an attracting <strong>North polarity</strong>. Hence, the induced current flows in the <strong>anti-clockwise direction</strong> as seen from the side of the retreating magnet.</li>
      <li><strong>(c) Tapping key closed:</strong><br>
      When the key is closed, current grows from zero to maximum in the primary coil, causing an increasing magnetic flux through the adjacent secondary coil. By Lenz’s law, the secondary coil develops an induced current in the <strong>opposite direction</strong> to the primary current to oppose the flux buildup.</li>
      <li><strong>(d) Current in primary increased via rheostat:</strong><br>
      As the current in the primary increases, flux linked with the secondary increases. By Lenz’s law, the induced current in the secondary circulates in a direction <strong>opposite to the direction of current in the primary coil</strong>.</li>
      <li><strong>(e) Tapping key just opened:</strong><br>
      As the key is opened, current and magnetic flux decay to zero. By Lenz’s law, the secondary coil induces a current in the <strong>same direction</strong> as the collapsing primary current in order to sustain the diminishing flux.</li>
      <li><strong>(f) Decreasing current in adjacent straight wire:</strong><br>
      If the current in the straight wire is downwards or upwards and decreasing, the magnetic flux through the loop decreases. The induced current in the loop will circulate in such a direction as to reinforce the existing field (e.g. if field is into the page, induced current flows clockwise to create more inward field).</li>
    </ol>`,
    "3 Marks",
    [
      ["Statement and explanation of Lenz's Law", "1 Mark"],
      ["Correct determination of directions for cases (a), (b), (c)", "1 Mark"],
      ["Correct determination of directions for cases (d), (e), (f)", "1 Mark"]
    ]
  ),

  // 6.2
  createQCard(
    "c12p-ch6-q2",
    "Q 6.2",
    "Exercise 6.2",
    `Use Lenz’s law to determine the direction of induced current in the situations described by:<br>
    <strong>(a)</strong> A wire of irregular shape turning into a circular shape when placed in a uniform magnetic field directed into the plane of the paper.<br>
    <strong>(b)</strong> A circular loop being deformed into a narrow straight wire in a uniform magnetic field directed outwards from the plane of the paper.`,
    `<p><strong>(a) Wire of irregular shape turning into a circular loop:</strong><br>
    • For a given perimeter, a circle encloses the maximum possible geometric area.<br>
    • As the irregular loop turns circular, its enclosed area $A$ increases. Consequently, the inward magnetic flux $\\Phi = B A$ through the loop <strong>increases</strong>.<br>
    • By Lenz’s law, the induced current must oppose this increase by generating an <strong>outward</strong> magnetic field ($\odot$).<br>
    • By the right-hand grip rule, an outward magnetic field requires an induced current flowing in the <strong>anticlockwise direction</strong> (along the perimeter $a-d-c-b-a$).</p>

    <p><strong>(b) Circular loop deformed into a narrow straight wire:</strong><br>
    • When the circular loop is flattened into a narrow wire, its enclosed area shrinks towards zero.<br>
    • Thus, the outward magnetic flux $\\Phi$ through the loop <strong>decreases</strong>.<br>
    • By Lenz’s law, the induced current must oppose this decay by generating additional <strong>outward</strong> magnetic field ($\odot$) to sustain the flux.<br>
    • To produce an outward magnetic field, the induced current must circulate in the <strong>anticlockwise direction</strong>.</p>`,
    "2 Marks",
    [
      ["Area increase analysis & anticlockwise direction for case (a)", "1 Mark"],
      ["Area decrease analysis & anticlockwise direction for case (b)", "1 Mark"]
    ]
  ),

  // 6.3
  createQCard(
    "c12p-ch6-q3",
    "Q 6.3",
    "Exercise 6.3",
    `A long solenoid with 15 turns per cm has a small loop of area $2.0 \\text{ cm}^2$ placed inside the solenoid normal to its axis. If the current carried by the solenoid changes steadily from $2.0 \\text{ A}$ to $4.0 \\text{ A}$ in $0.1 \\text{ s}$, what is the induced emf in the loop while the current is changing?`,
    `<p><strong>Given Data:</strong><br>
    Turns per unit length $n = 15 \\text{ turns cm}^{-1} = 15 \\times 10^2 \\text{ turns m}^{-1} = 1500 \\text{ m}^{-1}$<br>
    Area of the small loop $A = 2.0 \\text{ cm}^2 = 2.0 \\times 10^{-4} \\text{ m}^2$<br>
    Change in current $\\Delta I = I_2 - I_1 = 4.0 - 2.0 = 2.0 \\text{ A}$<br>
    Time interval $\\Delta t = 0.1 \\text{ s}$<br>
    Permeability of free space $\\mu_0 = 4\\pi \\times 10^{-7} \\text{ T m A}^{-1}$</p>

    <p><strong>Step 1: Rate of change of magnetic field inside the solenoid:</strong><br>
    The magnetic field inside a long solenoid is:
    \\[
    B = \\mu_0 n I
    \\]
    Rate of change of magnetic field:
    \\[
    \\frac{dB}{dt} = \\mu_0 n \\frac{dI}{dt} = (4\\pi \\times 10^{-7}) \\times 1500 \\times \\left( \\frac{2.0}{0.1} \\right)
    \\]
    \\[
    \\frac{dB}{dt} = (4\\pi \\times 10^{-7}) \\times 1500 \\times 20 = 4\\pi \\times 10^{-7} \\times 30000 = 1.2\\pi \\times 10^{-2} \\text{ T s}^{-1}
    \\]</p>

    <p><strong>Step 2: Induced EMF in the loop:</strong><br>
    Since the loop's plane is normal to the solenoid axis, $\\theta = 0^\\circ$ and $\\Phi_B = B A$:
    \\[
    |\\varepsilon| = \\frac{d\\Phi_B}{dt} = A \\frac{dB}{dt}
    \\]
    \\[
    |\\varepsilon| = (2.0 \\times 10^{-4}) \\times (1.2\\pi \\times 10^{-2}) = 2.4\\pi \\times 10^{-6} \\text{ V}
    \\]
    Taking $\\pi \\approx 3.1416$:
    \\[
    |\\varepsilon| = 2.4 \\times 3.1416 \\times 10^{-6} \\approx 7.54 \\times 10^{-6} \\text{ V} = 7.5 \\ \\mu\\text{V}
    \\]</p>`,
    "2 Marks",
    [
      ["Formula for solenoid field $B = \\mu_0 n I$ and $dB/dt$", "1 Mark"],
      ["Formula $\\varepsilon = A dB/dt$ and final answer $7.54 \\times 10^{-6}\\text{ V}$", "1 Mark"]
    ]
  ),

  // 6.4
  createQCard(
    "c12p-ch6-q4",
    "Q 6.4",
    "Exercise 6.4",
    `A rectangular wire loop of sides $8 \\text{ cm}$ and $2 \\text{ cm}$ with a small cut is moving out of a region of uniform magnetic field of magnitude $0.3 \\text{ T}$ directed normal to the loop. What is the emf developed across the cut if the velocity of the loop is $1 \\text{ cm s}^{-1}$ in a direction normal to the:<br>
    <strong>(a)</strong> longer side,<br>
    <strong>(b)</strong> shorter side of the loop?<br>
    For how long does the induced voltage last in each case?`,
    `<p><strong>Given:</strong><br>
    Longer side $l = 8 \\text{ cm} = 0.08 \\text{ m}$<br>
    Shorter side $b = 2 \\text{ cm} = 0.02 \\text{ m}$<br>
    Magnetic field $B = 0.3 \\text{ T}$<br>
    Velocity $v = 1 \\text{ cm s}^{-1} = 0.01 \\text{ m s}^{-1}$</p>

    <p><strong>(a) Moving normal to the longer side:</strong><br>
    Here the side cutting across the magnetic field lines is the longer side ($l = 8 \\text{ cm} = 0.08 \\text{ m}$):
    \\[
    \\varepsilon = B l v = 0.3 \\times 0.08 \\times 0.01 = 2.4 \\times 10^{-4} \\text{ V} = 0.24 \\text{ mV}
    \\]
    <strong>Duration $t_1$:</strong><br>
    The loop moves a distance equal to the shorter side $b = 2 \\text{ cm}$ to exit the field entirely:
    \\[
    t_1 = \\frac{b}{v} = \\frac{2 \\text{ cm}}{1 \\text{ cm s}^{-1}} = 2.0 \\text{ s}
    \\]</p>

    <p><strong>(b) Moving normal to the shorter side:</strong><br>
    Here the side cutting across the field is the shorter side ($b = 2 \\text{ cm} = 0.02 \\text{ m}$):
    \\[
    \\varepsilon = B b v = 0.3 \\times 0.02 \\times 0.01 = 0.6 \\times 10^{-4} \\text{ V} = 6.0 \\times 10^{-5} \\text{ V} = 0.06 \\text{ mV}
    \\]
    <strong>Duration $t_2$:</strong><br>
    The loop must move a distance equal to the longer side $l = 8 \\text{ cm}$ to exit the field:
    \\[
    t_2 = \\frac{l}{v} = \\frac{8 \\text{ cm}}{1 \\text{ cm s}^{-1}} = 8.0 \\text{ s}
    \\]</p>`,
    "3 Marks",
    [
      ["Motional emf formula $\\varepsilon = Blv$", "0.5 Mark"],
      ["Case (a): $\\varepsilon = 0.24\\text{ mV}$ and duration $t_1 = 2\\text{ s}$", "1.25 Marks"],
      ["Case (b): $\\varepsilon = 0.06\\text{ mV}$ and duration $t_2 = 8\\text{ s}$", "1.25 Marks"]
    ]
  ),

  // 6.5
  createQCard(
    "c12p-ch6-q5",
    "Q 6.5",
    "Exercise 6.5",
    `A $1.0 \\text{ m}$ long metallic rod is rotated with an angular frequency of $400 \\text{ rad s}^{-1}$ about an axis normal to the rod passing through its one end. The other end of the rod is in contact with a circular metallic ring. A constant and uniform magnetic field of $0.5 \\text{ T}$ parallel to the axis exists everywhere. Calculate the emf developed between the centre and the ring.`,
    `<p><strong>Given Data:</strong><br>
    Length of rotating rod $R = l = 1.0 \\text{ m}$<br>
    Angular frequency $\\omega = 400 \\text{ rad s}^{-1}$<br>
    Magnetic field $B = 0.5 \\text{ T}$</p>

    <p><strong>Derivation of Induced EMF in a Rotating Rod:</strong><br>
    Consider an infinitesimal element of length $dr$ at distance $r$ from the axis of rotation.<br>
    The linear speed of this element is $v = r \\omega$.<br>
    The motional emf induced across this small element is:
    \\[
    d\\varepsilon = B v dr = B (r\\omega) dr
    \\]
    Integrating from $r = 0$ to $r = l$:
    \\[
    \\varepsilon = \\int_0^l B \\omega r \\, dr = B \\omega \\left[ \\frac{r^2}{2} \\right]_0^l = \\frac{1}{2} B l^2 \\omega
    \\]</p>

    <p><strong>Calculation:</strong><br>
    \\[
    \\varepsilon = \\frac{1}{2} \\times 0.5 \\times (1.0)^2 \\times 400 = 0.25 \\times 400 = 100 \\text{ V}
    \\]
    <p><strong>Potential Difference:</strong> The emf developed between the centre (axis) and the outer circular metallic ring is <strong>$100 \\text{ V}$</strong>.</p>`,
    "2 Marks",
    [
      ["Derivation/statement of formula $\\varepsilon = \\frac{1}{2} B l^2 \\omega$", "1 Mark"],
      ["Correct substitution and result $\\varepsilon = 100\\text{ V}$", "1 Mark"]
    ]
  ),

  // 6.6
  createQCard(
    "c12p-ch6-q6",
    "Q 6.6",
    "Exercise 6.6",
    `A circular coil of radius $8.0 \\text{ cm}$ and 20 turns is rotated about its vertical diameter with an angular speed of $50 \\text{ rad s}^{-1}$ in a uniform horizontal magnetic field of magnitude $3.0 \\times 10^{-2} \\text{ T}$.<br>
    <strong>(a)</strong> Obtain the maximum and average emf induced in the coil.<br>
    <strong>(b)</strong> If the coil forms a closed loop of resistance $10 \\ \\Omega$, calculate the maximum value of current in the coil.<br>
    <strong>(c)</strong> Calculate the average power loss due to Joule heating. Where does this power come from?`,
    `<p><strong>Given Data:</strong><br>
    Radius $r = 8.0 \\text{ cm} = 0.08 \\text{ m}$<br>
    Area of coil $A = \\pi r^2 = \\pi (0.08)^2 = 6.4\\pi \\times 10^{-3} \\text{ m}^2$<br>
    Number of turns $N = 20$<br>
    Angular speed $\\omega = 50 \\text{ rad s}^{-1}$<br>
    Magnetic field $B = 3.0 \\times 10^{-2} \\text{ T}$<br>
    Resistance of loop $R = 10 \\ \\Omega$</p>

    <p><strong>(a) Maximum and Average Induced EMF:</strong><br>
    The instantaneous induced emf is given by:
    \\[
    \\varepsilon = \\varepsilon_0 \\sin \\omega t, \\quad \\text{where } \\varepsilon_0 = N B A \\omega
    \\]
    \\[
    \\varepsilon_0 = 20 \\times (3.0 \\times 10^{-2}) \\times (\\pi \\times 0.08^2) \\times 50
    \\]
    \\[
    \\varepsilon_0 = 1000 \\times (3.0 \\times 10^{-2}) \\times (0.0064\\pi) = 30 \\times 0.0064 \\pi = 0.192\\pi \\approx 0.603 \\text{ V}
    \\]
    • <strong>Maximum EMF:</strong> $\\varepsilon_{max} = \\varepsilon_0 \\approx 0.603 \\text{ V} = 0.60 \\text{ V}$<br>
    • <strong>Average EMF over a full cycle:</strong>
    \\[
    \\langle \\varepsilon \\rangle = \\frac{1}{T} \\int_0^T \\varepsilon_0 \\sin \\omega t \\, dt = 0 \\text{ V}
    \\]</p>

    <p><strong>(b) Maximum Current:</strong><br>
    \\[
    I_0 = \\frac{\\varepsilon_0}{R} = \\frac{0.603}{10} \\approx 0.0603 \\text{ A} = 60.3 \\text{ mA}
    \\]</p>

    <p><strong>(c) Average Power Loss:</strong><br>
    \\[
    P_{avg} = \\frac{\\varepsilon_0 I_0}{2} = \\frac{\\varepsilon_0^2}{2R} = \\frac{(0.603)^2}{2 \\times 10} = \\frac{0.3638}{20} \\approx 0.0182 \\text{ W} = 1.82 \\times 10^{-2} \\text{ W}
    \\]
    <strong>Source of Power:</strong><br>
    The induced current produces a counter-torque opposing the rotation of the coil (by Lenz's law). To keep the coil rotating at constant angular speed $\\omega$, an <strong>external mechanical agent must perform work against this magnetic torque</strong>. This mechanical work done is converted into electric energy and dissipated as Joule heat.</p>`,
    "3 Marks",
    [
      ["Calculation of $\\varepsilon_0 = 0.603\\text{ V}$ and $\\langle \\varepsilon \\rangle = 0$", "1 Mark"],
      ["Peak current $I_0 = 0.0603\\text{ A}$ and average power $P_{avg} = 0.0182\\text{ W}$", "1 Mark"],
      ["Clear explanation of the origin of power (external mechanical agent)", "1 Mark"]
    ]
  ),

  // 6.7
  createQCard(
    "c12p-ch6-q7",
    "Q 6.7",
    "Exercise 6.7",
    `A horizontal straight wire $10 \\text{ m}$ long extending from east to west is falling with a speed of $5.0 \\text{ m s}^{-1}$, at right angles to the horizontal component of the earth’s magnetic field, $0.30 \\times 10^{-4} \\text{ Wb m}^{-2}$.<br>
    <strong>(a)</strong> What is the instantaneous value of the emf induced in the wire?<br>
    <strong>(b)</strong> What is the direction of the emf?<br>
    <strong>(c)</strong> Which end of the wire is at the higher electrical potential?`,
    `<p><strong>Given:</strong><br>
    Length of wire $l = 10 \\text{ m}$<br>
    Falling speed $v = 5.0 \\text{ m s}^{-1}$ (directed vertically downwards)<br>
    Horizontal component of earth's field $B_H = 0.30 \\times 10^{-4} \\text{ T}$ (directed South to North)</p>

    <p><strong>(a) Instantaneous Value of Induced EMF:</strong><br>
    Since $\\mathbf{v}$, $\\mathbf{B}_H$, and $\\mathbf{l}$ are mutually perpendicular:
    \\[
    \\varepsilon = B_H l v = (0.30 \\times 10^{-4} \\text{ T}) \\times (10 \\text{ m}) \\times (5.0 \\text{ m s}^{-1})
    \\]
    \\[
    \\varepsilon = 1.5 \\times 10^{-3} \\text{ V} = 1.5 \\text{ mV}
    \\]</p>

    <p><strong>(b) Direction of Induced EMF:</strong><br>
    Using Fleming’s Right-Hand Rule (or $\\mathbf{F} = q(\\mathbf{v} \\times \\mathbf{B})$ on positive charges):<br>
    • Thumb points vertically downwards (direction of motion $\\mathbf{v}$).<br>
    • Forefinger points North (direction of magnetic field $\\mathbf{B}_H$).<br>
    • Central finger points along the direction of induced current / emf: from <strong>West to East</strong>.</p>

    <p><strong>(c) Higher Potential End:</strong><br>
    Positive charges are pushed towards the East end by the magnetic Lorentz force. Therefore, electrons accumulate at the West end while a positive charge builds at the East end. Hence, the <strong>Western end</strong> is at higher electrical potential (acting as the positive terminal of the induced cell).</p>`,
    "3 Marks",
    [
      ["Calculation $\\varepsilon = B_H l v = 1.5 \\times 10^{-3}\\text{ V}$", "1 Mark"],
      ["Fleming's right-hand rule determining West-to-East direction", "1 Mark"],
      ["Identification of Western end at higher potential", "1 Mark"]
    ]
  ),

  // 6.8
  createQCard(
    "c12p-ch6-q8",
    "Q 6.8",
    "Exercise 6.8",
    `An aircraft with a wingspan of $25 \\text{ m}$ flies horizontally at a speed of $1800 \\text{ km h}^{-1}$ in a region where the vertical component of the earth's magnetic field is $5.0 \\times 10^{-4} \\text{ T}$. What is the magnetic emf generated between the tips of the wings?`,
    `<p><strong>Given:</strong><br>
    Wingspan $l = 25 \\text{ m}$<br>
    Speed $v = 1800 \\text{ km h}^{-1} = 1800 \\times \\frac{5}{18} \\text{ m s}^{-1} = 500 \\text{ m s}^{-1}$<br>
    Vertical component of earth's field $B_V = 5.0 \\times 10^{-4} \\text{ T}$</p>

    <p><strong>Physical Principle:</strong><br>
    The horizontal flight of the aircraft cuts only the <strong>vertical component</strong> $B_V$ of the earth's magnetic field lines at right angles. The horizontal component $B_H$ is parallel to the horizontal velocity vector and does not contribute to the motional emf across the wingspan.</p>

    <p><strong>Formula and Calculation:</strong><br>
    \\[
    \\varepsilon = B_V l v
    \\]
    \\[
    \\varepsilon = (5.0 \\times 10^{-4} \\text{ T}) \\times (25 \\text{ m}) \\times (500 \\text{ m s}^{-1})
    \\]
    \\[
    \\varepsilon = 5.0 \\times 10^{-4} \\times 12500 = 6.25 \\text{ V}
    \\]
    <p><strong>Result:</strong> An emf of <strong>$6.25 \\text{ V}$</strong> is generated between the tips of the wings.</p>`,
    "2 Marks",
    [
      ["Conversion of speed $v = 500\\text{ m s}^{-1}$ and selection of $B_V$", "1 Mark"],
      ["Formula $\\varepsilon = B_V l v$ and evaluation $\\varepsilon = 6.25\\text{ V}$", "1 Mark"]
    ]
  ),

  // 6.9
  createQCard(
    "c12p-ch6-q9",
    "Q 6.9",
    "Exercise 6.9",
    `A pair of adjacent coils has a mutual inductance of $1.5 \\text{ H}$. If the current in one coil changes from 0 to $20 \\text{ A}$ in $0.5 \\text{ s}$, what is the change of flux linkage with the other coil?`,
    `<p><strong>Given:</strong><br>
    Mutual inductance $M = 1.5 \\text{ H}$<br>
    Initial current $I_1 = 0 \\text{ A}$, Final current $I_2 = 20 \\text{ A}$<br>
    Change in current $\\Delta I = 20 - 0 = 20 \\text{ A}$<br>
    Time interval $\\Delta t = 0.5 \\text{ s}$</p>

    <p><strong>Relationship between Flux Linkage and Mutual Inductance:</strong><br>
    The total magnetic flux linkage $N_2 \\Phi_2$ in the secondary coil is directly proportional to the current $I_1$ in the primary coil:
    \\[
    N_2 \\Phi_2 = M I_1
    \\]
    Therefore, the change of flux linkage is:
    \\[
    \\Delta (N_2 \\Phi_2) = M \\Delta I
    \\]
    \\[
    \\Delta \\Phi = 1.5 \\text{ H} \\times 20 \\text{ A} = 30 \\text{ Wb}
    \\]
    <p><strong>Result:</strong> The change of magnetic flux linkage with the other coil is <strong>$30 \\text{ Weber (Wb)}$</strong>.</p>`,
    "2 Marks",
    [
      ["Formula for flux linkage $\\Delta \\Phi = M \\Delta I$", "1 Mark"],
      ["Calculation $\\Delta \\Phi = 30\\text{ Wb}$", "1 Mark"]
    ]
  ),

  // 6.10
  createQCard(
    "c12p-ch6-q10",
    "Q 6.10",
    "Exercise 6.10",
    `A jet plane is travelling towards west at a speed of $1800 \\text{ km h}^{-1}$. What is the voltage difference developed between the ends of the wing having a span of $25 \\text{ m}$, if the Earth’s magnetic field at the location has a magnitude of $5.0 \\times 10^{-4} \\text{ T}$ and the dip angle is $30^\\circ$?`,
    `<p><strong>Given:</strong><br>
    Speed $v = 1800 \\text{ km h}^{-1} = 1800 \\times \\frac{5}{18} = 500 \\text{ m s}^{-1}$ (flying horizontally West)<br>
    Wingspan $l = 25 \\text{ m}$ (directed North-South)<br>
    Total Earth's field $B_E = 5.0 \\times 10^{-4} \\text{ T}$<br>
    Angle of dip $\\delta = 30^\\circ$</p>

    <p><strong>Relevant Field Component:</strong><br>
    The plane flies horizontally, so its wings cut only the <strong>vertical component</strong> $B_V$ of the earth’s magnetic field:
    \\[
    B_V = B_E \\sin \\delta = (5.0 \\times 10^{-4}) \\times \\sin 30^\\circ = 5.0 \\times 10^{-4} \\times 0.5 = 2.5 \\times 10^{-4} \\text{ T}
    \\]</p>

    <p><strong>Induced Voltage Difference:</strong><br>
    \\[
    \\varepsilon = B_V l v = (2.5 \\times 10^{-4} \\text{ T}) \\times (25 \\text{ m}) \\times (500 \\text{ m s}^{-1})
    \\]
    \\[
    \\varepsilon = 2.5 \\times 10^{-4} \\times 12500 = 3.125 \\text{ V}
    \\]
    <p><strong>Result:</strong> The voltage difference developed between the wing tips is <strong>$3.125 \\text{ V}$</strong>.</p>`,
    "2 Marks",
    [
      ["Calculation of vertical component $B_V = B_E\\sin\\delta = 2.5 \\times 10^{-4}\\text{ T}$", "1 Mark"],
      ["Formula $\\varepsilon = B_V l v$ and result $3.125\\text{ V}$", "1 Mark"]
    ]
  ),

  // 6.11
  createQCard(
    "c12p-ch6-q11",
    "Q 6.11",
    "Exercise 6.11",
    `An air-cored solenoid with length $30 \\text{ cm}$, area of cross-section $25 \\text{ cm}^2$ and number of turns 500, carries a current of $2.5 \\text{ A}$. The current is suddenly switched off in a brief time of $10^{-3} \\text{ s}$. How much is the average back emf induced across the ends of the open switch in the circuit? Ignore the variation in magnetic field near the ends of the solenoid.`,
    `<p><strong>Given:</strong><br>
    Length $l = 30 \\text{ cm} = 0.30 \\text{ m}$<br>
    Area $A = 25 \\text{ cm}^2 = 25 \\times 10^{-4} \\text{ m}^2$<br>
    Number of turns $N = 500$<br>
    Initial current $I_1 = 2.5 \\text{ A}$, Final current $I_2 = 0$<br>
    Time interval $\\Delta t = 10^{-3} \\text{ s}$<br>
    $\\mu_0 = 4\\pi \\times 10^{-7} \\text{ T m A}^{-1}$</p>

    <p><strong>Step 1: Self-Inductance of the Solenoid $L$:</strong><br>
    \\[
    L = \\frac{\\mu_0 N^2 A}{l}
    \\]
    \\[
    L = \\frac{(4\\pi \\times 10^{-7}) \\times (500)^2 \\times (25 \\times 10^{-4})}{0.30}
    \\]
    \\[
    L = \\frac{(4\\pi \\times 10^{-7}) \\times (2.5 \\times 10^5) \\times (2.5 \\times 10^{-3})}{0.30} = \\frac{4\\pi \\times 10^{-7} \\times 625}{0.30} = \\frac{2500\\pi \\times 10^{-7}}{0.30}
    \\]
    \\[
    L = \\frac{2.5\\pi \\times 10^{-4}}{0.30} \\approx 2.618 \\times 10^{-3} \\text{ H} = 2.62 \\text{ mH}
    \\]</p>

    <p><strong>Step 2: Average Induced Back EMF $|\\varepsilon|$:</strong><br>
    \\[
    |\\varepsilon| = L \\left| \\frac{\\Delta I}{\\Delta t} \\right| = (2.618 \\times 10^{-3}) \\times \\left( \\frac{2.5}{10^{-3}} \\right)
    \\]
    \\[
    |\\varepsilon| = 2.618 \\times 2.5 \\approx 6.545 \\text{ V} \\approx 6.5 \\text{ V}
    \\]</p>`,
    "3 Marks",
    [
      ["Formula for self inductance $L = \\frac{\\mu_0 N^2 A}{l}$ and evaluation $L = 2.62\\text{ mH}$", "1.5 Marks"],
      ["Formula $|\\varepsilon| = L \\frac{\\Delta I}{\\Delta t}$ and answer $|\\varepsilon| \\approx 6.5\\text{ V}$", "1.5 Marks"]
    ]
  ),

  // 6.12
  createQCard(
    "c12p-ch6-q12",
    "Q 6.12",
    "Exercise 6.12",
    `<strong>(a)</strong> A small loop of radius $r$ is placed at the centre of a large loop of radius $R$ ($r \\ll R$) coplanarly. Find the mutual inductance of the system.<br>
    <strong>(b)</strong> Explain the Reciprocity Theorem ($M_{12} = M_{21}$) and why the mutual inductance does not depend on which coil carries current.`,
    `<p><strong>(a) Derivation of Mutual Inductance $M$:</strong><br>
    Let a current $I_1$ pass through the outer large circular loop 1 of radius $R$.<br>
    The magnetic field produced at its centre is:
    \\[
    B_1 = \\frac{\\mu_0 I_1}{2R}
    \\]
    Since $r \\ll R$, the magnetic field can be treated as essentially uniform across the small area $A_2 = \\pi r^2$ of the inner loop 2.<br>
    The magnetic flux through the small inner loop is:
    \\[
    \\Phi_2 = B_1 A_2 = \\left( \\frac{\\mu_0 I_1}{2R} \\right) (\\pi r^2) = \\frac{\\mu_0 \\pi r^2}{2R} I_1
    \\]
    By definition of mutual inductance $\\Phi_2 = M_{21} I_1$:
    \\[
    M = \\frac{\\mu_0 \\pi r^2}{2R}
    \\]</p>

    <p><strong>(b) Reciprocity Theorem ($M_{12} = M_{21}$):</strong><br>
    • The Reciprocity theorem states that the mutual inductance of two circuits is identical regardless of which circuit serves as the source of current and which serves as the pick-up loop ($M_{12} = M_{21}$).<br>
    • If current were instead passed through the tiny loop 2, calculating the inhomogeneous field over the area of the large loop 1 would be mathematically complex, yet by reciprocity, the ratio $\\frac{\\Phi_1}{I_2}$ yields precisely the identical constant:
    \\[
    M = \\frac{\\mu_0 \\pi r^2}{2R}
    \\]
    • The mutual inductance depends exclusively on geometric factors (areas, shapes, relative orientation, separation) and the magnetic permeability of the medium.</p>`,
    "3 Marks",
    [
      ["Field at centre of large loop $B_1 = \\frac{\\mu_0 I_1}{2R}$", "1 Mark"],
      ["Flux calculation and formula $M = \\frac{\\mu_0 \\pi r^2}{2R}$", "1 Mark"],
      ["Statement and physical basis of Reciprocity Theorem", "1 Mark"]
    ]
  ),

  // 6.13
  createQCard(
    "c12p-ch6-q13",
    "Q 6.13",
    "Exercise 6.13",
    `A line charge $\\lambda$ per unit length is lodged uniformly onto the rim of a wheel of mass $M$ and radius $R$. The wheel has light non-conducting spokes and is free to rotate without friction about its axis. A uniform magnetic field extends over a circular region of radius $a$ ($a < R$) concentric with the wheel, pointing normal to the plane of the wheel. If the field is switched off, what is the final angular velocity $\\omega$ of the wheel?`,
    `<p><strong>Physical Principle:</strong><br>
    When the magnetic field decreases to zero, a non-electrostatic, non-conservative induced electric field $\\mathbf{E}$ is created along concentric circular loops according to Faraday’s law of electromagnetic induction:
    \\[
    \\oint \\mathbf{E} \\cdot d\\mathbf{l} = -\\frac{d\\Phi_B}{dt}
    \\]
    This electric field exerts an electric torque on the line charge $\\lambda$ distributed along the rim, accelerating the wheel to angular velocity $\\omega$.</p>

    <p><strong>Step 1: Induced Electric Field at the Rim ($r = R$):</strong><br>
    The circular integration path at radius $R$ encloses a total magnetic flux $\\Phi_B = B (\\pi a^2)$ (since field exists only up to $r = a$):
    \\[
    E (2\\pi R) = -\\frac{d}{dt} (B \\pi a^2) = -\\pi a^2 \\frac{dB}{dt}
    \\]
    \\[
    E = -\\frac{a^2}{2R} \\frac{dB}{dt}
    \\]</p>

    <p><strong>Step 2: Torque on the Rim:</strong><br>
    Total charge on the rim: $Q = \\lambda (2\\pi R)$<br>
    Tangential force on the rim: $F = Q E = -\\lambda (2\\pi R) \\left( \\frac{a^2}{2R} \\frac{dB}{dt} \\right) = -\\pi a^2 \\lambda \\frac{dB}{dt}$<br>
    Torque: $\\tau = F R = -\\pi a^2 R \\lambda \\frac{dB}{dt}$</p>

    <p><strong>Step 3: Angular Impulse and Final Angular Velocity:</strong><br>
    Angular impulse is the integral of torque over time:
    \\[
    \\int \\tau \\, dt = \\Delta L = I_{wheel} \\omega
    \\]
    Since the wheel mass $M$ is concentrated at radius $R$, moment of inertia $I_{wheel} = M R^2$:
    \\[
    M R^2 \\omega = -\\pi a^2 R \\lambda \\int_B^0 dB = \\pi a^2 R \\lambda B
    \\]
    \\[
    \\omega = \\frac{\\pi a^2 R \\lambda B}{M R^2} = \\frac{\\pi a^2 \\lambda B}{M R}
    \\]</p>`,
    "3 Marks",
    [
      ["Faraday's law connecting induced electric field $E(2\\pi R) = -\\pi a^2 dB/dt$", "1 Mark"],
      ["Formulation of torque $\\tau = Q E R$", "1 Mark"],
      ["Angular impulse integration yielding $\\omega = \\frac{\\pi a^2 \\lambda B}{M R}$", "1 Mark"]
    ]
  ),

  // 6.14
  createQCard(
    "c12p-ch6-q14",
    "Q 6.14",
    "Exercise 6.14",
    `A metal rod $PQ$ of mass $m$ and length $l$ rests on smooth horizontal frictionless rails connected to a resistance $R$. A uniform magnetic field $B$ is perpendicular to the plane of the rails. The rod is given an initial velocity $v_0$.<br>
    <strong>(a)</strong> Show that the velocity of the rod at time $t$ is $v(t) = v_0 e^{-t/\\tau}$ where $\\tau = \\frac{m R}{B^2 l^2}$.<br>
    <strong>(b)</strong> Show that the total energy dissipated in the resistor equals the initial kinetic energy of the rod.`,
    `<p><strong>(a) Derivation of Velocity $v(t)$:</strong><br>
    When the rod moves with instantaneous velocity $v$, the motional emf induced is $\\varepsilon = B l v$.<br>
    The induced current is:
    \\[
    I = \\frac{\\varepsilon}{R} = \\frac{B l v}{R}
    \\]
    The magnetic Lorentz force opposing the motion (by Lenz's law) is:
    \\[
    F = -I l B = -\\left( \\frac{B l v}{R} \\right) l B = -\\frac{B^2 l^2}{R} v
    \\]
    By Newton's second law:
    \\[
    m \\frac{dv}{dt} = -\\frac{B^2 l^2}{R} v \\implies \\frac{dv}{v} = -\\frac{B^2 l^2}{m R} dt = -\\frac{dt}{\\tau} \\quad \\left( \\text{where } \\tau = \\frac{m R}{B^2 l^2} \\right)
    \\]
    Integrating from $t = 0$ ($v = v_0$) to $t$:
    \\[
    \\ln \\left( \\frac{v}{v_0} \\right) = -\\frac{t}{\\tau} \\implies v(t) = v_0 e^{-t/\\tau}
    \\]</p>

    <p><strong>(b) Conservation of Energy:</strong><br>
    The instantaneous rate of Joule heating dissipated in the resistor is:
    \\[
    P(t) = I^2 R = \\frac{B^2 l^2 v^2}{R} = \\frac{B^2 l^2}{R} v_0^2 e^{-2t/\\tau}
    \\]
    Total energy dissipated from $t = 0$ to $t = \\infty$:
    \\[
    E = \\int_0^\\infty P(t) \\, dt = \\frac{B^2 l^2 v_0^2}{R} \\int_0^\\infty e^{-2t/\\tau} \\, dt
    \\]
    \\[
    E = \\frac{B^2 l^2 v_0^2}{R} \\left[ \\frac{e^{-2t/\\tau}}{-2/\\tau} \\right]_0^\\infty = \\frac{B^2 l^2 v_0^2}{R} \\left( \\frac{\\tau}{2} \\right)
    \\]
    Substituting $\\tau = \\frac{m R}{B^2 l^2}$:
    \\[
    E = \\frac{B^2 l^2 v_0^2}{R} \\left( \\frac{m R}{2 B^2 l^2} \\right) = \\frac{1}{2} m v_0^2
    \\]
    This rigorously verifies that the total thermal energy dissipated in the resistor equals the initial kinetic energy $\\frac{1}{2} m v_0^2$ of the rod.</p>`,
    "3 Marks",
    [
      ["Equation of motion $m dv/dt = -B^2 l^2 v / R$ and integration to $v_0 e^{-t/\\tau}$", "1.5 Marks"],
      ["Integral of Joule heat $\\int_0^\\infty I^2 R dt$ proving $E = \\frac{1}{2}mv_0^2$", "1.5 Marks"]
    ]
  ),

  // 6.15
  createQCard(
    "c12p-ch6-q15",
    "Q 6.15",
    "Exercise 6.15",
    `A uniform magnetic field $B$ exists in a cylindrical region of radius $R$. The magnetic field changes with time at a constant rate $\\frac{dB}{dt}$. Calculate the induced electric field at a distance $r$ from the axis for:<br>
    <strong>(a)</strong> $r < R$ (inside the cylindrical region),<br>
    <strong>(b)</strong> $r > R$ (outside the cylindrical region).`,
    `<p><strong>Faraday's Law in Integral Form:</strong><br>
    A time-varying magnetic field produces an induced non-conservative electric field whose line integral along a closed path equals the rate of change of magnetic flux enclosed:
    \\[
    \\oint \\mathbf{E} \\cdot d\\mathbf{l} = -\\frac{d\\Phi_B}{dt}
    \\]
    By cylindrical symmetry, lines of $\\mathbf{E}$ are concentric circles centered on the axis, with magnitude $E$ constant along each circle of radius $r$. Thus:
    \\[
    \\oint \\mathbf{E} \\cdot d\\mathbf{l} = E (2\\pi r)
    \\]</p>

    <p><strong>(a) For $r < R$ (Inside):</strong><br>
    The circular loop of radius $r$ encloses area $A = \\pi r^2$:
    \\[
    \\Phi_B = B (\\pi r^2) \\implies \\frac{d\\Phi_B}{dt} = \\pi r^2 \\frac{dB}{dt}
    \\]
    \\[
    E (2\\pi r) = \\pi r^2 \\left| \\frac{dB}{dt} \\right| \\implies E = \\frac{r}{2} \\left| \\frac{dB}{dt} \\right|
    \\]
    (Directly proportional to distance $r$).</p>

    <p><strong>(b) For $r > R$ (Outside):</strong><br>
    The circular loop of radius $r$ encloses the whole magnetic flux, which exists only within the cylinder of radius $R$:
    \\[
    \\Phi_B = B (\\pi R^2) \\implies \\frac{d\\Phi_B}{dt} = \\pi R^2 \\frac{dB}{dt}
    \\]
    \\[
    E (2\\pi r) = \\pi R^2 \\left| \\frac{dB}{dt} \\right| \\implies E = \\frac{R^2}{2r} \\left| \\frac{dB}{dt} \\right|
    \\]
    (Inversely proportional to distance $r$).</p>`,
    "3 Marks",
    [
      ["Symmetry argument & path integral $\\oint \\mathbf{E}\\cdot d\\mathbf{l} = E(2\\pi r)$", "1 Mark"],
      ["Derivation for $r < R$: $E = \\frac{r}{2} \\frac{dB}{dt}$", "1 Mark"],
      ["Derivation for $r > R$: $E = \\frac{R^2}{2r} \\frac{dB}{dt}$", "1 Mark"]
    ]
  ),

  // 6.16
  createQCard(
    "c12p-ch6-q16",
    "Q 6.16",
    "Exercise 6.16",
    `<strong>(a)</strong> What are eddy currents? How are they produced?<br>
    <strong>(b)</strong> State any two undesirable effects of eddy currents and how they can be minimised.<br>
    <strong>(c)</strong> Give two important practical applications of eddy currents.`,
    `<p><strong>(a) Definition and Origin of Eddy Currents:</strong><br>
    Eddy currents (or Foucault currents) are circulating loops of induced electric currents produced inside the bulk volume of metallic conductors whenever the magnetic flux linked with them changes with time, or when they move through a non-uniform magnetic field.<br>
    These currents circulate in closed whorls in planes perpendicular to the magnetic field, resembling eddies in water.</p>

    <p><strong>(b) Undesirable Effects and Minimisation:</strong><br>
    1. <strong>Joule Heating:</strong> Massive eddy currents inside the iron cores of transformers, dynamos, and electric motors cause substantial thermal dissipation of electrical power as heat ($I^2 R$), lowering efficiency and causing overheating.<br>
    2. <strong>Minimisation:</strong> The bulk core is replaced by <strong>thin laminated sheets</strong> of steel insulated from each other by a lacquer or oxide coat. The high electrical resistance of the insulating layers breaks the large circulating eddy loops into tiny paths, drastically reducing eddy current losses.</p>

    <p><strong>(c) Practical Applications:</strong><br>
    1. <strong>Magnetic Braking in Trains:</strong> Strong electromagnets mounted above rails in high-speed bullet trains generate eddy currents in the rails when activated. By Lenz's law, the magnetic force opposes the wheel motion, providing smooth, wear-free, contactless braking.<br>
    2. <strong>Induction Furnace:</strong> Rapidly alternating high-frequency magnetic fields induce extremely large eddy currents in metal scraps, generating temperatures sufficient to melt high-grade alloys in vacuum.<br>
    3. <strong>Dead-beat Galvanometer:</strong> A metallic copper/aluminium frame inside a galvanometer produces damping eddy currents that bring the oscillating pointer to rest immediately at its equilibrium deflection.</p>`,
    "3 Marks",
    [
      ["Accurate definition and mechanism of eddy currents", "1 Mark"],
      ["Heating drawback and laminated core solution", "1 Mark"],
      ["Two distinct practical applications with operating principles", "1 Mark"]
    ]
  ),

  // 6.17
  createQCard(
    "c12p-ch6-q17",
    "Q 6.17",
    "Exercise 6.17",
    `State the working principle of an AC Generator. With the help of a neat labelled schematic diagram, explain its working and derive the expression for the instantaneous induced electromotive force (emf) and current generated.`,
    `<p><strong>Principle:</strong><br>
    An AC generator operates on the principle of <strong>electromagnetic induction</strong>. When a closed armature coil of wire is rotated mechanically at constant angular speed in a uniform magnetic field, the magnetic flux linked with the coil changes continuously, inducing a sinusoidal alternating electromotive force (emf) across its terminals.</p>

    <p><strong>Main Components:</strong><br>
    1. <strong>Armature ($ABCD$):</strong> A rectangular coil of multiple turns of insulated copper wire wound over a soft iron core.<br>
    2. <strong>Field Magnets:</strong> Strong permanent or electromagnets producing a uniform magnetic field $\\mathbf{B}$.<br>
    3. <strong>Slip Rings ($R_1, R_2$):</strong> Hollow brass rings connected to the ends of the armature coil, rotating synchronously with it.<br>
    4. <strong>Carbon Brushes ($B_1, B_2$):</strong> Flexible graphite brushes maintaining sliding electrical contact with the slip rings to feed output current to the external load circuit.</p>

    <p><strong>Mathematical Derivation of Induced EMF:</strong><br>
    Let:<br>
    $N =$ Number of turns in the coil<br>
    $A =$ Cross-sectional area of the coil<br>
    $B =$ Uniform magnetic field<br>
    $\\omega =$ Uniform angular speed of rotation<br>
    At time $t$, the angle between normal to coil area $\\mathbf{A}$ and magnetic field $\\mathbf{B}$ is $\\theta = \\omega t$.<br>
    The magnetic flux linked with each turn of the coil is:
    \\[
    \\Phi_B = \\mathbf{B} \\cdot \\mathbf{A} = B A \\cos \\omega t
    \\]
    Total magnetic flux linkage for $N$ turns:
    \\[
    \\Phi = N B A \\cos \\omega t
    \\]
    According to Faraday's law of electromagnetic induction:
    \\[
    \\varepsilon = -\\frac{d\\Phi}{dt} = -\\frac{d}{dt} (N B A \\cos \\omega t) = -N B A (-\\omega \\sin \\omega t)
    \\]
    \\[
    \\varepsilon = N B A \\omega \\sin \\omega t = \\varepsilon_0 \\sin \\omega t
    \\]
    where $\\varepsilon_0 = N B A \\omega$ is the peak (maximum) induced emf.</p>

    <p><strong>Instantaneous Current:</strong><br>
    If $R$ is the total resistance of the circuit:
    \\[
    I = \\frac{\\varepsilon}{R} = \\frac{\\varepsilon_0}{R} \\sin \\omega t = I_0 \\sin \\omega t
    \\]
    The emf alternates sinusoidally in magnitude and reverses direction every half-rotation ($T/2 = \\pi/\\omega$).</p>`,
    "5 Marks",
    [
      ["Principle of electromagnetic induction stated clearly", "1 Mark"],
      ["Labelled description of Armature, Field Magnets, Slip Rings, Brushes", "1.5 Marks"],
      ["Derivation: $\\Phi = NBA \\cos\\omega t$ and $\\varepsilon = -d\\Phi/dt$", "1.5 Marks"],
      ["Final expressions $\\varepsilon = \\varepsilon_0 \\sin \\omega t$ and $I = I_0 \\sin \\omega t$", "1 Mark"]
    ]
  )
];

saveChapter(chNum, chTitle, svgDiagram, "Exercises 6.1 to 6.17", questions, nextChTitle);
