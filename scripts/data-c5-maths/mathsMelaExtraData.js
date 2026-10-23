// Comprehensive NCERT Class 5 Maths Mela Extra Questions
// Aligned with NCF-SE 2023, CBSE Rubrics & Tiwari Academy Standards

const mathsMelaExtra = {
  // Chapter 3: Many Squares, Many Shapes
  3: [
    {
      q: "On a 1 cm square grid, draw two different polygons each having an area of exactly 12 sq cm. (a) What is the perimeter of each shape? (b) Can two different shapes have the same area but different perimeters? Explain with calculation.",
      marks: 4,
      ans: `<div>
        <ol>
          <li><strong>Shape A (Rectangle 4 cm × 3 cm):</strong><br>
          $\\text{Area} = 4 \\times 3 = \\mathbf{12\\text{ cm}^2}$.<br>
          $\\text{Perimeter} = 2 \\times (4 + 3) = \\mathbf{14\\text{ cm}}$.</li>
          <li><strong>Shape B (Rectangle 6 cm × 2 cm):</strong><br>
          $\\text{Area} = 6 \\times 2 = \\mathbf{12\\text{ cm}^2}$.<br>
          $\\text{Perimeter} = 2 \\times (6 + 2) = \\mathbf{16\\text{ cm}}$.</li>
          <li><strong>(b) Conclusion:</strong><br>
          <strong>Yes</strong>. Both shapes have an identical area of $12\\text{ cm}^2$, but Shape A has perimeter $14\\text{ cm}$ while Shape B has perimeter $16\\text{ cm}$. As shapes become longer and narrower, their perimeter increases even though area remains constant.</li>
        </ol>
      </div>`,
      rubric: [
        { key: "Area and perimeter of Shape A (12 cm², 14 cm)", marks: "1.5 Marks" },
        { key: "Area and perimeter of Shape B (12 cm², 16 cm)", marks: "1.5 Marks" },
        { key: "Mathematical explanation of differing perimeters", marks: "1 Mark" }
      ]
    }
  ],

  // Chapter 4: Fractions – Parts of Wholes
  4: [
    {
      q: "Find three equivalent fractions for each of the following: (a) 2/5, (b) 3/7, (c) 4/9. Show your multiplication steps.",
      marks: 3,
      ans: `<div>
        <ul>
          <li><strong>(a) 2/5:</strong><br>
          $\\frac{2 \\times 2}{5 \\times 2} = \\mathbf{\\frac{4}{10}}$, $\\frac{2 \\times 3}{5 \\times 3} = \\mathbf{\\frac{6}{15}}$, $\\frac{2 \\times 4}{5 \\times 4} = \\mathbf{\\frac{8}{20}}$.</li>
          <li><strong>(b) 3/7:</strong><br>
          $\\frac{3 \\times 2}{7 \\times 2} = \\mathbf{\\frac{6}{14}}$, $\\frac{3 \\times 3}{7 \\times 3} = \\mathbf{\\frac{9}{21}}$, $\\frac{3 \\times 4}{7 \\times 4} = \\mathbf{\\frac{12}{28}}$.</li>
          <li><strong>(c) 4/9:</strong><br>
          $\\frac{4 \\times 2}{9 \\times 2} = \\mathbf{\\frac{8}{18}}$, $\\frac{4 \\times 3}{9 \\times 3} = \\mathbf{\\frac{12}{27}}$, $\\frac{4 \\times 4}{9 \\times 4} = \\mathbf{\\frac{16}{36}}$.</li>
        </ul>
      </div>`,
      rubric: [
        { key: "Equivalent fractions for 2/5", marks: "1 Mark" },
        { key: "Equivalent fractions for 3/7", marks: "1 Mark" },
        { key: "Equivalent fractions for 4/9", marks: "1 Mark" }
      ]
    }
  ],

  // Chapter 5: Tenths and Hundredths
  5: [
    {
      q: "Write the following fractions as decimals and locate them in order from smallest to largest: 3/10, 45/100, 7/10, 8/100, 95/100.",
      marks: 4,
      ans: `<div>
        <ol>
          <li><strong>Convert to decimals:</strong><br>
          $3/10 = \\mathbf{0.30}$<br>
          $45/100 = \\mathbf{0.45}$<br>
          $7/10 = \\mathbf{0.70}$<br>
          $8/100 = \\mathbf{0.08}$<br>
          $95/100 = \\mathbf{0.95}$</li>
          <li><strong>Ascending order (Smallest to Largest):</strong><br>
          $\\mathbf{0.08 < 0.30 < 0.45 < 0.70 < 0.95}$<br>
          (or $\\frac{8}{100} < \\frac{3}{10} < \\frac{45}{100} < \\frac{7}{10} < \\frac{95}{100}$).</li>
        </ol>
      </div>`,
      rubric: [
        { key: "Accurate decimal conversions of all 5 fractions", marks: "2.5 Marks" },
        { key: "Correct ascending order arrangement", marks: "1.5 Marks" }
      ]
    }
  ],

  // Chapter 6: Multiples and Factors
  6: [
    {
      q: "State whether each statement is True or False with a reason: (a) Every multiple of 6 is also a multiple of 2 and 3. (b) 1 is a prime number. (c) The smallest common factor of any two distinct positive numbers is 1.",
      marks: 3,
      ans: `<div>
        <ul>
          <li><strong>(a) True:</strong> Since $6 = 2 \\times 3$, any number divisible by 6 is divisible by both of its factors (2 and 3).</li>
          <li><strong>(b) False:</strong> 1 has only one factor (itself). A prime number must have exactly two distinct factors (1 and the number itself).</li>
          <li><strong>(c) True:</strong> 1 is a factor of every integer, hence it is always the smallest common factor.</li>
        </ul>
      </div>`,
      rubric: [
        { key: "Part (a) True with reasoning", marks: "1 Mark" },
        { key: "Part (b) False with definition of prime", marks: "1 Mark" },
        { key: "Part (c) True with common factor logic", marks: "1 Mark" }
      ]
    }
  ],

  // Chapter 7: Can You See the Pattern?
  7: [
    {
      q: "Identify the rule of each pattern and find the next two terms: (a) 1, 4, 9, 16, 25, ____, ____; (b) 3, 6, 12, 24, ____, ____; (c) 100, 95, 85, 70, ____, ____.",
      marks: 3,
      ans: `<div>
        <ul>
          <li><strong>(a) 1, 4, 9, 16, 25:</strong> Rule: Square of consecutive natural numbers ($1^2, 2^2, 3^2, 4^2, 5^2$). Next terms: $6^2 = \\mathbf{36}$, $7^2 = \\mathbf{49}$.</li>
          <li><strong>(b) 3, 6, 12, 24:</strong> Rule: Multiply by 2. Next terms: $24 \\times 2 = \\mathbf{48}$, $48 \\times 2 = \\mathbf{96}$.</li>
          <li><strong>(c) 100, 95, 85, 70:</strong> Rule: Subtract consecutive multiples of 5 ($-5, -10, -15$). Next terms: $70 - 20 = \\mathbf{50}$, $50 - 25 = \\mathbf{25}$.</li>
        </ul>
      </div>`,
      rubric: [
        { key: "Part (a): 36, 49 with square rule", marks: "1 Mark" },
        { key: "Part (b): 48, 96 with doubling rule", marks: "1 Mark" },
        { key: "Part (c): 50, 25 with increasing subtraction rule", marks: "1 Mark" }
      ]
    }
  ],

  // Chapter 8: Mapping the World
  8: [
    {
      q: "An architectural drawing has a scale of 1 cm = 3 meters. A classroom on the drawing measures 4 cm in length and 3 cm in width. (a) What are the actual dimensions of the classroom? (b) What is the actual floor area of the classroom?",
      marks: 3,
      ans: `<div>
        <ol>
          <li><strong>(a) Actual Dimensions:</strong><br>
          $\\text{Length} = 4\\text{ cm} \\times 3\\text{ m/cm} = \\mathbf{12\\text{ meters}}$.<br>
          $\\text{Width} = 3\\text{ cm} \\times 3\\text{ m/cm} = \\mathbf{9\\text{ meters}}$.</li>
          <li><strong>(b) Actual Floor Area:</strong><br>
          $\\text{Area} = 12\\text{ m} \\times 9\\text{ m} = \\mathbf{108\\text{ m}^2}$.</li>
        </ol>
      </div>`,
      rubric: [
        { key: "Length = 12 m, Width = 9 m", marks: "1.5 Marks" },
        { key: "Area = 108 m²", marks: "1.5 Marks" }
      ]
    }
  ],

  // Chapter 9: Boxes and Layouts
  9: [
    {
      q: "A cubical open box (without lid) has an edge of 5 cm. (a) How many square faces does an open box have? (b) What is the total surface area of cardboard required to make this box?",
      marks: 3,
      ans: `<div>
        <ol>
          <li><strong>(a) Number of faces:</strong> An open box without a top lid has 1 base + 4 side walls = <strong>5 square faces</strong>.</li>
          <li><strong>(b) Area of 1 face:</strong> $5\\text{ cm} \\times 5\\text{ cm} = 25\\text{ cm}^2$.</li>
          <li><strong>Total surface area:</strong> $5 \\times 25\\text{ cm}^2 = \\mathbf{125\\text{ cm}^2}$.</li>
        </ol>
      </div>`,
      rubric: [
        { key: "Identification of 5 faces", marks: "1 Mark" },
        { key: "Surface area = 5 × 25 = 125 cm²", marks: "2 Marks" }
      ]
    }
  ],

  // Chapter 10: Symmetrical Designs
  10: [
    {
      q: "Explain what happens when each of the following regular geometric shapes is rotated by 1/3 turn (120°) and 1/6 turn (60°): (a) Equilateral Triangle, (b) Regular Hexagon.",
      marks: 4,
      ans: `<div>
        <ol>
          <li><strong>(a) Equilateral Triangle:</strong><br>
          Has 3 equal sides and 3 angles of 60°. Full turn $= 360^\\circ$.<br>
          &bull; <strong>1/3 Turn ($120^\\circ$):</strong> The triangle aligns onto itself and looks <strong>exactly the same</strong>.<br>
          &bull; <strong>1/6 Turn ($60^\\circ$):</strong> The triangle rotates onto its side and does <strong>not look the same</strong>.</li>
          <li><strong>(b) Regular Hexagon:</strong><br>
          Has 6 equal sides and 6-fold rotational symmetry.<br>
          &bull; <strong>1/6 Turn ($60^\\circ$):</strong> Aligns onto itself and looks <strong>identical</strong>.<br>
          &bull; <strong>1/3 Turn ($120^\\circ$):</strong> Multiple of $60^\\circ$, hence also looks <strong>identical</strong>.</li>
        </ol>
      </div>`,
      rubric: [
        { key: "Equilateral triangle behavior at 1/3 and 1/6 turn", marks: "2 Marks" },
        { key: "Regular hexagon behavior at 1/6 and 1/3 turn", marks: "2 Marks" }
      ]
    }
  ],

  // Chapter 11: Grandmother's Quilt
  11: [
    {
      q: "What is tessellation? Can regular pentagons tile a flat surface without gaps or overlaps? Give mathematical reasons based on interior angles.",
      marks: 3,
      ans: `<div>
        <ol>
          <li><strong>Definition:</strong> Tessellation is the tiling of a flat two-dimensional plane using one or more geometric shapes with zero gaps and zero overlaps.</li>
          <li><strong>Regular Pentagons:</strong> <strong>No, regular pentagons cannot tessellate</strong>.<br>
          Each interior angle of a regular pentagon is $108^\\circ$. To tile around a vertex, the sum of angles must be exactly $360^\\circ$.<br>
          $3 \\times 108^\\circ = 324^\\circ$ (leaving a $36^\\circ$ gap).<br>
          $4 \\times 108^\\circ = 432^\\circ$ (overlapping). Since 360 is not divisible by 108, regular pentagons cannot form a tiling pattern.</li>
        </ol>
      </div>`,
      rubric: [
        { key: "Tessellation definition", marks: "1 Mark" },
        { key: "Proof that 360 is not divisible by 108°", marks: "2 Marks" }
      ]
    }
  ],

  // Chapter 12: Racing Seconds
  12: [
    {
      q: "A sprinter runs a 200-meter race in 25 seconds. (a) What is the sprinter's average speed in meters per second (m/s)? (b) Convert this speed to kilometers per hour (km/h).",
      marks: 3,
      ans: `<div>
        <ol>
          <li><strong>(a) Speed in m/s:</strong><br>
          $\\text{Speed} = \\frac{\\text{Distance}}{\\text{Time}} = \\frac{200\\text{ m}}{25\\text{ s}} = \\mathbf{8\\text{ m/s}}$.</li>
          <li><strong>(b) Conversion to km/h:</strong><br>
          Multiply by $\\frac{18}{5}$ (since $1\\text{ m/s} = 3.6\\text{ km/h}$):<br>
          $\\text{Speed} = 8 \\times \\frac{18}{5} = \\frac{144}{5} = \\mathbf{28.8\\text{ km/h}}$.</li>
        </ol>
      </div>`,
      rubric: [
        { key: "Speed = 200 / 25 = 8 m/s", marks: "1.5 Marks" },
        { key: "Conversion 8 × 18/5 = 28.8 km/h", marks: "1.5 Marks" }
      ]
    }
  ],

  // Chapter 13: Animal Jumps
  13: [
    {
      q: "A frog and a rabbit start jumping together from step 0. The frog jumps 3 steps at a time, while the rabbit jumps 7 steps at a time. (a) At what common steps between 0 and 50 will they both land? (b) What is the first step where both will land together?",
      marks: 3,
      ans: `<div>
        <ol>
          <li>Frog lands on multiples of 3: 3, 6, 9, 12, 15, 18, <strong>21</strong>, 24, 27, 30, 33, 36, 39, <strong>42</strong>, 45, 48...</li>
          <li>Rabbit lands on multiples of 7: 7, 14, <strong>21</strong>, 28, 35, <strong>42</strong>, 49...</li>
          <li><strong>(a) Common steps under 50:</strong> <strong>21 and 42</strong>.</li>
          <li><strong>(b) First common step:</strong> $\\text{LCM}(3, 7) = \\mathbf{21}$.</li>
        </ol>
      </div>`,
      rubric: [
        { key: "Listing multiples and finding 21 and 42", marks: "2 Marks" },
        { key: "First common step = 21", marks: "1 Mark" }
      ]
    }
  ],

  // Chapter 14: Maps and Locations
  14: [
    {
      q: "On a city grid map, Point A (Library) is at coordinates (2, 3) and Point B (Hospital) is at coordinates (8, 3). If each grid unit represents 150 meters: (a) What is the grid distance between Library and Hospital? (b) What is the actual distance in meters and in kilometers?",
      marks: 3,
      ans: `<div>
        <ol>
          <li><strong>(a) Grid distance:</strong><br>
          Both points have same y-coordinate (3).<br>
          $\\text{Horizontal distance} = 8 - 2 = \\mathbf{6\\text{ grid units}}$.</li>
          <li><strong>(b) Actual distance:</strong><br>
          $\\text{Distance in meters} = 6 \\times 150\\text{ m} = \\mathbf{900\\text{ meters}}$.<br>
          $\\text{Distance in kilometers} = \\frac{900}{1000} = \\mathbf{0.9\\text{ km}}$.</li>
        </ol>
      </div>`,
      rubric: [
        { key: "Grid units = 8 - 2 = 6 units", marks: "1 Mark" },
        { key: "Actual distance = 900 m = 0.9 km", marks: "2 Marks" }
      ]
    }
  ],

  // Chapter 15: Data Through Pictures
  15: [
    {
      q: "In a village school library, a pictograph represents books where 1 📚 symbol = 25 books. The library has: Storybooks: 📚📚📚📚📚; Science books: 📚📚📚; Mathematics books: 📚📚📚📚. (a) How many storybooks are there? (b) How many more storybooks are there than science books? (c) What is the total number of books?",
      marks: 4,
      ans: `<div>
        <ol>
          <li><strong>Scale:</strong> $1\\text{ symbol} = 25\\text{ books}$.</li>
          <li><strong>(a) Storybooks:</strong> $5 \\times 25 = \\mathbf{125\\text{ books}}$.</li>
          <li>Science books: $3 \\times 25 = 75\\text{ books}$.<br>
          Mathematics books: $4 \\times 25 = 100\\text{ books}$.</li>
          <li><strong>(b) Difference between storybooks and science books:</strong><br>
          $125 - 75 = \\mathbf{50\\text{ books}}$ (or $2 \\text{ symbols} \\times 25 = 50$).</li>
          <li><strong>(c) Total books in library:</strong><br>
          $125 + 75 + 100 = \\mathbf{300\\text{ books}}$ (or $12 \\text{ symbols} \\times 25 = 300$).</li>
        </ol>
      </div>`,
      rubric: [
        { key: "Part (a): 5 × 25 = 125 storybooks", marks: "1.5 Marks" },
        { key: "Part (b): 125 - 75 = 50 books", marks: "1 Mark" },
        { key: "Part (c): Total = 300 books", marks: "1.5 Marks" }
      ]
    }
  ]
};

module.exports = { mathsMelaExtra };
