// scripts/builders/c10sst-part3.js
// Verbatim Physical NCERT Questions for Class 10 Social Science: Economics (Ch 18, 19, 20, 21, 22)
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

// CHAPTER 18: Development (7 Qs missing)
function getChapter18Additions() {
  return [
    makeSstCard(
      'c10s18q7',
      'Q7',
      'Why do different persons have different notions of development? Which of the following explanations is more important and why? (a) Because people are different. (b) Because life situations of persons are different.',
      4,
      `<p><strong>Explanation:</strong> Explanation <strong>(b) 'Because life situations of persons are different'</strong> is far more important and accurate.</p>
<ol>
  <li><strong>Life Situations Determine Needs:</strong> People seek things that are most needed for their specific life circumstances and what can fulfill their immediate aspirations.</li>
  <li><em>Example 1:</em> A landless rural labourer aspires for more days of regular work and better daily wages, while a prosperous farmer in Punjab aspires for high family income through higher support prices for crops and cheap migrant labour.</li>
  <li><em>Example 2:</em> An urban unemployed youth seeks a secure white-collar job, while a girl in an affluent family aspires for as much freedom as her brother and the opportunity to pursue higher studies abroad.</li>
  <li><strong>Conflicting Notions:</strong> What is development for one may not be development for another; it may even be destructive (e.g., an industrialist wanting a large dam for hydroelectricity displaces tribal villagers whose lands are submerged).</li>
</ol>`,
      [
        { key: 'Affirming explanation (b): Life situations govern developmental priorities', marks: '1.5 Marks' },
        { key: 'Contrasting examples (landless labourer vs prosperous farmer; urban youth)', marks: '1.5 Marks' },
        { key: 'Concept of conflicting developmental goals (dams vs tribal displacement)', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s18q8',
      'Q8',
      'What is Per Capita Income? Mention any two limitations of using Per Capita Income as the sole indicator to measure economic development.',
      4,
      `<p><strong>Meaning of Per Capita Income:</strong></p>
<p>Per Capita Income (or average income) is calculated by dividing the total national income of a country by its total population:
$$\\text{Per Capita Income} = \\frac{\\text{Total National Income}}{\\text{Total Population}}$$</p>
<p><strong>Limitations of Per Capita Income:</strong></p>
<ol>
  <li><strong>Hides Inequalities in Income Distribution:</strong> It does not tell us how income is distributed among people. A country may have very high per capita income if a few billionaires earn astronomical wealth while the vast majority live in extreme deprivation (e.g., in two countries with identical average incomes of ₹ 50,000, one may have equitable distribution while in the other, one person earns ₹ 48,000 and four earn ₹ 500 each).</li>
  <li><strong>Ignores Non-Material Development Indicators:</strong> It completely ignores crucial human development dimensions such as infant mortality rate, life expectancy, health care access, literacy rates, clean environment, personal freedom, gender equality, and social security.</li>
</ol>`,
      [
        { key: 'Formula and definition of Per Capita Income', marks: '1.5 Marks' },
        { key: 'Limitation 1: Hides skewed income distribution and inequality', marks: '1.5 Marks' },
        { key: 'Limitation 2: Excludes human development variables (literacy, health, freedom)', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s18q9',
      'Q9',
      'Besides average income, what other social and demographic indicators are crucial for measuring human development? Define any three of them.',
      4,
      `<p>Crucial non-income indicators used in measuring human development include:</p>
<ol>
  <li><strong>Infant Mortality Rate (IMR):</strong>
    <ul>
      <li><em>Definition:</em> The number of children that die before completing one year of age per 1,000 live births born in that particular year.</li>
      <li><em>Significance:</em> It reflects the quality and availability of primary healthcare, maternal nutrition, and sanitation facilities.</li>
    </ul>
  </li>
  <li><strong>Literacy Rate:</strong>
    <ul>
      <li><em>Definition:</em> The proportion of literate population in the 7 and above age group.</li>
      <li><em>Significance:</em> Measures fundamental intellectual empowerment and educational access.</li>
    </ul>
  </li>
  <li><strong>Net Attendance Ratio:</strong>
    <ul>
      <li><em>Definition:</em> The total number of children of age group 14 and 15 years attending school as a percentage of total number of children in the same age group.</li>
      <li><em>Significance:</em> Highlights whether adolescents continue with secondary education or drop out.</li>
    </ul>
  </li>
  <li><strong>Life Expectancy at Birth:</strong> The average expected length of life of a person at the time of birth, reflecting general health and nutrition.</li>
</ol>`,
      [
        { key: 'Definition and developmental significance of Infant Mortality Rate (IMR)', marks: '1.5 Marks' },
        { key: 'Definition and developmental significance of Literacy Rate', marks: '1.5 Marks' },
        { key: 'Definition and significance of Net Attendance Ratio', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s18q10',
      'Q10',
      'Why is the issue of sustainability important for development? Explain with reference to groundwater depletion in India and exhaustion of natural crude oil reserves.',
      5,
      `<p><strong>Importance of Sustainability in Development:</strong></p>
<p>Sustainable development means economic development that meets the needs of the present without compromising the ability of future generations to meet their own needs. It prevents environmental degradation that would halt or reverse human progress.</p>
<p><strong>Case 1: Groundwater Depletion in India (Renewable Resource):</strong></p>
<ul>
  <li>Groundwater is replenished naturally by rainfall. However, about <strong>300 districts in India</strong> have reported a water level decline of over 4 metres during the past 20 years.</li>
  <li>Nearly one-third of the country is overusing its groundwater reserves, particularly in agricultural breadbaskets (Punjab, Western UP) and hard-rock plateau areas. If this continues, 60% of the country will face catastrophic water scarcity, destroying agricultural livelihoods.</li>
</ul>
<p><strong>Case 2: Exhaustion of Crude Oil Reserves (Non-Renewable Resource):</strong></p>
<ul>
  <li>Crude oil is a finite fossil fuel that took millions of years to form and cannot be replenished. Present global reserves are estimated to last merely around 40–50 years at current extraction rates.</li>
  <li>Countries like India, which import over 80% of their crude oil, face crippling economic shocks when oil prices rise. Without transitioning to renewable solar, wind, and green hydrogen power, future generations will face systemic economic paralysis.</li>
</ul>`,
      [
        { key: 'Definition and inter-generational equity rationale of Sustainable Development', marks: '1.5 Marks' },
        { key: 'Groundwater depletion case study (300 districts, >4m water table drop)', marks: '1.5 Marks' },
        { key: 'Crude oil exhaustion analysis and urgent renewable energy transition necessity', marks: '2 Marks' }
      ]
    ),
    makeSstCard(
      'c10s18q11',
      'Q11',
      '\"The Earth has enough resources to meet the needs of all but not enough to satisfy the greed of even one person.\" How is this statement by Mahatma Gandhi relevant to the discussion of development?',
      4,
      `<p>Mahatma Gandhi\'s profound statement addresses the root cause of environmental unsustainability in modern development:</p>
<ol>
  <li><strong>Universal Basic Needs vs Unsustainable Consumerism:</strong> Nature provides abundant regenerative resources—arable land, clean water, forests, and solar energy—sufficient to feed, clothe, and provide decent livelihoods for all human beings on the planet if used responsibly.</li>
  <li><strong>Destruction Caused by Corporate Greed:</strong> Over-exploitation of resources is driven by profit-maximization and reckless consumerism: excessive deforestation, open-cast mining, plastic dumping, and fossil fuel combustion that deplete finite mineral ores and pollute planetary ecosystems.</li>
  <li><strong>Inequity in Resource Consumption:</strong> A tiny minority of affluent countries and ultra-rich individuals consume a lion\'s share of the planet\'s resources, generating disproportionate toxic waste and carbon emissions, while the impoverished suffer the brunt of climate disasters.</li>
  <li><strong>Call for Ethical, Equitable Stewardship:</strong> The statement advocates a shift from mindless extraction to sustainable resource stewardship, renewable alternatives, and equitable distribution.</li>
</ol>`,
      [
        { key: 'Adequacy of natural resources for basic human survival and decent living', marks: '1 Mark' },
        { key: 'Critique of greedy profit-driven over-exploitation and environmental degradation', marks: '1 Mark' },
        { key: 'Inequity between global elite over-consumption and poor bearing ecological costs', marks: '1 Mark' },
        { key: 'Ethical imperative for sustainable stewardship and conservation', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s18q12',
      'Q12',
      'Compare the criteria used by the World Bank with that used by the United Nations Development Programme (UNDP) for measuring and comparing the development of different countries.',
      5,
      `<p><strong>Comparison of Development Criteria: World Bank vs UNDP:</strong></p>
<table border="1" cellpadding="8" style="border-collapse:collapse;width:100%;margin-top:10px;">
  <tr style="background:#f0fdfa;color:#115e59;">
    <th>Feature</th>
    <th>World Bank (World Development Report)</th>
    <th>UNDP (Human Development Report)</th>
  </tr>
  <tr>
    <td><strong>1. Primary Criterion</strong></td>
    <td>Uses exclusively <strong>Per Capita Income (PCI)</strong> / Gross National Income (GNI) per capita measured in US Dollars.</td>
    <td>Uses a multi-dimensional composite index: the <strong>Human Development Index (HDI)</strong>.</td>
  </tr>
  <tr>
    <td><strong>2. Components Included</strong></td>
    <td>Only material economic wealth (Total Income / Total Population).</td>
    <td>Three dimensions: <strong>Health</strong> (Life Expectancy), <strong>Education</strong> (Mean &amp; Expected Years of Schooling), and <strong>Standard of Living</strong> (Per Capita GNI).</td>
  </tr>
  <tr>
    <td><strong>3. Country Classification</strong></td>
    <td>Classifies countries strictly into: High-Income (Rich), Middle-Income, and Low-Income countries.</td>
    <td>Ranks all countries on a composite score from 0 to 1 into Very High, High, Medium, and Low Human Development tiers.</td>
  </tr>
  <tr>
    <td><strong>4. Scope &amp; Vision</strong></td>
    <td>Narrow, purely economic approach; ignores health, schooling, and income disparities.</td>
    <td>Broad, holistic human-centric approach focusing on the actual capabilities and well-being of people.</td>
  </tr>
</table>`,
      [
        { key: 'World Bank criterion: Strictly economic Per Capita Income (US Dollars)', marks: '1.5 Marks' },
        { key: 'UNDP criterion: Composite Human Development Index (HDI)', marks: '1.5 Marks' },
        { key: 'Three HDI dimensions: Health (Life expectancy), Education (Schooling), Income', marks: '1 Mark' },
        { key: 'Holistic human-centric capability approach of UNDP vs narrow monetary focus', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s18q13',
      'Q13',
      'Why do you think Kerala, despite having a lower per capita income than Haryana (or Maharashtra), has a much better human development ranking? Explain.',
      4,
      `<p>Kerala ranks substantially higher on human development despite lower monetary per capita income due to strategic long-term investments in social infrastructure:</p>
<ol>
  <li><strong>Universal Primary Healthcare:</strong> Kerala has established an extensive, accessible network of primary health centres, resulting in an exceptionally low <strong>Infant Mortality Rate (IMR of around 10–12 per 1,000)</strong> compared to over 30 in other states.</li>
  <li><strong>High Female and Universal Literacy:</strong> Prioritizing public education has yielded a literacy rate of over 94%, ensuring that both boys and girls complete schooling.</li>
  <li><strong>Effective Public Distribution System (PDS):</strong> Kerala operates a well-functioning Public Distribution System that guarantees subsidized rations and essential nutritional security to all families, maintaining high baseline health and nutritional standards.</li>
  <li><strong>Conclusion:</strong> Money in your pocket cannot buy all the essential goods and services needed to live well (such as a pollution-free environment, protection from infectious diseases, and unadulterated medicines). Collective public provision is the most effective and affordable path to human well-being.</li>
</ol>`,
      [
        { key: 'Healthcare infrastructure and remarkably low Infant Mortality Rate (IMR)', marks: '1.5 Marks' },
        { key: 'High literacy rates and educational access for both genders', marks: '1 Mark' },
        { key: 'Efficient Public Distribution System (PDS) ensuring food security', marks: '1 Mark' },
        { key: 'Insight that money cannot buy public goods; collective provision is essential', marks: '0.5 Mark' }
      ]
    )
  ];
}

// CHAPTER 19: Sectors of the Indian Economy (7 Qs missing)
function getChapter19Additions() {
  return [
    makeSstCard(
      'c10s19q7',
      'Q7',
      'Distinguish between Primary, Secondary, and Tertiary sectors of economic activities with two suitable examples of each.',
      4,
      `<p>Economic activities are grouped into three fundamental sectors:</p>
<ol>
  <li><strong>Primary Sector (Extraction of Natural Resources):</strong>
    <ul>
      <li>Involves activities undertaken by directly exploiting natural resources.</li>
      <li>It forms the base for all other products that we subsequently make. (Also known as Agriculture and related sector).</li>
      <li><em>Examples:</em> Farming (cotton, wheat), dairy farming, fishing, forestry, and mining.</li>
    </ul>
  </li>
  <li><strong>Secondary Sector (Manufacturing &amp; Processing):</strong>
    <ul>
      <li>Covers activities in which natural products are changed into other forms through ways of manufacturing that we associate with industrial activity.</li>
      <li>The product is not produced by nature but has to be made. (Also known as Industrial sector).</li>
      <li><em>Examples:</em> Spinning cotton fibre into yarn and weaving cloth, converting sugarcane into sugar or jaggery, manufacturing steel from iron ore.</li>
    </ul>
  </li>
  <li><strong>Tertiary Sector (Support and Services):</strong>
    <ul>
      <li>These activities do not produce a physical good by themselves, but they are an aid or support for the production process. (Also known as Service sector).</li>
      <li><em>Examples:</em> Transport (trucks, trains), banking, storage, communication, healthcare, and software consultancy.</li>
    </ul>
  </li>
</ol>`,
      [
        { key: 'Primary sector definition and natural extraction examples', marks: '1.5 Marks' },
        { key: 'Secondary sector definition and value-addition manufacturing examples', marks: '1.5 Marks' },
        { key: 'Tertiary sector definition and auxiliary service support examples', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s19q8',
      'Q8',
      'Explain the key objectives and features of the Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA) 2005.',
      4,
      `<p>The Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA) 2005 is a landmark social security legislation in India:</p>
<ol>
  <li><strong>Guaranteed 100 Days of Wage Employment:</strong> It guarantees at least <strong>100 days of guaranteed wage employment</strong> in a financial year to every rural household whose adult members volunteer to do unskilled manual work.</li>
  <li><strong>Right to Work as Legal Entitlement:</strong> Implements the constitutional 'Right to Work'. If the government fails to provide employment within 15 days of application, the applicant is legally entitled to a daily <strong>unemployment allowance</strong>.</li>
  <li><strong>Priority to Sustainable Rural Works:</strong> The types of work that are given preference are aimed at addressing the causes of chronic poverty, such as drought relief, desilting ponds, soil conservation, afforestation, and rural connectivity.</li>
  <li><strong>Gender Empowerment:</strong> One-third of all proposed jobs are constitutionally reserved for women, ensuring gender parity in wages and rural economic independence.</li>
</ol>`,
      [
        { key: '100 days guaranteed wage employment per rural household', marks: '1 Mark' },
        { key: 'Legal Right to Work with mandatory unemployment allowance if not hired in 15 days', marks: '1 Mark' },
        { key: 'Focus on durable rural ecological assets (drought-proofing, water harvesting)', marks: '1 Mark' },
        { key: 'One-third mandatory reservation for women with equal wages', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s19q9',
      'Q9',
      'What is disguised unemployment? Explain with an example each from the agricultural (rural) sector and the urban service sector.',
      4,
      `<p><strong>Meaning of Disguised Unemployment (Underemployment):</strong></p>
<p>Disguised unemployment is a situation where more people are engaged in an activity than are actually required. Even if several people are pulled out, the total production does not fall. People appear to be working, but their productive potential is underutilized.</p>
<p><strong>1. Rural Agricultural Example (Laxmi\'s Plot):</strong></p>
<ul>
  <li>Laxmi owns a 2-hectare plot of unirrigated land. All 5 members of her family work on the plot throughout the year because they have nowhere else to go for work.</li>
  <li>Each does some work, but no one is fully employed. If 2 members of the family move to work on a commercial farm or factory in town, the agricultural output from Laxmi\'s plot remains exactly the same. Those 2 extra workers were in a state of disguised unemployment.</li>
</ul>
<p><strong>2. Urban Service Sector Example:</strong></p>
<ul>
  <li>Thousands of casual daily-wage workers in cities—such as painters, plumbers, repair persons, street vendors pushing handcarts, and rickshaw pullers.</li>
  <li>They may spend the whole day roaming the streets, but earn very little because other workers are competing for the same limited customers. They are working because they have no alternative opportunities.</li>
</ul>`,
      [
        { key: 'Definition of disguised unemployment: marginal productivity of surplus labour is zero', marks: '1.5 Marks' },
        { key: 'Rural farming family example showing output unchanged upon removing workers', marks: '1.5 Marks' },
        { key: 'Urban informal service worker example (street vendors, casual repairmen)', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s19q10',
      'Q10',
      'Why has the Tertiary Sector become the largest producing sector in India over the last forty years? Give four reasons.',
      4,
      `<p>Over the last forty years, the tertiary sector has replaced agriculture as the largest producing sector in India due to:</p>
<ol>
  <li><strong>Provision of Basic Services:</strong> In any developing country, several basic services are required—hospitals, educational institutions, post and telegraph services, police stations, courts, municipal corporations, defense, transport, and banks. The government has to take responsibility for providing these basic services.</li>
  <li><strong>Development of Agriculture and Industry:</strong> The expansion of primary and secondary production naturally requires more transport, storage, marketing, credit, and wholesale/retail trade. The greater the development of agriculture and industry, the higher the demand for such auxiliary services.</li>
  <li><strong>Rise in Income Levels:</strong> As income levels rise, sections of people start demanding many more luxury and discretionary services like eating out, tourism, shopping malls, private hospitals, private schools, and professional coaching centres.</li>
  <li><strong>Boom in Information and Communication Technology (ICT):</strong> Over the past two decades, certain new services such as those based on information and communication technology (software, BPOs, telecom, call centres) have become essential and have grown rapidly.</li>
</ol>`,
      [
        { key: 'Government responsibility for basic public services (health, schools, banking)', marks: '1 Mark' },
        { key: 'Agricultural and industrial growth spurring logistics, transport and storage', marks: '1 Mark' },
        { key: 'Rising per capita incomes driving consumer demand for hospitality and private services', marks: '1 Mark' },
        { key: 'Revolution in Information and Communication Technology (IT/BPO services)', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s19q11',
      'Q11',
      'Distinguish between the Organised Sector and the Unorganised Sector on the basis of terms of employment, job security, and working conditions.',
      5,
      `<p><strong>Comparison between Organised and Unorganised Sectors:</strong></p>
<table border="1" cellpadding="8" style="border-collapse:collapse;width:100%;margin-top:10px;">
  <tr style="background:#f0fdfa;color:#115e59;">
    <th>Feature</th>
    <th>Organised Sector</th>
    <th>Unorganised Sector</th>
  </tr>
  <tr>
    <td><strong>1. Registration &amp; Rules</strong></td>
    <td>Registered by the government and has to follow its laws (Factories Act, Minimum Wages Act, Gratuity Act).</td>
    <td>Largely outside the control of the government; rules and regulations exist but are not enforced.</td>
  </tr>
  <tr>
    <td><strong>2. Security of Employment</strong></td>
    <td>Workers enjoy <strong>security of employment</strong>; cannot be dismissed without formal procedures and due notice.</td>
    <td>Jobs are insecure and precarious; workers can be asked to leave at any time without reason.</td>
  </tr>
  <tr>
    <td><strong>3. Working Hours &amp; Overtime</strong></td>
    <td>Fixed working hours. If they work more, they are paid overtime wages by the employer.</td>
    <td>No fixed working hours (often 10–12 hours daily); no provision for overtime payment.</td>
  </tr>
  <tr>
    <td><strong>4. Social Security Benefits</strong></td>
    <td>Entitled to paid leave, payment during holidays, provident fund, medical benefits, and pension on retirement.</td>
    <td>No paid leave, no sick leave, no medical care benefits, and no retirement pension.</td>
  </tr>
  <tr>
    <td><strong>5. Examples</strong></td>
    <td>Government civil servants, bank employees, registered factory workers.</td>
    <td>Daily wage construction labourers, small landless agricultural labourers, domestic maids.</td>
  </tr>
</table>`,
      [
        { key: 'Legal registration and adherence to labour laws distinction', marks: '1 Mark' },
        { key: 'Job security comparison: Formal protection vs arbitrary dismissal', marks: '1 Mark' },
        { key: 'Working hours and overtime compensation contrast', marks: '1 Mark' },
        { key: 'Benefits: PF, paid leave, medical cover and pension vs zero benefits', marks: '1 Mark' },
        { key: 'Clear contextual real-world examples for both sectors', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s19q12',
      'Q12',
      'How are economic activities classified on the basis of ownership into Public and Private sectors? Explain with two examples of each.',
      4,
      `<p>Economic activities are classified into Public and Private sectors based on who owns assets and delivers services:</p>
<ol>
  <li><strong>Public Sector:</strong>
    <ul>
      <li><em>Ownership &amp; Control:</em> The government owns most of the assets and provides all the services.</li>
      <li><em>Primary Objective:</em> The purpose of the public sector is not merely to earn profits, but to provide essential public goods and promote <strong>social welfare</strong>. Governments raise money through taxes to meet expenses.</li>
      <li><em>Examples:</em> Indian Railways, Bharat Heavy Electricals Limited (BHEL), Post Office, State Bank of India.</li>
    </ul>
  </li>
  <li><strong>Private Sector:</strong>
    <ul>
      <li><em>Ownership &amp; Control:</em> Ownership of assets and delivery of services is in the hands of private individuals or companies.</li>
      <li><em>Primary Objective:</em> Activities in the private sector are guided strictly by the motive to <strong>earn profit</strong>. To get services, consumers have to pay money to these private entities.</li>
      <li><em>Examples:</em> Tata Iron and Steel Company (TISCO), Reliance Industries Limited (RIL), Infosys, HDFC Bank.</li>
    </ul>
  </li>
</ol>`,
      [
        { key: 'Public sector: Government ownership, funding via taxation, social welfare priority', marks: '2 Marks' },
        { key: 'Private sector: Individual/corporate ownership, profit motive, service fee model', marks: '2 Marks' }
      ]
    ),
    makeSstCard(
      'c10s19q13',
      'Q13',
      'Suggest any four effective ways to create more employment opportunities in rural India.',
      4,
      `<p>Effective strategies to generate substantial employment in rural India include:</p>
<ol>
  <li><strong>Investment in Irrigation Infrastructure:</strong> Constructing canals, dams, and digging community tubewells allows farmers to cultivate a second and third crop (e.g., wheat or vegetables after kharif rice), generating direct agricultural employment for multiple family members throughout the year.</li>
  <li><strong>Improving Rural Transport and Storage:</strong> Investing in all-weather rural roads and cold storage facilities enables farmers to sell produce in nearby towns, creating non-farm jobs in transportation (truck drivers, mechanics), logistics, and wholesale marketing.</li>
  <li><strong>Promoting Agro-Processing Industries in Semi-Rural Belts:</strong> Setting up small-scale processing units—such as dal mills, cold-pressed oil mills, honey collection centres, and potato chips/tomato processing plants—absorbs surplus rural labour.</li>
  <li><strong>Provision of Cheap Formal Credit:</strong> Providing accessible low-interest loans through cooperative banks allows farmers to buy seeds, farm machinery, dairy cows, and start cottage enterprises (handlooms, pottery, poultry).</li>
</ol>`,
      [
        { key: 'Irrigation expansion enabling multi-cropping and year-round agricultural labour', marks: '1 Mark' },
        { key: 'Rural transport and cold storage logistics creation', marks: '1 Mark' },
        { key: 'Agro-processing industries in semi-rural areas (dal mills, cold storage)', marks: '1 Mark' },
        { key: 'Low-interest institutional credit for allied dairy and cottage enterprises', marks: '1 Mark' }
      ]
    )
  ];
}

// CHAPTER 20: Money and Credit (7 Qs missing)
function getChapter20Additions() {
  return [
    makeSstCard(
      'c10s20q7',
      'Q7',
      'Why is modern currency accepted as a medium of exchange although it is made of paper and has no intrinsic value of its own?',
      4,
      `<p>Modern currency (paper notes and coins) has no intrinsic value like gold, silver, or commodity cattle, but is universally accepted as a medium of exchange because:</p>
<ol>
  <li><strong>Authorized by Sovereign Government:</strong> Modern currency is officially authorized by the government of the country. In India, the Reserve Bank of India (RBI) issues currency notes on behalf of the Central Government.</li>
  <li><strong>Legal Tender:</strong> Under the law, no other individual or organisation is allowed to issue currency. The Indian law legally permits the use of the rupee as a medium of payment that <strong>cannot be refused</strong> in settling transactions anywhere in India.</li>
  <li><strong>Universal Trust:</strong> People have absolute trust that the issuing sovereign state guarantees the value printed on the note (<em>'I promise to pay the bearer the sum of...'</em>).</li>
  <li><strong>Elimination of Barter Inefficiencies:</strong> It completely eliminates the burdensome requirement of <em>double coincidence of wants</em> associated with barter trade, providing an efficient, standardized medium of transaction.</li>
</ol>`,
      [
        { key: 'Authorization by sovereign Central Government and Reserve Bank of India', marks: '1.5 Marks' },
        { key: 'Status as Legal Tender that cannot be lawfully refused in transactions', marks: '1.5 Marks' },
        { key: 'Sovereign backing and elimination of double coincidence of wants', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s20q8',
      'Q8',
      'What are the \'terms of credit\'? Describe the four essential components that constitute terms of credit.',
      4,
      `<p><strong>Meaning of Terms of Credit:</strong></p>
<p>Every loan agreement specifies terms and conditions that the borrower must satisfy. The interest rate, collateral and documentation requirement, and the mode of repayment together comprise what is called the <strong>terms of credit</strong>.</p>
<p><strong>Four Essential Components:</strong></p>
<ol>
  <li><strong>Interest Rate:</strong> The percentage rate specified by the lender which the borrower must pay along with the repayment of the principal amount.</li>
  <li><strong>Collateral (Security):</strong> An asset that the borrower owns (such as land, house, livestock, bank deposits) and pledges to the lender as a guarantee until the loan is fully repaid. If the borrower defaults, the lender has the legal right to sell the collateral to recover payment.</li>
  <li><strong>Documentation Requirement:</strong> Documents verifying the borrower\'s identity, employment record, residence, income proof, and title deeds of assets before sanctioning the loan.</li>
  <li><strong>Mode of Repayment:</strong> The agreed schedule, duration, and method by which the borrower repays the loan (e.g., monthly cash instalments, automated bank deductions).</li>
</ol>`,
      [
        { key: 'Definition of Terms of Credit', marks: '1 Mark' },
        { key: 'Interest rate and Collateral (asset security against default)', marks: '1.5 Marks' },
        { key: 'Documentation requirement and Mode of repayment schedules', marks: '1.5 Marks' }
      ]
    ),
    makeSstCard(
      'c10s20q9',
      'Q9',
      'Why is cheap and affordable credit crucial for a country\'s overall economic development?',
      4,
      `<p>Cheap and affordable institutional credit is an indispensable driver of economic development because:</p>
<ol>
  <li><strong>Enables Productive Business Investments:</strong> Cheap credit enables farmers to purchase high-yielding seeds, fertilizers, and irrigation equipment, and entrepreneurs to establish factories, procure raw materials, and adopt new technologies.</li>
  <li><strong>Prevents the Debt Trap:</strong> High-interest loans from informal moneylenders mean that a large part of the borrower\'s earnings is used merely to pay interest, leaving little for investment and often pushing them into an inescapable cycle of debt (the <strong>debt trap</strong>).</li>
  <li><strong>Encourages Small-Scale Enterprises and Self-Employment:</strong> Accessible credit empowers small artisans, cottage industries, and young entrepreneurs to start small businesses, generating widespread local employment.</li>
  <li><strong>Reduces Poverty and Promotes Inclusive Growth:</strong> When poor households obtain affordable loans, their disposable income increases, allowing them to educate their children, improve nutrition, and escape poverty.</li>
</ol>`,
      [
        { key: 'Stimulates agricultural, industrial and infrastructural investment', marks: '1 Mark' },
        { key: 'Protects borrowers from exploitative informal debt traps', marks: '1 Mark' },
        { key: 'Fosters grassroots micro-enterprises and employment generation', marks: '1 Mark' },
        { key: 'Promotes inclusive growth by uplifting underprivileged socioeconomic strata', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s20q10',
      'Q10',
      'Compare formal sources of credit with informal sources of credit in India with respect to interest rates, supervision, and collateral requirements.',
      5,
      `<p><strong>Comparison between Formal and Informal Sources of Credit:</strong></p>
<table border="1" cellpadding="8" style="border-collapse:collapse;width:100%;margin-top:10px;">
  <tr style="background:#f0fdfa;color:#115e59;">
    <th>Feature</th>
    <th>Formal Sources (Banks, Cooperatives)</th>
    <th>Informal Sources (Moneylenders, Traders)</th>
  </tr>
  <tr>
    <td><strong>1. Supervising Authority</strong></td>
    <td>The <strong>Reserve Bank of India (RBI)</strong> strictly supervises their functioning, cash reserves, and lending priorities.</td>
    <td>There is <strong>no organisation</strong> that supervises the credit activities of lenders in the informal sector.</td>
  </tr>
  <tr>
    <td><strong>2. Rate of Interest</strong></td>
    <td>Charge reasonable and standardized interest rates regulated by the RBI.</td>
    <td>Charge exorbitantly high interest rates (often 36% to 60% per annum or higher).</td>
  </tr>
  <tr>
    <td><strong>3. Collateral &amp; Paperwork</strong></td>
    <td>Strict collateral (security) and formal documentation are mandatory prerequisites.</td>
    <td>Usually lend without formal collateral since moneylenders know borrowers personally.</td>
  </tr>
  <tr>
    <td><strong>4. Recovery Methods</strong></td>
    <td>Follow lawful, fair, and transparent legal recovery procedures.</td>
    <td>Often use coercive, unfair, and violent means to recover their money.</td>
  </tr>
  <tr>
    <td><strong>5. Objective</strong></td>
    <td>Social welfare along with banking viability; required to lend to priority agricultural sectors.</td>
    <td>Maximising personal profit and exploiting the helplessness of vulnerable borrowers.</td>
  </tr>
</table>`,
      [
        { key: 'Supervision contrast: RBI supervision vs zero regulatory oversight', marks: '1.5 Marks' },
        { key: 'Interest rate contrast: Regulated reasonable rates vs exorbitant exploitative rates', marks: '1.5 Marks' },
        { key: 'Collateral requirement and recovery mechanisms differentiation', marks: '1 Mark' },
        { key: 'Lending objectives: Social/economic development vs private profit maximization', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s20q11',
      'Q11',
      'Why are rural poor households in India still largely dependent on informal sources of credit? Mention four reasons.',
      4,
      `<p>Poor rural households continue to borrow heavily from informal moneylenders despite extortionate rates due to:</p>
<ol>
  <li><strong>Absence of Bank Branches in Rural Areas:</strong> Bank branches are not present everywhere in rural India. Even where they are present, getting a loan from a bank is much more difficult than taking a loan from informal sources.</li>
  <li><strong>Lack of Collateral (Asset Security):</strong> Bank loans require proper collateral (land titles, house deeds) and extensive documentation. Poor households lack physical assets to pledge, disqualifying them from bank credit.</li>
  <li><strong>Cumbersome Documentation Procedures:</strong> Illiterate and semi-literate villagers find the paperwork, application forms, and bureaucratic verification process of commercial banks intimidating and difficult to navigate.</li>
  <li><strong>Flexibility of Moneylenders:</strong> The informal moneylenders know the borrowers personally and are frequently willing to give a loan without collateral. They also accommodate delays in repayment and advance fresh loans even before earlier debts are cleared.</li>
</ol>`,
      [
        { key: 'Scarcity of physical bank branches in remote rural areas', marks: '1 Mark' },
        { key: 'Lack of collateral/assets among poor households to secure bank loans', marks: '1 Mark' },
        { key: 'Complex documentation and paperwork deterring illiterate villagers', marks: '1 Mark' },
        { key: 'Personal familiarity and lending flexibility of village moneylenders', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s20q12',
      'Q12',
      'What is the basic idea behind Self Help Groups (SHGs) for the poor? Explain the functioning and advantages of SHGs.',
      5,
      `<p><strong>Basic Idea of Self Help Groups (SHGs):</strong></p>
<p>The basic idea is to organize the rural poor, especially women, into small groups, pool their savings, and build collective financial self-reliance without requiring individual collateral.</p>
<p><strong>Functioning of an SHG:</strong></p>
<ol>
  <li><strong>Membership &amp; Regular Savings:</strong> A typical SHG consists of 15 to 20 members, usually belonging to one neighbourhood, who meet and save regularly. Saving per member varies from ₹ 25 to ₹ 100 or more, depending on ability.</li>
  <li><strong>Internal Lending:</strong> Members can take small loans from the group itself to meet urgent needs (e.g., buying seeds, fertilizers, school fees, releasing mortgaged land) at very reasonable interest rates decided by the group.</li>
  <li><strong>Bank Linkage:</strong> After a year or two of regular savings, the group becomes eligible for availing loans directly from commercial banks in the group\'s name without individual collateral.</li>
</ol>
<p><strong>Key Advantages:</strong></p>
<ul>
  <li><strong>Overcomes Collateral Problem:</strong> The bank lends to the group as a whole; all members are collectively responsible for timely repayment, eliminating the collateral barrier.</li>
  <li><strong>Women Empowerment:</strong> Helps rural women become financially self-reliant and provides a collective platform to discuss social issues like health, nutrition, and domestic violence.</li>
</ul>`,
      [
        { key: 'Basic concept: Organizing rural women to pool small savings', marks: '1 Mark' },
        { key: 'Functioning: 15-20 members, regular savings, low-interest internal lending', marks: '1.5 Marks' },
        { key: 'Bank linkage without individual collateral based on group accountability', marks: '1.5 Marks' },
        { key: 'Social impact: Economic independence and platform for women empowerment', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s20q13',
      'Q13',
      'Describe the role and functions of the Reserve Bank of India (RBI) in supervising formal sources of credit.',
      4,
      `<p>The Reserve Bank of India (RBI) performs critical supervisory functions over formal commercial banks:</p>
<ol>
  <li><strong>Monitoring Cash Reserve Ratio (CRR):</strong> The RBI monitors that commercial banks actually maintain the minimum statutory cash balance (currently around 4.5% of total deposits) out of deposits to satisfy daily cash withdrawal demands of depositors.</li>
  <li><strong>Ensuring Credit to Priority Sectors:</strong> The RBI ensures that banks do not give loans only to profit-making big businesses and wealthy traders, but also mandate lending to small cultivators, small-scale industries, small borrowers, and SHGs (Priority Sector Lending).</li>
  <li><strong>Periodic Reporting and Scrutiny:</strong> Periodically, banks have to submit detailed information to the RBI on how much they are lending, to whom, and at what interest rates.</li>
  <li><strong>Regulating Interest Rates and Preventing Usury:</strong> Sets benchmark policy rates (Repo Rate) to keep inflation and bank interest rates balanced, preventing unfair lending practices.</li>
</ol>`,
      [
        { key: 'Monitoring statutory minimum Cash Reserve Ratio (CRR)', marks: '1 Mark' },
        { key: 'Enforcing Priority Sector Lending to small farmers and micro-enterprises', marks: '1 Mark' },
        { key: 'Mandating periodic reporting on loan portfolios and interest rates', marks: '1 Mark' },
        { key: 'Benchmarking interest rates and regulating banking ethics', marks: '1 Mark' }
      ]
    )
  ];
}

// CHAPTER 21: Globalisation and the Indian Economy (8 Qs missing)
function getChapter21Additions() {
  return [
    makeSstCard(
      'c10s21q6',
      'Q6',
      'What is globalisation? Describe the major factors that have enabled and accelerated the process of globalisation.',
      4,
      `<p><strong>Meaning of Globalisation:</strong></p>
<p>Globalisation is the process of rapid integration or interconnection between countries through the cross-border movement of goods, services, investments, technology, and people.</p>
<p><strong>Enabling Factors:</strong></p>
<ol>
  <li><strong>Rapid Improvements in Transportation Technology:</strong> Dramatic developments in shipping containerisation, long-distance air freight, and mega-vessels have drastically cut transportation costs and accelerated goods delivery across continents.</li>
  <li><strong>Revolution in Information and Communication Technology (ICT):</strong> Telecommunication facilities (telegraph, mobile phones, satellite links) and the Internet allow instantaneous communication around the globe at negligible cost.</li>
  <li><strong>Liberalisation of Foreign Trade and Investment Policies:</strong> Removing government barriers, import licensing, and trade tariffs has enabled unrestricted flow of goods and Multinational Corporations (MNCs) to invest across national borders.</li>
  <li><strong>International Organisations (WTO):</strong> Pressure from multilateral institutions like the World Trade Organisation to remove protective trade barriers worldwide.</li>
</ol>`,
      [
        { key: 'Definition of globalisation as cross-border integration of markets and production', marks: '1 Mark' },
        { key: 'Transportation breakthroughs (containerisation and low freight costs)', marks: '1 Mark' },
        { key: 'ICT revolution (telecom, satellites, internet, and real-time data flows)', marks: '1 Mark' },
        { key: 'Liberalization of trade tariffs and WTO policies', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s21q7',
      'Q7',
      'What are Multinational Corporations (MNCs)? Explain the three distinct ways in which MNCs set up or control production in other countries.',
      5,
      `<p><strong>Definition of Multinational Corporation (MNC):</strong></p>
<p>An MNC is a company that owns or controls production of goods or services in more than one nation, locating its factories and offices in regions where cheap labour and other resources are readily available to minimize costs and maximize profits.</p>
<p><strong>Three Ways MNCs Control Production Across Borders:</strong></p>
<ol>
  <li><strong>Joint Ventures with Local Companies:</strong>
    <ul>
      <li>MNCs set up production jointly with existing local companies in the host country.</li>
      <li><em>Benefit to local company:</em> The MNC brings additional financial investment for new machines and provides advanced international production technology (e.g., Ford Motors entered India jointly with Mahindra & Mahindra).</li>
    </ul>
  </li>
  <li><strong>Buying Up Local Companies and Expanding Production:</strong>
    <ul>
      <li>The most common route for MNC investment is to buy up established domestic companies and then expand production utilizing vast financial reserves.</li>
      <li><em>Example:</em> Cargill Foods (a giant American MNC) bought over Parakh Foods in India, gaining access to their vast marketing network and oil refineries.</li>
    </ul>
  </li>
  <li><strong>Placing Orders with Small Producers (Outsourcing / Contract Manufacturing):</strong>
    <ul>
      <li>Large MNCs in garments, footwear, and sports equipment place orders with thousands of small producers around the world. The MNCs then sell these products under their own prestigious brand names, controlling price, quality, delivery, and labour conditions.</li>
    </ul>
  </li>
</ol>`,
      [
        { key: 'Definition of MNC and cost-minimization production logic', marks: '1.25 Marks' },
        { key: 'Joint ventures: Bringing foreign capital and modern technology', marks: '1.25 Marks' },
        { key: 'Acquisitions: Buying local firms and expanding capacity (Cargill-Parakh)', marks: '1.25 Marks' },
        { key: 'Contract manufacturing: Placing mass orders with small decentralized producers', marks: '1.25 Marks' }
      ]
    ),
    makeSstCard(
      'c10s21q8',
      'Q8',
      'Why did the Indian government put trade barriers on foreign trade and investment after independence? Why did it wish to remove these barriers around 1991?',
      5,
      `<p><strong>1. Reasons for Putting Trade Barriers After Independence (1947–1990):</strong></p>
<ul>
  <li><strong>Protecting Infant Domestic Industries:</strong> Domestic industries were just coming up in the 1950s and 1960s, and competition from technologically advanced foreign imports at that stage would not have allowed these infant industries to survive.</li>
  <li><strong>Encouraging Indigenous Self-Reliance:</strong> India allowed imports of only essential items such as machinery, fertilizers, and petroleum to conserve scarce foreign exchange. All developed nations protected their early industries through similar trade barriers.</li>
</ul>
<p><strong>2. Reasons for Removing Trade Barriers in 1991 (New Economic Policy / Liberalisation):</strong></p>
<ul>
  <li><strong>Improving Competitiveness of Indian Producers:</strong> The government felt that the time had come for Indian producers to compete with producers around the globe, believing that international competition would force Indian companies to upgrade quality.</li>
  <li><strong>Economic Crisis and International Support:</strong> In 1991, India faced a severe balance-of-payments crisis with dwindling foreign exchange reserves, requiring financial assistance from the World Bank and IMF, which mandated economic liberalisation.</li>
  <li><strong>Attracting Foreign Direct Investment (FDI):</strong> Removing licensing restrictions and import duties attracted foreign technology, modern management, and capital inflows.</li>
</ul>`,
      [
        { key: 'Post-independence rationale: Protecting infant industries from foreign competition', marks: '2 Marks' },
        { key: '1991 shift: Exposing domestic producers to global competition to upgrade quality', marks: '1.5 Marks' },
        { key: '1991 balance-of-payments crisis and attracting foreign investment/technology', marks: '1.5 Marks' }
      ]
    ),
    makeSstCard(
      'c10s21q9',
      'Q9',
      'What is the role of the World Trade Organisation (WTO) in liberalising international trade? Mention two major criticisms leveled against the functioning of the WTO.',
      4,
      `<p><strong>Role of the World Trade Organisation (WTO):</strong></p>
<ol>
  <li>WTO is an international organisation whose aim is to <strong>liberalise international trade</strong>. Started at the initiative of developed countries, it establishes rules regarding international trade and sees that these rules are obeyed.</li>
  <li>It provides a multilateral forum for negotiating the reduction of tariffs and elimination of non-tariff trade barriers among over 160 member countries.</li>
</ol>
<p><strong>Two Major Criticisms against the WTO:</strong></p>
<ol>
  <li><strong>Unfair Imbalance in Practice:</strong> Although WTO is supposed to allow free trade for all, in practice, developed countries have unfairly retained protective trade barriers and massive subsidies (especially agricultural subsidies to US and EU farmers), while forcing developing countries to remove their import protections.</li>
  <li><strong>Domination by Developed Powers:</strong> Developed nations dominate decision-making, compelling developing nations to open their markets to foreign manufactured goods while blocking free movement of labour and agricultural exports from developing countries.</li>
</ol>`,
      [
        { key: 'Role of WTO: Establishing rules and negotiating global trade liberalization', marks: '2 Marks' },
        { key: 'Criticism 1: Developed nations retaining massive farm subsidies unfairly', marks: '1 Mark' },
        { key: 'Criticism 2: Unequal bargaining power compelling developing nations to open markets', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s21q10',
      'Q10',
      'Analyze the positive impacts of globalisation on Indian consumers, top Indian producers, and service providers.',
      4,
      `<p>Globalisation has delivered significant benefits to various sectors in India:</p>
<ol>
  <li><strong>Advantage to Urban Consumers:</strong> Well-off consumers in urban areas enjoy greater choice, improved quality, and lower prices for automobiles, mobile phones, televisions, processed foods, and garments, enjoying a higher standard of living.</li>
  <li><strong>Rise of Indian Multinationals:</strong> Several top Indian companies have been able to benefit from increased competition by investing in newer technology and production methods. Some have emerged as multinational corporations themselves:
    <ul>
      <li><em>Tata Motors</em> (automobiles)</li>
      <li><em>Infosys</em> (IT and software)</li>
      <li><em>Ranbaxy</em> (pharmaceuticals)</li>
      <li><em>Asian Paints</em> (paints)</li>
    </ul>
  </li>
  <li><strong>Creation of New Opportunities in Services:</strong> Globalisation has created remarkable opportunities for companies providing services, particularly in <strong>Information and Communication Technology (IT)</strong>. The Indian call centre, data entry, and accounting industries have boomed due to global outsourcing.</li>
  <li><strong>Inflow of Foreign Capital and Jobs:</strong> Massive Foreign Direct Investment (FDI) in electronics, automobiles, and telecommunications has created millions of skilled jobs.</li>
</ol>`,
      [
        { key: 'Consumer benefits: Greater product choice, higher quality, lower prices', marks: '1 Mark' },
        { key: 'Indian corporate expansion into global MNCs (Tata Motors, Infosys, Ranbaxy)', marks: '1 Mark' },
        { key: 'Boom in IT and business process outsourcing (BPO) service industries', marks: '1 Mark' },
        { key: 'Foreign direct investment inflows generating high-skill employment', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s21q11',
      'Q11',
      'How has globalisation created severe challenges for small producers and workers in India? Explain with examples.',
      4,
      `<p>Globalisation has posed grave survival challenges for vulnerable economic groups:</p>
<ol>
  <li><strong>Crisis for Small Manufacturers:</strong> Small-scale industries employing millions of workers—producing batteries, capacitors, plastics, toys, tyres, dairy products, and vegetable oil—have been hit hard by cheap foreign imports. Unable to compete on price, many small units have shut down, rendering workers jobless.</li>
  <li><strong>Insecurity of Employment:</strong> To compete globally and minimize costs, employers prefer to hire workers <strong>flexibly on a temporary contract basis</strong> rather than permanent jobs. Workers have no job security and can be retrenched when demand slumps.</li>
  <li><strong>Erosion of Labour Rights and Long Hours:</strong> In export-oriented sectors like readymade garments, workers endure extremely long working hours (10–12 hours daily), night shifts, low wages, and denial of overtime compensation and statutory provident fund benefits.</li>
  <li><strong>Vulnerability of Unorganized Labour:</strong> While competition has increased profits for MNC brand owners, workers\' share in the gains of globalisation has significantly declined.</li>
</ol>`,
      [
        { key: 'Closure of small-scale manufacturing units (batteries, toys, plastics) due to cheap imports', marks: '1.5 Marks' },
        { key: 'Casualization and informalization of labour on precarious temporary contracts', marks: '1.5 Marks' },
        { key: 'Deterioration of working conditions in export garment sectors', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s21q12',
      'Q12',
      'What is meant by \'Fair Globalisation\'? What role can the government play to ensure that the benefits of globalisation are shared more equitably?',
      4,
      `<p><strong>Meaning of Fair Globalisation:</strong></p>
<p>Fair globalisation is a system of international economic integration that creates opportunities for all citizens and ensures that the benefits of globalisation are shared equitably across all sections of society, rather than enriching only the elite.</p>
<p><strong>Role of the Government in Achieving Fair Globalisation:</strong></p>
<ol>
  <li><strong>Strict Enforcement of Labour Laws:</strong> The government must ensure that labour laws are strictly implemented and workers get their statutory rights, fair minimum wages, and social security.</li>
  <li><strong>Support to Small Producers:</strong> Provide financial subsidies, technological upgrades, and credit to small producers until they become strong enough to compete with giant foreign MNCs.</li>
  <li><strong>Judicious Use of Trade and Investment Barriers:</strong> If necessary, the government can use trade and investment barriers to protect vulnerable sectors from unfair dumping of cheap foreign goods.</li>
  <li><strong>Alliances with Developing Nations at the WTO:</strong> Align with other developing countries to negotiate collectively at the WTO against the domination and agricultural subsidies of developed countries.</li>
</ol>`,
      [
        { key: 'Definition of Fair Globalisation as inclusive, equitable integration', marks: '1 Mark' },
        { key: 'Rigorous enforcement of labour laws protecting worker rights and safety', marks: '1 Mark' },
        { key: 'Financial and technological support to shield small domestic producers', marks: '1 Mark' },
        { key: 'Strategic trade barriers and coalition bargaining at the WTO', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s21q13',
      'Q13',
      'How has rapid advancement in Information and Communication Technology (ICT) stimulated the process of globalisation? Explain with an example of global outsourcing of services.',
      4,
      `<p><strong>Role of ICT in Stimulating Globalisation:</strong></p>
<ol>
  <li><strong>Instantaneous Global Communication:</strong> Telecommunications facilities (telegraph, mobile phones, fax) and satellite communication allow people across continents to access information instantly and communicate from remote locations.</li>
  <li><strong>The Internet Revolution:</strong> The Internet allows us to send instant electronic mail (e-mail) and voice-mail across the world at negligible costs. It enables real-time sharing of data, blueprints, accounting ledgers, and financial payments.</li>
</ol>
<p><strong>Concrete Example: Publishing a London News Magazine in India:</strong></p>
<ul>
  <li>A news magazine published for readers in London is designed and printed in Delhi.</li>
  <li>The text of the magazine is transmitted over the Internet from the London editorial office to Delhi. The designers in Delhi receive orders on how to design the magazine from the London office using telecommunication facilities.</li>
  <li>The designing is done on a computer. After printing, the physical magazines are sent by air to London.</li>
  <li>Even the payment of money for designing and printing from a bank in London to a bank in Delhi is done instantly through electronic funds transfer (e-banking).</li>
</ul>`,
      [
        { key: 'ICT capabilities: Real-time satellite communication and low-cost internet data', marks: '1.5 Marks' },
        { key: 'Detailed news magazine outsourcing case study (London to Delhi design, print, e-transfer)', marks: '2 Marks' },
        { key: 'Conclusion on seamless global service production integration', marks: '0.5 Mark' }
      ]
    )
  ];
}

// CHAPTER 22: Consumer Rights (7 Qs missing)
function getChapter22Additions() {
  return [
    makeSstCard(
      'c10s22q7',
      'Q7',
      'What are the various ways in which consumers are exploited by unscrupulous producers and traders in the marketplace?',
      4,
      `<p>Consumers are exploited in the marketplace through numerous unfair trade practices:</p>
<ol>
  <li><strong>Underweighing and Undermeasuring:</strong> Traders often use tampered scales and weighing stones, giving consumers less than what they paid for.</li>
  <li><strong>Adulteration and Substandard Quality:</strong> Mixing harmful foreign substances in food products (e.g., adulterated milk, edible oils, spices), or selling defective electrical goods that pose serious fire hazards.</li>
  <li><strong>Overcharging Beyond MRP:</strong> Charging prices higher than the printed Maximum Retail Price (MRP) or adding unauthorized hidden charges and taxes.</li>
  <li><strong>Misleading Advertisements:</strong> Companies make false and exaggerated claims through television and print advertisements regarding the efficacy, health benefits, or durability of products (e.g., claiming a hair oil prevents baldness or a baby food boosts IQ).</li>
  <li><strong>Defective Post-Sale Service:</strong> Refusal to provide warranty repairs, non-replacement of damaged goods, and refusing to attend to customer complaints after receiving payment.</li>
</ol>`,
      [
        { key: 'Underweighing and inaccurate measurement practices', marks: '1 Mark' },
        { key: 'Food adulteration and sale of hazardous/substandard products', marks: '1 Mark' },
        { key: 'Overcharging beyond Maximum Retail Price (MRP)', marks: '1 Mark' },
        { key: 'Misleading advertisements and denial of post-sale warranty service', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s22q8',
      'Q8',
      'What factors gave birth to the consumer movement in India as a \'social force\'? When was National Consumer Day designated?',
      4,
      `<p><strong>Factors that Gave Birth to the Consumer Movement:</strong></p>
<ol>
  <li><strong>Rampant Exploitation of Consumers:</strong> Dissatisfaction of consumers arose because of rampant unfair trade practices by sellers, including food shortages, hoarding, black marketing, and adulteration of edible oils and food grains in the 1960s.</li>
  <li><strong>Absence of Legal Protection:</strong> Till the 1970s, consumer organisations largely wrote articles and held exhibitions. There was no legal framework protecting consumers from defective goods; the prevailing rule was <em>caveat emptor</em> ('let the buyer beware').</li>
  <li><strong>Consumer Agitations in the 1970s:</strong> The movement succeeded in bringing pressure on business firms and government to correct business conduct which had become anti-consumer.</li>
  <li><strong>Enactment of COPRA (1986):</strong> A major step taken in 1986 by the Indian Government was the enactment of the <strong>Consumer Protection Act 1986</strong>, popularly known as <strong>COPRA</strong>.</li>
</ol>
<p><strong>National Consumer Day:</strong> <strong>24 December</strong> is observed as National Consumer Rights Day in India every year, commemorating the date the Consumer Protection Act was signed by the President in 1986.</p>`,
      [
        { key: 'Unfair trade practices (hoarding, adulteration, black marketing) in the 1960s', marks: '1.5 Marks' },
        { key: 'Transition from \'buyer beware\' to organized collective consumer pressure', marks: '1 Mark' },
        { key: 'Enactment of Consumer Protection Act (COPRA) 1986', marks: '1 Mark' },
        { key: 'Designation of 24 December as National Consumer Day', marks: '0.5 Mark' }
      ]
    ),
    makeSstCard(
      'c10s22q9',
      'Q9',
      'Describe the three-tier quasi-judicial machinery set up under the Consumer Protection Act (COPRA) for redressal of consumer disputes in India.',
      4,
      `<p>COPRA instituted a unique, inexpensive, three-tier quasi-judicial mechanism for speedy justice:</p>
<ol>
  <li><strong>District Consumer Disputes Redressal Forum (District Commission):</strong>
    <ul>
      <li>Set up at the district level across all districts of India.</li>
      <li>Deals with consumer claims where the value of goods or services paid does not exceed <strong>₹ 1 Crore</strong> (updated as per Consumer Protection Act 2019; historically ₹ 20 Lakhs).</li>
    </ul>
  </li>
  <li><strong>State Consumer Disputes Redressal Commission (State Commission):</strong>
    <ul>
      <li>Set up at the state capital.</li>
      <li>Deals with claims where the value of goods or services is between <strong>₹ 1 Crore and ₹ 10 Crores</strong> (historically between ₹ 20 Lakhs and ₹ 1 Crore). Also hears appeals against District Commission orders.</li>
    </ul>
  </li>
  <li><strong>National Consumer Disputes Redressal Commission (National Commission):</strong>
    <ul>
      <li>Located at New Delhi at the apex level.</li>
      <li>Deals with claims where the value of goods or services exceeds <strong>₹ 10 Crores</strong> (historically exceeding ₹ 1 Crore). Also acts as the appellate court for appeals from State Commissions.</li>
    </ul>
  </li>
</ol>`,
      [
        { key: 'District Commission jurisdiction and pecuniary limits', marks: '1.5 Marks' },
        { key: 'State Commission jurisdiction and appellate role', marks: '1.5 Marks' },
        { key: 'National Commission apex jurisdiction and appellate authority', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s22q10',
      'Q10',
      'Explain any three rights of consumers guaranteed under the Consumer Protection Act in India.',
      4,
      `<p>The Consumer Protection Act guarantees essential consumer rights:</p>
<ol>
  <li><strong>Right to Safety:</strong> Consumers have the right to be protected against the marketing of goods and services which are hazardous to life and property. For example, pressure cookers, electrical appliances, and medicines must comply with strict safety standards.</li>
  <li><strong>Right to be Informed:</strong> Consumers have the right to be informed about the particulars of quality, quantity, potency, purity, standard, date of manufacture, expiry date, ingredients, directions for use, and Maximum Retail Price (MRP).</li>
  <li><strong>Right to Choose:</strong> Any consumer who receives a service in whatever capacity, regardless of age, gender, and nature of service, has the right to choose whether to continue to receive the service. A seller cannot force a consumer to buy unwanted accessories (e.g., buying a gas connection cannot be conditioned on buying a stove from the same dealer).</li>
  <li><strong>Right to Seek Redressal:</strong> Consumers have the right to seek redressal against unfair trade practices or exploitation, including replacement of defective goods, refund, and financial compensation for injury.</li>
</ol>`,
      [
        { key: 'Right to Safety: Protection against hazardous products and appliances', marks: '1.5 Marks' },
        { key: 'Right to be Informed: Ingredients, expiry, batch, and price transparency', marks: '1.5 Marks' },
        { key: 'Right to Choose and Right to Seek Redressal with compensation', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s22q11',
      'Q11',
      'What are the essential duties and responsibilities that a consumer should observe while purchasing goods and services in the market?',
      4,
      `<p>Consumers must exercise vigilance and responsibility to protect themselves:</p>
<ol>
  <li><strong>Insist on Cash Memo and Bill:</strong> A consumer must always insist on a valid cash memo, tax invoice, and warranty card. The cash memo is the indispensable legal proof of purchase required while filing a complaint in a consumer court.</li>
  <li><strong>Check Standard Certification Marks:</strong> Look for quality assurance marks—such as <strong>ISI</strong> on electrical goods, <strong>Agmark</strong> on agricultural foods, <strong>FSSAI</strong> on packaged food, and <strong>Hallmark</strong> on gold jewellery.</li>
  <li><strong>Carefully Read Labels:</strong> Check prices, Maximum Retail Price (MRP), manufacturing date, expiry date, weight, and batch number before purchasing, especially for medicines and food items.</li>
  <li><strong>Exercise Independent Choice:</strong> Do not fall prey to deceptive advertising and misleading promises made by celebrity endorsements.</li>
  <li><strong>File Complaints against Genuine Grievances:</strong> Form consumer groups and file formal complaints even for small financial losses to discourage corrupt market conduct.</li>
</ol>`,
      [
        { key: 'Insisting on Cash Memo and official invoice as proof of purchase', marks: '1 Mark' },
        { key: 'Checking certification seals (ISI, Agmark, Hallmark, FSSAI)', marks: '1 Mark' },
        { key: 'Reading expiry dates, ingredients, and MRP warnings carefully', marks: '1 Mark' },
        { key: 'Asserting rights by filing formal complaints in consumer courts', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s22q12',
      'Q12',
      'Why are standard quality certification logos like ISI, Agmark, and Hallmark important for consumers? Explain each certification mark with an example.',
      4,
      `<p><strong>Importance of Certification Marks:</strong></p>
<p>These logos ensure that the manufacturer has followed prescribed quality standards, safety audits, and hygiene rules monitored by government certification agencies.</p>
<p><strong>Three Major Quality Certification Marks in India:</strong></p>
<ol>
  <li><strong>ISI Mark (Bureau of Indian Standards - BIS):</strong>
    <ul>
      <li>Guarantees strict safety and technical specifications for industrial, electrical, and consumer durable goods.</li>
      <li><em>Examples:</em> LPG cylinders, electric irons, switches, circuit breakers, helmets, cement, and packaged drinking water.</li>
    </ul>
  </li>
  <li><strong>Agmark (Directorate of Marketing and Inspection):</strong>
    <ul>
      <li>Quality certification mark for agricultural products and food produce, ensuring absence of adulterants.</li>
      <li><em>Examples:</em> Edible mustard oil, ghee, honey, pulses, spices, and flour.</li>
    </ul>
  </li>
  <li><strong>Hallmark (BIS Precious Metals Certification):</strong>
    <ul>
      <li>Certifies the purity and fineness of precious gold and silver jewellery through government-approved assaying centres.</li>
      <li><em>Examples:</em> 22K (916) and 18K gold ornaments.</li>
    </ul>
  </li>
</ol>`,
      [
        { key: 'General importance: Objective third-party safety and purity guarantee', marks: '1 Mark' },
        { key: 'ISI mark: Electrical appliances, helmets, and industrial goods', marks: '1 Mark' },
        { key: 'Agmark: Agricultural food produce (spices, honey, edible oils)', marks: '1 Mark' },
        { key: 'Hallmark: Assayed purity of gold and silver jewellery', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s22q13',
      'Q13',
      'What are the major challenges and practical limitations faced by the consumer movement and redressal process in India today?',
      4,
      `<p>Despite legal provisions, the consumer redressal process in India faces practical hurdles:</p>
<ol>
  <li><strong>Cumbersome and Time-Consuming Process:</strong> The consumer redressal process is becoming cumbersome, expensive, and time-consuming. Consumers often have to engage lawyers, attend multiple court hearings, and spend long hours waiting for judgments.</li>
  <li><strong>Absence of Cash Memos:</strong> In a vast majority of daily retail transactions in India, purchases are made from local unorganized shops without cash memos. In the absence of written proof of purchase, establishing evidence in consumer courts is very difficult.</li>
  <li><strong>Existing Laws Weak on Compensation:</strong> The existing laws are not very clear on the issue of compensation to consumers injured by defective goods or medical negligence.</li>
  <li><strong>Enforcement Delays:</strong> Even after favorable consumer court orders, unscrupulous sellers often file endless appeals in State or National Commissions, delaying actual financial compensation to poor victims.</li>
  <li><strong>Low Consumer Awareness:</strong> Over 40 years after COPRA, consumer awareness in rural and semi-urban India remains low; few consumers know how to draft and file a complaint.</li>
</ol>`,
      [
        { key: 'Cumbersome, slow, and expensive litigation requiring lawyers', marks: '1 Mark' },
        { key: 'Informal purchases without cash memos hindering legal evidence', marks: '1 Mark' },
        { key: 'Protracted appellate delays and weak enforcement of compensation', marks: '1 Mark' },
        { key: 'Low consumer awareness and grassroots legal literacy in rural India', marks: '1 Mark' }
      ]
    )
  ];
}

module.exports = {
  getChapter18Additions,
  getChapter19Additions,
  getChapter20Additions,
  getChapter21Additions,
  getChapter22Additions
};
