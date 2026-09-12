---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1211
is_stripe_api_change: true
released_in_version: 8.168.0
---

* Change type of `PaymentIntentCreateParams.payment_method_options.sofort.preferred_language`, `PaymentIntentUpdateParams.payment_method_options.sofort.preferred_language`, and `PaymentIntentConfirmParams.payment_method_options.sofort.preferred_language` from `enum` to `emptyStringable(enum)`
* Change `Price.tax_behavior`, `Product.tax_code`, `Quote.automatic_tax`, and `TaxRate.tax_type` to be required
