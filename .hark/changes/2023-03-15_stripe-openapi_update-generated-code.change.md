---
title: Update generated code (new)
pr_url: https://github.com/stripe/stripe-node/pull/1710
is_stripe_api_change: true
released_in_version: 11.15.0
---

* Add support for `cashapp_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
* Add support for `cashapp` on `Charge.payment_method_details`, `Checkout.Session.payment_method_options`, `Checkout.SessionCreateParams.payment_method_options`, `Mandate.payment_method_details`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodCreateParams`, `PaymentMethodUpdateParams`, `PaymentMethod`, `SetupAttempt.payment_method_details`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
* Add support for new value `cashapp` on enum `Checkout.SessionCreateParams.payment_method_types[]`
* Add support for new value `cashapp` on enums `CustomerListPaymentMethodsParams.type` and `PaymentMethodListParams.type`
* Add support for new value `cashapp` on enums `Invoice.payment_settings.payment_method_types[]`, `InvoiceCreateParams.payment_settings.payment_method_types[]`, `InvoiceUpdateParams.payment_settings.payment_method_types[]`, `Subscription.payment_settings.payment_method_types[]`, `SubscriptionCreateParams.payment_settings.payment_method_types[]`, and `SubscriptionUpdateParams.payment_settings.payment_method_types[]`
* Add support for new value `cashapp` on enums `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
* Add support for `preferred_locale` on `PaymentIntent.payment_method_options.affirm`, `PaymentIntentConfirmParams.payment_method_options.affirm`, `PaymentIntentCreateParams.payment_method_options.affirm`, and `PaymentIntentUpdateParams.payment_method_options.affirm`
* Add support for `cashapp_handle_redirect_or_display_qr_code` on `PaymentIntent.next_action` and `SetupIntent.next_action`
* Add support for new value `cashapp` on enums `PaymentLink.payment_method_types[]`, `PaymentLinkCreateParams.payment_method_types[]`, and `PaymentLinkUpdateParams.payment_method_types[]`
* Add support for new value `cashapp` on enum `PaymentMethodCreateParams.type`
* Add support for new value `cashapp` on enum `PaymentMethod.type`
* Add support for new value `payout.reconciliation_completed` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
