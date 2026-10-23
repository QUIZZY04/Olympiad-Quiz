const https = require('https');

const urls = [
  'https://olympiad-portal-d2a5e.web.app/ncert-solutions-class-3.html',
  'https://olympiad-portal-d2a5e.web.app/chapters-c3m/maths-mela-ch1.html',
  'https://olympiad-portal-d2a5e.web.app/chapters-c3m/math-magic-ch1.html',
  'https://olympiad-portal-d2a5e.web.app/chapters-c3e/santoor-ch1.html',
  'https://olympiad-portal-d2a5e.web.app/chapters-c3e/marigold-unit1.html',
  'https://olympiad-portal-d2a5e.web.app/chapters-c3h/veena-ch1.html',
  'https://olympiad-portal-d2a5e.web.app/chapters-c3h/rimjhim-ch1.html',
  'https://olympiad-portal-d2a5e.web.app/chapters-c3evs/wondrous-world-ch1.html',
  'https://olympiad-portal-d2a5e.web.app/chapters-c3evs/looking-around-ch1.html'
];

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', (err) => {
      resolve({ url, status: err.message });
    });
  });
}

(async () => {
  console.log('Testing Live Deployed Chapter URLs:');
  for (const u of urls) {
    const res = await checkUrl(u);
    console.log(`  [${res.status}] ${res.url}`);
  }
})();
