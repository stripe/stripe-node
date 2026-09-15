---
title: Fix event notification callback client context
pr_url: https://github.com/stripe/stripe-node/pull/2850
semver_level: minor
---

Create event notification callback clients with the event's Stripe context without inheriting a conflicting Stripe account from the original client.
