// scripts/builders/gen-c12b-ch13.js
// Chapter 13: Biodiversity and Conservation (10 Questions)
const { createQCard, saveChapter } = require('./c12b-helper');

const svgDiagram = `
<div class="chem-card" style="margin-bottom:24px; padding:20px; background:#f0fdf4; border:1px solid #bbf7d0; border-radius:12px;">
  <h4 style="margin:0 0 12px 0; color:#059669; font-size:1.05rem;">🧬 Conservation Biology Map: Species-Area Relationship & The Evil Quartet</h4>
  <svg viewBox="0 0 880 300" style="width:100%; max-width:880px; height:auto; display:block; margin:0 auto; background:white; border-radius:8px; border:1px solid #d1fae5;">
    <!-- Species-Area Curve (Humboldt) -->
    <rect x="20" y="20" width="280" height="260" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
    <text x="160" y="46" font-family="sans-serif" font-size="14" font-weight="bold" fill="#065f46" text-anchor="middle">Species-Area Relationship (Humboldt)</text>
    <line x1="35" y1="56" x2="285" y2="56" stroke="#10b981" stroke-width="1.5"/>

    <!-- Graph axes -->
    <line x1="50" y1="210" x2="260" y2="210" stroke="#334155" stroke-width="2"/>
    <line x1="50" y1="210" x2="50" y2="70" stroke="#334155" stroke-width="2"/>
    <text x="240" y="225" font-family="sans-serif" font-size="10" fill="#334155">Area (A)</text>
    <text x="35" y="80" font-family="sans-serif" font-size="10" fill="#334155" transform="rotate(-90 35,80)">Species Richness (S)</text>

    <!-- Rectangular hyperbola: S = C A^Z -->
    <path d="M 55 205 Q 85 110, 250 85" fill="none" stroke="#2563eb" stroke-width="2.5"/>
    <text x="175" y="95" font-family="sans-serif" font-size="10" font-weight="bold" fill="#2563eb">S = C A<sup>Z</sup></text>

    <!-- Straight line on log scale: log S = log C + Z log A -->
    <line x1="55" y1="205" x2="250" y2="135" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,4"/>
    <text x="150" y="160" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#dc2626">log S = log C + Z log A</text>

    <text x="50" y="245" font-family="sans-serif" font-size="10" fill="#334155">&bull; Z = 0.1 to 0.2 (regional taxa)</text>
    <text x="50" y="262" font-family="sans-serif" font-size="10" fill="#047857">&bull; Z = 0.6 to 1.2 (entire continents)</text>

    <!-- The Evil Quartet Card -->
    <rect x="320" y="20" width="260" height="260" rx="10" fill="#fef2f2" stroke="#ef4444" stroke-width="2"/>
    <text x="450" y="46" font-family="sans-serif" font-size="14" font-weight="bold" fill="#991b1b" text-anchor="middle">The Evil Quartet (Species Loss)</text>
    <line x1="335" y1="56" x2="565" y2="56" stroke="#ef4444" stroke-width="1.5"/>

    <text x="335" y="80" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b91c1c">1. Habitat Loss & Fragmentation:</text>
    <text x="335" y="96" font-family="sans-serif" font-size="10.5" fill="#334155">&bull; Most major cause (Amazon rainforest</text>
    <text x="345" y="110" font-family="sans-serif" font-size="10" fill="#475569">cleared for soybean / cattle ranching)</text>

    <text x="335" y="130" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b91c1c">2. Over-Exploitation:</text>
    <text x="335" y="146" font-family="sans-serif" font-size="10.5" fill="#334155">&bull; Need turns to greed (Dodo, Steller's</text>
    <text x="345" y="160" font-family="sans-serif" font-size="10" fill="#475569">sea cow, Passenger pigeon extinct)</text>

    <text x="335" y="180" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b91c1c">3. Alien Species Invasions:</text>
    <text x="335" y="196" font-family="sans-serif" font-size="10.5" fill="#334155">&bull; Nile Perch in L. Victoria killed 200 cichlids</text>
    <text x="335" y="210" font-family="sans-serif" font-size="10.5" fill="#334155">&bull; <em>Parthenium, Lantana, Eichhornia</em></text>

    <text x="335" y="232" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b91c1c">4. Co-Extinctions:</text>
    <text x="335" y="248" font-family="sans-serif" font-size="10.5" fill="#334155">&bull; Obligate host-parasite / plant-pollinator</text>
    <text x="345" y="262" font-family="sans-serif" font-size="10" fill="#475569">extinction (Fig & Wasp)</text>

    <!-- In-situ vs Ex-situ Card -->
    <rect x="600" y="20" width="260" height="260" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
    <text x="730" y="46" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e40af" text-anchor="middle">Biodiversity Conservation</text>
    <line x1="615" y1="56" x2="845" y2="56" stroke="#3b82f6" stroke-width="1.5"/>

    <text x="615" y="80" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1d4ed8">In-Situ (On-Site Preservation):</text>
    <text x="615" y="98" font-family="sans-serif" font-size="11" fill="#334155">&bull; 14 Biosphere Reserves (in India)</text>
    <text x="615" y="114" font-family="sans-serif" font-size="11" fill="#334155">&bull; 90+ National Parks & 448+ Sanctuaries</text>
    <text x="615" y="130" font-family="sans-serif" font-size="11" fill="#334155">&bull; <strong>Sacred Groves:</strong> Khasi/Jaintia hills,</text>
    <text x="625" y="146" font-family="sans-serif" font-size="10.5" fill="#475569">Aravalli hills, Western Ghats</text>
    <text x="615" y="164" font-family="sans-serif" font-size="11" fill="#334155">&bull; <strong>Biodiversity Hotspots:</strong> 34 globally</text>
    <text x="625" y="180" font-family="sans-serif" font-size="10.5" fill="#475569">(Western Ghats-Sri Lanka, Indo-Burma, Himalaya)</text>

    <text x="615" y="206" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1d4ed8">Ex-Situ (Off-Site Preservation):</text>
    <text x="615" y="224" font-family="sans-serif" font-size="11" fill="#334155">&bull; Zoological Parks & Botanical Gardens</text>
    <text x="615" y="240" font-family="sans-serif" font-size="11" fill="#334155">&bull; Cryopreservation of gametes (-196 &deg;C)</text>
    <text x="615" y="258" font-family="sans-serif" font-size="11" fill="#334155">&bull; In vitro tissue culture & Seed banks</text>
  </svg>
</div>`;

const questions = [];

// Q1
questions.push(createQCard(
  'c12b-ch13-q1',
  'Q1',
  'Exercises (NCERT Verbatim)',
  'Name the three important components of biodiversity.',
  `<p>The sociobiologist <strong>Edward Wilson</strong> popularized the term <strong>biodiversity</strong> to describe the combined diversity at all levels of biological organisation. The three interrelated components are:</p>
  <ol>
    <li><strong>Genetic Diversity:</strong>
      <br>The diversity of genes and alleles within a single biological species over its geographical distributional range.
      <ul>
        <li><em>Example 1:</em> The medicinal plant <strong><em>Rauwolfia vomitoria</em></strong> growing in different Himalayan ranges shows substantial genetic variation in the potency and concentration of the active chemical alkaloid <strong>reserpine</strong>.</li>
        <li><em>Example 2:</em> India has more than <strong>50,000 genetically different strains of rice</strong> and more than <strong>1,000 distinct varieties of mango</strong>.</li>
      </ul>
    </li>
    <li><strong>Species Diversity:</strong>
      <br>The variety and richness of different biological species within a specific region or community.
      <ul>
        <li><em>Example:</em> The <strong>Western Ghats have a greater amphibian species diversity</strong> than the Eastern Ghats.</li>
      </ul>
    </li>
    <li><strong>Ecological (Ecosystem) Diversity:</strong>
      <br>The diversity of habitats, biological communities, and ecological processes at the ecosystem level across biomes.
      <ul>
        <li><em>Example:</em> India, with its deserts, rainforests, mangroves, coral reefs, wetlands, estuaries, and alpine meadows, possesses a vastly greater ecosystem diversity than a Scandinavian country like Norway.</li>
      </ul>
    </li>
  </ol>`,
  '3 Marks',
  [
    ['1. Genetic diversity with valid example (Rauwolfia vomitoria / 50,000 strains of rice)', '1 Mark'],
    ['2. Species diversity with valid example (Western Ghats amphibians > Eastern Ghats)', '1 Mark'],
    ['3. Ecological / Ecosystem diversity with valid example (India vs Norway)', '1 Mark']
  ]
));

// Q2
questions.push(createQCard(
  'c12b-ch13-q2',
  'Q2',
  'Exercises (NCERT Verbatim)',
  'How do ecologists estimate the total number of species present in the world?',
  `<p>Because comprehensive planetary species inventories are complete only in a few temperate regions and grossly incomplete in the hyper-diverse tropics, ecologists employ statistical extrapolation:</p>
  <ol>
    <li><strong>Taxonomic Group Extrapolation (Temperate-to-Tropical Ratio):</strong>
      <ul>
        <li>Taxonomists have carried out exhaustive inventories of specific, well-studied taxonomic groups (especially insects) in temperate regions.</li>
        <li>They compare the ratio of temperate species to tropical species within these well-studied insect groups.</li>
        <li>Assuming this temperate-to-tropical species ratio remains roughly consistent across other animal and plant groups, they statistically extrapolate this ratio to the entire planet to calculate global estimates.</li>
      </ul>
    </li>
    <li><strong>Robert May's Conservative Global Estimate:</strong>
      <ul>
        <li>While some extreme hypotheses range from 20 to 50 million species, a widely accepted, scientifically sound, and conservative estimate was formulated by <strong>Robert May</strong>:</li>
        <li>He placed the global species diversity at approximately <strong>7 million species (70 lakhs)</strong>.</li>
      </ul>
    </li>
    <li><strong>Current Recorded Fraction:</strong>
      <ul>
        <li>According to the International Union for Conservation of Nature (IUCN, 2004), the total number of documented plant and animal species is slightly more than <strong>1.5 million</strong>.</li>
        <li>This implies that over <strong>70–78% of planetary species</strong> remain undiscovered and unrecorded by modern science, facing the threat of extinction before they are even discovered.</li>
      </ul>
    </li>
  </ol>`,
  '3 Marks',
  [
    ['Statistical comparison of temperate vs tropical species richness in well-studied insect taxa', '1 Mark'],
    ['Extrapolating ratio across all taxonomic groups to estimate global diversity', '1 Mark'],
    ['Robert May\'s scientifically grounded estimate of ~7 million species (vs ~1.5 million currently recorded)', '1 Mark']
  ]
));

// Q3
questions.push(createQCard(
  'c12b-ch13-q3',
  'Q3',
  'Exercises (NCERT Verbatim)',
  'Give three hypotheses for explaining why tropics show greatest levels of species richness.',
  `<p>Species diversity decreases as we move away from the equator towards the poles. Ecologists and evolutionary biologists propose three major hypotheses for the unparalleled species richness of the tropics:</p>
  <ol>
    <li><strong>1. Speciation is a Function of Time (Long Undisturbed Evolutionary History):</strong>
      <br>Temperate latitudes were subjected to frequent, catastrophic glaciations in the geological past that wiped out flora and fauna repeatedly. In contrast, <strong>tropical latitudes have remained relatively undisturbed and stable for millions of years</strong>, providing an uninterrupted evolutionary time span for speciation, niche specialization, and diversification.</li>
    <li><strong>2. Constant, Predictable, and Less Seasonal Environment:</strong>
      <br>Unlike temperate regions with severe seasonal winters, tropical environments are <strong>less seasonal, relatively more constant, and predictable</strong>. Such predictable environmental conditions promote fine niche specialization and biological adaptations, allowing a vastly greater number of species to coexist in the same habitat.</li>
    <li><strong>3. Abundance of Solar Energy & High Productivity:</strong>
      <br>Tropical regions receive maximum, direct incident solar radiation year-round. High solar energy influx drives <strong>higher net primary productivity (NPP)</strong>, which translates into abundant food resources and metabolic energy directly and indirectly supporting a complex, multi-tiered biodiversity web.</li>
  </ol>`,
  '3 Marks',
  [
    ['1. Evolutionary time hypothesis: Tropical stability without frequent glaciations allowing prolonged speciation', '1 Mark'],
    ['2. Less seasonal/constant environment fostering fine niche specialisation', '1 Mark'],
    ['3. Greater solar energy input driving higher primary productivity and energy availability', '1 Mark']
  ]
));

// Q4
questions.push(createQCard(
  'c12b-ch13-q4',
  'Q4',
  'Exercises (NCERT Verbatim)',
  'What is the significance of the slope of regression in a species-area relationship?',
  `<p>The pioneering German naturalist and geographer <strong>Alexander von Humboldt</strong> observed that within a region, species richness increases with increasing explored area, but only up to a limit.</p>
  <p>On a logarithmic scale, the relationship is a straight line described by the equation:</p>
  <div style="background:#f8fafc; padding:10px 14px; border-left:4px solid #059669; font-family:monospace; margin:8px 0; font-size:1.05rem;">
    log S = log C + Z log A
  </div>
  <p>Where <em>S</em> = Species richness, <em>A</em> = Area, <em>C</em> = Y-intercept, and <strong><em>Z</em> = Slope of the regression line (regression coefficient)</strong>.</p>

  <p><strong>Ecological Significance of the Slope of Regression (<em>Z</em>):</strong></p>
  <ol>
    <li><strong>Standard Regional Value (Z = 0.1 to 0.2):</strong>
      <br>Ecologists have discovered that regardless of the taxonomic group or geographic region (e.g., plants in Britain, birds in California, or molluscs in New York state), the slope of the regression line remarkably falls strictly within the narrow range of <strong>0.1 to 0.2</strong> when analyzing small or regional areas.</li>
    <li><strong>Steeper Slope for Enormous Continental Areas (Z = 0.6 to 1.2):</strong>
      <br>If the species-area relationship is analysed across very large spatial scales, such as an entire continent, the slope of the regression line becomes <strong>significantly steeper</strong>, with <em>Z</em> values ranging between <strong>0.6 and 1.2</strong>.</li>
    <li><strong>Significance:</strong> A steeper regression slope (higher <em>Z</em> value) signifies that as explored area expands across massive continental landscapes, <strong>species richness accumulates at a vastly higher rate</strong> because diverse new geographical habitats, biomes, and isolated mountain/river barriers are integrated into the survey.
      <br><em>Example:</em> For frugivorous (fruit-eating) birds and mammals in the tropical forests of different continents, the slope <em>Z</em> is an extremely steep <strong>1.15</strong>.</li>
  </ol>`,
  '3 Marks',
  [
    ['Mathematical equation: log S = log C + Z log A and defining Z as slope of regression line', '1 Mark'],
    ['Standard value of Z (0.1 to 0.2) in regional areas regardless of taxonomic group', '1 Mark'],
    ['Steeper slope (0.6 to 1.2, e.g. 1.15 for frugivorous birds/mammals) across entire continents indicating rapid species accumulation', '1 Mark']
  ]
));

// Q5
questions.push(createQCard(
  'c12b-ch13-q5',
  'Q5',
  'Exercises (NCERT Verbatim)',
  'What are the major causes of species losses in a geographical region?',
  `<p>The accelerated rate of anthropogenic species extinction currently occurring worldwide (the Sixth Mass Extinction) is driven by four primary causes, famously termed by ecologists as <strong>"The Evil Quartet"</strong>:</p>
  <ol>
    <li><strong>1. Habitat Loss and Fragmentation (Most Important Cause):</strong>
      <ul>
        <li>Clearing of pristine natural ecosystems for agriculture, urbanisation, and mining.</li>
        <li>The Amazon rainforest (the "lungs of the planet"), harbouring millions of species, is being cleared and burned for soybean cultivation and beef cattle ranching.</li>
        <li>Breaking large contiguous forest tracts into small fragmented patches severely threatens large mammals requiring extensive home ranges (elephants, tigers) and migratory animals.</li>
      </ul>
    </li>
    <li><strong>2. Over-Exploitation:</strong>
      <ul>
        <li>When human biological "need" turns into commercial "greed", overharvesting drives vulnerable species to extinction.</li>
        <li>Overexploitation by humans led to the complete extinction of <strong>Steller's sea cow, the Passenger pigeon, and Dodo</strong>, and current overfishing threatens marine commercial fish populations.</li>
      </ul>
    </li>
    <li><strong>3. Alien (Invasive) Species Invasions:</strong>
      <ul>
        <li>Introduction of non-native exotic species unintentionally or deliberately disrupts native ecosystems:
          <ul>
            <li>Introduction of <strong>Nile Perch</strong> into Lake Victoria (East Africa) led to the total extinction of an ecologically unique assemblage of over 200 endemic species of cichlid fish.</li>
            <li>Invasive weed species like <strong><em>Parthenium</em> (carrot grass), <em>Lantana</em>, and <em>Eichhornia</em> (water hyacinth)</strong> choke native vegetation.</li>
            <li>Illegal introduction of the African catfish <strong><em>Clarias gariepinus</em></strong> threatens indigenous river catfishes.</li>
          </ul>
        </li>
      </ul>
    </li>
    <li><strong>4. Co-Extinctions:</strong>
      <ul>
        <li>When a host species becomes extinct, all its obligate parasitic and mutualistic partner species that depend exclusively on it also face mandatory extinction (e.g., an obligate plant-pollinator mutualism like Fig tree and wasp).</li>
      </ul>
    </li>
  </ol>`,
  '4 Marks',
  [
    ['1. Habitat loss and fragmentation (Amazon destruction / edge effects)', '1 Mark'],
    ['2. Over-exploitation (Passenger pigeon, Steller\'s sea cow, Dodo)', '1 Mark'],
    ['3. Alien species invasions (Nile perch in Lake Victoria, Parthenium, Eichhornia, Clarias)', '1 Mark'],
    ['4. Co-extinctions (extinction of host causing loss of obligate parasites/mutualist pollinators)', '1 Mark']
  ]
));

// Q6
questions.push(createQCard(
  'c12b-ch13-q6',
  'Q6',
  'Exercises (NCERT Verbatim)',
  'How is biodiversity important for ecosystem functioning?',
  `<p>Biodiversity is the foundational cornerstone that maintains ecological stability, biogeochemical cycling, and resilience:</p>
  <ol>
    <li><strong>David Tilman's Long-Term Ecosystem Experiments:</strong>
      <ul>
        <li>Tilman's outdoor experimental grassland plots demonstrated that plots with <strong>greater species richness showed less year-to-year variation in total biomass</strong>.</li>
        <li>Increased species diversity directly caused <strong>higher net community productivity</strong>, proving that species-rich ecosystems are functionally more productive and stable than monocultures.</li>
      </ul>
    </li>
    <li><strong>Ecosystem Stability & Resistance to Invasions:</strong>
      <ul>
        <li>Diverse communities are resilient: they rebound quickly from occasional environmental disturbances (droughts, fires) and exhibit strong resistance to biological invasions by alien exotic pests.</li>
      </ul>
    </li>
    <li><strong>Paul Ehrlich's "Rivet Popper Hypothesis":</strong>
      <ul>
        <li>Stanford ecologist Paul Ehrlich used an analogy comparing an ecosystem to an airplane, where thousands of rivets hold the airplane frame together (representing thousands of species in an ecosystem).</li>
        <li>If every passenger pops out a rivet (species extinction), a few missing rivets on seats may not jeopardize flight safety initially.</li>
        <li>However, as more and more rivets are removed, the airplane becomes dangerously weak. Furthermore, popping a critical rivet located on a vital structure (like the wing, representing a <strong>keystone species</strong> like top predators or fig trees) will cause an immediate catastrophic crash of the plane (ecosystem collapse).</li>
      </ul>
    </li>
  </ol>`,
  '3 Marks',
  [
    ['David Tilman\'s experiments: High species richness delivers lower biomass variation and higher productivity', '1 Mark'],
    ['Ecosystem stability, resilience to disturbances, and resistance to alien invasions', '1 Mark'],
    ['Paul Ehrlich\'s Rivet Popper hypothesis explaining the disproportionate peril of losing keystone species', '1 Mark']
  ]
));

// Q7
questions.push(createQCard(
  'c12b-ch13-q7',
  'Q7',
  'Exercises (NCERT Verbatim)',
  'What are sacred groves? What is their role in conservation?',
  `<p><strong>Definition of Sacred Groves:</strong></p>
  <p><strong>Sacred groves</strong> are pristine forest patches or woodland tracts that are communally protected, preserved, and venerated by indigenous tribal and local communities due to deep-rooted spiritual beliefs, religious sanctity, and cultural taboos against felling any tree or killing any animal within the boundary.</p>

  <p><strong>Prominent Examples in India:</strong></p>
  <ul>
    <li><strong>Khasi and Jaintia Hills</strong> in Meghalaya</li>
    <li><strong>Aravalli Hills</strong> of Rajasthan</li>
    <li><strong>Western Ghat regions</strong> of Maharashtra and Karnataka</li>
    <li><strong>Sarguja, Chanda, and Bastar</strong> areas of Chhattisgarh and Madhya Pradesh</li>
  </ul>

  <p><strong>Crucial Role in Biodiversity Conservation:</strong></p>
  <ol>
    <li><strong>Refugia for Rare, Threatened, and Endemic Taxa:</strong>
      <ul>
        <li>Sacred groves act as the <strong>last surviving biological refuges</strong> for numerous endangered plant and animal species that have been completely extirpated from surrounding degraded landscapes.</li>
        <li>In Meghalaya, the Khasi sacred groves serve as the only remaining sanctuary for several critically endangered orchid species, medicinal ferns, and ancient angiosperm trees.</li>
      </ul>
    </li>
    <li><strong>Gene Pool Preservation & Ethnobotanical Repository:</strong>
      <ul>
        <li>They preserve wild crop ancestors, rare medicinal herbs, and primitive plant germplasms outside modern statutory national park regimes.</li>
      </ul>
    </li>
    <li><strong>Model of Community-Driven In-Situ Conservation:</strong>
      <ul>
        <li>They demonstrate that indigenous cultural traditions, religious reverence for nature, and local self-governance can conserve biodiversity without expensive enforcement.</li>
      </ul>
    </li>
  </ol>`,
  '3 Marks',
  [
    ['Definition of sacred groves as culturally and religiously protected pristine forest tracts', '1 Mark'],
    ['Prominent Indian examples: Khasi and Jaintia hills (Meghalaya), Aravalli hills (Rajasthan), Western Ghats', '1 Mark'],
    ['Conservation role as last refugia for rare/endangered endemic flora and preserving ancient gene pools', '1 Mark']
  ]
));

// Q8
questions.push(createQCard(
  'c12b-ch13-q8',
  'Q8',
  'Exercises (NCERT Verbatim)',
  'Among the ecosystem services are control of floods and soil erosion. How is this achieved by the biotic components of the ecosystem?',
  `<p>The living biotic components of terrestrial ecosystems (primarily forest trees, shrubs, grasslands, and soil microorganisms) perform vital regulating ecosystem services:</p>

  <p><strong>1. Biological Control of Soil Erosion:</strong></p>
  <ul>
    <li><strong>Root Anchoring:</strong> The extensive, fibrous root networks of trees, shrubs, and grasses penetrate deep into the subterranean soil profile, binding loose mineral particles tightly into an aggregate crumb structure, preventing topsoil from being dislodged by wind or water.</li>
    <li><strong>Canopy Interception:</strong> The dense multi-layered forest foliage intercepts the kinetic impact of falling raindrops, breaking their velocity and preventing splash erosion.</li>
    <li><strong>Humus & Soil Cover:</strong> Leaf litter and organic humus formed by microbial decomposition act as a porous sponge on the forest floor that shields topsoil from surface run-off.</li>
  </ul>

  <p><strong>2. Biological Control of Floods:</strong></p>
  <ul>
    <li><strong>Enhanced Percolation & Infiltration:</strong> Humus-rich soil has superior porosity and percolation rates. Precipitation is rapidly absorbed into the ground to recharge deep subterranean aquifers rather than washing away as torrential flash surface runoff.</li>
    <li><strong>Slowing Water Discharge:</strong> Vegetation buffers, riverbank riparian woodlands, and wetland roots create natural physical friction that retards surface floodwater velocity, allowing water to disperse gradually into river channels.</li>
    <li><strong>Transpirational Evacuation:</strong> Dense vegetation continuously absorbs vast quantities of groundwater and transpires it into the atmosphere, creating significant hydraulic buffer capacity in the soil to absorb subsequent heavy monsoon downpours.</li>
  </ul>`,
  '3 Marks',
  [
    ['Soil erosion control: Root network binding soil particles, canopy intercepting rain velocity, humus cover', '1.5 Marks'],
    ['Flood control: High soil percolation recharging groundwater, riparian vegetation retarding runoff velocity, transpirational pumping', '1.5 Marks']
  ]
));

// Q9
questions.push(createQCard(
  'c12b-ch13-q9',
  'Q9',
  'Exercises (NCERT Verbatim)',
  'The species diversity of plants (22 per cent) is much less than that of animals (72 per cent). What could be the explanations to how animals achieved greater diversification?',
  `<p>Of all recorded species on Earth, <strong>animals comprise over 70–72%</strong> (with insects alone accounting for more than 70% of all animals), whereas <strong>plants comprise only about 22%</strong>. Evolutionary and biological reasons for this massive discrepancy include:</p>
  <ol>
    <li><strong>Locomotion & Active Motility:</strong>
      <ul>
        <li>Plants are sessile (rooted to one spot) and must passively tolerate fluctuating environmental stresses, herbivory, and climate extremes.</li>
        <li>In contrast, animals possess active locomotion, neuromuscular coordination, and sensory organs. They can actively escape hostile environmental conditions, seek hospitable microhabitats, migrate across barriers, search for diverse food sources, and avoid predators, enabling occupation of specialized ecological niches.</li>
      </ul>
    </li>
    <li><strong>Complex Nervous System & Behavioural Plasticity:</strong>
      <ul>
        <li>Animals possess complex sensory receptors and nervous systems that allow behavioral learning, courtship rituals, territorial defense, and social communication. Behavioral isolation rapidly accelerates reproductive isolation and <strong>sympatric speciation</strong>.</li>
      </ul>
    </li>
    <li><strong>Co-evolution with Angiosperms (The Insect Explosion):</strong>
      <ul>
        <li>Insects underwent massive co-evolutionary radiation alongside flowering plants. Specialized morphological mouthparts (chewing, siphoning, piercing-sucking) and intricate plant-pollinator mutualisms drove explosive insect speciation.</li>
      </ul>
    </li>
    <li><strong>Structural Adaptations in Arthropods:</strong>
      <ul>
        <li>Chitinous waterproof exoskeletons, jointed appendages, and flight (wings) allowed insects to conquer every terrestrial, subterranean, and aerial niche.</li>
      </ul>
    </li>
  </ol>`,
  '3 Marks',
  [
    ['Locomotion enabling active escape from predators/stress and migration to novel niches', '1 Mark'],
    ['Complex nervous/sensory systems leading to behavioral adaptations and rapid speciation', '1 Mark'],
    ['Insect co-evolution with flowering plants and protective chitinous exoskeleton/flight', '1 Mark']
  ]
));

// Q10
questions.push(createQCard(
  'c12b-ch13-q10',
  'Q10',
  'Exercises (NCERT Verbatim)',
  'Can you think of a situation where we deliberately want to make a species extinct? How would you justify it?',
  `<p><strong>Biological & Ethical Dilemma:</strong></p>
  <p>While conservation biology advocates the preservation of all planetary biodiversity, there are exceptional, highly debated clinical scenarios where human society has deliberately sought to achieve the total eradication (extinction) of specific lethal human pathogenic microbes:</p>

  <p><strong>1. Primary Candidate Species Targeted for Deliberate Eradication:</strong></p>
  <ul>
    <li><strong>Variola Virus (Smallpox):</strong> Successfully eradicated globally in 1980 through universal WHO vaccination campaigns (only surviving stocks kept in ultra-secure bio-safety level 4 laboratories).</li>
    <li><strong>Poliovirus (Poliomyelitis):</strong> Targeted globally for complete biological eradication through intensive pulse polio immunization.</li>
    <li><strong>Dracunculus medinensis (Guinea Worm):</strong> A crippling human parasitic nematode on the verge of complete worldwide eradication.</li>
    <li><strong>Vector Elimination (Debated):</strong> Genetic extinction technologies (CRISPR gene drives) targeting <strong><em>Anopheles gambiae</em></strong> (malaria vector mosquito) to collapse local populations.</li>
  </ul>

  <p><strong>2. Scientific & Humanitarian Justification:</strong></p>
  <ol>
    <li><strong>Obligate Lethal Human Pathogens:</strong> Viruses like Variola or Polio are obligate parasites with <em>no other animal reservoir or ecological niche</em>. They cause agonizing mortality, permanent paralysis, and suffering to millions of humans without serving any beneficial ecological food-chain role or ecosystem service.</li>
    <li><strong>Preservation of Human Life:</strong> Human survival and public health justify the eradication of specific lethal microbial agents that threaten civilization.</li>
  </ol>

  <p><strong>3. Ecological Counter-Warning:</strong></p>
  <ul>
    <li>Deliberately making any macroscopic wild species extinct (e.g., mosquito vectors or apex predators) is biologically hazardous, as their elimination could trigger unpredictable ecological cascading effects, food web collapse, or secondary pest outbreaks.</li>
  </ul>`,
  '3 Marks',
  [
    ['Identification of target species: Human-specific obligate pathogens (Variola smallpox virus, Poliovirus, Guinea worm)', '1 Mark'],
    ['Justification: Obligate pathogens causing mass human mortality/suffering without providing ecological services', '1 Mark'],
    ['Ecological counter-warning against targeting macroscopic species (risk of cascading food web collapse)', '1 Mark']
  ]
));

saveChapter(
  13,
  'Biodiversity and Conservation',
  svgDiagram,
  'NCERT Exercises (10 Verbatim Questions)',
  questions,
  ''
);
