// scripts/builders/expand-c8-sst.js
// Adds verbatim physical NCERT textbook questions to Class 8 Social Science (ncert-solutions-class-8-sst.html)
// Closes all shortage in History (Ch 2, 3, 4, 5, 6)

const fs = require('fs');
const path = require('path');

const sstPath = path.join(__dirname, '../../ncert-solutions-class-8-sst.html');
let html = fs.readFileSync(sstPath, 'utf8');

const sstAdditions = {
  ch2: [
    `      <div class="q-card" id="ch2_q9_def">
        <div class="q-head" onclick="toggleQ('ch2_q9_def')">
          <span class="q-num">Q9</span>
          <div class="q-text">What attracted European trading companies to India?</div>
          <span class="q-marks">3 Marks</span>
          <div class="q-toggle"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg></div>
        </div>
        <div class="q-answer">
          <div class="answer-box">
            <div class="answer-label">💡 Complete Answer (CBSE Marking Scheme Aligned):</div>
            <div class="answer-text">
              <p>European trading companies, including the Portuguese, Dutch, English, and French, were drawn to India by several compelling economic factors:</p>
              <ul>
                <li><strong>High Demand for Indian Textiles:</strong> The fine qualities of cotton and silk produced in India had an enormous market in Europe and fetched immense profits.</li>
                <li><strong>Lucrative Spice Trade:</strong> Indian spices like pepper, cloves, cardamom, and cinnamon were in great demand across European households for cooking, meat preservation, and medicinal uses.</li>
                <li><strong>Fabulous Profit Margins:</strong> Goods could be purchased at very cheap rates in India and transported back to European markets to be sold at exorbitant prices, generating astronomical profits for trading companies.</li>
              </ul>
            </div>
            <div class="marking-scheme">
              <div class="marking-title">📋 CBSE Marking Scheme Breakdown:</div>
              <div class="marking-row"><span class="marking-key">Demand for cotton and silk textiles</span><span class="marking-marks">1 Mark</span></div>
              <div class="marking-row"><span class="marking-key">Spice trade demand (pepper, cloves, cinnamon)</span><span class="marking-marks">1 Mark</span></div>
              <div class="marking-row"><span class="marking-key">Enormous profit margins through commercial arbitrage</span><span class="marking-marks">1 Mark</span></div>
            </div>
          </div>
        </div>
      </div>`,

    `      <div class="q-card" id="ch2_q10_def">
        <div class="q-head" onclick="toggleQ('ch2_q10_def')">
          <span class="q-num">Q10</span>
          <div class="q-text">What were the areas of conflict between the Bengal nawabs and the East India Company?</div>
          <span class="q-marks">4 Marks</span>
          <div class="q-toggle"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg></div>
        </div>
        <div class="q-answer">
          <div class="answer-box">
            <div class="answer-label">💡 Complete Answer (CBSE Marking Scheme Aligned):</div>
            <div class="answer-text">
              <p>During the 18th century, tensions between the Bengal Nawabs (Murshid Quli Khan, Alivardi Khan, and Sirajuddaulah) and the British East India Company escalated over key issues:</p>
              <ol>
                <li><strong>Refusal to Pay Taxes:</strong> The Company misused the royal Farman (duty-free trade concession granted to the Company) by carrying on private trade without paying taxes, causing colossal loss of revenue to the Bengal treasury.</li>
                <li><strong>Denial of Tributes:</strong> The Nawabs demanded large tributes for the Company's right to trade, which the Company consistently refused.</li>
                <li><strong>Minting Coins:</strong> The Nawabs strictly stopped the Company from minting its own coins within Bengal sovereign territory.</li>
                <li><strong>Fortification without Permission:</strong> The Company aggressively expanded fortifications around Calcutta (Fort William) without the Nawab's permission, directly challenging royal authority.</li>
              </ol>
            </div>
            <div class="marking-scheme">
              <div class="marking-title">📋 CBSE Marking Scheme Breakdown:</div>
              <div class="marking-row"><span class="marking-key">Misuse of duty-free trade concessions</span><span class="marking-marks">1 Mark</span></div>
              <div class="marking-row"><span class="marking-key">Refusal to pay tributes &amp; custom duties</span><span class="marking-marks">1 Mark</span></div>
              <div class="marking-row"><span class="marking-key">Dispute over minting rights</span><span class="marking-marks">1 Mark</span></div>
              <div class="marking-row"><span class="marking-key">Illegal extension of fortifications at Calcutta</span><span class="marking-marks">1 Mark</span></div>
            </div>
          </div>
        </div>
      </div>`,

    `      <div class="q-card" id="ch2_q11_def">
        <div class="q-head" onclick="toggleQ('ch2_q11_def')">
          <span class="q-num">Q11</span>
          <div class="q-text">How did the assumption of Diwani benefit the East India Company?</div>
          <span class="q-marks">3 Marks</span>
          <div class="q-toggle"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg></div>
        </div>
        <div class="q-answer">
          <div class="answer-box">
            <div class="answer-label">💡 Complete Answer (CBSE Marking Scheme Aligned):</div>
            <div class="answer-text">
              <p>In 1765, the Mughal Emperor appointed the Company as the Diwan of the provinces of Bengal. This transformed the Company's fortunes in major ways:</p>
              <ul>
                <li><strong>Control over Vast Revenue:</strong> The Diwani allowed the Company to use the vast revenue resources of Bengal to finance its trade and military expeditions.</li>
                <li><strong>End of Gold and Silver Inflow from Britain:</strong> Earlier, the Company had to import gold and silver from Britain to purchase Indian cotton and silk. Now, the revenues collected in Bengal financed the purchase of Indian goods for export.</li>
                <li><strong>Financing Military and Administration:</strong> Bengal revenue was used to maintain Company troops, build forts, and administer territories without cost to Britain.</li>
              </ul>
            </div>
            <div class="marking-scheme">
              <div class="marking-title">📋 CBSE Marking Scheme Breakdown:</div>
              <div class="marking-row"><span class="marking-key">Direct access to Bengal land revenues</span><span class="marking-marks">1 Mark</span></div>
              <div class="marking-row"><span class="marking-key">Elimination of gold and silver drain from Britain</span><span class="marking-marks">1 Mark</span></div>
              <div class="marking-row"><span class="marking-key">Financing military troops and colonial administrative infrastructure</span><span class="marking-marks">1 Mark</span></div>
            </div>
          </div>
        </div>
      </div>`
  ],

  ch3: [
    `      <div class="q-card" id="ch3_q8_def">
        <div class="q-head" onclick="toggleQ('ch3_q8_def')">
          <span class="q-num">Q8</span>
          <div class="q-text">Why were ryots reluctant to grow indigo?</div>
          <span class="q-marks">4 Marks</span>
          <div class="q-toggle"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg></div>
        </div>
        <div class="q-answer">
          <div class="answer-box">
            <div class="answer-label">💡 Complete Answer (CBSE Marking Scheme Aligned):</div>
            <div class="answer-text">
              <p>Peasants (ryots) in Bengal were intensely reluctant to cultivate indigo under the ryoti system due to severe economic and agrarian distress:</p>
              <ol>
                <li><strong>Unremunerative Prices:</strong> The price planters paid to ryots for indigo was extraordinarily low, making it impossible for them to earn a livelihood.</li>
                <li><strong>Never-ending Debt Cycle:</strong> Planters gave cash advances (loans) to ryots to plant indigo. Once the crop was harvested, the cycle of debt restarted with new loans, trapping ryots permanently.</li>
                <li><strong>Loss of Fertile Rice Land:</strong> Planters insisted that indigo be cultivated on the most fertile soils where peasants traditionally grew rice.</li>
                <li><strong>Severe Soil Exhaustion:</strong> Indigo had deep roots that rapidly exhausted the soil; once harvested, rice could no longer be sown on that land.</li>
              </ol>
            </div>
            <div class="marking-scheme">
              <div class="marking-title">📋 CBSE Marking Scheme Breakdown:</div>
              <div class="marking-row"><span class="marking-key">Extremely low purchase price paid by planters</span><span class="marking-marks">1 Mark</span></div>
              <div class="marking-row"><span class="marking-key">Vicious trap of loan advances</span><span class="marking-marks">1 Mark</span></div>
              <div class="marking-row"><span class="marking-key">Competition with rice cultivation on best lands</span><span class="marking-marks">1 Mark</span></div>
              <div class="marking-row"><span class="marking-key">Soil exhaustion preventing subsequent rice farming</span><span class="marking-marks">1 Mark</span></div>
            </div>
          </div>
        </div>
      </div>`
  ],

  ch4: [
    `      <div class="q-card" id="ch4_q8_def">
        <div class="q-head" onclick="toggleQ('ch4_q8_def')">
          <span class="q-num">Q8</span>
          <div class="q-text">How did the powers of tribal chiefs change under colonial rule?</div>
          <span class="q-marks">3 Marks</span>
          <div class="q-toggle"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg></div>
        </div>
        <div class="q-answer">
          <div class="answer-box">
            <div class="answer-label">💡 Complete Answer (CBSE Marking Scheme Aligned):</div>
            <div class="answer-text">
              <p>Before the arrival of the British, tribal chiefs were important administrative leaders who held economic power and controlled local police and land management. Under British rule, their position changed dramatically:</p>
              <ul>
                <li><strong>Loss of Administrative Power:</strong> They were stripped of their administrative authority and forced to follow laws made by British colonial officials.</li>
                <li><strong>Subservience to British Authority:</strong> They had to pay regular tribute to the British Crown and discipline their tribal people on behalf of the British.</li>
                <li><strong>Loss of Traditional Authority:</strong> Although allowed to keep land titles over villages, they lost the authority to manage community forest resources according to traditional customary laws.</li>
              </ul>
            </div>
            <div class="marking-scheme">
              <div class="marking-title">📋 CBSE Marking Scheme Breakdown:</div>
              <div class="marking-row"><span class="marking-key">Loss of independent administrative &amp; policing power</span><span class="marking-marks">1 Mark</span></div>
              <div class="marking-row"><span class="marking-key">Obligation to pay tribute and serve colonial interests</span><span class="marking-marks">1 Mark</span></div>
              <div class="marking-row"><span class="marking-key">Erosion of traditional customary leadership over tribes</span><span class="marking-marks">1 Mark</span></div>
            </div>
          </div>
        </div>
      </div>`
  ],

  ch5: [
    `      <div class="q-card" id="ch5_q8_def">
        <div class="q-head" onclick="toggleQ('ch5_q8_def')">
          <span class="q-num">Q8</span>
          <div class="q-text">How did the British succeed in securing the submission of the rebel landowners of Awadh?</div>
          <span class="q-marks">3 Marks</span>
          <div class="q-toggle"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg></div>
        </div>
        <div class="q-answer">
          <div class="answer-box">
            <div class="answer-label">💡 Complete Answer (CBSE Marking Scheme Aligned):</div>
            <div class="answer-text">
              <p>Following the re-conquest of Delhi and Lucknow, the British employed a combination of military force and strategic political diplomacy to win back the landlords of Awadh:</p>
              <ul>
                <li><strong>Declaration of Rewards and Land Rights:</strong> The British announced that loyal landowners would enjoy safe possession of their estates and traditional rights over their lands.</li>
                <li><strong>Pledge of Clemency:</strong> They proclaimed that rebel landlords who submitted to British authority would be pardoned, provided they had not murdered any white European civilians.</li>
                <li><strong>Restoration of Confiscated Estates:</strong> Landlords who submitted had their confiscated hereditary lands restored to them, effectively breaking the unity of the rebellion.</li>
              </ul>
            </div>
            <div class="marking-scheme">
              <div class="marking-title">📋 CBSE Marking Scheme Breakdown:</div>
              <div class="marking-row"><span class="marking-key">Announcement of land tenure protection for loyalists</span><span class="marking-marks">1 Mark</span></div>
              <div class="marking-row"><span class="marking-key">Policy of amnesty and clemency</span><span class="marking-marks">1 Mark</span></div>
              <div class="marking-row"><span class="marking-key">Restoration of ancestral estates breaking rebel unity</span><span class="marking-marks">1 Mark</span></div>
            </div>
          </div>
        </div>
      </div>`,

    `      <div class="q-card" id="ch5_q9_def">
        <div class="q-head" onclick="toggleQ('ch5_q9_def')">
          <span class="q-num">Q9</span>
          <div class="q-text">In what ways did the British change their policies as a result of the rebellion of 1857?</div>
          <span class="q-marks">4 Marks</span>
          <div class="q-toggle"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg></div>
        </div>
        <div class="q-answer">
          <div class="answer-box">
            <div class="answer-label">💡 Complete Answer (CBSE Marking Scheme Aligned):</div>
            <div class="answer-text">
              <p>The Government of India Act 1858 introduced profound structural and administrative policy changes:</p>
              <ol>
                <li><strong>Transfer of Power to British Crown:</strong> Powers of the East India Company were transferred directly to the British Crown, with a Secretary of State for India and a Viceroy heading the administration.</li>
                <li><strong>Assurance to Ruling Chiefs:</strong> The Doctrine of Lapse was abandoned; Indian princes were assured that their territories would never be annexed, and they could pass states to adopted heirs.</li>
                <li><strong>Reorganisation of Army:</strong> The proportion of European soldiers was increased, artillery was strictly reserved for Europeans, and recruitment shifted from Awadh/Bihar to Sikhs, Gurkhas, and Pathans.</li>
                <li><strong>Non-interference in Social Customs:</strong> The British pledged respect for Indian religious beliefs and customary social practices to avoid provoking religious unrest.</li>
              </ol>
            </div>
            <div class="marking-scheme">
              <div class="marking-title">📋 CBSE Marking Scheme Breakdown:</div>
              <div class="marking-row"><span class="marking-key">Crown rule and creation of Viceroy / Secretary of State</span><span class="marking-marks">1 Mark</span></div>
              <div class="marking-row"><span class="marking-key">Abolition of Doctrine of Lapse</span><span class="marking-marks">1 Mark</span></div>
              <div class="marking-row"><span class="marking-key">Military restructuring and martial races recruitment</span><span class="marking-marks">1 Mark</span></div>
              <div class="marking-row"><span class="marking-key">Policy of non-interference in religious customs</span><span class="marking-marks">1 Mark</span></div>
            </div>
          </div>
        </div>
      </div>`
  ],

  ch6: [
    `      <div class="q-card" id="ch6_q9_def">
        <div class="q-head" onclick="toggleQ('ch6_q9_def')">
          <span class="q-num">Q9</span>
          <div class="q-text">Why did the Muslim League pass a resolution demanding 'Independent States' for Muslims in 1940?</div>
          <span class="q-marks">3 Marks</span>
          <div class="q-toggle"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg></div>
        </div>
        <div class="q-answer">
          <div class="answer-box">
            <div class="answer-label">💡 Complete Answer (CBSE Marking Scheme Aligned):</div>
            <div class="answer-text">
              <p>In March 1940 at Lahore, the All-India Muslim League passed a historic resolution demanding sovereign autonomy for Muslim-majority zones in the north-western and eastern regions of British India due to several factors:</p>
              <ul>
                <li><strong>Fear of Minority Subjugation:</strong> The League feared that in a unified democratic India, Muslims would remain a permanent political minority subordinate to the Hindu majority.</li>
                <li><strong>Electoral Disappointment in 1937:</strong> Provincial elections in 1937 convinced the League that Muslims had limited electoral power without communal representation.</li>
                <li><strong>Congress Rejection of Coalition:</strong> The rejection by Congress of the League's proposal to form a joint government in the United Provinces created deep mistrust and alienated League leadership.</li>
              </ul>
            </div>
            <div class="marking-scheme">
              <div class="marking-title">📋 CBSE Marking Scheme Breakdown:</div>
              <div class="marking-row"><span class="marking-key">Apprehension of permanent political minority status</span><span class="marking-marks">1 Mark</span></div>
              <div class="marking-row"><span class="marking-key">Impact of 1937 provincial election results</span><span class="marking-marks">1 Mark</span></div>
              <div class="marking-row"><span class="marking-key">Congress rejection of coalition government in UP</span><span class="marking-marks">1 Mark</span></div>
            </div>
          </div>
        </div>
      </div>`,

    `      <div class="q-card" id="ch6_q10_def">
        <div class="q-head" onclick="toggleQ('ch6_q10_def')">
          <span class="q-num">Q10</span>
          <div class="q-text">How was the politics of the Radicals within the Congress different from that of the Moderates?</div>
          <span class="q-marks">4 Marks</span>
          <div class="q-toggle"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg></div>
        </div>
        <div class="q-answer">
          <div class="answer-box">
            <div class="answer-label">💡 Complete Answer (CBSE Marking Scheme Aligned):</div>
            <div class="answer-text">
              <p>By the 1890s, leaders like Bipin Chandra Pal, Bal Gangadhar Tilak, and Lala Lajpat Rai (Lal-Bal-Pal) questioned the political methods of the early Moderates:</p>
              <ol>
                <li><strong>Methods of Action:</strong> Moderates believed in constitutional agitation, sending petitions, resolutions, and appeals ('politics of prayer'). Radicals advocated mass mobilization, boycott of foreign goods, strikes, and aggressive political action.</li>
                <li><strong>Belief in British Justice:</strong> Moderates had deep faith in British sense of justice and fair play. Radicals asserted that self-reliance and people's own strength, not British benevolence, would win rights.</li>
                <li><strong>Ultimate Political Goal:</strong> Moderates aimed for greater administrative representation and self-governance within the British Empire. Radicals demanded <em>Swaraj</em> (complete freedom), famously declared by Tilak: <em>\"Freedom is my birthright and I shall have it!\"</em></li>
              </ol>
            </div>
            <div class="marking-scheme">
              <div class="marking-title">📋 CBSE Marking Scheme Breakdown:</div>
              <div class="marking-row"><span class="marking-key">Petitions vs. Mass Action / Boycott methods</span><span class="marking-marks">1.5 Marks</span></div>
              <div class="marking-row"><span class="marking-key">Critique of 'politics of prayer' and trust in British</span><span class="marking-marks">1 Mark</span></div>
              <div class="marking-row"><span class="marking-key">Goal of Swaraj (Self-rule) as birthright</span><span class="marking-marks">1.5 Marks</span></div>
            </div>
          </div>
        </div>
      </div>`
  ]
};

console.log('Injecting verbatim physical NCERT additions into Class 8 Social Science...');

for (const [chId, cards] of Object.entries(sstAdditions)) {
  const cardsHtml = '\n' + cards.join('\n\n') + '\n';
  
  // Find the insertion point in section chId: right before CBQ section or nav buttons
  const secRegex = new RegExp(`(<section[^>]*id="${chId}"[\\s\\S]*?)(<div class="cbq-section"|<div class="ch-nav-btns")`, 'i');
  if (secRegex.test(html)) {
    // Only inject if not already injected
    if (!html.includes(cards[0].match(/id="([^"]+)"/)[1])) {
      html = html.replace(secRegex, `$1${cardsHtml}      $2`);
      console.log(`✓ Added ${cards.length} questions to ${chId}`);
    } else {
      console.log(`- ${chId} already has additions`);
    }
  } else {
    console.error(`Could not find section ${chId} in html!`);
  }
}

fs.writeFileSync(sstPath, html, 'utf8');
console.log('Successfully updated ncert-solutions-class-8-sst.html!');
