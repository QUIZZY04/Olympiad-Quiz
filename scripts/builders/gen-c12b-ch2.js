// scripts/builders/gen-c12b-ch2.js
// Class 12 Biology - Chapter 2: Human Reproduction (21 Questions)
const { createQCard, saveChapter } = require('./c12b-helper');

const chNum = 2;
const chTitle = "Human Reproduction";
const nextChTitle = "Reproductive Health";

const svgDiagram = `
  <div style="display:flex; justify-content:center; margin:24px 0;">
    <svg viewBox="0 0 760 220" style="width:100%; max-width:760px; height:auto; background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
      <!-- Title -->
      <text x="380" y="24" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#1e293b">Spermatogenesis, Oogenesis &amp; Menstrual Cycle Hormone Dynamics</text>
      
      <!-- Sperm Anatomy (Left) -->
      <path d="M 60 110 C 60 95, 90 95, 100 110 C 90 125, 60 125, 60 110 Z" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
      <path d="M 60 110 C 60 102, 75 102, 80 110 C 75 118, 60 118, 60 110 Z" fill="#10b981"/>
      <text x="70" y="106" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#ffffff">Acrosome</text>

      <rect x="100" y="104" width="25" height="12" rx="3" fill="#3b82f6"/>
      <text x="112" y="113" text-anchor="middle" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#ffffff">Mitoch.</text>

      <!-- Tail -->
      <path d="M 125 110 Q 150 100, 180 110 T 230 110" fill="none" stroke="#64748b" stroke-width="2"/>
      <text x="110" y="135" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#059669">Human Sperm (Head, Middle Piece, Tail)</text>

      <!-- Menstrual Cycle Phases & Hormones (Right) -->
      <rect x="330" y="55" width="400" height="145" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="345" y="75" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1e293b">Menstrual Cycle Phases (28 Days Standard):</text>
      
      <text x="345" y="98" font-family="system-ui, sans-serif" font-size="10" fill="#475569">1. Menstrual Phase (Days 1–5): Endometrial breakdown, low progesterone</text>
      <text x="345" y="118" font-family="system-ui, sans-serif" font-size="10" fill="#475569">2. Follicular / Proliferative (Days 6–13): FSH stimulates follicles, Estrogen rises</text>
      <text x="345" y="138" font-family="system-ui, sans-serif" font-size="10" fill="#dc2626" font-weight="700">3. Ovulatory Phase (Day 14): LH Surge triggers release of secondary oocyte</text>
      <text x="345" y="158" font-family="system-ui, sans-serif" font-size="10" fill="#475569">4. Luteal / Secretory (Days 15–28): Corpus luteum secretes high Progesterone</text>
      
      <text x="345" y="185" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#059669">• Fertilisation site: Ampullary-isthmic junction of Fallopian tube</text>
    </svg>
  </div>
`;

const questions = [
  // 2.1
  createQCard(
    "c12b-ch2-q1",
    "Q 2.1",
    "Exercise 2.1",
    `Fill in the blanks:<br>
    <strong>(a)</strong> Humans reproduce .......... (asexually/sexually)<br>
    <strong>(b)</strong> Humans are .......... (oviparous, viviparous, ovoviviparous)<br>
    <strong>(c)</strong> Fertilisation is .......... in humans (external/internal)<br>
    <strong>(d)</strong> Male and female gametes are .......... (diploid/haploid)<br>
    <strong>(e)</strong> Zygote is .......... (diploid/haploid)<br>
    <strong>(f)</strong> The process of release of ovum from a mature follicle is called ..........<br>
    <strong>(g)</strong> Ovulation is induced by a hormone called ..........<br>
    <strong>(h)</strong> The fusion of male and female gametes is called ..........<br>
    <strong>(i)</strong> Fertilisation takes place in ..........<br>
    <strong>(j)</strong> Zygote divides to form .......... which is implanted in uterus.<br>
    <strong>(k)</strong> The structure which provides vascular connection between fetus and uterus is called ..........`,
    `<p><strong>Answers:</strong></p>
    <ol type="a" style="line-height:1.8; font-weight:600;">
      <li><strong>sexually</strong></li>
      <li><strong>viviparous</strong></li>
      <li><strong>internal</strong></li>
      <li><strong>haploid</strong></li>
      <li><strong>diploid</strong></li>
      <li><strong>ovulation</strong></li>
      <li><strong>LH (Luteinising Hormone)</strong></li>
      <li><strong>fertilisation (or syngamy)</strong></li>
      <li><strong>ampullary-isthmic junction (or ampulla of fallopian tube)</strong></li>
      <li><strong>blastocyst</strong></li>
      <li><strong>placenta</strong></li>
    </ol>`,
    "3 Marks",
    [
      ["All 11 blanks correctly answered with exact physiological terminology", "3 Marks"]
    ]
  ),

  // 2.2
  createQCard(
    "c12b-ch2-q2",
    "Q 2.2",
    "Exercise 2.2",
    `Draw a labelled diagram of the male reproductive system. Describe the pathway of sperm transport.`,
    `<p><strong>Major Components of Male Reproductive System:</strong></p>
    <ol style="line-height:1.8;">
      <li><strong>Primary Sex Organs:</strong> Pair of <strong>testes</strong> lodged in the extra-abdominal <strong>scrotum</strong>, maintaining a temperature $2-2.5^\\circ\\text{C}$ lower than core body temperature for spermatogenesis.</li>
      <li><strong>Accessory Ducts:</strong> Rete testis &rarr; Vasa efferentia &rarr; Epididymis &rarr; Vas deferens &rarr; Ejaculatory duct &rarr; Urethra.</li>
      <li><strong>Accessory Glands:</strong> Paired <strong>seminal vesicles</strong>, single <strong>prostate gland</strong>, and paired <strong>bulbourethral (Cowper's) glands</strong>.</li>
      <li><strong>External Genitalia:</strong> Penis with specialised erectile tissue facilitating insemination.</li>
    </ol>
    <p><strong>Pathway of Sperm Transport:</strong><br>
    Seminiferous tubules &rarr; Rete testis &rarr; Vasa efferentia &rarr; Epididymis (maturation &amp; storage) &rarr; Vas deferens &rarr; Joins duct of seminal vesicle to form Ejaculatory duct &rarr; Urethra &rarr; Urethral meatus.</p>`,
    "3 Marks",
    [
      ["Anatomical parts: Testes, Epididymis, Vas deferens, Glands, Urethra", "1.5 Marks"],
      ["Accurate chronological sequence of sperm pathway", "1.5 Marks"]
    ]
  ),

  // 2.3
  createQCard(
    "c12b-ch2-q3",
    "Q 2.3",
    "Exercise 2.3",
    `Draw a labelled diagram of the female reproductive system. Describe its primary functional components.`,
    `<p><strong>Key Functional Components of Female Reproductive System:</strong></p>
    <ol style="line-height:1.8;">
      <li><strong>Ovaries:</strong> Primary female sex organs producing the female gamete (ovum) and steroid hormones (estrogen and progesterone).</li>
      <li><strong>Fallopian Tubes (Oviducts):</strong> Each $10-12 \\text{ cm}$ long, comprising three parts:
        <ul>
          <li><em>Infundibulum:</em> Funnel-shaped opening with finger-like <strong>fimbriae</strong> to collect ovum after ovulation.</li>
          <li><em>Ampulla:</em> Wider curvature where fertilisation normally occurs.</li>
          <li><em>Isthmus:</em> Narrow terminal lumen joining the uterus.</li>
        </ul>
      </li>
      <li><strong>Uterus (Womb):</strong> Inverted pear-shaped organ with three wall layers: outer thin <em>perimetrium</em>, middle thick smooth muscular <em>myometrium</em> (responsible for labour contractions), and inner glandular vascular <em>endometrium</em> (undergoes cyclic changes during menstruation).</li>
      <li><strong>Cervix and Vagina:</strong> The cervical canal along with vagina forms the <strong>birth canal</strong>.</li>
    </ol>`,
    "3 Marks",
    [
      ["Anatomy: Ovaries, Oviduct parts (fimbriae, ampulla, isthmus)", "1.5 Marks"],
      ["Uterine layers (endometrium, myometrium, perimetrium) and birth canal", "1.5 Marks"]
    ]
  ),

  // 2.4
  createQCard(
    "c12b-ch2-q4",
    "Q 2.4",
    "Exercise 2.4",
    `Write two major functions each of testis and ovary.`,
    `<p><strong>Two Major Functions of Testis:</strong></p>
    <ol style="line-height:1.8;">
      <li><strong>Spermatogenesis:</strong> Production of viable haploid male gametes (spermatozoa) by spermatogenic cells within the seminiferous tubules.</li>
      <li><strong>Endocrine Function:</strong> Interstitial cells of Leydig synthesise and secrete male sex hormones (<strong>androgens</strong>, principally <strong>testosterone</strong>), which stimulate spermatogenesis and maintain male secondary sexual characteristics.</li>
    </ol>

    <p><strong>Two Major Functions of Ovary:</strong></p>
    <ol style="line-height:1.8;">
      <li><strong>Oogenesis:</strong> Formation and periodic release of the mature female gamete (secondary oocyte / ovum).</li>
      <li><strong>Endocrine Function:</strong> Secretion of female steroid sex hormones:
        <ul>
          <li><strong>Estrogen:</strong> Secreted by developing ovarian follicles, regulating female secondary sexual traits and endometrial repair.</li>
          <li><strong>Progesterone:</strong> Secreted by the <em>corpus luteum</em> to prepare and maintain the endometrium for embryo implantation and pregnancy.</li>
        </ul>
      </li>
    </ol>`,
    "2 Marks",
    [
      ["Two distinct functions of testis (gametogenic and androgenic)", "1 Mark"],
      ["Two distinct functions of ovary (oogenic and hormonal: estrogen/progesterone)", "1 Mark"]
    ]
  ),

  // 2.5
  createQCard(
    "c12b-ch2-q5",
    "Q 2.5",
    "Exercise 2.5",
    `Describe the microscopic structure of a seminiferous tubule.`,
    `<p><strong>Microscopic Structure of Seminiferous Tubule:</strong><br>
    Each testicular lobule contains 1 to 3 highly coiled seminiferous tubules lined internally by a specialised germinal epithelium containing two types of cells:</p>
    <ol style="line-height:1.8;">
      <li><strong>Male Germ Cells (Spermatogonia):</strong> Diploid stem cells that undergo meiotic divisions to successively produce primary spermatocytes, secondary spermatocytes, spermatids, and finally mature spermatozoa.</li>
      <li><strong>Sertoli Cells (Nurse Cells):</strong> Large, elongated pyramid-shaped somatic cells that provide physical support, nutritional nourishment, and chemical factors to developing spermatogenic cells. They also secrete androgen-binding protein (ABP) and inhibin, and form the blood-testis barrier.</li>
      <li><strong>Interstitial Space:</strong> The connective tissue regions outside the seminiferous tubules contain small blood vessels and clusters of polyhedral <strong>Leydig cells (interstitial cells)</strong>, which synthesise and secrete androgens (testosterone) under LH stimulation, along with immunocompetent cells.</li>
    </ol>`,
    "3 Marks",
    [
      ["Description of germinal epithelium and Spermatogonia", "1 Mark"],
      ["Structure and functions of Sertoli (nurse) cells", "1 Mark"],
      ["Interstitial space and Leydig cells synthesizing testosterone", "1 Mark"]
    ]
  ),

  // 2.6
  createQCard(
    "c12b-ch2-q6",
    "Q 2.6",
    "Exercise 2.6",
    `What is spermatogenesis? Briefly describe the process of spermatogenesis with a schematic representation.`,
    `<p><strong>1. Definition:</strong><br>
    Spermatogenesis is the biological process of formation of mature, motile haploid spermatozoa from diploid immature male germ cells (spermatogonia) within the seminiferous tubules of testes, initiating at puberty.</p>

    <p><strong>2. Stages of Spermatogenesis:</strong></p>
    <ol style="line-height:1.8;">
      <li><strong>Multiplication Phase:</strong> Spermatogonia ($2n = 46$) situated on the inner wall of seminiferous tubules multiply by repeated mitosis.</li>
      <li><strong>Growth Phase:</strong> Some spermatogonia enlarge to form diploid <strong>primary spermatocytes ($2n$)</strong>.</li>
      <li><strong>Maturation Phase (Meiosis):</strong>
        <ul>
          <li>Each primary spermatocyte undergoes <em>Meiosis I (reductional division)</em> to form two equal haploid <strong>secondary spermatocytes ($n = 23$)</strong>.</li>
          <li>Secondary spermatocytes undergo <em>Meiosis II (equational division)</em> to produce four equal haploid <strong>spermatids ($n = 23$)</strong>.</li>
        </ul>
      </li>
      <li><strong>Spermiogenesis:</strong> The non-motile, spherical spermatids are transformed into specialised, motile, flagellated <strong>spermatozoa (sperms)</strong>.</li>
    </ol>`,
    "3 Marks",
    [
      ["Accurate definition of spermatogenesis", "1 Mark"],
      ["Sequential phases (Multiplication, Growth, Meiosis I & II)", "1 Mark"],
      ["Ploidy levels ($2n \to n$) and transformation of spermatids", "1 Mark"]
    ]
  ),

  // 2.7
  createQCard(
    "c12b-ch2-q7",
    "Q 2.7",
    "Exercise 2.7",
    `Name the hormones involved in regulation of spermatogenesis and explain their physiological roles.`,
    `<p><strong>Hormonal Regulation of Spermatogenesis:</strong><br>
    Spermatogenesis is initiated at puberty due to the significant increase in the secretion of <strong>GnRH (Gonadotropin Releasing Hormone)</strong> from the hypothalamus.</p>

    <ol style="line-height:1.8;">
      <li><strong>GnRH:</strong> Acts on the anterior pituitary gland and stimulates the secretion of two gonadotropins: LH and FSH.</li>
      <li><strong>LH (Luteinising Hormone / ICSH):</strong> Acts directly on the <strong>Leydig cells</strong> and stimulates them to synthesise and secrete <strong>androgens (testosterone)</strong>. Testosterone in turn triggers and maintains spermatogenesis.</li>
      <li><strong>FSH (Follicle Stimulating Hormone):</strong> Acts on <strong>Sertoli cells</strong> and stimulates secretion of <em>Androgen Binding Protein (ABP)</em> (which concentrates testosterone in seminiferous tubules) and factors essential for <strong>spermiogenesis</strong>.</li>
      <li><strong>Inhibin:</strong> Secreted by Sertoli cells, exerts negative feedback on anterior pituitary to suppress excess FSH release when sperm count is high.</li>
    </ol>`,
    "3 Marks",
    [
      ["Hypothalamic GnRH triggering pituitary gonadotropins", "1 Mark"],
      ["Role of LH acting on Leydig cells for testosterone", "1 Mark"],
      ["Role of FSH acting on Sertoli cells and inhibin feedback", "1 Mark"]
    ]
  ),

  // 2.8
  createQCard(
    "c12b-ch2-q8",
    "Q 2.8",
    "Exercise 2.8",
    `Define spermiogenesis and spermiation.`,
    `<p><strong>1. Spermiogenesis:</strong><br>
    The physiological and morphological transformation of non-motile, round, haploid <strong>spermatids into mature, motile spermatozoa (sperms)</strong>. During this process, the Golgi complex condenses into the acrosome, the nucleus condenses, mitochondria spiral around the axial filament in the middle piece, and a long flagellar tail is formed.</p>

    <p><strong>2. Spermiation:</strong><br>
    The final detachment and <strong>release of fully formed mature spermatozoa from the Sertoli cells</strong> into the central lumen of the seminiferous tubule.</p>`,
    "2 Marks",
    [
      ["Accurate definition of spermiogenesis (spermatid to spermatozoon)", "1 Mark"],
      ["Accurate definition of spermiation (release from Sertoli cells into lumen)", "1 Mark"]
    ]
  ),

  // 2.9
  createQCard(
    "c12b-ch2-q9",
    "Q 2.9",
    "Exercise 2.9",
    `Draw a labelled diagram of human sperm. Describe the structure and function of each region.`,
    `<p><strong>Structural Regions of Human Spermatozoon:</strong></p>
    <ol style="line-height:1.8;">
      <li><strong>Head:</strong> Contains an elongated haploid nucleus ($n = 23$) carrying paternal genetic material. Its anterior two-thirds is capped by the <strong>acrosome</strong>, a lysosome-derived vesicle filled with proteolytic hydrolytic enzymes (hyaluronidase, corona penetrating enzyme, acrosin) essential for penetrating the outer coats of the ovum.</li>
      <li><strong>Neck:</strong> Very short segment containing a <em>proximal centriole</em> (initiates cleavage divisions in the fertilised egg) and a <em>distal centriole</em> (gives rise to the axial filament of the tail).</li>
      <li><strong>Middle Piece:</strong> Contains numerous densely packed mitochondria spiralling around the axial filament (<em>nebenkern</em>), providing metabolic energy (ATP) to power the tail for sperm motility.</li>
      <li><strong>Tail:</strong> A long flagellum surrounded by a plasma membrane, executing vigorous undulating lashing movements that propel the sperm through the female reproductive tract towards the ampulla.</li>
    </ol>`,
    "3 Marks",
    [
      ["Head and acrosome enzymes with genetic role", "1 Mark"],
      ["Middle piece and mitochondria providing energy for motility", "1 Mark"],
      ["Neck centrioles and tail flagellum mechanism", "1 Mark"]
    ]
  ),

  // 2.10
  createQCard(
    "c12b-ch2-q10",
    "Q 2.10",
    "Exercise 2.10",
    `What are the major components of seminal plasma?`,
    `<p><strong>Components of Seminal Plasma:</strong><br>
    Seminal plasma is the collective alkaline fluid secretion contributed by the male accessory glands (seminal vesicles $\\sim 60-70\\%$, prostate gland $\\sim 20-30\\%$, and bulbourethral glands $\\sim 5\\%$):</p>
    <ol style="line-height:1.8;">
      <li><strong>Fructose:</strong> Unique monosaccharide secreted by seminal vesicles serving as the primary energetic nutrient for sperm motility (also used as forensic marker for rape confirmation).</li>
      <li><strong>Calcium Ions ($Ca^{2+}$) and Enzymes:</strong> Required for sperm motility and activation.</li>
      <li><strong>Prostaglandins:</strong> Stimulate reverse peristaltic contractions in the female reproductive tract to help propel sperms towards the fallopian tubes.</li>
      <li><strong>Alkaline Buffers / Bicarbonates:</strong> Neutralise the acidic vaginal environment ($\text{pH } 3.5 - 4.0$), safeguarding sperm survival.</li>
      <li><strong>Mucus:</strong> Secreted by bulbourethral glands, facilitating lubrication of the penis.</li>
      <li><strong>Clotting Enzymes &amp; Fibrinolysin:</strong> Help in coagulation and subsequent liquefaction of semen.</li>
    </ol>`,
    "2 Marks",
    [
      ["Fructose as specific energy source", "0.5 Mark"],
      ["Calcium, prostaglandins and buffering components", "1 Mark"],
      ["Lubricating mucus from bulbourethral glands", "0.5 Mark"]
    ]
  ),

  // 2.11
  createQCard(
    "c12b-ch2-q11",
    "Q 2.11",
    "Exercise 2.11",
    `What are the major functions of male accessory ducts and glands?`,
    `<p><strong>1. Functions of Male Accessory Ducts (Rete testis, Vasa efferentia, Epididymis, Vas deferens):</strong><br>
    • <strong>Transport:</strong> Conduct spermatozoa from seminiferous tubules to the outside through the urethra.<br>
    • <strong>Maturation &amp; Storage:</strong> The <em>epididymis</em> serves as the physiological site for temporary storage where spermatozoa undergo biochemical maturation, acquire functional motility, and fertilising capacity.</p>

    <p><strong>2. Functions of Male Accessory Glands:</strong><br>
    • <strong>Seminal Vesicles:</strong> Secrete nutrient-rich alkaline fluid containing fructose, prostaglandins, and clotting proteins to nourish and activate sperms.<br>
    • <strong>Prostate Gland:</strong> Secretes a milky, slightly alkaline fluid containing citric acid, enzymes, and calcium that enhances motility.<br>
    • <strong>Bulbourethral (Cowper's) Glands:</strong> Secrete clear, alkaline mucus prior to ejaculation to lubricate the glans penis and neutralise traces of acidic urine in the urethra.</p>`,
    "3 Marks",
    [
      ["Functions of ducts (transport, storage, epididymal maturation)", "1.5 Marks"],
      ["Specific functions of Seminal vesicles, Prostate, and Bulbourethral glands", "1.5 Marks"]
    ]
  ),

  // 2.12
  createQCard(
    "c12b-ch2-q12",
    "Q 2.12",
    "Exercise 2.12",
    `What is oogenesis? Give a brief account of oogenesis.`,
    `<p><strong>1. Definition:</strong><br>
    Oogenesis is the biological process of formation of a mature haploid female gamete (ovum) within the ovary. Unlike spermatogenesis, it initiates during embryonic development.</p>

    <p><strong>2. Stages of Oogenesis:</strong></p>
    <ol style="line-height:1.8;">
      <li><strong>Prenatal Phase (Fetal Life):</strong> A couple of million gamete mother cells (<strong>oogonia, $2n$</strong>) are formed in each fetal ovary; no more are formed after birth. Oogonia enter <em>Prophase-I of Meiosis-I</em> and get temporarily arrested as <strong>primary oocytes ($2n$)</strong>.</li>
      <li><strong>Follicular Atresia:</strong> From birth to puberty, a large number of primary follicles degenerate, leaving only $60,000 - 80,000$ in each ovary at puberty.</li>
      <li><strong>First Meiotic Division (At Puberty):</strong> Prior to ovulation, the primary oocyte completes its unequal Meiosis-I, producing a large haploid <strong>secondary oocyte ($n$)</strong> and a tiny <strong>first polar body ($n$)</strong>.</li>
      <li><strong>Second Meiotic Division (At Fertilisation):</strong> The secondary oocyte is arrested at <em>Metaphase-II</em> and ovulated. Meiosis-II is completed only upon sperm entry (fertilisation), producing a mature <strong>ovum (ootid, $n$)</strong> and a <strong>second polar body ($n$)</strong>.</li>
    </ol>`,
    "3 Marks",
    [
      ["Definition and embryonic initiation of oogenesis", "1 Mark"],
      ["Primary oocyte arrest at Prophase-I and follicular atresia", "1 Mark"],
      ["Unequal division yielding secondary oocyte ($n$) and polar body completion upon sperm entry", "1 Mark"]
    ]
  ),

  // 2.13
  createQCard(
    "c12b-ch2-q13",
    "Q 2.13",
    "Exercise 2.13",
    `Draw a labelled diagram of a section through human ovary showing different stages of follicular development.`,
    `<p><strong>Sequential Stages Visible in Ovarian Section:</strong></p>
    <ol style="line-height:1.8;">
      <li><strong>Primary Follicle:</strong> Primary oocyte enclosed by a single layer of granulosa cells.</li>
      <li><strong>Secondary Follicle:</strong> More granulosa layers surrounded by a connective tissue <em>theca</em>.</li>
      <li><strong>Tertiary Follicle:</strong> Characterised by an inner fluid-filled cavity called the <strong>antrum</strong>, with theca differentiated into <em>theca interna</em> (vascular, estrogen-secreting) and <em>theca externa</em>.</li>
      <li><strong>Mature Graafian Follicle:</strong> Large follicle bulging at ovarian surface, containing secondary oocyte surrounded by the <em>zona pellucida</em> and <em>corona radiata</em>.</li>
      <li><strong>Ovulation:</strong> Rupture of Graafian follicle releasing the secondary oocyte into peritoneal cavity.</li>
      <li><strong>Corpus Luteum:</strong> Remnants of ruptured follicle luteinised into an endocrine body secreting progesterone.</li>
      <li><strong>Corpus Albicans:</strong> Degenerated white fibrous scar of corpus luteum when pregnancy fails.</li>
    </ol>`,
    "3 Marks",
    [
      ["Primary, secondary, and tertiary follicle with antrum", "1 Mark"],
      ["Graafian follicle rupture (ovulation)", "1 Mark"],
      ["Corpus luteum and corpus albicans formation", "1 Mark"]
    ]
  ),

  // 2.14
  createQCard(
    "c12b-ch2-q14",
    "Q 2.14",
    "Exercise 2.14",
    `Describe the structure of a mature Graafian follicle with a neat labelled diagram.`,
    `<p><strong>Structure of Mature Graafian Follicle:</strong></p>
    <ol style="line-height:1.8;">
      <li><strong>Theca Layers:</strong> Outer protective fibrous <em>theca externa</em> and inner cellular, highly vascular <em>theca interna</em> that actively secretes estrogen.</li>
      <li><strong>Membrana Granulosa:</strong> Stratified layer of follicle/granulosa cells lining the follicle wall.</li>
      <li><strong>Antrum:</strong> A large, crescent-shaped, central cavity filled with viscous fluid (<em>liquor folliculi</em>).</li>
      <li><strong>Cumulus Oophorus (Germ Hill):</strong> A stalk of granulosa cells anchoring the oocyte to the follicle wall.</li>
      <li><strong>Secondary Oocyte:</strong> Centrally situated haploid cell arrested at Metaphase-II.</li>
      <li><strong>Zona Pellucida:</strong> A non-cellular, translucent, glycoproteinaceous membrane directly enclosing the oocyte.</li>
      <li><strong>Corona Radiata:</strong> Radially elongated granulosa cells adhering firmly to the exterior of the zona pellucida.</li>
    </ol>`,
    "3 Marks",
    [
      ["Theca externa & theca interna descriptions", "1 Mark"],
      ["Antrum and liquor folliculi", "1 Mark"],
      ["Secondary oocyte with zona pellucida and corona radiata", "1 Mark"]
    ]
  ),

  // 2.15
  createQCard(
    "c12b-ch2-q15",
    "Q 2.15",
    "Exercise 2.15",
    `Name the functions of the following:<br>
    <strong>(a)</strong> Corpus luteum<br>
    <strong>(b)</strong> Endometrium<br>
    <strong>(c)</strong> Acrosome<br>
    <strong>(d)</strong> Sperm tail<br>
    <strong>(e)</strong> Fimbriae.`,
    `<p><strong>Functions:</strong></p>
    <ol style="line-height:1.8;">
      <li><strong>(a) Corpus Luteum:</strong> Acts as a temporary endocrine gland that secretes large quantities of <strong>progesterone</strong> (and some estrogen and inhibin), essential for maintaining the thickened endometrium for implantation and sustaining pregnancy.</li>
      <li><strong>(b) Endometrium:</strong> The innermost glandular vascular layer of the uterus that provides the physical site for <strong>blastocyst implantation</strong> and placenta formation; sheds periodically during menstruation if fertilisation does not occur.</li>
      <li><strong>(c) Acrosome:</strong> Releases proteolytic sperm lysins (hyaluronidase, acrosin) to digest the corona radiata and zona pellucida of the ovum, enabling <strong>sperm penetration and fertilisation</strong>.</li>
      <li><strong>(d) Sperm Tail:</strong> Performs vigorous whip-like undulating movements powered by ATP from the middle piece, providing <strong>motility</strong> for sperm transport through the female tract.</li>
      <li><strong>(e) Fimbriae:</strong> Finger-like ciliated projections at the edges of the infundibulum that sweep across the ovary surface to <strong>capture the released ovum</strong> after ovulation and direct it into the fallopian tube.</li>
    </ol>`,
    "5 Marks",
    [
      ["One accurate, specific functional description for each part (1 Mark each)", "5 Marks"]
    ]
  ),

  // 2.16
  createQCard(
    "c12b-ch2-q16",
    "Q 2.16",
    "Exercise 2.16",
    `Identify True/False statements. Correct each false statement:<br>
    <strong>(a)</strong> Androgens are produced by Sertoli cells.<br>
    <strong>(b)</strong> Spermatozoa get nutrition from Sertoli cells.<br>
    <strong>(c)</strong> Leydig cells are found in ovary.<br>
    <strong>(d)</strong> Leydig cells synthesise androgens.<br>
    <strong>(e)</strong> Oogenesis takes place in corpus luteum.<br>
    <strong>(f)</strong> Menstrual cycle ceases during pregnancy.<br>
    <strong>(g)</strong> Presence or absence of hymen is not a reliable indicator of virginity or sexual experience.`,
    `<p><strong>Evaluations and Corrections:</strong></p>
    <ol style="line-height:1.8;">
      <li><strong>(a) False.</strong> Androgens are produced by the <strong>Leydig cells (interstitial cells)</strong>, not Sertoli cells.</li>
      <li><strong>(b) True.</strong> Sertoli cells act as nurse cells providing nourishment to developing spermatozoa.</li>
      <li><strong>(c) False.</strong> Leydig cells are found in the <strong>testis</strong> (in interstitial spaces between seminiferous tubules), not ovary.</li>
      <li><strong>(d) True.</strong> Leydig cells synthesise and secrete androgens (primarily testosterone).</li>
      <li><strong>(e) False.</strong> Oogenesis takes place in the <strong>ovary (ovarian follicles)</strong>, not in the corpus luteum (which forms after ovulation).</li>
      <li><strong>(f) True.</strong> High progesterone from corpus luteum and placenta suppresses gonadotropins (LH/FSH), halting menstrual cycles during pregnancy.</li>
      <li><strong>(g) True.</strong> The hymen can be torn by physical exertion, horseback riding, cycling, or using tampons, or may persist even after coitus; hence it is not a reliable indicator of virginity.</li>
    </ol>`,
    "3.5 Marks",
    [
      ["All seven statements correctly identified with valid corrections for false statements (0.5 Mark each)", "3.5 Marks"]
    ]
  ),

  // 2.17
  createQCard(
    "c12b-ch2-q17",
    "Q 2.17",
    "Exercise 2.17",
    `What is the menstrual cycle? Which hormones regulate the menstrual cycle?`,
    `<p><strong>1. Definition:</strong><br>
    The menstrual cycle is the rhythmic series of cyclic natural physiological changes occurring in the ovaries and the uterine endometrium of female primates (human, apes, monkeys) roughly every $28-29 \\text{ days}$, from menarche (puberty) to menopause, preparing the uterus for potential pregnancy.</p>

    <p><strong>2. Hormones Regulating the Menstrual Cycle:</strong></p>
    <ol style="line-height:1.8;">
      <li><strong>Pituitary Gonadotropins:</strong>
        <ul>
          <li><strong>FSH (Follicle Stimulating Hormone):</strong> Stimulates development of primary ovarian follicles into mature Graafian follicles and stimulates estrogen secretion.</li>
          <li><strong>LH (Luteinising Hormone):</strong> A rapid mid-cycle surge of LH (<strong>LH Surge</strong> on Day 14) induces the rupture of the Graafian follicle and release of the secondary oocyte (<strong>ovulation</strong>), and converts the ruptured follicle into the <em>corpus luteum</em>.</li>
        </ul>
      </li>
      <li><strong>Ovarian Steroid Hormones:</strong>
        <ul>
          <li><strong>Estrogen:</strong> Secreted by growing follicles, promotes repair and proliferation of the uterine endometrium.</li>
          <li><strong>Progesterone:</strong> Secreted in large amounts by the corpus luteum during the secretory phase, maintaining the vascularised endometrium essential for implantation.</li>
        </ul>
      </li>
    </ol>`,
    "3 Marks",
    [
      ["Definition and periodicity of menstrual cycle", "1 Mark"],
      ["Pituitary hormones: FSH (follicular growth) and LH surge (ovulation)", "1 Mark"],
      ["Ovarian hormones: Estrogen (proliferation) and Progesterone (maintenance)", "1 Mark"]
    ]
  ),

  // 2.18
  createQCard(
    "c12b-ch2-q18",
    "Q 2.18",
    "Exercise 2.18",
    `What is parturition? Which hormones are involved in the induction of parturition?`,
    `<p><strong>1. Definition:</strong><br>
    Parturition (childbirth) is the biological process of vigorous uterine contractions resulting in the expulsion or delivery of the mature fetus from the uterus through the birth canal at the end of gestation.</p>

    <p><strong>2. Neuroendocrine Mechanism &amp; Hormones Involved:</strong><br>
    Parturition is triggered by a complex <strong>neuroendocrine mechanism</strong> initiated by the fully developed fetus and placenta, generating mild uterine contractions termed the <strong>foetal ejection reflex</strong>.</p>
    <ol style="line-height:1.8;">
      <li><strong>Oxytocin:</strong> The foetal ejection reflex triggers the release of <strong>oxytocin</strong> from the maternal posterior pituitary. Oxytocin acts on the uterine myometrium, causing stronger contractions, which in turn stimulates further oxytocin secretion (positive feedback loop) until the baby is expelled.</li>
      <li><strong>Relaxin:</strong> Secreted by the ovary/placenta towards term to relax the pubic symphysis ligament and dilate the cervix.</li>
      <li><strong>Estrogen and Progesterone:</strong> The estrogen-to-progesterone ratio increases, increasing oxytocin receptors on myometrial cells.</li>
      <li><strong>Prostaglandins:</strong> Produced locally in the uterine wall, amplifying the intensity of contractions.</li>
    </ol>`,
    "3 Marks",
    [
      ["Definition and foetal ejection reflex neuroendocrine mechanism", "1.5 Marks"],
      ["Key role of oxytocin positive feedback and supporting hormones (relaxin, prostaglandins)", "1.5 Marks"]
    ]
  ),

  // 2.19
  createQCard(
    "c12b-ch2-q19",
    "Q 2.19",
    "Exercise 2.19",
    `In our society women are often blamed for giving birth to daughters. Can you explain why this is scientifically completely incorrect?`,
    `<p><strong>Scientific Basis of Sex Determination in Humans:</strong><br>
    Sex in human beings is determined by the chromosomal constitution of the fertilising sperm from the father, not the mother (XY sex-determination system).</p>

    <ol style="line-height:1.8;">
      <li><strong>Female Homogamety:</strong> Females have two identical $X$ sex chromosomes ($44 + XX$). During oogenesis, all ova produced are genetically identical, each carrying an $X$ chromosome ($22 + X$). The mother is completely <strong>homogametic</strong>.</li>
      <li><strong>Male Heterogamety:</strong> Males have two different sex chromosomes ($44 + XY$). During spermatogenesis, the father produces two equal types of sperms in a $50:50$ ratio:
        <ul>
          <li>$50\\%$ gynosperms carrying an $X$ chromosome ($22 + X$).</li>
          <li>$50\\%$ androsperms carrying a $Y$ chromosome ($22 + Y$).</li>
        </ul>
      </li>
      <li><strong>Fertilisation Outcome:</strong>
        <ul>
          <li>If an $X$-carrying sperm fertilises the ovum: $(22 + X) + (22 + X) = 44 + XX \implies$ <strong>Female child (daughter)</strong>.</li>
          <li>If a $Y$-carrying sperm fertilises the ovum: $(22 + Y) + (22 + X) = 44 + XY \implies$ <strong>Male child (son)</strong>.</li>
        </ul>
      </li>
    </ol>
    <p><strong>Conclusion:</strong> The genetic sex of the baby depends strictly on whether an $X$ or $Y$ sperm from the father fertilises the ovum. Blaming the mother is scientifically unfounded and socially unjust.</p>`,
    "3 Marks",
    [
      ["Explanation of female homogamety ($XX$) producing only $X$ ova", "1 Mark"],
      ["Explanation of male heterogamety ($XY$) producing $X$ and $Y$ sperms (50:50)", "1 Mark"],
      ["Clear conclusion that paternal sperm determines gender", "1 Mark"]
    ]
  ),

  // 2.20
  createQCard(
    "c12b-ch2-q20",
    "Q 2.20",
    "Exercise 2.20",
    `How many eggs are released by a human ovary in a month? How many eggs do you think would have been released if the mother gave birth to identical twins? Are fraternal twins different?`,
    `<p><strong>1. Eggs Released in a Month:</strong><br>
    Normally, only <strong>one single egg (secondary oocyte)</strong> is released by one of the ovaries during each menstrual cycle (roughly every 28 days), with the ovaries typically alternating each month.</p>

    <p><strong>2. In Case of Identical (Monozygotic) Twins:</strong><br>
    Only <strong>one egg</strong> was released. A single ovum is fertilised by a single sperm to form one diploid zygote. During early cleavage stages (blastocyst), the inner cell mass splits into two separate embryonic clusters, producing two genetically identical individuals of the same sex.</p>

    <p><strong>3. Fraternal (Dizygotic) Twins:</strong><br>
    <strong>Yes, fraternal twins are fundamentally different.</strong><br>
    • They arise when <strong>two separate eggs</strong> are released simultaneously during the same cycle (hyperovulation) and fertilised by <strong>two different sperms</strong>.<br>
    • They are no more genetically alike than ordinary siblings born at different times, and can be of the same sex or different sexes.</p>`,
    "3 Marks",
    [
      ["One egg per month in normal human ovulation", "1 Mark"],
      ["Monozygotic twins: one egg fertilised by one sperm splitting", "1 Mark"],
      ["Dizygotic twins: two eggs fertilised by two sperms", "1 Mark"]
    ]
  ),

  // 2.21
  createQCard(
    "c12b-ch2-q21",
    "Q 2.21",
    "Exercise 2.21",
    `How many eggs do you think were released by the ovary of a female dog which gave birth to 6 puppies?`,
    `<p><strong>Answer:</strong><br>
    A female dog is a litter-bearing, multiparous animal. Assuming each puppy developed from a separate fertilised zygote (dizygotic/polyovulatory mechanism typical of canine litters):<br>
    • <strong>At least 6 eggs (or slightly more)</strong> were released by the ovaries during the estrus cycle.<br>
    • Each individual ovum was fertilised by a separate sperm to produce 6 viable embryos.<br>
    (Note: If any pair among the puppies were identical monozygotic twins, the number of eggs released could theoretically be fewer, but in dogs, multiple births primarily result from multiple simultaneous ovulations).</p>`,
    "1 Mark",
    [
      ["6 eggs released due to polyovulatory nature of dogs", "1 Mark"]
    ]
  )
];

saveChapter(chNum, chTitle, svgDiagram, "Exercises 2.1 to 2.21", questions, nextChTitle);
