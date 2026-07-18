# WhatsApp Cloud API Module — OlympiadQuiz.org

Production-ready WhatsApp Business Platform integration for OlympiadQuiz,
built entirely as **new, additive code**. It does not modify Firebase
Authentication, Razorpay, existing Firestore collections/rules, the admin
panel, SEO, or UI.

## Architecture

```
functions/
├── index.js                 # existing file — 11 new exports appended at the end only
├── config.js                # NEW — secret names, constants, shared db handle
└── whatsapp/
    ├── whatsappService.js   # NEW — core send functions (text, template, OTP, broadcast...)
    ├── webhook.js            # NEW — GET verify + POST events, signature validation
    ├── templates.js          # NEW — Graph API payload builders
    ├── scheduler.js          # NEW — 5 scheduled (cron) functions
    ├── chatbot.js             # NEW — keyword chatbot + future-AI placeholder
    ├── messageLogger.js       # NEW — Firestore logging + webhook dedup
    ├── README.md              # this file
    └── postman_collection.json
```

Nothing in `whatsapp/*.js` is a deployed Cloud Function by itself, except:
- `webhook.js` → `whatsappWebhook` (HTTP `onRequest`)
- `scheduler.js` → 5 `onSchedule` functions

Everything else is a plain, reusable async function. `functions/index.js`
requires them and is the single place all Cloud Functions (old and new)
are exported from — matching this codebase's existing convention (e.g.
`createRazorpayOrder`, `sendResultEmail` are already defined directly in
`index.js`).

## What changed in `functions/index.js`

One block was **appended after the last existing line**. No existing
line was edited, moved, or deleted (verified with `git diff` — insertions
only, zero deletions). The block:
1. Re-exports `whatsappWebhook` and the 5 scheduled functions.
2. Adds 3 new `onCall` functions: `sendWhatsAppBroadcast` (admin-only,
   same auth check as existing `sendBulkSMS`), `generateAndSendWhatsAppOtp`,
   `verifyWhatsAppOtp`.
3. Adds 2 new Firestore triggers, `notifyWhatsAppOnPurchase` and
   `notifyWhatsAppOnResult`, listening on the **same document paths**
   already watched by the existing `sendLiveQuizRegistrationEmail` and
   `sendResultEmail` functions. Firestore natively supports multiple
   independent functions on one document path — this runs *alongside*
   the existing email functions, not instead of them.

## Firestore collections used (all new, zero collisions)

| Collection | Purpose |
|---|---|
| `whatsapp_logs` | Append-only audit trail: every inbound/outbound message + status update |
| `whatsapp_processed_events` | Dedup ledger so Meta's webhook retries never double-process |
| `whatsapp_broadcast_logs` | One summary document per broadcast run |
| `whatsapp_otp_codes` | Standalone WhatsApp OTP utility — **independent of Firebase Phone Auth** |

Two new fields are written onto the *existing* `users/{uid}/purchases/{sessionId}`
documents by the reminder scheduler: `whatsappReminder24hSentAt` and
`whatsappReminder1hSentAt`. These are additive fields only; nothing reads
or depends on their absence elsewhere in the app.

## Environment Variables / Secrets

**Never hardcoded.** All five secrets are Firebase Secret Manager secrets,
declared by name in `config.js` and injected into `process.env` only for
functions that list them in their `secrets: [...]` option — identical to
how `BREVO_API_KEY` and `RAZORPAY_KEY_ID` already work in this codebase.

| Secret name | Where to get it |
|---|---|
| `WHATSAPP_TOKEN` | Meta Business Manager → System User → permanent access token (do NOT use the 24h temporary token from the Getting Started tab in production) |
| `WHATSAPP_PHONE_NUMBER_ID` | WhatsApp Manager → your phone number → Phone number ID |
| `WHATSAPP_VERIFY_TOKEN` | Any string you make up yourself (e.g. a long random password) |
| `WHATSAPP_APP_SECRET` | Meta App Dashboard → Settings → Basic → App Secret |
| `WHATSAPP_BUSINESS_ACCOUNT_ID` | WhatsApp Manager → your WABA ID (optional, reserved for future template-management calls) |

## Installation

No new npm dependencies are required — the module uses Node 20's built-in
global `fetch` (same as the existing `createRazorpayOrder` function) and
Node's built-in `crypto` module.

```bash
cd functions
npm install   # only needed if you haven't already
```

## Setting the secrets

Run each of these once (you'll be prompted to paste the value):

```bash
firebase functions:secrets:set WHATSAPP_TOKEN
firebase functions:secrets:set WHATSAPP_PHONE_NUMBER_ID
firebase functions:secrets:set WHATSAPP_VERIFY_TOKEN
firebase functions:secrets:set WHATSAPP_APP_SECRET
firebase functions:secrets:set WHATSAPP_BUSINESS_ACCOUNT_ID
```

## Deployment

```bash
# Deploy everything (safe — existing functions are unchanged, this just adds new ones)
firebase deploy --only functions

# Or deploy only the new WhatsApp functions, to be extra cautious:
firebase deploy --only functions:whatsappWebhook,functions:whatsappReminder24h,functions:whatsappReminder1h,functions:whatsappWeeklyNewsletter,functions:whatsappFestivalGreeting,functions:whatsappBirthdayGreeting,functions:sendWhatsAppBroadcast,functions:generateAndSendWhatsAppOtp,functions:verifyWhatsAppOtp,functions:notifyWhatsAppOnPurchase,functions:notifyWhatsAppOnResult
```

After the first deploy, copy the `whatsappWebhook` HTTPS trigger URL from
the deploy output (or Firebase Console → Functions), e.g.:

```
https://us-central1-<your-project-id>.cloudfunctions.net/whatsappWebhook
```

## Meta Configuration Guide (exactly where to paste what)

1. Go to **business.facebook.com** → your app → **WhatsApp → Configuration**.
2. Under **Webhook**, click **Edit**.
3. **Callback URL**: paste the `whatsappWebhook` URL from the deploy step above.
4. **Verify token**: paste the *exact same value* you set for the
   `WHATSAPP_VERIFY_TOKEN` secret.
5. Click **Verify and save** — Meta immediately sends a `GET` request to
   your Callback URL; `webhook.js` answers it automatically.
6. Under **Webhook fields**, subscribe to at least: `messages`.
7. Under **WhatsApp → API Setup**, note your **Phone number ID** →
   this is your `WHATSAPP_PHONE_NUMBER_ID` secret value.
8. Under **App Settings → Basic**, copy **App Secret** →
   this is your `WHATSAPP_APP_SECRET` secret value.
9. Create a **System User** (Business Settings → Users → System Users),
   assign it to the WhatsApp app with `whatsapp_business_messaging` +
   `whatsapp_business_management` permissions, and generate a
   **permanent access token** → this is your `WHATSAPP_TOKEN` secret value.

## Creating & approving message templates

Every function in `templates.js` (OTP, payment success, registration
success, both reminders, result, certificate, weekly newsletter, festival
and birthday greetings) sends a **template message** — required by Meta
for any message outside a live 24-hour customer conversation. Before
using them, create and get each one **approved** in:

**WhatsApp Manager → Account tools → Message Templates → Create Template**

Use category `UTILITY` (or `AUTHENTICATION` for the OTP one) and match the
exact name from `TEMPLATE_NAMES` in `templates.js`, with body placeholders
`{{1}}`, `{{2}}`... in the order documented next to each `*Params()`
function in that file. Example for `payment_success`:

```
Hi {{1}}, we've received your payment of {{2}} for {{3}}. Your order ID
is {{4}}. Good luck with your test!
```

Template approval usually takes minutes to a few hours. Until a template
is approved, calls that use it will fail (and be logged with `status:
"failed"` in `whatsapp_logs` — nothing crashes).

## Testing

### Local — Firebase Emulator
```bash
firebase emulators:start --only functions,firestore
```
Then invoke a callable function via `firebase functions:shell`, e.g.:
```js
sendWhatsAppBroadcast({ message: "Test", targetType: "All Users" })
```

### Webhook verification (manual, without Meta)
```bash
curl "https://<your-deployed-url>/whatsappWebhook?hub.mode=subscribe&hub.verify_token=<YOUR_VERIFY_TOKEN>&hub.challenge=12345"
# should return: 12345
```

### Postman
Import `postman_collection.json` (in this folder). It includes:
- Webhook GET verification
- Simulated incoming message POST (with a placeholder signature header —
  see the collection's description for how to compute a real one for
  local testing)
- All `onCall` functions, via the Firebase callable-function HTTPS
  protocol (`.../v2/<functionName>` or via the `httpsCallable` client SDK
  — the collection notes both approaches)

## Security notes

- **Webhook signature validation**: every POST is rejected with `401`
  unless its `X-Hub-Signature-256` header matches an HMAC-SHA256 of the
  raw body computed with `WHATSAPP_APP_SECRET` (`webhook.js`, timing-safe
  comparison).
- **Verify-token check**: the `GET` handshake is rejected with `403`
  unless `hub.verify_token` matches the secret exactly.
- **Duplicate delivery protection**: every inbound message/status event
  is claimed atomically (`Firestore .create()`, fails if already
  claimed) in `messageLogger.claimWebhookEvent()` before any side effect
  runs — safe against Meta's automatic webhook retries.
- **Phone validation**: `normalizePhoneNumber()` in `whatsappService.js`
  rejects anything that isn't a plausible E.164-style number before it's
  ever sent to the Graph API.
- **Admin gating**: `sendWhatsAppBroadcast` uses the exact same
  hardcoded admin-email check already used by `sendBulkSMS` /
  `sendPushNotification`, so admin access rules stay centralized and
  consistent.
- **Retry + backoff**: `callGraphApi()` retries `429`/`5xx` responses up
  to 3 times with exponential backoff + jitter; `4xx` errors (bad
  request, invalid template, etc.) fail immediately without retrying.

## Future AI chatbot

`chatbot.js` exports `getAiReply(incomingText, context)` as an explicit
placeholder — it currently returns `null` (chatbot falls through to the
keyword rules, then a generic fallback message). To wire up OpenAI later,
implement the body of that one function; no other file needs to change.
