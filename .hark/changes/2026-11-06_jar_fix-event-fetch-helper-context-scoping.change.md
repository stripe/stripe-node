---
title: Fix Stripe-Context and Stripe-ACcount for event notification fetch helpers
pr_url: https://github.com/stripe/stripe-node/pull/2924
semver_level: patch
---

- Updates `fetchEvent` to call `withStripeContext` before issuing API call to fetch the event.
- Updates `addFetchRelatedObjectIfNeeded` (used by `events.retrieve()`/`list()`) the same way.
