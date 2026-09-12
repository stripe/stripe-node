---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1564
is_stripe_api_change: true
released_in_version: 10.12.0
---

* Change type of `Charge.payment_method_details.card_present.incremental_authorization_supported` and `Charge.payment_method_details.card_present.overcapture_supported` from `boolean | null` to `boolean`
* Add support for `created` on `Checkout.Session`
* Add support for `setup_future_usage` on `PaymentIntent.payment_method_options.pix`, `PaymentIntentConfirmParams.payment_method_options.pix`, `PaymentIntentCreateParams.payment_method_options.pix`, and `PaymentIntentUpdateParams.payment_method_options.pix`
* Deprecate `Checkout.SessionCreateParams.subscription_data.items` (use the `line_items` param instead). This will be removed in the next major version.
