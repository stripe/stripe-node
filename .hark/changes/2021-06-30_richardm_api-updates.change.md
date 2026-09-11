---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1180
is_stripe_api_change: true
released_in_version: 8.159.0
---

* Add support for `wechat_pay` on `Charge.payment_method_details`, `Checkout.SessionCreateParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntent.payment_method_options`, `PaymentMethodCreateParams`, and `PaymentMethod`
* Add support for new value `wechat_pay` on enums `Checkout.SessionCreateParams.payment_method_types[]`, `InvoiceCreateParams.payment_settings.payment_method_types[]`, `InvoiceUpdateParams.payment_settings.payment_method_types[]`, `Invoice.payment_settings.payment_method_types[]`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentMethodCreateParams.type`, `PaymentMethodListParams.type`, and `PaymentMethod.type`
* Add support for `wechat_pay_display_qr_code`, `wechat_pay_redirect_to_android_app`, and `wechat_pay_redirect_to_ios_app` on `PaymentIntent.next_action`
