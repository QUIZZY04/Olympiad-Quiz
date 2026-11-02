// scripts/builders/gen-c12p-ch8.js
// Class 12 Physics - Chapter 8: Electromagnetic Waves (15 Questions)
const { createQCard, saveChapter } = require('./c12p-helper');

const chNum = 8;
const chTitle = "Electromagnetic Waves";
const nextChTitle = "Ray Optics and Optical Instruments";

const svgDiagram = `
  <div style="display:flex; justify-content:center; margin:24px 0;">
    <svg viewBox="0 0 760 220" style="width:100%; max-width:760px; height:auto; background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb"/>
        </marker>
        <marker id="arrowRed" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626"/>
        </marker>
      </defs>
      <!-- Title -->
      <text x="380" y="24" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#1e293b">Electromagnetic Wave Propagation & Maxwell's Equations</text>
      
      <!-- Coordinate axes -->
      <line x1="80" y1="140" x2="350" y2="140" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>
      <text x="355" y="144" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#64748b">z (propagation c)</text>
      
      <line x1="120" y1="180" x2="120" y2="40" stroke="#dc2626" stroke-width="2" marker-end="url(#arrowRed)"/>
      <text x="115" y="32" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#dc2626">x (E-field)</text>

      <line x1="120" y1="140" x2="60" y2="180" stroke="#2563eb" stroke-width="2"/>
      <text x="50" y="192" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#2563eb">y (B-field)</text>

      <!-- Sine wave for E (vertical red) -->
      <path d="M 120 140 Q 155 60, 190 140 T 260 140 T 330 140" fill="none" stroke="#dc2626" stroke-width="2.5"/>
      <!-- Sine wave for B (horizontal blue perspective) -->
      <path d="M 120 140 Q 155 170, 190 140 T 260 140 T 330 140" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="3,2"/>

      <!-- Annotations & Maxwell's Equations -->
      <text x="400" y="60" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e293b">Maxwell's Equations & Relations:</text>
      <text x="400" y="85" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Speed: $c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} = \\frac{E_0}{B_0} = 3 \\times 10^8 \\text{ m s}^{-1}$</text>
      <text x="400" y="110" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Displacement Current: $I_D = \\varepsilon_0 \\frac{d\\Phi_E}{dt}$</text>
      <text x="400" y="135" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Ampere-Maxwell: $\\oint \\mathbf{B}\\cdot d\\mathbf{l} = \\mu_0 (I_C + I_D)$</text>
      <text x="400" y="160" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Energy Density: $u = \\frac{1}{2}\\varepsilon_0 E^2 + \\frac{B^2}{2\\mu_0}, \\quad u_E = u_B$</text>
      <text x="400" y="185" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Poynting Vector: $\\mathbf{S} = \\frac{1}{\\mu_0}(\\mathbf{E} \\times \\mathbf{B})$, Intensity $I = c u_{avg}$</text>
    </svg>
  </div>
`;

const questions = [
  // 8.1
  createQCard(
    "c12p-ch8-q1",
    "Q 8.1",
    "Exercise 8.1",
    `Figure shows a capacitor made of two circular plates each of radius $12 \\text{ cm}$, and separated by $5.0 \\text{ mm}$. The capacitor is being charged by an external source. The charging current is constant and equal to $0.15 \\text{ A}$.<br>
    <strong>(a)</strong> Calculate the capacitance and the rate of change of potential difference between the plates.<br>
    <strong>(b)</strong> Obtain the displacement current between the plates.<br>
    <strong>(c)</strong> Is Kirchhoff’s first rule (junction rule) valid at each plate of the capacitor? Explain.`,
    `<p><strong>Given:</strong><br>
    Radius of plates $R = 12 \\text{ cm} = 0.12 \\text{ m}$<br>
    Area $A = \\pi R^2 = \\pi (0.12)^2 = 0.0144\\pi \\text{ m}^2 \\approx 0.04524 \\text{ m}^2$<br>
    Separation $d = 5.0 \\text{ mm} = 5.0 \\times 10^{-3} \\text{ m}$<br>
    Conduction current $I_C = 0.15 \\text{ A}$<br>
    Permittivity $\\varepsilon_0 = 8.854 \\times 10^{-12} \\text{ C}^2 \\text{ N}^{-1} \\text{ m}^{-2}$</p>

    <p><strong>(a) Capacitance and Rate of Change of Potential:</strong><br>
    \\[
    C = \\frac{\\varepsilon_0 A}{d} = \\frac{(8.854 \\times 10^{-12}) \\times (0.04524)}{5.0 \\times 10^{-3}} \\approx 8.01 \\times 10^{-11} \\text{ F} = 80.1 \\text{ pF}
    \\]
    Since $q = C V$, differentiating with respect to time gives:
    \\[
    \\frac{dq}{dt} = C \\frac{dV}{dt} \\implies \\frac{dV}{dt} = \\frac{I_C}{C}
    \\]
    \\[
    \\frac{dV}{dt} = \\frac{0.15 \\text{ A}}{8.01 \\times 10^{-11} \\text{ F}} \\approx 1.87 \\times 10^9 \\text{ V s}^{-1}
    \\]</p>

    <p><strong>(b) Displacement Current $I_D$:</strong><br>
    Displacement current between plates is given by:
    \\[
    I_D = \\varepsilon_0 \\frac{d\\Phi_E}{dt} = \\varepsilon_0 \\frac{d}{dt}(E A) = \\varepsilon_0 A \\frac{d}{dt}\\left(\\frac{V}{d}\\right) = \\left(\\frac{\\varepsilon_0 A}{d}\\right) \\frac{dV}{dt} = C \\frac{dV}{dt} = I_C
    \\]
    Therefore:
    \\[
    I_D = 0.15 \\text{ A}
    \\]</p>

    <p><strong>(c) Validity of Kirchhoff’s First Rule:</strong><br>
    <strong>Yes.</strong> If we include both conduction current and displacement current, Kirchhoff's first rule holds strictly at each plate:<br>
    • At the positive plate, conduction current $I_C = 0.15 \\text{ A}$ flows in via the wire, while an identical displacement current $I_D = 0.15 \\text{ A}$ leaves the plate through the dielectric gap.<br>
    • Thus, total incoming current equals total outgoing current ($I_C = I_D$), maintaining generalized charge-continuity.</p>`,
    "3 Marks",
    [
      ["Calculation of $C \\approx 80.1\\text{ pF}$ and $dV/dt = 1.87 \\times 10^9\\text{ V s}^{-1}$", "1 Mark"],
      ["Calculation and proof of displacement current $I_D = 0.15\\text{ A}$", "1 Mark"],
      ["Explanation of Kirchhoff's junction rule with total current continuity", "1 Mark"]
    ]
  ),

  // 8.2
  createQCard(
    "c12p-ch8-q2",
    "Q 8.2",
    "Exercise 8.2",
    `A parallel plate capacitor made of circular plates each of radius $R = 6.0 \\text{ cm}$ has a capacitance $C = 100 \\text{ pF}$. The capacitor is connected to a $230 \\text{ V}$ ac supply with a frequency of $\\omega = 300 \\text{ rad s}^{-1}$.<br>
    <strong>(a)</strong> What is the rms value of the conduction current?<br>
    <strong>(b)</strong> Is the conduction current equal to the displacement current?<br>
    <strong>(c)</strong> Determine the amplitude of $B$ at a point $3.0 \\text{ cm}$ from the axis between the plates.`,
    `<p><strong>Given:</strong><br>
    Radius $R = 6.0 \\text{ cm} = 0.06 \\text{ m}$, $C = 100 \\text{ pF} = 100 \\times 10^{-12} \\text{ F} = 10^{-10} \\text{ F}$<br>
    $V_{rms} = 230 \\text{ V}$, $\\omega = 300 \\text{ rad s}^{-1}$</p>

    <p><strong>(a) RMS Conduction Current $I_{rms}$:</strong><br>
    Capacitive reactance:
    \\[
    X_C = \\frac{1}{\\omega C} = \\frac{1}{300 \\times 10^{-10}} = \\frac{10^{10}}{300} = \\frac{10^8}{3} \\ \\Omega
    \\]
    RMS Current:
    \\[
    I_{rms} = \\frac{V_{rms}}{X_C} = V_{rms} \\omega C = 230 \\times 300 \\times 10^{-10} = 6.9 \\times 10^{-6} \\text{ A} = 6.9 \\ \\mu\\text{A}
    \\]</p>

    <p><strong>(b) Conduction Current vs Displacement Current:</strong><br>
    <strong>Yes</strong>, at every instant the displacement current between the plates equals the conduction current in the connecting wires:
    \\[
    I_D(t) = I_C(t) \\implies I_{D, rms} = I_{C, rms} = 6.9 \\ \\mu\\text{A}
    \\]</p>

    <p><strong>(c) Amplitude of Magnetic Field $B_0$ at $r = 3.0 \\text{ cm}$:</strong><br>
    Peak conduction/displacement current:
    \\[
    I_0 = \\sqrt{2} I_{rms} = \\sqrt{2} \\times (6.9 \\times 10^{-6}) \\approx 9.76 \\times 10^{-6} \\text{ A}
    \\]
    Using Ampere-Maxwell law for a circle of radius $r = 3.0 \\text{ cm} < R = 6.0 \\text{ cm}$:
    \\[
    \\oint \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 I_{D, enc} = \\mu_0 \\left( I_0 \\frac{\\pi r^2}{\\pi R^2} \\right) = \\mu_0 I_0 \\frac{r^2}{R^2}
    \\]
    \\[
    B_0 (2\\pi r) = \\mu_0 I_0 \\frac{r^2}{R^2} \\implies B_0 = \\frac{\\mu_0 I_0 r}{2\\pi R^2}
    \\]
    \\[
    B_0 = \\left( \\frac{\\mu_0}{2\\pi} \\right) \\frac{I_0 r}{R^2} = (2 \\times 10^{-7}) \\times \\frac{(9.76 \\times 10^{-6}) \\times 0.03}{(0.06)^2}
    \\]
    \\[
    B_0 = (2 \\times 10^{-7}) \\times \\frac{2.928 \\times 10^{-7}}{0.0036} = 2 \\times 10^{-7} \\times 8.133 \\times 10^{-5} \\approx 1.63 \\times 10^{-11} \\text{ T}
    \\]</p>`,
    "3 Marks",
    [
      ["Calculation of $I_{rms} = 6.9\\ \\mu\\text{A}$", "1 Mark"],
      ["Confirmation that $I_C = I_D$", "0.5 Mark"],
      ["Derivation $B_0 = \\frac{\\mu_0 I_0 r}{2\\pi R^2}$ and calculation $B_0 \\approx 1.63 \\times 10^{-11}\\text{ T}$", "1.5 Marks"]
    ]
  ),

  // 8.3
  createQCard(
    "c12p-ch8-q3",
    "Q 8.3",
    "Exercise 8.3",
    `What physical quantity is the same for X-rays of wavelength $10^{-10} \\text{ m}$, red light of wavelength $6800 \\text{ \\AA}$ and radiowaves of wavelength $500 \\text{ m}$?`,
    `<p><strong>Answer:</strong><br>
    The physical quantity that is identical for all electromagnetic waves in vacuum is their <strong>speed of propagation in vacuum</strong>:
    \\[
    c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} \\approx 3.0 \\times 10^8 \\text{ m s}^{-1}
    \\]
    Regardless of their wildly different wavelengths, frequencies, or photon energies, all electromagnetic radiations (X-rays, visible light, radio waves) travel with precisely the same speed $c$ through free space.</p>`,
    "1 Mark",
    [
      ["Identification of speed of light in vacuum $c = 3 \\times 10^8\\text{ m s}^{-1}$", "1 Mark"]
    ]
  ),

  // 8.4
  createQCard(
    "c12p-ch8-q4",
    "Q 8.4",
    "Exercise 8.4",
    `A plane electromagnetic wave travels in vacuum along the z-direction. What can you say about the directions of its electric and magnetic field vectors? If the frequency of the wave is $30 \\text{ MHz}$, what is its wavelength?`,
    `<p><strong>1. Directions of Electric and Magnetic Field Vectors:</strong><br>
    Electromagnetic waves are strictly <strong>transverse</strong> in nature. The electric field $\\mathbf{E}$, magnetic field $\\mathbf{B}$, and the direction of wave propagation $\\mathbf{k}$ (or Poynting vector $\\mathbf{S} = \\frac{1}{\\mu_0} \\mathbf{E} \\times \\mathbf{B}$) are mutually perpendicular.<br>
    • Since the wave travels along the $+z$-axis, both $\\mathbf{E}$ and $\\mathbf{B}$ must lie entirely in the <strong>$xy$-plane</strong>.<br>
    • If $\\mathbf{E}$ oscillates along the $x$-axis, then $\\mathbf{B}$ oscillates along the $y$-axis such that $\\mathbf{E} \\times \\mathbf{B}$ points along the $+z$-axis.</p>

    <p><strong>2. Wavelength Calculation:</strong><br>
    Given frequency $\\nu = 30 \\text{ MHz} = 30 \\times 10^6 \\text{ Hz} = 3 \\times 10^7 \\text{ Hz}$<br>
    Speed $c = 3 \\times 10^8 \\text{ m s}^{-1}$<br>
    \\[
    \\lambda = \\frac{c}{\\nu} = \\frac{3 \\times 10^8 \\text{ m s}^{-1}}{3 \\times 10^7 \\text{ Hz}} = 10 \\text{ m}
    \\]
    <p><strong>Result:</strong> The wavelength of the wave is <strong>$10 \\text{ m}$</strong> (which falls in the short-wave radio band).</p>`,
    "2 Marks",
    [
      ["Perpendicularity of $\\mathbf{E}$ and $\\mathbf{B}$ in $xy$-plane ($E \\perp B \\perp z$)", "1 Mark"],
      ["Calculation of wavelength $\\lambda = c/\\nu = 10\\text{ m}$", "1 Mark"]
    ]
  ),

  // 8.5
  createQCard(
    "c12p-ch8-q5",
    "Q 8.5",
    "Exercise 8.5",
    `A radio can tune in to any station in the $7.5 \\text{ MHz}$ to $12 \\text{ MHz}$ band. What is the corresponding wavelength band?`,
    `<p><strong>Given:</strong><br>
    Minimum frequency $\\nu_1 = 7.5 \\text{ MHz} = 7.5 \\times 10^6 \\text{ Hz}$<br>
    Maximum frequency $\\nu_2 = 12 \\text{ MHz} = 12 \\times 10^6 \\text{ Hz}$<br>
    Speed of light $c = 3 \\times 10^8 \\text{ m s}^{-1}$</p>

    <p><strong>Calculations:</strong><br>
    1. Maximum wavelength (corresponding to $\\nu_1$):
    \\[
    \\lambda_{max} = \\frac{c}{\\nu_1} = \\frac{3 \\times 10^8}{7.5 \\times 10^6} = \\frac{300}{7.5} = 40 \\text{ m}
    \\]
    2. Minimum wavelength (corresponding to $\\nu_2$):
    \\[
    \\lambda_{min} = \\frac{c}{\\nu_2} = \\frac{3 \\times 10^8}{12 \\times 10^6} = \\frac{300}{12} = 25 \\text{ m}
    \\]
    <p><strong>Result:</strong> The corresponding wavelength band extends from <strong>$25 \\text{ m}$ to $40 \\text{ m}$</strong>.</p>`,
    "2 Marks",
    [
      ["Formula $\\lambda = c/\\nu$", "0.5 Mark"],
      ["Calculation of $\\lambda_{max} = 40\\text{ m}$ and $\\lambda_{min} = 25\\text{ m}$", "1.5 Marks"]
    ]
  ),

  // 8.6
  createQCard(
    "c12p-ch8-q6",
    "Q 8.6",
    "Exercise 8.6",
    `A charged particle oscillates about its mean equilibrium position with a frequency of $10^9 \\text{ Hz}$. What is the frequency of the electromagnetic waves produced by the oscillator?`,
    `<p><strong>Answer:</strong><br>
    An oscillating charge accelerates back and forth with frequency $\\nu = 10^9 \\text{ Hz}$.<br>
    According to Maxwell’s theory of electromagnetism, an accelerated or oscillating charge produces oscillating electric and magnetic fields of precisely the <strong>same frequency</strong> as the oscillating source charge.<br>
    Therefore, the frequency of the generated electromagnetic waves is:
    \\[
    \\nu_{EM} = 10^9 \\text{ Hz} = 1.0 \\text{ GHz}
    \\]
    (This frequency falls in the microwave / UHF radio region of the electromagnetic spectrum).</p>`,
    "1 Mark",
    [
      ["Correct frequency $\\nu = 10^9\\text{ Hz}$ with physical justification", "1 Mark"]
    ]
  ),

  // 8.7
  createQCard(
    "c12p-ch8-q7",
    "Q 8.7",
    "Exercise 8.7",
    `The amplitude of the magnetic field part of a harmonic electromagnetic wave in vacuum is $B_0 = 510 \\text{ nT}$. What is the amplitude of the electric field part of the wave?`,
    `<p><strong>Given:</strong><br>
    Magnetic field amplitude $B_0 = 510 \\text{ nT} = 510 \\times 10^{-9} \\text{ T} = 5.1 \\times 10^{-7} \\text{ T}$<br>
    Speed of light $c = 3.0 \\times 10^8 \\text{ m s}^{-1}$</p>

    <p><strong>Formula:</strong><br>
    In a plane electromagnetic wave propagating in free space:
    \\[
    c = \\frac{E_0}{B_0} \\implies E_0 = c B_0
    \\]</p>

    <p><strong>Calculation:</strong><br>
    \\[
    E_0 = (3.0 \\times 10^8 \\text{ m s}^{-1}) \\times (5.1 \\times 10^{-7} \\text{ T}) = 15.3 \\times 10^1 = 153 \\text{ N C}^{-1} \\text{ (or V m}^{-1}\\text{)}
    \\]
    <p><strong>Result:</strong> The electric field amplitude is <strong>$153 \\text{ V m}^{-1}$</strong>.</p>`,
    "2 Marks",
    [
      ["Relation $E_0 = c B_0$", "1 Mark"],
      ["Substitution and result $E_0 = 153\\text{ V m}^{-1}$", "1 Mark"]
    ]
  ),

  // 8.8
  createQCard(
    "c12p-ch8-q8",
    "Q 8.8",
    "Exercise 8.8",
    `Suppose that the electric field amplitude of an electromagnetic wave is $E_0 = 120 \\text{ N C}^{-1}$ and that its frequency is $\\nu = 50.0 \\text{ MHz}$.<br>
    <strong>(a)</strong> Determine $B_0, \\omega, k$, and $\\lambda$.<br>
    <strong>(b)</strong> Find expressions for $\\mathbf{E}$ and $\\mathbf{B}$.`,
    `<p><strong>Given:</strong><br>
    $E_0 = 120 \\text{ N C}^{-1}$<br>
    $\\nu = 50.0 \\text{ MHz} = 50 \\times 10^6 \\text{ Hz} = 5.0 \\times 10^7 \\text{ Hz}$<br>
    $c = 3.0 \\times 10^8 \\text{ m s}^{-1}$</p>

    <p><strong>(a) Determination of Parameters:</strong><br>
    1. <strong>Magnetic field amplitude $B_0$:</strong>
    \\[
    B_0 = \\frac{E_0}{c} = \\frac{120}{3.0 \\times 10^8} = 4.0 \\times 10^{-7} \\text{ T} = 400 \\text{ nT}
    \\]
    2. <strong>Angular frequency $\\omega$:</strong>
    \\[
    \\omega = 2\\pi \\nu = 2\\pi \\times (5.0 \\times 10^7) = 1.0\\pi \\times 10^8 \\approx 3.14 \\times 10^8 \\text{ rad s}^{-1}
    \\]
    3. <strong>Wavelength $\\lambda$:</strong>
    \\[
    \\lambda = \\frac{c}{\\nu} = \\frac{3.0 \\times 10^8}{5.0 \\times 10^7} = 6.0 \\text{ m}
    \\]
    4. <strong>Propagation constant (wave number) $k$:</strong>
    \\[
    k = \\frac{2\\pi}{\\lambda} = \\frac{2\\pi}{6.0} = \\frac{\\pi}{3} \\approx 1.05 \\text{ rad m}^{-1}
    \\]</p>

    <p><strong>(b) Expressions for $\\mathbf{E}$ and $\\mathbf{B}$ vectors:</strong><br>
    Assuming propagation along the $+x$-direction, with $\\mathbf{E}$ along $\\hat{j}$ and $\\mathbf{B}$ along $\\hat{k}$:
    \\[
    \\mathbf{E}(x, t) = E_0 \\sin(kx - \\omega t) \\hat{j} = (120 \\text{ N C}^{-1}) \\sin(1.05 x - 3.14 \\times 10^8 t) \\hat{j}
    \\]
    \\[
    \\mathbf{B}(x, t) = B_0 \\sin(kx - \\omega t) \\hat{k} = (4.0 \\times 10^{-7} \\text{ T}) \\sin(1.05 x - 3.14 \\times 10^8 t) \\hat{k}
    \\]</p>`,
    "3 Marks",
    [
      ["Calculations of $B_0, \\omega, \\lambda, k$", "2 Marks"],
      ["Correct sinusoidal vector expressions for $\\mathbf{E}$ and $\\mathbf{B}$", "1 Mark"]
    ]
  ),

  // 8.9
  createQCard(
    "c12p-ch8-q9",
    "Q 8.9",
    "Exercise 8.9",
    `Use the formula $E = h\\nu = \\frac{hc}{\\lambda}$ for energy of a photon and obtain the photon energy in units of eV for different parts of the EM spectrum:<br>
    (Radio waves, Microwaves, Infrared, Visible light, Ultraviolet, X-rays, Gamma rays).<br>
    In what way are the different scales of photon energies related to the sources of electromagnetic radiation?`,
    `<p><strong>Conversion Factor:</strong><br>
    $h = 6.626 \\times 10^{-34} \\text{ J s}$, $c = 3.0 \\times 10^8 \\text{ m s}^{-1}$, $1 \\text{ eV} = 1.602 \\times 10^{-19} \\text{ J}$<br>
    \\[
    E (\\text{eV}) = \\frac{hc}{\\lambda e} = \\frac{12400 \\text{ eV \\AA}}{\\lambda (\\text{\\AA})} = \\frac{1.24 \\times 10^{-6} \\text{ eV m}}{\\lambda (\\text{m})}
    \\]</p>

    <table style="width:100%; border-collapse:collapse; margin:12px 0;">
      <thead>
        <tr style="background:#f1f5f9; text-align:left;">
          <th style="padding:6px; border:1px solid #cbd5e1;">Region</th>
          <th style="padding:6px; border:1px solid #cbd5e1;">Typical $\\lambda$</th>
          <th style="padding:6px; border:1px solid #cbd5e1;">Photon Energy ($E$)</th>
          <th style="padding:6px; border:1px solid #cbd5e1;">Physical Mechanism / Source</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding:6px; border:1px solid #cbd5e1;">Radio Waves</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">$100 \\text{ m}$</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">$\\sim 10^{-8} \\text{ eV}$</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">Macroscopic accelerating charges in LC antennas</td>
        </tr>
        <tr>
          <td style="padding:6px; border:1px solid #cbd5e1;">Microwaves</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">$1 \\text{ cm}$</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">$\\sim 10^{-4} \\text{ eV}$</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">Special vacuum tubes (klystron, magnetron), molecular rotations</td>
        </tr>
        <tr>
          <td style="padding:6px; border:1px solid #cbd5e1;">Infrared</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">$10 \\ \\mu\\text{m}$</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">$\\sim 0.1 \\text{ eV}$</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">Thermal vibrations of molecules and hot bodies</td>
        </tr>
        <tr>
          <td style="padding:6px; border:1px solid #cbd5e1;">Visible Light</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">$5000 \\text{ \\AA}$</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">$1.8 \\text{ eV} - 3.1 \\text{ eV}$</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">Outer shell valence electronic transitions in excited atoms</td>
        </tr>
        <tr>
          <td style="padding:6px; border:1px solid #cbd5e1;">Ultraviolet</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">$1000 \\text{ \\AA}$</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">$\\sim 10 \\text{ eV}$</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">Inner valence electronic jumps, sun, mercury arcs</td>
        </tr>
        <tr>
          <td style="padding:6px; border:1px solid #cbd5e1;">X-Rays</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">$1 \\text{ \\AA}$</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">$\\sim 10 \\text{ keV}$</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">Inner shell transitions in heavy atoms / bremsstrahlung</td>
        </tr>
        <tr>
          <td style="padding:6px; border:1px solid #cbd5e1;">Gamma Rays</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">$10^{-12} \\text{ m}$</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">$\\sim 1 \\text{ MeV}$</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">Nuclear energy level de-excitations and radioactive decay</td>
        </tr>
      </tbody>
    </table>
    <p><strong>Significance:</strong> The photon energies correspond directly to the quantum energy level spacings of the radiating physical systems (radio: macroscopic, infrared: molecular, visible/UV: atomic valence, X-rays: inner atomic, gamma: nuclear).</p>`,
    "3 Marks",
    [
      ["Formula $E = hc/\\lambda$ and photon energy scale across spectrum", "1.5 Marks"],
      ["Correlation with physical emitting systems (atomic, molecular, nuclear)", "1.5 Marks"]
    ]
  ),

  // 8.10
  createQCard(
    "c12p-ch8-q10",
    "Q 8.10",
    "Exercise 8.10",
    `In a plane electromagnetic wave, the electric field oscillates sinusoidally at a frequency of $2.0 \\times 10^{10} \\text{ Hz}$ and amplitude $48 \\text{ V m}^{-1}$.<br>
    <strong>(a)</strong> What is the wavelength of the wave?<br>
    <strong>(b)</strong> What is the amplitude of the oscillating magnetic field?<br>
    <strong>(c)</strong> Show that the average energy density of the $\\mathbf{E}$ field equals the average energy density of the $\\mathbf{B}$ field.`,
    `<p><strong>Given:</strong><br>
    Frequency $\\nu = 2.0 \\times 10^{10} \\text{ Hz}$<br>
    $E_0 = 48 \\text{ V m}^{-1}$<br>
    $c = 3.0 \\times 10^8 \\text{ m s}^{-1}$</p>

    <p><strong>(a) Wavelength $\\lambda$:</strong><br>
    \\[
    \\lambda = \\frac{c}{\\nu} = \\frac{3.0 \\times 10^8}{2.0 \\times 10^{10}} = 1.5 \\times 10^{-2} \\text{ m} = 1.5 \\text{ cm}
    \\]
    (Microwave region).</p>

    <p><strong>(b) Magnetic Field Amplitude $B_0$:</strong><br>
    \\[
    B_0 = \\frac{E_0}{c} = \\frac{48}{3.0 \\times 10^8} = 1.6 \\times 10^{-7} \\text{ T} = 160 \\text{ nT}
    \\]</p>

    <p><strong>(c) Equipartition of Average Energy Density ($u_E = u_B$):</strong><br>
    • Average electric energy density:
    \\[
    u_E = \\frac{1}{4} \\varepsilon_0 E_0^2
    \\]
    • Average magnetic energy density:
    \\[
    u_B = \\frac{1}{4} \\frac{B_0^2}{\\mu_0}
    \\]
    Using $E_0 = c B_0$ and $c^2 = \\frac{1}{\\mu_0 \\varepsilon_0}$:
    \\[
    u_E = \\frac{1}{4} \\varepsilon_0 (c B_0)^2 = \\frac{1}{4} \\varepsilon_0 c^2 B_0^2 = \\frac{1}{4} \\varepsilon_0 \\left( \\frac{1}{\\mu_0 \\varepsilon_0} \\right) B_0^2 = \\frac{1}{4} \\frac{B_0^2}{\\mu_0} = u_B
    \\]
    Hence, exactly <strong>half</strong> of the total electromagnetic energy density is carried by the electric field and the remaining half by the magnetic field.</p>`,
    "3 Marks",
    [
      ["Calculation of $\\lambda = 1.5\\text{ cm}$", "1 Mark"],
      ["Calculation of $B_0 = 1.6 \\times 10^{-7}\\text{ T}$", "1 Mark"],
      ["Rigorous proof that $u_E = u_B$", "1 Mark"]
    ]
  ),

  // 8.11
  createQCard(
    "c12p-ch8-q11",
    "Q 8.11",
    "Exercise 8.11",
    `About $5\\%$ of the power of a $100 \\text{ W}$ light bulb is converted to visible radiation. What is the average intensity of visible radiation:<br>
    <strong>(a)</strong> at a distance of $1.0 \\text{ m}$ from the bulb?<br>
    <strong>(b)</strong> at a distance of $10 \\text{ m}$?<br>
    Assume that the radiation is emitted isotropically and neglect reflection.`,
    `<p><strong>Given:</strong><br>
    Total power $P = 100 \\text{ W}$<br>
    Efficiency in visible spectrum $\\eta = 5\\%$<br>
    Useful radiant power $P_{vis} = 0.05 \\times 100 \\text{ W} = 5.0 \\text{ W}$</p>

    <p><strong>Formula for Isotropic Emission:</strong><br>
    The radiation spreads uniformly across a spherical wavefront of radius $r$:
    \\[
    I = \\frac{P_{vis}}{4\\pi r^2}
    \\]</p>

    <p><strong>(a) At Distance $r_1 = 1.0 \\text{ m}$:</strong><br>
    \\[
    I_1 = \\frac{5.0}{4\\pi (1.0)^2} = \\frac{5.0}{4\\pi} = \\frac{5.0}{12.566} \\approx 0.398 \\text{ W m}^{-2} \\approx 0.40 \\text{ W m}^{-2}
    \\]</p>

    <p><strong>(b) At Distance $r_2 = 10 \\text{ m}$:</strong><br>
    Since intensity obeys the inverse square law ($I \\propto 1/r^2$):
    \\[
    I_2 = I_1 \\times \\left( \\frac{r_1}{r_2} \\right)^2 = 0.398 \\times \\left( \\frac{1}{10} \\right)^2 = \\frac{0.398}{100} \\approx 3.98 \\times 10^{-3} \\text{ W m}^{-2}
    \\]</p>`,
    "2 Marks",
    [
      ["Calculation of $P_{vis} = 5\\text{ W}$ and formula $I = P/(4\\pi r^2)$", "1 Mark"],
      ["Calculations $I_1 = 0.40\\text{ W m}^{-2}$ and $I_2 = 3.98 \\times 10^{-3}\\text{ W m}^{-2}$", "1 Mark"]
    ]
  ),

  // 8.12
  createQCard(
    "c12p-ch8-q12",
    "Q 8.12",
    "Exercise 8.12",
    `Use the formula $\\lambda_m T = 0.29 \\text{ cm K}$ (Wien’s displacement law) to obtain the characteristic temperature ranges for different parts of the electromagnetic spectrum. What do the numbers that you obtain tell you?`,
    `<p><strong>Wien's Displacement Law:</strong><br>
    \\[
    \\lambda_m T = b = 0.29 \\text{ cm K} = 2.9 \\times 10^{-3} \\text{ m K} \\implies T = \\frac{2.9 \\times 10^{-3} \\text{ m K}}{\\lambda_m}
    \\]</p>

    <p><strong>Calculations for Spectral Bands:</strong><br>
    1. <strong>Visible Region ($\\lambda_m \\approx 5000 \\text{ \\AA} = 5 \\times 10^{-7} \\text{ m}$):</strong>
    \\[
    T = \\frac{2.9 \\times 10^{-3}}{5 \\times 10^{-7}} = 5800 \\text{ K}
    \\]
    (This corresponds closely to the surface temperature of the Sun, explaining why our eyes evolved to be most sensitive to visible light).<br>
    2. <strong>Infrared Region ($\\lambda_m \\approx 10^{-5} \\text{ m}$):</strong>
    \\[
    T = \\frac{2.9 \\times 10^{-3}}{10^{-5}} = 290 \\text{ K}
    \\]
    (This corresponds to typical ambient terrestrial temperatures and human body temperature $\\approx 300 \\text{ K}$, indicating that everyday objects radiate predominantly in the infrared).<br>
    3. <strong>Microwave Region ($\\lambda_m \\approx 10^{-1} \\text{ m} = 10 \\text{ cm}$):</strong>
    \\[
    T = \\frac{2.9 \\times 10^{-3}}{0.1} = 0.029 \\text{ K} \\approx 10^{-2} \\text{ K}
    \\]
    (Deep cosmic background / cryogenic temperatures).<br>
    4. <strong>X-ray Region ($\\lambda_m \\approx 10^{-10} \\text{ m}$):</strong>
    \\[
    T = \\frac{2.9 \\times 10^{-3}}{10^{-10}} \\approx 2.9 \\times 10^7 \\text{ K}
    \\]
    (Extreme temperatures found only in stellar cores and supernova explosions).</p>

    <p><strong>Conclusion:</strong> The calculated temperatures reveal the physical thermal conditions necessary for a black body to radiate maximally in each respective frequency domain.</p>`,
    "3 Marks",
    [
      ["Statement of Wien's law $T = b/\\lambda_m$", "1 Mark"],
      ["Calculations for visible ($5800\\text{ K}$) and infrared ($290\\text{ K}$)", "1 Mark"],
      ["Interpretation connecting sun surface and ambient body emission", "1 Mark"]
    ]
  ),

  // 8.13
  createQCard(
    "c12p-ch8-q13",
    "Q 8.13",
    "Exercise 8.13",
    `Given below are some famous numbers associated with electromagnetic radiations in different contexts in physics. State the part of the em spectrum to which each belongs:<br>
    <strong>(a)</strong> $21 \\text{ cm}$ (wavelength emitted by atomic hydrogen in interstellar space).<br>
    <strong>(b)</strong> $1057 \\text{ MHz}$ (frequency of radiation arising from two close energy levels in hydrogen; known as Lamb shift).<br>
    <strong>(c)</strong> $2.7 \\text{ K}$ (temperature associated with isotropic cosmic microwave background).<br>
    <strong>(d)</strong> $5890 \\text{ \\AA} - 5896 \\text{ \\AA}$ (double lines of sodium).<br>
    <strong>(e)</strong> $14.4 \\text{ keV}$ (energy of a particular transition in $^{57}\\text{Fe}$ nucleus associated with Mössbauer effect).`,
    `<p><strong>Classification:</strong></p>
    <ol style="line-height:1.8;">
      <li><strong>(a) $21 \\text{ cm}$ line:</strong><br>
      $\\lambda = 0.21 \\text{ m}$. This belongs to the <strong>Radio wave (short radio wave / microwave)</strong> region of the spectrum (neutral hydrogen hyperfine spin-flip transition).</li>
      <li><strong>(b) $1057 \\text{ MHz}$ Lamb shift:</strong><br>
      $\\nu = 1.057 \\times 10^9 \\text{ Hz} \\implies \\lambda = \\frac{c}{\\nu} = \\frac{3 \\times 10^8}{1.057 \\times 10^9} \\approx 0.28 \\text{ m} = 28 \\text{ cm}$.<br>
      This belongs to the <strong>Radio wave (UHF band)</strong> region.</li>
      <li><strong>(c) $2.7 \\text{ K}$ Cosmic Microwave Background:</strong><br>
      By Wien's law $\\lambda_m = \\frac{0.29 \\text{ cm K}}{2.7 \\text{ K}} \\approx 0.11 \\text{ cm} = 1.1 \\text{ mm}$.<br>
      This belongs to the <strong>Microwave</strong> region.</li>
      <li><strong>(d) $5890 \\text{ \\AA} - 5896 \\text{ \\AA}$ Sodium D-lines:</strong><br>
      $\\lambda \\approx 589 \\text{ nm}$. This falls squarely within the <strong>Visible light (yellow)</strong> region.</li>
      <li><strong>(e) $14.4 \\text{ keV}$ $^{57}\\text{Fe}$ transition:</strong><br>
      $\\lambda = \\frac{hc}{E} = \\frac{12400 \\text{ eV \\AA}}{14400 \\text{ eV}} \\approx 0.86 \\text{ \\AA} = 8.6 \\times 10^{-11} \\text{ m}$.<br>
      Since it originates from nuclear transitions, it is officially classified as <strong>Gamma rays</strong> (or very hard X-rays).</li>
    </ol>`,
    "3 Marks",
    [
      ["Identification of (a) Radio waves and (b) Radio waves", "1 Mark"],
      ["Identification of (c) Microwaves and (d) Visible light", "1 Mark"],
      ["Identification of (e) Gamma rays / hard X-rays", "1 Mark"]
    ]
  ),

  // 8.14
  createQCard(
    "c12p-ch8-q14",
    "Q 8.14",
    "Exercise 8.14",
    `Answer the following conceptual questions:<br>
    <strong>(a)</strong> Long distance radio broadcasts use short-wave bands. Why?<br>
    <strong>(b)</strong> It is necessary to use satellites for long distance TV transmission and microwave communication. Why?<br>
    <strong>(c)</strong> Optical and radio telescopes are built on the ground, but X-ray astronomy is possible only from satellites orbiting the earth. Why?<br>
    <strong>(d)</strong> The small ozone layer on top of the stratosphere is crucial for human survival. Why?<br>
    <strong>(e)</strong> If the earth did not have an atmosphere, would its average surface temperature be higher or lower than what it is now?`,
    `<p><strong>(a) Short-wave bands for long-distance broadcasts:</strong><br>
    Short-wave radio frequencies ($3 \\text{ MHz}$ to $30 \\text{ MHz}$) are reflected back to Earth by the charged layers of the ionosphere (via total internal reflection in the ionized plasma). This enables long-distance transmission around the curvature of the earth via successive sky-wave reflections.</p>

    <p><strong>(b) Satellites for TV and microwave transmissions:</strong><br>
    Television broadcast signals operate at VHF and UHF frequencies ($54 \\text{ MHz}$ to $890 \\text{ MHz}$). At these high frequencies, waves easily penetrate straight through the ionosphere without reflecting. Therefore, geostationary artificial satellites are required to receive, amplify, and retransmit the signals back over large terrestrial areas.</p>

    <p><strong>(c) Space satellites for X-ray astronomy:</strong><br>
    Earth's atmosphere is transparent to visible light and radio waves (atmospheric optical and radio windows). However, the upper atmosphere completely absorbs high-energy X-rays and gamma rays through photoelectric absorption and Compton scattering. Thus, X-ray telescopes must be placed aboard satellites orbiting outside the atmosphere.</p>

    <p><strong>(d) Importance of Stratospheric Ozone:</strong><br>
    The stratospheric ozone layer ($O_3$) strongly absorbs lethal solar ultraviolet-B (UV-B) and UV-C radiations ($200 - 315 \\text{ nm}$), protecting biological organisms from DNA cellular mutations, skin cancer, and cataracts.</p>

    <p><strong>(e) Earth’s temperature without atmosphere:</strong><br>
    It would be significantly <strong>lower</strong> (around $-18^\\circ\\text{C}$ instead of the present $+15^\\circ\\text{C}$). Greenhouse gases ($CO_2$, water vapour) trap outgoing terrestrial infrared radiation, keeping the planet warm via the natural greenhouse effect.</p>`,
    "3 Marks",
    [
      ["Ionospheric reflection of short-waves & penetration of TV frequencies", "1 Mark"],
      ["Atmospheric absorption of X-rays vs transmission of optical/radio", "1 Mark"],
      ["Ozone UV filtering & greenhouse warming justification", "1 Mark"]
    ]
  ),

  // 8.15
  createQCard(
    "c12p-ch8-q15",
    "Q 8.15",
    "Exercise 8.15",
    `State Maxwell’s four equations in integral form for vacuum. Explain the physical significance of each equation. Describe how Maxwell modified Ampere’s circuital law by introducing the displacement current.`,
    `<p><strong>Maxwell's Four Fundamental Equations of Electromagnetism:</strong></p>
    <ol style="line-height:1.8;">
      <li><strong>Gauss's Law for Electrostatics:</strong>
      \\[
      \\oint \\mathbf{E} \\cdot d\\mathbf{A} = \\frac{q_{enc}}{\\varepsilon_0}
      \\]
      <em>Significance:</em> States that electric flux through any closed surface is proportional to the total net enclosed electric charge. It implies that electric charges act as sources and sinks of electric fields.</li>

      <li><strong>Gauss's Law for Magnetism:</strong>
      \\[
      \\oint \\mathbf{B} \\cdot d\\mathbf{A} = 0
      \\]
      <em>Significance:</em> The net magnetic flux through any closed Gaussian surface is always zero. This establishes that isolated magnetic monopoles do not exist; magnetic field lines form continuous closed loops.</li>

      <li><strong>Faraday's Law of Electromagnetic Induction:</strong>
      \\[
      \\oint \\mathbf{E} \\cdot d\\mathbf{l} = -\\frac{d\\Phi_B}{dt} = -\\frac{d}{dt} \\int \\mathbf{B} \\cdot d\\mathbf{A}
      \\]
      <em>Significance:</em> A time-varying magnetic flux produces an induced non-electrostatic, non-conservative electric field.</li>

      <li><strong>Ampere-Maxwell Law:</strong>
      \\[
      \\oint \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 (I_C + I_D) = \\mu_0 I_C + \\mu_0 \\varepsilon_0 \\frac{d\\Phi_E}{dt}
      \\]
      <em>Significance:</em> Magnetic fields are generated not only by conduction electric currents $I_C$, but also by time-varying electric fields (displacement current $I_D$).</li>
    </ol>

    <p><strong>Maxwell’s Modification of Ampere’s Law:</strong><br>
    Ampere's original law $\\oint \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 I_C$ was inconsistent with the continuity equation when applied to a charging capacitor.<br>
    If a closed loop surrounds the wire leading to a plate, $\\oint \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 I_C$. But for a flat surface passing between the plates where no conduction current exists, Ampere's law predicted $\\oint \\mathbf{B} \\cdot d\\mathbf{l} = 0$, leading to a physical contradiction.<br>
    Maxwell resolved this by recognizing that between the plates, the changing electric field $\\mathbf{E}$ creates a <strong>displacement current</strong>:
    \\[
    I_D = \\varepsilon_0 \\frac{d\\Phi_E}{dt}
    \\]
    This term ensures that the total current $I = I_C + I_D$ is continuous across any closed boundary, completing the symmetry of electromagnetic theory.</p>`,
    "5 Marks",
    [
      ["Statement and explanation of Gauss's Law for Electrostatics and Magnetism", "1.5 Marks"],
      ["Statement and explanation of Faraday's Law and Ampere-Maxwell Law", "1.5 Marks"],
      ["Inconsistency of Ampere's original law during capacitor charging", "1 Mark"],
      ["Derivation and definition of displacement current $I_D = \\varepsilon_0 d\\Phi_E/dt$", "1 Mark"]
    ]
  )
];

saveChapter(chNum, chTitle, svgDiagram, "Exercises 8.1 to 8.15", questions, nextChTitle);
