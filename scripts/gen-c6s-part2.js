const fs = require('fs');
const path = require('path');
const chDir = path.join(__dirname, '..', 'chapters-c6s');

// (Keep Chapter 5 as above, append Chapters 6, 7, and 8)
const ch5Html = fs.readFileSync(path.join(chDir, 'ch5.html'), 'utf8');

// ==========================================
// CHAPTER 6: Materials Around Us
// ==========================================
const ch6Html = `<section class="chapter-section" id="ch6">
  <div class="chapter-header">
    <div class="ch-badge">6</div>
    <div class="chapter-header-info">
      <h2>Chapter 6: Materials Around Us</h2>
      <p>NCERT Curiosity (Class 6) — Properties of Materials, Lustre, Hardness, Solubility, Transparency &amp; Waste Segregation | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Material Properties &amp; Classification Principles</div>
    <ul class="concept-list">
      <li><strong>Definition of Matter:</strong> Anything that occupies space (volume) and possesses mass is called matter.</li>
      <li><strong>Physical Properties for Sorting Materials:</strong>
        <ul>
          <li><em>Lustre (Shine):</em> Freshly cut surfaces of metals (Gold, Silver, Copper, Aluminium) shine brightly. Non-metals (wood, rubber, chalk) are dull.</li>
          <li><em>Hardness vs Softness:</em> Hard materials cannot be scratched or compressed easily (Iron, Diamond). Soft materials can be compressed or scratched easily (Sponge, Wax, Cotton).</li>
          <li><em>Solubility in Water:</em> Substances that dissolve completely and disappear in water are <strong>soluble</strong> (Sugar, Salt). Those that do not mix are <strong>insoluble</strong> (Sand, Chalk powder, Mustard oil).</li>
          <li><em>Density (Floating vs Sinking):</em> Objects less dense than water float (Dry leaves, Wood, Oil). Denser objects sink (Iron nail, Stone).</li>
        </ul>
      </li>
      <li><strong>Optical Transparency:</strong>
        <ul>
          <li><em>Transparent:</em> Materials through which light passes freely, allowing objects to be seen clearly (Clean glass, Air, Pure water).</li>
          <li><em>Translucent:</em> Materials allowing partial light to pass through, so objects are seen hazily/blurred (Oiled paper, Butter paper, Frosted glass).</li>
          <li><em>Opaque:</em> Materials blocking all light; cannot see through at all (Wood, Cardboard, Metals).</li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="ex-div">NCERT Exercise: Let Us Enhance Our Learning (100% Textbook Questions)</div>

  <!-- Q1 -->
  <div class="q-card" id="c6s-ch6-q1">
    <div class="q-head" onclick="toggleQ('c6s-ch6-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Visit your kitchen and observe how your parents have organized various edibles. Can you suggest a better sorting method? Write it down in your notebook with scientific justification.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Kitchen Observation:</strong><br>
            In most kitchens, food items are typically arranged based on daily frequency of use and physical shelf size rather than scientific categories.
          </div>
          <div class="step">
            <strong>2. Proposed Systematic Scientific Sorting Method:</strong><br>
            Edibles should be segregated into distinct labelled zones based on material properties and storage requirements:
            • <strong>Zone 1 — Whole Grains &amp; Flours (Dry Staples):</strong> Wheat flour (Atta), Rice, Millets stored in large, airtight stainless steel bins to keep out moisture and insects.<br>
            • <strong>Zone 2 — Pulses &amp; Legumes (Dals):</strong> Moong, Chana, Rajma, Toor dal kept in transparent glass or clear plastic jars arranged alphabetically for instant visual identification.<br>
            • <strong>Zone 3 — Spices &amp; Seasonings:</strong> Turmeric, Cumin, Mustard seeds, Salt kept in a moisture-free multi-compartment spice box (masala dabba) near the cooking stove.<br>
            • <strong>Zone 4 — Liquid Edibles:</strong> Mustard oil, Ghee, Vinegar kept in non-reactive bottles on lower spill-proof trays.<br>
            • <strong>Zone 5 — Perishable Produce:</strong> Fresh vegetables and fruits stored in ventilated wicker baskets or refrigerator crispers.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Recording realistic kitchen observation</span><span class="marking-marks">0.5 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Proposing systematic categorization based on material states and properties</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q2 -->
  <div class="q-card" id="c6s-ch6-q2">
    <div class="q-head" onclick="toggleQ('c6s-ch6-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Unscramble the letters in Column I and match them with their characteristic properties given in Column II: <br>• T R E M A T <br>• U L S B E L O <br>• T N E R P A S N A R T <br>• E R U S T L</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <table class="data-table">
            <thead>
              <tr>
                <th>Jumbled Letters (Column I)</th>
                <th>Unscrambled Scientific Term</th>
                <th>Matching Property (Column II)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>T R E M A T</td>
                <td><strong>MATTER</strong></td>
                <td>Occupies space and possesses mass</td>
              </tr>
              <tr>
                <td>U L S B E L O</td>
                <td><strong>SOLUBLE</strong></td>
                <td>Dissolves / mixes completely in water</td>
              </tr>
              <tr>
                <td>T N E R P A S N A R T</td>
                <td><strong>TRANSPARENT</strong></td>
                <td>Objects can be seen through it clearly</td>
              </tr>
              <tr>
                <td>E R U S T L</td>
                <td><strong>LUSTRE</strong></td>
                <td>Shiny appearance on freshly exposed surface</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct unscrambling and property matching</span><span class="marking-marks">0.5 Mark each (Total 2 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q3 -->
  <div class="q-card" id="c6s-ch6-q3">
    <div class="q-head" onclick="toggleQ('c6s-ch6-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">The containers used to store materials in shops and at home are usually transparent (such as glass jars or clear plastic containers). Give scientific and practical reasons for this practice.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Reasons for Using Transparent Containers:</strong><br>
            1. <strong>Optical Property of Transparency:</strong> Transparent materials allow light to pass through unobstructed. This enables shopkeepers and homemakers to see the stored items inside clearly from outside without opening the lid.<br>
            2. <strong>Time Efficiency &amp; Convenience:</strong> Customers in a grocery shop can locate pulses, candies, or spices instantly, saving time and preventing frequent opening that exposes food to air moisture and pests.<br>
            3. <strong>Monitoring Stock &amp; Quality:</strong> It allows quick visual inspection of remaining quantities and early detection of spoilage, fungal growth, or insect infestation.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Explaining property of transparency allowing clear light transmission</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Stating practical benefits (instant visual identification, stock monitoring)</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q4 -->
  <div class="q-card" id="c6s-ch6-q4">
    <div class="q-head" onclick="toggleQ('c6s-ch6-q4')">
      <div class="q-num">Q4</div>
      <div class="q-text">State whether the statements given below are True (T) or False (F). Correct the false statement(s): <br>(i) Wood is translucent while glass is opaque. <br>(ii) Aluminium foil has lustre while an eraser does not. <br>(iii) Sugar dissolves in water whereas sawdust does not. <br>(iv) An apple is matter because it occupies no space and has mass.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) False.</strong> Correction: <strong>Wood is opaque</strong> (blocks all light) while <strong>clean glass is transparent</strong> (allows light to pass through completely).<br>
            <strong>(ii) True.</strong> Aluminium is a metal and possesses metallic lustre (shine), whereas an eraser is made of rubber and has a dull, non-lustrous surface.<br>
            <strong>(iii) True.</strong> Sugar crystals are soluble and dissolve completely between water molecules, whereas sawdust particles are insoluble and float/remain suspended.<br>
            <strong>(iv) False.</strong> Correction: An apple is matter because it <strong>occupies definite space (volume) AND has mass</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct evaluation and rectification</span><span class="marking-marks">0.5 Mark each (Total 2 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q5 -->
  <div class="q-card" id="c6s-ch6-q5">
    <div class="q-head" onclick="toggleQ('c6s-ch6-q5')">
      <div class="q-num">Q5</div>
      <div class="q-text">We see chairs made up of various materials such as wood, iron, plastic, bamboo, cement, and stones. Which of these materials fulfil the following desirable properties the most? <br>(i) Hardness (does not bend or shake on sitting even after long use) <br>(ii) Lightweight (easy to lift or take from one place to another) <br>(iii) Does not feel very cold when sitting during winters <br>(iv) Can be cleaned regularly and made to look new even after long use</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Material Matching:</strong><br>
            • <strong>(i) High Hardness &amp; Rigidity:</strong> <strong>Iron, Stone, or Cement</strong> fulfill this property the most because of their high tensile strength and rigid crystalline structures; they do not bend or deform under heavy load.<br>
            • <strong>(ii) Lightweight &amp; Portability:</strong> <strong>Plastic or Bamboo</strong> fulfill this best because they have low density, making them lightweight and very easy to carry.<br>
            • <strong>(iii) Thermal Comfort in Winter (Poor Conductor of Heat):</strong> <strong>Wood or Bamboo</strong> fulfill this property best because they are thermal insulators. Unlike metals or stone, they do not conduct heat rapidly away from the human body, so they do not feel icy cold to sit on.<br>
            • <strong>(iv) Ease of Regular Cleaning &amp; Washing:</strong> <strong>Plastic or Polished Stainless Steel/Iron</strong> fulfill this best because they are non-porous, waterproof, resistant to stains, and can be washed with soapy water without rotting.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct material choice matched with scientific property rationale</span><span class="marking-marks">0.75 Mark each (Total 3 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q6 -->
  <div class="q-card" id="c6s-ch6-q6">
    <div class="q-head" onclick="toggleQ('c6s-ch6-q6')">
      <div class="q-num">Q6</div>
      <div class="q-text">You need to have containers for the collection of: (i) Food waste, (ii) Broken glass pieces, and (iii) Wastepaper. Which materials will you choose for containers of these types of waste? What properties of materials do you need to think of?</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <table class="data-table">
            <thead>
              <tr>
                <th>Waste Category</th>
                <th>Chosen Container Material</th>
                <th>Essential Material Properties Considered</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>(i) Food Waste (Wet Kitchen Waste)</strong></td>
                <td>High-density <strong>Plastic</strong> (with a tight-fitting lid)</td>
                <td><strong>Waterproof, non-corrosive, non-porous, and easily washable:</strong> Food waste is moist and decays, releasing liquids and foul odours. Plastic will not rust, leak, or rot, and can be washed daily.</td>
              </tr>
              <tr>
                <td><strong>(ii) Broken Glass Pieces (Sharp Hazard)</strong></td>
                <td>Thick <strong>Heavy-duty Metal / Galvanized Iron</strong> or thick rigid plastic bucket</td>
                <td><strong>High puncture resistance, hardness, and mechanical toughness:</strong> Sharp jagged glass edges can easily pierce paper or thin bags, injuring sanitation workers. Strong metal walls prevent punctures.</td>
              </tr>
              <tr>
                <td><strong>(iii) Wastepaper (Dry Recyclable)</strong></td>
                <td><strong>Cardboard box, wicker basket, or light plastic bin</strong></td>
                <td><strong>Lightweight, dry, and breathable:</strong> Wastepaper is light and dry. A simple lightweight container keeps the papers neatly stacked without taking up unnecessary weight.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Choice of container and properties for food waste (plastic, waterproof)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Choice of container and properties for broken glass (metal, puncture-resistant)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Choice of container and properties for wastepaper (cardboard/light bin)</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q7 -->
  <div class="q-card" id="c6s-ch6-q7">
    <div class="q-head" onclick="toggleQ('c6s-ch6-q7')">
      <div class="q-num">Q7</div>
      <div class="q-text">Air is all around us but does not hinder us from seeing each other. Whereas, if a wooden door comes in front of us, we cannot see through it. Why is it so? Explain using optical properties of materials.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Optical Explanation:</strong><br>
            • <strong>Air is a Transparent Medium:</strong> Clean air consists of widely spaced gas molecules that allow light rays to travel straight through without reflecting or absorbing them. Because light reflected from objects reaches our eyes unimpeded, air does not hinder visibility.<br>
            • <strong>Wood is an Opaque Material:</strong> A wooden door is dense and solid. Its molecules absorb or reflect all incident light rays completely, allowing zero light to pass through. Since no light from objects behind the door can reach our eyes, we cannot see through a wooden door.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Explaining that air is transparent and transmits light completely</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Explaining that wood is opaque and blocks light transmission</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q8 -->
  <div class="q-card" id="c6s-ch6-q8">
    <div class="q-head" onclick="toggleQ('c6s-ch6-q8')">
      <div class="q-num">Q8</div>
      <div class="q-text">A substance X is hard, rigid, cannot be compressed easily, and dissolves completely in water. Another substance Y is soft, highly compressible, and does not dissolve in water. Identify substances X and Y from daily life and justify your answer.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Identification &amp; Justification:</strong><br>
            • <strong>Substance X: Common Rock Salt (or Sugar crystal / Alum).</strong><br>
            <em>Justification:</em> Salt or sugar crystals have a rigid crystalline lattice that makes them hard and virtually incompressible under finger pressure, yet their polar chemical bonds allow them to dissolve completely in water.<br>
            • <strong>Substance Y: Sponge (or Cotton wool / Foam).</strong><br>
            <em>Justification:</em> A sponge has tiny pores filled with air, allowing it to be easily compressed when squeezed. It is made of insoluble synthetic polyurethane or cellulose fibres that do not dissolve in water.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Identifying Substance X (Rock salt / Sugar) with property justification</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Identifying Substance Y (Sponge / Cotton) with property justification</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q9 -->
  <div class="q-card" id="c6s-ch6-q9">
    <div class="q-head" onclick="toggleQ('c6s-ch6-q9')">
      <div class="q-num">Q9</div>
      <div class="q-text">Solve the "Who Am I?" material riddles: <br>(i) I shine brightly when freshly cut and conduct heat well. <br>(ii) I can be easily compressed because I have many air cavities inside me. <br>(iii) I am hard, but when dropped in water, I vanish completely. <br>(iv) You can see light through me, but you cannot see objects clearly. <br>(v) I have mass and occupy volume, but you cannot touch or hold me in your hands.</div>
      <div class="q-marks">[2.5 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            (i) <strong>A Metal (e.g., Copper, Aluminium, Iron, Silver):</strong> Possesses metallic lustre and thermal conductivity.<br>
            (ii) <strong>A Sponge (or Foam):</strong> High compressibility due to trapped air in microscopic pores.<br>
            (iii) <strong>Common Salt / Sugar:</strong> Hard crystalline solids exhibiting high water solubility.<br>
            (iv) <strong>A Translucent Object (e.g., Butter paper, Frosted glass, Oiled paper):</strong> Transmits partial diffuse light.<br>
            (v) <strong>Air (or Atmospheric Gas):</strong> Invisible matter having mass and volume.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct identification</span><span class="marking-marks">0.5 Mark each (Total 2.5 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q10 -->
  <div class="q-card" id="c6s-ch6-q10">
    <div class="q-head" onclick="toggleQ('c6s-ch6-q10')">
      <div class="q-num">Q10</div>
      <div class="q-text">You are provided with the following materials: Vinegar, Honey, Mustard oil, Water, Glucose, and Wheat flour. <br>(a) Make any two pairs of materials where one material is soluble/miscible in the other. <br>(b) Make two pairs of materials where one material remains insoluble/immiscible in the other.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a) Soluble / Miscible Pairs (Dissolve completely forming a uniform mixture):</strong><br>
            1. <strong>Glucose in Water:</strong> Solid glucose powder dissolves completely in water to form a clear sweet solution.<br>
            2. <strong>Vinegar in Water (or Honey in Water):</strong> Vinegar is an aqueous solution of acetic acid that mixes completely (miscible) with water.
          </div>
          <div class="step">
            <strong>(b) Insoluble / Immiscible Pairs (Do not dissolve; remain separate):</strong><br>
            1. <strong>Mustard Oil and Water:</strong> Mustard oil is non-polar and less dense than water; it forms a separate floating layer on top of water (immiscible liquids).<br>
            2. <strong>Wheat Flour and Water:</strong> Wheat flour contains insoluble starches and gluten; it forms a cloudy suspension that settles at the bottom over time.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Two correct soluble pairs with scientific justification</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Two correct insoluble pairs with scientific justification</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- CBQ Case Study -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Competency-Based Question (Industrial Material Selection Case Study)</div>
    <div class="q-text"><strong>Case Study: Cooking Utensil Design &amp; Thermal Properties:</strong><br>
      An industrial product designer is manufacturing a modern kitchen frying pan. The pan consists of two distinct components: a metal base and a handle.<br>
      (a) Why is the body of the frying pan made of stainless steel or aluminium rather than wood or plastic?<br>
      (b) Why is the handle made of Bakelite (hard plastic) or wood rather than copper?<br>
      (c) Explain why cooking oil floats on water when cleaning oily utensils in a sink.
    </div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>(a) Body Material Rationale:</strong><br>
        Aluminium and stainless steel are <strong>excellent conductors of heat</strong> and have high melting points. They conduct heat rapidly and evenly to cook food without burning or warping.</p>

        <p><strong>(b) Handle Material Rationale:</strong><br>
        Wood and Bakelite plastic are <strong>thermal insulators (poor conductors of heat)</strong>. Even when the pan base becomes scorching hot on the stove, the handle remains cool, allowing safe handling without burning one's hands.</p>

        <p><strong>(c) Flotation of Cooking Oil:</strong><br>
        Cooking oil has a <strong>lower density</strong> than water and is <strong>immiscible</strong> in water. Because its buoyant force exceeds its downward weight per unit volume, it forms a distinct layer floating above water.</p>
      </div>
    </div>
  </div>
</section>
`;

fs.writeFileSync(path.join(chDir, 'ch6.html'), ch6Html, 'utf8');
console.log('Chapter 6 updated with 100% NCERT Curiosity questions (Q1 to Q10 + CBQ).');
