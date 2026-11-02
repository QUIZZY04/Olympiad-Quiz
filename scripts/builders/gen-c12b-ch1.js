// scripts/builders/gen-c12b-ch1.js
// Class 12 Biology - Chapter 1: Sexual Reproduction in Flowering Plants (18 Questions)
const { createQCard, saveChapter } = require('./c12b-helper');

const chNum = 1;
const chTitle = "Sexual Reproduction in Flowering Plants";
const nextChTitle = "Human Reproduction";

const svgDiagram = `
  <div style="display:flex; justify-content:center; margin:24px 0;">
    <svg viewBox="0 0 760 220" style="width:100%; max-width:760px; height:auto; background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
      <!-- Title -->
      <text x="380" y="24" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#1e293b">Anatomy of Anatropous Ovule & 7-Celled, 8-Nucleate Embryo Sac</text>
      
      <!-- Ovule schematic -->
      <ellipse cx="170" cy="120" rx="60" ry="75" fill="#dcfce7" stroke="#059669" stroke-width="2"/>
      <ellipse cx="170" cy="120" rx="42" ry="55" fill="#f0fdf4" stroke="#059669" stroke-width="1.5"/>

      <!-- Embryo sac inside nucellus -->
      <ellipse cx="170" cy="120" rx="25" ry="38" fill="#ffffff" stroke="#10b981" stroke-width="2"/>

      <!-- Chalazal end (top) Antipodals -->
      <circle cx="162" cy="95" r="4" fill="#059669"/><circle cx="170" cy="92" r="4" fill="#059669"/><circle cx="178" cy="95" r="4" fill="#059669"/>
      <text x="170" y="82" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#059669">Antipodals (3)</text>

      <!-- Central cell with 2 polar nuclei -->
      <circle cx="167" cy="118" r="3.5" fill="#2563eb"/><circle cx="173" cy="118" r="3.5" fill="#2563eb"/>
      <text x="215" y="122" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#2563eb">Polar nuclei (n+n)</text>

      <!-- Micropylar end (bottom) Egg apparatus -->
      <circle cx="170" cy="145" r="5" fill="#dc2626"/>
      <circle cx="162" cy="142" r="4" fill="#ea580c"/><circle cx="178" cy="142" r="4" fill="#ea580c"/>
      <text x="170" y="162" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#dc2626">Egg Cell &amp; Synergids</text>

      <!-- Micropyle pore -->
      <path d="M 160 195 L 170 175 L 180 195" fill="none" stroke="#64748b" stroke-width="2"/>
      <text x="170" y="210" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#64748b">Micropyle</text>

      <!-- Key Concept Summary -->
      <text x="360" y="55" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e293b">Core Principles &amp; Reproductive Events:</text>
      <text x="360" y="80" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Microsporogenesis: PMC ($2n$) $\\xrightarrow{\\text{Meiosis}}$ Microspore Tetrad ($n$) $\\to$ Pollen Grains</text>
      <text x="360" y="105" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Megasporogenesis: MMC ($2n$) $\\xrightarrow{\\text{Meiosis}}$ 4 Megaspores $\\to$ 1 Functional ($n$)</text>
      <text x="360" y="130" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Monosporic Development: Functional megaspore undergoes 3 free-nuclear mitoses</text>
      <text x="360" y="155" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Mature Embryo Sac: 7-celled, 8-nucleate (3 antipodals + 1 central + 2 synergids + 1 egg)</text>
      <text x="360" y="180" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Double Fertilisation: Syngamy (Egg + Sperm $\\to$ Zygote $2n$) &amp; Triple Fusion (PEN $3n$)</text>
      <text x="360" y="205" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Post-fertilisation: Ovule $\\to$ Seed; Ovary $\\to$ Fruit; Endosperm nourishes embryo</text>
    </svg>
  </div>
`;

const questions = [
  // 1.1
  createQCard(
    "c12b-ch1-q1",
    "Q 1.1",
    "Exercise 1.1",
    `Name the parts of an angiosperm flower in which development of male and female gametophyte take place.`,
    `<p><strong>1. Male Gametophyte Development:</strong><br>
    The development of the male gametophyte (pollen grain) takes place inside the <strong>microsporangia (pollen sacs)</strong> of the <strong>anther</strong> (part of the stamen / androecium).</p>

    <p><strong>2. Female Gametophyte Development:</strong><br>
    The development of the female gametophyte (embryo sac) takes place inside the <strong>nucellus of the ovule (megasporangium)</strong>, located within the <strong>ovary</strong> of the pistil / carpel (gynoecium).</p>`,
    "2 Marks",
    [
      ["Identification of anther / microsporangium for male gametophyte", "1 Mark"],
      ["Identification of ovule nucellus / ovary for female gametophyte", "1 Mark"]
    ]
  ),

  // 1.2
  createQCard(
    "c12b-ch1-q2",
    "Q 1.2",
    "Exercise 1.2",
    `Differentiate between microsporogenesis and megasporogenesis. Which type of cell division occurs during these events? Name the structures formed at the end of these two events.`,
    `<p><strong>1. Comparison Table:</strong></p>
    <table style="width:100%; border-collapse:collapse; margin:12px 0;">
      <thead>
        <tr style="background:#f1f5f9; text-align:left;">
          <th style="padding:8px; border:1px solid #cbd5e1;">Feature</th>
          <th style="padding:8px; border:1px solid #cbd5e1;">Microsporogenesis</th>
          <th style="padding:8px; border:1px solid #cbd5e1;">Megasporogenesis</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Definition</strong></td>
          <td style="padding:8px; border:1px solid #cbd5e1;">Formation of haploid microspores from diploid pollen mother cell (PMC).</td>
          <td style="padding:8px; border:1px solid #cbd5e1;">Formation of haploid megaspores from diploid megaspore mother cell (MMC).</td>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Site of Occurrence</strong></td>
          <td style="padding:8px; border:1px solid #cbd5e1;">Inside the microsporangium (pollen sac) of anther.</td>
          <td style="padding:8px; border:1px solid #cbd5e1;">Inside the nucellus of the ovule (megasporangium).</td>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Fate of Products</strong></td>
          <td style="padding:8px; border:1px solid #cbd5e1;">All four microspores of the tetrad are functional and develop into pollen grains.</td>
          <td style="padding:8px; border:1px solid #cbd5e1;">Usually only one megaspore (chalazal) remains functional; the other three degenerate.</td>
        </tr>
      </tbody>
    </table>

    <p><strong>2. Type of Cell Division:</strong><br>
    <strong>Meiotic division (Meiosis / reductional division)</strong> occurs during both microsporogenesis and megasporogenesis.</p>

    <p><strong>3. Structures Formed:</strong><br>
    • At the end of microsporogenesis: <strong>Haploid microspores</strong> (arranged in a microspore tetrad), which separate and develop into mature <strong>pollen grains</strong>.<br>
    • At the end of megasporogenesis: A <strong>linear tetrad of four haploid megaspores</strong>, of which one functional megaspore develops into the mature <strong>embryo sac (female gametophyte)</strong>.</p>`,
    "3 Marks",
    [
      ["Two clear points of difference between the processes", "1.5 Marks"],
      ["Identification of Meiotic cell division", "0.5 Mark"],
      ["Structures formed: microspores/pollen grains & megaspores/embryo sac", "1 Mark"]
    ]
  ),

  // 1.3
  createQCard(
    "c12b-ch1-q3",
    "Q 1.3",
    "Exercise 1.3",
    `Arrange the following terms in the correct developmental sequence:<br>
    Pollen grain, sporogenous tissue, microspore tetrad, pollen mother cell, male gametes.`,
    `<p><strong>Correct Developmental Sequence:</strong></p>
    <div style="padding:12px; background:#ecfdf5; border:1px solid #a7f3d0; border-radius:8px; font-weight:700; color:#065f46; margin:12px 0;">
      Sporogenous tissue &nbsp;→&nbsp; Pollen mother cell (PMC) &nbsp;→&nbsp; Microspore tetrad &nbsp;→&nbsp; Pollen grain &nbsp;→&nbsp; Male gametes
    </div>
    <p><strong>Biological Rationale:</strong><br>
    1. <strong>Sporogenous tissue</strong> fills the centre of each microsporangium in a young anther.<br>
    2. Cells of sporogenous tissue differentiate into diploid <strong>pollen mother cells (PMCs)</strong>.<br>
    3. Each PMC undergoes meiosis to produce a cluster of four haploid microspores, the <strong>microspore tetrad</strong>.<br>
    4. As the anther matures and dehydrates, microspores dissociate into spherical <strong>pollen grains</strong>.<br>
    5. The generative cell of the pollen grain divides mitotically to give rise to two <strong>male gametes</strong>.</p>`,
    "2 Marks",
    [
      ["Accurate chronological sequence of all five stages", "1.5 Marks"],
      ["Brief biological rationale for cell transitions", "0.5 Mark"]
    ]
  ),

  // 1.4
  createQCard(
    "c12b-ch1-q4",
    "Q 1.4",
    "Exercise 1.4",
    `With a neat, labelled diagram, describe the parts of a typical angiosperm ovule (anatropous ovule).`,
    `<p><strong>Main Parts of an Anatropous Ovule:</strong></p>
    <ol style="line-height:1.8;">
      <li><strong>Funicle (Funiculus):</strong> The stalk by which the ovule is attached to the placenta of the ovary wall.</li>
      <li><strong>Hilum:</strong> The junction point where the body of the ovule fuses with the funicle.</li>
      <li><strong>Integuments:</strong> One or two protective multi-layered envelopes surrounding the nucellus, leaving a small pore at the apex.</li>
      <li><strong>Micropyle:</strong> A narrow apical pore where the integuments do not fuse, serving as the entry passage for the pollen tube during fertilisation.</li>
      <li><strong>Chalaza:</strong> The basal swollen region of the ovule opposite the micropyle, representing the origin of integuments.</li>
      <li><strong>Nucellus:</strong> The central mass of parenchymatous nutritive cells enclosed within the integuments, providing nourishment to the developing embryo sac.</li>
      <li><strong>Embryo Sac (Female Gametophyte):</strong> The 7-celled, 8-nucleate haploid structure embedded within the nucellus containing the egg apparatus, polar nuclei, and antipodals.</li>
    </ol>`,
    "3 Marks",
    [
      ["Labelled description of Funicle, Hilum, Integuments, Micropyle", "1.5 Marks"],
      ["Description of Chalaza, Nucellus, and Embryo Sac", "1.5 Marks"]
    ]
  ),

  // 1.5
  createQCard(
    "c12b-ch1-q5",
    "Q 1.5",
    "Exercise 1.5",
    `What is meant by monosporic development of female gametophyte?`,
    `<p><strong>Monosporic Development:</strong><br>
    • During megasporogenesis, the diploid megaspore mother cell (MMC) undergoes meiosis to produce a linear tetrad of four haploid megaspores.<br>
    • In the vast majority of angiosperms (Polygonum type), <strong>three megaspores situated at the micropylar end degenerate</strong> and get absorbed.<br>
    • Only <strong>one single megaspore (situated at the chalazal end)</strong> remains functional and enlarges.<br>
    • This single functional megaspore undergoes three sequential mitotic nuclear divisions to form the entire 7-celled, 8-nucleate female gametophyte (embryo sac).<br>
    Because the entire embryo sac develops from <strong>one single functional megaspore</strong>, this method of embryo sac formation is designated as <strong>monosporic development</strong>.</p>`,
    "2 Marks",
    [
      ["Explanation of degeneration of 3 micropylar megaspores", "1 Mark"],
      ["Development of entire embryo sac from single chalazal megaspore", "1 Mark"]
    ]
  ),

  // 1.6
  createQCard(
    "c12b-ch1-q6",
    "Q 1.6",
    "Exercise 1.6",
    `With a neat diagram explain the 7-celled, 8-nucleate nature of the female gametophyte (embryo sac) in angiosperms.`,
    `<p><strong>Development & Organization of Embryo Sac:</strong><br>
    The nucleus of the functional megaspore divides mitotically into two nuclei which move to opposite poles, forming a 2-nucleate embryo sac. Two further sequential mitotic divisions result in 4 nuclei at each pole (total 8 nuclei). These divisions are strictly <strong>free-nuclear</strong> (cell wall formation does not occur immediately).</p>

    <p><strong>Cellular Organization (7 Cells, 8 Nuclei):</strong></p>
    <ol style="line-height:1.8;">
      <li><strong>Egg Apparatus (3 Cells at Micropylar End):</strong> Consists of one central <strong>egg cell</strong> (female gamete) flanked by two <strong>synergids</strong>. Synergids possess characteristic cellular finger-like thickenings called the <strong>filiform apparatus</strong>, which guide the entry of the pollen tube.</li>
      <li><strong>Antipodal Cells (3 Cells at Chalazal End):</strong> Three vegetative cells situated at the chalazal pole, involved in absorbing nutrition from the nucellus before degenerating.</li>
      <li><strong>Central Cell (1 Large Cell):</strong> The largest cell occupying the center, containing <strong>two polar nuclei</strong> which fuse prior to fertilisation to form a diploid secondary nucleus ($2n$).</li>
    </ol>
    <p>Thus, while there are 8 nuclei in total, the two central polar nuclei reside within a single shared central cell, rendering the mature embryo sac <strong>7-celled and 8-nucleate</strong>.</p>`,
    "3 Marks",
    [
      ["Description of Egg apparatus (1 egg + 2 synergids with filiform apparatus)", "1 Mark"],
      ["Description of 3 antipodals and 1 large central cell with 2 polar nuclei", "1 Mark"],
      ["Explanation of free-nuclear mitoses leading to 7-celled, 8-nucleate state", "1 Mark"]
    ]
  ),

  // 1.7
  createQCard(
    "c12b-ch1-q7",
    "Q 1.7",
    "Exercise 1.7",
    `What are chasmogamous flowers? Can cross-pollination occur in cleistogamous flowers? Give reasons.`,
    `<p><strong>1. Chasmogamous Flowers:</strong><br>
    Chasmogamous flowers are open flowers with exposed anthers and stigmas, similar to flowers of typical angiosperms, permitting both cross-pollination (xenogamy) and self-pollination.</p>

    <p><strong>2. Can Cross-Pollination Occur in Cleistogamous Flowers?</strong><br>
    <strong>No, cross-pollination can never occur in cleistogamous flowers.</strong></p>

    <p><strong>Reasons:</strong><br>
    • Cleistogamous flowers remain permanently closed and <strong>never open at all</strong>, even at maturity (e.g. <em>Viola</em>, <em>Oxalis</em>, <em>Commelina</em>).<br>
    • The anthers and stigma lie in close physical proximity inside the closed bud.<br>
    • When the anthers dehisce, pollen grains inevitably fall directly onto the receptive stigma of the same flower.<br>
    • Because the floral envelope remains sealed, external cross-pollen carried by wind, water, or insects is physically blocked from reaching the stigma, ensuring <strong>obligate autogamy</strong> and assured seed-set even in the complete absence of pollinators.</p>`,
    "3 Marks",
    [
      ["Definition of chasmogamous flowers", "1 Mark"],
      ["Clear negative answer for cleistogamous flowers", "0.5 Mark"],
      ["Physiological & structural reasons (never opening, sealed envelope, obligate autogamy)", "1.5 Marks"]
    ]
  ),

  // 1.8
  createQCard(
    "c12b-ch1-q8",
    "Q 1.8",
    "Exercise 1.8",
    `Mention two strategies evolved by flowers to prevent self-pollination (outbreeding devices).`,
    `<p><strong>Outbreeding Devices in Angiosperms (Any two):</strong></p>
    <ol style="line-height:1.8;">
      <li><strong>Dichogamy (Non-synchronisation of Pollen Release and Stigma Receptivity):</strong><br>
      Pollen is released before the stigma becomes receptive (<strong>Protandry</strong>, e.g. Sunflower, Salvia), or the stigma matures and becomes receptive long before pollen is shed (<strong>Protogyny</strong>, e.g. <em>Aristolochia</em>, <em>Mirabilis</em>), preventing autogamy.</li>

      <li><strong>Heterostyly (Spatial Separation of Anthers and Stigma):</strong><br>
      Anthers and stigma are placed at different heights and spatial positions (e.g. <em>Primula</em>) so that pollen grains cannot physically land on the stigma of the same flower.</li>

      <li><strong>Self-Incompatibility (Genetic Mechanism):</strong><br>
      A genetic mechanism that prevents self-pollen (from the same flower or other flowers of the same plant) from fertilising the ovules by inhibiting pollen germination or pollen tube growth in the pistil (e.g. Tobacco, Potato).</li>
    </ol>`,
    "2 Marks",
    [
      ["First outbreeding device explained with botanical mechanism", "1 Mark"],
      ["Second outbreeding device explained with botanical mechanism", "1 Mark"]
    ]
  ),

  // 1.9
  createQCard(
    "c12b-ch1-q9",
    "Q 1.9",
    "Exercise 1.9",
    `What is self-incompatibility? Why does self-pollination not lead to seed formation in self-incompatible species?`,
    `<p><strong>1. Definition of Self-Incompatibility:</strong><br>
    Self-incompatibility is a genetically controlled pre-zygotic reproductive barrier in hermaphroditic plants that prevents self-pollen from fertilising ovules of the same flower or other flowers of the same individual plant.</p>

    <p><strong>2. Why Self-Pollination Fails to Produce Seeds:</strong><br>
    • It is governed by multi-allelic <strong>$S$-genes</strong> ($S_1, S_2, S_3, \\dots$).<br>
    • When a pollen grain carries an $S$-allele that matches either of the $S$-alleles present in the diploid tissue of the pistil (stigma and style), a biochemical recognition-rejection reaction is triggered.<br>
    • This incompatibility response blocks <strong>pollen germination on the stigma</strong> or causes <strong>callose plugging / bursting of the pollen tube</strong> in the transmission tissue of the style.<br>
    • Consequently, male gametes never reach the embryo sac, fertilisation fails to occur, and no seeds are formed.</p>`,
    "2 Marks",
    [
      ["Definition of self-incompatibility", "1 Mark"],
      ["Biochemical/genetic mechanism (pollen tube inhibition by matching $S$-alleles)", "1 Mark"]
    ]
  ),

  // 1.10
  createQCard(
    "c12b-ch1-q10",
    "Q 1.10",
    "Exercise 1.10",
    `What is bagging technique? How is it useful in a plant breeding programme?`,
    `<p><strong>1. Bagging Technique:</strong><br>
    Bagging is an artificial hybridisation technique wherein emasculated (or female) flowers are covered with a protective perforated bag made of butter paper or parchment paper before their stigmas become receptive.</p>

    <p><strong>2. Utility in Plant Breeding Programmes:</strong><br>
    • <strong>Prevents Unwanted Contamination:</strong> It protects the receptive stigma from contamination by undesirable, airborne foreign pollen grains or insect vectors.<br>
    • <strong>Controlled Cross-Pollination:</strong> When the stigma attains receptivity, the bag is temporarily opened, mature viable pollen grains collected from the chosen superior male parent are dusted onto the stigma, and the flower is promptly rebagged until fruits mature.<br>
    • This guarantees that seeds produced possess the desired combination of agronomically superior parental traits (high yield, disease resistance).</p>`,
    "2 Marks",
    [
      ["Definition of bagging with butter paper", "1 Mark"],
      ["Significance in preventing contamination and ensuring controlled hybridisation", "1 Mark"]
    ]
  ),

  // 1.11
  createQCard(
    "c12b-ch1-q11",
    "Q 1.11",
    "Exercise 1.11",
    `What is triple fusion? Where and how does it take place? Name the nuclei involved in triple fusion.`,
    `<p><strong>1. What is Triple Fusion?</strong><br>
    Triple fusion is the unique fusion of three haploid nuclei: one haploid male gamete ($n$) fusing with the two haploid polar nuclei (or diploid secondary nucleus, $2n$) in the central cell of the embryo sac to form the triploid <strong>Primary Endosperm Nucleus (PEN, $3n$)</strong>.</p>

    <p><strong>2. Where and How it Takes Place:</strong><br>
    • <strong>Location:</strong> Inside the <strong>central cell</strong> of the female gametophyte (embryo sac) within the ovule.<br>
    • <strong>Process:</strong> The pollen tube enters one of the synergids through the filiform apparatus and discharges both male gametes into the cytoplasm of the synergid. While one male gamete moves towards the egg cell for syngamy, the second male gamete migrates into the central cell and fuses with the two polar nuclei.</p>

    <p><strong>3. Nuclei Involved:</strong><br>
    Three distinct nuclei are involved:
    1. One haploid nucleus of the second <strong>male gamete</strong> ($n$).<br>
    2. Two haploid <strong>polar nuclei</strong> ($n + n$) of the central cell.</p>`,
    "3 Marks",
    [
      ["Definition of triple fusion and formation of triploid PEN ($3n$)", "1 Mark"],
      ["Location in central cell and mechanism via second male gamete", "1 Mark"],
      ["Specific naming of three participating nuclei", "1 Mark"]
    ]
  ),

  // 1.12
  createQCard(
    "c12b-ch1-q12",
    "Q 1.12",
    "Exercise 1.12",
    `Why do you think the zygote is dormant for some time in a fertilised ovule?`,
    `<p><strong>Biological Significance of Zygotic Dormancy:</strong><br>
    • In angiosperms, the diploid zygote undergoes a period of rest and does not begin cell division immediately after syngamy.<br>
    • <strong>Endosperm Development Precedes Embryo Development:</strong> The zygote remains dormant until a sufficient amount of nutritive <strong>endosperm tissue</strong> has been formed by the rapid divisions of the primary endosperm cell (PEC).<br>
    • <strong>Adaptation for Survival:</strong> This is an evolutionary survival adaptation to ensure that an assured nutritional supply is readily available to support the energetic and metabolic demands of the developing embryo, preventing premature embryonic starvation or abortion.</p>`,
    "2 Marks",
    [
      ["Fact that endosperm development precedes embryo development", "1 Mark"],
      ["Evolutionary adaptation to guarantee nutritional supply", "1 Mark"]
    ]
  ),

  // 1.13
  createQCard(
    "c12b-ch1-q13",
    "Q 1.13",
    "Exercise 1.13",
    `Differentiate between:<br>
    <strong>(a)</strong> hypocotyl and epicotyl;<br>
    <strong>(b)</strong> coleoptile and coleorhiza;<br>
    <strong>(c)</strong> integument and testa;<br>
    <strong>(d)</strong> perisperm and pericarp.`,
    `<p><strong>(a) Hypocotyl vs Epicotyl:</strong><br>
    • <strong>Hypocotyl:</strong> The cylindrical portion of the embryonal axis below the level of cotyledons that terminates at its lower end in the radicle / root tip.<br>
    • <strong>Epicotyl:</strong> The portion of the embryonal axis above the level of cotyledons that terminates in the plumule / shoot apex.</p>

    <p><strong>(b) Coleoptile vs Coleorhiza:</strong><br>
    • <strong>Coleoptile:</strong> A conical protective foliar sheath enclosing the plumule and epicotyl in monocot seeds (grasses), emerging above ground.<br>
    • <strong>Coleorhiza:</strong> An undifferentiated protective sheath enclosing the radicle and root cap in monocot seeds, remaining underground.</p>

    <p><strong>(c) Integument vs Testa:</strong><br>
    • <strong>Integument:</strong> The pre-fertilisation protective covering layers of an ovule (living diploid maternal tissue).<br>
    • <strong>Testa:</strong> The post-fertilisation, dehydrated, tough outer protective seed coat derived specifically from the outer integument.</p>

    <p><strong>(d) Perisperm vs Pericarp:</strong><br>
    • <strong>Perisperm:</strong> The persistent, non-consumed residual nucellus present in certain seeds such as Black Pepper and Beet.<br>
    • <strong>Pericarp:</strong> The protective wall of the fruit developed directly from the wall of the ovary after fertilisation.</p>`,
    "4 Marks",
    [
      ["Accurate differentiation for (a) Hypocotyl vs Epicotyl", "1 Mark"],
      ["Accurate differentiation for (b) Coleoptile vs Coleorhiza", "1 Mark"],
      ["Accurate differentiation for (c) Integument vs Testa", "1 Mark"],
      ["Accurate differentiation for (d) Perisperm vs Pericarp", "1 Mark"]
    ]
  ),

  // 1.14
  createQCard(
    "c12b-ch1-q14",
    "Q 1.14",
    "Exercise 1.14",
    `Why is apple called a false fruit? Which part(s) of the flower forms the fruit?`,
    `<p><strong>1. Why Apple is a False Fruit (Pseudocarp):</strong><br>
    • In botanical terms, a <strong>true fruit</strong> develops exclusively from the mature, fertilised ovary of a flower without the participation of any other floral whorl.<br>
    • In an apple, the edible fleshy part does not develop from the ovary wall. Instead, the <strong>thalamus (receptacle)</strong> enlarges and becomes fleshy, surrounding the central core that contains the true ovary and seeds.<br>
    • Because non-ovarian floral tissue (the thalamus) forms the bulk of the fruit, apple is classified as a <strong>false fruit (thalamic fruit / pseudocarp)</strong> (along with strawberry and cashew).</p>

    <p><strong>2. Parts Forming the Fruit:</strong><br>
    • In a true fruit: The <strong>ovary wall</strong> forms the pericarp (epicarp, mesocarp, endocarp).<br>
    • In an apple: The enlarged fleshy <strong>thalamus</strong> forms the edible flesh, while the central papery core is derived from the <strong>ovary</strong>.</p>`,
    "2 Marks",
    [
      ["Explanation of false fruit due to thalamus contribution", "1 Mark"],
      ["Identification of thalamus as edible part and ovary as core", "1 Mark"]
    ]
  ),

  // 1.15
  createQCard(
    "c12b-ch1-q15",
    "Q 1.15",
    "Exercise 1.15",
    `What is meant by emasculation? When and why does a plant breeder employ this technique?`,
    `<p><strong>1. Definition of Emasculation:</strong><br>
    Emasculation is the surgical removal of anthers from a bisexual flower bud using a pair of sterile forceps before the anthers dehisce.</p>

    <p><strong>2. When is it Employed?</strong><br>
    It is performed during the early <strong>bud stage</strong>, well before the anthers mature and release pollen grains, and before the stigma attains receptivity.</p>

    <p><strong>3. Why is it Employed by Plant Breeders?</strong><br>
    • In bisexual flowers, self-pollination (autogamy) occurs naturally upon anther dehiscence.<br>
    • Emasculation prevents self-pollination, ensuring that the flower can be pollinated exclusively with desired pollen grains collected from a selected superior male parent.<br>
    (Note: If the female parent bears unisexual pistillate flowers, emasculation is not required).</p>`,
    "2 Marks",
    [
      ["Definition and timing (bud stage before dehiscence)", "1 Mark"],
      ["Purpose in preventing autogamy during controlled hybridisation", "1 Mark"]
    ]
  ),

  // 1.16
  createQCard(
    "c12b-ch1-q16",
    "Q 1.16",
    "Exercise 1.16",
    `If one can induce parthenocarpy through the application of growth substances, which fruits would you select to induce parthenocarpy and why?`,
    `<p><strong>1. Selected Fruits for Induced Parthenocarpy:</strong><br>
    Parthenocarpy (production of seedless fruits without fertilisation) would be induced in fruits where seeds are commercially undesirable, annoying, or unpalatable, such as:<br>
    • <strong>Watermelon, Grapes, Oranges, Lemon, Guava, Tomato, Papaya, and Banana.</strong></p>

    <p><strong>2. Justification (Why):</strong><br>
    • In these fruits, seeds reduce consumer palatability, processing ease, and commercial market value. Seedlessness enhances edible pulp volume and juice extraction efficiency.<br>
    • Conversely, parthenocarpy would <strong>never</strong> be induced in crops where the <em>seed itself is the economic product</em> (e.g. wheat, rice, maize, pulses, almonds, walnuts, mustard), as parthenocarpy would yield sterile, seedless empty shells, destroying the harvest.</p>`,
    "2 Marks",
    [
      ["Selection of pulpy/juicy fruits (Watermelon, Grapes, Oranges)", "1 Mark"],
      ["Justification: Enhanced palatability vs disaster if applied to grain/seed crops", "1 Mark"]
    ]
  ),

  // 1.17
  createQCard(
    "c12b-ch1-q17",
    "Q 1.17",
    "Exercise 1.17",
    `Explain the role of tapetum in the formation of pollen-grain wall.`,
    `<p><strong>Role of Tapetum in Pollen Wall Synthesis:</strong><br>
    The tapetum is the innermost nourishing cell layer of the microsporangial wall, characterised by dense cytoplasm and polyploid/multinucleate cells.</p>

    <ol style="line-height:1.8;">
      <li><strong>Secretion of Sporopollenin Precursors:</strong> Tapetal cells produce <em>Ubisch bodies</em> (pro-orbicules) that secrete <strong>sporopollenin</strong>, the most biologically resistant organic polymer known, forming the sculptural, indestructible outer wall layer called the <strong>exine</strong>.</li>
      <li><strong>Pollenkitt Synthesis:</strong> In insect-pollinated (entomophilous) plants, the tapetum synthesises and deposits a sticky, oily, carotenoid-rich coat called <strong>pollenkitt</strong> on the pollen surface, aiding adhesion to insect bodies and offering UV protection.</li>
      <li><strong>Enzyme & Protein Secretion:</strong> It secretes the enzyme <em>callase</em> to dissolve the callose wall of microspore tetrads, liberating individual microspores, and synthesises physiological <strong>compatibility proteins</strong> housed in exine cavities for pollen-stigma recognition.</li>
    </ol>`,
    "3 Marks",
    [
      ["Secretion of sporopollenin forming the exine layer", "1 Mark"],
      ["Synthesis of pollenkitt for insect pollination", "1 Mark"],
      ["Secretion of callase and compatibility recognition proteins", "1 Mark"]
    ]
  ),

  // 1.18
  createQCard(
    "c12b-ch1-q18",
    "Q 1.18",
    "Exercise 1.18",
    `What is apomixis and what is its importance in agriculture?`,
    `<p><strong>1. Definition of Apomixis:</strong><br>
    Apomixis is a form of asexual reproduction that <strong>mimics sexual reproduction</strong> by producing seeds without fertilisation (syngamy) and without meiosis (e.g. in species of <em>Asteraceae</em> and grasses).<br>
    The embryos develop directly from diploid nucellar cells (adventive embryony) or from an unreduced diploid egg cell.</p>

    <p><strong>2. Importance in Modern Agriculture:</strong><br>
    • <strong>Fixation of Hybrid Vigour:</strong> Hybrid seeds offer tremendously increased crop productivity, but hybrid vigour segregates and is lost in subsequent generations if farmers save and replant seeds derived from sexual reproduction, forcing farmers to buy costly hybrid seeds every single year.<br>
    • <strong>Elimination of Annual Hybrid Seed Costs:</strong> If hybrid crops are genetically engineered with apomictic traits, the seeds collected by farmers will breed completely true-to-type without genetic segregation of characters.<br>
    • Farmers can reuse their own harvest seeds indefinitely year after year, revolutionising agricultural economics and global food security.</p>`,
    "3 Marks",
    [
      ["Accurate definition of apomixis as asexual reproduction mimicking sexual reproduction", "1.5 Marks"],
      ["Agricultural significance in preserving hybrid vigour and reducing seed costs", "1.5 Marks"]
    ]
  )
];

saveChapter(chNum, chTitle, svgDiagram, "Exercises 1.1 to 1.18", questions, nextChTitle);
