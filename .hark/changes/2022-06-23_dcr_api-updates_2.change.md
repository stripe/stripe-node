---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1458
is_stripe_api_change: true
released_in_version: 9.10.0
---

* Add support for `promptpay_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
* Add support for `promptpay` on `Charge.payment_method_details`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodCreateParams`, `PaymentMethod`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
* Add support for new value `promptpay` on enum `Checkout.SessionCreateParams.payment_method_types[]`
* Add support for `subtotal_excluding_tax` on `CreditNote` and `Invoice`
* Add support for `amount_excluding_tax` and `unit_amount_excluding_tax` on `CreditNoteLineItem` and `InvoiceLineItem`
* Add support for new value `promptpay` on enums `CustomerListPaymentMethodsParams.type` and `PaymentMethodListParams.type`
* Add support for `rendering_options` on `InvoiceCreateParams` and `InvoiceUpdateParams`
* Add support for new value `promptpay` on enums `Invoice.payment_settings.payment_method_types[]`, `InvoiceCreateParams.payment_settings.payment_method_types[]`, `InvoiceUpdateParams.payment_settings.payment_method_types[]`, `Subscription.payment_settings.payment_method_types[]`, `SubscriptionCreateParams.payment_settings.payment_method_types[]`, and `SubscriptionUpdateParams.payment_settings.payment_method_types[]`
* Add support for `total_excluding_tax` on `Invoice`
* Add support for `automatic_payment_methods` on `Order.payment.settings`
* Add support for new value `promptpay` on enums `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
* Add support for `promptpay_display_qr_code` on `PaymentIntent.next_action`
* Add support for new value `promptpay` on enum `PaymentMethodCreateParams.type`
* Add support for new value `promptpay` on enum `PaymentMethod.type`
