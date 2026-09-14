---
title: Update generated code for private-preview
pr_url: https://github.com/stripe/stripe-node/pull/2605
is_stripe_api_change: true
released_in_version: 20.5.0-alpha.4
---

* Add support for `simulate_crypto_deposit` test helper method on resource `PaymentIntent`
* Add support for `deposit_options` and `mode` on `PaymentIntent.payment_method_options.crypto`, `PaymentIntentConfirmParams.payment_method_options.crypto`, `PaymentIntentCreateParams.payment_method_options.crypto`, and `PaymentIntentUpdateParams.payment_method_options.crypto`
* Add support for `crypto_display_details` on `PaymentIntent.next_action`
