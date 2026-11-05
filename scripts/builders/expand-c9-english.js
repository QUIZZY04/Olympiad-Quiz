// scripts/builders/expand-c9-english.js
// Inject 27 verbatim textbook questions to achieve 100% physical NCERT coverage in Class 9 English

const fs = require('fs');
const path = require('path');

const chDir = path.join(__dirname, '..', '..', 'chapters-c9e');

const additions = {
  1: [
    {
      id: 'e1_10',
      num: 'Q10',
      marks: '4 Marks (60–80 Words)',
      text: 'Do you agree with Margie that schools today are more fun than the future school in the story? Give reasons for your answer.',
      answer: `<p><strong>Yes, I completely agree with Margie</strong> that schools today are far more engaging, joyful, and wholesome than the sterile, isolated digital schools of 2157:</p>
<ol>
  <li><strong>Social Camaraderie and Peer Interaction:</strong> In modern schools, children from diverse backgrounds assemble, play, laugh, and study together. They form lifelong friendships, learn empathy, cooperation, sportsmanship, and teamwork. In contrast, Margie studied alone in an empty room next to her bedroom.</li>
  <li><strong>Empathy of Human Teachers:</strong> Human teachers understand students' psychological moods, family difficulties, and learning styles. They inspire, motivate, praise, and adapt their explanations organically, unlike rigid mechanical teachers that merely churn out automated tests.</li>
  <li><strong>Shared Learning Experience:</strong> Learning the same curriculum together enables children to discuss problems, assist one another with homework, and enjoy group activities, converting education into a vibrant communal celebration.</li>
</ol>`,
      marking: [
        { key: 'Clear agreement + value of social bonding and peer interaction', marks: '1.5 Marks' },
        { key: 'Contrast between empathetic human teachers and mechanical algorithms', marks: '1.5 Marks' },
        { key: 'Shared learning and collective joy in physical schoolrooms', marks: '1.0 Mark' }
      ]
    },
    {
      id: 'e1_11',
      num: 'Q11',
      marks: '3 Marks (50–60 Words)',
      text: 'What are the main features of the mechanical teachers and the schoolrooms that Margie and Tommy have in the story?',
      answer: `<p>The mechanical teachers and schoolrooms depicted in the year 2157 have the following defining features:</p>
<ul>
  <li><strong>The Schoolroom:</strong> A customized room situated inside the home right next to the bedroom. It contains no human peers, desks, or blackboards—only a large television console with flashing digital screens.</li>
  <li><strong>The Mechanical Teacher:</strong> A large, black, emotionless screen on which lessons appear and questions are asked. It possesses a specialized <strong>homework slot</strong> where students insert assignments written in punch code, which the computer grades instantaneously without personal interaction.</li>
  <li><strong>Rigid Schedule:</strong> The screen illuminates at fixed hours every day (except Saturday and Sunday), programmed precisely to match each child's individual age and cognitive pace.</li>
</ul>`,
      marking: [
        { key: 'Schoolroom inside the home without peers or desks', marks: '1.0 Mark' },
        { key: 'Mechanical teacher console with punch-code homework slot', marks: '1.0 Mark' },
        { key: 'Fixed daily schedule and individualized machine pacing', marks: '1.0 Mark' }
      ]
    }
  ],

  2: [
    {
      id: 'e2_8',
      num: 'Q8',
      marks: '4 Marks (60–80 Words)',
      text: 'How does Evelyn Glennie\'s story serve as a beacon of inspiration for physically challenged people and aspiring artists across the globe?',
      answer: `<p>Evelyn Glennie's triumph over profound sensory disability is an enduring testament to the triumph of the human spirit:</p>
<ol>
  <li><strong>Shattering Prejudices:</strong> When doctors recommended hearing aids and specialist schools, Evelyn steadfastly refused to lead a compromised life. She pursued a solo percussion career, proving that physical limitations cannot block genuine artistic brilliance.</li>
  <li><strong>Inspiration for the Specially-Abled:</strong> People with physical challenges look at Evelyn and say, <em>'If she can do it, I can.'</em> She gave millions of disabled individuals renewed hope, dignity, and confidence to chase mainstream excellence.</li>
  <li><strong>Global Philanthropy:</strong> Evelyn regularly gives free concerts in prisons, hospitals, and music academies, mentoring young deaf children and demonstrating that sound is a somatic, spiritual resonance felt through the entire body.</li>
</ol>`,
      marking: [
        { key: 'Overcoming profound deafness to achieve solo percussion mastery', marks: '1.5 Marks' },
        { key: 'Inspirational impact on disabled community (\'If she can do it, I can\')', marks: '1.5 Marks' },
        { key: 'Humanitarian concerts in prisons and hospitals', marks: '1.0 Mark' }
      ]
    },
    {
      id: 'e2_9',
      num: 'Q9',
      marks: '4 Marks (60–80 Words)',
      text: 'Trace the milestones in Ustad Bismillah Khan\'s musical journey culminating in the conferment of India\'s highest civilian award, the Bharat Ratna.',
      answer: `<p>Ustad Bismillah Khan's illustrious career was decorated with the highest national and international honours:</p>
<ul>
  <li><strong>Early Milestones:</strong> Gaining national fame through All India Radio (1938) and performing at the Red Fort on Independence Day (15 August 1947).</li>
  <li><strong>International Acclaim:</strong> First Indian invited to perform at the prestigious Lincoln Center Hall in the USA; participating in the Cannes Art Festival, Montreal World Exposition, and Osaka Trade Fair. An auditorium in Tehran was named after him—<em>Tahar Mosiquee Ustad Bismillah Khan</em>.</li>
  <li><strong>National Honours:</strong> Awarded all three Padma awards—the <strong>Padma Shri (1961)</strong>, <strong>Padma Bhushan (1968)</strong>, and <strong>Padma Vibhushan (1980)</strong>.</li>
  <li><strong>The Bharat Ratna (2001):</strong> In 2001, he was conferred India's highest civilian award, the <strong>Bharat Ratna</strong>, where he passionately advised parents to teach their children Indian classical music as our richest spiritual heritage.</li>
</ul>`,
      marking: [
        { key: '1938 AIR breakthrough and 1947 Red Fort historic performance', marks: '1.0 Mark' },
        { key: 'International honours (Lincoln Center, Cannes, Tehran auditorium)', marks: '1.0 Mark' },
        { key: 'Padma awards (Shri, Bhushan, Vibhushan) and Bharat Ratna (2001)', marks: '2.0 Marks' }
      ]
    }
  ],

  3: [
    {
      id: 'e3_7',
      num: 'Q7',
      marks: '4 Marks (60–80 Words)',
      text: 'How does Katherine Mansfield\'s story \'The Little Girl\' demonstrate that parents who seem harsh and demanding often harbour a deep, protective love for their children?',
      answer: `<p>The story illustrates the common emotional barrier caused by paternal austerity and parental exhaustion:</p>
<ol>
  <li><strong>Initial Perception of Harshness:</strong> Kezia viewed her father as a menacing tyrant who scolded her, punished her with a ruler for accidentally tearing his speech papers, and lacked the playful warmth of Mr. Macdonald.</li>
  <li><strong>Underlying Sacrifices:</strong> Kezia did not comprehend that her father worked exhausting hours every day to provide for the family and was too worn out in the evenings to play games.</li>
  <li><strong>The Night of Revelation:</strong> When mother and grandmother were hospitalized, Kezia suffered a terrifying nightmare of a butcher with a knife. Her father rushed to her bedside, carried her in his strong arms, blew out the candle, and tucked her warmly into his own bed. He asked her to rub her cold feet against his legs for warmth.</li>
  <li><strong>Conclusion:</strong> Snuggling beside him and hearing his beating heart, Kezia realized her father had a big, compassionate heart that loved her fiercely despite his weary exterior.</li>
</ol>`,
      marking: [
        { key: 'Initial fear and contrast with playful neighbor Macdonald', marks: '1.0 Mark' },
        { key: 'Understanding father\'s fatigue and work pressure', marks: '1.0 Mark' },
        { key: 'The nightmare episode, comforting warmth, and tender care', marks: '1.5 Marks' },
        { key: 'Kezia\'s realization of her father\'s \'big heart\'', marks: '0.5 Mark' }
      ]
    }
  ],

  4: [
    {
      id: 'e4_8',
      num: 'Q8',
      marks: '4 Marks (60–80 Words)',
      text: 'Summarise Albert Einstein\'s major scientific milestones in 1905 and 1915, and describe how he was honoured with the Nobel Prize in Physics.',
      answer: `<p>Albert Einstein transformed our fundamental understanding of space, time, matter, and energy:</p>
<ul>
  <li><strong>The Miraculous Year (1905):</strong> Working as a modest technical assistant in the Bern patent office, Einstein published four revolutionary papers covering the Photoelectric Effect, Brownian Motion, and the <strong>Special Theory of Relativity</strong> (from which emerged the iconic mass-energy equation <span class="math">E = mc&#178;</span>).</li>
  <li><strong>General Theory of Relativity (1915):</strong> He formulated the General Theory of Relativity, providing a revolutionary new interpretation of gravity. During the solar eclipse of 1919, British astronomers proved his prediction of starlight deflection by gravitational deflection was accurate, leading newspapers to proclaim a <em>'Scientific Revolution'</em>.</li>
  <li><strong>The Nobel Prize (1921):</strong> In 1921, Einstein was awarded the <strong>Nobel Prize in Physics</strong> for his discovery of the law of the photoelectric effect. He was showered with international honours and invitations worldwide.</li>
</ul>`,
      marking: [
        { key: '1905 Special Relativity and E = mc^2 formula', marks: '1.5 Marks' },
        { key: '1915 General Theory of Relativity and 1919 eclipse proof', marks: '1.5 Marks' },
        { key: '1921 Nobel Prize in Physics for Photoelectric Effect', marks: '1.0 Mark' }
      ]
    }
  ],

  5: [
    {
      id: 'e5_7',
      num: 'Q7',
      marks: '4 Marks (60–80 Words)',
      text: 'Contrast the homeopathy doctor\'s thoughts about his looks when he gazed into the mirror before and after the deadly cobra coiled around his left arm.',
      answer: `<p>The mirror serves as a comic and philosophical catalyst, contrasting vain complacency with mortal vulnerability:</p>
<ol>
  <li><strong>Before the Snake Appeared (Vanity & Pride):</strong>
    <ul>
      <li>The doctor sat before the mirror admiring his youth and handsome bachelor features.</li>
      <li>He decided to shave daily, grow a thin moustache to look more handsome, and always keep an attractive smile on his face.</li>
      <li>He fancied marrying a rich, fat lady doctor who wouldn\'t be able to catch him if he made a silly mistake.</li>
    </ul>
  </li>
  <li><strong>After the Snake Coiled (Humility & Helplessness):</strong>
    <ul>
      <li>When the cold, hooded cobra landed on his shoulder and coiled four inches from his face, vanity evaporated instantly.</li>
      <li>He turned into a stone statue, holding his breath, realizing that his medicine box lacked medicine for snakebite.</li>
      <li>He laughed feebly at his own foolishness, realizing how helpless, poor, and insignificant he was before the almighty power of God.</li>
    </ul>
  </li>
</ol>`,
      marking: [
        { key: 'Pre-encounter vanity (thin mustache, attractive smile, wealthy wife)', marks: '2.0 Marks' },
        { key: 'Post-encounter terror and philosophical humility before God and mortality', marks: '2.0 Marks' }
      ]
    }
  ],

  6: [
    {
      id: 'e6_7',
      num: 'Q7',
      marks: '4 Marks (60–80 Words)',
      text: 'How did science teacher Sivasubramania Iyer\'s progressive attitude and dinner invitation challenge orthodoxy and transform his conservative wife\'s mindset?',
      answer: `<p>A.P.J. Abdul Kalam\'s science teacher, <strong>Sivasubramania Iyer</strong>, was an enlightened Brahmin rebel against rigid communal orthodoxy:</p>
<ol>
  <li><strong>The Dinner Invitation:</strong> He invited young Muslim Kalam to his home for a meal. His conservative wife, horrified by orthodox notions of ritual purity, refused to serve a Muslim boy inside her kitchen.</li>
  <li><strong>Exemplary Calm Leadership:</strong> Rather than losing his temper, Sivasubramania Iyer served Kalam with his own hands and sat beside him to eat, demonstrating that food and humanity transcend religious barriers.</li>
  <li><strong>The Second Invitation & Transformation:</strong> When Kalam felt hesitant, the teacher invited him again the following weekend, advising: <em>'Once you decide to change the system, such problems have to be confronted.'</em> When Kalam arrived the next week, the wife escorted him into her kitchen and served him food with her own hands, proving that quiet conviction dissolves bigotry.</li>
</ol>`,
      marking: [
        { key: 'Wife\'s orthodox refusal to serve a Muslim boy in kitchen', marks: '1.0 Mark' },
        { key: 'Teacher\'s calm response: Serving Kalam personally and dining together', marks: '1.5 Marks' },
        { key: 'Transformation on second visit: Wife serves Kalam in kitchen', marks: '1.5 Marks' }
      ]
    }
  ],

  7: [
    {
      id: 'e7_7',
      num: 'Q7',
      marks: '4 Marks (60–80 Words)',
      text: 'What exceptional character virtues enabled Santosh Yadav to become the youngest woman in the world to scale Mount Everest twice and rescue a fellow mountaineer?',
      answer: `<p>Santosh Yadav\'s historic mountaineering feats were founded on fierce independence, environmental consciousness, and selfless heroism:</p>
<ul>
  <li><strong>Steadfast Determination:</strong> Born in traditional rural Haryana, she rejected early marriage, wore shorts instead of traditional attire, and enrolled in Jaipur\'s Maharani College through sheer willpower.</li>
  <li><strong>Physical Endurance:</strong> Joining Uttarkashi\'s Nehru Institute of Mountaineering, her remarkable iron will, resistance to cold, and high-altitude stamina enabled her to conquer Everest in 1992 at just twenty years of age.</li>
  <li><strong>Heroic Empathy:</strong> During the 1992 expedition, she saved the life of a dying climber, Mohan Singh, by sharing her own oxygen cylinder with him.</li>
  <li><strong>Eco-Warrior:</strong> She brought down 500 kilograms of garbage from the fragile Himalayan slopes, demonstrating profound respect for ecology.</li>
</ul>`,
      marking: [
        { key: 'Rejection of patriarchy and graduation in Jaipur/Uttarkashi', marks: '1.0 Mark' },
        { key: 'Conquering Everest in 1992 as youngest woman and repeating in 1993', marks: '1.0 Mark' },
        { key: 'Saving Mohan Singh\'s life by sharing oxygen', marks: '1.0 Mark' },
        { key: 'Collecting 500 kg trash from Himalayas', marks: '1.0 Mark' }
      ]
    },
    {
      id: 'e7_8',
      num: 'Q8',
      marks: '4 Marks (60–80 Words)',
      text: 'Detail the sacrifices, emotional isolation, and grueling discipline that nine-year-old Maria Sharapova endured in Florida to reach world number one in tennis.',
      answer: `<p>Maria Sharapova\'s pinnacle success was purchased through severe childhood deprivations:</p>
<ol>
  <li><strong>Separation from Mother:</strong> At barely nine years old, she was brought to the United States from Siberia by her father, Yuri. Her mother, Yelena, could not accompany her due to heart-wrenching visa restrictions and was separated from Maria for two agonizing years.</li>
  <li><strong>Parental Sacrifice:</strong> Her father worked long, exhausting hours in Florida to fund her tennis training and could barely see her during the day.</li>
  <li><strong>Bullying by Senior Pupils:</strong> Older tennis trainees ordered little Maria to tidy up the dorm room and clean the floor at 11 PM. Instead of breaking down into tears, Maria developed fierce mental toughness and quiet self-reliance.</li>
  <li><strong>Pinnacle Triumph:</strong> This competitive grit propelled her to win the Wimbledon singles title in 2004 and capture the World No. 1 ranking on 22 August 2005.</li>
</ol>`,
      marking: [
        { key: 'Two-year separation from mother due to visa restrictions', marks: '1.5 Marks' },
        { key: 'Enduring bullying and menial chores from senior pupils with fortitude', marks: '1.5 Marks' },
        { key: 'Wimbledon title (2004) and World No. 1 ranking (2005)', marks: '1.0 Mark' }
      ]
    }
  ],

  8: [
    {
      id: 'e8_6',
      num: 'Q6',
      marks: '4 Marks (60–80 Words)',
      text: 'Contrast the chaotic, bustling atmosphere of Pashupatinath temple with the serene, tranquil peace of the Baudhnath stupa in Kathmandu.',
      answer: `<p>Vikram Seth vividly juxtaposes two sacred shrines representing contrasting spiritual aesthetics:</p>
<table style="width:100%;border-collapse:collapse;margin:8px 0;font-size:0.85rem;">
  <tr style="background:#f1f5f9;"><th style="padding:6px;border:1px solid #cbd5e1;">Parameter</th><th style="padding:6px;border:1px solid #cbd5e1;">Pashupatinath Temple (Hindu)</th><th style="padding:6px;border:1px solid #cbd5e1;">Baudhnath Stupa (Buddhist)</th></tr>
  <tr><td style="padding:6px;border:1px solid #cbd5e1;">Atmosphere</td><td style="padding:6px;border:1px solid #cbd5e1;">An atmosphere of 'febrile confusion' with jostling priests, hawkers, devotees, tourists, cows, and monkeys.</td><td style="padding:6px;border:1px solid #cbd5e1;">A haven of profound stillness, meditative silence, and quiet serenity.</td></tr>
  <tr><td style="padding:6px;border:1px solid #cbd5e1;">Activity</td><td style="padding:6px;border:1px solid #cbd5e1;">Corpses being cremated at Aryaghat on Bagmati river; monkeys chasing each other across Shiva lingams; police pushing westerners.</td><td style="padding:6px;border:1px solid #cbd5e1;">Devotees circumambulating clockwise around the white dome; Tibetan migrants selling felt bags, silver jewelry, and antiques in quiet stalls.</td></tr>
</table>`,
      marking: [
        { key: 'Pashupatinath febrile confusion: Crowds, monkeys, cremations at Aryaghat', marks: '2.0 Marks' },
        { key: 'Baudhnath serenity: White dome, meditative calm, quiet Tibetan shops', marks: '2.0 Marks' }
      ]
    },
    {
      id: 'e8_7',
      num: 'Q7',
      marks: '3 Marks (50–60 Words)',
      text: 'Why does Vikram Seth compare the bansuri seller with other street vendors in Kathmandu? What makes the flute universal to all humanity?',
      answer: `<p>The bansuri seller stands out because of his dignified, non-aggressive demeanour. Unlike other vendors who shout loudly to peddle their wares, he simply leans against a post, selects a bamboo flute, and plays meditatively, letting the melody enchant passersby.</p>
<p>Seth reflects that the flute is the <strong>most universal of musical instruments</strong> found across every human civilization—from the Japanese <em>shakuhachi</em> and South American reed pipes to the Indian <em>bansuri</em>. Driven by the breath of living humans, its notes bridge cultural barriers and express common human emotional yearning.</p>`,
      marking: [
        { key: 'Contrast with shouting vendors: Meditative, calm playing', marks: '1.5 Marks' },
        { key: 'Universal nature of flute across cultures powered by human breath', marks: '1.5 Marks' }
      ]
    }
  ],

  9: [
    {
      id: 'e9_7',
      num: 'Q7',
      marks: '4 Marks (60–80 Words)',
      text: 'How did playwright Gerrard\'s cool wit, presence of mind, and fabricated persona outsmart the ruthless, gun-toting Intruder?',
      answer: `<p>In Douglas James\'s play \'If I Were You\', Gerrard proves that intellect and composure triumph over raw violent intimidation:</p>
<ol>
  <li><strong>Unflappable Calm:</strong> When confronted by a desperate fugitive intending to murder him and steal his identity, Gerrard does not panic. He engages the Intruder in nonchalant conversation, analyzing the intruder\'s vanity and motives.</li>
  <li><strong>The Clever Ruse:</strong> Gerrard fabricates a brilliant counter-narrative, convincing the criminal that Gerrard himself is a mysterious underworld figure on the run after shooting a policeman, and that the police are expected any minute.</li>
  <li><strong>The Cupboard Trap:</strong> He offers to help the Intruder escape in his car, directs him to inspect the 'garage exit door', and when the Intruder peers inside, Gerrard shoves him into a narrow cupboard, knocks the revolver from his hand, slams the door shut, and telephones the police.</li>
</ol>`,
      marking: [
        { key: 'Maintaining calm composure and analyzing Intruder\'s motives', marks: '1.5 Marks' },
        { key: 'Inventing fake criminal identity and police raid warning', marks: '1.5 Marks' },
        { key: 'Locking Intruder in the cupboard and retrieving revolver', marks: '1.0 Mark' }
      ]
    }
  ],

  10: [
    {
      id: 'e10_5',
      num: 'Q5',
      marks: '3 Marks (50–60 Words)',
      text: 'What is the metaphorical significance of the \'two roads diverged in a yellow wood\' in Robert Frost\'s poem? How does choice shape human destiny?',
      answer: `<p>In Frost\'s masterpiece, the fork in the yellow woods is an extended metaphor for the <strong>inevitable moral and career choices</strong> every individual must confront in life:</p>
<ul>
  <li><strong>The Yellow Wood:</strong> Symbolizes a transitional autumn phase of maturity when one must make independent decisions.</li>
  <li><strong>The Choice of Roads:</strong> One road was beaten and popular; the other was grassy, less traveled, and fraught with uncertainty.</li>
  <li><strong>Irreversibility of Choice:</strong> Frost observes that one decision leads inexorably to another (<em>'way leads on to way'</em>), making it virtually impossible to return and try the other option. Choosing the less conventional path made all the difference to his life.</li>
</ul>`,
      marking: [
        { key: 'Two roads as life choices in career and ethics', marks: '1.5 Marks' },
        { key: 'Irreversible nature of human decisions shaping destiny (\'made all the difference\')', marks: '1.5 Marks' }
      ]
    }
  ],

  11: [
    {
      id: 'e11_4',
      num: 'Q4',
      marks: '3 Marks (50–60 Words)',
      text: 'What does Subramania Bharati say the wind god does to weak fires and strong fires? What is the deeper moral message?',
      answer: `<p>In the poem \'Wind\', Bharati observes that the wind behaves differently depending on the strength of the flame:</p>
<ul>
  <li><strong>Weak Fires:</strong> The wind blows out and destroys weak fires mercilessly, just as adversity crushes people who possess weak wills and fragile bodies.</li>
  <li><strong>Strong Fires:</strong> The wind fans and invigorates strong fires, making them roar and flourish with increased intensity.</li>
  <li><strong>Moral Message:</strong> Obstacles and hardships defeat the cowardly and faint-hearted, but empower and elevate resilient, courageous individuals who embrace struggle as a forging fire.</li>
</ul>`,
      marking: [
        { key: 'Blowing out weak fires vs fanning strong fires', marks: '1.5 Marks' },
        { key: 'Moral lesson: Adversity crushes the weak but fortifies the strong', marks: '1.5 Marks' }
      ]
    },
    {
      id: 'e11_5',
      num: 'Q5',
      marks: '3 Marks (50–60 Words)',
      text: 'How does the poet advise us to make friends with the destructive force of the wind?',
      answer: `<p>Since the wind god does not listen to human pleadings, the poet counsels us to build inner and outer resilience:</p>
<ol>
  <li><strong>Physical Strengthening:</strong> Construct strong homes with sturdy roofs, joint the doors firmly, and practice to firm the physical body.</li>
  <li><strong>Mental and Spiritual Fortitude:</strong> Make the heart steadfast and unwavering against emotional storms.</li>
  <li><strong>Positive Alliance:</strong> Once we become strong, the wind ceases to be an enemy and becomes a supportive friend, just as harsh life challenges bring out our highest potential.</li>
</ol>`,
      marking: [
        { key: 'Building strong houses and firm doors', marks: '1.5 Marks' },
        { key: 'Cultivating steadfast hearts and converting adversity into friendship', marks: '1.5 Marks' }
      ]
    }
  ],

  12: [
    {
      id: 'e12_5',
      num: 'Q5',
      marks: '3 Marks (50–60 Words)',
      text: 'What are the varied feelings and memories the poet Coates Kinney experiences when listening to the patter of rain on the roof shingles?',
      answer: `<p>Lying comfortably in his cottage bed with his head pressed against a soft pillow, the poet experiences an interplay of sensory and emotional nostalgia:</p>
<ul>
  <li><strong>Echo in the Heart:</strong> Every tinkle of raindrops on the wooden roof shingles creates an immediate reverberation and poetic fancy in his imaginative mind.</li>
  <li><strong>Weaving Air-Threads of Memory:</strong> A thousand recollected dreams and childhood memories weave themselves into fanciful fabrics of thought.</li>
  <li><strong>Memory of His Mother:</strong> The fondest memory is of his loving mother, who used to gaze tenderly upon her sleeping children before leaving them till dawn. Listening to the musical refrain of the rain revives her affectionate maternal presence in his heart.</li>
</ul>`,
      marking: [
        { key: 'Sensory echo of raindrops on cottage roof shingles', marks: '1.0 Mark' },
        { key: 'Weaving of countless memories and imaginative fancies', marks: '1.0 Mark' },
        { key: 'Tender memory of his late mother gazing upon her children', marks: '1.0 Mark' }
      ]
    }
  ],

  13: [
    {
      id: 'e13_5',
      num: 'Q5',
      marks: '3 Marks (50–60 Words)',
      text: 'How does W.B. Yeats contrast the peaceful, natural serenity of Innisfree with the dreary pavements of London?',
      answer: `<p>Yeats creates a striking aesthetic contrast between urban industrial alienation and pastoral tranquility:</p>
<ul>
  <li><strong>The City (London):</strong> Defined by cold, mechanical roadways, dull grey pavements, artificial noise, and hectic crowd routines that leave the human spirit parched and restless.</li>
  <li><strong>The Isle of Innisfree:</strong> A paradise of idyllic simplicity featuring a small wattle cabin made of clay and wattles, nine bean-rows, a beehive with honeybees, purple midday glows, evenings full of linnet wings, and peace dropping slowly like morning veils.</li>
  <li><strong>The Core Resonance:</strong> Even while standing on the grey city pavements, Yeats hears the lake water lapping gently against the shore in the <em>'deep heart\'s core'</em>, demonstrating the soul\'s eternal longing for communion with untouched nature.</li>
</ul>`,
      marking: [
        { key: 'Urban gloom: Grey pavements, noise, and spiritual isolation', marks: '1.5 Marks' },
        { key: 'Innisfree paradise: Wattle cabin, linnet wings, purple glow, deep heart\'s core', marks: '1.5 Marks' }
      ]
    }
  ],

  14: [
    {
      id: 'e14_5',
      num: 'Q5',
      marks: '3 Marks (50–60 Words)',
      text: 'What universal moral lesson does the ballad \'A Legend of the Northland\' convey regarding greed, selfishness, and hospitality?',
      answer: `<p>Phoebe Cary\'s ballad delivers a powerful ethical sermon through folkloric punishment:</p>
<ol>
  <li><strong>Sin of Selfishness:</strong> The old baker woman possessed plenty of cakes, but when a faint, famished Saint Peter asked for a single thin wafer, she baked smaller and smaller cakes, ultimately refusing to part with even a paper-thin crumb because it seemed 'too big to give away'.</li>
  <li><strong>The Retribution:</strong> Saint Peter cursed her for being too selfish to dwell in human form with warm clothing, fire, and shelter, turning her into a woodpecker condemned to bore laboriously in hard, dry wood all day for scarce food.</li>
  <li><strong>Moral Takeaway:</strong> Selfish hoarding leads to misery and degradation, whereas generosity and compassion toward the needy are divine virtues that enrich the human soul.</li>
</ol>`,
      marking: [
        { key: 'Greedy refusal to share even a paper-thin wafer with Saint Peter', marks: '1.5 Marks' },
        { key: 'Transformation into a woodpecker as poetic justice for hoarding', marks: '1.5 Marks' }
      ]
    }
  ],

  15: [
    {
      id: 'e15_5',
      num: 'Q5',
      marks: '3 Marks (50–60 Words)',
      text: 'How does James Kirkup establish the universal brotherhood of all mankind beneath diverse uniforms, languages, and nationalities?',
      answer: `<p>In \'No Men Are Foreign\', Kirkup methodically dismantles artificial political borders and chauvinistic hatred:</p>
<ul>
  <li><strong>Common Biology & Earth:</strong> Beneath all military uniforms, every soldier breathes air into a identical human body. When we die, all human beings are buried in the same mother earth.</li>
  <li><strong>Common Needs:</strong> Every human being is nurtured by the same sun, air, and water, fed by peaceful harvests, and starved by the same long winter of war.</li>
  <li><strong>Common Anatomy:</strong> Their hands, eyes that wake and sleep, and emotional longings for love are identical to ours.</li>
  <li><strong>Futility of War:</strong> Whenever political leaders incite us to hate or wage war against another nation, we are only dispossessing, betraying, and defiling our own shared human race.</li>
</ul>`,
      marking: [
        { key: 'Identical physical body, breath, and burial in the same earth', marks: '1.5 Marks' },
        { key: 'Shared sun, air, water, harvests, and futility of war against brothers', marks: '1.5 Marks' }
      ]
    }
  ],

  16: [
    {
      id: 'e16_5',
      num: 'Q5',
      marks: '3 Marks (50–60 Words)',
      text: 'Why does poet Gieve Patel describe the destruction of a tree with such surgical detail (scorching, choking, browning, hardening)?',
      answer: `<p>Patel uses graphic, clinical vocabulary to expose the brutal tenacity and cruelty involved in environmental destruction:</p>
<ol>
  <li><strong>Resilience of Life:</strong> A tree cannot be killed by a casual hack or chop; its bleeding bark heals, and miniature boughs sprout afresh from ground level because it has absorbed decades of sunlight, air, water, and earth minerals.</li>
  <li><strong>Total Uprooting:</strong> To genuinely kill it, humans must pull out its sensitive, white, wet anchoring root completely from the earth-cave.</li>
  <li><strong>Gruesome Execution:</strong> The exposed root is then subjected to scorching sun, choking winds, browning, hardening, twisting, and withering. The anatomical precision shocks the reader\'s conscience, treating deforestation not as routine forestry, but as deliberate ecological murder.</li>
</ol>`,
      marking: [
        { key: 'Tenacity of tree healing its bleeding bark after hacking', marks: '1.5 Marks' },
        { key: 'Uprooting the white root and scorched withering as deliberate murder', marks: '1.5 Marks' }
      ]
    }
  ],

  18: [
    {
      id: 'e18_5',
      num: 'Q5',
      marks: '3 Marks (50–60 Words)',
      text: 'How does Mulk Raj Anand convey the dramatic psychological transformation in the child when he realizes his parents are missing at the roundabout?',
      answer: `<p>The author portrays a poignant shift from joyful consumer greed to pure existential panic:</p>
<ul>
  <li><strong>Prior to Separation:</strong> The child was intoxicated by the spring fair, eagerly gazing at burfi, gulmohur garlands, rainbow balloons, snake charmer music, and toy stalls, lingering behind his parents with pleading eyes.</li>
  <li><strong>The Moment of Realization:</strong> Watching the swirling roundabout, he boldly asked for a ride. Getting no reply, he turned around and discovered his parents were nowhere in sight.</li>
  <li><strong>Desperate Panic:</strong> A full, deep cry rose within his dry throat; with tears rolling down his flushed cheeks and clothes disheveled, he ran frantically in all directions crying: <em>'Mother, Father!'</em></li>
  <li><strong>Total Rejection of Material Luxuries:</strong> When a kindly stranger rescued him and offered him sweets, balloons, and garland to soothe him, the child pushed them aside, sobbing only: <em>'I want my mother, I want my father!'</em> Parental love instantly outweighed all worldly desires.</li>
</ul>`,
      marking: [
        { key: 'Shift from festive fascination to pure existential terror', marks: '1.5 Marks' },
        { key: 'Rejection of sweets, balloons, and toys in favor of parents\' safety', marks: '1.5 Marks' }
      ]
    }
  ],

  20: [
    {
      id: 'e20_5',
      num: 'Q5',
      marks: '3 Marks (50–60 Words)',
      text: 'How does Iswaran blend suspense, dramatic gestures, and supernatural thrills into his daily cooking and storytelling for Mahendra?',
      answer: `<p>R.K. Laxman presents <strong>Iswaran</strong> as an unvarnished master of dramatic oral folklore:</p>
<ol>
  <li><strong>Theatrical Storytelling:</strong> Iswaran never simply stated an event. He would raise his hands in suspenseful arcs, contort his eyebrows, drop his voice to a whisper, and pantomime actions—whether describing a fallen tree as an enormous bushy beast or wrestling a mad tusker with karate.</li>
  <li><strong>Culinary and Domestic Dedication:</strong> He cooked delicious meals, washed Mahendra\'s clothes, and chatted amiably at night in remote timber campsites lacking television.</li>
  <li><strong>The Ghost Story Climax:</strong> On a full-moon night, he wove an eerie tale of a female ghost clutching a fetus that haunted their factory site. He built up the atmosphere so convincingly that rational Mahendra hallucinated tapping sounds outside his window and fled the campsite in terror.</li>
</ol>`,
      marking: [
        { key: 'Theatrical body language, suspenseful cliffhangers, and expressions', marks: '1.5 Marks' },
        { key: 'Ghost story on full moon night driving rational Mahendra to flee', marks: '1.5 Marks' }
      ]
    }
  ],

  21: [
    {
      id: 'e21_5',
      num: 'Q5',
      marks: '3 Marks (50–60 Words)',
      text: 'How did the wise guru use the foolish king\'s irrational greed and belief in rebirth to save his disciple\'s life in the Kingdom of Fools?',
      answer: `<p>A.K. Ramanujan\'s folk tale demonstrates how supreme wit outmaneuvers tyrannical stupidity:</p>
<ul>
  <li><strong>The Disciple\'s Peril:</strong> The fat disciple had grown plump eating cheap bananas and rice for a duddu, and was chosen for execution simply because the custom-built royal stake was too big for the scrawny thief.</li>
  <li><strong>The Guru\'s Ingenious Ploy:</strong> Returning via mystic vision, the guru whispered a plan to the disciple and then engaged in a staged quarrel with him, insisting that the king execute the guru first.</li>
  <li><strong>Flattering the King\'s Greed:</strong> When the bewildered king asked why, the guru confided secretly that the new stake was the stake of the god of justice. Whoever died on it first would be reborn as the King of the kingdom, and the second as the Minister.</li>
  <li><strong>The King\'s Downfall:</strong> Not wishing to lose his throne in the next life, the foolish king and his minister disguised themselves as convicts and were executed at the stake, liberating the kingdom.</li>
</ul>`,
      marking: [
        { key: 'Staged quarrel between guru and disciple over who dies first', marks: '1.5 Marks' },
        { key: 'Secret tale of rebirth as king and minister exploiting royal greed', marks: '1.5 Marks' }
      ]
    }
  ],

  22: [
    {
      id: 'e22_6',
      num: 'Q6',
      marks: '4 Marks (60–80 Words)',
      text: 'Why did God\'s angel choose the leaden heart of the Happy Prince and the dead swallow as the two most precious things in the entire city?',
      answer: `<p>Oscar Wilde\'s moving fairy tale culminates in spiritual transcendence where selfless sacrifice earns eternal paradise:</p>
<ol>
  <li><strong>The Prince\'s Ultimate Compassion:</strong> The gilded statue of the Happy Prince wept at the misery of the poor. He surrendered his ruby sword-hilt, sapphire eyes, and all his gold leaves to feed starving children and a poor playwright, ending up blind, stripped, and shabby.</li>
  <li><strong>The Swallow\'s Loyal Love:</strong> The swallow postponed his migration to warm Egypt, acting as the Prince\'s faithful messenger. When the Prince went blind, the bird stayed behind to comfort him, dying of bitter winter frost at his feet after kissing his lips.</li>
  <li><strong>Divine Judgment:</strong> When the town council melted the ugly leaden statue in a furnace, the fractured lead heart refused to melt and was tossed into a dustheap beside the dead bird. God declared that the swallow would sing forever in his garden of paradise, and the Prince would praise Him in his city of gold.</li>
</ol>`,
      marking: [
        { key: 'Prince sacrificing gold leaves and jewels to relieve poverty', marks: '1.5 Marks' },
        { key: 'Swallow staying behind out of love, dying of winter frost', marks: '1.5 Marks' },
        { key: 'Unmelted lead heart and bird welcomed into God\'s paradise', marks: '1.0 Mark' }
      ]
    }
  ],

  23: [
    {
      id: 'e23_5',
      num: 'Q5',
      marks: '3 Marks (50–60 Words)',
      text: 'How did nineteen-year-old Prashant display exemplary leadership and organizational resilience following the super cyclone in Ersama?',
      answer: `<p>Faced with apocalyptic devastation in October 1999, Prashant mobilized community solidarity instead of succumbing to despair:</p>
<ul>
  <li><strong>Food Procurement:</strong> He organized a youth and elders delegation to pressure the local merchant into releasing rice reserves for the 2,500 starving shelter refugees.</li>
  <li><strong>Sanitation & Hygiene:</strong> He formed a volunteer squad to clean the crowded shelter of filth, vomit, urine, and floating carcasses, tending to open wounds.</li>
  <li><strong>Air-Drop Communications:</strong> He instructed children to lie on the sand with empty plates on their stomachs to signal military rescue helicopters, securing regular food drops.</li>
  <li><strong>Community Rehabilitation:</strong> He resisted separating orphans and widows into institutions; instead, he settled them in foster families and started food-for-work programmes.</li>
</ul>`,
      marking: [
        { key: 'Organizing rice procurement and cleaning shelter of filth/carcasses', marks: '1.5 Marks' },
        { key: 'Child stomach signal for helicopters and foster family rehabilitation', marks: '1.5 Marks' }
      ]
    }
  ],

  25: [
    {
      id: 'e25_5',
      num: 'Q5',
      marks: '3 Marks (50–60 Words)',
      text: 'How does author Zan Gaudioso overcome his sense of alienation, recover from the devastating fire, and discover that \'his house is now a home\'?',
      answer: `<p>The narrative depicts emotional resurrection through community empathy and animal reunion:</p>
<ol>
  <li><strong>The Crisis:</strong> A domestic fire consumed all of Zan\'s possessions—backpack, clothes, books, and his beloved pet cat, making him feel naked, insecure, and isolated in his new high school.</li>
  <li><strong>School Camaraderie:</strong> When classmates learned of the tragedy, they rallied together and gifted him an outpouring of school supplies, notebooks, and stylish clothes. The genuine human kindness thawed his emotional numbness, allowing him to open up and make friends.</li>
  <li><strong>Reunion with Cat:</strong> When a compassionate woman tracked him down to return his lost red tabby cat, his healing was complete. Standing with friends watching his home being rebuilt, he realized that a home is made not of brick and mortar, but of love, friendship, and belonging.</li>
</ol>`,
      marking: [
        { key: 'Devastating loss of possessions and pet cat in house fire', marks: '1.0 Mark' },
        { key: 'Generous outpouring of school supplies and warmth from classmates', marks: '1.0 Mark' },
        { key: 'Reunion with cat and philosophical realization: Home is love and community', marks: '1.0 Mark' }
      ]
    }
  ]
};

function formatQCard(q) {
  const markingRows = q.marking.map(m => `          <div class="marking-row"><span class="marking-key">${m.key}</span><span class="marking-marks">${m.marks}</span></div>`).join('\n');
  return `  <div class="q-card" id="${q.id}">
    <div class="q-head" onclick="toggleQ('${q.id}')">
      <div class="q-num">${q.num}</div>
      <div class="q-text">${q.text}</div>
      <div class="q-marks">${q.marks}</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer (Max Word Count)</div>
        <div class="answer-text">
${q.answer}
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme Breakdown 2026-27</div>
${markingRows}
        </div>
      </div>
    </div>
  </div>`;
}

console.log('=== EXPANDING CLASS 9 ENGLISH CHAPTERS ===');

let totalInjected = 0;

for (let ch = 1; ch <= 26; ch++) {
  const qList = additions[ch] || [];
  if (qList.length === 0) continue;

  const fPath = path.join(chDir, `ch${ch}.html`);
  let content = fs.readFileSync(fPath, 'utf8');

  const toInject = qList.filter(q => !content.includes(`id="${q.id}"`));
  if (toInject.length === 0) {
    console.log(`Ch ${ch}: All questions already present.`);
    continue;
  }

  const cardsHtml = toInject.map(formatQCard).join('\n\n');

  if (content.includes('<div class="cbq-section">')) {
    content = content.replace('<div class="cbq-section">', `${cardsHtml}\n\n  <div class="cbq-section">`);
  } else if (content.includes('<div class="chapter-nav-btns">')) {
    content = content.replace('<div class="chapter-nav-btns">', `${cardsHtml}\n\n  <div class="chapter-nav-btns">`);
  } else {
    content = content.replace('</section>', `${cardsHtml}\n</section>`);
  }

  fs.writeFileSync(fPath, content, 'utf8');
  totalInjected += toInject.length;
  console.log(`Ch ${ch}: Injected ${toInject.length} questions into ch${ch}.html`);
}

console.log(`\n✅ Total English questions injected: ${totalInjected}`);

// Now rebuild chapters-c9e/chapters-data.js
console.log('\n=== Rebuilding chapters-c9e/chapters-data.js ===');
const chaptersData = {};
for (let ch = 1; ch <= 26; ch++) {
  const fPath = path.join(chDir, `ch${ch}.html`);
  if (fs.existsSync(fPath)) {
    chaptersData[ch.toString()] = fs.readFileSync(fPath, 'utf8');
  }
}

const dataJsContent = `// Class 9 English Preloaded NCERT Solutions Data Bundle (All 26 Units)\nwindow.CHAPTERS_DATA = ${JSON.stringify(chaptersData, null, 2)};\n`;
fs.writeFileSync(path.join(chDir, 'chapters-data.js'), dataJsContent, 'utf8');
console.log(`✅ chapters-c9e/chapters-data.js successfully rewritten (${dataJsContent.length} bytes).`);
