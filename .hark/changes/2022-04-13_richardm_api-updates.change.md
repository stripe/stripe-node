---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1395
is_stripe_api_change: true
released_in_version: 8.217.0
---

* Add support for `increment_authorization` method on resource `PaymentIntent`
* Add support for `incremental_authorization_supported` on `Charge.payment_method_details.card_present`
* Add support for `request_incremental_authorization_support` on `PaymentIntent.payment_method_options.card_present`, `PaymentIntentConfirmParams.payment_method_options.card_present`, `PaymentIntentCreateParams.payment_method_options.card_present`, and `PaymentIntentUpdateParams.payment_method_options.card_present`
