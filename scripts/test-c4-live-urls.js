const https = require('https');

const hosts = [
  'https://olympiadquiz.org',
  'https://olympiad-portal-d2a5e.web.app'
];

const paths = [
  '/ncert-solutions-class-4.html',
  '/ncert-solutions-class-4-maths.html',
  '/ncert-solutions-class-4-english.html',
  '/ncert-solutions-class-4-hindi.html',
  '/ncert-solutions-class-4-evs.html',
  '/chapters-c4m/maths-mela-ch1.html',
  '/chapters-c4m/math-magic-ch1.html',
  '/chapters-c4e/santoor-ch1.html',
  '/chapters-c4e/marigold-unit1.html',
  '/chapters-c4h/veena-ch1.html',
  '/chapters-c4h/rimjhim-ch1.html',
  '/chapters-c4evs/our-wondrous-world-ch1.html',
  '/chapters-c4evs/looking-around-ch1.html'
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
  for (const host of hosts) {
    console.log(`\nTesting Host: ${host}`);
    for (const p of paths) {
      const fullUrl = host + p;
      const res = await checkUrl(fullUrl);
      const icon = (res.status === 200 || res.status === 301 || res.status === 302) ? '✅' : '❌';
      console.log(`  ${icon} [${res.status}] ${p}`);
    }
  }
})();
