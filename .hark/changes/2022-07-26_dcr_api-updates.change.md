---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1492
is_stripe_api_change: true
released_in_version: 9.16.0
---

* Add support for new value `exempted` on enums `Charge.payment_method_details.card.three_d_secure.result` and `SetupAttempt.payment_method_details.card.three_d_secure.result`
* Add support for `customer_balance` on `Checkout.Session.payment_method_options` and `Checkout.SessionCreateParams.payment_method_options`
* Add support for new value `customer_balance` on enum `Checkout.SessionCreateParams.payment_method_types[]`
* Add support for new values `en-CA` and `fr-CA` on enums `OrderCreateParams.payment.settings.payment_method_options.klarna.preferred_locale`, `OrderUpdateParams.payment.settings.payment_method_options.klarna.preferred_locale`, `PaymentIntentConfirmParams.payment_method_options.klarna.preferred_locale`, `PaymentIntentCreateParams.payment_method_options.klarna.preferred_locale`, and `PaymentIntentUpdateParams.payment_method_options.klarna.preferred_locale`
