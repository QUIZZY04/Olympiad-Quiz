// scripts/builders/gen-c11e-ch6-ch10.js
// Class 11 English Core: Hornbill Poetry (Chapters 6 to 10)
const { createQCard, saveChapter } = require('./c11e-helper');

// ==========================================
// CHAPTER 6: A Photograph (Shirley Toulson)
// ==========================================
(function buildChapter6() {
  const chNum = 6;
  const bookTitle = 'Hornbill (Poetry)';
  const chTitle = 'A Photograph';
  const exTitle = 'NCERT Exercises: Think It Out & Poetic Appreciation';

  const svgDiagram = `
  <div style="background:linear-gradient(135deg, #f8fafc, #ede9fe); border:1px solid #ddd6fe; border-radius:12px; padding:20px; margin-bottom:24px;">
    <h3 style="font-size:1.05rem; color:#5b21b6; margin-bottom:12px; font-weight:800; display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
      Thematic Structure: Three Stages of Time & Mourning
    </h3>
    <svg viewBox="0 0 800 160" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', sans-serif;">
      <rect x="25" y="25" width="225" height="110" rx="8" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
      <text x="137" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#5b21b6">Past: Childhood</text>
      <text x="137" y="78" text-anchor="middle" font-size="11" fill="#475569">The Beach Holiday</text>
      <text x="137" y="100" text-anchor="middle" font-size="10" fill="#64748b">• Mother aged 12 with cousins</text>
      <text x="137" y="118" text-anchor="middle" font-size="10" fill="#64748b">• Carefree sea paddling</text>

      <path d="M 250 80 L 285 80" stroke="#94a3b8" stroke-width="2"/>

      <rect x="285" y="25" width="225" height="110" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
      <text x="397" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">Middle: 20-30 Years Later</text>
      <text x="397" y="78" text-anchor="middle" font-size="11" fill="#475569">The Mother’s Laughter</text>
      <text x="397" y="100" text-anchor="middle" font-size="10" fill="#64748b">• Mother laughs at snapshot</text>
      <text x="397" y="118" text-anchor="middle" font-size="10" fill="#64748b">• Nostalgia for lost youth</text>

      <path d="M 510 80 L 545 80" stroke="#94a3b8" stroke-width="2"/>

      <rect x="545" y="25" width="230" height="110" rx="8" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
      <text x="660" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">Present: Bereavement</text>
      <text x="660" y="78" text-anchor="middle" font-size="11" fill="#475569">The Daughter’s Silence</text>
      <text x="660" y="100" text-anchor="middle" font-size="10" fill="#64748b">• Mother dead 12 years</text>
      <text x="660" y="118" text-anchor="middle" font-size="10" fill="#64748b">• "Its silence silences"</text>
    </svg>
  </div>`;

  const questions = [
    createQCard(
      'c11e-ch6-q1',
      'Question 1',
      'Think It Out',
      'What does the word ‘cardboard’ denote in the poem? Why has this word been used?',
      `<p>The word <strong>‘cardboard’</strong> denotes the stiff, thick backing on which the vintage black-and-white photograph of the poet’s mother and her cousins is mounted.</p>
      <p>The poet specifically uses the word ‘cardboard’ for multiple literary reasons:</p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>Frail and Insubstantial Medium:</strong> Unlike marble or enduring stone monuments, cardboard is a cheap, perishable material that inevitably yellows and degrades over time, underscoring the fragility of human records.</li>
        <li><strong>Stark Contrast between Inanimate Matter & Mortal Life:</strong> The lifeless, stiff piece of cardboard has survived for decades, outlasting the vibrant, living human being it portrays. It ironically emphasizes the transience of human life compared to ordinary, inanimate objects.</li>
      </ul>`,
      2,
      [
        ['Cardboard refers to the stiff photograph mounting board', '1 Mark'],
        ['Signifies perishability and ironic durability over human mortality', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch6-q2',
      'Question 2',
      'Think It Out',
      'What has the camera captured?',
      `<p>The camera captured an innocent, sunlit beach holiday from the distant past:</p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>The Subjects:</strong> The poet's mother when she was about twelve years old, flanked by her two younger cousins, Betty and Dolly. Each cousin was holding one of her hands as they were paddling in the coastal shallows.</li>
        <li><strong>The Moment:</strong> The three girls stood smiling with their sea-blown hair framing their faces, looking directly into the camera held by their uncle.</li>
        <li><strong>The Contrast:</strong> It captures a youthful, carefree moment of laughter frozen in time before adulthood, motherhood, and mortality overtook them.</li>
      </ul>`,
      2,
      [
        ['Mother at age 12 paddling in the sea with cousins Betty and Dolly', '1 Mark'],
        ['Smiling faces through windblown hair photographed by the uncle', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch6-q3',
      'Question 3',
      'Think It Out',
      'What has not changed over the years? Does this suggest something to you?',
      `<p>The <strong>sea</strong> has not changed over the years. Its restless waves wash the shore today in precisely the same manner as they did when the three young girls stood there decades ago.</p>
      <p><strong>Philosophical Suggestion:</strong></p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>Permanence vs. Transience:</strong> This creates a poignant contrast between the immortal, unchanging permanence of Nature and the fleeting, perishable nature of human life.</li>
        <li><strong>The Transferred Epithet:</strong> The poet underscores this through the memorable poetic phrase <em>“terribly transient feet.”</em> While the mortal human feet undergo growth, aging, decay, and death, the sea remains immortal and unblemished by the passage of time.</li>
      </ul>`,
      3,
      [
        ['Identification of the sea as the unchanging element over time', '1 Mark'],
        ['Contrast between immortal Nature and mortal human transience', '1 Mark'],
        ['Explanation of "terribly transient feet" (transferred epithet)', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch6-q4',
      'Question 4',
      'Think It Out',
      'The poet’s mother laughed at the snapshot. What did this laugh indicate?',
      `<p>The mother’s laugh, occurring some twenty to thirty years after the beach holiday, indicates a complex mixture of nostalgia, amusement, and bittersweet acceptance:</p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>Amusement at Childhood Dress:</strong> She was amused by the old-fashioned beach clothes that Betty, Dolly, and she were made to wear by their parents for the seaside holiday.</li>
        <li><strong>Nostalgia for Lost Innocence:</strong> The laughter expressed fondness for a carefree, innocent childhood that was gone forever. It demonstrated her ability to look back on lost youth with grace and cheerful resignation.</li>
      </ul>`,
      2,
      [
        ['Amusement at old-fashioned seaside attire chosen by parents', '1 Mark'],
        ['Nostalgia for innocence and bittersweet acceptance of lost childhood', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch6-q5',
      'Question 5',
      'Think It Out',
      'What is the meaning of the line “Both wry with the laboured ease of loss”?',
      `<p>This profound line encapsulates the central emotional core of the poem through an <strong>oxymoron</strong> (<em>“laboured ease”</em>):</p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>Two Different Losses:</strong>
          <br><strong>The Mother’s Loss:</strong> The sea holiday of her youth was the mother's past, which she mourned with a nostalgic smile.
          <br><strong>The Poet’s Loss:</strong> Her deceased mother’s laughter is the poet's past, which the poet now mourns in grief.
        </li>
        <li><strong>The Paradox of ‘Laboured Ease’:</strong> Both the mother and daughter have had to struggle intensely (<em>“laboured”</em>) over years to come to terms with their respective irrevocable losses, until time forces an outward calm or acceptance (<em>“ease”</em>). Yet, the lingering pain leaves a twisted, bittersweet, or ironic expression (<em>“wry”</em>) on the face.</li>
      </ul>`,
      3,
      [
        ['Identification of the two parallel losses (mother’s childhood & poet’s mother)', '1 Mark'],
        ['Explanation of the oxymoron "laboured ease" (struggle yielding forced acceptance)', '1 Mark'],
        ['Significance of "wry" as bittersweet, ironic sorrow', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch6-q6',
      'Question 6',
      'Think It Out',
      'What does “this circumstance” refer to? Explain: “Its silence silences.”',
      `<p><strong>“This circumstance”</strong> refers to the present state of bereavement—the permanent absence and death of the poet’s mother, who has now been dead nearly as many years as the twelve-year-old girl in the photograph had lived.</p>
      <p><strong>Explanation of “Its silence silences”:</strong></p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>Alliteration & Personification:</strong> The repetition of the soft 's' sound mimics the quiet, heavy vacuum of grief.</li>
        <li><strong>Absolute Speechlessness:</strong> The circumstance of death is so final and absolute that there are no words left to express or console the profound ache of loss. The silence of the dead mother and the grave envelopes the living daughter, rendering her completely speechless. Death’s final silence silences all human expression.</li>
      </ul>`,
      3,
      [
        ['"This circumstance" defined as the mother’s death and permanent absence', '1 Mark'],
        ['Alliteration and sonic imagery of "silence silences"', '1 Mark'],
        ['Total paralysis of speech in the face of profound, terminal grief', '1 Mark']
      ]
    )
  ];

  saveChapter(chNum, bookTitle, chTitle, svgDiagram, exTitle, questions, 'The Laburnum Top');
})();

// ==========================================
// CHAPTER 7: The Laburnum Top (Ted Hughes)
// ==========================================
(function buildChapter7() {
  const chNum = 7;
  const bookTitle = 'Hornbill (Poetry)';
  const chTitle = 'The Laburnum Top';
  const exTitle = 'NCERT Exercises: Find Out & Think It Out';

  const svgDiagram = `
  <div style="background:linear-gradient(135deg, #fefce8, #fef08a); border:1px solid #fde047; border-radius:12px; padding:20px; margin-bottom:24px;">
    <h3 style="font-size:1.05rem; color:#854d0e; margin-bottom:12px; font-weight:800; display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca8a04" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V17a1 1 0 0 1-2 0v-.07A7 7 0 0 1 5.07 11H5a1 1 0 0 1 0-2h.07A7 7 0 0 1 11 3.07V3a1 1 0 0 1 2 0v.07A7 7 0 0 1 18.93 9H19a1 1 0 0 1 0 2h-.07A7 7 0 0 1 13 16.93z"/></svg>
      The Dynamic Cycle of Life in "The Laburnum Top"
    </h3>
    <svg viewBox="0 0 800 160" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', sans-serif;">
      <circle cx="130" cy="80" r="50" fill="#ffffff" stroke="#ca8a04" stroke-width="2"/>
      <text x="130" y="75" text-anchor="middle" font-size="12" font-weight="bold" fill="#854d0e">Stillness</text>
      <text x="130" y="95" text-anchor="middle" font-size="10" fill="#64748b">Silent, Yellow, Empty</text>

      <path d="M 185 80 L 295 80" stroke="#94a3b8" stroke-width="3" marker-end="url(#arrow)"/>

      <circle cx="400" cy="80" r="55" fill="#fef08a" stroke="#ca8a04" stroke-width="2.5"/>
      <text x="400" y="70" text-anchor="middle" font-size="13" font-weight="bold" fill="#713f12">Goldfinch Arrives</text>
      <text x="400" y="90" text-anchor="middle" font-size="11" fill="#854d0e">Engine of Her Family</text>
      <text x="400" y="108" text-anchor="middle" font-size="9" fill="#a16207">Chitterings & Tremor of Wings</text>

      <path d="M 510 80 L 615 80" stroke="#94a3b8" stroke-width="3"/>

      <circle cx="670" cy="80" r="50" fill="#ffffff" stroke="#ca8a04" stroke-width="2"/>
      <text x="670" y="75" text-anchor="middle" font-size="12" font-weight="bold" fill="#854d0e">Subsides Empty</text>
      <text x="670" y="95" text-anchor="middle" font-size="10" fill="#64748b">Infinite Silence Returns</text>
    </svg>
  </div>`;

  const questions = [
    createQCard(
      'c11e-ch7-q1',
      'Question 1',
      'Find Out',
      'What is the Laburnum tree called in your language? Which local bird is like the goldfinch?',
      `<p><strong>Language Equivalent:</strong></p>
      <p>In Hindi and most Indian vernacular languages, the Laburnum tree is called the <strong>‘Amaltaas’ (अमलतास)</strong> tree. It is characterized by drooping yellow flower clusters, medicinal pods, and poisonous seeds.</p>
      <p><strong>Similar Local Bird:</strong></p>
      <p>The local bird closely resembling the goldfinch in plumage and size is the <strong>Indian Lutino Ringneck</strong> or the <strong>Yellow-throated Bulbul / Greenfinch (or Eurasian Siskin)</strong>, which exhibits vibrant yellow-streaked plumage, brisk flight, and melodious whistling calls.</p>`,
      2,
      [
        ['Laburnum identified as Amaltaas in Hindi', '1 Mark'],
        ['Bird identified as Yellow Bulbul / Indian Lutino Ringneck / Siskin', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch7-q2',
      'Question 2',
      'Think It Out',
      'What do you notice about the beginning and the ending of the poem?',
      `<p>Ted Hughes crafts a striking <strong>circular structure</strong> connecting the poem’s opening and conclusion:</p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>The Beginning:</strong> The poem opens with quiet desolation: <em>“The Laburnum top is silent, quite still”</em> in the yellow September afternoon sunlight, with yellowing leaves and fallen seeds. It resembles a lifeless corpse.</li>
        <li><strong>The Ending:</strong> After the goldfinch launches away into the infinite blue sky, the poem concludes with the exact same quietude: <em>“and the laburnum subsides to empty.”</em></li>
        <li><strong>Significance:</strong> The bird’s energetic arrival is a transient burst of maternal energy that temporarily awakens the inanimate tree into an engine of life before returning it to primeval silence.</li>
      </ul>`,
      3,
      [
        ['Beginning describes motionless, silent, death-like laburnum top', '1 Mark'],
        ['Ending returns to primeval emptiness once goldfinch flies away', '1 Mark'],
        ['Significance of circular structure emphasizing transience of vital energy', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch7-q3',
      'Question 3',
      'Think It Out',
      'To what is the bird’s movement compared? What is the basis for the comparison?',
      `<p>The bird’s entry into the thick foliage is compared to the movement of a <strong>lizard</strong> (<em>“Sleek as a lizard, and alert, and abrupt”</em>).</p>
      <p><strong>Basis for Comparison:</strong></p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>Sleek & Smooth:</strong> Like a lizard gliding silently over a surface without creating a rustle, the goldfinch slips into the dense yellow foliage with effortless grace.</li>
        <li><strong>Alert & Cautious:</strong> Both creatures display hyper-vigilance, looking around sharply to ensure predators are not observing their movements.</li>
        <li><strong>Abrupt & Rapid:</strong> A lizard makes sudden, darting stops and quick dashes; similarly, the bird makes sudden, sharp movements before vanishing into the interior of the tree to feed her young.</li>
      </ul>`,
      3,
      [
        ['Movement compared to a lizard using simile', '1 Mark'],
        ['Smooth, sleek gliding entry into thick branches', '1 Mark'],
        ['Alert vigilance and abrupt, quick darting movements shared by both', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch7-q4',
      'Question 4',
      'Think It Out',
      'Why is the image of the engine evoked by the poet?',
      `<p>The poet invokes the industrial metaphor of an <strong>engine</strong> because of how energy and movement are generated within the quiet tree:</p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>Source of Energy & Power:</strong> Just as an engine is the beating heart that sets a lifeless machine or locomotive into roaring motion, the goldfinch is the vital source that sets her hidden brood into frenzied activity.</li>
        <li><strong>Sonic Symphony:</strong> When the mother bird enters with food, the nestlings erupt into a mechanical chorus of <em>“chitterings, and a tremor of wings, and trillings.”</em> The entire tree vibrates and shivers like a roaring motor.</li>
        <li><strong>Fueling the Engine:</strong> Hughes writes: <em>“She stokes that engine full.”</em> The mother bird feeds her offspring with nutrient-rich food (stoking fuel) before flitting out to a branch end.</li>
      </ul>`,
      3,
      [
        ['Metaphor of engine as the source of kinetic power for a machine', '1 Mark'],
        ['Nestlings’ eruption of chitterings and wing-tremors compared to machine noise', '1 Mark'],
        ['Maternal feeding described as "stoking the engine" with fuel', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch7-q5',
      'Question 5',
      'Think It Out',
      'What does the phrase “her barred face identity mask” mean?',
      `<p>The phrase refers to the unique facial markings of the goldfinch and their symbolic role in nature:</p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>Camouflage & Disguise:</strong> The goldfinch’s body has yellowish plumage that blends seamlessly into the yellowing leaves and yellow blossoms of the Laburnum tree, rendering her invisible to the external world.</li>
        <li><strong>The Barred Identification:</strong> Her face carries distinctive dark bars or black markings across the eyes. While the rest of her body remains camouflaged, this striped, barred face acts as her "identity badge" or "mask" by which her hungry chicks instantly recognize their mother amidst the dense foliage.</li>
      </ul>`,
      2,
      [
        ['Yellow plumage camouflaging her body within yellow laburnum leaves', '1 Mark'],
        ['Dark striped facial bars acting as an identifying recognition badge for chicks', '1 Mark']
      ]
    )
  ];

  saveChapter(chNum, bookTitle, chTitle, svgDiagram, exTitle, questions, 'The Voice of the Rain');
})();

// ==========================================
// CHAPTER 8: The Voice of the Rain (Walt Whitman)
// ==========================================
(function buildChapter8() {
  const chNum = 8;
  const bookTitle = 'Hornbill (Poetry)';
  const chTitle = 'The Voice of the Rain';
  const exTitle = 'NCERT Exercises: Think It Out & Scientific Parallels';

  const svgDiagram = `
  <div style="background:linear-gradient(135deg, #eff6ff, #dbeafe); border:1px solid #bfdbfe; border-radius:12px; padding:20px; margin-bottom:24px;">
    <h3 style="font-size:1.05rem; color:#1e40af; margin-bottom:12px; font-weight:800; display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
      The Eternal Cycle: Parallel Between Rain & Song
    </h3>
    <svg viewBox="0 0 800 160" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', sans-serif;">
      <rect x="30" y="25" width="220" height="110" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
      <text x="140" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">Birth / Origin</text>
      <text x="140" y="80" text-anchor="middle" font-size="11" fill="#475569">Earth & Water Body</text>
      <text x="140" y="100" text-anchor="middle" font-size="10" fill="#64748b">Rises impalpable (Vapor)</text>
      <text x="140" y="118" text-anchor="middle" font-size="10" fill="#64748b">Issuing from poet's heart</text>

      <path d="M 255 80 L 290 80" stroke="#94a3b8" stroke-width="2"/>

      <rect x="290" y="25" width="220" height="110" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
      <text x="400" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">Transformation & Wandering</text>
      <text x="400" y="80" text-anchor="middle" font-size="11" fill="#475569">Vaguely Formed Clouds</text>
      <text x="400" y="100" text-anchor="middle" font-size="10" fill="#64748b">Altogether changed, yet same</text>
      <text x="400" y="118" text-anchor="middle" font-size="10" fill="#64748b">Song travels to all listeners</text>

      <path d="M 515 80 L 550 80" stroke="#94a3b8" stroke-width="2"/>

      <rect x="550" y="25" width="225" height="110" rx="8" fill="#ffffff" stroke="#059669" stroke-width="2"/>
      <text x="662" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">Descent & Return with Love</text>
      <text x="662" y="80" text-anchor="middle" font-size="11" fill="#475569">Nourishment & Fulfillment</text>
      <text x="662" y="100" text-anchor="middle" font-size="10" fill="#64748b">Revives dormant unborn seeds</text>
      <text x="662" y="118" text-anchor="middle" font-size="10" fill="#64748b">Duly with love returns</text>
    </svg>
  </div>`;

  const questions = [
    createQCard(
      'c11e-ch8-q1',
      'Question 1',
      'Think It Out',
      'There are two voices in the poem. Who do they belong to? Which lines indicate this?',
      `<p>The poem is structured as an imaginary, philosophical dialogue between two distinct voices:</p>
      <ol style="margin-left:20px; line-height:1.7;">
        <li><strong>The Voice of the Poet:</strong>
          <br>Indicated in the opening line: <em>“And who art thou? said I to the soft-falling shower,”</em>
        </li>
        <li><strong>The Voice of the Rain:</strong>
          <br>Indicated in lines 3 and 4: <em>“I am the Poem of Earth, said the voice of the rain,”</em>
        </li>
      </ol>
      <p>Whitman uses <strong>personification</strong> to give the shower of rain a vocal consciousness capable of translating its ecological mission into human language.</p>`,
      2,
      [
        ['Identification of the poet and rain voices with exact textual quotes', '1 Mark'],
        ['Explanation of personification giving conscious speech to rain', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch8-q2',
      'Question 2',
      'Think It Out',
      'What does the phrase “strange to tell” mean?',
      `<p>The phrase <strong>“strange to tell”</strong> conveys the poet’s sheer wonder, amazement, and disbelief.</p>
      <p>When the poet casually addresses the falling shower with the inquiry <em>"Who art thou?"</em>, he never expected an answer from an inanimate meteorological phenomenon. To his pleasant astonishment, the rain responded in an articulate, poetic voice that the poet felt compelled to transcribe and translate into human language.</p>`,
      2,
      [
        ['Poet’s surprise and wonder at an unexpected reply from nature', '1 Mark'],
        ['Rain responding with articulate voice requiring translation', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch8-q3',
      'Question 3',
      'Think It Out',
      'There is a parallel drawn between rain and music. Which words indicate this? Explain the similarity between the two.',
      `<p>The parallel between rain and music is explicitly established when rain proclaims herself to be the <strong>“Poem of Earth”</strong>, and elaborated in the final bracketed lines:</p>
      <blockquote style="margin:8px 0; padding:8px 16px; background:#f1f5f9; border-left:4px solid #2563eb; font-style:italic;">
        “(For song, issuing from its birth-place, after fulfilment, wandering / Reck’d or unreck’d, duly with love returns.)”
      </blockquote>
      <p><strong>Similarities between Rain and Song (Music):</strong></p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>Origin:</strong> A song originates from the soul or heart of a poet/singer; rain originates from the land and bottomless ocean depths.</li>
        <li><strong>Wandering & Transformation:</strong> A song travels across the world, touching diverse listeners; rain rises into the skies as invisible vapor, condensates into clouds, and wanders through atmospheric heavens.</li>
        <li><strong>Disregard for Recognition:</strong> Whether heard and appreciated (<em>“reck’d”</em>) or ignored (<em>“unreck’d”</em>), neither ceases its mission.</li>
        <li><strong>Return with Love:</strong> Both return with love to replenish their birthplace—song returns to the singer's heart as joy and artistic fulfillment, while rain returns to the parched earth to revive seeds and wash away dust layers.</li>
      </ul>`,
      4,
      [
        ['Textual quote indicating parallel (Poem of Earth / bracketed song lines)', '1 Mark'],
        ['Shared origins (poet’s soul vs earth and water bodies)', '1 Mark'],
        ['Wandering whether reck’d or unreck’d', '1 Mark'],
        ['Final return with love to purify and beautify their birthplace', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch8-q4',
      'Question 4',
      'Think It Out',
      'How is the cyclic movement of rain brought out in the poem? Compare it with what you have learnt in science.',
      `<p>Walt Whitman poeticizes the scientific <strong>hydrological (water) cycle</strong> through evocative verses:</p>
      <ol style="margin-left:20px; line-height:1.7;">
        <li><strong>Evaporation (Ascent):</strong> The poem states that rain rises <em>“impalpable out of the land and the bottomless sea”</em> into the heavens. In science, water evaporates invisibly from water bodies as vapor due to solar heating.</li>
        <li><strong>Condensation (Formation):</strong> In the heavens, it is <em>“vaguely form’d, altogether changed, and yet the same.”</em> Scientifically, invisible vapor cools and condenses around microscopic dust particles to form clouds; its physical state changes from gas to droplets, yet its chemical nature ($H_2O$) remains identical.</li>
        <li><strong>Precipitation (Descent):</strong> Rain descends to <em>“lave the droughts, atomies, dust-layers of the globe”</em> and germinate <em>“seeds that had been only latent, unborn.”</em> Scientifically, precipitation brings moisture back to earth, recharging aquifers and stimulating plant germination.</li>
      </ol>`,
      3,
      [
        ['Ascent: Impalpable rising mapped to scientific evaporation', '1 Mark'],
        ['Condensation: "Vaguely form’d, altogether changed yet same" mapped to cloud formation', '1 Mark'],
        ['Descent: Laving droughts and germinating seeds mapped to precipitation', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch8-q5',
      'Question 5',
      'Think It Out',
      'Why are the last two lines put within brackets?',
      `<p>The last two lines—<em>“(For song, issuing from its birth-place, after fulfilment, wandering / Reck’d or unreck’d, duly with love returns.)”</em>—are enclosed in brackets because:</p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>Shift in Speaker:</strong> The previous lines represent the direct dialogue spoken by the Voice of the Rain. The bracketed lines are not spoken by the rain; they are the poet’s personal philosophical reflection and concluding commentary.</li>
        <li><strong>Literary Aside:</strong> The brackets function as an intellectual "aside," drawing a conceptual analogy between the ecological cycle of rain and the artistic lifecycle of human music and poetry.</li>
      </ul>`,
      2,
      [
        ['Distinction between the rain’s speech and the poet’s internal contemplation', '1 Mark'],
        ['Enclosure marks a philosophical aside comparing art and nature', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch8-q6',
      'Question 6',
      'Think It Out',
      'List the pairs of opposites found in the poem.',
      `<p>Walt Whitman employs multiple binary oppositions to reflect the comprehensive reach of nature:</p>
      <ul style="margin-left:20px; line-height:1.8;">
        <li><strong>Rise and Descend:</strong> Upward motion into heaven vs. downward shower onto the globe.</li>
        <li><strong>Day and Night:</strong> <em>“And for ever, by day and night, I give back life to my own origin.”</em></li>
        <li><strong>Reck’d and Unreck’d:</strong> Cared for / noticed vs. uncared for / unnoticed.</li>
        <li><strong>Latent and Unborn:</strong> Dormant under soil vs. brought to flourishing life through rain.</li>
      </ul>`,
      2,
      [
        ['Rise and descend / Day and night identified', '1 Mark'],
        ['Reck’d and unreck’d / Latent and unborn identified', '1 Mark']
      ]
    )
  ];

  saveChapter(chNum, bookTitle, chTitle, svgDiagram, exTitle, questions, 'Childhood');
})();

// ==========================================
// CHAPTER 9: Childhood (Markus Natten)
// ==========================================
(function buildChapter9() {
  const chNum = 9;
  const bookTitle = 'Hornbill (Poetry)';
  const chTitle = 'Childhood';
  const exTitle = 'NCERT Exercises: Think It Out & Philosophical Analysis';

  const svgDiagram = `
  <div style="background:linear-gradient(135deg, #fdf4ff, #fae8ff); border:1px solid #f0abfc; border-radius:12px; padding:20px; margin-bottom:24px;">
    <h3 style="font-size:1.05rem; color:#86198f; margin-bottom:12px; font-weight:800; display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c026d3" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
      The Evolution of Maturity: Loss of Innocence
    </h3>
    <svg viewBox="0 0 800 160" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', sans-serif;">
      <rect x="25" y="25" width="225" height="110" rx="8" fill="#ffffff" stroke="#c026d3" stroke-width="2"/>
      <text x="137" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#86198f">Stanza 1: Rationalism</text>
      <text x="137" y="78" text-anchor="middle" font-size="11" fill="#475569">Age of Eleven</text>
      <text x="137" y="100" text-anchor="middle" font-size="10" fill="#64748b">• Heaven & Hell missing in Geography</text>
      <text x="137" y="118" text-anchor="middle" font-size="10" fill="#64748b">• Logic replaces mythology</text>

      <path d="M 250 80 L 285 80" stroke="#94a3b8" stroke-width="2"/>

      <rect x="285" y="25" width="225" height="110" rx="8" fill="#ffffff" stroke="#a21caf" stroke-width="2"/>
      <text x="397" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#701a75">Stanza 2: Adult Hypocrisy</text>
      <text x="397" y="78" text-anchor="middle" font-size="11" fill="#475569">Social Awareness</text>
      <text x="397" y="100" text-anchor="middle" font-size="10" fill="#64748b">• Adults preach love, act harshly</text>
      <text x="397" y="118" text-anchor="middle" font-size="10" fill="#64748b">• Double standards exposed</text>

      <path d="M 510 80 L 545 80" stroke="#94a3b8" stroke-width="2"/>

      <rect x="545" y="25" width="230" height="110" rx="8" fill="#ffffff" stroke="#059669" stroke-width="2"/>
      <text x="660" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">Stanza 3: Individuality</text>
      <text x="660" y="78" text-anchor="middle" font-size="11" fill="#475569">Independent Mind</text>
      <text x="660" y="100" text-anchor="middle" font-size="10" fill="#64748b">• Producing own unique thoughts</text>
      <text x="660" y="118" text-anchor="middle" font-size="10" fill="#64748b">• Freedom from herd mentality</text>
    </svg>
  </div>`;

  const questions = [
    createQCard(
      'c11e-ch9-q1',
      'Question 1',
      'Think It Out',
      'Identify the stanza that talks of each of the following: (i) Individuality, (ii) Rationalism, (iii) Hypocrisy.',
      `<p>Mapping the philosophical themes to the corresponding stanzas:</p>
      <ul style="margin-left:20px; line-height:1.8;">
        <li><strong>(i) Rationalism &mdash; Stanza 1:</strong>
          <br>Reflected when the poet realizes at age eleven that <em>“Hell and Heaven / Could not be found in Geography,”</em> concluding through scientific logic that they could not physically exist.
        </li>
        <li><strong>(ii) Hypocrisy &mdash; Stanza 2:</strong>
          <br>Reflected when the poet observes that adults <em>“were not all they seemed to be. / They talked of love and preached of love, / But did not act so lovingly.”</em>
        </li>
        <li><strong>(iii) Individuality &mdash; Stanza 3:</strong>
          <br>Reflected when the poet discovers that his mind is completely his own: <em>“To use whichever way I choose, / Producing thoughts that were not those of other people / But my own, and mine alone.”</em>
        </li>
      </ul>`,
      3,
      [
        ['Rationalism correctly mapped to Stanza 1 with geography proof', '1 Mark'],
        ['Hypocrisy correctly mapped to Stanza 2 with adult double standards', '1 Mark'],
        ['Individuality correctly mapped to Stanza 3 with independent thinking', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch9-q2',
      'Question 2',
      'Think It Out',
      'What, according to the poem, is involved in the process of growing up?',
      `<p>Markus Natten portrays growing up not merely as biological aging, but as a three-stage psychological transformation accompanied by the loss of naive innocence:</p>
      <ol style="margin-left:20px; line-height:1.7;">
        <li><strong>Emergence of Rational Thinking:</strong> The child abandons blind belief in folklore, myths, and religious dogmas (like geographical hell and heaven) and begins evaluating reality through empirical logic and science.</li>
        <li><strong>Recognition of Adult Hypocrisy:</strong> The growing adolescent sees through the facade of adult morality, realizing that elders preach lofty sermons about love and compassion but frequently practice hostility and deception.</li>
        <li><strong>Assertion of Individuality:</strong> The individual develops intellectual autonomy, forming unique personal convictions rather than slavishly following herd mentality.</li>
      </ol>`,
      3,
      [
        ['Rationalism and questioning of unscientific dogmas', '1 Mark'],
        ['Disillusionment upon discovering adult hypocrisy', '1 Mark'],
        ['Attainment of intellectual individuality and autonomous judgment', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch9-q3',
      'Question 3',
      'Think It Out',
      'What are the poet’s feelings towards childhood?',
      `<p>The poet views childhood with deep nostalgia, reverence, and a sense of wistful loss:</p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>Pristine Sanctuary of Innocence:</strong> He regards childhood as a magical, uncorrupted period of existence free from deceit, cynicism, and inner contradictions.</li>
        <li><strong>Wistful Yearning:</strong> While he values the rational intellect and individuality that accompany adulthood, he mourns the irrevocable loss of childlike simplicity and wonder.</li>
        <li><strong>Consolation:</strong> He takes comfort in knowing that childhood has not vanished into absolute nothingness; it remains immortalized in the pure, untainted smile on an infant’s face.</li>
      </ul>`,
      3,
      [
        ['Nostalgia for pure innocence free from adult cynicism', '1 Mark'],
        ['Wistful longing acknowledging that lost childhood cannot return', '1 Mark'],
        ['Philosophical solace finding childhood preserved in an infant’s face', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch9-q4',
      'Question 4',
      'Think It Out',
      'Which, do you think, are the most poetic lines? Why?',
      `<p>The concluding lines of the poem are widely regarded as the most poetic and evocative:</p>
      <blockquote style="margin:8px 0; padding:8px 16px; background:#fdf4ff; border-left:4px solid #c026d3; font-style:italic;">
        “It went to some forgotten place,<br>
        That’s hidden in an infant’s face,<br>
        That’s all I know.”
      </blockquote>
      <p><strong>Critical Rationale:</strong></p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>Shift from ‘When’ to ‘Where’:</strong> Across the first three stanzas, the poet repeatedly asks the temporal question: <em>“When did my childhood go?”</em> In this final stanza, he pivots to the spatial question: <em>“Where did my childhood go?”</em></li>
        <li><strong>Lyrical Imagery:</strong> Instead of offering a dry philosophical answer, the poet captures the essence of innocence through the tender, concrete image of an infant’s face.</li>
        <li><strong>Universal Truth:</strong> It highlights that childhood is not lost forever; it is reborn continuously in every new generation of infants, leaving the reader with a poignant, lingering sense of peace.</li>
      </ul>`,
      3,
      [
        ['Quoting the final three lines as the most poetic climax', '1 Mark'],
        ['Structural shift from "When did it go" to "Where did it go"', '1 Mark'],
        ['Lyrical imagery of the infant’s face representing reborn innocence', '1 Mark']
      ]
    )
  ];

  saveChapter(chNum, bookTitle, chTitle, svgDiagram, exTitle, questions, 'Father to Son');
})();

// ==========================================
// CHAPTER 10: Father to Son (Elizabeth Jennings)
// ==========================================
(function buildChapter10() {
  const chNum = 10;
  const bookTitle = 'Hornbill (Poetry)';
  const chTitle = 'Father to Son';
  const exTitle = 'NCERT Exercises: Think It Out & Thematic Analysis';

  const svgDiagram = `
  <div style="background:linear-gradient(135deg, #f8fafc, #fee2e2); border:1px solid #fecaca; border-radius:12px; padding:20px; margin-bottom:24px;">
    <h3 style="font-size:1.05rem; color:#991b1b; margin-bottom:12px; font-weight:800; display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      The Generation Gap: Emotional Alienation Under One Roof
    </h3>
    <svg viewBox="0 0 800 160" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', sans-serif;">
      <rect x="30" y="25" width="220" height="110" rx="8" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
      <text x="140" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#991b1b">The Father’s World</text>
      <text x="140" y="80" text-anchor="middle" font-size="11" fill="#475569">Traditional Nostalgia</text>
      <text x="140" y="100" text-anchor="middle" font-size="10" fill="#64748b">• Yearns for prodigal’s return</text>
      <text x="140" y="118" text-anchor="middle" font-size="10" fill="#64748b">• Built child to his design</text>

      <path d="M 255 80 L 335 80" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4"/>
      <circle cx="295" cy="80" r="14" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="295" y="84" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">✕</text>

      <rect x="335" y="25" width="220" height="110" rx="8" fill="#ffffff" stroke="#64748b" stroke-width="2"/>
      <text x="445" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#334155">The Chasm: Silence</text>
      <text x="445" y="80" text-anchor="middle" font-size="11" fill="#475569">Communication Barrier</text>
      <text x="445" y="100" text-anchor="middle" font-size="10" fill="#64748b">• Speak like strangers</text>
      <text x="445" y="118" text-anchor="middle" font-size="10" fill="#64748b">• Seed spent in alien land</text>

      <path d="M 560 80 L 640 80" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4"/>

      <rect x="640" y="25" width="130" height="110" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
      <text x="705" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">The Son’s World</text>
      <text x="705" y="80" text-anchor="middle" font-size="11" fill="#475569">Independent</text>
      <text x="705" y="100" text-anchor="middle" font-size="10" fill="#64748b">• Modern values</text>
      <text x="705" y="118" text-anchor="middle" font-size="10" fill="#64748b">• Silent sorrow</text>
    </svg>
  </div>`;

  const questions = [
    createQCard(
      'c11e-ch10-q1',
      'Question 1',
      'Think It Out',
      'Does the poem talk of an exclusively personal experience or is it fairly universal?',
      `<p>The poem does not narrate an exclusively personal experience; rather, it articulates a <strong>fairly universal human predicament</strong>.</p>
      <p><strong>Reasons for Universality:</strong></p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>The Generation Gap:</strong> The emotional estrangement, inability to communicate, and conflict of values between aging parents and grown-up children is a widespread phenomenon across families and cultures worldwide.</li>
        <li><strong>Parental Incomprehension:</strong> Parents frequently expect their offspring to mirror their own beliefs, design, and choices. When children grow into autonomous individuals with distinct worldviews, parents feel bewildered and isolated.</li>
        <li><strong>Universal Yearning for Reconciliation:</strong> The father's desperate struggle to reach out, forgive, and bridge the gulf with extended "empty hands" mirrors the silent longing of countless parents across human society.</li>
      </ul>`,
      3,
      [
        ['Affirmation that the poem deals with a universal generation gap', '1 Mark'],
        ['Analysis of parental expectation vs children’s autonomous identity', '1 Mark'],
        ['Universal emotional desire for reconciliation across families', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch10-q2',
      'Question 2',
      'Think It Out',
      'How is the father’s helplessness brought out in the poem?',
      `<p>Elizabeth Jennings poignantly portrays the father’s profound helplessness and emotional grief:</p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li><strong>Strangers Under One Roof:</strong> Despite having lived in the same house for years, the father confesses with profound agony: <em>“I do not understand this child... I know nothing of him.”</em> They speak like strangers with no sign of understanding in the air.</li>
        <li><strong>Loss of Influence:</strong> He acknowledges that while the child is physically <em>“built to my design,”</em> what his son loves in his heart, the father cannot share or comprehend.</li>
        <li><strong>Inability to Prevent Estrangement:</strong> He longs to welcome his son back like the biblical "prodigal son" and forgive him unconditionally rather than see him build a separate, alien world. Yet, his inability to articulate this love results in an icy, suffocating silence.</li>
        <li><strong>The Empty Hands:</strong> In the final heartbreaking image, both father and son stand with <em>“empty hands,”</em> longing for something to forgive, yet paralyzed by pride and misunderstanding.</li>
      </ul>`,
      3,
      [
        ['Confession of knowing nothing of his own son despite living together', '1 Mark'],
        ['Inability to share or understand the son’s modern interests', '1 Mark'],
        ['Tragic inability to break the silence, ending with outstretched empty hands', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch10-q3',
      'Question 3',
      'Think It Out',
      'Identify the phrases and lines that indicate the distance between father and son.',
      `<p>The emotional and physical chasm between father and son is articulated through key phrases:</p>
      <ul style="margin-left:20px; line-height:1.8;">
        <li><em>“I do not understand this child”</em> &mdash; Highlights the complete failure of parental comprehension.</li>
        <li><em>“I know / Nothing of him”</em> &mdash; Highlights total emotional detachment.</li>
        <li><em>“We speak like strangers”</em> &mdash; Highlights the loss of familial intimacy.</li>
        <li><em>“There’s no sign of understanding in the air”</em> &mdash; Conveys an atmosphere devoid of empathy.</li>
        <li><em>“Yet what he loves I cannot share”</em> &mdash; Marks the divergence in tastes, values, and lifestyle.</li>
        <li><em>“Silence surrounds us”</em> &mdash; Symbolizes the oppressive, suffocating absence of communication.</li>
        <li><em>“Each puts out an empty hand, / Longing for something to forgive”</em> &mdash; Depicts unfulfilled emotional yearning blocked by pride.</li>
      </ul>`,
      3,
      [
        ['Identification of "I do not understand" and "We speak like strangers"', '1 Mark'],
        ['Identification of "Silence surrounds us" and "what he loves I cannot share"', '1 Mark'],
        ['Identification of "Each puts out an empty hand" concluding the estrangement', '1 Mark']
      ]
    ),
    createQCard(
      'c11e-ch10-q4',
      'Question 4',
      'Think It Out',
      'Does the poem have a consistent rhyme scheme? What is the structural significance?',
      `<p><strong>Rhyme Scheme Analysis:</strong></p>
      <p>The poem does not follow a completely consistent or uniform rhyme scheme across all stanzas:</p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li>The early stanzas loosely follow an <strong><code>ab ba ba</code></strong> or alternating end-rhyme pattern (e.g., child/build, year/share, air/there).</li>
        <li>As the emotional tension mounts in later stanzas, the rhyme structure becomes irregular, shifting to <strong><code>abc aba</code></strong> and <strong><code>abbcb</code></strong> schemes with near rhymes and half-rhymes.</li>
      </ul>
      <p><strong>Structural Significance:</strong></p>
      <p>This irregular, slightly fractured rhyme scheme is intentional. It artistically mirrors the fractured, disrupted relationship between the father and the son. The lack of strict metric harmony echoes the discord, lack of rhythm, and broken communication in their home.</p>`,
      3,
      [
        ['Identified rhyme scheme as loose and irregular across stanzas', '1 Mark'],
        ['Examples of half-rhymes and shifting line patterns', '1 Mark'],
        ['Structural significance: Fractured rhyme mirroring fragmented relationship', '1 Mark']
      ]
    )
  ];

  saveChapter(chNum, bookTitle, chTitle, svgDiagram, exTitle, questions, 'The Summer of the Beautiful White Horse');
})();
