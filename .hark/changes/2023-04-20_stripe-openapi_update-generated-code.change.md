---
title: Update generated code for beta
pr_url: https://github.com/stripe/stripe-node/pull/1760
is_stripe_api_change: true
released_in_version: 12.3.0-beta.1
---

* Add support for `zip` on `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_options`, and `PaymentIntentUpdateParams.payment_method_options`
* Add support for `country_options` on `Tax.Registration` and `TaxRegistrationCreateParams`
* Remove support for `state` and `type` on `Tax.Registration` and `TaxRegistrationCreateParams`
