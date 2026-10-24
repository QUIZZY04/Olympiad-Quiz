// scripts/build-all-c6-modules.js
// Generates Standalone Chapter Modules for all Class 6 Subjects matching Class 3, 4, 5 architecture.

const fs = require('fs');
const path = require('path');
const { generateChapterPageC6 } = require('./builders/chapterTemplateC6.js');

const ROOT = path.resolve(__dirname, '..');

// Helper to extract clean <section> from file if already wrapped
function getSectionFragment(rawHtml) {
  const match = rawHtml.match(/<section[\s\S]*?<\/section>/);
  return match ? match[0] : rawHtml;
}

// ══════════════════════════════════════════════════════════════════
// 1. CLASS 6 MATHEMATICS: GANITA PRAKASH (12 Chapters)
// ══════════════════════════════════════════════════════════════════
const c6mDir = path.join(ROOT, 'chapters-c6m');
const c6mChapters = [
  { num: 1, title: 'Patterns in Mathematics', subtitle: 'Number Sequences, Triangular & Square Numbers, Matchstick Rules & Palindromes' },
  { num: 2, title: 'Lines and Angles', subtitle: 'Points, Lines, Rays, Angle Classifications, Clock Revolutions & Protractors' },
  { num: 3, title: 'Number Play', subtitle: 'Indian & International Place Values, Large Numbers, Rounding Off & Magic Squares' },
  { num: 4, title: 'Data Handling and Presentation', subtitle: 'Tally Marks, Frequency Distributions, Pictographs & Bar Graphs' },
  { num: 5, title: 'Prime Time', subtitle: 'Divisibility Tests 2 to 11, Prime Factorization, Factor Trees, HCF & LCM' },
  { num: 6, title: 'Perimeter and Area', subtitle: 'Perimeters of Polygons, Rectangles, Squares, Area Calculations & Tiling' },
  { num: 7, title: 'Fractions', subtitle: 'Visual Fraction Models, Number Line, Proper, Improper, Mixed & Arithmetic' },
  { num: 8, title: 'Playing with Constructions', subtitle: 'Ruler and Compass Bisectors, Perpendiculars & Standard Angles' },
  { num: 9, title: 'Symmetry', subtitle: 'Lines of Symmetry in Regular Polygons, Letters & Mirror Reflections' },
  { num: 10, title: 'The Other Side of Zero', subtitle: 'Integers, Directed Distance, Number Line Operations & Additive Inverses' },
  { num: 11, title: 'Introduction to Algebra', subtitle: 'Variables, Expressions, Pattern Formulations & Linear Equations' },
  { num: 12, title: 'Ratio and Proportion', subtitle: 'Ratios in Simplest Form, Proportions, Extreme/Mean Products & Unitary Method' }
];

const c6mSidebar = c6mChapters.map(ch => ({
  num: ch.num,
  title: ch.title,
  filename: `ganita-prakash-ch${ch.num}.html`
}));

console.log('=== BUILDING CLASS 6 MATHEMATICS STANDALONE MODULES ===');
c6mChapters.forEach((ch, idx) => {
  const srcPath = path.join(c6mDir, `ch${ch.num}.html`);
  if (!fs.existsSync(srcPath)) return;
  const raw = fs.readFileSync(srcPath, 'utf8');
  const sectionContent = getSectionFragment(raw);

  const prevLink = idx > 0 ? { label: `Ch ${idx}: ${c6mChapters[idx - 1].title}`, filename: `ganita-prakash-ch${idx}.html` } : null;
  const nextLink = idx < c6mChapters.length - 1 ? { label: `Ch ${idx + 2}: ${c6mChapters[idx + 1].title}`, filename: `ganita-prakash-ch${idx + 2}.html` } : null;

  const pageHtml = generateChapterPageC6({
    classNum: 6,
    subjectName: 'Mathematics',
    subjectSlug: 'maths',
    bookTitle: 'Ganita Prakash',
    bookSlug: 'ganita-prakash',
    trackName: 'NEP 2020 New Syllabus',
    chNum: ch.num,
    totalChs: 12,
    chId: `c6m-ch${ch.num}`,
    title: ch.title,
    subtitle: ch.subtitle,
    bodyContentHtml: sectionContent,
    prevLink,
    nextLink,
    sidebarChapters: c6mSidebar,
    canonicalUrl: `https://olympiadquiz.org/chapters-c6m/ganita-prakash-ch${ch.num}.html`
  });

  // Write both canonical name and ch[N].html
  fs.writeFileSync(path.join(c6mDir, `ganita-prakash-ch${ch.num}.html`), pageHtml, 'utf8');
  fs.writeFileSync(path.join(c6mDir, `ch${ch.num}.html`), pageHtml, 'utf8');
  console.log(`  ✓ Built Chapter ${ch.num}: ${ch.title} (${pageHtml.length.toLocaleString()} bytes)`);
});

// ══════════════════════════════════════════════════════════════════
// 2. CLASS 6 SCIENCE: CURIOSITY (12 Chapters)
// ══════════════════════════════════════════════════════════════════
const c6sDir = path.join(ROOT, 'chapters-c6s');
const c6sChapters = [
  { num: 1, title: 'The Wonderful World of Science', subtitle: 'Curiosity, Scientific Inquiry, Observation & Experimental Loop' },
  { num: 2, title: 'Diversity in the Living World', subtitle: 'Biodiversity, Habitats, Flora, Fauna & Plant/Animal Adaptations' },
  { num: 3, title: 'Mindful Eating: A Path to a Healthy Body', subtitle: 'Nutrients, Balanced Diet, Food Tests & Deficiency Diseases' },
  { num: 4, title: 'Exploring Magnets', subtitle: 'Magnetic Poles, Lodestone, Field Interactions & Compass Direction' },
  { num: 5, title: 'Measurement of Length and Motion', subtitle: 'Standard SI Units, Rulers, Types of Motion & Distance Measurement' },
  { num: 6, title: 'Materials Around Us', subtitle: 'States of Matter, Lustre, Hardness, Solubility & Transparency' },
  { num: 7, title: 'Temperature and its Measurement', subtitle: 'Heat, Temperature, Clinical & Laboratory Thermometers & Celsius Scale' },
  { num: 8, title: 'Water: A Precious Resource', subtitle: 'Water Cycle, Evaporation, Condensation, Groundwater & Rainwater Harvesting' },
  { num: 9, title: 'Methods of Separation in Daily Life', subtitle: 'Threshing, Winnowing, Handpicking, Sedimentation, Filtration & Evaporation' },
  { num: 10, title: 'Living Creatures: Exploring their Characteristics', subtitle: 'Respiration, Cellular Growth, Stimuli Response, Excretion & Reproduction' },
  { num: 11, title: "Nature's Treasures", subtitle: 'Natural Resources, Minerals, Fossil Fuels & Environmental Conservation' },
  { num: 12, title: 'Beyond Earth: The Sun, Moon and Stars', subtitle: 'Solar System, Celestial Bodies, Lunar Phases & Constellations' }
];

const c6sSidebar = c6sChapters.map(ch => ({
  num: ch.num,
  title: ch.title,
  filename: `curiosity-ch${ch.num}.html`
}));

console.log('\n=== BUILDING CLASS 6 SCIENCE STANDALONE MODULES ===');
c6sChapters.forEach((ch, idx) => {
  const srcPath = path.join(c6sDir, `ch${ch.num}.html`);
  if (!fs.existsSync(srcPath)) return;
  const raw = fs.readFileSync(srcPath, 'utf8');
  const sectionContent = getSectionFragment(raw);

  const prevLink = idx > 0 ? { label: `Ch ${idx}: ${c6sChapters[idx - 1].title}`, filename: `curiosity-ch${idx}.html` } : null;
  const nextLink = idx < c6sChapters.length - 1 ? { label: `Ch ${idx + 2}: ${c6sChapters[idx + 1].title}`, filename: `curiosity-ch${idx + 2}.html` } : null;

  const pageHtml = generateChapterPageC6({
    classNum: 6,
    subjectName: 'Science',
    subjectSlug: 'science',
    bookTitle: 'Curiosity',
    bookSlug: 'curiosity',
    trackName: 'NEP 2020 New Syllabus',
    chNum: ch.num,
    totalChs: 12,
    chId: `c6s-ch${ch.num}`,
    title: ch.title,
    subtitle: ch.subtitle,
    bodyContentHtml: sectionContent,
    prevLink,
    nextLink,
    sidebarChapters: c6sSidebar,
    canonicalUrl: `https://olympiadquiz.org/chapters-c6s/curiosity-ch${ch.num}.html`
  });

  fs.writeFileSync(path.join(c6sDir, `curiosity-ch${ch.num}.html`), pageHtml, 'utf8');
  fs.writeFileSync(path.join(c6sDir, `ch${ch.num}.html`), pageHtml, 'utf8');
  console.log(`  ✓ Built Chapter ${ch.num}: ${ch.title} (${pageHtml.length.toLocaleString()} bytes)`);
});

// ══════════════════════════════════════════════════════════════════
// 3. CLASS 6 SOCIAL SCIENCE: EXPLORING SOCIETY (14 Chapters)
// ══════════════════════════════════════════════════════════════════
const c6sstDir = path.join(ROOT, 'chapters-c6sst');
const c6sstChapters = [
  { num: 1, title: 'Locating Places on the Earth', subtitle: 'Latitude, Longitude, Prime Meridian, Grid Coordinates & Time Zones' },
  { num: 2, title: 'Oceans and Continents', subtitle: 'Major Landmasses, Ocean Basins, Plate Tectonics & Global Relief' },
  { num: 3, title: 'Landforms and Life', subtitle: 'Mountains, Plateaus, Plains, River Valleys & Human Adaptation' },
  { num: 4, title: 'Timeline and Sources of History', subtitle: 'Chronology, BCE/CE, Archaeological Artefacts, Inscriptions & Manuscripts' },
  { num: 5, title: 'India, That is Bharat', subtitle: 'Civilisational Heritage, Ancient Geography & National Identity' },
  { num: 6, title: 'The Beginning of Indian Civilisation', subtitle: 'Indus-Sarasvati Settlements, Harappan Urban Planning, Trade & Drainage' },
  { num: 7, title: "India's Cultural Roots", subtitle: 'Vedas, Upanishadic Philosophy, Epics & Moral Foundations' },
  { num: 8, title: "Unity in Diversity, or 'Many in the One'", subtitle: 'Cultural Pluralism, Geographical Coexistence & National Integration' },
  { num: 9, title: 'Family and Community', subtitle: 'Social Ties, Kinship, Interdependence & Shared Civic Duties' },
  { num: 10, title: 'Grassroots Democracy — Part 1: Governance in Rural Areas', subtitle: 'Gram Panchayat, Gram Sabha, Nyaya Panchayat & Rural Administration' },
  { num: 11, title: 'Grassroots Democracy — Part 2: Governance in Urban Areas', subtitle: 'Municipal Corporations, Ward Committees & Urban Civic Infrastructure' },
  { num: 12, title: 'The Value of Work', subtitle: 'Dignity of Labour, Division of Work & Social Respect' },
  { num: 13, title: 'Economic Activities Around Us', subtitle: 'Primary Agriculture, Manufacturing, Trade, Services & Livelihoods' },
  { num: 14, title: 'Protecting Public Property', subtitle: 'Monuments, Public Transport, Parks & Citizen Stewardship' }
];

const c6sstSidebar = c6sstChapters.map(ch => ({
  num: ch.num,
  title: ch.title,
  filename: `exploring-society-ch${ch.num}.html`
}));

console.log('\n=== BUILDING CLASS 6 SOCIAL SCIENCE STANDALONE MODULES ===');
c6sstChapters.forEach((ch, idx) => {
  const srcPath = path.join(c6sstDir, `ch${ch.num}.html`);
  if (!fs.existsSync(srcPath)) return;
  const raw = fs.readFileSync(srcPath, 'utf8');
  const sectionContent = getSectionFragment(raw);

  const prevLink = idx > 0 ? { label: `Ch ${idx}: ${c6sstChapters[idx - 1].title}`, filename: `exploring-society-ch${idx}.html` } : null;
  const nextLink = idx < c6sstChapters.length - 1 ? { label: `Ch ${idx + 2}: ${c6sstChapters[idx + 1].title}`, filename: `exploring-society-ch${idx + 2}.html` } : null;

  const pageHtml = generateChapterPageC6({
    classNum: 6,
    subjectName: 'Social Science',
    subjectSlug: 'sst',
    bookTitle: 'Exploring Society',
    bookSlug: 'exploring-society',
    trackName: 'NEP 2020 New Syllabus',
    chNum: ch.num,
    totalChs: 14,
    chId: `c6sst-ch${ch.num}`,
    title: ch.title,
    subtitle: ch.subtitle,
    bodyContentHtml: sectionContent,
    prevLink,
    nextLink,
    sidebarChapters: c6sstSidebar,
    canonicalUrl: `https://olympiadquiz.org/chapters-c6sst/exploring-society-ch${ch.num}.html`
  });

  fs.writeFileSync(path.join(c6sstDir, `exploring-society-ch${ch.num}.html`), pageHtml, 'utf8');
  fs.writeFileSync(path.join(c6sstDir, `ch${ch.num}.html`), pageHtml, 'utf8');
  console.log(`  ✓ Built Chapter ${ch.num}: ${ch.title} (${pageHtml.length.toLocaleString()} bytes)`);
});

// ══════════════════════════════════════════════════════════════════
// 4. CLASS 6 ENGLISH: POORVI (15 Chapters)
// ══════════════════════════════════════════════════════════════════
const c6engDir = path.join(ROOT, 'chapters-c6eng');
const c6engChapters = [
  { num: 1, title: 'A Bottle of Dew', subtitle: 'Unit 1: Fables and Folk Tales — Hard Work vs Alchemy' },
  { num: 2, title: 'The Raven and the Fox', subtitle: 'Unit 1: Fables and Folk Tales — Flattery Trap & Vanity' },
  { num: 3, title: 'Rama to the Rescue', subtitle: 'Unit 1: Fables and Folk Tales — Quick Thinking & Animal Rescue' },
  { num: 4, title: 'The Unlikely Best Friends', subtitle: 'Unit 2: Friendship — Gajaraj & Buntee the Puppy' },
  { num: 5, title: "A Friend’s Prayer", subtitle: 'Unit 2: Friendship — Lyrical Verse & Selfless Devotion' },
  { num: 6, title: 'The Chair', subtitle: 'Unit 2: Friendship — Mario’s Magic Chair & True Friends' },
  { num: 7, title: 'Neem Baba', subtitle: 'Unit 3: Nurturing Nature — Dialogue with Grandfather Neem' },
  { num: 8, title: 'What a Bird Thought', subtitle: 'Unit 3: Nurturing Nature — Child’s View from Shell to Sky' },
  { num: 9, title: 'Spices that Heal Us', subtitle: 'Unit 3: Nurturing Nature — Ayurvedic Kitchen Remedies' },
  { num: 10, title: 'Change of Heart', subtitle: 'Unit 4: Sports and Wellness — Sportsmanship & Integrity' },
  { num: 11, title: 'The Winner', subtitle: 'Unit 4: Sports and Wellness — Resilience & Determination' },
  { num: 12, title: 'Yoga — A Way of Life', subtitle: 'Unit 4: Sports and Wellness — Holistic Health & Asanas' },
  { num: 13, title: 'Hamara Bharat — Incredible India!', subtitle: 'Unit 5: Culture and Tradition — Cultural Diversity' },
  { num: 14, title: 'The Kites', subtitle: 'Unit 5: Culture and Tradition — Soaring Flight & Makar Sankranti' },
  { num: 15, title: 'Ila Sachani: Embroidering Dreams with her Feet', subtitle: 'Unit 5: Culture and Tradition — Triumph Over Adversity' }
];

const c6engSidebar = c6engChapters.map(ch => ({
  num: ch.num,
  title: ch.title,
  filename: `poorvi-ch${ch.num}.html`
}));

console.log('\n=== BUILDING CLASS 6 ENGLISH STANDALONE MODULES ===');
c6engChapters.forEach((ch, idx) => {
  const srcPath = path.join(c6engDir, `ch${ch.num}.html`);
  if (!fs.existsSync(srcPath)) return;
  const raw = fs.readFileSync(srcPath, 'utf8');
  const sectionContent = getSectionFragment(raw);

  const prevLink = idx > 0 ? { label: `Ch ${idx}: ${c6engChapters[idx - 1].title}`, filename: `poorvi-ch${idx}.html` } : null;
  const nextLink = idx < c6engChapters.length - 1 ? { label: `Ch ${idx + 2}: ${c6engChapters[idx + 1].title}`, filename: `poorvi-ch${idx + 2}.html` } : null;

  const pageHtml = generateChapterPageC6({
    classNum: 6,
    subjectName: 'English',
    subjectSlug: 'english',
    bookTitle: 'Poorvi',
    bookSlug: 'poorvi',
    trackName: 'NEP 2020 New Syllabus',
    chNum: ch.num,
    totalChs: 15,
    chId: `c6eng-ch${ch.num}`,
    title: ch.title,
    subtitle: ch.subtitle,
    bodyContentHtml: sectionContent,
    prevLink,
    nextLink,
    sidebarChapters: c6engSidebar,
    canonicalUrl: `https://olympiadquiz.org/chapters-c6eng/poorvi-ch${ch.num}.html`
  });

  fs.writeFileSync(path.join(c6engDir, `poorvi-ch${ch.num}.html`), pageHtml, 'utf8');
  fs.writeFileSync(path.join(c6engDir, `ch${ch.num}.html`), pageHtml, 'utf8');
  console.log(`  ✓ Built Chapter ${ch.num}: ${ch.title} (${pageHtml.length.toLocaleString()} bytes)`);
});

// ══════════════════════════════════════════════════════════════════
// 5. CLASS 6 HINDI: MALHAR (13 Chapters)
// ══════════════════════════════════════════════════════════════════
const c6hDir = path.join(ROOT, 'chapters-c6h');
const c6hChapters = [
  { num: 1, title: 'मातृभूमि', subtitle: 'कविता — राष्ट्रकवि सोहनलाल द्विवेदी (काव्यांश भावार्थ व शब्दार्थ)' },
  { num: 2, title: 'गोल', subtitle: 'संस्मरण — हॉकी के जादूगर मेजर ध्यानचंद (खेल भावना व लगन)' },
  { num: 3, title: 'हार की जीत', subtitle: 'कहानी — पं. सुदर्शन (बाबा भारती, खड्गसिंह व सुलतान)' },
  { num: 4, title: 'बचपन', subtitle: 'संस्मरण — कृष्णा सोबती (विगत सदी का बचपन व बदलती जीवनशैली)' },
  { num: 5, title: 'रहीम के दोहे', subtitle: 'नीति काव्य — कविवर रहीम (सप्रसंग भावार्थ, परोपकार व नीति)' },
  { num: 6, title: 'मेरी माँ', subtitle: 'आत्मकथा — क्रांतिकारी रामप्रसाद "बिस्मिल" (माँ की प्रेरणा)' },
  { num: 7, title: 'जल ही जीवन है', subtitle: 'निबंध — पर्यावरण संरक्षण, भूजल स्तर व जल संरक्षण' },
  { num: 8, title: 'ईदगाह', subtitle: 'कहानी — मुंशी प्रेमचंद (हामिद का चिमटा व बाल मनोविज्ञान)' },
  { num: 9, title: 'अनोखा यज्ञ', subtitle: 'बोध कथा — भूखे श्वान को रोटियाँ खिलाना व सच्चा निस्वार्थ त्याग' },
  { num: 10, title: 'सूरदास के पद', subtitle: 'भक्ति काव्य — महाकवि सूरदास (बालकृष्ण माखन चोरी व वात्सल्य)' },
  { num: 11, title: 'चेतक की वीरता', subtitle: 'वीर रस कविता — श्याम नारायण पाण्डेय (हल्दीघाटी व चेतक)' },
  { num: 12, title: 'बोध', subtitle: 'कहानी — मुंशी प्रेमचंद (पंडित चंद्रधर व शिक्षक के सम्मान का बोध)' },
  { num: 13, title: 'नीति के दोहे', subtitle: 'काव्य — संत कबीरदास व गोस्वामी तुलसीदास (मधुर वाणी व सत्संगति)' }
];

const c6hSidebar = c6hChapters.map(ch => ({
  num: ch.num,
  title: ch.title,
  filename: `malhar-ch${ch.num}.html`
}));

console.log('\n=== BUILDING CLASS 6 HINDI (MALHAR) STANDALONE MODULES ===');
c6hChapters.forEach((ch, idx) => {
  const srcPath = path.join(c6hDir, `ch${ch.num}.html`);
  if (!fs.existsSync(srcPath)) return;
  const raw = fs.readFileSync(srcPath, 'utf8');
  const sectionContent = getSectionFragment(raw);

  const prevLink = idx > 0 ? { label: `पाठ ${idx}: ${c6hChapters[idx - 1].title}`, filename: `malhar-ch${idx}.html` } : null;
  const nextLink = idx < c6hChapters.length - 1 ? { label: `पाठ ${idx + 2}: ${c6hChapters[idx + 1].title}`, filename: `malhar-ch${idx + 2}.html` } : null;

  const pageHtml = generateChapterPageC6({
    classNum: 6,
    subjectName: 'Hindi',
    subjectSlug: 'hindi-malhar',
    bookTitle: 'मल्हार (Malhar)',
    bookSlug: 'malhar',
    trackName: 'NEP 2020 नया पाठ्यक्रम',
    chNum: ch.num,
    totalChs: 13,
    chId: `c6h-ch${ch.num}`,
    title: ch.title,
    subtitle: ch.subtitle,
    bodyContentHtml: sectionContent,
    prevLink,
    nextLink,
    sidebarChapters: c6hSidebar,
    canonicalUrl: `https://olympiadquiz.org/chapters-c6h/malhar-ch${ch.num}.html`
  });

  fs.writeFileSync(path.join(c6hDir, `malhar-ch${ch.num}.html`), pageHtml, 'utf8');
  fs.writeFileSync(path.join(c6hDir, `ch${ch.num}.html`), pageHtml, 'utf8');
  console.log(`  ✓ Built Chapter ${ch.num}: ${ch.title} (${pageHtml.length.toLocaleString()} bytes)`);
});

console.log('\n======================================================');
console.log('✅ ALL 66 CLASS 6 STANDALONE CHAPTER MODULES GENERATED!');
console.log('======================================================\n');
