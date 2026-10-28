// scripts/verify-c9-chapter-by-chapter.js
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

const BENCHMARKS = {
  maths: [
    { ch: 1, title: 'Orienting Yourself — The Use of Coordinates', physicalQ: 12, cbq: 2 },
    { ch: 2, title: 'Introduction to Linear Polynomials', physicalQ: 10, cbq: 2 },
    { ch: 3, title: 'The World of Numbers', physicalQ: 10, cbq: 2 },
    { ch: 4, title: 'Exploring Algebraic Identities', physicalQ: 10, cbq: 2 },
    { ch: 5, title: 'I’m Up and Down, and Round and Round', physicalQ: 8, cbq: 2 },
    { ch: 6, title: 'Measuring Space — Perimeter and Area', physicalQ: 8, cbq: 2 },
    { ch: 7, title: 'The Mathematics of Maybe — Probability', physicalQ: 8, cbq: 2 },
    { ch: 8, title: 'Predicting What Comes Next — Sequences', physicalQ: 8, cbq: 2 },
    { ch: 9, title: 'Propositions and Their Converses', physicalQ: 8, cbq: 2 },
    { ch: 10, title: 'How Quantities Combine — Understanding Data', physicalQ: 8, cbq: 2 },
    { ch: 11, title: 'The World of Algorithms', physicalQ: 8, cbq: 2 },
    { ch: 12, title: 'Quadrilaterals', physicalQ: 8, cbq: 2 },
    { ch: 13, title: 'Two Variables, One Line', physicalQ: 8, cbq: 2 },
    { ch: 14, title: 'Surface Area and Volume', physicalQ: 15, cbq: 2 }
  ],
  science: [
    { ch: 1, title: 'Matter in Our Surroundings', physicalQ: 26, cbq: 2 },
    { ch: 2, title: 'Is Matter Around Us Pure?', physicalQ: 18, cbq: 2 },
    { ch: 3, title: 'Atoms and Molecules', physicalQ: 25, cbq: 2 },
    { ch: 4, title: 'Structure of the Atom', physicalQ: 32, cbq: 2 },
    { ch: 5, title: 'The Fundamental Unit of Life', physicalQ: 18, cbq: 2 },
    { ch: 6, title: 'Tissues', physicalQ: 25, cbq: 2 },
    { ch: 7, title: 'Motion', physicalQ: 30, cbq: 2 },
    { ch: 8, title: 'Force and Laws of Motion', physicalQ: 26, cbq: 2 },
    { ch: 9, title: 'Gravitation', physicalQ: 31, cbq: 2 },
    { ch: 10, title: 'Work and Energy', physicalQ: 33, cbq: 2 },
    { ch: 11, title: 'Sound', physicalQ: 38, cbq: 2 },
    { ch: 12, title: 'Improvement in Food Resources', physicalQ: 27, cbq: 2 }
  ],
  socialScience: [
    { ch: 1, title: 'The French Revolution', physicalQ: 6, cbq: 2 },
    { ch: 2, title: 'Socialism in Europe and the Russian Revolution', physicalQ: 6, cbq: 2 },
    { ch: 3, title: 'Nazism and the Rise of Hitler', physicalQ: 6, cbq: 2 },
    { ch: 4, title: 'Forest Society and Colonialism', physicalQ: 4, cbq: 2 },
    { ch: 5, title: 'Pastoralists in the Modern World', physicalQ: 4, cbq: 2 },
    { ch: 6, title: 'India – Size and Location', physicalQ: 4, cbq: 2 },
    { ch: 7, title: 'Physical Features of India', physicalQ: 6, cbq: 2 },
    { ch: 8, title: 'Drainage', physicalQ: 5, cbq: 2 },
    { ch: 9, title: 'Climate', physicalQ: 5, cbq: 2 },
    { ch: 10, title: 'Natural Vegetation and Wildlife', physicalQ: 5, cbq: 2 },
    { ch: 11, title: 'Population', physicalQ: 5, cbq: 2 },
    { ch: 12, title: 'What is Democracy? Why Democracy?', physicalQ: 4, cbq: 2 },
    { ch: 13, title: 'Constitutional Design', physicalQ: 4, cbq: 2 },
    { ch: 14, title: 'Electoral Politics', physicalQ: 4, cbq: 2 },
    { ch: 15, title: 'Working of Institutions', physicalQ: 4, cbq: 2 },
    { ch: 16, title: 'Democratic Rights', physicalQ: 4, cbq: 2 },
    { ch: 17, title: 'The Story of Village Palampur', physicalQ: 4, cbq: 2 },
    { ch: 18, title: 'People as Resource', physicalQ: 4, cbq: 2 },
    { ch: 19, title: 'Poverty as a Challenge', physicalQ: 4, cbq: 2 },
    { ch: 20, title: 'Food Security in India', physicalQ: 4, cbq: 2 }
  ],
  hindi: [
    { ch: 1, title: 'दो बैलों की कथा', physicalQ: 9, cbq: 2 },
    { ch: 2, title: 'ल्हासा की ओर', physicalQ: 7, cbq: 2 },
    { ch: 3, title: 'उपभोक्तावाद की संस्कृति', physicalQ: 6, cbq: 2 },
    { ch: 4, title: 'साँवले सपनों की याद', physicalQ: 5, cbq: 2 },
    { ch: 5, title: 'प्रेमचंद के फटे जूते', physicalQ: 5, cbq: 2 },
    { ch: 6, title: 'मेरे बचपन के दिन', physicalQ: 6, cbq: 2 },
    { ch: 7, title: 'साखियाँ एवं सबद', physicalQ: 10, cbq: 2 },
    { ch: 8, title: 'वाख', physicalQ: 7, cbq: 2 },
    { ch: 9, title: 'सवैये', physicalQ: 7, cbq: 2 },
    { ch: 10, title: 'कैदी और कोकिला', physicalQ: 8, cbq: 2 },
    { ch: 11, title: 'ग्राम श्री', physicalQ: 7, cbq: 2 },
    { ch: 12, title: 'मेघ आए', physicalQ: 7, cbq: 2 },
    { ch: 13, title: 'बच्चे काम पर जा रहे हैं', physicalQ: 7, cbq: 2 },
    { ch: 14, title: 'इस जल प्रलय में', physicalQ: 9, cbq: 2 },
    { ch: 15, title: 'मेरे संग की औरतें', physicalQ: 7, cbq: 2 },
    { ch: 16, title: 'रीढ़ की हड्डी', physicalQ: 8, cbq: 2 },
    { ch: 17, title: 'दुःख का अधिकार', physicalQ: 6, cbq: 2 },
    { ch: 18, title: 'एवरेस्ट : मेरी शिखर यात्रा', physicalQ: 6, cbq: 2 },
    { ch: 19, title: 'तुम कब जाओगे, अतिथि', physicalQ: 5, cbq: 2 },
    { ch: 20, title: 'वैज्ञानिक चेतना के वाहक : चंद्रशेखर वेंकट रामन्', physicalQ: 5, cbq: 2 },
    { ch: 21, title: 'शुक्रतारे के समान', physicalQ: 4, cbq: 2 },
    { ch: 22, title: 'पद', physicalQ: 4, cbq: 2 },
    { ch: 23, title: 'दोहे', physicalQ: 6, cbq: 2 },
    { ch: 24, title: 'गीत-अगीत', physicalQ: 5, cbq: 2 },
    { ch: 25, title: 'अग्नि पथ', physicalQ: 4, cbq: 2 },
    { ch: 26, title: 'नए इलाके में / खुशबू रचते हैं हाथ', physicalQ: 6, cbq: 2 },
    { ch: 27, title: 'गिल्लू', physicalQ: 8, cbq: 2 },
    { ch: 28, title: 'स्मृति', physicalQ: 6, cbq: 2 },
    { ch: 29, title: 'कल्लू कुम्हार की उनाकोटी', physicalQ: 5, cbq: 2 },
    { ch: 30, title: 'मेरा छोटा-सा निजी पुस्तकालय', physicalQ: 5, cbq: 2 }
  ],
  english: [
    { ch: 1, title: 'The Fun They Had', physicalQ: 11, cbq: 2 },
    { ch: 2, title: 'The Sound of Music', physicalQ: 9, cbq: 2 },
    { ch: 3, title: 'The Little Girl', physicalQ: 7, cbq: 2 },
    { ch: 4, title: 'A Truly Beautiful Mind', physicalQ: 8, cbq: 2 },
    { ch: 5, title: 'The Snake and the Mirror', physicalQ: 7, cbq: 2 },
    { ch: 6, title: 'My Childhood', physicalQ: 7, cbq: 2 },
    { ch: 7, title: 'Reach for the Top', physicalQ: 8, cbq: 2 },
    { ch: 8, title: 'Kathmandu', physicalQ: 7, cbq: 2 },
    { ch: 9, title: 'If I Were You', physicalQ: 7, cbq: 2 },
    { ch: 10, title: 'Poem 1: The Road Not Taken', physicalQ: 5, cbq: 2 },
    { ch: 11, title: 'Poem 2: Wind', physicalQ: 5, cbq: 2 },
    { ch: 12, title: 'Poem 3: Rain on the Roof', physicalQ: 5, cbq: 2 },
    { ch: 13, title: 'Poem 4: The Lake Isle of Innisfree', physicalQ: 5, cbq: 2 },
    { ch: 14, title: 'Poem 5: A Legend of the Northland', physicalQ: 5, cbq: 2 },
    { ch: 15, title: 'Poem 6: No Men Are Foreign', physicalQ: 5, cbq: 2 },
    { ch: 16, title: 'Poem 7: On Killing a Tree', physicalQ: 5, cbq: 2 },
    { ch: 17, title: 'Poem 8: A Slumber Did My Spirit Seal', physicalQ: 4, cbq: 2 },
    { ch: 18, title: 'Moments Ch 1: The Lost Child', physicalQ: 5, cbq: 2 },
    { ch: 19, title: 'Moments Ch 2: The Adventures of Toto', physicalQ: 5, cbq: 2 },
    { ch: 20, title: 'Moments Ch 3: Iswaran the Storyteller', physicalQ: 5, cbq: 2 },
    { ch: 21, title: 'Moments Ch 4: In the Kingdom of Fools', physicalQ: 5, cbq: 2 },
    { ch: 22, title: 'Moments Ch 5: The Happy Prince', physicalQ: 5, cbq: 2 },
    { ch: 23, title: 'Moments Ch 6: Weathering the Storm in Ersama', physicalQ: 5, cbq: 2 },
    { ch: 24, title: 'Moments Ch 7: The Last Leaf', physicalQ: 5, cbq: 2 },
    { ch: 25, title: 'Moments Ch 8: A House Is Not a Home', physicalQ: 5, cbq: 2 },
    { ch: 26, title: 'Moments Ch 9: The Beggar', physicalQ: 6, cbq: 2 }
  ]
};

const DIRS = {
  maths: 'chapters-c9m',
  science: 'chapters-c9s',
  socialScience: 'chapters-c9sst',
  hindi: 'chapters-c9h',
  english: 'chapters-c9e'
};

let grandPhysicalBenchmark = 0;
let grandActualPhysical = 0;
let grandCBQs = 0;
let grandShortage = 0;
let totalMismatches = 0;

for (const [subj, benchList] of Object.entries(BENCHMARKS)) {
  const dirPath = path.join(ROOT, DIRS[subj]);
  console.log(`\n================== ${subj.toUpperCase()} ==================`);
  let subjTarget = 0;
  let subjActual = 0;
  let subjCBQ = 0;
  let subjShortage = 0;

  for (const item of benchList) {
    const file = `ch${item.ch}.html`;
    const filePath = path.join(dirPath, file);
    if (!fs.existsSync(filePath)) {
      console.error(`MISSING FILE: ${subj}/${file}`);
      totalMismatches++;
      continue;
    }
    const html = fs.readFileSync(filePath, 'utf8');
    const qCount = (html.match(/<div class="q-card"/g) || []).length;
    const cbqCount = (html.match(/<div class="cbq-card"/g) || []).length;

    subjTarget += item.physicalQ;
    subjActual += qCount;
    subjCBQ += cbqCount;

    const diff = item.physicalQ - qCount;
    if (diff > 0) {
      subjShortage += diff;
      totalMismatches++;
      console.log(`[SHORTAGE] ${subj} ch${item.ch} (${item.title}): Target ${item.physicalQ}, Found ${qCount} (Missing: ${diff})`);
    }
  }

  grandPhysicalBenchmark += subjTarget;
  grandActualPhysical += subjActual;
  grandCBQs += subjCBQ;
  grandShortage += subjShortage;

  console.log(`Subject Summary for ${subj}: Target=${subjTarget}, Actual=${subjActual}, CBQs=${subjCBQ}, Shortage=${subjShortage}`);
}

console.log('\n========================================================================');
console.log('CLASS 9 VERIFICATION TOTALS:');
console.log(`Physical Benchmark Required : ${grandPhysicalBenchmark}`);
console.log(`Actual Physical Questions   : ${grandActualPhysical}`);
console.log(`Competency-Based (CBQs)     : ${grandCBQs}`);
console.log(`Total Solutions on Site     : ${grandActualPhysical + grandCBQs}`);
console.log(`Net Shortage                : ${grandShortage}`);
console.log(`Total Mismatch Incidents    : ${totalMismatches}`);
console.log('========================================================================');
