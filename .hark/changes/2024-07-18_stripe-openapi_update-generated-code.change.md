---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/2138
is_stripe_api_change: true
released_in_version: 16.4.0
---

* Add support for `customer` on `ConfirmationToken.payment_method_preview`
* Add support for new value `issuing_dispute.funds_rescinded` on enum `Event.type`
* Add support for new value `multibanco` on enums `Invoice.payment_settings.payment_method_types[]`, `InvoiceCreateParams.payment_settings.payment_method_types[]`, `InvoiceUpdateParams.payment_settings.payment_method_types[]`, `Subscription.payment_settings.payment_method_types[]`, `SubscriptionCreateParams.payment_settings.payment_method_types[]`, and `SubscriptionUpdateParams.payment_settings.payment_method_types[]`
* Add support for new value `stripe_s700` on enums `Terminal.Reader.device_type` and `Terminal.ReaderListParams.device_type`
* Add support for new value `issuing_dispute.funds_rescinded` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
