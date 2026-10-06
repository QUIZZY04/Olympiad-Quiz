const fs = require('fs');
const path = require('path');
const chDir = path.join(__dirname, '..', 'chapters-c6s');

// ==========================================
// CHAPTER 9: Methods of Separation in Everyday Life
// ==========================================
const ch9Html = `<section class="chapter-section" id="ch9">
  <div class="chapter-header">
    <div class="ch-badge">9</div>
    <div class="chapter-header-info">
      <h2>Chapter 9: Methods of Separation in Everyday Life</h2>
      <p>NCERT Curiosity (Class 6) — Handpicking, Threshing, Winnowing, Sieving, Sedimentation, Decantation, Filtration, Churning &amp; Evaporation | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Separation Principles &amp; Techniques</div>
    <ul class="concept-list">
      <li><strong>Purpose of Separation:</strong> To remove harmful or undesirable impurities, separate useful components from mixtures, or isolate pure substances for analysis.</li>
      <li><strong>Separation of Solid-Solid Mixtures:</strong>
        <ul>
          <li><em>Handpicking:</em> Manually sorting visibly different substances based on size, colour, or shape when impurities are in small quantities.</li>
          <li><em>Threshing:</em> Beating harvested stalks against a hard surface to separate grain seeds.</li>
          <li><em>Winnowing:</em> Separating heavier components (grains) from lighter components (husk) using blowing wind.</li>
          <li><em>Sieving:</em> Separating particles of different sizes through wire mesh pores.</li>
        </ul>
      </li>
      <li><strong>Separation of Insoluble Solid-Liquid Mixtures:</strong>
        <ul>
          <li><em>Sedimentation:</em> Allowing heavier insoluble solid particles to settle down at the bottom of a container.</li>
          <li><em>Decantation:</em> Gently pouring out the upper clear liquid layer without disturbing the settled sediment.</li>
          <li><em>Filtration:</em> Passing a mixture through a porous filter medium (filter paper, muslin cloth) to completely retain insoluble residue.</li>
        </ul>
      </li>
      <li><strong>Separation of Soluble Solid-Liquid Mixtures:</strong>
        <ul>
          <li><em>Evaporation:</em> Heating a solution until the liquid solvent evaporates away, leaving the solid solute crystals behind (e.g., obtaining salt from seawater).</li>
          <li><em>Churning (Centrifugation):</em> Rapid spinning of curd/milk to separate lighter cream/butter from heavier liquid whey.</li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="ex-div">NCERT Exercise: Let Us Enhance Our Learning (100% Textbook Questions)</div>

  <!-- Q1 -->
  <div class="q-card" id="c6s-ch9-q1">
    <div class="q-head" onclick="toggleQ('c6s-ch9-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">What purpose does handpicking serve in the process of separation? <br>(i) Filtration <br>(ii) Sorting <br>(iii) Evaporation <br>(iv) Decantation</div>
      <div class="q-marks">[1 Mark]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Correct Option: (ii) Sorting</strong><br>
            <strong>Scientific Reason:</strong> Handpicking is a manual physical method used to selectively sort and remove unwanted impurities (such as pebbles, dirt, or insects) from grains based on visible differences in color, shape, and size.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Selecting option (ii) Sorting with justification</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q2 -->
  <div class="q-card" id="c6s-ch9-q2">
    <div class="q-head" onclick="toggleQ('c6s-ch9-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Which of the following substances are commonly separated using the churning method? <br>(i) Oil from water <br>(ii) Sand from water <br>(iii) Cream from milk <br>(iv) Oxygen from air</div>
      <div class="q-marks">[1 Mark]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Correct Option: (iii) Cream from milk (or Butter from curd)</strong><br>
            <strong>Scientific Reason:</strong> Churning involves rapid mechanical rotation of the liquid mixture. The lighter fat globules (cream/butter) have lower density and aggregate together, floating to the surface, while the denser liquid buttermilk remains below.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Selecting option (iii) with density and churning rationale</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q3 -->
  <div class="q-card" id="c6s-ch9-q3">
    <div class="q-head" onclick="toggleQ('c6s-ch9-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Which factor is usually essential for successful filtration? <br>(i) Apparatus size <br>(ii) Presence of air <br>(iii) Pore size of the filter medium <br>(iv) Temperature of the mixture</div>
      <div class="q-marks">[1 Mark]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Correct Option: (iii) Pore size of the filter medium</strong><br>
            <strong>Scientific Reason:</strong> In filtration, separation depends directly on the relative size of insoluble particles compared to the pore dimensions of the filter. Liquid molecules pass through the microscopic pores while larger insoluble solid particles are retained as residue.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Selecting option (iii) with pore-particle size relationship</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q4 -->
  <div class="q-card" id="c6s-ch9-q4">
    <div class="q-head" onclick="toggleQ('c6s-ch9-q4')">
      <div class="q-num">Q4</div>
      <div class="q-text">State with reasons whether the following statements are True (T) or False (F). Correct the false statement(s): <br>(i) Salt can be separated from a salt solution by keeping it under the Sun. <br>(ii) Handpicking should be used only when the quantity of the component to be separated is small. <br>(iii) A mixture of puffed rice and rice grains can be separated by threshing. <br>(iv) A mixture of mustard oil and lemon water can be separated by decantation. <br>(v) Sieving is used to separate a mixture of rice flour and water.</div>
      <div class="q-marks">[2.5 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) True.</strong> Solar heat causes water to evaporate into vapour, leaving solid salt crystals behind as residue (natural method of obtaining sea salt in salt pans).<br>
            <strong>(ii) True.</strong> Handpicking is labor-intensive and practical only when impurities are visibly distinct and present in relatively small amounts.<br>
            <strong>(iii) False.</strong> Correction: Threshing is used to separate grains from dried crop stalks. Puffed rice and rice grains differ significantly in weight and can be separated easily by <strong>winnowing</strong> (blowing wind carries away lighter puffed rice) or handpicking.<br>
            <strong>(iv) True.</strong> Mustard oil and lemon water are immiscible liquids. Mustard oil floats as a distinct upper layer due to lower density and can be poured off by decantation.<br>
            <strong>(v) False.</strong> Correction: Sieving separates dry solids of different particle sizes. To separate rice flour from water, <strong>filtration</strong> or <strong>sedimentation followed by decantation</strong> is used.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct evaluation and scientific justification</span><span class="marking-marks">0.5 Mark each (Total 2.5 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q5 -->
  <div class="q-card" id="c6s-ch9-q5">
    <div class="q-head" onclick="toggleQ('c6s-ch9-q5')">
      <div class="q-num">Q5</div>
      <div class="q-text">Match the mixtures in Column I with their appropriate method of separation in Column II: <br>• Sand and water <br>• Common salt dissolved in water <br>• Iron pins mixed with sulfur powder <br>• Butter from curd <br>• Tiny stones from wheat grains</div>
      <div class="q-marks">[2.5 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <table class="data-table">
            <thead>
              <tr>
                <th>Mixture (Column I)</th>
                <th>Separation Method (Column II)</th>
                <th>Underlying Scientific Difference</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sand and water</td>
                <td><strong>Sedimentation &amp; Decantation (or Filtration)</strong></td>
                <td>Sand is insoluble and heavier than water; settles at bottom.</td>
              </tr>
              <tr>
                <td>Common salt dissolved in water</td>
                <td><strong>Evaporation</strong></td>
                <td>Water evaporates away at boiling/ambient temperatures, leaving salt.</td>
              </tr>
              <tr>
                <td>Iron pins mixed with sulfur powder</td>
                <td><strong>Magnetic Separation</strong></td>
                <td>Iron is magnetic and attracted to a magnet; sulfur is non-magnetic.</td>
              </tr>
              <tr>
                <td>Butter from curd</td>
                <td><strong>Churning (Centrifugation)</strong></td>
                <td>Butter fat has lower density than liquid whey.</td>
              </tr>
              <tr>
                <td>Tiny stones from wheat grains</td>
                <td><strong>Handpicking</strong></td>
                <td>Stones differ visibly in colour and texture from wheat grains.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct matching with scientific difference identified</span><span class="marking-marks">0.5 Mark each (Total 2.5 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q6 -->
  <div class="q-card" id="c6s-ch9-q6">
    <div class="q-head" onclick="toggleQ('c6s-ch9-q6')">
      <div class="q-num">Q6</div>
      <div class="q-text">In what situations would you prefer to use decantation instead of filtration to separate solids from liquids? State two advantages and two limitations of decantation.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>When Decantation is Preferred Over Filtration:</strong><br>
            Decantation is chosen when the solid particles are <strong>coarse, heavy, and settle rapidly</strong> at the bottom of the container (e.g., washing rice or pulses with water before cooking, or separating coarse gravel from muddy water).
          </div>
          <div class="step">
            <strong>Advantages of Decantation:</strong><br>
            1. <strong>Fast and Convenient:</strong> Requires no special filter paper, funnels, or laboratory equipment.<br>
            2. <strong>No Filter Clogging:</strong> Heavy coarse solids would instantly clog and tear delicate filter paper; decantation bypasses this issue easily.
          </div>
          <div class="step">
            <strong>Limitations of Decantation:</strong><br>
            1. <strong>Incomplete Separation:</strong> Extremely fine, suspended clay particles remain floating in the liquid, resulting in turbid water.<br>
            2. <strong>Loss of Liquid:</strong> A small portion of liquid is inevitably left behind to prevent sediment from pouring out.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Identifying suitable conditions (heavy, fast-settling solids)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Stating two valid advantages</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Stating two valid limitations</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q7 -->
  <div class="q-card" id="c6s-ch9-q7">
    <div class="q-head" onclick="toggleQ('c6s-ch9-q7')">
      <div class="q-num">Q7</div>
      <div class="q-text">Can you relate the presence of fine hair inside our nasal cavity to any physical separation process studied in this chapter? Explain the biological mechanism.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Physical Separation Process: Filtration.</strong><br>
            <strong>Biological Mechanism:</strong><br>
            • The fine hair (cilia) and sticky mucus lining inside human nostrils act together as a <strong>biological sieve / filter medium</strong>.<br>
            • When we breathe in air containing suspended dust, smoke particles, pollen grains, and microbes, the air passes through the nasal passages while the larger solid particulate impurities get trapped in the sticky mesh of nasal hair.<br>
            • This prevents harmful pollutants from entering our sensitive lungs, functioning exactly like a filter paper retaining solid residue while allowing clean fluid through.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Correlating nasal hair with Filtration</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Explaining trapping of dust/pollen as biological filter residue</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q8 -->
  <div class="q-card" id="c6s-ch9-q8">
    <div class="q-head" onclick="toggleQ('c6s-ch9-q8')">
      <div class="q-num">Q8</div>
      <div class="q-text">During the COVID-19 pandemic, all of us wore protective face masks. What material are these masks generally made of? What is the scientific role of these masks based on separation principles?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Materials of Masks:</strong><br>
            Protective surgical and N95 face masks are typically made of multiple layers of <strong>non-woven polypropylene fabric</strong> (melt-blown polymer fibres) or closely woven multiple layers of cotton cloth.
          </div>
          <div class="step">
            <strong>2. Scientific Role as a Filter Medium:</strong><br>
            • The mask functions on the principle of <strong>Filtration</strong>.<br>
            • The microscopic pores of the melt-blown layer are small enough to allow oxygen and carbon dioxide molecules to pass through freely for breathing, while physically blocking and trapping respiratory droplets, airborne aerosol particles, and virus-laden droplets expelled during coughing, sneezing, or talking.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Stating material (non-woven polypropylene / multilayer cotton)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Explaining filtration of respiratory droplets while allowing gases through</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q9 -->
  <div class="q-card" id="c6s-ch9-q9">
    <div class="q-head" onclick="toggleQ('c6s-ch9-q9')">
      <div class="q-num">Q9</div>
      <div class="q-text">A dry mixture containing potatoes, salt, and sawdust has been given to you. Outline a sequential, step-by-step procedure to separate each component from this mixture into pure states.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Stepwise Separation Flow:</strong><br>
            1. <strong>Step 1: Handpicking (Separating Potatoes):</strong><br>
            Potatoes are much larger than salt crystals and sawdust particles. They can be picked out manually by hand, leaving a mixture of salt and sawdust.<br><br>
            2. <strong>Step 2: Dissolution in Water:</strong><br>
            Add sufficient water to the remaining mixture of salt and sawdust and stir thoroughly with a glass rod. The common salt dissolves completely in water, while the sawdust is insoluble, has a low density, and floats on the water surface.<br><br>
            3. <strong>Step 3: Filtration (Separating Sawdust):</strong><br>
            Pass the mixture through a filter paper supported in a funnel. The insoluble sawdust is collected as the <strong>residue</strong> on the filter paper. Wash it with a little water and allow it to dry in the sun.<br><br>
            4. <strong>Step 4: Evaporation (Recovering Pure Salt):</strong><br>
            Transfer the clear saltwater filtrate into an evaporating dish and heat it gently over a burner. The water evaporates as steam, leaving dry solid <strong>common salt crystals</strong> behind.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Step 1: Handpicking of potatoes</span><span class="marking-marks">0.75 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Step 2: Dissolution of salt in water</span><span class="marking-marks">0.75 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Step 3: Filtration to isolate sawdust residue</span><span class="marking-marks">0.75 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Step 4: Evaporation of filtrate to obtain salt</span><span class="marking-marks">0.75 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q10 -->
  <div class="q-card" id="c6s-ch9-q10">
    <div class="q-head" onclick="toggleQ('c6s-ch9-q10')">
      <div class="q-num">Q10</div>
      <div class="q-text">Read the story: "Leela and her father were working in their agricultural field on a hot afternoon. They realized they had forgotten to bring drinking water from home. Leela walked to a nearby pond where the water was muddy and turbid. She filled a pot, kept it undisturbed for an hour, strained the upper clear water through her clean cotton dupatta, boiled the water vigorously over a small firewood flame, and cooled it for drinking." <br>(a) Identify all the scientific separation and purification techniques used by Leela in sequence. <br>(b) Why was boiling essential before drinking? <br>(c) Provide a suitable title of your choice for this story.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a) Sequential Scientific Techniques Used:</strong><br>
            1. <strong>Sedimentation:</strong> Keeping the muddy water undisturbed for an hour allowed heavier clay and silt particles to settle to the bottom.<br>
            2. <strong>Decantation &amp; Filtration:</strong> Pouring the upper liquid through a cotton dupatta strained out coarse suspended plant debris and remaining fine sediment.<br>
            3. <strong>Thermal Disinfection (Boiling):</strong> Heating the water killed invisible disease-causing bacteria, protozoa, and waterborne pathogens.<br>
            4. <strong>Cooling:</strong> Bringing the sterile potable water back to room temperature for safe hydration.
          </div>
          <div class="step">
            <strong>(b) Necessity of Boiling:</strong><br>
            Filtration through cloth only removes visible physical suspended impurities; it cannot remove microscopic living germs and pathogens. Boiling at 100 °C sterilizes the water, preventing waterborne diseases like cholera, typhoid, and dysentery.
          </div>
          <div class="step">
            <strong>(c) Suitable Story Title:</strong><br>
            <em>"Intelligent Leela: Science in Action for Safe Drinking Water"</em> (or <em>"Turning Pond Water into Pure Nectar"</em>).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Identification of Sedimentation, Filtration, and Boiling</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Reason for boiling (killing invisible microbial pathogens)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Creative, appropriate title</span><span class="marking-marks">0.5 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- CBQ Case Study -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Competency-Based Question (Municipal Water Treatment Case Study)</div>
    <div class="q-text"><strong>Case Study: Municipal River Water Purification:</strong><br>
      A municipal water treatment plant draws raw water from a river and supplies safe potable drinking water to over 50,000 homes in a city.<br>
      (a) Alum (phitkari) is added to river water during the loading process. What is the scientific purpose of loading?<br>
      (b) Describe the three layers used in municipal sand filters to purify water.<br>
      (c) Why is liquid chlorine gas or bleaching powder mixed into the clarified water as the final step before pumping to homes?
    </div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>(a) Purpose of Loading with Alum:</strong><br>
        River water contains extremely light, colloidal clay particles that remain suspended indefinitely. Dissolved alum particles attach to these tiny clay particles, making them heavier so that they settle rapidly at the bottom of sedimentation tanks.</p>

        <p><strong>(b) Layers in a Sand Filter:</strong><br>
        A municipal gravity filter consists of: (1) A fine sand layer at the top to trap microscopic sediment, (2) A coarse sand layer in the middle, and (3) A gravel / pebble bed at the bottom that supports the sand while allowing clear water to drain through.</p>

        <p><strong>(c) Chlorination Purpose:</strong><br>
        Chlorination is the chemical <strong>disinfection stage</strong>. Chlorine acts as a powerful germicide that kills all residual bacteria, viruses, and pathogens, ensuring water remains sterile during pipeline transit.</p>
      </div>
    </div>
  </div>
</section>
`;

fs.writeFileSync(path.join(chDir, 'ch9.html'), ch9Html, 'utf8');
console.log('Chapter 9 updated with 100% NCERT Curiosity questions (Q1 to Q10 + CBQ).');
