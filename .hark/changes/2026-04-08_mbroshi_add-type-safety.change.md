---
title: Add type safety to Stripe constructor config (no runtime change)
pr_link: https://github.com/stripe/stripe-node/pull/2667
released_in_version: 22.0.1
---

- Fixed some compile-time checks (no runtime changes)
  - Fixed `Stripe` constructor config parameter to use `StripeConfig` type instead of `Record<string, unknown>`, restoring compile-time type safety.
  - Added missing `authenticator` property to `StripeConfig`.
  - Fixed `Stripe.API_VERSION` to retain the literal API version type.
  - Fixed `StripeConfig.stripeContext` to accept `StripeContext` objects in addition to strings.
