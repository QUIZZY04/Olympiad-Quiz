const fs = require('fs');
const path = require('path');

const { generateChapterPage } = require('./builders/chapterTemplate.js');
const { wondrousWorldChapters } = require('./data-c5-evs/wondrousWorldData.js');
const { lookingAroundChapters } = require('./data-c5-evs/lookingAroundData.js');

const outDir = path.join(__dirname, '..', 'chapters-c5evs');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

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

console.log("=== BUILDING MODULAR CHAPTERS FOR CLASS 5 EVS ===");

// 1. Build Our Wondrous World (10 Chapters)
const owwSidebar = wondrousWorldChapters.map(ch => ({
  num: ch.num,
  title: ch.title,
  filename: `our-wondrous-world-ch${ch.num}.html`
}));

wondrousWorldChapters.forEach((ch, idx) => {
  const currentQs = ch.questions || [];

  const prevLink = idx > 0 ? { label: `Ch ${idx}: ${wondrousWorldChapters[idx - 1].title}`, filename: `our-wondrous-world-ch${idx}.html` } : null;
  const nextLink = idx < wondrousWorldChapters.length - 1 ? { label: `Ch ${idx + 2}: ${wondrousWorldChapters[idx + 1].title}`, filename: `our-wondrous-world-ch${idx + 2}.html` } : null;

  const pageHtml = generateChapterPage({
    classNum: 5,
    subjectName: 'The World Around Us / EVS',
    subjectSlug: 'evs',
    bookTitle: 'Our Wondrous World',
    bookSlug: 'our-wondrous-world',
    trackName: 'New NEP 2020 / NCF 2023',
    chNum: ch.num,
    totalChs: 10,
    chId: ch.id,
    title: ch.title,
    subtitle: ch.subtitle,
    concepts: ch.concepts,
    svg: ch.svg,
    questions: currentQs,
    cbq: ch.cbq,
    prevLink,
    nextLink,
    sidebarChapters: owwSidebar,
    canonicalUrl: `https://olympiadquiz.org/chapters-c5evs/our-wondrous-world-ch${ch.num}.html`
  });

  const outPath = path.join(outDir, `our-wondrous-world-ch${ch.num}.html`);
  fs.writeFileSync(outPath, pageHtml, 'utf8');
  console.log(`[Our Wondrous World] Built Chapter ${ch.num}: ${ch.title} -> ${currentQs.length} Qs (${pageHtml.length.toLocaleString()} bytes)`);
});

// 2. Build Looking Around (22 Chapters)
const laSidebar = lookingAroundChapters.map(ch => ({
  num: ch.num,
  title: ch.title,
  filename: `looking-around-ch${ch.num}.html`
}));

lookingAroundChapters.forEach((ch, idx) => {
  const currentQs = ch.questions || [];

  const prevLink = idx > 0 ? { label: `Ch ${idx}: ${lookingAroundChapters[idx - 1].title}`, filename: `looking-around-ch${idx}.html` } : null;
  const nextLink = idx < lookingAroundChapters.length - 1 ? { label: `Ch ${idx + 2}: ${lookingAroundChapters[idx + 1].title}`, filename: `looking-around-ch${idx + 2}.html` } : null;

  const pageHtml = generateChapterPage({
    classNum: 5,
    subjectName: 'The World Around Us / EVS',
    subjectSlug: 'evs',
    bookTitle: 'Looking Around',
    bookSlug: 'looking-around',
    trackName: 'Classic CBSE Track',
    chNum: ch.num,
    totalChs: 22,
    chId: ch.id,
    title: ch.title,
    subtitle: ch.subtitle,
    concepts: ch.concepts,
    svg: ch.svg,
    questions: currentQs,
    cbq: ch.cbq,
    prevLink,
    nextLink,
    sidebarChapters: laSidebar,
    canonicalUrl: `https://olympiadquiz.org/chapters-c5evs/looking-around-ch${ch.num}.html`
  });

  const outPath = path.join(outDir, `looking-around-ch${ch.num}.html`);
  fs.writeFileSync(outPath, pageHtml, 'utf8');
  console.log(`[Looking Around] Built Chapter ${ch.num}: ${ch.title} -> ${currentQs.length} Qs (${pageHtml.length.toLocaleString()} bytes)`);
});

console.log("✅ All 32 Class 5 EVS modular chapters successfully generated in chapters-c5evs/!");
