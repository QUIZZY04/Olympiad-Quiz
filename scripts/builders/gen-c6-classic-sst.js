// Generator for Full Class 6 Social Science Classic (24 Chapters: History 10 + Geography 6 + Civics 8) Data
const fs = require('fs');
const path = require('path');

const sstClassicChapters = [
  // --- HISTORY: OUR PASTS - I (10 Chapters) ---
  {
    num: 1,
    id: "ch_csst_h1",
    subject: "History",
    book: "Our Pasts - I",
    title: "What, Where, How and When?",
    desc: "Finding out about the past: River valleys (Narmada, Indus, Ganga), Sulaiman and Kirthar hills, Garo hills, Inscriptions, Manuscripts on palm leaf and birch bark, Archaeology, BCE and CE notation.",
    concepts: [
      "Early settlement along river valleys: Narmada (hunter-gatherers), Indus & tributaries (earliest cities), Ganga & Son (Magadha kingdom).",
      "Agriculture origins: Sulaiman and Kirthar hills (wheat and barley ~8000 years ago), Garo hills, Vindhyas (rice).",
      "Sources of History: Manuscripts (handwritten on palm leaf/birch bark) and Inscriptions (engraved on stone or metal).",
      "Archaeology: Study of material remains (tools, weapons, pots, coins, bones).",
      "Dating: BCE (Before Common Era) and CE (Common Era)."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="480" height="60" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="270" y="42" font-family="sans-serif" font-size="12" font-weight="700" fill="#78350f" text-anchor="middle">Historical Sources: Manuscripts vs Inscriptions</text><text x="140" y="65" font-family="sans-serif" font-size="11" fill="#b45309" text-anchor="middle">Manuscripts (Palm leaf/Birch bark)</text><text x="400" y="65" font-family="sans-serif" font-size="11" fill="#b45309" text-anchor="middle">Inscriptions (Engraved on stone/metal)</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Match the following: (a) Narmada Valley (b) Magadha (c) Garo hills (d) Indus and its tributaries (e) Ganga valley.",
        marks: 3,
        ans: "<strong>Historical Geographies:</strong><br>• (a) Narmada Valley: <strong>Hunting and gathering</strong>.<br>• (b) Magadha: <strong>The first big kingdom</strong>.<br>• (c) Garo hills: <strong>Early agriculture</strong>.<br>• (d) Indus and its tributaries: <strong>The first cities (~4700 years ago)</strong>.<br>• (e) Ganga valley: <strong>Cities about 2500 years ago</strong>.",
        rubric: [{ key: "Correct matches for (a), (b), (c)", marks: "1.5 Marks" }, { key: "Correct matches for (d) and (e)", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "List one major difference between manuscripts and inscriptions. Why did ordinary people not leave written records?",
        marks: 3,
        ans: "<strong>Primary Historical Sources:</strong><br>• <strong>Manuscripts vs Inscriptions:</strong> Manuscripts were handwritten on delicate, perishable organic materials like palm leaves or the bark of birch trees (Bhurja). Inscriptions were chiselled onto relatively indestructible, hard surfaces such as rock faces, stone pillars, or metal plates.<br>• <strong>Absence of Ordinary Records:</strong> Ordinary people (hunters, farmers, herders) did not keep records because most were illiterate, had no access to scribes, and were preoccupied with daily subsistence, while kings commissioned official panegyrics to celebrate their military victories and decrees.",
        rubric: [{ key: "Contrast of writing material durability", marks: "1.5 Marks" }, { key: "Sociological explanation for ordinary citizens", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Archaeological Epigraphy: Rosetta Stone Decipherment",
      question: "Scholars decipher ancient Egyptian hieroglyphics using the Rosetta Stone inscribed in three scripts. (a) What is decipherment in epigraphy? (b) Why are bilingual inscriptions indispensable for unlocking forgotten scripts?",
      answer: "<strong>(a) Decipherment:</strong> The scholarly process of identifying phonetic values and grammatical meanings of unknown ancient glyphs by systematic comparison with known languages.<br><strong>(b) Indispensability:</strong> A bilingual text provides a linguistic key: by matching royal names (cartouches like Ptolemy and Cleopatra) across Greek and Egyptian scripts, researchers can cross-correlate sounds to symbols."
    }
  },
  {
    num: 2,
    id: "ch_csst_h2",
    subject: "History",
    book: "Our Pasts - I",
    title: "From Hunting-Gathering to Growing Food",
    desc: "Palaeolithic, Mesolithic (Microliths), and Neolithic Ages. Domestication of plants and animals, Pit-houses of Burzahom, Mehrgarh settlements, and rock paintings.",
    concepts: [
      "Timeline: Palaeolithic (2 million to 12,000 years ago), Mesolithic (12,000 to 10,000 years ago with microliths), Neolithic (from 10,000 years ago).",
      "Environmental Shift: Warming climate ~12,000 years ago spurred grassland growth, herding, and grain-bearing grasses.",
      "Domestication: Selection of docile animals (sheep, goat, cattle) and non-shattering plants (wheat, barley).",
      "Sites: Burzahom (Kashmir: pit-houses dug into ground), Mehrgarh (Bolan pass: mud-brick houses, burials with goats), Daojali Hading (Assam: jadeite stone)."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="480" height="60" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/><text x="270" y="42" font-family="sans-serif" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">Prehistoric Human Evolution Timeline</text><text x="100" y="65" font-family="sans-serif" font-size="11" fill="#1d4ed8">Palaeolithic (Old Stone)</text><text x="270" y="65" font-family="sans-serif" font-size="11" fill="#1d4ed8">Mesolithic (Microliths)</text><text x="440" y="65" font-family="sans-serif" font-size="11" fill="#1d4ed8">Neolithic (Settled Farm)</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Why did hunter-gatherers travel from place to place? In what ways are these similar to/different from the reasons for which we travel today?",
        marks: 3,
        ans: "<strong>Nomadic Mobility:</strong><br>1. If they stayed in one place, they would exhaust all local plant and animal food resources.<br>2. Animals moved in search of prey/grass, so hunters followed their seasonal migrations.<br>3. Plants bore fruit in different seasons, compelling them to forage seasonally.<br>4. Lakes and streams dried up during summer, forcing travel to perennial rivers.<br>• <strong>Comparison Today:</strong> Today we travel for education, work, business, medical treatment, or leisure, whereas prehistoric nomads travelled solely for survival.",
        rubric: [{ key: "Four reasons for hunter-gatherer mobility", marks: "2 Marks" }, { key: "Comparison with modern purposeful travel", marks: "1 Mark" }]
      },
      {
        num: 2,
        title: "Describe the site of Mehrgarh. What evidence of early farming and burial practices was discovered there?",
        marks: 3,
        ans: "<strong>Mehrgarh Excavations:</strong><br>• Located in a fertile plain near the Bolan Pass (crucial gateway to Iran).<br>• One of the earliest villages where people learned to grow barley and wheat, and rear sheep and goats ~8000 years ago.<br>• Houses were square or rectangular with four or more compartments used for storage.<br>• <strong>Burial Customs:</strong> Graves where dead were buried with personal belongings and goats, reflecting a belief in an afterlife where the deceased would require food.",
        rubric: [{ key: "Geographical location and farming evidence", marks: "1.5 Marks" }, { key: "Burials with goats indicating belief in afterlife", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Neolithic Agrarian Transition: Food Surplus & Sedentary Culture",
      question: "The transition from foraging to cultivation altered human civilization. (a) Why did farming necessitate sedentary permanent housing? (b) How did surplus grain lead to the invention of pottery and weaving?",
      answer: "<strong>(a) Sedentary Housing:</strong> Crops required constant care over several months—sowing, watering, weeding, protecting from birds, and harvesting—making mobile nomadism impossible.<br><strong>(b) Storage & Crafts:</strong> Surplus harvest required large storage vessels, stimulating the invention of clay pots and woven baskets, which gradually evolved into specialized craft trades."
    }
  },
  {
    num: 3,
    id: "ch_csst_h3",
    subject: "History",
    book: "Our Pasts - I",
    title: "In the Earliest Cities",
    desc: "The Indus Valley Civilisation (Harappa, Mohenjodaro, Kalibangan, Lothal). City planning (Citadel and Lower Town), The Great Bath, Drainage systems, Craft production, Seals, and Mystery of decline.",
    concepts: [
      "Architecture: Divided into two parts: Citadel (higher, smaller, western) and Lower Town (larger, eastern, residential). Baked bricks laid in interlocking pattern.",
      "The Great Bath at Mohenjodaro: Lined with bricks, coated with plaster, sealed with natural tar/bitumen.",
      "Sanitation: Covered drains laid out in straight lines with gentle slopes and inspection holes.",
      "Lothal: Dockyard on Gulf of Khambhat with bead-making workshops and seal warehouses.",
      "Decline (~3900 years ago): Drying up of rivers, deforestation, floods, or collapse of central administrative control."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="480" height="60" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="270" y="42" font-family="sans-serif" font-size="12" font-weight="700" fill="#78350f" text-anchor="middle">Harappan Urban Engineering Matrix</text><text x="140" y="65" font-family="sans-serif" font-size="11" fill="#b45309" text-anchor="middle">Citadel (Fortified Upper Town)</text><text x="400" y="65" font-family="sans-serif" font-size="11" fill="#b45309" text-anchor="middle">Grid Drainage & Great Bath</text></svg>`,
    questions: [
      {
        num: 1,
        title: "How was the Great Bath at Mohenjodaro constructed? What was its likely purpose?",
        marks: 3,
        ans: "<strong>Great Bath Engineering:</strong><br>• Built in the citadel area, lined with finely fitted baked bricks, coated with lime plaster, and made completely watertight with a thick layer of natural tar (bitumen).<br>• Steps led down into the water tank from two sides, surrounded by rooms for changing clothes.<br>• Water was brought in from a well and drained out after use.<br>• <strong>Purpose:</strong> Scholars believe it was used for special ritual purification baths by royalty and priests on sacred occasions.",
        rubric: [{ key: "Construction: Bricks, plaster, natural tar waterproofing", marks: "1.5 Marks" }, { key: "Religious ritual significance", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "Describe the drainage system of Harappan cities. What does it reveal about their civic administration?",
        marks: 3,
        ans: "<strong>Harappan Sanitation System:</strong><br>• Drains in houses connected through walls to street drains, covered with stone slabs or bricks.<br>• Street drains were laid in straight lines with a gentle slope so water flowed easily.<br>• Inspection holes were provided at regular intervals for cleaning.<br>• <strong>Administrative Revelation:</strong> This unparalleled level of hygiene, town planning, and public health infrastructure proves the presence of an extraordinarily organized, centralized civic municipal administration 4,500 years ago.",
        rubric: [{ key: "Straight covered drains with inspection holes", marks: "1.5 Marks" }, { key: "Evidence of sophisticated civic municipal authority", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Maritime Archaeology: Lothal Dockyard Trade Networks",
      question: "Excavations at Lothal revealed a massive tidal dockyard with Persian Gulf seals. (a) How did tidal gates function in the Lothal dockyard? (b) What raw materials did Harappan merchants export and import?",
      answer: "<strong>(a) Tidal Dockyard:</strong> A brick basin connected to the Sabarmati river where ships floated in during high tide and rested while sluice gates trapped water during low tide for safe loading and unloading.<br><strong>(b) Trade Goods:</strong> Exported fine cotton textiles, carnelian beads, copper tools, and timber; imported gold (Karnataka), tin (Afghanistan), and lapis lazuli."
    }
  },
  {
    num: 4,
    id: "ch_csst_h4",
    subject: "History",
    book: "Our Pasts - I",
    title: "What Books and Burials Tell Us",
    desc: "The Vedas (Rigveda, Samaveda, Yajurveda, Atharvaveda). Rigvedic society: Rajas, Jana, Vish, Dasyus. Megaliths and Iron Age burial practices at Inamgaon and Brahmagiri.",
    concepts: [
      "Four Vedas: Rigveda is oldest (composed ~3500 years ago in Vedic Sanskrit). Hymns called 'suktas' (well-said).",
      "Vedic Gods: Agni (fire), Indra (warrior god), Soma (sacred plant).",
      "Society: Rajas had no standing armies or palaces; decisions made in assemblies (Sabha and Samiti).",
      "Megaliths: Large stone boulders erected as grave markers (~3000 years ago across Deccan, South India, and North-East).",
      "Skeletal Studies: Sex determined by pelvic bone width (wider in females) rather than ornaments."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="480" height="60" rx="8" fill="#fdf4ff" stroke="#c026d3" stroke-width="2"/><text x="270" y="42" font-family="sans-serif" font-size="12" font-weight="700" fill="#701a75" text-anchor="middle">Vedic Wisdom & Megalithic Burials</text><text x="140" y="65" font-family="sans-serif" font-size="11" fill="#a21caf" text-anchor="middle">Rigveda Hymns (Suktas)</text><text x="400" y="65" font-family="sans-serif" font-size="11" fill="#a21caf" text-anchor="middle">Megalithic Cists & Port-holes</text></svg>`,
    questions: [
      {
        num: 1,
        title: "In what ways are the books we read today different from the Rigveda? How did the Rigveda describe horses and chariots?",
        marks: 3,
        ans: "<strong>Textual & Cultural Comparison:</strong><br>• Modern books are written and printed on paper. The Rigveda was recited, memorized, and passed down orally from generation to generation for centuries before being written down and printed only about 200 years ago.<br>• Horses were yoked to light wooden war-chariots used in battles fought to capture cattle, pasture land, water sources, and people, demonstrating the high martial and pastoral value of horses in Rigvedic society.",
        rubric: [{ key: "Oral recitation vs printed book contrast", marks: "1.5 Marks" }, { key: "Chariot warfare and pastoral significance of horses", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "What are megaliths? How do grave goods in megalithic burials reveal social differences?",
        marks: 3,
        ans: "<strong>Megalithic Archaeology:</strong><br>• Megaliths (literally 'big stones') are stone boulders arranged carefully on the surface to mark underground burial chambers (cists) or cairns.<br>• <strong>Social Differentiation:</strong> At Brahmagiri, one skeleton was buried with 33 gold beads, 2 stone beads, 4 copper bangles, and a conch shell, whereas other skeletons in nearby graves had only a few plain earthenware pots, indicating marked differences in status, wealth, and power among the deceased.",
        rubric: [{ key: "Definition and purpose of megaliths", marks: "1.5 Marks" }, { key: "Brahmagiri gold beads vs simple pots evidence", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Bio-Archaeology: Skeletal Analysis at Inamgaon",
      question: "At Inamgaon (Maharashtra), archaeologists discovered adult skeletons buried inside houses with their heads pointing north. (a) What food remains were identified in the settlement? (b) How do physical anthropologists differentiate male and female human skeletons without relying on ornaments?",
      answer: "<strong>(a) Food Remains:</strong> Seeds of wheat, barley, rice, pulses, and bones of cattle, buffalo, goat, deer, and fish with cut marks.<br><strong>(b) Skeletal Sex Identification:</strong> Pelvic bone anatomy: the female pelvic cavity is noticeably broader, deeper, and wider than the male pelvis to accommodate childbearing, providing reliable biological identification independent of gendered grave goods."
    }
  },
  {
    num: 5,
    id: "ch_csst_h5",
    subject: "History",
    book: "Our Pasts - I",
    title: "Kingdoms, Kings and an Early Republic",
    desc: "Ashvamedha sacrifice, Janapadas to Mahajanapadas, Fortified capitals, Taxation (Bhaga 1/6th on agriculture), Iron plowshares, Rise of Magadha, The Vajji Sangha at Vaishali.",
    concepts: [
      "Ashvamedha (Horse Sacrifice): Ritual allowing a powerful raja to establish sovereignty over neighbouring territories.",
      "Mahajanapadas (~2500 years ago): 16 prominent territorial states; fortified with massive brick and stone walls for defense and display.",
      "Taxes: Main source was 1/6th of agricultural produce ('bhaga' or share); taxes on craftspersons (free labour), herders, and trade.",
      "Agricultural Revolution: Iron plowshares and paddy transplantation boosted agricultural surplus.",
      "Magadha vs Vajji: Magadha (monarchy with elephants, iron ore, and Ganga water transport) vs Vajji (republican 'Sangha' or 'Gana' where thousands ruled together).",
      "Varna System: Brahmins (priests), Kshatriyas (rulers/warriors), Vaishyas (farmers/traders), Shudras (labourers)."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="220" height="60" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/><text x="140" y="45" font-family="sans-serif" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">Magadha (Monarchy)</text><text x="140" y="65" font-family="sans-serif" font-size="10" fill="#1d4ed8" text-anchor="middle">Centralized Raja • Bimbisara & Ajatashattu</text><rect x="290" y="20" width="220" height="60" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="400" y="45" font-family="sans-serif" font-size="12" font-weight="700" fill="#14532d" text-anchor="middle">Vajji (Republic / Gana)</text><text x="400" y="65" font-family="sans-serif" font-size="10" fill="#166534" text-anchor="middle">Assembly Governance • Consensus</text></svg>`,
    questions: [
      {
        num: 1,
        title: "How did the Rajas of Mahajanapadas build forts and maintain armies? What were the two major changes in agriculture around this time?",
        marks: 3,
        ans: "<strong>Mahajanapada Statecraft:</strong><br>• Rajas built massive stone, brick, and wooden walls around capitals for military defense, boundary protection, and displaying wealth. To finance building projects and maintain permanent standing armies paid regular salaries, they instituted regular <strong>taxation</strong> (especially 1/6th of crop harvest called *bhaga*).<br>• <strong>Two Agricultural Changes:</strong><br>1. Growing use of heavy <strong>iron plowshares</strong> to turn dense clayey soil.<br>2. <strong>Transplantation of paddy:</strong> Instead of scattering seeds, saplings were grown in nurseries and transplanted into waterlogged fields, dramatically multiplying crop yields.",
        rubric: [{ key: "Fortification and regular taxation system", marks: "1.5 Marks" }, { key: "Iron plowshares and paddy transplantation", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "In what ways was the administration of the Vajji Sangha different from that of Magadha?",
        marks: 3,
        ans: "<strong>Monarchy vs Republic:</strong><br>• <strong>Magadha:</strong> A centralized hereditary monarchy where supreme power was wielded by a single monarch (like Bimbisara or Ajatasattu). Royal decrees were executed by ministers and standing armies.<br>• <strong>Vajji Sangha:</strong> A republican oligarchy (*Gana* or *Sangha*) where there was not one ruler, but thousands of men who were all designated *rajas*. They met in public assemblies to debate, deliberate, and decide state matters by consensus and majority vote.",
        rubric: [{ key: "Monarchical single ruler centralization in Magadha", marks: "1.5 Marks" }, { key: "Democratic assembly and collective consensus in Vajji", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Political Science & Early Democracy: Ancient Ganas vs Modern Parliaments",
      question: "The Licchavis of Vajji met in public assemblies to debate governance. (a) Who were excluded from participating in ancient Vajji assemblies? (b) How does modern constitutional democracy address these ancient exclusions?",
      answer: "<strong>(a) Excluded Groups:</strong> Women, enslaved labourers (*dasas*), and landless agricultural workers (*kammakaras*) were strictly barred from attending and voting in the Sangha assemblies.<br><strong>(b) Modern Redress:</strong> Universal Adult Suffrage: modern democratic constitutions guarantee every adult citizen the fundamental right to vote and hold public office regardless of gender, caste, or wealth."
    }
  },
  {
    num: 6,
    id: "ch_csst_h6",
    subject: "History",
    book: "Our Pasts - I",
    title: "New Questions and Ideas",
    desc: "Gautama Buddha and the Four Noble Truths. Mahavira and Jainism (Ahimsa). Upanishadic thinkers (Gargi, Satyakama Jabala). The Sangha and Buddhist Monasteries (Viharas).",
    concepts: [
      "Buddha (Siddhartha Gautama, Sakya gana): Left palace, attained enlightenment under Bodhi tree at Bodh Gaya, gave first sermon at Sarnath, passed away at Kusinara.",
      "Core Buddhist Teachings: Life is full of suffering (dukkha) caused by cravings (tanha). Moderation, kindness, respect for animal life.",
      "Vardhamana Mahavira (Jina, conqueror): 24th Tirthankara of Jainism; preached strict Ahimsa (non-injury to living beings).",
      "Upanishads: Philosophical dialogues exploring the individual soul (Atman) and universal soul (Brahman).",
      "Thinkers: Gargi (renowned woman debater), Satyakama Jabala (son of slave woman Jabali, accepted by sage Gautama for speaking truth).",
      "Sangha: Association of monks who renounced home. Rules written in Vinaya Pitaka. Viharas (permanent shelters/monasteries)."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="480" height="60" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="270" y="42" font-family="sans-serif" font-size="12" font-weight="700" fill="#78350f" text-anchor="middle">Sramanic Traditions & Philosophical Inquiry</text><text x="140" y="65" font-family="sans-serif" font-size="11" fill="#b45309" text-anchor="middle">Buddhism (Middle Path & Ahimsa)</text><text x="400" y="65" font-family="sans-serif" font-size="11" fill="#b45309" text-anchor="middle">Upanishads (Atman & Brahman)</text></svg>`,
    questions: [
      {
        num: 1,
        title: "What were the main teachings of the Buddha? What was the story of Kisa Gotami and what lesson did it teach?",
        marks: 4,
        ans: "<strong>Buddhist Philosophy:</strong><br>• <strong>Core Teachings:</strong><br>1. Life is full of sorrow (*dukkha*) caused by unsatisfied cravings and desires (*tanha*).<br>2. Tanha can be removed by following the <strong>Eightfold Middle Path</strong> of moderation.<br>3. Be kind and respect the lives of all creatures, including animals.<br>4. The results of our actions (*karma*), good or bad, affect us in this life and the next.<br>• <strong>Kisa Gotami:</strong> When her only son died, she begged for medicine. The Buddha asked her to bring a handful of mustard seeds from a house where nobody had ever lost a parent, child, or friend. Unable to find a single death-free house, she realized that grief and death are universal to all mortals.",
        rubric: [{ key: "Four core Buddhist tenets (dukkha, tanha, moderation, karma)", marks: "2.5 Marks" }, { key: "Kisa Gotami mustard seed parable and moral of universal mortality", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "What were the main principles taught by Mahavira? Why was it difficult for ordinary farmers to follow Jainism strictly?",
        marks: 3,
        ans: "<strong>Jain Philosophy:</strong><br>• <strong>Principles:</strong> Lead a simple life of absolute truth (*Satya*), do not steal (*Asteya*), practice celibacy (*Brahmacharya*), and observe strict <strong>Ahimsa</strong> (non-injury to any living creature: 'All beings desire to live; to all, life is dear').<br>• <strong>Farmer Difficulty:</strong> Farmers had to till the soil, remove weeds, and spray natural pesticides to save their crops, which inevitably killed insects and microorganisms, violating the absolute vow of Ahimsa.",
        rubric: [{ key: "Ahimsa and basic moral vows of Jainism", marks: "1.5 Marks" }, { key: "Agricultural necessity of killing pests conflicting with strict Ahimsa", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Ancient Philosophy & Social Mobility: Satyakama Jabala's Story",
      question: "Satyakama Jabala was the son of a poor maidservant, Jabali. (a) What did the sage Gautama look for when deciding whether to teach him? (b) How does this historical account refute the rigid hereditary caste prejudices of later eras?",
      answer: "<strong>(a) Sage Gautama's Criterion:</strong> Truthfulness: when Satyakama boldly admitted his humble lineage without deceit, the sage proclaimed that none but a true seeker of Brahman could speak so fearlessly and initiated him.<br><strong>(b) Social Refutation:</strong> It demonstrates that in the early Upanishadic era, moral character and intellectual merit took precedence over hereditary birth status."
    }
  },
  {
    num: 7,
    id: "ch_csst_h7",
    subject: "History",
    book: "Our Pasts - I",
    title: "Ashoka, The Emperor Who Gave Up War",
    desc: "The Mauryan Empire (Chandragupta, Chanakya/Kautilya, Bindusara, Ashoka). Pataliputra administration, The Kalinga War, Ashoka's Dhamma, Rock and Pillar Edicts, Dhamma Mahamattas.",
    concepts: [
      "Mauryan Empire founded by Chandragupta Maurya ~2300 years ago with the mentorship of Chanakya (author of Arthashastra).",
      "Pataliputra: Capital surrounded by massive wooden walls, 570 towers, and 64 gates (described by Greek ambassador Megasthenes).",
      "Kalinga War: Fought along coastal Odisha. Witnessing 100,000 deaths and widespread slaughter filled Ashoka with immense sorrow and remorse.",
      "Ashoka is the only king in world history who renounced war after victory.",
      "Ashoka's Dhamma: Not a new religion, but ethical code: obedience to parents, respect for teachers, kindness to servants, religious tolerance.",
      "Inscribed edicts in Prakrit (Brahmi script) and dispatched Dhamma Mahamattas across India, Sri Lanka, Syria, and Greece."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="480" height="60" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="270" y="42" font-family="sans-serif" font-size="12" font-weight="700" fill="#14532d" text-anchor="middle">Emperor Ashoka's Moral Transformation</text><text x="270" y="65" font-family="sans-serif" font-size="11" fill="#15803d" text-anchor="middle">Renounced Military Conquest (Digvijaya) for Conquest through Piety (Dhammavijaya)</text></svg>`,
    questions: [
      {
        num: 1,
        title: "What was the turning point in Ashoka's life that led him to give up war? How was an empire different from a kingdom?",
        marks: 3,
        ans: "<strong>Kalinga War & Imperial Statecraft:</strong><br>• <strong>Turning Point:</strong> The bloody conquest of <strong>Kalinga (Odisha)</strong>. Over 100,000 soldiers were killed, 150,000 captured, and countless innocent civilians perished. The gruesome bloodshed and cries of grieving families filled Ashoka with deep sorrow and remorse, prompting him to renounce warfare and adopt Buddhist Dhamma.<br>• <strong>Empire vs Kingdom:</strong> Empires are vastly larger than kingdoms, require huge standing armies for defense, multi-tiered bureaucratic tax collectors, and governed diverse linguistic provinces.",
        rubric: [{ key: "Kalinga devastation and profound remorse", marks: "1.5 Marks" }, { key: "Scale of empire requiring standing armies and larger bureaucracy", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "What was Ashoka’s Dhamma? What means did Ashoka adopt to spread the message of Dhamma?",
        marks: 3,
        ans: "<strong>Ashoka's Dhamma & Propagation:</strong><br>• <strong>Core Principles:</strong> Respect for parents and elders, gentle treatment of slaves and servants, generosity towards Brahmins and Buddhist monks, and non-violence (*Ahimsa*) towards all living beings.<br>• <strong>Means of Propagation:</strong><br>1. Inscribed moral edicts on rocks and polished stone pillars along public highways in vernacular Prakrit using Brahmi script.<br>2. Appointed special royal officials called <strong>Dhamma Mahamattas</strong> to teach people across provinces.<br>3. Dispatched peace emissaries to foreign realms including Syria, Egypt, Greece, and Sri Lanka.",
        rubric: [{ key: "Ethical tenets of Dhamma", marks: "1.5 Marks" }, { key: "Inscriptions on rocks, Dhamma Mahamattas, foreign emissaries", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "National Emblem & State Heritage: The Sarnath Lion Capital",
      question: "The Lion Capital atop Ashoka's pillar at Sarnath was adopted as India's National Emblem. (a) What four animals are carved on the circular abacus? (b) What does the 24-spoke Ashoka Chakra on the National Flag symbolize?",
      answer: "<strong>(a) Four Animals:</strong> Asiatic Lion (courage), Galloping Horse (energy and speed), Sturdy Bull (steadfast hard work), and Elephant (stately wisdom).<br><strong>(b) Ashoka Chakra:</strong> The Wheel of Law (Dharmachakra): symbolizes righteous duty, progressive continuous motion, and truth (*Satyameva Jayate*)."
    }
  },
  {
    num: 8,
    id: "ch_csst_h8",
    subject: "History",
    book: "Our Pasts - I",
    title: "Vital Villages, Thriving Towns",
    desc: "Iron tools in agriculture (axes, iron plowshares), Irrigation networks (canals, wells, tanks), Village social hierarchy (Vellalar, Uzhavar, Kadaisiyar), Sangam literature, Mathura craftsmanship, Arikamedu port.",
    concepts: [
      "Iron Age Surge (~2500 years ago): Iron axes cleared forests; iron plowshares doubled agricultural productivity.",
      "Irrigation: Kings built canals, wells, tanks, and artificial lakes to collect rainwater and raise tax revenues.",
      "Southern Village Hierarchy: Large landowners (Vellalar), Ordinary ploughmen (Uzhavar), Landless labourers and slaves (Kadaisiyar and Adimai).",
      "Northern Village Hierarchy: Village headman (Gramabhojaka: largest landowner, judge, policeman), Independent farmers (Grihapatis), Landless workers (Dasas/Kammakaras).",
      "Sangam Literature: Earliest Tamil literature composed in poet assemblies at Madurai.",
      "Urban Centers: Mathura (sculpture, religious hub for Buddhism/Jainism/Krishna worship, Kushana second capital). Arikamedu (Puducherry coastal trading port with Roman amphorae and Arretine ware)."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="480" height="60" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/><text x="270" y="42" font-family="sans-serif" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">Agrarian Foundation of Ancient Indian Urbanisation</text><text x="270" y="65" font-family="sans-serif" font-size="10" fill="#1d4ed8" text-anchor="middle">Iron Tools + Royal Irrigation -> Food Surplus -> Thriving Towns (Mathura, Arikamedu)</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Who was the Gramabhojaka? Why was he powerful? List the three categories of people who lived in South Indian villages.",
        marks: 3,
        ans: "<strong>Rural Social Structure:</strong><br>• <strong>Gramabhojaka:</strong> The village headman in northern India. The post was hereditary. He was typically the largest landowner, hired slaves and workers to cultivate his fields, collected taxes on behalf of the king, and functioned as the village judge and policeman.<br>• <strong>South Indian Village Hierarchy:</strong><br>1. <em>Vellalar:</em> Large wealthy landowners.<br>2. <em>Uzhavar:</em> Ordinary ploughmen.<br>3. <em>Kadaisiyar & Adimai:</em> Landless labourers and slaves.",
        rubric: [{ key: "Powers and roles of Gramabhojaka", marks: "1.5 Marks" }, { key: "Three Tamil social strata (Vellalar, Uzhavar, Kadaisiyar)", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "What were Shrenis? What functions did they perform? Describe Arikamedu as a trading port.",
        marks: 3,
        ans: "<strong>Guilds & Roman Trade:</strong><br>• <strong>Shrenis:</strong> Associations or guilds formed by craftspersons and merchants (weavers, potters, metalworkers).<br>• <strong>Functions:</strong> Provided raw material training, distributed finished goods, regulated prices, served as banks where rich patrons deposited money, and funded religious monasteries.<br>• <strong>Arikamedu:</strong> Coastal trading port in Puducherry where Roman ships docked. Excavations revealed Roman double-handled wine amphorae, stamped red-glazed Arretine pottery, and bead-making workshops.",
        rubric: [{ key: "Definition and banking/training functions of Shrenis", marks: "1.5 Marks" }, { key: "Arikamedu port with Roman amphorae and pottery evidence", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Global Maritime Trade: Indo-Roman Commercial Networks",
      question: "Pliny the Elder, a Roman historian, lamented the outflow of Roman gold to India for spices and silk. (a) What was Indian black pepper called in the Roman Empire? (b) How did monsoon wind navigation enable sailors to cross the Arabian Sea directly from the Red Sea to Kerala?",
      answer: "<strong>(a) Black Pepper:</strong> 'Black Gold' (*Yavanapriya*), prized for culinary preservation and medicinal tonics in Rome.<br><strong>(b) Monsoon Navigation:</strong> Greek and Roman sailors utilized the seasonal southwest monsoon winds (blowing from June to September) to sail rapidly across open ocean to the Malabar coast, returning with the northeast winds."
    }
  },
  {
    num: 9,
    id: "ch_csst_h9",
    subject: "History",
    book: "Our Pasts - I",
    title: "Traders, Kings and Pilgrims",
    desc: "The Silk Route and Kushana empire (Kanishka). Spread of Mahayana Buddhism (Bodhisattvas & Buddha statues). Chinese pilgrims (Fa Xian, Xuan Zang, I-Qing) studying at Nalanda. The Bhakti movement.",
    concepts: [
      "Silk Route: Overland and maritime trade routes connecting China to Mediterranean via Central Asia.",
      "Kushanas: Controlled the Silk Route ~2000 years ago; ruled Peshawar and Mathura; issued pure gold coins.",
      "Kanishka: Fourth Buddhist Council; patronized poet Ashvaghosha (author of Buddhacharita).",
      "Mahayana Buddhism: Two new features: Worship of sculpted human statues of Buddha and belief in Bodhisattvas (compassionate enlightened beings who delayed nirvana to teach mortals). Theravada Buddhism thrived in Sri Lanka and SE Asia.",
      "Chinese Pilgrims: Fa Xian (5th c.), Xuan Zang (7th c.), I-Qing visited India to collect Buddhist manuscripts and studied at Nalanda Mahavihara.",
      "Bhakti Movement: Devotion to a chosen personal deity (Shiva, Vishnu, Durga) accessible to everyone regardless of caste or gender."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="480" height="60" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="270" y="42" font-family="sans-serif" font-size="12" font-weight="700" fill="#78350f" text-anchor="middle">Trans-Asian Cultural Bridges: Silk Route & Pilgrims</text><text x="270" y="65" font-family="sans-serif" font-size="10" fill="#b45309" text-anchor="middle">Silk Trade • Mahayana Buddhism (Bodhisattvas) • Nalanda University • Bhakti</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Why did kings want to control the Silk Route? What were the two new features of Mahayana Buddhism?",
        marks: 3,
        ans: "<strong>Silk Route & Buddhist Reformation:</strong><br>• <strong>Silk Route Control:</strong> Kings sought control because wealthy merchants travelling along the route paid heavy road tolls, custom duties, and tributes, providing massive revenue for imperial treasuries.<br>• <strong>Two Features of Mahayana Buddhism:</strong><br>1. <strong>Statue Worship:</strong> Earlier, Buddha’s presence was depicted using symbols (e.g., empty throne, footprint, Bodhi tree). Now, lifelike statues of Buddha were sculpted in Mathura and Gandhara.<br>2. <strong>Belief in Bodhisattvas:</strong> Reverence for compassionate beings who attained enlightenment but postponed their personal liberation to live among humanity and alleviate suffering.",
        rubric: [{ key: "Commercial tolls and revenue from Silk Route", marks: "1.5 Marks" }, { key: "Sculpted Buddha statues and Bodhisattva ideal", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "What was Nalanda? How did Chinese pilgrim Xuan Zang describe the admission standards and academic life there?",
        marks: 3,
        ans: "<strong>Nalanda Mahavihara:</strong><br>• Nalanda (Bihar) was the premier international Buddhist monastic university in ancient Asia.<br>• <strong>Academic Rigour:</strong> Xuan Zang recorded that teachers were men of the highest scholarship. Admission was extraordinarily strict: the gatekeeper (*Dwarapandita*) questioned incoming scholars with complex philosophical riddles; seven or eight out of ten failed to gain entry.<br>• Day and night, thousands of monks and visiting scholars from China, Korea, and Tibet debated philosophy and translated Sanskrit manuscripts.",
        rubric: [{ key: "Nalanda as international monastic university", marks: "1.5 Marks" }, { key: "Strict entrance examination by gatekeeper and academic rigour", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Intercultural Epistemology: The Heritage of Nalanda",
      question: "Xuan Zang spent 5 years studying Sanskrit grammar and Buddhist philosophy at Nalanda. (a) What treasures did he carry back to China? (b) How did ancient Indian university models foster international intellectual diplomacy?",
      answer: "<strong>(a) Treasures Carried:</strong> 657 sacred Sanskrit manuscripts loaded on 20 horses, gold and sandalwood statues of Buddha, and relics.<br><strong>(b) Intellectual Diplomacy:</strong> By providing state-sponsored food, lodging, and access to massive multi-storeyed libraries (Dharmaganja) tuition-free to foreign scholars, ancient India established itself as the knowledge beacon of the Eastern world."
    }
  },
  {
    num: 10,
    id: "ch_csst_h10",
    subject: "History",
    book: "Our Pasts - I",
    title: "Buildings, Paintings and Books",
    desc: "Iron Pillar at Mehrauli (metallurgy), Stupas (Sanchi Stupa anatomy: Anda, Harmika, Chhatri, Pradakshina Path, Torana gateways), Rock-cut cave temples of Ajanta (murals), Early Hindu temples (Garbhagriha, Shikhara, Mandapa), Epics (Silappadikaram, Manimekalai, Mahabharata, Ramayana), Scientific works of Aryabhata.",
    concepts: [
      "Iron Pillar at Mehrauli (Delhi): Built ~1500 years ago during Gupta era; 7.2 m tall, 3 tonnes; has not rusted despite open exposure to weather, proving ancient Indian metallurgical mastery.",
      "Stupa Architecture: 'Stupa' means mound. Relic casket (*dhatugarbha*) at center containing bones or ashes of Buddha. Pradakshina path surrounded by stone railings (*vedika*) and carved gateways (*toranas*).",
      "Ajanta Caves (Maharashtra): Buddhist rock-cut monasteries with exquisite fresco wall paintings illuminated by torchlight.",
      "Hindu Temple Architecture: Garbhagriha (sanctum sanctorum where primary deity idol is installed), Shikhara (towering spire built over garbhagriha), Mandapa (assembly hall). Examples: Deogarh Dashavatara temple, Bhitargaon brick temple, Mahabalipuram monolithic rathas.",
      "Literature: Tamil epics *Silappadikaram* (composed by Ilango Adigal) and *Manimekalai* (Sattanar). Sanskrit epics *Mahabharata* (Vyasa, includes Bhagavad Gita) and *Ramayana* (Valmiki).",
      "Science: *Aryabhatiya* by Aryabhata (explained rotation of Earth on its axis, solar/lunar eclipses, and calculated circumference of circle with remarkable accuracy)."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="480" height="60" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="270" y="42" font-family="sans-serif" font-size="12" font-weight="700" fill="#78350f" text-anchor="middle">Classical Indian Architecture & Scientific Renaissance</text><text x="270" y="65" font-family="sans-serif" font-size="10" fill="#b45309" text-anchor="middle">Sanchi Stupa • Mehrauli Rust-Free Iron Pillar • Ajanta Murals • Aryabhata's Astronomy</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Describe the structural features of a Stupa. What is the Garbhagriha in an ancient temple?",
        marks: 3,
        ans: "<strong>Architectural Morphology:</strong><br>• <strong>Stupa Anatomy:</strong><br>1. <em>Relic Casket:</em> A small box containing bodily relics or belongings of Buddha placed at the center of the mound.<br>2. <em>Anda:</em> The semi-hemispherical earthen mound encased in baked bricks.<br>3. <em>Harmika & Chhatri:</em> Square balcony topped with a triple umbrella symbolizing the three jewels of Buddhism.<br>4. <em>Pradakshina Path:</em> Circular pathway around the stupa enclosed by stone railings (*vedika*) and entered through carved gateways (*toranas*) where pilgrims walked clockwise in prayer.<br>• <strong>Garbhagriha:</strong> The small, sacred sanctum sanctorum room at the core of an ancient Hindu temple where the image/idol of the chief deity was enshrined and where priests performed worship.",
        rubric: [{ key: "Stupa components: Relic casket, mound, pradakshina path, torana", marks: "2 Marks" }, { key: "Garbhagriha definition", marks: "1 Mark" }]
      },
      {
        num: 2,
        title: "Why is the Iron Pillar at Mehrauli famous? What scientific contributions did Aryabhata make in his book 'Aryabhatiya'?",
        marks: 3,
        ans: "<strong>Ancient Metallurgical & Astronomical Genius:</strong><br>• <strong>Mehrauli Iron Pillar:</strong> Standing at 7.2 m tall and weighing over 3 tonnes in Delhi, it was cast by Gupta craftsmen over 1,500 years ago. Its chemical composition has completely resisted rust and corrosion despite standing exposed to rain and sun for fifteen centuries, testifying to the pinnacle of ancient Indian metallurgy.<br>• <strong>Aryabhata's Contributions:</strong><br>1. Stated that day and night are caused by the <strong>rotation of the Earth on its axis</strong>, even though the sun appears to move.<br>2. Formulated the correct scientific explanation for <strong>solar and lunar eclipses</strong>.<br>3. Calculated the value of Pi (π ≈ 3.1416) and determined the circumference of the Earth with astounding precision.",
        rubric: [{ key: "Rust-free metallurgical perfection of Mehrauli pillar", marks: "1.5 Marks" }, { key: "Earth's axial rotation, eclipses, and mathematics of Aryabhata", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Ancient Metallurgical Chemistry: The Mehrauli Corrosion Barrier",
      question: "Modern metallurgists studied the surface of the Mehrauli pillar using electron microscopy. (a) What microscopic protective layer prevents the pillar from rusting? (b) How did Gupta blacksmiths forge a 3-tonne pillar without modern industrial blast furnaces?",
      answer: "<strong>(a) Protective Film:</strong> A microscopic passive layer of crystalline iron hydrogen phosphate (*misawite*) formed due to high phosphorus content and lack of sulfur in ancient charcoal-smelted wrought iron.<br><strong>(b) Forge Welding:</strong> Successive lumps of white-hot iron were forged and hammer-welded together layer upon layer using pure manpower and bellows-driven charcoal hearths."
    }
  },

  // --- GEOGRAPHY: THE EARTH: OUR HABITAT (6 Chapters) ---
  {
    num: 11,
    id: "ch_csst_g1",
    subject: "Geography",
    book: "The Earth: Our Habitat",
    title: "The Earth in the Solar System",
    desc: "Celestial bodies, Stars, Constellations (Ursa Major/Saptarshi, Pole Star), The Solar System (Sun, Planets, Inner & Outer Planets), Earth as a unique planet, The Moon, Asteroids, Meteoroids.",
    concepts: [
      "Solar System: 8 planets in order of distance: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. Venus is Earth's twin.",
      "Earth: 3rd nearest planet to Sun, 5th largest. Unique 'Goldilocks' conditions: optimal temperature, liquid water, oxygen, protective ozone atmosphere.",
      "Moon: Earth's only natural satellite; takes ~27 days to orbit Earth and 27 days to complete one rotation (so only one side is ever visible).",
      "Asteroids: Rocky debris orbiting between Mars and Jupiter. Meteoroids: Small pieces of rock orbiting Sun that burn as shooting stars in atmosphere."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="50" r="25" fill="#facc15" stroke="#eab308"/><circle cx="100" cy="50" r="4" fill="#94a3b8"/><circle cx="130" cy="50" r="7" fill="#fbbf24"/><circle cx="170" cy="50" r="8" fill="#3b82f6"/><circle cx="210" cy="50" r="6" fill="#ef4444"/><circle cx="280" cy="50" r="16" fill="#f97316"/><circle cx="350" cy="50" r="13" fill="#eab308"/><circle cx="420" cy="50" r="10" fill="#38bdf8"/><circle cx="480" cy="50" r="9" fill="#2563eb"/><text x="40" y="90" font-family="sans-serif" font-size="10" font-weight="700" fill="#ca8a04" text-anchor="middle">Sun</text><text x="170" y="90" font-family="sans-serif" font-size="10" font-weight="700" fill="#1d4ed8" text-anchor="middle">Earth</text><text x="280" y="90" font-family="sans-serif" font-size="10" font-weight="700" fill="#c2410c" text-anchor="middle">Jupiter</text></svg>`,
    questions: [
      {
        num: 1,
        title: "How does a planet differ from a star? Why is the Earth called a 'blue planet' and a 'unique planet'?",
        marks: 3,
        ans: "<strong>Planetary Science:</strong><br>• <strong>Planet vs Star:</strong> Stars are massive celestial bodies made of burning gases that possess their own intense heat and light (e.g., Sun). Planets do not have their own light; they reflect the light of stars and orbit them in fixed paths.<br>• <strong>Blue Planet:</strong> From space, Earth appears vibrant blue because two-thirds (71%) of its surface is covered by oceans.<br>• <strong>Unique Planet:</strong> Earth is the only celestial body known in the universe to support life, possessing favorable temperatures (not too hot, not too cold), abundant liquid water, and a breathable atmosphere rich in oxygen.",
        rubric: [{ key: "Light and heat distinction between planet and star", marks: "1 Mark" }, { key: "Blue planet explanation (oceans 71%)", marks: "1 Mark" }, { key: "Unique planet life-supporting conditions", marks: "1 Mark" }]
      },
      {
        num: 2,
        title: "Why do we always see only one side of the moon? What are asteroids and meteoroids?",
        marks: 3,
        ans: "<strong>Lunar Dynamics & Celestial Bodies:</strong><br>• <strong>Moon's Synchronous Rotation:</strong> The moon takes approximately 27 days to complete one revolution around Earth, and exactly the same time (27 days) to complete one rotation on its own axis. Because its revolution and rotation periods are synchronized, only one hemisphere of the moon is ever visible to Earth.<br>• <strong>Asteroids:</strong> Tiny rocky celestial bodies orbiting the Sun predominantly within the asteroid belt situated between Mars and Jupiter.<br>• <strong>Meteoroids:</strong> Small fragments of rock or metallic debris floating in space. When entering Earth's atmosphere, friction with air heats them, causing them to glow as streaks of light ('shooting stars').",
        rubric: [{ key: "Synchronous rotation and revolution of moon = 27 days", marks: "1.5 Marks" }, { key: "Asteroids (Mars-Jupiter belt) and meteoroids definitions", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Exoplanet Astrobiology: The Habitable Goldilocks Zone",
      question: "Astronomers searching for extraterrestrial life look for planets in the 'Goldilocks Zone' of distant stars. (a) What conditions characterize this zone? (b) Why would Earth become lifeless if it moved closer like Venus or farther like Mars?",
      answer: "<strong>(a) Goldilocks Zone:</strong> The circumstellar habitable zone where orbital radiation allows planetary surface water to remain in liquid state rather than evaporating into runaway steam or freezing into permanent ice.<br><strong>(b) Earth's Fragility:</strong> If closer like Venus, runaway greenhouse effect would boil oceans; if farther like Mars, temperatures would plummet, freezing all surface water and terminating biochemistry."
    }
  },
  {
    num: 12,
    id: "ch_csst_g2",
    subject: "Geography",
    book: "The Earth: Our Habitat",
    title: "Globe: Latitudes and Longitudes",
    desc: "Equator (0°), Tropics of Cancer (23½° N) & Capricorn (23½° S), Arctic & Antarctic Circles, Heat Zones (Torrid, Temperate, Frigid), Prime Meridian (0°), Longitude and Time, Indian Standard Time (IST 82°30' E).",
    concepts: [
      "Latitudes: Horizontal parallel circles measuring distance north or south of Equator (0° to 90°).",
      "Heat Zones: Torrid Zone (receives maximum overhead sunlight between Tropics), Temperate Zones (moderate climate), Frigid Zones (slanted rays near poles, freezing cold).",
      "Longitudes: Vertical semi-circles running from North Pole to South Pole through Prime Meridian (0° at Greenwich).",
      "Earth rotates 360° in 24 hours -> 15° per hour -> 1° in 4 minutes.",
      "Indian Standard Time (IST): Fixed along 82°30' E meridian (Mirzapur, UP), which is 5 hours 30 minutes ahead of GMT (Greenwich Mean Time)."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="270" cy="50" r="45" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><line x1="225" y1="50" x2="315" y2="50" stroke="#dc2626" stroke-width="2"/><text x="325" y="54" font-family="sans-serif" font-size="10" font-weight="700" fill="#dc2626">Equator 0°</text><line x1="230" y1="32" x2="310" y2="32" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="2,2"/><text x="325" y="36" font-family="sans-serif" font-size="9" fill="#ea580c">Tropic of Cancer 23½° N</text><line x1="230" y1="68" x2="310" y2="68" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="2,2"/><text x="325" y="72" font-family="sans-serif" font-size="9" fill="#ea580c">Tropic of Capricorn 23½° S</text><line x1="270" y1="5" x2="270" y2="95" stroke="#16a34a" stroke-width="1.5"/><text x="270" y="10" font-family="sans-serif" font-size="9" font-weight="700" fill="#15803d" text-anchor="middle">Prime Meridian 0°</text></svg>`,
    questions: [
      {
        num: 1,
        title: "What are the three heat zones of the Earth? Why does the Torrid Zone receive the maximum amount of heat?",
        marks: 3,
        ans: "<strong>Heat Zones of Earth:</strong><br>1. <strong>Torrid Zone:</strong> The region lying between the Tropic of Cancer (23½° N) and Tropic of Capricorn (23½° S).<br>2. <strong>Temperate Zones:</strong> The regions bounded by the Tropic of Cancer and Arctic Circle in the north, and Tropic of Capricorn and Antarctic Circle in the south.<br>3. <strong>Frigid Zones:</strong> Cold polar regions lying between Arctic Circle and North Pole, and Antarctic Circle and South Pole.<br>• <strong>Maximum Heat:</strong> The Torrid Zone receives maximum solar heat because the midday sun is exactly overhead at least once a year on all latitudes between the tropics, projecting concentrated vertical rays with minimal atmospheric dispersion.",
        rubric: [{ key: "Naming and defining the three heat zones", marks: "1.5 Marks" }, { key: "Direct vertical solar rays explanation for Torrid Zone", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "Why is it 5:30 p.m. in India when it is 12:00 noon in London? What is the standard meridian of India?",
        marks: 3,
        ans: "<strong>Longitude and Local Time Calculation:</strong><br>• London is located on the Prime Meridian (0° longitude).<br>• India’s standard meridian is fixed at <strong>82°30' E</strong> (passing through Mirzapur, Uttar Pradesh).<br>• Earth rotates 360° in 24 hours -> 1° in 4 minutes.<br>• Time difference = 82.5° × 4 minutes = 330 minutes = <strong>5 hours and 30 minutes</strong>.<br>• Since India lies East of Greenwich, Indian time is ahead of GMT.<br>• Therefore, when it is 12:00 noon in London, it is 12:00 + 5 hrs 30 min = <strong>5:30 p.m. in India</strong>.",
        rubric: [{ key: "Stating Indian standard meridian: 82°30' E", marks: "1 Mark" }, { key: "Mathematical derivation: 82.5 × 4 = 330 min = 5.5 hours", marks: "1 Mark" }, { key: "Concluding 5:30 p.m. ahead of London", marks: "1 Mark" }]
      }
    ],
    cbq: {
      title: "Global Aviation Navigation: Trans-Meridian Jetlag & Time Zones",
      question: "A cricket match starts in Sydney, Australia (150° E) at 10:00 a.m. local time. (a) At what time should a fan tune in from New Delhi (82°30' E)? (b) Why would having multiple time zones cause administrative chaos in Indian Railways?",
      answer: "<strong>(a) Time Calculation:</strong> Longitude difference = 150° - 82.5° = 67.5°. Time difference = 67.5 × 4 min = 270 minutes = 4 hours 30 minutes. Since India is west of Sydney, Indian time is 4.5 hours behind: 10:00 a.m. - 4 hr 30 min = <strong>5:30 a.m. IST</strong>.<br><strong>(b) Single Standard Time:</strong> India has an longitudinal span of ~29° between Gujarat and Assam (~2 hours solar time gap). Having multiple local times would disrupt train schedules, flight timetables, and national banking clearing hours."
    }
  },
  {
    num: 13,
    id: "ch_csst_g3",
    subject: "Geography",
    book: "The Earth: Our Habitat",
    title: "Motions of the Earth",
    desc: "Rotation (24 hours -> Day and Night, Circle of Illumination) vs Revolution (365¼ days -> Leap Year, Seasons). Orbital plane, Summer Solstice (21 June), Winter Solstice (22 December), Equinoxes (21 March & 23 September).",
    concepts: [
      "Rotation: Daily movement of Earth on its tilted axis (23½° tilt); causes Day and Night.",
      "Circle of Illumination: The circle dividing day from night on the globe (does not coincide with axis).",
      "Revolution: Annual motion of Earth around Sun in elliptical orbit (365 days 6 hours). The 6 extra hours add up to 24 hours (1 extra day) every 4 years -> Leap Year in February.",
      "Summer Solstice (21 June): Northern Hemisphere tilted towards Sun; Tropic of Cancer receives direct rays; longest day and shortest night in north.",
      "Winter Solstice (22 December): Southern Hemisphere tilted towards Sun; Tropic of Capricorn receives direct rays.",
      "Equinox (21 March & 23 September): Direct rays fall on Equator; equal days and nights worldwide."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="270" cy="50" rx="200" ry="35" fill="none" stroke="#94a3b8" stroke-dasharray="4,4"/><circle cx="270" cy="50" r="16" fill="#facc15" stroke="#ca8a04"/><circle cx="70" cy="50" r="10" fill="#3b82f6"/><text x="70" y="75" font-family="sans-serif" font-size="9" font-weight="700" fill="#1e40af" text-anchor="middle">Summer Solstice (21 June)</text><circle cx="470" cy="50" r="10" fill="#3b82f6"/><text x="470" y="75" font-family="sans-serif" font-size="9" font-weight="700" fill="#1e40af" text-anchor="middle">Winter Solstice (22 Dec)</text><circle cx="270" cy="15" r="10" fill="#3b82f6"/><text x="270" y="10" font-family="sans-serif" font-size="9" font-weight="700" fill="#1e40af" text-anchor="middle">Autumn Equinox (23 Sept)</text><circle cx="270" cy="85" r="10" fill="#3b82f6"/><text x="270" y="100" font-family="sans-serif" font-size="9" font-weight="700" fill="#1e40af" text-anchor="middle">Spring Equinox (21 March)</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Differentiate between rotation and revolution of the Earth. What is the circle of illumination? Why do seasons change?",
        marks: 4,
        ans: "<strong>Terrestrial Motions:</strong><br>• <strong>Rotation:</strong> The spinning of the Earth on its axis once every 24 hours, causing the cycle of day and night.<br>• <strong>Revolution:</strong> The elliptical orbital movement of Earth around the Sun once every 365¼ days, causing the progression of seasons.<br>• <strong>Circle of Illumination:</strong> The imaginary boundary circle that separates the illuminated day hemisphere of Earth from the dark night hemisphere.<br>• <strong>Reason for Seasons:</strong> Seasons change because the Earth revolves around the Sun in an elliptical orbit with its axis permanently tilted at an angle of <strong>66½° to its orbital plane (or 23½° to the vertical)</strong> in the same direction throughout the year.",
        rubric: [{ key: "Rotation vs Revolution definitions", marks: "1.5 Marks" }, { key: "Circle of illumination definition", marks: "1 Mark" }, { key: "Axial tilt and revolution causing seasons", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "Why does the Southern Hemisphere experience Winter and Summer Solstice in different times than that of the Northern Hemisphere?",
        marks: 3,
        ans: "<strong>Opposing Hemispheric Seasons:</strong><br>Because Earth's axis is inclined, when the Northern Hemisphere is tilted towards the Sun (around 21 June), it receives direct rays and experiences summer with long daylight hours. At that exact same time, the Southern Hemisphere is tilted away from the Sun, receiving slanted rays and experiencing winter with cold, short days. Conversely, around 22 December, the Southern Hemisphere tilts towards the Sun enjoying summer, while the Northern Hemisphere tilts away into winter.",
        rubric: [{ key: "Axial tilt creating opposite sun exposures", marks: "1.5 Marks" }, { key: "June 21 vs Dec 22 contrasting solstices", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Meteorology & Climatology: The 'Midnight Sun' Phenomenon",
      question: "In northern Norway (within the Arctic Circle), the Sun never sets below the horizon between May and July. (a) What planetary motion causes this 'Midnight Sun'? (b) Why is Christmas celebrated in the scorching summer heat in Australia?",
      answer: "<strong>(a) Midnight Sun:</strong> During the Summer Solstice period, the North Pole is permanently inclined towards the Sun. The entire region north of the Arctic Circle (66½° N) remains within the Circle of Illumination 24 hours a day during Earth's daily rotation.<br><strong>(b) Australia's Christmas:</strong> Australia lies in the Southern Hemisphere, where late December coincides with the Winter Solstice of the north, which is the height of the warm Summer Solstice season in the southern hemisphere."
    }
  },
  {
    num: 14,
    id: "ch_csst_g4",
    subject: "Geography",
    book: "The Earth: Our Habitat",
    title: "Maps",
    desc: "Maps vs Globes, Types of Maps (Physical, Political, Thematic), Three Components of Maps (Distance/Scale, Direction/Cardinals, Symbols/Conventional colours), Sketch and Plan.",
    concepts: [
      "Map: A representation or a drawing of the earth's surface or a part of it drawn on a flat surface according to a scale.",
      "Types: Physical (mountains, rivers, plateaus), Political (cities, states, countries, boundaries), Thematic (rainfall, road networks, industries).",
      "Three Components: Distance (Scale: small scale vs large scale), Direction (Cardinals: N, S, E, W and Intermediate: NE, SE, SW, NW), Symbols (Conventional signs).",
      "Sketch (rough drawing without scale) vs Plan (drawing of a small area on a large scale, like dimensions of rooms in a building)."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="140" height="60" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/><text x="100" y="45" font-family="sans-serif" font-size="11" font-weight="700" fill="#1d4ed8" text-anchor="middle">Physical Map</text><text x="100" y="65" font-family="sans-serif" font-size="10" fill="#1e40af" text-anchor="middle">Mountains, rivers</text><rect x="200" y="20" width="140" height="60" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="270" y="45" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803d" text-anchor="middle">Political Map</text><text x="270" y="65" font-family="sans-serif" font-size="10" fill="#166534" text-anchor="middle">Boundaries, capitals</text><rect x="370" y="20" width="140" height="60" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/><text x="440" y="45" font-family="sans-serif" font-size="11" font-weight="700" fill="#b45309" text-anchor="middle">Thematic Map</text><text x="440" y="65" font-family="sans-serif" font-size="10" fill="#92400e" text-anchor="middle">Roads, rainfall</text></svg>`,
    questions: [
      {
        num: 1,
        title: "What are the three components of a map? Differentiate between a small scale map and a large scale map.",
        marks: 3,
        ans: "<strong>Cartographic Fundamentals:</strong><br>• <strong>Three Components:</strong> <strong>Distance (Scale), Direction, and Symbols</strong>.<br>• <strong>Small Scale Map:</strong> Used to show large land areas like continents or countries on paper using a small representative ratio (e.g., 5 cm on map = 500 km on ground). Gives less detailed information (e.g., Atlas maps).<br>• <strong>Large Scale Map:</strong> Used to show small geographic areas like a village or town in high detail (e.g., 5 cm on map = 500 metres on ground). Shows individual streets, ponds, and buildings.",
        rubric: [{ key: "Three map components: Distance, Direction, Symbols", marks: "1 Mark" }, { key: "Small scale (continents/less detail) vs Large scale (villages/rich detail)", marks: "2 Marks" }]
      },
      {
        num: 2,
        title: "Distinguish between a map and a plan. Why are conventional symbols used in maps?",
        marks: 3,
        ans: "<strong>Map vs Plan & Symbology:</strong><br>• <strong>Map:</strong> A drawing of the Earth's surface or part of it drawn to scale on a flat sheet, typically depicting natural and political landscapes.<br>• <strong>Plan:</strong> A detailed technical drawing of a small area on a very large scale, revealing precise dimensions that cannot be shown on a map (such as length and breadth of individual rooms in an apartment).<br>• <strong>Conventional Symbols:</strong> Physical features like bridges, railway lines, trees, dams, and telegraph poles cannot be drawn to their actual shape and size on a sheet of paper. Standard universally recognized symbols, letters, colors, and line types allow rich geographical data to be packed into minimal space.",
        rubric: [{ key: "Map vs Plan distinction", marks: "1.5 Marks" }, { key: "Conventional symbols for universal visual clarity", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "GIS & Digital Navigation: Satellite GPS vs Cadastral Maps",
      question: "A land revenue officer uses a cadastral plan, while a tourist uses Google Maps navigation. (a) What type of map is Google Maps when showing highway traffic congestion? (b) Why must property deed boundaries rely on large-scale cadastral plans rather than small-scale regional maps?",
      answer: "<strong>(a) Thematic Map:</strong> Real-time dynamic thematic map showing variable vehicular density and speed metrics.<br><strong>(b) Cadastral Precision:</strong> Property ownership disputes require millimeter-level legal precision of plot boundaries, survey numbers, and fencing lines, which only large-scale cadastral plans provide."
    }
  },
  {
    num: 15,
    id: "ch_csst_g5",
    subject: "Geography",
    book: "The Earth: Our Habitat",
    title: "Major Domains of the Earth",
    desc: "Lithosphere (Continents: Asia, Africa, North America, South America, Antarctica, Europe, Australia), Hydrosphere (Oceans: Pacific, Atlantic, Indian, Southern, Arctic), Atmosphere (Layers: Troposphere, Stratosphere, Mesosphere, Thermosphere, Exosphere), Biosphere.",
    concepts: [
      "Lithosphere: Solid rocky crust of the earth (Continents and ocean basins). Highest peak: Mt. Everest (8,848 m); Deepest trench: Mariana Trench in Pacific (11,022 m).",
      "Seven Continents: Asia (largest), Africa (Sahara desert, Nile river, Equator/Tropics pass through), North America (connected to South America by Isthmus of Panama), Antarctica (ice cap).",
      "Hydrosphere: 97% of Earth's water is saline in oceans; less than 3% is fresh water (most locked in ice sheets and glaciers).",
      "Atmosphere: Extends up to 1,600 km; divided into 5 layers starting from ground: Troposphere, Stratosphere, Mesosphere, Thermosphere, Exosphere.",
      "Biosphere: The narrow contact zone connecting land, water, and air where all living organisms exist."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="110" height="60" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="85" y="45" font-family="sans-serif" font-size="11" font-weight="700" fill="#b45309" text-anchor="middle">Lithosphere</text><text x="85" y="65" font-family="sans-serif" font-size="10" fill="#78350f" text-anchor="middle">Solid land/rock</text><rect x="155" y="20" width="110" height="60" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/><text x="210" y="45" font-family="sans-serif" font-size="11" font-weight="700" fill="#1d4ed8" text-anchor="middle">Hydrosphere</text><text x="210" y="65" font-family="sans-serif" font-size="10" fill="#1e40af" text-anchor="middle">Water bodies (97% salt)</text><rect x="280" y="20" width="110" height="60" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="335" y="45" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803d" text-anchor="middle">Atmosphere</text><text x="335" y="65" font-family="sans-serif" font-size="10" fill="#14532d" text-anchor="middle">Blanket of air</text><rect x="405" y="20" width="110" height="60" rx="6" fill="#fdf4ff" stroke="#c026d3" stroke-width="2"/><text x="460" y="45" font-family="sans-serif" font-size="11" font-weight="700" fill="#701a75" text-anchor="middle">Biosphere</text><text x="460" y="65" font-family="sans-serif" font-size="10" fill="#a21caf" text-anchor="middle">Living realm</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Name the major continents of the earth. Name the two continents that lie entirely in the Southern Hemisphere. What is the Isthmus of Panama?",
        marks: 3,
        ans: "<strong>Global Lithosphere:</strong><br>• <strong>Seven Continents:</strong> <strong>Asia, Africa, North America, South America, Antarctica, Europe, and Australia</strong>.<br>• <strong>Entirely in Southern Hemisphere:</strong> <strong>Australia</strong> (the island continent) and <strong>Antarctica</strong>.<br>• <strong>Isthmus of Panama:</strong> A narrow strip of land joining North America and South America, with the Pacific Ocean on one side and Atlantic Ocean on the other.",
        rubric: [{ key: "Listing all 7 continents", marks: "1 Mark" }, { key: "Identifying Australia and Antarctica", marks: "1 Mark" }, { key: "Isthmus of Panama definition", marks: "1 Mark" }]
      },
      {
        num: 2,
        title: "What are the five layers of the atmosphere? Why is the biosphere critical for living organisms?",
        marks: 3,
        ans: "<strong>Atmosphere Layers & Biosphere:</strong><br>• <strong>Atmospheric Layers (from ground up):</strong><br>1. <em>Troposphere</em> (weather layer)<br>2. <em>Stratosphere</em> (contains ozone layer, aircraft flight)<br>3. <em>Mesosphere</em> (meteorites burn up)<br>4. <em>Thermosphere</em> (ionosphere, radio waves)<br>5. <em>Exosphere</em> (outer space boundary).<br>• <strong>Biosphere Importance:</strong> The biosphere is the narrow contact zone where land (lithosphere), water (hydrosphere), and air (atmosphere) interact. It is the only realm containing the unique combination of sunlight, nutrients, oxygen, and liquid water essential for the survival of all living species.",
        rubric: [{ key: "Listing 5 atmospheric layers in correct altitude order", marks: "1.5 Marks" }, { key: "Explaining unique life-supporting role of biosphere", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Global Oceanography: Atlantic Trade Highway & Submerged Trenches",
      question: "The Atlantic Ocean has an 'S' shape with a highly indented coastline. (a) Why does an indented coastline make the Atlantic the busiest ocean for maritime commerce? (b) Where is the Mariana Trench situated, and what is its maximum depth?",
      answer: "<strong>(a) Indented Coastline:</strong> Highly indented, jagged coastlines provide natural sheltered deep-water harbours, bays, and ports where ocean liners can dock securely without artificial breakwaters.<br><strong>(b) Mariana Trench:</strong> Located in the western Pacific Ocean near the Mariana Islands, with a record depth of <strong>11,022 metres</strong> below sea level (deeper than Mount Everest's height)."
    }
  },
  {
    num: 16,
    id: "ch_csst_g6",
    subject: "Geography",
    book: "The Earth: Our Habitat",
    title: "Our Country: India",
    desc: "Geographical location (8°4' N to 37°6' N, 68°7' E to 97°25' E), Physical divisions (Himalayas: Himadri, Himachal, Shiwalik; Northern Plains; Peninsular Plateau; Coastal Plains; Islands: Lakshadweep and Andaman & Nicobar), Neighbouring countries.",
    concepts: [
      "Location: Located in Northern and Eastern hemispheres. Tropic of Cancer (23°30' N) passes almost halfway through India.",
      "Neighbours: 7 land neighbours: Pakistan, Afghanistan, China, Nepal, Bhutan, Myanmar, Bangladesh. Sea neighbours: Sri Lanka (separated by Palk Strait) and Maldives.",
      "Physical Divisions: 1. Great Himalayas (Himadri, Himachal, Shiwalik). 2. Northern Indian Plains (alluvial deposits of Indus, Ganga, Brahmaputra). 3. Great Indian Desert (Thar). 4. Peninsular Plateau (triangular, volcanic black soil of Deccan). 5. Western Ghats (Sahyadris) and Eastern Ghats. 6. Coastal Plains (Western narrow, Eastern wide). 7. Islands (Lakshadweep in Arabian Sea - coral islands; Andaman & Nicobar in Bay of Bengal).",
      "Coral Islands: Skeletons of tiny marine animals called Polyps that accumulate over centuries into coral atolls."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="480" height="60" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="270" y="42" font-family="sans-serif" font-size="12" font-weight="700" fill="#14532d" text-anchor="middle">India's Physiographic Diversity</text><text x="270" y="65" font-family="sans-serif" font-size="10" fill="#15803d" text-anchor="middle">Himalayas • Northern Plains • Thar Desert • Deccan Plateau • Coastal Plains & Coral Islands</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Name the major physical divisions of India. Name the delta formed by the Ganga and the Brahmaputra. Name the countries that share land boundaries with India.",
        marks: 3,
        ans: "<strong>Indian Physiography:</strong><br>• <strong>Major Physical Divisions:</strong><br>1. The Great Himalayas<br>2. The Northern Indian Plains<br>3. The Great Indian Desert (Thar)<br>4. The Peninsular Plateau<br>5. The Coastal Plains<br>6. Two Island Groups (Lakshadweep and Andaman & Nicobar).<br>• <strong>Delta:</strong> The <strong>Sundarbans Delta</strong> (the largest and fastest-growing mangrove delta in the world).<br>• <strong>Land Neighbours (7 countries):</strong> Pakistan, Afghanistan, China, Nepal, Bhutan, Myanmar, and Bangladesh.",
        rubric: [{ key: "Six physical divisions", marks: "1 Mark" }, { key: "Sundarbans delta", marks: "1 Mark" }, { key: "Seven land neighbouring nations", marks: "1 Mark" }]
      },
      {
        num: 2,
        title: "Differentiate between the Western Coastal Plains and the Eastern Coastal Plains. Why are Lakshadweep known as coral islands?",
        marks: 3,
        ans: "<strong>Coasts and Coral Atolls:</strong><br>• <strong>Western vs Eastern Coastal Plains:</strong><br>1. <em>Western Coastal Plains:</em> Narrow strips of land sandwiched between the Western Ghats and the Arabian Sea. Few deltas.<br>2. <em>Eastern Coastal Plains:</em> Much broader and wider, situated between Eastern Ghats and Bay of Bengal, drained by large fertile river deltas (Mahanadi, Godavari, Krishna, Kaveri).<br>• <strong>Lakshadweep Coral Islands:</strong> They are formed from the calcium carbonate skeletons of tiny marine organisms called <strong>Polyps</strong>. When living polyps die, other polyps grow on top of their hard skeletal remains; over thousands of years, these calcareous deposits accumulate to build coral island atolls above sea level.",
        rubric: [{ key: "Narrow western vs broad eastern plains comparison", marks: "1.5 Marks" }, { key: "Scientific formation of coral islands from polyps", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Geomorphology & Agrarian Wealth: The Indo-Gangetic Alluvial Belt",
      question: "The Northern Indian Plains support over 400 million citizens with high population density. (a) What geological process created these fertile alluvial plains? (b) Name three Himalayan river systems responsible for their formation.",
      answer: "<strong>(a) Alluvial Deposition:</strong> Over millions of years, perennial Himalayan rivers carried weathered silt, sand, and clay particles (*alluvium*) down steep mountain gorges, depositing them across the extensive tectonic trough depression at the foothills.<br><strong>(b) Three River Systems:</strong> The <strong>Indus, the Ganga, and the Brahmaputra</strong> along with their extensive tributaries."
    }
  },

  // --- CIVICS: SOCIAL AND POLITICAL LIFE - I (8 Chapters) ---
  {
    num: 17,
    id: "ch_csst_c1",
    subject: "Civics",
    book: "Social and Political Life - I",
    title: "Understanding Diversity",
    desc: "Concept of Diversity (linguistic, regional, cultural, religious), Story of Samir Ek and Samir Do, Ladakh and Kerala comparative case study, 'Unity in Diversity' (Jawaharlal Nehru).",
    concepts: [
      "Diversity: Differences in languages, religious beliefs, festive customs, dietary traditions, and regional backgrounds among people living in the same nation.",
      "Inequality: Arises when a person does not have the resources, opportunities, or land that are available to others (e.g., Caste system, wealth disparity).",
      "Samir Ek (affluent, Hindu, school student) vs Samir Do (poor, Muslim, newspaper seller) shows how cultural diversity coexists with economic inequality.",
      "Case Studies: Ladakh (cold desert in Himalayas: pashmina wool, Tibetan Buddhism, Islam, caravans) vs Kerala (coastal southwest: spice trade with Arabs, Jews, Chinese fishing nets 'cheena-vala', Syrian Christian heritage).",
      "Unity in Diversity: Coined by Pandit Jawaharlal Nehru in 'Discovery of India' to explain that India's unity is not something imposed from outside, but something deep within its culture."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="220" height="60" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/><text x="140" y="45" font-family="sans-serif" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">Ladakh (High Altitude Mountain)</text><text x="140" y="65" font-family="sans-serif" font-size="10" fill="#1d4ed8" text-anchor="middle">Pashmina wool, butter tea, Buddhism</text><rect x="290" y="20" width="220" height="60" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="400" y="45" font-family="sans-serif" font-size="12" font-weight="700" fill="#14532d" text-anchor="middle">Kerala (Coastal Spice Trade)</text><text x="400" y="65" font-family="sans-serif" font-size="10" fill="#15803d" text-anchor="middle">Pepper, cardamom, fishing nets, Onam</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Differentiate between diversity and inequality. How did the story of Samir Ek and Samir Do illustrate this distinction?",
        marks: 3,
        ans: "<strong>Diversity vs Inequality:</strong><br>• <strong>Diversity:</strong> Cultural, linguistic, and religious uniqueness that enriches human society (e.g., Samir Ek spoke English and was Hindu; Samir Do spoke Hindi and was Muslim).<br>• <strong>Inequality:</strong> A socio-economic injustice where one individual lacks the basic resources, income, and opportunities enjoyed by another (e.g., Samir Ek went to a prestigious school, while Samir Do had to sell newspapers on street corners because his family lacked money).",
        rubric: [{ key: "Definitions of diversity vs inequality", marks: "1.5 Marks" }, { key: "Application to Samir Ek and Samir Do narrative", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "Compare how geography influenced the historical diversity of Ladakh and Kerala. Who coined the phrase 'Unity in Diversity'?",
        marks: 3,
        ans: "<strong>Geographical Influence on Culture:</strong><br>• <strong>Ladakh:</strong> Cold, arid mountain desert in Jammu & Kashmir. Its high mountain passes attracted Central Asian merchant caravans trading silk, spices, and pashmina wool, fostering a unique amalgamation of Tibetan Buddhism and Islam.<br>• <strong>Kerala:</strong> Coastal southwest strip flanked by the sea and lush hills. Its fertile climate attracted Jewish, Arab, and Chinese merchants for black pepper and cardamom, introducing Christianity and Islam alongside Hinduism.<br>• <strong>Phrase:</strong> Coined by <strong>Pandit Jawaharlal Nehru</strong> in his book *The Discovery of India*.",
        rubric: [{ key: "Ladakh pashmina and mountain trade influence", marks: "1 Mark" }, { key: "Kerala coastal spice trade influence", marks: "1 Mark" }, { key: "Jawaharlal Nehru reference", marks: "1 Mark" }]
      }
    ],
    cbq: {
      title: "Cultural Pluralism: The Indian Freedom Struggle",
      question: "During the Indian freedom struggle against British colonial rule, people from diverse backgrounds united. (a) How did the British attempt to use India's diversity to 'Divide and Rule'? (b) How did songs like those composed after the Jallianwala Bagh massacre reflect common patriotic grief?",
      answer: "<strong>(a) Divide and Rule:</strong> Colonial authorities assumed they could easily split Indians along religious, regional, and caste lines to perpetuate imperial control.<br><strong>(b) Shared Grief:</strong> The Jallianwala Bagh mourning song ('Don't forget the days of blood, O friend!') was sung by Hindus, Muslims, and Sikhs alike, demonstrating that shared suffering and devotion to freedom transcended all sectarian differences."
    }
  },
  {
    num: 18,
    id: "ch_csst_c2",
    subject: "Civics",
    book: "Social and Political Life - I",
    title: "Diversity and Discrimination",
    desc: "Difference and Prejudice, Creating Stereotypes (gender roles), Discrimination and Inequality, The Caste System and Untouchability, Dr. B.R. Ambedkar's childhood experience at Koregaon, Constitutional guarantees of equality.",
    concepts: [
      "Prejudice: Judging other people negatively or seeing them as inferior without reason.",
      "Stereotype: Fixing people into one rigid image (e.g., 'Boys don't cry', 'Girls are emotional and belong in the kitchen').",
      "Discrimination: Treating people unfairly based on prejudice or stereotypes.",
      "Caste System: Hierarchy assigning rigid occupations: Brahmins at top, 'Dalits' or 'Untouchables' forced to handle animal carcasses and denied access to village wells and temples.",
      "Dr. Bhimrao Ramji Ambedkar: Father of the Indian Constitution; fought for Dalit civil rights; experienced bitter discrimination at Koregaon railway station in 1901.",
      "Constitutional Principles: Preamble guarantees Equality, Liberty, Fraternity, and Justice. Untouchability is abolished by law (Article 17); India is a Secular State."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="480" height="60" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="270" y="42" font-family="sans-serif" font-size="12" font-weight="700" fill="#78350f" text-anchor="middle">Constitutional Architecture: Eradication of Discrimination</text><text x="270" y="65" font-family="sans-serif" font-size="11" fill="#b45309" text-anchor="middle">Article 14 (Equality before Law) • Article 17 (Abolition of Untouchability) • Secular State</text></svg>`,
    questions: [
      {
        num: 1,
        title: "What is a stereotype? How does the stereotype that 'girls are a burden' affect the life of a daughter?",
        marks: 3,
        ans: "<strong>Stereotyping & Gender Discrimination:</strong><br>• <strong>Stereotype:</strong> When we fix people into an unchangeable, generalized mental image and assume that all members of that group possess identical traits.<br>• <strong>Impact on Daughters:</strong> The toxic stereotype that girls are an economic liability or 'burden' leads to systemic neglect: daughters are denied equal access to quality higher education, modern healthcare, nutritious food, and career opportunities, often being pressured into early marriages and domestic servitude.",
        rubric: [{ key: "Definition of stereotype", marks: "1.5 Marks" }, { key: "Sociological impact on girl child education and healthcare", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "Describe Dr. B.R. Ambedkar's childhood experience at Koregaon railway station. What constitutional safeguards were instituted to prevent discrimination?",
        marks: 3,
        ans: "<strong>Caste Discrimination & Constitutional Redress:</strong><br>• <strong>Ambedkar's Experience:</strong> In 1901, 9-year-old Bhimrao and his brothers arrived at Koregaon station well-dressed. The station master was initially polite, but upon learning they were of the Mahar caste (considered untouchable), his expression morphed into disgust. No bullock-cart driver would carry them, even for double fare, because carrying untouchables was viewed as 'polluting' the cart.<br>• <strong>Constitutional Safeguards:</strong> The Indian Constitution guarantees equality of all citizens before law, legally abolishes untouchability (Article 17), ensures equal access to public wells, shops, and government jobs, and establishes India as a secular republic where freedom of conscience is a fundamental right.",
        rubric: [{ key: "Koregaon railway station bullock cart incident", marks: "1.5 Marks" }, { key: "Constitutional abolition of untouchability and secularism", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Constitutional Jurisprudence: The Vision of Dr. Ambedkar",
      question: "Dr. B.R. Ambedkar converted to Buddhism late in life along with thousands of followers. (a) Why did he believe that political democracy is incomplete without social democracy? (b) How does affirmative action (reservations) aim to rectify historical injustices?",
      answer: "<strong>(a) Social Democracy:</strong> He warned that giving each citizen one vote (political equality) while denying social and economic dignity (caste hierarchy and landlessness) creates an explosive contradiction that will imperil democracy itself.<br><strong>(b) Affirmative Action:</strong> Provides proportional representation in legislatures, universities, and public civil services to historically oppressed communities to dismantle centuries of exclusion."
    }
  },
  {
    num: 19,
    id: "ch_csst_c3",
    subject: "Civics",
    book: "Social and Political Life - I",
    title: "What is Government?",
    desc: "Need for government, Functions (laws, infrastructure, public welfare, disaster relief), Levels of government (Local, State, National), Laws and the Government, Types of government (Democratic vs Authoritarian/Monarchy), Women's Suffrage Movement.",
    concepts: [
      "Government: The organized governing body that makes decisions, enforces laws, and manages public resources for a country.",
      "Three Levels of Government: Local (village, town, city), State (Haryana, Assam, Tamil Nadu), National (entire country).",
      "Types of Government: Democracy (government of the people, by the people, for the people; rulers are elected), Monarchy (hereditary king or queen with royal court), Dictatorship (authoritarian power seized by military).",
      "Universal Adult Franchise: All adult citizens (aged 18 and above) have the right to vote without discrimination.",
      "Women's Suffrage Movement: Historic struggle by women in UK and USA during World War I to demand voting rights (US granted in 1920, UK in 1928)."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="140" height="60" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/><text x="100" y="45" font-family="sans-serif" font-size="11" font-weight="700" fill="#1d4ed8" text-anchor="middle">Local Level</text><text x="100" y="65" font-family="sans-serif" font-size="10" fill="#1e40af" text-anchor="middle">Panchayat / Municipality</text><rect x="200" y="20" width="140" height="60" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="270" y="45" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803d" text-anchor="middle">State Level</text><text x="270" y="65" font-family="sans-serif" font-size="10" fill="#166534" text-anchor="middle">State Legislative Assembly</text><rect x="370" y="20" width="140" height="60" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/><text x="440" y="45" font-family="sans-serif" font-size="11" font-weight="700" fill="#b45309" text-anchor="middle">National Level</text><text x="440" y="65" font-family="sans-serif" font-size="10" fill="#92400e" text-anchor="middle">Parliament of India</text></svg>`,
    questions: [
      {
        num: 1,
        title: "What do you understand by the word 'government'? List five ways in which you think the government affects your daily life.",
        marks: 3,
        ans: "<strong>Definition & Functions of Government:</strong><br>• <strong>Government:</strong> The executive political institution responsible for administering a state, maintaining law and order, framing legislation, defending territorial borders, and managing public welfare.<br>• <strong>Five Daily Impacts:</strong><br>1. Building and maintaining public roads, bridges, and parks.<br>2. Regulating prices of essential commodities like cooking gas and wheat.<br>3. Supplying clean tap drinking water and domestic electricity.<br>4. Running government hospitals and primary health centers (vaccination programs).<br>5. Operating national railway and postal networks.",
        rubric: [{ key: "Definition of government", marks: "1 Mark" }, { key: "Five valid daily impacts", marks: "2 Marks" }]
      },
      {
        num: 2,
        title: "What is Universal Adult Franchise? Why was the Women’s Suffrage Movement an important turning point in modern democracy?",
        marks: 3,
        ans: "<strong>Democratic Rights & Suffrage:</strong><br>• <strong>Universal Adult Franchise:</strong> The foundational democratic principle that every citizen who has attained the age of 18 years possesses the fundamental right to cast one vote in elections, regardless of wealth, gender, religion, or education.<br>• <strong>Women's Suffrage Movement:</strong> For centuries, democracies restricted voting exclusively to wealthy, educated men. During World War I, when men went to battlefields, women took over factories, offices, and heavy transport. This shattered the patriarchal myth that women were incapable of rational public decision-making, compelling governments to grant equal voting rights.",
        rubric: [{ key: "Universal Adult Franchise definition", marks: "1.5 Marks" }, { key: "Women's wartime capabilities dispelling bias", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Rule of Law vs Authoritarian Rule",
      question: "In an absolute monarchy, the king's word is law. In a constitutional democracy, even the Prime Minister is subject to the law. (a) What ensures that democratic leaders do not abuse power? (b) How do independent courts protect ordinary citizens against arbitrary government action?",
      answer: "<strong>(a) Separation of Powers:</strong> The system of constitutional checks and balances dividing authority among Legislature (makes laws), Executive (implements), and Judiciary (interprets), coupled with regular five-year elections.<br><strong>(b) Judicial Review:</strong> Citizens can petition High Courts or the Supreme Court under constitutional writs (habeas corpus, mandamus) to strike down unconstitutional executive actions."
    }
  },
  {
    num: 20,
    id: "ch_csst_c4",
    subject: "Civics",
    book: "Social and Political Life - I",
    title: "Key Elements of a Democratic Government",
    desc: "South Africa's struggle against Apartheid (Nelson Mandela & ANC), Participation through regular elections, Other forms of participation (protests, rallies, strikes), Resolving conflicts peacefully, Rivers as a source of conflict (Cauvery river water dispute), Equality and Justice.",
    concepts: [
      "Apartheid: System of racial segregation in South Africa where white minority ruled and black, Indian, and colored races were denied citizenship rights and separate hospitals, buses, and schools.",
      "Nelson Mandela: Leader of the African National Congress (ANC); imprisoned for 27 years on Robben Island; triumphed in 1994 when South Africa became a democratic multiracial nation.",
      "Citizen Participation: Regular voting in elections (every 5 years in India) holds governments accountable. Other ways: Dharnas, rallies, strikes, signature campaigns, public debates, and media scrutiny.",
      "Resolving Conflicts: The Police and Judiciary resolve conflicts peacefully according to law.",
      "Inter-State River Disputes: The Cauvery River dispute between Karnataka (Krishnarajasagara dam) and Tamil Nadu (Mettur dam) requires central tribunal adjudication.",
      "Equality and Justice are Inseparable: A society cannot be truly just without equality (e.g., banning female infanticide, waiving tuition fees for girls)."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="480" height="60" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="270" y="42" font-family="sans-serif" font-size="12" font-weight="700" fill="#14532d" text-anchor="middle">Twin Pillars of Constitutional Democracy</text><text x="140" y="65" font-family="sans-serif" font-size="12" font-weight="800" fill="#15803d" text-anchor="middle">EQUALITY</text><text x="270" y="65" font-family="sans-serif" font-size="14" font-weight="900" fill="#047857" text-anchor="middle">⟺</text><text x="400" y="65" font-family="sans-serif" font-size="12" font-weight="800" fill="#15803d" text-anchor="middle">JUSTICE</text></svg>`,
    questions: [
      {
        num: 1,
        title: "How did Nelson Mandela fight against the Apartheid system in South Africa? What are the key elements of a democratic government?",
        marks: 3,
        ans: "<strong>Anti-Apartheid Struggle & Democracy:</strong><br>• <strong>Nelson Mandela's Struggle:</strong> Mandela led the African National Congress (ANC) in a relentless multi-decade struggle against the brutal racial segregation of Apartheid. Despite enduring 27 years of solitary imprisonment, his moral resolve never broke, leading to the collapse of the white supremacist regime in 1994 and the birth of a multiracial democracy.<br>• <strong>Key Elements of Democracy:</strong><br>1. People's participation through free and fair periodic elections.<br>2. Peaceful resolution of conflicts through constitutional courts and dialogue.<br>3. Uncompromising commitment to <strong>Equality and Justice</strong> for all citizens.",
        rubric: [{ key: "Mandela's ANC leadership and 1994 victory", marks: "1.5 Marks" }, { key: "Three key elements: Participation, Conflict Resolution, Equality/Justice", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "Why do rivers become a source of conflict between states? Explain using the Cauvery river dispute.",
        marks: 3,
        ans: "<strong>Inter-State Water Conflicts:</strong><br>• Rivers flow across multiple states. When upstream states construct massive storage reservoirs to irrigate their own farmlands and cities, the downstream flow to neighboring states is drastically curtailed, creating severe water crises.<br>• <strong>Cauvery River Case:</strong> Karnataka constructed the Krishnarajasagara dam upstream to supply water to Bengaluru and irrigate Mandya district. Downstream in Tamil Nadu, the Mettur dam irrigates the fertile Cauvery delta. The Mettur dam can only fill if Karnataka releases water from upstream, leading to acute inter-state friction requiring central Supreme Court and tribunal adjudication.",
        rubric: [{ key: "Upstream vs downstream dynamic", marks: "1.5 Marks" }, { key: "Karnataka (Krishnarajasagara) vs Tamil Nadu (Mettur) details", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Environmental Federalism: Inter-State River Basin Management",
      question: "Climate change is altering monsoon precipitation, exacerbating river disputes across India. (a) Why can one state not claim absolute sovereign ownership over river water flowing through its territory? (b) What constitutional mechanism resolves inter-state river disputes in India?",
      answer: "<strong>(a) Riparian Rights:</strong> Under international and constitutional riparian law, flowing water is a shared natural commons; an upstream state cannot deprive downstream ecosystems and populations of historical equitable flow.<br><strong>(b) Constitutional Mechanism:</strong> Article 262 of the Indian Constitution empowers Parliament to enact the *Inter-State River Water Disputes Act*, establishing judicial tribunals whose awards have the force of Supreme Court decrees."
    }
  },
  {
    num: 21,
    id: "ch_csst_c5",
    subject: "Civics",
    book: "Social and Political Life - I",
    title: "Panchayati Raj",
    desc: "Gram Sabha (assembly of adult villagers) and Gram Panchayat (elected executive council). Sarpanch, Ward Panch, Panchayat Secretary (appointed by government). Sources of funds. Three tiers of Panchayati Raj: Gram Panchayat (village), Panchayat Samiti / Janpad (block), Zila Parishad (district).",
    concepts: [
      "Gram Sabha: General assembly of all adults (18+ years) living in the village who are registered voters. Acts as supreme watchdog over the Gram Panchayat.",
      "Gram Panchayat: The elected executive body consisting of Ward Panchs and the Sarpanch (President). Elected for a 5-year term.",
      "Panchayat Secretary: Non-elected government officer responsible for calling meetings and keeping records.",
      "Sources of Funds: Collection of taxes on houses and market places, government scheme grants from Zila Parishad, community donations.",
      "Three Tiers of Panchayati Raj: 1. Gram Panchayat (village level). 2. Panchayat Samiti / Block Panchayat (cluster of villages). 3. Zila Parishad (district level development planning)."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="140" height="60" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/><text x="100" y="45" font-family="sans-serif" font-size="11" font-weight="700" fill="#1d4ed8" text-anchor="middle">Gram Panchayat</text><text x="100" y="65" font-family="sans-serif" font-size="10" fill="#1e40af" text-anchor="middle">Village Level (Panch/Sarpanch)</text><rect x="200" y="20" width="140" height="60" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="270" y="45" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803d" text-anchor="middle">Panchayat Samiti</text><text x="270" y="65" font-family="sans-serif" font-size="10" fill="#166534" text-anchor="middle">Block Level (Janpad)</text><rect x="370" y="20" width="140" height="60" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/><text x="440" y="45" font-family="sans-serif" font-size="11" font-weight="700" fill="#b45309" text-anchor="middle">Zila Parishad</text><text x="440" y="65" font-family="sans-serif" font-size="10" fill="#92400e" text-anchor="middle">District Level Planning</text></svg>`,
    questions: [
      {
        num: 1,
        title: "What is the difference between a Gram Sabha and a Gram Panchayat? What is the role of the Gram Sabha in village governance?",
        marks: 3,
        ans: "<strong>Gram Sabha vs Gram Panchayat:</strong><br>• <strong>Gram Sabha:</strong> A permanent general legislative body comprising <em>all adult citizens</em> (aged 18+) residing in the village who have voting rights.<br>• <strong>Gram Panchayat:</strong> A small executive council of elected representatives (Ward Members and Sarpanch) chosen by the Gram Sabha for a 5-year term.<br>• <strong>Role of Gram Sabha:</strong> Acts as a democratic watchdog. It reviews the Panchayat's financial accounts, prevents the misuse of public money, approves poverty-alleviation lists (BPL), and ensures that representatives address urgent village problems like water scarcity.",
        rubric: [{ key: "Universal adult membership of Gram Sabha vs elected Gram Panchayat", marks: "1.5 Marks" }, { key: "Watchdog role over finances and BPL lists", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "Describe the three tiers of the Panchayati Raj system in India. What are the main sources of funds for a Gram Panchayat?",
        marks: 3,
        ans: "<strong>Three Tiers & Finances:</strong><br>• <strong>Three Levels of Panchayati Raj:</strong><br>1. <em>Gram Panchayat:</em> Village level local self-government.<br>2. <em>Panchayat Samiti (Block / Janpad Panchayat):</em> Middle tier coordinating a cluster of village panchayats.<br>3. <em>Zila Parishad:</em> District level governing council making developmental master plans for the entire district.<br>• <strong>Sources of Funds:</strong> Taxes on houses, shops, and cattle markets; government development grants routed through Zila Parishad and Janpad; and voluntary donations for community halls.",
        rubric: [{ key: "Village, Block, and District tiers identified", marks: "1.5 Marks" }, { key: "Three sources of Panchayat revenue", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Grassroots Water Conservation: Hardas Village Watershed Management",
      question: "The Gram Sabha of Hardas village faced severe groundwater depletion during summers. (a) What temporary solutions did villagers first propose? (b) What permanent ecological solution did they ultimately adopt through watershed development?",
      answer: "<strong>(a) Temporary Proposals:</strong> Deepening the two handpumps and cleaning the village well.<br><strong>(b) Permanent Watershed Solution:</strong> Planting trees on barren hills, constructing contour check-dams on seasonal rivulets, and building percolation pits to trap rainwater runoff, which recharges the subterranean water table sustainably."
    }
  },
  {
    num: 22,
    id: "ch_csst_c6",
    subject: "Civics",
    book: "Social and Political Life - I",
    title: "Rural Administration",
    desc: "Land dispute resolution, Police Station functioning (SHO, First Information Report - FIR), The Patwari (Lekhpal / Village Officer - land records, Khasra, map maintenance), Tehsildar & District Collector, Hindu Succession Amendment Act (2005) - daughters' equal property rights.",
    concepts: [
      "Rural Disputes: Boundary disputes between farmers over field markers (Bund).",
      "Police Station: Station House Officer (SHO). Every police station has a fixed geographical jurisdiction; crimes must be reported to the local SHO to file an FIR.",
      "Patwari (Lekhpal / Kanungo): Measures agricultural land, maintains and updates land records and maps, issues Khasra documents, and collects land revenue.",
      "Revenue Hierarchy: Village Patwari -> Revenue Inspector (Kanungo) -> Tehsildar -> Sub-Divisional Magistrate (SDM) -> District Collector.",
      "Hindu Succession Amendment Act (2005): Landmark law granting daughters, sons, and mothers equal shares in ancestral agricultural land."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="480" height="60" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/><text x="270" y="42" font-family="sans-serif" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">District Revenue Administrative Hierarchy</text><text x="270" y="65" font-family="sans-serif" font-size="10" fill="#1d4ed8" text-anchor="middle">Patwari (Village Records) -> Tehsildar (Hearing Disputes) -> District Collector</text></svg>`,
    questions: [
      {
        num: 1,
        title: "What is the work of a Patwari? What is a Khasra record?",
        marks: 3,
        ans: "<strong>Revenue Administration:</strong><br>• <strong>Work of Patwari:</strong><br>1. Measuring farmland using a long iron chain and updating village cadastral maps.<br>2. Maintaining land ownership registers and recording changes when land is bought, sold, or inherited.<br>3. Providing crop data to the government and collecting land revenue from farmers.<br>• <strong>Khasra Record:</strong> An official plot-wise land record register maintained by the Patwari indicating who owns which plot, total acreage, crops cultivated, fallow land, and irrigation facilities.",
        rubric: [{ key: "Three duties of Patwari", marks: "1.5 Marks" }, { key: "Explanation of Khasra register", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "How does the Hindu Succession Amendment Act (2005) benefit women in India?",
        marks: 3,
        ans: "<strong>Gender Justice in Inheritance:</strong><br>Prior to 2005, Hindu women were not entitled to a share in family agricultural land; after a father's death, ancestral land was divided exclusively among sons.<br>The <strong>Hindu Succession Amendment Act (2005)</strong> revolutionized property rights: daughters, sons, and mothers now receive <strong>strictly equal shares</strong> in agricultural land and family property. This economic security ensures that women have independent financial dignity and a secure shelter if faced with marital distress.",
        rubric: [{ key: "Prior exclusion of daughters from agricultural inheritance", marks: "1.5 Marks" }, { key: "Equal shares mandated for daughters and mothers, ensuring security", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Rule of Law in Crime Investigation: The FIR Mandate",
      question: "When a boundary feud erupted between Mohan and Raghu, Mohan was beaten up. (a) Why was Mohan advised to report only to the local area police station? (b) Why must an SHO register an FIR without delay when a cognizable offense is reported?",
      answer: "<strong>(a) Police Jurisdiction:</strong> Every police station has an official geographical jurisdiction; crimes occurring within that designated boundary must be registered there for legal jurisdiction in court trials.<br><strong>(b) Legal Necessity of FIR:</strong> A First Information Report (FIR) formally activates the machinery of criminal law; without it, police cannot legally initiate investigation, collect forensic evidence, or arrest perpetrators."
    }
  },
  {
    num: 23,
    id: "ch_csst_c7",
    subject: "Civics",
    book: "Social and Political Life - I",
    title: "Urban Administration",
    desc: "Municipal Corporation (Nagar Nigam) in big cities vs Municipal Council (Nagar Palika) in smaller towns. Ward Councillor, Committees, Municipal Commissioner (administrative head appointed by state). Garbage collection, Sub-contracting, Surat Plague (1994) public health lesson.",
    concepts: [
      "Municipal Corporation: The civic body in large cities (Delhi, Mumbai, Chennai) providing clean water, electricity, hospitals, roads, garbage disposal, and schools.",
      "Ward Councillors: The city is divided into wards; residents elect a Ward Councillor. Councillors form committees to make policy decisions and budgets.",
      "Administrative Staff: The Municipal Commissioner and administrative officers are appointed by the state government to execute the decisions of councillors.",
      "Sub-contracting: Municipal corporations hire private contractors to collect garbage to reduce operational costs.",
      "Surat Plague Case Study (1994): Surat suffered a deadly pneumonic plague due to accumulated rotting garbage; following the crisis, Surat overhauled its sanitation systems to become one of India's cleanest cities."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="480" height="60" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="270" y="42" font-family="sans-serif" font-size="12" font-weight="700" fill="#78350f" text-anchor="middle">Urban Municipal Governance Structure</text><text x="140" y="65" font-family="sans-serif" font-size="11" fill="#b45309" text-anchor="middle">Elected Ward Councillors (Policy)</text><text x="400" y="65" font-family="sans-serif" font-size="11" fill="#b45309" text-anchor="middle">Commissioner & Engineers (Execution)</text></svg>`,
    questions: [
      {
        num: 1,
        title: "What are the key tasks performed by a Municipal Corporation? What is the difference between a Ward Councillor and an Administrative Staff?",
        marks: 3,
        ans: "<strong>Urban Municipal Functions:</strong><br>• <strong>Key Tasks:</strong> Garbage collection and disposal, street lighting, safe water supply, running schools and municipal dispensaries, controlling communicable diseases, and registering births and deaths.<br>• <strong>Councillor vs Administrative Staff:</strong><br>1. <em>Ward Councillors:</em> Elected representatives chosen by city residents in ward elections. They sit on council committees and make policy decisions and budget allocations.<br>2. <em>Administrative Staff:</em> Salaried civil servants (like the Municipal Commissioner and health inspectors) appointed by the government to execute the policies decided by councillors.",
        rubric: [{ key: "Four civic functions of municipal corporation", marks: "1.5 Marks" }, { key: "Elected policymaking councillor vs appointed executive staff", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "What is sub-contracting in municipal garbage management? What lesson did Indian cities learn from the Surat plague of 1994?",
        marks: 3,
        ans: "<strong>Urban Sanitation Reform:</strong><br>• <strong>Sub-contracting:</strong> The practice where the Municipal Corporation contracts private companies to collect and haul garbage instead of deploying government municipal workers, aiming to reduce municipal wage overheads.<br>• <strong>Surat Plague Lesson:</strong> In 1994, Surat was one of India's filthiest cities with uncollected heaps of rotting garbage. Heavy rains clogged drains, triggering an outbreak of deadly pneumonic plague that claimed dozens of lives and caused mass panic. The crisis proved that neglecting public sanitation can trigger lethal epidemics. Surat completely reformed its municipal operations, instituting door-to-door waste collection and strict penalties, becoming one of India's cleanest model cities.",
        rubric: [{ key: "Definition of private sub-contracting", marks: "1.5 Marks" }, { key: "Surat plague cause and comprehensive sanitary transformation", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Solid Waste Management & Citizen Protest: Gangabai's Community Action",
      question: "When garbage lay uncollected for weeks in her locality, Gangabai organized local women and marched to the Ward Councillor's office. (a) Why was collective community protest necessary? (b) How does decentralized civic activism hold municipal officials accountable?",
      answer: "<strong>(a) Community Protest:</strong> Individual complaints were ignored by sanitation inspectors; collective peaceful demonstration by hundreds of neighborhood women created overwhelming public pressure that forced the Ward Councillor to accompany them directly to the Municipal Commissioner.<br><strong>(b) Civic Accountability:</strong> Active citizen vigilance reminds public servants that municipal services are a paid civic right funded by property taxes, compelling responsiveness."
    }
  },
  {
    num: 24,
    id: "ch_csst_c8",
    subject: "Civics",
    book: "Social and Political Life - I",
    title: "Rural and Urban Livelihoods",
    desc: "Rural livelihoods in Kalpattu (agricultural labourers, small farmers, large landowners, debt cycle), Fishing village of Thizhamangalam, Urban street vendors, Self-employed, Factory garment workers (call centres, casual labour, permanent jobs with EPF and medical benefits).",
    concepts: [
      "Rural Livelihoods: 1. Landless Agricultural Labourers (Thulasi: works on Ramalingam's paddy fields for low daily wages, faces 4 months of seasonal unemployment). 2. Small Farmers (Sekar: owns 2 acres, heavily indebted to moneylenders). 3. Large Farmers (Ramalingam: owns 20 acres, rice mill, fertilizer shop).",
      "Debt Trap: Farmers take loans from local traders for seeds and fertilizers; crop failure forces them into a vicious debt cycle, compelling suicide or distress land sales.",
      "Urban Livelihoods: 1. Street Vendors (Bachchu Manjhi: rickshaw puller). 2. Small Shopkeepers. 3. Casual Factory Workers (Nirmala in export garment factory: long hours, no job security, no benefits). 4. Permanent Salaried Employees (Sudha: marketing manager with medical leave, pension fund, and job security).",
      "Vending Zones: Recognizing street vending as a legitimate right to livelihood."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="220" height="60" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="140" y="45" font-family="sans-serif" font-size="12" font-weight="700" fill="#78350f" text-anchor="middle">Rural: Seasonal Agricultural Cycle</text><text x="140" y="65" font-family="sans-serif" font-size="10" fill="#b45309" text-anchor="middle">Planting -> Weeding -> Harvest -> 4 Months Lean</text><rect x="290" y="20" width="220" height="60" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/><text x="400" y="45" font-family="sans-serif" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">Urban: Casual vs Permanent Jobs</text><text x="400" y="65" font-family="sans-serif" font-size="10" fill="#1d4ed8" text-anchor="middle">Daily wage insecure vs EPF/Medical security</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Why did Thulasi in Kalpattu village have to depend on Ramalingam for work? Why do small farmers fall into the debt trap?",
        marks: 3,
        ans: "<strong>Rural Agrarian Realities:</strong><br>• <strong>Thulasi's Dependence:</strong> Thulasi is a landless agricultural labourer. She has no land of her own and depends completely on large landowners like Ramalingam to hire her for transplanting, weeding, and harvesting paddy. Even though wages are modest (₹40 a day), she works for him because he calls her reliably year after year.<br>• <strong>Farmer Debt Trap:</strong> Small farmers like Sekar must borrow money from moneylenders or traders to buy high-cost seeds, fertilizers, and pesticides. To get loans, they are forced to sell their harvest to the trader at below-market rates. If the monsoon fails or pests attack crops, they cannot repay the loan. To survive, they borrow more money, spiraling into unmanageable debt.",
        rubric: [{ key: "Thulasi's landlessness and seasonal employment", marks: "1.5 Marks" }, { key: "Moneylender crop inputs and distress selling debt cycle", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "Compare the working conditions of Nirmala (casual garment worker) with Sudha (permanent marketing manager).",
        marks: 3,
        ans: "<strong>Casual vs Permanent Urban Employment:</strong><br>• <strong>Nirmala (Casual Labourer):</strong> Works in a garment export factory. She works gruelling 12-hour shifts during peak export season for minimal daily wages with no overtime guarantee. Her job is strictly casual; during off-season, she is fired with zero severance pay. She gets no paid sick leave, medical insurance, or pension.<br>• <strong>Sudha (Permanent Salaried Employee):</strong> Employed as a company marketing manager. She receives a regular monthly salary, paid annual holidays, healthcare benefits, and provident fund (EPF) deductions that accumulate savings with interest for retirement. Her job is secure and cannot be arbitrarily terminated.",
        rubric: [{ key: "Nirmala's precarious long hours, lack of benefits, job insecurity", marks: "1.5 Marks" }, { key: "Sudha's regular salary, EPF, medical cover, and job security", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Informal Economy & Urban Livelihood Rights: The Street Vendors Act",
      question: "Millions of migrants survive by vending street food and small commodities in metropolitan cities. (a) Why were street hawkers traditionally harassed by police and municipal staff? (b) How did the Street Vendors (Protection of Livelihood) Act of 2014 provide legal recognition to hawkers?",
      answer: "<strong>(a) Historical Harassment:</strong> Vendors were treated as illegal encroachers obstructing vehicular traffic and pedestrian walkways, subjecting them to arbitrary confiscation of goods and bribes.<br><strong>(b) Legal Protection:</strong> The 2014 Act recognized street vending as a fundamental constitutional right to livelihood, mandating town vending committees, designated non-vending and vending zones, and biometric identity vending certificates to protect hawkers from arbitrary eviction."
    }
  }
];

// Write file
const outPath = path.join(__dirname, '..', 'data-c6-classic', 'sstClassicData.js');
const fileContent = `// NCERT Class 6 Social Science Classic (24 Chapters: History 10 + Geography 6 + Civics 8) Data\nmodule.exports = { sstClassicChapters: ${JSON.stringify(sstClassicChapters, null, 2)} };\n`;
fs.writeFileSync(outPath, fileContent, 'utf-8');
console.log(`Successfully generated ${sstClassicChapters.length} Social Science Classic Chapters in:`, outPath);
