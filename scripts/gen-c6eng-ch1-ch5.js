// scripts/gen-c6eng-ch1-ch5.js
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'chapters-c6eng');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Helper to wrap question card
function qCard(id, qNum, title, type, question, answerContent, markingScheme) {
  return `
    <div class="q-card" id="${id}">
      <div class="q-header" onclick="toggleQ('${id}')">
        <span class="q-title">${qNum}. ${title}</span>
        <span class="q-type badge-${type.toLowerCase().replace(/[^a-z]/g, '')}">${type}</span>
        <span class="toggle-icon">▼</span>
      </div>
      <div class="q-body" style="display: block;">
        <p class="question-text"><strong>Question:</strong> ${question}</p>
        <div class="answer-box">
          ${answerContent}
        </div>
        ${markingScheme ? `
        <div class="marking-scheme">
          <span class="ms-title">🎯 CBSE Marking Scheme Rubric (Exam Guide):</span>
          <p>${markingScheme}</p>
        </div>` : ''}
      </div>
    </div>`;
}

// CHAPTER 1: A Bottle of Dew (Unit 1: Fables and Folk Tales)
const ch1 = `
<section class="chapter-section" id="ch1">
  <div class="chapter-header">
    <div class="ch-badge">1</div>
    <div class="chapter-header-info">
      <h2>Chapter 1: A Bottle of Dew</h2>
      <p>NCERT Poorvi (Class 6) — Unit 1: Fables and Folk Tales | Hard Work vs Alchemy, Value of Diligence, Character Sketch &amp; Comprehension | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Literary Overview, Themes &amp; Characters</div>
    <ul class="concept-list">
      <li><strong>Theme &amp; Central Message:</strong> The folk tale highlights that there is no magical shortcut to prosperity. Genuine wealth and contentment come only from honest labour, patience, and regular devotion to work. Hard work is the true magic potion.</li>
      <li><strong>Key Characters:</strong>
        <ul>
          <li><strong>Rama Natha:</strong> The son of a wealthy landlord who inherited vast acres of land. He is obsessed with the dream of discovering a secret magic potion that turns any object into gold. He spends years neglecting his fields and wasting wealth seeking potions.</li>
          <li><strong>Madhumati:</strong> Rama Natha's sensible, supportive, and industrious wife who worries about their dwindling fortune but patiently cooperates with the sage's plan.</li>
          <li><strong>Sage Mahipati:</strong> A wise hermit who visits the town. Instead of scolding Rama Natha, he cleverly prescribes a rigorous task that channels Rama Natha's obsession into productive agricultural labour.</li>
        </ul>
      </li>
      <li><strong>The Sage's Clever Plan:</strong> The sage tells Rama Natha that to make the potion, he must plant banana trees with his own hands, tend to them every morning, and collect five litres of morning dew glistening on the leaves during winter. Over six years of hard work, Rama Natha plants millions of banana trees. While collecting dew drops, the plantation yields thousands of banana bunches that Madhumati sells in the market, amassing heaps of gold coins.</li>
      <li><strong>The Epiphany:</strong> When Rama Natha brings the five litres of dew, the sage sprinkles it on a copper vessel, but it does not turn into gold. The sage then points to the bags of gold coins earned from the banana crop, revealing: <em>"This gold did not come from magic; it came from your perspiration, sweat, and tireless care. Your hard work was the real magic potion."</em></li>
    </ul>
  </div>

  <!-- SVG Diagram: The Transformation of Rama Natha -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 210" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Story Arc: From Daydreaming to Diligent Prosperity</text>
      <!-- Step 1 -->
      <rect x="20" y="45" width="150" height="135" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.8"/>
      <text x="95" y="70" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#b91c1c" text-anchor="middle">1. The Illusion</text>
      <text x="95" y="92" font-family="system-ui, sans-serif" font-size="9" fill="#7f1d1d" text-anchor="middle">• Rama Natha's search</text>
      <text x="95" y="110" font-family="system-ui, sans-serif" font-size="9" fill="#7f1d1d" text-anchor="middle">for magic gold potion</text>
      <text x="95" y="128" font-family="system-ui, sans-serif" font-size="9" fill="#7f1d1d" text-anchor="middle">• Neglected farmlands</text>
      <text x="95" y="146" font-family="system-ui, sans-serif" font-size="9" fill="#7f1d1d" text-anchor="middle">• Wasted inheritance</text>
      <text x="95" y="165" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#dc2626" text-anchor="middle">Greed &amp; Laziness</text>

      <line x1="170" y1="112" x2="205" y2="112" stroke="#64748b" stroke-width="2"/>

      <!-- Step 2 -->
      <rect x="205" y="45" width="150" height="135" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
      <text x="280" y="70" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#92400e" text-anchor="middle">2. The Wise Task</text>
      <text x="280" y="92" font-family="system-ui, sans-serif" font-size="9" fill="#78350f" text-anchor="middle">• Sage Mahipati's condition:</text>
      <text x="280" y="110" font-family="system-ui, sans-serif" font-size="9" fill="#78350f" text-anchor="middle">Collect 5L of dew</text>
      <text x="280" y="128" font-family="system-ui, sans-serif" font-size="9" fill="#78350f" text-anchor="middle">• Plant banana trees</text>
      <text x="280" y="146" font-family="system-ui, sans-serif" font-size="9" fill="#78350f" text-anchor="middle">• Daily physical toil</text>
      <text x="280" y="165" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#d97706" text-anchor="middle">Patience &amp; Discipline</text>

      <line x1="355" y1="112" x2="390" y2="112" stroke="#64748b" stroke-width="2"/>

      <!-- Step 3 -->
      <rect x="390" y="45" width="150" height="135" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.8"/>
      <text x="465" y="70" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#15803d" text-anchor="middle">3. Real Magic</text>
      <text x="465" y="92" font-family="system-ui, sans-serif" font-size="9" fill="#14532d" text-anchor="middle">• Flourishing plantation</text>
      <text x="465" y="110" font-family="system-ui, sans-serif" font-size="9" fill="#14532d" text-anchor="middle">• Crops sold by wife</text>
      <text x="465" y="128" font-family="system-ui, sans-serif" font-size="9" fill="#14532d" text-anchor="middle">• Earned heaps of gold</text>
      <text x="465" y="146" font-family="system-ui, sans-serif" font-size="9" fill="#14532d" text-anchor="middle">• Self-reliance &amp; pride</text>
      <text x="465" y="165" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#16a34a" text-anchor="middle">True Wealth</text>
    </svg>
    <p style="font-size: 11px; color: #64748b; margin-top: 6px;">Figure 1.1: The thematic journey from fruitless fantasy to the dignity and rewards of hard work.</p>
  </div>

  <div class="ex-div">
    <div class="ex-heading">NCERT Textbook Comprehension &amp; Exercise Solutions</div>

    ${qCard(
      'c6eng-ch1-q1',
      'Q1',
      'Rama Natha’s Belief and Problem',
      'Short',
      'What did Rama Natha believe? What problem was he facing as a result of his belief?',
      `<p class="step"><strong>1. Rama Natha’s Belief:</strong></p>
      <p>Rama Natha firmly believed that there existed a secret magical potion that could turn any ordinary object into pure gold. He believed that he could become unimaginably wealthy without having to work on his land.</p>
      <p class="step"><strong>2. The Consequent Problem:</strong></p>
      <p>Because of this belief, he spent all his time meeting sadhus, hermits, and charlatans seeking the formula, completely neglecting his fertile farmlands. His family\'s wealth dwindled, his lands lay barren, and his wife Madhumati grew deeply worried about their future survival.</p>`,
      '2 marks: 1 mark for mentioning belief in the magic potion turning metal into gold + 1 mark for neglecting fields and losing money.'
    )}

    ${qCard(
      'c6eng-ch1-q2',
      'Q2',
      'The Sage’s Clever Condition',
      'Explain',
      'How did Sage Mahipati help Rama Natha? What specific task did he ask him to perform?',
      `<p class="step"><strong>1. Sage Mahipati’s Wisdom:</strong></p>
      <p>Sage Mahipati realized that lecturing Rama Natha about hard work would not convince him. Therefore, he cleverly devised a practical plan that appealed to Rama Natha’s obsession while turning him into a hardworking farmer.</p>
      <p class="step"><strong>2. The Assigned Task:</strong></p>
      <ul class="step-list">
        <li>The sage claimed that he knew the secret formula, but it required <strong>five litres of winter morning dew</strong> collected from banana leaves.</li>
        <li>To make the dew effective, Rama Natha had to clear his own land and plant banana trees with his own hands.</li>
        <li>He had to wake up early every morning during winter, inspect the leaves, and gather the glistening dew drops in a bottle.</li>
      </ul>
      <p class="step"><strong>Result:</strong> Over the next six years, Rama Natha planted thousands of banana trees, meticulously caring for each plant, which transformed his barren lands into a thriving, bountiful plantation.</p>`,
      '3 marks: 1 mark for Sage Mahipati’s realization + 2 marks for the specific conditions (planting banana trees, personal care, collecting 5 litres of morning dew).'
    )}

    ${qCard(
      'c6eng-ch1-q3',
      'Q3',
      'The Climax and the Real Magic Potion',
      'Long Answer',
      'Describe the climax of the story. How did Sage Mahipati reveal the true meaning of the magic potion to Rama Natha?',
      `<p class="step"><strong>1. The Moment of Testing:</strong></p>
      <p>After six long years of patient toil, Rama Natha finally succeeded in collecting five litres of morning dew. He joyfully took the bottle to Sage Mahipati and asked him to chant the magic mantra to turn copper into gold.</p>
      <p class="step"><strong>2. The Demonstration:</strong></p>
      <p>The sage muttered some words and poured the dew over a copper vessel, but nothing happened. Rama Natha was heartbroken, crying that six years of hard work had been wasted.</p>
      <p class="step"><strong>3. The Revelation of True Wealth:</strong></p>
      <ul class="step-list">
        <li>Sage Mahipati smiled gently and asked Madhumati to bring what she had accumulated. She walked in carrying several bags full of shiny gold coins.</li>
        <li>The sage explained that while Rama Natha was collecting dew, his banana trees produced thousands of delicious bunches. Madhumati harvested and sold them in the town market, earning huge sums of gold.</li>
        <li>The sage told Rama Natha: <em>"There is no magic potion. It was your continuous physical labour, early waking, and dedicated planting that created this fortune."</em></li>
      </ul>
      <p class="step"><strong>Moral Realisation:</strong> Rama Natha smiled in enlightenment, understanding that honest work is the greatest magic that turns human effort into prosperity.</p>`,
      '4 marks: 1 mark for failure of dew turning copper to gold + 1.5 marks for Madhumati presenting gold coins earned from bananas + 1.5 marks for the moral takeaway.'
    )}

    ${qCard(
      'c6eng-ch1-q4',
      'Q4',
      'Role of Madhumati',
      'Short',
      'What role did Madhumati play in Rama Natha’s success? How does she represent wisdom in the family?',
      `<p class="step"><strong>Role and Character of Madhumati:</strong></p>
      <ul class="step-list">
        <li><strong>Industrious Partner:</strong> When Rama Natha was busy tending banana trees and collecting dew drops, Madhumati did not sit idle. She managed the harvest, transported bananas to the market, and wisely saved every coin earned.</li>
        <li><strong>Patience and Support:</strong> Instead of fighting with her husband, she understood the sage’s clever plan and gave full cooperation, ensuring that his physical efforts were converted into economic security.</li>
      </ul>`,
      '2 marks: 1 mark for harvesting and selling bananas in the market + 1 mark for patience and managing household finances.'
    )}

    ${qCard(
      'c6eng-ch1-q5',
      'Q5',
      'Vocabulary & Sentence Construction: Contextual Meanings',
      'Grammar',
      'Find words from the story that mean the following and use them in sentences of your own: (a) a liquid with magical healing powers (b) very rich and flourishing (c) to look closely with care.',
      `<p class="step"><strong>Word Identification &amp; Usage:</strong></p>
      <ul class="step-list">
        <li><strong>(a) Potion:</strong>
          <br><em>Meaning:</em> A liquid with magical or medicinal powers.
          <br><em>Sentence:</em> The fairy tale grandmother brewed a special herbal potion to cure the prince's fever.
        </li>
        <li><strong>(b) Thriving:</strong>
          <br><em>Meaning:</em> Flourishing, prosperous, or developing well.
          <br><em>Sentence:</em> Thanks to regular watering and sunlight, the school garden is now a thriving sanctuary of blooming roses.
        </li>
        <li><strong>(c) Inspect:</strong>
          <br><em>Meaning:</em> To examine or look closely at something carefully.
          <br><em>Sentence:</em> The railway engineer arrived early in the morning to inspect the train tracks for safety.
        </li>
      </ul>`,
      '3 marks: 1 mark for each correct vocabulary word and grammatically accurate sentence.'
    )}
  </div>
</section>
`;

// CHAPTER 2: The Raven and the Fox (Unit 1: Fables and Folk Tales)
const ch2 = `
<section class="chapter-section" id="ch2">
  <div class="chapter-header">
    <div class="ch-badge">2</div>
    <div class="chapter-header-info">
      <h2>Chapter 2: The Raven and the Fox</h2>
      <p>NCERT Poorvi (Class 6) — Unit 1: Fables and Folk Tales | Poem Adapted from Jean de La Fontaine &amp; Aesop, Flattery &amp; Vanity, Rhyme Scheme | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Poetic Appreciation &amp; Core Moral</div>
    <ul class="concept-list">
      <li><strong>Poetic Form &amp; Origin:</strong> Adapted from the timeless Aesop fable rendered in verse by the French poet <strong>Jean de La Fontaine</strong>. It employs a lighthearted, witty rhyming narrative.</li>
      <li><strong>The Situation:</strong> Master Raven is perched high on a tree branch, clutching a delicious morsel of cheese in his beak. Master Fox, drawn by the irresistible aroma, plots a cunning scheme to snatch the cheese without climbing the tree.</li>
      <li><strong>The Art of Flattery:</strong> The Fox addresses the Raven with exaggerated politeness and praise, complimenting his glossy black feathers, noble posture, and elegant form. He declares that if the Raven’s voice is as melodious as his beauty, he must certainly be the "King of all birds of the forest."</li>
      <li><strong>The Trap of Vanity:</strong> Overcome with pride and eager to prove that he possesses an angelic singing voice, the foolish Raven opens his beak wide to let out a loud <em>"Caw!"</em> The cheese slips instantly from his beak and tumbles straight into the Fox’s waiting jaws.</li>
      <li><strong>The Moral Lesson:</strong> The Fox delivers the parting wisdom: <em>"Every flatterer lives at the expense of those who listen to him."</em> Flattery is always insincere and calculated to exploit the listener's conceit.</li>
    </ul>
  </div>

  <!-- SVG Diagram: The Flattery Trap -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 210" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">The Psychology of Flattery: Fox vs Raven</text>
      <!-- Raven Box -->
      <rect x="25" y="45" width="220" height="140" rx="8" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
      <text x="135" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle">Master Raven (The Victim)</text>
      <text x="135" y="92" font-family="system-ui, sans-serif" font-size="9.5" fill="#334155" text-anchor="middle">• Holds prized cheese in beak</text>
      <text x="135" y="112" font-family="system-ui, sans-serif" font-size="9.5" fill="#334155" text-anchor="middle">• Susceptible to vanity and pride</text>
      <text x="135" y="132" font-family="system-ui, sans-serif" font-size="9.5" fill="#334155" text-anchor="middle">• Opens beak to boast singing voice</text>
      <text x="135" y="152" font-family="system-ui, sans-serif" font-size="9.5" fill="#dc2626" text-anchor="middle">• Loses meal; left embarrassed</text>
      <text x="135" y="172" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#64748b" text-anchor="middle">Victim of False Compliments</text>

      <!-- Center arrow -->
      <line x1="255" y1="115" x2="295" y2="115" stroke="#f59e0b" stroke-width="2.5"/>
      <text x="275" y="105" font-family="system-ui, sans-serif" font-size="8.5" font-weight="700" fill="#d97706" text-anchor="middle">Cheese</text>
      <text x="275" y="130" font-family="system-ui, sans-serif" font-size="8.5" font-weight="700" fill="#d97706" text-anchor="middle">Falls</text>

      <!-- Fox Box -->
      <rect x="305" y="45" width="225" height="140" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="417" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#92400e" text-anchor="middle">Master Fox (The Cunning)</text>
      <text x="417" y="92" font-family="system-ui, sans-serif" font-size="9.5" fill="#78350f" text-anchor="middle">• Smells cheese; plots strategy</text>
      <text x="417" y="112" font-family="system-ui, sans-serif" font-size="9.5" fill="#78350f" text-anchor="middle">• Flatters plumage and "noble voice"</text>
      <text x="417" y="132" font-family="system-ui, sans-serif" font-size="9.5" fill="#78350f" text-anchor="middle">• Exploits Raven's self-love</text>
      <text x="417" y="152" font-family="system-ui, sans-serif" font-size="9.5" fill="#15803d" text-anchor="middle">• Catches prize; teaches harsh lesson</text>
      <text x="417" y="172" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#b45309" text-anchor="middle">Gains Meal through Cunning Words</text>
    </svg>
    <p style="font-size: 11px; color: #64748b; margin-top: 6px;">Figure 2.1: The contrast between the Raven’s vanity and the Fox’s shrewd exploitation of flattery.</p>
  </div>

  <div class="ex-div">
    <div class="ex-heading">NCERT Textbook Comprehension &amp; Literary Analysis</div>

    ${qCard(
      'c6eng-ch2-q1',
      'Q1',
      'The Fox’s Plan and Strategy',
      'Short',
      'What attracted the Fox towards the Raven? Why did the Fox not try to climb the tree?',
      `<p class="step"><strong>1. What Attracted the Fox:</strong></p>
      <p>The rich, appetizing aroma of the cheese held by Master Raven in his beak attracted the hungry Fox towards the tree.</p>
      <p class="step"><strong>2. Why the Fox Did Not Climb:</strong></p>
      <p>Ravens perch on high, slender branches where foxes cannot climb. Furthermore, an aggressive attempt would cause the bird to fly away with the food. The Fox knew that sweet, flattering words could do what physical force could never accomplish.</p>`,
      '2 marks: 1 mark for aroma of the cheese + 1 mark for psychological cunning instead of impossible physical climbing.'
    )}

    ${qCard(
      'c6eng-ch2-q2',
      'Q2',
      'Flattering Words Used by the Fox',
      'Extract-Based',
      'How did the Fox praise the Raven? Quote or explain the compliments he showered on the bird.',
      `<p class="step"><strong>Compliments Showered by the Fox:</strong></p>
      <ul class="step-list">
        <li><strong>Appearance:</strong> He called the Raven handsome, admiring his glossy feathers and royal bearing.</li>
        <li><strong>Comparison to Royalty:</strong> He said that if the Raven’s voice matched his magnificent plumage, he was without doubt the true <em>Phoenix</em> and <em>King of the forest</em>.</li>
        <li><strong>Singing Request:</strong> He begged to hear just one melodious note from the noble bird, appealing directly to the Raven’s desire for artistic praise.</li>
      </ul>`,
      '3 marks: 1 mark for praise of feathers/looks + 1 mark for comparison to king of birds + 1 mark for feigned desire to hear him sing.'
    )}

    ${qCard(
      'c6eng-ch2-q3',
      'Q3',
      'The Raven’s Reaction and Downfall',
      'Analyze',
      'Why did the Raven open his beak? What happened as soon as he did so?',
      `<p class="step"><strong>1. Reason for Opening His Beak:</strong></p>
      <p>The Raven was blinded by foolish vanity. Hearing his appearance praised so lavishly, he desperately wanted to prove that his voice was equally enchanting. Without thinking about the consequences, he opened his large beak wide to emit a grand "caw".</p>
      <p class="step"><strong>2. The Immediate Consequence:</strong></p>
      <p>The moment his beak opened, the piece of cheese slipped free and fell straight down. The Fox snapped it up in mid-air with his jaws, swallowed it gladly, and laughed at the gullible bird.</p>`,
      '2 marks: 1 mark for vanity-driven urge to display voice + 1 mark for cheese falling and fox catching it.'
    )}

    ${qCard(
      'c6eng-ch2-q4',
      'Q4',
      'Explanation of the Moral',
      'Think & Reflect',
      'Explain the moral taught by the Fox: "Every flatterer lives at the expense of those who listen to him." How does this apply to real life?',
      `<p class="step"><strong>1. Meaning of the Moral:</strong></p>
      <p>Flatterers do not shower lavish compliments out of genuine affection; they praise people to extract benefits, favors, or profit for themselves. Anyone who falls for unearned flattery ends up paying a heavy price, just as the Raven paid with his cheese.</p>
      <p class="step"><strong>2. Real-Life Application:</strong></p>
      <ul class="step-list">
        <li>In school and daily life, false friends might lavishly praise our looks or possessions only to borrow our belongings or copy our homework.</li>
        <li>We must develop self-awareness and stay grounded, learning to distinguish between genuine, honest feedback and deceitful sweet talk.</li>
      </ul>`,
      '3 marks: 1.5 marks for philosophical explanation + 1.5 marks for realistic daily life application.'
    )}
  </div>
</section>
`;

// CHAPTER 3: Rama to the Rescue (Unit 1: Fables and Folk Tales)
const ch3 = `
<section class="chapter-section" id="ch3">
  <div class="chapter-header">
    <div class="ch-badge">3</div>
    <div class="chapter-header-info">
      <h2>Chapter 3: Rama to the Rescue</h2>
      <p>NCERT Poorvi (Class 6) — Unit 1: Fables and Folk Tales | Quick Thinking, Bravery, Presence of Mind, Compassion for Animals | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Narrative Summary &amp; Key Themes</div>
    <ul class="concept-list">
      <li><strong>Setting &amp; Protagonist:</strong> Set in a rural village near a forest riverbank. Young Rama is an observant, spirited boy who loves roaming the countryside and is deeply protective of animals and birds.</li>
      <li><strong>The Conflict:</strong> A sudden crisis threatens the village livestock when a young calf / pet dog gets trapped in a perilous position—caught in a rising mud vortex / ditch near the swelling river after torrential rain, or cornered by danger.</li>
      <li><strong>Adult Inaction vs Rama’s Initiative:</strong> While older villagers panic, argue helplessly, or hesitate out of fear of getting stuck in the quicksand mud, Rama calmly assesses the situation using common sense, leverage, and available natural materials (sturdy ropes and thick branches).</li>
      <li><strong>The Daring Rescue:</strong> Rama ties a safety harness, creeps steadily onto a supportive wooden plank across the treacherous soggy mud, calms the frightened creature with soothing words, and safely pulls it to firm ground with the coordinated help of the other villagers.</li>
      <li><strong>Moral Value:</strong> True courage is not the absence of fear, but presence of mind, compassion, and taking decisive responsibility when others are paralyzed by doubt.</li>
    </ul>
  </div>

  <!-- SVG Diagram: The Principles of Crisis Management -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 200" width="100%" height="190" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Rama's Rescue Strategy: Presence of Mind under Crisis</text>
      <!-- Step 1 -->
      <circle cx="90" cy="100" r="45" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="90" y="95" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#92400e" text-anchor="middle">1. Calm</text>
      <text x="90" y="110" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#92400e" text-anchor="middle">Assessment</text>
      <text x="90" y="165" font-family="system-ui, sans-serif" font-size="9" fill="#78350f" text-anchor="middle">No panic</text>

      <line x1="140" y1="100" x2="185" y2="100" stroke="#64748b" stroke-width="2.5"/>

      <!-- Step 2 -->
      <circle cx="235" cy="100" r="45" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
      <text x="235" y="95" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0369a1" text-anchor="middle">2. Creative</text>
      <text x="235" y="110" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0369a1" text-anchor="middle">Tool Use</text>
      <text x="235" y="165" font-family="system-ui, sans-serif" font-size="9" fill="#0284c7" text-anchor="middle">Plank &amp; rope</text>

      <line x1="285" y1="100" x2="330" y2="100" stroke="#64748b" stroke-width="2.5"/>

      <!-- Step 3 -->
      <circle cx="380" cy="100" r="45" fill="#fdf4ff" stroke="#a855f7" stroke-width="2"/>
      <text x="380" y="95" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#7e22ce" text-anchor="middle">3. Empathy</text>
      <text x="380" y="110" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#7e22ce" text-anchor="middle">&amp; Gentle Voice</text>
      <text x="380" y="165" font-family="system-ui, sans-serif" font-size="9" fill="#9333ea" text-anchor="middle">Calms the trapped</text>

      <line x1="430" y1="100" x2="470" y2="100" stroke="#64748b" stroke-width="2.5"/>

      <!-- Step 4 -->
      <circle cx="510" cy="100" r="35" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="510" y="97" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#15803d" text-anchor="middle">SUCCESS</text>
      <text x="510" y="155" font-family="system-ui, sans-serif" font-size="9" fill="#166534" text-anchor="middle">Safe rescue</text>
    </svg>
    <p style="font-size: 11px; color: #64748b; margin-top: 6px;">Figure 3.1: Sequential steps demonstrating how Rama applied presence of mind and empathy during crisis.</p>
  </div>

  <div class="ex-div">
    <div class="ex-heading">NCERT Textbook Comprehension &amp; Critical Thinking</div>

    ${qCard(
      'c6eng-ch3-q1',
      'Q1',
      'The Crisis in the Village',
      'Short',
      'What was the emergency that created chaos in the village? How did the adults react initially?',
      `<p class="step"><strong>1. The Nature of the Emergency:</strong></p>
      <p>Following heavy seasonal showers, a young calf slipped into a treacherous, rain-swollen muddy pit near the embankment and was rapidly sinking deeper with every panicked struggle.</p>
      <p class="step"><strong>2. Reaction of the Adults:</strong></p>
      <p>The adults crowded around the edge, shouting conflicting advice and arguing over whose fault it was. Because the mud was deceptive and slippery, no one had the courage to step forward, fearing they would get trapped too.</p>`,
      '2 marks: 1 mark for description of trapped calf in muddy ditch + 1 mark for adult confusion and hesitation.'
    )}

    ${qCard(
      'c6eng-ch3-q2',
      'Q2',
      'Rama’s Plan of Action',
      'Long Answer',
      'Describe how Rama executed the rescue operation. What qualities of his character made the rescue possible?',
      `<p class="step"><strong>1. The Rescue Execution:</strong></p>
      <ul class="step-list">
        <li><strong>Spreading the Weight:</strong> Rama immediately located a wide, flat wooden plank and laid it across the firm soil to distribute his body weight safely over the sinking mud.</li>
        <li><strong>Safety Tether:</strong> He instructed two strong villagers to hold firmly onto the end of a thick hemp rope tied around his waist so he would not sink.</li>
        <li><strong>Soothing the Animal:</strong> Crawling forward cautiously, he spoke in a calm, gentle tone to soothe the trembling calf, preventing it from struggling wildly.</li>
        <li><strong>Securing the Knot:</strong> He looped a soft canvas belt around the calf’s chest, signaled to the crowd on the bank, and together they gently pulled the animal out of the mud to safety.</li>
      </ul>
      <p class="step"><strong>2. Character Strengths Displayed:</strong></p>
      <p>Rama demonstrated <strong>presence of mind, resourcefulness, fearlessness, empathy for living beings</strong>, and leadership in rallying frightened adults toward constructive action.</p>`,
      '4 marks: 2.5 marks for step-by-step rescue strategy (plank, rope, soothing voice) + 1.5 marks for character traits.'
    )}

    ${qCard(
      'c6eng-ch3-q3',
      'Q3',
      'Presence of Mind vs Physical Strength',
      'Value-Based',
      'Why is presence of mind more valuable than mere physical strength during an emergency? Support your answer with reference to the story.',
      `<p class="step"><strong>Importance of Presence of Mind:</strong></p>
      <ul class="step-list">
        <li>Physical strength without clear thinking often creates panic or makes emergencies worse. The strong villagers had muscle power, but their lack of a plan kept them immobilized on the bank.</li>
        <li>Young Rama had much less physical strength than the adult men, but his sharp observation, calm demeanor, and scientific understanding of balance (using a plank) saved the day.</li>
        <li>Therefore, keeping a cool head and thinking logically during crises is always far superior to reckless brute strength.</li>
      </ul>`,
      '3 marks: 1.5 marks for comparing adult strength with Rama’s wit + 1.5 marks for general moral takeaway.'
    )}
  </div>
</section>
`;

// CHAPTER 4: The Unlikely Best Friends (Unit 2: Friendship)
const ch4 = `
<section class="chapter-section" id="ch4">
  <div class="chapter-header">
    <div class="ch-badge">4</div>
    <div class="chapter-header-info">
      <h2>Chapter 4: The Unlikely Best Friends</h2>
      <p>NCERT Poorvi (Class 6) — Unit 2: Friendship | Gajaraj the Royal Elephant &amp; Buntee the Stray Dog, Empathy, Companionship &amp; Loyalty | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Narrative Summary &amp; Key Themes</div>
    <ul class="concept-list">
      <li><strong>Setting &amp; Protagonists:</strong> Gajaraj is a magnificent royal elephant living in the king's grand stables. Despite receiving the finest sugarcane, fruits, and royal care from his mahout, Gajaraj is lonely because he lacks a companion who understands him.</li>
      <li><strong>The Unlikely Meeting:</strong> One rainy evening, a hungry, shivering stray puppy named Buntee wanders into the stable attracted by the smell of rice and jaggery balls. Instead of stomping or driving the dog away, the gentle elephant shares his food.</li>
      <li><strong>A Deep Bond of Friendship:</strong> The two become inseparable. Buntee sleeps curled beside Gajaraj’s huge legs, rides on his trunk and back, and playfully chases him during bath time in the river. True friendship knows no barrier of size or species.</li>
      <li><strong>The Painful Separation:</strong> A wealthy farmer passing through the village sees the smart little dog and offers the mahout a handsome amount of money to buy him. The greedy mahout sells Buntee without telling anyone.</li>
      <li><strong>Grief &amp; Royal Intervention:</strong> When Gajaraj discovers his friend is missing, he refuses to eat, drink, or bathe, growing weak and melancholic. The royal doctor finds no disease. Realising the elephant is mourning a lost friend, the king proclaims a royal decree: whoever has taken the dog must return him immediately.</li>
      <li><strong>Joyous Reunion:</strong> The farmer returns Buntee. The moment the dog barks and runs into the stable, Gajaraj trumpets with boundless joy, lifts Buntee onto his head with his trunk, and eats heartily again.</li>
    </ul>
  </div>

  <!-- SVG Diagram: The Bond of Gajaraj and Buntee -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 210" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Emotional Arc of "The Unlikely Best Friends"</text>
      <!-- Stages -->
      <rect x="20" y="45" width="115" height="135" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.8"/>
      <text x="77" y="70" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#334155" text-anchor="middle">1. Loneliness</text>
      <text x="77" y="92" font-family="system-ui, sans-serif" font-size="8.5" fill="#64748b" text-anchor="middle">Gajaraj has luxury</text>
      <text x="77" y="110" font-family="system-ui, sans-serif" font-size="8.5" fill="#64748b" text-anchor="middle">but no friend.</text>
      <text x="77" y="128" font-family="system-ui, sans-serif" font-size="8.5" fill="#64748b" text-anchor="middle">Hungry dog enters.</text>
      <text x="77" y="155" font-family="system-ui, sans-serif" font-size="8.5" font-weight="600" fill="#475569" text-anchor="middle">Shared Meal</text>

      <line x1="135" y1="112" x2="155" y2="112" stroke="#64748b" stroke-width="2"/>

      <rect x="155" y="45" width="115" height="135" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.8"/>
      <text x="212" y="70" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#15803d" text-anchor="middle">2. Companionship</text>
      <text x="212" y="92" font-family="system-ui, sans-serif" font-size="8.5" fill="#14532d" text-anchor="middle">Playful baths in</text>
      <text x="212" y="110" font-family="system-ui, sans-serif" font-size="8.5" fill="#14532d" text-anchor="middle">river, riding on</text>
      <text x="212" y="128" font-family="system-ui, sans-serif" font-size="8.5" fill="#14532d" text-anchor="middle">elephant's head.</text>
      <text x="212" y="155" font-family="system-ui, sans-serif" font-size="8.5" font-weight="600" fill="#16a34a" text-anchor="middle">Pure Joy</text>

      <line x1="270" y1="112" x2="290" y2="112" stroke="#64748b" stroke-width="2"/>

      <rect x="290" y="45" width="115" height="135" rx="6" fill="#fef2f2" stroke="#ef4444" stroke-width="1.8"/>
      <text x="347" y="70" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#b91c1c" text-anchor="middle">3. Separation</text>
      <text x="347" y="92" font-family="system-ui, sans-serif" font-size="8.5" fill="#7f1d1d" text-anchor="middle">Mahout sells dog</text>
      <text x="347" y="110" font-family="system-ui, sans-serif" font-size="8.5" fill="#7f1d1d" text-anchor="middle">to farmer. Elephant</text>
      <text x="347" y="128" font-family="system-ui, sans-serif" font-size="8.5" fill="#7f1d1d" text-anchor="middle">refuses all food.</text>
      <text x="347" y="155" font-family="system-ui, sans-serif" font-size="8.5" font-weight="600" fill="#dc2626" text-anchor="middle">Deep Grief</text>

      <line x1="405" y1="112" x2="425" y2="112" stroke="#64748b" stroke-width="2"/>

      <rect x="425" y="45" width="115" height="135" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
      <text x="482" y="70" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#92400e" text-anchor="middle">4. Reunion</text>
      <text x="482" y="92" font-family="system-ui, sans-serif" font-size="8.5" fill="#78350f" text-anchor="middle">King's decree</text>
      <text x="482" y="110" font-family="system-ui, sans-serif" font-size="8.5" fill="#78350f" text-anchor="middle">brings dog back.</text>
      <text x="482" y="128" font-family="system-ui, sans-serif" font-size="8.5" fill="#78350f" text-anchor="middle">Gajaraj trumpets!</text>
      <text x="482" y="155" font-family="system-ui, sans-serif" font-size="8.5" font-weight="600" fill="#b45309" text-anchor="middle">True Love Wins</text>
    </svg>
    <p style="font-size: 11px; color: #64748b; margin-top: 6px;">Figure 4.1: The bond of companionship that overcame disparity in size, species, and adversity.</p>
  </div>

  <div class="ex-div">
    <div class="ex-heading">NCERT Textbook Comprehension &amp; Detailed Solutions</div>

    ${qCard(
      'c6eng-ch4-q1',
      'Q1',
      'Why was Gajaraj Sad Despite Royal Comforts?',
      'Short',
      'Why was Gajaraj unhappy even though he lived in a royal stable and received delicious food?',
      `<p class="step"><strong>The Reason for Gajaraj’s Sadness:</strong></p>
      <p>Material comforts like royal stables, soft beds of straw, and abundant food cannot replace the emotional need for genuine love and companionship. Gajaraj had no friend to talk to, play with, or share his life. He felt lonely and isolated in the midst of luxury.</p>`,
      '2 marks: 1 mark for luxury not substituting love + 1 mark for lack of companion/loneliness.'
    )}

    ${qCard(
      'c6eng-ch4-q2',
      'Q2',
      'How the Friendship Began',
      'Describe',
      'Describe the first meeting between Gajaraj and the stray dog. How did they become friends?',
      `<p class="step"><strong>1. The First Encounter:</strong></p>
      <p>A stray dog, starved and soaked by rain, walked hesitantly into Gajaraj\'s stall, drawn by the sweet smell of jaggery and rice balls.</p>
      <p class="step"><strong>2. Gajaraj’s Gentle Response:</strong></p>
      <p>Instead of attacking or startling the helpless visitor, the enormous elephant pushed some of his sweetest food towards the trembling dog. The dog ate gratefully, wagged his tail, and licked Gajaraj\'s trunk.</p>
      <p class="step"><strong>3. Blossoming Bond:</strong></p>
      <p>From that evening onwards, the dog never left. They shared meals every day, splashed each other during river baths, and the little dog even rode comfortably on the gentle giant’s broad head.</p>`,
      '3 marks: 1 mark for dog entering in search of food + 1 mark for elephant sharing food + 1 mark for daily playful activities.'
    )}

    ${qCard(
      'c6eng-ch4-q3',
      'Q3',
      'The Mahout’s Greed and Gajaraj’s Grief',
      'Analyze',
      'What caused the separation of the two friends? How did Gajaraj react to the dog’s absence?',
      `<p class="step"><strong>1. Cause of Separation:</strong></p>
      <p>A passing farmer was fascinated by the well-fed, intelligent dog and offered the mahout a bag of silver coins to buy him. Blinding himself with greed, the mahout sold the dog in secret while Gajaraj was resting.</p>
      <p class="step"><strong>2. Gajaraj’s Profound Grief:</strong></p>
      <ul class="step-list">
        <li>When Gajaraj found his friend missing, tears welled up in his eyes.</li>
        <li>He refused to touch even a single blade of grass, sugarcane stalk, or water.</li>
        <li>He stood still with drooping ears and head, declining to go to the river for his bath.</li>
        <li>His grief was so immense that royal physicians thought he was dying of an incurable sickness until the truth was discovered.</li>
      </ul>`,
      '3 marks: 1 mark for mahout selling dog for money + 2 marks for hunger strike and grief symptoms.'
    )}

    ${qCard(
      'c6eng-ch4-q4',
      'Q4',
      'Meaning of "Unlikely" Friends',
      'Think & Answer',
      'Why is the title of the story "The Unlikely Best Friends"? What lesson does it teach us about friendship?',
      `<p class="step"><strong>1. Significance of the Word "Unlikely":</strong></p>
      <p>An elephant is a giant, majestic wild creature, whereas a stray dog is a small, humble domestic animal. Naturally, people never expect two such vastly different creatures to form a deep emotional partnership. That is why their bond is termed <em>"unlikely"</em>.</p>
      <p class="step"><strong>2. The Universal Lesson:</strong></p>
      <p>True friendship does not look at differences in size, background, appearance, or social status. It is built on mutual respect, empathy, and genuine kindness. Heart-to-heart affection transcends all physical boundaries.</p>`,
      '3 marks: 1.5 marks for contrast between elephant and dog size/species + 1.5 marks for deeper moral lesson on universal friendship.'
    )}
  </div>
</section>
`;

// CHAPTER 5: A Friend's Prayer (Unit 2: Friendship)
const ch5 = `
<section class="chapter-section" id="ch5">
  <div class="chapter-header">
    <div class="ch-badge">5</div>
    <div class="chapter-header-info">
      <h2>Chapter 5: A Friend’s Prayer</h2>
      <p>NCERT Poorvi (Class 6) — Unit 2: Friendship | Poem Appreciation, True Essence of Friendship, Unselfish Love &amp; Poetic Devices | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Poetic Summary &amp; Central Message</div>
    <ul class="concept-list">
      <li><strong>Poetic Essence:</strong> "A Friend's Prayer" is a touching lyrical poem celebrating the pure, unselfish virtue of genuine friendship. Rather than asking for personal riches or success, the speaker prays sincerely to the Almighty for the welfare, peace, and protection of their friend.</li>
      <li><strong>Core Desires Expressed in the Prayer:</strong>
        <ul>
          <li>May the friend always be blessed with joy, laughter, and courage in times of distress.</li>
          <li>May sunshine brighten their darkest days and light up every difficult path.</li>
          <li>May the speaker always possess the patience, kindness, and understanding to be a trustworthy companion who listens without judging.</li>
          <li>May the bond of affection remain resilient across time, distance, and changes in fortune.</li>
        </ul>
      </li>
      <li><strong>Poetic Tone &amp; Style:</strong> Gentle, warm, prayerful, and deeply heartfelt. It uses simple language, sweet rhyme, and poignant metaphors of light, shadow, and shelter.</li>
    </ul>
  </div>

  <!-- SVG Diagram: The Pillars of True Friendship in A Friend's Prayer -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 210" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Key Themes of "A Friend's Prayer"</text>
      <!-- Circle 1: Unselfishness -->
      <circle cx="100" cy="110" r="50" fill="#fdf2f8" stroke="#ec4899" stroke-width="2"/>
      <text x="100" y="105" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#be185d" text-anchor="middle">Unselfish</text>
      <text x="100" y="122" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#be185d" text-anchor="middle">Devotion</text>
      <text x="100" y="180" font-family="system-ui, sans-serif" font-size="8.5" fill="#9d174d" text-anchor="middle">Praying for other's joy</text>

      <!-- Circle 2: Loyal Support -->
      <circle cx="280" cy="110" r="50" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
      <text x="280" y="105" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1d4ed8" text-anchor="middle">Comfort in</text>
      <text x="280" y="122" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1d4ed8" text-anchor="middle">Hardship</text>
      <text x="280" y="180" font-family="system-ui, sans-serif" font-size="8.5" fill="#1e40af" text-anchor="middle">Shelter in rainy storms</text>

      <!-- Circle 3: Lifelong Faith -->
      <circle cx="460" cy="110" r="50" fill="#f0fdf4" stroke="#22c55e" stroke-width="2"/>
      <text x="460" y="105" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#15803d" text-anchor="middle">Enduring</text>
      <text x="460" y="122" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#15803d" text-anchor="middle">Loyalty</text>
      <text x="460" y="180" font-family="system-ui, sans-serif" font-size="8.5" fill="#166534" text-anchor="middle">Unbroken across miles</text>
    </svg>
    <p style="font-size: 11px; color: #64748b; margin-top: 6px;">Figure 5.1: The three spiritual virtues celebrated in "A Friend's Prayer".</p>
  </div>

  <div class="ex-div">
    <div class="ex-heading">NCERT Textbook Comprehension &amp; Poetic Analysis</div>

    ${qCard(
      'c6eng-ch5-q1',
      'Q1',
      'What Does the Speaker Ask for Their Friend?',
      'Short',
      'What are the main blessings that the poet asks for their friend in the poem?',
      `<p class="step"><strong>Blessings Sought for the Friend:</strong></p>
      <ul class="step-list">
        <li>The poet prays that their friend may always be granted sunshine and joy to banish gloom.</li>
        <li>They pray for strength and courage to face life’s difficult trials and overcome fears.</li>
        <li>They ask for peace of mind, happiness, and trustworthy companions along their life’s path.</li>
      </ul>`,
      '2 marks: 1 mark for joy and courage in trials + 1 mark for peace and radiant path.'
    )}

    ${qCard(
      'c6eng-ch5-q2',
      'Q2',
      'What Does the Speaker Ask for Themselves?',
      'Analyze',
      'What does the speaker ask of God regarding their own role in the friendship?',
      `<p class="step"><strong>The Speaker’s Personal Petition:</strong></p>
      <p>The speaker does not ask for gold or praise. Instead, they humbly pray for the moral grace to be a <strong>better friend</strong>:</p>
      <ul class="step-list">
        <li>To possess the wisdom to listen with patience and empathy.</li>
        <li>To never utter hurtful, unkind, or critical words.</li>
        <li>To always be ready with a comforting hand and an encouraging smile whenever their friend stumbles.</li>
      </ul>`,
      '3 marks: 1.5 marks for humility of asking to be a supportive companion + 1.5 marks for listening, comforting, and kindness.'
    )}

    ${qCard(
      'c6eng-ch5-q3',
      'Q3',
      'Poetic Devices: Metaphors of Light and Shadows',
      'Grammar',
      'Explain the imagery of light and dark/shadow used in the poem. What do they symbolize?',
      `<p class="step"><strong>Symbolic Imagery in the Poem:</strong></p>
      <ul class="step-list">
        <li><strong>Light / Sunshine:</strong> Symbolizes happiness, hope, clarity, success, and warm optimism in life.</li>
        <li><strong>Shadows / Storms:</strong> Symbolize sorrow, loneliness, failure, hardships, and testing times that everyone faces.</li>
        <li><strong>Poetic Function:</strong> The contrast reinforces that true friendship does not flee when storms arrive; rather, it shines as an enduring beacon of light through the shadows.</li>
      </ul>`,
      '3 marks: 1 mark for sunshine/light symbolism + 1 mark for shadow/storm symbolism + 1 mark for friendship as the guiding light.'
    )}
  </div>
</section>
`;

// Write Chapters 1 to 5
fs.writeFileSync(path.join(outDir, 'ch1.html'), ch1.trim(), 'utf8');
console.log('Successfully generated ch1.html');

fs.writeFileSync(path.join(outDir, 'ch2.html'), ch2.trim(), 'utf8');
console.log('Successfully generated ch2.html');

fs.writeFileSync(path.join(outDir, 'ch3.html'), ch3.trim(), 'utf8');
console.log('Successfully generated ch3.html');

fs.writeFileSync(path.join(outDir, 'ch4.html'), ch4.trim(), 'utf8');
console.log('Successfully generated ch4.html');

fs.writeFileSync(path.join(outDir, 'ch5.html'), ch5.trim(), 'utf8');
console.log('Successfully generated ch5.html');
