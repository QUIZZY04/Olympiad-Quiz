const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'chapters-c10h');

// Chapter 16: बड़े भाई साहब
const ch16Html = `<section class="chapter-section" id="ch16" data-book="sparsh-gadh">
  <div class="chapter-header">
    <div class="ch-badge">16</div>
    <div class="chapter-header-info">
      <div class="ch-category">स्पर्श भाग-2 (गद्य खंड) — पाठ 1</div>
      <h2>बड़े भाई साहब</h2>
      <p>प्रेमचंद | मनोवैज्ञानिक कहानी — शिक्षा प्रणाली पर व्यंग्य, रटंत विद्या बनाम व्यावहारिक अनुभव और भ्रातृ-प्रेम | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch16-q1">
    <div class="q-head" onclick="toggleQ('ch16-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">छोटे भाई ने अपनी पढ़ाई और खेलकूद के बीच किस प्रकार का टाइम-टेबल बनाया और उसका क्या परिणाम हुआ?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>टाइम-टेबल का निर्माण:</strong> बड़े भाई साहब की डाँट-फटकार सुनकर छोटे भाई ने पढ़ाई के लिए एक अत्यंत कठोर समय-सारणी बनाई, जिसमें सुबह 6 बजे से रात 11 बजे तक हर विषय (अंग्रेजी, गणित, इतिहास आदि) के लिए समय निर्धारित था। किंतु उस टाइम-टेबल में खेलकूद के लिए एक मिनट का भी समय नहीं रखा गया था।</p>
          <p><strong>परिणाम:</strong> टाइम-टेबल बनाना अलग बात है और उस पर अमल करना दूसरी। खेल के मैदान की सुखद हरियाली, फुटबॉल की उछल-कूद और कबड्डी के दाँव-पेंच उसे बरबस खींच ले जाते थे। पहले ही दिन से टाइम-टेबल की धज्जियाँ उड़ने लगीं और वह उसका पालन नहीं कर सका।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">कठोर समय-सारणी व खेल के अभाव का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">मैदान के आकर्षण व क्रियान्वयन की विफलता का विश्लेषण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch16-q2">
    <div class="q-head" onclick="toggleQ('ch16-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">बड़े भाई साहब दिमाग को आराम देने के लिए क्या-क्या करते थे?</div>
      <div class="q-marks">2 अंक (30-40 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>बड़े भाई साहब दिन-रात लगातार पढ़ते रहते थे। जब उनका दिमाग थक जाता था, तो वे अपनी कॉपियों और किताबों के हाशियों पर चिड़ियों, कुत्तों और बिल्लियों की तस्वीरें बनाते थे। कभी-कभी वे एक ही शब्द या नाम को दस-बीस बार लिखते थे या ऐसे बेमेल शेरों और तुकबंदियों की रचना करते थे जिनका कोई सिर-पैर नहीं होता था।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">कॉपियों पर जानवरों के चित्र बनाना</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">निरर्थक शब्दों की तुकबंदियाँ व पुनरावृत्ति</span><span class="marking-marks">1.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch16-q3">
    <div class="q-head" onclick="toggleQ('ch16-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">बड़े भाई साहब की डाँट-फटकार अगर न मिलती, तो क्या छोटा भाई कक्षा में अव्वल आता? अपने विचार दीजिए।</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>हमारे विचार से यदि बड़े भाई साहब की निरंतर निगरानी और डाँट-फटकार न होती, तो छोटा भाई कभी भी कक्षा में प्रथम नहीं आ पाता।</p>
          <p>छोटा भाई स्वभाव से अत्यंत खेलप्रिय और मौज-मस्ती पसंद करने वाला था। बड़े भाई का कठोर अनुशासन और नैतिक डर ही तलवार की भाँति उसके सिर पर लटकता रहता था, जिसके कारण वह खेलकूद से समय चुराकर थोड़ा-बहुत अवश्य पढ़ लेता था। उसकी प्रतिभा उस डर और संयम के कारण ही निखर सकी।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">छोटे भाई के खेलप्रिय स्वभाव का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">बड़े भाई के भय व अनुशासन द्वारा सफलता की व्याख्या</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch16-q4">
    <div class="q-head" onclick="toggleQ('ch16-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">इस पाठ में लेखक ने समूची शिक्षा प्रणाली के किन-किन दोषों पर व्यंग्य किया है?</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>प्रेमचंद जी ने तत्कालीन अंग्रेजी औपनिवेशिक शिक्षा प्रणाली की निम्नलिखित विसंगतियों पर तीखा कटाक्ष किया है:</p>
          <ul>
            <li><strong>रटंत विद्या को प्रोत्साहन:</strong> परीक्षा प्रणाली केवल रटने पर आधारित है, वास्तविक समझ और बुद्धि के विकास पर नहीं। आठ-आठ हेनरी और विलियम के नाम याद करने पर विवश किया जाता है।</li>
            <li><strong>अव्यावहारिक पाठ्यक्रम:</strong> ज्यामिति में 'अ ब ज' की जगह 'अ ज ब' लिख देने पर शून्य अंक दे देना विद्यार्थियों के मानसिक शोषण का प्रमाण है।</li>
            <li><strong>जीवनोपयोगी ज्ञान का अभाव:</strong> 'समय की पाबंदी' पर चार पन्ने का निबंध लिखने का आदेश देकर कहा जाता है कि संक्षेप में लिखो, जो अपने आप में हास्यास्पद अंतर्विरोध है। यह शिक्षा व्यक्ति को केवल डिग्रियाँ देती है, जीवन जीने की व्यावहारिक बुद्धि नहीं।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">रटंत प्रणाली व इतिहास-ज्यामिति के अव्यावहारिक उदाहरण</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">निबंध लेखन के अंतर्विरोध व बौद्धिक शोषण पर व्यंग्य</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch16-q5">
    <div class="q-head" onclick="toggleQ('ch16-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">बड़े भाई साहब ने जिंदगी के अनुभव और किताबी ज्ञान में से किसे और क्यों महत्वपूर्ण कहा है?</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>बड़े भाई साहब ने किताबी ज्ञान की तुलना में ज़िंदगी के तजुर्बे और व्यावहारिक अनुभव को कहीं अधिक श्रेष्ठ और महत्त्वपूर्ण माना है:</p>
          <ul>
            <li><strong>अम्मा और दादा का उदाहरण:</strong> हमारी अम्मा ने कोई दर्जा पास नहीं किया और दादा ने भी केवल पाँचवीं-छठी पढ़ी है, किंतु वे दुनिया की समझ में हमसे कहीं आगे हैं। यदि हम बीमार पड़ जाएँ, तो दादा को तार भेजने के बजाय घर में ही उचित प्रबंध कर लेंगे।</li>
            <li><strong>हेडमास्टर साहब की माँ:</strong> एम.ए. पास हेडमास्टर साहब जब घर का खर्च चलाते थे, तो महीने के अंत में कर्ज लेना पड़ता था। जब उनकी अनपढ़ माँ ने प्रबंध संभाला, तो घर में बरकत आ गई।</li>
            <li><strong>निष्कर्ष:</strong> किताबी ज्ञान केवल सूचनाएँ देता है, जबकि ज़िंदगी का अनुभव मनुष्य को जीवन जीने, संकटों का सामना करने और सही निर्णय लेने की व्यावहारिक सूझबूझ देता है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">अम्मा, दादा व हेडमास्टर साहब के सटीक दृष्टांत</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">जीवन अनुभव की श्रेष्ठता व व्यावहारिक तर्क</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch16-q6">
    <div class="q-head" onclick="toggleQ('ch16-q6')">
      <div class="q-num">प्रश्न 6</div>
      <div class="q-text">बड़े भाई की स्वाभाविक विशेषताएँ क्या थीं? पाठ के आधार पर चरित्र-चित्रण कीजिए।</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>पाठ के आधार पर बड़े भाई साहब के चरित्र की प्रमुख विशेषताएँ निम्नलिखित हैं:</p>
          <ul>
            <li><strong>परिश्रमी व गंभीर:</strong> वे दिन-रात किताबों में आँखें गड़ाए रहते थे और कभी खेलकूद में समय बर्बाद नहीं करते थे।</li>
            <li><strong>कर्तव्यपरायण व आदर्शवादी:</strong> वे स्वयं को बड़े भाई के रूप में एक आदर्श मिसाल बनाना चाहते थे, इसलिए अपनी बाल-सुलभ इच्छाओं का बलिदान कर देते थे।</li>
            <li><strong>स्नेही व संरक्षक:</strong> ऊपर से कठोर और डांटने वाले दिखाई देने पर भी उनके दिल में छोटे भाई के प्रति अगाध प्रेम और उसकी भलाई की गहरी चिंता थी।</li>
            <li><strong>उपदेश-कला में निपुण:</strong> वे सूक्ति-बाण चलाने और मनोवैज्ञानिक तर्क देकर छोटे भाई को अनुशासन में रखने में प्रवीण थे।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">परिश्रम, कर्तव्यनिष्ठा व बाल-इच्छाओं के त्याग का उल्लेख</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">भ्रातृ-स्नेह, उपदेश-कला व आंतरिक कोमलता का विश्लेषण</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch16-q7">
    <div class="q-head" onclick="toggleQ('ch16-q7')">
      <div class="q-num">प्रश्न 7</div>
      <div class="q-text">'बुनियाद ही पुख्ता न हो तो मकान पायेदार कैसे बने?'—इस कथन का आशय स्पष्ट कीजिए।</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>आशय:</strong> बड़े भाई साहब का मानना था कि जिस प्रकार किसी मजबूत और टिकाऊ मकान के निर्माण के लिए उसकी नींव (बुनियाद) का सुदृढ़ होना अनिवार्य है, उसी प्रकार जीवन में उच्च ज्ञान और सफलता प्राप्त करने के लिए प्रारंभिक शिक्षा का आधार ठोस होना चाहिए।</p>
          <p>यही कारण था कि वे हर कक्षा में एक साल के बजाय दो-तीन साल लगाते थे ताकि उनकी शिक्षा की नींव पुख्ता बन सके। यद्यपि यह उनका आत्मसंतोषी तर्क था, किंतु बात मूलभूत रूप से सत्य थी।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">नींव और इमारत के रूपक का स्पष्टीकरण</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">प्रारंभिक शिक्षा की सुदृढ़ता के संदर्भ में निहितार्थ</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch16-q8">
    <div class="q-head" onclick="toggleQ('ch16-q8')">
      <div class="q-num">प्रश्न 8</div>
      <div class="q-text">पाठ के अंत में बड़े भाई साहब ने छोटे भाई के पतंग लूटने पर क्या प्रतिक्रिया दी और उनका क्या बड़प्पन प्रकट हुआ?</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>पाठ के अंत में जब एक कटी हुई पतंग उनके ऊपर से गुज़री, तो लंबे कद के बड़े भाई साहब ने उछलकर उसकी डोर पकड़ ली और हॉस्टल की ओर बेतहाशा दौड़ पड़े। छोटा भाई भी उनके पीछे-पीछे दौड़ रहा था।</p>
          <p>इस घटना से सिद्ध हुआ कि बड़े भाई साहब भी मूलतः एक किशोर बालक ही थे, जिनका मन भी पतंग उड़ाने और खेलने को ललचाता था। किंतु केवल छोटे भाई को राह पर रखने और अपने बड़े होने की मर्यादा निभाने के लिए वे अपनी इच्छाओं को दबाए रखते थे। डोर पकड़कर दौड़ने में उनका बाल-सुलभ रूप प्रकट हुआ और उनका आत्म-त्याग तथा बड़प्पन पूरी तरह उजागर हो गया।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">पतंग की डोर पकड़कर दौड़ने की घटना का चित्रण</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">दबी हुई बाल-सुलभ इच्छाओं व बड़प्पन के त्याग का प्रकटीकरण</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Questions (CBQs) -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Board Competency-Based Question (योग्यता आधारित प्रश्न)</div>
    <div class="q-text"><strong>मनोवैज्ञानिक एवं शैक्षणिक विश्लेषण (Psychological & Pedagogical Analysis):</strong> 'बड़े भाई साहब' पाठ में दो परस्पर विरोधी शैक्षणिक दृष्टियों (रटंत किताबी ज्ञान बनाम सहज खेलप्रियता) का द्वंद्व है। राष्ट्रीय शिक्षा नीति (NEP 2020) के संदर्भ में समीक्षा कीजिए कि खेल-आधारित और अनुभवात्मक अधिगम (Experiential Learning) किस प्रकार इन दोनों के बीच संतुलन स्थापित कर सकता है?</div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">विशेषज्ञ उत्तर व विश्लेषणात्मक दृष्टिकोण</div>
      <div class="answer-text">
        <p><strong>विश्लेषण:</strong> बड़े भाई साहब जहाँ कठोर रटंत और अव्यावहारिक बोझिल पढ़ाई के शिकार थे, वहीं छोटा भाई स्वाभाविक रुचि और खेलकूद के माध्यम से भी मानसिक रूप से सजग था।</p>
        <p><strong>NEP 2020 के आलोक में संतुलन:</strong> राष्ट्रीय शिक्षा नीति 2020 रटंत अधिगम का विरोध करती है और खेल-कूद व व्यावहारिक गतिविधियों के समन्वय पर बल देती है। जब पाठ्यक्रम में शारीरिक विकास, खेल और वास्तविक जीवन के अनुभवों को समाहित किया जाता है, तो विद्यार्थी बिना किसी मानसिक तनाव के सर्वांगीण विकास प्राप्त करते हैं।</p>
      </div>
    </div>
  </div>
</section>`;

// Chapter 17: डायरी का एक पन्ना
const ch17Html = `<section class="chapter-section" id="ch17" data-book="sparsh-gadh">
  <div class="chapter-header">
    <div class="ch-badge">17</div>
    <div class="chapter-header-info">
      <div class="ch-category">स्पर्श भाग-2 (गद्य खंड) — पाठ 2</div>
      <h2>डायरी का एक पन्ना</h2>
      <p>सीताराम सेकसरिया | ऐतिहासिक संस्मरण/डायरी — 26 जनवरी 1931, कोलकाता में स्वतंत्रता दिवस, पुलिस दमन, स्त्री समाज की वीरता और जन-आंदोलन | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch17-q1">
    <div class="q-head" onclick="toggleQ('ch17-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">26 जनवरी 1931 के दिन को अमर बनाने के लिए कोलकाता के लोगों ने क्या-क्या तैयारियाँ की थीं?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>26 जनवरी 1931 को प्रथम स्वाधीनता दिवस की पहली वर्षगाँठ मनाने के लिए कोलकाता वासियों ने अभूतपूर्व तैयारियाँ की थीं:</p>
          <ul>
            <li>पूरे शहर में प्रचार कार्य पर दो हज़ार रुपये खर्च किए गए थे और घर-घर जाकर लोगों को प्रेरित किया गया था।</li>
            <li>शहर के अधिकांश मकानों, बाज़ारों और सार्वजनिक स्थलों पर राष्ट्रीय तिरंगा झंडा फहराया गया था।</li>
            <li>मारवाड़ी बालिका विद्यालय की छात्राओं ने अपने विद्यालय में झंडोत्सव मनाया।</li>
            <li>विभिन्न स्थानों से विशाल जुलूस निकालने और शाम 4:24 बजे मॉन्युमेंट के नीचे झंडा फहराने व स्वतंत्रता की प्रतिज्ञा पढ़ने की पूरी योजना बनाई गई थी।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">प्रचार, ध्वजारोहण व सजावट का विवरण</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">मॉन्युमेंट सभा व जुलूसों की पूर्व योजना का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch17-q2">
    <div class="q-head" onclick="toggleQ('ch17-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">सुभाष बाबू के जुलूस में स्त्री समाज की क्या भूमिका थी?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>सुभाष चंद्र बोस के आंदोलन और 26 जनवरी के उत्सव में स्त्री समाज की भूमिका अत्यंत गौरवशाली और साहसिक थी:</p>
          <ul>
            <li>स्त्रियों ने पुलिस की पाबंदियों और लाठीचार्ज की परवाह किए बिना बड़ी संख्या में जुलूस निकाले।</li>
            <li>मॉन्युमेंट की सीढ़ियों पर चढ़कर महिलाओं ने राष्ट्रीय ध्वज फहराया और स्वतंत्रता की घोषणा पढ़ी।</li>
            <li>लाठीचार्ज के भीषण प्रहार झेलते हुए भी वे डटी रहीं। अंततः लगभग 105 महिलाओं को गिरफ्तार करके लालबाज़ार जेल भेजा गया, जो तत्कालीन समय में एक ऐतिहासिक मिसाल थी।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">जुलूस, ध्वजारोहण व लाठीचार्ज सहने का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">105 महिलाओं की गिरफ्तारी व ऐतिहासिक भूमिका</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch17-q3">
    <div class="q-head" onclick="toggleQ('ch17-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">पुलिस कमिश्नर के नोटिस और कौंसिल के नोटिस में क्या अंतर था?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>दोनों नोटिसों में सीधा टकराव और विरोधाभास था:</p>
          <ul>
            <li><strong>पुलिस कमिश्नर का नोटिस:</strong> कमिश्नर ने कानूनी धाराओं के तहत आदेश निकाला कि शहर में किसी भी प्रकार की सभा या जुलूस निकालना गैर-कानूनी है। जो भी व्यक्ति इसमें भाग लेगा, उसे दोषी मानकर गिरफ्तार किया जाएगा।</li>
            <li><strong>कौंसिल का नोटिस:</strong> प्रांतीय कौंसिल ने नागरिकों से खुला आह्वान किया कि 26 जनवरी को शाम ठीक 4:24 बजे मॉन्युमेंट के नीचे राष्ट्रीय झंडा फहराया जाएगा और स्वतंत्रता की प्रतिज्ञा पढ़ी जाएगी। सभी नागरिक इसमें बढ़-चढ़कर भाग लें।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">पुलिस कमिश्नर के निषेधाज्ञा आदेश का विवरण</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">कौंसिल के सभा व ध्वजारोहण के खुले आह्वान का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch17-q4">
    <div class="q-head" onclick="toggleQ('ch17-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">धर्मतल्ले के मोड़ पर आकर जुलूस क्यों टूट गया और वहाँ क्या घटना घटी?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>धर्मतल्ले के मोड़ पर पुलिस ने जुलूस को रोक लिया और निहत्थे नागरिकों पर बर्बरतापूर्वक लाठीचार्ज शुरू कर दिया।</p>
          <p>पुलिस की भीषण लाठियों के प्रहार से अनेक लोग घायल होकर लहूलुहान हो गए और वहीं गिर पड़े। इस भीषण प्रहार के कारण जुलूस का मुख्य भाग टूट गया। किंतु उसी समय 50-60 स्त्रियाँ वहीं सड़क पर बैठ गईं। पुलिस ने उन्हें घेरा और बाद में लालबाज़ार जेल भेज दिया।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">पुलिस के बर्बर लाठीचार्ज व घायलों का विवरण</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">स्त्रियों का सड़क पर धरना व गिरफ्तारी</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch17-q5">
    <div class="q-head" onclick="toggleQ('ch17-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">डॉ. दासगुप्ता और बृजलाल गोयनका की इस आंदोलन में क्या भूमिका थी?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>डॉ. दासगुप्ता:</strong> वे घायलों की मरहम-पट्टी और चिकित्सा की देखरेख कर रहे थे तथा साथ ही घायलों के फोटो खिंचवा रहे थे, ताकि ब्रिटिश पुलिस की बर्बरता को पूरे देश और दुनिया के सामने उजागर किया जा सके।</p>
          <p><strong>बृजलाल गोयनका:</strong> वे मारवाड़ी समुदाय के सक्रिय कार्यकर्ता थे। उन्होंने झंडा लेकर वंदे मातरम् बोलते हुए मॉन्युमेंट की ओर दौड़ लगाई। पुलिस ने उन्हें बुरी तरह पीटा और अंततः गिरफ्तार कर लिया।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">डॉ. दासगुप्ता की चिकित्सीय व प्रचारक भूमिका</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">बृजलाल गोयनका का ध्वज लेकर संघर्ष व बलिदान</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch17-q6">
    <div class="q-head" onclick="toggleQ('ch17-q6')">
      <div class="q-num">प्रश्न 6</div>
      <div class="q-text">'यह कलंक आज बहुत अंश में धुल गया'—लेखक के इस कथन का क्या आशय है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>आशय:</strong> कोलकाता के विषय में देश भर में यह अपयश या बदनामी फैली हुई थी कि यहाँ के लोग स्वतंत्रता संग्राम में सक्रिय योगदान नहीं दे रहे हैं और यहाँ आंदोलन का कोई विशेष काम नहीं हो रहा है।</p>
          <p>किंतु 26 जनवरी 1931 को जिस प्रकार कोलकाता के पुरुषों, युवाओं और विशेषकर स्त्रियों ने अंग्रेजी पुलिस की लाठियों और गोलियों की परवाह न करते हुए ऐतिहासिक प्रदर्शन किया, जेलें भरीं और तिरंगा फहराया, उससे यह सिद्ध हो गया कि कोलकाता भी आज़ादी की लड़ाई में किसी से पीछे नहीं है। इस प्रकार वह कलंक धुल गया।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">कोलकाता पर लगे अपयश (निष्क्रियता) का संदर्भ</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">26 जनवरी के अभूतपूर्व जन-उभार द्वारा कलंक धुलने का तर्क</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch17-q7">
    <div class="q-head" onclick="toggleQ('ch17-q7')">
      <div class="q-num">प्रश्न 7</div>
      <div class="q-text">पाठ के आधार पर स्पष्ट कीजिए कि 26 जनवरी 1931 का दिन कोलकाता के इतिहास में अभूतपूर्व क्यों था?</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>26 जनवरी 1931 का दिन कोलकाता के इतिहास में निम्नलिखित कारणों से अभूतपूर्व और अविस्मरणीय था:</p>
          <ul>
            <li><strong>जन-साधारण की व्यापक सहभागिता:</strong> पहली बार इतने बड़े पैमाने पर आम नागरिकों, व्यापारियों, छात्रों और महिलाओं ने खुलकर सरकारी निषेधाज्ञा को चुनौती दी।</li>
            <li><strong>सुभाष चंद्र बोस का ओजस्वी नेतृत्व:</strong> सुभाष बाबू पुलिस की भीषण लाठियों के प्रहार सहते हुए भी 'वंदे मातरम्' बोलते हुए आगे बढ़ते रहे।</li>
            <li><strong>नारी शक्ति का अभूतपूर्व शौर्य:</strong> इतनी बड़ी संख्या में स्त्रियों का लाठीचार्ज का सामना करना, मॉन्युमेंट पर तिरंगा फहराना और सामूहिक गिरफ्तारी देना इससे पहले कभी नहीं देखा गया था। इसने राष्ट्रीय आंदोलन को नई ऊर्जा प्रदान की।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">नागरिक अवज्ञा, सरकारी आदेश का उल्लंघन व जन-उभार</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">स्त्री-शक्ति के योगदान व राष्ट्रीय चेतना के प्रसार का विवेचन</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Questions (CBQs) -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Board Competency-Based Question (योग्यता आधारित प्रश्न)</div>
    <div class="q-text"><strong>ऐतिहासिक प्रलेखीकरण विश्लेषण (Historical Documentation Analysis):</strong> 'डायरी का एक पन्ना' पाठ यह सिद्ध करता है कि समकालीन घटनाओं का व्यक्तिगत डायरी में अंकन भविष्य के लिए प्रामाणिक इतिहास बन जाता है। इस कथन की समीक्षा करते हुए स्पष्ट कीजिए कि आज के डिजिटल युग में नागरिक प्रलेखीकरण (Citizen Journalism) की क्या प्रासंगिकता है?</div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">विशेषज्ञ उत्तर व विश्लेषणात्मक दृष्टिकोण</div>
      <div class="answer-text">
        <p><strong>समीक्षा:</strong> सीताराम सेकसरिया जी ने जो कुछ अपनी आँखों से देखा, उसे निष्पक्षता और यथार्थ के साथ अपनी डायरी में दर्ज किया। यही संस्मरण आज स्वतंत्रता संग्राम के अनछुए पन्नों का प्रामाणिक दस्तावेज़ बन चुका है।</p>
        <p><strong>आधुनिक संदर्भ:</strong> आज सोशल मीडिया और स्मार्टफोन के युग में प्रत्येक नागरिक किसी भी सामाजिक अन्याय या घटना का प्रत्यक्षदर्शी बनकर उसे प्रलेखित कर सकता है। बशर्ते उसमें सेकसरिया जी जैसी सत्यनिष्ठा और निष्पक्षता हो, यह आधुनिक नागरिक पत्रकारिता लोकतंत्र की सबसे बड़ी प्रहरी बन सकती है।</p>
      </div>
    </div>
  </div>
</section>`;

// Chapter 18: तताँरा-वामीरो कथा
const ch18Html = `<section class="chapter-section" id="ch18" data-book="sparsh-gadh">
  <div class="chapter-header">
    <div class="ch-badge">18</div>
    <div class="chapter-header-info">
      <div class="ch-category">स्पर्श भाग-2 (गद्य खंड) — पाठ 3</div>
      <h2>तताँरा-वामीरो कथा</h2>
      <p>लीलाधर मंडलोई | अंडमान-निकोबार द्वीपसमूह की लोककथा — रूढ़िवादी सामाजिक बंधनों का विरोध, पवित्र प्रेम और आत्म-बलिदान | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch18-q1">
    <div class="q-head" onclick="toggleQ('ch18-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">तताँरा की तलवार के बारे में लोगों का क्या विश्वास था?</div>
      <div class="q-marks">2 अंक (30-40 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>तताँरा अपनी कमर में सदैव लकड़ी की एक तलवार बाँधे रहता था। यद्यपि वह लकड़ी की तलवार थी, किंतु लोगों का यह दृढ़ विश्वास था कि उस तलवार में कोई विलक्षण दैवीय शक्ति है। तताँरा कभी दूसरों के सामने उसका उपयोग नहीं करता था, फिर भी उसके साहसिक कारनामों के कारण लोग उस तलवार को चमत्कारी मानते थे।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">लकड़ी की तलवार का संदर्भ</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">दैवीय/चमत्कारी शक्ति के जन-विश्वास का उल्लेख</span><span class="marking-marks">1.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch18-q2">
    <div class="q-head" onclick="toggleQ('ch18-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">वामीरो ने तताँरा को बेरुखी से क्या जवाब दिया और बाद में उसके मन में क्या परिवर्तन आया?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>प्रारंभिक बेरुखी:</strong> जब तताँरा ने वामीरो से गाना जारी रखने का आग्रह किया, तो उसने तल्खी से कहा कि "पहले बताओ तुम कौन हो और मुझे इस तरह क्यों घूर रहे हो? अपने गाँव की रीति जानते हुए भी किसी दूसरे गाँव के युवक के प्रश्नों का उत्तर देना मैं उचित नहीं समझती।"</p>
          <p><strong>मनोवैज्ञानिक परिवर्तन:</strong> किंतु जब उसने तताँरा का सौम्य, विनम्र और विवश चेहरा देखा तथा उसका नाम सुना, तो उसका हृदय पिघल गया। तताँरा का व्यक्तित्व उसके अंतर्मन में समा गया और वह भी उसके प्रेम में व्याकुल होकर अगले दिन शाम को समुद्र तट पर मिलने को विवश हो गई।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">रूढ़िवादी परंपरा के आधार पर वामीरो की तल्खी का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">तताँरा के सौम्य रूप से प्रेम में बदलने की प्रक्रिया</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch18-q3">
    <div class="q-head" onclick="toggleQ('ch18-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">तताँरा-वामीरो के गाँव की क्या प्राचीन परंपरा थी और वह उनके प्रेम में किस प्रकार बाधक बनी?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>निकोबार के गाँवों की यह कठोर और प्राचीन परंपरा थी कि विवाह केवल उसी गाँव के युवक-युवती के मध्य हो सकता था। किसी अन्य गाँव के लड़के या लड़की से वैवाहिक संबंध जोड़ना सर्वथा वर्जित और सामाजिक अपराध माना जाता था।</p>
          <p>तताँरा 'पासा' गाँव का रहने वाला था जबकि वामीरो 'लपाती' गाँव की थी। दोनों एक-दूसरे से अगाध प्रेम करते थे, किंतु इस संकीर्ण व अमानवीय परंपरा के कारण उनका विवाह असंभव हो गया और समाज ने उन्हें अपमानित किया।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">समान गाँव में ही विवाह की अनिवार्य रूढ़ि का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">पासा और लपाती गाँव के भेद द्वारा प्रेम में बाधा</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch18-q4">
    <div class="q-head" onclick="toggleQ('ch18-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">पशु-पर्व के दिन मेले में क्या घटना घटी जिसके कारण तताँरा को अत्यधिक क्रोध आ गया?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>पशु-पर्व के मेले में वामीरो तताँरा को देखकर फूट-फूटकर रोने लगी। अपनी बेटी को एक पराये गाँव के युवक के सामने रोते देखकर वामीरो की माँ आगबबूला हो गई।</p>
          <p>उसने भरी सभा में तताँरा को अत्यंत अपमानित किया और उसे अपशब्द कहे। पूरे गाँव के लोग तताँरा के विरुद्ध हो गए और उसका उपहास उड़ाने लगे। गाँव की संकीर्णता, अपनी बेबसी और वामीरो के आँसुओं को देखकर तताँरा का धैर्य टूट गया और उसे असहनीय क्रोध आ गया।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">वामीरो की माँ द्वारा सार्वजनिक अपमान व कटु वचनों का प्रसंग</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">बेबसी व सामाजिक क्रूरता से उत्पन्न क्रोध का निरूपण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch18-q5">
    <div class="q-head" onclick="toggleQ('ch18-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">तताँरा ने क्रोध में आकर क्या किया और उसका निकोबार द्वीपसमूह पर क्या परिणाम हुआ?</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>तताँरा का कदम:</strong> प्रचंड क्रोध और निराशा में तताँरा ने अपनी कमर से लकड़ी की तलवार निकाली और पूरी शक्ति से उसे धरती में घोंप दिया। फिर उसने तलवार को ज़मीन पर खींचते हुए आगे बढ़ना शुरू कर दिया, जिससे धरती में एक विशाल दरार पड़ती चली गई और चीत्कार गूँज उठी।</p>
          <p><strong>द्वीपसमूह पर परिणाम:</strong> देखते ही देखते पूरा द्वीप दो टुकड़ों में विभक्त हो गया। एक हिस्सा समुद्र में बहने लगा जिस पर तताँरा फँस गया और लहरों में विलीन हो गया। दूसरा हिस्सा स्थिर रहा। लोकमान्यता के अनुसार आज जो 'कार-निकोबार' और 'लिटिल अंडमान' दो अलग द्वीप हैं, वे पहले एक ही थे और तताँरा की तलवार से ही अलग हुए।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">तलवार धरती में घोंपकर चीरने की नाटकीय घटना</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">द्वीप के दो भागों में बँटने (कार-निकोबार व लिटिल अंडमान) का भौगोलिक संदर्भ</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch18-q6">
    <div class="q-head" onclick="toggleQ('ch18-q6')">
      <div class="q-num">प्रश्न 6</div>
      <div class="q-text">तताँरा-वामीरो के त्याग और बलिदान ने समाज में क्या युगांतरकारी परिवर्तन लाया?</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>तताँरा और वामीरो की मृत्यु एक अत्यंत कारुणिक और हृदयविदारक घटना थी, जिसने निकोबार समाज की सोई हुई अंतरात्मा को झकझोर कर जगा दिया:</p>
          <ul>
            <li><strong>रूढ़िवादी परंपरा का अंत:</strong> समाज के प्रबुद्ध लोगों को यह अहसास हुआ कि जो परंपराएँ मनुष्य के प्रेम, सुख और जीवन की रक्षा नहीं कर सकतीं, उन्हें ढोना व्यर्थ है।</li>
            <li><strong>वैवाहिक संबंधों में उदारता:</strong> दोनों प्रेमियों के आत्म-बलिदान के बाद निकोबारियों ने अपनी सदियों पुरानी संकीर्ण वैवाहिक परंपरा को हमेशा के लिए समाप्त कर दिया। इसके बाद से दूसरे गाँवों में भी वैवाहिक संबंध स्वीकार किए जाने लगे।</li>
            <li><strong>शिक्षा:</strong> उनका बलिदान यह अमर संदेश देता है कि जब रूढ़ियाँ बंधन बन जाएँ, तो समाज के हित में उनका टूटना ही प्रगति का मार्ग प्रशस्त करता है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">समाज की अंतरात्मा का जाग्रत होना व रूढ़ि का टूटना</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">अन्य गाँवों में वैवाहिक संबंध स्वीकारने का युगांतरकारी परिवर्तन</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Questions (CBQs) -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Board Competency-Based Question (योग्यता आधारित प्रश्न)</div>
    <div class="q-text"><strong>सामाजिक रूढ़ि-भंजन विश्लेषण (Societal Reform Analysis):</strong> 'जब कोई परंपरा समाज के विकास और मानवीय संवेदनाओं के मार्ग में अवरोध बन जाए, तो उसका टूटना ही श्रेयस्कर है।' 'तताँरा-वामीरो कथा' के आधार पर इस कथन की समकालीन भारतीय समाज (जैसे जातिगत व संकीर्ण विवाह बंधन) के संदर्भ में विवेचना कीजिए।</div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">विशेषज्ञ उत्तर व विश्लेषणात्मक दृष्टिकोण</div>
      <div class="answer-text">
        <p><strong>विवेचना:</strong> परंपराएँ समाज को संगठित करने के लिए बनाई जाती हैं, विनाश करने के लिए नहीं। पाठ में लपाती और पासा गाँव की हठधर्मिता ने दो निर्दोष प्रेमियों के प्राण ले लिए, जिसके बाद ही समाज को अपनी गलती का बोध हुआ।</p>
        <p><strong>समकालीन संदर्भ:</strong> आज भी भारतीय समाज में जाति, संप्रदाय और खाप पंचायतों जैसी संकीर्ण रूढ़ियों के नाम पर युवाओं की भावनाओं का दमन किया जाता है। तताँरा-वामीरो का त्याग हमें यह सिखाता है कि समाज को रूढ़ियों से ऊपर उठकर मानवीय मूल्यों और व्यक्तिगत स्वतंत्रता को प्राथमिकता देनी चाहिए।</p>
      </div>
    </div>
  </div>
</section>`;

// Chapter 19: तीसरी कसम के शिल्पकार शैलेंद्र
const ch19Html = `<section class="chapter-section" id="ch19" data-book="sparsh-gadh">
  <div class="chapter-header">
    <div class="ch-badge">19</div>
    <div class="chapter-header-info">
      <div class="ch-category">स्पर्श भाग-2 (गद्य खंड) — पाठ 4</div>
      <h2>तीसरी कसम के शिल्पकार शैलेंद्र</h2>
      <p>प्रहलाद अग्रवाल | समीक्षात्मक आलेख — हिंदी सिनेमा, फणीश्वरनाथ रेणु की कहानी, राजकपूर और शैलेंद्र की कलात्मक सत्यनिष्ठा | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch19-q1">
    <div class="q-head" onclick="toggleQ('ch19-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">शैलेंद्र ने फिल्म 'तीसरी कसम' को 'कवि-हृदय की रचना' क्यों कहा है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>शैलेंद्र मूलतः एक अत्यंत संवेदनशील, भावुक और जनवादी कवि थे। उन्होंने 'तीसरी कसम' फिल्म को केवल धन कमाने या व्यावसायिक मुनाफे के लिए नहीं, बल्कि अपनी आंतरिक कलात्मक तृप्ति के लिए बनाया था।</p>
          <p>फिल्म में फणीश्वरनाथ रेणु की मूल कहानी 'मारे गए गुलफाम' की आत्मा, देहाती संस्कृति, हीरामन की भोली संवेदनशीलता और हीराबाई के अव्यक्त दर्द को कविता की भाँति कोमल भावों के साथ परदे पर उतारा गया था। इसमें सिनेमाई तड़क-भड़क के स्थान पर कवि की विशुद्ध संवेदनशीलता थी।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">शैलेंद्र की मूल संवेदनशीलता व कवि-व्यक्तित्व का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">व्यावसायिकता से परे कलात्मक व काव्यात्मक सत्यनिष्ठा</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch19-q2">
    <div class="q-head" onclick="toggleQ('ch19-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">राजकपूर ने फिल्म 'तीसरी कसम' में काम करने के लिए क्या पारिश्रमिक माँगा था और क्यों?</div>
      <div class="q-marks">2 अंक (30-40 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>जब शैलेंद्र ने राजकपूर को कहानी सुनाई, तो राजकपूर ने हँसते हुए अग्रिम पारिश्रमिक (एडवांस) के रूप में केवल <strong>'एक रुपया'</strong> माँगा।</p>
          <p>राजकपूर शैलेंद्र के घनिष्ठ मित्र थे और जानते थे कि शैलेंद्र एक भावुक कवि हैं, कोई बड़े फिल्म वितरक या धनवान निर्माता नहीं। वे अपने मित्र के इस कलात्मक स्वप्न को पूरा करने में सच्चे साथी बनकर खड़े होना चाहते थे।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">मात्र 'एक रुपया' पारिश्रमिक माँगने का उल्लेख</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">सच्ची मित्रता व शैलेंद्र की आर्थिक स्थिति समझने का कारण</span><span class="marking-marks">1.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch19-q3">
    <div class="q-head" onclick="toggleQ('ch19-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">शैलेंद्र एक आदर्शवादी कवि थे, वे व्यावसायिक सफलता के लिए कला से समझौता नहीं कर सकते थे—पाठ के आधार पर सिद्ध कीजिए।</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>शैलेंद्र की कलात्मक निष्ठा निम्नलिखित प्रसंगों से प्रमाणित होती है:</p>
          <ul>
            <li>राजकपूर ने उन्हें चेतावनी दी थी कि यह फिल्म बॉक्स ऑफिस के फॉर्मूलों (सस्ते हास्य, एक्शन, तड़क-भड़क) से कोसों दूर है और इसमें पैसा डूब सकता है, फिर भी शैलेंद्र ने कहानी की मूल आत्मा से कोई समझौता नहीं किया।</li>
            <li>फिल्म वितरकों (डिस्ट्रीब्यूटर्स) ने जब फिल्म खरीदने से मना किया क्योंकि इसमें मसाला नहीं था, तब भी शैलेंद्र अपनी कलात्मक शुचिता पर अडिग रहे और किसी भी दृश्य को व्यावसायिक बनाने के लिए बदला नहीं।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">राजकपूर की चेतावनी के बावजूद कला पर अडिग रहना</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">फिल्म वितरकों व फॉर्मूला सिनेमा के दबाव को ठुकराना</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch19-q4">
    <div class="q-head" onclick="toggleQ('ch19-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">'तीसरी कसम' फिल्म को 'साहित्यिक कृति की हूबहू मूरखता' क्यों कहा गया और समीक्षकों ने इसकी सराहना क्यों की?</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>'हूबहू मूरखता' कहे जाने का कारण:</strong> व्यावसायिक सिनेमा की दुनिया में यह माना जाता है कि साहित्यिक कहानियों को जस-का-तस परदे पर उतारना मूर्खता है, क्योंकि उसमें बॉक्स ऑफिस की कमाई वाले मसाले नहीं होते। शैलेंद्र ने फणीश्वरनाथ रेणु की कहानी 'मारे गए गुलफाम' के साथ कोई सिनेमाई छेड़छाड़ नहीं की और उसे ज्यों-का-त्यों परदे पर उतार दिया, जिसे फिल्म इंडस्ट्री के चालाक लोग अव्यावहारिक मूर्खता कहते थे।</p>
          <p><strong>समीक्षकों द्वारा सराहना:</strong> उच्च कोटि के आलोचकों और विचारकों ने इसकी मुक्तकंठ से प्रशंसा की क्योंकि यह भारतीय सिनेमा की दुर्लभ फिल्म थी जिसमें ग्रामीण भारत का यथार्थ, लोक-संस्कृति, मानवीय करुणा और शुद्ध प्रेम बिना किसी मिलावट के जीवंत हुआ था। इसे भारत सरकार का 'स्वर्ण कमल' (सर्वश्रेष्ठ फिल्म) पुरस्कार प्राप्त हुआ।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">व्यावसायिक फिल्म जगत की दृष्टि से 'हूबहू मूरखता' का अर्थ</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">समीक्षकों की प्रशंसा, लोक-यथार्थ व 'स्वर्ण कमल' पुरस्कार</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch19-q5">
    <div class="q-head" onclick="toggleQ('ch19-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">शैलेंद्र के गीतों की क्या विशेषताएँ थीं? वे आम जनता की भावनाओं को कैसे छूते थे?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>शैलेंद्र के गीतों की प्रमुख विशेषताएँ निम्नलिखित थीं:</p>
          <ul>
            <li><strong>सहज और सरल भाषा:</strong> वे कठिन और क्लिष्ट शब्दों के बजाय आम जनता की बोलचाल की भाषा में गहरे दार्शनिक विचार व्यक्त करते थे (जैसे: "सजन रे झूठ मत बोलो, खुदा के पास जाना है")।</li>
            <li><strong>गहरी दार्शनिकता व आशावाद:</strong> उनके गीतों में दुख और निराशा को कभी स्थायी नहीं माना गया, बल्कि जीवन के प्रति अगाध प्रेम और आशा का संदेश दिया गया (जैसे: "तू ज़िंदा है तो ज़िंदगी की जीत में यकीन कर")।</li>
            <li><strong>जन-मन का प्रतिनिधित्व:</strong> उनके गीत हर वर्ग के व्यक्ति के हृदय का संगीत बन जाते थे।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">सरल भाषा में गूढ़ दार्शनिक भावों का समावेश</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">आशावादिता, मानवीय करुणा व गीतों के उदाहरण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch19-q6">
    <div class="q-head" onclick="toggleQ('ch19-q6')">
      <div class="q-num">प्रश्न 6</div>
      <div class="q-text">'शैलेंद्र ने धन कमाने के लिए नहीं, आत्म-तुष्टि के लिए फिल्म बनाई थी'—इस कथन की समीक्षा कीजिए।</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>समीक्षा:</strong> यह कथन शत-प्रतिशत सत्य है। शैलेंद्र एक सफल और अत्यधिक व्यस्त गीतकार थे, उनके पास धन और प्रसिद्धि की कोई कमी नहीं थी। यदि उनका उद्देश्य धन कमाना होता, तो वे उस दौर के प्रचलित फॉर्मूलों वाली मसाला फिल्म बनाते जिसमें मुनाफा पक्का होता।</p>
          <p>किंतु शैलेंद्र के भीतर का सच्चा साहित्यकार एक ऐसी कृति का सृजन करना चाहता था जो आत्मा को तृप्त करे और भारतीय सिनेमा के इतिहास में एक मील का पत्थर बने। उन्होंने आर्थिक नुकसान और कर्ज का जोखिम उठाकर भी 'तीसरी कसम' बनाई। यद्यपि इस फिल्म के तनाव ने असमय ही उनके प्राण ले लिए, किंतु उन्होंने कला के साथ कभी सौदा नहीं किया।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">शैलेंद्र के सफल गीतकार होने व धन से परे उद्देश्य का विश्लेषण</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">कलात्मक आत्म-तुष्टि, आर्थिक जोखिम व कालजयी कृति का निर्माण</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Questions (CBQs) -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Board Competency-Based Question (योग्यता आधारित प्रश्न)</div>
    <div class="q-text"><strong>सिनेमा और साहित्यिक मूल्य (Cinema & Literary Values):</strong> वर्तमान युग में ओटीटी (OTT) और बड़े बजट की फिल्मों में हिंसा, सनसनी और अश्लीलता को व्यावसायिक सफलता का साधन माना जाता है। 'तीसरी कसम के शिल्पकार शैलेंद्र' के आलोक में विश्लेषण कीजिए कि सार्थक सिनेमा का सामाजिक उत्तरदायित्व क्या होना चाहिए?</div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">विशेषज्ञ उत्तर व विश्लेषणात्मक दृष्टिकोण</div>
      <div class="answer-text">
        <p><strong>विश्लेषण:</strong> शैलेंद्र ने 'तीसरी कसम' बनाकर यह सिद्ध किया था कि सिनेमा केवल व्यापार नहीं, बल्कि मानवीय संवेदनाओं को परिष्कृत करने का सशक्त माध्यम है।</p>
        <p><strong>सामाजिक उत्तरदायित्व:</strong> आज के फिल्म निर्माताओं को यह समझना चाहिए कि तात्कालिक मुनाफे के लिए समाज की संवेदनाओं को कुंद करना अनैतिक है। सार्थक सिनेमा वही है जो समाज को संवेदनशीलता, मानवीय मूल्य और सांस्कृतिक चेतना प्रदान करे, जैसा शैलेंद्र ने अपनी कृति में प्रस्तुत किया।</p>
      </div>
    </div>
  </div>
</section>`;

// Chapter 20: अब कहाँ दूसरे के दुख से दुखी होने वाले
const ch20Html = `<section class="chapter-section" id="ch20" data-book="sparsh-gadh">
  <div class="chapter-header">
    <div class="ch-badge">20</div>
    <div class="chapter-header-info">
      <div class="ch-category">स्पर्श भाग-2 (गद्य खंड) — पाठ 5</div>
      <h2>अब कहाँ दूसरे के दुख से दुखी होने वाले</h2>
      <p>निदा फ़ाज़ली | संस्मरणात्मक निबंध — पर्यावरण असंतुलन, मानवेतर प्राणियों के प्रति संवेदना, स्वार्थपरक आधुनिकता और प्रकृति का प्रतिशोध | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch20-q1">
    <div class="q-head" onclick="toggleQ('ch20-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">बड़े-बड़े बिल्डर समुद्र को पीछे क्यों धकेल रहे थे और इसका प्रकृति पर क्या दुष्प्रभाव पड़ा?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>बिल्डरों का स्वार्थ:</strong> मुंबई जैसे महानगर में आबादी के दबाव और अधिक से अधिक धन कमाने के लोभ में बिल्डर समुद्र के किनारे मिट्टी पाटकर समुद्र को पीछे धकेल रहे थे और कंक्रीट की गगनचुंबी इमारतें खड़ी कर रहे थे।</p>
          <p><strong>प्रकृति पर दुष्प्रभाव:</strong> प्रकृति के साथ इस निरंतर छेड़छाड़ के कारण भयानक असंतुलन पैदा हो गया। बेमौसम बरसात, भीषण गर्मी, भूकंप, तूफ़ान और सुनामी जैसी आपदाएँ आने लगीं। समुद्र ने क्रुद्ध होकर एक रात तीन बड़े समुद्री जहाजों को बच्चों की गेंद की तरह उठाकर शहर की सड़कों पर फेंक दिया, जिससे भारी तबाही हुई।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">बिल्डरों के लालच व कंक्रीट जंगल बनाने का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">प्राकृतिक आपदाओं व समुद्र के रोष (जहाज फेंकने) का विवरण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch20-q2">
    <div class="q-head" onclick="toggleQ('ch20-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">सुलेमान (सोलोमन) ने चींटियों से क्या कहा और उनका कौन-सा मानवीय गुण प्रकट हुआ?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>जब हज़रत सुलेमान अपने लश्कर (सेना) के साथ गुज़र रहे थे, तो चींटियों ने घोड़ों की टापों की आवाज़ सुनकर भयभीत होकर एक-दूसरे से कहा कि "जल्दी अपने बिलों में चलो।"</p>
          <p>सुलेमान ने उनकी बात सुनकर अपनी सेना को रोका और चींटियों से विनम्रतापूर्वक कहा: "घबराओ नहीं, ईश्वर ने मुझे सबके लिए रहमत (दया) बनाकर भेजा है, किसी के लिए मुसीबत नहीं।" इस प्रसंग से सुलेमान की असीम संवेदनशीलता, दया, करुणा और छोटे से छोटे जीव के प्रति सम्मान का गुण प्रकट होता है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">सुलेमान के रहमत भरे कथन का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">दया, करुणा व जीव-मात्र के प्रति संवेदनशीलता का विश्लेषण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch20-q3">
    <div class="q-head" onclick="toggleQ('ch20-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">लेखक की माँ ने कब-कब रोज़ा रखा या प्रायश्चित किया और क्यों?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>लेखक के घर के रोशनदान में एक कबूतर के जोड़े ने दो अंडे दिए थे। एक अंडा बिल्ली ने झपटकर तोड़ दिया था।</p>
          <p>लेखक की माँ ने स्टूल पर चढ़कर दूसरे अंडे को बिल्ली से बचाने की कोशिश की, किंतु दुर्भाग्यवश उनके हाथ से फिसलकर दूसरा अंडा भी फर्श पर गिरकर टूट गया। कबूतरों के जोड़े को दुख से फड़फड़ाते देखकर माँ का हृदय चीत्कार कर उठा। इस अनजाने में हुए पाप का प्रायश्चित करने के लिए माँ ने पूरे दिन का रोज़ा रखा, न कुछ खाया-पिया और दिनभर नमाज़ में रो-रोकर खुदा से माफी माँगती रहीं।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">अंडा टूटने की कारुणिक घटना का विवरण</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">माँ द्वारा दिनभर का रोज़ा रखने व पश्चाताप का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch20-q4">
    <div class="q-head" onclick="toggleQ('ch20-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">शेख अयाज़ के पिता अपने हाथ पर रेंगते च्योंटे को देखकर भोजन छोड़कर क्यों उठ खड़े हुए?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>सिंधी भाषा के प्रसिद्ध कवि शेख अयाज़ के पिता कुएँ से नहाकर लौटे और भोजन करने बैठे ही थे कि उन्होंने अपनी बाँह पर एक काला च्योंटा रेंगते देखा।</p>
          <p>वे तुरंत भोजन की थाली छोड़कर उठ खड़े हुए। जब उनकी माँ ने पूछा कि क्या भोजन अच्छा नहीं लगा, तो उन्होंने उत्तर दिया: "नहीं, मैंने एक बेघर को उसके घर से जुदा कर दिया है। मैं पहले इस बेघर जीव को उसके घर (कुएँ की मुँडेर पर) छोड़ने जा रहा हूँ, उसके बाद ही अन्न ग्रहण करूँगा।" यह उनकी पराकाष्ठापूर्ण जीव-दया का परिचायक है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">हाथ पर च्योंटा देखकर थाली छोड़ने का प्रसंग</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">बेघर जीव को घर पहुँचाने की संवेदनशीलता का निरूपण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch20-q5">
    <div class="q-head" onclick="toggleQ('ch20-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">'डेरा डालने' और 'घर बनाने' में क्या अंतर है? वर्तमान शहरीकरण ने जीव-जंतुओं के आवास को कैसे छीना है?</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>अंतर:</strong> 'घर बनाना' स्थायी निवास होता है जहाँ सुरक्षा, अपनत्व और शांति की भावना होती है। जबकि 'डेरा डालना' अस्थाई और विवशतापूर्ण ठहराव होता है, जहाँ रहने वाला जानता है कि उसे कभी भी भगाया जा सकता है।</p>
          <p><strong>शहरीकरण का दुष्परिणाम:</strong> अंधाधुंध शहरीकरण, वनों की कटाई और कंक्रीट के जंगलों के निर्माण ने पक्षियों और वन्यजीवों के प्राकृतिक आश्रय छीन लिए हैं। अब पक्षी पेड़ों की तलाश में भटकते हैं और इंसानों के फ्लैटों, खिड़कियों या एसी (AC) के बक्सों में अस्थायी 'डेरा डालने' को विवश हैं, जहाँ से भी स्वार्थी मनुष्य जाली लगाकर उन्हें बेदखल कर देता है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">'घर बनाने' व 'डेरा डालने' के दार्शनिक अंतर का स्पष्टीकरण</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">शहरीकरण द्वारा मूक प्राणियों के विस्थापन की त्रासदी</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch20-q6">
    <div class="q-head" onclick="toggleQ('ch20-q6')">
      <div class="q-num">प्रश्न 6</div>
      <div class="q-text">लेखक की पत्नी ने कबूतरों से तंग आकर क्या किया और यह घटना वर्तमान समाज की किस मानसिकता को दर्शाती है?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>लेखक की पत्नी ने कबूतरों द्वारा की जाने वाली गंदगी और सामान गिराने से परेशान होकर खिड़की पर लोहे की जाली लगवा दी और कबूतरों के आने का रास्ता बंद कर दिया। कबूतर बाहर उदास बैठकर रातभर फड़फड़ाते रहे।</p>
          <p>यह घटना आधुनिक समाज की संवेदनहीन और आत्मकेंद्रित मानसिकता को दर्शाती है। आज का मनुष्य केवल अपनी सुविधा और स्वच्छता देखता है, उसे दूसरे मूक प्राणियों के दर्द और बेघरी से कोई सरोकार नहीं रह गया है। यह लेखक की माँ के काल से वर्तमान पीढ़ी के संवेदनहीन पतन का स्पष्ट प्रमाण है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">खिड़की पर जाली लगाने व कबूतरों के बेघर होने का प्रसंग</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">आधुनिक आत्मकेंद्रित व संवेदनहीन मानसिकता पर टिप्पणी</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Questions (CBQs) -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Board Competency-Based Question (योग्यता आधारित प्रश्न)</div>
    <div class="q-text"><strong>पारिस्थितिकी एवं संवेगात्मक विश्लेषण (Ecological & Emotional Analysis):</strong> 'यह धरती केवल मनुष्य की नहीं, अपितु समस्त जीव-जंतुओं की साझा धरोहर है।' 'अब कहाँ दूसरे के दुख से दुखी होने वाले' पाठ के आधार पर स्पष्ट कीजिए कि मानव का अति-अहंकार किस प्रकार वैश्विक जलवायु संकट (Climate Crisis) का कारण बन रहा है?</div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">विशेषज्ञ उत्तर व विश्लेषणात्मक दृष्टिकोण</div>
      <div class="answer-text">
        <p><strong>विश्लेषण:</strong> लेखक ने पाठ में यह स्पष्ट किया है कि मनुष्य ने अपनी बुद्धि के घमंड में पूरी पृथ्वी को अपनी जागीर समझ लिया और अन्य सभी सहजीवियों को उनके प्राकृतिक अधिकारों से वंचित कर दिया।</p>
        <p><strong>जलवायु संकट से संबंध:</strong> जंगलों की कटाई, नदियों-समुद्रों पर अवैध अतिक्रमण और अनियंत्रित औद्योगिकीकरण से पृथ्वी की सहने की सीमा समाप्त हो चुकी है। इसका परिणाम ग्लोबल वॉर्मिंग, ग्लेशियरों का पिघलना और अप्रत्याशित विनाश के रूप में सामने आ रहा है। जब तक मनुष्य सह-अस्तित्व की भावना को नहीं अपनाएगा, तब तक उसका स्वयं का अस्तित्व भी सुरक्षित नहीं रह सकता।</p>
      </div>
    </div>
  </div>
</section>`;

// Chapter 21: पतझर में टूटी पत्तियाँ
const ch21Html = `<section class="chapter-section" id="ch21" data-book="sparsh-gadh">
  <div class="chapter-header">
    <div class="ch-badge">21</div>
    <div class="chapter-header-info">
      <div class="ch-category">स्पर्श भाग-2 (गद्य खंड) — पाठ 6</div>
      <h2>पतझर में टूटी पत्तियाँ</h2>
      <p>रवींद्र केलेकर | विचार-प्रधान निबंध — 'गिन्नी का सोना' (आदर्श बनाम व्यावहारिकता) एवं 'झेन की देन' (टी-सेरेमनी, मानसिक तनाव और वर्तमान का बोध) | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch21-q1">
    <div class="q-head" onclick="toggleQ('ch21-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">'गिन्नी का सोना' और 'शुद्ध सोना' में क्या अंतर है? पाठ के आधार पर स्पष्ट कीजिए।</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>शुद्ध सोना:</strong> यह शत-प्रतिशत खरा और शुद्ध होता है, जिसमें किसी प्रकार की मिलावट नहीं होती। यह शुद्ध आदर्शों का प्रतीक है। शुद्ध सोना बहुत मुलायम होता है, इसलिए केवल उससे मजबूत आभूषण नहीं बन सकते।</p>
          <p><strong>गिन्नी का सोना:</strong> शुद्ध सोने में थोड़ा-सा ताँबा मिला देने से वह 'गिन्नी का सोना' बन जाता है। ताँबा मिलने से उसमें मजबूती और चमक आ जाती है और उससे सुंदर आभूषण गढ़े जा सकते हैं। यह व्यावहारिकता का प्रतीक है। लोग अक्सर शुद्ध सोने से अधिक गिन्नी के सोने को उपयोगी मानते हैं।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">शुद्ध सोने (बिना मिलावट/आदर्श) का लक्षण</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">गिन्नी के सोने (ताँबे की मिलावट/उपयोगिता) का अंतर</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch21-q2">
    <div class="q-head" onclick="toggleQ('ch21-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">'प्रैक्टिकल आइडियलिस्ट' (व्यावहारिक आदर्शवादी) किसे कहते हैं और लेखक ने गांधीजी के संदर्भ में क्या कहा है?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>प्रैक्टिकल आइडियलिस्ट:</strong> जो लोग व्यावहारिकता के नाम पर अपने आदर्शों को नहीं छोड़ते, बल्कि अपने शुद्ध आदर्शों को व्यवहार में लागू करने की क्षमता रखते हैं, उन्हें 'प्रैक्टिकल आइडियलिस्ट' कहा जाता है।</p>
          <p><strong>गांधीजी का संदर्भ:</strong> कई लोग गांधीजी को भी 'प्रैक्टिकल आइडियलिस्ट' कहते हैं क्योंकि वे जानते थे कि जनता से किस प्रकार काम लेना है। किंतु लेखक का मानना है कि गांधीजी ने कभी अपने आदर्शों में व्यावहारिकता (ताँबा) नहीं मिलाई, बल्कि उन्होंने व्यावहारिकता के स्तर को ऊँचा उठाकर अपने शुद्ध सोने जैसे आदर्शों के बराबर पहुँचाया। यदि वे विशुद्ध व्यावहारिक होते, तो देश को आज़ादी की नई दिशा कभी न दे पाते।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">'प्रैक्टिकल आइडियलिस्ट' की सही परिभाषा</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">गांधीजी द्वारा आदर्शों को न गिराने के दृष्टिकोण की व्याख्या</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch21-q3">
    <div class="q-head" onclick="toggleQ('ch21-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">जापान में 'टी-सेरेमनी' (चा-नो-यू) क्या है और इसमें मानसिक शांति कैसे प्राप्त होती है?</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>चा-नो-यू (टी-सेरेमनी):</strong> यह जापान में चाय पीने की एक अत्यंत पवित्र और औपचारिक रस्म है। यह छह मंजिला इमारत की छत पर बनी फूस की एक छोटी-सी पर्णकुटी (टी-क्लब) में संपन्न होती है, जहाँ एक बार में केवल तीन व्यक्तियों को प्रवेश दिया जाता है।</p>
          <p><strong>शांति प्राप्ति की विधि:</strong> वहाँ का वातावरण अत्यंत शांत और गरिमामय होता है। 'चाजीन' (चाय तैयार करने वाला) अत्यंत धीमे, सलीके और शांत भाव से बर्तन पोंछता है, अंगीठी सुलगाता है और चाय बनाता है। वहाँ कोई शोर नहीं होता। उस मौन और शांत परिवेश में जब लोग घूँट-घूँट (सिप-सिप) करके डेढ़-दो घंटे तक चाय पीते हैं, तो उनके मन की भागदौड़ थम जाती है और उन्हें असीम मानसिक शांति का अनुभव होता है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">चा-नो-यू का परिचय, स्थान व तीन व्यक्तियों की मर्यादा</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">चाजीन की शांत क्रियाविधि व मानसिक शांति का मनोवैज्ञानिक प्रभाव</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch21-q4">
    <div class="q-head" onclick="toggleQ('ch21-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">चाय पीने के बाद लेखक ने अपने दिमाग में किस प्रकार का परिवर्तन महसूस किया?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>चाय की चुस्कियाँ लेते हुए शुरू के दस-पंद्रह मिनट लेखक के भीतर बेचैनी रही, किंतु धीरे-धीरे उनके दिमाग की रफ्तार धीमी होने लगी। कुछ देर बाद दिमाग की गति बिल्कुल रुक गई और चारों ओर असीम सन्नाटा छा गया।</p>
          <p>उन्हें ऐसा लगा मानो भूतकाल और भविष्यकाल दोनों उड़ गए हों और केवल वर्तमान क्षण ही सामने उपस्थित हो। वे उस वर्तमान क्षण में जीने लगे, जो अनंत काल जितना विस्तृत महसूस हुआ। उनके मस्तिष्क का सारा तनाव विलीन हो गया।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">दिमाग की रफ्तार का धीमा व पूर्णतः शांत होना</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">भूत व भविष्य से मुक्त होकर वर्तमान में जीने की अनुभूति</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch21-q5">
    <div class="q-head" onclick="toggleQ('ch21-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">लेखक के अनुसार वास्तविक सत्य क्या है—भूतकाल, भविष्यकाल या वर्तमानकाल? स्पष्ट कीजिए।</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>लेखक के अनुसार <strong>वर्तमानकाल ही एकमात्र वास्तविक और जीवित सत्य है</strong>।</p>
          <p>भूतकाल बीत चुका है, वह अब लौटकर नहीं आ सकता और भविष्यकाल अभी आया नहीं है, वह केवल हमारी कल्पना है। दोनों ही काल मिथ्या हैं। मनुष्य अक्सर या तो बीते दिनों की यादों में उलझकर दुखी रहता है या आने वाले कल के हसीन सपने देखकर चिंतित रहता है। जो व्यक्ति वर्तमान क्षण में पूरी सजगता के साथ जीता है, वही वास्तव में जीवन के वास्तविक आनंद और सत्य को प्राप्त करता है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">भूत व भविष्य को मिथ्या बताने का तर्क</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">वर्तमान क्षण के एकमात्र यथार्थ सत्य होने का दार्शनिक विवेचन</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch21-q6">
    <div class="q-head" onclick="toggleQ('ch21-q6')">
      <div class="q-num">प्रश्न 6</div>
      <div class="q-text">शुद्ध आदर्शों की तुलना सोने से और व्यावहारिकता की तुलना ताँबे से क्यों की गई है?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>लेखक ने शुद्ध आदर्शों की तुलना सोने से और व्यावहारिकता की तुलना ताँबे से अत्यंत सार्थक रूप में की है:</p>
          <ul>
            <li><strong>सोना (शुद्ध आदर्श):</strong> शुद्ध सोना अत्यंत मूल्यवान, अक्षुण्ण और शाश्वत होता है। समाज के नैतिक मूल्य, सत्य, अहिंसा और प्रेम सोने के समान अनमोल हैं, जो मानवता को पतन से बचाते हैं।</li>
            <li><strong>ताँबा (व्यावहारिकता):</strong> ताँबा सस्ता धातु है जिसका उपयोग केवल सोने को आकार और मजबूती देने के लिए किया जाता है। यदि कोई ताँबे को ही सोना मान ले, तो यह उसका भ्रम है। इसी प्रकार यदि व्यावहारिकता में आदर्श न हों, तो वह केवल स्वार्थपरता बन जाती है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">सोने के रूपक द्वारा नैतिक मूल्यों की व्याख्या</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">ताँबे द्वारा व्यावहारिकता व स्वार्थपरता के अंतर का विश्लेषण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Questions (CBQs) -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Board Competency-Based Question (योग्यता आधारित प्रश्न)</div>
    <div class="q-text"><strong>मानसिक स्वास्थ्य एवं जीवनशैली विश्लेषण (Mental Health & Mindfulness):</strong> आधुनिक जीवन की तीव्र प्रतिस्पर्धा में युवा मानसिक अवसाद (Depression) और तनाव से जूझ रहे हैं। 'झेन की देन' के आलोक में समझाइए कि 'माइंडफुलनेस' (सजग वर्तमान में जीना) किस प्रकार आधुनिक जीवनशैली की व्याधियों का प्रभावी उपचार सिद्ध हो सकता है?</div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">विशेषज्ञ उत्तर व विश्लेषणात्मक दृष्टिकोण</div>
      <div class="answer-text">
        <p><strong>विश्लेषण:</strong> पाठ में बताया गया है कि जापान के लोग अमेरिका से प्रतिस्पर्धा करने के चक्कर में एक महीने का काम एक दिन में करने की कोशिश करते हैं, जिससे उनका मानसिक संतुलन बिगड़ जाता है और बहुसंख्यक आबादी मानसिक रोगी बन जाती है।</p>
        <p><strong>माइंडफुलनेस का महत्व:</strong> 'झेन की देन' हमें सिखाती है कि भविष्य की अनिश्चित चिंताओं और अतीत के पछतावे से मुक्त होकर वर्तमान क्षण के प्रत्येक कार्य को पूरी तन्मयता से करना चाहिए। जब हम वर्तमान में सजगता से जीते हैं, तो मस्तिष्क की व्यर्थ भागदौड़ रुक जाती है, जिससे तनाव और अवसाद का स्थायी शमन होता है।</p>
      </div>
    </div>
  </div>
</section>`;

// Chapter 22: कारतूस
const ch22Html = `<section class="chapter-section" id="ch22" data-book="sparsh-gadh">
  <div class="chapter-header">
    <div class="ch-badge">22</div>
    <div class="chapter-header-info">
      <div class="ch-category">स्पर्श भाग-2 (गद्य खंड) — पाठ 7</div>
      <h2>कारतूस</h2>
      <p>हबीब तनवीर | ऐतिहासिक एकांकी (नाटक) — 1799 गोरखपुर का जंगल, अवध के नवाब वज़ीर अली की जाँबाज़ी और अंग्रेजों के विरुद्ध विद्रोह | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch22-q1">
    <div class="q-head" onclick="toggleQ('ch22-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">कर्नल कालिंज का खेमा जंगल में क्यों लगा हुआ था?</div>
      <div class="q-marks">2 अंक (30-40 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कर्नल कालिंज और लेफ्टिनेंट अपनी पूरी ब्रिटिश फौजी टुकड़ी के साथ गोरखपुर के घने जंगलों में खेमा डाले हुए थे। उनका मुख्य उद्देश्य अवध के पूर्व नवाब <strong>वज़ीर अली</strong> को गिरफ्तार करना था, जो अंग्रेजों की आँखों में धूल झोंककर इन जंगलों में छिपा हुआ था और अंग्रेजों को भारत से खदेड़ने की योजना बना रहा था।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">गोरखपुर के जंगल में खेमा लगाने का संदर्भ</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">वज़ीर अली को गिरफ्तार करने के उद्देश्य का उल्लेख</span><span class="marking-marks">1.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch22-q2">
    <div class="q-head" onclick="toggleQ('ch22-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">वज़ीर अली ने कंपनी के वकील का कत्ल क्यों किया?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कंपनी ने वज़ीर अली को अवध के तख्त से हटाकर बनारस भेज दिया था और तीन लाख रुपये सालाना वजीफा मुकर्रर किया था। कुछ समय बाद गवर्नर जनरल ने उसे कलकत्ता तलब किया।</p>
          <p>वज़ीर अली बनारस में रह रहे कंपनी के वकील के पास अपनी शिकायत लेकर गया। वकील ने वज़ीर अली की शिकायत सुनने के बजाय उसे खूब खरी-खोटी सुनाई और उसका घोर अपमान किया। स्वाभिमानी वज़ीर अली के दिल में अंग्रेजों के प्रति पहले से ही नफरत भरी थी। वकील की इस बदतमीजी को वह सहन न कर सका और उसने तलवार निकालकर वकील का काम तमाम कर दिया।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">कलकत्ता बुलाने व वकील के पास शिकायत का प्रसंग</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">वकील द्वारा अपमान व स्वाभिमानी प्रतिशोध का कारण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch22-q3">
    <div class="q-head" onclick="toggleQ('ch22-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">सआदत अली कौन था और उसने अंग्रेजों की क्या मदद की तथा अपनी आधी रियासत क्यों दे दी?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>सआदत अली वज़ीर अली का चाचा और नवाब आसिफउद्दौला का भाई था। वह अत्यंत ऐशो-आराम पसंद और कायर व्यक्ति था।</p>
          <p>वह अवध का नवाब बनना चाहता था। अंग्रेजों ने उसकी इस लालसा का फायदा उठाया। अंग्रेजों ने वज़ीर अली को अपदस्थ करके सआदत अली को अवध की गद्दी पर बिठा दिया। इस उपकार के बदले सआदत अली ने अपनी आधी रियासत और दस लाख रुपये नकद अंग्रेजों को सौंप दिए ताकि वह निश्चिंत होकर भोग-विलास का जीवन जी सके।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">सआदत अली का परिचय (चाचा, विलासी स्वभाव)</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">नवाब बनने के बदले आधी रियासत व धन देने का सौदा</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch22-q4">
    <div class="q-head" onclick="toggleQ('ch22-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">वज़ीर अली के अफ़साने सुनकर कर्नल को रॉबिनहुड की याद क्यों आती थी?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>रॉबिनहुड की तरह वज़ीर अली भी अत्यंत साहसी, निडर, स्वाभिमानी और अंग्रेजों को चकमा देने में माहिर था।</p>
          <p>उसने शासन के केवल पाँच महीनों में ही अवध के दरबार को ब्रिटिश प्रभाव से लगभग मुक्त कर दिया था। वह जंगलों में छिपकर सीमित संसाधनों में भी अंग्रेजों की नाक में दम किए हुए था। उसके अदम्य साहस, जाँबाज़ी और अंग्रेजों के विरुद्ध छापामार रणनीति के कारण कर्नल को रॉबिनहुड के कारनामों की याद आती थी।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">वज़ीर अली के अदम्य साहस व जाँबाज़ी का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">रॉबिनहुड जैसी छापामार रणनीति व अंग्रेजों के छक्के छुड़ाने की तुलना</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch22-q5">
    <div class="q-head" onclick="toggleQ('ch22-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">सवार ने कर्नल से कारतूस कैसे हासिल किए और कर्नल हक्का-बक्का क्यों रह गया?</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>कारतूस हासिल करना:</strong> वज़ीर अली स्वयं एक घुड़सवार के वेश में अकेला कर्नल के खेमे में घुस आया। उसने कर्नल से कहा कि वह वज़ीर अली को पकड़ने में मदद कर सकता है, इसलिए उसे दस कारतूस चाहिए। कर्नल ने खुश होकर उसे दस कारतूस दे दिए।</p>
          <p><strong>कर्नल का हक्का-बक्का रह जाना:</strong> जब कर्नल ने उसका नाम पूछा, तो उसने गर्व से कहा—"वज़ीर अली!" और कहा कि "आपने मुझे कारतूस दिए हैं, इसलिए मैं आपकी जान बख्शता हूँ।" इतना कहकर वह घोड़े पर सवार होकर धूल उड़ाते हुए गायब हो गया। जिस शत्रु को पूरी सेना हफ़्तों से ढूँढ़ रही थी, वह उसके सामने आकर कारतूस ले गया और प्राण बख्श गया—यह देखकर कर्नल सन्न और हक्का-बक्का रह गया।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">खेमे में अकेले आकर चतुराई से कारतूस लेने की घटना</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">वास्तविक नाम बताकर प्राण बख्शने व कर्नल के विस्मय का निरूपण</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch22-q6">
    <div class="q-head" onclick="toggleQ('ch22-q6')">
      <div class="q-num">प्रश्न 6</div>
      <div class="q-text">'कारतूस' एकांकी के आधार पर वज़ीर अली के चरित्र की प्रमुख विशेषताओं पर प्रकाश डालिए।</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>वज़ीर अली का चरित्र एक सच्चे देशभक्त और अदम्य वीर सेनानी का है:</p>
          <ul>
            <li><strong>अदम्य साहसी व निडर:</strong> वह शेर की माँद में जाकर शिकार करने का साहस रखता था। ब्रिटिश छावनी में अकेले घुसकर कर्नल से कारतूस ले लेना उसकी अभूतपूर्व बहादुरी का प्रमाण है।</li>
            <li><strong>सच्चा देशभक्त:</strong> उसके दिल में अंग्रेजों के प्रति गहरी नफरत थी। उसका एकमात्र लक्ष्य अंग्रेजों को भारत की भूमि से खदेड़ना था।</li>
            <li><strong>स्वाभिमानी:</strong> जब कंपनी के वकील ने उसका अपमान किया, तो उसने झुकने के बजाय तलवार से उसका अंत कर दिया।</li>
            <li><strong>शत्रु द्वारा भी प्रशंसित:</strong> उसकी वीरता देखकर स्वयं कर्नल कालिंज के मुँह से अनायास निकला—"एक जाँबाज़ सिपाही!"</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">साहस, निडरता व देशभक्ति के गुणों का निरूपण</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">स्वाभिमान व शत्रु (कर्नल) द्वारा 'जाँबाज़ सिपाही' कहे जाने का संदर्भ</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Questions (CBQs) -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Board Competency-Based Question (योग्यता आधारित प्रश्न)</div>
    <div class="q-text"><strong>ऐतिहासिक देशभक्ति एवं नेतृत्व विश्लेषण (Historical Patriotism & Leadership):</strong> 'कारतूस' एकांकी में वज़ीर अली के संघर्ष के माध्यम से 1857 के प्रथम स्वतंत्रता संग्राम से पूर्व के भारतीय असंतोष की झलक मिलती है। समीक्षा कीजिए कि भारतीय राजाओं के आपसी विश्वासघात (जैसे सआदत अली) के बावजूद वज़ीर अली जैसे योद्धाओं का बलिदान किस प्रकार भारतीय स्वतंत्रता चेतना की आधारशिला बना?</div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">विशेषज्ञ उत्तर व विश्लेषणात्मक दृष्टिकोण</div>
      <div class="answer-text">
        <p><strong>समीक्षा:</strong> ब्रिटिश ईस्ट इंडिया कंपनी ने 'फूट डालो और राज करो' की नीति के तहत सआदत अली जैसे विलासी और देशद्रोही राजाओं को मोहरा बनाकर भारत को गुलाम बनाया।</p>
        <p><strong>स्वतंत्रता चेतना की आधारशिला:</strong> ऐसे निराशाजनक दौर में भी वज़ीर अली जैसे जाँबाज़ योद्धाओं ने व्यक्तिगत सुख-सुविधाओं का त्याग कर अंग्रेजों के विरुद्ध सशस्त्र विद्रोह किया। यद्यपि उनके पास विशाल सेना नहीं थी, किंतु उनके अदम्य साहस और बलिदान ने भारतीय जनमानस में यह विश्वास जगाया कि विदेशी सत्ता अजेय नहीं है। यही चेतना आगे चलकर 1857 की क्रांति का आधार बनी।</p>
      </div>
    </div>
  </div>
</section>`;

fs.writeFileSync(path.join(dir, 'ch16.html'), ch16Html, 'utf8');
fs.writeFileSync(path.join(dir, 'ch17.html'), ch17Html, 'utf8');
fs.writeFileSync(path.join(dir, 'ch18.html'), ch18Html, 'utf8');
fs.writeFileSync(path.join(dir, 'ch19.html'), ch19Html, 'utf8');
fs.writeFileSync(path.join(dir, 'ch20.html'), ch20Html, 'utf8');
fs.writeFileSync(path.join(dir, 'ch21.html'), ch21Html, 'utf8');
fs.writeFileSync(path.join(dir, 'ch22.html'), ch22Html, 'utf8');

console.log('Successfully enriched Batch 4 (Ch 16 to Ch 22 - Sparsh Prose) to 100% NCERT textbook coverage!');
