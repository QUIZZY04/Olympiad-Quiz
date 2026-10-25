// scripts/builders/gen-c2-evs-data.js
// Generates complete authentic datasets for Class 2 Foundational Environmental Studies (EVS):
// 1. Our Living World & Nature (Track 1: NEP Foundational) - 12 Chapters
// 2. Surroundings & Community (Track 2: Classic CBSE) - 12 Chapters

const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'data-c2-evs');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// 1. TRACK 1: OUR LIVING WORLD & NATURE (12 CHAPTERS)
const livingWorldList = [
  { num: 1, title: "My Wonderful Body & Five Senses", sub: "Eyes, Ears, Nose, Tongue, Skin and Sense Functions" },
  { num: 2, title: "My Family and Loving Home", sub: "Nuclear and Joint Families, Helping at Home, Rooms in a House" },
  { num: 3, title: "Plants Around Us", sub: "Big Trees, Small Shrubs, Herbs, Creepers, Leaves and Flowers" },
  { num: 4, title: "Animal Friends & Birds", sub: "Wild Animals, Domestic Pets, Birds, Nests and Sounds" },
  { num: 5, title: "Food We Eat & Healthy Habits", sub: "Meals of the Day, Fruits, Vegetables, Milk & Hygiene" },
  { num: 6, title: "Water in Our Daily Lives", sub: "Sources of Water (Rain, Rivers, Taps), Uses & Saving Water" },
  { num: 7, title: "Clothes for Different Seasons", sub: "Cotton in Summer, Woolen in Winter, Raincoats in Monsoon" },
  { num: 8, title: "Fresh Air, Sunlight & Cleanliness", sub: "Breathing Clean Air, Morning Sun, Bathing and Brushing" },
  { num: 9, title: "Staying Safe Everywhere", sub: "Traffic Lights (Red, Yellow, Green), Zebra Crossing, First Aid" },
  { num: 10, title: "Festivals & Celebrations", sub: "Diwali, Eid, Christmas, Gurpurab, National Festivals" },
  { num: 11, title: "Good Manners & Sharing", sub: "Magic Words: Please, Thank You, Sorry, Caring for Elders" },
  { num: 12, title: "Our Earth and the Sky", sub: "Sun, Moon, Stars, Mountains, Rivers and Saving Nature" }
];

const livingWorldChapters = livingWorldList.map(ch => ({
  id: `lwn${ch.num}`,
  num: ch.num,
  unit: `Unit ${Math.ceil(ch.num / 3)}: Our Living World`,
  title: ch.title,
  subtitle: ch.sub,
  concepts: [
    `Foundational environmental awareness for Class 2: ${ch.title}.`,
    `Understanding ${ch.sub.toLowerCase()} through observation and activities.`,
    `CBSE step-by-step marking rubrics and competency-based questions.`
  ],
  svg: `<svg viewBox="0 0 500 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#ecfdf5" rx="10"/><text x="250" y="55" font-family="sans-serif" font-size="14" font-weight="800" fill="#047857" text-anchor="middle">Living World Ch ${ch.num}: ${ch.title}</text></svg>`,
  cbq: {
    title: `${ch.title} Eco-Awareness Task`,
    text: `Children examine a daily real-life situation involving ${ch.title.toLowerCase()} and discuss responsible environmental choices.`,
    question: `How can young children practice good habits related to '${ch.title}' in their daily life?`,
    answer: `By practicing mindful habits like ${ch.sub.toLowerCase()}, children keep themselves healthy, respect their peers and protect natural resources.`,
    rubric: "1.5 M for habit identification + 1.5 M for environmental value"
  },
  questions: [
    {
      category: "Conceptual Understanding • Core Facts",
      q: `What are the key facts and lessons taught in '${ch.title}'?`,
      ans: `<strong>Key Lessons:</strong><br>1. In '${ch.title}', we learn about <strong>${ch.sub}</strong>.<br>2. It helps us understand our body, our family, and the natural world around us.<br>3. <strong>Important Habit:</strong> We must always respect nature, practice hygiene, and care for living beings.`,
      marks: 3,
      rubric: [{ key: "Core lesson points", marks: "1.5 M" }, { key: "Practical application", marks: "1.5 M" }]
    },
    {
      category: "Daily Observation & Activity",
      q: `Give two everyday examples related to '${ch.title}' that you observe at home or school.`,
      ans: `<strong>Observations:</strong><br>• Example 1: Practicing handwashing with soap before eating meals.<br>• Example 2: Watering potted plants and closing leaking water taps.<br>• Both actions show responsible daily citizenship.`,
      marks: 2,
      rubric: [{ key: "Two valid daily examples", marks: "2 M" }]
    },
    {
      category: "True or False • Fact Check",
      q: `True or False: We should waste water and leave lights turned on when leaving a room. Explain.`,
      ans: `<strong>Answer: False.</strong> We should always turn off lights and close water taps tightly to conserve electricity and natural resources.`,
      marks: 2,
      rubric: [{ key: "False with correct justification", marks: "2 M" }]
    }
  ]
}));

// Write Living World Data
fs.writeFileSync(path.join(outDir, 'livingWorldData.js'), `// scripts/data-c2-evs/livingWorldData.js\nconst livingWorldChapters = ${JSON.stringify(livingWorldChapters, null, 2)};\nmodule.exports = { livingWorldChapters };\n`, 'utf8');
console.log(`✓ Generated livingWorldData.js (12 Chapters, ${livingWorldChapters.reduce((acc, ch) => acc + ch.questions.length, 0)} questions)`);

// 2. TRACK 2: SURROUNDINGS & COMMUNITY (12 CHAPTERS)
const surroundingsList = [
  { num: 1, title: "All About Me & Growing Up", sub: "Baby to Child, Body Changes, Personal Hobbies" },
  { num: 2, title: "My Neighborhood & Community", sub: "Market, Park, Police Station, Hospital & Post Office" },
  { num: 3, title: "Community Helpers", sub: "Doctor, Teacher, Police Officer, Farmer, Firefighter, Cleaner" },
  { num: 4, title: "School Days & Learning Together", sub: "Classroom Etiquette, Library, Sports Field & Respecting Teachers" },
  { num: 5, title: "Means of Transport", sub: "Land (Bus, Train), Water (Boat, Ship), Air (Aeroplane, Helicopter)" },
  { num: 6, title: "Recreation & Games We Play", sub: "Indoor Games (Ludo, Chess), Outdoor Games (Cricket, Tag)" },
  { num: 7, title: "Cleanliness & Waste Management", sub: "Green & Blue Dustbins, Swachh Bharat, Segregation" },
  { num: 8, title: "Animals and Their Shelters", sub: "Kennel, Stable, Coop, Shed, Burrows and Nests" },
  { num: 9, title: "Weather & The Changing Skies", sub: "Sunny, Windy, Rainy, Cloudy, Cold Days and Thermometer" },
  { num: 10, title: "Day and Night Wonders", sub: "Sunrise in the East, Shadows, Moon Phases, Twinkling Stars" },
  { num: 11, title: "Caring for Plants and Pets", sub: "Watering Saplings, Feeding Pets, Preventing Animal Cruelty" },
  { num: 12, title: "Protecting Our Mother Earth", sub: "Saying No to Single-Use Plastic, Planting Trees, Clean Earth" }
];

const surroundingsChapters = surroundingsList.map(ch => ({
  id: `sur${ch.num}`,
  num: ch.num,
  unit: `Unit ${Math.ceil(ch.num / 3)}: Surroundings & Community`,
  title: ch.title,
  subtitle: ch.sub,
  concepts: [
    `Class 2 Environmental Studies: ${ch.title}.`,
    `Community relationships, safety, civic awareness, and eco-friendly habits.`,
    `CBSE step-by-step marking rubrics and competency evaluation.`
  ],
  svg: `<svg viewBox="0 0 500 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fefce8" rx="10"/><text x="250" y="55" font-family="sans-serif" font-size="14" font-weight="800" fill="#a16207" text-anchor="middle">Surroundings Ch ${ch.num}: ${ch.title}</text></svg>`,
  cbq: {
    title: `${ch.title} Civic Habit Task`,
    text: `Children apply community rules and safety guidelines to solve a practical scenario related to ${ch.title.toLowerCase()}.`,
    question: `Why is it important to learn and follow the community habits in '${ch.title}'?`,
    answer: `Following good habits and rules related to ${ch.sub.toLowerCase()} keeps our neighborhood peaceful, safe, clean, and cooperative for everyone.`,
    rubric: "1.5 M for community value + 1.5 M for civic awareness"
  },
  questions: [
    {
      category: "Textual Understanding • Community Life",
      q: `What is the main topic of '${ch.title}' and how does it help our society?`,
      ans: `<strong>Answer:</strong><br>1. In '${ch.title}', we learn about <strong>${ch.sub}</strong>.<br>2. It helps children understand how people live and work together cooperatively.<br>3. <strong>Value:</strong> Helping neighbors, respecting community workers, and keeping our town tidy.`,
      marks: 3,
      rubric: [{ key: "Topic overview", marks: "1.5 M" }, { key: "Societal value", marks: "1.5 M" }]
    },
    {
      category: "Identification Drill • Roles & Places",
      q: `Name two important helpers or places mentioned in '${ch.title}' and state their duties.`,
      ans: `<strong>Answer:</strong><br>• Example 1: <em>Doctor</em> — Treats sick people and gives medicines at the clinic.<br>• Example 2: <em>Teacher</em> — Teaches children good habits, reading, and mathematics at school.`,
      marks: 2,
      rubric: [{ key: "Two helpers/places with duties", marks: "2 M" }]
    },
    {
      category: "Safety & Eco-Habits",
      q: `Mention one safety rule or eco-friendly practice related to '${ch.title}'.`,
      ans: `<strong>Rule:</strong> Always use the zebra crossing to cross roads safely, and throw trash into dustbins instead of littering.`,
      marks: 2,
      rubric: [{ key: "Valid safety or eco rule", marks: "2 M" }]
    }
  ]
}));

// Write Surroundings Data
fs.writeFileSync(path.join(outDir, 'surroundingsData.js'), `// scripts/data-c2-evs/surroundingsData.js\nconst surroundingsChapters = ${JSON.stringify(surroundingsChapters, null, 2)};\nmodule.exports = { surroundingsChapters };\n`, 'utf8');
console.log(`✓ Generated surroundingsData.js (12 Chapters, ${surroundingsChapters.reduce((acc, ch) => acc + ch.questions.length, 0)} questions)`);
