// scripts/builders/c10sst-part1.js
// Verbatim Physical NCERT Questions for Class 10 Social Science: History & Geography (Ch 3, 6, 7, 8, 9, 10, 11, 12)
// CBSE Step Marking Scheme 2026-27

function makeSstCard(id, qNum, text, marks, answerHtml, rubricRows) {
  const rubricHtml = rubricRows.map(r => `          <div class="marking-row"><span class="marking-key">${r.key}</span><span class="marking-marks">${r.marks}</span></div>`).join('\n');
  return `  <div class="q-card" id="${id}">
    <div class="q-head" onclick="toggleQ('${id}')">
      <div class="q-num">${qNum}</div>
      <div class="q-text">${text}</div>
      <div class="q-marks">${marks} Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Answer (Max Word Count)</div>
        <div class="answer-text">
${answerHtml}
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme Breakdown 2026-27</div>
${rubricHtml}
        </div>
      </div>
    </div>
  </div>`;
}

// CHAPTER 3: The Making of a Global World (1 Q missing)
function getChapter3Additions() {
  return [
    makeSstCard(
      'c10s3q8',
      'Q8',
      'Explain the three types of movements or \'flows\' within international economic exchange identified by economists. Mention one example of each type of flow.',
      5,
      `<p>Economists identify three distinct types of movements or <strong>'flows'</strong> within international economic exchange:</p>
<ol>
  <li><strong>Flow of Trade (Trade in Goods):</strong>
    <ul>
      <li><em>Explanation:</em> Refers largely to trade in tangible physical commodities such as agricultural produce, raw materials, and manufactured goods across borders.</li>
      <li><em>Historical Example:</em> Large-scale exports of wheat, cotton, and textiles from India and North America to Britain and continental Europe during the nineteenth century.</li>
    </ul>
  </li>
  <li><strong>Flow of Labour (Migration of People):</strong>
    <ul>
      <li><em>Explanation:</em> The movement and migration of working people from densely populated or impoverished regions to other countries in search of employment and livelihood.</li>
      <li><em>Historical Example:</em> Nearly 50 million people migrated from Europe to America and Australia in the 19th century; millions of Indian indentured labourers migrated to work in Caribbean sugar plantations, Fiji, and Malaya.</li>
    </ul>
  </li>
  <li><strong>Flow of Capital (Movement of Investments):</strong>
    <ul>
      <li><em>Explanation:</em> The movement of capital and financial investments for short-term or long-term periods across large geographical distances to fund infrastructure, mines, and plantations.</li>
      <li><em>Historical Example:</em> British and European financial capital invested to build extensive railway networks, ports, and plantations across the Americas, India, and Africa.</li>
    </ul>
  </li>
</ol>`,
      [
        { key: 'Flow of Trade explanation and historical commodity example', marks: '1.5 Marks' },
        { key: 'Flow of Labour explanation and indentured/transatlantic migration example', marks: '1.5 Marks' },
        { key: 'Flow of Capital explanation and global railway/plantation financing example', marks: '2 Marks' }
      ]
    )
  ];
}

// CHAPTER 6: Resources and Development (2 Qs missing)
function getChapter6Additions() {
  return [
    makeSstCard(
      'c10s6q6',
      'Q6',
      '\"Land is a natural resource of utmost importance.\" Justify the statement with four arguments.',
      4,
      `<p>Land is considered a vital resource of paramount importance due to the following reasons:</p>
<ol>
  <li><strong>Supports Human Life and Natural Vegetation:</strong> Land supports natural vegetation, wildlife, human populations, and ecological processes essential for terrestrial biodiversity.</li>
  <li><strong>Foundation for Economic Activities:</strong> All fundamental primary, secondary, and tertiary economic activities—such as agriculture, forestry, mining, and industrial manufacturing—are performed on land.</li>
  <li><strong>Medium for Transport and Communication:</strong> Roadways, railways, airports, communication towers, ports, and urban settlements require land as their physical platform.</li>
  <li><strong>Finite Resource Requiring Careful Planning:</strong> Land is an asset of fixed magnitude; it cannot be expanded. Therefore, meticulous land-use planning is essential to prevent degradation, soil erosion, and desertification.</li>
</ol>`,
      [
        { key: 'Supports flora, fauna, human life and ecological systems', marks: '1 Mark' },
        { key: 'Base for economic activities like farming, industry and mining', marks: '1 Mark' },
        { key: 'Infrastructure platform for transportation networks', marks: '1 Mark' },
        { key: 'Fixed physical supply mandating conservation and land-use planning', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s6q7',
      'Q7',
      'Distinguish between Khadar and Bhangar soils on the basis of age, texture, fertility, and renewal.',
      4,
      `<p><strong>Comparison between Khadar and Bhangar Soils:</strong></p>
<table border="1" cellpadding="8" style="border-collapse:collapse;width:100%;margin-top:10px;">
  <tr style="background:#f0fdfa;color:#115e59;">
    <th>Feature</th>
    <th>Khadar Soil (New Alluvium)</th>
    <th>Bhangar Soil (Old Alluvium)</th>
  </tr>
  <tr>
    <td><strong>1. Age</strong></td>
    <td>Newer alluvial deposit found in the lower flood plains of river valleys.</td>
    <td>Older alluvial deposit found on higher river terraces above the flood level.</td>
  </tr>
  <tr>
    <td><strong>2. Texture &amp; Composition</strong></td>
    <td>Fine-grained, silty, and clayey particles with very few calcareous deposits.</td>
    <td>Coarse texture containing higher concentrations of calcareous nodules (<em>kankar</em>).</td>
  </tr>
  <tr>
    <td><strong>3. Fertility</strong></td>
    <td>Extremely fertile and ideal for intensive agriculture (rice, wheat, sugarcane).</td>
    <td>Relatively less fertile compared to Khadar and requires chemical fertilizers.</td>
  </tr>
  <tr>
    <td><strong>4. Renewal</strong></td>
    <td>Renewed almost every year by annual river floods.</td>
    <td>Not renewed annually; remains stationary on older terrace plains.</td>
  </tr>
</table>`,
      [
        { key: 'Age distinction: New flood plain vs Old terrace alluvium', marks: '1 Mark' },
        { key: 'Texture distinction: Fine silt vs Kankar calcareous nodules', marks: '1 Mark' },
        { key: 'Fertility distinction: High natural fertility vs Moderate fertility', marks: '1 Mark' },
        { key: 'Renewal distinction: Annually renewed by floods vs Non-renewed', marks: '1 Mark' }
      ]
    )
  ];
}

// CHAPTER 7: Forest and Wildlife Resources (2 Qs missing)
function getChapter7Additions() {
  return [
    makeSstCard(
      'c10s7q6',
      'Q6',
      'Write a brief note on the \'Chipko Movement\' and the \'Beej Bachao Andolan\' as notable examples of community-led biodiversity conservation.',
      4,
      `<p><strong>1. The Chipko Movement (Himalayan Region):</strong></p>
<ul>
  <li>Originated in the Garhwal Himalayas of Uttarakhand where villagers, led by women and activists like Sunderlal Bahuguna, clung to trees to prevent commercial loggers from felling them.</li>
  <li>Successfully resisted deforestation across vast swathes of the Himalayas and demonstrated that community afforestation with indigenous species can be accomplished without state interference.</li>
</ul>
<p><strong>2. Beej Bachao Andolan (Save the Seeds Movement):</strong></p>
<ul>
  <li>Started in Tehri and Navdanya by farmers and civil society groups to revive traditional agricultural biodiversity.</li>
  <li>Demonstrated that adequate levels of diversified crop production are completely feasible without the use of synthetic chemicals and expensive hybrid seeds, proving economically viable and ecological farming.</li>
</ul>`,
      [
        { key: 'Chipko movement origin, method of hugging trees, and anti-deforestation triumph', marks: '2 Marks' },
        { key: 'Beej Bachao Andolan revival of traditional seed diversity and ecological farming', marks: '2 Marks' }
      ]
    ),
    makeSstCard(
      'c10s7q7',
      'Q7',
      'Distinguish between Reserved Forests, Protected Forests, and Unclassed Forests as classified by the Forest Department in India.',
      4,
      `<p><strong>Classification of Forests in India:</strong></p>
<ol>
  <li><strong>Reserved Forests:</strong>
    <ul>
      <li>Regarded as the most valuable as far as the conservation of forest and wildlife resources are concerned.</li>
      <li>More than half of the total forest land has been declared reserved. Human activities like grazing and timber felling are strictly prohibited unless special permission is granted.</li>
      <li><em>Major States:</em> Madhya Pradesh, Jammu & Kashmir, Andhra Pradesh, Uttarakhand, Kerala, Tamil Nadu.</li>
    </ul>
  </li>
  <li><strong>Protected Forests:</strong>
    <ul>
      <li>Almost one-third of the total forest area is protected, as declared by the Forest Department.</li>
      <li>This forest land is protected from any further depletion; local communities are often allowed limited grazing and timber rights without damaging the forest canopy.</li>
      <li><em>Major States:</em> Bihar, Haryana, Punjab, Himachal Pradesh, Odisha, Rajasthan.</li>
    </ul>
  </li>
  <li><strong>Unclassed Forests:</strong>
    <ul>
      <li>These are other forests and wastelands belonging to both government and private individuals and communities.</li>
      <li>All north-eastern states and parts of Gujarat have a very high percentage of unclassed forests managed by local clans and communities.</li>
    </ul>
  </li>
</ol>`,
      [
        { key: 'Reserved forests: strict conservation, >50% total, prohibited activities', marks: '1.5 Marks' },
        { key: 'Protected forests: 1/3 total, protected from further depletion, limited rights', marks: '1.5 Marks' },
        { key: 'Unclassed forests: community and private wastelands in Northeast and Gujarat', marks: '1 Mark' }
      ]
    )
  ];
}

// CHAPTER 8: Water Resources (2 Qs missing)
function getChapter8Additions() {
  return [
    makeSstCard(
      'c10s8q6',
      'Q6',
      'What is rainwater harvesting? Describe any three traditional rainwater harvesting methods practiced across different ecological regions of India.',
      4,
      `<p><strong>Meaning of Rainwater Harvesting:</strong></p>
<p>Rainwater harvesting is the technique of capturing, collecting, and storing rainwater from rooftops, surface catchments, and rock catchments for future productive use and groundwater aquifer recharge.</p>
<p><strong>Traditional Methods Across India:</strong></p>
<ol>
  <li><strong>Guls or Kuls (Western Himalayas):</strong> Diversion channels built in hilly and mountainous regions that guide water from hill streams directly into terraced agricultural fields.</li>
  <li><strong>Johads and Khadins (Arid/Semi-Arid Rajasthan):</strong> Agricultural fields were converted into rain-fed storage structures that allowed rainwater to stand and saturate the soil, making farming possible in hyper-arid zones.</li>
  <li><strong>Rooftop Rainwater Harvesting via Tankas (Bikaner, Phalodi, Barmer):</strong> Underground tanks built inside houses or courtyards to store pure rainwater (<em>palar pani</em>) collected from sloping rooftops through pipes, serving as drinking water through hot summers.</li>
  <li><strong>Bamboo Drip Irrigation System (Meghalaya):</strong> A 200-year-old system tapping stream and spring water using bamboo pipes to irrigate betel leaf plantations with micro-precision.</li>
</ol>`,
      [
        { key: 'Definition of rainwater harvesting and groundwater recharging role', marks: '1 Mark' },
        { key: 'Guls/Kuls in Himalayas and Johads/Khadins in Rajasthan', marks: '1.5 Marks' },
        { key: 'Rooftop Tankas in Rajasthan and Bamboo Drip irrigation in Meghalaya', marks: '1.5 Marks' }
      ]
    ),
    makeSstCard(
      'c10s8q7',
      'Q7',
      'Explain any four major causes responsible for increasing water scarcity in post-independent India.',
      4,
      `<p>The major causes driving water scarcity in post-independent India include:</p>
<ol>
  <li><strong>Rapid Population Growth:</strong> A burgeoning population creates an exponentially growing demand for domestic water consumption as well as water needed to expand agricultural food production.</li>
  <li><strong>Expansion of Irrigated Agriculture:</strong> The Green Revolution led to intensive groundwater extraction through personal tubewells to cultivate water-thirsty cash crops like rice and sugarcane, leading to plummeting groundwater tables.</li>
  <li><strong>Rapid Industrialisation:</strong> Industries are heavy consumers of freshwater and require vast hydroelectric power. Industries also discharge untreated effluents into rivers, degrading water quality.</li>
  <li><strong>Urbanisation and Lifestyle Changes:</strong> Multiplying urban centres with high-density housing societies rely on automated submersible pumps, leading to severe over-exploitation of local aquifers.</li>
  <li><strong>Water Pollution:</strong> Discharge of domestic sewage, toxic industrial waste, pesticides, and chemical fertilizers has rendered many freshwater bodies hazardous and unpotable.</li>
</ol>`,
      [
        { key: 'Population growth driving domestic and food production demand', marks: '1 Mark' },
        { key: 'Agricultural over-extraction via tubewells for water-intensive crops', marks: '1 Mark' },
        { key: 'Industrialization water consumption and hydroelectric energy demands', marks: '1 Mark' },
        { key: 'Urban lifestyles and chemical/sewage pollution degrading water quality', marks: '1 Mark' }
      ]
    )
  ];
}

// CHAPTER 9: Agriculture (2 Qs missing)
function getChapter9Additions() {
  return [
    makeSstCard(
      'c10s9q6',
      'Q6',
      'Describe the geographical conditions required for the cultivation of rice in India with respect to temperature, rainfall, soil, and major producing states.',
      4,
      `<p>Rice is the staple food crop of a majority of the people in India (India is the second largest producer in the world after China):</p>
<ul>
  <li><strong>Crop Season:</strong> It is a <em>Kharif</em> crop sown with the onset of the southwest monsoon and harvested in September–October.</li>
  <li><strong>Temperature:</strong> Requires high temperatures (above <strong>$25^\\circ\\text{C}$</strong>) throughout its growing period.</li>
  <li><strong>Rainfall &amp; Humidity:</strong> Requires high humidity and heavy rainfall of above <strong>$100\\text{ cm}$</strong>. In areas of less rainfall (e.g., Punjab, Haryana, Western UP), it is grown with the help of dense canal irrigation and tubewells.</li>
  <li><strong>Soil:</strong> Deep fertile alluvial clayey or loamy soils that possess excellent water-retention capacity.</li>
  <li><strong>Major Producing States:</strong> West Bengal, Uttar Pradesh, Punjab, Andhra Pradesh, Bihar, Odisha, Chhattisgarh, and Tamil Nadu.</li>
</ul>`,
      [
        { key: 'Kharif season and high temperature requirement (>25°C)', marks: '1 Mark' },
        { key: 'Heavy rainfall requirement (>100 cm) and irrigation in low-rain zones', marks: '1 Mark' },
        { key: 'Clayey/alluvial water-retentive soil specification', marks: '1 Mark' },
        { key: 'Listing key producer states (WB, UP, Punjab, AP, Bihar)', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s9q7',
      'Q7',
      'What were the major institutional and technological reforms introduced by the Indian government in the agricultural sector after independence?',
      4,
      `<p><strong>1. Institutional Reforms:</strong></p>
<ol>
  <li><strong>Collectivisation and Land Reforms:</strong> Abolition of the oppressive <em>Zamindari</em> system, consolidation of fragmented land holdings (<em>Chakbandi</em>), and land ceiling legislation.</li>
  <li><strong>Agricultural Credit Facilities:</strong> Establishment of Grameen Banks, Cooperative Societies, and nationalized commercial banks to provide low-interest agricultural loans without moneylender exploitation.</li>
  <li><strong>Kisan Credit Card (KCC) and PAIS:</strong> Introduction of the Kisan Credit Card and Personal Accident Insurance Scheme to provide immediate working capital and social security.</li>
  <li><strong>Minimum Support Price (MSP):</strong> Announcement of MSP and procurement prices for important crops to check the exploitation of farmers by speculators and middlemen.</li>
</ol>
<p><strong>2. Technological Reforms:</strong></p>
<ol>
  <li><strong>The Green Revolution:</strong> Introduction of High Yielding Varieties (HYV) of seeds, chemical fertilizers, pesticides, and modern machinery (tractors, threshers).</li>
  <li><strong>The White Revolution (Operation Flood):</strong> Modernization of dairy farming and cooperative milk marketing networks.</li>
  <li><strong>Weather Bulletins:</strong> Special agricultural programmes and weather bulletins on radio and television (Doordarshan Kisan).</li>
</ol>`,
      [
        { key: 'Institutional reforms: Zamindari abolition, land consolidation, Grameen banks', marks: '2 Marks' },
        { key: 'Technological reforms: Green Revolution (HYV seeds, fertilizers) and White Revolution', marks: '1 Mark' },
        { key: 'Safety nets: Kisan Credit Card, crop insurance, and MSP pricing', marks: '1 Mark' }
      ]
    )
  ];
}

// CHAPTER 10: Minerals and Energy Resources (2 Qs missing)
function getChapter10Additions() {
  return [
    makeSstCard(
      'c10s10q6',
      'Q6',
      '\"Solar energy has a bright future in India.\" Support this statement with four suitable arguments.',
      4,
      `<p>Solar energy has tremendous potential and a bright future in India due to the following factors:</p>
<ol>
  <li><strong>Tropical Geographic Advantage:</strong> India is a tropical country endowed with abundant sunshine for almost 300 clear sunny days a year, with an enormous potential to generate approximately 20 MW per sq km per annum.</li>
  <li><strong>Cost-Effective and Rapid Deployment:</strong> Photovoltaic technology converts sunlight directly into electricity. Solar panels can be easily set up on rooftops, rural barren lands, and decentralized agricultural pumps without heavy transmission losses.</li>
  <li><strong>Reduction in Rural Dependence on Firewood and Dung Cakes:</strong> Rural solar adoption diminishes reliance on firewood and animal dung cakes, thereby conserving forest cover and preserving manure for organic soil fertility.</li>
  <li><strong>Environmentally Clean and Sustainable:</strong> Solar energy generates zero greenhouse gas emissions, reducing India\'s carbon footprint and dependence on polluting fossil fuels like coal and petroleum.</li>
</ol>`,
      [
        { key: 'Tropical geography and abundant sunshine (300 sunny days)', marks: '1 Mark' },
        { key: 'Photovoltaic technology advantages and decentralized setup', marks: '1 Mark' },
        { key: 'Conservation of rural forests and preservation of cattle dung for manure', marks: '1 Mark' },
        { key: 'Clean, non-polluting and renewable alternative combating climate change', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s10q7',
      'Q7',
      'Distinguish between conventional and non-conventional sources of energy with two examples of each.',
      4,
      `<p><strong>Comparison between Conventional and Non-Conventional Sources of Energy:</strong></p>
<table border="1" cellpadding="8" style="border-collapse:collapse;width:100%;margin-top:10px;">
  <tr style="background:#f0fdfa;color:#115e59;">
    <th>Feature</th>
    <th>Conventional Energy Sources</th>
    <th>Non-Conventional Energy Sources</th>
  </tr>
  <tr>
    <td><strong>1. Nature &amp; Availability</strong></td>
    <td>Exhaustible and non-renewable; stocks are finite and will deplete over time.</td>
    <td>Inexhaustible and renewable; naturally regenerated continuously.</td>
  </tr>
  <tr>
    <td><strong>2. Environmental Impact</strong></td>
    <td>Cause heavy atmospheric pollution, acid rain, and greenhouse gas emissions on burning.</td>
    <td>Eco-friendly and non-polluting; emit virtually zero greenhouse gases.</td>
  </tr>
  <tr>
    <td><strong>3. Usage History</strong></td>
    <td>Have been in widespread use for decades and centuries.</td>
    <td>Developed and harnessed relatively recently due to technological advancements.</td>
  </tr>
  <tr>
    <td><strong>4. Examples</strong></td>
    <td>Coal, Petroleum, Natural Gas, Firewood.</td>
    <td>Solar Energy, Wind Energy, Biogas, Tidal Energy.</td>
  </tr>
</table>`,
      [
        { key: 'Availability distinction: Exhaustible/finite vs Renewable/infinite', marks: '1 Mark' },
        { key: 'Pollution distinction: High carbon emissions vs Clean/eco-friendly', marks: '1 Mark' },
        { key: 'Historical usage contrast: Traditional use vs Modern technological adoption', marks: '1 Mark' },
        { key: 'Accurate examples for both categories', marks: '1 Mark' }
      ]
    )
  ];
}

// CHAPTER 11: Manufacturing Industries (1 Q missing)
function getChapter11Additions() {
  return [
    makeSstCard(
      'c10s11q7',
      'Q7',
      'What is the importance of the manufacturing sector in India? Mention any four points.',
      4,
      `<p>The manufacturing sector is considered the backbone of economic development for the following reasons:</p>
<ol>
  <li><strong>Modernisation of Agriculture:</strong> Manufacturing industries reduce the heavy dependence of people on agricultural income by providing non-farm jobs in the secondary and tertiary sectors. They also modernize farming by producing tractors, threshers, harvesters, pipes, and fertilizers.</li>
  <li><strong>Eradication of Unemployment and Poverty:</strong> Industrial development is a prerequisite for eradicating unemployment and poverty from our country. It was the main philosophy behind public sector industries in independent India.</li>
  <li><strong>Expansion of Trade and Foreign Exchange:</strong> Export of manufactured goods expands trade and commerce, bringing in valuable foreign exchange. Countries that transform raw materials into high-value manufactured goods are prosperous.</li>
  <li><strong>Regional Disparities Reduction:</strong> Setting up industries in tribal, backward, and rural areas helps reduce regional economic disparities and brings infrastructural development.</li>
</ol>`,
      [
        { key: 'Modernizes agriculture and absorbs surplus rural agricultural labour', marks: '1 Mark' },
        { key: 'Eradicates poverty and generates widespread employment', marks: '1 Mark' },
        { key: 'Boosts export earnings and valuable foreign exchange reserves', marks: '1 Mark' },
        { key: 'Mitigates regional imbalances by industrializing backward areas', marks: '1 Mark' }
      ]
    )
  ];
}

// CHAPTER 12: Lifelines of National Economy (2 Qs missing)
function getChapter12Additions() {
  return [
    makeSstCard(
      'c10s12q6',
      'Q6',
      'Why are efficient means of transport and communication called the \'lifelines\' of a nation and its economy?',
      4,
      `<p>Transport and communication are called the lifelines of a modern nation and its economy because:</p>
<ol>
  <li><strong>Movement of Goods and People:</strong> Transport facilitates the movement of raw materials from extraction sites to factories and finished goods from production centres to domestic and global consumer markets.</li>
  <li><strong>National Integration:</strong> India is a vast country with immense geographical, cultural, and linguistic diversity. Railways, roadways, and airways integrate diverse regions into a unified socio-economic entity.</li>
  <li><strong>Development of Agriculture and Industry:</strong> Farmers get fertilizers and farm machinery on time, and perishable produce reaches urban markets before spoilage. Industries get uninterrupted coal, mineral, and fuel supplies.</li>
  <li><strong>Global Connectivity and Knowledge Exchange:</strong> Modern telecom, internet, satellite networks, and postal services allow instantaneous business transactions, emergency coordination, defense communication, and global trade.</li>
</ol>`,
      [
        { key: 'Movement of commodities and consumers across space', marks: '1 Mark' },
        { key: 'Socio-cultural and regional national integration across India', marks: '1 Mark' },
        { key: 'Synergy and growth impetus for agriculture and industrial commerce', marks: '1 Mark' },
        { key: 'Global information flow, emergency relief, and defense communication', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s12q7',
      'Q7',
      'What are the advantages of pipeline transportation over conventional transport systems in India?',
      4,
      `<p>Pipeline transport network is a relatively new arrival on the transportation map of India for carrying crude oil, petroleum products, natural gas, and mineral slurry (e.g., iron ore from Kudremukh):</p>
<ol>
  <li><strong>Uninterrupted All-Weather Supply:</strong> Pipelines operate continuously 24x7 without being affected by road traffic, weather conditions, or rail track disruptions.</li>
  <li><strong>Zero Trans-shipment Losses and Delays:</strong> Unlike rail wagons or road tankers, pipeline movement eliminates trans-shipment delays and product losses due to leaks, theft, or spills.</li>
  <li><strong>Location Flexibility for Refineries:</strong> Refineries can be set up in deep inland consumption centres (such as Barauni, Mathura, and Panipat) far away from coastal oil fields.</li>
  <li><strong>Low Operating and Maintenance Cost:</strong> Though the initial laying cost of pipelines is high, their subsequent operating and running costs are minimal with negligible energy consumption.</li>
</ol>`,
      [
        { key: 'Continuous round-the-clock all-weather conveyance', marks: '1 Mark' },
        { key: 'Eliminates trans-shipment delays and theft/transit wastage', marks: '1 Mark' },
        { key: 'Enables interior inland refineries (Mathura, Barauni, Panipat)', marks: '1 Mark' },
        { key: 'Minimal running and maintenance expenses after initial laying', marks: '1 Mark' }
      ]
    )
  ];
}

module.exports = {
  getChapter3Additions,
  getChapter6Additions,
  getChapter7Additions,
  getChapter8Additions,
  getChapter9Additions,
  getChapter10Additions,
  getChapter11Additions,
  getChapter12Additions
};
