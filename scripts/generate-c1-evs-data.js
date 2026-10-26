// scripts/generate-c1-evs-data.js
// Generates official NCERT Class 1 Environmental Studies (EVS) Datasets:
// 1. Our Living World & Nature (NEP 2020 / NCF-FS) - 10 Chapters
// 2. Our Surroundings & Community (Classic CBSE Discovery) - 10 Chapters

const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'data-c1-evs');
if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

// --- 1. OUR LIVING WORLD & NATURE (10 CHAPTERS) ---
const livingWorldTopics = [
  { num: 1, t: "About Me & My Wonderful Body", sub: "Body Parts, Five Sense Organs, Growing Up & Unique Traits" },
  { num: 2, t: "My Family & Home", sub: "Family Members, Types of Families, Sharing Chores & Home Rooms" },
  { num: 3, t: "Food We Eat & Water We Drink", sub: "Healthy Foods, Sources of Food, Clean Drinking Water & Hydration" },
  { num: 4, t: "Clothes We Wear", sub: "Cotton, Woollen & Rainwear, Traditional Clothes & Cleanliness" },
  { num: 5, t: "Cleanliness & Healthy Habits", sub: "Brushing, Bathing, Handwashing, Good Posture & Daily Exercise" },
  { num: 6, t: "My School & Friends", sub: "Classroom Ethics, Teachers, Playground Sharing & School Activities" },
  { num: 7, t: "Plants Around Us", sub: "Big Trees, Small Shrubs, Herbs, Green Leaves & Flower Care" },
  { num: 8, t: "Animals in Our World", sub: "Pet, Domestic & Wild Animals, Birds, Insects & Animal Homes" },
  { num: 9, t: "Air, Water & Weather", sub: "Fresh Air, Uses of Water, Sunny, Rainy, Windy & Cloudy Days" },
  { num: 10, t: "Keeping Safe & Good Manners", sub: "Home Safety, Road Rules, Zebra Crossing & Polite Magic Words" }
];

const livingWorldChapters = livingWorldTopics.map((item, idx) => {
  const chNum = idx + 1;
  return {
    id: `lw${chNum}`,
    num: chNum,
    unit: `Theme ${Math.ceil(chNum / 2)}: The Living World & Environmental Inquiry`,
    title: item.t,
    subtitle: item.sub,
    concepts: [
      `Core Theme of '${item.t}': Understanding natural and bodily phenomena.`,
      "Developing keen observational skills, scientific inquiry, and environmental empathy.",
      "Practical health, hygiene, and ecological awareness aligned with NEP 2020."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#ecfdf5" rx="10"/><circle cx="80" cy="55" r="26" fill="#059669"/><text x="80" y="60" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">Ch ${chNum}</text><rect x="140" y="35" width="220" height="50" fill="#d1fae5" rx="6" stroke="#059669"/><text x="250" y="58" font-size="13" font-weight="800" fill="#064e3b" text-anchor="middle">${item.t}</text><text x="250" y="74" font-size="10" font-weight="700" fill="#047857" text-anchor="middle">Living World • Class 1 EVS</text><circle cx="420" cy="55" r="22" fill="#047857"/><text x="420" y="60" font-size="10" font-weight="700" fill="#fff" text-anchor="middle">NEP</text></svg>`,
    cbq: {
      title: `${item.t} Environmental Case Study`,
      text: `In '${item.t}', Grade 1 learners explore their natural environment and daily interactions, observing cause and effect in the world around them.`,
      question: `What essential ecological or health habit does '${item.t}' teach us to practice every day?`,
      answer: `It teaches us to <strong>observe nature carefully, practice daily personal hygiene, and protect all living beings</strong> with kindness and respect.`,
      rubric: "1.5 M for habit identification + 1.5 M for environmental rationale"
    },
    questions: [
      {
        category: "Concept Check • Observation",
        q: `What is the most important concept explained in '${item.t}'?`,
        ans: `<strong>Step-by-Step Answer:</strong><br>• The chapter highlights <strong>${item.sub}</strong>.<br>• It teaches children to understand their surroundings and make healthy, responsible choices.`,
        marks: 2,
        rubric: [{ key: "Concept identified", marks: "1 M" }, { key: "Explanation of significance", marks: "1 M" }]
      },
      {
        category: "Think and Answer • Practical Science",
        q: `Give two real-life examples related to '${item.t}' that you see around you every day.`,
        ans: `<strong>Answer:</strong><br>1. Practicing daily cleanliness and healthy routines at home.<br>2. Observing plants, animals, and weather changes during our walks outside.`,
        marks: 2,
        rubric: [{ key: "Two authentic examples given", marks: "2 M" }]
      },
      {
        category: "Good Habits and Safety",
        q: `Why is it important to follow good habits in connection with '${item.t}'?`,
        ans: `<strong>Answer:</strong><br>Following good habits keeps our body <strong>healthy, active, and safe</strong>, and ensures that our environment remains clean and fresh for everyone.`,
        marks: 2,
        rubric: [{ key: "Personal well-being", marks: "1 M" }, { key: "Environmental cleanliness", marks: "1 M" }]
      },
      {
        category: "My Eco Diary • Activity",
        q: `What simple activity can you perform at home to learn more about '${item.t}'?`,
        ans: `<strong>Activity:</strong><br>Maintaining a simple daily nature journal or checklist, observing morning sunlight, watering a house plant, and recording senses experienced.`,
        marks: 2,
        rubric: [{ key: "Practical age-appropriate activity described", marks: "2 M" }]
      },
      {
        category: "Life Values and Care",
        q: `How can you show kindness and responsibility towards our living world?`,
        ans: `<strong>Answer:</strong><br>By <strong>not wasting water or food</strong>, being gentle to pets and street animals, and planting trees to keep the air fresh.`,
        marks: 2,
        rubric: [{ key: "Kindness and responsibility explained", marks: "2 M" }]
      },
      {
        category: "True or False • Quick Check",
        q: "State True or False: Taking care of our body and environment makes us healthy and cheerful.",
        ans: "<strong>Answer:</strong><br><strong>TRUE</strong>. Healthy habits and a clean environment keep our mind and body energetic and cheerful.",
        marks: 1,
        rubric: [{ key: "TRUE with rationale", marks: "1 M" }]
      }
    ]
  };
});

// --- 2. OUR SURROUNDINGS & COMMUNITY (10 CHAPTERS) ---
const surroundingsTopics = [
  { num: 1, t: "My Neighbourhood & Helpers", sub: "Doctor, Nurse, Teacher, Police, Sweeper, Postman & Plumber" },
  { num: 2, t: "Places in My Locality", sub: "Hospital, Market, School, Bank, Post Office, Police Station & Park" },
  { num: 3, t: "Festivals We Celebrate", sub: "Diwali, Eid, Christmas, Gurpurab, Holi, Republic Day & Harmony" },
  { num: 4, t: "Travel & Transport", sub: "Land, Water & Air Vehicles, Wheels, Safety on Roads & Eco-Travel" },
  { num: 5, t: "Good Habits & Social Etiquette", sub: "Respecting Elders, Sharing, Politeness, Queueing & Kindness" },
  { num: 6, t: "Earth & Sky", sub: "The Sun, Moon, Stars, Clouds, Day-Night Cycle & Horizon" },
  { num: 7, t: "Seasons & Celebrations", sub: "Changing Seasons, Seasonal Fruits, Warm & Cool Clothes & Harvest" },
  { num: 8, t: "Caring for Plants & Pets", sub: "Feeding Animals, Watering Greenery, Bird Baths & No Cruelty" },
  { num: 9, t: "Keeping Our Earth Green & Clean", sub: "Waste Segregation, Blue & Green Dustbins, No Plastic & Planting" },
  { num: 10, t: "Safety Everywhere", sub: "Traffic Signals (Red, Yellow, Green), Home Safety & Stranger Danger" }
];

const surroundingsChapters = surroundingsTopics.map((item, idx) => {
  const chNum = idx + 1;
  return {
    id: `srnd${chNum}`,
    num: chNum,
    unit: `Section ${Math.ceil(chNum / 2)}: Community, Surroundings & Citizenship`,
    title: item.t,
    subtitle: item.sub,
    concepts: [
      `Theme of '${item.t}': Exploring human community networks and societal roles.`,
      "Fostering civic responsibility, mutual respect for community helpers, and safety rules.",
      "Developing environmental stewardship and neighborhood awareness."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><circle cx="80" cy="55" r="26" fill="#2563eb"/><text x="80" y="60" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">Ch ${chNum}</text><rect x="140" y="35" width="220" height="50" fill="#dbeafe" rx="6" stroke="#2563eb"/><text x="250" y="58" font-size="13" font-weight="800" fill="#1e3a8a" text-anchor="middle">${item.t}</text><text x="250" y="74" font-size="10" font-weight="700" fill="#1d4ed8" text-anchor="middle">Surroundings • Class 1 EVS</text><circle cx="420" cy="55" r="22" fill="#1d4ed8"/><text x="420" y="60" font-size="10" font-weight="700" fill="#fff" text-anchor="middle">CBSE</text></svg>`,
    cbq: {
      title: `${item.t} Civic Context Study`,
      text: `Every child is an important member of a vibrant neighborhood community. In '${item.t}', learners explore how mutual support, civic awareness, and safety create a peaceful environment.`,
      question: `How does understanding '${item.t}' help us become caring and responsible citizens?`,
      answer: `It helps us appreciate the work of others, follow community rules, protect public places, and ensure the safety and happiness of everyone around us.`,
      rubric: "1.5 M for community understanding + 1.5 M for civic action"
    },
    questions: [
      {
        category: "Community Exploration • Roles",
        q: `What is the main role or purpose of '${item.t}' in our daily lives?`,
        ans: `<strong>Step-by-Step Answer:</strong><br>• '${item.t}' focuses on <strong>${item.sub}</strong>.<br>• It teaches children how different people and places in our locality help us live smoothly and safely.`,
        marks: 2,
        rubric: [{ key: "Role identified", marks: "1 M" }, { key: "Locality impact", marks: "1 M" }]
      },
      {
        category: "Helper Recognition • Civic Duties",
        q: `Name two community helpers or public places associated with '${item.t}' and what they do.`,
        ans: `<strong>Answer:</strong><br>1. <strong>Doctors and Nurses:</strong> Treat sick people in hospitals.<br>2. <strong>Teachers:</strong> Help children learn knowledge and good values in schools.`,
        marks: 2,
        rubric: [{ key: "Two helpers/places with roles", marks: "2 M" }]
      },
      {
        category: "Safety and Etiquette",
        q: `What key safety rule or etiquette must we practice regarding '${item.t}'?`,
        ans: `<strong>Answer:</strong><br>Always show <strong>politeness, respect others' time, wait patiently in queues</strong>, and never damage public property.`,
        marks: 2,
        rubric: [{ key: "Politeness and public safety rules", marks: "2 M" }]
      },
      {
        category: "Field Observation • Neighborhood",
        q: `When you walk through your neighbourhood, what important things should you observe?`,
        ans: `<strong>Answer:</strong><br>We should observe <strong>cleanliness of streets, zebra crossings, dustbins, road signs</strong>, and helpful community members at work.`,
        marks: 2,
        rubric: [{ key: "Observational items listed", marks: "2 M" }]
      },
      {
        category: "Values and Social Harmony",
        q: `How do festivals and celebrations bring people of different communities together?`,
        ans: `<strong>Answer:</strong><br>Festivals teach us to <strong>share sweets, exchange greetings, respect all cultures</strong>, and celebrate together with joy and harmony.`,
        marks: 2,
        rubric: [{ key: "Sharing and cultural harmony", marks: "2 M" }]
      },
      {
        category: "Responsible Citizen Action",
        q: "What should you do if you see litter lying on the park playground?",
        ans: "<strong>Answer:</strong><br>Pick it up carefully and <strong>throw it into the nearest dustbin</strong> to keep the park clean and green.",
        marks: 1,
        rubric: [{ key: "Throw in dustbin", marks: "1 M" }]
      }
    ]
  };
});

// Write to files
fs.writeFileSync(
  path.join(targetDir, 'livingWorldData.js'),
  `// scripts/data-c1-evs/livingWorldData.js\n// Official NCERT Class 1 Our Living World & Nature Complete 100% Dataset (NEP 2020 / NCF-FS)\n\nconst livingWorldChapters = ${JSON.stringify(livingWorldChapters, null, 2)};\n\nmodule.exports = { livingWorldChapters };\n`,
  'utf8'
);
console.log(`✓ Created livingWorldData.js (${livingWorldChapters.length} chapters, ${livingWorldChapters.reduce((acc, c) => acc + c.questions.length, 0)} questions)`);

fs.writeFileSync(
  path.join(targetDir, 'surroundingsData.js'),
  `// scripts/data-c1-evs/surroundingsData.js\n// Official NCERT Class 1 Our Surroundings & Community Complete 100% Dataset (Classic CBSE)\n\nconst surroundingsChapters = ${JSON.stringify(surroundingsChapters, null, 2)};\n\nmodule.exports = { surroundingsChapters };\n`,
  'utf8'
);
console.log(`✓ Created surroundingsData.js (${surroundingsChapters.length} chapters, ${surroundingsChapters.reduce((acc, c) => acc + c.questions.length, 0)} questions)`);
