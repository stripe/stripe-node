---
title: Remove Stripe.constructEventWithoutVerification
pr_url: https://github.com/stripe/stripe-node/pull/2862
semver_level: major
jira_tickets_closed:
  - DEVSDK-3248
---

Removed the Stripe.constructEventWithoutVerification from the top level client. The same functionality can be achieved via stripe.webhooks.constructEventWithoutVerification(payload);