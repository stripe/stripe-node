---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/1985
is_stripe_api_change: true
released_in_version: 14.11.0
---

* Add support for `retrieve` method on resource `Tax.Registration`
* Change `AccountSession.components.payment_details.features`, `AccountSession.components.payment_details`, `AccountSession.components.payments.features`, `AccountSession.components.payments`, `AccountSession.components.payouts.features`, `AccountSession.components.payouts`, `PaymentLink.inactive_message`, and `PaymentLink.restrictions` to be required
* Change type of `SubscriptionSchedule.default_settings.invoice_settings` from `InvoiceSettingSubscriptionScheduleSetting | null` to `InvoiceSettingSubscriptionScheduleSetting`
