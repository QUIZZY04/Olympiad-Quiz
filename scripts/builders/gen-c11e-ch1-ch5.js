// scripts/builders/gen-c11e-ch1-ch5.js
// Class 11 English Core: Hornbill Prose (Chapters 1 to 5)
const { createQCard, saveChapter } = require('./c11e-helper');

// ==========================================
// CHAPTER 1: The Portrait of a Lady (Khushwant Singh)
// ==========================================
(function buildChapter1() {
  const chNum = 1;
  const bookTitle = 'Hornbill (Prose)';
  const chTitle = 'The Portrait of a Lady';
  const exTitle = 'NCERT Exercises: Understanding the Text & Talking About the Text';

  const svgDiagram = `
  <div style="background:linear-gradient(135deg, #f8fafc, #eff6ff); border:1px solid #cbd5e1; border-radius:12px; padding:20px; margin-bottom:24px;">
    <h3 style="font-size:1.05rem; color:#1e293b; margin-bottom:12px; font-weight:800; display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4338ca" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
      Thematic Concept: Three Phases of the Relationship
    </h3>
    <svg viewBox="0 0 800 220" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', sans-serif;">
      <rect x="20" y="30" width="230" height="150" rx="10" fill="#ffffff" stroke="#4338ca" stroke-width="2"/>
      <text x="135" y="65" text-anchor="middle" font-size="14" font-weight="bold" fill="#4338ca">Phase 1: Village Life</text>
      <text x="135" y="95" text-anchor="middle" font-size="12" fill="#475569">Complete Companionship</text>
      <text x="135" y="120" text-anchor="middle" font-size="11" fill="#64748b">• Woke him up & dressed him</text>
      <text x="135" y="140" text-anchor="middle" font-size="11" fill="#64748b">• School attached to temple</text>
      <text x="135" y="160" text-anchor="middle" font-size="11" fill="#64748b">• Fed street village dogs</text>

      <path d="M 255 105 L 285 105" stroke="#94a3b8" stroke-width="3" marker-end="url(#arrow)"/>

      <rect x="285" y="30" width="230" height="150" rx="10" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
      <text x="400" y="65" text-anchor="middle" font-size="14" font-weight="bold" fill="#0284c7">Phase 2: City Life</text>
      <text x="400" y="95" text-anchor="middle" font-size="12" fill="#475569">The Turning Point</text>
      <text x="400" y="120" text-anchor="middle" font-size="11" fill="#64748b">• Motor bus to English school</text>
      <text x="400" y="140" text-anchor="middle" font-size="11" fill="#64748b">• No scriptures, hated music</text>
      <text x="400" y="160" text-anchor="middle" font-size="11" fill="#64748b">• Fed courtyard sparrows</text>

      <path d="M 520 105 L 550 105" stroke="#94a3b8" stroke-width="3"/>

      <rect x="550" y="30" width="230" height="150" rx="10" fill="#ffffff" stroke="#059669" stroke-width="2"/>
      <text x="665" y="65" text-anchor="middle" font-size="14" font-weight="bold" fill="#059669">Phase 3: University Life</text>
      <text x="665" y="95" text-anchor="middle" font-size="12" fill="#475569">Silent Seclusion</text>
      <text x="665" y="120" text-anchor="middle" font-size="11" fill="#64748b">• Given a separate room</text>
      <text x="665" y="140" text-anchor="middle" font-size="11" fill="#64748b">• Friendship link snapped</text>
      <text x="665" y="160" text-anchor="middle" font-size="11" fill="#64748b">• Spinning wheel & rosary prayers</text>
    </svg>
  </div>`;

  const questions = [
    createQCard(
      'c11e-ch1-q1',
      'Question 1',
      'Understanding the Text',
      'Mention the three phases of the author’s relationship with his grandmother before he left the country to study abroad.',
      `<p>The author, Khushwant Singh, details three distinct, emotional phases in his relationship with his grandmother over the course of his early life:</p>
      <ol style="margin-left:20px; margin-top:8px; line-height:1.7;">
        <li><strong>Phase 1: Childhood in the Village (Intimate Companionship):</strong> The author lived alone with his grandmother while his parents settled in the city. She was his sole caregiver, waking him up, bathing him, plastering his slate, reciting morning prayers in a monotonous sing-song, and escorting him to the temple school. They were inseparable companions, and on their return, she fed stale chapattis to village dogs.</li>
        <li><strong>Phase 2: Boyhood in the City (The Turning Point):</strong> When called to the city by his parents, their bond weakened. Though they still shared a room, the grandmother no longer accompanied him to school as he traveled by an English motor bus. She could neither assist him with his Western science curriculum (law of gravity, Archimedes' principle) nor approve of the lack of scriptural education and the inclusion of music. They saw significantly less of each other.</li>
        <li><strong>Phase 3: University Life (Snapped Friendship & Seclusion):</strong> When the author enrolled in university, he was allocated a room of his own. The last physical link of their companionship was formally severed. The grandmother stoically accepted her seclusion, spending her days at the spinning wheel, reciting prayers on her rosary, and feeding hundreds of sparrows in the courtyard.</li>
      </ol>`,
      3,
      [
        ['Phase 1: Village life with daily care, temple school & dog feeding described', '1 Mark'],
        ['Phase 2: City life turning point with English school & lack of religious teaching', '1 Mark'],
        ['Phase 3: University separate room, snapped friendship link & quiet seclusion', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch1-q2',
      'Question 2',
      'Understanding the Text',
      'Mention three reasons why the author’s grandmother was disturbed when he started going to the city school.',
      `<p>The grandmother was deeply agitated and distressed when the author began attending the city English school because:</p>
      <ol style="margin-left:20px; margin-top:8px; line-height:1.7;">
        <li><strong>Inability to Assist in Studies:</strong> The curriculum was taught in English and covered Western science (Archimedes' principle, gravity, the earth being round). Since she did not know English or modern science, she felt completely sidelined and unable to guide him.</li>
        <li><strong>Absence of Moral and Religious Instruction:</strong> She was distressed to learn that there was no teaching about God, holy scriptures, or spiritual values in the city school curriculum, which she considered the core foundation of true education.</li>
        <li><strong>Aversion to Music Lessons:</strong> When he announced he was receiving music lessons, she was appalled. To her traditional mindset, music had "lewd associations"—she believed it was the exclusive monopoly of harlots and beggars and had no place in the upbringing of respectable gentlefolk. Her disapproving silence conveyed her deep displeasure.</li>
      </ol>`,
      3,
      [
        ['Reason 1: Could not help with English/Western science lessons', '1 Mark'],
        ['Reason 2: Absence of religious teachings and scriptures in the syllabus', '1 Mark'],
        ['Reason 3: Strict orthodox belief that music was indecent for gentlefolk', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch1-q3',
      'Question 3',
      'Understanding the Text',
      'Mention three ways in which the author’s grandmother spent her days after he grew up.',
      `<p>After the author grew up and was assigned a separate room at university, the grandmother spent her days in three fixed routines:</p>
      <ol style="margin-left:20px; margin-top:8px; line-height:1.7;">
        <li><strong>Spinning Wheel:</strong> From sunrise to sunset, she sat by her spinning wheel spinning thread, rarely pausing to speak to anyone in the household.</li>
        <li><strong>Continuous Prayer and Rosary:</strong> Her lips constantly moved in an inaudible, silent prayer while her fingers ceaselessly told the beads of her rosary.</li>
        <li><strong>Feeding the Courtyard Sparrows:</strong> Only in the afternoon did she relax for half an hour to feed sparrows in the verandah. She broke bread into little crumbs, and hundreds of birds perched on her legs, shoulders, and head. She smiled gently but never shooed them away; this was consistently the happiest half-hour of her day.</li>
      </ol>`,
      3,
      [
        ['Spinning wheel from sunrise to sunset in quiet solitary labour', '1 Mark'],
        ['Constant silent prayers while telling the beads of her rosary', '1 Mark'],
        ['Afternoon ritual of feeding crumbs to hundreds of fearless sparrows', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch1-q4',
      'Question 4',
      'Understanding the Text',
      'Mention the odd way in which the author’s grandmother behaved just before she died.',
      `<p>Just before her death, the grandmother exhibited strange and uncharacteristic behavior:</p>
      <ul style="margin-left:20px; margin-top:8px; line-height:1.7;">
        <li><strong>Sudden Break in Lifelong Habit:</strong> On the evening the author returned from abroad, she did not pray—a first in her entire life. Instead, she collected women from the neighborhood, acquired an old dilapidated drum, and thudded its sagging skin for hours, singing celebratory songs of warriors returning home.</li>
        <li><strong>Pre-monition of Impending End:</strong> The next morning she was taken ill with a mild fever. Although the doctor assured the family it would pass, she declared with absolute conviction that her end was near.</li>
        <li><strong>Refusal to Converse:</strong> She stated that since she had omitted her prayers in the last chapter of her life, she would not waste another moment talking to her family.</li>
        <li><strong>Peaceful Departure in Prayer:</strong> Ignoring all familial protests, she lay peacefully in bed, reciting prayers and telling her beads until her lips stopped moving and the rosary fell from her lifeless fingers.</li>
      </ul>`,
      3,
      [
        ['Unusual evening celebration beating drum and singing homecoming songs', '1 Mark'],
        ['Firm proclamation that her end was near despite medical reassurance', '1 Mark'],
        ['Refusal to talk, devoting every last breath to silent prayer and beads', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch1-q5',
      'Question 5',
      'Understanding the Text',
      'Mention the way in which the sparrows expressed their sorrow when the author’s grandmother died.',
      `<p>The sparrows paid an extraordinary, solemn tribute to the departed grandmother, displaying emotional empathy that transcended animal instinct:</p>
      <ul style="margin-left:20px; margin-top:8px; line-height:1.7;">
        <li><strong>Silent Gathering:</strong> When the grandmother's shroud-wrapped body lay on the verandah floor, thousands of sparrows flew in and sat scattered all over the courtyard.</li>
        <li><strong>Total Absence of Chirping:</strong> Unlike their usual lively chatter and chirruping, there was complete, mournful silence across the courtyard.</li>
        <li><strong>Disregard for Food:</strong> Feeling pity, the author’s mother threw small pieces of bread crumbs to them, exactly as the grandmother used to. The sparrows took absolutely no notice of the bread, proving they had not assembled for food but to mourn their human benefactor.</li>
        <li><strong>Quiet Departure:</strong> As soon as the corpse was carried out for cremation, the sparrows flew away silently. The next morning, the sweeper swept the untouched bread crumbs into the dustbin.</li>
      </ul>`,
      3,
      [
        ['Thousands of sparrows assembled in complete, eerie silence', '1 Mark'],
        ['Refusal to touch breadcrumbs thrown by the author’s mother', '1 Mark'],
        ['Quiet, solemn dispersal once the grandmother’s bier was carried away', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch1-q6',
      'Question 6',
      'Talking About the Text',
      'The author’s grandmother was a religious person. What are the different ways in which we come to know this?',
      `<p>Khushwant Singh’s narrative paints the portrait of an intensely pious, spiritual woman whose existence was anchored in religious faith:</p>
      <ol style="margin-left:20px; margin-top:8px; line-height:1.7;">
        <li><strong>Inaudible Prayers & Rosary:</strong> Her lips were perpetually moving in an inaudible, meditative prayer, and her hands were continuously occupied telling the beads of her rosary.</li>
        <li><strong>Temple Visits in the Village:</strong> She chose to accompany the author to the village school every morning specifically because the school was attached to a temple, allowing her to sit inside and read holy scriptures while he studied the alphabet.</li>
        <li><strong>Morning Hymns:</strong> While washing and dressing the author, she recited morning hymns in a monotonous sing-song voice, hoping he would absorb them by heart.</li>
        <li><strong>Discontent with Secular Curriculum:</strong> In the city, her primary resentment against the modern school was its lack of religious and moral instruction.</li>
        <li><strong>Compassion for God's Creatures:</strong> Feeding stale chapattis to village dogs and bread crumbs to sparrows was an extension of her religious duty and dharmic compassion.</li>
        <li><strong>Devotion at the Hour of Death:</strong> On her deathbed, she refused to waste precious minutes in conversation, dedicating her final moments purely to God until the rosary slipped from her fingers.</li>
      </ol>`,
      4,
      [
        ['Continuous telling of rosary beads and silent prayer recitation', '1 Mark'],
        ['Temple routine, reading scriptures and teaching morning hymns', '1 Mark'],
        ['Philosophical distress over lack of God/scriptures in modern schools', '1 Mark'],
        ['Prioritizing communion with God over family conversation on deathbed', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch1-q7',
      'Question 7',
      'Talking About the Text',
      'Describe the mutual love and bond between the grandmother and the author. Did the emotional distance change their feelings for each other?',
      `<p>The relationship between the author and his grandmother is one of profound, unspoken tenderness, mutual respect, and emotional steadfastness:</p>
      <ul style="margin-left:20px; margin-top:8px; line-height:1.7;">
        <li><strong>Deep Childhood Affection:</strong> In early childhood, the grandmother was the author's world. She tended to his physical and emotional needs with unconditional maternal warmth, fostering deep mutual trust.</li>
        <li><strong>Acceptance of Changing Circumstances:</strong> As the author grew into adolescence and adulthood, physical distance inevitably grew—first through city schooling, then university separation, and eventually five years of foreign study. However, the grandmother never harbored bitterness, never demanded attention, and gracefully accepted her seclusion without guilt-tripping the author.</li>
        <li><strong>Unfading Emotional Bond:</strong> When the author left for abroad, she kissed his forehead silently at the railway station—a moist touch the author cherished as possibly the last physical imprint of their love. When he returned five years later, she clasped him in her arms, whispering her prayers.</li>
        <li><strong>Conclusion:</strong> Although modernization and adulthood created physical distance, their underlying emotional connection remained pristine and untarnished until the very end.</li>
      </ul>`,
      4,
      [
        ['Early childhood companionship and tender nurturing described', '1 Mark'],
        ['Dignified acceptance of inevitable separation due to higher studies', '1 Mark'],
        ['Railway station farewell kiss and affectionate homecoming reunion', '1 Mark'],
        ['Concluding analysis confirming enduring mutual love despite physical distance', '1 Mark']
      ]
    )
  ];

  saveChapter(chNum, bookTitle, chTitle, svgDiagram, exTitle, questions, "We're Not Afraid to Die... if We Can All Be Together");
})();

// ==========================================
// CHAPTER 2: "We're Not Afraid to Die... if We Can All Be Together" (Gordon Cook & Alan East)
// ==========================================
(function buildChapter2() {
  const chNum = 2;
  const bookTitle = 'Hornbill (Prose)';
  const chTitle = "We're Not Afraid to Die... if We Can All Be Together";
  const exTitle = 'NCERT Exercises: Understanding the Text & Talking About the Text';

  const svgDiagram = `
  <div style="background:linear-gradient(135deg, #f0fdf4, #e0f2fe); border:1px solid #cbd5e1; border-radius:12px; padding:20px; margin-bottom:24px;">
    <h3 style="font-size:1.05rem; color:#1e293b; margin-bottom:12px; font-weight:800; display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
      Voyage Map & Crisis Timeline: Wavewalker’s Heroic Journey
    </h3>
    <svg viewBox="0 0 800 200" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', sans-serif;">
      <rect x="20" y="25" width="220" height="150" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
      <text x="130" y="55" text-anchor="middle" font-size="13" font-weight="bold" fill="#0284c7">Stage 1: July 1976</text>
      <text x="130" y="80" text-anchor="middle" font-size="11" fill="#475569">Plymouth to Cape Town</text>
      <text x="130" y="105" text-anchor="middle" font-size="10" fill="#64748b">• 105,000 km pleasant run</text>
      <text x="130" y="125" text-anchor="middle" font-size="10" fill="#64748b">• Took crewmen Larry & Herb</text>
      <text x="130" y="145" text-anchor="middle" font-size="10" fill="#64748b">• Southern Indian Ocean entry</text>

      <path d="M 245 100 L 275 100" stroke="#94a3b8" stroke-width="3"/>

      <rect x="275" y="25" width="240" height="150" rx="8" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
      <text x="395" y="55" text-anchor="middle" font-size="13" font-weight="bold" fill="#dc2626">Stage 2: Jan 2 - 4 Crisis</text>
      <text x="395" y="80" text-anchor="middle" font-size="11" fill="#475569">Gigantic Waves & Blast</text>
      <text x="395" y="105" text-anchor="middle" font-size="10" fill="#64748b">• Torrential explosion on deck</text>
      <text x="395" y="125" text-anchor="middle" font-size="10" fill="#64748b">• Broken ribs, flooded cabins</text>
      <text x="395" y="145" text-anchor="middle" font-size="10" fill="#64748b">• Continuous manual pumping</text>

      <path d="M 520 100 L 550 100" stroke="#94a3b8" stroke-width="3"/>

      <rect x="550" y="25" width="230" height="150" rx="8" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
      <text x="665" y="55" text-anchor="middle" font-size="13" font-weight="bold" fill="#16a34a">Stage 3: Jan 6 Relief</text>
      <text x="665" y="80" text-anchor="middle" font-size="11" fill="#475569">Arrival at Ile Amsterdam</text>
      <text x="665" y="105" text-anchor="middle" font-size="10" fill="#64748b">• Pinprick volcanic island</text>
      <text x="665" y="125" text-anchor="middle" font-size="10" fill="#64748b">• French scientific base</text>
      <text x="665" y="145" text-anchor="middle" font-size="10" fill="#64748b">• 28 inhabitants welcome them</text>
    </svg>
  </div>`;

  const questions = [
    createQCard(
      'c11e-ch2-q1',
      'Question 1',
      'Understanding the Text',
      'List the steps taken by the captain: (i) to protect the ship when rough weather began, (ii) to check the flooding of water in the ship.',
      `<p>The captain took critical precautionary and damage-control measures:</p>
      <h4 style="color:#0284c7; margin-top:8px;">(i) Steps to protect the ship when rough weather began:</h4>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>Slowing the Boat:</strong> Dropped the storm jib and looped a heavy mooring rope across the stern to reduce the vessel's speed.</li>
        <li><strong>Double-Lashing Everything:</strong> Securely fastened all gear and equipment on deck to prevent shifting.</li>
        <li><strong>Life-Raft Drill:</strong> Attached lifelines to life rafts, donned waterproof oilskins, and strapped on life jackets.</li>
      </ul>
      <h4 style="color:#0284c7; margin-top:10px;">(ii) Steps to check the flooding of water in the ship:</h4>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>Waterproofing Gaping Holes:</strong> Stretched canvas and secured waterproof hatch covers across the shattered starboard side to deflect incoming waves over the side.</li>
        <li><strong>Managing Hand Pumps:</strong> When primary hand pumps clogged with debris and the main electric pump short-circuited under water, the captain located an auxiliary electric pump under the chartroom floor and connected it to an out-pipe.</li>
        <li><strong>Continuous Pumping:</strong> Larry, Herb, and the narrator pumped out water relentlessly for 36 hours until the water level was reduced to a few centimeters.</li>
      </ul>`,
      4,
      [
        ['Steps to protect ship: storm jib, mooring rope, lifelines and life jackets', '2 Marks'],
        ['Steps to check flooding: canvas hatch covers, spare electric pump, non-stop pumping', '2 Marks']
      ]
    ),
    createQCard(
      'c11e-ch2-q2',
      'Question 2',
      'Understanding the Text',
      'Describe the mental condition of the voyagers on 4 and 5 January.',
      `<p>The emotional and psychological condition of the voyagers fluctuated dramatically across these 48 hours:</p>
      <ul style="margin-left:20px; margin-top:8px; line-height:1.7;">
        <li><strong>January 4 (Temporary Respite & Fragile Hope):</strong> After 36 hours of continuous pumping, they managed to keep pace with the incoming seawater. They consumed their first meal in nearly two days (corned beef and cracker biscuits). The atmosphere was tinged with exhausted relief, although the captain knew the boat’s structural frame was critically weakened.</li>
        <li><strong>January 5 (Grim Despair & Impending Doom):</strong> Their respite was short-lived. By 4 p.m., black storm clouds gathered again, winds whipped up to 40 knots, and waves towered menacingly. When the narrator went in to comfort the children, Jonathan asked if they were going to die. The children’s bravery deeply moved him, but when night fell, water seeped in steadily through broken timber. By dawn, the situation was utterly hopeless, and the adult voyagers sat holding hands, convinced that their end was very near.</li>
      </ul>`,
      3,
      [
        ['Jan 4: First meal, temporary relief after 36 hours pumping', '1 Mark'],
        ['Jan 5: Return of ferocious storm, rising water and grim despair', '1 Mark'],
        ['Emotional tension between adults facing death and children displaying courage', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch2-q3',
      'Question 3',
      'Understanding the Text',
      'Describe the shifts in the narration of the events as indicated in the three sections of the text. Give a subtitle to each section.',
      `<p>The narrative undergoes distinct tonal and thematic shifts across three main sections:</p>
      <ol style="margin-left:20px; margin-top:8px; line-height:1.7;">
        <li><strong>Section 1: The Joyous Voyage (Subtitle: <em>"Smooth Sailing and Cheerful Ambition"</em>)</strong>
          <br>Covers the cheerful departure from Plymouth in July 1976 to round the world like Captain James Cook. The tone is buoyant, confident, and optimistic. The 105,000-kilometer leg to Cape Town passes smoothly, and they celebrate a joyous Christmas 3,500 km east of Cape Town despite rough seas.
        </li>
        <li><strong>Section 2: The Catastrophic Struggle (Subtitle: <em>"Into the Jaws of the Tempest"</em>)</strong>
          <br>Begins on January 2 with gigantic waves and a deafening explosion that slams Wavewalker. The narrative turns breathless, intense, and visceral—detailing broken bones, punctured lungs, flooded cabins, failing pumps, and desperate repairs amidst freezing gale winds.
        </li>
        <li><strong>Section 3: The Triumph of Resilience (Subtitle: <em>"Pinpricks in the Vast Ocean: Safe Haven"</em>)</strong>
          <br>Covers January 6 onward, characterized by precise navigation calculations, sheer mental determination, and overwhelming emotional relief when the captain spots the volcanic rock of Ile Amsterdam. The tone transforms into gratitude, celebrating human endurance and family unity.
        </li>
      </ol>`,
      3,
      [
        ['Section 1: Cheerful start with appropriate subtitle', '1 Mark'],
        ['Section 2: Violent crisis and survival battle with subtitle', '1 Mark'],
        ['Section 3: Mathematical rescue and island triumph with subtitle', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch2-q4',
      'Question 4',
      'Talking About the Text',
      'What difference did you notice between the reaction of the adults and the children when faced with danger?',
      `<p>The story contrasts adult responsibility with childlike heroism when confronted by catastrophic danger:</p>
      <ul style="margin-left:20px; margin-top:8px; line-height:1.7;">
        <li><strong>The Adults’ Reaction:</strong> The adults (the narrator, Mary, Larry Vigil, and Herb Seigler) reacted with pragmatic grit and intense dedication. They experienced terror and physical anguish, yet channeled it into relentless, disciplined action—steering, pumping, navigating, and repairing. When hope slipped away, they succumbed quietly to sorrow, holding hands in resigned acceptance of death.</li>
        <li><strong>The Children’s Reaction:</strong> The children (seven-year-old Suzanne and six-year-old Jonathan) exhibited astonishing maturity, fearlessness, and emotional consideration:
          <ul style="margin-left:20px; margin-top:4px;">
            <li><strong>Suzanne:</strong> Suffered a severely bumped forehead, black eyes, and a deep cut on her arm, yet concealed the full extent of her injuries so as not to distract her father while he fought to keep the ship afloat. Later, she presented a cheerful handmade card with caricatures of her parents to lift their spirits.</li>
            <li><strong>Jonathan:</strong> Uttered the immortal words that gave the chapter its title: <em>"We aren’t afraid of dying if we can all be together—you and Mummy, Sue and all of us."</em> This innocent display of unity renewed the father’s will to battle the ocean.</li>
          </ul>
        </li>
      </ul>`,
      4,
      [
        ['Adult reaction: Practical action, disciplined pumping, psychological vulnerability', '2 Marks'],
        ['Children reaction: Suzanne hiding head injury & Jonathan declaring fearlessness', '2 Marks']
      ]
    ),
    createQCard(
      'c11e-ch2-q5',
      'Question 5',
      'Talking About the Text',
      'How does the story suggest that optimism helps to endure “the direst stress”?',
      `<p>The narrative is a testament to the transformative power of optimism when confronted by lethal circumstances:</p>
      <ul style="margin-left:20px; margin-top:8px; line-height:1.7;">
        <li><strong>Unshakable Crew Morale:</strong> Despite icy seas pouring through shattered wood, Larry Vigil and Herb Seigler pumped cheerfully like madmen, refusing to surrender to despair.</li>
        <li><strong>The Captain’s Mathematical Grit:</strong> Even with broken ribs, a damaged compass, and missing navigational equipment, the narrator continued calculating drift, leeway, and magnetic variation, pursuing a tiny 65-kilometer-wide island in 150,000 square kilometers of ocean.</li>
        <li><strong>Emotional Anchor of Family:</strong> Suzanne’s humorous card and Jonathan’s inspiring fearlessness revitalized the father’s sinking spirits whenever exhaustion threatened to break his resolve.</li>
        <li><strong>Conclusion:</strong> Optimism provided the voyagers with the mental fortitude to convert catastrophic panic into constructive action, ultimately steering them to safety at Ile Amsterdam.</li>
      </ul>`,
      3,
      [
        ['Cheerfulness and sustained pumping by Larry and Herb under icy conditions', '1 Mark'],
        ['Father’s continuous navigation calculations despite severe injuries', '1 Mark'],
        ['Children’s optimism acting as emotional fuel to overcome dire stress', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch2-q6',
      'Question 6',
      'Talking About the Text',
      'What lessons can be drawn from the voyagers’ experience for handling crisis and life-threatening situations?',
      `<p>The harrowing experience of Wavewalker offers timeless lessons in crisis management:</p>
      <ol style="margin-left:20px; margin-top:8px; line-height:1.7;">
        <li><strong>Thorough Preparation:</strong> The family spent 16 years honing their seafaring skills and rigorously tested Wavewalker in the roughest British weather before undertaking the voyage. Preparedness is the first line of defense.</li>
        <li><strong>Teamwork and Role Division:</strong> Everyone performed their assigned role without panic—Mary held the wheel, the crewmen operated pumps, and the captain sealed deck leaks.</li>
        <li><strong>Mental Composure under Pressure:</strong> In life-or-death crises, panic accelerates disaster. Retaining calm composure allowed the captain to think rationally, find an auxiliary pump, and chart navigation coordinates.</li>
        <li><strong>Mutual Empathy and Love:</strong> Caring for one another elevates human spirit above physical pain, generating superhuman endurance.</li>
      </ol>`,
      3,
      [
        ['Pre-voyage preparation and technical mastery of skills', '1 Mark'],
        ['Seamless teamwork and calm rational thinking during disaster', '1 Mark'],
        ['Mutual empathy, emotional resilience and positive mental outlook', '1 Mark']
      ]
    )
  ];

  saveChapter(chNum, bookTitle, chTitle, svgDiagram, exTitle, questions, 'Discovering Tut: the Saga Continues');
})();

// ==========================================
// CHAPTER 3: Discovering Tut: the Saga Continues (A.R. Williams)
// ==========================================
(function buildChapter3() {
  const chNum = 3;
  const bookTitle = 'Hornbill (Prose)';
  const chTitle = 'Discovering Tut: the Saga Continues';
  const exTitle = 'NCERT Exercises: Understanding the Text & Talking About the Text';

  const svgDiagram = `
  <div style="background:linear-gradient(135deg, #fef3c7, #fffbeb); border:1px solid #fde68a; border-radius:12px; padding:20px; margin-bottom:24px;">
    <h3 style="font-size:1.05rem; color:#78350f; margin-bottom:12px; font-weight:800; display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      Chronology of Modern Investigations on King Tut’s Mummy
    </h3>
    <svg viewBox="0 0 800 180" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', sans-serif;">
      <circle cx="120" cy="90" r="45" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="120" y="85" text-anchor="middle" font-size="13" font-weight="bold" fill="#78350f">1922</text>
      <text x="120" y="105" text-anchor="middle" font-size="11" fill="#92400e">Howard Carter</text>
      <text x="120" y="150" text-anchor="middle" font-size="10" fill="#64748b">Discovery of Tomb</text>

      <line x1="165" y1="90" x2="335" y2="90" stroke="#cbd5e1" stroke-width="3"/>

      <circle cx="380" cy="90" r="45" fill="#eff6ff" stroke="#0284c7" stroke-width="2"/>
      <text x="380" y="85" text-anchor="middle" font-size="13" font-weight="bold" fill="#0369a1">1968</text>
      <text x="380" y="105" text-anchor="middle" font-size="11" fill="#0284c7">Anatomy Prof.</text>
      <text x="380" y="150" text-anchor="middle" font-size="10" fill="#64748b">X-Ray: Missing Breastbone</text>

      <line x1="425" y1="90" x2="595" y2="90" stroke="#cbd5e1" stroke-width="3"/>

      <circle cx="640" cy="90" r="45" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
      <text x="640" y="85" text-anchor="middle" font-size="13" font-weight="bold" fill="#065f46">2005</text>
      <text x="640" y="105" text-anchor="middle" font-size="11" fill="#059669">Zahi Hawass</text>
      <text x="640" y="150" text-anchor="middle" font-size="10" fill="#64748b">1,700 Multi-Slice CT Scan</text>
    </svg>
  </div>`;

  const questions = [
    createQCard(
      'c11e-ch3-q1',
      'Question 1',
      'Understanding the Text',
      'Give reasons for the following: (i) King Tut’s body has been subjected to repeated scrutiny, (ii) Howard Carter’s investigation was resented, (iii) Carter had to chisel away the solidified resins to raise the king’s remains.',
      `<p>Detailed reasons for each of the archaeological milestones:</p>
      <h4 style="color:#d97706; margin-top:8px;">(i) King Tut’s body subjected to repeated scrutiny:</h4>
      <p>King Tutankhamun was the last youthful heir of a magnificent royal dynasty that had ruled Egypt for centuries. He died unexpectedly as a teenager under mysterious circumstances. In addition to the immense gold treasures buried with him, historians and forensic experts were desperate to determine two unanswered questions: <em>How did he die?</em> and <em>How old was he at the time of his death?</em></p>
      <h4 style="color:#d97706; margin-top:8px;">(ii) Howard Carter’s investigation was resented:</h4>
      <p>British archaeologist Howard Carter’s 1922 investigation was heavily resented because of his invasive, damaging methods. In his obsession to recover the solid gold coffin and priceless artifacts, Carter severed the mummy’s head and hacked off nearly every major joint to free the body from solidified ritual resins, permanently disfiguring Tut’s physical remains.</p>
      <h4 style="color:#d97706; margin-top:8px;">(iii) Carter chiseling away solidified resins:</h4>
      <p>The ritual funerary resins used during Tut’s embalming had hardened over 3,300 years, cementing the mummy firmly to the bottom of the solid gold inner coffin. Carter initially attempted to soften the resins by setting the coffin outside in the blazing Egyptian sun at 149°F (65°C), but nothing budged. To prevent thieves from ripping the mummy apart for gold, Carter had no choice but to chisel the hardened resins away from beneath the limbs and torso.</p>`,
      3,
      [
        ['(i) Scrutiny due to royal dynasty end, mysterious teenage death & treasures', '1 Mark'],
        ['(ii) Resentment due to destructive hacking and damage to the mummy', '1 Mark'],
        ['(iii) Chiseling required because resins hardened like stone, unyielding to sun heat', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch3-q2',
      'Question 2',
      'Understanding the Text',
      'Give reasons for the following: (i) Tut’s body was buried along with gilded treasures, (ii) The boy king changed his name from Tutankhaten to Tutankhamun.',
      `<p>Reasons grounded in ancient Egyptian theology and historical context:</p>
      <h4 style="color:#d97706; margin-top:8px;">(i) Why Tut’s body was buried with gilded treasures:</h4>
      <p>The ancient Egyptian royals were unimaginably wealthy and firmly believed in the afterlife (resurrection). They believed the deceased king could take his riches into the next world. Therefore, Tut was buried with dazzling pure-gold artifacts—collars, inlaid neckpieces, bracelets, rings, amulets, sandals, and gold inner coffins—believed to guarantee immortality, alongside everyday necessities like board games, a bronze razor, linen garments, and cases of food and wine.</p>
      <h4 style="color:#d97706; margin-top:8px;">(ii) Why the boy king changed his name from Tutankhaten to Tutankhamun:</h4>
      <p>Tut’s predecessor, the eccentric pharaoh Amenhotep IV (Akhenaten), had outlawed the worship of Egypt's major deity Amun, smashed his temples, closed his shrines, and promoted the sun disc god, Aten. When young Tut took power, he restored the ancient religion, reopened the temples of Amun, and changed his name from <em>Tutankhaten</em> ("Living Image of Aten") to <em>Tutankhamun</em> ("Living Image of Amun") to signal a religious restoration across Egypt.</p>`,
      3,
      [
        ['(i) Ancient belief in afterlife, resurrection & eternal guarantee of wealth', '1.5 Marks'],
        ['(ii) Religious restoration of Amun worship after Akhenaten’s radical reign', '1.5 Marks']
      ]
    ),
    createQCard(
      'c11e-ch3-q3',
      'Question 3',
      'Talking About the Text',
      'Scientific intervention is necessary to unearth buried mysteries. Discuss in groups/pairs.',
      `<p>Modern archaeology relies on non-invasive scientific technologies rather than destructive physical excavations:</p>
      <ul style="margin-left:20px; margin-top:8px; line-height:1.7;">
        <li><strong>Non-Invasive Diagnostics:</strong> Traditional 19th-century archaeology focused on treasure-hunting and destructive physical extraction (e.g., Howard Carter). Modern scientific interventions—such as computed tomography (CT scanning), digital X-rays, carbon dating, and DNA fingerprinting—allow researchers to examine fragile antiquities without inflicting physical damage.</li>
        <li><strong>High-Resolution Forensic Reconstruction:</strong> King Tut’s 2005 CT scan captured 1,700 digital cross-sectional X-ray images, reconstructing his skull, vertebrae, and ribs in microscopic millimeter slices, verifying that his breastbone and front ribs were indeed missing (likely from an ancient chest trauma).</li>
        <li><strong>Conclusion:</strong> Science rescues historical truth from speculative mythology while preserving the cultural sanctity of ancient relics for posterity.</li>
      </ul>`,
      3,
      [
        ['Contrast between destructive early archaeology and non-destructive modern tools', '1 Mark'],
        ['CT scans, digital X-rays, DNA analysis providing objective medical data', '1 Mark'],
        ['Verification of historical anomalies while conserving ancient remains', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch3-q4',
      'Question 4',
      'Talking About the Text',
      'Advanced technology gives us conclusive evidence of past events. Discuss in groups/pairs.',
      `<p>A balanced critical evaluation of advanced technological tools in historical inquiry:</p>
      <ul style="margin-left:20px; margin-top:8px; line-height:1.7;">
        <li><strong>Points in Favor (High Precision Clues):</strong>
          <br>Advanced tools provide incontrovertible anatomical and chronological data. In Tut’s case, the CT scan definitively disproved rumors that his head had been crushed by an execution weapon, verified his age at death as roughly 19 years, and confirmed that a broken leg had occurred shortly before death, possibly leading to a fatal infection.
        </li>
        <li><strong>Limitations (Need for Interpretive Context):</strong>
          <br>While technology provides high-resolution anatomical cross-sections, it cannot reconstruct human intent, political conspiracies, or historical motives. For instance, whether Tut's chest injury occurred in battle, a chariot accident, or a court assassination remains open to historical deduction. Technology supplies the evidence; human historians must supply the contextual interpretation.
        </li>
      </ul>`,
      3,
      [
        ['Arguments supporting technological precision in physical and chronological facts', '1.5 Marks'],
        ['Arguments highlighting boundaries where historical interpretation is still needed', '1.5 Marks']
      ]
    ),
    createQCard(
      'c11e-ch3-q5',
      'Question 5',
      'Talking About the Text',
      'Traditions are paramount / Scientific research on ancient remains should be prohibited. What are the opposing viewpoints on this debate?',
      `<p>An exploration of the ethical debate between cultural sanctity and scientific progress:</p>
      <ul style="margin-left:20px; margin-top:8px; line-height:1.7;">
        <li><strong>In Favor of Preserving Traditions (Prohibiting Research on Remains):</strong>
          <br>Every civilization has sacred funeral rituals designed to allow the dead to rest in eternal peace. Desecrating royal tombs, stripping shrouds, and transporting mummified human bodies through diagnostic scanners degrades sacred human remains into biological specimens. The fear of "the pharaoh’s curse" reflects humanity’s deep-seated ethical boundary against disturbing the repose of the deceased.
        </li>
        <li><strong>In Favor of Scientific Research (Unearthing Historical Truth):</strong>
          <br>Historical inquiry is a vital human enterprise. Studying ancient remains sheds light on ancestral human genetics, prehistoric pathologies, medical practices, and societal collapses. Without scientific research, misconceptions and myths prevail over truth. Modern scans honor historical figures by documenting their lives accurately.
        </li>
      </ul>`,
      3,
      [
        ['Arguments for traditional respect and ethical inviolability of graves', '1.5 Marks'],
        ['Arguments for scientific illumination, genetic history and medical archaeology', '1.5 Marks']
      ]
    ),
    createQCard(
      'c11e-ch3-q6',
      'Question 6',
      'Talking About the Text',
      'What were the dramatic atmospheric and supernatural elements that accompanied King Tut’s CT scan in 2005?',
      `<p>The narrative highlights an eerie coincidence of nature and myth during the CT scan:</p>
      <ul style="margin-left:20px; margin-top:8px; line-height:1.7;">
        <li><strong>Violent Desert Weather:</strong> An angry, dark wind whipped up desert sand into "dark-bellied clouds" tumbling across the Valley of the Kings, veiling the evening stars in a casket of grey haze.</li>
        <li><strong>Machine Malfunction:</strong> When Tut’s body was placed inside the multimillion-dollar Siemens CT scanner, the cooling fan abruptly stopped working due to fine desert sand entering the mechanism. A nervous guard joked, <em>"Curse of the pharaoh!"</em></li>
        <li><strong>Relief upon Completion:</strong> The diagnostic team successfully deployed two white substitute plastic fans to complete the scan. Once the data was secured and Tut was returned to his wooden coffin, the wind stopped completely, and a peaceful silence settled over the valley, with Orion—the ancient god of the afterlife—watching over the boy king.</li>
      </ul>`,
      3,
      [
        ['Violent desert sandstorm and dark clouds over the Valley of the Kings', '1 Mark'],
        ['Cooling fan failure caused by blowing desert sand and guard’s comment', '1 Mark'],
        ['Resolution with backup fans and return of quiet peace under constellation Orion', '1 Mark']
      ]
    )
  ];

  saveChapter(chNum, bookTitle, chTitle, svgDiagram, exTitle, questions, 'The Adventure');
})();

// ==========================================
// CHAPTER 4: The Adventure (Jayant Narlikar)
// ==========================================
(function buildChapter4() {
  const chNum = 4;
  const bookTitle = 'Hornbill (Prose)';
  const chTitle = 'The Adventure';
  const exTitle = 'NCERT Exercises: Understanding the Text & Talking About the Text';

  const svgDiagram = `
  <div style="background:linear-gradient(135deg, #fdf2f8, #f5f3ff); border:1px solid #e9d5ff; border-radius:12px; padding:20px; margin-bottom:24px;">
    <h3 style="font-size:1.05rem; color:#6b21a8; margin-bottom:12px; font-weight:800; display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9333ea" stroke-width="2"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
      The Physics of Alternate Reality: Catastrophe Theory & Quantum Parallel Worlds
    </h3>
    <svg viewBox="0 0 800 190" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', sans-serif;">
      <rect x="30" y="30" width="220" height="130" rx="8" fill="#ffffff" stroke="#9333ea" stroke-width="2"/>
      <text x="140" y="60" text-anchor="middle" font-size="13" font-weight="bold" fill="#6b21a8">Historical Reality A</text>
      <text x="140" y="85" text-anchor="middle" font-size="11" fill="#475569">Real World (Known History)</text>
      <text x="140" y="110" text-anchor="middle" font-size="10" fill="#64748b">• Vishwasrao shot in battle</text>
      <text x="140" y="128" text-anchor="middle" font-size="10" fill="#64748b">• Marathas defeated at Panipat</text>
      <text x="140" y="146" text-anchor="middle" font-size="10" fill="#64748b">• British took over India</text>

      <path d="M 250 95 L 340 95" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4"/>
      <circle cx="295" cy="95" r="14" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
      <text x="295" y="99" text-anchor="middle" font-size="10" font-weight="bold" fill="#6b21a8">VS</text>

      <rect x="340" y="30" width="220" height="130" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
      <text x="450" y="60" text-anchor="middle" font-size="13" font-weight="bold" fill="#0369a1">Transition Trigger</text>
      <text x="450" y="85" text-anchor="middle" font-size="11" fill="#475569">Catastrophe Theory</text>
      <text x="450" y="110" text-anchor="middle" font-size="10" fill="#64748b">• Gaitonde in truck collision</text>
      <text x="450" y="128" text-anchor="middle" font-size="10" fill="#64748b">• Mind pondering Panipat</text>
      <text x="450" y="146" text-anchor="middle" font-size="10" fill="#64748b">• Quantum state transition</text>

      <path d="M 560 95 L 590 95" stroke="#94a3b8" stroke-width="3"/>

      <rect x="590" y="30" width="190" height="130" rx="8" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
      <text x="685" y="60" text-anchor="middle" font-size="13" font-weight="bold" fill="#15803d">Alternate Reality B</text>
      <text x="685" y="85" text-anchor="middle" font-size="11" fill="#475569">Parallel World Experienced</text>
      <text x="685" y="110" text-anchor="middle" font-size="10" fill="#64748b">• Bullet missed Vishwasrao</text>
      <text x="685" y="128" text-anchor="middle" font-size="10" fill="#64748b">• Marathas won Panipat</text>
      <text x="685" y="146" text-anchor="middle" font-size="10" fill="#64748b">• Democratic Sovereign India</text>
    </svg>
  </div>`;

  const questions = [
    createQCard(
      'c11e-ch4-q1',
      'Question 1',
      'Understanding the Text',
      'Tick whether each statement is True or False: (i) The story is an account of real events, (ii) The story hinges on a particular historical event, (iii) Rajendra Deshpande was a historian, (iv) The places mentioned in the story are all imaginary, (v) The story tries to relate history to science.',
      `<p>Evaluation of each statement based on the text:</p>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>(i) The story is an account of real events. &mdash; <strong style="color:#dc2626;">[FALSE]</strong> (It is a science-fiction narrative exploring speculative alternate history and quantum theories).</li>
        <li>(ii) The story hinges on a particular historical event. &mdash; <strong style="color:#16a34a;">[TRUE]</strong> (It pivots on the outcome of the Third Battle of Panipat fought in 1761 between the Marathas and Ahmad Shah Abdali).</li>
        <li>(iii) Rajendra Deshpande was a historian. &mdash; <strong style="color:#dc2626;">[FALSE]</strong> (Rajendra Deshpande is an eminent physicist and mathematician; Professor Gangadharpant Gaitonde is the historian).</li>
        <li>(iv) The places mentioned in the story are all imaginary. &mdash; <strong style="color:#dc2626;">[FALSE]</strong> (Real geographical locations are featured, including Pune, Bombay/Mumbai, Victoria Terminus, Azad Maidan, and the Town Hall Asiatic Society Library).</li>
        <li>(v) The story tries to relate history to science. &mdash; <strong style="color:#16a34a;">[TRUE]</strong> (It correlates historical branch points with Catastrophe Theory and the Many-Worlds interpretation of Quantum Mechanics).</li>
      </ul>`,
      5,
      [
        ['(i) False identified with scientific fiction justification', '1 Mark'],
        ['(ii) True identified with Third Battle of Panipat', '1 Mark'],
        ['(iii) False identified with Deshpande as physicist', '1 Mark'],
        ['(iv) False identified with real geographical locations', '1 Mark'],
        ['(v) True identified with Quantum & Catastrophe theories', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch4-q2',
      'Question 2',
      'Understanding the Text',
      'Briefly explain the following statements from the text: (i) “You neither travelled to the past nor the future. You were in the present experiencing a different world.” (ii) “You have passed through a fantastic experience: or more correctly, a catastrophic experience.”',
      `<p>Detailed explanations provided by Rajendra Deshpande to Professor Gaitonde:</p>
      <h4 style="color:#6b21a8; margin-top:8px;">(i) “You neither travelled to the past nor the future...”</h4>
      <p>Rajendra clarifies that Gaitonde did not engage in physical time travel. He was not in the 18th century; he was in contemporary, modern-day Bombay, but in an <em>alternate parallel reality</em>. In quantum physics, multiple versions of reality can coexist simultaneously. Due to his subconscious fixation during a collision, Gaitonde made a quantum leap into another branch of reality existing right now in the present.</p>
      <h4 style="color:#6b21a8; margin-top:8px;">(ii) “You have passed through a fantastic experience: or more correctly, a catastrophic experience.”</h4>
      <p>Rajendra uses the term "catastrophic" in a mathematical sense, invoking <strong>Catastrophe Theory</strong>. In non-linear systems, a tiny variation or tipping point can trigger a massive divergence of outcomes. In the Battle of Panipat, a bullet grazing Vishwasrao’s ear rather than killing him was a bifurcation point that completely reversed the outcome of the battle, altering the subsequent destiny of India.</p>`,
      3,
      [
        ['Explanation of quantum parallel world existing in present time', '1.5 Marks'],
        ['Explanation of Catastrophe Theory with historical bifurcation point', '1.5 Marks']
      ]
    ),
    createQCard(
      'c11e-ch4-q3',
      'Question 3',
      'Understanding the Text',
      'Briefly explain the following statements from the text: (i) Gangadharpant could not help comparing the country he knew with what he was witnessing around him, (ii) “The lack of determinism in quantum theory!” (iii) “You need some interaction to cause a transition.”',
      `<p>Explanation of the theoretical and observational insights:</p>
      <h4 style="color:#6b21a8; margin-top:8px;">(i) Gangadharpant comparing the two Indias:</h4>
      <p>In his known reality, India endured British colonization, partition, and administrative dependency. In the alternate Bombay he entered, India was a proud, self-reliant democratic nation where the East India Company operated only on leased commercial terms, the Marathas ruled from Delhi, and Indian technology and railways were modern and efficient.</p>
      <h4 style="color:#6b21a8; margin-top:8px;">(ii) “The lack of determinism in quantum theory!”:</h4>
      <p>In classical physics, an object’s trajectory is deterministic and predictable. In quantum mechanics, an electron does not have a single fixed path; it can jump to different energy states unpredictably. Similarly, macroscopic reality is not deterministic—alternative outcomes do not disappear; they manifest in parallel quantum worlds.</p>
      <h4 style="color:#6b21a8; margin-top:8px;">(iii) “You need some interaction to cause a transition.”:</h4>
      <p>Just as an electron requires an interaction (such as absorbing a photon) to transition between orbits, Gaitonde’s brain needed an external catalyst. The violent physical shock of the truck accident, synchronized with his intense mental pondering on "what if the Marathas had won Panipat," triggered a neurological quantum transition into the parallel reality.</p>`,
      3,
      [
        ['Comparison between colonized India and prosperous sovereign alternate India', '1 Mark'],
        ['Explanation of quantum non-determinism and electron transitions', '1 Mark'],
        ['Explanation of accident + thoughts acting as catalytic transition', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch4-q4',
      'Question 4',
      'Talking About the Text',
      'A single event may change the course of the history of a nation. Discuss taking opposite points of view.',
      `<p>Opposing philosophical and historical perspectives on historical turning points:</p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>Arguments FOR (The "Great Man" / Tipping Point Theory):</strong>
          <br>Proponents argue that pivotal moments often balance on knife-edge accidents. In the story, Vishwasrao surviving the gunshot preserved Maratha army morale, crushed Abdali’s troops, and blocked European colonial dominance. Real history exhibits similar critical events—the assassination of Archduke Franz Ferdinand sparking World War I, or the miraculous retreat at Dunkirk changing WWII.
        </li>
        <li><strong>Arguments AGAINST (Socioeconomic Determinism):</strong>
          <br>Critics argue that history is driven by massive economic currents, technological advances, and demographic forces rather than isolated accidents. Even if Vishwasrao had survived, Maratha internal factionalism and European naval and industrial superiority might still have eventually altered India's balance of power. Isolated incidents may alter timelines, but underlying historical momentum dictates long-term destiny.
        </li>
      </ul>`,
      4,
      [
        ['Viewpoint FOR: Detailed tipping point examples and military morale impacts', '2 Marks'],
        ['Viewpoint AGAINST: Socioeconomic determinism and macro-historical currents', '2 Marks']
      ]
    ),
    createQCard(
      'c11e-ch4-q5',
      'Question 5',
      'Talking About the Text',
      'Reality is what is directly experienced through the senses. Discuss taking opposite points of view.',
      `<p>An exploration of sensory perception versus scientific and cognitive reality:</p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>Arguments FOR (Empirical Realism):</strong>
          <br>Human beings perceive existence through their senses—sight, sound, touch, smell, and taste. For Gaitonde, the alternate Bombay was undeniable: he held printed currency, ate in restaurants, read historical volumes in the Town Hall library, and was physically assaulted by an angry crowd at Azad Maidan. The torn page of the <em>Bhausahebanchi Bakhar</em> in his pocket was tangible, physical proof of his experience.
        </li>
        <li><strong>Arguments AGAINST (Quantum & Cognitive Science):</strong>
          <br>Modern quantum physics demonstrates that reality is far vaster than human sensory apparatus. Phenomena like electromagnetic spectrums, quantum superposition, and subatomic particles cannot be perceived by naked senses yet are fundamentally real. Furthermore, human consciousness is vulnerable to hallucinations, coma states, and neural misfiring. Sensory experience is merely an interpretation generated by the brain, not absolute reality itself.
        </li>
      </ul>`,
      4,
      [
        ['Arguments FOR: Tangible sensory proof, physical receipt and library documents', '2 Marks'],
        ['Arguments AGAINST: Limitations of human senses, quantum physics and neural states', '2 Marks']
      ]
    ),
    createQCard(
      'c11e-ch4-q6',
      'Question 6',
      'Talking About the Text',
      'What tangible evidence convinced Rajendra Deshpande that Professor Gaitonde was not simply hallucinating?',
      `<p>Rajendra was initially skeptical, treating Gaitonde’s story as a traumatic concussion hallucination, until physical proof was presented:</p>
      <ul style="margin-left:20px; margin-top:8px; line-height:1.7;">
        <li><strong>The Missing Page of the Bakhar:</strong> When Gaitonde reached into his pocket to retrieve his notes, he inadvertently pulled out a torn page from the <em>Bhausahebanchi Bakhar</em> that he had absentmindedly slipped into his pocket at the alternate Town Hall library.</li>
        <li><strong>The Discrepancy in Text:</strong> Rajendra compared Gaitonde’s torn page with the accepted historical version of the <em>Bakhar</em>. In the real-world historical edition, the text read: <em>"...and then Vishwasrao was guided to the battle and a bullet hit him; he fell dead."</em> But on Gaitonde’s page, the printed Marathi text declared: <em>"...and then Vishwasrao was guided to the battle. A bullet brushed past his ear. By the grace of God, he was saved!"</em></li>
        <li><strong>Irrefutable Physical Reality:</strong> A hallucination cannot deposit a physically printed, ink-on-paper page from an alternate book inside a person's real jacket pocket. This physical anomaly proved Gaitonde had genuinely crossed quantum dimensional thresholds.</li>
      </ul>`,
      3,
      [
        ['Torn page from the Bhausahebanchi Bakhar produced from pocket', '1 Mark'],
        ['Textual proof: bullet grazing ear vs killing Vishwasrao', '1 Mark'],
        ['Physical ink-and-paper evidence refuting pure psychological hallucination', '1 Mark']
      ]
    )
  ];

  saveChapter(chNum, bookTitle, chTitle, svgDiagram, exTitle, questions, 'Silk Road');
})();

// ==========================================
// CHAPTER 5: Silk Road (Nick Middleton)
// ==========================================
(function buildChapter5() {
  const chNum = 5;
  const bookTitle = 'Hornbill (Prose)';
  const chTitle = 'Silk Road';
  const exTitle = 'NCERT Exercises: Understanding the Text & Talking About the Text';

  const svgDiagram = `
  <div style="background:linear-gradient(135deg, #f0fdfa, #f5f3ff); border:1px solid #ccfbf1; border-radius:12px; padding:20px; margin-bottom:24px;">
    <h3 style="font-size:1.05rem; color:#0f766e; margin-bottom:12px; font-weight:800; display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="2"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
      The Pilgrimage Route (Kora) Across the Tibetan Plateau
    </h3>
    <svg viewBox="0 0 800 170" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', sans-serif;">
      <rect x="20" y="30" width="160" height="110" rx="8" fill="#ffffff" stroke="#0d9488" stroke-width="2"/>
      <text x="100" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f766e">Ravu</text>
      <text x="100" y="75" text-anchor="middle" font-size="10" fill="#475569">Departure Point</text>
      <text x="100" y="95" text-anchor="middle" font-size="9" fill="#64748b">• Farewell from Lhamo</text>
      <text x="100" y="112" text-anchor="middle" font-size="9" fill="#64748b">• Gift: Sheepskin coat</text>

      <path d="M 180 85 L 210 85" stroke="#94a3b8" stroke-width="2"/>

      <rect x="210" y="30" width="160" height="110" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
      <text x="290" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">High Passes</text>
      <text x="290" y="75" text-anchor="middle" font-size="10" fill="#475569">5,515m Altitude</text>
      <text x="290" y="95" text-anchor="middle" font-size="9" fill="#64748b">• Kyang & Tibetan mastiffs</text>
      <text x="290" y="112" text-anchor="middle" font-size="9" fill="#64748b">• Treacherous snow turns</text>

      <path d="M 370 85 L 400 85" stroke="#94a3b8" stroke-width="2"/>

      <rect x="400" y="30" width="160" height="110" rx="8" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
      <text x="480" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">Hor & Darchen</text>
      <text x="480" y="75" text-anchor="middle" font-size="10" fill="#475569">Grim Reality</text>
      <text x="480" y="95" text-anchor="middle" font-size="9" fill="#64748b">• Desolate, dusty Hor</text>
      <text x="480" y="112" text-anchor="middle" font-size="9" fill="#64748b">• Chest congestion at Darchen</text>

      <path d="M 560 85 L 590 85" stroke="#94a3b8" stroke-width="2"/>

      <rect x="590" y="30" width="190" height="110" rx="8" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
      <text x="685" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#15803d">Mount Kailash</text>
      <text x="685" y="75" text-anchor="middle" font-size="10" fill="#475569">Sacred Kora with Norbu</text>
      <text x="685" y="95" text-anchor="middle" font-size="9" fill="#64748b">• Meets Tibetan scholar Norbu</text>
      <text x="685" y="112" text-anchor="middle" font-size="9" fill="#64748b">• Hires yaks for pilgrimage</text>
    </svg>
  </div>`;

  const questions = [
    createQCard(
      'c11e-ch5-q1',
      'Question 1',
      'Understanding the Text',
      'Give reasons for the following: (i) The article has been titled ‘Silk Road’, (ii) Tibetan mastiffs were popular in China’s imperial courts, (iii) The author’s experience at Hor was in stark contrast to earlier accounts of the place.',
      `<p>Detailed reasons grounded in geography, cultural history, and travel literature:</p>
      <h4 style="color:#0f766e; margin-top:8px;">(i) Why the article is titled ‘Silk Road’:</h4>
      <p>The journey retraces parts of the ancient Silk Road—the historic trading network connecting China, Central Asia, India, and the Mediterranean. The author, a physical geographer, traveled along these ancient high-altitude trade corridors across the Tibetan plateau towards Mount Kailash to undertake the sacred Buddhist pilgrimage (<em>Kora</em>).</p>
      <h4 style="color:#0f766e; margin-top:8px;">(ii) Why Tibetan mastiffs were popular in China’s imperial courts:</h4>
      <p>Tibetan mastiffs were enormous, ferocious black guard dogs with massive heads, explosive barks, and absolute fearlessness. They were trained by Tibetan nomads (<em>drokbas</em>) to guard encampments and fiercely chase away any intruder. Because of their fierce loyalty and hunting prowess, they were brought along the Silk Road as royal tributes to Chinese emperors to serve as guard dogs.</p>
      <h4 style="color:#0f766e; margin-top:8px;">(iii) Author’s experience at Hor in contrast to earlier accounts:</h4>
      <p>Earlier accounts by travelers like Japanese monk Ekai Kawaguchi (who wept at the sublime purity of Lake Manasarovar) and Swedish explorer Sven Hedin depicted Hor as a place of spiritual transcendence. In stark contrast, Nick Middleton found Hor to be a desolate, wretched, and grim settlement strewn with dust, rocks, and decades of rusted tin cans and garbage, devoid of any natural vegetation.</p>`,
      3,
      [
        ['(i) Traversal of historic trade routes towards Mount Kailash kora', '1 Mark'],
        ['(ii) Enormous ferocity, loyalty and tribute status in imperial courts', '1 Mark'],
        ['(iii) Disillusionment: dirty, barren, trash-strewn settlement vs spiritual accounts', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch5-q2',
      'Question 2',
      'Understanding the Text',
      'Give reasons for the following: (i) The author was disappointed with Darchen, (ii) The author thought that his positive thinking strategy worked well after all.',
      `<p>Detailed psychological and situational analysis:</p>
      <h4 style="color:#0f766e; margin-top:8px;">(i) The author was disappointed with Darchen:</h4>
      <p>The author reached Darchen dusty and physically exhausted, only to fall acutely ill with severe sinus blockage and nocturnal breathing difficulties at the high altitude. Furthermore, Darchen was drab, dusty, and full of garbage heaps. To his immense dismay, he had arrived early in the season—there were no other pilgrims, the town had a derelict feel, and he found nobody who could speak English to help him organize his <em>Kora</em>.</p>
      <h4 style="color:#0f766e; margin-top:8px;">(ii) The author thought his positive thinking strategy worked well:</h4>
      <p>Feeling stranded, lonely, and medically drained in Darchen's solitary cafe, Middleton resolved to maintain a positive mental outlook. Almost immediately, he encountered Norbu, a jovial Tibetan scholar working at the Chinese Academy of Social Sciences in Beijing. Norbu spoke fluent English, was also carrying an English academic book, and was visiting to perform the <em>Kora</em> himself. The two struck an instant friendship and decided to team up, hiring yaks to carry their luggage, proving to the author that optimism had yielded an ideal outcome.</p>`,
      3,
      [
        ['(i) Acute altitude sickness, lack of pilgrims, and language barrier at Darchen', '1.5 Marks'],
        ['(ii) Serendipitous meeting with English-speaking academic partner Norbu', '1.5 Marks']
      ]
    ),
    createQCard(
      'c11e-ch5-q3',
      'Question 3',
      'Understanding the Text',
      'Briefly comment on: (i) The purpose of the author’s journey to Mount Kailash, (ii) The author’s physical condition in Darchen, (iii) The author’s meeting with Norbu.',
      `<p>Commentary on central narrative facets:</p>
      <h4 style="color:#0f766e; margin-top:8px;">(i) Purpose of author’s journey to Mount Kailash:</h4>
      <p>As an academic geographer, Nick Middleton wished to experience the extreme geography of Tibet and complete the traditional <em>Kora</em> (circumambulation) around sacred Mount Kailash. While motivated partly by cultural appreciation, his drive was primarily that of an intrepid travel writer and geographer exploring remote terrains.</p>
      <h4 style="color:#0f766e; margin-top:8px;">(ii) Physical condition in Darchen:</h4>
      <p>At an altitude of over 4,500 meters, Middleton suffered from acute mountain sickness. His nasal passages were congested, his chest felt heavy, and whenever he lay flat on his mattress, his breath choked, causing heart palpitations. He spent a sleepless night sitting upright in terror before Tsetan took him to the local Tibetan medical college, where a five-day herbal concoction restored his health.</p>
      <h4 style="color:#0f766e; margin-top:8px;">(iii) Meeting with Norbu:</h4>
      <p>Sitting alone in Darchen’s rustic cafe, Middleton met Norbu, who noticed the author reading an English novel. Norbu turned out to be an unconventional pilgrim—an urban Tibetan academic who wrote papers on the Kailash <em>Kora</em> but had never actually undertaken it. Both were slightly out of shape and had no desire to prostrate themselves around the mountain, making them well-matched trekking companions.</p>`,
      3,
      [
        ['(i) Geographer’s desire to experience the sacred Kailash kora', '1 Mark'],
        ['(ii) Altitude-induced sleep apnea, sinus blockage and Tibetan herbal cure', '1 Mark'],
        ['(iii) Pragmatic partnership with Tibetan academic researcher Norbu', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch5-q4',
      'Question 4',
      'Understanding the Text',
      'Briefly comment on: (i) Tsetan’s support to the author during the journey, (ii) “As a Buddhist, he told me, he knew that it didn’t really matter if I passed away, but he thought it would be bad for business.”',
      `<p>Analysis of character dynamics and cultural worldview:</p>
      <h4 style="color:#0f766e; margin-top:8px;">(i) Tsetan’s support during the journey:</h4>
      <p>Tsetan was an exceptional driver, mechanic, and companion. He skillfully maneuvered his four-wheel-drive vehicle across treacherous iced tracks and high passes (5,515 m), throwing dirt on snow to gain traction. When the author fell sick in Darchen, Tsetan took him directly to the medical college, translated his symptoms to the Tibetan doctor, and ensured he was on the road to recovery before departing.</p>
      <h4 style="color:#0f766e; margin-top:8px;">(ii) Meaning of Tsetan’s Buddhist remark:</h4>
      <p>This humorous yet profound statement reflects a pragmatic collision of Buddhist philosophy and commercial livelihood. As a practicing Tibetan Buddhist, Tsetan viewed bodily death as merely a transition of the soul to its next incarnation, hence "it didn't really matter." However, as a professional travel guide and driver, having a Western tourist die under his care in Darchen would be devastating for his tourism business reputation.</p>`,
      3,
      [
        ['(i) Exceptional mountain driving, icy road maneuvering and healthcare support', '1.5 Marks'],
        ['(ii) Blend of Buddhist spiritual detachment regarding death and commercial realism', '1.5 Marks']
      ]
    ),
    createQCard(
      'c11e-ch5-q5',
      'Question 5',
      'Talking About the Text',
      'Discuss the sensitive and generous behaviour of hill-folk as observed in the chapter.',
      `<p>The author’s travelogue highlights the warm, hospitable nature of high-altitude Himalayan communities:</p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>Lhamo’s Parting Gift:</strong> Before the author left Ravu, Lhamo gave him a traditional long-sleeved sheepskin coat (<em>chuba</em>), recognizing that he would freeze in the biting winds of the high passes. She demonstrated genuine, thoughtful maternal concern for a departing guest.</li>
        <li><strong>Tsetan’s Unfailing Loyalty:</strong> Tsetan cared for the author beyond commercial duty. When Middleton struggled to breathe, Tsetan personally escorted him to the medical college in the middle of the night and waited until he showed improvement.</li>
        <li><strong>Innocence Uncorrupted by Commercialism:</strong> Despite living in harsh, impoverished environments, the hill folk maintain simplicity, spiritual calm, and genuine human warmth.</li>
      </ul>`,
      3,
      [
        ['Lhamo’s gift of the sheepskin coat showing thoughtful hospitality', '1 Mark'],
        ['Tsetan’s patient guidance, driving skill and medical care', '1 Mark'],
        ['General ethos of simplicity and community solidarity among hill people', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch5-q6',
      'Question 6',
      'Talking About the Text',
      'What precautions should travelers take when visiting high-altitude regions like Tibet or Ladakh?',
      `<p>Essential health and logistical guidelines for high-altitude expeditions:</p>
      <ol style="margin-left:20px; line-height:1.7;">
        <li><strong>Gradual Acclimatization:</strong> Ascend slowly to allow the body to adapt to lower oxygen levels and barometric pressure, preventing Acute Mountain Sickness (AMS) or High Altitude Pulmonary Edema (HAPE).</li>
        <li><strong>Medical Preparedness:</strong> Carry altitude sickness medication (e.g., Diamox), nasal decongestants, portable oxygen cans, and essential pain relievers.</li>
        <li><strong>Adequate Hydration & Nutrition:</strong> Drink copious amounts of water and warm fluids to counter extreme atmospheric dryness, and consume calorie-rich, easily digestible food.</li>
        <li><strong>Layered Thermal Clothing:</strong> Wear windproof and waterproof insulated gear, thermal inners, UV-protective sunglasses, and heavy fleece gloves to guard against severe hypothermia and frostbite.</li>
        <li><strong>Experienced Local Guides:</strong> Travel with licensed local drivers familiar with unpredictable mountain blizzards, black ice, and river crossings.</li>
      </ol>`,
      3,
      [
        ['Gradual acclimatization and pacing of altitude gain', '1 Mark'],
        ['Medical kit (Diamox, oxygen, decongestants) and hydration', '1 Mark'],
        ['Thermal clothing layers and relying on experienced local drivers', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch5-q7',
      'Question 7',
      'Talking About the Text',
      'Describe the author’s encounter with the Tibetan medical practitioner and the treatment prescribed.',
      `<p>The author’s encounter with Tibetan traditional medicine in Darchen was surprisingly effective:</p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>The Setting:</strong> The Tibetan Medical College in Darchen was rustic, resembling a monastery courtyard with plain stone buildings and no white coats or diagnostic machines.</li>
        <li><strong>The Diagnosis:</strong> The doctor wore traditional Tibetan garb. Instead of a stethoscope, he carefully felt the author’s pulse at the wrists, observing his eyes and tongue. He diagnosed the condition as a severe cold compounded by the effects of extreme altitude.</li>
        <li><strong>The Treatment:</strong> The doctor provided a five-day supply of Tibetan herbal remedies packed in fifteen small brown paper packets. The morning dose was a brown powder taken with hot water (tasting like cinnamon), and the lunch and bedtime doses were small brown pellets. The remedies proved miraculously effective—Middleton slept soundly that very night.</li>
      </ul>`,
      3,
      [
        ['Rustic clinic setting without modern diagnostic machinery', '1 Mark'],
        ['Pulse diagnosis by Tibetan physician identifying cold & altitude shock', '1 Mark'],
        ['Fifteen brown herbal powder packets providing immediate, restful relief', '1 Mark']
      ]
    )
  ];

  saveChapter(chNum, bookTitle, chTitle, svgDiagram, exTitle, questions, 'A Photograph');
})();
