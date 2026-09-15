---
title: Allow suppressing Stripe notices
pr_url: https://github.com/stripe/stripe-node/pull/2853
semver_level: minor
---

Set the `STRIPE_SUPPRESS_NOTICES` environment variable to `true` to suppress Stripe notices in test and sandbox environments when not running under a detected AI agent. Notices remain enabled by default and continue to be shown to AI agents.
