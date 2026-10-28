const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const mainFile = path.join(rootDir, 'ncert-solutions-class-6-maths.html');
const chaptersDir = path.join(rootDir, 'chapters-c6m');

const mathJaxSnippet = `  <!-- MathJax Configuration & Library for Crisp Formula Rendering -->
  <script>
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
        displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']],
        processEscapes: true
      },
      options: {
        skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
      }
    };
  </script>
  <script type="text/javascript" id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>`;

function safeReplace(str, target, replacement) {
  return str.split(target).join(replacement);
}

function processFile(content, filename) {
  let updated = content;

  // 1. MathJax script injection into <head> (using function replacer to prevent $' gotcha)
  if (!updated.includes('MathJax-script') && updated.includes('</head>')) {
    updated = updated.replace('</head>', () => `${mathJaxSnippet}\n</head>`);
  }

  // 2. Fix c6m-ch10-q9 unclosed $
  const q9Old = '<div class="q-text">Find the values of the following using the rules of integers:<br>(a) $(-13) + (+18)<br>(b) (-10) + (-19)<br>(c) (+25) - (-15)<br>(d) (-32) - (-40)</div>';
  const q9New = '<div class="q-text">Find the values of the following using the rules of integers:<br>(a) $(-13) + (+18)$<br>(b) $(-10) + (-19)$<br>(c) $(+25) - (-15)$<br>(d) $(-32) - (-40)$</div>';
  updated = safeReplace(updated, q9Old, q9New);

  // 3. Fix c6m-ch11-q10 broken \neq across lines
  updated = updated.replace(/Try \$x = 8\$: \$8 \+ 6 = 14\s*\r?\n\s*eq 15\$\.<br>/g,
    () => 'Try $x = 8$: $8 + 6 = 14 \\neq 15$.<br>');
  updated = updated.replace(/Try \$m = 6\$: \$4 \\times 6 = 24\s*\r?\n\s*eq 28\$\.<br>/g,
    () => 'Try $m = 6$: $4 \\times 6 = 24 \\neq 28$.<br>');
  // Also in JSON-LD strings
  updated = safeReplace(updated, '8 + 6 = 14 eq 15$', '8 + 6 = 14 \\neq 15$');
  updated = safeReplace(updated, '4 \\times 6 = 24 eq 28$', '4 \\times 6 = 24 \\neq 28$');
  updated = safeReplace(updated, '4 \\\\times 6 = 24 eq 28$', '4 \\\\times 6 = 24 \\\\neq 28$');

  // 4. Fix vertical tab \x0b (ASCII 11) in \vec{AB}
  updated = updated.replace(/\x0bec\{AB\}/g, () => '\\vec{AB}');
  updated = updated.replace(/\u000bec\{AB\}/g, () => '\\vec{AB}');

  // 5. Fix tabs \t in math expressions
  updated = updated.replace(/\$\t+ext\{cm\}\^2\$/g, () => '$\\text{cm}^2$');
  updated = updated.replace(/\$\t+ext\{m\}\^2\$/g, () => '$\\text{m}^2$');
  updated = updated.replace(/4\s+\t+imes\s+7/g, () => '4 \\times 7');
  updated = updated.replace(/4\s+\t+imes\s+3/g, () => '4 \\times 3');
  updated = updated.replace(/\(x,\s*y\)\s+\t+o\s+\(/g, () => '(x, y) \\to (');
  updated = updated.replace(/A\(3,\s*4\)\s+\t+o\s+A'/g, () => "A(3, 4) \\to A'");
  updated = updated.replace(/B\(5,\s*1\)\s+\t+o\s+B'/g, () => "B(5, 1) \\to B'");
  updated = updated.replace(/C\(2,\s*-3\)\s+\t+o\s+C'/g, () => "C(2, -3) \\to C'");
  updated = updated.replace(/\t+o\s+/g, () => '\\to ');

  // 6. Fix HTML entities &lt; and &gt; inside math mode $ ... $
  updated = updated.replace(/\$([^$\n]+)\$/g, (match, inner) => {
    if (inner.includes('&lt;') || inner.includes('&gt;') || inner.includes('&amp;')) {
      const cleaned = inner
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&');
      return `$${cleaned}$`;
    }
    return match;
  });

  // 7. Fix truncated JSON-LD FAQPage strings in chapters
  const jsonReplacements = [
    // ch12
    ['• (b) 39 L : 65 L and 6 bottles : 10 bottles: $\\\\frac{39}{6"',
     '• (b) 39 L : 65 L and 6 bottles : 10 bottles: $\\\\frac{39}{65} = \\\\frac{3}{5}$. Both pairs form proportions."'],
    // ch3
    ['(d) 490: $400 + 90 = (500 - 10"',
     '(d) 490: $400 + 90 = (500 - 100) + 90 = \\\\mathbf{CDXC}$."'],
    // ch5
    ['= 2 \\\\times 9 \\\\times 5 \\\\times 7 \\\\times 11 "',
     '= 2 \\\\times 9 \\\\times 5 \\\\times 7 \\\\times 11 = \\\\mathbf{6930\\\\text{ cm}}$."'],
    // ch6
    ['Side = $\\\\frac{30}{6} = \\\\mathb"',
     'Side = $\\\\frac{30}{6} = \\\\mathbf{5\\\\text{ cm}}$."'],
    ['Side = $\\\\frac{30}{6} = \\\\mathbf{34\\\\text{ cm}}"',
     'Side = $\\\\frac{30}{6} = \\\\mathbf{5\\\\text{ cm}}$."'],
    ['=\\\\frac{14,400}{60} = \\\\mathbf{240"',
     '=\\\\frac{14,400}{60} = \\\\mathbf{240\\\\text{ tiles}}$."'],
    ['Area = $8"',
     'Area = $8 \\\\times 2 = \\\\mathbf{16\\\\text{ cm}^2}$. Yes."'],
    // ch7
    ['$\\\\frac{40}{60} = \\\\mathbf{\\\\f"',
     '$\\\\frac{40}{60} = \\\\mathbf{\\\\frac{2}{3}}$."'],
    // maths-classic-ch4
    ['• (d) Five line segments: $\\\\overline{DE}, \\\\overline{EO}, \\\\overline{OB}, \\\\overline"',
     '• (d) Five line segments: $\\\\overline{DE}, \\\\overline{EO}, \\\\overline{OB}, \\\\overline{OC}, \\\\overline{OD}$."'],
    // ch1
    ['12 &nbsp;&nbsp; 13 &n","acceptedAnswer"',
     '12 &nbsp;&nbsp; 13 &nbsp;&nbsp; 14","acceptedAnswer"'],
    // Fix &gt; in JSON-LD formulas
    ['\\\\mathbf{0 &gt; -8}', '\\\\mathbf{0 > -8}'],
    ['\\\\mathbf{-5 &gt; -11}', '\\\\mathbf{-5 > -11}'],
    ['\\\\mathbf{-100 &gt; -101}', '\\\\mathbf{-100 > -101}']
  ];

  jsonReplacements.forEach(([from, to]) => {
    updated = safeReplace(updated, from, to);
  });

  // 8. Fix naked & in headings and labels
  const ampList = [
    ['Dual Track: NEP 2020 & Classic CBSE', 'Dual Track: NEP 2020 &amp; Classic CBSE'],
    ['Lines & Angles', 'Lines &amp; Angles'],
    ['Perimeter & Area', 'Perimeter &amp; Area'],
    ['Ratio & Proportion', 'Ratio &amp; Proportion'],
    ['Number Sequences & Rule Formulation', 'Number Sequences &amp; Rule Formulation'],
    ['Points, Rays, Angles & Revolutions', 'Points, Rays, Angles &amp; Revolutions'],
    ['Large Numbers & Magic Squares', 'Large Numbers &amp; Magic Squares'],
    ['Unit Conversion & Division', 'Unit Conversion &amp; Division'],
    ['Estimations & Roman Numerals', 'Estimations &amp; Roman Numerals'],
    ['Fencing & Turf Grassing', 'Fencing &amp; Turf Grassing'],
    ['Tiling & Packaging', 'Tiling &amp; Packaging'],
    ['Fencing & Tiling', 'Fencing &amp; Tiling'],
    ['Trial & Error', 'Trial &amp; Error'],
    ['Cartography & Scale Modeling', 'Cartography &amp; Scale Modeling'],
    ['Rangoli & Tile Tessellations', 'Rangoli &amp; Tile Tessellations'],
    ['Surveying & Civil Engineering', 'Surveying &amp; Civil Engineering'],
    ['Segments & Perpendicular Bisectors', 'Segments &amp; Perpendicular Bisectors'],
    ['arcs & circles', 'arcs &amp; circles'],
    ['Commutative & Associative Properties', 'Commutative &amp; Associative Properties'],
    ['Factors & Multiples', 'Factors &amp; Multiples'],
    ['Prime & Composite Numbers', 'Prime &amp; Composite Numbers'],
    ['Prime & Composite', 'Prime &amp; Composite'],
    ['Rules: 3 & 9', 'Rules: 3 &amp; 9'],
    ['HCF & LCM Core Identity', 'HCF &amp; LCM Core Identity'],
    ['Curves (Open & Closed)', 'Curves (Open &amp; Closed)'],
    ['Polygons & 3D Shapes', 'Polygons &amp; 3D Shapes'],
    ['Revolutions & Directions', 'Revolutions &amp; Directions'],
    ['Angles & Revolutions', 'Angles &amp; Revolutions'],
    ['Cryogenics & Sub-Zero Storage', 'Cryogenics &amp; Sub-Zero Storage'],
    ['Negative Numbers & Need for Integers', 'Negative Numbers &amp; Need for Integers'],
    ['Rules for Addition & Subtraction', 'Rules for Addition &amp; Subtraction'],
    ['Addition & Subtraction of Decimals', 'Addition &amp; Subtraction of Decimals'],
    ['Addition & Subtraction', 'Addition &amp; Subtraction'],
    ['Grocery Billing & Accounting', 'Grocery Billing &amp; Accounting'],
    ['Tenths & Hundredths', 'Tenths &amp; Hundredths'],
    ['Money, Length & Weight Conversions', 'Money, Length &amp; Weight Conversions'],
    ['Recording & Organization of Data', 'Recording &amp; Organization of Data'],
    ['Pictographs & Scale Factors', 'Pictographs &amp; Scale Factors'],
    ['Interpretation & Construction', 'Interpretation &amp; Construction']
  ];

  ampList.forEach(([from, to]) => {
    // Only replace if from exists and not already replaced
    if (updated.includes(from)) {
      updated = safeReplace(updated, from, to);
    }
  });

  // 9. JavaScript hook for MathJax
  if (filename === 'ncert-solutions-class-6-maths.html') {
    if (updated.includes('function showChapter(') && !updated.includes('MathJax.typesetPromise')) {
      const oldShowChapter = "window.scrollTo({ top: 0, behavior: 'smooth' });\r\n    }";
      const oldShowChapterLF = "window.scrollTo({ top: 0, behavior: 'smooth' });\n    }";
      const newShowChapter = "window.scrollTo({ top: 0, behavior: 'smooth' });\n      if (window.MathJax && window.MathJax.typesetPromise) {\n        window.MathJax.typesetPromise();\n      }\n    }";
      if (updated.includes(oldShowChapter)) {
        updated = safeReplace(updated, oldShowChapter, newShowChapter);
      } else if (updated.includes(oldShowChapterLF)) {
        updated = safeReplace(updated, oldShowChapterLF, newShowChapter);
      }

      const oldSwitchTrack = "showChapter(track, 1);\r\n    }";
      const oldSwitchTrackLF = "showChapter(track, 1);\n    }";
      const newSwitchTrack = "showChapter(track, 1);\n      if (window.MathJax && window.MathJax.typesetPromise) {\n        window.MathJax.typesetPromise();\n      }\n    }";
      if (updated.includes(oldSwitchTrack)) {
        updated = safeReplace(updated, oldSwitchTrack, newSwitchTrack);
      } else if (updated.includes(oldSwitchTrackLF)) {
        updated = safeReplace(updated, oldSwitchTrackLF, newSwitchTrack);
      }

      const oldToggleQ = `function toggleQ(id) {
      const card = document.getElementById(id);
      if (card) {
        card.classList.toggle('open');
      }
    }`;
      const newToggleQ = `function toggleQ(id) {
      const card = document.getElementById(id);
      if (card) {
        card.classList.toggle('open');
        if (window.MathJax && window.MathJax.typesetPromise) {
          window.MathJax.typesetPromise([card]);
        }
      }
    }`;
      // Replace accounting for CRLF / LF
      updated = updated.replace(/function toggleQ\(id\)\s*\{[\s\S]*?card\.classList\.toggle\('open'\);\s*\}\s*\}/, () => newToggleQ);
    }
  } else {
    // Standalone chapter toggleQ
    if (updated.includes('function toggleQ(id)') && !updated.includes('MathJax.typesetPromise')) {
      const newToggleQ = `function toggleQ(id) {
      const card = document.getElementById(id);
      if (card) {
        card.classList.toggle('open');
        if (window.MathJax && window.MathJax.typesetPromise) {
          window.MathJax.typesetPromise([card]);
        }
      }
    }`;
      updated = updated.replace(/function toggleQ\(id\)\s*\{[\s\S]*?card\.classList\.toggle\('open'\);\s*\}\s*\}/, () => newToggleQ);
    }
  }

  return updated;
}

// 1. Process main file
console.log('Remediating ncert-solutions-class-6-maths.html...');
const mainContent = fs.readFileSync(mainFile, 'utf8');
const processedMain = processFile(mainContent, 'ncert-solutions-class-6-maths.html');
fs.writeFileSync(mainFile, processedMain, 'utf8');
console.log('ncert-solutions-class-6-maths.html remediated successfully.');

// 2. Process all chapter files
if (fs.existsSync(chaptersDir)) {
  const chapterFiles = fs.readdirSync(chaptersDir).filter(f => f.endsWith('.html'));
  console.log(`Remediating ${chapterFiles.length} chapter files...`);
  chapterFiles.forEach(cf => {
    const cfPath = path.join(chaptersDir, cf);
    const content = fs.readFileSync(cfPath, 'utf8');
    const processed = processFile(content, cf);
    fs.writeFileSync(cfPath, processed, 'utf8');
  });
  console.log('All chapter files remediated successfully.');
}
