---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1552
is_stripe_api_change: true
released_in_version: 10.10.0
---

* Add support for `pix` on `Charge.payment_method_details`, `Checkout.Session.payment_method_options`, `Checkout.SessionCreateParams.payment_method_options`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodCreateParams`, `PaymentMethod`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
* Add support for new value `pix` on enum `Checkout.SessionCreateParams.payment_method_types[]`
* Add support for new value `pix` on enums `CustomerListPaymentMethodsParams.type` and `PaymentMethodListParams.type`
* Add support for `from_invoice` on `InvoiceCreateParams` and `Invoice`
* Add support for `latest_revision` on `Invoice`
* Add support for `amount` on `Issuing.DisputeCreateParams` and `Issuing.DisputeUpdateParams`
* Add support for new value `pix` on enums `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
* Add support for `pix_display_qr_code` on `PaymentIntent.next_action`
* Add support for new value `pix` on enums `PaymentLink.payment_method_types[]`, `PaymentLinkCreateParams.payment_method_types[]`, and `PaymentLinkUpdateParams.payment_method_types[]`
* Add support for new value `pix` on enum `PaymentMethodCreateParams.type`
* Add support for new value `pix` on enum `PaymentMethod.type`
* Add support for `created` on `Treasury.CreditReversal` and `Treasury.DebitReversal`
