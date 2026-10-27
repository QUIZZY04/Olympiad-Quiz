// scripts/builders/expand-c9-sst.js
// Inject 18 verbatim textbook questions to achieve 100% physical NCERT coverage in Class 9 Social Science

const fs = require('fs');
const path = require('path');

const chDir = path.join(__dirname, '..', '..', 'chapters-c9sst');

const additions = {
  7: [
    {
      id: 'ch7-q5',
      num: 'Question 5',
      marks: '5 Marks (100-120 words)',
      text: 'Give an account of the Northern Plains of India, detailing their formation, relief features (Bhabar, Terai, Bhangar, Khadar), and economic significance.',
      answer: `<p>The <strong>Northern Plains of India</strong> have been formed by the interplay of the three major Himalayan river systems—the <strong>Indus, the Ganga, and the Brahmaputra</strong> along with their tributaries:</p>
<ol>
  <li><strong>Formation & Dimensions:</strong> The plains were formed over millions of years by the continuous deposition of alluvium in a vast geological basin (foredeep) lying at the foothills of the rising Himalayas. It spreads over an area of <strong>7 lakh sq. km</strong>, with a length of about 2400 km and a breadth of 240 to 320 km.</li>
  <li><strong>Relief / Morphological Features:</strong>
    <ul>
      <li><strong>Bhabar:</strong> A narrow belt of 8 to 16 km width parallel to the slope of the Shiwaliks, consisting of pebble deposits where streams disappear underground.</li>
      <li><strong>Terai:</strong> South of Bhabar, where streams re-emerge creating a wet, swampy, marshy region with dense forests and rich wildlife (e.g., Dudhwa National Park).</li>
      <li><strong>Bhangar:</strong> The largest part of the plains formed of older alluvium, lying above the floodplains with terrace-like features and calcareous deposits (<em>kankar</em>).</li>
      <li><strong>Khadar:</strong> Newer, younger alluvium deposited on the flood plains renewed almost every year, making it exceedingly fertile for intensive cultivation.</li>
    </ul>
  </li>
  <li><strong>Economic Significance:</strong> With a rich soil cover, abundant water supply, and favourable climate, it is the agriculturally most productive and densely populated region (granary of India).</li>
</ol>`,
      marking: [
        { key: 'River origin and formation in foredeep (Indus, Ganga, Brahmaputra)', marks: '1.5 Marks' },
        { key: 'Accurate distinction among Bhabar, Terai, Bhangar, Khadar', marks: '2.5 Marks' },
        { key: 'Economic significance as granary of India and population core', marks: '1.0 Mark' }
      ]
    },
    {
      id: 'ch7-q6',
      num: 'Question 6',
      marks: '4 Marks (60-80 words)',
      text: 'Write short explanatory notes on: (a) The Central Highlands, (b) The Island groups of India.',
      answer: `<p><strong>(a) The Central Highlands:</strong> The part of the Peninsular Plateau lying to the north of the Narmada River, covering a major area of the Malwa Plateau, is known as the Central Highlands. It is bounded by the Vindhyan range on the south and the Aravallis on the northwest. The rivers draining this region—Chambal, Sind, Betwa, and Ken—flow from southwest to northeast. Its eastward extensions are locally known as <em>Bundelkhand</em> and <em>Baghelkhand</em>, while the <em>Chota Nagpur Plateau</em> marks the further eastward extension rich in minerals.</p>
<p><strong>(b) The Island Groups of India:</strong></p>
<ul>
  <li><strong>Lakshadweep Islands:</strong> Located close to the Malabar coast of Kerala in the Arabian Sea. It consists of small coral islands covering an area of barely 32 sq. km with Kavaratti as administrative headquarters. Pitti Island has an uninhabited bird sanctuary.</li>
  <li><strong>Andaman and Nicobar Islands:</strong> An elongated chain of islands located in the Bay of Bengal, running from north to south. They are bigger, more numerous, and represent elevated portions of submarine mountains. They lie close to the equator, experience equatorial climate, and have thick forest cover. Barren Island houses India\'s only active volcano.</li>
</ul>`,
      marking: [
        { key: 'Central Highlands location, boundaries, rivers, extensions', marks: '2.0 Marks' },
        { key: 'Comparison of Lakshadweep (coral) and Andaman & Nicobar (volcanic/submarine)', marks: '2.0 Marks' }
      ]
    }
  ],

  8: [
    {
      id: 'ch8-q4',
      num: 'Question 4',
      marks: '4 Marks (60-80 words)',
      text: 'Describe the role and importance of lakes in the human economy and natural ecosystem.',
      answer: `<p>Lakes are of immense ecological, aesthetic, and economic value to human civilization:</p>
<ol>
  <li><strong>Regulation of River Flow:</strong> During periods of heavy torrential rain, lakes help prevent catastrophic downstream floods. During dry seasons, they maintain an even flow of water in river channels.</li>
  <li><strong>Hydel Power Generation:</strong> Man-made reservoir lakes created behind river dams (e.g., Guru Gobind Sagar on Bhakra Nangal) are utilized for generating hydroelectric power.</li>
  <li><strong>Climate Moderation:</strong> Large water bodies moderate the local microclimate of surrounding regions.</li>
  <li><strong>Ecological Balance:</strong> Lakes sustain diverse aquatic biodiversity, provide sanctuary for migratory birds (e.g., Keoladeo National Park, Chilika Lake), and support inland fishery livelihoods.</li>
  <li><strong>Tourism and Recreation:</strong> Natural freshwater lakes like Dal Lake, Nainital, and Loktak Lake promote recreation, water sports, and tourism revenue.</li>
</ol>`,
      marking: [
        { key: 'Flood mitigation and dry season flow regulation', marks: '1.5 Marks' },
        { key: 'Hydel power generation and ecosystem/microclimate moderation', marks: '1.5 Marks' },
        { key: 'Fisheries, tourism, and recreational importance', marks: '1.0 Mark' }
      ]
    },
    {
      id: 'ch8-q5',
      num: 'Question 5',
      marks: '4 Marks (60-80 words)',
      text: 'What are the major causes of river water pollution in India? Outline the measures initiated to conserve river systems.',
      answer: `<p><strong>Causes of River Pollution:</strong></p>
<ul>
  <li><strong>Untreated Municipal Sewage:</strong> Millions of litres of untreated domestic sewage from towns and cities are discharged directly into rivers, increasing biological oxygen demand (BOD).</li>
  <li><strong>Industrial Effluents:</strong> Chemical, textile, leather, and paper industries dump toxic heavy metals and toxic chemicals without prior treatment.</li>
  <li><strong>Agricultural Runoff:</strong> Excessive use of chemical fertilizers, pesticides, and weedicides leaches into water bodies causing severe eutrophication.</li>
  <li><strong>Religious and Cultural Practices:</strong> Immersion of non-biodegradable idols painted with synthetic chemicals, ashes, and disposal of corpses pollute sacred rivers like Ganga and Yamuna.</li>
</ul>
<p><strong>Conservation Measures:</strong> The government launched the <strong>National River Conservation Plan (NRCP)</strong> and <strong>Namami Gange Mission</strong>. Measures include construction of Sewage Treatment Plants (STPs), industrial effluent monitoring, riverfront development, afforestation along river basins, and public awareness campaigns.</p>`,
      marking: [
        { key: 'Four major causes of river pollution (sewage, industrial, agricultural, cultural)', marks: '2.0 Marks' },
        { key: 'Conservation programmes (NRCP, Namami Gange, STPs, effluent treatment)', marks: '2.0 Marks' }
      ]
    }
  ],

  9: [
    {
      id: 'ch9-q5',
      num: 'Question 5',
      marks: '4 Marks (60-80 words)',
      text: 'Describe the regional variations in the climatic conditions of India with suitable examples regarding temperature and precipitation.',
      answer: `<p>Despite the broad monsoon unity, India exhibits sharp regional climatic contrasts:</p>
<ol>
  <li><strong>Variations in Temperature:</strong>
    <ul>
      <li>In summer, the mercury touches <strong>50°C</strong> or more in parts of western Rajasthan, while it may be around <strong>20°C</strong> in Pahalgam (Jammu & Kashmir).</li>
      <li>On a winter night, temperature at Drass (Ladakh) may plunge to <strong>&#8722;45°C</strong>, whereas Thiruvananthapuram (Kerala) enjoys a pleasant <strong>22°C</strong>.</li>
      <li>The diurnal range of temperature in the Thar Desert can be 30°C to 40°C in a single day, whereas coastal areas like Kerala or Andaman experience almost equal day and night temperatures.</li>
    </ul>
  </li>
  <li><strong>Variations in Precipitation:</strong>
    <ul>
      <li>Precipitation is mostly in the form of snowfall in the upper reaches of the Himalayas, while it falls as rain over the rest of the country.</li>
      <li>The annual precipitation varies from over <strong>400 cm in Mawsynram (Meghalaya)</strong> to less than <strong>10 cm in Ladakh and western Rajasthan</strong>.</li>
      <li>Most parts receive rainfall from June to September, but the Coromandel coast (Tamil Nadu) receives bulk of its rain during October and November (retreating monsoon).</li>
    </ul>
  </li>
</ol>`,
      marking: [
        { key: 'Temperature extremes (Rajasthan vs Pahalgam, Drass vs Thiruvananthapuram)', marks: '2.0 Marks' },
        { key: 'Precipitation extremes (Mawsynram vs Ladakh/Thar, snowfall vs rainfall)', marks: '2.0 Marks' }
      ]
    }
  ],

  10: [
    {
      id: 'ch10-q5',
      num: 'Question 5',
      marks: '4 Marks (60-80 words)',
      text: 'What are the major factors that influence the distribution and diversity of flora and fauna in India?',
      answer: `<p>The immense biodiversity of plant and animal life in India is determined by two broad sets of factors: <strong>Relief</strong> and <strong>Climate</strong>:</p>
<ol>
  <li><strong>Relief Factors:</strong>
    <ul>
      <li><strong>Land:</strong> The nature of land directly and indirectly affects vegetation. Fertile level land is devoted to agriculture, whereas undulating and rough terrains support woodlands, grasslands, and wildlife shelter.</li>
      <li><strong>Soil:</strong> Different types of soils support different vegetation: sandy desert soils support cactus and thorny bushes; wet, marshy, deltaic soils support mangroves; hill slopes with deep soil support coniferous trees.</li>
    </ul>
  </li>
  <li><strong>Climatic Factors:</strong>
    <ul>
      <li><strong>Temperature and Humidity:</strong> Character and extent of vegetation are determined by temperature along with humidity in the air. On the slopes of the Himalayas above 915 m, fall in temperature changes vegetation from tropical to subtropical, temperate, and alpine.</li>
      <li><strong>Photoperiod (Sunlight):</strong> Variation in duration of sunlight due to latitude, altitude, and season causes trees to grow faster in summer.</li>
      <li><strong>Precipitation:</strong> Areas of heavy rainfall (Western Ghats, Northeast) have dense evergreen forests compared to regions with scanty rainfall.</li>
    </ul>
  </li>
</ol>`,
      marking: [
        { key: 'Relief factors: Land topography and soil variations', marks: '2.0 Marks' },
        { key: 'Climatic factors: Temperature, photoperiod, and precipitation', marks: '2.0 Marks' }
      ]
    }
  ],

  11: [
    {
      id: 'ch11-q4',
      num: 'Question 4',
      marks: '4 Marks (60-80 words)',
      text: 'What is meant by the occupational structure of a population? Distinguish between primary, secondary, and tertiary sectors with reference to India.',
      answer: `<p>The distribution of the population according to different types of occupation is referred to as the <strong>Occupational Structure</strong>. Occupations are categorized into three broad sectors:</p>
<ol>
  <li><strong>Primary Sector:</strong> Includes agriculture, animal husbandry, forestry, fishing, mining, and quarrying. In developing nations like India, a high proportion (nearly 50-55%) is engaged in the primary sector, reflecting agrarian dependence.</li>
  <li><strong>Secondary Sector:</strong> Includes manufacturing industry, building and construction work. In India, around 15-20% of workers are employed in this sector.</li>
  <li><strong>Tertiary Sector:</strong> Includes transport, communications, commerce, administration, banking, education, and other services. Around 25-30% of India\'s workforce is in this sector. Developed nations have a high proportion of people in secondary and tertiary sectors.</li>
</ol>`,
      marking: [
        { key: 'Definition of occupational structure', marks: '1.0 Mark' },
        { key: 'Classification and Indian proportion in Primary, Secondary, and Tertiary', marks: '3.0 Marks' }
      ]
    },
    {
      id: 'ch11-q5',
      num: 'Question 5',
      marks: '4 Marks (60-80 words)',
      text: 'Highlight the significant features of the National Population Policy (NPP) 2000 in India.',
      answer: `<p>The <strong>National Population Policy (NPP) 2000</strong> provided a policy framework for improving reproductive and child health and stabilizing population growth:</p>
<ul>
  <li><strong>Free and Compulsory Schooling:</strong> Imparting free and compulsory school education up to 14 years of age.</li>
  <li><strong>Reduction of Infant Mortality:</strong> Reducing Infant Mortality Rate (IMR) to below 30 per 1000 live births.</li>
  <li><strong>Universal Immunisation:</strong> Achieving universal immunisation of children against all vaccine-preventable diseases.</li>
  <li><strong>Delayed Marriage for Girls:</strong> Promoting delayed marriage for girls (strictly above 18 years, preferably after 20).</li>
  <li><strong>Focus on Adolescents:</strong> Identifying adolescents as a key vulnerable group requiring nutritional supplements, protection against unwanted pregnancies and STDs/HIV, and access to reproductive counselling.</li>
  <li><strong>Making Family Welfare People-Centred:</strong> Encouraging small family norms through voluntary, informed choice without coercion.</li>
</ul>`,
      marking: [
        { key: 'Education and IMR reduction targets', marks: '1.5 Marks' },
        { key: 'Delayed marriage and universal immunization', marks: '1.5 Marks' },
        { key: 'Adolescent health and voluntary family planning focus', marks: '1.0 Mark' }
      ]
    }
  ],

  12: [
    {
      id: 'ch12-q3',
      num: 'Question 3',
      marks: '5 Marks (100-120 words)',
      text: 'What are the major merits of a democratic form of government? State five compelling arguments in favour of democracy.',
      answer: `<p>Democracy is considered the finest form of government because of several institutional advantages:</p>
<ol>
  <li><strong>Accountability to the People:</strong> A democratic government is a more accountable government. Rulers must respond to the needs and grievances of citizens, failing which they are voted out in elections.</li>
  <li><strong>Improves the Quality of Decision-Making:</strong> Democracy is based on consultation, discussion, and debate in parliaments. When many minds sit together, potential mistakes and rash judgments are discovered and corrected.</li>
  <li><strong>Provides a Method to Deal with Differences and Conflicts:</strong> In a diverse country like India with diverse languages, religions, and castes, conflicting interests are inevitable. Democracy provides peaceful, constitutional mechanisms where no group is a permanent winner or permanent loser.</li>
  <li><strong>Enhances the Dignity of Citizens:</strong> Democracy is based on the principle of political equality—the poorest and least educated citizen possesses the exact same voting power and constitutional rights as the richest and most educated.</li>
  <li><strong>Allows Room to Correct Mistakes:</strong> Democratic rulers cannot hide their blunders. Public debate ensures mistakes are exposed, and citizens can compel rulers to change policies or change the rulers themselves.</li>
</ol>`,
      marking: [
        { key: 'Accountability and responsive governance', marks: '1.0 Mark' },
        { key: 'Quality of consultative decision making', marks: '1.0 Mark' },
        { key: 'Peaceful conflict resolution in diverse societies', marks: '1.0 Mark' },
        { key: 'Enhancing citizen dignity through political equality', marks: '1.0 Mark' },
        { key: 'Mechanism for correcting own mistakes', marks: '1.0 Mark' }
      ]
    },
    {
      id: 'ch12-q4',
      num: 'Question 4',
      marks: '4 Marks (60-80 words)',
      text: 'Explain the broader meaning of democracy beyond a mere form of government.',
      answer: `<p>In everyday discourse, we view democracy as a form of government where citizens elect representatives. However, in its broader philosophical and societal sense, democracy is a <strong>universal principle of decision-making</strong>:</p>
<ul>
  <li><strong>Democratic Decision-Making:</strong> A democratic decision involves consultation with and consent of all those who are affected by that decision. Those who are not powerful have the same say in taking the decision as those who are powerful.</li>
  <li><strong>Application to Family & Classroom:</strong> A family is democratic when parents and children sit together and arrive at common decisions without authoritarian dictate. A classroom is democratic when teachers allow students to ask questions freely.</li>
  <li><strong>Democracy as an Ideal:</strong> No country in the world is a perfect democracy; rather, democracy provides an ideal standard that all nations must continually strive towards—ensuring no citizen goes to bed hungry, and every citizen enjoys equal voice.</li>
</ul>`,
      marking: [
        { key: 'Democracy as principle of consultation and consent', marks: '1.5 Marks' },
        { key: 'Application in daily institutions (family, school, workplace)', marks: '1.5 Marks' },
        { key: 'Democracy as an ongoing aspirational ideal', marks: '1.0 Mark' }
      ]
    }
  ],

  13: [
    {
      id: 'ch13-q4',
      num: 'Question 4',
      marks: '5 Marks (100-120 words)',
      text: 'Explain the major factors that contributed to the making of the Indian Constitution.',
      answer: `<p>The drafting of the Constitution of India was aided by several historical, political, and institutional factors:</p>
<ol>
  <li><strong>Consensus during the National Movement:</strong> Unlike many newly independent countries, India\'s freedom struggle was not merely an anti-colonial movement, but a struggle to transform and democratize society. Basic values like universal adult franchise, right to freedom and equality, and minority protection had already gained national consensus through the <em>Motilal Nehru Draft (1928)</em> and the <em>Karachi Resolution of INC (1931)</em>.</li>
  <li><strong>Familiarity with Colonial Institutions:</strong> The British rule introduced rudimentary legislative institutions under the Government of India Acts (especially 1935). Indian leaders had gained valuable parliamentary experience working in provincial legislatures.</li>
  <li><strong>Selective Learning from World Constitutions:</strong> Our leaders drew inspiration from the best practices across the world without blind copying: Parliamentary democracy and Rule of Law from Britain, Bill of Rights from the US Constitution, Directive Principles of State Policy from Ireland, and Ideals of Liberty, Equality, and Fraternity from the French Revolution.</li>
  <li><strong>Representative Character of the Constituent Assembly:</strong> Elected by provincial legislatures, the Constituent Assembly represented all regions, religions, languages, and social classes. In 299 members, statesmen like Dr. B.R. Ambedkar, Jawaharlal Nehru, and Sardar Patel deliberated for 114 days over three years.</li>
</ol>`,
      marking: [
        { key: 'Consensus from freedom struggle (Nehru Draft 1928, Karachi 1931)', marks: '1.5 Marks' },
        { key: 'Colonial legislative experience (Govt of India Act 1935)', marks: '1.0 Mark' },
        { key: 'Synthesis of global constitutional ideals (US, UK, France, Ireland)', marks: '1.5 Marks' },
        { key: 'Constituent Assembly deliberations and leadership', marks: '1.0 Mark' }
      ]
    }
  ],

  14: [
    {
      id: 'ch14-q4',
      num: 'Question 4',
      marks: '5 Marks (100-120 words)',
      text: 'Explain the role and independent powers of the Election Commission of India (ECI) that ensure free and fair elections.',
      answer: `<p>In India, elections are conducted by an autonomous constitutional body—the <strong>Election Commission of India (ECI)</strong>, which enjoys an independence similar to the Judiciary:</p>
<ol>
  <li><strong>Constitutional Autonomy:</strong> The Chief Election Commissioner (CEC) is appointed by the President of India. Once appointed, the CEC is not answerable to the government and cannot be removed except through a rigorous parliamentary impeachment process.</li>
  <li><strong>Control Over Election Schedule and Execution:</strong> ECI takes decisions on every aspect of conduct and control of elections, from the announcement of dates to the declaration of results.</li>
  <li><strong>Enforcement of Model Code of Conduct (MCC):</strong> It enforces the MCC and punishes any candidate or political party that bribes or threatens voters, appeals to religion or caste, or uses government vehicles and staff for campaigning.</li>
  <li><strong>Control Over Government Machinery:</strong> During the election period, government officers and police deployed for election duty function under the disciplinary control of the ECI, not the ruling political executive.</li>
  <li><strong>Power to Order Repoll:</strong> If the Election Commission determines that polling at certain booths or an entire constituency was not fair due to rigging or EVM tampering, it possesses the constitutional power to countermand and order a repoll.</li>
</ol>`,
      marking: [
        { key: 'Constitutional status and security of tenure of CEC', marks: '1.0 Mark' },
        { key: 'Comprehensive election management and schedule control', marks: '1.0 Mark' },
        { key: 'Model Code of Conduct enforcement and curbing malpractices', marks: '1.0 Mark' },
        { key: 'Command over government officials on poll duty', marks: '1.0 Mark' },
        { key: 'Power to order repolls and cancel rigged elections', marks: '1.0 Mark' }
      ]
    }
  ],

  15: [
    {
      id: 'ch15-q4',
      num: 'Question 4',
      marks: '5 Marks (100-120 words)',
      text: 'Describe the powers, functions, and constitutional position of the Prime Minister of India.',
      answer: `<p>The <strong>Prime Minister</strong> is the most important political institution in India, serving as the Head of Government:</p>
<ol>
  <li><strong>Leader of the Majority Party and Appointment:</strong> The President appoints the leader of the majority party or coalition in the Lok Sabha as Prime Minister. The PM remains in office as long as he/she commands the confidence of the Lok Sabha.</li>
  <li><strong>Formation of Council of Ministers:</strong> The President appoints all other ministers on the advice of the Prime Minister. The PM is free to choose ministers, allocate portfolios, and dismiss any minister.</li>
  <li><strong>Chairs Cabinet Meetings:</strong> The PM presides over Cabinet meetings, coordinates the work of different ministries, settles disputes between departments, and exercises general supervision over all ministries.</li>
  <li><strong>Link Between Cabinet and President:</strong> The PM communicates all decisions of the Council of Ministers relating to the administration of the affairs of the Union and proposals for legislation to the President.</li>
  <li><strong>Voice of the Nation:</strong> The Prime Minister represents the country at international summits, leads policy announcements in Parliament, and shapes national foreign and economic policies.</li>
</ol>`,
      marking: [
        { key: 'Appointment by President and command of Lok Sabha majority', marks: '1.0 Mark' },
        { key: 'Selection and distribution of ministerial portfolios', marks: '1.0 Mark' },
        { key: 'Chairs Cabinet meetings and coordinates union ministries', marks: '1.0 Mark' },
        { key: 'Channel of communication with President', marks: '1.0 Mark' },
        { key: 'National and global leadership role', marks: '1.0 Mark' }
      ]
    }
  ],

  16: [
    {
      id: 'ch16-q4',
      num: 'Question 4',
      marks: '4 Marks (60-80 words)',
      text: 'Why did Dr. B.R. Ambedkar describe the Right to Constitutional Remedies (Article 32) as the \'Heart and Soul of the Constitution\'?',
      answer: `<p>Dr. B.R. Ambedkar called the <strong>Right to Constitutional Remedies (Article 32)</strong> the \'heart and soul of the Constitution\' for the following profound reasons:</p>
<ol>
  <li><strong>Guarantor of all Fundamental Rights:</strong> Rights on paper are useless without a legal mechanism to enforce them. Article 32 makes the Fundamental Rights justiciable, guaranteeing every citizen the right to directly approach the Supreme Court (or High Court under Article 226) if any of their rights are violated by the state or individuals.</li>
  <li><strong>Power of Judicial Writs:</strong> The courts can issue powerful constitutional writs to enforce rights:
    <ul>
      <li><em>Habeas Corpus</em> (against illegal detention),</li>
      <li><em>Mandamus</em> (commanding a public official to perform legal duty),</li>
      <li><em>Prohibition & Certiorari</em> (restraining inferior courts), and</li>
      <li><em>Quo-Warranto</em> (challenging illegal usurping of public office).</li>
    </ul>
  </li>
  <li><strong>Public Interest Litigation (PIL):</strong> Under this provision, courts developed PIL, allowing any citizen or social group to approach courts on behalf of the poor and oppressed whose rights are violated.</li>
</ol>`,
      marking: [
        { key: 'Enforcement and justiciability of all fundamental rights', marks: '1.5 Marks' },
        { key: 'Prerogative writs issued by Supreme Court / High Courts', marks: '1.5 Marks' },
        { key: 'Expansion via Public Interest Litigation (PIL)', marks: '1.0 Mark' }
      ]
    }
  ],

  17: [
    {
      id: 'ch17-q4',
      num: 'Question 4',
      marks: '4 Marks (60-80 words)',
      text: 'Describe the various non-farm production activities taking place in village Palampur. What measures can be taken to expand them?',
      answer: `<p>In Palampur, only 25% of the working population is engaged in non-farm activities:</p>
<ol>
  <li><strong>Non-Farm Activities in Palampur:</strong>
    <ul>
      <li><strong>Dairy Farming:</strong> Many families feed buffaloes on jowar and bajra and sell milk in the nearby large village of Raiganj.</li>
      <li><strong>Small-Scale Manufacturing:</strong> Less than 50 people engage in simple manufacturing (e.g., Mishrilal crushing sugarcane with a mechanical machine to produce and sell jaggery).</li>
      <li><strong>Shopkeeping:</strong> Small traders buy goods (rice, wheat, soap, toothpaste, stationery) from wholesale markets in cities and sell them in village general stores.</li>
      <li><strong>Transport Sector:</strong> Rickshawallahs, tongawallahs, jeep, tractor, and truck drivers transport goods and people between Palampur and Raiganj for a fare.</li>
    </ul>
  </li>
  <li><strong>Measures to Expand Non-Farm Activities:</strong> Providing institutional bank loans at low interest rates, establishing skill training centres, improving all-weather road connectivity, and ensuring uninterrupted rural electricity supply.</li>
</ol>`,
      marking: [
        { key: 'Detailed description of 4 non-farm activities (dairy, jaggery, trade, transport)', marks: '2.0 Marks' },
        { key: 'Measures to promote non-farm rural employment (credit, infrastructure, training)', marks: '2.0 Marks' }
      ]
    }
  ],

  18: [
    {
      id: 'ch18-q4',
      num: 'Question 4',
      marks: '4 Marks (60-80 words)',
      text: 'Distinguish between economic activities and non-economic activities. How are market activities different from non-market activities?',
      answer: `<p><strong>1. Economic vs Non-Economic Activities:</strong></p>
<ul>
  <li><strong>Economic Activities:</strong> Activities performed with the objective of earning money or livelihood that add value to the national income (e.g., a teacher teaching in school, farmer selling crops, doctor treating patients for a fee).</li>
  <li><strong>Non-Economic Activities:</strong> Activities performed out of love, care, duty, or social obligation without any financial remuneration (e.g., a mother cooking food for her family, volunteering in community service).</li>
</ul>
<p><strong>2. Market Activities vs Non-Market Activities:</strong></p>
<ul>
  <li><strong>Market Activities:</strong> Involve remuneration to anyone who performs the activity for pay or profit. This includes production of goods and services, including government service.</li>
  <li><strong>Non-Market Activities:</strong> Production of goods and services for <strong>self-consumption</strong>. This includes processing of primary products and own-account production of fixed assets (e.g., subsistence farming where crops are consumed by farmer\'s family).</li>
</ul>`,
      marking: [
        { key: 'Clear contrast between economic and non-economic activities', marks: '2.0 Marks' },
        { key: 'Distinction between market activities (for pay/profit) and non-market (self-consumption)', marks: '2.0 Marks' }
      ]
    }
  ],

  19: [
    {
      id: 'ch19-q4',
      num: 'Question 4',
      marks: '5 Marks (100-120 words)',
      text: 'What are the major causes of poverty in India? Describe the key targeted anti-poverty programmes launched by the government.',
      answer: `<p><strong>Major Causes of Poverty in India:</strong></p>
<ol>
  <li><strong>Historical Colonial Exploitation:</strong> British colonial policies ruined traditional handicrafts and discouraged indigenous textile and manufacturing development, stifling income growth.</li>
  <li><strong>Population Explosion:</strong> Rapid population growth combined with low economic growth rate kept per capita income low.</li>
  <li><strong>Unequal Distribution of Land and Assets:</strong> Failure of land reform measures in several states led to large numbers of landless agricultural labourers.</li>
  <li><strong>Socio-Cultural Factors:</strong> Heavy social expenditures on marriages, religious rituals, and indebtedness to informal moneylenders.</li>
</ol>
<p><strong>Major Targeted Anti-Poverty Programmes:</strong></p>
<ul>
  <li><strong>MGNREGA (2005):</strong> Guarantees 100 days of wage employment per year to every rural household, reserving 1/3 of jobs for women.</li>
  <li><strong>Prime Minister Rozgar Yojana (PMRY):</strong> Provides subsidized financial assistance to educated unemployed youth in rural and small towns to set up micro-enterprises.</li>
  <li><strong>Pradhan Mantri Gramodaya Yojana (PMGY):</strong> Provides central assistance to states for basic rural services—primary health, primary education, rural drinking water, and rural housing.</li>
  <li><strong>Antyodaya Anna Yojana (AAY):</strong> Provides highly subsidized foodgrains (rice at ₹3/kg, wheat at ₹2/kg) to the poorest of the poor families under BPL.</li>
</ul>`,
      marking: [
        { key: 'Four root causes of poverty in India', marks: '2.0 Marks' },
        { key: 'MGNREGA 2005 features and guarantees', marks: '1.5 Marks' },
        { key: 'PMRY, PMGY, and Antyodaya Anna Yojana features', marks: '1.5 Marks' }
      ]
    }
  ],

  20: [
    {
      id: 'ch20-q4',
      num: 'Question 4',
      marks: '5 Marks (100-120 words)',
      text: 'What is the Public Distribution System (PDS)? Discuss its critical role in ensuring food security, its key limitations, and recent reforms.',
      answer: `<p>The <strong>Public Distribution System (PDS)</strong> is an essential instrument of government food security policy in India:</p>
<ol>
  <li><strong>Mechanism & Role:</strong> Food procured by the <em>Food Corporation of India (FCI)</em> at Minimum Support Price (MSP) is distributed through a network of around 5.5 lakh Fair Price Shops (ration shops) to poorer sections of society at issue prices lower than market prices. It distributes foodgrains, sugar, and kerosene oil.</li>
  <li><strong>Role in Food Security:</strong> PDS has been instrumental in averting widespread famines, stabilising consumer prices, providing price incentives to farmers, and ensuring food entitlement to vulnerable low-income households.</li>
  <li><strong>Major Limitations & Criticisms:</strong>
    <ul>
      <li>High level of diversion and leakage of subsidized grains to open markets by corrupt ration shop owners.</li>
      <li>Irregular opening of shops and stocking of substandard, poor quality grain.</li>
      <li>Overflowing FCI godowns where grain rots or is eaten by rats, while millions remain undernourished.</li>
      <li>High cost of carrying buffer stocks and fiscal burden of food subsidies.</li>
    </ul>
  </li>
  <li><strong>Reforms:</strong> Introduction of <em>Targeted PDS (TPDS)</em> with differential pricing for APL, BPL, and AAY; digitisation of ration cards, biometric authentication using Aadhaar, and the <strong>One Nation, One Ration Card (ONORC)</strong> scheme allowing migrant labourers to draw rations anywhere in India.</li>
</ol>`,
      marking: [
        { key: 'Definition and operation of PDS via Fair Price Shops', marks: '1.5 Marks' },
        { key: 'Role in price stabilization and food security', marks: '1.0 Mark' },
        { key: 'Key limitations (leakage, diversion, buffer stock decay)', marks: '1.5 Marks' },
        { key: 'Recent reforms (TPDS, digitisation, One Nation One Ration Card)', marks: '1.0 Mark' }
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

console.log('=== EXPANDING CLASS 9 SOCIAL SCIENCE CHAPTERS ===');

let totalInjected = 0;

for (let ch = 1; ch <= 20; ch++) {
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

console.log(`\n✅ Total SST questions injected: ${totalInjected}`);

// Now rebuild chapters-c9sst/chapters-data.js
console.log('\n=== Rebuilding chapters-c9sst/chapters-data.js ===');
const chaptersData = {};
for (let ch = 1; ch <= 20; ch++) {
  const fPath = path.join(chDir, `ch${ch}.html`);
  if (fs.existsSync(fPath)) {
    chaptersData[ch.toString()] = fs.readFileSync(fPath, 'utf8');
  }
}

const dataJsContent = `window.PRELOADED_CHAPTERS = ${JSON.stringify(chaptersData, null, 2)};\n`;
fs.writeFileSync(path.join(chDir, 'chapters-data.js'), dataJsContent, 'utf8');
console.log(`✅ chapters-c9sst/chapters-data.js successfully rewritten (${dataJsContent.length} bytes).`);
