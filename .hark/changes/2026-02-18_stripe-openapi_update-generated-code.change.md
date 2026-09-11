---
title: Update generated code for private-preview
pr_link: https://github.com/stripe/stripe-node/pull/2574
is_breaking: true
is_stripe_api_change: true
released_in_version: 20.4.0-alpha.4
---

* ⚠️ Add support for new value `spend_threshold` on enums `Billing.Alert.alert_type`, `Billing.AlertCreateParams.alert_type`, and `Billing.AlertListParams.alert_type`
* Add support for `spend_threshold` on `Billing.AlertCreateParams` and `Billing.Alert`
* Add support for `invoice_item`, `proration_details`, `proration`, and `subscription` on `InvoiceLineItem.parent.schedule_details`
* Add support for `custom` on `PaymentMethodUpdateParams`
* Add support for `payment_method_reference` and `usage` on `PaymentMethod.custom`
* Add support for `outstanding_usage_through` and `unused_time_from` on `SubscriptionPauseParams.bill_for`
* ⚠️ Remove support for `outstanding_usage` and `unused_time` on `SubscriptionPauseParams.bill_for`
* ⚠️ Remove support for `payment_behavior` on `SubscriptionResumeParams`
