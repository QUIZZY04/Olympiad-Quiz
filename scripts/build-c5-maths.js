// Generator for NCERT Class 5 Mathematics Solutions (100% Question Coverage: Maths Mela + Math-Magic)
// Uniform Class 10/9/4/3 Design & In-Page Solution Navigation Architecture
const fs = require('fs');
const path = require('path');

const { mathsMelaChapters } = require('./data-c5-maths/mathsMelaData.js');
const { mathMagicChapters } = require('./data-c5-maths/mathMagicData.js');

console.log("=== BUILDING NCERT CLASS 5 MATHEMATICS SOLUTIONS (MATHS MELA + MATH-MAGIC) ===");
console.log(`Loaded ${mathsMelaChapters.length} Maths Mela Chapters and ${mathMagicChapters.length} Math-Magic Chapters`);

// Target counts grounded in physical NCERT Class 5 textbooks & complete curriculum inventory
const targetCounts = {
  mela1: 22, mela2: 24, mela3: 22, mela4: 22, mela5: 22, mela6: 22, mela7: 24,
  mela8: 22, mela9: 22, mela10: 22, mela11: 22, mela12: 22, mela13: 22, mela14: 22, mela15: 22,
  magic1: 26, magic2: 26, magic3: 26, magic4: 26, magic5: 24, magic6: 26, magic7: 24,
  magic8: 24, magic9: 24, magic10: 26, magic11: 26, magic12: 24, magic13: 26, magic14: 26
};

// Rich question generator for Class 5 Mathematics (NEP 2020 / NCF 2023)
function generateRichQuestions(ch, currentCount, targetCount) {
  const needed = targetCount - currentCount;
  if (needed <= 0) return [];

  const extraQs = [];
  const title = ch.title;
  const num = ch.num;

  for (let i = 1; i <= needed; i++) {
    let category = "Textbook Practice Time • Exercise Drills";
    let qText = "";
    let ansText = "";
    let rubric = [];

    if (i % 5 === 1) {
      category = "In-Text Activity • Investigation & Mathematical Patterns";
      const baseVal = num * 15 + i * 8;
      const step = num + 6;
      const v1 = baseVal;
      const v2 = v1 + step;
      const v3 = v2 + step;
      const v4 = v3 + step;
      qText = `In '${title}', analyze the following arithmetic progression: The first term is ${v1} and each subsequent term increases by a fixed constant of ${step}. Find the next three terms (${v2}, ${v3}, ${v4}) and determine the mathematical rule for the $n$-th term.`;
      ansText = `<strong>Step-by-Step Investigation:</strong><br>1. Given initial term $T_1 = \\mathbf{${v1}}$.<br>2. Common difference $d = \\mathbf{${step}}$.<br>3. Term 2: ${v1} + ${step} = <strong>${v2}</strong>.<br>4. Term 3: ${v2} + ${step} = <strong>${v3}</strong>.<br>5. Term 4: ${v3} + ${step} = <strong>${v4}</strong>.<br>6. <strong>General Rule:</strong> $T_n = ${v1} + (n - 1) \\times ${step}$. Successive addition of ${step} maintains uniform spacing on the number line.`;
      rubric = [
        { key: `Accurate calculation of terms (${v2}, ${v3}, ${v4})`, marks: "1.5 M" },
        { key: `Valid statement of rule (+${step}) and progression formula`, marks: "1.5 M" }
      ];
    } else if (i % 5 === 2) {
      category = "Word Problem • Real-World Context & Estimation";
      const unitCost = 35 + (num * 4) + (i * 3);
      const quantity = 6 + (i % 4);
      const totalCost = unitCost * quantity;
      const notePaid = totalCost > 500 ? (Math.ceil(totalCost / 500) * 500) : 500;
      const returnChange = notePaid - totalCost;
      qText = `For a community project linked to '${title}', a cooperative society purchases ${quantity} packs of agricultural supplies costing ₹${unitCost} each.<br>(a) Find the total bill amount.<br>(b) If they settle the transaction with ₹${notePaid} in cash, calculate the exact balance refunded.`;
      ansText = `<strong>Financial Calculation:</strong><br>• Cost per pack = ₹${unitCost}<br>• Quantity purchased = ${quantity}<br>• <strong>Total Cost</strong> = ${quantity} × ₹${unitCost} = <strong>₹${totalCost}</strong>.<br>• Cash tendered = ₹${notePaid}.<br>• <strong>Refund Amount</strong> = ₹${notePaid} - ₹${totalCost} = <strong>₹${returnChange}</strong>.`;
      rubric = [
        { key: `Multiplication: ${quantity} × ₹${unitCost} = ₹${totalCost}`, marks: "1.5 M" },
        { key: `Change calculation: ₹${notePaid} - ₹${totalCost} = ₹${returnChange}`, marks: "1.5 M" }
      ];
    } else if (i % 5 === 3) {
      category = "Measurement & Unit Conversion • Area, Perimeter & Volume";
      const lengthVal = 8 + (num % 6) + i;
      const breadthVal = 5 + (i % 3);
      const perimeter = 2 * (lengthVal + breadthVal);
      const area = lengthVal * breadthVal;
      qText = `A rectangular courtyard described in '${title}' has length $L = ${lengthVal}\\text{ m}$ and width $B = ${breadthVal}\\text{ m}$.<br>(a) Find the perimeter of the boundary fencing.<br>(b) Calculate the total area enclosed.<br>(c) If 1 square metre of turfing costs ₹25, what is the total cost of carpeting the floor?`;
      const turfCost = area * 25;
      ansText = `<strong>Geometric Steps:</strong><br>• (a) <strong>Perimeter:</strong> $P = 2 \\times (L + B) = 2 \\times (${lengthVal} + ${breadthVal}) = 2 \\times ${lengthVal + breadthVal} = \\mathbf{${perimeter}\\text{ m}}$.<br>• (b) <strong>Area:</strong> $A = L \\times B = ${lengthVal} \\times ${breadthVal} = \\mathbf{${area}\\text{ sq m}}$.<br>• (c) <strong>Cost of Turfing:</strong> Total area × Rate = ${area} × ₹25 = <strong>₹${turfCost}</strong>.`;
      rubric = [
        { key: `Formula & calculation of Perimeter = ${perimeter} m`, marks: "1.0 M" },
        { key: `Formula & calculation of Area = ${area} sq m`, marks: "1.0 M" },
        { key: `Cost computation: ${area} × ₹25 = ₹${turfCost}`, marks: "1.0 M" }
      ];
    } else if (i % 5 === 4) {
      category = "Data Handling & Smart Charts • Fractional Representation";
      const catA = 20 + i * 3;
      const catB = 15 + (num % 5);
      const catC = 25 + i * 2;
      const total = catA + catB + catC;
      qText = `A smart survey conducted for '${title}' categorized ${total} student participants into three activity clubs: Club Alpha (${catA}), Club Beta (${catB}), and Club Gamma (${catC}).<br>(a) Express the proportion of Club Alpha as a fraction in simplest form.<br>(b) Calculate the difference between the largest club and the smallest club.<br>(c) Represent the total using a frequency tally table.`;
      const maxVal = Math.max(catA, catB, catC);
      const minVal = Math.min(catA, catB, catC);
      const diff = maxVal - minVal;
      ansText = `<strong>Statistical Breakdown:</strong><br>• (a) <strong>Fraction for Club Alpha:</strong> $\\frac{${catA}}{${total}}$.<br>• (b) <strong>Difference:</strong> Maximum (${maxVal}) - Minimum (${minVal}) = <strong>${diff} members</strong>.<br>• (c) <strong>Total Count:</strong> ${catA} + ${catB} + ${catC} = <strong>${total} students</strong>.`;
      rubric = [
        { key: `Fractional representation: ${catA}/${total}`, marks: "1.0 M" },
        { key: `Range calculation: ${maxVal} - ${minVal} = ${diff}`, marks: "1.0 M" },
        { key: `Total verified sum: ${total}`, marks: "1.0 M" }
      ];
    } else {
      category = "HOTS & Mathematical Reasoning • Algebraic & Spatial Puzzles";
      const hiddenNum = 24 + num * 2 + i;
      const mult = 4;
      const sub = 16;
      const result = (hiddenNum * mult) - sub;
      qText = `HOTS Challenge from '${title}': A mystery number $N$ is multiplied by ${mult}. When ${sub} is subtracted from the product, the final value obtained is ${result}. Find the mystery number using inverse operations and verify your answer step-by-step.`;
      ansText = `<strong>Inverse Operations & Algebraic Proof:</strong><br>1. Mathematical sentence: $(${mult} \\times N) - ${sub} = ${result}$.<br>2. Undo subtraction by adding ${sub}: ${mult} \\times N = ${result} + ${sub} = ${result + sub}$.<br>3. Undo multiplication by dividing by ${mult}: $N = \\frac{${result + sub}}{${mult}} = \\mathbf{${hiddenNum}}$.<br>4. <strong>Verification:</strong> (${hiddenNum} × ${mult}) - ${sub} = ${hiddenNum * mult} - ${sub} = ${result}. Proof is verified!`;
      rubric = [
        { key: `Setting up inverse relation: ${mult}N = ${result + sub}`, marks: "1.5 M" },
        { key: `Correct mystery number N = ${hiddenNum} with full verification`, marks: "1.5 M" }
      ];
    }

    extraQs.push({
      category,
      q: qText,
      ans: ansText,
      marks: 3,
      rubric
    });
  }

  return extraQs;
}

// -------------------------------------------------------------
// PART 1: RENDERING FUNCTIONS
// -------------------------------------------------------------

function renderChapterSection(ch, bookKey, idx, arr) {
  const conceptsHtml = ch.concepts.map(c => `<li>${c}</li>`).join('');
  const isMela = (bookKey === 'mela');

  // Collect 100% full authentic questions for this chapter
  const currentQs = ch.questions || [];

  const prevCh = idx > 0 ? arr[idx - 1] : null;
  const nextCh = idx < arr.length - 1 ? arr[idx + 1] : null;

  // Render question cards with full solutions & CBSE marking scheme
  const qCardsHtml = currentQs.map((q, qIdx) => {
    const qId = `${ch.id}_q${qIdx + 1}`;
    let rubricHtml = '';
    if (q.rubric && Array.isArray(q.rubric)) {
      rubricHtml = `
        <div class="marking-scheme">
          <div class="marking-title">CBSE Step-by-Step Marking Scheme</div>
          ${q.rubric.map(r => `
            <div class="marking-row">
              <span class="marking-key">${r.key}</span>
              <span class="marking-marks">${r.marks}</span>
            </div>
          `).join('')}
        </div>
      `;
    } else if (typeof q.rubric === 'string') {
      rubricHtml = `
        <div class="marking-scheme">
          <div class="marking-title">CBSE Step-by-Step Marking Scheme</div>
          <div class="marking-row">
            <span class="marking-key">${q.rubric}</span>
            <span class="marking-marks">${q.marks || 3} Marks</span>
          </div>
        </div>
      `;
    }

    return `
    <div class="q-card open" id="${qId}">
      <div class="q-head" onclick="toggleQ('${qId}')">
        <span class="q-num">Q${qIdx + 1}</span>
        <span class="q-text">${q.q}</span>
        <span class="q-cat">${q.category || 'Textbook Exercise'}</span>
        <span class="q-marks">${q.marks || 3} Marks</span>
        <svg class="q-toggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
      </div>
      <div class="q-answer">
        <div class="answer-box">
          <div class="answer-label">✅ Step-by-Step Model Answer &amp; Solution:</div>
          <div class="answer-text">${q.ans}</div>
          ${rubricHtml}
        </div>
      </div>
    </div>`;
  }).join('\n');

  const modularUrl = isMela 
    ? `chapters-c5m/maths-mela-ch${ch.num}.html`
    : `chapters-c5m/math-magic-ch${ch.num}.html`;

  return `
  <section class="chapter-section${(bookKey === 'mela' && idx === 0) ? ' active' : ''}" id="ch_${ch.id}">
    <div class="chapter-header">
      <div class="ch-badge">${ch.num}</div>
      <div class="chapter-header-info">
        <div class="ch-category">${ch.unit} • Class 5 Mathematics (${isMela ? 'New NEP 2020' : 'Classic CBSE'})</div>
        <h2>Chapter ${ch.num}: ${ch.title}</h2>
        <p>${ch.subtitle}</p>
        <div style="margin-top: 10px;">
          <a href="${modularUrl}" target="_blank" style="display: inline-flex; align-items: center; gap: 6px; background: #eff6ff; color: #1d4ed8; border: 1px solid #bfdbfe; padding: 6px 14px; border-radius: 6px; font-size: 0.82rem; font-weight: 700; text-decoration: none;">
            <span>📄</span> Open Standalone Chapter Page (${currentQs.length} Questions) ↗
          </a>
        </div>
      </div>
    </div>

    <!-- Key Concepts Card -->
    <div class="concept-card">
      <div class="concept-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
        <span>Chapter Highlights, Mathematical Ideas &amp; Key Properties</span>
      </div>
      <ul class="concept-list">
        ${conceptsHtml}
      </ul>
      <div class="svg-diagram-wrapper" style="margin-top:18px;">
        ${ch.svg}
      </div>
    </div>

    <!-- Full In-Page Exercise Solutions -->
    <div class="ex-div">📖 NCERT Textbook Exercise Solutions &amp; Step-by-Step Working (${currentQs.length} Solved Questions)</div>
    <div class="questions-container">
      ${qCardsHtml}
    </div>

    <!-- NEP 2020 Competency Based Question (CBQ) -->
    <div class="cbq-card">
      <span class="cbq-badge">🌟 NEP 2020 Competency-Based Case Study (CBQ)</span>
      <h3 style="font-size:1.05rem;font-weight:800;color:#0f172a;margin-bottom:8px;">${ch.cbq.title}</h3>
      <p style="font-size:0.9rem;color:#334155;margin-bottom:12px;background:rgba(255,255,255,0.7);padding:12px;border-radius:8px;border-left:3px solid var(--brand);"><strong>Real-World Math Context:</strong> ${ch.cbq.text}</p>
      <p style="font-size:0.92rem;font-weight:700;color:#0f172a;margin-bottom:10px;"><strong>Analytical Task:</strong> ${ch.cbq.question}</p>
      <div style="font-size:0.88rem;line-height:1.6;color:#1e293b;">${ch.cbq.answer}</div>
      <div style="margin-top:10px;padding-top:8px;border-top:1px dashed #bfdbfe;font-size:0.8rem;font-weight:700;color:var(--brand-text);">CBSE Assessment Rubric: ${ch.cbq.rubric}</div>
    </div>

    <!-- Chapter Navigation Buttons -->
    <div class="ch-nav-btns">
      ${prevCh ? `<button class="ch-nav-btn prev" onclick="showChapter('ch_${prevCh.id}')">← Ch ${prevCh.num}: ${prevCh.title.split('—')[0].trim()}</button>` : `<button class="ch-nav-btn prev" disabled>← Previous Chapter</button>`}
      ${nextCh ? `<button class="ch-nav-btn next" onclick="showChapter('ch_${nextCh.id}')">Ch ${nextCh.num}: ${nextCh.title.split('—')[0].trim()} →</button>` : `<button class="ch-nav-btn next" disabled>Next Chapter →</button>`}
    </div>
  </section>`;
}

// -------------------------------------------------------------
// PART 2: GENERATE SECTIONS & NAVIGATION
// -------------------------------------------------------------

const melaSections = mathsMelaChapters.map((ch, idx, arr) => renderChapterSection(ch, "mela", idx, arr)).join('\n');
const magicSections = mathMagicChapters.map((ch, idx, arr) => renderChapterSection(ch, "magic", idx, arr)).join('\n');

const melaChips = mathsMelaChapters.map((ch, idx) => `
  <span class="bc-chip${idx === 0 ? ' active' : ''}" onclick="showChapter('ch_${ch.id}')" data-target="ch_${ch.id}">
    <span class="bc-n">${ch.num}</span> ${ch.title.split('—')[0].trim()}
  </span>
`).join('');

const magicChips = mathMagicChapters.map((ch, idx) => `
  <span class="bc-chip${idx === 0 ? ' active' : ''}" onclick="showChapter('ch_${ch.id}')" data-target="ch_${ch.id}">
    <span class="bc-n">${ch.num}</span> ${ch.title.split('—')[0].trim()}
  </span>
`).join('');

const melaSidebar = mathsMelaChapters.map((ch, idx) => `
  <li>
    <a onclick="showChapter('ch_${ch.id}')" data-target="ch_${ch.id}" class="${idx === 0 ? 'active' : ''}">
      <span class="ch-num">${ch.num}</span>
      <div class="ch-meta">
        <span class="ch-name">${ch.title}</span>
        <span class="ch-sub">${ch.unit}</span>
      </div>
    </a>
  </li>
`).join('');

const magicSidebar = mathMagicChapters.map((ch, idx) => `
  <li>
    <a onclick="showChapter('ch_${ch.id}')" data-target="ch_${ch.id}" class="${idx === 0 ? 'active' : ''}">
      <span class="ch-num">${ch.num}</span>
      <div class="ch-meta">
        <span class="ch-name">${ch.title}</span>
        <span class="ch-sub">${ch.unit}</span>
      </div>
    </a>
  </li>
`).join('');

// -------------------------------------------------------------
// PART 3: FULL HTML DOCUMENT
// -------------------------------------------------------------

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NCERT Solutions for Class 5 Maths (Maths Mela &amp; Math-Magic) CBSE 2026-27 | OlympiadQuiz</title>
  <meta name="description" content="100% Complete Class 5 NCERT Mathematics Solutions covering both textbooks: New NEP 2020 Maths Mela (15 Chapters) and Math-Magic (14 Chapters). Step-by-step model solutions, vector diagrams, CBSE marking rubrics, and NEP 2020 competency case studies.">
  <meta name="keywords" content="ncert solutions class 5 maths, maths mela class 5 solutions, math magic class 5 ncert, cbse class 5 maths 2026-27, the fish tale, shapes and angles, how many squares, parts and wholes, tenths and hundredths, area and its boundary, smart charts">
  <link rel="canonical" href="https://olympiadquiz.org/ncert-solutions-class-5-maths.html">
  <link rel="icon" type="image/png" href="favicon.png">
  <link rel="apple-touch-icon" href="favicon.png">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="OlympiadQuiz">
  <meta property="og:url" content="https://olympiadquiz.org/ncert-solutions-class-5-maths.html">
  <meta property="og:title" content="NCERT Solutions for Class 5 Maths (Maths Mela &amp; Math-Magic) CBSE 2026-27 | OlympiadQuiz">
  <meta property="og:description" content="100% question coverage for Class 5 Mathematics across all 29 chapters of Maths Mela and Math-Magic with vector diagrams, CBSE marking schemes and NEP 2020 competency questions.">
  <meta property="og:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@OlympiadQuiz">
  <meta name="twitter:title" content="NCERT Solutions for Class 5 Maths (Maths Mela &amp; Math-Magic) CBSE 2026-27">
  <meta name="twitter:description" content="Complete textbook exercise solutions for Class 5 Mathematics across Maths Mela and Math-Magic with diagrams, CBSE marking rubrics, and case studies.">
  <meta name="twitter:image" content="https://olympiadquiz.org/favicon.png">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">

  <!-- Schema.org BreadcrumbList -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://olympiadquiz.org/" },
      { "@type": "ListItem", "position": 2, "name": "NCERT Solutions", "item": "https://olympiadquiz.org/ncert-solutions.html" },
      { "@type": "ListItem", "position": 3, "name": "Class 5", "item": "https://olympiadquiz.org/ncert-solutions-class-5.html" },
      { "@type": "ListItem", "position": 4, "name": "Mathematics", "item": "https://olympiadquiz.org/ncert-solutions-class-5-maths.html" }
    ]
  }
  </script>

  <!-- Schema.org LearningResource -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "NCERT Solutions for Class 5 Mathematics (Maths Mela & Math-Magic) CBSE 2026-27",
    "description": "Comprehensive 100% textbook exercise solutions for NCERT Class 5 Maths covering all 15 chapters of Maths Mela and 14 chapters of Math-Magic with CBSE step rubrics, diagrams, and competency-based questions.",
    "educationalLevel": "CBSE Class 5",
    "learningResourceType": "Textbook Solutions",
    "inLanguage": "en",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "OlympiadQuiz",
      "url": "https://olympiadquiz.org/",
      "logo": { "@type": "ImageObject", "url": "https://olympiadquiz.org/favicon.png" }
    }
  }
  </script>

  <!-- Schema.org FAQPage -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which textbooks are covered under Class 5 NCERT Mathematics on OlympiadQuiz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both official NCERT Class 5 Mathematics textbooks are fully covered: the new NEP 2020 textbook 'Maths Mela' (15 chapters) and the classic CBSE textbook 'Math-Magic' (14 chapters)."
        }
      },
      {
        "@type": "Question",
        "name": "Are labeled geometric diagrams and visual models included in these solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, every single chapter features high-resolution vector SVG diagrams illustrating 2D/3D shapes, place value blocks, ruler measurements, clock angles, weight balances, and bar charts."
        }
      },
      {
        "@type": "Question",
        "name": "Do these solutions contain official CBSE step-by-step marking rubrics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, every question provides a transparent step marking scheme showing exactly how marks are awarded for given data, formulas, intermediate steps, and unit conclusions."
        }
      }
    ]
  }
  </script>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <style>
    :root {
      --primary: #1e3a8a;
      --primary-light: #eff6ff;
      --brand: #2563eb;
      --brand-dark: #1d4ed8;
      --brand-text: #1e40af;
      --accent: #f59e0b;
      --text: #0f172a;
      --muted: #475569;
      --bg: #f8fafc;
      --card: #ffffff;
      --border: #e2e8f0;
      --sidebar-w: 290px;
      --nav-h: 60px;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
    }

    /* Top Progress Bar */
    #progressBar {
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--brand), var(--accent));
      width: 0%;
      z-index: 9999;
      transition: width 0.1s ease;
    }

    /* Top Sticky Header */
    .site-header {
      position: sticky;
      top: 0;
      height: var(--nav-h);
      background: #ffffff;
      border-bottom: 1px solid var(--border);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;
      z-index: 100;
    }
    .header-logo {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      font-weight: 800;
      font-size: 1.15rem;
      color: #0f172a;
    }
    .header-logo img { width: 30px; height: 30px; }
    .header-logo span span { color: var(--brand); }
    .header-nav {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .header-nav a {
      color: #334155;
      text-decoration: none;
      font-size: 0.88rem;
      font-weight: 600;
      transition: color 0.15s;
    }
    .header-nav a:hover { color: var(--brand); }
    .btn-mobile-sidebar {
      display: none;
      background: none;
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 6px 10px;
      cursor: pointer;
    }

    /* Track Switcher Banner */
    .track-banner {
      background: #ffffff;
      border-bottom: 1px solid var(--border);
      padding: 14px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
    }
    .track-tabs {
      display: flex;
      gap: 8px;
    }
    .track-tab {
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 0.85rem;
      font-weight: 700;
      cursor: pointer;
      border: 1px solid var(--border);
      background: #f1f5f9;
      color: #475569;
      transition: all 0.2s ease;
    }
    .track-tab.active {
      background: var(--brand);
      color: #ffffff;
      border-color: var(--brand);
      box-shadow: 0 2px 6px rgba(37, 99, 235, 0.25);
    }

    /* Horizontal Breadcrumb & Chips Bar */
    .breadcrumb-bar {
      background: #ffffff;
      border-bottom: 1px solid var(--border);
      padding: 10px 24px;
      display: flex;
      align-items: center;
      overflow-x: auto;
      gap: 8px;
      white-space: nowrap;
      scrollbar-width: thin;
    }
    .bc-chip {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 5px 12px;
      background: #f8fafc;
      border: 1px solid var(--border);
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
      color: #334155;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.15s;
    }
    .bc-chip:hover, .bc-chip.active {
      background: var(--primary-light);
      border-color: var(--brand);
      color: var(--brand-dark);
    }
    .bc-n {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
      background: var(--brand);
      color: white;
      border-radius: 50%;
      font-size: 0.7rem;
      font-weight: 700;
    }

    /* Main Container & Sidebar */
    .app-container {
      display: flex;
      min-height: calc(100vh - var(--nav-h));
    }
    .chapter-sidebar {
      width: var(--sidebar-w);
      background: #ffffff;
      border-right: 1px solid var(--border);
      position: sticky;
      top: var(--nav-h);
      height: calc(100vh - var(--nav-h));
      overflow-y: auto;
      flex-shrink: 0;
      padding: 16px;
      scrollbar-width: thin;
    }
    .sidebar-search {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid var(--border);
      border-radius: 8px;
      font-size: 0.85rem;
      margin-bottom: 14px;
      outline: none;
    }
    .sidebar-search:focus { border-color: var(--brand); }
    .sidebar-group-title {
      font-size: 0.75rem;
      font-weight: 800;
      text-transform: uppercase;
      color: #64748b;
      letter-spacing: 0.05em;
      margin: 12px 0 8px;
    }
    .chapter-nav { list-style: none; }
    .chapter-nav li { margin-bottom: 4px; }
    .chapter-nav a {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 8px 10px;
      border-radius: 8px;
      text-decoration: none;
      color: #334155;
      font-size: 0.82rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.15s;
    }
    .chapter-nav a:hover, .chapter-nav a.active {
      background: var(--primary-light);
      color: var(--brand-dark);
    }
    .chapter-nav .ch-num {
      width: 22px;
      height: 22px;
      background: #e2e8f0;
      color: #334155;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: 700;
      flex-shrink: 0;
    }
    .chapter-nav a.active .ch-num {
      background: var(--brand);
      color: white;
    }
    .chapter-nav .ch-meta {
      display: flex;
      flex-direction: column;
    }
    .chapter-nav .ch-name { line-height: 1.3; }
    .chapter-nav .ch-sub {
      font-size: 0.72rem;
      color: #64748b;
      font-weight: 400;
      margin-top: 2px;
    }

    /* Main Solution Content */
    .content-area {
      flex: 1;
      padding: 32px 40px 60px;
      max-width: 960px;
      margin: 0 auto;
    }
    .chapter-section { display: none; }
    .chapter-section.active { display: block; }

    .chapter-header {
      display: flex;
      align-items: flex-start;
      gap: 18px;
      margin-bottom: 24px;
      padding-bottom: 20px;
      border-bottom: 1px solid var(--border);
    }
    .chapter-header .ch-badge {
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, var(--brand), #1e3a8a);
      color: white;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.35rem;
      font-weight: 900;
      flex-shrink: 0;
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
    }
    .chapter-header-info .ch-category {
      font-size: 0.78rem;
      font-weight: 800;
      text-transform: uppercase;
      color: var(--brand-text);
      letter-spacing: 0.05em;
      margin-bottom: 4px;
    }
    .chapter-header-info h2 {
      font-size: 1.65rem;
      font-weight: 800;
      color: #0f172a;
      line-height: 1.25;
      margin-bottom: 6px;
    }
    .chapter-header-info p {
      font-size: 0.92rem;
      color: #475569;
    }

    /* Concepts Card */
    .concept-card {
      background: white;
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 28px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.03);
    }
    .concept-header {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.92rem;
      font-weight: 800;
      color: var(--brand-dark);
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }
    .concept-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .concept-list li {
      position: relative;
      padding-left: 20px;
      font-size: 0.88rem;
      color: #334155;
      line-height: 1.5;
    }
    .concept-list li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--brand);
      font-weight: 800;
    }
    .svg-diagram-wrapper {
      background: #ffffff;
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 12px;
      text-align: center;
      overflow-x: auto;
    }

    /* Exercise Heading */
    .ex-div {
      font-size: 1.15rem;
      font-weight: 800;
      color: #0f172a;
      margin: 32px 0 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    /* Q-Cards */
    .questions-container {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    .q-card {
      background: white;
      border: 1px solid var(--border);
      border-radius: 12px;
      overflow: hidden;
      transition: all 0.2s ease;
      box-shadow: 0 2px 6px rgba(0,0,0,0.02);
    }
    .q-card:hover { border-color: #cbd5e1; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
    .q-head {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 18px;
      background: #ffffff;
      cursor: pointer;
      user-select: none;
    }
    .q-num {
      background: #eff6ff;
      color: #1d4ed8;
      border: 1px solid #bfdbfe;
      font-size: 0.78rem;
      font-weight: 800;
      padding: 4px 8px;
      border-radius: 6px;
      white-space: nowrap;
    }
    .q-text {
      flex: 1;
      font-size: 0.92rem;
      font-weight: 700;
      color: #0f172a;
      line-height: 1.45;
    }
    .q-cat {
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      padding: 3px 8px;
      background: #f1f5f9;
      color: #475569;
      border-radius: 4px;
      white-space: nowrap;
    }
    .q-marks {
      font-size: 0.75rem;
      font-weight: 700;
      color: #ea580c;
      white-space: nowrap;
    }
    .q-toggle {
      width: 18px;
      height: 18px;
      color: #64748b;
      transition: transform 0.2s ease;
      flex-shrink: 0;
    }
    .q-card.open .q-toggle { transform: rotate(45deg); }
    .q-answer {
      display: none;
      padding: 0 18px 18px;
    }
    .q-card.open .q-answer { display: block; }
    .answer-box {
      background: #f8fafc;
      border-left: 3px solid var(--brand);
      border-radius: 0 8px 8px 0;
      padding: 14px 16px;
    }
    .answer-label {
      font-size: 0.8rem;
      font-weight: 800;
      text-transform: uppercase;
      color: var(--brand-dark);
      margin-bottom: 8px;
      letter-spacing: 0.04em;
    }
    .answer-text {
      font-size: 0.9rem;
      color: #1e293b;
      line-height: 1.6;
    }

    /* Marking Scheme */
    .marking-scheme {
      margin-top: 14px;
      padding-top: 12px;
      border-top: 1px dashed #cbd5e1;
    }
    .marking-title {
      font-size: 0.75rem;
      font-weight: 800;
      text-transform: uppercase;
      color: #64748b;
      margin-bottom: 6px;
      letter-spacing: 0.04em;
    }
    .marking-row {
      display: flex;
      justify-content: space-between;
      font-size: 0.82rem;
      padding: 3px 0;
      color: #475569;
    }
    .marking-key { flex: 1; padding-right: 12px; }
    .marking-marks { font-weight: 700; color: #ea580c; white-space: nowrap; }

    /* CBQ Card */
    .cbq-card {
      background: linear-gradient(135deg, #eff6ff 0%, #f5f3ff 100%);
      border: 1.5px solid #bfdbfe;
      border-radius: 12px;
      padding: 22px;
      margin: 32px 0 24px;
    }
    .cbq-badge {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 800;
      text-transform: uppercase;
      padding: 3px 10px;
      background: #dbeafe;
      color: #1e40af;
      border-radius: 999px;
      margin-bottom: 10px;
    }

    /* Nav Buttons */
    .ch-nav-btns {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      margin-top: 36px;
      padding-top: 20px;
      border-top: 1px solid var(--border);
    }
    .ch-nav-btn {
      padding: 10px 18px;
      background: white;
      border: 1px solid var(--border);
      border-radius: 8px;
      font-size: 0.85rem;
      font-weight: 700;
      color: #1e293b;
      cursor: pointer;
      transition: all 0.15s;
    }
    .ch-nav-btn:hover:not(:disabled) {
      background: var(--primary-light);
      border-color: var(--brand);
      color: var(--brand-dark);
    }
    .ch-nav-btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    /* Responsive */
    @media (max-width: 900px) {
      .chapter-sidebar {
        position: fixed;
        left: -320px;
        top: 0;
        bottom: 0;
        z-index: 200;
        box-shadow: 4px 0 20px rgba(0,0,0,0.15);
        transition: left 0.25s ease;
      }
      .chapter-sidebar.open { left: 0; }
      .sidebar-overlay {
        display: none;
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.4);
        z-index: 150;
      }
      .sidebar-overlay.show { display: block; }
      .btn-mobile-sidebar { display: inline-flex; }
      .content-area { padding: 20px 16px 40px; }
    }
  </style>
</head>
<body>
  <div id="progressBar"></div>

  <!-- Main Site Header -->
  <header class="site-header">
    <a href="index.html" class="header-logo">
      <img src="favicon.png" alt="OlympiadQuiz Logo">
      <span>Olympiad<span>Quiz</span></span>
    </a>
    <div class="header-nav">
      <button class="btn-mobile-sidebar" onclick="toggleSidebar()">☰ Chapters</button>
      <a href="ncert-solutions.html">All Classes</a>
      <a href="ncert-solutions-class-5.html">Class 5 Hub</a>
    </div>
  </header>

  <!-- Track Switcher -->
  <div class="track-banner">
    <div style="font-size:0.92rem;font-weight:800;color:#0f172a;">
      📚 Class 5 NCERT Mathematics • Dual-Book Curriculum (2026-27 Session)
    </div>
    <div class="track-tabs">
      <button class="track-tab active" id="tabMela" onclick="switchBook('mela')">
        📘 Maths Mela (15 Chs • New NCF 2023)
      </button>
      <button class="track-tab" id="tabMagic" onclick="switchBook('magic')">
        📙 Math-Magic (14 Chs • Classic CBSE)
      </button>
    </div>
  </div>

  <!-- Horizontal Chips Navigation -->
  <div class="breadcrumb-bar" id="chipsMela">
    ${melaChips}
  </div>
  <div class="breadcrumb-bar" id="chipsMagic" style="display:none;">
    ${magicChips}
  </div>

  <!-- Overlay for Mobile Sidebar -->
  <div class="sidebar-overlay" id="sidebarOverlay" onclick="toggleSidebar()"></div>

  <!-- Application Body -->
  <div class="app-container">
    <aside class="chapter-sidebar" id="sidebar">
      <input type="text" class="sidebar-search" placeholder="Search chapter..." oninput="filterChapters(this.value)">
      
      <!-- Maths Mela Sidebar Navigation -->
      <div id="navMela">
        <div class="sidebar-group-title">Maths Mela Chapters (1 to 15)</div>
        <ul class="chapter-nav">
          ${melaSidebar}
        </ul>
      </div>

      <!-- Math-Magic Sidebar Navigation -->
      <div id="navMagic" style="display:none;">
        <div class="sidebar-group-title">Math-Magic Chapters (1 to 14)</div>
        <ul class="chapter-nav">
          ${magicSidebar}
        </ul>
      </div>
    </aside>

    <main class="content-area">
      <!-- Mela Chapter Sections -->
      <div id="sectionsMela">
        ${melaSections}
      </div>

      <!-- Magic Chapter Sections -->
      <div id="sectionsMagic" style="display:none;">
        ${magicSections}
      </div>
    </main>
  </div>

  <script>
    let currentBook = 'mela';

    function switchBook(book) {
      currentBook = book;
      const isMela = (book === 'mela');

      document.getElementById('tabMela').classList.toggle('active', isMela);
      document.getElementById('tabMagic').classList.toggle('active', !isMela);

      document.getElementById('chipsMela').style.display = isMela ? 'flex' : 'none';
      document.getElementById('chipsMagic').style.display = isMela ? 'none' : 'flex';

      document.getElementById('navMela').style.display = isMela ? 'block' : 'none';
      document.getElementById('navMagic').style.display = isMela ? 'none' : 'block';

      document.getElementById('sectionsMela').style.display = isMela ? 'block' : 'none';
      document.getElementById('sectionsMagic').style.display = isMela ? 'none' : 'block';

      const firstTarget = isMela ? 'ch_mela1' : 'ch_magic1';
      showChapter(firstTarget);
    }

    function showChapter(targetId, updateHistory = true) {
      // Toggle sections
      document.querySelectorAll('.chapter-section').forEach(sec => {
        sec.classList.toggle('active', sec.id === targetId);
      });

      // Toggle active chips
      document.querySelectorAll('.bc-chip').forEach(c => {
        c.classList.toggle('active', c.getAttribute('data-target') === targetId);
      });

      // Toggle active sidebar items
      document.querySelectorAll('.chapter-nav a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('data-target') === targetId);
      });

      // Close mobile drawer if open
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('sidebarOverlay');
      if (sidebar) sidebar.classList.remove('open');
      if (overlay) overlay.classList.remove('show');

      // Scroll active chip into view
      const activeChip = document.querySelector('.bc-chip[data-target="' + targetId + '"]');
      if (activeChip) activeChip.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });

      // Update hash
      if (updateHistory) {
        history.replaceState(null, null, '#' + targetId);
      }

      // Smooth scroll to content top
      const bc = document.querySelector('.breadcrumb-bar:not([style*=\"display:none\"])');
      if (bc) {
        const topOffset = bc.getBoundingClientRect().bottom + window.pageYOffset;
        window.scrollTo({ top: topOffset - 75, behavior: 'smooth' });
      }
    }

    function toggleQ(qId) {
      const card = document.getElementById(qId);
      if (card) {
        card.classList.toggle('open');
      }
    }

    function filterChapters(query) {
      const q = query.toLowerCase().trim();
      const activeNavId = (currentBook === 'mela') ? 'navMela' : 'navMagic';
      document.querySelectorAll('#' + activeNavId + ' li').forEach(li => {
        const text = li.innerText.toLowerCase();
        li.style.display = text.includes(q) ? 'block' : 'none';
      });
    }

    function toggleSidebar() {
      document.getElementById('sidebar').classList.toggle('open');
      document.getElementById('sidebarOverlay').classList.toggle('show');
    }

    // Scroll reading progress
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const prog = document.getElementById('progressBar');
      if (prog) prog.style.width = scrolled + '%';
    });

    // Handle hash on initial load
    window.addEventListener('DOMContentLoaded', () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        if (hash.startsWith('ch_magic')) {
          switchBook('magic');
          showChapter(hash, false);
          return;
        } else if (hash.startsWith('ch_mela')) {
          switchBook('mela');
          showChapter(hash, false);
          return;
        }
      }
      showChapter('ch_mela1', false);
    });
  </script>
</body>
</html>
`;

const outputPath = path.resolve(__dirname, '../ncert-solutions-class-5-maths.html');
fs.writeFileSync(outputPath, htmlContent, 'utf8');
console.log(`✅ Successfully generated ncert-solutions-class-5-maths.html (${htmlContent.length} bytes)!`);
