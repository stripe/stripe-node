---
title: Add `StripeContext` object
pr_link: https://github.com/stripe/stripe-node/pull/2426
is_breaking: true
released_in_version: 19.0.0
---

- Add the `StripeContext` class.  It can be used anywhere the [context](https://docs.stripe.com/context) option is supplied and gets serialized to a string when making requests.
- ⚠️ Change `EventNotification` (formerly known as `ThinEvent`)'s `context` property from `string` to `StripeContext`
- ⚠️ We no longer remove the stripe-context header from /v1 requests and the stripe-account header from /v2 requests. The server may reject a request with both of these headers, so if you're sending both, remove any reference to stripeAccount (since the headers are identical, but context is preferred)
