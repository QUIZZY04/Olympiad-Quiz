// scripts/gen-c6sst-ch9-ch14.js
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'chapters-c6sst');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Helper to wrap question card
function qCard(id, qNum, title, type, question, answerContent, markingScheme) {
  return `
    <div class="q-card" id="${id}">
      <div class="q-header" onclick="toggleQ('${id}')">
        <span class="q-title">${qNum}. ${title}</span>
        <span class="q-type badge-${type.toLowerCase().replace(/[^a-z]/g, '')}">${type}</span>
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

// ============================================================================
// CHAPTER 9: FAMILY AND COMMUNITY
// ============================================================================
const ch9 = `<section class="chapter-section" id="ch9">
  <div class="chapter-header">
    <div class="ch-badge">9</div>
    <div class="chapter-header-info">
      <h2>Chapter 9: Family and Community</h2>
      <p>NCERT Exploring Society: India and Beyond (Class 6) — 100% Complete Textbook Questions, The Big Questions, Equal Domestic Chores, Community Support &amp; CBSE Rubrics | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Civic &amp; Social Concepts</div>
    <ul class="concept-list">
      <li><strong>Family as the Basic Unit:</strong> The family is our primary social institution providing love, security, emotional nurturing, and values.
        <ul>
          <li><strong>Nuclear Family:</strong> Consists of parents and their children living together.</li>
          <li><strong>Joint / Extended Family:</strong> Multiple generations living together, sharing meals, resources, and caring for elders and youngsters collectively.</li>
        </ul>
      </li>
      <li><strong>Equal Division of Domestic Chores:</strong> Modern families break gender stereotypes. Domestic chores (cooking, cleaning, laundry, grocery shopping) and caregiving are the shared responsibility of all members regardless of gender.</li>
      <li><strong>Community Living:</strong> A community consists of people living together in a neighborhood or village who share common resources (parks, water, streetlights, security) and support one another.</li>
      <li><strong>Civic Sense:</strong> Social etiquette and civic responsibility toward public spaces—proper garbage segregation, conserving public water and electricity, observing queue discipline, and avoiding noise pollution.</li>
    </ul>
  </div>

  <!-- SVG Diagram: Family and Community Interdependence -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 210" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Spheres of Social Life: Individual &rarr; Family &rarr; Community</text>
      <!-- Center: Individual -->
      <circle cx="280" cy="115" r="30" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="280" y="119" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#b45309" text-anchor="middle">Individual</text>
      <!-- Middle: Family -->
      <circle cx="280" cy="115" r="65" fill="none" stroke="#0284c7" stroke-width="2.5" stroke-dasharray="5,4"/>
      <text x="280" y="65" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#0369a1" text-anchor="middle">Family (Love, Values, Nurturing)</text>
      <!-- Outer: Community -->
      <circle cx="280" cy="115" r="95" fill="none" stroke="#16a34a" stroke-width="2.5"/>
      <text x="280" y="36" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#15803d" text-anchor="middle">Community &amp; Neighbourhood (Mutual Aid &amp; Civic Duty)</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 9.1: The interdependent spheres connecting individual ethics, family bonds, and community well-being</div>
  </div>

  <!-- ================= SECTION A: THE BIG QUESTIONS ================= -->
  <div class="ex-div">
    <div class="ex-heading">The Big Questions (Chapter Inquiry &amp; Openers)</div>
  </div>

  ${qCard(
    'c6sst-ch9-bq1',
    'Big Q1',
    'Why Is the Family the Foundational Unit of Society?',
    'Concept',
    'Why is the family considered the foundational unit of human society? What essential roles does it perform for children and elders?',
    `<p class="step"><strong>1. Primary Socialization &amp; Love:</strong><br>
    The family is the first social space where a child learns language, moral values, cultural manners, empathy, and emotional security.</p>
    <p class="step"><strong>2. Comprehensive Care &amp; Support System:</strong><br>
    Family members care for each other across all stages of life—nurturing newborn babies, educating growing children, and providing medical care, dignity, and companionship to elderly grandparents.</p>`,
    'CBSE Marking Scheme: 1.5 Marks for primary socialization and moral foundation + 1.5 Marks for lifelong caregiving system across generations.'
  )}

  ${qCard(
    'c6sst-ch9-bq2',
    'Big Q2',
    'Why Do Communities Need Shared Rules and Civic Sense?',
    'Explain',
    'How do communities support families, and why do human societies require shared rules and civic sense to function peacefully?',
    `<p class="step"><strong>1. Community Support to Families:</strong><br>
    No single family can build its own roads, power stations, hospitals, schools, or water supply. Communities combine resources to create shared public infrastructure and provide safety during crises.</p>
    <p class="step"><strong>2. Need for Shared Rules &amp; Civic Sense:</strong><br>
    Without rules, individuals would act solely out of self-interest, causing chaos, traffic jams, pollution, and conflict. Civic sense ensures that every resident respects public spaces, disposes of garbage properly, and lives in peace with their neighbours.</p>`,
    'CBSE Marking Scheme: 1.5 Marks for community infrastructure & support + 1.5 Marks for shared rules preventing conflict and ensuring harmony.'
  )}

  <!-- ================= SECTION C: QUESTIONS, ACTIVITIES AND PROJECTS ================= -->
  <div class="ex-div">
    <div class="ex-heading">Questions, activities and projects (Official NCERT Textbook Exercises)</div>
  </div>

  ${qCard(
    'c6sst-ch9-q1',
    'Q1',
    'Difference between Nuclear and Joint Family',
    'Compare',
    'Distinguish between a nuclear family and a joint family. What are the unique advantages of living in each type of family? [4 Marks]',
    `<table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Nuclear Family</th>
          <th>Joint / Extended Family</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="font-weight:700;">Composition</td>
          <td>Consists of parents and their unmarried children living together.</td>
          <td>Consists of multiple generations (grandparents, parents, uncles, aunts, cousins) living under one roof.</td>
        </tr>
        <tr>
          <td style="font-weight:700;">Decision Making</td>
          <td>Decisions are taken quickly and independently by parents.</td>
          <td>Decisions involve consultation with elders and extended members.</td>
        </tr>
        <tr>
          <td style="font-weight:700;">Primary Advantage</td>
          <td>Provides greater personal space, privacy, and mobility for work in urban cities.</td>
          <td>Ensures continuous child care, companionship for grandparents, and shared financial/work burden.</td>
        </tr>
      </tbody>
    </table>`,
    'CBSE Marking Scheme: 2 Marks for structural composition contrast + 2 Marks for stating distinct advantages of both types.'
  )}

  ${qCard(
    'c6sst-ch9-q2',
    'Q2',
    'Rules in the Family and Neighborhood: Need & Reform',
    'Think & Answer',
    `Why are rules necessary in a family and in a neighborhood? Can rules sometimes be unfair or restrictive? Give examples of how unfair rules can be discussed and reformed. [4 Marks]`,
    `<p class="step"><strong>1. Why Rules Are Essential:</strong><br>
    • In a family, rules (like screen-time limits, bedtime, shared chore schedules) maintain health, study habits, and harmony.<br>
    • In a neighborhood, rules (parking designated spots, no loud music late at night, pet waste disposal) prevent daily disputes.</p>
    <p class="step"><strong>2. Unfair or Restrictive Rules:</strong><br>
    Rules can be unfair when they discriminate based on gender (e.g., asking only girls to wash dishes and serve meals while boys play, or allowing boys to stay out late while restricting girls).</p>
    <p class="step"><strong>3. Reforming Unfair Rules:</strong><br>
    Unfair rules should be questioned respectfully through open family discussions. For instance, children and parents can sit together to create a rotating chore chart where all family members take turns cooking, cleaning, and doing laundry regardless of gender.</p>`,
    'CBSE Marking Scheme: 1.5 Marks for necessity of rules + 1 Mark for identifying gender-biased unfair rules + 1.5 Marks for democratic reform via dialogue.'
  )}

  ${qCard(
    'c6sst-ch9-q3',
    'Q3',
    'Community Support in Real-Life Scenarios',
    'Short',
    `Describe how community support makes a critical difference in each of the following situations:<br>
    (a) During festivals and weddings<br>
    (b) During emergencies like floods or the COVID-19 pandemic<br>
    (c) Through collective initiatives like community kitchens (*Langar*) and cleanliness drives [3 Marks]`,
    `<p class="step"><strong>(a) Festivals and Weddings:</strong><br>
    Neighbours volunteer to decorate streets, arrange food, welcome guests, and lend extra furniture, transforming family celebrations into joyful collective events.</p>
    <p class="step"><strong>(b) Emergencies and Disasters:</strong><br>
    During floods or the COVID-19 lockdown, community groups organized food delivery to elderly patients, arranged emergency oxygen and medicines, and distributed masks, saving lives through immediate localized solidarity.</p>
    <p class="step"><strong>(c) Collective Welfare Initiatives:</strong><br>
    Community kitchens (like Sikh Langars) feed thousands of hungry people daily without discrimination. Citizen-led cleanliness drives (*Swachhata Abhiyan*) and tree-planting drives keep neighborhoods healthy and green.</p>`,
    'CBSE Marking Scheme: 1 Mark each for celebrations, emergency disaster response, and collective public welfare initiatives.'
  )}

  ${qCard(
    'c6sst-ch9-q4',
    'Q4',
    'Equal Sharing of Domestic Chores at Home',
    'Explain',
    'Why is it vital that household chores and caregiving are shared equally among all family members regardless of gender? [3 Marks]',
    `<p class="step"><strong>1. Eradicating Unfair Burden on Women:</strong><br>
    Historically, women and girls have shouldered nearly all unpaid cooking, sweeping, washing, and care work, causing physical exhaustion and preventing them from pursuing education or careers.</p>
    <p class="step"><strong>2. Teaching Responsibility and Life Skills:</strong><br>
    Cooking, cleaning, and managing a household are essential life skills that every human being (boy or girl) needs to live independently.</p>
    <p class="step"><strong>3. Fostering Mutual Respect and Domestic Joy:</strong><br>
    When fathers, mothers, sons, and daughters share household chores as a united team, it builds deep affection, respect, and gender equality right at home.</p>`,
    'CBSE Marking Scheme: 1 Mark for reducing unfair burden on women + 1 Mark for essential life skills + 1 Mark for family teamwork and gender equality.'
  )}

  ${qCard(
    'c6sst-ch9-q5',
    'Q5',
    'Civic Sense and Protecting Public Spaces',
    'Short',
    'What is civic sense? Give three examples of how practicing civic sense shows respect for public property and other citizens. [3 Marks]',
    `<p class="step"><strong>1. Definition:</strong><br>
    Civic sense is the social awareness and consideration for the welfare, rights, and comfort of fellow citizens in public spaces.</p>
    <p class="step"><strong>2. Three Concrete Examples:</strong><br>
    • <strong>Waste Disposal:</strong> Never littering on roads or throwing wrappers out of car windows; segregating wet and dry garbage into public bins.<br>
    • <strong>Respecting Public Transport:</strong> Standing in queue without pushing, offering seats to the elderly, pregnant women, or persons with disabilities on buses and metro trains.<br>
    • <strong>Protecting Public Monuments and Parks:</strong> Never scribbling graffiti on historic monuments, plucking flowers in parks, or playing loudspeakers late at night.</p>`,
    'CBSE Marking Scheme: 1 Mark for definition of civic sense + 2 Marks for three concrete examples of respectful civic behaviour.'
  )}

  ${qCard(
    'c6sst-ch9-q6',
    'Q6',
    'Resolving Neighborhood Disputes Through Dialogue',
    'Think & Answer',
    'Imagine two neighbours are arguing heatedly over parking space outside their houses. How can such a dispute be resolved peacefully through community dialogue? [3 Marks]',
    `<p class="step"><strong>1. Calming Down and Active Listening:</strong><br>
    Both parties should step back, avoid shouting or name-calling, and listen patiently to understand each other\'s genuine parking concerns and timings.</p>
    <p class="step"><strong>2. Finding a Mutually Agreed Solution:</strong><br>
    They can agree on a shared parking schedule (e.g., parking one car slightly ahead, marking designated slots), or park in a nearby designated common community parking lot.</p>
    <p class="step"><strong>3. Involving Resident Welfare Associations (RWA):</strong><br>
    If direct conversation stalls, they can request the local RWA committee or respected village/neighborhood elders to mediate fairly and set clear parking guidelines for the entire street.</p>`,
    'CBSE Marking Scheme: 1 Mark for active listening/calm communication + 1 Mark for mutual compromise/parking schedule + 1 Mark for community mediation via RWA.'
  )}

  ${qCard(
    'c6sst-ch9-q7',
    'Q7',
    'Project: Three-Generation Family Tree & Oral History',
    'Project',
    'Describe how you would prepare a 3-generation family tree and conduct an oral history interview comparing life across generations. [3 Marks]',
    `<p class="step"><strong>1. Constructing the Family Tree:</strong><br>
    Draw a chart starting with Grandparents (Generation 1) &rarr; Parents, Uncles, Aunts (Generation 2) &rarr; Siblings and Cousins (Generation 3), writing their names and birth years.</p>
    <p class="step"><strong>2. Conducting the Interview:</strong><br>
    Ask grandparents and parents questions about:<br>
    • <strong>Schooling:</strong> Did they walk to village schools, use slates, or have digital boards?<br>
    • <strong>Transportation:</strong> Did they use bullock carts, bicycles, or buses compared to modern metro/cars?<br>
    • <strong>Occupations:</strong> Has the family shifted from traditional agriculture to service/technology jobs?</p>`,
    'CBSE Marking Scheme: 1.5 Marks for 3-generation family tree structure + 1.5 Marks for oral interview questions on changes in schooling, transport, and jobs.'
  )}
</section>`;

// ============================================================================
// CHAPTER 10: GRASSROOTS DEMOCRACY — PART 1: GOVERNANCE
// ============================================================================
const ch10 = `<section class="chapter-section" id="ch10">
  <div class="chapter-header">
    <div class="ch-badge">10</div>
    <div class="chapter-header-info">
      <h2>Chapter 10: Grassroots Democracy — Part 1: Governance</h2>
      <p>NCERT Exploring Society: India and Beyond (Class 6) — 100% Complete Textbook Questions, The Big Questions, Levels &amp; Organs of Government, Case Study &amp; CBSE Rubrics | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Political Science Concepts: State, Democracy &amp; Government</div>
    <ul class="concept-list">
      <li><strong>What is Government?</strong> The governing body of a nation, state, or community that makes decisions, implements laws, manages public services, maintains law and order, and protects territorial borders.</li>
      <li><strong>Three Tiers / Levels of Government in India:</strong>
        <ul>
          <li><strong>Local Level:</strong> Governs villages (Panchayati Raj) and towns/cities (Municipalities). Handles local drinking water, streetlights, sanitation, and primary health.</li>
          <li><strong>State Level:</strong> Governs an entire state (e.g., Uttar Pradesh, Tamil Nadu, Maharashtra). Led by the Chief Minister and Governor; handles state police, highways, agriculture, and schools.</li>
          <li><strong>National / Union Level:</strong> Governs the entire country from New Delhi. Led by the Prime Minister and President; handles national defence, foreign affairs, railways, and currency.</li>
        </ul>
      </li>
      <li><strong>Three Organs of Government:</strong>
        <ul>
          <li><strong>Legislature:</strong> The law-making body (Parliament at Union level; Vidhan Sabha at State level).</li>
          <li><strong>Executive:</strong> Implements and enforces laws (President, Prime Minister, Ministers, and Civil Servants/Police).</li>
          <li><strong>Judiciary:</strong> Interprets laws, protects fundamental rights, and resolves disputes (Supreme Court, High Courts, District Courts).</li>
        </ul>
      </li>
      <li><strong>Universal Adult Franchise:</strong> Every Indian citizen who is <strong>18 years of age or older has the right to vote</strong> without discrimination based on caste, religion, wealth, or gender (One person, One vote, One value).</li>
    </ul>
  </div>

  <!-- SVG Diagram: Levels and Organs of Government -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 210" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Structure of Indian Governance: Three Levels &amp; Three Organs</text>
      <!-- Levels (Left) -->
      <rect x="30" y="45" width="220" height="145" rx="8" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
      <text x="140" y="68" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0369a1" text-anchor="middle">3 LEVELS OF GOVERNMENT</text>
      <text x="45" y="95" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f172a">1. Union / Central Level:</text>
      <text x="45" y="110" font-family="system-ui, sans-serif" font-size="9" fill="#475569">Defence, Railways, Currency (New Delhi)</text>
      <text x="45" y="130" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f172a">2. State Level:</text>
      <text x="45" y="145" font-family="system-ui, sans-serif" font-size="9" fill="#475569">Police, State Roads, Education</text>
      <text x="45" y="165" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f172a">3. Local Level:</text>
      <text x="45" y="180" font-family="system-ui, sans-serif" font-size="9" fill="#475569">Gram Panchayat &amp; Municipality</text>

      <!-- Organs (Right) -->
      <rect x="290" y="45" width="240" height="145" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
      <text x="410" y="68" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#15803d" text-anchor="middle">3 ORGANS OF GOVERNMENT</text>
      <text x="305" y="95" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f172a">1. Legislature:</text>
      <text x="305" y="110" font-family="system-ui, sans-serif" font-size="9" fill="#475569">Makes laws (Parliament, Assemblies)</text>
      <text x="305" y="130" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f172a">2. Executive:</text>
      <text x="305" y="145" font-family="system-ui, sans-serif" font-size="9" fill="#475569">Implements laws (Ministers, Police, IAS)</text>
      <text x="305" y="165" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f172a">3. Judiciary:</text>
      <text x="305" y="180" font-family="system-ui, sans-serif" font-size="9" fill="#475569">Upholds justice (Supreme Court, High Courts)</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 10.1: Vertical division of levels and horizontal separation of organs of government</div>
  </div>

  <!-- ================= SECTION A: THE BIG QUESTIONS ================= -->
  <div class="ex-div">
    <div class="ex-heading">The Big Questions (Chapter Inquiry &amp; Openers)</div>
  </div>

  ${qCard(
    'c6sst-ch10-bq1',
    'Big Q1',
    'What Is Governance, and Why Do People Need Governments?',
    'Concept',
    'What is governance? Why cannot a society function peacefully without an established government?',
    `<p class="step"><strong>1. Definition of Governance:</strong><br>
    Governance is the organized process of making and implementing collective decisions, maintaining public order, delivering public goods, and upholding laws for the welfare of all citizens.</p>
    <p class="step"><strong>2. Why Society Needs Government:</strong><br>
    Without a government, there would be no common laws, no police to protect people from crime, no courts to resolve disputes fairly, and no public funding to build highways, hospitals, schools, or military defence.</p>`,
    'CBSE Marking Scheme: 1.5 Marks for definition of governance + 1.5 Marks for essential functions (order, justice, public goods, security).'
  )}

  ${qCard(
    'c6sst-ch10-bq2',
    'Big Q2',
    'What Is Democracy and What Are Its Key Principles?',
    'Explain',
    'What is democracy? What essential principles make democratic governance superior to other systems?',
    `<p class="step"><strong>1. Definition:</strong><br>
    Democracy is government "of the people, by the people, and for the people." Ultimate political authority rests with the citizens.</p>
    <p class="step"><strong>2. Core Principles:</strong><br>
    • <strong>Popular Consent &amp; Regular Elections:</strong> Citizens freely choose their leaders at regular intervals through secret ballot.<br>
    • <strong>Rule of Law:</strong> Every citizen, including the Prime Minister, is subject to the same laws.<br>
    • <strong>Protection of Fundamental Rights:</strong> Guaranteed freedom of speech, religion, and equality before the law.</p>`,
    'CBSE Marking Scheme: 1 Mark for definition + 2 Marks for regular elections, rule of law, and protection of rights.'
  )}

  <!-- ================= SECTION C: QUESTIONS, ACTIVITIES AND PROJECTS ================= -->
  <div class="ex-div">
    <div class="ex-heading">Questions, activities and projects (Official NCERT Textbook Exercises)</div>
  </div>

  ${qCard(
    'c6sst-ch10-q1',
    'Q1',
    'What Is Government? Four Major Responsibilities',
    'Short',
    'What is a government? List four major responsibilities of a government in a democratic society. [3 Marks]',
    `<p class="step"><strong>1. Definition:</strong><br>
    A government is the constitutional political authority empowered to make, administer, and enforce laws for a nation or state.</p>
    <p class="step"><strong>2. Four Major Responsibilities:</strong><br>
    • <strong>Maintaining Law and Order:</strong> Running the police and courts to protect citizens from crime and injustice.<br>
    • <strong>Providing Public Infrastructure:</strong> Building highways, railways, public hospitals, schools, and drinking water facilities.<br>
    • <strong>National Defence:</strong> Protecting territorial borders from foreign invasion through the armed forces.<br>
    • <strong>Disaster Relief &amp; Welfare:</strong> Organizing emergency rescue, financial relief, and food supply during floods, droughts, or epidemics.</p>`,
    'CBSE Marking Scheme: 1 Mark for definition + 2 Marks for four clear responsibilities (0.5 Mark each).'
  )}

  ${qCard(
    'c6sst-ch10-q2',
    'Q2',
    'Three Levels of Government in India: Roles & Examples',
    'Explain',
    'Explain the three levels of government in India with their jurisdiction and practical examples. [3 Marks]',
    `<p class="step"><strong>1. Local Level (Grassroots):</strong><br>
    Governs a village, town, or city. Handles local sanitation, streetlights, parks, and primary healthcare centers (e.g., a Gram Panchayat building a village well or Delhi Municipal Corporation managing garbage).</p>
    <p class="step"><strong>2. State Level:</strong><br>
    Governs an entire state (e.g., Karnataka, Rajasthan, Punjab). Handles law and order (State Police), state highways, agriculture, and high school education boards.</p>
    <p class="step"><strong>3. Union / National Level:</strong><br>
    Governs the entire country from New Delhi. Responsible for issues of national importance like defence (Army, Navy, Air Force), foreign affairs, atomic energy, Indian Railways, and printing national currency.</p>`,
    'CBSE Marking Scheme: 1 Mark for each level explained with jurisdiction and clear examples (Total 3 Marks).'
  )}

  ${qCard(
    'c6sst-ch10-q3',
    'Q3',
    'Three Organs of Government: Legislature, Executive & Judiciary',
    'Compare',
    'Describe the three organs of government and their specific functions under the Indian Constitution. [3 Marks]',
    `<table>
      <thead>
        <tr>
          <th>Organ</th>
          <th>Primary Constitutional Function</th>
          <th>Key Institutions &amp; Heads</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="font-weight:700;">Legislature</td>
          <td>Drafts, debates, and passes new laws and approves the national budget.</td>
          <td>Parliament (Lok Sabha &amp; Rajya Sabha); State Legislative Assemblies (Vidhan Sabha).</td>
        </tr>
        <tr>
          <td style="font-weight:700;">Executive</td>
          <td>Implements and enforces laws passed by the legislature.</td>
          <td>President, Prime Minister, Union Council of Ministers, Civil Servants (IAS/IPS), and Police.</td>
        </tr>
        <tr>
          <td style="font-weight:700;">Judiciary</td>
          <td>Interprets laws, protects citizens' fundamental rights, and settles legal disputes.</td>
          <td>Supreme Court of India (Chief Justice), High Courts, and District/Session Courts.</td>
        </tr>
      </tbody>
    </table>`,
    'CBSE Marking Scheme: 1 Mark each for describing Legislature, Executive, and Judiciary accurately.'
  )}

  ${qCard(
    'c6sst-ch10-q4',
    'Q4',
    'Direct Democracy vs. Representative Democracy',
    'Compare',
    'Differentiate between Direct Democracy and Representative Democracy. Why does India follow a representative democracy? [3 Marks]',
    `<p class="step"><strong>1. Direct Democracy:</strong><br>
    All adult citizens gather together directly in a public assembly to vote on laws, policies, and decisions (e.g., ancient Athens, or today\'s Gram Sabha at the village level in India).</p>
    <p class="step"><strong>2. Representative Democracy:</strong><br>
    Citizens elect representatives (Members of Parliament - MPs, Members of Legislative Assembly - MLAs) through periodic elections to make laws and govern on their behalf.</p>
    <p class="step"><strong>3. Why India Follows Representative Democracy:</strong><br>
    India has a population of over 1.4 billion people spread across 3.28 million square kilometers. It is physically impossible for hundreds of millions of citizens to sit in one room every week to debate and vote on thousands of complex national laws.</p>`,
    'CBSE Marking Scheme: 1 Mark for Direct Democracy + 1 Mark for Representative Democracy + 1 Mark for India\'s large population and geographic size.'
  )}

  ${qCard(
    'c6sst-ch10-q5',
    'Q5',
    'Universal Adult Franchise: Meaning and Importance',
    'Short',
    'What is Universal Adult Franchise? Why is it considered a cornerstone of Indian democracy? [3 Marks]',
    `<p class="step"><strong>1. Definition:</strong><br>
    Universal Adult Franchise means that every citizen who has attained the age of <strong>18 years</strong> has the right to vote in elections, without any discrimination based on religion, race, caste, gender, or wealth.</p>
    <p class="step"><strong>2. Core Importance:</strong><br>
    • <strong>Equal Political Voice:</strong> It enshrines the principle of "One person, one vote, one value." The vote of a billionaire industrialist carries the exact same mathematical weight as the vote of a poor daily-wage labourer.<br>
    • <strong>Democratic Accountability:</strong> It forces politicians and ministers to serve all sections of the public, knowing they can be voted out of power if they ignore ordinary citizens.</p>`,
    'CBSE Marking Scheme: 1 Mark for definition (age 18 without discrimination) + 2 Marks for equal political voice and democratic accountability.'
  )}

  ${qCard(
    'c6sst-ch10-q6',
    'Q6',
    'Case Study: Governance During the COVID-19 Pandemic',
    'Project',
    `Analyze how the three levels (Union, State, Local) and three organs (Legislature, Executive, Judiciary) of government cooperated during the COVID-19 pandemic crisis. [4 Marks]`,
    `<p class="step"><strong>1. Action by the Three Levels:</strong><br>
    • <strong>Union Level:</strong> Procured and distributed COVID vaccines, imposed national travel restrictions, and provided emergency grains under PMGKAY.<br>
    • <strong>State Level:</strong> Built dedicated COVID hospitals, mobilized state medical staff, and enforced containment zone rules.<br>
    • <strong>Local Level (Panchayats &amp; Municipalities):</strong> Sanitized residential streets, distributed ration packets, and conducted door-to-door temperature and symptom surveys.</p>
    <p class="step"><strong>2. Action by the Three Organs:</strong><br>
    • <strong>Legislature:</strong> Passed relief budgets and emergency healthcare funds.<br>
    • <strong>Executive:</strong> Doctors, police officers, and district magistrates worked on the frontlines 24/7 enforcing safety protocols.<br>
    • <strong>Judiciary:</strong> High Courts and Supreme Court monitored oxygen supply, vaccine pricing, and protected the rights of migrant workers.</p>`,
    'CBSE Marking Scheme: 2 Marks for actions across the 3 levels + 2 Marks for actions across the 3 organs.'
  )}

  ${qCard(
    'c6sst-ch10-q7',
    'Q7',
    'Democracy vs. Monarchy vs. Dictatorship',
    'Compare',
    'Compare Democracy, Monarchy, and Dictatorship across source of authority, citizen freedoms, and accountability to the public. [3 Marks]',
    `<table>
      <thead>
        <tr>
          <th>System</th>
          <th>Source of Authority</th>
          <th>Citizen Freedoms</th>
          <th>Accountability</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="font-weight:700;">Democracy</td>
          <td>Elected by the citizens through free and fair votes.</td>
          <td>Guaranteed fundamental freedoms (speech, protest, equality).</td>
          <td>Fully accountable; can be removed in the next election.</td>
        </tr>
        <tr>
          <td style="font-weight:700;">Monarchy</td>
          <td>Hereditary succession (King/Queen inherits the throne).</td>
          <td>Limited; depends entirely on the king\'s personal benevolence.</td>
          <td>Not accountable to citizens; power held for life.</td>
        </tr>
        <tr>
          <td style="font-weight:700;">Dictatorship</td>
          <td>Seized through military force or coup by a single tyrant.</td>
          <td>Severely suppressed; opposition jailed or silenced.</td>
          <td>Zero accountability; citizens have no legal power to change rulers.</td>
        </tr>
      </tbody>
    </table>`,
    'CBSE Marking Scheme: 1 Mark for each system compared accurately.'
  )}
</section>`;

// ============================================================================
// CHAPTER 11: GRASSROOTS DEMOCRACY — PART 2: RURAL AREAS
// ============================================================================
const ch11 = `<section class="chapter-section" id="ch11">
  <div class="chapter-header">
    <div class="ch-badge">11</div>
    <div class="chapter-header-info">
      <h2>Chapter 11: Grassroots Democracy — Part 2: Local Government in Rural Areas</h2>
      <p>NCERT Exploring Society: India and Beyond (Class 6) — 100% Complete Textbook Questions, Gram Sabha vs. Gram Panchayat, Petition Project, Road Safety &amp; CBSE Rubrics | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Rural Governance Concepts: The Panchayati Raj System</div>
    <ul class="concept-list">
      <li><strong>Gram Sabha:</strong> The general body of the village comprising <strong>all adults (18 years and above) registered as voters</strong>. It is the purest form of direct grassroots democracy in India, meeting regularly to approve village development plans and review expenses.</li>
      <li><strong>Gram Panchayat:</strong> The executive governing council elected by the Gram Sabha for a 5-year term. Headed by the <em>Sarpanch</em> (Panchayat President) and composed of Ward Members (<em>Panchs</em>).</li>
      <li><strong>Panchayat Secretary:</strong> A non-elected government employee appointed by the State Government who calls meetings of the Gram Sabha and Gram Panchayat, maintains official minutes, and manages financial accounting.</li>
      <li><strong>Three-Tier Structure of Panchayati Raj:</strong>
        <ol>
          <li><em>Gram Panchayat:</em> Village level.</li>
          <li><em>Panchayat Samiti (Block Samiti):</em> Block / Taluka level, coordinating multiple Gram Panchayats.</li>
          <li><em>Zilla Parishad:</em> District level, overseeing rural development plans for the entire district.</li>
        </ol>
      </li>
      <li><strong>Women\'s Leadership:</strong> By constitutional mandate (73rd Amendment), at least <strong>one-third (33%, up to 50% in many states)</strong> of all seats and Sarpanch posts are reserved for women, revolutionizing rural female leadership.</li>
    </ul>
  </div>

  <!-- SVG Diagram: Three Tiers of Panchayati Raj -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 210" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">The Three-Tier Pyramid of Panchayati Raj</text>
      <!-- Top Tier: Zilla Parishad -->
      <polygon points="280,45 190,95 370,95" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="280" y="78" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#92400e" text-anchor="middle">Zilla Parishad (District Level)</text>

      <!-- Middle Tier: Panchayat Samiti -->
      <polygon points="190,95 120,145 440,145 370,95" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
      <text x="280" y="125" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0369a1" text-anchor="middle">Panchayat Samiti / Block Level</text>

      <!-- Bottom Tier: Gram Panchayat -->
      <polygon points="120,145 40,195 520,195 440,145" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="280" y="172" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#15803d" text-anchor="middle">Gram Panchayat (Village Level) &amp; Gram Sabha</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 11.1: Three-tier rural governance structure under the 73rd Constitutional Amendment</div>
  </div>

  <!-- ================= SECTION A: THE BIG QUESTIONS ================= -->
  <div class="ex-div">
    <div class="ex-heading">The Big Questions (Chapter Inquiry &amp; Openers)</div>
  </div>

  ${qCard(
    'c6sst-ch11-bq1',
    'Big Q1',
    'How Do Villagers Participate Directly in Village Governance?',
    'Concept',
    'How do people in rural India take charge of their own local administration through direct participation?',
    `<p class="step"><strong>1. Through the Gram Sabha:</strong><br>
    Unlike national politics where citizens only vote once every five years, in a village every adult resident can directly attend Gram Sabha meetings, ask questions to the Sarpanch, examine budget registers, and vote on local issues like building a water tank or repairing a road.</p>
    <p class="step"><strong>2. Community Accountability:</strong><br>
    The Gram Sabha prevents the elected Panchayat from misusing public funds or favoring wealthy individuals, ensuring that genuine development reaches the poorest families.</p>`,
    'CBSE Marking Scheme: 1.5 Marks for direct participation in Gram Sabha + 1.5 Marks for holding Sarpanch/Panchayat accountable.'
  )}

  ${qCard(
    'c6sst-ch11-bq2',
    'Big Q2',
    'What Is the Structure and Role of the Panchayati Raj System?',
    'Explain',
    'What is the structure of the Panchayati Raj system, and what role does it perform in rural India?',
    `<p class="step"><strong>1. Three-Tier Structure:</strong><br>
    It links village-level democracy (Gram Panchayat) to the block level (Panchayat Samiti) and district level (Zilla Parishad), ensuring coordinated rural development.</p>
    <p class="step"><strong>2. Vital Roles:</strong><br>
    Constructing and maintaining village infrastructure (wells, school buildings, drains, paved roads), promoting village hygiene, running health sub-centers, and executing government welfare schemes (such as MGNREGA).</p>`,
    'CBSE Marking Scheme: 1.5 Marks for 3-tier structure + 1.5 Marks for developmental functions (roads, water, hygiene, MGNREGA).'
  )}

  <!-- ================= SECTION C: QUESTIONS, ACTIVITIES AND PROJECTS ================= -->
  <div class="ex-div">
    <div class="ex-heading">Questions, activities and projects (Official NCERT Textbook Exercises)</div>
  </div>

  ${qCard(
    'c6sst-ch11-q1',
    'Q1',
    'Differentiate Between Gram Sabha and Gram Panchayat',
    'Compare',
    'Distinguish between the Gram Sabha and the Gram Panchayat. Give at least three clear points of difference. [3 Marks]',
    `<table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Gram Sabha</th>
          <th>Gram Panchayat</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="font-weight:700;">Membership</td>
          <td>Permanent body consisting of <strong>all adults (18+)</strong> living in the village registered as voters.</td>
          <td>Elected small executive council consisting of Ward Members (<em>Panchs</em>) and the <em>Sarpanch</em>.</td>
        </tr>
        <tr>
          <td style="font-weight:700;">Tenure</td>
          <td>A permanent body; never gets dissolved.</td>
          <td>Elected for a fixed term of <strong>5 years</strong>.</td>
        </tr>
        <tr>
          <td style="font-weight:700;">Role</td>
          <td>Acts like a village parliament—reviews budget, approves development plans, and questions leaders.</td>
          <td>Implements development schemes, builds drains/roads, and collects local village taxes.</td>
        </tr>
      </tbody>
    </table>`,
    'CBSE Marking Scheme: 1 Mark for each accurate point of contrast (Membership, Tenure, Role).'
  )}

  ${qCard(
    'c6sst-ch11-q2',
    'Q2',
    'Role of Sarpanch vs. Panchayat Secretary',
    'Compare',
    'Explain the role of the Sarpanch and the Panchayat Secretary. Why is the Secretary not elected by the villagers? [3 Marks]',
    `<p class="step"><strong>1. The Sarpanch:</strong><br>
    • An <strong>elected political leader</strong> chosen directly by the villagers for 5 years.<br>
    • Heads the Gram Panchayat, presides over meetings, and leads local village development projects.</p>
    <p class="step"><strong>2. The Panchayat Secretary:</strong><br>
    • A <strong>permanent government officer</strong> appointed by the State Government (not elected by villagers).<br>
    • Responsible for calling official meetings of the Gram Sabha and Gram Panchayat, recording minutes of the discussions, and maintaining financial accounts and government registers.</p>
    <p class="step"><strong>3. Why Secretary Is Appointed, Not Elected:</strong><br>
    Being an impartial government servant, the Secretary ensures that all village spending complies with state financial rules and that no partisan bias occurs.</p>`,
    'CBSE Marking Scheme: 1 Mark for Sarpanch role + 1 Mark for Secretary role + 1 Mark for explaining why Secretary is an appointed official.'
  )}

  ${qCard(
    'c6sst-ch11-q3',
    'Q3',
    'Three-Tier Structure of Panchayati Raj',
    'Explain',
    'Describe the three tiers of the Panchayati Raj system in detail. How do they coordinate with one another? [3 Marks]',
    `<ul class="step-list">
      <li><strong>1. Gram Panchayat (Village Level):</strong> The grassroots tier directly responsible for village water, paved lanes, sanitation, and streetlights.</li>
      <li><strong>2. Panchayat Samiti / Block Samiti (Block Level):</strong> The intermediate tier linking many Gram Panchayats. Coordinates joint projects (like irrigation canals, veterinary clinics) and pools block development funds.</li>
      <li><strong>3. Zilla Parishad (District Level):</strong> The apex tier coordinating rural development plans across the entire district. Distributes state government development grants to Panchayat Samitis and prepares district five-year plans.</li>
    </ul>`,
    'CBSE Marking Scheme: 1 Mark for each tier explained accurately with its jurisdiction and function.'
  )}

  ${qCard(
    'c6sst-ch11-q4',
    'Q4',
    'Sources of Funds for a Gram Panchayat',
    'Short',
    'What are the primary sources of revenue and funds for a Gram Panchayat to carry out development works? [3 Marks]',
    `<p class="step"><strong>1. Collection of Local Taxes:</strong><br>
    Taxes on houses, market shops, fairs, and registration fees on cattle trade.</p>
    <p class="step"><strong>2. Government Scheme Grants:</strong><br>
    Development funds received from State and Central government departments routed through the Zilla Parishad and Panchayat Samiti (e.g., Finance Commission grants, PM Awas Yojana, MGNREGA).</p>
    <p class="step"><strong>3. Community Donations:</strong><br>
    Voluntary contributions and funds donated by villagers or charitable organizations for community works (e.g., building a community hall / *Panchayat Ghar*).</p>`,
    'CBSE Marking Scheme: 1 Mark each for local taxes, government scheme grants, and community donations.'
  )}

  ${qCard(
    'c6sst-ch11-q5',
    'Q5',
    'Project: Formal Petition Letter to the Sarpanch',
    'Project',
    `Draft a formal application to the Sarpanch of your Gram Panchayat addressing a critical village problem (such as plastic waste accumulation or drinking water contamination) with actionable community solutions. [4 Marks]`,
    `<div class="step" style="background:#f8fafc; border:1px solid #cbd5e1; padding:15px; border-radius:8px;">
      <p><strong>To,</strong><br>
      The Sarpanch,<br>
      Gram Panchayat Rampur, District Meerut, Uttar Pradesh.<br>
      <strong>Date:</strong> 10th October 2026</p>
      <p><strong>Subject:</strong> Urgent petition regarding plastic waste accumulation and open drain blockage in Ward No. 4.</p>
      <p><strong>Respected Sarpanch Ji,</strong></p>
      <p>I wish to draw your immediate attention to the severe accumulation of single-use plastic bags and garbage in the open drains of Ward No. 4. Due to this blockage, contaminated drain water is overflowing onto the main village road, creating foul stench and breeding swarms of mosquitoes, leading to cases of dengue and malaria among children.</p>
      <p><strong>Proposed Community Solutions:</strong><br>
      1. Organize an immediate desilting and cleaning drive with the village sanitation worker.<br>
      2. Install two large covered dustbins near the village square for dry waste.<br>
      3. Pass a Gram Sabha resolution banning single-use plastic bags and distribute cloth bags made by the village women’s Self-Help Group (SHG).</p>
      <p>We request you to take up this matter in the forthcoming Gram Panchayat meeting.</p>
      <p>Yours faithfully,<br>
      <strong>Aman Kumar &amp; Concerned Residents of Ward 4</strong></p>
    </div>`,
    'CBSE Marking Scheme: 1 Mark for formal letter format + 1.5 Marks for clear description of the civic problem + 1.5 Marks for actionable community solutions.'
  )}

  ${qCard(
    'c6sst-ch11-q6',
    'Q6',
    'Road Safety Measures Around the Village School',
    'Project',
    'Propose four concrete road safety measures that a Gram Panchayat can implement to protect children attending the village primary school situated on the main road. [3 Marks]',
    `<ul class="step-list">
      <li><strong>1. Speed Breakers (Rumble Strips):</strong> Construct scientifically designed speed humps 50 metres before and after the school gate on both sides of the road to compel vehicles to slow down.</li>
      <li><strong>2. Painted Pedestrian Zebra Crossing:</strong> Paint high-visibility white zebra crossing stripes directly outside the school entrance for children to cross safely.</li>
      <li><strong>3. Caution Signboards:</strong> Install reflective yellow caution signs displaying: <em>"Caution: School Ahead — Speed Limit 20 km/h"</em>.</li>
      <li><strong>4. Community Traffic Volunteers:</strong> Assign two village volunteers or elderly community members during morning arrival (7:30–8:00 AM) and afternoon dispersal (1:30–2:00 PM) to assist children across the road.</li>
    </ul>`,
    'CBSE Marking Scheme: 0.75 Mark for each concrete, actionable road safety measure (Total 3 Marks).'
  )}

  ${qCard(
    'c6sst-ch11-q7',
    'Q7',
    'Empowerment of Women in Panchayati Raj',
    'Short',
    'How has the constitutional reservation of seats for women in the Panchayati Raj transformed rural governance and leadership? [3 Marks]',
    `<p class="step"><strong>1. Breaking Patriarchal Barriers:</strong><br>
    The mandatory 33% (up to 50% in many states) reservation of seats has brought hundreds of thousands of rural women out of domestic confinement into active public leadership.</p>
    <p class="step"><strong>2. Prioritizing Basic Living Needs:</strong><br>
    Women Sarpanchs have prioritized clean drinking water taps, girls\' toilets in schools, maternal healthcare clinics, and prohibition of illicit alcohol shops in villages.</p>
    <p class="step"><strong>3. Inspiring the Next Generation:</strong><br>
    Seeing women chairing meetings and resolving disputes inspires young rural girls to complete their schooling and aspire for higher public careers.</p>`,
    'CBSE Marking Scheme: 1 Mark for breaking barriers + 1 Mark for prioritizing health/water/sanitation + 1 Mark for role models inspiring rural girls.'
  )}
</section>`;

// ============================================================================
// CHAPTER 12: GRASSROOTS DEMOCRACY — PART 3: URBAN AREAS
// ============================================================================
const ch12 = `<section class="chapter-section" id="ch12">
  <div class="chapter-header">
    <div class="ch-badge">12</div>
    <div class="chapter-header-info">
      <h2>Chapter 12: Grassroots Democracy — Part 3: Local Government in Urban Areas</h2>
      <p>NCERT Exploring Society: India and Beyond (Class 6) — 100% Complete Textbook Questions, Municipal Corporations, Interview Project, Waste Segregation &amp; CBSE Rubrics | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Urban Governance Concepts: Urban Local Bodies (ULBs)</div>
    <ul class="concept-list">
      <li><strong>Types of Urban Local Bodies:</strong>
        <ul>
          <li><strong>Municipal Corporation (*Nagar Nigam*):</strong> Administers large cities with populations exceeding 10 lakhs (e.g., Mumbai, Delhi, Bengaluru, Chennai). Headed politically by the <em>Mayor</em>.</li>
          <li><strong>Municipal Council (*Nagar Palika*):</strong> Administers medium and smaller towns with populations between 20,000 and 10 lakhs.</li>
          <li><strong>Nagar Panchayat:</strong> Governs transitional areas transforming from rural villages to small towns.</li>
        </ul>
      </li>
      <li><strong>Elected Councillors vs. Municipal Commissioner:</strong>
        <ul>
          <li><strong>Ward Councillors (*Parshad*):</strong> Elected by citizens from their respective neighbourhood wards for a 5-year term. They debate policies and represent citizens' grievances.</li>
          <li><strong>Municipal Commissioner:</strong> An administrative officer (usually an IAS officer) appointed by the State Government who executes decisions and heads the city bureaucracy.</li>
        </ul>
      </li>
      <li><strong>Municipal Services:</strong> Potable water supply, solid waste management, street lighting, public health, primary schools, parks, road repair, and issuing birth/death certificates.</li>
      <li><strong>Revenue Sources:</strong> Property tax, water/sewerage cess, trade license fees, entertainment tax, and state financial grants.</li>
    </ul>
  </div>

  <!-- SVG Diagram: Urban Local Body Structure -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 210" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Organization of a Municipal Corporation</text>
      <!-- Elected Side (Left) -->
      <rect x="30" y="45" width="220" height="145" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="140" y="68" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#92400e" text-anchor="middle">ELECTED WING (Citizens' Voice)</text>
      <text x="45" y="95" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f172a">• The Mayor (First Citizen)</text>
      <text x="45" y="112" font-family="system-ui, sans-serif" font-size="9" fill="#475569">Presides over General House</text>
      <text x="45" y="132" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f172a">• Ward Councillors (Elected)</text>
      <text x="45" y="149" font-family="system-ui, sans-serif" font-size="9" fill="#475569">Represent neighbourhood wards</text>
      <text x="45" y="169" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f172a">• Standing Committees</text>
      <text x="45" y="184" font-family="system-ui, sans-serif" font-size="9" fill="#475569">Water, Health, Education panels</text>

      <!-- Administrative Side (Right) -->
      <rect x="290" y="45" width="240" height="145" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
      <text x="410" y="68" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0369a1" text-anchor="middle">EXECUTIVE WING (Administration)</text>
      <text x="305" y="95" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f172a">• Municipal Commissioner (IAS)</text>
      <text x="305" y="112" font-family="system-ui, sans-serif" font-size="9" fill="#475569">Appointed by State Government</text>
      <text x="305" y="132" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f172a">• Departmental Heads</text>
      <text x="305" y="149" font-family="system-ui, sans-serif" font-size="9" fill="#475569">Chief Health Officer, Chief Engineer</text>
      <text x="305" y="169" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f172a">• Sanitation Workers &amp; Field Staff</text>
      <text x="305" y="184" font-family="system-ui, sans-serif" font-size="9" fill="#475569">Daily garbage collection, road repairs</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 12.1: Dual organizational structure of Urban Municipal Governance</div>
  </div>

  <!-- ================= SECTION A: THE BIG QUESTIONS ================= -->
  <div class="ex-div">
    <div class="ex-heading">The Big Questions (Chapter Inquiry &amp; Openers)</div>
  </div>

  ${qCard(
    'c6sst-ch12-bq1',
    'Big Q1',
    'Who Runs Our Towns and Cities? How Do Urban Bodies Function?',
    'Concept',
    'Who is responsible for running our complex towns and cities? How do urban local bodies organize and deliver civic services?',
    `<p class="step"><strong>1. Urban Local Bodies (Municipalities):</strong><br>
    Cities are governed by <strong>Municipal Corporations</strong> and smaller towns by <strong>Municipal Councils</strong>. Cities are divided into territorial segments called <em>wards</em>.</p>
    <p class="step"><strong>2. Operational Division:</strong><br>
    Elected Ward Councillors form committees (Water, Sanitation, Public Works) to decide policies and allocate budget, while the Municipal Commissioner and specialized departments (Health, Engineering, Horticulture) execute the daily municipal operations.</p>`,
    'CBSE Marking Scheme: 1.5 Marks for defining Municipalities/Corporations + 1.5 Marks for ward divisions and committee execution.'
  )}

  ${qCard(
    'c6sst-ch12-bq2',
    'Big Q2',
    'How Do Citizens Hold Municipal Authorities Accountable?',
    'Explain',
    'How can urban citizens interact with and hold municipal authorities accountable for poor services?',
    `<p class="step"><strong>1. Approaching the Ward Councillor:</strong><br>
    Residents take issues like garbage accumulation, leaking water pipes, or broken streetlights directly to their elected Councillor.</p>
    <p class="step"><strong>2. Collective Resident Action:</strong><br>
    Through Resident Welfare Associations (RWAs), community petitions, digital grievance portals (e.g., municipal mobile apps), and right-to-information queries, citizens hold officials accountable.</p>`,
    'CBSE Marking Scheme: 1.5 Marks for approaching Ward Councillors + 1.5 Marks for RWAs and grievance portals.'
  )}

  <!-- ================= SECTION C: QUESTIONS, ACTIVITIES AND PROJECTS ================= -->
  <div class="ex-div">
    <div class="ex-heading">Questions, activities and projects (Official NCERT Textbook Exercises)</div>
  </div>

  ${qCard(
    'c6sst-ch12-q1',
    'Q1',
    'Municipal Corporation vs. Municipal Council',
    'Compare',
    'Differentiate between a Municipal Corporation (*Nagar Nigam*) and a Municipal Council (*Nagar Palika*). [3 Marks]',
    `<table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Municipal Corporation (*Nagar Nigam*)</th>
          <th>Municipal Council (*Nagar Palika*)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="font-weight:700;">City Size &amp; Population</td>
          <td>Set up in large metropolitan cities with populations exceeding <strong>10 lakhs (1 million)</strong>.</td>
          <td>Set up in medium and smaller towns with populations between <strong>20,000 and 10 lakhs</strong>.</td>
        </tr>
        <tr>
          <td style="font-weight:700;">Political Head</td>
          <td>Headed by the <strong>Mayor</strong>.</td>
          <td>Headed by the <strong>President / Chairperson</strong>.</td>
        </tr>
        <tr>
          <td style="font-weight:700;">Administrative Head</td>
          <td>Headed by a senior IAS officer designated as the <strong>Municipal Commissioner</strong>.</td>
          <td>Headed by an executive officer designated as the <strong>Chief Municipal Officer (CMO)</strong>.</td>
        </tr>
      </tbody>
    </table>`,
    'CBSE Marking Scheme: 1 Mark for population criteria + 1 Mark for political head + 1 Mark for administrative officer.'
  )}

  ${qCard(
    'c6sst-ch12-q2',
    'Q2',
    'Ward Councillor vs. Municipal Commissioner',
    'Compare',
    'Explain the differences between a Ward Councillor and the Municipal Commissioner. [3 Marks]',
    `<p class="step"><strong>1. Ward Councillor (*Parshad*):</strong><br>
    • <strong>Elected representative:</strong> Elected directly by voters of a specific municipal ward for a 5-year term.<br>
    • <strong>Role:</strong> Debates policies, raises neighborhood complaints, and forms committees to approve municipal budgets.</p>
    <p class="step"><strong>2. Municipal Commissioner:</strong><br>
    • <strong>Appointed government official:</strong> Senior civil servant (IAS) appointed by the State Government.<br>
    • <strong>Role:</strong> Administrative head who implements council decisions, supervises thousands of city employees, and controls administrative expenditure.</p>`,
    'CBSE Marking Scheme: 1.5 Marks for Ward Councillor (elected, policymaking) + 1.5 Marks for Commissioner (appointed, execution).'
  )}

  ${qCard(
    'c6sst-ch12-q3',
    'Q3',
    'Essential Civic Services Provided by Municipalities',
    'Short',
    'List six essential public services provided by a Municipal Corporation to city residents. [3 Marks]',
    `<ul class="step-list">
      <li><strong>1. Potable Drinking Water Supply:</strong> Laying water pipelines, filtration plants, and maintaining overhead water reservoirs.</li>
      <li><strong>2. Solid Waste Management &amp; Sanitation:</strong> Daily door-to-door garbage collection, street sweeping, and desilting open drains.</li>
      <li><strong>3. Street Lighting &amp; Road Maintenance:</strong> Installing and maintaining LED streetlights, repairing potholes, and paving pedestrian sidewalks.</li>
      <li><strong>4. Public Health &amp; Disease Prevention:</strong> Running primary municipal clinics, organizing mosquito fogging against dengue/malaria, and childhood vaccination drives.</li>
      <li><strong>5. Public Parks and Green Spaces:</strong> Developing and maintaining neighborhood parks, children’s play areas, and planting roadside trees.</li>
      <li><strong>6. Registration of Vital Statistics:</strong> Issuing official Birth Certificates and Death Certificates.</li>
    </ul>`,
    'CBSE Marking Scheme: 0.5 Mark for each civic service correctly listed (Total 3 Marks).'
  )}

  ${qCard(
    'c6sst-ch12-q4',
    'Q4',
    'Sources of Revenue of a Municipal Corporation',
    'Short',
    'How does a Municipal Corporation generate funds to maintain city services? List its four major revenue sources. [3 Marks]',
    `<p class="step"><strong>1. Property Tax (House Tax):</strong><br>
    Levied on all residential houses, commercial offices, and shops located within municipal city limits (generates 25–30% of revenue).</p>
    <p class="step"><strong>2. User Charges and Cesses:</strong><br>
    Water bills, sewerage connection cess, and parking fees.</p>
    <p class="step"><strong>3. Commercial and Trade License Fees:</strong><br>
    Fees charged for licensing restaurants, retail shops, street vendors, and cinema halls.</p>
    <p class="step"><strong>4. State Government Grants:</strong><br>
    Financial allocations and project grants devolved by the State Finance Commission for large infrastructure projects.</p>`,
    'CBSE Marking Scheme: 0.75 Mark for each correctly explained revenue source (Total 3 Marks).'
  )}

  ${qCard(
    'c6sst-ch12-q5',
    'Q5',
    'Citizens\' Grievance Redressal for Civic Problems',
    'Short',
    'What steps can residents take when municipal services fail (e.g., garbage is not collected for days or streetlights remain broken)? [3 Marks]',
    `<p class="step"><strong>1. Contacting the Ward Councillor:</strong><br>
    Residents can meet their elected Ward Councillor at their local office and demand prompt action with municipal sanitary inspectors.</p>
    <p class="step"><strong>2. Logging Complaints on Municipal Portals / Helplines:</strong><br>
    Most cities now run 24/7 toll-free helpline numbers and citizen mobile apps (like the *Swachhata App*), generating a tracking complaint number.</p>
    <p class="step"><strong>3. Collective Resident Petitions via RWA:</strong><br>
    The Resident Welfare Association can submit a joint signed petition directly to the Zonal Municipal Commissioner, warning of peaceful public protests if inaction continues.</p>`,
    'CBSE Marking Scheme: 1 Mark each for meeting Councillor, digital complaint app/helpline, and RWA collective petitions.'
  )}

  ${qCard(
    'c6sst-ch12-q6',
    'Q6',
    'Project: Frame 6 Questions for a Ward Councillor Interview',
    'Project',
    `Prepare a set of six constructive interview questions to ask your local Ward Councillor regarding civic amenities and children's welfare in your neighborhood. [3 Marks]`,
    `<ol class="step-list">
      <li><em>1. Election &amp; Priorities:</em> What were your top three civic promises during your election campaign, and which ones have been completed so far?</li>
      <li><em>2. Solid Waste Management:</em> How does the municipal corporation ensure that garbage is collected daily from all houses, and where is our neighborhood\'s waste processed?</li>
      <li><em>3. Children\'s Recreation:</em> Are there plans to upgrade our local park with safe swings, walking tracks, and adequate lighting for children?</li>
      <li><em>4. Safe Drinking Water:</em> What measures are taken during monsoon months to test drinking water pipelines and prevent contamination?</li>
      <li><em>5. Monsoon Preparedness:</em> How frequently are the stormwater drains desilted in our ward to prevent waterlogging during heavy rains?</li>
      <li><em>6. Youth &amp; Citizen Participation:</em> How can schoolchildren and resident welfare groups participate in keeping our ward clean and green?</li>
    </ol>`,
    'CBSE Marking Scheme: 0.5 Mark for each well-framed, relevant interview question (Total 3 Marks).'
  )}

  ${qCard(
    'c6sst-ch12-q7',
    'Q7',
    'Solid Waste Segregation: Green vs. Blue Bins',
    'Short',
    'Why is segregation of waste at source critical in urban areas? Differentiate between biodegradable wet waste and recyclable dry waste. [3 Marks]',
    `<p class="step"><strong>1. Why Segregation at Source Is Critical:</strong><br>
    When wet and dry waste are dumped together, organic food rots into plastic, creating toxic leachate and methane gas in dumping grounds. Segregating at home allows organic waste to become rich compost while dry materials can be recycled, drastically reducing landfill burden.</p>
    <p class="step"><strong>2. Green Bin — Wet Biodegradable Waste:</strong><br>
    Vegetable peels, fruit rinds, leftover food, tea leaves, eggshells, and dry leaves. These naturally decompose into organic compost.</p>
    <p class="step"><strong>3. Blue Bin — Dry Recyclable Waste:</strong><br>
    Plastic bottles, paper, cardboard, glass, metal cans, and rubber. These are sorted and sent to recycling factories.</p>`,
    'CBSE Marking Scheme: 1 Mark for importance of segregation + 1 Mark for Green bin wet waste + 1 Mark for Blue bin dry waste.'
  )}
</section>`;

// ============================================================================
// CHAPTER 13: THE VALUE OF WORK
// ============================================================================
const ch13 = `<section class="chapter-section" id="ch13">
  <div class="chapter-header">
    <div class="ch-badge">13</div>
    <div class="chapter-header-info">
      <h2>Chapter 13: The Value of Work</h2>
      <p>NCERT Exploring Society: India and Beyond (Class 6) — 100% Complete Textbook Questions, The Big Questions, Dignity of Labour, Care Economy, Shramdaan &amp; CBSE Rubrics | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Economic &amp; Ethical Concepts: Work, Dignity &amp; Care Economy</div>
    <ul class="concept-list">
      <li><strong>What is Work?</strong> Any physical or mental effort undertaken to produce goods, provide services, or sustain life.
        <ul>
          <li><strong>Economic (Paid) Work:</strong> Activities performed in exchange for money, wages, salary, or profit (e.g., farming, teaching, driving, running a shop).</li>
          <li><strong>Unpaid (Care) Work:</strong> Domestic labour performed for the family—cooking, cleaning, nursing sick members, raising children—which has immense societal value though unpaid.</li>
        </ul>
      </li>
      <li><strong>Types of Employment:</strong>
        <ul>
          <li><em>Wage / Salary Employment:</em> Working for an employer who pays a monthly salary or daily wage (e.g., factory worker, clerk, nurse).</li>
          <li><em>Self-Employment:</em> Working independently using one’s own skills and tools (e.g., electrician, carpenter, vegetable vendor).</li>
          <li><em>Entrepreneurship / Business:</em> Investing capital, employing workers, and taking financial risks to sell products or services.</li>
        </ul>
      </li>
      <li><strong>Dignity of Labour:</strong> The ethical principle that all honest work is worthy of equal respect. No job—whether sweeping streets, farming in mud, or designing software in an air-conditioned office—is inferior or degrading.</li>
      <li><strong>Philosophical Roots of Work:</strong>
        <ul>
          <li><em>Mahatma Gandhi &amp; Shramdaan:</em> Advocated voluntary manual labour (*Bread Labour*) and insisted that everyone in his ashrams, including himself, clean their own latrines to eliminate caste-based stigmas.</li>
          <li><em>Basaveshwara (*Kayakave Kailasa*):</em> The 12th-century philosopher-reformer declared that dedicated, honest physical work itself is Heaven / Worship.</li>
          <li><em>Spirit of Sevā:</em> Selfless community work done without expectation of money (e.g., disaster relief, free blood donation, Langar).</li>
        </ul>
      </li>
    </ul>
  </div>

  <!-- SVG Diagram: The Spectrum of Work -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 210" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">The Spectrum of Human Work: Paid &amp; Unpaid</text>
      <!-- Economic Work (Left) -->
      <rect x="30" y="45" width="220" height="145" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
      <text x="140" y="68" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#15803d" text-anchor="middle">ECONOMIC (PAID) WORK</text>
      <text x="45" y="95" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f172a">• Wage &amp; Salary Jobs:</text>
      <text x="45" y="110" font-family="system-ui, sans-serif" font-size="9" fill="#475569">Teachers, nurses, factory labour</text>
      <text x="45" y="130" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f172a">• Self-Employment &amp; Business:</text>
      <text x="45" y="145" font-family="system-ui, sans-serif" font-size="9" fill="#475569">Farmers, shopkeepers, plumbers</text>
      <text x="45" y="165" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f172a">Goal: Earning Livelihood &amp; Income</text>

      <!-- Non-Monetary Work (Right) -->
      <rect x="290" y="45" width="240" height="145" rx="8" fill="#fae8ff" stroke="#a855f7" stroke-width="2"/>
      <text x="410" y="68" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#7e22ce" text-anchor="middle">NON-MONETARY VALUED WORK</text>
      <text x="305" y="95" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f172a">• The Care Economy (Domestic):</text>
      <text x="305" y="110" font-family="system-ui, sans-serif" font-size="9" fill="#475569">Cooking, cleaning, eldercare, parenting</text>
      <text x="305" y="130" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f172a">• Sevā &amp; Shramdaan (Voluntary):</text>
      <text x="305" y="145" font-family="system-ui, sans-serif" font-size="9" fill="#475569">Langar kitchens, disaster relief, village cleaning</text>
      <text x="305" y="165" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f172a">Goal: Family Welfare &amp; Social Love</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 13.1: The twin complementary pillars of human labour</div>
  </div>

  <!-- ================= SECTION A: THE BIG QUESTIONS ================= -->
  <div class="ex-div">
    <div class="ex-heading">The Big Questions (Chapter Inquiry &amp; Openers)</div>
  </div>

  ${qCard(
    'c6sst-ch13-bq1',
    'Big Q1',
    'What Is Work and Why Do Humans Engage in Diverse Activities?',
    'Concept',
    'What constitutes work? Why do human beings engage in such a diverse variety of economic and social activities?',
    `<p class="step"><strong>1. Sustaining Physical Needs:</strong><br>
    Humans work to obtain food, clothing, shelter, medicine, and education for their families by earning money or producing crops.</p>
    <p class="step"><strong>2. Mutual Interdependence of Society:</strong><br>
    No individual can do everything alone. A doctor needs a farmer for food, a farmer needs an electrician for pump repairs, an electrician needs a bus driver to commute, and everyone needs sanitation workers to keep cities clean.</p>`,
    'CBSE Marking Scheme: 1.5 Marks for basic livelihood needs + 1.5 Marks for mutual social interdependence.'
  )}

  ${qCard(
    'c6sst-ch13-bq2',
    'Big Q2',
    'Why Must All Honest Work Be Treated with Equal Dignity?',
    'Explain',
    'Why is all honest work worthy of dignity and respect? Why is it harmful to look down upon manual labour?',
    `<p class="step"><strong>1. Fundamental Human Equality:</strong><br>
    Every honest job contributes essential value to society. If sanitation workers stopped cleaning streets for just one week, cities would drown in epidemic diseases. Hence, manual labour is as vital as office work.</p>
    <p class="step"><strong>2. Eliminating Social Prejudice:</strong><br>
    Looking down upon manual work creates artificial class and caste arrogance. Recognizing "Dignity of Labour" builds a just, respectful, and compassionate society.</p>`,
    'CBSE Marking Scheme: 1.5 Marks for essential social utility of manual work + 1.5 Marks for eliminating prejudice and building equality.'
  )}

  <!-- ================= SECTION C: QUESTIONS, ACTIVITIES AND PROJECTS ================= -->
  <div class="ex-div">
    <div class="ex-heading">Questions, activities and projects (Official NCERT Textbook Exercises)</div>
  </div>

  ${qCard(
    'c6sst-ch13-q1',
    'Q1',
    'Categorizing Economic Activities into Three Types',
    'Short',
    `Categorize economic activities into the following three categories, providing two clear examples for each:<br>
    (a) Extracting goods directly from nature<br>
    (b) Making or manufacturing products<br>
    (c) Providing essential services [3 Marks]`,
    `<ul class="step-list">
      <li><strong>(a) Extracting Goods from Nature:</strong><br>
      • <em>Farming:</em> Cultivating wheat, rice, and pulses from soil.<br>
      • <em>Fishing &amp; Mining:</em> Catching marine fish from oceans, or extracting coal and iron ore from underground mines.</li>
      <li><strong>(b) Making or Manufacturing Products:</strong><br>
      • <em>Weaving &amp; Pottery:</em> Weaving raw cotton threads into sarees, or shaping clay into storage pots.<br>
      • <em>Factory Manufacturing:</em> Baking bread in a modern bakery, or manufacturing steel girders in a mill.</li>
      <li><strong>(c) Providing Essential Services:</strong><br>
      • <em>Teaching &amp; Healthcare:</em> Educating students in schools, or treating sick patients in hospitals.<br>
      • <em>Transportation &amp; Banking:</em> Driving passengers on buses, or managing savings accounts in a bank.</li>
    </ul>`,
    'CBSE Marking Scheme: 1 Mark for each category with two accurate real-world examples (Total 3 Marks).'
  )}

  ${qCard(
    'c6sst-ch13-q2',
    'Q2',
    'Wage Employment vs. Self-Employment vs. Business',
    'Compare',
    'Contrast Wage/Salary Employment, Self-Employment, and Running a Business enterprise. [3 Marks]',
    `<table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Wage / Salary Employment</th>
          <th>Self-Employment</th>
          <th>Running an Enterprise (Business)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="font-weight:700;">Who they work for</td>
          <td>Works for an employer or company.</td>
          <td>Works for oneself using personal skills.</td>
          <td>Employs other workers in a company/shop.</td>
        </tr>
        <tr>
          <td style="font-weight:700;">Income Type</td>
          <td>Fixed monthly salary or daily wage.</td>
          <td>Variable fees or direct earnings from clients.</td>
          <td>Profit earned after paying wages and costs.</td>
        </tr>
        <tr>
          <td style="font-weight:700;">Example</td>
          <td>School teacher, nurse, factory machinist.</td>
          <td>Tailor, plumber, independent lawyer.</td>
          <td>Garment factory owner, restaurant owner.</td>
        </tr>
      </tbody>
    </table>`,
    'CBSE Marking Scheme: 1 Mark for each employment type accurately contrasted across criteria.'
  )}

  ${qCard(
    'c6sst-ch13-q3',
    'Q3',
    'Dignity of Labour: Why No Honest Work Is Inferior',
    'Short',
    'Explain the principle of "Dignity of Labour". Why should jobs like street sweeping and sanitation never be looked down upon? [3 Marks]',
    `<p class="step"><strong>1. The Principle of Dignity of Labour:</strong><br>
    It asserts that all forms of honest, lawful labour deserve equal moral respect. Human dignity is determined by integrity and effort, not by the cleanliness of one’s clothes or the size of one’s desk.</p>
    <p class="step"><strong>2. Indispensable Value of Sanitation Workers:</strong><br>
    Sanitation workers protect human lives every day by clearing tons of disease-causing waste from city streets and sewer lines. Society could survive without film celebrities, but it cannot survive without sanitation workers. Disrespecting them is ungrateful and unjust.</p>`,
    'CBSE Marking Scheme: 1.5 Marks for defining Dignity of Labour + 1.5 Marks for highlighting indispensable health role of sanitation workers.'
  )}

  ${qCard(
    'c6sst-ch13-q4',
    'Q4',
    'The Care Economy and Unpaid Housework',
    'Explain',
    'What is the "Care Economy"? Why is household domestic labour (cooking, cleaning, caregiving) vital for the country, even though it receives no monetary paycheck? [3 Marks]',
    `<p class="step"><strong>1. Definition of the Care Economy:</strong><br>
    The Care Economy comprises all unpaid domestic activities performed within homes—cooking nutritious food, washing clothes, nursing sick elders, and helping children with homework.</p>
    <p class="step"><strong>2. Why It Is Foundational to Society:</strong><br>
    • <strong>Nurturing the Working Workforce:</strong> If family members were not fed, clothed, and rested through home care, workers could not go to factories, offices, or fields the next morning.<br>
    • <strong>Raising Future Citizens:</strong> It instills emotional stability and moral education into children.<br>
    • Although excluded from national GDP statistics, unpaid care work forms the invisible foundation that sustains the entire national economy.</p>`,
    'CBSE Marking Scheme: 1 Mark for definition of Care Economy + 2 Marks for explaining how it sustains the workforce and national economy.'
  )}

  ${qCard(
    'c6sst-ch13-q5',
    'Q5',
    'Mahatma Gandhi on *Shramdaan* and Manual Labour',
    'Short',
    'How did Mahatma Gandhi promote the dignity of manual labour in his ashrams? What was his concept of *Shramdaan*? [3 Marks]',
    `<p class="step"><strong>1. Breaking Caste Taboos:</strong><br>
    In Gandhi\'s ashrams (Sabarmati, Sevagram), every single resident—regardless of wealth, education, or caste—was required to clean their own latrines and perform manual sweeping, breaking the ancient orthodox prejudice that manual sanitation was "dirty" work reserved for lower castes.</p>
    <p class="step"><strong>2. The Concept of *Shramdaan*:</strong><br>
    *Shramdaan* means the voluntary gift of one\'s physical labour for community welfare—such as building village roads, digging ponds, or spinning cotton (*Khadi*). Gandhi believed that true self-reliance (*Swavalamban*) begins when educated people take pride in physical work.</p>`,
    'CBSE Marking Scheme: 1.5 Marks for latrine cleaning in ashrams breaking caste bias + 1.5 Marks for Shramdaan and physical self-reliance.'
  )}

  ${qCard(
    'c6sst-ch13-q6',
    'Q6',
    'Basaveshwara\'s Philosophy: "Kayakave Kailasa"',
    'Short',
    'Explain the philosophy of the 12th-century reformer Basaveshwara: "Kayakave Kailasa" (Work is Worship). [3 Marks]',
    `<p class="step"><strong>1. Meaning of the Phrase:</strong><br>
    *Kayaka* means dedicated physical/mental labour; *Kailasa* represents the heavenly abode of Lord Shiva (divinity). The famous vachana literally means: <strong>"Work Itself is Heaven / Work is Worship."</strong></p>
    <p class="step"><strong>2. Radical Social Reform:</strong><br>
    Basaveshwara taught that one does not need to abandon the world or become a wandering ascetic to attain spiritual salvation. If a weaver, cobbler, farmer, or blacksmith performs their daily craft with honesty, dedication, and without exploiting others, their daily workplace is as holy as any temple.</p>`,
    'CBSE Marking Scheme: 1.5 Marks for literal meaning (Work is Worship) + 1.5 Marks for spiritual sanctity of honest craft and labour.'
  )}

  ${qCard(
    'c6sst-ch13-q7',
    'Q7',
    'The Spirit of *Sevā* (Selfless Community Service)',
    'Activity',
    'Describe real-world examples where individuals or communities perform *Sevā* (unpaid selfless service) for social welfare without monetary gain. [3 Marks]',
    `<ul class="step-list">
      <li><strong>1. The Sikh Tradition of *Langar*:</strong> In Gurdwaras across the world, volunteers (*sevadaars*) cook, serve free hot meals to hundreds of thousands of people daily, and wash dishes together, celebrating selfless service and social equality.</li>
      <li><strong>2. Disaster Relief Volunteers:</strong> During earthquakes, landslides, or railway accidents, ordinary citizens and youth volunteers immediately rush to rescue trapped victims, donate blood, and distribute blankets and food.</li>
      <li><strong>3. Free Evening Schools:</strong> College students and retired teachers running free evening study centers in slum clusters to help underprivileged children with their school lessons.</li>
    </ul>`,
    'CBSE Marking Scheme: 1 Mark for each concrete example of selfless service (*Sevā*) explained (Total 3 Marks).'
  )}
</section>`;

// ============================================================================
// CHAPTER 14: ECONOMIC ACTIVITIES AROUND US
// ============================================================================
const ch14 = `<section class="chapter-section" id="ch14">
  <div class="chapter-header">
    <div class="ch-badge">14</div>
    <div class="chapter-header-info">
      <h2>Chapter 14: Economic Activities Around Us</h2>
      <p>NCERT Exploring Society: India and Beyond (Class 6) — 100% Complete Textbook Questions, The Big Questions, Primary-Secondary-Tertiary Chain, Consumer Rights &amp; CBSE Rubrics | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Economic Concepts: The Three Sectors &amp; Markets</div>
    <ul class="concept-list">
      <li><strong>Three Sectors of the Economy:</strong>
        <ul>
          <li><strong>Primary Sector (Nature-Based):</strong> Economic activities that extract or harvest natural resources directly from the Earth (e.g., agriculture, dairy farming, fishing, forestry, mining).</li>
          <li><strong>Secondary Sector (Manufacturing / Value Addition):</strong> Activities that transform raw natural materials into finished manufactured goods using machines or tools (e.g., spinning cotton into yarn, baking wheat flour into biscuits, smelting iron ore into steel).</li>
          <li><strong>Tertiary Sector (Services / Support System):</strong> Activities that provide essential services to help the primary and secondary sectors function smoothly (e.g., transport, warehousing, banking, insurance, telecommunications, retail stores).</li>
        </ul>
      </li>
      <li><strong>Economic Interdependence:</strong> No sector can survive independently. A farmer (Primary) needs diesel and tractors from factories (Secondary), which in turn need trucks and banks (Tertiary) to reach urban markets.</li>
      <li><strong>Types of Markets:</strong> From traditional weekly markets (*haats*) where farmers sell fresh produce directly to local consumers, to neighborhood grocery stores (*kirana*), supermarkets, and modern e-commerce delivery platforms.</li>
      <li><strong>Consumer Awareness:</strong> Smart consumers verify MRP (Maximum Retail Price), manufacturing and expiry dates, ingredient lists, and quality certification marks (ISI mark, Agmark, FSSAI logo), and always ask for a printed bill/receipt.</li>
    </ul>
  </div>

  <!-- SVG Diagram: The Three Economic Sectors Interdependence -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 210" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Interdependence Chain: From Cotton Seed to Finished Shirt</text>
      <!-- Box 1: Primary -->
      <rect x="20" y="50" width="145" height="135" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="92" y="75" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#92400e" text-anchor="middle">PRIMARY SECTOR</text>
      <text x="92" y="98" font-family="system-ui, sans-serif" font-size="9.5" fill="#b45309" text-anchor="middle">Farmer grows</text>
      <text x="92" y="114" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#78350f" text-anchor="middle">Raw Cotton</text>
      <text x="92" y="136" font-family="system-ui, sans-serif" font-size="9" fill="#b45309" text-anchor="middle">Extracts harvest</text>
      <text x="92" y="152" font-family="system-ui, sans-serif" font-size="9" fill="#b45309" text-anchor="middle">from fertile soil</text>

      <!-- Arrow 1 -->
      <line x1="165" y1="117" x2="195" y2="117" stroke="#64748b" stroke-width="2.5"/>

      <!-- Box 2: Secondary -->
      <rect x="195" y="50" width="165" height="135" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
      <text x="277" y="75" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0369a1" text-anchor="middle">SECONDARY SECTOR</text>
      <text x="277" y="98" font-family="system-ui, sans-serif" font-size="9.5" fill="#0284c7" text-anchor="middle">Textile Mill spins yarn,</text>
      <text x="277" y="114" font-family="system-ui, sans-serif" font-size="9.5" fill="#0284c7" text-anchor="middle">weaves &amp; dyes cloth.</text>
      <text x="277" y="136" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#075985" text-anchor="middle">Garment Factory</text>
      <text x="277" y="152" font-family="system-ui, sans-serif" font-size="9" fill="#0284c7" text-anchor="middle">stitches finished shirt</text>

      <!-- Arrow 2 -->
      <line x1="360" y1="117" x2="390" y2="117" stroke="#64748b" stroke-width="2.5"/>

      <!-- Box 3: Tertiary -->
      <rect x="390" y="50" width="150" height="135" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="465" y="75" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#15803d" text-anchor="middle">TERTIARY SECTOR</text>
      <text x="465" y="98" font-family="system-ui, sans-serif" font-size="9.5" fill="#16a34a" text-anchor="middle">Truck transport,</text>
      <text x="465" y="114" font-family="system-ui, sans-serif" font-size="9.5" fill="#16a34a" text-anchor="middle">banking, retail store,</text>
      <text x="465" y="136" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#14532d" text-anchor="middle">Online delivery</text>
      <text x="465" y="152" font-family="system-ui, sans-serif" font-size="9" fill="#16a34a" text-anchor="middle">to Consumer</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 14.1: Seamless product journey linking Primary, Secondary, and Tertiary sectors</div>
  </div>

  <!-- ================= SECTION A: THE BIG QUESTIONS ================= -->
  <div class="ex-div">
    <div class="ex-heading">The Big Questions (Chapter Inquiry &amp; Openers)</div>
  </div>

  ${qCard(
    'c6sst-ch14-bq1',
    'Big Q1',
    'What Are the Three Economic Sectors and How Are They Linked?',
    'Concept',
    'What are the three main sectors of economic activity? How do they depend inextricably upon one another?',
    `<p class="step"><strong>1. The Three Sectors:</strong><br>
    • <strong>Primary:</strong> Harvesting from nature (farming, mining, fishing).<br>
    • <strong>Secondary:</strong> Processing raw materials into finished manufactured goods (textiles, steel, automobiles).<br>
    • <strong>Tertiary:</strong> Providing services (transport, trade, banking, telecommunications).</p>
    <p class="step"><strong>2. Inextricable Linkage:</strong><br>
    A sugar factory cannot run without sugarcane from the farm (Primary), but the farmer cannot sell sugarcane without trucks and roadways (Tertiary), and the mill worker cannot buy bread without retail shops (Tertiary). All three sectors form a continuous loop of mutual support.</p>`,
    'CBSE Marking Scheme: 1.5 Marks for defining the three sectors + 1.5 Marks for concrete interdependence example.'
  )}

  ${qCard(
    'c6sst-ch14-bq2',
    'Big Q2',
    'How Do Goods Travel from Producers to Consumers?',
    'Explain',
    'How do goods travel from the original farm or factory to the ultimate consumer? What roles do wholesale and retail markets play?',
    `<p class="step"><strong>1. The Supply Chain Flow:</strong><br>
    Producers (farmers/factories) sell large quantities of goods in wholesale agricultural markets (*mandis*) or regional distribution centers to <em>wholesalers</em>.</p>
    <p class="step"><strong>2. Role of Transporters &amp; Retailers:</strong><br>
    Trucks and freight trains transport goods to neighborhood <em>retailers</em> (local grocers, department stores). Retailers sell goods in small daily quantities directly to ordinary households.</p>`,
    'CBSE Marking Scheme: 1.5 Marks for wholesale mandi/distribution hubs + 1.5 Marks for transport and retail sale to consumers.'
  )}

  <!-- ================= SECTION C: QUESTIONS, ACTIVITIES AND PROJECTS ================= -->
  <div class="ex-div">
    <div class="ex-heading">Questions, activities and projects (Official NCERT Textbook Exercises)</div>
  </div>

  ${qCard(
    'c6sst-ch14-q1',
    'Q1',
    'Three Economic Sectors: Definitions and Examples',
    'Compare',
    'Define the Primary, Secondary, and Tertiary sectors of the economy with two distinct examples for each. [3 Marks]',
    `<table>
      <thead>
        <tr>
          <th>Sector</th>
          <th>Definition</th>
          <th>Concrete Examples</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="font-weight:700;">Primary Sector</td>
          <td>Direct extraction and harvesting of raw natural resources from the Earth.</td>
          <td>Wheat and paddy farming, dairy herding, deep-sea fishing, iron ore mining.</td>
        </tr>
        <tr>
          <td style="font-weight:700;">Secondary Sector</td>
          <td>Manufacturing and industrial processing of raw materials into finished consumer goods.</td>
          <td>Cotton textile mills, sugarcane factories producing sugar, car assembly plants, bakeries.</td>
        </tr>
        <tr>
          <td style="font-weight:700;">Tertiary Sector</td>
          <td>Providing commercial, financial, and personal services that support production and distribution.</td>
          <td>Goods transport (rail/trucks), banking and credit, school teaching, healthcare nursing, retail shops.</td>
        </tr>
      </tbody>
    </table>`,
    'CBSE Marking Scheme: 1 Mark for each sector accurately defined with appropriate real-world examples.'
  )}

  ${qCard(
    'c6sst-ch14-q2',
    'Q2',
    'Interdependence Chain: From Cotton to a Ready-Made Shirt',
    'Long Answer',
    'Trace the complete economic interdependence chain for a ready-made cotton shirt, showing the actors, processes, and sectors involved at each step. [4 Marks]',
    `<p class="step"><strong>Step 1: Primary Sector (Cotton Cultivation):</strong><br>
    A farmer prepares soil, sows cotton seeds, uses canal irrigation, and harvests raw fluffy cotton bolls.</p>
    <p class="step"><strong>Step 2: Tertiary Sector (Initial Transport &amp; Mandi):</strong><br>
    Tractor trolleys transport the raw cotton to the agricultural mandi, where a wholesale cotton trader purchases it.</p>
    <p class="step"><strong>Step 3: Secondary Sector (Spinning, Weaving &amp; Stitching):</strong><br>
    • A ginning and spinning mill separates seeds and spins raw cotton into yarn.<br>
    • A textile weaving mill weaves yarn into fabric and dyes it.<br>
    • A garment manufacturing factory cuts the fabric, stitches it into shirts, attaches buttons, and packs it.</p>
    <p class="step"><strong>Step 4: Tertiary Sector (Final Logistics &amp; Retail Sale):</strong><br>
    Trucks deliver cartons of shirts to a retail clothing store or e-commerce warehouse, where a customer buys the shirt using digital banking.</p>`,
    'CBSE Marking Scheme: 1 Mark for Primary farming + 1 Mark for intermediate transport/wholesale + 1 Mark for Secondary spinning & stitching + 1 Mark for Tertiary retail distribution.'
  )}

  ${qCard(
    'c6sst-ch14-q3',
    'Q3',
    'Why Is the Tertiary Sector Vital for Primary & Secondary?',
    'Short',
    'Why is the Tertiary (Service) sector vital for the success of both Primary and Secondary sectors? Give four supporting services. [3 Marks]',
    `<p class="step"><strong>1. Transportation:</strong><br>
    Without trucks, freight trains, and ships, harvested farm tomatoes would rot in fields and factory cement could never reach construction sites.</p>
    <p class="step"><strong>2. Warehousing and Cold Storage:</strong><br>
    Enables farmers and manufacturers to safely store perishable goods (apples, potatoes, medicines) until demand arises.</p>
    <p class="step"><strong>3. Banking and Credit:</strong><br>
    Banks provide financial loans for farmers to purchase seeds and tractors, and for industrialists to purchase factory machinery.</p>
    <p class="step"><strong>4. Digital Communications &amp; Advertising:</strong><br>
    Enables manufacturers to connect with wholesalers, track supply trucks via GPS, and market products to consumers worldwide.</p>`,
    'CBSE Marking Scheme: 0.75 Mark for each supporting service explained (Total 3 Marks).'
  )}

  ${qCard(
    'c6sst-ch14-q4',
    'Q4',
    'Types of Markets: Weekly Markets vs. Neighborhood Shops vs. E-Commerce',
    'Compare',
    'Compare Weekly Markets (*Haats*), Neighborhood Retail Shops (*Kirana*), and Online E-Commerce Platforms. [3 Marks]',
    `<table>
      <thead>
        <tr>
          <th>Market Type</th>
          <th>Frequency &amp; Setup</th>
          <th>Advantages to Consumers</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="font-weight:700;">Weekly Market (*Haat*)</td>
          <td>Held on specific days of the week; temporary stalls along roads.</td>
          <td>Fresh farm vegetables and household goods at very cheap prices; bargaining is possible.</td>
        </tr>
        <tr>
          <td style="font-weight:700;">Neighborhood Shop (*Kirana*)</td>
          <td>Permanent shops open every day within walking distance of homes.</td>
          <td>Convenience, familiar shopkeepers, and purchase on credit (*khata* system) for regular residents.</td>
        </tr>
        <tr>
          <td style="font-weight:700;">Online E-Commerce</td>
          <td>Digital platforms operating 24/7 via mobile apps and websites.</td>
          <td>Vast variety of goods delivered directly to the doorstep; convenient digital payment and easy return policies.</td>
        </tr>
      </tbody>
    </table>`,
    'CBSE Marking Scheme: 1 Mark for each market format accurately characterized.'
  )}

  ${qCard(
    'c6sst-ch14-q5',
    'Q5',
    'Consumer Awareness and Consumer Protection Precautions',
    'Short',
    'What key precautions must a responsible consumer take when purchasing packaged goods from a market? List four essential checks. [3 Marks]',
    `<ul class="step-list">
      <li><strong>1. Check Maximum Retail Price (MRP):</strong> Ensure the shopkeeper does not charge above the printed MRP.</li>
      <li><strong>2. Check Manufacturing and Expiry Dates:</strong> Never purchase or consume products that have crossed their "Best Before" or "Expiry Date" to prevent food poisoning.</li>
      <li><strong>3. Look for Standard Quality Certification Marks:</strong><br>
      • <strong>ISI Mark:</strong> On electrical appliances and helmets.<br>
      • <strong>FSSAI Logo:</strong> On all packaged food and beverage products.<br>
      • <strong>Agmark:</strong> On agricultural products like edible oils, honey, and pulses.</li>
      <li><strong>4. Always Insist on a Printed Bill / Cash Memo:</strong> A valid bill is essential legal proof required if the product turns out defective and a refund or consumer court claim is needed.</li>
    </ul>`,
    'CBSE Marking Scheme: 0.75 Mark for each essential consumer check (Total 3 Marks).'
  )}

  ${qCard(
    'c6sst-ch14-q6',
    'Q6',
    'Project: Interview with a Local Neighborhood Shopkeeper',
    'Project',
    `Prepare a 5-question survey to interview a local grocery shopkeeper to understand how their business operates, including sourcing of goods, transport, and profit margins. [3 Marks]`,
    `<ol class="step-list">
      <li><em>1. Sourcing Goods:</em> From where do you purchase your stock—directly from farmers, local wholesale mandis, or company distributors?</li>
      <li><em>2. Transportation &amp; Delivery:</em> How do goods reach your shop, and who pays for the transport and unloading costs?</li>
      <li><em>3. Perishable Items &amp; Wastage:</em> How do you store perishable vegetables, milk, and bread, and what happens if unsold items spoil?</li>
      <li><em>4. Credit Facilities:</em> Do you offer credit (*khata*) to regular neighborhood families? How do you ensure timely repayment?</li>
      <li><em>5. Digital Payments:</em> Has the widespread use of UPI (QR code payments) changed the way customers purchase groceries compared to cash?</li>
    </ol>`,
    'CBSE Marking Scheme: 0.6 Mark for each relevant, insightful survey question (Total 3 Marks).'
  )}
</section>`;

// Write chapter HTML files
fs.writeFileSync(path.join(outDir, 'ch9.html'), ch9, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch10.html'), ch10, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch11.html'), ch11, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch12.html'), ch12, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch13.html'), ch13, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch14.html'), ch14, 'utf8');

console.log('Successfully generated chapters 9 to 14 in chapters-c6sst/ with 100% textbook question and activity coverage.');
