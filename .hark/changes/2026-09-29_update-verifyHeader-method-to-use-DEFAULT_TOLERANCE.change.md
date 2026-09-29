---
title: Update verifyHeader and verifyHeaderAsync methods to use DEFAULT_TOLERANCE
pr_url: https://github.com/stripe/stripe-node/pull/2876
semver_level: major
---

`stripe.webhooks.signature.verifyHeader()` and `verifyHeaderAsync()` previously skipped timestamp tolerance verification when the `tolerance` argument was omitted. They now default to `Webhook.DEFAULT_TOLERANCE`

Passing 0 to stripe.webhooks.constructEvent now properly skips timestamp tolerance verification. Previously, passing 0 would perform verification with the default tolerance Webhook.DEFAULT_TOLERANCE.