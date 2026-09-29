---
title: Update verifyHeader and verifyHeaderAsync methods to use DEFAULT_TOLERANCE
pr_url: https://github.com/stripe/stripe-node/pull/2876
semver_level: major
---

`stripe.webhooks.signature.verifyHeader()` and `verifyHeaderAsync()` previously skipped timestamp tolerance verification when the `tolerance` argument was omitted. They now default to `Webhook.DEFAULT_TOLERANCE`

It's now possible to explicitly set `tolerance` to 0 when constructing an event, which skips timestamp tolerance verification.

i.e. previously, `stripe.webhooks.constructEvent(payload, header, secret, 0)` would make the tolerance default to `Webhook.DEFAULT_TOLERANCE`. Now, explicitly setting it to 0 is supported.