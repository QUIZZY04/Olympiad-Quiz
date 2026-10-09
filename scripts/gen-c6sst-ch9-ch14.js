// scripts/gen-c6sst-ch9-ch14.js
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'chapters-c6sst');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Helper to wrap question card
function qCard(id, qNum, title, type, question, answerContent, markingScheme) {
  return `
    <div class="q-card" id="${id}">
      <div class="q-header" onclick="toggleQ('${id}')">
        <span class="q-title">${qNum}. ${title}</span>
        <span class="q-type badge-${type.toLowerCase()}">${type}</span>
        <span class="toggle-icon">▼</span>
      </div>
      <div class="q-body" style="display: block;">
        <p class="question-text"><strong>Question:</strong> ${question}</p>
        <div class="answer-box">
          ${answerContent}
        </div>
        ${markingScheme ? `
        <div class="marking-scheme">
          <span class="ms-title">🎯 CBSE Marking Scheme Rubric (Exam Guide):</span>
          <p>${markingScheme}</p>
        </div>` : ''}
      </div>
    </div>`;
}

// CHAPTER 9: Family and Community
const ch9 = `
<section class="chapter-section" id="ch9">
  <div class="chapter-header">
    <div class="ch-badge">9</div>
    <div class="chapter-header-info">
      <h2>Chapter 9: Family and Community</h2>
      <p>NCERT Exploring Society: India and Beyond (Class 6) — Types of Families, Care &amp; Support, Gender Roles, Community Living &amp; Civic Sense | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Civic &amp; Social Concepts</div>
    <ul class="concept-list">
      <li><strong>The Family as the Basic Unit of Society:</strong> The family is our primary social institution where children receive love, security, language, values, and socialization.
        <ul>
          <li><strong>Nuclear Family:</strong> Consists of parents and their children living together.</li>
          <li><strong>Joint / Extended Family:</strong> Includes multiple generations—grandparents, parents, uncles, aunts, and cousins living under the same roof, sharing resources and responsibilities.</li>
        </ul>
      </li>
      <li><strong>Mutual Care, Support &amp; Adaptation:</strong> Family members support each other through sickness, childhood, and elderhood. Strong families are built on empathy, sharing, listening, and adjusting to changing circumstances.</li>
      <li><strong>Breaking Gender Stereotypes at Home:</strong> Traditional stereotypes that assign household cooking, cleaning, and care exclusively to women while assigning outdoor earning to men are evolving. True domestic harmony flourishes when domestic chores are shared equally among all members regardless of gender.</li>
      <li><strong>Community Living:</strong> A community is a group of people living in the same geographic area or sharing common interests, culture, or goals.
        <ul>
          <li>Communities build collective facilities: parks, clean drinking water supply, libraries, streetlights, and festive celebrations.</li>
          <li>Community spirit is reflected when neighbours step forward during emergencies (such as natural disasters or pandemics) to protect vulnerable individuals.</li>
        </ul>
      </li>
      <li><strong>Civic Sense:</strong> Unwritten social etiquette that respects public spaces—keeping surroundings clean, avoiding loud noises, adhering to queue etiquette, disposing of garbage responsibly, and conserving shared resources.</li>
    </ul>
  </div>

  <!-- SVG Diagram: Family and Community Interconnection -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 210" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Concentric Spheres of Social Life: Individual &rarr; Family &rarr; Community</text>
      <!-- Center: Individual -->
      <circle cx="280" cy="115" r="30" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="280" y="119" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#b45309" text-anchor="middle">Individual</text>

      <!-- Middle: Family -->
      <circle cx="280" cy="115" r="65" fill="none" stroke="#0284c7" stroke-width="2.5" stroke-dasharray="5,4"/>
      <text x="280" y="65" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#0369a1" text-anchor="middle">Family (Love, Values, Nurturing)</text>

      <!-- Outer: Community -->
      <circle cx="280" cy="115" r="95" fill="none" stroke="#16a34a" stroke-width="2.5"/>
      <text x="280" y="36" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#15803d" text-anchor="middle">Community &amp; Neighbourhood (Cooperation, Public Space, Civic Duty)</text>

      <!-- Connecting arrows/labels -->
      <text x="130" y="120" font-family="system-ui, sans-serif" font-size="9.5" fill="#475569">Shared Chores</text>
      <text x="130" y="135" font-family="system-ui, sans-serif" font-size="9.5" fill="#475569">&amp; Caregiving</text>

      <text x="430" y="120" font-family="system-ui, sans-serif" font-size="9.5" fill="#475569">Public Health,</text>
      <text x="430" y="135" font-family="system-ui, sans-serif" font-size="9.5" fill="#475569">Safety &amp; Festivals</text>
    </svg>
    <p style="font-size: 11px; color: #64748b; margin-top: 6px;">Figure 9.1: The interdependent spheres connecting an individual's personal ethics, family bonds, and community well-being.</p>
  </div>

  <div class="ex-div">
    <div class="ex-heading">NCERT Textbook Exercises &amp; Model Solutions</div>

    ${qCard(
      'c6sst-ch9-q1',
      'Q1',
      'Difference between Nuclear and Joint Family',
      'Compare',
      'Distinguish between a nuclear family and a joint family. What are the advantages of living in each type of family?',
      `<p class="step"><strong>1. Nuclear Family:</strong></p>
      <ul class="step-list">
        <li><strong>Composition:</strong> Consists only of parents and their unmarried children living in an independent household.</li>
        <li><strong>Advantages:</strong> Greater personal privacy, flexibility in daily routines, direct individual decision-making, and mobility to relocate easily for education or career.</li>
      </ul>
      <p class="step"><strong>2. Joint Family:</strong></p>
      <ul class="step-list">
        <li><strong>Composition:</strong> A multi-generational household consisting of grandparents, parents, uncles, aunts, and cousins living and eating together.</li>
        <li><strong>Advantages:</strong>
          <ul>
            <li><strong>Shared Childcare &amp; Elder Care:</strong> Grandparents nurture young children with stories and values, while younger members care for aging seniors.</li>
            <li><strong>Shared Financial Burden:</strong> Expenses and domestic tasks are pooled, reducing stress during hardships.</li>
            <li><strong>Emotional Companionship:</strong> Children grow up with cousins, learning sharing, compromise, and social skills naturally.</li>
          </ul>
        </li>
      </ul>`,
      '4 marks: 1.5 marks for definition/composition of both + 2.5 marks for distinct advantages of each.'
    )}

    ${qCard(
      'c6sst-ch9-q2',
      'Q2',
      'Sharing Domestic Work and Gender Roles',
      'Explain',
      'Why is it important to share household chores equally among boys and girls, men and women? What problems arise from rigid gender roles?',
      `<p class="step"><strong>1. Need for Equal Sharing of Domestic Chores:</strong></p>
      <ul class="step-list">
        <li><strong>Fairness &amp; Equality:</strong> Cooking, cleaning, washing dishes, and grocery shopping are fundamental life skills, not gender-specific duties.</li>
        <li><strong>Health &amp; Well-being:</strong> When women bear the entire burden of household chores alone (often alongside outside jobs), it leads to chronic fatigue, stress, and loss of personal leisure or career opportunities.</li>
        <li><strong>Positive Role Models:</strong> When children see fathers and brothers actively cooking and cleaning, they grow up treating all genders with respect and equality.</li>
      </ul>
      <p class="step"><strong>2. Problems from Rigid Gender Stereotypes:</strong></p>
      <ul class="step-list">
        <li>Boys who never learn domestic chores struggle to live independently as adults.</li>
        <li>Girls are often forced to sacrifice their study time or career dreams because they are expected to do all the household work.</li>
      </ul>`,
      '3 marks: 1.5 marks for reasons to share domestic work equally + 1.5 marks for negative outcomes of rigid stereotypes.'
    )}

    ${qCard(
      'c6sst-ch9-q3',
      'Q3',
      'What is Community Living?',
      'Short',
      'What do you understand by the term "community"? Give two examples of how communities help people during crises.',
      `<p class="step"><strong>1. Definition of Community:</strong></p>
      <p>A community is a group of individuals living in a shared geographical area or joined by common interests, traditions, or values, who interact regularly and cooperate to solve collective problems and enhance daily life.</p>
      <p class="step"><strong>2. Examples of Community Support during Crises:</strong></p>
      <ul class="step-list">
        <li><strong>During Floods or Natural Calamities:</strong> Neighbours come together to prepare food packets, arrange clean drinking water, rescue stranded elderly residents, and provide dry shelters.</li>
        <li><strong>During Pandemics or Medical Emergencies:</strong> Resident welfare associations (RWAs) and youth volunteer groups delivered groceries and medicines to elderly households living alone, ensuring no one suffered in isolation.</li>
      </ul>`,
      '3 marks: 1 mark for clear definition + 2 marks for two practical crisis cooperation examples.'
    )}

    ${qCard(
      'c6sst-ch9-q4',
      'Q4',
      'Importance of Civic Sense',
      'Application',
      'What is civic sense? List four practices that demonstrate good civic sense in our neighbourhood and school.',
      `<p class="step"><strong>1. Meaning of Civic Sense:</strong></p>
      <p>Civic sense is the social awareness and moral responsibility that citizens demonstrate towards public spaces, shared amenities, environment, and fellow citizens.</p>
      <p class="step"><strong>2. Four Practices Demonstrating Good Civic Sense:</strong></p>
      <ul class="step-list">
        <li><strong>Responsible Waste Disposal:</strong> Never littering on streets, parks, or school corridors; segregating wet and dry waste into designated bins.</li>
        <li><strong>Noise and Pollution Control:</strong> Keeping TV or speaker volume low, avoiding unnecessary vehicle honking in residential/hospital zones.</li>
        <li><strong>Queue Discipline:</strong> Standing patiently in line at bus stops, ticket counters, and school canteens without pushing or cutting ahead.</li>
        <li><strong>Care for Public Property:</strong> Protecting streetlights, park benches, and public transport seats from vandalism, defacement, or damage.</li>
      </ul>`,
      '3 marks: 1 mark for definition of civic sense + 2 marks for 4 well-explained everyday practices (0.5 mark each).'
    )}
  </div>
</section>
`;

// CHAPTER 10: Grassroots Democracy — Part 1: Governance
const ch10 = `
<section class="chapter-section" id="ch10">
  <div class="chapter-header">
    <div class="ch-badge">10</div>
    <div class="chapter-header-info">
      <h2>Chapter 10: Grassroots Democracy — Part 1: Governance</h2>
      <p>NCERT Exploring Society: India and Beyond (Class 6) — Meaning of Governance, Need for Laws, Three Levels of Government &amp; Democratic Participation | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Civic &amp; Democratic Principles</div>
    <ul class="concept-list">
      <li><strong>What is Governance?</strong> Governance refers to the system, processes, and rules by which a society, organisation, or nation is guided, administered, and held accountable.
        <ul>
          <li>Government is the formal institution made up of elected representatives and officials who make decisions, enact laws, enforce security, and provide essential public services.</li>
        </ul>
      </li>
      <li><strong>Why Do We Need Rules and Laws?</strong>
        <ul>
          <li>Just as a game of football or cricket cannot function without rules, a peaceful society requires laws to protect human rights, prevent conflicts, ensure fair justice, and prevent the strong from oppressing the weak.</li>
          <li>Laws apply equally to everyone—a principle known as the <strong>Rule of Law</strong>.</li>
        </ul>
      </li>
      <li><strong>The Three Levels of Government in India:</strong>
        <ol>
          <li><strong>Local Level:</strong> Governs villages, towns, and cities (Gram Panchayats and Municipalities). Addresses local water, sanitation, local roads, and community health.</li>
          <li><strong>State Level:</strong> Governs an entire state (e.g., Uttar Pradesh, Maharashtra, Tamil Nadu). Handles police, state highways, agriculture, and state education boards.</li>
          <li><strong>National (Union) Level:</strong> Governs the entire country from New Delhi. Handles national defence, foreign policy, railways, currency, and space research.</li>
        </ol>
      </li>
      <li><strong>Democracy vs Other Systems:</strong>
        <ul>
          <li>In a <strong>Monarchy</strong> or <strong>Dictatorship</strong>, a single ruler holds absolute power without accountability to the citizens.</li>
          <li>In a <strong>Representative Democracy</strong>, power originates from the people. Citizens elect their representatives through periodic, free, and fair elections using <strong>Universal Adult Franchise</strong> (every citizen aged 18+ has one vote of equal value).</li>
        </ul>
      </li>
      <li><strong>Citizen Participation:</strong> Democracy does not end with casting a vote. Active citizens stay informed, question government decisions, participate in public discussions, and hold leaders accountable.</li>
    </ul>
  </div>

  <!-- SVG Diagram: Three Levels of Government -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 220" width="100%" height="210" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Three-Tier Architecture of Indian Governance</text>
      <!-- Level 1: National -->
      <polygon points="280,45 160,100 400,100" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
      <text x="280" y="75" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#b91c1c" text-anchor="middle">Central / Union Government</text>
      <text x="280" y="90" font-family="system-ui, sans-serif" font-size="8.5" fill="#7f1d1d" text-anchor="middle">(National Defence, Foreign Affairs, Currency, Railways)</text>

      <!-- Level 2: State -->
      <polygon points="160,105 400,105 470,155 90,155" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
      <text x="280" y="128" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#b45309" text-anchor="middle">State Governments (28 States &amp; 8 UTs)</text>
      <text x="280" y="144" font-family="system-ui, sans-serif" font-size="8.5" fill="#92400e" text-anchor="middle">(Law &amp; Order / Police, State Highways, Public Health, Agriculture)</text>

      <!-- Level 3: Local -->
      <polygon points="90,160 470,160 540,210 20,210" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
      <text x="280" y="182" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0369a1" text-anchor="middle">Local Government (Grassroots)</text>
      <text x="280" y="198" font-family="system-ui, sans-serif" font-size="8.5" fill="#075985" text-anchor="middle">Rural: Panchayati Raj | Urban: Municipal Corporations &amp; Municipalities</text>
    </svg>
    <p style="font-size: 11px; color: #64748b; margin-top: 6px;">Figure 10.1: The federal pyramid illustrating the three levels of government in India.</p>
  </div>

  <div class="ex-div">
    <div class="ex-heading">NCERT Textbook Exercises &amp; Model Solutions</div>

    ${qCard(
      'c6sst-ch10-q1',
      'Q1',
      'What is Governance and Why is it Necessary?',
      'Define',
      'Define "governance". Why cannot a country function without a government?',
      `<p class="step"><strong>1. Definition of Governance:</strong></p>
      <p>Governance is the collective system of rules, institutions, and administrative procedures through which a society organizes itself, formulates public policies, maintains social harmony, and provides public goods for the welfare of its citizens.</p>
      <p class="step"><strong>2. Why a Government is Indispensable:</strong></p>
      <ul class="step-list">
        <li><strong>Maintenance of Law and Order:</strong> Without a police and judicial framework, disputes would result in lawlessness and violence where the strong oppress the vulnerable.</li>
        <li><strong>Provision of Public Infrastructure:</strong> Individual citizens cannot construct national highways, power grids, railways, and public hospitals on their own. The government pools tax revenues to create this infrastructure.</li>
        <li><strong>National Security:</strong> The government protects the country’s territorial boundaries against external aggression and maintains armed forces.</li>
        <li><strong>Disaster Relief:</strong> During floods, earthquakes, or epidemics, the government coordinates massive rescue, food distribution, and medical rehabilitation operations.</li>
      </ul>`,
      '4 marks: 1 mark for precise definition + 3 marks for three distinct reasons (Law & Order, Infrastructure, Defence/Relief).'
    )}

    ${qCard(
      'c6sst-ch10-q2',
      'Q2',
      'Three Levels of Government in India',
      'Short',
      'Name the three levels of government in India. Give two examples of responsibilities handled at each level.',
      `<p class="step"><strong>The Three Levels of Government in India:</strong></p>
      <ul class="step-list">
        <li><strong>1. Union / Central Level (National Level):</strong>
          <ul>
            <li>Handles matters of national importance affecting the entire country.</li>
            <li><em>Examples:</em> National defence/armed forces, foreign policy and international treaties, railways, and currency issuance.</li>
          </ul>
        </li>
        <li><strong>2. State Level:</strong>
          <ul>
            <li>Covers the geographical territory of a specific state.</li>
            <li><em>Examples:</em> State police and public order, state highway maintenance, and school education boards (e.g., UP Board, Maharashtra State Board).</li>
          </ul>
        </li>
        <li><strong>3. Local Level (Grassroots Level):</strong>
          <ul>
            <li>Governs a village, town, or city directly.</li>
            <li><em>Examples:</em> Village street lighting and hand-pump repair (Gram Panchayat), municipal garbage collection, and local birth/death registration.</li>
          </ul>
        </li>
      </ul>`,
      '3 marks: 1 mark for each level with accurate examples.'
    )}

    ${qCard(
      'c6sst-ch10-q3',
      'Q3',
      'Universal Adult Franchise',
      'Concept',
      'What is Universal Adult Franchise? Why is it considered the foundation of democratic governance?',
      `<p class="step"><strong>1. Definition:</strong></p>
      <p><strong>Universal Adult Franchise</strong> means that every adult citizen of the country who has reached the age of 18 has the right to vote in elections, regardless of their gender, religion, caste, wealth, educational qualification, or social status. Each vote carries the exact same mathematical value: <em>"One person, one vote, one value."</em></p>
      <p class="step"><strong>2. Why it is the Foundation of Democracy:</strong></p>
      <ul class="step-list">
        <li><strong>Political Equality:</strong> It ensures that a wealthy industrialist and an impoverished landless farmer possess an equal voice in deciding who governs the nation.</li>
        <li><strong>Citizen Empowerment:</strong> Elected leaders are accountable to the electorate; if they ignore the needs of ordinary citizens, voters can remove them at the next election.</li>
        <li><strong>Historical Milestone:</strong> Before independence, only a tiny wealthy, educated minority had voting rights under British rule. Dr. B.R. Ambedkar and the Constituent Assembly ensured full adult franchise from the very first day of our Constitution.</li>
      </ul>`,
      '3 marks: 1.5 marks for clear definition + 1.5 marks for equality and accountability significance.'
    )}

    ${qCard(
      'c6sst-ch10-q4',
      'Q4',
      'Difference between Democracy and Monarchy',
      'Compare',
      'Distinguish between a democratic government and a monarchy. How is power acquired and exercised in both?',
      `<p class="step"><strong>Comparison: Democracy vs. Monarchy:</strong></p>
      <div class="table-wrap" style="overflow-x: auto; margin: 12px 0;">
        <table style="width: 100%; border-collapse: collapse; font-size: 13px; text-align: left;">
          <thead>
            <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
              <th style="padding: 8px 12px; border: 1px solid #cbd5e1;">Feature</th>
              <th style="padding: 8px 12px; border: 1px solid #cbd5e1;">Democracy</th>
              <th style="padding: 8px 12px; border: 1px solid #cbd5e1;">Monarchy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;"><strong>Source of Power</strong></td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">Power belongs to the citizens, who elect leaders through secret ballots.</td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">Power is inherited through a royal family lineage (dynasty).</td>
            </tr>
            <tr style="background: #f8fafc;">
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;"><strong>Accountability</strong></td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">Leaders must explain decisions to the people and can be changed in elections.</td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">The king/queen is not bound to explain decisions or defend actions to citizens.</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;"><strong>Citizen Rights</strong></td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">Fundamental rights, freedom of speech, and equal legal protection.</td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">Citizens are subjects whose rights depend on the ruler's goodwill.</td>
            </tr>
          </tbody>
        </table>
      </div>`,
      '3 marks: 1 mark for each comparative row.'
    )}
  </div>
</section>
`;

// CHAPTER 11: Grassroots Democracy — Part 2: Local Government in Rural Areas
const ch11 = `
<section class="chapter-section" id="ch11">
  <div class="chapter-header">
    <div class="ch-badge">11</div>
    <div class="chapter-header-info">
      <h2>Chapter 11: Grassroots Democracy — Part 2: Rural Areas</h2>
      <p>NCERT Exploring Society: India and Beyond (Class 6) — Panchayati Raj System, Gram Sabha, Gram Panchayat, Sarpanch, Secretary &amp; Village Development | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Rural Civic &amp; Administrative Concepts</div>
    <ul class="concept-list">
      <li><strong>What is Panchayati Raj?</strong> The system of local self-government in rural India, constitutionalised by the 73rd Constitutional Amendment Act. It empowers villagers to govern their own villages directly and address local needs without waiting for distant state officials.</li>
      <li><strong>Three Tiers of Panchayati Raj:</strong>
        <ol>
          <li><strong>Gram Panchayat (Village Level):</strong> Executive body directly elected by the villagers.</li>
          <li><strong>Panchayat Samiti / Janpad Panchayat (Block Level):</strong> An umbrella body coordinating several Gram Panchayats.</li>
          <li><strong>Zilla Parishad (District Level):</strong> Highest level coordinating development plans and funds for the entire district with the District Magistrate (DM/Collector).</li>
        </ol>
      </li>
      <li><strong>The Gram Sabha (Direct Democracy):</strong>
        <ul>
          <li>Consists of <strong>all adult residents (18+ years)</strong> registered in the electoral roll of the village.</li>
          <li>The Gram Sabha is the supervisory parliament of the village. It meets regularly to review village budgets, discuss water problems, approve the Below Poverty Line (BPL) lists, and question the Panchayat members.</li>
        </ul>
      </li>
      <li><strong>The Gram Panchayat (Executive Body):</strong>
        <ul>
          <li>A village is divided into smaller units called <strong>Wards</strong>. Each ward elects a representative called a <strong>Ward Member (Panch)</strong>.</li>
          <li>All members collectively elect a village head called the <strong>Sarpanch (Panchayat President)</strong>.</li>
          <li>The Gram Panchayat is elected for a term of <strong>5 years</strong>.</li>
        </ul>
      </li>
      <li><strong>The Gram Panchayat Secretary:</strong>
        <ul>
          <li>Not an elected politician; he/she is a <strong>government-appointed public servant</strong>.</li>
          <li>Responsible for calling the meetings of the Gram Sabha and Gram Panchayat and keeping official minutes and financial records.</li>
        </ul>
      </li>
      <li><strong>Sources of Funds for Gram Panchayat:</strong> Taxes on houses and market stalls, government grants from State/Zilla Parishad, and donations for community development works.</li>
    </ul>
  </div>

  <!-- SVG Diagram: Gram Sabha vs Gram Panchayat & 3-Tier Panchayati Raj -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 220" width="100%" height="210" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Structure of Rural Local Governance (Panchayati Raj)</text>
      <!-- Gram Sabha Box -->
      <rect x="20" y="45" width="240" height="150" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
      <text x="140" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0369a1" text-anchor="middle">GRAM SABHA (Supervisory Body)</text>
      <text x="140" y="92" font-family="system-ui, sans-serif" font-size="9.5" fill="#0c4a6e" text-anchor="middle">• All registered voters aged 18+</text>
      <text x="140" y="112" font-family="system-ui, sans-serif" font-size="9.5" fill="#0c4a6e" text-anchor="middle">• Approves village budget &amp; plans</text>
      <text x="140" y="132" font-family="system-ui, sans-serif" font-size="9.5" fill="#0c4a6e" text-anchor="middle">• Scrutinises BPL beneficiary lists</text>
      <text x="140" y="152" font-family="system-ui, sans-serif" font-size="9.5" fill="#0c4a6e" text-anchor="middle">• Prevents misuse of village money</text>
      <text x="140" y="175" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#0284c7" text-anchor="middle">Form of Direct Democracy</text>

      <!-- Arrow -->
      <line x1="260" y1="120" x2="300" y2="120" stroke="#f59e0b" stroke-width="3" marker-end="url(#arr11)"/>
      <text x="280" y="110" font-family="system-ui, sans-serif" font-size="8.5" font-weight="700" fill="#b45309" text-anchor="middle">Elects &amp;</text>
      <text x="280" y="138" font-family="system-ui, sans-serif" font-size="8.5" font-weight="700" fill="#b45309" text-anchor="middle">Monitors</text>

      <!-- Gram Panchayat Box -->
      <rect x="300" y="45" width="240" height="150" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="420" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#92400e" text-anchor="middle">GRAM PANCHAYAT (Executive Body)</text>
      <text x="420" y="92" font-family="system-ui, sans-serif" font-size="9.5" fill="#78350f" text-anchor="middle">• Sarpanch + Elected Ward Panches</text>
      <text x="420" y="112" font-family="system-ui, sans-serif" font-size="9.5" fill="#78350f" text-anchor="middle">• Implements development projects</text>
      <text x="420" y="132" font-family="system-ui, sans-serif" font-size="9.5" fill="#78350f" text-anchor="middle">• Water, drains, village roads &amp; schools</text>
      <text x="420" y="152" font-family="system-ui, sans-serif" font-size="9.5" fill="#78350f" text-anchor="middle">• Secretary (appointed by govt)</text>
      <text x="420" y="175" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#b45309" text-anchor="middle">Accountable to Gram Sabha</text>
    </svg>
    <p style="font-size: 11px; color: #64748b; margin-top: 6px;">Figure 11.1: Relationship between the Gram Sabha (all villagers) and the Gram Panchayat (executive council).</p>
  </div>

  <div class="ex-div">
    <div class="ex-heading">NCERT Textbook Exercises &amp; Model Solutions</div>

    ${qCard(
      'c6sst-ch11-q1',
      'Q1',
      'Difference Between Gram Sabha and Gram Panchayat',
      'Compare',
      'What is the fundamental difference between the Gram Sabha and the Gram Panchayat? Who are the members of each?',
      `<p class="step"><strong>Detailed Comparison Table:</strong></p>
      <div class="table-wrap" style="overflow-x: auto; margin: 12px 0;">
        <table style="width: 100%; border-collapse: collapse; font-size: 13px; text-align: left;">
          <thead>
            <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
              <th style="padding: 8px 12px; border: 1px solid #cbd5e1;">Aspect</th>
              <th style="padding: 8px 12px; border: 1px solid #cbd5e1;">Gram Sabha</th>
              <th style="padding: 8px 12px; border: 1px solid #cbd5e1;">Gram Panchayat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;"><strong>Membership</strong></td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">All adults (18+ years) registered in the electoral roll of the village.</td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">Only the elected Ward Members (Panches) and the Sarpanch.</td>
            </tr>
            <tr style="background: #f8fafc;">
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;"><strong>Nature of Body</strong></td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">Permanent deliberative body (similar to a village parliament).</td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">Executive working committee elected for a fixed term of 5 years.</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;"><strong>Primary Function</strong></td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">Reviews village plans, questions the Panchayat, approves budgets.</td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">Implements development works (roads, water supply, sanitation, lighting).</td>
            </tr>
          </tbody>
        </table>
      </div>`,
      '4 marks: 1.5 marks for membership distinction + 1.5 marks for roles + 1 mark for permanent vs 5-year tenure.'
    )}

    ${qCard(
      'c6sst-ch11-q2',
      'Q2',
      'Why is the Gram Sabha Key to Clean Governance?',
      'Explain',
      'Why is the Gram Sabha considered vital for preventing corruption and ensuring fair governance in rural areas?',
      `<p class="step"><strong>Role of Gram Sabha in Ensuring Accountability:</strong></p>
      <ul class="step-list">
        <li><strong>Open Public Questioning:</strong> In the Gram Sabha meeting, every villager has the constitutional right to stand up and ask questions directly to the Sarpanch regarding how much money was received and where it was spent.</li>
        <li><strong>Preventing Nepotism in Beneficiary Selection:</strong> When the list of Below Poverty Line (BPL) families is read aloud, villagers can object if a wealthy landowner is unfairly listed or if an impoverished widow has been excluded.</li>
        <li><strong>Approval of Expenditure:</strong> The Gram Panchayat cannot spend public funds on arbitrary projects without presenting its budget and developmental agenda to the Gram Sabha for formal approval.</li>
        <li><strong>Community Watchdog:</strong> It ensures that public resources (such as pasture land, village ponds, and streetlights) are not encroached upon by powerful individuals.</li>
      </ul>`,
      '3 marks: 1 mark for open questioning + 1 mark for transparent beneficiary selection + 1 mark for budget approval/anti-corruption safeguard.'
    )}

    ${qCard(
      'c6sst-ch11-q3',
      'Q3',
      'Role of the Panchayat Secretary',
      'Short',
      'What is the role of the Gram Panchayat Secretary? How is this person selected?',
      `<p class="step"><strong>1. Selection and Appointment:</strong></p>
      <p>The Secretary of the Gram Panchayat is <strong>not elected by the villagers</strong>. Instead, he/she is a permanent government official appointed by the State Government\'s Panchayati Raj department.</p>
      <p class="step"><strong>2. Key Responsibilities:</strong></p>
      <ul class="step-list">
        <li>Calling the periodic meetings of both the Gram Sabha and the Gram Panchayat.</li>
        <li>Recording the official minutes, proceedings, and resolutions passed during the meetings.</li>
        <li>Maintaining official accounting registers, government notifications, and financial records of expenditure.</li>
        <li>Acting as a communication link between the village administration and block-level government officers (BDO).</li>
      </ul>`,
      '2 marks: 1 mark for government appointment (not elected) + 1 mark for calling meetings and recording minutes.'
    )}

    ${qCard(
      'c6sst-ch11-q4',
      'Q4',
      'Three Levels of the Panchayati Raj System',
      'Describe',
      'Describe the three tiers of the Panchayati Raj system. How do they coordinate with each other?',
      `<p class="step"><strong>The Three Tiers of Panchayati Raj:</strong></p>
      <ul class="step-list">
        <li><strong>1. Gram Panchayat (Village Level):</strong>
          <p>The primary tier working at the village grass roots. It directly looks after basic sanitation, repairing hand-pumps, constructing paved alleys, and maintaining community assets.</p>
        </li>
        <li><strong>2. Panchayat Samiti / Janpad Panchayat (Block Level):</strong>
          <p>The intermediate tier that groups together several neighbouring Gram Panchayats. It oversees inter-village development projects, primary healthcare centres, and agricultural distribution centres.</p>
        </li>
        <li><strong>3. Zilla Parishad (District Level):</strong>
          <p>The apex tier operating at the district headquarters. Headed by an elected President and coordinated by the District Collector/Chief Executive Officer (CEO), it prepares the master developmental plan for the entire district and distributes state funds across blocks.</p>
        </li>
      </ul>`,
      '3 marks: 1 mark for each tier (Gram Panchayat, Panchayat Samiti, Zilla Parishad) with its geographical scope and functions.'
    )}
  </div>
</section>
`;

// CHAPTER 12: Grassroots Democracy — Part 3: Urban Areas
const ch12 = `
<section class="chapter-section" id="ch12">
  <div class="chapter-header">
    <div class="ch-badge">12</div>
    <div class="chapter-header-info">
      <h2>Chapter 12: Grassroots Democracy — Part 3: Urban Areas</h2>
      <p>NCERT Exploring Society: India and Beyond (Class 6) — Municipal Corporations, Municipal Councils, Ward Councillors, Municipal Commissioner &amp; City Services | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Urban Civic &amp; Administrative Concepts</div>
    <ul class="concept-list">
      <li><strong>Urban Local Governance:</strong> Governed under the 74th Constitutional Amendment Act:
        <ul>
          <li><strong>Municipal Corporation (Nagar Nigam):</strong> Set up in large metropolitan cities (e.g., Delhi, Mumbai, Bengaluru, Lucknow) with populations exceeding several lakhs.</li>
          <li><strong>Municipality / Municipal Council (Nagar Palika):</strong> Operates in smaller towns and urban settlements.</li>
          <li><strong>Nagar Panchayat:</strong> Operates in transitional zones changing from rural villages to semi-urban towns.</li>
        </ul>
      </li>
      <li><strong>Elected vs Appointed Officials in Cities:</strong>
        <ul>
          <li><strong>Ward Councillors (Parshad):</strong> The city is divided into geographical wards. Residents of each ward elect their Ward Councillor for a 5-year term. Councillors debate city budgets, approve new parks, and represent citizens' grievances. The political head of a corporation is the <strong>Mayor</strong>.</li>
          <li><strong>Municipal Commissioner &amp; Administrative Staff:</strong> The Municipal Commissioner is an administrative officer (often from the Indian Administrative Service - IAS) appointed by the State Government to execute policies, oversee departments, and manage city staff.</li>
        </ul>
      </li>
      <li><strong>Core Municipal Responsibilities:</strong>
        <ul>
          <li>Solid waste management, garbage collection, and street sweeping.</li>
          <li>Safe drinking water supply and underground drainage networks.</li>
          <li>Street lighting, maintenance of public parks, and crematoriums/graveyards.</li>
          <li>Running municipal dispensaries, schools, and preventing epidemic diseases (dengue, malaria).</li>
          <li>Registration of births and deaths, and approving building construction plans.</li>
        </ul>
      </li>
      <li><strong>Municipal Finances:</strong> Financed through <strong>Property Tax</strong> (house tax), water tax, commercial trade license fees, cinema/entertainment taxes, and state developmental grants.</li>
      <li><strong>Citizen Action &amp; Grievance Redressal:</strong> When public services break down (e.g., garbage piles up or drains overflow), citizens can submit petitions, organize peaceful community representations, meet their Ward Councillor, or use civic mobile apps.</li>
    </ul>
  </div>

  <!-- SVG Diagram: Urban Administrative Hierarchy -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 210" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Structure of Municipal Corporation (Nagar Nigam)</text>
      <!-- Elected Wing -->
      <rect x="25" y="45" width="235" height="145" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
      <text x="142" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#92400e" text-anchor="middle">ELECTED WING (Political)</text>
      <text x="142" y="93" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#b45309" text-anchor="middle">Mayor &amp; Ward Councillors</text>
      <text x="142" y="115" font-family="system-ui, sans-serif" font-size="9" fill="#78350f" text-anchor="middle">• Elected by city voters every 5 years</text>
      <text x="142" y="133" font-family="system-ui, sans-serif" font-size="9" fill="#78350f" text-anchor="middle">• Form Ward Committees</text>
      <text x="142" y="151" font-family="system-ui, sans-serif" font-size="9" fill="#78350f" text-anchor="middle">• Decide budgets, policies &amp; locations</text>
      <text x="142" y="172" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#92400e" text-anchor="middle">Voice of the Citizens</text>

      <!-- Appointed Wing -->
      <rect x="300" y="45" width="235" height="145" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.8"/>
      <text x="417" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0369a1" text-anchor="middle">ADMINISTRATIVE WING (Executive)</text>
      <text x="417" y="93" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#0284c7" text-anchor="middle">Municipal Commissioner (IAS)</text>
      <text x="417" y="115" font-family="system-ui, sans-serif" font-size="9" fill="#0c4a6e" text-anchor="middle">• Appointed by State Government</text>
      <text x="417" y="133" font-family="system-ui, sans-serif" font-size="9" fill="#0c4a6e" text-anchor="middle">• Heads health, water &amp; sanitation depts</text>
      <text x="417" y="151" font-family="system-ui, sans-serif" font-size="9" fill="#0c4a6e" text-anchor="middle">• Executes decisions made by council</text>
      <text x="417" y="172" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#0369a1" text-anchor="middle">Implementation &amp; Bureaucracy</text>
    </svg>
    <p style="font-size: 11px; color: #64748b; margin-top: 6px;">Figure 12.1: Dual structure of urban local governance: Elected Policy-Making Wing and Appointed Executive Wing.</p>
  </div>

  <div class="ex-div">
    <div class="ex-heading">NCERT Textbook Exercises &amp; Model Solutions</div>

    ${qCard(
      'c6sst-ch12-q1',
      'Q1',
      'Ward Councillor vs Municipal Commissioner',
      'Compare',
      'What is the difference between a Ward Councillor and the Municipal Commissioner? How do they collaborate to govern a city?',
      `<p class="step"><strong>1. Fundamental Distinctions:</strong></p>
      <div class="table-wrap" style="overflow-x: auto; margin: 12px 0;">
        <table style="width: 100%; border-collapse: collapse; font-size: 13px; text-align: left;">
          <thead>
            <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
              <th style="padding: 8px 12px; border: 1px solid #cbd5e1;">Feature</th>
              <th style="padding: 8px 12px; border: 1px solid #cbd5e1;">Ward Councillor</th>
              <th style="padding: 8px 12px; border: 1px solid #cbd5e1;">Municipal Commissioner</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;"><strong>Selection</strong></td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">Elected directly by voters of a specific ward for 5 years.</td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">Appointed by the State Government (senior civil servant).</td>
            </tr>
            <tr style="background: #f8fafc;">
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;"><strong>Role</strong></td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">Policy making, budgeting, and raising local ward problems.</td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">Executing and implementing council decisions through departments.</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;"><strong>Accountability</strong></td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">Accountable to the people of the ward in elections.</td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">Accountable to the State Government and law.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="step"><strong>2. Collaboration:</strong> Councillors debate and decide policy directions and allocate annual budgets, while the Municipal Commissioner deploys municipal workforce and resources to get the work executed on the ground.</p>`,
      '4 marks: 1 mark for election vs appointment + 1 mark for policy vs execution + 1 mark for accountability + 1 mark for collaboration.'
    )}

    ${qCard(
      'c6sst-ch12-q2',
      'Q2',
      'How Does a Municipal Corporation Earn Revenue?',
      'Describe',
      'List the main sources of revenue for a Municipal Corporation. Why is property tax important?',
      `<p class="step"><strong>Main Sources of Revenue:</strong></p>
      <ul class="step-list">
        <li><strong>Property Tax (House Tax):</strong> Tax paid by homeowners based on the size and location of their house. Accounts for 25% to 30% of municipal income.</li>
        <li><strong>Water and Sanitation Taxes:</strong> Fees charged for providing piped water supply and sewage connections.</li>
        <li><strong>Commercial &amp; Trade License Fees:</strong> Charges levied on shopkeepers, hotels, restaurants, and commercial markets to operate business premises.</li>
        <li><strong>Entertainment Tax:</strong> Taxes charged on cinema tickets, amusement parks, and entertainment venues.</li>
        <li><strong>State Government Grants:</strong> Financial subsidies and project grants allocated by the State government for major infrastructure works.</li>
      </ul>`,
      '3 marks: 1.5 marks for listing at least 4 revenue sources + 1.5 marks for explaining property tax significance.'
    )}

    ${qCard(
      'c6sst-ch12-q3',
      'Q3',
      'How Can Citizens Solve Local Problems in a City?',
      'Application',
      'If garbage is not being collected in your neighbourhood for several days, what steps can residents take to get the issue resolved?',
      `<p class="step"><strong>Action Steps Available to Citizens:</strong></p>
      <ul class="step-list">
        <li><strong>1. Contact the Sanitation Inspector:</strong> First, inform the local municipal sanitation inspector or ward supervisor who oversees garbage truck routes.</li>
        <li><strong>2. Approach the Ward Councillor:</strong> Residents can collectively meet their elected Ward Councillor, submit a signed petition highlighting health risks, and request intervention.</li>
        <li><strong>3. Use Municipal Grievance Portals / Helplines:</strong> File a digital complaint with geotagged photos on the city's civic helpline or the central Swachhata mobile app.</li>
        <li><strong>4. Peaceful Community Delegation:</strong> If unresolved, residents can lead a peaceful delegation to the Municipal Commissioner's office to demand immediate action.</li>
      </ul>`,
      '3 marks: 1 mark for contacting sanitation inspector/supervisor + 1 mark for meeting Ward Councillor with petition + 1 mark for app helplines/delegation.'
    )}

    ${qCard(
      'c6sst-ch12-q4',
      'Q4',
      'Role of Municipalities in Public Health and Hygiene',
      'Short',
      'Mention three measures taken by the Municipal Corporation to prevent the spread of diseases in cities.',
      `<p class="step"><strong>Three Key Preventive Public Health Measures:</strong></p>
      <ul class="step-list">
        <li><strong>Mosquito Control and Fogging:</strong> Regular chemical fogging and spraying larvicide in open drains and stagnant water bodies to eradicate mosquito breeding and prevent dengue, malaria, and chikungunya.</li>
        <li><strong>Safe Drinking Water Disinfection:</strong> Adding chlorine and testing municipal piped water supply regularly to prevent waterborne infections like cholera, typhoid, and jaundice.</li>
        <li><strong>Scientific Solid Waste Disposal:</strong> Ensuring daily doorstep collection and covered transport of municipal garbage to designated sanitary landfills or compost plants, preventing waste accumulation.</li>
      </ul>`,
      '3 marks: 1 mark for each preventive measure explained with disease connection.'
    )}
  </div>
</section>
`;

// CHAPTER 13: The Value of Work
const ch13 = `
<section class="chapter-section" id="ch13">
  <div class="chapter-header">
    <div class="ch-badge">13</div>
    <div class="chapter-header-info">
      <h2>Chapter 13: The Value of Work</h2>
      <p>NCERT Exploring Society: India and Beyond (Class 6) — Dignity of Labour, Paid vs Unpaid Domestic Care Work, Gender Equality &amp; Shramdaan | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Economic &amp; Social Concepts</div>
    <ul class="concept-list">
      <li><strong>Understanding Work:</strong> Work is any physical or mental effort undertaken to produce goods, provide services, or sustain life. All types of work that contribute honestly to society deserve respect.</li>
      <li><strong>Paid Work vs. Unpaid Domestic Care Work:</strong>
        <ul>
          <li><strong>Paid Work:</strong> Work performed in exchange for monetary income (wages, salary, or profit) in offices, factories, farms, and shops.</li>
          <li><strong>Unpaid Domestic Care Work:</strong> Essential tasks performed within households—cooking meals, fetching water, washing clothes, cleaning, caring for babies, elderly grandparents, and sick family members.</li>
          <li><strong>The Invisible Burden:</strong> Because unpaid housework does not receive a monthly pay-cheque, society often mistakenly regards it as "not real work". In reality, household care work is arduous, time-consuming, and forms the hidden foundation that makes all other economic work possible.</li>
        </ul>
      </li>
      <li><strong>Dignity of Labour (Shram Ki Pratishtha):</strong>
        <ul>
          <li>No honest work is inferior or degrading. Whether one is a doctor, engineer, sweeper, farmer, or domestic help, every profession fulfills an indispensable societal need.</li>
          <li><strong>Mahatma Gandhi’s Philosophy:</strong> Gandhiji insisted that everyone should do manual labour. At his Sabarmati Ashram, every inmate—regardless of caste or status—cleaned toilets and spun khadi to eliminate caste stigma against sanitation work.</li>
          <li><strong>Basaveshwara and Kayaka:</strong> The 12th-century philosopher-saint Basaveshwara proclaimed <em>"Kayakave Kailasa"</em> (Work is worship / divine duty), establishing that honest physical labour is sacred.</li>
        </ul>
      </li>
      <li><strong>Shramdaan (Voluntary Community Labour):</strong> The Indian tradition of coming together to contribute voluntary physical labour to build village roads, clean ponds, desilt canals, or whitewash school buildings.</li>
    </ul>
  </div>

  <!-- SVG Diagram: Visible Paid Work vs Invisible Care Work -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 210" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Recognising All Work: The Iceberg of Human Labour</text>
      <!-- Waterline -->
      <line x1="20" y1="100" x2="540" y2="100" stroke="#0284c7" stroke-width="2.5" stroke-dasharray="6,4"/>
      <text x="470" y="94" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#0284c7">WATERLINE</text>

      <!-- Above Waterline: Paid Work -->
      <polygon points="280,35 220,100 340,100" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
      <text x="280" y="70" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0369a1" text-anchor="middle">PAID WORK (Visible)</text>
      <text x="280" y="85" font-family="system-ui, sans-serif" font-size="8.5" fill="#0c4a6e" text-anchor="middle">Offices, Factories, Wages, Salaries, Market Trades</text>

      <!-- Below Waterline: Unpaid Care Work -->
      <polygon points="220,100 340,100 440,185 120,185" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="280" y="130" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#92400e" text-anchor="middle">UNPAID DOMESTIC &amp; CARE WORK (Invisible)</text>
      <text x="280" y="148" font-family="system-ui, sans-serif" font-size="9.5" fill="#78350f" text-anchor="middle">Cooking, Cleaning, Childcare, Elder Care, Fetching Water &amp; Fuel</text>
      <text x="280" y="168" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#b45309" text-anchor="middle">Disproportionately Performed by Women — Crucial Foundation of Society</text>
    </svg>
    <p style="font-size: 11px; color: #64748b; margin-top: 6px;">Figure 13.1: The care economy iceberg: unpaid domestic work sustains the entire visible market economy.</p>
  </div>

  <div class="ex-div">
    <div class="ex-heading">NCERT Textbook Exercises &amp; Model Solutions</div>

    ${qCard(
      'c6sst-ch13-q1',
      'Q1',
      'Why is Unpaid Domestic Work Undervalued?',
      'Analyze',
      'Why does society often fail to recognise household work as "real work"? How can we change this perspective?',
      `<p class="step"><strong>1. Why Household Work is Undervalued:</strong></p>
      <ul class="step-list">
        <li><strong>Absence of Direct Monetary Payment:</strong> In market economics, work that generates cash wages or salaries is counted as productive. Since mothers and homemakers do not draw a monetary pay-cheque, their labour is wrongly deemed unproductive.</li>
        <li><strong>Assumption of "Natural" Duty:</strong> Society has historically stereotyped caregiving, cooking, and cleaning as tasks women are "naturally" supposed to do out of love, ignoring the immense physical and mental toil involved.</li>
        <li><strong>Isolation inside the Home:</strong> Unlike factory or office work which is visible to the public, housework happens behind closed doors from early dawn till late night without fixed hours or weekly holidays.</li>
      </ul>
      <p class="step"><strong>2. How to Change This Perspective:</strong></p>
      <ul class="step-list">
        <li><strong>Sharing Domestic Tasks:</strong> All family members, especially men and boys, must share daily domestic responsibilities (cooking, cleaning, dishwashing).</li>
        <li><strong>Social Recognition:</strong> School textbooks, media, and community culture must celebrate homemakers with the same dignity and respect given to corporate professionals.</li>
        <li><strong>Economic Accounting:</strong> Time-use surveys and national statistical data should calculate the economic value of unpaid care work in national accounts.</li>
      </ul>`,
      '4 marks: 2 marks for reasons of undervaluation (no wage, gender stereotyping, invisible hours) + 2 marks for transformative steps.'
    )}

    ${qCard(
      'c6sst-ch13-q2',
      'Q2',
      'Mahatma Gandhi and Dignity of Labour',
      'Short',
      'Explain Mahatma Gandhi\'s views on manual labour and sanitation work. How did he put these into practice?',
      `<p class="step"><strong>Gandhiji\'s Philosophy and Practice:</strong></p>
      <ul class="step-list">
        <li><strong>Belief in Dignity of Labour:</strong> Gandhiji firmly believed that no honest work is low or impure. He believed that physical work is essential for moral purity and self-reliance (<em>Swavlamban</em>).</li>
        <li><strong>Sanitation Work at Sabarmati Ashram:</strong> In Indian society, sanitation and toilet-cleaning work had been historically forced upon oppressed castes. Gandhiji took it upon himself to clean dry latrines personally and made it compulsory for every ashram guest, irrespective of social or religious rank, to clean their own latrines.</li>
        <li><strong>Spinning Khadi:</strong> He spun the charkha every single day to demonstrate that intellectual leaders should never abandon manual labour.</li>
      </ul>`,
      '3 marks: 1.5 marks for philosophical views on manual work + 1.5 marks for ashram toilet cleaning practice and spinning.'
    )}

    ${qCard(
      'c6sst-ch13-q3',
      'Q3',
      'What is Shramdaan?',
      'Define',
      'What is "Shramdaan"? Give two examples of how Shramdaan can transform a local village or school.',
      `<p class="step"><strong>1. Definition:</strong></p>
      <p><strong>Shramdaan</strong> is the voluntary donation of physical labour without asking for monetary wages, performed collectively by community members for the common welfare of society.</p>
      <p class="step"><strong>2. Examples of Community Transformation through Shramdaan:</strong></p>
      <ul class="step-list">
        <li><strong>Water Conservation in Ralegan Siddhi / Hiware Bazar:</strong> Villagers built earthen check dams, contour trenches, and planted thousands of trees through Shramdaan, transforming drought-stricken wastelands into lush, prosperous green villages.</li>
        <li><strong>School Campus Revitalisation:</strong> Students, parents, and teachers gathering on a Sunday to paint peeling classroom walls, plant medicinal herb gardens, and level sports grounds, building community pride and ownership.</li>
      </ul>`,
      '3 marks: 1 mark for clear definition + 2 marks for two practical transformation examples.'
    )}

    ${qCard(
      'c6sst-ch13-q4',
      'Q4',
      'Meaning of "Kayakave Kailasa"',
      'Short',
      'What is the meaning of the phrase "Kayakave Kailasa"? Who gave this teaching and what does it convey?',
      `<p class="step"><strong>Meaning and Origin:</strong></p>
      <ul class="step-list">
        <li><strong>Origin:</strong> The divine proclamation was given by the 12th-century philosopher-reformer <strong>Basaveshwara (Basavanna)</strong> in Karnataka.</li>
        <li><strong>Literal Meaning:</strong> <em>"Kayaka"</em> means dedicated physical or mental work / honest labour, and <em>"Kailasa"</em> represents the divine abode of God (Heaven). Hence, it means <strong>"Work is Worship"</strong> or <strong>"Labour itself is Heaven"</strong>.</li>
        <li><strong>Core Message:</strong> Whatever work a person does honestly—whether as a farmer, weaver, shoe-maker, or scholar—is sacred. Dedication to one\'s honest duty with pure devotion is the highest spiritual path.</li>
      </ul>`,
      '2 marks: 1 mark for Basaveshwara and translation + 1 mark for the core moral message.'
    )}
  </div>
</section>
`;

// CHAPTER 14: Economic Activities Around Us
const ch14 = `
<section class="chapter-section" id="ch14">
  <div class="chapter-header">
    <div class="ch-badge">14</div>
    <div class="chapter-header-info">
      <h2>Chapter 14: Economic Activities Around Us</h2>
      <p>NCERT Exploring Society: India and Beyond (Class 6) — Primary, Secondary &amp; Tertiary Sectors, Supply Chains &amp; Economic Interdependence | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Economic &amp; Sectoral Concepts</div>
    <ul class="concept-list">
      <li><strong>What is an Economic Activity?</strong> Any activity undertaken by people with the objective of earning a livelihood, producing goods, or rendering services in exchange for income or profit is called an <em>economic activity</em>.</li>
      <li><strong>The Three Sectors of Economic Activities:</strong>
        <ol>
          <li><strong>Primary Sector (Extraction from Nature):</strong>
            <ul>
              <li>Activities that directly utilise natural resources: agriculture, animal husbandry, dairy farming, forestry, fishing, and mining of ores.</li>
              <li>Provides essential food items and raw materials for all other industries.</li>
            </ul>
          </li>
          <li><strong>Secondary Sector (Manufacturing &amp; Processing):</strong>
            <ul>
              <li>Activities that transform raw natural products into finished goods of greater value using tools, machines, and factories.</li>
              <li><em>Examples:</em> Spinning raw cotton into yarn and weaving cloth, converting sugarcane into jaggery and refined sugar, processing iron ore into steel, assembling motor vehicles.</li>
            </ul>
          </li>
          <li><strong>Tertiary Sector (Services &amp; Support):</strong>
            <ul>
              <li>Activities that do not produce tangible physical goods on their own, but provide essential services to facilitate production, distribution, and human living.</li>
              <li><em>Examples:</em> Transportation (trucks, trains), warehousing, banking, communications (telecom, internet), retail shops, healthcare (doctors, nurses), and education (teachers).</li>
            </ul>
          </li>
        </ol>
      </li>
      <li><strong>Interdependence of the Three Sectors:</strong>
        <ul>
          <li>None of the three sectors can survive in isolation; they are deeply connected in an economic web.</li>
          <li><em>Example of a Cotton Shirt:</em> A farmer grows raw cotton (Primary) &rarr; A textile mill spins and dyes it into fabric (Secondary) &rarr; Trucks transport it, banks provide loans, and retail stores sell it to consumers (Tertiary). If transport strikes occur (Tertiary), raw cotton cannot reach factories, bringing everything to a halt.</li>
        </ul>
      </li>
      <li><strong>Consumer Awareness:</strong> Consumers should choose goods ethically, avoid food wastage, encourage local artisans, verify quality marks (like ISI, Agmark, FSSAI), and support environmentally sustainable products.</li>
    </ul>
  </div>

  <!-- SVG Diagram: Interdependence of Primary, Secondary and Tertiary Sectors -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 220" width="100%" height="210" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Interdependence of the Three Economic Sectors (Supply Chain)</text>
      <!-- Primary Sector -->
      <rect x="20" y="45" width="150" height="145" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="95" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#15803d" text-anchor="middle">PRIMARY SECTOR</text>
      <text x="95" y="90" font-family="system-ui, sans-serif" font-size="9.5" font-weight="600" fill="#166534" text-anchor="middle">(Extraction &amp; Farming)</text>
      <text x="95" y="112" font-family="system-ui, sans-serif" font-size="9" fill="#14532d" text-anchor="middle">• Agriculture &amp; Cotton</text>
      <text x="95" y="130" font-family="system-ui, sans-serif" font-size="9" fill="#14532d" text-anchor="middle">• Dairy &amp; Livestock</text>
      <text x="95" y="148" font-family="system-ui, sans-serif" font-size="9" fill="#14532d" text-anchor="middle">• Mining &amp; Forestry</text>
      <text x="95" y="170" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#15803d" text-anchor="middle">Raw Material Supply</text>

      <!-- Arrow 1 to 2 -->
      <line x1="170" y1="115" x2="205" y2="115" stroke="#64748b" stroke-width="2.5" marker-end="url(#arr14)"/>

      <!-- Secondary Sector -->
      <rect x="205" y="45" width="150" height="145" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="280" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#92400e" text-anchor="middle">SECONDARY SECTOR</text>
      <text x="280" y="90" font-family="system-ui, sans-serif" font-size="9.5" font-weight="600" fill="#b45309" text-anchor="middle">(Manufacturing)</text>
      <text x="280" y="112" font-family="system-ui, sans-serif" font-size="9" fill="#78350f" text-anchor="middle">• Textile Mills</text>
      <text x="280" y="130" font-family="system-ui, sans-serif" font-size="9" fill="#78350f" text-anchor="middle">• Food Processing</text>
      <text x="280" y="148" font-family="system-ui, sans-serif" font-size="9" fill="#78350f" text-anchor="middle">• Automobile Factories</text>
      <text x="280" y="170" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#b45309" text-anchor="middle">Finished Goods Production</text>

      <!-- Arrow 2 to 3 -->
      <line x1="355" y1="115" x2="390" y2="115" stroke="#64748b" stroke-width="2.5"/>

      <!-- Tertiary Sector -->
      <rect x="390" y="45" width="150" height="145" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
      <text x="465" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0369a1" text-anchor="middle">TERTIARY SECTOR</text>
      <text x="465" y="90" font-family="system-ui, sans-serif" font-size="9.5" font-weight="600" fill="#0284c7" text-anchor="middle">(Services)</text>
      <text x="465" y="112" font-family="system-ui, sans-serif" font-size="9" fill="#0c4a6e" text-anchor="middle">• Transport &amp; Logistics</text>
      <text x="465" y="130" font-family="system-ui, sans-serif" font-size="9" fill="#0c4a6e" text-anchor="middle">• Banking &amp; Insurance</text>
      <text x="465" y="148" font-family="system-ui, sans-serif" font-size="9" fill="#0c4a6e" text-anchor="middle">• Retail &amp; Healthcare</text>
      <text x="465" y="170" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#0369a1" text-anchor="middle">Facilitating &amp; Connecting</text>
    </svg>
    <p style="font-size: 11px; color: #64748b; margin-top: 6px;">Figure 14.1: The integrated flow of goods and services linking primary extraction to manufacturing and tertiary service distribution.</p>
  </div>

  <div class="ex-div">
    <div class="ex-heading">NCERT Textbook Exercises &amp; Model Solutions</div>

    ${qCard(
      'c6sst-ch14-q1',
      'Q1',
      'Distinguish Between Primary, Secondary and Tertiary Sectors',
      'Compare',
      'Classify economic activities into Primary, Secondary, and Tertiary sectors. Give two clear examples of occupations in each sector.',
      `<p class="step"><strong>1. Primary Sector:</strong></p>
      <ul class="step-list">
        <li><strong>Definition:</strong> Activities directly dependent on nature and involving the extraction or harvesting of natural resources.</li>
        <li><strong>Examples:</strong> Wheat and paddy farming, dairy livestock rearing, deep-sea fishing, and iron ore mining.</li>
      </ul>
      <p class="step"><strong>2. Secondary Sector:</strong></p>
      <ul class="step-list">
        <li><strong>Definition:</strong> Activities that process, refine, or manufacture raw materials obtained from the primary sector into usable finished commodities.</li>
        <li><strong>Examples:</strong> Sugar mills refining sugarcane into sugar crystals, automobile plants assembling cars, weaving cloth in textile factories.</li>
      </ul>
      <p class="step"><strong>3. Tertiary Sector:</strong></p>
      <ul class="step-list">
        <li><strong>Definition:</strong> Activities that generate services rather than physical goods, aiding production and distribution.</li>
        <li><strong>Examples:</strong> Truck drivers transporting goods, doctors treating patients, teachers educating students, banking professionals providing business credit.</li>
      </ul>`,
      '3 marks: 1 mark for each sector definition with 2 accurate occupational examples.'
    )}

    ${qCard(
      'c6sst-ch14-q2',
      'Q2',
      'Interdependence of the Three Sectors with an Example',
      'Explain',
      'Explain how the three sectors of the economy are interdependent with the help of an everyday commodity (e.g., a notebook or a loaf of bread).',
      `<p class="step"><strong>Example: The Journey of a School Notebook:</strong></p>
      <ul class="step-list">
        <li><strong>Primary Sector Stage:</strong> Foresters grow and harvest softwood trees or farmers grow bamboo, which provides wood pulp as raw material.</li>
        <li><strong>Secondary Sector Stage:</strong> Paper manufacturing mills process the wood pulp chemically, convert it into clean white paper sheets, print lines, cut them into pages, and bind them with cardboard into finished notebooks.</li>
        <li><strong>Tertiary Sector Stage:</strong>
          <ul>
            <li>Goods trucks and cargo trains transport the cartons of notebooks from paper mills to regional wholesale warehouses.</li>
            <li>Banks provide loans to the paper merchant; insurance companies protect the goods from transit damage.</li>
            <li>Neighbourhood stationary store owners stock the notebooks and sell them to school students.</li>
          </ul>
        </li>
      </ul>
      <p class="step"><strong>Conclusion:</strong> Without the tree farmer (Primary), there is no pulp; without the factory (Secondary), there is no paper; and without the truck driver or shopkeeper (Tertiary), the student cannot purchase the notebook. All three sectors rely completely on each other.</p>`,
      '4 marks: 1 mark for Primary role + 1 mark for Secondary role + 1 mark for Tertiary role + 1 mark for explaining mutual interdependence.'
    )}

    ${qCard(
      'c6sst-ch14-q3',
      'Q3',
      'Why is the Tertiary (Service) Sector Vital?',
      'Short',
      'Even though the tertiary sector does not produce any tangible goods, why is it essential for the modern economy?',
      `<p class="step"><strong>Importance of the Tertiary Sector:</strong></p>
      <ul class="step-list">
        <li><strong>Enables Trade and Movement:</strong> Farmers and factories would be helpless if transport services (trucks, railways, cargo ships) were absent to move perishable crops and manufactured goods to markets.</li>
        <li><strong>Financial Lifeblood:</strong> Commercial banks, online payment systems, and credit facilities allow farmers to buy seeds and factories to purchase machinery.</li>
        <li><strong>Human Capital Development:</strong> Healthcare services (doctors, nurses) keep the workforce healthy, while educational institutions (schools, colleges) train skilled engineers, farmers, and administrators.</li>
        <li><strong>Communication and Market Information:</strong> Telecom networks, internet, and trade websites inform producers about current market prices, preventing exploitation by middlemen.</li>
      </ul>`,
      '3 marks: 1 mark each for transport facilitation / banking & financing / healthcare & education human development.'
    )}

    ${qCard(
      'c6sst-ch14-q4',
      'Q4',
      'Responsibilities of an Aware Consumer',
      'Think & Answer',
      'What precautions should a consumer take while buying goods from the market? Mention three important consumer duties.',
      `<p class="step"><strong>Duties of a Conscious Consumer:</strong></p>
      <ul class="step-list">
        <li><strong>1. Check Quality Certification Standards:</strong> Verify government standard certification logos such as <strong>ISI mark</strong> on electrical appliances, <strong>Agmark</strong> on agricultural and spice products, and <strong>FSSAI licence</strong> on packaged food items.</li>
        <li><strong>2. Inspect Expiry Date and MRP:</strong> Carefully examine the manufacturing date, Best Before / Expiry date, and ensure the shopkeeper does not charge above the Maximum Retail Price (MRP).</li>
        <li><strong>3. Demand a Cash Memo / Bill:</strong> Always ask for a printed tax invoice/cash receipt as legal proof of purchase in case the product turns out to be defective or adulterated.</li>
        <li><strong>4. Environmental Responsibility:</strong> Carry a reusable cloth bag instead of accepting single-use plastic bags to protect the environment.</li>
      </ul>`,
      '3 marks: 1 mark for quality certification checks + 1 mark for expiry date/MRP + 1 mark for demanding cash memo and eco-friendly shopping.'
    )}
  </div>
</section>
`;

// Write Chapter files
fs.writeFileSync(path.join(outDir, 'ch9.html'), ch9.trim(), 'utf8');
console.log('Successfully generated ch9.html');

fs.writeFileSync(path.join(outDir, 'ch10.html'), ch10.trim(), 'utf8');
console.log('Successfully generated ch10.html');

fs.writeFileSync(path.join(outDir, 'ch11.html'), ch11.trim(), 'utf8');
console.log('Successfully generated ch11.html');

fs.writeFileSync(path.join(outDir, 'ch12.html'), ch12.trim(), 'utf8');
console.log('Successfully generated ch12.html');

fs.writeFileSync(path.join(outDir, 'ch13.html'), ch13.trim(), 'utf8');
console.log('Successfully generated ch13.html');

fs.writeFileSync(path.join(outDir, 'ch14.html'), ch14.trim(), 'utf8');
console.log('Successfully generated ch14.html');
