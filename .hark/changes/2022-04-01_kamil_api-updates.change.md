---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1389
is_stripe_api_change: true
released_in_version: 8.215.0
---

* Add support for `bank_transfer_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
* Add support for `capture_before` on `Charge.payment_method_details.card_present`
* Add support for `address` and `name` on `Checkout.Session.customer_details`
* Add support for `customer_balance` on `Invoice.payment_settings.payment_method_options`, `InvoiceCreateParams.payment_settings.payment_method_options`, `InvoiceUpdateParams.payment_settings.payment_method_options`, `Subscription.payment_settings.payment_method_options`, `SubscriptionCreateParams.payment_settings.payment_method_options`, and `SubscriptionUpdateParams.payment_settings.payment_method_options`
* Add support for new value `customer_balance` on enums `Invoice.payment_settings.payment_method_types[]`, `InvoiceCreateParams.payment_settings.payment_method_types[]`, `InvoiceUpdateParams.payment_settings.payment_method_types[]`, `Subscription.payment_settings.payment_method_types[]`, `SubscriptionCreateParams.payment_settings.payment_method_types[]`, and `SubscriptionUpdateParams.payment_settings.payment_method_types[]`
* Add support for `request_extended_authorization` on `PaymentIntent.payment_method_options.card_present`, `PaymentIntentConfirmParams.payment_method_options.card_present`, `PaymentIntentCreateParams.payment_method_options.card_present`, and `PaymentIntentUpdateParams.payment_method_options.card_present`
* Add support for new values `payment_intent.partially_funded`, `terminal.reader.action_failed`, and `terminal.reader.action_succeeded` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
