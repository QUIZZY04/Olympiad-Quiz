// scripts/builders/gen-c12b-ch3.js
// Chapter 3: Reproductive Health (12 Questions)
const { createQCard, saveChapter } = require('./c12b-helper');

const svgDiagram = `
<div class="chem-card" style="margin-bottom:24px; padding:20px; background:#f0fdf4; border:1px solid #bbf7d0; border-radius:12px;">
  <h4 style="margin:0 0 12px 0; color:#059669; font-size:1.05rem;">🧬 Key Concept Map: Contraceptive Strategies & Assisted Reproductive Technologies (ART)</h4>
  <svg viewBox="0 0 880 320" style="width:100%; max-width:880px; height:auto; display:block; margin:0 auto; background:white; border-radius:8px; border:1px solid #d1fae5;">
    <!-- Flowchart / Concept Architecture -->
    <!-- Natural Methods -->
    <rect x="20" y="20" width="180" height="90" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
    <text x="110" y="45" font-family="sans-serif" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">Natural / Traditional</text>
    <text x="110" y="65" font-family="sans-serif" font-size="11" fill="#334155" text-anchor="middle">&bull; Periodic Abstinence</text>
    <text x="110" y="80" font-family="sans-serif" font-size="11" fill="#334155" text-anchor="middle">&bull; Coitus Interruptus</text>
    <text x="110" y="95" font-family="sans-serif" font-size="11" fill="#334155" text-anchor="middle">&bull; Lactational Amenorrhea</text>

    <!-- Barrier Methods -->
    <rect x="230" y="20" width="190" height="90" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
    <text x="325" y="45" font-family="sans-serif" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">Barrier Methods</text>
    <text x="325" y="65" font-family="sans-serif" font-size="11" fill="#334155" text-anchor="middle">&bull; Condoms (Nirodh - male/fem)</text>
    <text x="325" y="80" font-family="sans-serif" font-size="11" fill="#334155" text-anchor="middle">&bull; Diaphragms & Cervical Caps</text>
    <text x="325" y="95" font-family="sans-serif" font-size="11" fill="#334155" text-anchor="middle">&bull; Blocks STIs/STDs</text>

    <!-- IUDs & Chemical -->
    <rect x="450" y="20" width="200" height="90" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
    <text x="550" y="45" font-family="sans-serif" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">Intrauterine Devices (IUDs)</text>
    <text x="550" y="65" font-family="sans-serif" font-size="11" fill="#334155" text-anchor="middle">&bull; Non-medicated (Lippes loop)</text>
    <text x="550" y="80" font-family="sans-serif" font-size="11" fill="#334155" text-anchor="middle">&bull; Cu-releasing (CuT, Cu7, Multiload)</text>
    <text x="550" y="95" font-family="sans-serif" font-size="11" fill="#334155" text-anchor="middle">&bull; Hormone-releasing (Progestasert, LNG-20)</text>

    <!-- Surgical / Sterilization -->
    <rect x="680" y="20" width="180" height="90" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
    <text x="770" y="45" font-family="sans-serif" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">Surgical / Permanent</text>
    <text x="770" y="65" font-family="sans-serif" font-size="11" fill="#334155" text-anchor="middle">&bull; Vasectomy (Vas deferens tied)</text>
    <text x="770" y="82" font-family="sans-serif" font-size="11" fill="#334155" text-anchor="middle">&bull; Tubectomy (Fallopian tubes tied)</text>
    <text x="770" y="97" font-family="sans-serif" font-size="11" fill="#334155" text-anchor="middle">&bull; Terminal block to gamete transport</text>

    <!-- Connector lines -->
    <line x1="440" y1="120" x2="440" y2="160" stroke="#059669" stroke-width="2" stroke-dasharray="4,4"/>
    <text x="440" y="150" font-family="sans-serif" font-size="11" fill="#059669" text-anchor="middle" background="white">Assisted Reproductive Technologies (ART)</text>

    <!-- In Vitro Fertilisation (IVF) -->
    <rect x="80" y="180" width="220" height="110" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
    <text x="190" y="205" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">IVF - Test Tube Baby</text>
    <text x="190" y="225" font-family="sans-serif" font-size="11" fill="#334155" text-anchor="middle">&bull; Fertilisation outside in lab</text>
    <text x="190" y="243" font-family="sans-serif" font-size="11" fill="#334155" text-anchor="middle">&bull; ZIFT: Zygote up to 8 blastomeres &rarr; Tube</text>
    <text x="190" y="261" font-family="sans-serif" font-size="11" fill="#334155" text-anchor="middle">&bull; IUT: Embryo &gt; 8 blastomeres &rarr; Uterus</text>
    <text x="190" y="278" font-family="sans-serif" font-size="11" fill="#334155" text-anchor="middle">&bull; ICSI: Direct sperm injection</text>

    <!-- In Vivo Fertilisation / Transfer -->
    <rect x="340" y="180" width="220" height="110" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
    <text x="450" y="205" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">In Vivo Fertilisation</text>
    <text x="450" y="228" font-family="sans-serif" font-size="11" fill="#334155" text-anchor="middle">&bull; GIFT: Gamete Intra-Fallopian</text>
    <text x="450" y="246" font-family="sans-serif" font-size="11" fill="#334155" text-anchor="middle">Transfer (Ovum collected from donor)</text>
    <text x="450" y="264" font-family="sans-serif" font-size="11" fill="#334155" text-anchor="middle">&bull; For females who cannot produce ova</text>
    <text x="450" y="280" font-family="sans-serif" font-size="11" fill="#334155" text-anchor="middle">but can provide internal environment</text>

    <!-- Artificial Insemination (AI) -->
    <rect x="600" y="180" width="220" height="110" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
    <text x="710" y="205" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">Artificial Insemination (AI)</text>
    <text x="710" y="228" font-family="sans-serif" font-size="11" fill="#334155" text-anchor="middle">&bull; Semen collected from husband/donor</text>
    <text x="710" y="246" font-family="sans-serif" font-size="11" fill="#334155" text-anchor="middle">&bull; IUI: Intra-Uterine Insemination</text>
    <text x="710" y="264" font-family="sans-serif" font-size="11" fill="#334155" text-anchor="middle">&bull; Indicated for low sperm count</text>
    <text x="710" y="280" font-family="sans-serif" font-size="11" fill="#334155" text-anchor="middle">(oligospermia) or erectile dysfunction</text>
  </svg>
</div>`;

const questions = [];

// Q1
questions.push(createQCard(
  'c12b-ch3-q1',
  'Q1',
  'Exercises (NCERT Verbatim)',
  'What do you think is the significance of reproductive health in a society?',
  `<p>According to the <strong>World Health Organization (WHO)</strong>, reproductive health signifies a total well-being in all aspects of reproduction, including <strong>physical, emotional, behavioural, and social aspects</strong>.</p>
  <p>The significance of achieving reproductive health in a society includes:</p>
  <ol>
    <li><strong>Prevention of Sexually Transmitted Infections (STIs):</strong> Creating awareness about hygienic sexual practices and protective barrier methods prevents the spread of STIs such as HIV/AIDS, Gonorrhoea, Syphilis, and Hepatitis-B.</li>
    <li><strong>Population Stabilisation & Planned Parenthood:</strong> Educating couples regarding small family norms, birth spacing, and accessible contraceptives prevents unwanted pregnancies and curbs explosive population growth.</li>
    <li><strong>Maternal and Infant Healthcare:</strong> Ensuring pre-natal, natal, and post-natal care reduces Maternal Mortality Rate (MMR) and Infant Mortality Rate (IMR).</li>
    <li><strong>Eradication of Social Evils & Myths:</strong> Combating female foeticide, teenage pregnancy, illegal abortions, and sex-related crimes through scientifically grounded sexual education and stringent enforcement of laws (such as PCPNDT Act).</li>
    <li><strong>Healthy Future Generation:</strong> A reproductively healthy society consists of physically sound individuals with responsible, emotionally balanced relationships, reducing societal disease burden and healthcare stress.</li>
  </ol>`,
  '3 Marks',
  [
    ['WHO definition of reproductive health (total well-being across physical, emotional, behavioural, social aspects)', '1 Mark'],
    ['Key societal benefits (prevention of STIs, lowering MMR and IMR, population control)', '1 Mark'],
    ['Eradication of myths, prevention of female foeticide, and fostering healthy future generations', '1 Mark']
  ]
));

// Q2
questions.push(createQCard(
  'c12b-ch3-q2',
  'Q2',
  'Exercises (NCERT Verbatim)',
  'Suggest the aspects of reproductive health which need to be given special attention in the present scenario.',
  `<p>In the present socio-demographic scenario, the following core aspects require targeted interventions:</p>
  <ol>
    <li><strong>Adolescent Sex Education:</strong> Introducing age-appropriate, scientifically validated sexual education in schools to dispel myths, address bodily changes during puberty, and promote responsible adolescent behaviour.</li>
    <li><strong>Awareness of STIs and Safe Sex:</strong> Disseminating clear knowledge about transmission vectors of STIs/HIV and advocating the consistent use of barrier contraceptives (condoms).</li>
    <li><strong>Curbing Population Explosion via Family Planning:</strong> Promoting reversible contraceptives, non-hormonal oral pills (like <em>Saheli</em>), and providing incentives for small family norms.</li>
    <li><strong>Eradication of Female Foeticide:</strong> Enforcing strict statutory bans on amniocentesis for foetal sex determination and monitoring ultrasound clinics under the PCPNDT Act.</li>
    <li><strong>Maternal & Child Health Care (MCH):</strong> Promoting institutional deliveries, nutritional support for pregnant and lactating mothers, and mandatory infant immunisation programmes.</li>
    <li><strong>Detection & Management of Reproductive Cancers:</strong> Early screening infrastructure for cervical, breast, and prostate cancers.</li>
    <li><strong>Infertility Counselling & Accessible ART:</strong> Providing psychological support and cost-effective Assisted Reproductive Technologies (IVF, ZIFT, ICSI) for infertile couples.</li>
  </ol>`,
  '3 Marks',
  [
    ['Adolescent sex education and STI prevention awareness', '1 Mark'],
    ['Maternal and infant healthcare, family planning, and contraceptive accessibility', '1 Mark'],
    ['Strict legal ban on sex determination (female foeticide) and infertility management', '1 Mark']
  ]
));

// Q3
questions.push(createQCard(
  'c12b-ch3-q3',
  'Q3',
  'Exercises (NCERT Verbatim)',
  'Is sex education necessary in schools? Why?',
  `<p><strong>Yes, sex education is absolutely necessary in schools.</strong></p>
  <p><strong>Scientific and Societal Reasons:</strong></p>
  <ol>
    <li><strong>Dissemination of Accurate Information:</strong> Adolescents undergo rapid anatomical, hormonal, and psychological changes during puberty. School-based sex education provides authentic scientific information about secondary sexual characteristics and reproductive anatomy, preventing peer misinformation.</li>
    <li><strong>Dispelling Myths and Misconceptions:</strong> It prevents adolescents from falling prey to taboos, cultural stigmas, anxiety, and unfounded guilt regarding masturbation, nocturnal emissions, and menstruation.</li>
    <li><strong>Prevention of Sexually Transmitted Infections (STIs):</strong> Educates students on safe sexual practices, the risks of unprotected intercourse, and prevention of fatal infections such as HIV/AIDS, Hepatitis-B, and HPV.</li>
    <li><strong>Avoidance of Teenage Pregnancies:</strong> Informs youngsters about the physical, emotional, and social consequences of early sexual encounters and unplanned teenage pregnancies.</li>
    <li><strong>Awareness on Reproductive Rights & Abuse Prevention:</strong> Equips youth with knowledge on bodily autonomy, recognising sexual harassment/abuse (POCSO awareness), and developing mutual gender respect.</li>
  </ol>`,
  '3 Marks',
  [
    ['Clear affirmative stance (Yes) with rationale on puberty and reproductive anatomy', '1 Mark'],
    ['Dispelling myths, preventing STIs (HIV/AIDS), and avoiding teenage pregnancy', '1 Mark'],
    ['Promoting safe sexual practices, bodily autonomy, and gender respect', '1 Mark']
  ]
));

// Q4
questions.push(createQCard(
  'c12b-ch3-q4',
  'Q4',
  'Exercises (NCERT Verbatim)',
  'Do you think that reproductive health in our country has improved in the past fifty years? If yes, mention some such areas of improvement.',
  `<p><strong>Yes, the reproductive health in India has shown significant, quantifiable improvement over the past fifty years.</strong> India was among the first countries in the world to launch a nationwide <strong>Family Planning Programme</strong> in 1951, later expanded as the <strong>Reproductive and Child Health Care (RCH) Programme</strong>.</p>
  <p><strong>Key Areas of Improvement:</strong></p>
  <ul>
    <li><strong>Decline in MMR and IMR:</strong> Enhanced antenatal, delivery, and postnatal medical facilities have led to a dramatic decrease in the Maternal Mortality Rate (MMR) and Infant Mortality Rate (IMR).</li>
    <li><strong>Increase in Institutional Deliveries:</strong> Shift from unassisted home deliveries to hospital-based institutional deliveries conducted by trained healthcare professionals.</li>
    <li><strong>Mass Immunisation Programmes:</strong> Universal childhood immunisation has successfully controlled life-threatening infant infections like polio, tetanus, and measles.</li>
    <li><strong>Availability and Adoption of Modern Contraceptives:</strong> Widespread availability of diverse contraceptive choices, including non-steroidal once-a-week oral pills like <em>Saheli</em> (developed by CDRI, Lucknow), copper-releasing IUDs, and condoms.</li>
    <li><strong>Better Diagnostic & Medical Facilities:</strong> Early diagnosis and clinical management of STIs, reproductive cancers, and ectopic pregnancies.</li>
    <li><strong>Assisted Reproductive Technology (ART) Facilities:</strong> Establishment of specialized fertility clinics offering IVF, ZIFT, and ICSI to assist infertile couples.</li>
    <li><strong>Legal Frameworks & Public Awareness:</strong> Enactment of laws raising legal age of marriage (18 for females, 21 for males) and the strict ban on prenatal sex determination.</li>
  </ul>`,
  '3 Marks',
  [
    ['Affirmation (Yes) and reference to National Family Planning (1951) and RCH programmes', '1 Mark'],
    ['Decline in MMR/IMR and rise in institutional deliveries & immunisation', '1 Mark'],
    ['Advancements in contraceptive access (Saheli, IUDs) and ART fertility centers', '1 Mark']
  ]
));

// Q5
questions.push(createQCard(
  'c12b-ch3-q5',
  'Q5',
  'Exercises (NCERT Verbatim)',
  'What are the suggested reasons for population explosion?',
  `<p>The dramatic escalation in world and national human population in recent decades (population explosion) is attributed to the following major factors:</p>
  <ol>
    <li><strong>Rapid Decline in Death Rate:</strong> Breakthroughs in modern medicine, antibiotic therapies, mass sanitation, and vector control have drastically reduced the crude death rate.</li>
    <li><strong>Sharp Decrease in Maternal Mortality Rate (MMR):</strong> Safe institutional deliveries, sterile obstetric procedures, and improved emergency maternal care have prevented childbirth-related maternal deaths.</li>
    <li><strong>Sharp Decrease in Infant Mortality Rate (IMR):</strong> Universal immunisation, neonatal intensive care units (NICUs), and better maternal nutrition have protected neonates and infants from infant mortality.</li>
    <li><strong>Increase in Longevity / Life Expectancy:</strong> Improved standards of living, disease eradication, and famine control have raised the average human lifespan from ~32 years (in 1947) to over 70 years today.</li>
    <li><strong>Large Proportion of Population in Reproductive Age:</strong> A demographic bulge with a vast cohort of young individuals entering reproductive maturity (15–45 years).</li>
    <li><strong>Socio-Cultural Factors & Illiteracy:</strong> Persistence of traditional preference for male offspring, religious dogmas resisting family planning, and low literacy levels in rural belts.</li>
  </ol>`,
  '3 Marks',
  [
    ['Decline in crude death rate and increase in life expectancy due to medical advancements', '1 Mark'],
    ['Sharp drop in Maternal Mortality Rate (MMR) and Infant Mortality Rate (IMR)', '1 Mark'],
    ['High percentage of population in reproductive age cohort and socio-cultural factors', '1 Mark']
  ]
));

// Q6
questions.push(createQCard(
  'c12b-ch3-q6',
  'Q6',
  'Exercises (NCERT Verbatim)',
  'Is the use of contraceptives justified? Give reasons.',
  `<p><strong>Yes, the use of contraceptives is completely justified, ethically sound, and medically necessary.</strong></p>
  <p><strong>Key Reasons:</strong></p>
  <ol>
    <li><strong>Curbing Population Explosion:</strong> Exponential population growth strains finite natural resources, clean drinking water, agricultural land, healthcare infrastructure, and employment. Contraceptives assist in voluntary population stabilisation.</li>
    <li><strong>Prevention of Unwanted Pregnancies:</strong> Contraception prevents unintended pregnancies resulting from casual sexual encounters, contraceptive failure, or non-consensual coitus, thereby avoiding high-risk, unhygienic clandestine abortions.</li>
    <li><strong>Protection Against STIs and HIV:</strong> Barrier contraceptives such as male and female condoms act as impenetrable physical barriers, providing dual protection against both pregnancy and sexually transmitted infections (STIs/AIDS).</li>
    <li><strong>Maternal Health and Child Spacing:</strong> Allows mothers adequate recovery time between successive child births, preventing maternal malnutrition, severe anaemia, and birth defects in off-spring.</li>
    <li><strong>Empowerment of Women:</strong> Provides women reproductive autonomy over their bodies, career aspirations, and reproductive timeline.</li>
  </ol>`,
  '3 Marks',
  [
    ['Clear affirmative stand (Yes, justified)', '0.5 Mark'],
    ['Population control and preservation of socioeconomic resources', '0.5 Mark'],
    ['Prevention of unwanted pregnancies and unsafe abortions', '1 Mark'],
    ['STI/HIV prevention and safeguarding maternal-child health', '1 Mark']
  ]
));

// Q7
questions.push(createQCard(
  'c12b-ch3-q7',
  'Q7',
  'Exercises (NCERT Verbatim)',
  'Removal of gonads cannot be considered as a contraceptive option. Why?',
  `<p><strong>Removal of gonads (castration/gonadectomy — orchidectomy in males, oophorectomy in females) cannot be considered as a contraceptive option</strong> because of the following critical medical and physiological reasons:</p>
  <ol>
    <li><strong>Violation of Ideal Contraceptive Definition:</strong> An ideal contraceptive must be user-friendly, easily available, effective, <em>reversible</em>, and with <em>no or least side-effects</em> without interfering with sexual drive, desire, or performance. Gonadectomy is <strong>completely irreversible</strong>.</li>
    <li><strong>Endocrine Function Cessation:</strong> Gonads are not merely gamete-producing organs; they are vital primary endocrine glands:
      <ul>
        <li><strong>Testes:</strong> Produce testosterone (androgens) which maintain male libido, secondary sexual characteristics, bone mineral density, and muscle mass.</li>
        <li><strong>Ovaries:</strong> Produce oestrogen and progesterone which regulate the menstrual cycle, secondary sexual characteristics, cardiovascular health, and bone turnover.</li>
      </ul>
    </li>
    <li><strong>Severe Physiological and Hormonal Consequences:</strong> Surgical removal causes immediate surgical menopause/andropause, resulting in severe osteoporosis, cardiovascular instability, vasomotor symptoms (hot flashes), loss of libido, depression, and metabolic collapse.</li>
    <li><strong>Surgical Contraception Alternatives Exist:</strong> Effective, safe surgical options like <strong>vasectomy</strong> (cutting/ligation of vas deferens) and <strong>tubectomy</strong> (cutting/ligation of fallopian tubes) block gamete transport <em>without altering hormonal endocrine balance or sexual function</em>.</li>
  </ol>`,
  '3 Marks',
  [
    ['Contraceptive criteria violation: irreversible and destroys sexual drive/desire', '1 Mark'],
    ['Complete loss of essential steroid hormones (testosterone / oestrogen & progesterone)', '1 Mark'],
    ['Severe clinical side-effects (osteoporosis, loss of libido) vs surgical sterilisation (vasectomy/tubectomy)', '1 Mark']
  ]
));

// Q8
questions.push(createQCard(
  'c12b-ch3-q8',
  'Q8',
  'Exercises (NCERT Verbatim)',
  'Amniocentesis for sex determination is banned in our country. Is this ban necessary? Comment.',
  `<p><strong>Yes, the statutory ban on amniocentesis for foetal sex determination is absolutely necessary and justified.</strong></p>
  <p><strong>1. Original Diagnostic Purpose of Amniocentesis:</strong></p>
  <ul>
    <li>Amniocentesis is a prenatal diagnostic procedure where a small amount of amniotic fluid containing fetal cells is withdrawn from the uterus using a hypodermic needle.</li>
    <li>Its legitimate clinical purpose is to detect <strong>chromosomal abnormalities</strong> (e.g., Down's syndrome, Turner's syndrome, Klinefelter's syndrome), inborn metabolic disorders, and hereditary genetic defects (e.g., sickle-cell anaemia, haemophilia).</li>
  </ul>
  <p><strong>2. Rationale for Statutory Ban:</strong></p>
  <ul>
    <li><strong>Rampant Female Foeticide:</strong> Due to entrenched patriarchal mindsets and societal craving for male children, this diagnostic tool was widely misused to determine the sex of the unborn fetus. If identified as female, the pregnancy was terminated through illegal Medical Termination of Pregnancy (MTP).</li>
    <li><strong>Severe Distorted Child Sex Ratio:</strong> Misuse led to an alarming crash in the juvenile sex ratio in several Indian states, causing severe demographic, social, and psychological imbalances.</li>
    <li><strong>PCPNDT Act:</strong> To curb this menace, the Government of India enacted the <strong>Pre-Conception and Pre-Natal Diagnostic Techniques (PCPNDT) Act</strong>, legally criminalising the disclosure or testing of fetal sex while preserving its genetic diagnostic utility under strict medical regulation.</li>
  </ul>`,
  '3 Marks',
  [
    ['Affirmative stand and definition of genuine diagnostic purpose (detecting chromosomal disorders like Down syndrome)', '1 Mark'],
    ['Gross misuse for female foeticide leading to skewed sex ratio', '1 Mark'],
    ['Significance of statutory ban (PCPNDT Act) in protecting the female unborn child and demographic balance', '1 Mark']
  ]
));

// Q9
questions.push(createQCard(
  'c12b-ch3-q9',
  'Q9',
  'Exercises (NCERT Verbatim)',
  'Suggest some methods to assist infertile couples to have children.',
  `<p>Infertile couples can be assisted to bear children through specialised healthcare medical techniques known collectively as <strong>Assisted Reproductive Technologies (ART)</strong>:</p>
  <table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.92rem;">
    <thead>
      <tr style="background:#ecfdf5; border-bottom:2px solid #059669; text-align:left;">
        <th style="padding:8px 12px; color:#065f46;">Method (Acronym)</th>
        <th style="padding:8px 12px; color:#065f46;">Full Form & Procedure</th>
        <th style="padding:8px 12px; color:#065f46;">Clinical Indication</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #e2e8f0;">
        <td style="padding:8px 12px; font-weight:700;">IVF-ET</td>
        <td style="padding:8px 12px;"><strong>In Vitro Fertilisation & Embryo Transfer:</strong> Ova from wife/donor and sperm from husband/donor are fertilised under simulated laboratory conditions, followed by embryo transfer.</td>
        <td style="padding:8px 12px;">Tubal blockage, severe pelvic adhesions, or unexplained infertility.</td>
      </tr>
      <tr style="border-bottom:1px solid #e2e8f0; background:#f8fafc;">
        <td style="padding:8px 12px; font-weight:700;">ZIFT</td>
        <td style="padding:8px 12px;"><strong>Zygote Intra-Fallopian Transfer:</strong> The zygote or early embryo up to 8 blastomeres is transferred directly into the fallopian tube.</td>
        <td style="padding:8px 12px;">Fertilisation outside body with patent, functional fallopian tubes.</td>
      </tr>
      <tr style="border-bottom:1px solid #e2e8f0;">
        <td style="padding:8px 12px; font-weight:700;">IUT</td>
        <td style="padding:8px 12px;"><strong>Intra-Uterine Transfer:</strong> Embryos with more than 8 blastomeres are transferred into the uterine cavity.</td>
        <td style="padding:8px 12px;">For advanced stage embryos to achieve implantation.</td>
      </tr>
      <tr style="border-bottom:1px solid #e2e8f0; background:#f8fafc;">
        <td style="padding:8px 12px; font-weight:700;">GIFT</td>
        <td style="padding:8px 12px;"><strong>Gamete Intra-Fallopian Transfer:</strong> Transfer of an ovum collected from a donor female into the fallopian tube of another female.</td>
        <td style="padding:8px 12px;">Female unable to produce ova, but capable of providing suitable internal environment for fertilisation & gestation.</td>
      </tr>
      <tr style="border-bottom:1px solid #e2e8f0;">
        <td style="padding:8px 12px; font-weight:700;">ICSI</td>
        <td style="padding:8px 12px;"><strong>Intra-Cytoplasmic Sperm Injection:</strong> A laboratory procedure in which a single sperm is directly injected into the cytoplasm of an ovum.</td>
        <td style="padding:8px 12px;">Extremely low sperm count (oligozoospermia), poor sperm motility, or defective sperm penetration.</td>
      </tr>
      <tr style="border-bottom:1px solid #e2e8f0; background:#f8fafc;">
        <td style="padding:8px 12px; font-weight:700;">AI / IUI</td>
        <td style="padding:8px 12px;"><strong>Artificial Insemination / Intra-Uterine Insemination:</strong> Semen collected from husband or a healthy donor is artificially introduced into the vagina or uterus of the female.</td>
        <td style="padding:8px 12px;">Male partner unable to inseminate or has very low sperm counts in ejaculates.</td>
      </tr>
    </tbody>
  </table>`,
  '4 Marks',
  [
    ['IVF-ET and distinction between ZIFT (&le; 8 blastomeres to tube) and IUT (&gt; 8 blastomeres to uterus)', '1.5 Marks'],
    ['GIFT (transfer of donor ovum to fallopian tube for in vivo fertilisation)', '1 Mark'],
    ['ICSI (micro-injection of single sperm into ovum) and AI / IUI (intrauterine insemination for male infertility)', '1.5 Marks']
  ]
));

// Q10
questions.push(createQCard(
  'c12b-ch3-q10',
  'Q10',
  'Exercises (NCERT Verbatim)',
  'What are the measures one has to take to prevent from contracting STDs?',
  `<p>Sexually Transmitted Diseases (STDs) / Sexually Transmitted Infections (STIs) can be effectively prevented by adhering to the following hygienic and behavioural guidelines:</p>
  <ol>
    <li><strong>Avoid Unprotected Sex with Unknown/Multiple Partners:</strong> Abstain from sexual intercourse with unknown persons or multiple sexual partners, as infection vectors are silent or asymptomatic in many individuals.</li>
    <li><strong>Consistent Use of Condoms:</strong> Always use barrier contraceptives (male or female condoms) during coitus. Condoms provide physical separation, significantly minimising mucosal contact and fluid exchange.</li>
    <li><strong>Avoid Sharing Needles & Syringes:</strong> Never share hypodermic needles or surgical/piercing equipment, which can transmit blood-borne STIs like HIV/AIDS and Hepatitis-B.</li>
    <li><strong>Transfusion of Screened Blood:</strong> Ensure that blood and blood products are rigorously screened for HIV, Hepatitis-B, and Syphilis prior to any medical transfusion.</li>
    <li><strong>Early Diagnosis and Treatment:</strong> In case of doubt or symptoms (such as burning during urination, unusual urethral/vaginal discharge, itching, pelvic pain, or genital sores/ulcers), consult a qualified medical professional immediately for early clinical diagnosis.</li>
    <li><strong>Complete Course of Prescribed Medication:</strong> Complete the full regimen of prescribed antibiotic/antiviral therapy, and ensure simultaneous testing and treatment of the sexual partner to avoid reinfection.</li>
  </ol>`,
  '3 Marks',
  [
    ['Avoiding sexual contact with unknown/multiple partners', '0.5 Mark'],
    ['Regular and consistent use of condoms during coitus', '1 Mark'],
    ['Avoiding sharing needles and ensuring screened blood transfusions', '0.5 Mark'],
    ['Early medical consultation for symptoms and completing treatment course for both partners', '1 Mark']
  ]
));

// Q11
questions.push(createQCard(
  'c12b-ch3-q11',
  'Q11',
  'Exercises (NCERT Verbatim)',
  `State True/False with explanation:
  <br>(a) Abortions could happen spontaneously too.
  <br>(b) Infertility is defined as the inability to produce a viable offspring and is always due to abnormalities/defects in the female partner.
  <br>(c) Complete lactation helps in contraception.
  <br>(d) Creating awareness about sex related aspects is an effective method to improve reproductive health of the people.`,
  `<div style="display:flex; flex-direction:column; gap:12px;">
    <div style="padding:10px; background:#f8fafc; border-radius:6px; border-left:4px solid #10b981;">
      <strong>(a) Statement:</strong> "Abortions could happen spontaneously too."<br>
      <strong>Verdict: TRUE</strong><br>
      <em>Explanation:</em> Spontaneous abortions (commonly called miscarriages) occur naturally due to chromosomal anomalies in the fetus, defective implantation, hormonal insufficiencies (such as low progesterone levels), maternal physiological infections, or anatomical uterine malformations.
    </div>
    <div style="padding:10px; background:#f8fafc; border-radius:6px; border-left:4px solid #ef4444;">
      <strong>(b) Statement:</strong> "Infertility is defined as the inability to produce a viable offspring and is always due to abnormalities/defects in the female partner."<br>
      <strong>Verdict: FALSE</strong><br>
      <em>Explanation:</em> Infertility is the inability to conceive even after 1–2 years of unprotected coitus. It is <strong>not</strong> solely due to defects in the female. In over 40–50% of clinical cases, infertility stems from male factors such as azoospermia, oligospermia, asthenospermia (poor motility), or erectile dysfunction.
    </div>
    <div style="padding:10px; background:#f8fafc; border-radius:6px; border-left:4px solid #10b981;">
      <strong>(c) Statement:</strong> "Complete lactation helps in contraception."<br>
      <strong>Verdict: TRUE</strong><br>
      <em>Explanation:</em> Known as <strong>Lactational Amenorrhea</strong>. Intense suckling by the infant stimulates elevated prolactin secretion, which suppresses hypothalamic GnRH release. Consequently, pituitary gonadotropins (LH and FSH) are suppressed, preventing ovarian follicular development and ovulation. It is effective up to a maximum period of six months postpartum.
    </div>
    <div style="padding:10px; background:#f8fafc; border-radius:6px; border-left:4px solid #10b981;">
      <strong>(d) Statement:</strong> "Creating awareness about sex related aspects is an effective method to improve reproductive health of the people."<br>
      <strong>Verdict: TRUE</strong><br>
      <em>Explanation:</em> Awareness empowers individuals with scientific understanding of reproductive organs, contraception, sexually transmitted infections, prenatal care, safe sexual practices, and eradication of social stigmas.
    </div>
  </div>`,
  '4 Marks',
  [
    ['(a) True with valid explanation of spontaneous miscarriage/chromosomal issues', '1 Mark'],
    ['(b) False with clear explanation that male factors (oligospermia, motility) contribute equally', '1 Mark'],
    ['(c) True with explanation of lactational amenorrhea (prolactin suppressing GnRH/LH/FSH)', '1 Mark'],
    ['(d) True with explanation of empowering informed choices and reducing STIs', '1 Mark']
  ]
));

// Q12
questions.push(createQCard(
  'c12b-ch3-q12',
  'Q12',
  'Exercises (NCERT Verbatim)',
  `Correct the following statements:
  <br>(a) Surgical methods of contraception prevent gamete formation.
  <br>(b) All sexually transmitted diseases are completely curable.
  <br>(c) Oral pills are very popular contraceptives among the rural women.
  <br>(d) In MTP, the foetus is removed after 20 weeks of pregnancy.`,
  `<div style="display:flex; flex-direction:column; gap:12px;">
    <div style="padding:10px; background:#f8fafc; border-radius:6px; border-left:4px solid #059669;">
      <strong>(a) Incorrect:</strong> "Surgical methods of contraception prevent gamete formation."<br>
      <strong style="color:#059669;">Corrected Statement:</strong> Surgical methods of contraception (vasectomy and tubectomy) <strong>prevent gamete transport</strong> (block gamete passage), thereby preventing fertilization; gamete formation (spermatogenesis and oogenesis) continues normally.
    </div>
    <div style="padding:10px; background:#f8fafc; border-radius:6px; border-left:4px solid #059669;">
      <strong>(b) Incorrect:</strong> "All sexually transmitted diseases are completely curable."<br>
      <strong style="color:#059669;">Corrected Statement:</strong> Except for <strong>HIV infections, genital herpes, and hepatitis-B</strong>, which are incurable, other sexually transmitted infections are completely curable if detected early and treated properly.
    </div>
    <div style="padding:10px; background:#f8fafc; border-radius:6px; border-left:4px solid #059669;">
      <strong>(c) Incorrect:</strong> "Oral pills are very popular contraceptives among the rural women."<br>
      <strong style="color:#059669;">Corrected Statement:</strong> Oral contraceptive pills are widely accepted and very popular contraceptives among <strong>urban and educated women</strong> (contraceptives with high compliance like Saheli are increasingly introduced across demographics).
    </div>
    <div style="padding:10px; background:#f8fafc; border-radius:6px; border-left:4px solid #059669;">
      <strong>(d) Incorrect:</strong> "In MTP, the foetus is removed after 20 weeks of pregnancy."<br>
      <strong style="color:#059669;">Corrected Statement:</strong> Medical Termination of Pregnancy (MTP) is considered safe only <strong>up to the first trimester (up to 12 weeks of pregnancy)</strong>; abortions performed in the second trimester (up to 20–24 weeks under specific legal provisions) are significantly riskier for the mother.
    </div>
  </div>`,
  '4 Marks',
  [
    ['(a) Corrected to: surgical methods block gamete transport, not gamete formation', '1 Mark'],
    ['(b) Corrected to: HIV, genital herpes, and hepatitis-B are not completely curable', '1 Mark'],
    ['(c) Corrected to: oral pills are very popular among urban/educated women', '1 Mark'],
    ['(d) Corrected to: MTP is safe during the first trimester (up to 12 weeks of pregnancy)', '1 Mark']
  ]
));

saveChapter(
  3,
  'Reproductive Health',
  svgDiagram,
  'NCERT Exercises (12 Verbatim Questions)',
  questions,
  'Principles of Inheritance and Variation'
);
