---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1350
is_stripe_api_change: true
released_in_version: 8.203.0
---

* Add support for `verify_microdeposits` method on resources `PaymentIntent` and `SetupIntent`
* Add support for new value `grabpay` on enums `InvoiceCreateParams.payment_settings.payment_method_types[]`, `InvoiceUpdateParams.payment_settings.payment_method_types[]`, `Invoice.payment_settings.payment_method_types[]`, `SubscriptionCreateParams.payment_settings.payment_method_types[]`, `SubscriptionUpdateParams.payment_settings.payment_method_types[]`, and `Subscription.payment_settings.payment_method_types[]`
