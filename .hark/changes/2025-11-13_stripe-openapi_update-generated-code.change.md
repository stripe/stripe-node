---
title: Update generated code for private-preview
pr_link: https://github.com/stripe/stripe-node/pull/2501
is_stripe_api_change: true
released_in_version: 19.4.0-alpha.2
---

* Add support for new resource `Issuing.Program`
* Add support for `create`, `list`, `retrieve`, and `update` methods on resource `Issuing.Program`
* Add support for `schedule` on `Discount`
* Add support for `applicable_fees` on `DelegatedCheckout.RequestedSession.total_details`
* Add support for `schedule_details` on `Invoice.parent`, `InvoiceItem.parent`, `InvoiceLineItem.parent`, and `QuotePreviewInvoice.parent`
* Add support for new value `schedule_details` on enum `InvoiceItem.parent.type`
* Add support for `billing_schedules` on `InvoiceCreatePreviewParams.schedule_details`, `QuotePreviewSubscriptionSchedule`, `SubscriptionScheduleCreateParams`, `SubscriptionScheduleUpdateParams`, and `SubscriptionSchedule`
* Add support for new value `schedule_details` on enums `Invoice.parent.type` and `QuotePreviewInvoice.parent.type`
* Add support for new value `schedule_details` on enum `InvoiceLineItem.parent.type`
* Add support for `latest_invoice` on `QuotePreviewSubscriptionSchedule` and `SubscriptionSchedule`
* Add support for `phase_effective_at` on `QuotePreviewSubscriptionSchedule.default_settings`, `SubscriptionSchedule.default_settings`, `SubscriptionScheduleCreateParams.default_settings`, and `SubscriptionScheduleUpdateParams.default_settings`
