---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1298
is_stripe_api_change: true
released_in_version: 8.191.0
---

* Add support for `interac_present` on `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentIntentConfirmParams.payment_method_options`, and `PaymentIntent.payment_method_options`
* Add support for new value `jct` on enums `TaxRateCreateParams.tax_type`, `TaxRateUpdateParams.tax_type`, and `TaxRate.tax_type`
