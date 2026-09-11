---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/2397
is_stripe_api_change: true
released_in_version: 19.1.0-beta.1
---

* Add support for new resources `Billing.Analytics.MeterUsageRow` and `Billing.Analytics.MeterUsage`
* Remove support for resources `Billing.MeterUsageRow` and `Billing.MeterUsage`
* Add support for `retrieve` method on resource `Billing.Analytics.MeterUsage`
* Remove support for `retrieve` method on resource `Billing.MeterUsage`
* Add support for `report_payment_attempt_informational` method on resource `PaymentRecord`
* Add support for `minimum_balance_by_currency` on `BalanceSettingUpdateParams.payments.payouts` and `BalanceSettings.payments.payouts`
* Remove support for values `saturday` and `sunday` from enums `BalanceSettingUpdateParams.payments.payouts.schedule.weekly_payout_days` and `BalanceSettings.payments.payouts.schedule.weekly_payout_days`
* Change type of `BalanceSettingUpdateParams.payments.settlement_timing.delay_days_override` from `longInteger` to `emptyable(longInteger)`
* Change `BalanceSettingUpdateParams.payments` to be optional
* Add support for `delay_days_override` on `BalanceSettings.payments.settlement_timing`
* Add support for `automatic_tax` and `invoice_creation` on `Checkout.SessionUpdateParams`
* Add support for `unit_label` on `Checkout.SessionUpdateParams.line_items[].price_data.product_data`
* Add support for `invoice_settings` on `Checkout.SessionUpdateParams.subscription_data`
* Change `Checkout.Session.collected_information.business_name` to be required
* Add support for `intended_submission_method` on `DisputeUpdateParams` and `Dispute`
* Change type of `Dispute.smart_disputes.recommended_evidence` from `string` to `array(string)`
* Add support for `pix` on `Invoice.payment_settings.payment_method_options`, `InvoiceCreateParams.payment_settings.payment_method_options`, `InvoiceUpdateParams.payment_settings.payment_method_options`, `QuotePreviewInvoice.payment_settings.payment_method_options`, `Subscription.payment_settings.payment_method_options`, `SubscriptionCreateParams.payment_settings.payment_method_options`, and `SubscriptionUpdateParams.payment_settings.payment_method_options`
* Add support for new value `pix` on enums `Invoice.payment_settings.payment_method_types`, `InvoiceCreateParams.payment_settings.payment_method_types`, `InvoiceUpdateParams.payment_settings.payment_method_types`, `QuotePreviewInvoice.payment_settings.payment_method_types`, `Subscription.payment_settings.payment_method_types`, `SubscriptionCreateParams.payment_settings.payment_method_types`, and `SubscriptionUpdateParams.payment_settings.payment_method_types`
* Add support for `billing_schedules` on `InvoiceCreatePreviewParams.subscription_details`, `SubscriptionCreateParams`, `SubscriptionUpdateParams`, and `Subscription`
* Add support for `paypay` on `PaymentAttemptRecord.payment_method_details` and `PaymentRecord.payment_method_details`
* Add support for `wallet` on `PaymentAttemptRecord.payment_method_details.card` and `PaymentRecord.payment_method_details.card`
* Change type of `PaymentAttemptRecord.processor_details.custom.payment_reference` and `PaymentRecord.processor_details.custom.payment_reference` from `string` to `string | null`
* Add support for `flexible` on `QuotePreviewSubscriptionSchedule.billing_mode`
* Add support for `billed_until` on `SubscriptionItem`
* Add support for error codes `financial_connections_account_pending_account_numbers` and `financial_connections_account_unavailable_account_numbers` on `QuotePreviewInvoice.last_finalization_error`
