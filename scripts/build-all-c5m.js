const fs = require('fs');
const path = require('path');

const { generateChapterPage } = require('./builders/chapterTemplate.js');
const { mathsMelaChapters } = require('./data-c5-maths/mathsMelaData.js');
const { mathMagicChapters } = require('./data-c5-maths/mathMagicData.js');

const outDir = path.join(__dirname, '..', 'chapters-c5m');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

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

console.log("=== BUILDING MODULAR CHAPTERS FOR CLASS 5 MATHEMATICS ===");

// 1. Build Maths Mela (15 Chapters)
const melaSidebar = mathsMelaChapters.map(ch => ({
  num: ch.num,
  title: ch.title,
  filename: `maths-mela-ch${ch.num}.html`
}));

mathsMelaChapters.forEach((ch, idx) => {
  const currentQs = ch.questions || [];

  const prevLink = idx > 0 ? { label: `Ch ${idx}: ${mathsMelaChapters[idx - 1].title}`, filename: `maths-mela-ch${idx}.html` } : null;
  const nextLink = idx < mathsMelaChapters.length - 1 ? { label: `Ch ${idx + 2}: ${mathsMelaChapters[idx + 1].title}`, filename: `maths-mela-ch${idx + 2}.html` } : null;

  const pageHtml = generateChapterPage({
    classNum: 5,
    subjectName: 'Mathematics',
    subjectSlug: 'maths',
    bookTitle: 'Maths Mela',
    bookSlug: 'maths-mela',
    trackName: 'New NEP 2020 / NCF 2023',
    chNum: ch.num,
    totalChs: 15,
    chId: ch.id,
    title: ch.title,
    subtitle: ch.subtitle,
    concepts: ch.concepts,
    svg: ch.svg,
    questions: currentQs,
    cbq: ch.cbq,
    prevLink,
    nextLink,
    sidebarChapters: melaSidebar,
    canonicalUrl: `https://olympiadquiz.org/chapters-c5m/maths-mela-ch${ch.num}.html`
  });

  const outPath = path.join(outDir, `maths-mela-ch${ch.num}.html`);
  fs.writeFileSync(outPath, pageHtml, 'utf8');
  console.log(`[Maths Mela] Built Chapter ${ch.num}: ${ch.title} -> ${currentQs.length} Qs (${pageHtml.length.toLocaleString()} bytes)`);
});

// 2. Build Math-Magic (14 Chapters)
const magicSidebar = mathMagicChapters.map(ch => ({
  num: ch.num,
  title: ch.title,
  filename: `math-magic-ch${ch.num}.html`
}));

mathMagicChapters.forEach((ch, idx) => {
  const currentQs = ch.questions || [];

  const prevLink = idx > 0 ? { label: `Ch ${idx}: ${mathMagicChapters[idx - 1].title}`, filename: `math-magic-ch${idx}.html` } : null;
  const nextLink = idx < mathMagicChapters.length - 1 ? { label: `Ch ${idx + 2}: ${mathMagicChapters[idx + 1].title}`, filename: `math-magic-ch${idx + 2}.html` } : null;

  const pageHtml = generateChapterPage({
    classNum: 5,
    subjectName: 'Mathematics',
    subjectSlug: 'maths',
    bookTitle: 'Math-Magic',
    bookSlug: 'math-magic',
    trackName: 'Classic CBSE Track',
    chNum: ch.num,
    totalChs: 14,
    chId: ch.id,
    title: ch.title,
    subtitle: ch.subtitle,
    concepts: ch.concepts,
    svg: ch.svg,
    questions: currentQs,
    cbq: ch.cbq,
    prevLink,
    nextLink,
    sidebarChapters: magicSidebar,
    canonicalUrl: `https://olympiadquiz.org/chapters-c5m/math-magic-ch${ch.num}.html`
  });

  const outPath = path.join(outDir, `math-magic-ch${ch.num}.html`);
  fs.writeFileSync(outPath, pageHtml, 'utf8');
  console.log(`[Math-Magic] Built Chapter ${ch.num}: ${ch.title} -> ${currentQs.length} Qs (${pageHtml.length.toLocaleString()} bytes)`);
});

console.log("✅ All 29 Class 5 Mathematics modular chapters successfully generated in chapters-c5m/!");
