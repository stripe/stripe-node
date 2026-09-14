---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1269
is_stripe_api_change: true
released_in_version: 8.181.0
---

* Add support for `payment_method_category` and `preferred_locale` on `Charge.payment_method_details.klarna`
* Add support for new value `klarna` on enums `CustomerListPaymentMethodsParams.type` and `PaymentMethodListParams.type`
* Add support for `klarna` on `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntent.payment_method_options`, `PaymentMethodCreateParams`, and `PaymentMethod`
* Add support for new value `klarna` on enums `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, and `PaymentIntentConfirmParams.payment_method_data.type`
* Add support for new value `klarna` on enum `PaymentMethodCreateParams.type`
* Add support for new value `klarna` on enum `PaymentMethod.type`
