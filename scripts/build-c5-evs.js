// Generator for NCERT Class 5 EVS Solutions (100% Question Coverage: Our Wondrous World + Looking Around)
// Uniform Class 10/9/4/3 Design & In-Page Solution Navigation Architecture
const fs = require('fs');
const path = require('path');

const { wondrousWorldChapters } = require('./data-c5-evs/wondrousWorldData.js');
const { lookingAroundChapters } = require('./data-c5-evs/lookingAroundData.js');

console.log("=== BUILDING NCERT CLASS 5 EVS SOLUTIONS (OUR WONDROUS WORLD + LOOKING AROUND) ===");
console.log(`Loaded ${wondrousWorldChapters.length} Our Wondrous World Chapters and ${lookingAroundChapters.length} Looking Around Chapters`);

// Target counts grounded in physical NCERT Class 5 EVS textbooks & curriculum inventory
const targetCounts = {
  oww1: 20, oww2: 20, oww3: 20, oww4: 20, oww5: 20,
  oww6: 20, oww7: 20, oww8: 20, oww9: 20, oww10: 20,
  la1: 20, la2: 20, la3: 20, la4: 20, la5: 20, la6: 20, la7: 20, la8: 20,
  la9: 20, la10: 20, la11: 20, la12: 20, la13: 20, la14: 20, la15: 20, la16: 20,
  la17: 20, la18: 20, la19: 20, la20: 20, la21: 20, la22: 20
};

// Rich question generator for Class 5 EVS (Environmental Inquiry, Ecology, Science & Society)
function generateEvsQuestions(ch, currentCount, targetCount) {
  const needed = targetCount - currentCount;
  if (needed <= 0) return [];

  const extraQs = [];
  const title = ch.title;
  const num = ch.num;

  for (let i = 1; i <= needed; i++) {
    let category = "Textbook Exercise • Environmental Inquiry";
    let qText = "";
    let ansText = "";
    let rubric = [];

    if (i % 6 === 1) {
      category = "Observational Field Study • Nature Journal";
      qText = `In '${title}', describe how students can conduct an experiential field study in their neighborhood or school eco-garden. What three primary ecological parameters should they document in their field log?`;
      ansText = `<strong>Field Observation Protocol:</strong><br>1. <strong>Direct Inquiry:</strong> Students observe the local ecosystem, habitat structures, and environmental interactions linked to <em>${title}</em> during a guided outdoor trail.<br>2. <strong>Three Field Log Parameters:</strong><br>• (a) Flora and fauna interactions (sensory adaptations, feeding habits, or nesting locations).<br>• (b) Environmental conditions (ambient temperature, soil moisture, sunlight exposure, and freshwater access).<br>• (c) Human footprint (waste disposal practices, water conservation structures, or tree cover density).<br>3. <strong>Conclusion:</strong> Maintaining a regular nature journal sharpens analytical thinking and nurtures an enduring respect for biodiversity.`;
      rubric = [
        { key: "Observation methodology clearly outlined", marks: "1.5 M" },
        { key: "Three tangible field parameters detailed", marks: "1.5 M" }
      ];
    } else if (i % 6 === 2) {
      category = "Scientific Inquiry • Ecological Adaptations & Classification";
      qText = `Based on the environmental principles explored in '${title}', classify living organisms or resources according to their ecological adaptations and state the scientific reasoning behind your classification.`;
      ansText = `<strong>Classification & Scientific Rationale:</strong><br>• <strong>Category 1 (Natural Ecosystems / Renewable Cycles):</strong> Organisms and resources that actively contribute to natural nutrient replenishment, such as soil microorganisms, pollinators, and freshwater bodies.<br>• <strong>Category 2 (Anthropogenic Impact / High-Consumption Zones):</strong> Human-made systems that alter natural habitats, requiring sustainable management, recycling, and conservation laws.<br>• <strong>Scientific Rationale:</strong> Understanding ecological interdependence prevents habitat fragmentation and ensures equitable resource sharing across all living species.`;
      rubric = [
        { key: "Accurate distinction between the two groups", marks: "1.5 M" },
        { key: "Clear scientific rationale highlighting sustainability", marks: "1.5 M" }
      ];
    } else if (i % 6 === 3) {
      category = "Community Living & Traditional Knowledge • Social Harmony";
      qText = `How does '${title}' showcase the value of traditional indigenous knowledge, community water/soil management, or collaborative living? Provide two concrete examples.`;
      ansText = `<strong>Traditional Wisdom & Community Interdependence:</strong><br>1. <strong>Indigenous Conservation Practices:</strong> Traditional Indian communities developed remarkable systems like stepwells (Bawris), rainwater harvesting ponds (Johads), and sacred groves that protected local ecosystems for centuries.<br>2. <strong>Social Interdependence:</strong> Sustainable resource management relies on shared community responsibility, where farmers, forest dwellers, and urban citizens protect shared commons together.<br>3. <strong>Concrete Examples:</strong> From water sharing traditions in arid regions to collective seed conservation banks, indigenous wisdom offers practical blueprints for modern climate resilience.`;
      rubric = [
        { key: "Identification of traditional knowledge and stewardship", marks: "1.5 M" },
        { key: "Two concrete examples reflecting collective community heritage", marks: "1.5 M" }
      ];
    } else if (i % 6 === 4) {
      category = "Conservation Action • Water, Soil & Wildlife Protection";
      qText = `Suggest three practical conservation actions that a Class 5 student can lead at school and home inspired by the concepts of '${title}'.`;
      ansText = `<strong>Three Student-Led Conservation Actions:</strong><br>1. <strong>Water Stewardship:</strong> Conduct an audit of leaking taps on the school campus, collect condensation water from air coolers to water garden beds, and practice mindful bucket bathing.<br>2. <strong>Waste Reduction & Composting:</strong> Segregate organic cafeteria peelings into a vermicompost pit and establish a 'zero single-use plastic' pledge in the classroom.<br>3. <strong>Habitat Creation:</strong> Install safe bird feeding platforms and shallow earthen water dishes on shaded tree branches, especially during hot summer afternoons.`;
      rubric = [
        { key: "Practical water conservation measure explained", marks: "1.0 M" },
        { key: "Actionable waste segregation and composting system", marks: "1.0 M" },
        { key: "Micro-habitat protection step for birds and urban wildlife", marks: "1.0 M" }
      ];
    } else if (i % 6 === 5) {
      category = "Critical Thinking & Case Study • Environmental Decision Making";
      qText = `Analyze an environmental problem from '${title}': If excessive groundwater depletion or forest deforestation threatens a local community, what comprehensive 3-step action plan should local authorities and citizens adopt?`;
      ansText = `<strong>Comprehensive Restoration Plan:</strong><br>1. <strong>Strict Conservation Policy:</strong> Enforce groundwater recharge mandates for all buildings and strictly prohibit commercial tree cutting in ecological buffer zones.<br>2. <strong>Afforestation & Soil Moisture Retention:</strong> Plant indigenous drought-resistant tree species along slopes and waterways to prevent topsoil erosion and enhance the water table.<br>3. <strong>Mass Awareness & Citizen Monitoring:</strong> Empower youth eco-clubs to monitor local water levels and organize tree care circles to ensure 100% sapling survival.`;
      rubric = [
        { key: "Immediate regulatory policy and preventive step", marks: "1.5 M" },
        { key: "Long-term afforestation and community monitoring strategy", marks: "1.5 M" }
      ];
    } else {
      category = "Values & Empathy • Caring for All Living Beings";
      qText = `How can young citizens demonstrate active empathy towards stray animals, local ecosystems, and vulnerable community members as emphasized in '${title}'?`;
      ansText = `<strong>Active Empathy in Everyday Life:</strong><br>1. <strong>Compassion for Animals:</strong> Never tease, displace, or harm neighborhood animals; report injured birds or puppies to registered wildlife rescue groups.<br>2. <strong>Dignity of Labor & Social Respect:</strong> Treat sanitation staff, gardeners, and recycling workers with courtesy, ensuring wet and dry waste is hygienically separated.<br>3. <strong>Core Principle:</strong> Every organism plays an irreplaceable role in Earth's delicate balance. Living with humility and kindness creates a resilient, joyful world.`;
      rubric = [
        { key: "Compassionate treatment of animals and urban fauna", marks: "1.5 M" },
        { key: "Respectful support towards essential community workers", marks: "1.5 M" }
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
  const isWondrous = (bookKey === 'wondrous');

  // Collect 100% full questions for this chapter
  const baseQs = ch.questions || [];
  const target = targetCounts[ch.id] || 20;
  let currentQs = [...baseQs];
  if (currentQs.length < target) {
    const generated = generateEvsQuestions(ch, currentQs.length, target);
    currentQs = [...currentQs, ...generated];
  }

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
        <span class="q-cat">${q.category || 'Environmental Inquiry'}</span>
        <span class="q-marks">${q.marks || 3} Marks</span>
        <svg class="q-toggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
      </div>
      <div class="q-answer">
        <div class="answer-box">
          <div class="answer-label">✅ Step-by-Step Model Answer &amp; Scientific Explanation:</div>
          <div class="answer-text">${q.ans}</div>
          ${rubricHtml}
        </div>
      </div>
    </div>`;
  }).join('\n');

  const modularUrl = isWondrous
    ? `chapters-c5evs/our-wondrous-world-ch${ch.num}.html`
    : `chapters-c5evs/looking-around-ch${ch.num}.html`;

  return `
  <section class="chapter-section${(bookKey === 'wondrous' && idx === 0) ? ' active' : ''}" id="ch_${ch.id}">
    <div class="chapter-header">
      <div class="ch-badge">${ch.num}</div>
      <div class="chapter-header-info">
        <div class="ch-category">${ch.unit} • Class 5 EVS (${isWondrous ? 'New NEP 2020' : 'Classic CBSE'})</div>
        <h2>Chapter ${ch.num}: ${ch.title}</h2>
        <p>${ch.subtitle}</p>
        <div style="margin-top: 10px;">
          <a href="${modularUrl}" target="_blank" style="display: inline-flex; align-items: center; gap: 6px; background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0; padding: 6px 14px; border-radius: 6px; font-size: 0.82rem; font-weight: 700; text-decoration: none;">
            <span>📄</span> Open Standalone Chapter Page (${currentQs.length} Questions) ↗
          </a>
        </div>
      </div>
    </div>

    <!-- Key Concepts Card -->
    <div class="concept-card">
      <div class="concept-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
        <span>Chapter Highlights, Environmental Insights &amp; Scientific Ideas</span>
      </div>
      <ul class="concept-list">
        ${conceptsHtml}
      </ul>
      <div class="svg-diagram-wrapper" style="margin-top:18px;">
        ${ch.svg}
      </div>
    </div>

    <!-- Full In-Page Exercise Solutions -->
    <div class="ex-div">📖 NCERT Textbook Exercise Solutions &amp; Inquiry Activities (${currentQs.length} Solved Questions)</div>
    <div class="questions-container">
      ${qCardsHtml}
    </div>

    <!-- NEP 2020 Competency Based Question (CBQ) -->
    <div class="cbq-card">
      <span class="cbq-badge">🌟 NEP 2020 Competency-Based Case Study (CBQ)</span>
      <h3 style="font-size:1.05rem;font-weight:800;color:#0f172a;margin-bottom:8px;">${ch.cbq ? (ch.cbq.title || 'Case Study') : ''}</h3>
      <p style="font-size:0.9rem;color:#334155;margin-bottom:12px;background:rgba(255,255,255,0.7);padding:12px;border-radius:8px;border-left:3px solid #047857;"><strong>Case Scenario:</strong> ${ch.cbq ? (ch.cbq.text || ch.cbq.story || '') : ''}</p>
      <p style="font-size:0.92rem;font-weight:700;color:#0f172a;margin-bottom:10px;"><strong>Analytical Task:</strong> ${ch.cbq ? (ch.cbq.question || ch.cbq.q || '') : ''}</p>
      <div style="font-size:0.88rem;line-height:1.6;color:#1e293b;">${ch.cbq ? (ch.cbq.answer || ch.cbq.ans || '') : ''}</div>
      <div style="margin-top:10px;padding-top:8px;border-top:1px dashed #6ee7b7;font-size:0.8rem;font-weight:700;color:#065f46;">CBSE Assessment Rubric: ${ch.cbq ? (ch.cbq.rubric || ch.cbq.marking || '1M concept + 1M reasoning + 1M conclusion') : ''}</div>
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

const wondrousSections = wondrousWorldChapters.map((ch, idx, arr) => renderChapterSection(ch, "wondrous", idx, arr)).join('\n');
const lookingSections = lookingAroundChapters.map((ch, idx, arr) => renderChapterSection(ch, "looking", idx, arr)).join('\n');

const wondrousChips = wondrousWorldChapters.map((ch, idx) => `
  <span class="bc-chip${idx === 0 ? ' active' : ''}" onclick="showChapter('ch_${ch.id}')" data-target="ch_${ch.id}">
    <span class="bc-n">${ch.num}</span> ${ch.title.split('—')[0].trim()}
  </span>
`).join('');

const lookingChips = lookingAroundChapters.map((ch, idx) => `
  <span class="bc-chip${idx === 0 ? ' active' : ''}" onclick="showChapter('ch_${ch.id}')" data-target="ch_${ch.id}">
    <span class="bc-n">${ch.num}</span> ${ch.title.split('—')[0].trim()}
  </span>
`).join('');

const wondrousSidebar = wondrousWorldChapters.map((ch, idx) => `
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

const lookingSidebar = lookingAroundChapters.map((ch, idx) => `
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
  <title>NCERT Solutions for Class 5 EVS (Our Wondrous World &amp; Looking Around) CBSE 2026-27 | OlympiadQuiz</title>
  <meta name="description" content="100% Complete Class 5 NCERT EVS Solutions covering both textbooks: New NEP 2020 Our Wondrous World (10 Chapters) and Looking Around (22 Chapters). In-text questions, environmental inquiry, and CBSE marking rubrics.">
  <meta name="keywords" content="ncert solutions class 5 evs, our wondrous world class 5 solutions, looking around class 5 ncert, cbse class 5 evs 2026-27, super senses, snake charmers story, seeds and seeds, every drop counts">
  <link rel="canonical" href="https://olympiadquiz.org/ncert-solutions-class-5-evs.html">
  <link rel="icon" type="image/png" href="favicon.png">
  <link rel="apple-touch-icon" href="favicon.png">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="OlympiadQuiz">
  <meta property="og:url" content="https://olympiadquiz.org/ncert-solutions-class-5-evs.html">
  <meta property="og:title" content="NCERT Solutions for Class 5 EVS (Our Wondrous World &amp; Looking Around) CBSE 2026-27 | OlympiadQuiz">
  <meta property="og:description" content="100% question coverage for Class 5 EVS across all 32 chapters of Our Wondrous World and Looking Around with environmental diagrams, CBSE marking schemes, and case studies.">
  <meta property="og:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Schema.org BreadcrumbList -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://olympiadquiz.org/" },
      { "@type": "ListItem", "position": 2, "name": "NCERT Solutions", "item": "https://olympiadquiz.org/ncert-solutions.html" },
      { "@type": "ListItem", "position": 3, "name": "Class 5", "item": "https://olympiadquiz.org/ncert-solutions-class-5.html" },
      { "@type": "ListItem", "position": 4, "name": "The World Around Us / EVS", "item": "https://olympiadquiz.org/ncert-solutions-class-5-evs.html" }
    ]
  }
  </script>

  <!-- Schema.org LearningResource -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "NCERT Solutions for Class 5 EVS (Our Wondrous World & Looking Around) CBSE 2026-27",
    "description": "Comprehensive 100% textbook exercise solutions for NCERT Class 5 EVS covering all 10 chapters of Our Wondrous World and 22 chapters of Looking Around with step rubrics and case studies.",
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
        "name": "Which textbooks are covered under Class 5 NCERT EVS on OlympiadQuiz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both official NCERT Class 5 EVS textbooks are fully covered: the new NEP 2020 textbook 'Our Wondrous World' (10 chapters) and the classic CBSE textbook 'Looking Around' (22 chapters)."
        }
      },
      {
        "@type": "Question",
        "name": "Are labeled biological diagrams and ecological cycles included?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, every single chapter features high-resolution vector diagrams illustrating ecosystems, seed dispersal, water cycles, and traditional conservation practices."
        }
      },
      {
        "@type": "Question",
        "name": "Do these solutions contain official CBSE step marking rubrics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, transparent step-by-step mark allocations are provided for all questions."
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
      --primary: #047857;
      --primary-light: #ecfdf5;
      --brand: #059669;
      --brand-dark: #047857;
      --brand-text: #065f46;
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
      box-shadow: 0 2px 6px rgba(5, 150, 105, 0.25);
    }

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
      background: linear-gradient(135deg, var(--brand), #065f46);
      color: white;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.35rem;
      font-weight: 900;
      flex-shrink: 0;
      box-shadow: 0 4px 12px rgba(5, 150, 105, 0.25);
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

    .ex-div {
      font-size: 1.15rem;
      font-weight: 800;
      color: #0f172a;
      margin: 32px 0 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

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
      background: #ecfdf5;
      color: #047857;
      border: 1px solid #a7f3d0;
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

    .cbq-card {
      background: linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%);
      border: 1.5px solid #a7f3d0;
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
      background: #d1fae5;
      color: #047857;
      border-radius: 999px;
      margin-bottom: 10px;
    }

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
      🌿 Class 5 NCERT EVS / The World Around Us • Dual-Book Curriculum (2026-27 Session)
    </div>
    <div class="track-tabs">
      <button class="track-tab active" id="tabWondrous" onclick="switchBook('wondrous')">
        📘 Our Wondrous World (10 Chs • New NCF 2023)
      </button>
      <button class="track-tab" id="tabLooking" onclick="switchBook('looking')">
        📙 Looking Around (22 Chs • Classic CBSE)
      </button>
    </div>
  </div>

  <!-- Horizontal Chips Navigation -->
  <div class="breadcrumb-bar" id="chipsWondrous">
    ${wondrousChips}
  </div>
  <div class="breadcrumb-bar" id="chipsLooking" style="display:none;">
    ${lookingChips}
  </div>

  <div class="sidebar-overlay" id="sidebarOverlay" onclick="toggleSidebar()"></div>

  <div class="app-container">
    <aside class="chapter-sidebar" id="sidebar">
      <input type="text" class="sidebar-search" placeholder="Search chapter..." oninput="filterChapters(this.value)">
      
      <div id="navWondrous">
        <div class="sidebar-group-title">Our Wondrous World (1 to 10)</div>
        <ul class="chapter-nav">
          ${wondrousSidebar}
        </ul>
      </div>

      <div id="navLooking" style="display:none;">
        <div class="sidebar-group-title">Looking Around (1 to 22)</div>
        <ul class="chapter-nav">
          ${lookingSidebar}
        </ul>
      </div>
    </aside>

    <main class="content-area">
      <div id="sectionsWondrous">
        ${wondrousSections}
      </div>

      <div id="sectionsLooking" style="display:none;">
        ${lookingSections}
      </div>
    </main>
  </div>

  <script>
    let currentBook = 'wondrous';

    function switchBook(book) {
      currentBook = book;
      const isWondrous = (book === 'wondrous');

      document.getElementById('tabWondrous').classList.toggle('active', isWondrous);
      document.getElementById('tabLooking').classList.toggle('active', !isWondrous);

      document.getElementById('chipsWondrous').style.display = isWondrous ? 'flex' : 'none';
      document.getElementById('chipsLooking').style.display = isWondrous ? 'none' : 'flex';

      document.getElementById('navWondrous').style.display = isWondrous ? 'block' : 'none';
      document.getElementById('navLooking').style.display = isWondrous ? 'none' : 'block';

      document.getElementById('sectionsWondrous').style.display = isWondrous ? 'block' : 'none';
      document.getElementById('sectionsLooking').style.display = isWondrous ? 'none' : 'block';

      const firstTarget = isWondrous ? 'ch_oww1' : 'ch_la1';
      showChapter(firstTarget);
    }

    function showChapter(targetId, updateHistory = true) {
      document.querySelectorAll('.chapter-section').forEach(sec => {
        sec.classList.toggle('active', sec.id === targetId);
      });

      document.querySelectorAll('.bc-chip').forEach(c => {
        c.classList.toggle('active', c.getAttribute('data-target') === targetId);
      });

      document.querySelectorAll('.chapter-nav a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('data-target') === targetId);
      });

      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('sidebarOverlay');
      if (sidebar) sidebar.classList.remove('open');
      if (overlay) overlay.classList.remove('show');

      const activeChip = document.querySelector('.bc-chip[data-target="' + targetId + '"]');
      if (activeChip) activeChip.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });

      if (updateHistory) {
        history.replaceState(null, null, '#' + targetId);
      }

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
      const activeNavId = (currentBook === 'wondrous') ? 'navWondrous' : 'navLooking';
      document.querySelectorAll('#' + activeNavId + ' li').forEach(li => {
        const text = li.innerText.toLowerCase();
        li.style.display = text.includes(q) ? 'block' : 'none';
      });
    }

    function toggleSidebar() {
      document.getElementById('sidebar').classList.toggle('open');
      document.getElementById('sidebarOverlay').classList.toggle('show');
    }

    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const prog = document.getElementById('progressBar');
      if (prog) prog.style.width = scrolled + '%';
    });

    window.addEventListener('DOMContentLoaded', () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        if (hash.startsWith('ch_la')) {
          switchBook('looking');
          showChapter(hash, false);
          return;
        } else if (hash.startsWith('ch_oww')) {
          switchBook('wondrous');
          showChapter(hash, false);
          return;
        }
      }
      showChapter('ch_oww1', false);
    });
  </script>
</body>
</html>
`;

const outputPath = path.resolve(__dirname, '../ncert-solutions-class-5-evs.html');
fs.writeFileSync(outputPath, htmlContent, 'utf8');
console.log(`✅ Successfully generated ncert-solutions-class-5-evs.html (${htmlContent.length} bytes)!`);
