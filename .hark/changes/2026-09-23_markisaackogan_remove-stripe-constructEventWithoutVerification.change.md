---
title: Remove Stripe.constructEventWithoutVerification
pr_url: https://github.com/stripe/stripe-node/pull/2862
semver_level: major
jira_tickets_closed:
  - DEVSDK-3248
---

Removed the function `Stripe.constructEventWithoutVerification()` that was mistakenly added in version 22.5.0 of this package. The same functionality can be achieved via stripe.webhooks.constructEventWithoutVerification(payload);