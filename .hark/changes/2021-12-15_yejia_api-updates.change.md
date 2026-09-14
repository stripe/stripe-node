---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1309
is_stripe_api_change: true
released_in_version: 8.194.0
---

* Add support for new resource `PaymentIntentTypeSpecificPaymentMethodOptionsClient`
* Add support for `setup_future_usage` on `PaymentIntentCreateParams.payment_method_options.card`, `PaymentIntentUpdateParams.payment_method_options.card`, `PaymentIntentConfirmParams.payment_method_options.card`, and `PaymentIntent.payment_method_options.card`
