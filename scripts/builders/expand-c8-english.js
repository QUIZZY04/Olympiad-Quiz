// scripts/builders/expand-c8-english.js
// Injects the 114 missing physical NCERT textbook questions into ncert-solutions-class-8-english.html
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const FILE = path.join(ROOT, 'ncert-solutions-class-8-english.html');

const ENGLISH_ADDITIONS = {
  // HONEYDEW PROSE (ch1 to ch10)
  ch1: [
    {
      num: 'Q5', marks: '3 Marks',
      text: 'Why did the author go to Bridport? Who did he meet when he reached there?',
      answer: '<p>The author went to Bridport to deliver Jim Macpherson\'s long-lost letter to his elderly wife, Connie Macpherson. He found her living in a nursing home at Burlington House. She was 101 years old, sitting quietly in a wheelchair with her hands folded in her lap, longing for her husband.</p>',
      rubric: [['Reason: delivering Jim\'s letter to Connie', '1.5 Marks'], ['Meeting Connie at Burlington House nursing home', '1.5 Marks']]
    },
    {
      num: 'Q6', marks: '3 Marks',
      text: 'Who did Connie Macpherson mistake her visitor for? Why did she make this mistake?',
      answer: '<p>Connie mistook the narrator for her husband, <strong>Jim Macpherson</strong>. Due to her extreme old age (101 years) and fading memory, when the narrator presented the tin box with Jim\'s letter on Christmas Day, she emotionally believed that Jim had fulfilled his wartime promise to return home for Christmas.</p>',
      rubric: [['Mistook visitor for Jim Macpherson', '1.5 Marks'], ['Old age, memory loss, and Christmas promise connection', '1.5 Marks']]
    },
    {
      num: 'Q7', marks: '2 Marks',
      text: 'Which sentence in the text shows that the visitor did not try to hide his identity?',
      answer: '<p>The sentence is: <em>"I explained about the desk, about how I had found it, but I don\'t think she was listening."</em> This proves that the narrator was completely honest and transparent about who he was.</p>',
      rubric: [['Quoting relevant sentence', '1 Mark'], ['Explanation of honesty', '1 Mark']]
    },
    {
      num: 'Q8', marks: '3 Marks',
      text: 'Do you think the title "The Best Christmas Present in the World" is suitable? Give reasons.',
      answer: '<p><strong>Yes, the title is exceptionally suitable.</strong> For Connie, the return of Jim\'s letter after decades of lonely waiting felt like Jim himself had returned. It brought her supreme peace and happiness, making it truly the greatest Christmas gift she could ever receive.</p>',
      rubric: [['Suitability justified', '1.5 Marks'], ['Emotional significance of the gift', '1.5 Marks']]
    },
    {
      num: 'Q9', marks: '2 Marks',
      text: 'What contrast does Michael Morpurgo draw between the cruelty of war and the spirit of Christmas?',
      answer: '<p>The author contrasts the bloody, political hatred of war with the innate human craving for peace, friendship, and brotherhood shown during the Christmas Truce, where enemies shared food, drinks, songs, and football in No Man\'s Land.</p>',
      rubric: [['Contrast between war cruelty and brotherhood', '1 Mark'], ['Reference to Christmas Truce in No Man\'s Land', '1 Mark']]
    }
  ],

  ch2: [
    {
      num: 'Q4', marks: '3 Marks',
      text: 'How did Tilly Smith save many lives on Phuket beach in Thailand? What warning signs did she notice?',
      answer: '<p>Tilly noticed the sea slowly swelling, bubbling, frothing, and forming whirlpools. Remembering a geography video lesson about the 1946 Hawaiian tsunami, she realized an underwater earthquake had triggered a tsunami. She screamed at her family and tourists to evacuate the beach immediately to high ground, saving numerous lives.</p>',
      rubric: [['Warning signs observed (swelling, frothing sea)', '1.5 Marks'], ['Applying geography lesson to evacuate beach', '1.5 Marks']]
    },
    {
      num: 'Q5', marks: '3 Marks',
      text: 'What was the significance of the geography lesson Tilly had learned in her school in England?',
      answer: '<p>Tilly\'s geography teacher in England had shown a video of the 1946 Hawaiian tsunami and taught the key warning signs: seismic sea tremors, receding waters, and frothing waves. This practical classroom knowledge empowered a young girl to recognize the lethal danger and act decisively during a real disaster.</p>',
      rubric: [['Content of geography lesson', '1.5 Marks'], ['Practical application saving human lives', '1.5 Marks']]
    },
    {
      num: 'Q6', marks: '2 Marks',
      text: 'How did Sanjeev, the policeman, lose his life in the Nicobar islands after saving his own family?',
      answer: '<p>After safely rescuing his wife and baby daughter from the first wave, Sanjeev heard desperate cries for help from the guesthouse cook John\'s wife. He bravely jumped into the churning waters to rescue her, but both were swept away and drowned.</p>',
      rubric: [['Heroic attempt to rescue cook\'s wife', '1 Mark'], ['Tragic drowning in churning waves', '1 Mark']]
    },
    {
      num: 'Q7', marks: '2 Marks',
      text: 'What did the survival of animals at Yala National Park in Sri Lanka suggest to wildlife experts?',
      answer: '<p>At Yala National Park, while 60 visitors were washed away from Patanangala beach, only two water buffaloes died. Elephants fled to higher hills and dogs refused to go outside. This proved that animals possess a heightened "sixth sense" detecting low-frequency seismic vibrations hours before humans notice.</p>',
      rubric: [['Animal survival statistics at Yala', '1 Mark'], ['Evidence of animal sixth sense / infrasound sensitivity', '1 Mark']]
    },
    {
      num: 'Q8', marks: '3 Marks',
      text: 'Describe the ordeal of 13-year-old Meghna and 10-year-old Almas Javed during the 2004 tsunami.',
      answer: '<p><strong>Meghna:</strong> Swept away with her parents, she spent two days floating on a wooden door in the open sea. Relief helicopters did not see her, but a wave brought her ashore to Katchall.<br><strong>Almas:</strong> Her father and grandfather were swept away. Almas climbed onto a floating log of wood, fainted, and woke up safely in a hospital in Kamorta.</p>',
      rubric: [['Meghna\'s floating on a wooden door for two days', '1.5 Marks'], ['Almas\'s rescue on a wooden log', '1.5 Marks']]
    },
    {
      num: 'Q9', marks: '2 Marks',
      text: 'List four essential disaster preparedness guidelines for coastal areas prone to tsunamis.',
      answer: '<p>1. Install real-time ocean acoustic tsunami warning buoys.<br>2. Build elevated concrete tsunami shelters with clear evacuation routes.<br>3. Conduct regular community mock drills.<br>4. Preserve natural mangrove coastal forests to absorb wave impact.</p>',
      rubric: [['Two technological/structural measures', '1 Mark'], ['Two community/nature measures', '1 Mark']]
    }
  ],

  ch3: [
    {
      num: 'Q3', marks: '3 Marks',
      text: 'Who was Raja Ram Mohan Roy? What were his ideas on religious reform and social equality?',
      answer: '<p>Raja Ram Mohan Roy was a learned social reformer from Bengal. He preached that all religions teach the same core truths. He fought against untouchability, idol worship, and the brutal practice of Sati. He championed scientific modern education, press freedom, and women\'s rights, traveling to England to study the British constitution.</p>',
      rubric: [['Social reformer fighting Sati and superstitions', '1.5 Marks'], ['Core truth of religions and scientific education', '1.5 Marks']]
    },
    {
      num: 'Q4', marks: '3 Marks',
      text: 'What was Lord Macaulay\'s proposal regarding the medium of education in India? What was its long-term consequence?',
      answer: '<p>In 1835, Lord Macaulay proposed that Indians should be educated through the English language rather than Persian or Sanskrit. The British aimed to produce a class of loyal clerks to run administration cheaply. In the long run, however, English education exposed Indians to Western democratic ideals of freedom, creating visionary national leaders.</p>',
      rubric: [['Proposal of English medium to train clerks', '1.5 Marks'], ['Long-term rise of democratic awareness and national unity', '1.5 Marks']]
    },
    {
      num: 'Q5', marks: '2 Marks',
      text: 'How did the British East India Company destroy traditional Indian handicrafts and weavers?',
      answer: '<p>The British imposed heavy import duties on Indian goods entering Britain, while British machine-made textiles were imported into India completely duty-free. Unable to compete with cheap machine goods, traditional Indian cotton weavers were ruined and starved.</p>',
      rubric: [['Unfair tariff policies and duty-free British imports', '1 Mark'], ['Ruining of local weavers and craftsmen', '1 Mark']]
    },
    {
      num: 'Q6', marks: '3 Marks',
      text: 'Describe Regulation III introduced by the British rulers in 1818.',
      answer: '<p>Under <strong>Regulation III of 1818</strong>, the British colonial government could arrest and jail any Indian citizen without any trial or right to appeal in a court of law. It symbolized the ruthless suppression of civil liberties and fundamental rights by the East India Company.</p>',
      rubric: [['Imprisonment without court trial', '1.5 Marks'], ['Symbol of tyrannical colonial oppression', '1.5 Marks']]
    },
    {
      num: 'Q7', marks: '2 Marks',
      text: 'What sparked the Revolt of 1857 among Indian sepoys like Mangal Pandey?',
      answer: '<p>The immediate spark was the introduction of the new Enfield rifle cartridge, which was greased with the fat of cows and pigs. Sepoys had to bite off the cartridge before loading, which outraged both Hindu and Muslim religious sentiments. Mangal Pandey attacked his British officers at Barrackpore, igniting the 1857 Revolt.</p>',
      rubric: [['Greased cartridge hurting religious sentiments', '1 Mark'], ['Mangal Pandey\'s mutiny sparking widespread rebellion', '1 Mark']]
    }
  ],

  ch4: [
    {
      num: 'Q4', marks: '3 Marks',
      text: 'Who was Parimal Ghose? What intimate personal details did he mention to convince Bepin Babu that he had visited Ranchi in 1958?',
      answer: '<p>Parimal Ghose was a stranger who confronted Bepin Babu in a bookstore. To convince him, he revealed intimate details: that Bepin Babu had hurt his right knee at Hudroo Falls, that he carried a bag of books everywhere, had no children, and that his wife had died ten years earlier while his only brother died insane in a mental hospital.</p>',
      rubric: [['Store encounter and knee injury mention', '1.5 Marks'], ['Personal details (wife\'s death, brother\'s insanity, bag of books)', '1.5 Marks']]
    },
    {
      num: 'Q5', marks: '3 Marks',
      text: 'Why did Bepin Babu consult Dr Paresh Chanda? What unusual remedy did Dr Chanda prescribe?',
      answer: '<p>Worried that he had lost memory of an entire week in Ranchi, Bepin Babu consulted Dr Chanda. Puzzled by selective amnesia, Dr Chanda prescribed an unusual remedy: Bepin Babu should physically visit Ranchi again so that the sights and atmosphere might trigger his lost memories.</p>',
      rubric: [['Fear of selective amnesia', '1.5 Marks'], ['Dr Chanda\'s advice to revisit Ranchi', '1.5 Marks']]
    },
    {
      num: 'Q6', marks: '2 Marks',
      text: 'What happened to Bepin Babu when he reached Hudroo Falls in Ranchi?',
      answer: '<p>At Hudroo Falls, Bepin Babu felt no spark of recognition. Overwhelmed by dizziness and confusion, he collapsed unconscious on the rocks and was rescued by two Gujarati gentlemen who found him lying beside the boulders.</p>',
      rubric: [['No memory triggered', '1 Mark'], ['Collapse and rescue by tourists', '1 Mark']]
    },
    {
      num: 'Q7', marks: '3 Marks',
      text: 'What was written in Chunilal\'s letter that Bepin Babu received upon his return from Ranchi?',
      answer: '<p>Chunilal revealed that the entire Ranchi trip was an elaborate hoax conceived as revenge. Hurt that Bepin Babu had refused to help an old schoolfriend down on his luck, Chunilal used his fertile imagination to play a practical joke on Bepin Babu\'s vanity and self-assurance.</p>',
      rubric: [['Revelation of the hoax', '1.5 Marks'], ['Chunilal\'s motive: revenge for unhelpful friendship', '1.5 Marks']]
    },
    {
      num: 'Q8', marks: '2 Marks',
      text: 'Was Chunilal\'s trick on Bepin Babu justified? Give your opinion.',
      answer: '<p>While Chunilal\'s trick was harmless and taught Bepin Babu a valuable lesson in empathy, subjecting a friend to severe psychological anxiety and medical distress was not entirely ethical. True friends communicate grievances openly rather than tormenting someone mentally.</p>',
      rubric: [['Balanced viewpoint on empathy vs mental distress', '1 Mark'], ['Moral evaluation of practical joke', '1 Mark']]
    },
    {
      num: 'Q9', marks: '2 Marks',
      text: 'What lie did Bepin Babu tell Dr Chanda at the very end of the story, and why?',
      answer: '<p>Bepin Babu lied to Dr Chanda, saying that his memory had returned the moment he stepped off the train at Ranchi. He lied out of pure embarrassment, wishing to hide the humiliating fact that he had been completely fooled by Chunilal\'s prank.</p>',
      rubric: [['Lying that memory returned at Ranchi station', '1 Mark'], ['Reason: hiding embarrassment and foolishness', '1 Mark']]
    }
  ],

  ch5: [
    {
      num: 'Q3', marks: '3 Marks',
      text: 'Why does Major H.P.S. Ahluwalia state that climbing Mount Everest is also a deeply spiritual experience?',
      answer: '<p>Ahluwalia explains that conquering Everest is not merely a physical victory of endurance. Standing atop the world fills the climber with profound humility, awe at nature\'s grandeur, and a feeling of oneness with God. The climber realizes how small he is in the vast universe.</p>',
      rubric: [['Transcends physical endurance', '1.5 Marks'], ['Inculcates humility and spiritual awe', '1.5 Marks']]
    },
    {
      num: 'Q4', marks: '3 Marks',
      text: 'What three distinct qualities are essential for climbing high mountain peaks, according to the author?',
      answer: '<p>The three indispensable qualities are: <strong>Endurance, Persistence, and Willpower</strong>. The climber must have physical stamina to brave thin air, unwavering persistence to continue step by step through agonizing fatigue, and mental willpower to conquer the fear of death.</p>',
      rubric: [['Naming endurance, persistence, willpower', '1.5 Marks'], ['Explaining mental and physical interplay', '1.5 Marks']]
    },
    {
      num: 'Q5', marks: '2 Marks',
      text: 'What symbols of reverence were left by the expedition team members on the summit of Everest?',
      answer: '<p>The author left a picture of Guru Nanak; Rawat left a picture of Goddess Durga; Phu Dorji left a relic of the Buddha; and Edmund Hillary had buried a Christian Cross under a cairn of snow. These symbols represented religious reverence, not triumph.</p>',
      rubric: [['Listing relics (Guru Nanak, Durga, Buddha, Cross)', '1 Mark'], ['Significance: reverence, not pride', '1 Mark']]
    },
    {
      num: 'Q6', marks: '2 Marks',
      text: 'What does the author mean by "The Summit Within"?',
      answer: '<p>"The Summit Within" refers to the human mind and soul. Every person must conquer their own internal peaks of fear, self-doubt, anger, and selfishness. Mastering this internal summit is far harder and more rewarding than scaling any mountain on Earth.</p>',
      rubric: [['Conquering internal fear, ego, and self-doubt', '1 Mark'], ['Internal summit higher than Everest', '1 Mark']]
    },
    {
      num: 'Q7', marks: '2 Marks',
      text: 'How did the Everest experience help Major Ahluwalia in facing life\'s painful ordeals later?',
      answer: '<p>Later in life, when Ahluwalia was severely wounded in war and confined to a wheelchair, the memory of his Everest climb gave him extraordinary inner strength, fortitude, and defiance to face paralysis without despair.</p>',
      rubric: [['Facing wartime disability and wheelchair confinement', '1 Mark'], ['Deriving inner fortitude from mountain conquest', '1 Mark']]
    }
  ],

  ch6: [
    {
      num: 'Q3', marks: '3 Marks',
      text: 'How did Jody convince his mother to let him go into the scrub forest and bring the orphaned fawn home?',
      answer: '<p>Jody reminded his mother that his father Penny Baxter was saved by killing the doe. Leaving the motherless fawn to starve would be terribly ungrateful. His father, Doc Wilson, and Mill-wheel all supported Jody, convincing his mother that it was their moral duty.</p>',
      rubric: [['Moral argument of gratitude towards the fawn', '1.5 Marks'], ['Support from Penny, Doc Wilson, and Mill-wheel', '1.5 Marks']]
    },
    {
      num: 'Q4', marks: '3 Marks',
      text: 'What memorable words did Doc Wilson say to persuade Jody\'s mother?',
      answer: '<p>Doc Wilson said: <em>"Nothing in the world ever comes quite free. The boy’s right, and his daddy’s right."</em> This meant that since Penny had taken the doe\'s life to cure himself, justice required them to nurture the doe\'s helpless baby.</p>',
      rubric: [['Quoting Doc Wilson: "Nothing in the world comes quite free"', '1.5 Marks'], ['Explaining the moral debt owed to the doe', '1.5 Marks']]
    },
    {
      num: 'Q5', marks: '2 Marks',
      text: 'Why did Jody not want Mill-wheel to accompany him all the way to the fawn\'s hiding place?',
      answer: '<p>Jody had two reasons: if the fawn was dead or couldn\'t be found, he didn\'t want Mill-wheel to see his tears; and if the fawn was alive, the reunion would be so deeply intimate and secret that he could not bear to share it with anyone.</p>',
      rubric: [['Hiding grief if fawn was dead', '1 Mark'], ['Protecting intimate joy if fawn was found', '1 Mark']]
    },
    {
      num: 'Q6', marks: '3 Marks',
      text: 'How did Jody feed the fawn when he brought it home? Describe the affectionate scene.',
      answer: '<p>The fawn refused to drink milk directly from the gourd. Jody dipped his fingers in the warm milk and thrust them into the fawn\'s mouth. The fawn sucked greedily. Jody slowly lowered his fingers into the milk gourd, and the fawn followed, drinking contentedly while nuzzling Jody with trust.</p>',
      rubric: [['Fawn refusing gourd and sucking Jody\'s milk-dipped fingers', '1.5 Marks'], ['Guiding fawn to drink with deep tenderness', '1.5 Marks']]
    },
    {
      num: 'Q7', marks: '2 Marks',
      text: 'What environmental message does Marjorie Kinnan Rawlings convey in "This is Jody\'s Fawn"?',
      answer: '<p>The story teaches that humans must not exploit wildlife callously without accountability. If human survival inadvertently harms nature, humans have a sacred moral responsibility to protect and nurture orphaned creatures.</p>',
      rubric: [['Human accountability toward nature', '1 Mark'], ['Compassion and responsibility toward wild animals', '1 Mark']]
    }
  ],

  ch7: [
    {
      num: 'Q4', marks: '3 Marks',
      text: 'What was Stephen Hawking\'s advice for disabled people? Did Firdaus Kanga agree with his view?',
      answer: '<p>Hawking advised that disabled people should concentrate only on what they are good at, rather than wasting energy attempting things like disabled Olympics. Firdaus agreed, recalling how he spent years fruitlessly trying to play a Spanish guitar twice his size before realizing his true gift was writing.</p>',
      rubric: [['Focusing on strengths, avoiding useless imitation', '1.5 Marks'], ['Firdaus\'s guitar anecdote validating Hawking\'s view', '1.5 Marks']]
    },
    {
      num: 'Q5', marks: '3 Marks',
      text: 'How did Stephen Hawking communicate with the world despite ALS disease?',
      answer: '<p>Hawking was completely paralyzed except for slight movement in one finger. He used a specialized computer mounted on his wheelchair with an eye-gaze sensor and finger switch to select words on a screen, which were vocalized by a speech synthesizer in an electronic, robotic voice.</p>',
      rubric: [['ALS paralysis details', '1.5 Marks'], ['Computerized voice synthesizer and eye/switch interface', '1.5 Marks']]
    },
    {
      num: 'Q6', marks: '2 Marks',
      text: 'Describe Firdaus Kanga\'s visual impression upon seeing Stephen Hawking in person.',
      answer: '<p>Kanga felt Hawking looked like a 3D photograph or an animated corpse—a slumped, twisted body whose brilliant, incandescent mind burned brightly like an eternal flame trapped inside an fragile, translucent lantern of skin and bone.</p>',
      rubric: [['Metaphor of a glowing flame in a fragile lantern', '1 Mark'], ['Striking contrast between brilliant mind and frail body', '1 Mark']]
    },
    {
      num: 'Q7', marks: '2 Marks',
      text: 'Why does Firdaus Kanga call Stephen Hawking an embodiment of courage?',
      answer: '<p>Because despite devastating paralysis, Hawking never gave up or complained. He explored the deepest mysteries of black holes and the universe with humor, warmth, and relentless intellectual energy, inspiring millions worldwide.</p>',
      rubric: [['Unconquerable spirit despite total paralysis', '1 Mark'], ['Monumental scientific contributions with humor and warmth', '1 Mark']]
    }
  ],

  ch8: [
    {
      num: 'Q3', marks: '3 Marks',
      text: 'How does the arrival of the monsoon mist affect the birds, forest, and hill station of Mussoorie?',
      answer: '<p>The mist blankets the hills in silence, concealing the trees. The birds suddenly fall silent as if it were midnight. The familiar green hills become ghostly white, lending a melancholy quietude to the mountains.</p>',
      rubric: [['Silence of birds and ghostly mist concealing hills', '1.5 Marks'], ['Melancholy quietude described by Bond', '1.5 Marks']]
    },
    {
      num: 'Q4', marks: '3 Marks',
      text: 'Describe Ruskin Bond\'s encounter with leeches and scarlet minivets during the monsoon.',
      answer: '<p>With the monsoon rains, leeches emerge in the damp grass, attaching themselves to human skin to suck blood. Meanwhile, brilliant scarlet minivets flit silently through the green foliage like bright jewels, unable to conceal themselves because of their bright red feathers.</p>',
      rubric: [['Leeches in damp grass sucking blood', '1.5 Marks'], ['Brilliant scarlet minivets contrasting with green leaves', '1.5 Marks']]
    },
    {
      num: 'Q5', marks: '2 Marks',
      text: 'What happens in Mussoorie during the relentless downpour of August 2 in the diary entry?',
      answer: '<p>The rain drums steadily on the corrugated tin roof without stopping. While the roof leaks slightly, the rhythmic sound creates a cozy feeling of being sheltered indoors while communing intimately with nature outside.</p>',
      rubric: [['Drumming sound on tin roof', '1 Mark'], ['Cozy feeling of indoor shelter amidst rain', '1 Mark']]
    },
    {
      num: 'Q6', marks: '2 Marks',
      text: 'Why do rodents, shrews, and snakes invade houses in the hills during late monsoon?',
      answer: '<p>Heavy rainwater floods their underground burrows and holes in the earth. Deprived of shelter, they seek warmth and dryness in roofs, attics, and godowns of human homes.</p>',
      rubric: [['Flooding of underground burrows', '1 Mark'], ['Seeking dry shelter in human homes', '1 Mark']]
    },
    {
      num: 'Q7', marks: '2 Marks',
      text: 'What signs indicate that the monsoon is ending and winter is arriving in late October?',
      answer: '<p>The monsoon rain gives way to golden autumn sunlight. Wild dahlias, marigolds, and white butterfly-gingers bloom across the hillsides, and the sky turns a brilliant, cloudless cobalt blue.</p>',
      rubric: [['Golden autumn sunshine and blue skies', '1 Mark'], ['Blooming of seasonal wildflowers', '1 Mark']]
    }
  ],

  ch9: [
    {
      num: 'Q3', marks: '3 Marks',
      text: 'What was the Great Stone Face, and how was it formed by nature?',
      answer: '<p>The Great Stone Face was a magnificent work of nature formed on the perpendicular side of a mountain by gigantic rocks piled together. Viewed from the right distance, it resembled a noble, majestic, and benevolent human face with a wise and loving expression.</p>',
      rubric: [['Natural rock formation on mountainside', '1.5 Marks'], ['Resemblance to benevolent, noble human countenance', '1.5 Marks']]
    },
    {
      num: 'Q4', marks: '3 Marks',
      text: 'What was the ancient prophecy associated with the Great Stone Face?',
      answer: '<p>The prophecy foretold that at some future day, a child would be born in the valley who was destined to become the greatest and noblest person of his age, and his countenance in adulthood would bear an exact resemblance to the Great Stone Face.</p>',
      rubric: [['Child born in valley destined for greatness', '1.5 Marks'], ['Adult countenance matching the Stone Face', '1.5 Marks']]
    },
    {
      num: 'Q5', marks: '2 Marks',
      text: 'Who was Gathergold, and why did Ernest feel he was not the prophesied man?',
      answer: '<p>Gathergold was an immensely rich merchant who returned to his native valley. Although crowds cheered him, Ernest saw only a wrinkled, shrewd, and miserly yellow face lacking all nobility and benevolence, proving he was not the man of the prophecy.</p>',
      rubric: [['Miserly merchant returning with riches', '1 Mark'], ['Shrewd, greedy face lacking love and wisdom', '1 Mark']]
    },
    {
      num: 'Q6', marks: '2 Marks',
      text: 'Who was General Blood-and-Thunder, and why did Ernest reject him as the Stone Face?',
      answer: '<p>He was a famous military hero who returned to the valley. Though his face showed iron will and determination, it lacked the gentle wisdom, peace, and tender sympathy that radiated from the Great Stone Face.</p>',
      rubric: [['Military hero of great determination', '1 Mark'], ['Face lacked gentle wisdom and love', '1 Mark']]
    },
    {
      num: 'Q7', marks: '2 Marks',
      text: 'What qualities did Ernest acquire through his lifelong habit of gazing at the Great Stone Face?',
      answer: '<p>Ernest absorbed the virtues he saw in the mountain: selfless love, quiet wisdom, simplicity, humility, and compassion for all living beings, growing into an exceptionally wise and gentle man.</p>',
      rubric: [['Absorbing benevolence, humility, and love', '1 Mark'], ['Quiet wisdom and service to neighbors', '1 Mark']]
    }
  ],

  ch10: [
    {
      num: 'Q3', marks: '3 Marks',
      text: 'Who was the poet who came to visit Ernest, and why did Ernest admire his writings?',
      answer: '<p>The poet was a native of the valley who lived in distant cities. His verses celebrated nature\'s beauty and the divine spark in human life. Ernest admired his poetry because it gave voice to the sublime, heavenly truths Ernest felt in his own heart.</p>',
      rubric: [['Poet from the valley writing sublime verses', '1.5 Marks'], ['Celebrating divine truth and nature\'s beauty', '1.5 Marks']]
    },
    {
      num: 'Q4', marks: '3 Marks',
      text: 'Why did the poet weep and state that he was unworthy of resembling the Great Stone Face?',
      answer: '<p>The poet confessed that his daily life did not match the high ideals of his poetry. He had lacked faith in his own visions, chased petty worldly dreams, and lived a compromised life. Hence, his countenance could never mirror the pure grandeur of the Great Stone Face.</p>',
      rubric: [['Confession that his life fell short of his ideals', '1.5 Marks'], ['Chasing worldly vanities and lacking purity of spirit', '1.5 Marks']]
    },
    {
      num: 'Q5', marks: '3 Marks',
      text: 'Describe the outdoor gathering where Ernest addressed the inhabitants of the valley.',
      answer: '<p>At sunset, Ernest spoke to his neighbors in an open natural amphitheatre. His words were simple, sincere, and powerful because his thoughts matched his actions. The setting sun illuminated his white hair and noble brow with a heavenly glow.</p>',
      rubric: [['Natural amphitheatre sunset gathering', '1.5 Marks'], ['Sincerity where words perfectly matched deeds', '1.5 Marks']]
    },
    {
      num: 'Q6', marks: '2 Marks',
      text: 'How was Ernest finally recognized as the likeness of the Great Stone Face?',
      answer: '<p>Looking at Ernest framed by the golden sunset, the poet suddenly shouted: <em>"Behold! Behold! Ernest is himself the likeness of the Great Stone Face!"</em> The crowd looked and saw that Ernest\'s noble countenance was identical to the majestic stone face.</p>',
      rubric: [['Poet\'s sudden revelation during the sunset speech', '1 Mark'], ['Unanimous recognition by the crowd', '1 Mark']]
    },
    {
      num: 'Q7', marks: '2 Marks',
      text: 'What was Ernest\'s reaction after being proclaimed as the fulfillment of the prophecy?',
      answer: '<p>Ever humble and self-effacing, Ernest quietly walked home, still hoping that a man wiser and nobler than himself would one day appear, bearing a truer resemblance to the Great Stone Face.</p>',
      rubric: [['Quiet, humble demeanor without vanity', '1 Mark'], ['Still hoping a wiser man would come', '1 Mark']]
    }
  ],

  // HONEYDEW POETRY (ch11 to ch18)
  ch11: [
    {
      num: 'Q2', marks: '3 Marks',
      text: 'The ant tells the cricket to "dance the winter away". Is the word "dance" used in its ordinary sense here, or with irony? Explain.',
      answer: '<p>The word "dance" is used with <strong>biting sarcasm and irony</strong>. The ant mocks the foolish cricket, implying that if he spent the entire sunny summer and spring singing and dancing without saving a crumb of food, he should now spend the cold winter dancing too, rather than begging others for sustenance.</p>',
      rubric: [['Identification of sarcasm and irony', '1.5 Marks'], ['Explanation of ant mocking cricket\'s waste of time', '1.5 Marks']]
    },
    {
      num: 'Q3', marks: '2 Marks',
      text: 'What is the moral lesson that Aesop\'s fable of the ant and the cricket teaches human beings?',
      answer: '<p>It teaches that one must work hard during favorable times and save prudently for future hardships. Laziness and shortsighted indulgence lead to poverty and starvation when adversity strikes.</p>',
      rubric: [['Foresight, hard work, and saving for adversity', '1 Mark'], ['Consequences of laziness and heedless fun', '1 Mark']]
    },
    {
      num: 'Q4', marks: '2 Marks',
      text: 'Explain the line: "Folks call this a fable. I’ll warrant it true: Some crickets have four legs, and some have two."',
      answer: '<p>The poet suggests that although it is called a fable of insects, it is literally true of humans. "Two-legged crickets" refers to irresponsible human beings who squander their youth in frivolity without providing for their old age.</p>',
      rubric: [['Metaphor of "two-legged crickets" for humans', '1 Mark'], ['Universal truth of human improvidence', '1 Mark']]
    }
  ],

  ch12: [
    {
      num: 'Q2', marks: '3 Marks',
      text: 'What three geographical realities become clear to the poet as the jet reaches ten thousand feet altitude?',
      answer: '<p>1. The country developed cities where the rivers flowed, showing that human civilization naturally depends on water.<br>2. The valleys were densely populated because fertile land and water support agriculture.<br>3. The earth is round and contains more sea than dry land.</p>',
      rubric: [['Cities along rivers', '1 Mark'], ['Populated valleys due to resources', '1 Mark'], ['Earth is round with more water than land', '1 Mark']]
    },
    {
      num: 'Q3', marks: '3 Marks',
      text: 'What human mystery remains completely unexplained to the poet when viewing Earth from above?',
      answer: '<p>The poet cannot understand why human beings on such a beautiful, unified planet find causes to hate one another, build high walls of separation, and wage wars to kill their fellow humans. From the sky, nature shows no borders; hatred is purely a tragic human invention.</p>',
      rubric: [['Inability to understand human hatred and walls', '1.5 Marks'], ['Contrast between borderless nature and human division', '1.5 Marks']]
    }
  ],

  ch13: [
    {
      num: 'Q2', marks: '3 Marks',
      text: 'Why is Macavity called the "Hidden Paw" and the "Napoleon of Crime"?',
      answer: '<p>He is called the <strong>Hidden Paw</strong> because he is a criminal mastermind who commits offenses without leaving a footprint or physical clue. He is the <strong>Napoleon of Crime</strong> because he directs all criminal operations from behind the scenes, outsmarting Scotland Yard and the Flying Squad completely.</p>',
      rubric: [['Explanation of "Hidden Paw" (leaving no clues)', '1.5 Marks'], ['Explanation of "Napoleon of Crime" (mastermind)', '1.5 Marks']]
    },
    {
      num: 'Q3', marks: '2 Marks',
      text: 'What infallible alibi does Macavity always possess whenever a crime is committed?',
      answer: '<p>Whenever a crime is discovered (food stolen, jewel-case rifled, treaty missing), Macavity is always a mile away—fast asleep, licking his thumbs, or doing complex long-division sums—ensuring he can never be caught at the crime scene.</p>',
      rubric: [['Being a mile away engaged in innocent acts', '1 Mark'], ['Unshakable alibi baffling police', '1 Mark']]
    },
    {
      num: 'Q4', marks: '2 Marks',
      text: 'Which lines in T.S. Eliot\'s poem show that Macavity defies the universal laws of physics?',
      answer: '<p>The lines are: <em>"He breaks the law of gravity, his powers of levitation would make a fakir stare."</em> Macavity floats in the air, defying gravity and natural scientific laws.</p>',
      rubric: [['Quoting law of gravity / levitation lines', '1 Mark'], ['Explanation of physical impossibility', '1 Mark']]
    }
  ],

  ch14: [
    {
      num: 'Q2', marks: '3 Marks',
      text: 'Why does the speaker in "The Last Bargain" reject the king\'s offer of power, the old man\'s gold, and the fair maid\'s beauty?',
      answer: '<p>The speaker realizes that political power is transitory ("counted for nought"), beauty fades into tears, and gold cannot buy inner freedom. Accepting any of these worldly offers would make him an indebted servant to an external master.</p>',
      rubric: [['Flaws of power (transitory) and beauty/gold', '1.5 Marks'], ['Refusal to sacrifice freedom for worldly gains', '1.5 Marks']]
    },
    {
      num: 'Q3', marks: '3 Marks',
      text: 'How does the bargain with the child playing on the seashore make the speaker a free man?',
      answer: '<p>The child says, <em>"I hire you with nothing."</em> In this selfless bargain, there is no money, obligation, or hierarchy involved—only mutual love, innocence, and shared joy. Working for "nothing" leaves the speaker completely unfettered and truly free.</p>',
      rubric: [['Child\'s offer of "hiring with nothing"', '1.5 Marks'], ['Innocence, joy, and spiritual freedom without servitude', '1.5 Marks']]
    }
  ],

  ch15: [
    {
      num: 'Q2', marks: '3 Marks',
      text: 'Why does William Blake compare the schoolboy to a caged bird and a drooping plant?',
      answer: '<p>A bird born for the open sky cannot sing joyfully when trapped in a cage. Similarly, a young child cannot flourish when forced to sit under a teacher\'s rigid, authoritarian gaze. Like tender blossoms nipped by early frost, the child\'s spirit droops under joyless confinement.</p>',
      rubric: [['Caged bird metaphor (loss of joyful freedom)', '1.5 Marks'], ['Drooping plant metaphor (suppressed natural growth)', '1.5 Marks']]
    },
    {
      num: 'Q3', marks: '2 Marks',
      text: 'What critique of traditional schooling does Blake present in "The School Boy"?',
      answer: '<p>Blake criticizes the mechanical, joyless school system that treats childhood as a drill rather than a celebration of nature, crushing curiosity, spontaneous wonder, and creative spirit under strict rules.</p>',
      rubric: [['Mechanical, repressive schooling criticized', '1 Mark'], ['Suppression of curiosity and natural joy', '1 Mark']]
    },
    {
      num: 'Q4', marks: '2 Marks',
      text: 'What passionate appeal does the poet make to parents in the concluding stanza?',
      answer: '<p>He warns parents that if they strip children of their joyful youth (the spring of life), there will be no sweet blossoms in summer and no harvest to sustain them in the winter of old age.</p>',
      rubric: [['Warning against robbing childhood spring', '1 Mark'], ['Consequence of bleak winter/adulthood', '1 Mark']]
    }
  ],

  ch16: [
    {
      num: 'Q2', marks: '3 Marks',
      text: 'What objection does the Kangaroo raise when the Duck asks for a ride on his back?',
      answer: '<p>The Kangaroo gently objects that the Duck\'s feet are unpleasantly wet and cold from the pond, and might give him the "roo-matiz" (rheumatism). He asks for time to reflect on this health concern.</p>',
      rubric: [['Duck\'s cold, wet webbed feet', '1.5 Marks'], ['Risk of Kangaroo getting rheumatism', '1.5 Marks']]
    },
    {
      num: 'Q3', marks: '3 Marks',
      text: 'How does the thoughtful Duck solve the problem of her cold feet to ensure the Kangaroo\'s comfort?',
      answer: '<p>The Duck buys four pairs of worsted woollen socks that fit her webbed feet neatly, buys a warm cloak to keep out the cold wind, and smokes a cigar daily, proving that true friendship considers the other person\'s comfort.</p>',
      rubric: [['Worsted woollen socks and warm cloak', '1.5 Marks'], ['Thoughtfulness and consideration in friendship', '1.5 Marks']]
    }
  ],

  ch17: [
    {
      num: 'Q2', marks: '3 Marks',
      text: 'What was the season and journey circumstance when Thomas Hardy set out for Lyonnesse?',
      answer: '<p>Hardy set out in late winter. The road was a hundred miles long, rime (frost) was on the spray, and starlight illuminated his solitary lonesomeness as he rode to an old country parish as an architect to restore a church.</p>',
      rubric: [['Winter season, frost on branches, starlight', '1.5 Marks'], ['Solitary journey to restore a distant church', '1.5 Marks']]
    },
    {
      num: 'Q3', marks: '3 Marks',
      text: 'What transformation was visible in the poet when he returned from Lyonnesse?',
      answer: '<p>When he returned, people noticed "magic in his eyes" and a radiant, inner glow. His countenance possessed a rare, deep illumination that made him look like a man who had experienced a profound, mystical spiritual awakening.</p>',
      rubric: [['"Magic in his eyes" and radiant inner glow', '1.5 Marks'], ['Profound mystical and creative awakening', '1.5 Marks']]
    }
  ],

  ch18: [
    {
      num: 'Q2', marks: '3 Marks',
      text: 'How does the Grasshopper sustain the eternal music of the earth during hot summer afternoons?',
      answer: '<p>When all singing birds faint from the burning sun and hide in cooling trees, the Grasshopper takes the lead, running tirelessly from hedge to hedge in freshly mown meadows. When tired, he rests beneath pleasant weeds, keeping nature\'s song alive.</p>',
      rubric: [['Birds hiding from summer heat', '1.5 Marks'], ['Grasshopper singing tirelessly from hedge to hedge', '1.5 Marks']]
    },
    {
      num: 'Q3', marks: '3 Marks',
      text: 'Who takes over nature\'s song in winter, and how does John Keats link it to the grasshopper\'s summer melody?',
      answer: '<p>In winter, when frost brings dead silence, the <strong>Cricket</strong> sings from behind the warm kitchen stove. To a drowsy person half-asleep by the fireside, the cricket\'s sharp shrill chirp blends smoothly with the memory of the grasshopper singing among grassy hills.</p>',
      rubric: [['Cricket singing from warm stove in frosty winter', '1.5 Marks'], ['Continuous cycle blending summer and winter songs', '1.5 Marks']]
    }
  ],

  // IT SO HAPPENED (ch19 to ch28)
  ch19: [
    {
      num: 'Q3', marks: '2 Marks',
      text: 'What three animals approached the Camel on Monday morning to ask him to work, and how did he reply?',
      answer: '<p>The <strong>Horse</strong> (asked him to trot), the <strong>Dog</strong> (asked him to fetch and carry), and the <strong>Ox</strong> (asked him to plow). To every request, the arrogant Camel merely snorted, <em>"Humph!"</em> and refused to move.</p>',
      rubric: [['Horse, Dog, Ox and their respective duties', '1 Mark'], ['Camel\'s idle response: "Humph!"', '1 Mark']]
    },
    {
      num: 'Q4', marks: '3 Marks',
      text: 'Why were the three domestic animals angry, and what unfair command did the Man give them?',
      answer: '<p>The three animals were angry because the Camel was doing no work. Instead of punishing the Camel, the Man told the Three that since the Camel wouldn\'t work, they would have to work <strong>double-time</strong> to make up for his idleness, which was grossly unfair.</p>',
      rubric: [['Anger at Camel\'s laziness', '1.5 Marks'], ['Man forcing them to work double-time', '1.5 Marks']]
    },
    {
      num: 'Q5', marks: '3 Marks',
      text: 'Who was the Djinn of All Deserts, and how did he punish the Camel for his persistent laziness?',
      answer: '<p>The Djinn was the magical guardian of all deserts. When the Camel insolently said "Humph!" to the Djinn, the Djinn cast a spell that made the Camel\'s sleek back puff up and swell into a huge, ugly, quivering lump called a <strong>humph (hump)</strong>.</p>',
      rubric: [['Djinn as desert master', '1.5 Marks'], ['Transforming "humph" into physical hump on his back', '1.5 Marks']]
    },
    {
      num: 'Q6', marks: '2 Marks',
      text: 'What practical purpose does the hump serve, and what moral debt does the camel still owe?',
      answer: '<p>The hump stores fat, allowing the camel to work in deserts for three full days without food. However, Kipling humorously concludes that the camel has never caught up with the three days he missed at the beginning of the world, nor learned good manners.</p>',
      rubric: [['Storing energy for 3 days without food', '1 Mark'], ['Moral debt of missed work and bad manners', '1 Mark']]
    }
  ],

  ch20: [
    {
      num: 'Q3', marks: '3 Marks',
      text: 'Why had Velu run away from his native village to Chennai?',
      answer: '<p>Velu ran away because his father was a violent drunkard who beat him and his sisters mercilessly every day and snatched away every penny they earned by weeding fields to spend on drinking.</p>',
      rubric: [['Cruel, alcoholic father beating children', '1.5 Marks'], ['Snatching earnings to spend on liquor', '1.5 Marks']]
    },
    {
      num: 'Q4', marks: '3 Marks',
      text: 'Describe Velu\'s physical condition when he reached Chennai Central railway station.',
      answer: '<p>Velu was dizzy, starving, and terrified. He had eaten nothing for two days except a piece of jaggery and peanuts. His bare feet burned on the hot sun-baked station floor, and the roaring crowds and blaring loudspeakers overwhelmed him.</p>',
      rubric: [['Starvation and dizziness', '1.5 Marks'], ['Burning bare feet on hot floor and sensory overload', '1.5 Marks']]
    },
    {
      num: 'Q5', marks: '3 Marks',
      text: 'From where did Jaya get food for Velu, and what was Velu\'s initial reaction to it?',
      answer: '<p>Jaya led Velu behind a marriage hall where food leftovers had been dumped in an overflowing, fly-infested garbage bin. She picked up a squashed banana and a vada. Velu was horrified and refused to eat garbage, but hunger compelled him to swallow it.</p>',
      rubric: [['Garbage heap behind marriage hall', '1.5 Marks'], ['Velu\'s initial disgust overcome by desperate hunger', '1.5 Marks']]
    },
    {
      num: 'Q6', marks: '2 Marks',
      text: 'Describe the slum huts where Jaya lived in Chennai.',
      answer: '<p>The huts were bizarre shacks haphazardly constructed from discarded junk—metal sheets, broken bricks, tyres, wood, and plastic sheets. They leaned precariously as if they might collapse at any gust of wind.</p>',
      rubric: [['Constructed from recycled scrap and junk', '1 Mark'], ['Fragile, unstable living conditions', '1 Mark']]
    },
    {
      num: 'Q7', marks: '3 Marks',
      text: 'What job did Jaya offer Velu, and what was his attitude toward it?',
      answer: '<p>Jaya gave Velu a sack and a pair of old shoes, introducing him to ragpicking—collecting plastic cups, paper, and bottles to sell to scrap dealers. Velu accepted it as a temporary survival measure until he could find a better job.</p>',
      rubric: [['Ragpicking scrap plastic and bottles', '1.5 Marks'], ['Temporary survival mindset while seeking better work', '1.5 Marks']]
    }
  ],

  ch21: [
    {
      num: 'Q3', marks: '3 Marks',
      text: 'What harsh measures did the Selfish Giant take to prevent children from playing in his garden?',
      answer: '<p>Upon returning from his friend the Cornish Ogre after seven years, the Giant shouted furiously at the children, chased them away, built a high perimeter wall around the garden, and put up a notice board: <strong>"TRESPASSERS WILL BE PROSECUTED."</strong></p>',
      rubric: [['Chasing children away furiously', '1.5 Marks'], ['Building high wall and threatening notice board', '1.5 Marks']]
    },
    {
      num: 'Q4', marks: '3 Marks',
      text: 'Which four agents of winter inhabited the Giant\'s garden when spring refused to visit?',
      answer: '<p>The <strong>Snow</strong> covered the grass with a white cloak; the <strong>Frost</strong> painted all trees silver; the <strong>North Wind</strong> roared down the chimney all day; and the <strong>Hail</strong> rattled on the castle roof for hours, breaking slates.</p>',
      rubric: [['Snow, Frost, North Wind, and Hail', '1.5 Marks'], ['Descriptions of their damaging stay', '1.5 Marks']]
    },
    {
      num: 'Q5', marks: '3 Marks',
      text: 'What heart-melting sight caused the Giant\'s heart to soften and reform?',
      answer: '<p>Through a hole in the wall, children had crept back in, sitting in the branches, causing trees to blossom. But in one corner, winter still lingered because a tiny boy could not reach the branches and was weeping. The Giant realized his selfishness had brought winter, and he gently helped the boy up.</p>',
      rubric: [['Children bringing spring back through hole in wall', '1.5 Marks'], ['Tiny weeping boy softening the Giant\'s heart', '1.5 Marks']]
    },
    {
      num: 'Q6', marks: '2 Marks',
      text: 'Who was the little boy who returned years later, and what did the wounds on his hands represent?',
      answer: '<p>The boy was the Christ Child. The prints of two nails on his hands and feet represented the <strong>stigmata of the Crucifixion</strong> ("the wounds of Love"). He invited the old Giant to come with him to his garden—Paradise (Heaven).</p>',
      rubric: [['Christ Child identification', '1 Mark'], ['Wounds of love and entry into Paradise', '1 Mark']]
    }
  ],

  ch22: [
    {
      num: 'Q3', marks: '3 Marks',
      text: 'What nightmares did Hafeez Contractor suffer from as a young school student?',
      answer: '<p>Hafeez had recurring terrifying nightmares about appearing for a mathematics examination where he did not know a single word. Even in adulthood, these math phobia dreams haunted him until his creative mind fully took over.</p>',
      rubric: [['Nightmares about mathematics examinations', '1.5 Marks'], ['Fear of knowing nothing on test papers', '1.5 Marks']]
    },
    {
      num: 'Q4', marks: '3 Marks',
      text: 'How did the school principal\'s 5-minute speech in Class 11 transform Hafeez Contractor\'s life?',
      answer: '<p>The principal reminded Hafeez that his widowed mother had struggled hard to pay his school fees, and he had no father to support him. He warned Hafeez that it was time to grow up and study seriously. Moved to tears, Hafeez gave up pranks and sports and studied earnestly, scoring 50% in SSC.</p>',
      rubric: [['Principal reminding of mother\'s sacrifices', '1.5 Marks'], ['Giving up sports to study diligently for SSC', '1.5 Marks']]
    },
    {
      num: 'Q5', marks: '3 Marks',
      text: 'How did Hafeez Contractor discover his innate genius for architecture?',
      answer: '<p>In his cousin\'s husband\'s architectural office, he saw an advanced draftsman drawing a window detail incorrectly. Hafeez pointed out that the window would never open. Astonished, the architect asked him to design a house, which Hafeez drew instantly with flawless proportion, revealing his natural architectural gift.</p>',
      rubric: [['Correcting professional draftsman\'s window detail', '1.5 Marks'], ['Instant intuitive architectural drawing', '1.5 Marks']]
    },
    {
      num: 'Q6', marks: '2 Marks',
      text: 'What advice does Hafeez Contractor give regarding unconventional students in schools?',
      answer: '<p>He emphasizes that traditional academic tests do not measure creative intelligence. Children who struggle with rote memorization or math often possess brilliant artistic, spatial, or tactile minds, which schools must nurture rather than penalize.</p>',
      rubric: [['Academic tests failing creative minds', '1 Mark'], ['Nurturing spatial and unconventional talents', '1 Mark']]
    }
  ],

  ch23: [
    {
      num: 'Q3', marks: '3 Marks',
      text: 'Why did the King of Siam give his daughters the names of the months of the year?',
      answer: '<p>The King had so many daughters that he found it confusing to remember their names. To simplify matters, the Queen suggested naming them after the months of the year, with the youngest named September.</p>',
      rubric: [['Too many daughters causing confusion', '1.5 Marks'], ['Naming them after months from January to September', '1.5 Marks']]
    },
    {
      num: 'Q4', marks: '3 Marks',
      text: 'How was Princess September\'s little singing bird superior to the sisters\' green parrots?',
      answer: '<p>The eight parrots could only repeat two robotic phrases: "God save the King" and "Pretty Polly" in seven languages. The little wild bird sang unique, melodious, original songs inspired by the sun, green fields, and flowing lakes.</p>',
      rubric: [['Parrots reciting mechanical slogans', '1.5 Marks'], ['Wild bird singing original nature songs', '1.5 Marks']]
    },
    {
      num: 'Q5', marks: '3 Marks',
      text: 'Why did the eight sisters advise Princess September to cage her bird, and what was their secret motive?',
      answer: '<p>Jealous that September\'s bird sang beautifully while their parrots were boring, the sisters pretended to care for the bird\'s safety from cats. Their true motive was malicious envy—they wanted to silence the bird and make September unhappy.</p>',
      rubric: [['Pretending concern about cats', '1.5 Marks'], ['Malicious jealousy driving their advice', '1.5 Marks']]
    },
    {
      num: 'Q6', marks: '3 Marks',
      text: 'What happened to the bird when locked in the golden cage, and why did September release him?',
      answer: '<p>Inside the cage, the bird stopped singing, refused to eat, and drooped near death, saying he needed open skies and water to sing. Loving the bird more than her own selfish pleasure, September opened the cage and granted him freedom.</p>',
      rubric: [['Bird drooping and near death in cage', '1.5 Marks'], ['September\'s unselfish love setting him free', '1.5 Marks']]
    },
    {
      num: 'Q7', marks: '2 Marks',
      text: 'What contrasting fates befell Princess September and her eight sisters when they grew up?',
      answer: '<p>September slept with her windows open, growing beautiful and graceful, and married the noble King of Cambodia. The eight sisters, who slept with closed windows, grew ugly and disagreeable, and were married off to the King\'s councillors with a pound of tea and a Siamese cat.</p>',
      rubric: [['September\'s beauty and royal marriage', '1 Mark'], ['Sisters\' bitterness and petty marriages', '1 Mark']]
    }
  ],

  ch24: [
    {
      num: 'Q2', marks: '3 Marks',
      text: 'Describe the forest pool that Ranji discovered during the blazing summer in the Rajpur hills.',
      answer: '<p>Ranji found a translucent pool in a shady forest ravine. The water was crystalline and clear, flowing over smooth pebbles from a rocky spring. Unlike the muddy ponds of his native Rajputana plains, this water was deliciously cool and inviting.</p>',
      rubric: [['Translucent, crystal clear water', '1.5 Marks'], ['Contrast with muddy plains pools', '1.5 Marks']]
    },
    {
      num: 'Q3', marks: '3 Marks',
      text: 'Who was Suraj, and why did he pick a fight with Ranji at the pool?',
      answer: '<p>Suraj was a muscular, older Punjabi boy who considered himself the "Warrior" and master of the forest pool. Finding Ranji swimming there, he arrogantly claimed sole ownership and demanded that Ranji leave immediately, instigating a fight.</p>',
      rubric: [['Suraj\'s arrogant claim as "Warrior"', '1.5 Marks'], ['Demanding sole ownership of the public pool', '1.5 Marks']]
    },
    {
      num: 'Q4', marks: '3 Marks',
      text: 'Describe the violent combat that erupted between Ranji and Suraj on the first day.',
      answer: '<p>When Ranji refused to leave, declaring himself a "Fighter", Suraj slapped him violently. A fierce brawl ensued: they grappled in the shallows, threw punches, clawed, kicked, and rolled in the mud until both were bruised, bleeding, and panting with exhaustion.</p>',
      rubric: [['"Warrior" vs "Fighter" verbal duel', '1.5 Marks'], ['Exhausting brawl leaving both bruised and bloody', '1.5 Marks']]
    },
    {
      num: 'Q5', marks: '3 Marks',
      text: 'How did Ranji\'s swimming and diving skills astonish Suraj on the second day?',
      answer: '<p>Suraj mocked Ranji, daring him to dive. Ranji took a clean, graceful dive, cutting through the water like a fish without making a splash, and swam underwater to emerge behind Suraj. Suraj was spellbound by Ranji\'s superior technique.</p>',
      rubric: [['Graceful dive without splashing', '1.5 Marks'], ['Underwater swimming fascinating Suraj', '1.5 Marks']]
    },
    {
      num: 'Q6', marks: '2 Marks',
      text: 'What mutually beneficial pact did Ranji and Suraj forge at the end of the story?',
      answer: '<p>They made a friendly bargain: Ranji agreed to teach Suraj how to dive and swim underwater, while Suraj promised to train Ranji in physical wrestling to make him a muscular strongman (pahelwan), sealing their lifelong friendship.</p>',
      rubric: [['Ranji teaching diving and swimming', '1 Mark'], ['Suraj teaching wrestling to make Ranji strong', '1 Mark']]
    }
  ],

  ch25: [
    {
      num: 'Q3', marks: '3 Marks',
      text: 'Why had Framton Nuttel arrived in the rural countryside, and why did his sister give him letters of introduction?',
      answer: '<p>Framton suffered from a severe nervous disorder and had come to the quiet countryside for a "nerve cure". His sister gave him letters of introduction to local acquaintances so he would not isolate himself in gloomy solitude.</p>',
      rubric: [['Seeking nerve cure for nervous breakdown', '1.5 Marks'], ['Letters of introduction to prevent lonely brooding', '1.5 Marks']]
    },
    {
      num: 'Q4', marks: '3 Marks',
      text: 'How did 15-year-old Vera cleverly fabricate the tragedy of the open French window?',
      answer: '<p>Vera claimed that exactly three years ago, Mrs Sappleton\'s husband and two brothers went out snipe-shooting through that window and were engulfed in a treacherous bog, never to return. She claimed her poor aunt kept the window open every evening expecting their ghosts.</p>',
      rubric: [['Story of husband and brothers swallowed in bog', '1.5 Marks'], ['Aunt keeping window open in tragic delusion', '1.5 Marks']]
    },
    {
      num: 'Q5', marks: '3 Marks',
      text: 'What caused Framton Nuttel to bolt in panic from the house without saying goodbye?',
      answer: '<p>In the twilight, three figures carrying guns walked toward the window, accompanied by a little brown spaniel. Believing he was seeing ghosts who had risen from the bog as Vera had described, Framton grabbed his walking stick and fled in wild terror.</p>',
      rubric: [['Men and spaniel returning through open window', '1.5 Marks'], ['Framton believing they were ghosts', '1.5 Marks']]
    },
    {
      num: 'Q6', marks: '2 Marks',
      text: 'What story did Vera invent to explain Framton Nuttel\'s sudden and frantic departure?',
      answer: '<p>She calmly claimed that Framton had an irrational phobia of dogs because he had once been hunted into a graveyard on the banks of the Ganges by a pack of pariah dogs and forced to spend the night in a newly dug grave.</p>',
      rubric: [['Fabricating Ganges graveyard dog phobia story', '1 Mark'], ['Showcasing Vera\'s talent for "romance at short notice"', '1 Mark']]
    }
  ],

  ch26: [
    {
      num: 'Q2', marks: '3 Marks',
      text: 'Describe the inner debate between the boy\'s moral conscience and the temptation of the jalebis.',
      answer: '<p>The coins in his pocket clinked and urged him to spend them on fresh, syrupy jalebis. The boy resisted, reasoning that the money was meant for school fees and that eating bazaar food was sinful. But the sight of steaming jalebis overwhelmed his self-control.</p>',
      rubric: [['Coins "talking" and tempting him', '1.5 Marks'], ['Moral resistance overcome by sweet temptation', '1.5 Marks']]
    },
    {
      num: 'Q3', marks: '3 Marks',
      text: 'What did the boy do with the remaining jalebis after eating until he could barely breathe?',
      answer: '<p>Having gorged himself until jalebis almost came out of his nose, he realized he could not finish the large mound of sweets. Generously, he gathered the poor neighborhood children and distributed hand-picked jalebis until the paper bag was empty.</p>',
      rubric: [['Gorging himself to bursting point', '1.5 Marks'], ['Distributing remaining sweets to neighborhood children', '1.5 Marks']]
    },
    {
      num: 'Q4', marks: '3 Marks',
      text: 'What unexpected crisis struck the boy at school the following day regarding his fees?',
      answer: '<p>The boy had expected to pay his four rupees fees using the government scholarship money due that day. But at school, Master Ghulam Mohammed announced that the scholarship would be paid the next month. Terrified of punishment, the boy fled school.</p>',
      rubric: [['Scholarship postponed to next month', '1.5 Marks'], ['Panic and fleeing school to avoid caning', '1.5 Marks']]
    },
    {
      num: 'Q5', marks: '3 Marks',
      text: 'Describe the boy\'s bargains and prayers with Allah near the railway tracks at Kambalpur.',
      answer: '<p>Sitting under a tree, the boy recited verses from the Quran and pleaded with Allah to put four rupees under a stone. He bargained, promising never to eat bazaar sweets again and to become a pious boy. But lifting the rock revealed only a hairy worm, leaving him weeping in disappointment.</p>',
      rubric: [['Reciting Quranic prayers and bargaining for 4 rupees', '1.5 Marks'], ['Finding only a worm under the rock', '1.5 Marks']]
    },
    {
      num: 'Q6', marks: '2 Marks',
      text: 'What mature understanding about prayer and divine wisdom did the narrator reach as an adult?',
      answer: '<p>He realized that if God granted everything humans asked for without effort, humans would never learn responsibility, work, or wisdom, and would live like birds merely waiting for food to drop from the sky.</p>',
      rubric: [['God requires human effort and accountability', '1 Mark'], ['Prayer is not a magical shortcut to escape mistakes', '1 Mark']]
    }
  ],

  ch27: [
    {
      num: 'Q3', marks: '3 Marks',
      text: 'Who was Manoj Dutta (Duttada), and what was his lifelong secret ambition?',
      answer: '<p>Duttada was an amateur astronomer living in Kolkata. His lifelong ambition was to discover a new comet with his small 8-inch telescope, which he affectionately nicknamed <strong>Dibya Chakshu</strong> (Divine Eye), despite his wife\'s disapproval.</p>',
      rubric: [['Amateur Kolkata astronomer with 8-inch telescope', '1.5 Marks'], ['Lifelong dream to discover an unknown comet', '1.5 Marks']]
    },
    {
      num: 'Q4', marks: '3 Marks',
      text: 'How was Comet Dutta discovered and authenticated by the international astronomical community?',
      answer: '<p>On a chilly winter night on his rooftop terrace, Duttada spotted a faint, fuzzy smudge through Dibya Chakshu. After tracking its trajectory and calculating coordinates, he telegraphed the Indian Institute of Astrophysics, which verified it and named it <strong>Comet Dutta</strong>.</p>',
      rubric: [['Rooftop observation of fuzzy smudge', '1.5 Marks'], ['Verification by IIA Bangalore confirming Comet Dutta', '1.5 Marks']]
    },
    {
      num: 'Q5', marks: '3 Marks',
      text: 'Who was Dr James Forsyth, and what catastrophic conclusion did his scientific paper present?',
      answer: '<p>Dr James Forsyth was a brilliant young British astronomer at Kings College, Cambridge. His orbital calculations proved that Comet Dutta was on a direct collision course with Earth, with zero margin of error, threatening total planetary devastation within ten months.</p>',
      rubric: [['Young Cambridge astronomer calculating orbit', '1.5 Marks'], ['Predicting unavoidable direct collision with Earth', '1.5 Marks']]
    },
    {
      num: 'Q6', marks: '2 Marks',
      text: 'Why did Sir John Macpherson urge total secrecy regarding Dr Forsyth\'s alarming findings?',
      answer: '<p>Sir John, Defence Science Advisor to the British Government, knew that publicizing an inevitable cosmic catastrophe would trigger global panic, economic collapse, and mass social breakdown before scientists could attempt a defense.</p>',
      rubric: [['Preventing worldwide panic and social breakdown', '1 Mark'], ['Buying time for scientists to devise a counter-plan', '1 Mark']]
    }
  ],

  ch28: [
    {
      num: 'Q3', marks: '3 Marks',
      text: 'What two potential counter-measures were evaluated at the secret international conference in London?',
      answer: '<p>The conference evaluated two strategies: (1) <strong>Defensive measures:</strong> Building underground bunkers to shelter populations (rejected as futile against global impact), and (2) <strong>Offensive measures:</strong> Launching a nuclear spacecraft to deflect the comet from its path.</p>',
      rubric: [['Defensive underground shelters (futile)', '1.5 Marks'], ['Offensive nuclear interception (Project Light Brigade)', '1.5 Marks']]
    },
    {
      num: 'Q4', marks: '3 Marks',
      text: 'Describe "Project Light Brigade" and how it planned to save Earth from Comet Dutta.',
      answer: '<p>Project Light Brigade involved loading a massive thermonuclear payload onto a guided spacecraft. It would intercept Comet Dutta in deep space and detonate at a precise moment, using the explosive blast to deflect the comet into a safe, altered orbit away from Earth.</p>',
      rubric: [['Thermonuclear payload on spacecraft', '1.5 Marks'], ['Deflecting comet by timed nuclear detonation', '1.5 Marks']]
    },
    {
      num: 'Q5', marks: '3 Marks',
      text: 'How did Sir John Macpherson secretly convey the success of Project Light Brigade to Duttada?',
      answer: '<p>Sir John sent Duttada a Christmas gift of British warm clothes with a coded note: <em>"I am buying warm clothes for my friends; you may safely do so too."</em> This signaled that Earth had escaped doom and human life would continue normally.</p>',
      rubric: [['Coded Christmas message about buying warm clothes', '1.5 Marks'], ['Signaling mission success without breaking secrecy', '1.5 Marks']]
    },
    {
      num: 'Q6', marks: '2 Marks',
      text: 'What stark contrast between rational science and religious superstition does the story highlight at the end?',
      answer: '<p>Duttada\'s family performed an elaborate <em>Shanti Yajna</em>, believing rituals pacified the evil comet, unaware that international nuclear scientists had saved the planet. The story highlights the deep gulf between scientific rationality and superstitious ritualism.</p>',
      rubric: [['Family attributing salvation to Shanti Yajna', '1 Mark'], ['Reality of scientific intervention saving humanity', '1 Mark']]
    }
  ]
};

function formatEnglishCard(chId, q, idx) {
  const cardId = `e_${chId}_q${idx}`;
  const rubricHtml = q.rubric.map(r => `              <div class="marking-row"><span class="marking-key">${r[0]}</span><span class="marking-marks">${r[1]}</span></div>`).join('\n');

  return `      <div class="q-card" id="${cardId}">
        <div class="q-head" onclick="toggleQ('${cardId}')">
          <span class="q-num">${q.num}</span>
          <div class="q-text">${q.text}</div>
          <span class="q-marks">${q.marks}</span>
          <div class="q-toggle"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg></div>
        </div>
        <div class="q-answer">
          <div class="answer-box">
            <div class="answer-label">&#128161; Complete Answer (CBSE Marking Scheme 2026-27):</div>
            <div class="answer-text">
              ${q.answer}
            </div>
            <div class="marking-scheme">
              <div class="marking-title">&#128203; CBSE Marking Scheme Breakdown:</div>
${rubricHtml}
            </div>
          </div>
        </div>
      </div>`;
}

console.log('Injecting 114 missing questions into Class 8 English...');

let html = fs.readFileSync(FILE, 'utf8');

for (let i = 1; i <= 28; i++) {
  const chId = `ch${i}`;
  const additions = ENGLISH_ADDITIONS[chId] || [];
  if (additions.length === 0) continue;

  const cardsHtml = additions.map((q, idx) => formatEnglishCard(chId, q, idx + 1)).join('\n\n');

  // Match section
  const secRegex = new RegExp(`(<section[^>]*id="${chId}"[^>]*>[\\s\\S]*?)(<div class="cbq-section">|<div class="ch-nav-btns">|<\\/section>)`);
  const match = html.match(secRegex);
  if (match) {
    const beforeInsert = match[1];
    const boundary = match[2];
    html = html.replace(secRegex, `${beforeInsert}${cardsHtml}\n\n      ${boundary}`);
    console.log(`[${chId}] Successfully injected ${additions.length} questions.`);
  } else {
    console.error(`Failed to find section for ${chId}`);
  }
}

fs.writeFileSync(FILE, html, 'utf8');
console.log('Class 8 English update complete!');
