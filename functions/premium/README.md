# Premium / Free-Tier Rate Limiting

Free users get **2 test attempts per rolling 4-hour window** (chapterwise/mock/HOTS only -
live championship tests have their own separate per-session Razorpay paywall and are
never rate-limited here). Premium (₹299/month via Razorpay Subscriptions) bypasses the
limit entirely. All the tunable numbers live in [`config.js`](./config.js) - nothing is
hardcoded anywhere else.

## Files

- `config.js` - every constant (limit, window, void-abandon cutoff, price, collection name).
- `testLimits.js` - `canStartTest`, `markTestAttemptProgress`, `completeTestAttempt`.
- `subscriptions.js` - `createPremiumPlan` (one-time bootstrap), `createPremiumSubscription`,
  `razorpayWebhook`.

## Premium revocation vs. payment failures

`isPremium` is only ever revoked on `subscription.halted` (Razorpay's retries
exhausted), `subscription.cancelled`, or `subscription.completed`. A single
`payment.failed` event does **not** revoke access - Razorpay auto-retries a failed
renewal charge over several days, and one failure is usually transient (temporary
insufficient balance, a bank OTP timeout, etc.), not an actual cancellation. Failures
are still logged to the `paymentFailures` collection (subscriptionId, uid, Razorpay's
error code/description, timestamp) for visibility - check that collection if you want
to see how often renewals are failing, or build an admin view over it later.

## How the rolling window is computed

`canStartTest` queries `testAttempts` for `uid == <user> AND startedAt >= (now - 4h)`,
then excludes any attempt that's "abandoned" - `questionsAnswered == 0`, never completed,
and started more than 2 minutes ago (`ABANDON_VOID_WINDOW_MINUTES` in config.js). No
scheduled sweep job is needed - this exclusion is computed on the fly, at query time,
every time `canStartTest` runs.

## Testing the rolling window locally, without waiting 4 real hours

Two options, from fastest to most realistic:

### Option A - shrink the constants temporarily (fastest)

In `functions/premium/config.js`, temporarily set:

```js
const FREE_TEST_LIMIT = 2;
const FREE_TEST_WINDOW_HOURS = 2 / 60;       // 2 minutes instead of 4 hours
const ABANDON_VOID_WINDOW_MINUTES = 0.25;    // 15 seconds instead of 2 minutes
```

Run the emulator suite (`firebase emulators:start --only functions,firestore,auth`),
sign in as a test user in the app pointed at the emulator, and take 3 tests within a
couple of minutes - the whole rolling-window/unlock cycle now plays out in under 5
minutes of real wall-clock time. **Revert these numbers before deploying to production**
- don't ship the shrunk values.

### Option B - seed `testAttempts` docs directly with a backdated `startedAt` (more realistic, no waiting at all)

Since `canStartTest` only cares about how old each attempt's `startedAt` is relative to
`Date.now()` at query time, you can seed attempts with an artificially old timestamp
directly in the emulator's Firestore, no need to shrink any constant:

```js
// Run inside the Firestore emulator (e.g. via a small script using
// firebase-admin pointed at FIRESTORE_EMULATOR_HOST=localhost:8080):
const admin = require("firebase-admin");
admin.initializeApp({ projectId: "olympiad-portal-d2a5e" });
const db = admin.firestore();

const now = Date.now();
await db.collection("testAttempts").add({
  uid: "TEST_UID",
  testType: "mock",
  startedAt: admin.firestore.Timestamp.fromMillis(now - 3.9 * 60 * 60 * 1000), // 3h54m ago
  completedAt: admin.firestore.Timestamp.fromMillis(now - 3.8 * 60 * 60 * 1000),
  questionsAnswered: 10,
  voided: false,
});
await db.collection("testAttempts").add({
  uid: "TEST_UID",
  testType: "mock",
  startedAt: admin.firestore.Timestamp.fromMillis(now - 3.5 * 60 * 60 * 1000), // 3h30m ago
  completedAt: admin.firestore.Timestamp.fromMillis(now - 3.4 * 60 * 60 * 1000),
  questionsAnswered: 10,
  voided: false,
});
```

Then call `canStartTest({testType: "mock"})` as `TEST_UID` - it should return
`allowed: false` with `unlocksAt` equal to the first attempt's `startedAt` (3h54m ago) +
4 hours, i.e. ~6 minutes from now. Adjust the `3.9`/`3.5` hour offsets to land the
"unlock" a minute or two in the future for a quick real-time countdown-modal check, or
push them further in the past (e.g. `4.1` hours ago) to confirm the window has already
rolled and a 3rd attempt is allowed again.

### Testing the abandon-void logic

Seed one attempt with `questionsAnswered: 0`, `completedAt: null`, and `startedAt` more
than `ABANDON_VOID_WINDOW_MINUTES` in the past - `canStartTest` should exclude it from
the count entirely (it won't occupy one of the 2 slots). Seed another the same way but
with `startedAt` only 30 seconds ago - it SHOULD still count (too recent to consider
abandoned yet).

## Testing Premium bypass

Set `isPremium: true` directly on a test user's Firestore doc in the emulator (or via the
Firebase Console in a real but non-production project) - `canStartTest` should return
`{allowed: true, isPremium: true}` regardless of how many attempts exist.

## Testing the Razorpay webhook locally

Razorpay can't reach `localhost`, so for local webhook testing either:
- Use a tunnel (ngrok/cloudflared) pointed at the emulator's functions port and register
  that temporary URL in the Razorpay Dashboard's **test mode** webhook settings, or
- Skip Razorpay entirely and POST a hand-crafted payload straight at the emulated
  `razorpayWebhook` function, computing the HMAC signature yourself with the same
  `RAZORPAY_WEBHOOK_SECRET` value the emulator is using:

  ```js
  const crypto = require("crypto");
  const body = JSON.stringify({ event: "subscription.charged", payload: { subscription: { entity: {
    id: "sub_test123", notes: { uid: "TEST_UID" }, current_end: Math.floor(Date.now()/1000) + 30*24*3600
  } } } });
  const signature = crypto.createHmac("sha256", "<your emulator RAZORPAY_WEBHOOK_SECRET value>").update(body).digest("hex");
  // POST body to the emulated razorpayWebhook URL with header x-razorpay-signature: signature
  ```

## Production setup checklist (one-time, done as part of this feature's rollout)

- [x] `RAZORPAY_PREMIUM_PLAN_ID` secret set (Plan created via `createPremiumPlan`/the Plans API).
- [ ] Register the deployed `razorpayWebhook` URL in the Razorpay Dashboard
      (Settings → Webhooks), subscribed to: `subscription.activated`, `subscription.charged`,
      `subscription.cancelled`, `subscription.completed`, `subscription.halted`, `payment.failed`.
- [ ] Replace the placeholder `RAZORPAY_WEBHOOK_SECRET` value with the real one shown by
      the Razorpay Dashboard when you register the webhook, then redeploy
      `razorpayWebhook` (secret changes require a redeploy to take effect).
