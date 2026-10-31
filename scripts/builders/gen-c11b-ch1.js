// scripts/builders/gen-c11b-ch1.js
// Complete, verbatim NCERT generator for Class 11 Biology Chapter 1: The Living World (All 10 Questions)
const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '..', '..', 'chapters-c11b');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function createQCard(id, num, exercise, qText, answerHtml, marks, rubricRows) {
  const rubricHtml = rubricRows.map(r => `
          <div class="marking-row"><span class="marking-key">${r[0]}</span><span class="marking-marks">${r[1]}</span></div>`).join('');

  return `
  <!-- ${id} (${exercise}) -->
  <div class="q-card" id="${id}">
    <div class="q-head" onclick="toggleQ('${id}')">
      <div class="q-num">${num}</div>
      <div class="q-text">
        <span style="display:inline-block; font-size:0.75rem; font-weight:800; text-transform:uppercase; background:#ecfdf5; color:#059669; padding:2px 8px; border-radius:4px; margin-bottom:4px;">${exercise}</span><br>
        ${qText}
      </div>
      <div class="q-marks">[${marks}]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Step-by-Step Solution</div>
        <div class="answer-text">
          ${answerHtml}
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme Rubric (Session 2026–27)</div>
          ${rubricHtml}
        </div>
      </div>
    </div>
  </div>`;
}

const questions = [];

// ============================================================================
// CHAPTER 1: THE LIVING WORLD (Questions 1.1 to 1.10)
// ============================================================================

// Question 1
questions.push(createQCard(
  'c11b-ch1-q1', 'Question 1', 'NCERT Exercise',
  'Why are living organisms classified?',
  `<div class="step">
    <strong>Biological Significance of Biological Classification:</strong><br>
    The Earth is inhabited by an immense diversity of living organisms (approximately 1.7 to 1.8 million species described so far, termed global biodiversity). Classification is the scientific arrangement of organisms into distinct groups and categories based on their observable similarities, differences, and evolutionary affinities. Living organisms are classified for the following essential scientific reasons:<br><br>
    <strong>1. Ease of Study and Systematic Organization:</strong><br>
    It is impossible to study every living organism individually. By classifying organisms into categories (such as kingdoms, phyla, and classes), the study of one or two representative members of a group provides a reliable general understanding of the characteristics of the entire group.<br><br>
    <strong>2. Universal Identification and Prevention of Confusion:</strong><br>
    Living organisms possess diverse vernacular (local) names in different geographic regions and languages. Classification establishes a standardized global framework (Binomial Nomenclature), enabling scientists worldwide to refer unambiguously to the same organism by a unique, universally accepted scientific name.<br><br>
    <strong>3. Understanding Evolutionary and Phylogenetic Relationships:</strong><br>
    Biological classification reflects the evolutionary trajectory (phylogeny) of organisms, demonstrating how complex multi-cellular forms originated and diversified from simpler ancestral unicellular forms over geological time.<br><br>
    <strong>4. Discovery and Placement of New Organisms:</strong><br>
    Whenever a newly discovered organism is identified, classification provides an exact taxonomic hierarchy and framework where it can be properly categorized according to its morphological, physiological, anatomical, and genetic traits.<br><br>
    <strong>5. Applied Biological Sciences:</strong><br>
    Accurate taxonomic classification is indispensable in agriculture, forestry, industry, biotechnology, pharmacognosy, and ecological conservation programs.
  </div>`,
  '3 Marks',
  [
    ['Mention of vast biodiversity (1.7–1.8 million species) & impossibility of individual study', '1 Mark'],
    ['Facilitates standardized identification and reveals phylogenetic/evolutionary links', '1 Mark'],
    ['Enables systematic placement of new species and practical applications in agriculture/biotech', '1 Mark']
  ]
));

// Question 2
questions.push(createQCard(
  'c11b-ch1-q2', 'Question 2', 'NCERT Exercise',
  'Why are the classification systems changing every now and then?',
  `<div class="step">
    <strong>Dynamic Evolution of Biological Classification Systems:</strong><br>
    Classification systems in biology are never static; they undergo continuous refinement and modification due to the progressive expansion of scientific knowledge, technological breakthroughs, and deeper insights into evolutionary biology:<br><br>
    <strong>1. Historical Shift from Superficial to Natural Criteria:</strong><br>
    Early classification systems (e.g., Aristotle, Theophrastus, and Linnaeus) were largely <em>Artificial Systems</em> based merely on superficial morphological habits, habitats, and economic utility (e.g., classifying plants into herbs, shrubs, trees; or based solely on stamen numbers). As scientific inquiry advanced, <em>Natural Systems</em> (e.g., Bentham and Hooker) emerged, incorporating internal features such as anatomy, histology, embryology, and phytochemistry.<br><br>
    <strong>2. Advancement of Microscopy and Analytical Tools:</strong><br>
    With the advent of high-resolution light microscopy and electron microscopy (TEM and SEM), cellular ultrastructure—such as distinguishing prokaryotes from eukaryotes, cellular organelles, and specialized wall compositions (e.g., peptidoglycan, chitin, cellulose)—became clearly observable. This necessitated the transition from the Two-Kingdom system to Ernst Haeckel’s Three-Kingdom, Copeland’s Four-Kingdom, and R.H. Whittaker’s Five-Kingdom system (1969).<br><br>
    <strong>3. Integration of Molecular Biology and Genetic Phylogeny:</strong><br>
    Modern taxonomy heavily relies on molecular data, including DNA and RNA sequencing, 16S ribosomal RNA analysis (Carl Woese’s Three-Domain system), amino acid sequencing of conserved proteins (such as cytochrome c), and karyotype analyses. These molecular markers often reveal true genealogical affinities that diverge from deceptive phenotypic or convergent morphological traits.<br><br>
    <strong>4. Discovery of Novel Taxa:</strong><br>
    Continuous exploration of extreme habitats (deep sea hydrothermal vents, acidic hot springs, Antarctic ice sheets) unearths novel taxa (e.g., Archaebacteria, extremophiles) that challenge existing taxonomic boundaries, requiring the creation of new categories and taxonomic adjustments.
  </div>`,
  '3 Marks',
  [
    ['Evolution from artificial (superficial traits) to natural and phylogenetic systems', '1 Mark'],
    ['Role of microscopy, biochemical analysis, and organelle ultrastructure discovery', '1 Mark'],
    ['Integration of molecular genetics (DNA/RNA/16S rRNA sequencing) and discovery of novel taxa', '1 Mark']
  ]
));

// Question 3
questions.push(createQCard(
  'c11b-ch1-q3', 'Question 3', 'NCERT Exercise',
  'What different criteria would you choose to classify people that you meet often?',
  `<div class="step">
    <strong>Classification Criteria for Everyday Human Social Interactions:</strong><br>
    In scientific taxonomy, criteria are chosen based on the objective of classification. Similarly, to classify people encountered regularly, both biological and sociological criteria can be utilized depending on the operational context:<br><br>
    <strong>1. Age and Developmental Phase:</strong><br>
    • Children / Toddlers (0–12 years)<br>
    • Adolescents / Teenagers (13–19 years)<br>
    • Adults / Working Professionals (20–59 years)<br>
    • Senior Citizens (60+ years)<br><br>
    <strong>2. Nature of Social / Functional Relationship:</strong><br>
    • Family members and immediate relatives<br>
    • Close personal friends and peer group<br>
    • Teachers, mentors, and academic instructors<br>
    • Classmates, study partners, and school peers<br>
    • Professional service providers (shopkeepers, bus drivers, doctors)<br>
    • Acquaintances / Strangers<br><br>
    <strong>3. Academic / Professional Activity Domain:</strong><br>
    • Science stream, Commerce stream, Humanities/Arts stream<br>
    • Co-curricular activities: Sports/Athletics, Music/Arts, Debate/Literature, Coding/Robotics<br><br>
    <strong>4. Geographic / Linguistic Background:</strong><br>
    • Neighborhood / Local community residents<br>
    • Regional origin and mother tongue (Hindi, English, Tamil, Bengali, Punjabi, etc.)<br><br>
    <strong>Scientific Significance:</strong><br>
    This demonstrates that classification is inherently hierarchical and purposeful: no single criterion suffices for all situations, and categorized groups facilitate organized social communication, collaboration, and systematic understanding.
  </div>`,
  '3 Marks',
  [
    ['Categorisation by age groups and developmental milestones', '1 Mark'],
    ['Categorisation by functional relationship and social intimacy (family, peers, instructors)', '1 Mark'],
    ['Categorisation by professional/academic domain and geographic/linguistic factors', '1 Mark']
  ]
));

// Question 4
questions.push(createQCard(
  'c11b-ch1-q4', 'Question 4', 'NCERT Exercise',
  'What do we learn from identification of individuals and populations?',
  `<div class="step">
    <strong>Key Learnings from the Scientific Identification of Individuals and Populations:</strong><br>
    Identification involves recognizing an unknown organism and assigning it to an already established taxonomic rank by comparing its diagnostic traits with known species. The biological insights gained include:<br><br>
    <strong>A. Learnings from Individual Identification:</strong><br>
    1. <em>Morphological &amp; Anatomical Characteristics:</em> Delineates structural features such as body symmetry, presence of notochord, leaf venation, floral formula, and reproductive organs.<br>
    2. <em>Exact Taxonomic Position:</em> Places the organism precisely into its correct domain, kingdom, phylum/division, class, order, family, genus, and species.<br>
    3. <em>Physiological &amp; Ecological Role:</em> Identifies nutritional mode (autotroph, heterotroph, saprophyte), ecological niche, and environmental adaptations.<br>
    4. <em>Economic &amp; Medical Utility:</em> Discovers potential medicinal value, agricultural utility, toxicity, or pathogenicity.<br><br>
    <strong>B. Learnings from Population Identification:</strong><br>
    1. <em>Intraspecific Genetic Variation:</em> Reveals morphological polymorphism, genetic diversity, and phenotypic plasticity within the same species across varying geographical habitats.<br>
    2. <em>Reproductive Dynamics &amp; Gene Flow:</em> Highlights interbreeding capabilities, isolating mechanisms, allele frequencies, and natural selection pressures.<br>
    3. <em>Demographic Structure:</em> Provides data on population size, age distribution, sex ratio, birth/death rates, and carrying capacity.<br>
    4. <em>Ecological Interactions &amp; Biogeography:</em> Maps geographic distribution, habitat preference, symbiotic associations, predator-prey dynamics, and endangered/vulnerable conservation status.
  </div>`,
  '3 Marks',
  [
    ['Learnings at individual level: anatomical traits, exact taxonomic rank, and economic utility', '1.5 Marks'],
    ['Learnings at population level: genetic diversity, interbreeding, allele frequency, and conservation status', '1.5 Marks']
  ]
));

// Question 5
questions.push(createQCard(
  'c11b-ch1-q5', 'Question 5', 'NCERT Exercise',
  'Given below is the scientific name of Mango. Identify the correctly written name:<br><em>Mangifera Indica</em><br><em>Mangifera indica</em>',
  `<div class="step">
    <strong>Correct Identification &amp; Botanical Nomenclature Analysis:</strong><br><br>
    The correctly written scientific name is: <br>
    $$\\mathbf{\\textit{Mangifera indica}}$$
    (Full author citation: $\\textit{Mangifera indica}\\text{ Linn.}$, where Linn. indicates that the species was first described by Carolus Linnaeus).<br><br>
    <strong>Universal Rules of Binomial Nomenclature Justification:</strong><br>
    1. <strong>Two-Part Scientific Name:</strong> Each biological name consists of two Latinized words—the first word represents the <em>Genus</em> (generic name) and the second word represents the <em>specific epithet</em>.<br>
    2. <strong>Capitalization Rules:</strong> The generic name must always start with a <strong>Capital letter</strong> (e.g., <em>Mangifera</em>), whereas the specific epithet must strictly begin with a <strong>small letter</strong> (e.g., <em>indica</em>). Therefore, <em>Mangifera Indica</em> with a capital 'I' violates the International Code of Botanical Nomenclature (ICBN) and is invalid.<br>
    3. <strong>Typographical Formatting:</strong> When printed, biological names must be rendered in <em>Italics</em> to indicate their Latin origin. When handwritten, the generic name and specific epithet must be underlined separately (<u>Mangifera</u> <u>indica</u>).
  </div>`,
  '2 Marks',
  [
    ['Correct selection of \\textit{Mangifera indica} (small letter for specific epithet)', '1 Mark'],
    ['Citation of ICBN rules regarding capitalization of genus and lowercase specific epithet', '1 Mark']
  ]
));

// Question 6
questions.push(createQCard(
  'c11b-ch1-q6', 'Question 6', 'NCERT Exercise',
  'Define a taxon. Give some examples of taxa at different hierarchical levels.',
  `<div class="step">
    <strong>Definition of Taxon (Plural: Taxa):</strong><br>
    A <strong>taxon</strong> is a scientific term used to designate any concrete unit or taxonomic group of organisms of any rank in a biological classification system. It represents real biological entities assigned to a recognized taxonomic category based on shared diagnostic characteristics.<br><br>
    <em>Distinction between Category and Taxon:</em> A 'category' is an abstract hierarchical rank (e.g., Kingdom, Class, Order, Genus), whereas a 'taxon' is the actual group of living organisms occupying that category (e.g., Plantae, Mammalia, Carnivora, <em>Homo</em>).<br><br>
    <strong>Examples of Taxa at Different Hierarchical Levels:</strong><br>
    <div style="overflow-x:auto; margin:14px 0;">
      <table style="width:100%; border-collapse:collapse; font-size:0.88rem; text-align:left;">
        <thead>
          <tr style="background:#ecfdf5; border-bottom:2px solid #059669;">
            <th style="padding:8px 12px; color:#065f46;">Hierarchical Category (Rank)</th>
            <th style="padding:8px 12px; color:#065f46;">Example Taxon (Plant Domain)</th>
            <th style="padding:8px 12px; color:#065f46;">Example Taxon (Animal Domain)</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">Kingdom</td>
            <td style="padding:8px 12px;"><em>Plantae</em></td>
            <td style="padding:8px 12px;"><em>Animalia</em></td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0; background:#f8fafc;">
            <td style="padding:8px 12px; font-weight:700;">Division / Phylum</td>
            <td style="padding:8px 12px;"><em>Angiospermae</em></td>
            <td style="padding:8px 12px;"><em>Chordata</em> / <em>Arthropoda</em></td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">Class</td>
            <td style="padding:8px 12px;"><em>Dicotyledonae</em> / <em>Monocotyledonae</em></td>
            <td style="padding:8px 12px;"><em>Mammalia</em> / <em>Insecta</em></td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0; background:#f8fafc;">
            <td style="padding:8px 12px; font-weight:700;">Order</td>
            <td style="padding:8px 12px;"><em>Polymoniales</em> / <em>Sapindales</em></td>
            <td style="padding:8px 12px;"><em>Carnivora</em> / <em>Primata</em></td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">Family</td>
            <td style="padding:8px 12px;"><em>Solanaceae</em> / <em>Anacardiaceae</em></td>
            <td style="padding:8px 12px;"><em>Felidae</em> / <em>Hominidae</em></td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0; background:#f8fafc;">
            <td style="padding:8px 12px; font-weight:700;">Genus</td>
            <td style="padding:8px 12px;"><em>Solanum</em> / <em>Mangifera</em></td>
            <td style="padding:8px 12px;"><em>Panthera</em> / <em>Homo</em></td>
          </tr>
          <tr>
            <td style="padding:8px 12px; font-weight:700;">Species</td>
            <td style="padding:8px 12px;"><em>Solanum tuberosum</em> (Potato)</td>
            <td style="padding:8px 12px;"><em>Panthera leo</em> (Lion) / <em>Homo sapiens</em></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>`,
  '3 Marks',
  [
    ['Clear scientific definition of a taxon as a concrete biological unit at any rank', '1 Mark'],
    ['Distinction between abstract hierarchical rank (category) and real organism group (taxon)', '0.5 Mark'],
    ['Multiple correct examples of taxa across distinct ranks (Kingdom, Class, Genus, Species)', '1.5 Marks']
  ]
));

// Question 7
questions.push(createQCard(
  'c11b-ch1-q7', 'Question 7', 'NCERT Exercise',
  'Can you identify the correct sequence of taxonomical categories?<br>(a) Species &longrightarrow; Order &longrightarrow; Phylum &longrightarrow; Kingdom<br>(b) Genus &longrightarrow; Species &longrightarrow; Order &longrightarrow; Kingdom<br>(c) Species &longrightarrow; Genus &longrightarrow; Order &longrightarrow; Phylum',
  `<div class="step">
    <strong>Evaluation of Taxonomic Sequences:</strong><br><br>
    The standard ascending taxonomic hierarchy established by Carolus Linnaeus and modern ICBN/ICZN codes is:<br>
    $$\\mathbf{\\text{Species} \\longrightarrow \\text{Genus} \\longrightarrow \\text{Family} \\longrightarrow \\text{Order} \\longrightarrow \\text{Class} \\longrightarrow \\text{Phylum (or Division)} \\longrightarrow \\text{Kingdom}}$$<br>
    Analyzing the given options:<br>
    • <strong>Sequence (a):</strong> Species &longrightarrow; Order &longrightarrow; Phylum &longrightarrow; Kingdom<br>
    This sequence is technically in the correct ascending order of hierarchy (Species is lower than Order, Order is lower than Phylum, and Phylum is lower than Kingdom), but intermediate categories (Genus, Family, Class) are omitted.<br><br>
    • <strong>Sequence (b):</strong> Genus &longrightarrow; Species &longrightarrow; Order &longrightarrow; Kingdom<br>
    This sequence is <strong>incorrect</strong> because Genus is placed before Species; in an ascending hierarchy, Species must precede Genus.<br><br>
    • <strong>Sequence (c):</strong> Species &longrightarrow; Genus &longrightarrow; Order &longrightarrow; Phylum<br>
    This sequence correctly reflects ascending taxonomic ranks (Species &longrightarrow; Genus, then jumping through Family to Order, then Class to Phylum).<br><br>
    $$\\mathbf{\\text{Conclusion: Both (a) and (c) represent correct ascending hierarchical orders, with (c) being the most standard contiguous progression.}}$$
  </div>`,
  '2 Marks',
  [
    ['Identification of (c) and (a) as valid ascending sequences and rejection of (b)', '1 Mark'],
    ['Complete ascending hierarchy definition: Species → Genus → Family → Order → Class → Phylum → Kingdom', '1 Mark']
  ]
));

// Question 8
questions.push(createQCard(
  'c11b-ch1-q8', 'Question 8', 'NCERT Exercise',
  'Try to collect all the currently accepted meanings for the word \'species\'. Discuss with your teacher the meaning of species in case of higher plants and animals on one hand, and bacteria on the other hand.',
  `<div class="step">
    <strong>1. Accepted Scientific Concepts and Meanings of the Term 'Species':</strong><br>
    • <strong>Biological Species Concept (Ernst Mayr, 1942):</strong> A species is a group of interbreeding or potentially interbreeding natural populations that are reproductively isolated from other such groups, producing viable and fertile offspring.<br>
    • <strong>Morphological Species Concept:</strong> A group of individuals that share distinct, consistent structural and morphological characteristics distinguishing them from others.<br>
    • <strong>Phylogenetic / Evolutionary Species Concept (Simpson &amp; Cracraft):</strong> An irreducible lineage of organisms that maintains its identity from other lineages and has an independent evolutionary trajectory.<br>
    • <strong>Genetic / Molecular Species Concept:</strong> A cluster of organisms possessing a high degree of genetic identity and similarity across conserved genomic regions (e.g., DNA-DNA hybridization &gt; 70% or 16S rRNA gene similarity &gt; 97%).<br><br>

    <strong>2. Comparison: Higher Plants and Animals vs. Bacteria (Prokaryotes):</strong><br>
    <div style="overflow-x:auto; margin:12px 0;">
      <table style="width:100%; border-collapse:collapse; font-size:0.88rem;">
        <thead>
          <tr style="background:#ecfdf5; border-bottom:2px solid #059669;">
            <th style="padding:8px 12px; color:#065f46;">Parameter</th>
            <th style="padding:8px 12px; color:#065f46;">Higher Plants and Animals (Eukaryotes)</th>
            <th style="padding:8px 12px; color:#065f46;">Bacteria (Prokaryotes)</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">Reproduction Mode</td>
            <td style="padding:8px 12px;">Predominantly sexual reproduction with gametogenesis, syngamy, and meiosis.</td>
            <td style="padding:8px 12px;">Asexual reproduction via binary fission; lack true sexual reproduction.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0; background:#f8fafc;">
            <td style="padding:8px 12px; font-weight:700;">Applicability of Biological Species Concept</td>
            <td style="padding:8px 12px;"><strong>Strictly Applicable:</strong> Reproductive isolation reliably demarcates distinct species boundaries.</td>
            <td style="padding:8px 12px;"><strong>Not Applicable:</strong> Because bacteria do not undergo sexual reproduction and natural interbreeding.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">Gene Transfer</td>
            <td style="padding:8px 12px;">Strict vertical gene transfer from parents to offspring.</td>
            <td style="padding:8px 12px;">Extensive Horizontal Gene Transfer (HGT) via transformation, conjugation, and transduction across diverse strains.</td>
          </tr>
          <tr>
            <td style="padding:8px 12px; font-weight:700;">Primary Delineation Criterion</td>
            <td style="padding:8px 12px;">Morphology, reproductive compatibility, karyology, and anatomy.</td>
            <td style="padding:8px 12px;">16S rRNA gene sequencing, whole genome average nucleotide identity (ANI &gt; 95–96%), and biochemical profiling.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>`,
  '4 Marks',
  [
    ['Explanation of Biological Species Concept (Ernst Mayr: reproductive isolation and interbreeding)', '1 Mark'],
    ['Description of Morphological and Phylogenetic/Molecular concepts', '1 Mark'],
    ['Detailed contrast: higher organisms rely on sexual reproduction and reproductive isolation', '1 Mark'],
    ['Detailed contrast: bacteria lack sexual reproduction, exhibit HGT, and are classified by 16S rRNA / genomics', '1 Mark']
  ]
));

// Question 9
questions.push(createQCard(
  'c11b-ch1-q9', 'Question 9', 'NCERT Exercise',
  'Define and understand the following terms:<br>(i) Phylum<br>(ii) Class<br>(iii) Family<br>(iv) Order<br>(v) Genus',
  `<div class="step">
    <strong>Scientific Definitions of Taxonomic Categories:</strong><br><br>
    <strong>(i) Phylum (Division in Plants):</strong><br>
    A primary taxonomic category above Class and below Kingdom. It comprises a group of related classes sharing major fundamental structural and architectural body plans.<br>
    • <em>Animal Example:</em> Phylum <strong>Chordata</strong> includes classes Mammalia, Aves, Reptilia, Amphibia, and Pisces due to common diagnostic features—presence of notochord, dorsal hollow nerve cord, and paired pharyngeal gill slits.<br>
    • <em>Plant Example:</em> Division <strong>Angiospermae</strong>.<br><br>

    <strong>(ii) Class:</strong><br>
    A major taxonomic category comprising one or more related orders having a number of common diagnostic traits.<br>
    • <em>Animal Example:</em> Class <strong>Mammalia</strong> includes Order Primata (monkeys, apes, humans) and Order Carnivora (cats, dogs, tigers), all characterized by mammary glands, hair on skin, and three middle ear ossicles.<br>
    • <em>Plant Example:</em> Class <strong>Dicotyledonae</strong> includes orders Sapindales and Polymoniales.<br><br>

    <strong>(iii) Order:</strong><br>
    An assemblage of related families that exhibit a few similar, distinctive floral or morphological characteristics.<br>
    • <em>Plant Example:</em> Order <strong>Polymoniales</strong> includes plant families Solanaceae and Convolvulaceae based mainly on floral characters.<br>
    • <em>Animal Example:</em> Order <strong>Carnivora</strong> includes family Felidae (cats) and family Canidae (dogs).<br><br>

    <strong>(iv) Family:</strong><br>
    A taxonomic category encompassing a group of related genera with still fewer similarities compared to genus and species, characterized by both vegetative and reproductive/floral features.<br>
    • <em>Plant Example:</em> Family <strong>Solanaceae</strong> contains distinct genera: <em>Solanum</em>, <em>Petunia</em>, and <em>Datura</em>.<br>
    • <em>Animal Example:</em> Family <strong>Felidae</strong> includes genus <em>Panthera</em> (lion, tiger, leopard) and genus <em>Felis</em> (domestic cat).<br><br>

    <strong>(v) Genus:</strong><br>
    A group of closely related species which have more characters in common in comparison to species of other genera. It is an aggregate of closely related species.<br>
    • <em>Plant Example:</em> Genus <strong><em>Solanum</em></strong> includes species <em>tuberosum</em> (potato), <em>melongena</em> (brinjal), and <em>nigrum</em> (black nightshade).<br>
    • <em>Animal Example:</em> Genus <strong><em>Panthera</em></strong> includes <em>Panthera leo</em> (lion), <em>Panthera tigris</em> (tiger), and <em>Panthera pardus</em> (leopard).
  </div>`,
  '5 Marks',
  [
    ['(i) Definition of Phylum/Division with chordate / angiosperm examples', '1 Mark'],
    ['(ii) Definition of Class with Mammalia / Dicotyledonae examples', '1 Mark'],
    ['(iii) Definition of Order with Polymoniales / Carnivora examples', '1 Mark'],
    ['(iv) Definition of Family with Solanaceae / Felidae examples', '1 Mark'],
    ['(v) Definition of Genus as an aggregate of closely related species with examples', '1 Mark']
  ]
));

// Question 10
questions.push(createQCard(
  'c11b-ch1-q10', 'Question 10', 'NCERT Exercise',
  'How is a key helpful in the identification and classification of an organism?',
  `<div class="step">
    <strong>Role of Taxonomic Keys in Identification and Classification:</strong><br>
    A <strong>taxonomic key</strong> is an indispensable analytical device used by biologists for identifying unknown plants and animals based on observable similarities and dissimilarities.<br><br>
    <strong>Key Structural Principles of a Taxonomic Key:</strong><br>
    1. <strong>Couplet:</strong> Keys are based on contrasting characters generally arranged in pairs called a <em>couplet</em>.<br>
    2. <strong>Lead:</strong> Each statement in a taxonomic key is called a <em>lead</em>.<br>
    3. <strong>Analytical Dichotomy:</strong> The user evaluates the contrasting statements against the unknown specimen. Accepting one statement leads to the elimination/rejection of the alternate choice, which either directly identifies the organism or directs the user to the next subordinate couplet.<br>
    4. <strong>Separate Keys for Distinct Ranks:</strong> Separate taxonomic keys are developed for each taxonomic category such as family, genus, and species for comprehensive identification.<br><br>

    <strong>Types of Taxonomic Keys:</strong><br>
    • <strong>Dichotomous Indented Key:</strong> Provides choices with equal indentation under a single lead, showing natural subdivisions.<br>
    • <strong>Bracketed Key:</strong> Pairs of contrasting statements are placed in adjacent numbered couplets with cross-references, providing swift, efficient diagnostic identification.<br><br>

    <strong>Practical Utility in Taxonomy:</strong><br>
    • Enables rapid, accurate identification of newly collected specimens without requiring exhaustive reference literature.<br>
    • Synthesizes complex biological diagnostic information into a structured, step-by-step decision tree.<br>
    • Forms the foundation of botanical and zoological floras, monographs, and diagnostic field guides.
  </div>`,
  '3 Marks',
  [
    ['Definition of a taxonomic key as an analytical tool based on contrasting characters', '1 Mark'],
    ['Explanation of couplet, lead, and dichotomous choice mechanism', '1 Mark'],
    ['Application of separate keys for taxonomic ranks and importance in floras/monographs', '1 Mark']
  ]
));

// ============================================================================
// SVG DIAGRAM: TAXONOMIC HIERARCHY & BINOMIAL NOMENCLATURE
// ============================================================================
const biologySvg = `
  <div style="margin:24px 0; background:#f0fdf4; border:1px solid #bbf7d0; border-radius:12px; padding:18px; text-align:center;">
    <div style="font-size:0.95rem; font-weight:800; color:#166534; margin-bottom:12px;">
      Figure 1.1: Standard Taxonomic Hierarchy (Ascending Order) &amp; Binomial Nomenclature Architecture
    </div>
    <svg viewBox="0 0 840 280" style="max-width:100%; height:auto; font-family:'Plus Jakarta Sans', system-ui, sans-serif;">
      <!-- Background panel -->
      <rect x="10" y="10" width="820" height="260" rx="10" fill="#ffffff" stroke="#86efac" stroke-width="1.5"/>

      <!-- LEFT: Taxonomic Pyramid/Steps -->
      <text x="30" y="36" font-size="12" font-weight="bold" fill="#14532d">1. Taxonomic Categories (Hierarchy):</text>
      
      <!-- Kingdom -->
      <rect x="30" y="50" width="360" height="24" rx="4" fill="#15803d"/>
      <text x="140" y="67" font-size="11" font-weight="bold" fill="#ffffff">KINGDOM (e.g., Animalia / Plantae)</text>
      <text x="35" y="66" font-size="9" fill="#dcfce7">Highest Rank</text>

      <!-- Phylum/Division -->
      <rect x="50" y="78" width="320" height="24" rx="4" fill="#16a34a"/>
      <text x="145" y="95" font-size="11" font-weight="bold" fill="#ffffff">PHYLUM / DIVISION (e.g., Chordata)</text>

      <!-- Class -->
      <rect x="70" y="106" width="280" height="24" rx="4" fill="#22c55e"/>
      <text x="160" y="123" font-size="11" font-weight="bold" fill="#ffffff">CLASS (e.g., Mammalia)</text>

      <!-- Order -->
      <rect x="90" y="134" width="240" height="24" rx="4" fill="#4ade80"/>
      <text x="170" y="151" font-size="11" font-weight="bold" fill="#0f172a">ORDER (e.g., Carnivora)</text>

      <!-- Family -->
      <rect x="110" y="162" width="200" height="24" rx="4" fill="#86efac"/>
      <text x="175" y="179" font-size="11" font-weight="bold" fill="#0f172a">FAMILY (e.g., Felidae)</text>

      <!-- Genus -->
      <rect x="130" y="190" width="160" height="24" rx="4" fill="#bbf7d0"/>
      <text x="178" y="207" font-size="11" font-weight="bold" fill="#14532d">GENUS (e.g., Panthera)</text>

      <!-- Species -->
      <rect x="150" y="218" width="120" height="26" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
      <text x="168" y="235" font-size="11" font-weight="bold" fill="#15803d">SPECIES (e.g., leo)</text>
      <text x="155" y="255" font-size="8.5" font-weight="bold" fill="#166534">Basic Unit of Classification</text>

      <!-- Direction Arrow -->
      <line x1="405" y1="230" x2="405" y2="60" stroke="#059669" stroke-width="2.5" marker-end="url(#arrowUp)"/>
      <defs>
        <marker id="arrowUp" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,6 L3,0 L6,6 L3,4 Z" fill="#059669"/>
        </marker>
      </defs>
      <text x="415" y="145" font-size="8.5" font-weight="bold" fill="#059669" transform="rotate(-90 415 145)">Decreasing Specificity &bull; Increasing Generality &longrightarrow;</text>

      <!-- RIGHT: Binomial Nomenclature Anatomy -->
      <text x="470" y="36" font-size="12" font-weight="bold" fill="#14532d">2. Binomial Nomenclature Rules (Carolus Linnaeus):</text>
      
      <rect x="470" y="55" width="345" height="195" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>

      <!-- Example box -->
      <rect x="485" y="70" width="315" height="48" rx="6" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
      <text x="500" y="100" font-size="18" font-style="italic" font-weight="bold" fill="#065f46">Mangifera indica <tspan font-style="normal" font-size="12" fill="#64748b">Linn.</tspan></text>

      <!-- Explanatory tags -->
      <path d="M 540,118 L 540,140" stroke="#059669" stroke-width="1.5" stroke-dasharray="3,2"/>
      <rect x="490" y="140" width="110" height="42" rx="4" fill="#ffffff" stroke="#059669"/>
      <text x="496" y="156" font-size="9" font-weight="bold" fill="#059669">Generic Name (Genus)</text>
      <text x="496" y="172" font-size="8" fill="#334155">&bull; Begins with Capital 'M'</text>

      <path d="M 640,118 L 640,140" stroke="#059669" stroke-width="1.5" stroke-dasharray="3,2"/>
      <rect x="610" y="140" width="115" height="42" rx="4" fill="#ffffff" stroke="#059669"/>
      <text x="616" y="156" font-size="9" font-weight="bold" fill="#059669">Specific Epithet (Species)</text>
      <text x="616" y="172" font-size="8" fill="#334155">&bull; Begins with small 'i'</text>

      <path d="M 750,118 L 750,140" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,2"/>
      <rect x="730" y="140" width="70" height="42" rx="4" fill="#ffffff" stroke="#94a3b8"/>
      <text x="735" y="156" font-size="8.5" font-weight="bold" fill="#475569">Citation</text>
      <text x="735" y="172" font-size="7.5" fill="#64748b">Linnaeus</text>

      <!-- Rule summary text -->
      <text x="488" y="202" font-size="8.5" fill="#334155">&bull; <strong>Latin Origin:</strong> Printed in <em>Italics</em>; underlined separately if handwritten.</text>
      <text x="488" y="218" font-size="8.5" fill="#334155">&bull; <strong>Law of Priority:</strong> Earliest validly published name stands as correct taxon.</text>
      <text x="488" y="234" font-size="8.5" fill="#334155">&bull; <strong>Tautonyms:</strong> Permitted in ICZN (e.g., <em>Naja naja</em>), prohibited in ICBN.</text>
    </svg>
  </div>
`;

// ============================================================================
// ASSEMBLY OF CH1.HTML
// ============================================================================
const chapterHtml = `
<section class="chapter-section" id="c11b-ch1">
  <div class="chapter-header">
    <div class="ch-badge" style="background:#16a34a;">1</div>
    <div class="chapter-header-info">
      <div class="ch-category" style="color:#16a34a;">CBSE Class 11 Biology &bull; Chapter 1</div>
      <h2>The Living World</h2>
      <p>NCERT Rationalised 2026–27 Syllabus &bull; All 10 Verbatim Questions with Official Step-by-Step Marking Rubrics</p>
    </div>
  </div>

  ${biologySvg}

  <div class="ex-div">NCERT Textbook Exercise 1 to 10: Biodiversity, Binomial Nomenclature, Taxonomic Hierarchy, Taxon Concepts &amp; Taxonomic Keys</div>
${questions.join('\n')}

  <div class="chapter-nav-btns" style="margin-top:40px; display:flex; justify-content:space-between; align-items:center;">
    <a href="../ncert-solutions-class-11-biology.html" class="ch-nav-btn prev" style="padding:10px 24px; border-radius:8px; border:1px solid #cbd5e1; background:white; font-weight:700; text-decoration:none; color:#334155;">← Class 11 Biology Hub</a>
    <button class="ch-nav-btn next" onclick="showChapter(2)" style="padding:10px 24px; border-radius:8px; border:none; background:#16a34a; color:white; font-weight:700; cursor:pointer;">Next: Chapter 2 (Biological Classification) →</button>
  </div>
</section>
`;

// Write ch1.html
const ch1Path = path.join(outDir, 'ch1.html');
fs.writeFileSync(ch1Path, chapterHtml.trim(), 'utf8');
console.log(`Successfully generated: ${ch1Path} (${chapterHtml.length} bytes)`);

// Update chapters-data.js
const dataJsPath = path.join(outDir, 'chapters-data.js');
let existingData = '';
if (fs.existsSync(dataJsPath)) {
  existingData = fs.readFileSync(dataJsPath, 'utf8');
} else {
  existingData = 'window.CHAPTER_DATA = {};\n';
}

if (!existingData.includes('window.CHAPTER_DATA[1] =')) {
  fs.appendFileSync(dataJsPath, `\nwindow.CHAPTER_DATA[1] = ${JSON.stringify(chapterHtml.trim())};\n`, 'utf8');
  console.log(`Appended Chapter 1 to preloaded cache: ${dataJsPath}`);
} else {
  const regex = /window\.CHAPTER_DATA\[1\]\s*=\s*[\s\S]*?;\n/g;
  const updated = existingData.replace(regex, `window.CHAPTER_DATA[1] = ${JSON.stringify(chapterHtml.trim())};\n`);
  fs.writeFileSync(dataJsPath, updated, 'utf8');
  console.log(`Updated Chapter 1 in preloaded cache: ${dataJsPath}`);
}
