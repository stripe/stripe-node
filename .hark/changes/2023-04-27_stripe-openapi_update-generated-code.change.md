---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/1770
is_stripe_api_change: true
released_in_version: 12.3.0
---

* Add support for `billing_cycle_anchor` and `proration_behavior` on `Checkout.SessionCreateParams.subscription_data`
* Add support for `terminal_id` on `Issuing.Authorization.merchant_data` and `Issuing.Transaction.merchant_data`
* Add support for `metadata` on `PaymentIntentCaptureParams`
* Add support for `checks` on `SetupAttempt.payment_method_details.card`
* Add support for `tax_breakdown` on `Tax.Calculation.shipping_cost` and `Tax.Transaction.shipping_cost`
