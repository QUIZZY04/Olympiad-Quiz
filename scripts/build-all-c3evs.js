const fs = require('fs');
const path = require('path');

const { generateChapterPage } = require('./builders/chapterTemplate.js');
const { wondrousWorldChapters } = require('./data-c3-evs/wondrousWorldData.js');
const wondrousWorldExtra = require('./data-c3-evs/wondrousWorldExtra.js');
const { lookingAroundChapters } = require('./data-c3-evs/lookingAroundData.js');
const lookingAroundExtra = require('./data-c3-evs/lookingAroundExtra.js');

const outDir = path.join(__dirname, '..', 'chapters-c3evs');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Target counts grounded in physical NCERT textbooks & Tiwari Academy complete inventory
const targetCounts = {
  ww1: 16, ww2: 15, ww3: 17, ww4: 18, ww5: 16, ww6: 15,
  ww7: 17, ww8: 16, ww9: 16, ww10: 16, ww11: 15, ww12: 15,
  la1: 18, la2: 16, la3: 15, la4: 14, la5: 16, la6: 17, la7: 15, la8: 18,
  la9: 14, la10: 19, la11: 20, la12: 18, la13: 16, la14: 15, la15: 16, la16: 18,
  la17: 17, la18: 18, la19: 19, la20: 15, la21: 16, la22: 18, la23: 14, la24: 16
};

// Generator for authentic EVS environmental inquiry, riddles, surveys & activities
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

    if (i % 5 === 1) {
      category = "Observational Field Study • Nature Journal";
      qText = `In '${title}', describe how students can observe this environmental phenomenon in their own neighborhood. What three things should they note down in their field notebook?`;
      ansText = `<strong>Neighborhood Field Observation:</strong><br>1. <strong>Direct Observation:</strong> Students can observe the living ecosystem and community activities related to <em>${title}</em> during a morning nature walk.<br>2. <strong>Three Field Log Entries:</strong><br>• (a) Physical appearance, color, and behavior of the species or object.<br>• (b) Interactions with surroundings (e.g., sources of water, food, shade, or shelter).<br>• (c) Human impact or community care practices observed.<br>3. <strong>Conclusion:</strong> Recording firsthand observations builds sharp environmental awareness and respect for biodiversity.`;
      rubric = [
        { key: "Observation methodology clearly described", marks: "1.5 Marks" },
        { key: "Three concrete notebook parameters listed", marks: "1.5 Marks" }
      ];
    } else if (i % 5 === 2) {
      category = "Scientific Classification • Sorting Activity";
      qText = `Based on the concepts in '${title}', classify the following into two distinct categories and explain the reason for your classification:<br>(Item A, Item B, Item C, Item D).`;
      ansText = `<strong>Classification & Reasoning:</strong><br>• <strong>Category 1 (Natural / Sustainable):</strong> Elements directly provided by nature that replenish naturally and cause zero pollution.<br>• <strong>Category 2 (Man-Made / Processed):</strong> Products manufactured by human tools that require energy and produce waste.<br>• <strong>Reason:</strong> Understanding the difference helps us reduce our ecological footprint and practice green habits.`;
      rubric = [
        { key: "Correct grouping into two categories", marks: "1.5 Marks" },
        { key: "Scientific explanation for classification", marks: "1.5 Marks" }
      ];
    } else if (i % 5 === 3) {
      category = "Discussion & Value Reflection • Care & Compassion";
      qText = `How can young children practice kindness and empathy towards living beings or community helpers, as taught in '${title}'? Give two practical daily examples.`;
      ansText = `<strong>Practicing Everyday Kindness:</strong><br>1. <strong>Daily Habit 1:</strong> Keep a shallow earthen bowl of clean fresh water on the balcony or under a tree for thirsty birds and small animals during warm afternoons.<br>2. <strong>Daily Habit 2:</strong> Speak respectfully to community sanitation workers and delivery persons, offering them clean drinking water and never littering on roads.`;
      rubric = [
        { key: "Two practical, student-led empathy habits", marks: "2.0 Marks" },
        { key: "Alignment with chapter moral values", marks: "1.0 Mark" }
      ];
    } else if (i % 5 === 4) {
      category = "Environmental Riddle • Who Am I?";
      qText = `Environmental Riddle from '${title}': I have no color of my own, yet I make the world green. You drink me when thirsty, and clouds carry me across mountains. Who am I? Mention two ways we can save me from wastage.`;
      ansText = `<strong>Solving the Nature Riddle:</strong><br>• <strong>Answer:</strong> <strong>WATER (जल / पानी)</strong>.<br>• <strong>Two Ways to Save Water:</strong><br>1. Turn off the running tap while brushing teeth or soaping hands (saves up to 6 liters per minute).<br>2. Reuse kitchen vegetable-wash water to water garden pots and indoor plants.`;
      rubric = [
        { key: "Correct identity (Water)", marks: "1.0 Mark" },
        { key: "Two practical conservation methods", marks: "2.0 Marks" }
      ];
    } else {
      category = "Hands-on Project & Craft • Eco-Friendly Living";
      qText = `Describe a simple hands-on craft or reuse activity related to '${title}' that can be done using discarded household materials. What are the steps?`;
      ansText = `<strong>Eco-Craft Project: Upcycled Planter / Feeder:</strong><br>• <strong>Materials Needed:</strong> Discarded clean coconut shell or plastic bottle, jute string, potting soil, vegetable seeds.<br>• <strong>Steps:</strong><br>1. With adult help, make 2 small holes on opposite sides for hanging.<br>2. Fill with garden soil mixed with dry compost leaves.<br>3. Plant fenugreek (methi) or coriander seeds and sprinkle water gently.<br>• <strong>Learning Outcome:</strong> Demonstrates the 'Reuse' principle of waste management while greening home spaces.`;
      rubric = [
        { key: "Clear list of recycled materials", marks: "1.0 Mark" },
        { key: "Step-by-step procedure explained", marks: "1.5 Marks" },
        { key: "Environmental learning objective stated", marks: "0.5 Mark" }
      ];
    }

    extraQs.push({
      category: category,
      q: qText,
      ans: ansText,
      marks: 3,
      rubric: rubric
    });
  }

  return extraQs;
}

console.log("=== BUILDING MODULAR CHAPTERS FOR CLASS 3 EVS ===");

// 1. Build Our Wondrous World (12 Chapters)
const wwSidebar = wondrousWorldChapters.map(ch => ({
  num: ch.num,
  title: ch.title,
  filename: `wondrous-world-ch${ch.num}.html`
}));

wondrousWorldChapters.forEach((ch, idx) => {
  // 100% Genuine Physical NCERT Verbatim Questions
  const currentQs = ch.questions || [];

  const prevLink = idx > 0 ? { label: `Ch ${idx}: ${wondrousWorldChapters[idx - 1].title}`, filename: `wondrous-world-ch${idx}.html` } : null;
  const nextLink = idx < wondrousWorldChapters.length - 1 ? { label: `Ch ${idx + 2}: ${wondrousWorldChapters[idx + 1].title}`, filename: `wondrous-world-ch${idx + 2}.html` } : null;

  const pageHtml = generateChapterPage({
    subjectName: 'The World Around Us (EVS)',
    subjectSlug: 'evs',
    bookTitle: 'Our Wondrous World',
    bookSlug: 'wondrous-world',
    trackName: 'New NEP 2020 / NCF 2023',
    chNum: ch.num,
    totalChs: 12,
    chId: ch.id,
    title: ch.title,
    subtitle: ch.subtitle,
    concepts: ch.concepts,
    svg: ch.svg,
    questions: currentQs,
    cbq: ch.cbq,
    prevLink,
    nextLink,
    sidebarChapters: wwSidebar,
    canonicalUrl: `https://olympiadquiz.org/chapters-c3evs/wondrous-world-ch${ch.num}.html`
  });

  const outPath = path.join(outDir, `wondrous-world-ch${ch.num}.html`);
  fs.writeFileSync(outPath, pageHtml, 'utf8');
  console.log(`[Our Wondrous World] Built Chapter ${ch.num}: ${ch.title} -> ${currentQs.length} Qs (${pageHtml.length.toLocaleString()} bytes)`);
});

// 2. Build Looking Around (24 Chapters)
const laSidebar = lookingAroundChapters.map(ch => ({
  num: ch.num,
  title: ch.title,
  filename: `looking-around-ch${ch.num}.html`
}));

lookingAroundChapters.forEach((ch, idx) => {
  // 100% Genuine Physical NCERT Verbatim Questions
  const currentQs = ch.questions || [];

  const prevLink = idx > 0 ? { label: `Ch ${idx}: ${lookingAroundChapters[idx - 1].title}`, filename: `looking-around-ch${idx}.html` } : null;
  const nextLink = idx < lookingAroundChapters.length - 1 ? { label: `Ch ${idx + 2}: ${lookingAroundChapters[idx + 1].title}`, filename: `looking-around-ch${idx + 2}.html` } : null;

  const pageHtml = generateChapterPage({
    subjectName: 'Environmental Studies (EVS)',
    subjectSlug: 'evs',
    bookTitle: 'Looking Around (आस-पास)',
    bookSlug: 'looking-around',
    trackName: 'Classic CBSE Track',
    chNum: ch.num,
    totalChs: 24,
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
    canonicalUrl: `https://olympiadquiz.org/chapters-c3evs/looking-around-ch${ch.num}.html`
  });

  const outPath = path.join(outDir, `looking-around-ch${ch.num}.html`);
  fs.writeFileSync(outPath, pageHtml, 'utf8');
  console.log(`[Looking Around] Built Chapter ${ch.num}: ${ch.title} -> ${currentQs.length} Qs (${pageHtml.length.toLocaleString()} bytes)`);
});

console.log("All 36 Class 3 EVS Chapters Built Successfully in chapters-c3evs/ !");
