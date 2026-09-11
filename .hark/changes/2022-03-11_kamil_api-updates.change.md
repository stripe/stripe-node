---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1368
is_stripe_api_change: true
released_in_version: 8.209.0
---

* Add support for `mandate` on `Charge.payment_method_details.card`
* Add support for `mandate_options` on `PaymentIntentCreateParams.payment_method_options.card`, `PaymentIntentUpdateParams.payment_method_options.card`, `PaymentIntentConfirmParams.payment_method_options.card`, `PaymentIntent.payment_method_options.card`, `SetupIntentCreateParams.payment_method_options.card`, `SetupIntentUpdateParams.payment_method_options.card`, `SetupIntentConfirmParams.payment_method_options.card`, and `SetupIntent.payment_method_options.card`
* Add support for `card_await_notification` on `PaymentIntent.next_action`
* Add support for `customer_notification` on `PaymentIntent.processing.card`
* Change `PaymentLinkCreateParams.line_items` to be required, and change `PaymentLink.create` to require `PaymentLinkCreateParams`
