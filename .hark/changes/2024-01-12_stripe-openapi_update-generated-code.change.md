---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/1990
is_stripe_api_change: true
released_in_version: 14.12.0
---

* Add support for new resource `CustomerSession`
* Add support for `create` method on resource `CustomerSession`
* Remove support for values `obligation_inbound`, `obligation_payout_failure`, `obligation_payout`, and `obligation_reversal_outbound` from enum `BalanceTransaction.type`
* Add support for new values `eps` and `p24` on enums `Invoice.payment_settings.payment_method_types[]`, `InvoiceCreateParams.payment_settings.payment_method_types[]`, `InvoiceUpdateParams.payment_settings.payment_method_types[]`, `Subscription.payment_settings.payment_method_types[]`, `SubscriptionCreateParams.payment_settings.payment_method_types[]`, and `SubscriptionUpdateParams.payment_settings.payment_method_types[]`
* Remove support for value `obligation` from enum `Reporting.ReportRunCreateParams.parameters.reporting_category`
* Add support for `billing_cycle_anchor_config` on `SubscriptionCreateParams` and `Subscription`
