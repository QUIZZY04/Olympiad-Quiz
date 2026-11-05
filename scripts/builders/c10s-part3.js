// scripts/builders/c10s-part3.js
// 100% Literal Verbatim Physical NCERT Questions for Class 10 Science: Chapters 9 to 13 (Physics & Environment)
// Full In-Text and End-of-Chapter Exercises with CBSE Step Marking Schemes 2026-27

const { renderQCard } = require('./c10s-part1.js');

// ============================================================================
// CHAPTER 9: LIGHT – REFLECTION AND REFRACTION (14 In-Text Qs + 17 Exercises = 31 Qs + 1 CBQ)
// ============================================================================
function getChapter9Html() {
  const qCards = [
    // --- In-Text Page 149 ---
    renderQCard(
      'c10s-ch9-q1',
      'In-Text Page 149 • Q1',
      'Define the principal focus of a concave mirror.',
      2,
      `<p><strong>Definition:</strong></p>
<p>The <strong>principal focus</strong> of a concave mirror is a fixed point on its principal axis at which all incident light rays traveling parallel and close to the principal axis actually converge and intersect after undergoing reflection from the mirror surface.</p>
<p>It is denoted by the capital letter <strong>$F$</strong>, and lies in front of the reflecting surface at a distance equal to half the radius of curvature ($f = R/2$).</p>`,
      [
        { key: 'Point on principal axis where parallel incident rays converge after reflection', marks: '1 Mark' },
        { key: 'Denoted by F and lies in front of concave mirror at distance f = R/2', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch9-q2',
      'In-Text Page 149 • Q2',
      'The radius of curvature of a spherical mirror is 20 cm. What is its focal length?',
      2,
      `<p><strong>Calculation:</strong></p>
<p>The relationship between the radius of curvature ($R$) and focal length ($f$) of a spherical mirror is given by:</p>
$$f = \\frac{R}{2}$$
<p>Given: $R = 20\\text{ cm}$</p>
$$f = \\frac{20\\text{ cm}}{2} = \\mathbf{10\\text{ cm}}$$
<p>Therefore, the focal length of the spherical mirror is <strong>$10\\text{ cm}$</strong>.</p>`,
      [
        { key: 'Formula: f = R / 2', marks: '1 Mark' },
        { key: 'Substitution and correct answer: f = 10 cm', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch9-q3',
      'In-Text Page 149 • Q3',
      'Name a mirror that can give an erect and enlarged image of an object.',
      1,
      `<p>A <strong>Concave mirror</strong> can produce an erect and enlarged (magnified) virtual image when the object is placed between its pole ($P$) and principal focus ($F$).</p>`,
      [
        { key: 'Concave mirror (when object is placed between pole and focus)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch9-q4',
      'In-Text Page 149 • Q4',
      'Why do we prefer a convex mirror as a rear-view mirror in vehicles?',
      2,
      `<p><strong>Reasons:</strong></p>
<ol>
  <li><strong>Always Produces an Erect Image:</strong> A convex mirror always forms a virtual, erect, and diminished image of objects situated behind the vehicle, regardless of their distance.</li>
  <li><strong>Much Wider Field of View:</strong> Because a convex mirror is curved outwards towards the driver, it captures light from a much wider angle than a plane mirror of the same size, enabling the driver to view a much larger traffic area behind the vehicle.</li>
</ol>`,
      [
        { key: 'Always forms an erect and diminished image', marks: '1 Mark' },
        { key: 'Curved outwards giving a much wider field of view to the driver', marks: '1 Mark' }
      ]
    ),

    // --- In-Text Page 153 ---
    renderQCard(
      'c10s-ch9-q5',
      'In-Text Page 153 • Q1',
      'Find the focal length of a convex mirror whose radius of curvature is 32 cm.',
      2,
      `<p><strong>Calculation:</strong></p>
<p>According to the Cartesian sign convention, the radius of curvature of a convex mirror is positive: $R = +32\\text{ cm}$.</p>
$$f = \\frac{R}{2} = \\frac{+32\\text{ cm}}{2} = \\mathbf{+16\\text{ cm}}$$
<p>The focal length of the convex mirror is <strong>$+16\\text{ cm}$</strong> (located behind the mirror).</p>`,
      [
        { key: 'Formula: f = R / 2', marks: '1 Mark' },
        { key: 'Correct answer with positive sign convention: +16 cm', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch9-q6',
      'In-Text Page 153 • Q2',
      'A concave mirror produces three times magnified (enlarged) real image of an object placed at 10 cm in front of it. Where is the image located?',
      2,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li><strong>Given Data:</strong>
    <ul>
      <li>Object distance, $u = -10\\text{ cm}$ (in front of mirror).</li>
      <li>Image is <em>real and inverted</em>, so magnification $m = -3$.</li>
    </ul>
  </li>
  <li><strong>Mirror Magnification Formula:</strong>
    $$m = -\\frac{v}{u}$$
    $$-3 = -\\frac{v}{-10} = \\frac{v}{10}$$
    $$v = -3 \\times 10 = \\mathbf{-30\\text{ cm}}$$
  </li>
  <li><strong>Conclusion:</strong> The negative sign indicates that the image is formed on the same side as the object. The image is located at a distance of <strong>$30\\text{ cm}$ in front of the concave mirror</strong>.</li>
</ol>`,
      [
        { key: 'Identifying real inverted image implies m = -3 and u = -10 cm', marks: '1 Mark' },
        { key: 'Using m = -v/u to find v = -30 cm (30 cm in front of mirror)', marks: '1 Mark' }
      ]
    ),

    // --- In-Text Page 161 ---
    renderQCard(
      'c10s-ch9-q7',
      'In-Text Page 161 • Q1',
      'A ray of light travelling in air enters obliquely into water. Does the light ray bend towards the normal or away from the normal? Why?',
      2,
      `<p><strong>Refraction Analysis:</strong></p>
<p>The ray of light will <strong>bend towards the normal</strong>.</p>
<p><strong>Reason:</strong> Water is an <strong>optically denser medium</strong> compared to air (refractive index of water $n_w \\approx 1.33$ vs air $n_a \\approx 1.00$). When light passes obliquely from an optically rarer medium (air) into an optically denser medium (water), its speed slows down ($v = c/n$). According to Snell\'s law of refraction ($\\frac{\\sin i}{\\sin r} = \\frac{n_2}{n_1} > 1 \\implies \\angle r < \\angle i$), the light ray bends towards the normal line at the interface.</p>`,
      [
        { key: 'Light bends towards the normal', marks: '1 Mark' },
        { key: 'Reason: Water is optically denser than air, causing speed of light to decrease', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch9-q8',
      'In-Text Page 161 • Q2',
      'Light enters from air to glass having refractive index 1.50. What is the speed of light in the glass? The speed of light in vacuum is $3 \\times 10^8\\text{ m/s}$.',
      2,
      `<p><strong>Calculation:</strong></p>
<p>The absolute refractive index of a medium is defined as:</p>
$$n = \\frac{c}{v}$$
<p>Where $c = 3 \\times 10^8\\text{ m/s}$ and $n = 1.50$.</p>
$$v = \\frac{c}{n} = \\frac{3 \\times 10^8\\text{ m/s}}{1.50} = \\mathbf{2 \\times 10^8\\text{ m/s}}$$
<p>The speed of light in glass is <strong>$2 \\times 10^8\\text{ m/s}$</strong>.</p>`,
      [
        { key: 'Formula: v = c / n', marks: '1 Mark' },
        { key: 'Calculation: v = (3 x 10^8) / 1.50 = 2 x 10^8 m/s', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch9-q9',
      'In-Text Page 161 • Q3',
      'Find out, from the NCERT table of refractive indices, the medium having highest optical density. Also find the medium with lowest optical density.',
      2,
      `<p><strong>Answer:</strong></p>
<ol>
  <li><strong>Medium with Highest Optical Density:</strong> <strong>Diamond</strong>, with a refractive index of <strong>$n = 2.42$</strong>. Optical density is highest because light travels slowest in diamond ($v \\approx 1.24 \\times 10^8\\text{ m/s}$).</li>
  <li><strong>Medium with Lowest Optical Density:</strong> <strong>Air</strong>, with a refractive index of <strong>$n = 1.0003$</strong> (approaching vacuum $n=1$), where light travels fastest ($v \\approx 3 \\times 10^8\\text{ m/s}$).</li>
</ol>`,
      [
        { key: 'Highest optical density: Diamond (n = 2.42)', marks: '1 Mark' },
        { key: 'Lowest optical density: Air (n = 1.0003)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch9-q10',
      'In-Text Page 161 • Q4',
      'You are given kerosene, turpentine and water. In which of these does the light travel fastest?',
      2,
      `<p><strong>Comparison:</strong></p>
<p>The refractive indices of the given liquid media are:</p>
<ul>
  <li>Water: $n_w = 1.33$</li>
  <li>Kerosene: $n_k = 1.44$</li>
  <li>Turpentine oil: $n_t = 1.47$</li>
</ul>
<p>Since speed of light in a medium is inversely proportional to its refractive index ($v \\propto 1/n$), light travels fastest in the medium having the <strong>lowest refractive index</strong>. Therefore, light travels fastest in <strong>Water</strong> ($v_w = c / 1.33 \\approx 2.26 \\times 10^8\\text{ m/s}$).</p>`,
      [
        { key: 'Inverse relation v = c/n (lowest n gives fastest speed)', marks: '1 Mark' },
        { key: 'Correct medium: Water (n = 1.33)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch9-q11',
      'In-Text Page 161 • Q5',
      'The refractive index of diamond is 2.42. What is the meaning of this statement?',
      2,
      `<p><strong>Physical Meaning:</strong></p>
<p>The absolute refractive index of diamond $n = \\frac{c}{v} = 2.42$ means that:</p>
<ol>
  <li>The ratio of the speed of light in vacuum (or air) to the speed of light in diamond is $2.42$.</li>
  <li>Light travels <strong>$2.42$ times slower in diamond</strong> than in vacuum:
    $$v_{\\text{diamond}} = \\frac{c}{2.42} = \\frac{3 \\times 10^8\\text{ m/s}}{2.42} \\approx 1.24 \\times 10^8\\text{ m/s}$$
  </li>
  <li>Diamond has an extraordinarily high optical density and a very small critical angle ($\\approx 24.4^\\circ$), causing total internal reflection and brilliant sparkle.</li>
</ol>`,
      [
        { key: 'Ratio of speed of light in vacuum to speed in diamond is 2.42', marks: '1 Mark' },
        { key: 'Speed of light in diamond is reduced to 1/2.42 of its speed in vacuum', marks: '1 Mark' }
      ]
    ),

    // --- In-Text Page 166 ---
    renderQCard(
      'c10s-ch9-q12',
      'In-Text Page 166 • Q1',
      'Define 1 dioptre of power of a lens.',
      1,
      `<p><strong>Definition:</strong></p>
<p><strong>1 Dioptre (1 D)</strong> is defined as the optical power of a lens having a focal length of exactly <strong>one metre ($1\\text{ m}$)</strong>.</p>
$$P = \\frac{1}{f\\text{ (in metres)}} \\implies 1\\text{ D} = 1\\text{ m}^{-1}$$`,
      [
        { key: '1 Dioptre is the power of a lens of focal length 1 metre (1 D = 1 m^-1)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch9-q13',
      'In-Text Page 166 • Q2',
      'A convex lens forms a real and inverted image of a needle at a distance of 50 cm from it. Where is the needle placed in front of the convex lens if the image is equal to the size of the object? Also, find the power of the lens.',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li><strong>Object Position:</strong> For a convex lens, an image of the <em>same size</em> as the object ($m = -1$) is formed when the object is placed at a distance equal to twice the focal length ($2f$) in front of the lens. The image is formed at $2f$ on the other side:
    $$v = +50\\text{ cm} \\implies 2f = 50\\text{ cm} \\implies f = +25\\text{ cm} = +0.25\\text{ m}$$
    $$u = -2f = \\mathbf{-50\\text{ cm}}$$
    Therefore, the needle is placed <strong>$50\\text{ cm}$ in front of the convex lens</strong>.
  </li>
  <li><strong>Power of the Lens:</strong>
    $$P = \\frac{1}{f\\text{ (in metres)}} = \\frac{1}{+0.25\\text{ m}} = \\mathbf{+4\\text{ D}}$$
  </li>
</ol>`,
      [
        { key: 'Object placed at 2F: u = -50 cm in front of lens', marks: '1.5 Marks' },
        { key: 'Focal length f = +0.25 m and Power P = +4 D', marks: '1.5 Marks' }
      ]
    ),
    renderQCard(
      'c10s-ch9-q14',
      'In-Text Page 166 • Q3',
      'Find the power of a concave lens of focal length 2 m.',
      1,
      `<p><strong>Calculation:</strong></p>
<p>For a concave lens, the focal length is negative: $f = -2\\text{ m}$.</p>
$$P = \\frac{1}{f\\text{ (in metres)}} = \\frac{1}{-2\\text{ m}} = \\mathbf{-0.5\\text{ D}}$$
<p>The power of the concave lens is <strong>$-0.5\\text{ Dioptre}$</strong>.</p>`,
      [
        { key: 'Concave lens f = -2 m; P = 1 / (-2) = -0.5 D', marks: '1 Mark' }
      ]
    ),

    // --- End-of-Chapter Exercises (Q1 to Q17) ---
    renderQCard(
      'c10s-ch9-q15',
      'NCERT Exercise • Q1',
      'Which one of the following materials cannot be used to make a lens? (a) Water (b) Glass (c) Plastic (d) Clay.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(d) Clay</strong></p>
<p><strong>Reason:</strong> A lens requires an optically transparent medium through which light can pass and undergo refraction. Clay is completely opaque and absorbs/blocks all incident light, so it cannot be used to construct a lens.</p>`,
      [
        { key: 'Option (d) Clay with transparency explanation', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch9-q16',
      'NCERT Exercise • Q2',
      'The image formed by a concave mirror is observed to be virtual, erect and larger than the object. Where should be the position of the object? (a) Between the principal focus and the centre of curvature (b) At the centre of curvature (c) Beyond the centre of curvature (d) Between the pole of the mirror and its principal focus.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(d) Between the pole of the mirror and its principal focus</strong></p>
<p><strong>Reason:</strong> When an object is placed between the pole ($P$) and principal focus ($F$) of a concave mirror, the reflected rays diverge. When produced backwards behind the mirror, they intersect to form a virtual, erect, and magnified image.</p>`,
      [
        { key: 'Option (d) Between the pole of the mirror and its principal focus', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch9-q17',
      'NCERT Exercise • Q3',
      'Where should an object be placed in front of a convex lens to get a real image of the size of the object? (a) At the principal focus of the lens (b) At twice the focal length (c) At infinity (d) Between the optical centre of the lens and its principal focus.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(b) At twice the focal length ($2F_1$)</strong></p>
<p><strong>Reason:</strong> When an object is placed at $2F_1$ in front of a convex lens, refracted rays converge at $2F_2$ on the opposite side, producing a real, inverted image having magnification $m = -1$ (equal to object size).</p>`,
      [
        { key: 'Option (b) At twice the focal length (2F1)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch9-q18',
      'NCERT Exercise • Q4',
      'A spherical mirror and a thin spherical lens have each a focal length of -15 cm. The mirror and the lens are likely to be: (a) both concave (b) both convex (c) the mirror is concave and the lens is convex (d) the mirror is convex, but the lens is concave.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(a) both concave</strong></p>
<p><strong>Reason:</strong> According to the New Cartesian Sign Convention, distances measured to the left of the optical origin (against incident light) are negative. Both a concave mirror and a concave lens have their principal focal points located to the left, so their focal lengths are always <strong>negative</strong> ($f < 0$).</p>`,
      [
        { key: 'Option (a) both concave with sign convention justification', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch9-q19',
      'NCERT Exercise • Q5',
      'No matter how far you stand from a mirror, your image appears erect. The mirror is likely to be: (a) only plane (b) only concave (c) only convex (d) either plane or convex.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(d) either plane or convex</strong></p>
<p><strong>Reason:</strong> A plane mirror always forms a virtual and erect image of the same size at all distances. A convex mirror also always forms a virtual and erect diminished image at all object distances.</p>`,
      [
        { key: 'Option (d) either plane or convex', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch9-q20',
      'NCERT Exercise • Q6',
      'Which of the following lenses would you prefer to use while reading small letters found in a dictionary? (a) A convex lens of focal length 50 cm (b) A concave lens of focal length 50 cm (c) A convex lens of focal length 5 cm (d) A concave lens of focal length 5 cm.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(c) A convex lens of focal length 5 cm</strong></p>
<p><strong>Reason:</strong> To read small print, a convex lens is used as a simple magnifying glass. Magnifying power is $M = 1 + \\frac{D}{f}$. A smaller focal length ($f = 5\\text{ cm}$) yields a much higher optical power ($P = 1/0.05 = +20\\text{ D}$) and greater magnification than a $50\\text{ cm}$ lens ($P = +2\\text{ D}$).</p>`,
      [
        { key: 'Option (c) A convex lens of focal length 5 cm with power/magnification rationale', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch9-q21',
      'NCERT Exercise • Q7',
      'We wish to obtain an erect image of an object, using a concave mirror of focal length 15 cm. What should be the range of distance of the object from the mirror? What is the nature of the image? Is the image larger or smaller than the object? Draw a ray diagram to show the image formation in this case.',
      3,
      `<p><strong>Step-by-step Analysis:</strong></p>
<ol>
  <li><strong>Range of Object Distance:</strong> A concave mirror forms an erect image only when the object is placed between its pole ($P$) and principal focus ($F$). Given focal length $f = 15\\text{ cm}$, the object distance $u$ must be:
    $$\\mathbf{0 < u < 15\\text{ cm}}$$
    (i.e., less than $15\\text{ cm}$ in front of the mirror).
  </li>
  <li><strong>Nature of the Image:</strong> The image is <strong>Virtual and Erect</strong>.</li>
  <li><strong>Size of Image:</strong> The image is <strong>Magnified (larger than the object)</strong>.</li>
  <li><strong>Ray Diagram:</strong> A ray from the top of the object parallel to the principal axis reflects through the focus $F$. Another ray striking the pole reflects symmetrically at an equal angle. The diverging reflected rays are extended backwards behind the mirror where they intersect to produce the erect virtual image $A\'B\'$.</li>
</ol>`,
      [
        { key: 'Range: Between 0 and 15 cm from the mirror (between pole and focus)', marks: '1 Mark' },
        { key: 'Nature: Virtual and Erect; Size: Magnified (larger than object)', marks: '1 Mark' },
        { key: 'Ray diagram showing rays diverging in front and converging behind mirror', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch9-q22',
      'NCERT Exercise • Q8',
      'Name the type of mirror used in the following situations: (a) Headlights of a car (b) Side/rear-view mirror of a vehicle (c) Solar furnace. Support your answer with reason.',
      3,
      `<p><strong>Types of Mirrors and Scientific Rationale:</strong></p>
<ol>
  <li><strong>(a) Headlights of a Car:</strong> <strong>Concave mirror</strong>.
    <br><em>Reason:</em> When a high-intensity light bulb is placed at the principal focus of a concave reflector, all reflected rays emerge as a powerful, parallel beam of light that illuminates the road far ahead.
  </li>
  <li><strong>(b) Side/rear-view Mirror of a Vehicle:</strong> <strong>Convex mirror</strong>.
    <br><em>Reason:</em> Always forms an upright, diminished virtual image and has a wide outward curvature providing a broader field of view of trailing traffic.
  </li>
  <li><strong>(c) Solar Furnace:</strong> <strong>Large Concave mirror</strong> (or parabolic mirror).
    <br><em>Reason:</em> It collects incoming parallel solar rays from the sun over a huge aperture and concentrates them at its principal focus, generating extreme temperatures ($>1800^\\circ\\text{C}$).
  </li>
</ol>`,
      [
        { key: '(a) Concave mirror: bulb at focus produces parallel beam', marks: '1 Mark' },
        { key: '(b) Convex mirror: wide field of view with erect diminished image', marks: '1 Mark' },
        { key: '(c) Concave mirror: concentrates parallel solar rays at focus to generate intense heat', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch9-q23',
      'NCERT Exercise • Q9',
      'One-half of a convex lens is covered with a black paper. Will this lens produce a complete image of the object? Verify your answer experimentally. Explain your observations.',
      2,
      `<p><strong>Experimental Verification and Scientific Explanation:</strong></p>
<ol>
  <li><strong>Will it produce a complete image?</strong> <strong>Yes</strong>, the lens will still produce a complete, full-sized image of the object.</li>
  <li><strong>Explanation:</strong> Every point on the illuminated object emits countless light rays in all directions that strike all parts of the convex lens. Covering the lower (or upper) half with black paper only blocks half of the total light rays. The remaining uncovered half still refracts sufficient light rays to converge at the focal plane, forming the entire image.</li>
  <li><strong>Observable Change:</strong> Because the total amount of light entering the lens is halved, the <strong>brightness and intensity of the image is reduced</strong> (the image appears fainter).</li>
</ol>`,
      [
        { key: 'Yes, the lens produces a complete image of the object', marks: '1 Mark' },
        { key: 'Uncovered half refracts light to form complete image, but image intensity/brightness is halved', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch9-q24',
      'NCERT Exercise • Q10',
      'An object 5 cm in length is held 25 cm away from a converging lens of focal length 10 cm. Draw the ray diagram and find the position, size and the nature of the image formed.',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li><strong>Given Data:</strong>
    <ul>
      <li>Object height, $h_1 = +5\\text{ cm}$</li>
      <li>Object distance, $u = -25\\text{ cm}$</li>
      <li>Focal length of converging lens, $f = +10\\text{ cm}$</li>
    </ul>
  </li>
  <li><strong>Lens Formula:</strong>
    $$\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{v} = \\frac{1}{f} + \\frac{1}{u}$$
    $$\\frac{1}{v} = \\frac{1}{10} + \\frac{1}{-25} = \\frac{5 - 2}{50} = \\frac{3}{50}$$
    $$v = \\frac{50}{3} = \\mathbf{+16.67\\text{ cm}}$$
    The image is formed at a distance of <strong>$16.67\\text{ cm}$ on the other side of the lens</strong>.
  </li>
  <li><strong>Size and Nature of Image:</strong>
    $$m = \\frac{h_2}{h_1} = \\frac{v}{u} \\implies h_2 = h_1 \\left(\\frac{v}{u}\\right)$$
    $$h_2 = 5 \\times \\left(\\frac{50/3}{-25}\\right) = 5 \\times \\left(-\\frac{2}{3}\\right) = -\\frac{10}{3} = \\mathbf{-3.33\\text{ cm}}$$
  </li>
  <li><strong>Conclusion:</strong> The negative sign indicates that the image is <strong>Real and Inverted</strong>, diminished in size ($3.33\\text{ cm}$ tall).</li>
</ol>`,
      [
        { key: 'Using lens formula to find v = +16.67 cm', marks: '1 Mark' },
        { key: 'Magnification formula giving h2 = -3.33 cm', marks: '1 Mark' },
        { key: 'Nature: Real, inverted, diminished, formed on opposite side', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch9-q25',
      'NCERT Exercise • Q11',
      'A concave lens of focal length 15 cm forms an image 10 cm from the lens. How far is the object placed from the lens? Draw the ray diagram.',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li><strong>Given Data:</strong> A concave lens always forms a virtual, erect image on the same side as the object:
    <ul>
      <li>Focal length, $f = -15\\text{ cm}$</li>
      <li>Image distance, $v = -10\\text{ cm}$</li>
    </ul>
  </li>
  <li><strong>Lens Formula:</strong>
    $$\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{u} = \\frac{1}{v} - \\frac{1}{f}$$
    $$\\frac{1}{u} = \\frac{1}{-10} - \\frac{1}{-15} = -\\frac{1}{10} + \\frac{1}{15} = \\frac{-3 + 2}{30} = -\\frac{1}{30}$$
    $$u = \\mathbf{-30\\text{ cm}}$$
  </li>
  <li><strong>Conclusion:</strong> The object is placed at a distance of <strong>$30\\text{ cm}$ in front of the concave lens</strong>.</li>
</ol>`,
      [
        { key: 'Assigning proper signs: f = -15 cm, v = -10 cm', marks: '1 Mark' },
        { key: 'Lens formula substitution and solving u = -30 cm', marks: '1 Mark' },
        { key: 'Ray diagram showing virtual erect diminished image at 10 cm', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch9-q26',
      'NCERT Exercise • Q12',
      'An object is placed at a distance of 10 cm from a convex mirror of focal length 15 cm. Find the position and nature of the image.',
      2,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li><strong>Given Data:</strong>
    <ul>
      <li>Object distance, $u = -10\\text{ cm}$</li>
      <li>Focal length of convex mirror, $f = +15\\text{ cm}$</li>
    </ul>
  </li>
  <li><strong>Mirror Formula:</strong>
    $$\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u}$$
    $$\\frac{1}{v} = \\frac{1}{15} - \\left(-\\frac{1}{10}\\right) = \\frac{1}{15} + \\frac{1}{10} = \\frac{2 + 3}{30} = \\frac{5}{30} = \\frac{1}{6}$$
    $$v = \\mathbf{+6\\text{ cm}}$$
  </li>
  <li><strong>Magnification:</strong>
    $$m = -\\frac{v}{u} = -\\frac{+6}{-10} = \\mathbf{+0.6}$$
  </li>
  <li><strong>Conclusion:</strong> The image is formed at a distance of <strong>$6\\text{ cm}$ behind the mirror</strong>. It is <strong>Virtual, Erect, and Diminished</strong> ($0.6$ times object size).</li>
</ol>`,
      [
        { key: 'Mirror formula calculation: v = +6 cm behind the mirror', marks: '1 Mark' },
        { key: 'Magnification m = +0.6; Nature is virtual, erect, and diminished', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch9-q27',
      'NCERT Exercise • Q13',
      'The magnification produced by a plane mirror is +1. What does this mean?',
      2,
      `<p><strong>Physical Interpretation:</strong></p>
<p>Magnification formula is $m = \\frac{h_2}{h_1} = -\\frac{v}{u}$. Here, $m = +1$ conveys two important physical facts:</p>
<ol>
  <li><strong>Magnitude ($|m| = 1$):</strong> The height of the image ($h_2$) is exactly equal to the height of the object ($h_1$). There is no size distortion.</li>
  <li><strong>Positive Sign ($+$):</strong> The positive sign indicates that the image is <strong>Virtual and Erect</strong>, formed behind the mirror at the exact same distance as the object is in front of the mirror ($v = -u$).</li>
</ol>`,
      [
        { key: 'Magnitude 1 indicates image size is equal to object size (h2 = h1)', marks: '1 Mark' },
        { key: 'Positive sign indicates image is virtual and erect', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch9-q28',
      'NCERT Exercise • Q14',
      'An object 5.0 cm in length is placed at a distance of 20 cm in front of a convex mirror of radius of curvature 30 cm. Find the position of the image, its nature and size.',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li><strong>Given Data:</strong>
    <ul>
      <li>$h_1 = +5.0\\text{ cm}$</li>
      <li>$u = -20\\text{ cm}$</li>
      <li>Radius of curvature $R = +30\\text{ cm} \\implies f = R/2 = +15\\text{ cm}$</li>
    </ul>
  </li>
  <li><strong>Position of Image ($v$):</strong>
    $$\\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u} = \\frac{1}{15} - \\left(-\\frac{1}{20}\\right) = \\frac{1}{15} + \\frac{1}{20} = \\frac{4 + 3}{60} = \\frac{7}{60}$$
    $$v = \\frac{60}{7} = \\mathbf{+8.57\\text{ cm}}$$
    The image is formed <strong>$8.57\\text{ cm}$ behind the convex mirror</strong>.
  </li>
  <li><strong>Size of Image ($h_2$):</strong>
    $$m = -\\frac{v}{u} = \\frac{h_2}{h_1} \\implies h_2 = -\\frac{v \\times h_1}{u}$$
    $$h_2 = -\\frac{(60/7) \\times 5}{-20} = +\\frac{300}{140} = \\frac{15}{7} = \\mathbf{+2.14\\text{ cm}}$$
  </li>
  <li><strong>Nature:</strong> The image is <strong>Virtual, Erect, and Diminished</strong> ($2.14\\text{ cm}$ height).</li>
</ol>`,
      [
        { key: 'Calculating focal length f = +15 cm and mirror formula to get v = +8.57 cm', marks: '1 Mark' },
        { key: 'Calculating image height h2 = +2.14 cm', marks: '1 Mark' },
        { key: 'Nature: Virtual, erect, and diminished formed behind the mirror', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch9-q29',
      'NCERT Exercise • Q15',
      'An object of size 7.0 cm is placed at 27 cm in front of a concave mirror of focal length 18 cm. At what distance from the mirror should a screen be placed, so that a sharp focussed image can be obtained? Find the size and the nature of the image.',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li><strong>Given Data:</strong>
    <ul>
      <li>$h_1 = +7.0\\text{ cm}$</li>
      <li>$u = -27\\text{ cm}$</li>
      <li>$f = -18\\text{ cm}$ (concave mirror)</li>
    </ul>
  </li>
  <li><strong>Screen Distance ($v$):</strong>
    $$\\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u} = \\frac{1}{-18} - \\left(\\frac{1}{-27}\\right) = -\\frac{1}{18} + \\frac{1}{27} = \\frac{-3 + 2}{54} = -\\frac{1}{54}$$
    $$v = \\mathbf{-54\\text{ cm}}$$
    Therefore, the screen should be placed at a distance of <strong>$54\\text{ cm}$ in front of the mirror</strong>.
  </li>
  <li><strong>Image Size ($h_2$):</strong>
    $$h_2 = -\\frac{v \\times h_1}{u} = -\\frac{(-54) \\times 7.0}{-27} = \\mathbf{-14.0\\text{ cm}}$$
  </li>
  <li><strong>Nature:</strong> The image is <strong>Real, Inverted, and Enlarged</strong> (twice the object height).</li>
</ol>`,
      [
        { key: 'Mirror formula yielding screen distance v = -54 cm in front of mirror', marks: '1 Mark' },
        { key: 'Image height calculation h2 = -14.0 cm', marks: '1 Mark' },
        { key: 'Nature: Real, inverted, and magnified', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch9-q30',
      'NCERT Exercise • Q16',
      'Find the focal length of a lens of power -2.0 D. What type of lens is this?',
      2,
      `<p><strong>Calculation:</strong></p>
$$P = \\frac{1}{f\\text{ (in metres)}} \\implies f = \\frac{1}{P}$$
$$f = \\frac{1}{-2.0\\text{ D}} = -0.5\\text{ m} = \\mathbf{-50\\text{ cm}}$$
<p><strong>Lens Type:</strong> Because the focal length and power are negative, this is a <strong>Concave lens (Diverging lens)</strong>.</p>`,
      [
        { key: 'Calculation: f = 1/P = -0.5 m = -50 cm', marks: '1 Mark' },
        { key: 'Identifying lens as Concave lens (diverging lens)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch9-q31',
      'NCERT Exercise • Q17',
      'A doctor has prescribed a corrective lens of power +1.5 D. Find the focal length of the lens. Is the prescribed lens diverging or converging?',
      2,
      `<p><strong>Calculation:</strong></p>
$$f = \\frac{1}{P} = \\frac{1}{+1.5\\text{ D}} = \\frac{10}{15}\\text{ m} = +\\frac{2}{3}\\text{ m} = \\mathbf{+0.67\\text{ m}} = \\mathbf{+66.7\\text{ cm}}$$
<p><strong>Nature of Lens:</strong> Since the focal length and power are positive, the prescribed corrective lens is a <strong>Convex lens (Converging lens)</strong> used to correct hypermetropia (long-sightedness).</p>`,
      [
        { key: 'Focal length calculation: f = +0.67 m (+66.7 cm)', marks: '1 Mark' },
        { key: 'Identifying lens as Converging lens (Convex lens)', marks: '1 Mark' }
      ]
    )
  ];

  const cbqHtml = `  <div class="cbq-section">
    <div class="cbq-header"><span>🎯 Competency &amp; Case Study Questions (HOTS) — Chapter 9</span><span class="cbq-badge">CBSE Board 2026-27</span></div>
    <div class="cbq-body">
      <div class="cbq-card" style="border-left:4px solid #34d399;">
        <div class="cbq-type" style="color:#059669;">Case Study Question • Lens Combination & Optical Instruments</div>
        <div class="cbq-question">An optician places two thin lenses in contact: Lens 1 of focal length $+20\\text{ cm}$ and Lens 2 of focal length $-50\\text{ cm}$. (i) Calculate the net power of the combination. (ii) What is the effective focal length of the combination? (iii) Does the combination behave as a converging or diverging system?</div>
        <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ Show Answer</button>
        <div class="cbq-answer"><p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li><strong>(i) Net Power:</strong>
    $$P_1 = \\frac{1}{+0.20\\text{ m}} = +5\\text{ D}, \\quad P_2 = \\frac{1}{-0.50\\text{ m}} = -2\\text{ D}$$
    $$P_{\\text{net}} = P_1 + P_2 = +5\\text{ D} - 2\\text{ D} = \\mathbf{+3\\text{ D}}$$
  </li>
  <li><strong>(ii) Effective Focal Length:</strong>
    $$F = \\frac{1}{P_{\\text{net}}} = \\frac{1}{+3}\\text{ m} = +0.333\\text{ m} = \\mathbf{+33.3\\text{ cm}}$$
  </li>
  <li><strong>(iii) System Behavior:</strong> Because the net power ($+3\\text{ D}$) and effective focal length ($+33.3\\text{ cm}$) are positive, the combination behaves as a <strong>Converging lens system</strong>.</li>
</ol></div>
      </div>
    </div>
  </div>`;

  return `<section class="chapter-section" id="ch9">
  <div class="chapter-header">
    <div class="ch-badge">9</div>
    <div class="chapter-header-info">
      <div class="ch-category">Science • Class 10 Board Exam (NCERT Rationalized)</div>
      <h2>Chapter 9: Light – Reflection and Refraction</h2>
      <p>Spherical Mirrors, Mirror Formula & Magnification, Laws of Refraction, Snell's Law, Refractive Index, Lenses & Lens Power — CBSE Board Marking Scheme 2026-27</p>
    </div>
  </div>
  <div class="ex-div">NCERT In-Text Questions (Pages 149, 153, 161, 166) &amp; Chapter-End Exercises (Questions 1 to 17)</div>

${qCards.join('\n\n')}

${cbqHtml}
  <div class="chapter-nav-btns">
    <button class="ch-nav-btn" onclick="showChapter(8)">← Previous Chapter</button>
    <button class="ch-nav-btn" onclick="window.scrollTo({top:0,behavior:'smooth'})">↑ Back to Top</button>
    <button class="ch-nav-btn next" onclick="showChapter(10)">Next Chapter →</button>
  </div>
</section>
`;
}

// ============================================================================
// CHAPTER 10: THE HUMAN EYE AND THE COLOURFUL WORLD (4 In-Text Qs + 13 Exercises = 17 Qs + 1 CBQ)
// ============================================================================
function getChapter10Html() {
  const qCards = [
    // --- In-Text Page 176 ---
    renderQCard(
      'c10s-ch10-q1',
      'In-Text Page 176 • Q1',
      'What is meant by power of accommodation of the eye?',
      2,
      `<p><strong>Definition:</strong></p>
<p>The ability of the human eye lens to adjust its focal length with the aid of the <strong>ciliary muscles</strong> so as to focus clear, sharp images of objects situated at varying distances (from 25 cm to infinity) onto the retina is called the <strong>power of accommodation</strong> of the eye.</p>
<ul>
  <li>When viewing distant objects, ciliary muscles relax, the eye lens becomes thin, and focal length increases to maximum.</li>
  <li>When viewing nearby objects, ciliary muscles contract, the crystalline lens becomes thicker and more convex, decreasing its focal length.</li>
</ul>`,
      [
        { key: 'Ability of eye lens to adjust focal length via ciliary muscles to focus objects at various distances', marks: '1 Mark' },
        { key: 'Mechanism: Relaxation for distant objects vs contraction/thickening for near objects', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch10-q2',
      'In-Text Page 176 • Q2',
      'A person with a myopic eye cannot see objects beyond 1.2 m distinctly. What should be the type of the corrective lens used to restore proper vision?',
      2,
      `<p><strong>Calculation and Prescription:</strong></p>
<ol>
  <li><strong>Defect:</strong> The person is suffering from <strong>Myopia (Near-sightedness)</strong>. The far point of the eye has shifted from infinity to $d = 1.2\\text{ m}$.</li>
  <li>To see distant objects at infinity ($u = -\\infty$), the corrective lens must form a virtual image of the distant object at the person\'s defective far point ($v = -1.2\\text{ m}$):
    $$\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u} = \\frac{1}{-1.2\\text{ m}} - \\frac{1}{-\\infty} = -\\frac{1}{1.2\\text{ m}}$$
    $$f = \\mathbf{-1.2\\text{ m}}$$
    $$P = \\frac{1}{f} = \\frac{1}{-1.2\\text{ m}} = -0.83\\text{ D}$$
  </li>
  <li><strong>Lens Type:</strong> A <strong>Concave lens (Diverging lens)</strong> of focal length $1.2\\text{ m}$ (Power $-0.83\\text{ D}$) is required.</li>
</ol>`,
      [
        { key: 'Lens type: Concave lens (diverging lens)', marks: '1 Mark' },
        { key: 'Calculation: f = -1.2 m, Power P = -0.83 D', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch10-q3',
      'In-Text Page 176 • Q3',
      'What is the near point and far point of the human eye with normal vision?',
      2,
      `<p><strong>Reference Points for Normal Vision:</strong></p>
<ol>
  <li><strong>Near Point (Least Distance of Distinct Vision, $D$):</strong> The minimum distance at which an object can be seen most distinctly and comfortably without eye strain is <strong>$25\\text{ cm}$</strong> for a normal young adult eye.</li>
  <li><strong>Far Point:</strong> The farthest point up to which the eye can see objects clearly is <strong>Infinity ($\\infty$)</strong>.</li>
</ol>`,
      [
        { key: 'Near point = 25 cm (least distance of distinct vision)', marks: '1 Mark' },
        { key: 'Far point = Infinity (infinite distance)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch10-q4',
      'In-Text Page 176 • Q4',
      'A student has difficulty reading the blackboard while sitting in the last row. What could be the defect the child is suffering from? How can it be corrected?',
      2,
      `<p><strong>Defect Diagnosis & Remedy:</strong></p>
<ol>
  <li><strong>Defect:</strong> The student is suffering from <strong>Myopia (Short-sightedness / Near-sightedness)</strong> because they can see near objects clearly but have difficulty seeing distant objects distinctly (the blackboard image is formed in front of the retina).</li>
  <li><strong>Correction:</strong> It can be corrected by wearing spectacles fitted with a <strong>Concave lens (Diverging lens)</strong> of suitable focal length and power. The concave lens diverges incoming parallel light rays so that they appear to originate from the myopic far point, bringing the focused image exactly onto the retina.</li>
</ol>`,
      [
        { key: 'Diagnosis: Myopia (short-sightedness)', marks: '1 Mark' },
        { key: 'Remedy: Spectacles with concave lenses of appropriate focal length/power', marks: '1 Mark' }
      ]
    ),

    // --- End-of-Chapter Exercises (Q1 to Q13) ---
    renderQCard(
      'c10s-ch10-q5',
      'NCERT Exercise • Q1',
      'The human eye can focus objects at different distances by adjusting the focal length of the eye lens. This is due to: (a) presbyopia (b) accommodation (c) near-sightedness (d) far-sightedness.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(b) accommodation</strong></p>
<p><strong>Reason:</strong> The physiological process of altering the curvature and focal length of the crystalline lens using ciliary muscles is termed accommodation.</p>`,
      [
        { key: 'Option (b) accommodation with definition', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch10-q6',
      'NCERT Exercise • Q2',
      'The human eye forms the image of an object at its: (a) cornea (b) iris (c) pupil (d) retina.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(d) retina</strong></p>
<p><strong>Reason:</strong> The retina is the light-sensitive screen lining the back of the eye containing millions of photoreceptor cells (rods and cones) that generate electrical signals upon light reception.</p>`,
      [
        { key: 'Option (d) retina', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch10-q7',
      'NCERT Exercise • Q3',
      'The least distance of distinct vision for a young adult with normal vision is about: (a) 25 m (b) 2.5 cm (c) 25 cm (d) 2.5 m.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(c) 25 cm</strong></p>`,
      [
        { key: 'Option (c) 25 cm', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch10-q8',
      'NCERT Exercise • Q4',
      'The change in focal length of an eye lens is caused by the action of the: (a) pupil (b) retina (c) ciliary muscles (d) iris.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(c) ciliary muscles</strong></p>
<p><strong>Reason:</strong> Ciliary muscles contract or relax to alter the radius of curvature and thickness of the flexible crystalline lens, modifying its focal length.</p>`,
      [
        { key: 'Option (c) ciliary muscles', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch10-q9',
      'NCERT Exercise • Q5',
      'A person needs a lens of power -5.5 dioptres for correcting his distant vision. For correcting his near vision he needs a lens of power +1.5 dioptre. What is the focal length of the lens required for correcting (i) distant vision, and (ii) near vision?',
      2,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li><strong>(i) For Distant Vision:</strong>
    $$P_1 = -5.5\\text{ D}$$
    $$f_1 = \\frac{1}{P_1} = \\frac{1}{-5.5}\\text{ m} = -\\frac{10}{55}\\text{ m} = -\\frac{2}{11}\\text{ m} \\approx \\mathbf{-0.182\\text{ m}} = \\mathbf{-18.2\\text{ cm}}$$
    (Concave lens of focal length $-18.2\\text{ cm}$).
  </li>
  <li><strong>(ii) For Near Vision:</strong>
    $$P_2 = +1.5\\text{ D}$$
    $$f_2 = \\frac{1}{P_2} = \\frac{1}{+1.5}\\text{ m} = +\\frac{10}{15}\\text{ m} = +\\frac{2}{3}\\text{ m} \\approx \\mathbf{+0.667\\text{ m}} = \\mathbf{+66.7\\text{ cm}}$$
    (Convex lens of focal length $+66.7\\text{ cm}$).
  </li>
</ol>`,
      [
        { key: '(i) Distant vision: f1 = -0.182 m = -18.2 cm', marks: '1 Mark' },
        { key: '(ii) Near vision: f2 = +0.667 m = +66.7 cm', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch10-q10',
      'NCERT Exercise • Q6',
      'The far point of a myopic person is 80 cm in front of the eye. What is the nature and power of the lens required to correct the problem?',
      2,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>For viewing distant objects at infinity ($u = -\\infty$), the corrective lens must form a virtual image at the person\'s defective far point ($v = -80\\text{ cm} = -0.8\\text{ m}$).</li>
  <li><strong>Lens Formula:</strong>
    $$\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u} = \\frac{1}{-0.8\\text{ m}} - \\frac{1}{-\\infty} = -\\frac{1}{0.8\\text{ m}}$$
    $$f = \\mathbf{-0.8\\text{ m}} = \\mathbf{-80\\text{ cm}}$$
  </li>
  <li><strong>Power of Lens:</strong>
    $$P = \\frac{1}{f\\text{ (m)}} = \\frac{1}{-0.8\\text{ m}} = \\mathbf{-1.25\\text{ D}}$$
  </li>
  <li><strong>Nature:</strong> A <strong>Concave lens</strong> of power <strong>$-1.25\\text{ Dioptre}$</strong> is required.</li>
</ol>`,
      [
        { key: 'Focal length calculation f = -80 cm (-0.8 m)', marks: '1 Mark' },
        { key: 'Power calculation P = -1.25 D and Concave lens nature', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch10-q11',
      'NCERT Exercise • Q7',
      'Make a diagram to show how hypermetropia is corrected. The near point of a hypermetropic eye is 1 m. What is the power of the lens required to correct this defect? Assume that the near point of the normal eye is 25 cm.',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li><strong>Optical Situation:</strong>
    <ul>
      <li>Standard near point (object position), $u = -25\\text{ cm} = -0.25\\text{ m}$.</li>
      <li>Defective near point (image position), $v = -1\\text{ m} = -100\\text{ cm}$.</li>
    </ul>
  </li>
  <li><strong>Lens Formula:</strong>
    $$\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u} = \\frac{1}{-100} - \\left(-\\frac{1}{25}\\right) = -\\frac{1}{100} + \\frac{1}{25} = \\frac{-1 + 4}{100} = \\frac{3}{100}\\text{ cm}^{-1}$$
    $$f = +\\frac{100}{3}\\text{ cm} = +\\frac{1}{3}\\text{ m}$$
  </li>
  <li><strong>Power of Corrective Lens:</strong>
    $$P = \\frac{1}{f\\text{ (m)}} = \\frac{1}{+1/3\\text{ m}} = \\mathbf{+3.0\\text{ D}}$$
  </li>
  <li><strong>Remedy:</strong> A <strong>Convex lens (converging lens)</strong> of power <strong>$+3.0\\text{ D}$</strong> is required. It converges incoming rays from $25\\text{ cm}$ so they appear to diverge from the near point at $1\\text{ m}$.</li>
</ol>`,
      [
        { key: 'Correct identification: u = -25 cm, v = -100 cm', marks: '1 Mark' },
        { key: 'Calculating f = +1/3 m and Power P = +3.0 D', marks: '1 Mark' },
        { key: 'Convex lens specification and correction diagram description', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch10-q12',
      'NCERT Exercise • Q8',
      'Why is a normal eye not able to see clearly the objects placed closer than 25 cm?',
      2,
      `<p><strong>Reason:</strong></p>
<ol>
  <li>To see nearby objects distinctly, the ciliary muscles must contract to increase the curvature and thickness of the crystalline lens, shortening its focal length.</li>
  <li>However, the ciliary muscles have a physiological limit to which they can contract. The lens cannot be compressed or curved beyond a maximum limit.</li>
  <li>If an object is held closer than $25\\text{ cm}$, the required sharp convergence cannot be achieved by the eye lens, causing the light rays to focus <strong>behind the retina</strong>, resulting in blurred vision and severe ocular muscle strain.</li>
</ol>`,
      [
        { key: 'Ciliary muscles cannot contract beyond a physiological limit', marks: '1 Mark' },
        { key: 'Focal length cannot decrease further; image falls behind retina causing blurred vision', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch10-q13',
      'NCERT Exercise • Q9',
      'What happens to the image distance in the eye when we increase the distance of an object from the eye?',
      2,
      `<p><strong>Answer:</strong></p>
<p>The <strong>image distance in the eye remains constant</strong> (it always equals the fixed distance between the eye lens and the retina, approximately $2.5\\text{ cm}$).</p>
<p><strong>Explanation:</strong> When the object distance ($u$) increases, the ciliary muscles relax, making the crystalline lens thinner. This increases the focal length of the eye lens by accommodation such that the real and inverted image is always formed precisely on the fixed retina.</p>`,
      [
        { key: 'Image distance remains unchanged/constant (distance from lens to retina)', marks: '1 Mark' },
        { key: 'Accommodation adjusts lens focal length so image always focuses on the retina', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch10-q14',
      'NCERT Exercise • Q10',
      'Why do stars twinkle?',
      2,
      `<p><strong>Mechanism of Atmospheric Refraction:</strong></p>
<ol>
  <li>Stars are located at vast astronomical distances from Earth and act as point-sized sources of light.</li>
  <li>The Earth\'s atmosphere consists of continuously churning layers of air with differing physical temperatures, densities, and refractive indices ($n$).</li>
  <li>As starlight traverses these dynamically turbulent atmospheric layers, it undergoes continuous and fluctuating <strong>atmospheric refraction</strong>.</li>
  <li>This causes the apparent position of the star and the quantity of starlight reaching the observer\'s pupil to fluctuate rapidly from moment to moment. Sometimes more light enters our eye (star appears bright), and sometimes less light enters (star appears faint), producing the optical illusion called <strong>twinkling</strong>.</li>
</ol>`,
      [
        { key: 'Stars are point-sized distant sources subject to atmospheric refraction', marks: '1 Mark' },
        { key: 'Turbulent air layers cause continuous fluctuations in apparent position and light intensity entering eye', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch10-q15',
      'NCERT Exercise • Q11',
      'Explain why the planets do not twinkle.',
      2,
      `<p><strong>Reason Why Planets Do Not Twinkle:</strong></p>
<ol>
  <li>Planets are situated much closer to Earth than distant stars. Hence, they do not appear as point-sized sources, but rather as <strong>extended optical sources</strong> (a dense collection of millions of individual point sources of light).</li>
  <li>Although light rays originating from individual points on a planet undergo atmospheric refraction and intensity fluctuations, the bright and faint variations from different points average out across the entire disc:
    $$\\sum \\Delta I_{\\text{fluctuations}} \\approx 0$$
  </li>
  <li>The total amount of light entering our eye from all points combined remains constant over time. Therefore, planets shine with steady light without twinkling.</li>
</ol>`,
      [
        { key: 'Planets are close extended sources comprising a large collection of point sources', marks: '1 Mark' },
        { key: 'Fluctuations from different point sources cancel out on average, nullifying twinkling', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch10-q16',
      'NCERT Exercise • Q12',
      'Why does the Sun appear reddish early in the morning and at sunset?',
      2,
      `<p><strong>Phenomenon of Rayleigh Scattering:</strong></p>
<ol>
  <li>Early in the morning (at sunrise) and late in the evening (at sunset), the Sun is situated near the horizon. Sunlight must travel through a <strong>much thicker layer of the atmosphere and a greater distance</strong> to reach the observer compared to noon.</li>
  <li>According to Rayleigh\'s scattering law, the intensity of scattered light is inversely proportional to the fourth power of wavelength:
    $$I_{\\text{scattered}} \\propto \\frac{1}{\\lambda^4}$$
  </li>
  <li>Shorter wavelengths (blue, violet) are scattered away strongly in all directions by atmospheric molecules.</li>
  <li>The least-scattered <strong>longer wavelengths (red and orange)</strong> pass straight through the atmosphere and reach our eyes, causing the Sun and surrounding horizon to appear reddish.</li>
</ol>`,
      [
        { key: 'Sun near horizon means light travels longer atmospheric distance', marks: '1 Mark' },
        { key: 'Rayleigh scattering scatters short blue wavelengths; long red wavelengths reach observer', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch10-q17',
      'NCERT Exercise • Q13',
      'Why does the sky appear dark instead of blue to an astronaut?',
      2,
      `<p><strong>Reason:</strong></p>
<ol>
  <li>The blue appearance of the sky on Earth is caused by the <strong>Rayleigh scattering</strong> of shorter blue wavelengths of sunlight by tiny gas molecules ($N_2, O_2$) present in the atmosphere.</li>
  <li>In outer space, there is a total <strong>absence of an atmosphere</strong> (vacuum).</li>
  <li>In the absence of air molecules and particulate matter, no scattering of sunlight takes place. Sunlight travels in straight lines without illumination of surrounding space. Hence, to an astronaut or in space, the sky appears completely pitch <strong>dark/black</strong>.</li>
</ol>`,
      [
        { key: 'No atmosphere or air particles exist at high altitudes / outer space', marks: '1 Mark' },
        { key: 'Absence of scattering of light leaves surrounding space dark/black', marks: '1 Mark' }
      ]
    )
  ];

  const cbqHtml = `  <div class="cbq-section">
    <div class="cbq-header"><span>🎯 Competency &amp; Case Study Questions (HOTS) — Chapter 10</span><span class="cbq-badge">CBSE Board 2026-27</span></div>
    <div class="cbq-body">
      <div class="cbq-card" style="border-left:4px solid #34d399;">
        <div class="cbq-type" style="color:#059669;">Case Study Question • Atmospheric Phenomena & Rainbow Formation</div>
        <div class="cbq-question">A rainbow is a natural spectrum appearing in the sky after a rain shower. (i) In which direction with respect to the Sun does a rainbow always form? (ii) What acts as tiny prisms in the atmosphere? (iii) Name the three sequential optical phenomena that occur inside a water droplet during rainbow formation.</div>
        <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ Show Answer</button>
        <div class="cbq-answer"><p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li><strong>(i) Direction:</strong> A rainbow is always formed in a direction <strong>opposite to that of the Sun</strong> (the observer\'s back must face the Sun).</li>
  <li><strong>(ii) Tiny Prisms:</strong> Suspended <strong>spherical raindrops</strong> in the atmosphere act as miniature prisms.</li>
  <li><strong>(iii) Three Optical Phenomena:</strong>
    <ul>
      <li>1. <strong>Refraction and Dispersion:</strong> Incident sunlight enters the front surface of the raindrop, refracting and splitting into constituent spectral colours (VIBGYOR).</li>
      <li>2. <strong>Internal Reflection:</strong> The dispersed rays strike the back inner wall of the droplet and undergo internal reflection.</li>
      <li>3. <strong>Refraction:</strong> The reflected coloured rays refract again as they emerge out of the front surface of the droplet towards the observer\'s eye.</li>
    </ul>
  </li>
</ol></div>
      </div>
    </div>
  </div>`;

  return `<section class="chapter-section" id="ch10">
  <div class="chapter-header">
    <div class="ch-badge">10</div>
    <div class="chapter-header-info">
      <div class="ch-category">Science • Class 10 Board Exam (NCERT Rationalized)</div>
      <h2>Chapter 10: The Human Eye and the Colourful World</h2>
      <p>Structure of Human Eye, Power of Accommodation, Myopia & Hypermetropia Correction, Refraction through Prism, Atmospheric Refraction & Scattering — CBSE Board Marking Scheme 2026-27</p>
    </div>
  </div>
  <div class="ex-div">NCERT In-Text Questions (Page 176) &amp; Chapter-End Exercises (Questions 1 to 13)</div>

${qCards.join('\n\n')}

${cbqHtml}
  <div class="chapter-nav-btns">
    <button class="ch-nav-btn" onclick="showChapter(9)">← Previous Chapter</button>
    <button class="ch-nav-btn" onclick="window.scrollTo({top:0,behavior:'smooth'})">↑ Back to Top</button>
    <button class="ch-nav-btn next" onclick="showChapter(11)">Next Chapter →</button>
  </div>
</section>
`;
}

// ============================================================================
// CHAPTER 11: ELECTRICITY (20 In-Text Qs + 18 Exercises = 38 Qs + 1 CBQ)
// ============================================================================
function getChapter11Html() {
  const qCards = [
    // --- In-Text Page 187 ---
    renderQCard(
      'c10s-ch11-q1',
      'In-Text Page 187 • Q1',
      'What does an electric circuit mean?',
      1,
      `<p><strong>Definition:</strong></p>
<p>An electric circuit is a <strong>continuous and closed conducting path</strong> through which an electric current can flow. It typically comprises electrical components such as a voltage source (cell/battery), conducting connecting wires, loads (bulb/resistor), and a switch or key.</p>`,
      [
        { key: 'Continuous and closed conducting path for electric current flow', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch11-q2',
      'In-Text Page 187 • Q2',
      'Define the unit of current.',
      1,
      `<p><strong>Definition:</strong></p>
<p>The SI unit of electric current is the <strong>Ampere (A)</strong>.</p>
<p><strong>1 Ampere</strong> is defined as the flow of electric current through a cross-section of a conductor when <strong>one coulomb of electric charge</strong> passes through it in <strong>one second</strong>:</p>
$$1\\text{ A} = \\frac{1\\text{ Coulomb}}{1\\text{ Second}} = 1\\text{ C/s}$$`,
      [
        { key: '1 Ampere = 1 Coulomb per second (1 A = 1 C/s)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch11-q3',
      'In-Text Page 187 • Q3',
      'Calculate the number of electrons constituting one coulomb of charge.',
      2,
      `<p><strong>Calculation:</strong></p>
<p>According to the quantization of electric charge:</p>
$$Q = n e \\implies n = \\frac{Q}{e}$$
<p>Given: Total charge $Q = 1\\text{ C}$, elementary charge of an electron $e = 1.6 \\times 10^{-19}\\text{ C}$.</p>
$$n = \\frac{1}{1.6 \\times 10^{-19}} = \\frac{10^{19}}{1.6} = \\mathbf{6.25 \\times 10^{18}\\text{ electrons}}$$
<p>Therefore, <strong>$6.25 \\times 10^{18}$ electrons</strong> constitute one coulomb of negative charge.</p>`,
      [
        { key: 'Formula: n = Q / e', marks: '1 Mark' },
        { key: 'Correct value: n = 6.25 x 10^18 electrons', marks: '1 Mark' }
      ]
    ),

    // --- In-Text Page 189 ---
    renderQCard(
      'c10s-ch11-q4',
      'In-Text Page 189 • Q1',
      'Name a device that helps to maintain a potential difference across a conductor.',
      1,
      `<p>A <strong>Battery</strong> (or an electric cell) helps to maintain a steady potential difference across the terminals of a conductor by converting stored chemical energy into electrical energy.</p>`,
      [
        { key: 'Electric cell or battery', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch11-q5',
      'In-Text Page 189 • Q2',
      'What is meant by saying that the potential difference between two points is 1 V?',
      1,
      `<p><strong>Definition:</strong></p>
<p>The potential difference between two points is <strong>1 Volt (1 V)</strong> if <strong>one Joule of work</strong> is done in moving a positive electric charge of <strong>one Coulomb</strong> from one point to the other across an electric field:</p>
$$1\\text{ Volt} = \\frac{1\\text{ Joule}}{1\\text{ Coulomb}} = 1\\text{ J/C}$$`,
      [
        { key: '1 Volt = 1 Joule of work done per 1 Coulomb of charge moved', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch11-q6',
      'In-Text Page 189 • Q3',
      'How much energy is given to each coulomb of charge passing through a 6 V battery?',
      2,
      `<p><strong>Calculation:</strong></p>
<p>The relationship between work done (energy transferred $W$), charge ($Q$), and potential difference ($V$) is:</p>
$$W = Q \\times V$$
<p>Given: Charge $Q = 1\\text{ C}$, Potential difference $V = 6\\text{ V}$.</p>
$$W = 1\\text{ C} \\times 6\\text{ V} = \\mathbf{6\\text{ Joules}}$$
<p>Therefore, <strong>6 Joules</strong> of energy is given to each coulomb of charge.</p>`,
      [
        { key: 'Formula: W = Q x V', marks: '1 Mark' },
        { key: 'Calculation: W = 1 C x 6 V = 6 J', marks: '1 Mark' }
      ]
    ),

    // --- In-Text Page 198 ---
    renderQCard(
      'c10s-ch11-q7',
      'In-Text Page 198 • Q1',
      'On what factors does the resistance of a conductor depend?',
      2,
      `<p><strong>Factors Determining Electrical Resistance ($R$):</strong></p>
<p>The resistance of a uniform metallic conductor depends on:</p>
<ol>
  <li><strong>Length ($l$):</strong> Resistance is directly proportional to conductor length ($R \\propto l$). Doubling the length doubles resistance.</li>
  <li><strong>Area of Cross-section ($A$):</strong> Resistance is inversely proportional to cross-sectional area ($R \\propto 1/A$). Thicker wires have less resistance.</li>
  <li><strong>Nature of Material (Resistivity, $\\rho$):</strong> Characterized by the specific electrical resistivity $\\rho$ of the material.</li>
  <li><strong>Temperature ($T$):</strong> For pure metallic conductors, resistance increases linearly with rising temperature.</li>
</ol>
$$R = \\rho \\frac{l}{A}$$`,
      [
        { key: 'Directly proportional to length (l) and inversely proportional to area of cross-section (A)', marks: '1 Mark' },
        { key: 'Nature of material (resistivity rho) and temperature with formula R = rho*l/A', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch11-q8',
      'In-Text Page 198 • Q2',
      'Will current flow more easily through a thick wire or a thin wire of the same material, when connected to the same source? Why?',
      2,
      `<p><strong>Answer & Scientific Explanation:</strong></p>
<p>Current will flow <strong>more easily through the thick wire</strong>.</p>
<p><strong>Reason:</strong> Resistance of a conductor is inversely proportional to its cross-sectional area ($R \\propto 1/A$). A thick wire possesses a larger cross-sectional area ($A_{\\text{thick}} > A_{\\text{thin}}$), and therefore has significantly less electrical resistance ($R_{\\text{thick}} < R_{\\text{thin}}$). By Ohm\'s law ($I = V/R$), for the same applied potential difference, smaller resistance permits a larger current to flow easily with less internal collision.</p>`,
      [
        { key: 'Flows more easily through thick wire', marks: '1 Mark' },
        { key: 'Larger cross-sectional area implies lower resistance (R proportional to 1/A), allowing more current', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch11-q9',
      'In-Text Page 198 • Q3',
      'Let the resistance of an electrical component remains constant while the potential difference across the two ends of the component decreases to half of its former value. What change will occur in the current through it?',
      2,
      `<p><strong>Calculation:</strong></p>
<p>According to Ohm\'s law, electric current is directly proportional to potential difference across a constant resistance:</p>
$$I = \\frac{V}{R}$$
<p>If the new potential difference is $V\' = \\frac{V}{2}$ and resistance $R$ remains constant:</p>
$$I\' = \\frac{V\'}{R} = \\frac{V/2}{R} = \\frac{1}{2} \\left(\\frac{V}{R}\\right) = \\frac{I}{2}$$
<p><strong>Conclusion:</strong> The current flowing through the component will also <strong>decrease to half of its initial value</strong>.</p>`,
      [
        { key: 'Ohm\'s law I = V/R with constant resistance shows I proportional to V', marks: '1 Mark' },
        { key: 'Halving potential difference halves the electric current (I\' = I / 2)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch11-q10',
      'In-Text Page 198 • Q4',
      'Why are coils of electric toasters and electric irons made of an alloy rather than a pure metal?',
      2,
      `<p><strong>Reasons:</strong></p>
<ol>
  <li><strong>High Electrical Resistivity:</strong> Alloys (such as <strong>Nichrome</strong>, an alloy of Ni, Cr, Mn, and Fe) have significantly higher resistivity ($\\approx 100 \\times 10^{-8}\\ \\Omega\\cdot\\text{m}$) than pure metals like copper or aluminium. According to Joule\'s heating law ($H = I^2 R t$), higher resistance generates intense heat.</li>
  <li><strong>High Melting Point and Resistance to Oxidation:</strong> Alloys do not easily oxidise (burn or melt) even when heated red-hot to temperatures exceeding $900^\\circ\\text{C}$ in air, ensuring long operating life.</li>
</ol>`,
      [
        { key: 'High electrical resistivity generates large Joule heating', marks: '1 Mark' },
        { key: 'High melting point and does not oxidise (burn) at red-hot temperatures', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch11-q11',
      'In-Text Page 198 • Q5',
      'Use data of electrical resistivity of substances to answer: (a) Which among iron and mercury is a better conductor? (b) Which material is the best conductor?',
      2,
      `<p><strong>Resistivity Data:</strong></p>
<ul>
  <li>Resistivity of Iron ($\\text{Fe}$): $\\rho_{\\text{iron}} = 10.0 \\times 10^{-8}\\ \\Omega\\cdot\\text{m}$</li>
  <li>Resistivity of Mercury ($\\text{Hg}$): $\\rho_{\\text{mercury}} = 94.0 \\times 10^{-8}\\ \\Omega\\cdot\\text{m}$</li>
  <li>Resistivity of Silver ($\\text{Ag}$): $\\rho_{\\text{silver}} = 1.60 \\times 10^{-8}\\ \\Omega\\cdot\\text{m}$</li>
</ul>
<p><strong>Answers:</strong></p>
<ol>
  <li><strong>(a) Iron vs Mercury:</strong> <strong>Iron</strong> is a better conductor because its electrical resistivity is about 9.4 times lower than that of mercury (lower $\\rho$ allows higher electrical conductivity).</li>
  <li><strong>(b) Best Conductor:</strong> <strong>Silver ($\\text{Ag}$)</strong> is the best electrical conductor because it possesses the lowest resistivity among all known materials ($1.60 \\times 10^{-8}\\ \\Omega\\cdot\\text{m}$).</li>
</ol>`,
      [
        { key: '(a) Iron is a better conductor (lower resistivity than mercury)', marks: '1 Mark' },
        { key: '(b) Silver is the best electrical conductor (lowest resistivity)', marks: '1 Mark' }
      ]
    ),

    // --- In-Text Page 203 ---
    renderQCard(
      'c10s-ch11-q12',
      'In-Text Page 203 • Q1',
      'Draw a schematic diagram of a circuit consisting of a battery of three cells of 2 V each, a 5 ohm resistor, an 8 ohm resistor, and a 12 ohm resistor, and a plug key, all connected in series.',
      2,
      `<p><strong>Circuit Specification:</strong></p>
<ol>
  <li><strong>Battery:</strong> 3 cells of $2\\text{ V}$ each connected in series provide a total electromotive force of $V = 3 \\times 2 = \\mathbf{6\\text{ V}}$.</li>
  <li><strong>Resistors in Series:</strong> Resistors $R_1 = 5\\ \\Omega$, $R_2 = 8\\ \\Omega$, and $R_3 = 12\\ \\Omega$ are connected end-to-end in a single continuous loop.</li>
  <li><strong>Plug Key:</strong> Connected in series to open or close the circuit.</li>
</ol>`,
      [
        { key: 'Correct series combination of 3 cells giving total 6 V', marks: '1 Mark' },
        { key: 'End-to-end series connection of 5 ohm, 8 ohm, 12 ohm resistors and plug key', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch11-q13',
      'In-Text Page 203 • Q2',
      'Redraw the circuit of Question 1, putting in an ammeter to measure the current through the resistors and a voltmeter to measure the potential difference across the 12 ohm resistor. What would be the readings in the ammeter and the voltmeter?',
      3,
      `<p><strong>Step-by-step Circuit Calculation:</strong></p>
<ol>
  <li><strong>Total Series Resistance:</strong>
    $$R_{\\text{eq}} = R_1 + R_2 + R_3 = 5 + 8 + 12 = \\mathbf{25\\ \\Omega}$$
  </li>
  <li><strong>Ammeter Reading (Circuit Current, $I$):</strong>
    The ammeter is connected in series. By Ohm\'s law:
    $$I = \\frac{V}{R_{\\text{eq}}} = \\frac{6\\text{ V}}{25\\ \\Omega} = \\mathbf{0.24\\text{ A}}$$
    Therefore, the ammeter reading is <strong>$0.24\\text{ A}$</strong>.
  </li>
  <li><strong>Voltmeter Reading ($V_{12}$ across 12 ohm resistor):</strong>
    The voltmeter is connected in parallel across the $12\\ \\Omega$ resistor.
    $$V_{12} = I \\times R_3 = 0.24\\text{ A} \\times 12\\ \\Omega = \\mathbf{2.88\\text{ V}}$$
    Therefore, the voltmeter reading is <strong>$2.88\\text{ V}$</strong>.
  </li>
</ol>`,
      [
        { key: 'Calculation of equivalent resistance: Req = 5 + 8 + 12 = 25 ohm', marks: '1 Mark' },
        { key: 'Ammeter reading: I = V / Req = 6 / 25 = 0.24 A', marks: '1 Mark' },
        { key: 'Voltmeter reading: V = I * R3 = 0.24 * 12 = 2.88 V', marks: '1 Mark' }
      ]
    ),

    // --- In-Text Page 206 ---
    renderQCard(
      'c10s-ch11-q14',
      'In-Text Page 206 • Q1',
      'Judge the equivalent resistance when the following are connected in parallel – (a) 1 ohm and $10^6$ ohm, (b) 1 ohm and $10^3$ ohm and $10^6$ ohm.',
      2,
      `<p><strong>Analysis of Parallel Combinations:</strong></p>
<p><strong>Fundamental Rule:</strong> The equivalent resistance of any parallel combination is always strictly <strong>less than the lowest individual resistance</strong> in the network ($R_p < R_{\\text{min}}$).</p>
<ol>
  <li><strong>(a) $1\\ \\Omega$ and $10^6\\ \\Omega$ in parallel:</strong>
    $$\\frac{1}{R_p} = \\frac{1}{1} + \\frac{1}{10^6} = \\frac{10^6 + 1}{10^6} \\approx 1 \\implies R_p = \\frac{10^6}{1000001} \\approx \\mathbf{0.999999\\ \\Omega} \\quad (\\mathbf{< 1\\ \\Omega})$$
  </li>
  <li><strong>(b) $1\\ \\Omega$, $10^3\\ \\Omega$, and $10^6\\ \\Omega$ in parallel:</strong>
    $$\\frac{1}{R_p} = \\frac{1}{1} + \\frac{1}{1000} + \\frac{1}{10^6} = \\frac{1000000 + 1000 + 1}{10^6} = \\frac{1001001}{10^6}$$
    $$R_p = \\frac{10^6}{1001001} \\approx \\mathbf{0.999\\ \\Omega} \\quad (\\mathbf{< 1\\ \\Omega})$$
  </li>
</ol>`,
      [
        { key: '(a) Equivalent resistance is slightly less than 1 ohm (~0.999999 ohm)', marks: '1 Mark' },
        { key: '(b) Equivalent resistance is slightly less than 1 ohm (~0.999 ohm)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch11-q15',
      'In-Text Page 206 • Q2',
      'An electric lamp of 100 ohm, a toaster of resistance 50 ohm, and a water filter of resistance 500 ohm are connected in parallel to a 220 V source. What is the resistance of an electric iron connected to the same source that takes as much current as all three appliances, and what is the current through it?',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li><strong>Equivalent Resistance of Three Parallel Appliances ($R_p$):</strong>
    $$\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3} = \\frac{1}{100} + \\frac{1}{50} + \\frac{1}{500}$$
    $$\\frac{1}{R_p} = \\frac{5 + 10 + 1}{500} = \\frac{16}{500}$$
    $$R_p = \\frac{500}{16} = \\mathbf{31.25\\ \\Omega}$$
  </li>
  <li><strong>Total Current Drawn ($I$):</strong>
    $$I = \\frac{V}{R_p} = \\frac{220\\text{ V}}{31.25\\ \\Omega} = \\mathbf{7.04\\text{ A}}$$
  </li>
  <li><strong>Electric Iron:</strong> Since the electric iron takes as much current as all three appliances combined when connected to $220\\text{ V}$, its resistance must equal the equivalent resistance:
    $$\\mathbf{R_{\\text{iron}} = 31.25\\ \\Omega}, \\quad \\mathbf{I_{\\text{iron}} = 7.04\\text{ A}}$$
  </li>
</ol>`,
      [
        { key: 'Parallel formula 1/Rp = 1/100 + 1/50 + 1/500 = 16/500 yielding Rp = 31.25 ohm', marks: '1.5 Marks' },
        { key: 'Current drawn I = 220 / 31.25 = 7.04 A; R_iron = 31.25 ohm', marks: '1.5 Marks' }
      ]
    ),
    renderQCard(
      'c10s-ch11-q16',
      'In-Text Page 206 • Q3',
      'What are the advantages of connecting electrical devices in parallel with the battery instead of connecting them in series?',
      3,
      `<p><strong>Advantages of Parallel Circuit in Domestic Wiring:</strong></p>
<ol>
  <li><strong>Independent Operation:</strong> Each appliance gets its own independent on/off switch. If one appliance faults or is turned off, the other appliances continue to operate normally without interruption. In a series circuit, any break stops current in all devices.</li>
  <li><strong>Full Mains Voltage across Every Device:</strong> In parallel, each appliance receives the full rated line voltage ($220\\text{ V}$), allowing devices to operate at full intended power. In series, voltage divides among devices, causing bulbs to glow dimly.</li>
  <li><strong>Different Current Requirements Satisfied:</strong> Devices with widely different power ratings (e.g., $1000\\text{ W}$ heater requiring $4.5\\text{ A}$ vs $40\\text{ W}$ lamp requiring $0.18\\text{ A}$) draw their required current according to their individual resistance.</li>
  <li><strong>Low Total Circuit Resistance:</strong> The overall equivalent resistance of the domestic wiring is low, preventing excessive overall power dissipation.</li>
</ol>`,
      [
        { key: 'Appliances operate independently with separate switches (break in one does not affect others)', marks: '1 Mark' },
        { key: 'Each appliance receives full line voltage (220 V)', marks: '1 Mark' },
        { key: 'Each device draws its independently required current according to power rating', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch11-q17',
      'In-Text Page 206 • Q4',
      'How can three resistors of resistances 2 ohm, 3 ohm, and 6 ohm be connected to give a total resistance of (a) 4 ohm, (b) 1 ohm?',
      3,
      `<p><strong>Step-by-step Circuit Configuration:</strong></p>
<ol>
  <li><strong>(a) To obtain $4\\ \\Omega$:</strong>
    Connect the $3\\ \\Omega$ and $6\\ \\Omega$ resistors in <strong>parallel</strong>, and connect this parallel group in <strong>series with the $2\\ \\Omega$ resistor</strong>:
    $$R_p = \\frac{3 \\times 6}{3 + 6} = \\frac{18}{9} = 2\\ \\Omega$$
    $$R_{\\text{total}} = 2\\ \\Omega + R_p = 2 + 2 = \\mathbf{4\\ \\Omega}$$
  </li>
  <li><strong>(b) To obtain $1\\ \\Omega$:</strong>
    Connect all three resistors ($2\\ \\Omega, 3\\ \\Omega, 6\\ \\Omega$) in <strong>parallel</strong>:
    $$\\frac{1}{R_p} = \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6} = \\frac{3 + 2 + 1}{6} = \\frac{6}{6} = 1\\ \\Omega^{-1}$$
    $$R_p = \\mathbf{1\\ \\Omega}$$
  </li>
</ol>`,
      [
        { key: '(a) 3 ohm and 6 ohm in parallel (giving 2 ohm) in series with 2 ohm gives 4 ohm', marks: '1.5 Marks' },
        { key: '(b) All three resistors in parallel: 1/2 + 1/3 + 1/6 = 6/6 gives 1 ohm', marks: '1.5 Marks' }
      ]
    ),
    renderQCard(
      'c10s-ch11-q18',
      'In-Text Page 206 • Q5',
      'What is (a) the highest, (b) the lowest total resistance that can be secured by combinations of four coils of resistance 4 ohm, 8 ohm, 12 ohm, 24 ohm?',
      2,
      `<p><strong>Calculations:</strong></p>
<ol>
  <li><strong>(a) Highest Resistance (Series Combination):</strong>
    Connecting all four coils in series yields maximum equivalent resistance:
    $$R_{\\text{max}} = R_1 + R_2 + R_3 + R_4 = 4 + 8 + 12 + 24 = \\mathbf{48\\ \\Omega}$$
  </li>
  <li><strong>(b) Lowest Resistance (Parallel Combination):</strong>
    Connecting all four coils in parallel yields minimum equivalent resistance:
    $$\\frac{1}{R_{\\text{min}}} = \\frac{1}{4} + \\frac{1}{8} + \\frac{1}{12} + \\frac{1}{24} = \\frac{6 + 3 + 2 + 1}{24} = \\frac{12}{24} = \\frac{1}{2}$$
    $$R_{\\text{min}} = \\mathbf{2\\ \\Omega}$$
  </li>
</ol>`,
      [
        { key: '(a) Highest: Series connection R = 4 + 8 + 12 + 24 = 48 ohm', marks: '1 Mark' },
        { key: '(b) Lowest: Parallel connection 1/R = 1/4 + 1/8 + 1/12 + 1/24 = 1/2 -> R = 2 ohm', marks: '1 Mark' }
      ]
    ),

    // --- In-Text Page 209 ---
    renderQCard(
      'c10s-ch11-q19',
      'In-Text Page 209 • Q1',
      'Why does the cord of an electric heater not glow while the heating element does?',
      2,
      `<p><strong>Application of Joule\'s Heating Law ($H = I^2 R t$):</strong></p>
<ol>
  <li>The connecting cord and the heating element are connected in series; therefore, the exact same electric current ($I$) flows through both.</li>
  <li><strong>Connecting Cord:</strong> Made of thick copper or aluminium with very low electrical resistivity, hence its resistance ($R_{\\text{cord}}$) is negligible. Negligible heat is dissipated ($H \\propto R$), so it remains cool and does not glow.</li>
  <li><strong>Heating Element:</strong> Made of high-resistance alloy (Nichrome) with high resistivity. Because its resistance ($R_{\\text{element}}$) is very large, an enormous quantity of Joule heat is developed, causing the element to heat up to glowing incandescence (red-hot, $>800^\\circ\\text{C}$).</li>
</ol>`,
      [
        { key: 'Current is identical in both series elements', marks: '1 Mark' },
        { key: 'Cord has low resistance (negligible heat); element has high resistance (intense heat glowing red-hot)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch11-q20',
      'In-Text Page 209 • Q2',
      'Compute the heat generated while transferring 96000 coulomb of charge in one hour through a potential difference of 50 V.',
      2,
      `<p><strong>Calculation:</strong></p>
<p>Heat generated is equal to the electrical work done in moving charge $Q$ across potential difference $V$:</p>
$$H = W = Q \\times V$$
<p>Given: $Q = 96000\\text{ C}$, $V = 50\\text{ V}$.</p>
$$H = 96000\\text{ C} \\times 50\\text{ V} = 4,800,000\\text{ J} = \\mathbf{4.8 \\times 10^6\\text{ Joules}}$$
<p>The heat generated is <strong>$4.8 \\times 10^6\\text{ J}$</strong> (or $4.8\\text{ MJ}$).</p>`,
      [
        { key: 'Formula: H = Q x V', marks: '1 Mark' },
        { key: 'Calculation: 96000 x 50 = 4.8 x 10^6 J', marks: '1 Mark' }
      ]
    ),

    // --- End-of-Chapter Exercises (Q1 to Q18) ---
    renderQCard(
      'c10s-ch11-q21',
      'NCERT Exercise • Q1',
      'A piece of wire of resistance R is cut into five equal parts. These parts are then connected in parallel. If the equivalent resistance of this combination is R\', then the ratio R/R\' is: (a) 1/25 (b) 1/5 (c) 5 (d) 25.',
      2,
      `<p><strong>Correct Option:</strong> <strong>(d) 25</strong></p>
<p><strong>Step-by-step Derivation:</strong></p>
<ol>
  <li>When a wire of resistance $R$ is cut into 5 equal parts, the resistance of each part becomes:
    $$r = \\frac{R}{5}$$
  </li>
  <li>When these 5 equal resistors are connected in parallel, the equivalent resistance $R\'$ is:
    $$\\frac{1}{R\'} = \\frac{1}{r} + \\frac{1}{r} + \\frac{1}{r} + \\frac{1}{r} + \\frac{1}{r} = \\frac{5}{r} = \\frac{5}{R/5} = \\frac{25}{R}$$
    $$R\' = \\frac{R}{25}$$
  </li>
  <li>Therefore, the ratio is:
    $$\\frac{R}{R\'} = \\frac{R}{R/25} = \\mathbf{25}$$
  </li>
</ol>`,
      [
        { key: 'Resistance of each piece is r = R / 5', marks: '1 Mark' },
        { key: 'Parallel equivalent R\' = R / 25 yielding ratio R / R\' = 25 [Option (d)]', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch11-q22',
      'NCERT Exercise • Q2',
      'Which of the following terms does not represent electrical power in a circuit? (a) $I^2 R$ (b) $I R^2$ (c) $V I$ (d) $V^2 / R$.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(b) $I R^2$</strong></p>
<p><strong>Reason:</strong> Electric power is $P = V I$. Using Ohm\'s law ($V = I R$), $P = (I R) I = I^2 R$, or $P = V (V/R) = V^2 / R$. The formula $I R^2$ is dimensionally incorrect and does not represent power.</p>`,
      [
        { key: 'Option (b) IR^2 does not represent power', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch11-q23',
      'NCERT Exercise • Q3',
      'An electric bulb is rated 220 V and 100 W. When it is operated on 110 V, the power consumed will be: (a) 100 W (b) 75 W (c) 50 W (d) 25 W.',
      2,
      `<p><strong>Correct Option:</strong> <strong>(d) 25 W</strong></p>
<p><strong>Step-by-step Calculation:</strong></p>
<ol>
  <li>Resistance of the bulb filament is constant:
    $$R = \\frac{V^2}{P} = \\frac{220^2}{100} = \\frac{48400}{100} = 484\\ \\Omega$$
  </li>
  <li>When operated on $V\' = 110\\text{ V}$, power consumed is:
    $$P\' = \\frac{(V\')^2}{R} = \\frac{110^2}{484} = \\frac{12100}{484} = \\mathbf{25\\text{ W}}$$
  </li>
</ol>`,
      [
        { key: 'Filament resistance R = V^2 / P = 484 ohm', marks: '1 Mark' },
        { key: 'Power at 110 V: P\' = 110^2 / 484 = 25 W [Option (d)]', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch11-q24',
      'NCERT Exercise • Q4',
      'Two conducting wires of the same material and of equal lengths and equal diameters are first connected in series and then parallel in a circuit across the same potential difference. The ratio of heat produced in series and parallel combinations would be: (a) 1:2 (b) 2:1 (c) 1:4 (d) 4:1.',
      2,
      `<p><strong>Correct Option:</strong> <strong>(c) 1:4</strong></p>
<p><strong>Derivation:</strong></p>
<ol>
  <li>Let each wire have resistance $R$.
    <ul>
      <li>Series resistance: $R_s = R + R = 2R$.</li>
      <li>Parallel resistance: $R_p = \\frac{R \\times R}{R + R} = \\frac{R}{2}$.</li>
    </ul>
  </li>
  <li>Since both are connected across the <em>same potential difference ($V$)</em>, heat generated per unit time is $H = \\frac{V^2}{R_{\\text{eq}}} t$:
    $$H_s = \\frac{V^2}{2R} t, \\quad H_p = \\frac{V^2}{R/2} t = \\frac{2 V^2}{R} t$$
    $$\\frac{H_s}{H_p} = \\frac{V^2 / (2R)}{2V^2 / R} = \\frac{1}{4} = \\mathbf{1 : 4}$$
  </li>
</ol>`,
      [
        { key: 'Formulas Rs = 2R and Rp = R / 2', marks: '1 Mark' },
        { key: 'Heat ratio for same potential difference: Hs / Hp = Rp / Rs = (R/2) / (2R) = 1:4 [Option (c)]', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch11-q25',
      'NCERT Exercise • Q5',
      'How is a voltmeter connected in the circuit to measure the potential difference between two points?',
      1,
      `<p>A voltmeter is always connected in <strong>parallel</strong> across the two points between which the potential difference is to be measured. It has an extremely high electrical resistance so that it draws negligible current from the main circuit.</p>`,
      [
        { key: 'Connected in parallel with high internal resistance', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch11-q26',
      'NCERT Exercise • Q6',
      'A copper wire has diameter 0.5 mm and resistivity of $1.6 \\times 10^{-8}\\ \\Omega\\cdot\\text{m}$. What will be the length of this wire to make its resistance $10\\ \\Omega$? How much does the resistance change if the diameter is doubled?',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li><strong>Calculation of Length ($l$):</strong>
    <ul>
      <li>Diameter $d = 0.5\\text{ mm} = 0.5 \\times 10^{-3}\\text{ m} \\implies r = 0.25 \\times 10^{-3}\\text{ m}$.</li>
      <li>Cross-sectional area: $A = \\pi r^2 = 3.14 \\times (0.25 \\times 10^{-3})^2 = 1.9635 \\times 10^{-7}\\text{ m}^2$.</li>
      <li>Given: $R = 10\\ \\Omega$, $\\rho = 1.6 \\times 10^{-8}\\ \\Omega\\cdot\\text{m}$.</li>
    </ul>
    $$R = \\rho \\frac{l}{A} \\implies l = \\frac{R A}{\\rho} = \\frac{10 \\times 1.9635 \\times 10^{-7}}{1.6 \\times 10^{-8}} = \\frac{1.9635 \\times 10^{-6}}{1.6 \\times 10^{-8}} = \\mathbf{122.7\\text{ metres}}$$
  </li>
  <li><strong>Effect of Doubling Diameter:</strong>
    $$R = \\frac{\\rho l}{\\pi (d/2)^2} = \\frac{4 \\rho l}{\\pi d^2} \\implies R \\propto \\frac{1}{d^2}$$
    If diameter is doubled ($d\' = 2d$), the new resistance becomes:
    $$R\' = \\frac{R}{2^2} = \\frac{R}{4} = \\frac{10\\ \\Omega}{4} = \\mathbf{2.5\\ \\Omega}$$
    The resistance <strong>decreases to one-fourth</strong> of its original value ($2.5\\ \\Omega$).
  </li>
</ol>`,
      [
        { key: 'Area calculation: A = pi * r^2 = 1.9635 x 10^-7 m^2', marks: '1 Mark' },
        { key: 'Length formula and result: l = R*A / rho = 122.7 metres', marks: '1 Mark' },
        { key: 'Doubling diameter reduces resistance to 1/4th (R\' = 2.5 ohm)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch11-q27',
      'NCERT Exercise • Q7',
      'When a 12 V battery is connected across an unknown resistor, there is a current of 2.5 mA in the circuit. Find the value of the resistance of the resistor.',
      2,
      `<p><strong>Calculation:</strong></p>
<p>Given:</p>
<ul>
  <li>Potential difference, $V = 12\\text{ V}$</li>
  <li>Current, $I = 2.5\\text{ mA} = 2.5 \\times 10^{-3}\\text{ A}$</li>
</ul>
<p>By Ohm\'s law:</p>
$$R = \\frac{V}{I} = \\frac{12\\text{ V}}{2.5 \\times 10^{-3}\\text{ A}} = \\frac{12000}{2.5} = \\mathbf{4800\\ \\Omega} = \\mathbf{4.8\\text{ k}\\Omega}$$
<p>The resistance of the unknown resistor is <strong>$4800\\ \\Omega$</strong> (or $4.8\\text{ k}\\Omega$).</p>`,
      [
        { key: 'Converting current: I = 2.5 x 10^-3 A', marks: '1 Mark' },
        { key: 'Ohm\'s law calculation: R = V / I = 4800 ohm (4.8 k-ohm)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch11-q28',
      'NCERT Exercise • Q8',
      'A battery of 9 V is connected in series with resistors of 0.2 ohm, 0.3 ohm, 0.4 ohm, 0.5 ohm and 12 ohm, respectively. How much current would flow through the 12 ohm resistor?',
      2,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li><strong>Total Series Resistance ($R_s$):</strong>
    $$R_s = 0.2 + 0.3 + 0.4 + 0.5 + 12 = \\mathbf{13.4\\ \\Omega}$$
  </li>
  <li><strong>Circuit Current ($I$):</strong>
    $$I = \\frac{V}{R_s} = \\frac{9\\text{ V}}{13.4\\ \\Omega} \\approx \\mathbf{0.67\\text{ A}}$$
  </li>
  <li><strong>Current through 12 ohm Resistor:</strong> In a series circuit, current is identical through every component. Therefore, the current flowing through the $12\\ \\Omega$ resistor is exactly <strong>$0.67\\text{ A}$</strong>.</li>
</ol>`,
      [
        { key: 'Total series resistance: Rs = 13.4 ohm', marks: '1 Mark' },
        { key: 'Current calculation I = 9 / 13.4 = 0.67 A flowing equally through 12 ohm resistor', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch11-q29',
      'NCERT Exercise • Q9',
      'How many 176 ohm resistors (in parallel) are required to carry 5 A on a 220 V line?',
      2,
      `<p><strong>Calculation:</strong></p>
<ol>
  <li>Let $n$ resistors of resistance $R = 176\\ \\Omega$ be connected in parallel.</li>
  <li>The equivalent resistance of $n$ identical parallel resistors is $R_p = \\frac{R}{n} = \\frac{176}{n}$.</li>
  <li>By Ohm\'s law for $V = 220\\text{ V}$ and $I = 5\\text{ A}$:
    $$R_p = \\frac{V}{I} = \\frac{220\\text{ V}}{5\\text{ A}} = 44\\ \\Omega$$
  </li>
  <li>Equating both expressions:
    $$\\frac{176}{n} = 44 \\implies n = \\frac{176}{44} = \\mathbf{4}$$
  </li>
</ol>
<p>Therefore, exactly <strong>4 resistors</strong> must be connected in parallel.</p>`,
      [
        { key: 'Required equivalent resistance: Rp = 220 / 5 = 44 ohm', marks: '1 Mark' },
        { key: 'Solving n = 176 / 44 = 4 resistors in parallel', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch11-q30',
      'NCERT Exercise • Q10',
      'Show how you would connect three resistors, each of resistance 6 ohm, so that the combination has a resistance of (i) 9 ohm, (ii) 4 ohm.',
      3,
      `<p><strong>Circuit Connections:</strong></p>
<ol>
  <li><strong>(i) To get $9\\ \\Omega$:</strong>
    Connect two $6\\ \\Omega$ resistors in <strong>parallel</strong>, and connect this parallel pair in <strong>series with the third $6\\ \\Omega$ resistor</strong>:
    $$R_p = \\frac{6 \\times 6}{6 + 6} = 3\\ \\Omega$$
    $$R_{\\text{total}} = 6\\ \\Omega + R_p = 6 + 3 = \\mathbf{9\\ \\Omega}$$
  </li>
  <li><strong>(ii) To get $4\\ \\Omega$:</strong>
    Connect two $6\\ \\Omega$ resistors in <strong>series</strong> (giving $6 + 6 = 12\\ \\Omega$), and connect this series pair in <strong>parallel with the third $6\\ \\Omega$ resistor</strong>:
    $$R_s = 6 + 6 = 12\\ \\Omega$$
    $$R_{\\text{total}} = \\frac{12 \\times 6}{12 + 6} = \\frac{72}{18} = \\mathbf{4\\ \\Omega}$$
  </li>
</ol>`,
      [
        { key: '(i) Two 6 ohm resistors in parallel (3 ohm) in series with third 6 ohm gives 9 ohm', marks: '1.5 Marks' },
        { key: '(ii) Two 6 ohm resistors in series (12 ohm) in parallel with third 6 ohm gives 4 ohm', marks: '1.5 Marks' }
      ]
    ),
    renderQCard(
      'c10s-ch11-q31',
      'NCERT Exercise • Q11',
      'Several electric bulbs designed to be used on a 220 V electric supply line, are rated 10 W. How many lamps can be connected in parallel with each other across the two wires of 220 V line if the maximum allowable current is 5 A?',
      2,
      `<p><strong>Calculation:</strong></p>
<ol>
  <li>Total maximum power allowable on the supply line:
    $$P_{\\text{total}} = V \\times I_{\\text{max}} = 220\\text{ V} \\times 5\\text{ A} = 1100\\text{ W}$$
  </li>
  <li>Power of each individual bulb: $P_{\\text{bulb}} = 10\\text{ W}$.</li>
  <li>Maximum number of bulbs that can be connected in parallel:
    $$n = \\frac{P_{\\text{total}}}{P_{\\text{bulb}}} = \\frac{1100\\text{ W}}{10\\text{ W}} = \\mathbf{110\\text{ bulbs}}$$
  </li>
</ol>`,
      [
        { key: 'Total allowable power: P = V * I = 220 * 5 = 1100 W', marks: '1 Mark' },
        { key: 'Number of bulbs: n = 1100 / 10 = 110 bulbs in parallel', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch11-q32',
      'NCERT Exercise • Q12',
      'A hot plate of an electric oven connected to a 220 V line has two resistance coils A and B, each of 24 ohm resistance, which may be used separately, in series, or in parallel. What are the currents in the three cases?',
      3,
      `<p><strong>Three Cases of Operation:</strong></p>
<ol>
  <li><strong>Case 1: Used Separately (single $24\\ \\Omega$ coil):</strong>
    $$I_1 = \\frac{V}{R} = \\frac{220\\text{ V}}{24\\ \\Omega} = \\mathbf{9.17\\text{ A}}$$
  </li>
  <li><strong>Case 2: Used in Series ($R_s = 24 + 24 = 48\\ \\Omega$):</strong>
    $$I_2 = \\frac{V}{R_s} = \\frac{220\\text{ V}}{48\\ \\Omega} = \\mathbf{4.58\\text{ A}}$$
  </li>
  <li><strong>Case 3: Used in Parallel ($R_p = \\frac{24}{2} = 12\\ \\Omega$):</strong>
    $$I_3 = \\frac{V}{R_p} = \\frac{220\\text{ V}}{12\\ \\Omega} = \\mathbf{18.33\\text{ A}}$$
  </li>
</ol>`,
      [
        { key: 'Separately: I = 220 / 24 = 9.17 A', marks: '1 Mark' },
        { key: 'In Series: I = 220 / 48 = 4.58 A', marks: '1 Mark' },
        { key: 'In Parallel: I = 220 / 12 = 18.33 A', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch11-q33',
      'NCERT Exercise • Q13',
      'Compare the power used in the 2 ohm resistor in each of the following circuits: (i) a 6 V battery in series with 1 ohm and 2 ohm resistors, and (ii) a 4 V battery in parallel with 12 ohm and 2 ohm resistors.',
      3,
      `<p><strong>Comparison of Power in $2\\ \\Omega$ Resistor:</strong></p>
<ol>
  <li><strong>Circuit (i) [Series Circuit]:</strong>
    <ul>
      <li>$R_s = 1 + 2 = 3\\ \\Omega$, $V = 6\\text{ V}$.</li>
      <li>Circuit current: $I = \\frac{6\\text{ V}}{3\\ \\Omega} = 2\\text{ A}$.</li>
      <li>Power consumed in $2\\ \\Omega$ resistor:
        $$P_1 = I^2 R = (2\\text{ A})^2 \\times 2\\ \\Omega = 4 \\times 2 = \\mathbf{8\\text{ W}}$$
      </li>
    </ul>
  </li>
  <li><strong>Circuit (ii) [Parallel Circuit]:</strong>
    <ul>
      <li>In parallel, the full voltage of $4\\text{ V}$ appears directly across the $2\\ \\Omega$ resistor.</li>
      <li>Power consumed in $2\\ \\Omega$ resistor:
        $$P_2 = \\frac{V^2}{R} = \\frac{4^2}{2} = \\frac{16}{2} = \\mathbf{8\\text{ W}}$$
      </li>
    </ul>
  </li>
  <li><strong>Comparison:</strong> The power consumed by the $2\\ \\Omega$ resistor in both circuits is <strong>identical ($8\\text{ W}$ in each case)</strong>, so the ratio is $1 : 1$.</li>
</ol>`,
      [
        { key: 'Circuit 1: I = 2 A, P1 = I^2 * R = 8 W', marks: '1.5 Marks' },
        { key: 'Circuit 2: V = 4 V across 2 ohm, P2 = V^2 / R = 8 W (Equal power)', marks: '1.5 Marks' }
      ]
    ),
    renderQCard(
      'c10s-ch11-q34',
      'NCERT Exercise • Q14',
      'Two lamps, one rated 100 W at 220 V, and the other 60 W at 220 V, are connected in parallel to electric mains supply. What current is drawn from the line if the supply voltage is 220 V?',
      2,
      `<p><strong>Calculation:</strong></p>
<ol>
  <li>Current drawn by $100\\text{ W}$ lamp:
    $$I_1 = \\frac{P_1}{V} = \\frac{100\\text{ W}}{220\\text{ V}} = \\frac{5}{11}\\text{ A} \\approx 0.455\\text{ A}$$
  </li>
  <li>Current drawn by $60\\text{ W}$ lamp:
    $$I_2 = \\frac{P_2}{V} = \\frac{60\\text{ W}}{220\\text{ V}} = \\frac{3}{11}\\text{ A} \\approx 0.273\\text{ A}$$
  </li>
  <li>Total current drawn from the line in parallel:
    $$I_{\\text{total}} = I_1 + I_2 = \\frac{5}{11} + \\frac{3}{11} = \\frac{8}{11}\\text{ A} \\approx \\mathbf{0.727\\text{ A}}$$
  </li>
</ol>`,
      [
        { key: 'Current calculations: I1 = 100/220 A and I2 = 60/220 A', marks: '1 Mark' },
        { key: 'Total parallel current: Itotal = 8/11 A = 0.73 A', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch11-q35',
      'NCERT Exercise • Q15',
      'Which uses more energy, a 250 W TV set in 1 hr, or a 1200 W toaster in 10 minutes?',
      2,
      `<p><strong>Energy Comparison ($E = P \\times t$):</strong></p>
<ol>
  <li><strong>TV Set:</strong>
    $$P_{\\text{TV}} = 250\\text{ W}, \\quad t = 1\\text{ hr} = 3600\\text{ s}$$
    $$E_{\\text{TV}} = 250\\text{ W} \\times 3600\\text{ s} = \\mathbf{900,000\\text{ Joules}} = 900\\text{ kJ} \\quad (\\text{or } 0.25\\text{ kWh})$$
  </li>
  <li><strong>Toaster:</strong>
    $$P_{\\text{toaster}} = 1200\\text{ W}, \\quad t = 10\\text{ min} = 10 \\times 60 = 600\\text{ s}$$
    $$E_{\\text{toaster}} = 1200\\text{ W} \\times 600\\text{ s} = \\mathbf{720,000\\text{ Joules}} = 720\\text{ kJ} \\quad (\\text{or } 0.20\\text{ kWh})$$
  </li>
  <li><strong>Conclusion:</strong> The <strong>250 W TV set consumes more energy</strong> ($900\\text{ kJ}$) than the 1200 W toaster ($720\\text{ kJ}$).</li>
</ol>`,
      [
        { key: 'Energy of TV set: E = 250 W * 3600 s = 900,000 J', marks: '1 Mark' },
        { key: 'Energy of toaster: E = 1200 W * 600 s = 720,000 J (TV set uses more energy)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch11-q36',
      'NCERT Exercise • Q16',
      'An electric heater of resistance 8 ohm draws 15 A from the service mains 2 hours. Calculate the rate at which heat is developed in the heater.',
      2,
      `<p><strong>Calculation:</strong></p>
<p>The "rate at which heat is developed" is defined as <strong>Electrical Power ($P$)</strong>:</p>
$$P = \\frac{H}{t} = I^2 R$$
<p>Given: $I = 15\\text{ A}$, $R = 8\\ \\Omega$. (Note: Operating time of 2 hours is redundant when calculating the instantaneous rate/power).</p>
$$P = (15\\text{ A})^2 \\times 8\\ \\Omega = 225 \\times 8 = \\mathbf{1800\\text{ Watts}} = \\mathbf{1800\\text{ J/s}}$$
<p>The rate at which heat is developed is <strong>$1800\\text{ Joules per second}$ ($1800\\text{ W}$)</strong>.</p>`,
      [
        { key: 'Rate of heat generation equals electric power: P = I^2 * R', marks: '1 Mark' },
        { key: 'Calculation: P = 15^2 * 8 = 1800 W (J/s)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch11-q37',
      'NCERT Exercise • Q17',
      'Explain the following: (a) Why is tungsten used almost exclusively for filament of electric lamps? (b) Why are conductors of electric heating devices made of an alloy rather than a pure metal?',
      2,
      `<p><strong>Reasons:</strong></p>
<ol>
  <li><strong>(a) Tungsten for Lamp Filaments:</strong> Tungsten has an exceptionally <strong>high melting point ($3380^\\circ\\text{C}$)</strong> and very high electrical resistivity. It can be heated to high incandescence where it emits bright white light without melting, evaporating, or burning in the presence of inert argon/nitrogen filling gas.</li>
  <li><strong>(b) Alloys for Heating Devices:</strong> Alloys (e.g., Nichrome) have much <strong>higher resistivity</strong> than their constituent pure metals and do not oxidise (burn) at red-hot temperatures ($>800^\\circ\\text{C}$), generating intense Joule heat.</li>
</ol>`,
      [
        { key: 'Tungsten: Extremely high melting point (3380°C) and emits white light without melting', marks: '1 Mark' },
        { key: 'Alloys: Higher resistivity generating high Joule heat and does not oxidise at red-hot temperatures', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch11-q38',
      'NCERT Exercise • Q18',
      'Explain the following: (a) Why is the series arrangement not used for domestic circuits? (b) How does the resistance of a wire vary with its area of cross-section? (c) Why are copper and aluminium wires usually employed for electricity transmission?',
      3,
      `<p><strong>Explanations:</strong></p>
<ol>
  <li><strong>(a) Series Arrangement in Domestic Circuits:</strong> In series, if any one appliance burns out or is switched off, the entire circuit is broken and all other appliances turn off. Furthermore, the voltage divides among appliances ($V = V_1 + V_2 + \\dots$), so each device receives inadequate voltage and cannot operate at its rated power.</li>
  <li><strong>(b) Resistance vs Area of Cross-section:</strong> Resistance of a wire is <strong>inversely proportional</strong> to its cross-sectional area:
    $$R \\propto \\frac{1}{A}$$
    Doubling the cross-sectional area halves the resistance, while halving the area doubles resistance.</li>
  <li><strong>(c) Copper and Aluminium for Transmission:</strong> They possess <strong>extremely low electrical resistivity</strong>, which minimizes $I^2 R$ transmission line power losses over long distances. They are also ductile, lightweight, and cost-effective.</li>
</ol>`,
      [
        { key: 'Series circuit drawbacks: breakage turns off all appliances; voltage divides', marks: '1 Mark' },
        { key: 'Inverse variation of resistance with cross-sectional area (R proportional to 1/A)', marks: '1 Mark' },
        { key: 'Copper/Aluminium have very low resistivity minimizing I^2*R transmission losses', marks: '1 Mark' }
      ]
    )
  ];

  const cbqHtml = `  <div class="cbq-section">
    <div class="cbq-header"><span>🎯 Competency &amp; Case Study Questions (HOTS) — Chapter 11</span><span class="cbq-badge">CBSE Board 2026-27</span></div>
    <div class="cbq-body">
      <div class="cbq-card" style="border-left:4px solid #34d399;">
        <div class="cbq-type" style="color:#059669;">Case Study Question • Commercial Electricity Billing & kWh Units</div>
        <div class="cbq-question">A residential house uses 4 LED bulbs of 20 W each for 8 hours daily, two electric fans of 80 W each for 10 hours daily, and a 1.5 kW electric geyser for 2 hours daily. (i) Calculate the total electrical energy consumed in commercial units (kWh) during a 30-day month. (ii) If the tariff rate is ₹ 6.50 per unit, calculate the monthly electricity bill.</div>
        <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ Show Answer</button>
        <div class="cbq-answer"><p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li><strong>Daily Energy Consumption:</strong>
    <ul>
      <li>Bulbs: $E_1 = 4 \\times 20\\text{ W} \\times 8\\text{ h} = 640\\text{ Wh}$</li>
      <li>Fans: $E_2 = 2 \\times 80\\text{ W} \\times 10\\text{ h} = 1600\\text{ Wh}$</li>
      <li>Geyser: $E_3 = 1500\\text{ W} \\times 2\\text{ h} = 3000\\text{ Wh}$</li>
      <li>Total daily energy = $640 + 1600 + 3000 = 5240\\text{ Wh} = 5.24\\text{ kWh}$</li>
    </ul>
  </li>
  <li><strong>Monthly Energy Consumption (30 days):</strong>
    $$E_{\\text{monthly}} = 5.24\\text{ kWh/day} \\times 30\\text{ days} = \\mathbf{157.2\\text{ kWh (units)}}$$
  </li>
  <li><strong>Total Monthly Bill:</strong>
    $$\\text{Cost} = 157.2 \\times ₹\\ 6.50 = \\mathbf{₹\\ 1021.80}$$
  </li>
</ol></div>
      </div>
    </div>
  </div>`;

  return `<section class="chapter-section" id="ch11">
  <div class="chapter-header">
    <div class="ch-badge">11</div>
    <div class="chapter-header-info">
      <div class="ch-category">Science • Class 10 Board Exam (NCERT Rationalized)</div>
      <h2>Chapter 11: Electricity</h2>
      <p>Electric Current & Potential Difference, Ohm's Law & Factors Affecting Resistance, Series & Parallel Resistors, Joule's Heating & Electrical Power — CBSE Board Marking Scheme 2026-27</p>
    </div>
  </div>
  <div class="ex-div">NCERT In-Text Questions (Pages 187, 189, 198, 203, 206, 209) &amp; Chapter-End Exercises (Questions 1 to 18)</div>

${qCards.join('\n\n')}

${cbqHtml}
  <div class="chapter-nav-btns">
    <button class="ch-nav-btn" onclick="showChapter(10)">← Previous Chapter</button>
    <button class="ch-nav-btn" onclick="window.scrollTo({top:0,behavior:'smooth'})">↑ Back to Top</button>
    <button class="ch-nav-btn next" onclick="showChapter(12)">Next Chapter →</button>
  </div>
</section>
`;
}

// ============================================================================
// CHAPTER 12: MAGNETIC EFFECTS OF ELECTRIC CURRENT (16 In-Text Qs + 18 Exercises = 34 Qs + 1 CBQ)
// ============================================================================
function getChapter12Html() {
  const qCards = [
    // --- In-Text Page 213 ---
    renderQCard(
      'c10s-ch12-q1',
      'In-Text Page 213 • Q1',
      'Why does a compass needle get deflected when brought near a bar magnet?',
      1,
      `<p><strong>Reason:</strong> A compass needle is itself a tiny, pivoted permanent bar magnet with north and south magnetic poles. When brought near another bar magnet, the magnetic field of the bar magnet exerts mechanical magnetic forces (like poles repel, unlike poles attract) on the magnetic poles of the compass needle, producing a couple that turns and deflects the needle.</p>`,
      [
        { key: 'Compass needle is a small pivoted bar magnet experiencing magnetic force/torque', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch12-q2',
      'In-Text Page 213 • Q2',
      'Draw magnetic field lines around a bar magnet. What are their properties?',
      2,
      `<p><strong>Properties of Magnetic Field Lines:</strong></p>
<ol>
  <li><strong>Continuous Closed Loops:</strong> Outside the magnet, field lines emerge from the <strong>North pole</strong> and enter the <strong>South pole</strong>. Inside the magnet, they travel from South pole to North pole, forming continuous unbroken closed loops.</li>
  <li><strong>Crowding Indicates Strength:</strong> The degree of closeness (density) of field lines represents the strength of the magnetic field. They are crowded closest at the poles where the field is strongest.</li>
  <li><strong>Never Intersect:</strong> Two magnetic field lines never cross or intersect each other.</li>
</ol>`,
      [
        { key: 'Field lines emerge from N pole and enter S pole outside forming closed continuous loops', marks: '1 Mark' },
        { key: 'Line crowding indicates magnetic field strength; lines never intersect', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch12-q3',
      'In-Text Page 213 • Q3',
      'Why don\'t two magnetic field lines intersect each other?',
      2,
      `<p><strong>Scientific Reason:</strong></p>
<p>The tangent drawn at any point on a magnetic field line indicates the unique direction of the net magnetic field at that point.</p>
<p>If two field lines were to cross or intersect at a point, it would mean that at the single point of intersection, the magnetic field has <strong>two different directions simultaneously</strong>. If a compass needle were placed at that intersection, it would have to point in two opposite directions at the same instant, which is physically impossible. Therefore, two magnetic field lines can never cross each other.</p>`,
      [
        { key: 'Tangent at a point indicates the unique direction of magnetic field', marks: '1 Mark' },
        { key: 'Intersection implies two directions at the same point, which is physically impossible', marks: '1 Mark' }
      ]
    ),

    // --- In-Text Page 217 ---
    renderQCard(
      'c10s-ch12-q4',
      'In-Text Page 217 • Q1',
      'Consider a circular loop of wire lying in the plane of the table. Let the current pass through the loop clockwise. Apply the right-hand rule to find out the direction of the magnetic field inside and outside the loop.',
      2,
      `<p><strong>Application of Right-Hand Thumb Rule:</strong></p>
<ol>
  <li><strong>Inside the Loop:</strong> Grasping the circular wire with the right hand such that the thumb points in the clockwise direction of current, the fingers curl into the loop perpendicular to the plane of the table. Therefore, the magnetic field lines <strong>point downwards (into the table)</strong> inside the loop.</li>
  <li><strong>Outside the Loop:</strong> As the field lines complete their closed loops, they curl upwards. Hence, the magnetic field lines <strong>point upwards (out of the table)</strong> outside the loop.</li>
</ol>`,
      [
        { key: 'Inside the loop: Magnetic field directed downwards into the table', marks: '1 Mark' },
        { key: 'Outside the loop: Magnetic field directed upwards out of the table', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch12-q5',
      'In-Text Page 217 • Q2',
      'The magnetic field in a given region is uniform. Draw a diagram to represent it.',
      1,
      `<p>A uniform magnetic field is represented by a set of <strong>equidistant, parallel straight lines pointing in the same direction</strong>.</p>
$$\\longrightarrow \\quad \\longrightarrow \\quad \\longrightarrow$$
$$\\longrightarrow \\quad \\longrightarrow \\quad \\longrightarrow$$
<p>(For example, inside a long current-carrying solenoid, the magnetic field lines are parallel and equidistant, indicating uniform field strength).</p>`,
      [
        { key: 'Equidistant, parallel straight lines pointing in the same direction', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch12-q6',
      'In-Text Page 217 • Q3',
      'Choose the correct option: The magnetic field inside a long straight solenoid-carrying current: (a) is zero (b) decreases as we move towards its end (c) increases as we move towards its end (d) is the same at all points.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(d) is the same at all points</strong></p>
<p><strong>Reason:</strong> The magnetic field lines inside a long current-carrying solenoid run parallel to its axis and are uniformly spaced, signifying that the magnetic field is uniform (constant in magnitude and direction) at all internal points.</p>`,
      [
        { key: 'Option (d) is the same at all points with uniform field explanation', marks: '1 Mark' }
      ]
    ),

    // --- In-Text Page 220 ---
    renderQCard(
      'c10s-ch12-q7',
      'In-Text Page 220 • Q1',
      'Which of the following property of a proton can change while it moves freely in a magnetic field? (There may be more than one correct answer.) (a) mass (b) speed (c) velocity (d) momentum.',
      2,
      `<p><strong>Correct Options:</strong> <strong>(c) velocity</strong> and <strong>(d) momentum</strong></p>
<p><strong>Reason:</strong> When a charged proton moves perpendicular to a magnetic field, the magnetic Lorentz force ($F = q v B$) acts perpendicular to its direction of motion. Because the force is perpendicular to velocity, it does zero work on the proton; hence its kinetic energy and <strong>speed remain strictly constant</strong>. However, the force continuously deflects the direction of motion, changing its <strong>velocity vector</strong>. Since momentum is a vector ($\\vec{p} = m \\vec{v}$), the <strong>momentum changes</strong> continuously.</p>`,
      [
        { key: 'Options (c) velocity and (d) momentum', marks: '1 Mark' },
        { key: 'Magnetic force changes direction of motion (velocity and momentum) while speed remains constant', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch12-q8',
      'In-Text Page 220 • Q2',
      'In Activity 12.7, how do we think the displacement of rod AB will be affected if (i) current in rod AB is increased; (ii) a stronger horse-shoe magnet is used; and (iii) length of the rod AB is increased?',
      3,
      `<p><strong>Effect on Conductor Displacement:</strong></p>
<p>The magnetic force acting on a current-carrying conductor of length $l$ carrying current $I$ in a magnetic field $B$ is given by:</p>
$$F = I l B \\sin\\theta$$
<ol>
  <li><strong>(i) If current ($I$) is increased:</strong> The magnetic force increases ($F \\propto I$), so the displacement of rod AB <strong>increases</strong>.</li>
  <li><strong>(ii) If a stronger horse-shoe magnet ($B$) is used:</strong> Magnetic field $B$ increases ($F \\propto B$), so the displacement of rod AB <strong>increases</strong>.</li>
  <li><strong>(iii) If length of the rod ($l$) is increased:</strong> Force increases ($F \\propto l$), so the displacement of rod AB <strong>increases</strong>.</li>
</ol>`,
      [
        { key: '(i) Current increased: Displacement increases (F proportional to I)', marks: '1 Mark' },
        { key: '(ii) Stronger magnet: Displacement increases (F proportional to B)', marks: '1 Mark' },
        { key: '(iii) Length increased: Displacement increases (F proportional to l)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch12-q9',
      'In-Text Page 220 • Q3',
      'A positively-charged particle (alpha-particle) projected towards west is deflected towards north by a magnetic field. The direction of magnetic field is: (a) towards south (b) towards east (c) downward (d) upward.',
      2,
      `<p><strong>Correct Option:</strong> <strong>(d) upward</strong></p>
<p><strong>Application of Fleming\'s Left-Hand Rule:</strong></p>
<ol>
  <li>Direction of motion of positive charge (Current, Middle finger) = <strong>West</strong>.</li>
  <li>Direction of magnetic force/deflection (Thumb) = <strong>North</strong>.</li>
  <li>According to Fleming\'s Left-Hand Rule, when the thumb points North and middle finger points West, the forefinger (Magnetic field) points <strong>vertically upward (out of the page)</strong>.</li>
</ol>`,
      [
        { key: 'Option (d) upward', marks: '1 Mark' },
        { key: 'Applying Fleming\'s Left-Hand Rule: current West, force North -> field points upward', marks: '1 Mark' }
      ]
    ),

    // --- In-Text Page 222 ---
    renderQCard(
      'c10s-ch12-q10',
      'In-Text Page 222 • Q1',
      'State Fleming\'s left-hand rule.',
      2,
      `<p><strong>Fleming\'s Left-Hand Rule:</strong></p>
<p>Stretch the thumb, forefinger, and middle finger of your left hand mutually perpendicular to each other:</p>
<ol>
  <li>If the <strong>Forefinger</strong> represents the direction of the <strong>Magnetic Field</strong>,</li>
  <li>And the <strong>Middle finger</strong> represents the direction of the <strong>Electric Current</strong>,</li>
  <li>Then the <strong>Thumb</strong> points in the direction of the <strong>Motion or Force</strong> acting on the conductor.</li>
</ol>
<p><em>(Mnemonic: Thumb = Force/Motion, Forefinger = Field, Middle finger = Current).</em></p>`,
      [
        { key: 'Mutual perpendicular arrangement of thumb, forefinger, middle finger of left hand', marks: '1 Mark' },
        { key: 'Forefinger = Magnetic Field, Middle finger = Current, Thumb = Force/Motion', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch12-q11',
      'In-Text Page 222 • Q2',
      'What is the principle of an electric motor? What is the role of the split ring in an electric motor?',
      3,
      `<p><strong>1. Principle of an Electric Motor:</strong></p>
<p>An electric motor operates on the principle of the <strong>magnetic force on a current-carrying conductor</strong>. When a rectangular coil carrying electric current is placed in a magnetic field, opposite sides experience equal and opposite magnetic forces according to Fleming\'s left-hand rule, creating a torque that rotates the coil continuously.</p>
<p><strong>2. Role of the Split Ring (Commutator):</strong></p>
<p>The split ring acts as a <strong>commutator</strong>. It reverses the direction of current flowing through the two arms of the rotating coil every half rotation. Reversing current direction ensures that the torque continues to act in the <strong>same rotational direction</strong>, sustaining continuous unidirectional rotation.</p>`,
      [
        { key: 'Principle: Current-carrying coil in magnetic field experiences couple rotating it continuously', marks: '1.5 Marks' },
        { key: 'Split ring commutator reverses current every half-turn ensuring continuous unidirectional rotation', marks: '1.5 Marks' }
      ]
    ),

    // --- In-Text Page 226 ---
    renderQCard(
      'c10s-ch12-q12',
      'In-Text Page 226 • Q1',
      'Name two safety measures commonly used in electric circuits and appliances.',
      2,
      `<p><strong>Two Essential Safety Measures:</strong></p>
<ol>
  <li><strong>Electric Fuse (or MCB):</strong> A safety device consisting of a low-melting-point wire connected in series with the live wire. When current exceeds safe limits (due to overloading or short-circuiting), Joule heating melts the fuse wire, breaking the circuit to protect wiring and appliances from fire.</li>
  <li><strong>Earthing (Earth Wire):</strong> A green/yellow insulated grounding wire connected to the metallic casing of electrical appliances that routes leakage current harmlessly into the earth, preventing lethal electric shocks.</li>
</ol>`,
      [
        { key: 'Electric fuse / MCB breaking circuit during overcurrent', marks: '1 Mark' },
        { key: 'Earthing metallic body of appliances to protect users from electric shock', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch12-q13',
      'In-Text Page 226 • Q2',
      'An electric oven of 2 kW power rating is operated in a domestic electric circuit (220 V) that has a current rating of 5 A. What result do you expect? Explain.',
      2,
      `<p><strong>Calculation and Consequence:</strong></p>
<ol>
  <li><strong>Current Required by Oven:</strong>
    $$P = V \\times I \\implies I = \\frac{P}{V} = \\frac{2000\\text{ W}}{220\\text{ V}} = \\mathbf{9.09\\text{ A}}$$
  </li>
  <li><strong>Consequence:</strong> The electric oven requires a current of $9.09\\text{ A}$, which substantially exceeds the circuit\'s safe current rating of $5\\text{ A}$.</li>
  <li>This causes severe <strong>overloading</strong> of the circuit wires. The 5 A fuse will overheat and blow (melt), cutting off electric supply to prevent wires from catching fire.</li>
</ol>`,
      [
        { key: 'Current drawn by oven: I = 2000 / 220 = 9.09 A', marks: '1 Mark' },
        { key: 'Current exceeds 5 A capacity causing overloading; fuse blows/circuit breaks', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch12-q14',
      'In-Text Page 226 • Q3',
      'What precaution should be taken to avoid the overloading of domestic electric circuits?',
      2,
      `<p><strong>Precautions Against Overloading:</strong></p>
<ol>
  <li><strong>Avoid Connecting Too Many High-Power Appliances Simultaneously:</strong> Do not connect multiple high-power electrical appliances (air conditioner, geyser, heater, iron) to the same power socket or circuit line at the same time.</li>
  <li><strong>Use Fuses with Appropriate Ratings:</strong> Always ensure electric fuses/MCBs of appropriate current ratings ($5\\text{ A}$ for lighting, $15\\text{ A}$ for heating) are connected in series with live wires.</li>
  <li><strong>Inspect Insulation:</strong> Periodically check wires to ensure insulation is intact and avoid short circuits between live and neutral wires.</li>
</ol>`,
      [
        { key: 'Do not operate too many heavy appliances on a single socket simultaneously', marks: '1 Mark' },
        { key: 'Use proper capacity fuses/MCBs and ensure good insulation to prevent short circuits', marks: '1 Mark' }
      ]
    ),

    // --- End-of-Chapter Exercises (Q1 to Q18) ---
    renderQCard(
      'c10s-ch12-q15',
      'NCERT Exercise • Q1',
      'Which of the following correctly describes the magnetic field near a long straight wire? (a) The field consists of straight lines perpendicular to the wire (b) The field consists of straight lines parallel to the wire (c) The field consists of radial lines originating from the wire (d) The field consists of concentric circles centred on the wire.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(d) The field consists of concentric circles centred on the wire</strong></p>
<p><strong>Reason:</strong> By the Right-Hand Thumb Rule, the magnetic field lines surrounding a straight current-carrying conductor are concentric circular loops lying in planes perpendicular to the conductor axis.</p>`,
      [
        { key: 'Option (d) concentric circles centred on the wire', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch12-q16',
      'NCERT Exercise • Q2',
      'The phenomenon of electromagnetic induction is: (a) the process of charging a body (b) the process of generating magnetic field due to a current passing through a coil (c) producing induced current in a coil due to relative motion between a magnet and the coil (d) the process of rotating a coil of an electric motor.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(c) producing induced current in a coil due to relative motion between a magnet and the coil</strong></p>
<p><strong>Reason:</strong> Discovered by Michael Faraday, electromagnetic induction is the generation of an induced electromotive force (and current) across an electrical conductor situated in a changing magnetic flux.</p>`,
      [
        { key: 'Option (c) producing induced current due to relative motion with magnet', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch12-q17',
      'NCERT Exercise • Q3',
      'The device used for producing electric current is called a: (a) generator (b) galvanometer (c) ammeter (d) motor.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(a) generator</strong></p>
<p><strong>Reason:</strong> An electric generator (dynamo) converts mechanical rotational energy into electrical energy based on the principle of electromagnetic induction. (A motor converts electrical energy into mechanical energy; an ammeter measures current).</p>`,
      [
        { key: 'Option (a) generator', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch12-q18',
      'NCERT Exercise • Q4',
      'The essential difference between an AC generator and a DC generator is that: (a) AC generator has an electromagnet while a DC generator has permanent magnet (b) DC generator will generate a higher voltage (c) AC generator will generate a higher voltage (d) AC generator has slip rings while the DC generator has a commutator.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(d) AC generator has slip rings while the DC generator has a commutator</strong></p>
<p><strong>Reason:</strong> An AC generator uses two continuous circular slip rings to deliver periodically reversing alternating current, whereas a DC generator uses a split-ring commutator to produce unidirectional direct current.</p>`,
      [
        { key: 'Option (d) AC generator has slip rings while DC generator has a commutator', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch12-q19',
      'NCERT Exercise • Q5',
      'At the time of short circuit, the current in the circuit: (a) reduces substantially (b) does not change (c) increases heavily (d) vary continuously.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(c) increases heavily</strong></p>
<p><strong>Reason:</strong> During a short circuit, the live wire comes into direct physical contact with the neutral wire, reducing the circuit resistance to almost zero ($R \\approx 0$). By Ohm\'s law ($I = V/R$), the electric current abruptly surges to a massive magnitude.</p>`,
      [
        { key: 'Option (c) increases heavily due to zero circuit resistance', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch12-q20',
      'NCERT Exercise • Q6',
      'State whether the following statements are true or false: (a) An electric motor converts mechanical energy into electrical energy. (b) An electric generator works on the principle of electromagnetic induction. (c) The field at the centre of a long circular coil carrying current will be parallel straight lines. (d) A wire with a green insulation is usually the live wire of an electric supply.',
      2,
      `<p><strong>True / False Statements:</strong></p>
<ol>
  <li><strong>(a) False:</strong> An electric motor converts <em>electrical energy into mechanical energy</em>.</li>
  <li><strong>(b) True:</strong> Electric generators operate on Michael Faraday\'s principle of electromagnetic induction.</li>
  <li><strong>(c) True:</strong> At the center of a circular coil, circular field lines expand and become parallel straight lines, representing a uniform magnetic field.</li>
  <li><strong>(d) False:</strong> In standard colour coding, the <strong>green wire is the Earth wire</strong>. The red (or brown) wire is the live wire.</li>
</ol>`,
      [
        { key: '(a) False (converts electrical to mechanical); (b) True', marks: '1 Mark' },
        { key: '(c) True; (d) False (green is earth wire, red is live)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch12-q21',
      'NCERT Exercise • Q7',
      'List two methods of producing magnetic fields.',
      2,
      `<p><strong>Methods of Producing Magnetic Fields:</strong></p>
<ol>
  <li><strong>Using Permanent Magnets:</strong> Naturally occurring magnetic ores (lodestone) or manufactured permanent bar magnets and horse-shoe magnets made of ferromagnetic alloys (Alnico).</li>
  <li><strong>Using Electric Current:</strong> Passing electric current through a conductor (straight wire, circular loop, or solenoid/electromagnet). Moving electric charges always generate an encircling magnetic field.</li>
</ol>`,
      [
        { key: 'Using permanent magnets (bar magnets/Alnico)', marks: '1 Mark' },
        { key: 'Passing electric current through conductors/solenoids (electromagnets)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch12-q22',
      'NCERT Exercise • Q8',
      'How does a solenoid behave like a magnet? Can you determine the north and south poles of a current–carrying solenoid with the help of a bar magnet? Explain.',
      3,
      `<p><strong>Magnetic Behaviour of a Solenoid:</strong></p>
<ol>
  <li>A solenoid is a long cylindrical helical coil of many insulated copper turns. When an electric current flows through it, magnetic field lines emerge from one end and enter the opposite end, forming an identical magnetic field pattern to that of a <strong>bar magnet</strong>.</li>
  <li><strong>Determining Polarity using a Bar Magnet:</strong>
    <ul>
      <li>Suspend a bar magnet with known North and South poles near one end of the active solenoid.</li>
      <li>If the North pole of the bar magnet is <strong>repelled</strong> by that end of the solenoid, that end is the <strong>North pole</strong> (like poles repel).</li>
      <li>If the North pole is <strong>attracted</strong>, that end is the <strong>South pole</strong> (unlike poles attract).</li>
    </ul>
  </li>
  <li><em>Alternatively:</em> By the Clock Face Rule, an end where current flows anti-clockwise is a North pole; clockwise is a South pole.</li>
</ol>`,
      [
        { key: 'Solenoid magnetic field pattern is identical to that of a bar magnet', marks: '1 Mark' },
        { key: 'End repelling the bar magnet\'s N-pole is the N-pole; end attracting is S-pole', marks: '1 Mark' },
        { key: 'Confirmation with Clock Face Rule (anticlockwise = North, clockwise = South)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch12-q23',
      'NCERT Exercise • Q9',
      'When is the force experienced by a current–carrying conductor placed in a magnetic field largest?',
      2,
      `<p><strong>Condition for Maximum Magnetic Force:</strong></p>
<p>The magnetic force on a conductor of length $l$ carrying current $I$ in a magnetic field $B$ is given by:</p>
$$F = I l B \\sin\\theta$$
<p>Where $\\theta$ is the angle between the direction of current and the magnetic field. The force is maximum when $\\sin\\theta$ has its maximum value of $1$ ($\\theta = 90^\\circ$).</p>
<p>Therefore, the force is largest when the <strong>direction of the current is perpendicular ($90^\\circ$) to the direction of the magnetic field</strong> ($F_{\\text{max}} = I l B$).</p>`,
      [
        { key: 'Formula F = I * l * B * sin(theta)', marks: '1 Mark' },
        { key: 'Force is maximum when conductor is perpendicular (theta = 90°) to magnetic field', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch12-q24',
      'NCERT Exercise • Q10',
      'Imagine that you are sitting in a chamber with your back to one wall. An electron beam, moving horizontally from back wall towards the front wall, is deflected by a strong magnetic field to your right side. What is the direction of magnetic field?',
      2,
      `<p><strong>Application of Fleming\'s Left-Hand Rule:</strong></p>
<ol>
  <li><strong>Direction of Current:</strong> The electron beam travels horizontally from back wall to front wall. Since electrons carry negative charge, the conventional electric current flows in the <strong>opposite direction</strong>: from <strong>front wall to back wall</strong>.</li>
  <li><strong>Direction of Force (Deflection):</strong> The beam is deflected to the <strong>Right</strong>.</li>
  <li><strong>Applying Fleming\'s Left-Hand Rule:</strong> Align your left hand so that the middle finger (current) points backward (towards you) and the thumb (force) points to your right. The forefinger (magnetic field) points <strong>vertically downwards (towards the floor)</strong>.</li>
</ol>`,
      [
        { key: 'Conventional current flows opposite to electrons (front to back wall)', marks: '1 Mark' },
        { key: 'Fleming\'s left-hand rule: Forefinger points vertically downwards (towards floor)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch12-q25',
      'NCERT Exercise • Q11',
      'Draw a labelled diagram of an electric motor. Explain its principle and working. What is the function of a split ring in an electric motor?',
      3,
      `<p><strong>Electric Motor:</strong></p>
<ol>
  <li><strong>Principle:</strong> Based on the magnetic effect of electric current; a current-carrying loop placed in a magnetic field experiences a mechanical couple (torque) that rotates it continuously.</li>
  <li><strong>Working:</strong> When current flows through arm AB of the rectangular coil ABCD, Fleming\'s left-hand rule dictates that arm AB experiences a downward force and arm CD experiences an upward force. This creates an anticlockwise torque.</li>
  <li><strong>Role of Split Ring (Commutator):</strong> After every half rotation, the split rings reverse contact with the carbon brushes, reversing current flow through the coil. This ensures that the torque remains in the same direction, sustaining continuous rotation.</li>
</ol>`,
      [
        { key: 'Principle: Current-carrying loop in magnetic field experiences rotational torque', marks: '1 Mark' },
        { key: 'Working with Fleming\'s left-hand rule creating equal and opposite forces on arms AB and CD', marks: '1 Mark' },
        { key: 'Split ring reverses current every half rotation maintaining unidirectional rotation', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch12-q26',
      'NCERT Exercise • Q12',
      'Name some devices in which electric motors are used.',
      1,
      `<p>Electric motors are widely used in: <strong>Electric fans, refrigerators, washing machines, water pumps, mixer-grinders, hair dryers, computer hard drives, and electric cars</strong>.</p>`,
      [
        { key: 'Electric fans, refrigerators, washing machines, water pumps, mixers', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch12-q27',
      'NCERT Exercise • Q13',
      'A coil of insulated copper wire is connected to a galvanometer. What will happen if a bar magnet is (i) pushed into the coil, (ii) withdrawn from inside the coil, (iii) held stationary inside the coil?',
      3,
      `<p><strong>Observations based on Faraday\'s Law of Electromagnetic Induction:</strong></p>
<ol>
  <li><strong>(i) Magnet pushed into the coil:</strong> The magnetic flux linked with the coil increases rapidly. An induced current is generated, causing the galvanometer needle to undergo a <strong>momentary deflection in one direction</strong>.</li>
  <li><strong>(ii) Magnet withdrawn from inside the coil:</strong> The magnetic flux decreases. An induced current is produced in the opposite direction, causing the galvanometer needle to show a <strong>momentary deflection in the opposite direction</strong>.</li>
  <li><strong>(iii) Magnet held stationary inside the coil:</strong> Since there is no relative motion, there is zero change in magnetic flux over time ($\\frac{d\\Phi}{dt} = 0$). No current is induced; the galvanometer needle shows <strong>zero deflection</strong>.</li>
</ol>`,
      [
        { key: '(i) Momentary deflection of galvanometer in one direction', marks: '1 Mark' },
        { key: '(ii) Momentary deflection in the opposite direction', marks: '1 Mark' },
        { key: '(iii) Zero deflection (no induced current when stationary)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch12-q28',
      'NCERT Exercise • Q14',
      'Two circular coils A and B are placed close to each other. If the current in the coil A is changed, will some current be induced in the coil B? Give reason.',
      2,
      `<p><strong>Explanation (Mutual Induction):</strong></p>
<p><strong>Yes</strong>, an electric current will be induced in coil B.</p>
<p><strong>Reason:</strong> When the electric current in coil A is altered (by switching on, off, or adjusting a rheostat), the strength of the magnetic field generated around coil A changes. Because coil B is placed close to coil A, the magnetic field lines linking coil B also change. This changing magnetic flux induces an electromotive force (EMF) and an <strong>induced electric current</strong> in coil B according to Faraday\'s law of electromagnetic induction.</p>`,
      [
        { key: 'Yes, current is induced in coil B', marks: '1 Mark' },
        { key: 'Changing current in A changes magnetic flux linking B, inducing current via mutual induction', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch12-q29',
      'NCERT Exercise • Q15',
      'State the rule to determine the direction of a (i) magnetic field produced around a straight conductor-carrying current, (ii) force experienced by a current-carrying straight conductor placed in a magnetic field which is perpendicular to it, and (iii) electric current induced in a coil due to its rotation in a magnetic field.',
      3,
      `<p><strong>Three Fundamental Rules:</strong></p>
<ol>
  <li><strong>(i) Right-Hand Thumb Rule (Maxwell\'s Corkscrew Rule):</strong> Imagine holding the straight current-carrying wire in your right hand with the stretched thumb pointing in the direction of electric current; then the fingers curling around the wire indicate the circular direction of the magnetic field lines.</li>
  <li><strong>(ii) Fleming\'s Left-Hand Rule:</strong> Stretch the thumb, forefinger, and middle finger of the left hand mutually perpendicular. Forefinger = Field, Middle finger = Current, Thumb = Force/Motion acting on the conductor.</li>
  <li><strong>(iii) Fleming\'s Right-Hand Rule:</strong> Stretch the thumb, forefinger, and middle finger of the right hand mutually perpendicular. Forefinger = Magnetic Field, Thumb = Motion of conductor, Middle finger = Direction of <strong>Induced Current</strong>.</li>
</ol>`,
      [
        { key: '(i) Right-Hand Thumb Rule for magnetic field lines around straight wire', marks: '1 Mark' },
        { key: '(ii) Fleming\'s Left-Hand Rule for magnetic force on current-carrying conductor', marks: '1 Mark' },
        { key: '(iii) Fleming\'s Right-Hand Rule for induced current direction in generator', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch12-q30',
      'NCERT Exercise • Q16',
      'Explain the underlying principle and working of an electric generator by drawing a labelled diagram. What is the function of brushes?',
      3,
      `<p><strong>Electric Generator:</strong></p>
<ol>
  <li><strong>Principle:</strong> Works on the principle of <strong>electromagnetic induction</strong>. When a closed armature coil is mechanically rotated in a magnetic field, the magnetic flux linking the coil continuously changes, inducing an alternating electric current.</li>
  <li><strong>Working:</strong> As coil ABCD rotates in the magnetic field, arm AB moves upwards and arm CD moves downwards. According to Fleming\'s right-hand rule, induced current flows in the direction $A \\rightarrow B \\rightarrow C \\rightarrow D$. After half a rotation, the arms swap positions, reversing the direction of induced current, producing an alternating current (AC).</li>
  <li><strong>Function of Brushes:</strong> Flexible carbon brushes maintain constant sliding electrical contact with the rotating slip rings to draw out the induced current into the external load circuit without twisting the wires.</li>
</ol>`,
      [
        { key: 'Principle: Electromagnetic induction generating induced EMF from changing flux', marks: '1 Mark' },
        { key: 'Working with Fleming\'s right-hand rule generating alternating current', marks: '1 Mark' },
        { key: 'Carbon brushes maintain sliding electrical contact to export current to external load', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch12-q31',
      'NCERT Exercise • Q17',
      'When does an electric short circuit occur?',
      2,
      `<p><strong>Causes of Short Circuit:</strong></p>
<p>An electric short circuit occurs when the <strong>live wire and the neutral wire come into direct physical contact</strong> with each other without any intervening resistance or electrical load.</p>
<p>This typically happens due to:</p>
<ol>
  <li>Damage or wear-and-tear of the protective plastic insulation coating on wires.</li>
  <li>A fault or internal loose connection inside an electrical appliance.</li>
</ol>
<p>When live and neutral wires touch directly, circuit resistance drops to near zero, causing a massive surge of current that produces intense sparking, heating, and fire hazards.</p>`,
      [
        { key: 'Direct contact between live and neutral wires without electrical load', marks: '1 Mark' },
        { key: 'Caused by faulty insulation or appliance defect; drops resistance to zero causing huge current surge', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch12-q32',
      'NCERT Exercise • Q18',
      'What is the function of an earth wire? Why is it necessary to earth metallic appliances?',
      2,
      `<p><strong>Function and Necessity of Earth Wire:</strong></p>
<ol>
  <li><strong>Safety Function:</strong> The earth wire (covered with green insulation) is physically connected to the metallic casing of high-power electrical appliances (iron, toaster, refrigerator) and grounded into the earth via a buried metal plate.</li>
  <li><strong>Preventing Electric Shocks:</strong> If live wire insulation becomes worn and touches the metal casing of the appliance, the metal body is energized to $220\\text{ V}$. Because the earth wire offers an <strong>almost zero-resistance path</strong> to ground, the leakage current flows directly into the earth rather than through the human body.</li>
  <li>The surge in current instantly blows the circuit fuse or trips the MCB, safeguarding the user from fatal electric shocks.</li>
</ol>`,
      [
        { key: 'Connects metallic appliance casing to earth providing a low-resistance path', marks: '1 Mark' },
        { key: 'Safely routes leakage current to ground and trips fuse, preventing fatal electric shocks', marks: '1 Mark' }
      ]
    ),

    // --- Additional Board Benchmark Questions to complete 29 physical benchmark ---
    renderQCard(
      'c10s-ch12-q33',
      'Board Benchmark • Q33',
      'What is an electromagnet? How does it differ from a permanent magnet?',
      2,
      `<p><strong>Comparison:</strong></p>
<ol>
  <li><strong>Electromagnet:</strong> A temporary magnet consisting of a coil of insulated wire wound around a soft iron core that exhibits strong magnetism only while an electric current passes through it.
    <ul>
      <li>Its polarity and field strength can be easily controlled by changing the current.</li>
      <li>It can be easily demagnetised by switching off the current.</li>
    </ul>
  </li>
  <li><strong>Permanent Magnet:</strong> Made of steel or alloys like Alnico that retain their magnetism permanently without an external current source. Its strength and polarity cannot be easily changed.</li>
</ol>`,
      [
        { key: 'Electromagnet: temporary magnet active only during current flow with adjustable strength', marks: '1 Mark' },
        { key: 'Permanent magnet: retains permanent magnetic field regardless of external current', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch12-q34',
      'Board Benchmark • Q34',
      'Explain the difference between Direct Current (DC) and Alternating Current (AC). Why is AC preferred for long distance power transmission?',
      2,
      `<p><strong>DC vs AC:</strong></p>
<ol>
  <li><strong>Direct Current (DC):</strong> Electric current that flows strictly in one constant direction over time (e.g., from dry cells and batteries). Frequency is $0\\text{ Hz}$.</li>
  <li><strong>Alternating Current (AC):</strong> Electric current that periodically reverses its direction of flow at regular intervals of time. In India, AC reverses direction every $1/100\\text{ second}$, having a frequency of $50\\text{ Hz}$.</li>
  <li><strong>Why AC is Preferred for Transmission:</strong> AC voltage can be stepped up to very high voltages ($132\\text{ kV}, 400\\text{ kV}$) using step-up transformers for long-distance transmission, which drastically reduces current ($I$) and minimizes Joule heat losses ($I^2 R$) over hundreds of kilometres. It is then safely stepped down to $220\\text{ V}$ for domestic consumption.</li>
</ol>`,
      [
        { key: 'DC flows in one direction (0 Hz); AC periodically reverses direction (50 Hz in India)', marks: '1 Mark' },
        { key: 'AC can be stepped up to high voltage using transformers, reducing transmission heat loss', marks: '1 Mark' }
      ]
    )
  ];

  const cbqHtml = `  <div class="cbq-section">
    <div class="cbq-header"><span>🎯 Competency &amp; Case Study Questions (HOTS) — Chapter 12</span><span class="cbq-badge">CBSE Board 2026-27</span></div>
    <div class="cbq-body">
      <div class="cbq-card" style="border-left:4px solid #34d399;">
        <div class="cbq-type" style="color:#059669;">Case Study Question • Domestic Wiring Architecture</div>
        <div class="cbq-question">In a standard domestic electric circuit, three distinct wires enter a household from the municipal poles: Live wire, Neutral wire, and Earth wire. (i) What is the potential difference between the live wire and the neutral wire in Indian households? (ii) In which wire is the main electric fuse and switch always connected and why? (iii) What color insulation is standardly used for live, neutral, and earth wires?</div>
        <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ Show Answer</button>
        <div class="cbq-answer"><p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li><strong>(i) Potential Difference:</strong> The potential difference between the live wire ($220\\text{ V}$) and the neutral wire ($0\\text{ V}$) is <strong>$220\\text{ Volts}$</strong> at an AC frequency of $50\\text{ Hz}$.</li>
  <li><strong>(ii) Connection of Switch and Fuse:</strong> The switch and fuse are <strong>always connected in the Live wire</strong>. When the switch is turned off or the fuse blows, the appliance is completely isolated from the high voltage ($220\\text{ V}$) supply. If connected in the neutral wire, the appliance would remain live even when turned off, posing a lethal electrocution risk to anyone touching it.</li>
  <li><strong>(iii) Color Insulation Standards:</strong>
    <ul>
      <li><strong>Live wire:</strong> Red (or Brown)</li>
      <li><strong>Neutral wire:</strong> Black (or Light Blue)</li>
      <li><strong>Earth wire:</strong> Green (or Green with yellow stripes)</li>
    </ul>
  </li>
</ol></div>
      </div>
    </div>
  </div>`;

  return `<section class="chapter-section" id="ch12">
  <div class="chapter-header">
    <div class="ch-badge">12</div>
    <div class="chapter-header-info">
      <div class="ch-category">Science • Class 10 Board Exam (NCERT Rationalized)</div>
      <h2>Chapter 12: Magnetic Effects of Electric Current</h2>
      <p>Magnetic Field Lines, Right-Hand Thumb Rule, Solenoids, Force on Conductor & Fleming's Left-Hand Rule, Electric Motor, Domestic Circuits & Earthing — CBSE Board Marking Scheme 2026-27</p>
    </div>
  </div>
  <div class="ex-div">NCERT In-Text Questions (Pages 213, 217, 220, 222, 226) &amp; Chapter-End Exercises (Questions 1 to 18)</div>

${qCards.join('\n\n')}

${cbqHtml}
  <div class="chapter-nav-btns">
    <button class="ch-nav-btn" onclick="showChapter(11)">← Previous Chapter</button>
    <button class="ch-nav-btn" onclick="window.scrollTo({top:0,behavior:'smooth'})">↑ Back to Top</button>
    <button class="ch-nav-btn next" onclick="showChapter(13)">Next Chapter →</button>
  </div>
</section>
`;
}

// ============================================================================
// CHAPTER 13: OUR ENVIRONMENT (4 In-Text Qs + 9 Exercises + 2 Board Benchmark = 15 Qs + 1 CBQ)
// ============================================================================
function getChapter13Html() {
  const qCards = [
    // --- In-Text Page 242 ---
    renderQCard(
      'c10s-ch13-q1',
      'In-Text Page 242 • Q1',
      'What are trophic levels? Give an example of a food chain and state the different trophic levels in it.',
      2,
      `<p><strong>Definition:</strong></p>
<p>Each step, stage, or feeding level in a food chain where transfer of energy and organic matter takes place from one group of organisms to another is called a <strong>trophic level</strong>.</p>
<p><strong>Example of a Terrestrial Grassland Food Chain:</strong></p>
<ol>
  <li><strong>First Trophic Level ($T_1$):</strong> <strong>Producers</strong> (Green Grass) &rarr; captures solar energy via photosynthesis.</li>
  <li><strong>Second Trophic Level ($T_2$):</strong> <strong>Primary Consumers / Herbivores</strong> (Grasshopper) &rarr; feeds on grass.</li>
  <li><strong>Third Trophic Level ($T_3$):</strong> <strong>Secondary Consumers / Primary Carnivores</strong> (Frog) &rarr; feeds on grasshopper.</li>
  <li><strong>Fourth Trophic Level ($T_4$):</strong> <strong>Tertiary Consumers / Top Carnivores</strong> (Snake / Hawk) &rarr; feeds on frog.</li>
</ol>`,
      [
        { key: 'Definition of trophic levels as sequential steps of energy transfer in a food chain', marks: '1 Mark' },
        { key: 'Food chain example with 4 trophic levels (Grass -> Grasshopper -> Frog -> Snake)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch13-q2',
      'In-Text Page 242 • Q2',
      'What is the role of decomposers in the ecosystem?',
      2,
      `<p><strong>Crucial Roles of Decomposers (Bacteria and Fungi):</strong></p>
<ol>
  <li><strong>Nutrient Recycling (Biogeochemical Cycling):</strong> Decomposers secrete extracellular digestive enzymes that break down complex organic remains of dead plants and animal wastes into simple inorganic substances (carbon, nitrogen, phosphorus). These nutrients are returned to the soil, water, and air, where they are reabsorbed by green plants.</li>
  <li><strong>Natural Scavenging and Cleansing:</strong> They decompose organic carcasses and agricultural residues, preventing environmental fouling and the piling up of dead matter on Earth.</li>
  <li><strong>Maintaining Ecological Equilibrium:</strong> Without decomposers, all essential mineral nutrients would remain locked inside dead biomass, leading to exhaustion of soil fertility and collapse of the ecosystem.</li>
</ol>`,
      [
        { key: 'Mineral recycling: breaking down dead biomass into simple inorganic soil nutrients', marks: '1 Mark' },
        { key: 'Natural scavengers preventing dead organic matter accumulation and replenishing soil fertility', marks: '1 Mark' }
      ]
    ),

    // --- In-Text Page 245 ---
    renderQCard(
      'c10s-ch13-q3',
      'In-Text Page 245 • Q1',
      'What is ozone and how does it affect any ecosystem?',
      2,
      `<p><strong>Ozone ($\\text{O}_3$):</strong></p>
<ol>
  <li><strong>Structure:</strong> Ozone is an allotrope of oxygen consisting of three oxygen atoms bonded together ($\\text{O}_3$). While it is a deadly poison at ground level, high up in the stratosphere it forms a protective <strong>ozone layer</strong>.</li>
  <li><strong>Protective Ecological Role:</strong> The stratospheric ozone layer acts as a celestial shield, absorbing more than $99\\%$ of harmful <strong>ultraviolet (UV-B) radiation</strong> emitted by the Sun.</li>
  <li><strong>Consequences of UV Penetration:</strong> If the ozone layer is depleted, excessive UV radiation reaching the Earth\'s surface causes skin cancer, cataract blindness, immune suppression in humans, and damages photosynthetic phytoplankton, crippling marine aquatic food chains.</li>
</ol>`,
      [
        { key: 'Ozone is O3 forming a stratospheric layer shielding Earth from harmful solar UV radiation', marks: '1 Mark' },
        { key: 'Depletion causes skin cancer, cataracts, immune damage, and destroys phytoplankton food chains', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch13-q4',
      'In-Text Page 245 • Q2',
      'How can you help in reducing the problem of waste disposal? Give any two methods.',
      2,
      `<p><strong>Methods to Reduce Waste Disposal Problems:</strong></p>
<ol>
  <li><strong>Segregation and Composting of Biodegradable Waste:</strong> Separate domestic garbage into biodegradable (vegetable peels, leftover food, dry leaves) and non-biodegradable waste at the source. Biodegradable waste can be converted into rich organic compost or biogas in local pits, reducing landfill pressure.</li>
  <li><strong>Adopting the 3R Principles (Reduce, Reuse, Recycle):</strong>
    <ul>
      <li>Recycle non-biodegradable materials such as plastic bottles, glass, and metal scrap.</li>
      <li>Replace single-use polythene bags with reusable cloth or jute bags.</li>
    </ul>
  </li>
</ol>`,
      [
        { key: 'Waste segregation at source and composting biodegradable kitchen wastes into manure', marks: '1 Mark' },
        { key: 'Practicing 3Rs (Reduce, Reuse, Recycle) especially for plastics, glass, and metals', marks: '1 Mark' }
      ]
    ),

    // --- End-of-Chapter Exercises (Q1 to Q9) ---
    renderQCard(
      'c10s-ch13-q5',
      'NCERT Exercise • Q1',
      'Which of the following groups contain only biodegradable items? (a) Grass, flowers and leather (b) Grass, wood and plastic (c) Fruit-peels, cake and lime-juice (d) Cake, wood and grass.',
      1,
      `<p><strong>Correct Options:</strong> <strong>(a), (c), and (d)</strong></p>
<p><strong>Reason:</strong></p>
<ul>
  <li>(a) Grass, flowers, and leather are all natural organic items decomposed by bacteria.</li>
  <li>(c) Fruit-peels, cake, and lime-juice are organic foodstuffs that are readily biodegradable.</li>
  <li>(d) Cake, wood, and grass are also entirely biodegradable.</li>
  <li>Group (b) contains <strong>plastic</strong>, which is synthetic and non-biodegradable.</li>
</ul>`,
      [
        { key: 'Groups (a), (c), and (d) contain only biodegradable items; plastic in (b) is non-biodegradable', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch13-q6',
      'NCERT Exercise • Q2',
      'Which of the following constitute a food-chain? (a) Grass, wheat and mango (b) Grass, goat and human (c) Goat, cow and elephant (d) Grass, fish and goat.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(b) Grass, goat and human</strong></p>
<p><strong>Reason:</strong> A food chain represents the sequential transfer of energy from producer to consumer. Grass (producer) is eaten by a goat (primary consumer/herbivore), which in turn is consumed by a human (secondary consumer/omnivore).</p>`,
      [
        { key: 'Option (b) Grass, goat and human with producer-consumer sequence', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch13-q7',
      'NCERT Exercise • Q3',
      'Which of the following are environment-friendly practices? (a) Carrying cloth-bags to put purchases in while shopping (b) Switching off unnecessary lights and fans (c) Walking to school instead of getting your mother to drop you on her scooter (d) All of the above.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(d) All of the above</strong></p>
<p><strong>Reason:</strong> All three practices conserve fossil fuels, reduce plastic waste, conserve electrical energy, and minimize environmental pollution.</p>`,
      [
        { key: 'Option (d) All of the above', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch13-q8',
      'NCERT Exercise • Q4',
      'What will happen if we kill all the organisms in one trophic level?',
      2,
      `<p><strong>Ecological Consequences:</strong></p>
<p>If all organisms at a specific trophic level are eliminated, it triggers a devastating ecological imbalance throughout the entire food web:</p>
<ol>
  <li><strong>Starvation of Higher Trophic Levels:</strong> The predators in the next higher trophic level will face an immediate food crisis, leading to mass starvation, population collapse, or migration.</li>
  <li><strong>Overpopulation of Lower Trophic Levels:</strong> The prey organisms in the preceding lower trophic level, freed from predatory control, will multiply uncontrollably. For example, if all carnivores (lions) are removed, herbivorous deer will multiply excessively, overgrazing and destroying all grassland vegetation and causing desertification.</li>
</ol>`,
      [
        { key: 'Higher trophic levels starve and decline due to absence of food source', marks: '1 Mark' },
        { key: 'Lower trophic levels multiply uncontrollably causing overgrazing/destruction of producers', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch13-q9',
      'NCERT Exercise • Q5',
      'Will the impact of removing all the organisms in a trophic level be different for different trophic levels? Can the organisms of any trophic level be removed without causing any damage to the ecosystem?',
      2,
      `<p><strong>Analysis:</strong></p>
<ol>
  <li><strong>Impact at Different Levels:</strong> Yes, the impact will differ in nature depending on the level removed:
    <ul>
      <li>Removing <strong>producers ($T_1$)</strong> is catastrophic and immediately collapses the entire ecosystem, as all life directly or indirectly depends on primary photosynthetic energy.</li>
      <li>Removing herbivores ($T_2$) causes producers to overgrow and carnivores to starve.</li>
      <li>Removing decomposers leads to accumulation of dead biomass and arrest of nutrient cycling.</li>
    </ul>
  </li>
  <li><strong>Can any trophic level be removed without damage?</strong> <strong>No</strong>, organisms of no trophic level can be removed without causing significant damage. In an ecosystem, every organism is interlinked in complex food webs; removing any level destabilizes ecological balance.</li>
</ol>`,
      [
        { key: 'Yes, impact varies (removing producers is most fatal to all life)', marks: '1 Mark' },
        { key: 'No trophic level can be removed without causing damage due to interdependent food web links', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch13-q10',
      'NCERT Exercise • Q6',
      'What is biological magnification? Will the levels of this magnification be different at different levels of the ecosystem?',
      2,
      `<p><strong>Biological Magnification (Biomagnification):</strong></p>
<ol>
  <li><strong>Definition:</strong> The progressive increase in the concentration of toxic, non-biodegradable chemical pollutants (such as DDT, mercury, cadmium) in the tissues of living organisms at each successive trophic level of a food chain is called <strong>biological magnification</strong>.</li>
  <li><strong>Variation Across Trophic Levels:</strong> Yes, the levels of magnification are drastically different at different trophic levels. Because non-biodegradable chemicals cannot be metabolized or excreted, they accumulate in body fat. Each predator consumes many prey organisms, concentrating the toxin.</li>
  <li>Consequently, the concentration of the chemical increases exponentially with each higher trophic level, reaching the <strong>maximum concentration in top carnivores / humans</strong>.</li>
</ol>`,
      [
        { key: 'Definition: Progressive accumulation and concentration of non-biodegradable toxins along a food chain', marks: '1 Mark' },
        { key: 'Levels increase at each successive trophic level, reaching maximum concentration in top trophic level (humans)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch13-q11',
      'NCERT Exercise • Q7',
      'What are the problems caused by the non-biodegradable wastes that we generate?',
      2,
      `<p><strong>Problems Caused by Non-biodegradable Wastes:</strong></p>
<ol>
  <li><strong>Soil and Water Pollution:</strong> Synthetic plastics, electronic waste, and toxic chemicals persist in the environment for centuries without decomposing, leaching heavy metals into ground water and contaminating soils.</li>
  <li><strong>Biological Magnification:</strong> Toxic chemicals enter food chains and accumulate in tissues of animals and humans, causing organ failure, neurological damage, and cancer.</li>
  <li><strong>Blockage of Drainage & Stray Animal Death:</strong> Discarded plastic bags choke municipal sewage drains causing floods, and when ingested by stray cattle, cause fatal intestinal blockage.</li>
</ol>`,
      [
        { key: 'Long persistence polluting soil and groundwater; entering food chains causing biomagnification', marks: '1 Mark' },
        { key: 'Choking municipal drains and ingestion by stray cattle causing fatal intestinal blockages', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch13-q12',
      'NCERT Exercise • Q8',
      'If all the waste we generate is biodegradable, will this have no impact on the environment?',
      2,
      `<p><strong>Critical Evaluation:</strong></p>
<p><strong>No, even biodegradable waste will have serious negative impacts if generated in excessive amounts or handled improperly.</strong></p>
<p><strong>Reasons:</strong></p>
<ol>
  <li><strong>Foul Odour and Air Pollution:</strong> Large mounds of decomposing organic waste emit noxious, foul-smelling gases like hydrogen sulphide ($\\text{H}_2\\text{S}$) and methane ($\\text{CH}_4$), which is also a potent greenhouse gas driving global warming.</li>
  <li><strong>Breeding Ground for Pathogens:</strong> Rotting organic matter serves as an ideal breeding ground for flies, mosquitoes, and rodents, spreading epidemic diseases like cholera, typhoid, and dengue.</li>
  <li><strong>Eutrophication of Water Bodies:</strong> If excessive biodegradable matter enters rivers and lakes, decomposer microbes consume all dissolved oxygen (high Biological Oxygen Demand, BOD), causing aquatic hypoxia and mass fish mortality.</li>
</ol>`,
      [
        { key: 'Excessive biodegradable waste still causes foul gases (H2S, methane greenhouse gas)', marks: '1 Mark' },
        { key: 'Breeds disease vectors (flies/mosquitoes) and causes aquatic eutrophication/fish mortality', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch13-q13',
      'NCERT Exercise • Q9',
      'Why is damage to the ozone layer a cause for concern? What steps are being taken to limit this damage?',
      2,
      `<p><strong>Concerns and Mitigation Measures:</strong></p>
<ol>
  <li><strong>Why It Is a Concern:</strong> The ozone layer shields Earth from harmful solar ultraviolet-B (UV-B) radiation. Depletion of this protective layer allows dangerous UV rays to penetrate the atmosphere, leading to:
    <ul>
      <li>High incidence of skin cancers and melanoma in humans.</li>
      <li>Cataracts and damage to human eyes and immune systems.</li>
      <li>Destruction of young marine phytoplankton and reduction in crop yields.</li>
    </ul>
  </li>
  <li><strong>Steps Taken:</strong> In 1987, the United Nations Environment Programme (UNEP) successfully forged an international agreement called the <strong>Montreal Protocol</strong> to freeze and phase out the production of <strong>Chlorofluorocarbons (CFCs)</strong> used in refrigerators, aerosols, and air-conditioners. Today, all manufacturing companies produce CFC-free appliances worldwide.</li>
</ol>`,
      [
        { key: 'Concerns: Increased UV radiation causing skin cancer, cataracts, immune decline, and phytoplankton loss', marks: '1 Mark' },
        { key: 'Remedial steps: Montreal Protocol (UNEP 1987) banning/freezing CFCs and adopting CFC-free alternatives', marks: '1 Mark' }
      ]
    ),

    // --- Extended Board Benchmark Questions to complete 15 questions ---
    renderQCard(
      'c10s-ch13-q14',
      'Board Benchmark • Q14',
      'State the 10 percent law of energy transfer in a food chain. If 20,000 J of solar energy is available to plants, how much energy will be transferred to a snake in the food chain: Plants -> Mice -> Snake -> Peacock?',
      2,
      `<p><strong>10 Percent Law (Raymond Lindeman, 1942):</strong></p>
<p>Only about <strong>$10\\%$ of the energy</strong> entering a particular trophic level is incorporated into its biomass and made available for transfer to the next higher trophic level. The remaining $90\\%$ is lost as metabolic heat, respiration, and excretion.</p>

<p><strong>Energy Calculation:</strong></p>
<ol>
  <li>Plants capture only about $1\\%$ of incident solar energy:
    $$E_{\\text{Plants}} = 1\\% \\text{ of } 20,000\\text{ J} = \\mathbf{200\\text{ J}}$$
  </li>
  <li>Energy transferred to Mice (Herbivore, $T_2$):
    $$E_{\\text{Mice}} = 10\\% \\text{ of } 200\\text{ J} = \\mathbf{20\\text{ J}}$$
  </li>
  <li>Energy transferred to Snake (Secondary Consumer, $T_3$):
    $$E_{\\text{Snake}} = 10\\% \\text{ of } 20\\text{ J} = \\mathbf{2\\text{ Joules}}$$
  </li>
</ol>
<p>Therefore, exactly <strong>2 Joules</strong> of energy is available to the snake.</p>`,
      [
        { key: '10% law definition: only 10% energy moves to next trophic level', marks: '1 Mark' },
        { key: 'Calculation: Plants (200 J) -> Mice (20 J) -> Snake (2 J)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch13-q15',
      'Board Benchmark • Q15',
      'Differentiate between biodegradable and non-biodegradable substances. Give two examples of each.',
      2,
      `<p><strong>Comparison:</strong></p>
<table style="width:100%; border-collapse:collapse; margin:12px 0;">
  <thead>
    <tr style="background:#f1f5f9; text-align:left;">
      <th style="padding:8px; border:1px solid #cbd5e1;">Parameter</th>
      <th style="padding:8px; border:1px solid #cbd5e1;">Biodegradable Substances</th>
      <th style="padding:8px; border:1px solid #cbd5e1;">Non-biodegradable Substances</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Biological Breakdown</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Broken down into simple harmless substances by the action of biological decomposers (bacteria/fungi).</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Cannot be broken down by saprophytic microorganisms and persist indefinitely.</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Environmental Impact</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Do not accumulate or cause chronic ecological toxicity.</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Accumulate in environment, causing soil/water pollution and biomagnification.</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Examples</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Vegetable peels, paper, cattle dung, cotton cloth.</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Plastics, polythene, DDT, glass, aluminium cans.</td>
    </tr>
  </tbody>
</table>`,
      [
        { key: 'Biodegradable: broken down by decomposers (e.g. paper, vegetable peels)', marks: '1 Mark' },
        { key: 'Non-biodegradable: cannot be broken down by microbes (e.g. plastics, DDT)', marks: '1 Mark' }
      ]
    )
  ];

  const cbqHtml = `  <div class="cbq-section">
    <div class="cbq-header"><span>🎯 Competency &amp; Case Study Questions (HOTS) — Chapter 13</span><span class="cbq-badge">CBSE Board 2026-27</span></div>
    <div class="cbq-body">
      <div class="cbq-card" style="border-left:4px solid #34d399;">
        <div class="cbq-type" style="color:#059669;">Case Study Question • Kulhads vs Disposable Plastic Cups</div>
        <div class="cbq-question">At Indian railway stations, trains previously served tea in reusable plastic cups, then shifted briefly to earthen clay cups (kulhads), and now use disposable paper cups. (i) What was the environmental problem caused by mass usage of disposable plastic cups? (ii) Why was mass use of earthen kulhads abandoned? (iii) Why are paper cups considered the best eco-friendly alternative?</div>
        <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ Show Answer</button>
        <div class="cbq-answer"><p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li><strong>(i) Plastic Cups Issue:</strong> Disposable plastic cups are non-biodegradable, choke municipal drainage lines, litter railway tracks, and when incinerated, release highly toxic dioxin fumes.</li>
  <li><strong>(ii) Kulhad Drawback:</strong> Producing billions of earthen kulhads on a nationwide scale required stripping millions of tons of fertile agricultural topsoil. Firing them in kilns also consumed large quantities of wood fuel, causing topsoil depletion and deforestation.</li>
  <li><strong>(iii) Advantage of Paper Cups:</strong> Disposable paper cups are biodegradable, decompose naturally in compost without generating toxic residues, do not deplete topsoil, and can be recycled.</li>
</ol></div>
      </div>
    </div>
  </div>`;

  return `<section class="chapter-section" id="ch13">
  <div class="chapter-header">
    <div class="ch-badge">13</div>
    <div class="chapter-header-info">
      <div class="ch-category">Science • Class 10 Board Exam (NCERT Rationalized)</div>
      <h2>Chapter 13: Our Environment</h2>
      <p>Ecosystem Components, Food Chains & Webs, 10% Energy Flow Rule, Biomagnification, Ozone Layer Depletion & Waste Management — CBSE Board Marking Scheme 2026-27</p>
    </div>
  </div>
  <div class="ex-div">NCERT In-Text Questions (Pages 242, 245) &amp; Chapter-End Exercises (Questions 1 to 9)</div>

${qCards.join('\n\n')}

${cbqHtml}
  <div class="chapter-nav-btns">
    <button class="ch-nav-btn" onclick="showChapter(12)">← Previous Chapter</button>
    <button class="ch-nav-btn" onclick="window.scrollTo({top:0,behavior:'smooth'})">↑ Back to Top</button>
    <div></div>
  </div>
</section>
`;
}

module.exports = {
  getChapter9Html,
  getChapter10Html,
  getChapter11Html,
  getChapter12Html,
  getChapter13Html
};
