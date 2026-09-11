---
title: Restore missing public type exports from v21 Stripe namespace
pr_link: https://github.com/stripe/stripe-node/pull/2778
released_in_version: 22.3.1
---

- Restores `Stripe.StripeConfig`, `Stripe.CryptoProvider`, `Stripe.HttpClient`, `Stripe.HttpClientResponse`, `Stripe.Webhooks`, `Stripe.Signature`, `Stripe.WebhookTestHeaderOptions`, `Stripe.StripeResource`, `Stripe.LatestApiVersion`, `Stripe.HttpAgent`, `Stripe.HttpProtocol`, and `Stripe.RawErrorType` type exports that were inadvertently dropped in the v22 type system migration.
