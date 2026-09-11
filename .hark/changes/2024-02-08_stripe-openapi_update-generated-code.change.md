---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/2012
is_stripe_api_change: true
released_in_version: 14.16.0
---

* Add support for `invoices` on `Account.settings` and `AccountUpdateParams.settings`
* Add support for new value `velobank` on enums `Charge.payment_method_details.p24.bank`, `PaymentIntentConfirmParams.payment_method_data.p24.bank`, `PaymentIntentCreateParams.payment_method_data.p24.bank`, `PaymentIntentUpdateParams.payment_method_data.p24.bank`, `PaymentMethod.p24.bank`, `PaymentMethodCreateParams.p24.bank`, `SetupIntentConfirmParams.payment_method_data.p24.bank`, `SetupIntentCreateParams.payment_method_data.p24.bank`, and `SetupIntentUpdateParams.payment_method_data.p24.bank`
* Add support for `setup_future_usage` on `PaymentIntent.payment_method_options.blik`, `PaymentIntentConfirmParams.payment_method_options.blik`, `PaymentIntentCreateParams.payment_method_options.blik`, and `PaymentIntentUpdateParams.payment_method_options.blik`
* Add support for `require_cvc_recollection` on `PaymentIntent.payment_method_options.card`, `PaymentIntentConfirmParams.payment_method_options.card`, `PaymentIntentCreateParams.payment_method_options.card`, and `PaymentIntentUpdateParams.payment_method_options.card`
* Add support for `account_tax_ids` on `SubscriptionCreateParams.invoice_settings`, `SubscriptionSchedule.default_settings.invoice_settings`, `SubscriptionSchedule.phases[].invoice_settings`, `SubscriptionScheduleCreateParams.default_settings.invoice_settings`, `SubscriptionScheduleCreateParams.phases[].invoice_settings`, `SubscriptionScheduleUpdateParams.default_settings.invoice_settings`, `SubscriptionScheduleUpdateParams.phases[].invoice_settings`, and `SubscriptionUpdateParams.invoice_settings`
