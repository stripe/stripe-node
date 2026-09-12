---
title: Update generated code for beta
pr_url: https://github.com/stripe/stripe-node/pull/2148
is_breaking: true
is_stripe_api_change: true
released_in_version: 16.8.0-beta.1
---

* Add support for `capital_financing_application` and `capital_financing` on `AccountSession.components`
* Add support for `payto` on `Checkout.Session.payment_method_options` and `Checkout.SessionCreateParams.payment_method_options`
* Add support for new value `payto` on enum `Checkout.SessionCreateParams.payment_method_types[]`
* Add support for new value `custom` on enums `Checkout.Session.ui_mode` and `Checkout.SessionCreateParams.ui_mode`
* ⚠️ Remove support for `risk_correlation_id` on `PaymentIntent.payment_method_options.rechnung`, `PaymentIntentConfirmParams.payment_method_options.rechnung`, `PaymentIntentCreateParams.payment_method_options.rechnung`, and `PaymentIntentUpdateParams.payment_method_options.rechnung`
* Add support for new value `payto` on enums `PaymentLink.payment_method_types[]`, `PaymentLinkCreateParams.payment_method_types[]`, and `PaymentLinkUpdateParams.payment_method_types[]`
* Change `QuoteLine.cancel_subscription_schedule` to be required
