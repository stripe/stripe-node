---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1560
is_breaking: true
is_stripe_api_change: true
released_in_version: 10.11.0
---

* Add support for `terms_of_service` on `Checkout.Session.consent_collection`, `Checkout.Session.consent`, `Checkout.SessionCreateParams.consent_collection`, `PaymentLink.consent_collection`, and `PaymentLinkCreateParams.consent_collection`
* ⚠️  Remove support for `plan` on `Checkout.SessionCreateParams.payment_method_options.card.installments`. The property was mistakenly released and never worked.
* Add support for `statement_descriptor` on `PaymentIntentIncrementAuthorizationParams`
* Change `SubscriptionSchedule.phases[].currency` to be required
