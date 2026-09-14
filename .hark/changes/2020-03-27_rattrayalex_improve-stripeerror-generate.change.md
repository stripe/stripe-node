---
title: Improve StripeError.generate()
pr_url: https://github.com/stripe/stripe-node/pull/853
released_in_version: 8.38.0
---

- Add `doc_url` field to StripeError.
- Expose `Stripe.errors.generate()` as a convenience for `Stripe.errors.StripeError.generate()`.
- Fix several TS types related to StripeErrors.
- Add types for `StripeInvalidGrantError`.
- Add support for `authentication_error` and `rate_limit_error` in `.generate()`.
