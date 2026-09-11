---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/2101
is_stripe_api_change: true
released_in_version: 15.10.0
---

* Add support for `gb_bank_transfer_payments`, `jp_bank_transfer_payments`, `mx_bank_transfer_payments`, `sepa_bank_transfer_payments`, and `us_bank_transfer_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
* Add support for new value `swish` on enums `Invoice.payment_settings.payment_method_types[]`, `InvoiceCreateParams.payment_settings.payment_method_types[]`, `InvoiceUpdateParams.payment_settings.payment_method_types[]`, `Subscription.payment_settings.payment_method_types[]`, `SubscriptionCreateParams.payment_settings.payment_method_types[]`, and `SubscriptionUpdateParams.payment_settings.payment_method_types[]`
