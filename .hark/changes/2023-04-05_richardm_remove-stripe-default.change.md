---
title: Remove `Stripe.default` and `Stripe.Stripe`
pr_url: https://github.com/stripe/stripe-node/pull/1743
released_in_version: 12.0.0
---

This was added to maintain backwards compatibility during the transition of stripe-node to a dual ES module / CommonJS package, and should not be functionally necessary.
