---
title: Update generated code for beta
pr_url: https://github.com/stripe/stripe-node/pull/1837
is_stripe_api_change: true
released_in_version: 12.14.0-beta.1
---

* Add support for new resource `PaymentMethodConfiguration`
* Add support for `create`, `list`, `retrieve`, and `update` methods on resource `PaymentMethodConfiguration`
* Add support for `payment_method_configuration` on `PaymentIntentCreateParams` and `PaymentIntentUpdateParams`
* Add support for `payment_method_configuration_details` on `PaymentIntent`
* Rename `Tax.SettingRetrieveParam` to `Tax.SettingsRetrieveParam` and `Tax.SettingUpdateParams` to `Tax.SettingsUpdateParams` (parity with main release)
