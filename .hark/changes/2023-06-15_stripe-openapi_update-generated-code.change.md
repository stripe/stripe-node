---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/1818
is_stripe_api_change: true
released_in_version: 12.10.0-beta.2
---

* Add support for `payment_details` on `ChargeCaptureParams`, `ChargeUpdateParams`, `PaymentIntentCaptureParams`, `PaymentIntentConfirmParams`, `PaymentIntentCreateParams`, `PaymentIntentUpdateParams`, and `PaymentIntent`
* Add support for `statement_details` on `PaymentIntent.payment_method_options.card`, `PaymentIntentConfirmParams.payment_method_options.card`, `PaymentIntentCreateParams.payment_method_options.card`, and `PaymentIntentUpdateParams.payment_method_options.card`
