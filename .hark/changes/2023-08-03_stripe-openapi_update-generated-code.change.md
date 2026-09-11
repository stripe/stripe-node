---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/1863
is_stripe_api_change: true
released_in_version: 12.17.0
---

* Change many types from `string` to `emptyStringable(string)`
* Add support for `subscription_details` on `Invoice`
* Add support for `preferred_settlement_speed` on `PaymentIntent.payment_method_options.us_bank_account`, `PaymentIntentConfirmParams.payment_method_options.us_bank_account`, `PaymentIntentCreateParams.payment_method_options.us_bank_account`, and `PaymentIntentUpdateParams.payment_method_options.us_bank_account`
* Add support for new values `sepa_debit_fingerprint` and `us_bank_account_fingerprint` on enums `Radar.ValueList.item_type` and `Radar.ValueListCreateParams.item_type`
