// scripts/builders/c10sst-part2.js
// Verbatim Physical NCERT Questions for Class 10 Social Science: Democratic Politics - II (Ch 13, 14, 15, 16, 17)
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

// CHAPTER 13: Power Sharing (4 Qs missing)
function getChapter13Additions() {
  return [
    makeSstCard(
      'c10s13q6',
      'Q6',
      'What are the different forms of power sharing in modern democracies? Give an example of each.',
      5,
      `<p>In modern democracies, power sharing takes several institutional forms:</p>
<ol>
  <li><strong>Horizontal Distribution of Power (Among Different Organs of Government):</strong>
    <ul>
      <li>Power is shared among Legislature, Executive, and Judiciary placed at the same level.</li>
      <li>Ensures a system of <strong>checks and balances</strong> where no organ can exercise unlimited authority. <em>Example:</em> In India, ministers are responsible to Parliament, and judges appointed by the Executive can review government laws.</li>
    </ul>
  </li>
  <li><strong>Vertical Distribution of Power (Federal Division at Different Levels):</strong>
    <ul>
      <li>Power is divided between a general Central government for the whole country and regional/provincial State governments. <em>Example:</em> In India, Union, State, and Panchayati Raj / Municipal local self-governments.</li>
    </ul>
  </li>
  <li><strong>Power Sharing Among Different Social Groups:</strong>
    <ul>
      <li>Power shared among diverse religious, caste, and linguistic groups. <em>Example:</em> The 'Community Government' in Belgium elected by Dutch, French, and German speakers, or reserved constituencies for SCs and STs in India.</li>
    </ul>
  </li>
  <li><strong>Power Sharing Among Political Parties, Pressure Groups and Movements:</strong>
    <ul>
      <li>Power shared through competition among multiple parties and through <strong>coalition governments</strong>. <em>Example:</em> National Democratic Alliance (NDA) or United Progressive Alliance (UPA) coalitions in India.</li>
    </ul>
  </li>
</ol>`,
      [
        { key: 'Horizontal division among organs (system of checks and balances)', marks: '1.25 Marks' },
        { key: 'Vertical division among governmental tiers (federalism)', marks: '1.25 Marks' },
        { key: 'Division among diverse social/linguistic groups (reserved seats/community govt)', marks: '1.25 Marks' },
        { key: 'Division among parties and interest groups (coalition governments)', marks: '1.25 Marks' }
      ]
    ),
    makeSstCard(
      'c10s13q7',
      'Q7',
      'State one prudential reason and one moral reason for power sharing with an example from the Indian context.',
      4,
      `<p><strong>1. Prudential Reason (Based on Careful Calculation of Gains and Losses):</strong></p>
<ul>
  <li><em>Reason:</em> Power sharing is good because it helps to <strong>reduce the possibility of conflict</strong> between social groups. Since social conflict often leads to violence and political instability, power sharing ensures stability of political order. Tyranny of the majority undermines national unity.</li>
  <li><em>Indian Example:</em> Reservation of legislative seats for Scheduled Castes (SC) and Scheduled Tribes (ST) in Parliament and State Assemblies guarantees vulnerable communities a fair share in decision-making, preventing alienation.</li>
</ul>
<p><strong>2. Moral Reason (Based on Pure Intrinsic Value):</strong></p>
<ul>
  <li><em>Reason:</em> Power sharing is the <strong>very spirit of democracy</strong>. A democratic rule involves sharing power with those affected by its exercise, and who have to live with its effects. People have a natural democratic right to be consulted on how they are to be governed.</li>
  <li><em>Indian Example:</em> Decentralisation of power to Panchayati Raj institutions (73rd and 74th Amendments), giving grassroots citizens the direct authority to govern their village affairs.</li>
</ul>`,
      [
        { key: 'Prudential reason: Conflict reduction, stability and preventing tyranny of majority', marks: '1.5 Marks' },
        { key: 'Moral reason: Very spirit of democracy, consent of the governed', marks: '1.5 Marks' },
        { key: 'Accurate contextual Indian examples (SC/ST reservations & Panchayati Raj)', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s13q8',
      'Q8',
      'Describe the ethnic composition of Belgium and the unique challenges it presented to democratic governance.',
      4,
      `<p><strong>Ethnic Composition of Belgium:</strong></p>
<ul>
  <li><strong>Flemish Region:</strong> 59% of the country\'s total population lives in the Flemish region and speaks the <strong>Dutch</strong> language.</li>
  <li><strong>Wallonia Region:</strong> 40% of the people live in the Wallonia region and speak <strong>French</strong>.</li>
  <li><strong>German-Speaking Minority:</strong> The remaining 1% of Belgians speak <strong>German</strong>.</li>
  <li><strong>Capital City (Brussels):</strong> In Brussels, the situation was reversed: <strong>80% of the population speaks French</strong>, while only <strong>20% speaks Dutch</strong>.</li>
</ul>
<p><strong>Unique Challenges:</strong></p>
<ul>
  <li>The minority French-speaking community was relatively rich and powerful, benefiting earlier from economic development and education.</li>
  <li>This was deeply resented by the majority Dutch-speaking community, leading to acute linguistic tensions in Brussels during the 1950s and 1960s, which required unprecedented constitutional accommodation.</li>
</ul>`,
      [
        { key: 'Demographic percentages: 59% Dutch (Flemish), 40% French (Wallonia), 1% German', marks: '2 Marks' },
        { key: 'Capital Brussels inverted ratio: 80% French, 20% Dutch', marks: '1 Mark' },
        { key: 'Economic disparities and resultant political tensions in Brussels', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s13q9',
      'Q9',
      'What were the majoritarian measures adopted by the Sri Lankan government in 1956 to establish Sinhala supremacy? What were its consequences?',
      5,
      `<p><strong>Majoritarian Measures Adopted by Sri Lanka (Act of 1956):</strong></p>
<ol>
  <li><strong>Sinhala as Sole Official Language:</strong> An Act was passed in 1956 to recognize Sinhala as the only official language of the country, completely disregarding the Tamil language.</li>
  <li><strong>Preferential Policies in Education and Employment:</strong> The governments followed preferential policies that favoured Sinhala applicants for university positions and coveted government jobs.</li>
  <li><strong>State Protection of Buddhism:</strong> A new constitution stipulated that the state shall protect and foster Buddhism, ignoring Hinduism, Christianity, and Islam practiced by Tamils.</li>
</ol>
<p><strong>Consequences:</strong></p>
<ul>
  <li><strong>Alienation of Sri Lankan Tamils:</strong> Tamils felt that none of the major political parties led by Buddhist Sinhala leaders were sensitive to their language, culture, and equal political rights.</li>
  <li><strong>Eruption of Civil War:</strong> The refusal to share power and grant regional autonomy led to the launch of political parties and armed militant organisations (like LTTE) demanding an independent Tamil Eelam, culminating in a horrific decades-long civil war that devastated Sri Lanka\'s economy and social fabric.</li>
</ul>`,
      [
        { key: '1956 Act: Sinhala declared sole official language', marks: '1 Mark' },
        { key: 'Preferential state policies for Sinhalas in universities and jobs', marks: '1 Mark' },
        { key: 'Constitutional mandate to foster Buddhism over other faiths', marks: '1 Mark' },
        { key: 'Alienation of Sri Lankan Tamils and emergence of Tamil Eelam demand', marks: '1 Mark' },
        { key: 'Devastating civil war and socio-economic breakdown', marks: '1 Mark' }
      ]
    )
  ];
}

// CHAPTER 14: Federalism (3 Qs missing)
function getChapter14Additions() {
  return [
    makeSstCard(
      'c10s14q7',
      'Q7',
      'Point out one feature in the practice of federalism in India that is similar to and one feature that is different from that of Belgium.',
      3,
      `<p><strong>1. Similar Feature (Power Sharing Between Central and Regional Governments):</strong></p>
<ul>
  <li>In both India and Belgium, governmental power is divided constitutionally between a general Central (Union) Government and regional/provincial State Governments.</li>
  <li>State governments are not subordinate to the central government and exercise autonomous constitutional powers in their allotted legislative jurisdictions.</li>
</ul>
<p><strong>2. Different Feature (Community Government vs Constitutional Linguistic Protection):</strong></p>
<ul>
  <li><strong>Belgium</strong> has a unique third tier called the <strong>'Community Government'</strong> elected by people belonging to one language community (Dutch, French, or German), regardless of where they reside, holding exclusive power regarding cultural, educational, and language issues.</li>
  <li><strong>India</strong> does not have community governments based on language; instead, India has a third tier of democratic local self-government (Panchayats and Municipalities) based strictly on geographical territories.</li>
</ul>`,
      [
        { key: 'Similarity: Autonomous constitutional federal division of powers', marks: '1.5 Marks' },
        { key: 'Difference: Community Government in Belgium vs Territorial Local Panchayats in India', marks: '1.5 Marks' }
      ]
    ),
    makeSstCard(
      'c10s14q8',
      'Q8',
      'Describe the three-fold distribution of legislative powers between the Union Government and the State Governments under the Constitution of India.',
      4,
      `<p>The Constitution of India provides a three-fold distribution of legislative subjects in the Seventh Schedule:</p>
<ol>
  <li><strong>Union List (National Importance):</strong>
    <ul>
      <li>Includes subjects of national importance where uniform policy is required nationwide.</li>
      <li>The Union Government alone can make laws on these subjects.</li>
      <li><em>Examples:</em> Defence, Foreign Affairs, Banking, Communications, and Currency.</li>
    </ul>
  </li>
  <li><strong>State List (State and Local Importance):</strong>
    <ul>
      <li>Includes subjects of local and regional importance.</li>
      <li>The State Governments alone have exclusive authority to pass legislation.</li>
      <li><em>Examples:</em> Police, Trade and Commerce, Agriculture, Irrigation, and Public Health.</li>
    </ul>
  </li>
  <li><strong>Concurrent List (Common Interest):</strong>
    <ul>
      <li>Includes subjects of common interest to both the Union and the States.</li>
      <li>Both Parliament and State Legislatures can pass laws. In case of a conflict, the <strong>Union law prevails</strong>.</li>
      <li><em>Examples:</em> Education, Forests, Trade Unions, Marriage, Adoption, and Succession.</li>
    </ul>
  </li>
  <li><strong>Residuary Powers:</strong> Matters not present in any list (e.g., Computer software, Cyber laws) belong exclusively to the Union Parliament.</li>
</ol>`,
      [
        { key: 'Union List: National subjects (defence, banking, currency) legislated by Centre', marks: '1 Mark' },
        { key: 'State List: Regional subjects (police, agriculture, trade) legislated by States', marks: '1 Mark' },
        { key: 'Concurrent List: Shared subjects (education, forests) with Union supremacy in conflicts', marks: '1 Mark' },
        { key: 'Residuary powers vested in the Union Parliament (cyber laws)', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s14q9',
      'Q9',
      'What were the major constitutional steps taken in 1992 towards decentralisation and empowering local self-governments in India?',
      5,
      `<p>The 73rd and 74th Constitutional Amendment Acts of 1992 made third-tier local self-government in India substantially more powerful and effective:</p>
<ol>
  <li><strong>Mandatory Periodic Elections:</strong> It was made constitutionally mandatory to hold regular elections to local government bodies (Panchayats and Municipalities) every five years.</li>
  <li><strong>Reservation for SCs, STs, and OBCs:</strong> Seats are reserved in the elected bodies and the executive heads of these institutions for Scheduled Castes, Scheduled Tribes, and Other Backward Classes.</li>
  <li><strong>One-Third Reservation for Women:</strong> At least <strong>one-third (33%)</strong> of all positions and seats are constitutionally reserved for women, fostering grassroots female leadership.</li>
  <li><strong>Creation of State Election Commission:</strong> An independent institution called the <strong>State Election Commission</strong> was created in each state to conduct panchayat and municipal elections.</li>
  <li><strong>Mandatory Sharing of State Revenue:</strong> State governments are constitutionally required to share some powers and revenue with local government bodies through the State Finance Commission.</li>
</ol>`,
      [
        { key: 'Mandatory regular 5-year elections to local bodies', marks: '1 Mark' },
        { key: 'Reservation of seats for SC, ST, and backward classes', marks: '1 Mark' },
        { key: 'One-third (33%) mandatory reservation of seats for women', marks: '1 Mark' },
        { key: 'Creation of independent State Election Commission in each state', marks: '1 Mark' },
        { key: 'Mandatory devolution of powers and revenue sharing via State Finance Commission', marks: '1 Mark' }
      ]
    )
  ];
}

// CHAPTER 15: Gender, Religion and Caste (3 Qs missing)
function getChapter15Additions() {
  return [
    makeSstCard(
      'c10s15q7',
      'Q7',
      'State how caste inequalities and caste prejudices are still continuing in contemporary India despite constitutional prohibitions.',
      4,
      `<p>Although the Constitution of India prohibited caste-based discrimination and outlawed untouchability, caste inequalities continue to persist in the following forms:</p>
<ol>
  <li><strong>Persistence of Endogamy:</strong> Even in modern times, most marriages still take place within the same caste group or community. Inter-caste marriages remain a minority and face social opposition.</li>
  <li><strong>Economic Disparities &amp; Land Ownership:</strong> Centuries of caste disadvantages have created deep structural economic divides. Upper castes remain disproportionately wealthy, educated, and well-represented in high-income corporate and professional jobs, while Dalits and backward communities remain over-represented among landless agricultural labourers and urban unorganized workers.</li>
  <li><strong>Unequal Access to Higher Education:</strong> Educational attainment remains closely linked to caste hierarchy. Castes that had traditional access to learning have adapted faster to modern technical education.</li>
  <li><strong>Caste-Based Voting and Political Polarization:</strong> Political parties appeal to caste sentiments, choose candidates based on caste calculations, and mobilize caste vote banks during elections.</li>
</ol>`,
      [
        { key: 'Persistence of intra-caste endogamy in marriages', marks: '1 Mark' },
        { key: 'Historical economic inequality and landlessness among Dalits', marks: '1 Mark' },
        { key: 'Disproportionate access to quality higher education and high-paying jobs', marks: '1 Mark' },
        { key: 'Caste mobilization and vote-bank politics during elections', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s15q8',
      'Q8',
      'Mention any four forms that communalism can take in politics.',
      4,
      `<p>Communalism in politics can manifest in several dangerous ways:</p>
<ol>
  <li><strong>Everyday Beliefs and Stereotypes:</strong> Religious prejudices, stereotypes of religious communities, and belief in the superiority of one\'s religion over other religions are routine aspects of everyday thinking.</li>
  <li><strong>Quest for Political Dominance:</strong> A communal mind often leads to a quest for political dominance of one\'s own religious community. For majority communities, this takes the form of majoritarian dominance; for minority communities, it can take the form of a desire to form a separate political unit.</li>
  <li><strong>Political Mobilisation on Religious Lines:</strong> Involves the use of sacred religious symbols, religious leaders, emotional appeals, and plain fear to bring the followers of one religion together in the political arena during elections.</li>
  <li><strong>Communal Violence, Riots, and Massacres:</strong> In its most ugly and extreme form, communalism leads to communal violence, riots, and targeted massacres, as witnessed during the Partition of India and in recurring post-independence riots.</li>
</ol>`,
      [
        { key: 'Everyday prejudices and psychological stereotypes of superiority', marks: '1 Mark' },
        { key: 'Political dominance aspirations (majoritarianism vs separatism)', marks: '1 Mark' },
        { key: 'Electoral mobilization using religious symbols, clergy, and emotional appeals', marks: '1 Mark' },
        { key: 'Extreme manifestation: Communal riots, violence, and massacres', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s15q9',
      'Q9',
      'State two reasons why women\'s representation in India\'s national parliament has remained historically low. Describe the historic legislative remedy enacted to address this issue.',
      4,
      `<p><strong>Reasons for Low Representation of Women in Parliament:</strong></p>
<ol>
  <li><strong>Patriarchal Mindset and Social Stereotypes:</strong> A deeply entrenched patriarchal social structure expects women to prioritize domestic responsibilities and family care over public political leadership, discouraging female candidacy.</li>
  <li><strong>Reluctance of Political Parties:</strong> Major political parties are historically reluctant to give election tickets to female candidates, citing perceived lack of \'winnability\' and resistance within male-dominated party command structures. (Women constituted less than 15% of MPs in the Lok Sabha).</li>
</ol>
<p><strong>Historic Legislative Remedy (Women\'s Reservation Act):</strong></p>
<ul>
  <li>The passage of the <strong>Nari Shakti Vandan Adhiniyam (106th Constitutional Amendment Act, 2023)</strong> constitutionally reserves <strong>33% (one-third)</strong> of all seats in the Lok Sabha, State Legislative Assemblies, and the Delhi Legislative Assembly for women.</li>
  <li>This landmark reform ensures substantial, guaranteed democratic representation for women in national law-making bodies.</li>
</ul>`,
      [
        { key: 'Patriarchal social norms and domestic role expectations', marks: '1 Mark' },
        { key: 'Male-dominated party structures denying election tickets to women', marks: '1 Mark' },
        { key: 'Nari Shakti Vandan Adhiniyam (106th Amendment) reserving 33% seats in Lok Sabha & Assemblies', marks: '2 Marks' }
      ]
    )
  ];
}

// CHAPTER 16: Political Parties (4 Qs missing)
function getChapter16Additions() {
  return [
    makeSstCard(
      'c10s16q6',
      'Q6',
      'What are the various functions that political parties perform in a democracy? Mention any five functions.',
      5,
      `<p>Political parties perform vital democratic functions:</p>
<ol>
  <li><strong>Contest Elections:</strong> In most democracies, elections are fought mainly among candidates put up by political parties. Parties choose their candidates through top leadership or party primaries.</li>
  <li><strong>Put Forward Policies and Programmes:</strong> Parties group a vast multitude of divergent public opinions into a few basic directions which it supports, giving voters clear policy alternatives.</li>
  <li><strong>Making Laws:</strong> Laws are debated and formally passed in the legislature. Since most members belong to a political party, they vote according to the direction of the party leadership.</li>
  <li><strong>Form and Run Governments:</strong> The party or coalition winning a majority forms the executive government, selects ministers, and trains leaders to direct government policy.</li>
  <li><strong>Role of Opposition:</strong> Parties that lose elections play the role of opposition by voicing different views and criticizing the government for its failures or wrong policies.</li>
  <li><strong>Shape Public Opinion:</strong> They raise and highlight issues, launch movements for the resolution of problems, and have lakhs of active members spread across the country.</li>
</ol>`,
      [
        { key: 'Contesting elections and fielding candidates', marks: '1 Mark' },
        { key: 'Formulating policy alternatives and manifestos', marks: '1 Mark' },
        { key: 'Making laws in the legislature along party lines', marks: '1 Mark' },
        { key: 'Forming and running executive governments', marks: '1 Mark' },
        { key: 'Playing the vital role of opposition and shaping public opinion', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s16q7',
      'Q7',
      'Explain the four major challenges faced by political parties in India today.',
      4,
      `<p>Political parties face four serious internal and structural challenges:</p>
<ol>
  <li><strong>Lack of Internal Democracy:</strong> Concentration of power in one or a few top leaders. Parties do not maintain membership registers, hold regular organizational elections, or conduct internal consultations. Ordinary members have no voice in party policy.</li>
  <li><strong>Dynastic Succession:</strong> Since leaders on top hold unfair advantages, top positions are invariably controlled by members of one family or their close coterie. Capable grassroot workers are denied leadership based on merit.</li>
  <li><strong>Growing Role of Money and Muscle Power:</strong> Parties prioritize winning elections by any means, nominating wealthy candidates who can fund election campaigns, or fielding candidates with serious criminal charges. Large corporations that fund parties influence policy decisions.</li>
  <li><strong>Lack of Meaningful Choice:</strong> In recent years, ideological differences among parties have narrowed significantly across the world, offering voters very few truly distinct economic policy alternatives.</li>
</ol>`,
      [
        { key: 'Lack of internal democracy and organizational elections', marks: '1 Mark' },
        { key: 'Dynastic succession and concentration of power within families', marks: '1 Mark' },
        { key: 'Influence of money, criminal elements and corporate funding', marks: '1 Mark' },
        { key: 'Lack of meaningful ideological choices for voters', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s16q8',
      'Q8',
      'Suggest any three effective reforms to strengthen political parties so that they perform their democratic functions properly.',
      3,
      `<p>Reforms to strengthen political parties in India include:</p>
<ol>
  <li><strong>Regulation of Internal Affairs of Parties:</strong> A law should be made mandatory to regulate internal party affairs—compelling parties to maintain a register of members, follow their own constitution, have an independent dispute judge, and hold open elections for highest posts.</li>
  <li><strong>Mandatory One-Third Tickets for Women:</strong> It should be legally mandatory for political parties to give a minimum quota (around one-third) of tickets to women candidates, and maintain women representation in decision-making bodies.</li>
  <li><strong>State Funding of Elections:</strong> The government should provide state funding for elections in the form of petrol, paper, telephone, or cash grants based on votes secured in the previous election to eliminate black money and corrupt corporate lobbying.</li>
</ol>`,
      [
        { key: 'Legal regulation of internal party affairs and mandatory elections', marks: '1 Mark' },
        { key: 'Mandatory quota for women candidates in election tickets', marks: '1 Mark' },
        { key: 'State funding of elections to eliminate black money dominance', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s16q9',
      'Q9',
      'Differentiate between a National Political Party and a State (Regional) Political Party on the basis of criteria laid down by the Election Commission of India.',
      4,
      `<p><strong>Comparison between National Party and State Party:</strong></p>
<table border="1" cellpadding="8" style="border-collapse:collapse;width:100%;margin-top:10px;">
  <tr style="background:#f0fdfa;color:#115e59;">
    <th>Criteria</th>
    <th>State (Regional) Party</th>
    <th>National Party</th>
  </tr>
  <tr>
    <td><strong>1. Vote Share Threshold</strong></td>
    <td>A party that secures at least <strong>6% of the total votes</strong> in an election to the Legislative Assembly of a State.</td>
    <td>A party that secures at least <strong>6% of total votes</strong> in Lok Sabha elections OR Assembly elections in four States.</td>
  </tr>
  <tr>
    <td><strong>2. Seat Threshold</strong></td>
    <td>Must win at least <strong>2 seats</strong> in the Legislative Assembly of that state.</td>
    <td>Must win at least <strong>4 seats</strong> in the Lok Sabha.</td>
  </tr>
  <tr>
    <td><strong>3. Area of Influence</strong></td>
    <td>Influence is concentrated largely within one or two states.</td>
    <td>Influence spans across multiple states nationwide.</td>
  </tr>
  <tr>
    <td><strong>4. Examples</strong></td>
    <td>DMK, AIADMK, BJD, Samajwadi Party, AAP (origin).</td>
    <td>BJP, Indian National Congress, CPI(M), AAP (national).</td>
  </tr>
</table>`,
      [
        { key: 'State Party threshold: 6% assembly votes + 2 assembly seats', marks: '1.5 Marks' },
        { key: 'National Party threshold: 6% Lok Sabha/4-state votes + 4 Lok Sabha seats', marks: '1.5 Marks' },
        { key: 'Area of influence and appropriate examples for both categories', marks: '1 Mark' }
      ]
    )
  ];
}

// CHAPTER 17: Outcomes of Democracy (4 Qs missing)
function getChapter17Additions() {
  return [
    makeSstCard(
      'c10s17q6',
      'Q6',
      'How does democracy produce an accountable, responsive and legitimate government?',
      5,
      `<p>Democracy delivers these three democratic outcomes through defined institutional mechanisms:</p>
<ol>
  <li><strong>Accountable Government:</strong>
    <ul>
      <li>Democracy ensures that decision-making is based on constitutional norms and procedures. Citizens have the right to know if decisions were made following correct rules (known as <strong>transparency</strong>).</li>
      <li>Citizens hold leaders accountable through regular, free, and fair elections, open public debate, and Right to Information (RTI).</li>
    </ul>
  </li>
  <li><strong>Responsive Government:</strong>
    <ul>
      <li>Democracies are responsive to the needs and aspirations of citizens through parliamentary questioning, media scrutiny, and public protests.</li>
      <li>Unlike autocratic regimes, a democratic government cannot afford to ignore the demands of the majority of its population if it hopes to win re-election.</li>
    </ul>
  </li>
  <li><strong>Legitimate Government:</strong>
    <ul>
      <li>A democratic government may sometimes be slow, less efficient, and not always clean, but it is <strong>people\'s own government</strong>.</li>
      <li>It derives its legitimate authority directly from the consent of the governed expressed through periodic universal adult suffrage, commanding genuine voluntary obedience.</li>
    </ul>
  </li>
</ol>`,
      [
        { key: 'Accountability through transparent procedures, RTI and regular elections', marks: '2 Marks' },
        { key: 'Responsiveness to public opinion, protests and citizen welfare needs', marks: '1.5 Marks' },
        { key: 'Legitimacy as people\'s own government based on democratic consent', marks: '1.5 Marks' }
      ]
    ),
    makeSstCard(
      'c10s17q7',
      'Q7',
      '\"Democracies do not appear to be very successful in reducing economic inequalities.\" Justify this statement with relevant arguments and examples.',
      4,
      `<p>The argument that democracies have struggled to eliminate economic inequality is supported by the following facts:</p>
<ol>
  <li><strong>Concentration of Wealth in Ultra-Rich Hands:</strong> A small number of ultra-rich individuals enjoy a highly disproportionate share of wealth and income. Their share in the total national income of countries has been steadily increasing.</li>
  <li><strong>Plight of the Bottom Population:</strong> Those at the bottom of the society have very little to depend upon. Their incomes have been declining, and they struggle to meet the basic needs of life—food, clothing, house, education, and health.</li>
  <li><strong>Reluctance of Elected Leaders:</strong> In actual life, democracies do not appear to be very successful in reducing economic inequalities. Although the poor constitute a large proportion of voters and no party likes to lose their votes, democratically elected governments do not appear keen to address the question of poverty aggressively.</li>
  <li><strong>Extreme Global Example (Bangladesh):</strong> In countries like Bangladesh, more than half of the population lives in poverty, and people in several poor countries are now dependent on rich countries even for food supplies.</li>
</ol>`,
      [
        { key: 'Disproportionate wealth accumulation among the top 1%', marks: '1 Mark' },
        { key: 'Stagnant or declining real incomes of bottom socioeconomic deciles', marks: '1 Mark' },
        { key: 'Failure of elected governments to deliver aggressive redistribution', marks: '1 Mark' },
        { key: 'Global instances of acute persistent poverty within democracies', marks: '1 Mark' }
      ]
    ),
    makeSstCard(
      'c10s17q8',
      'Q8',
      'What are the two essential conditions under which democracy can successfully accommodate social diversities?',
      4,
      `<p>To ensure that democracy accommodates social, ethnic, and religious diversities peacefully, two conditions must be fulfilled:</p>
<ol>
  <li><strong>Rule of Majority Must Work with the Minority:</strong>
    <ul>
      <li>The majority always needs to work with the minority so that governments function to represent the general view.</li>
      <li>Democracy is not simply rule by majority opinion; majority and minority opinions are not permanent, and consensus-building is vital.</li>
    </ul>
  </li>
  <li><strong>Rule by Majority Must NOT Become Rule by Majority Community:</strong>
    <ul>
      <li>Rule by majority means that in case of every decision or election, different persons and groups may and can form a majority.</li>
      <li>It must not become rule by a majority community in terms of religion, race, or linguistic group (as happened disastrously in majoritarian Sri Lanka).</li>
      <li>Democracy remains democracy only as long as every citizen has a fair chance of being in the majority at some point in time.</li>
    </ul>
  </li>
</ol>`,
      [
        { key: 'Majority must work collaboratively with minority to represent general interest', marks: '2 Marks' },
        { key: 'Rule of majority must not transform into permanent majoritarian communal rule', marks: '2 Marks' }
      ]
    ),
    makeSstCard(
      'c10s17q9',
      'Q9',
      '\"Democracy is much superior to any other form of government in promoting dignity and freedom of the individual.\" Explain.',
      4,
      `<p>Democracy stands much superior to autocracies and monarchies in advancing human dignity and liberty:</p>
<ol>
  <li><strong>Dignity of Women:</strong> Most societies across the world were historically male-dominated. Long struggles by women have created some sensitivity today that respect and equal treatment of women are necessary ingredients of a democratic society. Once recognized constitutionally, women can wage legal and moral battles against discrimination.</li>
  <li><strong>Dignity of Disadvantaged and Discriminated Castes:</strong> Democracy in India has strengthened the claims of the disadvantaged and discriminated castes for equal status and equal opportunity. Although caste discrimination still exists, it lacks moral and legal foundations.</li>
  <li><strong>Transforming Subjects into Citizens:</strong> In non-democratic regimes, people are mere subjects of the king or military dictator. In a democracy, citizens possess fundamental rights, and their individual vote carries equal weight regardless of wealth or status.</li>
  <li><strong>Public Scrutiny and Examination:</strong> The most distinctive feature of democracy is that its examination never gets over. As democracy passes one test, it produces another test. People continually demand better governance, which itself proves the success of democratic consciousness.</li>
</ol>`,
      [
        { key: 'Constitutional basis for the dignity and equal rights of women', marks: '1 Mark' },
        { key: 'Empowerment and equal status for historically marginalized castes', marks: '1 Mark' },
        { key: 'Status of empowered citizens with equal voting power over subjection', marks: '1 Mark' },
        { key: 'Ever-demanding critical public scrutiny as a hallmark of democratic health', marks: '1 Mark' }
      ]
    )
  ];
}

module.exports = {
  getChapter13Additions,
  getChapter14Additions,
  getChapter15Additions,
  getChapter16Additions,
  getChapter17Additions
};
