# Premium / Free-Tier Rate Limiting

Free users get **1 test attempt per calendar day AND at most 4 per calendar week** (Monday-
Sunday, both reset at 00:00 IST) (chapterwise/mock/HOTS only - live championship tests have
their own separate per-session Razorpay paywall and are never rate-limited here). Premium
(Silver/Gold/Diamond via Razorpay Subscriptions) bypasses both limits entirely. All the
tunable numbers live in [`config.js`](./config.js) - nothing is hardcoded anywhere else.

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

## How the daily + weekly reset is computed

`canStartTest` computes both the current calendar day's AND calendar week's (Monday-Sunday)
boundaries in IST (UTC+5:30, no DST so a fixed offset is always correct - see
`getIstDayBounds`/`getIstWeekBounds` in `testLimits.js`), then queries `testAttempts` once
for `uid == <user> AND startedAt >= <00:00 IST this Monday>` - the week window is a
superset of the day window, so the daily count is just a client-side filter of the same
result set, no second query needed. It then excludes any attempt that's "abandoned" -
`questionsAnswered == 0`, never completed, and started more than 2 minutes ago
(`ABANDON_VOID_WINDOW_MINUTES` in config.js). No scheduled sweep job is needed - this
exclusion is computed on the fly, at query time, every time `canStartTest` runs.

Both caps are checked, daily first: if today's 1 attempt is already used, `unlocksAt` is
the next IST midnight; otherwise if the week's 4 attempts are already used, `unlocksAt` is
the following Monday 00:00 IST. So testing at 11:58pm and 11:59pm only costs a couple of
minutes of waiting (daily reset), while someone who spreads exactly 1 test across 4
different days in a week hits the weekly cap on their 5th attempt regardless of how long
ago each individual day's test was.

## Testing the daily/weekly reset locally, without waiting for real midnight/Monday

Seed `testAttempts` docs directly with a backdated `startedAt` so they land earlier the
same IST day/week, no need to touch any constant:

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
  startedAt: admin.firestore.Timestamp.fromMillis(now - 10 * 60 * 1000), // 10 min ago
  completedAt: admin.firestore.Timestamp.fromMillis(now - 5 * 60 * 1000),
  questionsAnswered: 10,
  voided: false,
});
```

Then call `canStartTest({testType: "mock"})` as `TEST_UID` - since the daily cap is 1, this
single seeded attempt is enough to trigger `allowed: false` with `unlocksAt` equal to the
next IST midnight. To exercise the weekly cap instead, seed 4 attempts spread across
different days *this* IST week (each with `startedAt` on a different day, but all
`>= <this week's Monday 00:00 IST>`) - a 5th attempt on any day that same week should
return `allowed: false` with `unlocksAt` equal to next Monday 00:00 IST, even though no
single day used more than its 1-attempt allowance. To exercise the "already past
midnight/Monday" reset path, backdate attempts to *last* week/yesterday (IST) and confirm
a fresh attempt today is allowed again.

### Testing the abandon-void logic

Seed one attempt with `questionsAnswered: 0`, `completedAt: null`, and `startedAt` more
than `ABANDON_VOID_WINDOW_MINUTES` in the past - `canStartTest` should exclude it from
the count entirely (it won't occupy the day's or week's slot). Seed another the same way
but with `startedAt` only 30 seconds ago - it SHOULD still count (too recent to consider
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
- [x] `RAZORPAY_SILVER_PLAN_ID`, `RAZORPAY_GOLD_PLAN_ID`, `RAZORPAY_DIAMOND_PLAN_ID` set
      (Gold quarterly + Diamond bootstrapped when those tiers were introduced).
- [ ] **Prices were cut again** (Silver ₹199→₹99/month, Gold ₹399→₹199/3 months, Diamond
      ₹999→₹599/year) - Razorpay Plans are immutable once created, so existing Plan objects
      still reflect the OLD prices. Run `createPremiumPlan({tier: "silver"})`,
      `createPremiumPlan({tier: "gold"})`, and `createPremiumPlan({tier: "diamond"})` again
      (each creates a fresh Plan at whatever `PREMIUM_TIERS[tier].priceInr` currently says),
      then update all three `RAZORPAY_*_PLAN_ID` secrets with the new plan_ids and redeploy
      `createPremiumSubscription`/`razorpayWebhook`. Existing subscribers keep paying their
      old price on the old Plan until they cancel and resubscribe - this only affects new
      checkouts.
- [ ] Register the deployed `razorpayWebhook` URL in the Razorpay Dashboard
      (Settings → Webhooks), subscribed to: `subscription.activated`, `subscription.charged`,
      `subscription.cancelled`, `subscription.completed`, `subscription.halted`, `payment.failed`.
- [ ] Replace the placeholder `RAZORPAY_WEBHOOK_SECRET` value with the real one shown by
      the Razorpay Dashboard when you register the webhook, then redeploy
      `razorpayWebhook` (secret changes require a redeploy to take effect).

## Gold/Diamond included All India Live Test credits

Gold and Diamond subscribers get a limited number of Live Test entries included free each
calendar month (2 for Gold, 4 for Diamond - `LIVE_TEST_MONTHLY_CREDITS` in `config.js`),
worth ₹99/entry (`LIVE_TEST_CREDIT_VALUE_INR`) at the normal per-session price. This is
handled entirely in [`liveTestCredits.js`](./liveTestCredits.js)'s `claimIncludedLiveTest` -
`live.html` calls it before falling back to the paid Razorpay Orders flow. The monthly
counter (`liveTestCreditClaims/{uid}_{yyyy-M}`, IST calendar month) and the resulting
`users/{uid}/purchases/{sessionId}` doc are written atomically in one Firestore transaction,
so a user can't rack up more free entries than their plan allows by retrying the call.

Personal guidance for upcoming Olympiads (Diamond-only, see `PERSONAL_GUIDANCE_TIERS`) is a
manual perk (outreach via WhatsApp/email) - nothing in this codebase automates it, the flag
just exists so the pricing card can advertise it consistently.
