---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1540
is_stripe_api_change: true
released_in_version: 10.7.0
---

* Add support for new values `de-CH`, `en-CH`, `en-PL`, `en-PT`, `fr-CH`, `it-CH`, `pl-PL`, and `pt-PT` on enums `OrderCreateParams.payment.settings.payment_method_options.klarna.preferred_locale`, `OrderUpdateParams.payment.settings.payment_method_options.klarna.preferred_locale`, `PaymentIntentConfirmParams.payment_method_options.klarna.preferred_locale`, `PaymentIntentCreateParams.payment_method_options.klarna.preferred_locale`, and `PaymentIntentUpdateParams.payment_method_options.klarna.preferred_locale`
* Add support for `description` on `PaymentLink.subscription_data` and `PaymentLinkCreateParams.subscription_data`
