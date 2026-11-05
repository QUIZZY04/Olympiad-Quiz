// scripts/builders/gen-c11e-ch11-ch15.js
// Class 11 English Core: Snapshots Supplementary Reader (Chapters 11 to 15)
const { createQCard, saveChapter } = require('./c11e-helper');

// ==========================================
// CHAPTER 11: The Summer of the Beautiful White Horse (William Saroyan)
// ==========================================
(function buildChapter11() {
  const chNum = 11;
  const bookTitle = 'Snapshots (Supplementary Reader)';
  const chTitle = 'The Summer of the Beautiful White Horse';
  const exTitle = 'NCERT Exercises: Reading with Insight';

  const svgDiagram = `
  <div style="background:linear-gradient(135deg, #f0fdf4, #ecfdf5); border:1px solid #a7f3d0; border-radius:12px; padding:20px; margin-bottom:24px;">
    <h3 style="font-size:1.05rem; color:#065f46; margin-bottom:12px; font-weight:800; display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/></svg>
      The Moral Dilemma: Garoghlanian Honor vs Childhood Passion
    </h3>
    <svg viewBox="0 0 800 160" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', sans-serif;">
      <rect x="25" y="25" width="225" height="110" rx="8" fill="#ffffff" stroke="#059669" stroke-width="2"/>
      <text x="137" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">Tribal Heritage</text>
      <text x="137" y="78" text-anchor="middle" font-size="11" fill="#475569">Garoghlanian Honor</text>
      <text x="137" y="100" text-anchor="middle" font-size="10" fill="#64748b">• 11 centuries of unblemished honesty</text>
      <text x="137" y="118" text-anchor="middle" font-size="10" fill="#64748b">• Extreme, comical poverty</text>

      <path d="M 250 80 L 285 80" stroke="#94a3b8" stroke-width="2"/>

      <rect x="285" y="25" width="225" height="110" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
      <text x="397" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#b45309">Childhood Temptation</text>
      <text x="397" y="78" text-anchor="middle" font-size="11" fill="#475569">The Crazy Streak</text>
      <text x="397" y="100" text-anchor="middle" font-size="10" fill="#64748b">• Passionate craze for horse riding</text>
      <text x="397" y="118" text-anchor="middle" font-size="10" fill="#64748b">• "Stealing for riding isn’t theft"</text>

      <path d="M 510 80 L 545 80" stroke="#94a3b8" stroke-width="2"/>

      <rect x="545" y="25" width="230" height="110" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
      <text x="660" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">Moral Awakening</text>
      <text x="660" y="78" text-anchor="middle" font-size="11" fill="#475569">John Byro’s Trust</text>
      <text x="660" y="100" text-anchor="middle" font-size="10" fill="#64748b">• Byro refuses to suspect honesty</text>
      <text x="660" y="118" text-anchor="middle" font-size="10" fill="#64748b">• Secretly return horse at dawn</text>
    </svg>
  </div>`;

  const questions = [
    createQCard(
      'c11e-ch11-q1',
      'Question 1',
      'Reading with Insight',
      'You will probably agree that this story does not have breathless adventure and exciting action. Then what in your opinion makes it interesting?',
      `<p>While the story lacks high-octane violence, espionage, or perilous physical adventures, it is profoundly engaging, warm, and delightful for several literary reasons:</p>
      <ol style="margin-left:20px; line-height:1.7;">
        <li><strong>Nostalgic Childhood Perspective:</strong> Narrated from the perspective of nine-year-old Aram, the story captures the enchanting innocence of a world that was <em>“full of every imaginable kind of magnificence, and life was still a delightful and mysterious dream.”</em></li>
        <li><strong>Authentic Child Psychology:</strong> The boys’ childish rationalization—that stealing a horse to ride was not the same as stealing money because they never intended to sell it—rings psychologically true and humorous.</li>
        <li><strong>Eccentric and Colorful Characters:</strong> The "crazy streak" in the family provides rich humor, particularly through Uncle Khosrove with his booming temper and universal dismissal: <em>“It is no harm; pay no attention to it!”</em>, even when his own house was burning down.</li>
        <li><strong>Poignant Moral Conflict:</strong> The quiet tension between the boys’ desperate longing for horses and their unyielding pride in their tribe’s eleven centuries of unblemished honesty creates a subtle, emotionally satisfying climax.</li>
      </ol>`,
      4,
      [
        ['Nostalgic childhood perspective and lyrical atmosphere', '1 Mark'],
        ['Insight into child psychology and humorous moral rationalizations', '1 Mark'],
        ['Comical eccentricity of Uncle Khosrove and cousin Mourad', '1 Mark'],
        ['Quiet moral dilemma between tribal honesty and youthful temptation', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch11-q2',
      'Question 2',
      'Reading with Insight',
      'Did the boys return the horse because they were conscience-stricken or because they were afraid?',
      `<p>The boys returned the horse because they were <strong>conscience-stricken</strong>, not out of fear of punishment or detection.</p>
      <p><strong>Detailed Literary Evidence:</strong></p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>No Fear of Discovery:</strong> The boys had successfully hidden the beautiful white horse in the deserted vineyard of farmer Fetvajian for weeks, riding it every morning at daybreak. Nobody suspected them because the Garoghlanian tribe was universally renowned for honesty.</li>
        <li><strong>The Encounter with John Byro:</strong> When the boys met the horse’s rightful owner, John Byro, on the road, Byro examined the horse closely, looked into its mouth tooth by tooth, and remarked: <em>“I would swear it is my horse if I didn’t know your parents. The fame of your family for honesty is well known to me. Yet the horse is the twin of my horse.”</em></li>
        <li><strong>The Prick of Conscience:</strong> John Byro’s noble refusal to accuse them, solely out of profound respect for their family’s proud heritage of integrity, pierced their conscience deeply. They realized that keeping the horse would permanently tarnish their family's unblemished eleven-hundred-year reputation. The very next morning, they took the horse to John Byro’s vineyard and tied it in the barn.</li>
      </ul>`,
      4,
      [
        ['Clear assertion that return was driven by conscience, not fear', '1 Mark'],
        ['Proof that the horse was securely hidden and suspicion was zero', '1 Mark'],
        ['John Byro’s unconditional trust in their family honesty acting as catalyst', '1 Mark'],
        ['Conscious decision to protect tribal honor over personal pleasure', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch11-q3',
      'Question 3',
      'Reading with Insight',
      '“One day back there in the good old days when I was nine and the world was full of every imaginable kind of magnificence, and life was still a delightful and mysterious dream...” The story begins in a mood of nostalgia. Can you narrate some incident from your childhood that brings back memories like these?',
      `<p>This opening line evokes the timeless magic of early childhood, when reality is bathed in wonder and simple adventures assume epic grandeur.</p>
      <p><strong>Personal Reflective Narrative (Sample Model Response):</strong></p>
      <blockquote style="margin:8px 0; padding:10px 16px; background:#f0fdf4; border-left:4px solid #059669; font-style:italic;">
        “This line transports me back to my seventh summer, when my cousins and I spent our holidays at my grandfather’s ancestral village home. One twilight evening, we discovered an abandoned, overgrown orchard behind the cow sheds. To our young imaginations, that tangled thicket of guava trees was an uncharted enchanted forest. We fashioned wooden swords from fallen branches, christened an old rusty bullock cart as our royal chariot, and spent hours chasing fireflies across the moonlit fields. There were no cellphones, no academic pressures, and no anxieties about the future—the world was infinitely large, safe, and brimming with innocence. Just as Aram and Mourad felt flying through walnut orchards in the cool dawn air, that summer remains an indelible dream of pure happiness.”
      </blockquote>`,
      3,
      [
        ['Appreciation of Aram’s nostalgic opening sentiment', '1 Mark'],
        ['Coherent personal narrative recounting a childhood memory of wonder', '1 Mark'],
        ['Thematic correlation connecting innocence, imagination and simple joys', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch11-q4',
      'Question 4',
      'Reading with Insight',
      'Describe the distinctive traits of Mourad and Uncle Khosrove that show they shared the family’s “crazy streak”.',
      `<p>In the Garoghlanian tribe, individual character was believed to descend directly from spiritual ancestors rather than biological fathers. Both Mourad and Uncle Khosrove were living embodiments of the family’s eccentric "crazy streak":</p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>Uncle Khosrove’s Eccentricities:</strong> An enormous man with a roaring voice and a bushy black moustache. He was notoriously impatient, irritable, and furious, silencing all human dialogue with his trademark roar: <em>“It is no harm; pay no attention to it!”</em> When his son Arak ran eight blocks to tell him their house was on fire, Khosrove simply roared: <em>“Enough! It is no harm, I say!”</em> When John Byro mourned his stolen horse, Khosrove roared that losing a horse was trivial compared to losing their homeland.</li>
        <li><strong>Mourad’s Crazy Streak:</strong> Viewed as the natural descendant of Khosrove’s mania. He lived with wild, fearless abandon, sang or roared lustily while galloping bareback on the horse at 4 a.m., and claimed to have <em>“a way with horses, a way with dogs, and a way with birds.”</em> He nursed an injured young robin's broken wing back to health and talked to animals with serene confidence.</li>
      </ul>`,
      4,
      [
        ['Explanation of tribal theory of hereditary "crazy streaks"', '1 Mark'],
        ['Khosrove’s traits: booming voice, impatience, universal dismissal of disasters', '1.5 Marks'],
        ['Mourad’s traits: wild abandon, morning horse rides, mystical affinity with animals', '1.5 Marks']
      ]
    )
  ];

  saveChapter(chNum, bookTitle, chTitle, svgDiagram, exTitle, questions, 'The Address');
})();

// ==========================================
// CHAPTER 12: The Address (Marga Minco)
// ==========================================
(function buildChapter12() {
  const chNum = 12;
  const bookTitle = 'Snapshots (Supplementary Reader)';
  const chTitle = 'The Address';
  const exTitle = 'NCERT Exercises: Reading with Insight';

  const svgDiagram = `
  <div style="background:linear-gradient(135deg, #f8fafc, #f1f5f9); border:1px solid #cbd5e1; border-radius:12px; padding:20px; margin-bottom:24px;">
    <h3 style="font-size:1.05rem; color:#334155; margin-bottom:12px; font-weight:800; display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#475569" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      The Psychological Burden of Possessions: Number 46, Marconi Street
    </h3>
    <svg viewBox="0 0 800 160" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', sans-serif;">
      <rect x="25" y="25" width="225" height="110" rx="8" fill="#ffffff" stroke="#64748b" stroke-width="2"/>
      <text x="137" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#334155">Pre-War Home</text>
      <text x="137" y="78" text-anchor="middle" font-size="11" fill="#475569">Beloved Belongings</text>
      <text x="137" y="100" text-anchor="middle" font-size="10" fill="#64748b">• Silver cutlery, Hanukkah lamp</text>
      <text x="137" y="118" text-anchor="middle" font-size="10" fill="#64748b">• Mother entrusts to Mrs. Dorling</text>

      <path d="M 250 80 L 285 80" stroke="#94a3b8" stroke-width="2"/>

      <rect x="285" y="25" width="225" height="110" rx="8" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
      <text x="397" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#b91c1c">Post-War Reality</text>
      <text x="397" y="78" text-anchor="middle" font-size="11" fill="#475569">Alienated Treasures</text>
      <text x="397" y="100" text-anchor="middle" font-size="10" fill="#64748b">• Objects used tastelessly</text>
      <text x="397" y="118" text-anchor="middle" font-size="10" fill="#64748b">• Cold rejection by Mrs. Dorling</text>

      <path d="M 510 80 L 545 80" stroke="#94a3b8" stroke-width="2"/>

      <rect x="545" y="25" width="230" height="110" rx="8" fill="#ffffff" stroke="#059669" stroke-width="2"/>
      <text x="660" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#047857">Liberation / Renunciation</text>
      <text x="660" y="78" text-anchor="middle" font-size="11" fill="#475569">Severing Ties</text>
      <text x="660" y="100" text-anchor="middle" font-size="10" fill="#64748b">• Things lose value without loved ones</text>
      <text x="660" y="118" text-anchor="middle" font-size="10" fill="#64748b">• Resolve to forget the address</text>
    </svg>
  </div>`;

  const questions = [
    createQCard(
      'c11e-ch12-q1',
      'Question 1',
      'Reading with Insight',
      '“Have you come back?” said the woman, “I thought that no one had come back.” Does this statement give some clue about the story? If yes, what is it?',
      `<p>Yes, this blunt, inhospitable opening statement provides profound clues about the story’s socio-historical context and human drama:</p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>The Context of the Holocaust:</strong> The setting is Holland during and after World War II. The narrator and her mother were Dutch Jews persecuted by the Nazi regime. The woman, Mrs. Dorling, had assumed that the entire family had perished in Nazi concentration camps, as happened to millions of European Jews.</li>
        <li><strong>Human Greed and Betrayal:</strong> Mrs. Dorling took custody of all the valuable antique furniture, crockery, cutlery, and silverware under the pretext of "safekeeping." Her disappointment upon seeing the daughter alive betrays her covetousness—she had usurped these treasures as her own and felt threatened that someone had survived to reclaim them.</li>
        <li><strong>Sets the Emotional Tone:</strong> It establishes the cold indifference and lack of basic human sympathy that greeted surviving Jewish refugees upon returning to their homelands.</li>
      </ul>`,
      3,
      [
        ['Clue identifying World War II, Nazi occupation and Holocaust extermination', '1 Mark'],
        ['Exposure of Mrs. Dorling’s greed assuming the owners were dead', '1 Mark'],
        ['Insight into post-war isolation and indifference faced by survivors', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch12-q2',
      'Question 2',
      'Reading with Insight',
      'The story is divided into pre-war and post-war times. What hardships do you think the girl underwent during these times?',
      `<p>Marga Minco’s understated prose reveals intense psychological and physical trauma across both eras:</p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>Pre-War Hardships:</strong>
          <br>The girl and her mother lived under the terrifying shadow of Nazi persecution, facing curfew restrictions, yellow star mandates, and the constant threat of deportation. They suffered the agonizing distress of seeing their cherished ancestral home dismantled piece by piece, as Mrs. Dorling carried away heavy suitcases filled with silver and antiques, while the mother lived in constant dread of an impending raid.
        </li>
        <li><strong>Post-War Hardships:</strong>
          <br>The narrator survived the war entirely alone—her mother, family, and former life were eradicated. She lived in a bleak, tiny rented room with blackout paper peeling from the windows. When she attempted to reconnect with her past by visiting Number 46, Marconi Street, she was met with cold hostility by Mrs. Dorling. Entering the house on a second visit, she found her mother’s prized belongings displayed tasteless and misused in an alien living room, re-traumatizing her with grief and alienation.
        </li>
      </ul>`,
      4,
      [
        ['Pre-war fear of arrest, persecution and seeing home dismantled', '2 Marks'],
        ['Post-war total bereavement, loneliness in rented room, and traumatic reunion', '2 Marks']
      ]
    ),
    createQCard(
      'c11e-ch12-q3',
      'Question 3',
      'Reading with Insight',
      'Why did the narrator of the story want to forget the address?',
      `<p>The narrator resolved to erase <strong>Number 46, Marconi Street</strong> from her memory because holding onto it prolonged futile pain:</p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>Severed Emotional Connection:</strong> Possessions derive their emotional soul and beauty from the living context of the loved ones who used them. Stripped of her mother’s gentle touch and placed in Mrs. Dorling’s tasteless, stuffy room, the objects looked mutilated and severed from their past.</li>
        <li><strong>Impracticality of Material Possessions:</strong> The narrator lived in a tiny rented room with narrow cutlery drawers. She had no space or practical use for heavy silver sets, pewter plates, or elaborate tea services.</li>
        <li><strong>Psychological Liberation:</strong> Reclaiming the objects could never bring back her mother or resurrect her lost youth. To cling to the address meant remaining imprisoned by grief, resentment, and bitterness. Forgetting the address was an act of mature emotional liberation, enabling her to make a clean break with the past and move forward.</li>
      </ul>`,
      4,
      [
        ['Loss of emotional soul of objects when placed in strange surroundings', '1.5 Marks'],
        ['Lack of physical space in tiny rented room for opulent antique items', '1 Mark'],
        ['Psychological decision to move on rather than nurse bitter grief', '1.5 Marks']
      ]
    ),
    createQCard(
      'c11e-ch12-q4',
      'Question 4',
      'Reading with Insight',
      '“The Address” is a story of human predicament that follows war. Comment.',
      `<p>Minco’s narrative is a poignant exploration of the profound, invisible wounds inflicted by war on the human psyche:</p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>Beyond Physical Destruction:</strong> While war history often documents battle deaths and ruined cities, it rarely records the quiet tragedy of the survivors—individuals left uprooted, emotionally bankrupt, and isolated in empty landscapes.</li>
        <li><strong>Moral Erosion:</strong> War brings out predatory selfishness in acquaintances (like Mrs. Dorling), who feign friendship to opportunistically loot the possessions of vulnerable families facing extermination.</li>
        <li><strong>The Futility of Clinging to the Past:</strong> The survivor realizes that material relics cannot substitute for living relationships. True healing begins only when the victim courageously relinquishes physical attachments and accepts that the pre-war world is irretrievably gone.</li>
      </ul>`,
      3,
      [
        ['Focus on the invisible emotional trauma of war survivors', '1 Mark'],
        ['Exposure of moral degradation and opportunistic looting during crisis', '1 Mark'],
        ['The necessity of renouncing material baggage to heal post-war trauma', '1 Mark']
      ]
    )
  ];

  saveChapter(chNum, bookTitle, chTitle, svgDiagram, exTitle, questions, 'Albert Einstein at School');
})();

// ==========================================
// CHAPTER 13: Albert Einstein at School (Patrick Pringle)
// ==========================================
(function buildChapter13() {
  const chNum = 13;
  const bookTitle = 'Snapshots (Supplementary Reader)';
  const chTitle = 'Albert Einstein at School';
  const exTitle = 'NCERT Exercises: Reading with Insight';

  const svgDiagram = `
  <div style="background:linear-gradient(135deg, #fef3c7, #fff7ed); border:1px solid #fed7aa; border-radius:12px; padding:20px; margin-bottom:24px;">
    <h3 style="font-size:1.05rem; color:#9a3412; margin-bottom:12px; font-weight:800; display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
      Education Philosophy: Rote Learning vs Scientific Insight
    </h3>
    <svg viewBox="0 0 800 160" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', sans-serif;">
      <rect x="25" y="25" width="225" height="110" rx="8" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
      <text x="137" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#b91c1c">Prussian Rote System</text>
      <text x="137" y="78" text-anchor="middle" font-size="11" fill="#475569">History Teacher Braun</text>
      <text x="137" y="100" text-anchor="middle" font-size="10" fill="#64748b">• Memorizing dates of battles</text>
      <text x="137" y="118" text-anchor="middle" font-size="10" fill="#64748b">• Unquestioning conformity</text>

      <path d="M 250 80 L 285 80" stroke="#94a3b8" stroke-width="2"/>

      <rect x="285" y="25" width="225" height="110" rx="8" fill="#ffffff" stroke="#ea580c" stroke-width="2"/>
      <text x="397" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#c2410c">Einstein’s Philosophy</text>
      <text x="397" y="78" text-anchor="middle" font-size="11" fill="#475569">Ideas over Information</text>
      <text x="397" y="100" text-anchor="middle" font-size="10" fill="#64748b">• "Why men killed each other"</text>
      <text x="397" y="118" text-anchor="middle" font-size="10" fill="#64748b">• One can look up dates in books</text>

      <path d="M 510 80 L 545 80" stroke="#94a3b8" stroke-width="2"/>

      <rect x="545" y="25" width="230" height="110" rx="8" fill="#ffffff" stroke="#059669" stroke-width="2"/>
      <text x="660" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#047857">Mathematical Genius</text>
      <text x="660" y="78" text-anchor="middle" font-size="11" fill="#475569">Teacher Mr. Koch</text>
      <text x="660" y="100" text-anchor="middle" font-size="10" fill="#64748b">• "Albert can teach me mathematics"</text>
      <text x="660" y="118" text-anchor="middle" font-size="10" fill="#64748b">• Ready for university entry</text>
    </svg>
  </div>`;

  const questions = [
    createQCard(
      'c11e-ch13-q1',
      'Question 1',
      'Reading with Insight',
      'What do you understand of Einstein’s nature from his conversations with his history teacher, his mathematics teacher and the head teacher?',
      `<p>Albert Einstein emerges as a fiercely honest, intellectually independent, and non-conformist genius who despised regimented authority:</p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>With the History Teacher (Mr. Braun):</strong>
          <br>Albert is brutally honest and intellectually unapologetic. When asked the date of the Battle of Waterloo, he calmly admits he doesn't know and doesn't see the point in memorizing facts that can easily be looked up in a book. He politely asserts his conviction that education should focus on <em>ideas and underlying causes</em> (why soldiers fought) rather than dead historical dates, refusing to yield even when mocked.
        </li>
        <li><strong>With the Mathematics Teacher (Mr. Koch):</strong>
          <br>Shows immense respect, intellectual humility, and exceptional brilliance. Mr. Koch admires Albert, recognizing that Albert already knows more mathematics than the high school syllabus teaches. Albert respectfully requests a reference letter to enter an Italian university without showing arrogant condescension.
        </li>
        <li><strong>With the Head Teacher:</strong>
          <br>When the headmaster abruptly expels him—claiming Albert’s presence disrupts discipline and prevents teachers from teaching—Albert refuses to plead, argue, or demean himself. He maintains quiet, stoic dignity, resisting the urge to express his true disdain, and walks out of the school with head held high without looking back.
        </li>
      </ul>`,
      4,
      [
        ['History teacher: Frank honesty, critical thinking over rote facts', '1.5 Marks'],
        ['Mathematics teacher: Mutual respect, intellectual brilliance and humility', '1 Mark'],
        ['Head teacher: Calm dignity, refusal to grovel, pride under unjust expulsion', '1.5 Marks']
      ]
    ),
    createQCard(
      'c11e-ch13-q2',
      'Question 2',
      'Reading with Insight',
      'The school system often curbs individual talents. Discuss.',
      `<p>The chapter offers a trenchant critique of rigid, one-size-fits-all education systems that stifle creative genius:</p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>Tyranny of Rote Memorization:</strong> Traditional schooling equates intelligence with mechanical recall of facts, dates, and formulas. Students who think critically, question fundamental assumptions, or ask "why" are branded as troublemakers or insolent rebels.</li>
        <li><strong>Suppression of Originality:</strong> Standardized curricula force every child into identical molds, penalizing those whose passions lie outside orthodox syllabi (as Einstein was chastised for reading advanced geology and physics books not taught in school).</li>
        <li><strong>Authoritarian Discipline:</strong> The Prussian school system depicted in Munich emphasized militaristic blind obedience rather than nurturing intellectual curiosity. It alienated the greatest scientific mind of the 20th century to the point of a nervous breakdown.</li>
        <li><strong>Conclusion:</strong> Modern education must celebrate diverse intelligences, encouraging inquiry-based learning, problem-solving, and lateral thinking over mechanical examination results.</li>
      </ul>`,
      3,
      [
        ['Critique of rote learning and memorization over understanding', '1 Mark'],
        ['Punishment of intellectual non-conformity and questioning spirit', '1 Mark'],
        ['Call for modern student-centric, inquiry-based educational paradigms', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch13-q3',
      'Question 3',
      'Reading with Insight',
      'How do you distinguish between information gathering and insight formation?',
      `<p>Einstein’s dialogue with Mr. Braun draws a profound distinction between superficial knowledge and deep intellectual comprehension:</p>
      <table style="width:100%; border-collapse:collapse; margin-top:12px; margin-bottom:12px; font-size:0.95rem;">
        <thead>
          <tr style="background:#f1f5f9; text-align:left;">
            <th style="padding:10px; border:1px solid #cbd5e1;">Information Gathering</th>
            <th style="padding:10px; border:1px solid #cbd5e1;">Insight Formation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:10px; border:1px solid #cbd5e1;">Mechanical collection and memorization of external facts, dates, statistics, and formulas.</td>
            <td style="padding:10px; border:1px solid #cbd5e1;">Deep cognitive understanding of underlying causes, patterns, relationships, and principles.</td>
          </tr>
          <tr>
            <td style="padding:10px; border:1px solid #cbd5e1;">Static and easily accessible—can be looked up in books, encyclopedias, or online search engines.</td>
            <td style="padding:10px; border:1px solid #cbd5e1;">Dynamic and creative—requires critical reasoning, analytical inquiry, and conceptual synthesis.</td>
          </tr>
          <tr>
            <td style="padding:10px; border:1px solid #cbd5e1;">Example: Memorizing that the Prussians defeated the French at Waterloo in 1815.</td>
            <td style="padding:10px; border:1px solid #cbd5e1;">Example: Analyzing why armies fought, the political ideologies involved, and the human cost.</td>
          </tr>
        </tbody>
      </table>
      <p>True education is not the learning of facts, but the training of the mind to think and formulate original insights.</p>`,
      3,
      [
        ['Clear definition of information gathering as passive factual recall', '1 Mark'],
        ['Definition of insight formation as analytical, conceptual synthesis', '1 Mark'],
        ['Textual reference to Einstein’s Waterloo example and educational philosophy', '1 Mark']
      ]
    )
  ];

  saveChapter(chNum, bookTitle, chTitle, svgDiagram, exTitle, questions, "Mother's Day");
})();

// ==========================================
// CHAPTER 14: Mother's Day (J.B. Priestley)
// ==========================================
(function buildChapter14() {
  const chNum = 14;
  const bookTitle = 'Snapshots (Supplementary Reader)';
  const chTitle = "Mother's Day";
  const exTitle = 'NCERT Exercises: Reading with Insight';

  const svgDiagram = `
  <div style="background:linear-gradient(135deg, #fdf2f8, #fce7f3); border:1px solid #fbcfe8; border-radius:12px; padding:20px; margin-bottom:24px;">
    <h3 style="font-size:1.05rem; color:#9d174d; margin-bottom:12px; font-weight:800; display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#db2777" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      The Pearson Revolution: Personality Swap & Domestic Reform
    </h3>
    <svg viewBox="0 0 800 160" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', sans-serif;">
      <rect x="25" y="25" width="225" height="110" rx="8" fill="#ffffff" stroke="#db2777" stroke-width="2"/>
      <text x="137" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#9d174d">Domestic Exploitation</text>
      <text x="137" y="78" text-anchor="middle" font-size="11" fill="#475569">Meek Mrs. Pearson</text>
      <text x="137" y="100" text-anchor="middle" font-size="10" fill="#64748b">• Treated as an unpaid servant</text>
      <text x="137" y="118" text-anchor="middle" font-size="10" fill="#64748b">• Husband & children order her</text>

      <path d="M 250 80 L 285 80" stroke="#94a3b8" stroke-width="2"/>

      <rect x="285" y="25" width="225" height="110" rx="8" fill="#ffffff" stroke="#9333ea" stroke-width="2"/>
      <text x="397" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#7e22ce">The Radical Catalyst</text>
      <text x="397" y="78" text-anchor="middle" font-size="11" fill="#475569">Mrs. Fitzgerald's Magic</text>
      <text x="397" y="100" text-anchor="middle" font-size="10" fill="#64748b">• "Body swap" occult spell</text>
      <text x="397" y="118" text-anchor="middle" font-size="10" fill="#64748b">• Smokes, drinks, speaks home truths</text>

      <path d="M 510 80 L 545 80" stroke="#94a3b8" stroke-width="2"/>

      <rect x="545" y="25" width="230" height="110" rx="8" fill="#ffffff" stroke="#059669" stroke-width="2"/>
      <text x="660" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">Domestic Harmony</text>
      <text x="660" y="78" text-anchor="middle" font-size="11" fill="#475569">Mutual Respect</text>
      <text x="660" y="100" text-anchor="middle" font-size="10" fill="#64748b">• Family serves dinner together</text>
      <text x="660" y="118" text-anchor="middle" font-size="10" fill="#64748b">• Family game of rummy</text>
    </svg>
  </div>`;

  const questions = [
    createQCard(
      'c11e-ch14-q1',
      'Question 1',
      'Reading with Insight',
      'This play, written in the 1950s, is a humorous and satirical depiction of the status of the mother in a family. What are the issues it raises? Do you think it has outlived its utility?',
      `<p>J.B. Priestley’s witty play addresses persistent social issues surrounding domestic gender inequality:</p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>Unpaid and Unappreciated Domestic Labor:</strong> Mrs. Pearson works eight hours a day, seven days a week, cooking, ironing, cleaning, and waiting on her family hand and foot without receiving a single word of thanks, financial compensation, or a weekend off.</li>
        <li><strong>Taking Mothers for Granted:</strong> Her husband George and children Doris and Cyril treat the house as a luxury hotel, dropping in only to demand tea, demanding clothes be mended, and rushing out to their social clubs while abandoning their mother in solitary neglect.</li>
        <li><strong>Has it Outlived its Utility?</strong>
          <br><strong>No, it has certainly NOT outlived its utility.</strong> Even in contemporary 21st-century society, working and homemaking mothers alike carry an inequitable "second shift" of domestic chores and mental labor. The systemic expectation that mothers must selflessly sacrifice their personal leisure, dignity, and autonomy remains painfully prevalent worldwide.
        </li>
      </ul>`,
      4,
      [
        ['Identification of unpaid domestic labor and continuous 7-day work week', '1.5 Marks'],
        ['Analysis of family taking the mother’s care for granted without gratitude', '1 Mark'],
        ['Persuasive argument proving the play remains highly relevant today', '1.5 Marks']
      ]
    ),
    createQCard(
      'c11e-ch14-q2',
      'Question 2',
      'Reading with Insight',
      'Is drama a good medium for conveying a social message? Discuss.',
      `<p>Drama is uniquely powerful and persuasive for delivering sharp social critiques:</p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>Immediate Emotional & Visual Impact:</strong> Unlike a dry essay or political speech, drama embodies ideas through living human characters. Watching Doris burst into tears or George cower in embarrassment makes the audience viscerally experience the absurdity of domestic arrogance.</li>
        <li><strong>The Disarming Power of Satire and Humor:</strong> Priestley uses comedy and the fantastical body-swap device to make serious social injustices palpable. Humor disarms the audience’s defenses, allowing them to laugh at the Pearsons while simultaneously recognizing their own selfish domestic behavior.</li>
        <li><strong>Cathartic Resolution:</strong> Drama allows the audience to witness an immediate before-and-after transformation. Seeing the reformed family humbly serve their mother tea and play rummy provides a clear, practical blueprint for domestic reform.</li>
      </ul>`,
      3,
      [
        ['Visual and emotional immediacy of dramatic dialogue over dry essays', '1 Mark'],
        ['Satire and comedy disarming audience defenses to deliver home truths', '1 Mark'],
        ['Practical demonstration of reform through theatrical climax', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch14-q3',
      'Question 3',
      'Reading with Insight',
      'The play portrays the situation in a British suburban home. Has Indian society changed enough for Indian mothers to relate to Mrs. Pearson?',
      `<p>An exploration of cross-cultural relevance in contemporary Indian society:</p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>Profound Resonance with Indian Mothers:</strong> The plight of Mrs. Pearson resonates deeply with the traditional reality of millions of Indian households, where the mother is often eulogized as a selfless deity (<em>“Annapurna”</em> or <em>“Devi”</em>) precisely to justify her domestic servitude. Indian mothers frequently wake up earliest, sleep latest, eat after everyone has eaten, and rarely get personal leisure time.</li>
        <li><strong>Signs of Gradual Evolution:</strong> In modern urban educated homes, there is growing feminist awareness. Husbands and children increasingly share kitchen chores, clean dishes, and support mothers pursuing independent careers and hobbies.</li>
        <li><strong>Persistent Reality:</strong> Despite surface changes, the deep-seated patriarchal conditioning that household management is fundamentally the woman’s responsibility remains prevalent in many Indian households, making Mrs. Pearson’s awakening relatable to Indian audiences.</li>
      </ul>`,
      3,
      [
        ['Deep resonance with traditional Indian homemakers eulogized into servitude', '1 Mark'],
        ['Signs of modern progress in urban households sharing chores', '1 Mark'],
        ['Conclusion confirming strong cultural relatability in contemporary India', '1 Mark']
      ]
    )
  ];

  saveChapter(chNum, bookTitle, chTitle, svgDiagram, exTitle, questions, 'Birth');
})();

// ==========================================
// CHAPTER 15: Birth (A.J. Cronin)
// ==========================================
(function buildChapter15() {
  const chNum = 15;
  const bookTitle = 'Snapshots (Supplementary Reader)';
  const chTitle = 'Birth';
  const exTitle = 'NCERT Exercises: Reading with Insight';

  const svgDiagram = `
  <div style="background:linear-gradient(135deg, #f0fdf4, #e0f2fe); border:1px solid #bae6fd; border-radius:12px; padding:20px; margin-bottom:24px;">
    <h3 style="font-size:1.05rem; color:#0369a1; margin-bottom:12px; font-weight:800; display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
      The Resuscitation Protocol: Dr. Andrew Manson’s Miracle at Midnight
    </h3>
    <svg viewBox="0 0 800 160" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', sans-serif;">
      <rect x="25" y="25" width="225" height="110" rx="8" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
      <text x="137" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#b91c1c">Dual Medical Emergency</text>
      <text x="137" y="78" text-anchor="middle" font-size="11" fill="#475569">Number 12, Blaina Terrace</text>
      <text x="137" y="100" text-anchor="middle" font-size="10" fill="#64748b">• Mother Susan collapsing</text>
      <text x="137" y="118" text-anchor="middle" font-size="10" fill="#64748b">• Stillborn child under bed</text>

      <path d="M 250 80 L 285 80" stroke="#94a3b8" stroke-width="2"/>

      <rect x="285" y="25" width="225" height="110" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
      <text x="397" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">Hydrotherapy Protocol</text>
      <text x="397" y="78" text-anchor="middle" font-size="11" fill="#475569">Asphyxia Pallida</text>
      <text x="397" y="100" text-anchor="middle" font-size="10" fill="#64748b">• Two basins: Icy cold & hot water</text>
      <text x="397" y="118" text-anchor="middle" font-size="10" fill="#64748b">• Plunges baby alternately</text>

      <path d="M 510 80 L 545 80" stroke="#94a3b8" stroke-width="2"/>

      <rect x="545" y="25" width="230" height="110" rx="8" fill="#ffffff" stroke="#059669" stroke-width="2"/>
      <text x="660" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#047857">The Spark of Life</text>
      <text x="660" y="78" text-anchor="middle" font-size="11" fill="#475569">Triumph of Science</text>
      <text x="660" y="100" text-anchor="middle" font-size="10" fill="#64748b">• Chest heaves, baby cries aloud</text>
      <text x="660" y="118" text-anchor="middle" font-size="10" fill="#64748b">• "I’ve done something real at last!"</text>
    </svg>
  </div>`;

  const questions = [
    createQCard(
      'c11e-ch15-q1',
      'Question 1',
      'Reading with Insight',
      '“I have done something; oh, God! I’ve done something real at last.” Why does Andrew say this? What does it mean?',
      `<p>Dr. Andrew Manson exclaims these immortal words at daybreak following an agonizing, miraculous battle for life:</p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>Why Andrew Says This:</strong>
          <br>Called to attend Joe Morgan’s wife Susan delivering their first child after twenty years of marriage, Andrew faced an acute crisis. The mother was collapsing from post-partum shock, and the infant was born lifeless, pale, and limp—a victim of <em>asphyxia pallida</em>. After stabilizing the mother, Andrew pulled the seemingly dead child from beneath dirty sodden sods under the bed. For nearly an hour, in freezing sweat and physical exhaustion, he plunged the baby alternately between basins of steaming hot and ice-cold water, rubbed it with a rough towel, and applied artificial respiration until a sudden heave filled the lungs and the baby let out a hearty cry.
        </li>
        <li><strong>What it Means:</strong>
          <br>This exclamation marks Andrew's transition from a naive, textbook medical graduate into a true doctor. Previously plagued by self-doubt, romantic disillusionment, and professional insecurity, saving two human lives through instinctive brilliance gave his existence genuine meaning and purpose. He had achieved something profoundly "real" and noble that transcended theoretical examinations.
        </li>
      </ul>`,
      4,
      [
        ['Clinical context: Reviving stillborn infant born with asphyxia pallida', '1.5 Marks'],
        ['Exhausting medical intervention: alternate hot and cold immersion', '1 Mark'],
        ['Philosophical meaning: Transformation from insecure student into true healer', '1.5 Marks']
      ]
    ),
    createQCard(
      'c11e-ch15-q2',
      'Question 2',
      'Reading with Insight',
      'There lies a great difference between textbook medicine and the world of a practising physician. Discuss.',
      `<p>The chapter illustrates the vast chasm between theoretical medical textbooks and practical clinical realities:</p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>Limitations of Theory in Emergencies:</strong> Medical textbooks provide sterile, step-by-step diagnostic algorithms under ideal laboratory conditions. In practical life, doctors confront chaotic, under-equipped environments (like the cramped, dim bedroom of an impoverished Welsh miner's cottage with no electricity or modern incubators).</li>
        <li><strong>Split-Second Clinical Instinct:</strong> Andrew faced an agonizing moral dilemma—save the dying mother or attempt to revive the lifeless child. No textbook could make that choice for him; clinical instinct dictated saving the mother first, then fighting for the infant.</li>
        <li><strong>Improvisation & Sheer Will:</strong> When orthodox methods failed, Andrew recalled an experimental method of treating asphyxia pallida he had once observed in a Samaritan hospital. Using two kitchen basins of hot and cold water and rough towels, his physical endurance and refusal to concede to death achieved what textbook protocol deemed impossible.</li>
      </ul>`,
      3,
      [
        ['Contrast between sterile academic textbook theory and messy emergency conditions', '1 Mark'],
        ['Necessity of moral decision-making and prioritizing between two critical patients', '1 Mark'],
        ['Role of clinical improvisation, observation and sheer physical endurance', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch15-q3',
      'Question 3',
      'Reading with Insight',
      'Describe the precise steps taken by Dr. Andrew Manson to revive the lifeless baby born to Susan Morgan.',
      `<p>Dr. Andrew Manson executed a heroic, methodical resuscitation protocol:</p>
      <ol style="margin-left:20px; line-height:1.7;">
        <li><strong>Immediate Diagnosis:</strong> Recognizing that the baby's whiteness and limpness indicated <em>asphyxia pallida</em> (lack of oxygen in the blood), he knew standard slapping would not suffice.</li>
        <li><strong>Clearing Airways:</strong> He wiped mucus from the infant’s nose and mouth to open the respiratory passages.</li>
        <li><strong>Hydrotherapy Shock Treatment:</strong> He ordered two basins—one filled with water as hot as his hand could bear, the other with ice-cold water. He plunged the limp, slippery body alternately into the cold water, then the steaming water, repeating this thermal shock cycle for fifteen grueling minutes.</li>
        <li><strong>Vigorous Friction & Chest Compression:</strong> Wrapping the baby in a rough towel, he crushed and released the tiny rib cage rhythmically with his hands, blowing breath into the tiny lungs.</li>
        <li><strong>The Miracle:</strong> Just as despair gripped the room and the midwife declared it useless, a bubble of mucus issued from the infant’s nostril, the chest convulsed, and the child cried aloud, its skin turning flushed pink.</li>
      </ol>`,
      3,
      [
        ['Correct identification of asphyxia pallida and clearing of airways', '1 Mark'],
        ['Alternate hot and cold water immersion shock therapy described', '1 Mark'],
        ['Rough towel friction, chest compression and successful respiratory revival', '1 Mark']
      ]
    )
  ];

  saveChapter(chNum, bookTitle, chTitle, svgDiagram, exTitle, questions, '');
})();
