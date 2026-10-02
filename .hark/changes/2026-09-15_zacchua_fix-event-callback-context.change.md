---
title: Fix account scoping for `EventNotificationHandler` callback clients
pr_url: https://github.com/stripe/stripe-node/pull/2850
semver_level: patch
released_in_version: 23.0.0
---

- Fix callback clients to use the event's Stripe context and preserve client telemetry.
- Fix 400 errors when using an `EventNotificationHandler` with a `StripeClient` configured with `stripeAccount`.
