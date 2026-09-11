---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/1769
is_stripe_api_change: true
released_in_version: 12.4.0-beta.1
---

* Add support for `billing_cycle_anchor` and `proration_behavior` on `CheckoutSessionCreateParams.subscription_data`
* Add support for `terminal_id` on `Issuing.Authorization.merchant_data` and `Issuing.Transaction.merchant_data`
* Add support for `metadata` on `PaymentIntentCaptureParams`
* Add support for `checks` on `SetupAttempt.payment_method_details.card`
* Add support for `tax_breakdown` on `Tax.Calculation.shipping_cost` and `Tax.Transaction.shipping_cost`
* Change type of `TaxRegistrationCreateParams.active_from`, `TaxRegistrationUpdateParams.active_from`, and `TaxRegistrationUpdateParams.expires_at` from `longInteger` to `longInteger | literal('now')`
