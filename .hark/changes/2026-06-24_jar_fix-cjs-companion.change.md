---
title: "fix: CJS companion namespace access for resource types at all depths"
pr_link: https://github.com/stripe/stripe-node/pull/2765
released_in_version: 22.3.0
---

- Fixes TypeScript type access for nested namespaces in CJS mode (e.g. `Stripe.Price.Recurring`, `Stripe.Subscription.BillingMode`)
- Fixes TypeScript type access for nested resource types e.g. `Stripe.Billing.Alert.Status`, `Stripe.Terminal.Configuration.Tipping` in both ESM and CJS modes.
