---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1410
is_stripe_api_change: true
released_in_version: 8.221.0
---

* Add support for `registered_address` on `AccountCreateParams.individual`, `AccountUpdateParams.individual`, `PersonCreateParams`, `PersonUpdateParams`, `Person`, `TokenCreateParams.account.individual`, and `TokenCreateParams.person`
* Change type of `PaymentIntent.amount_details.tip.amount` from `nullable(integer)` to `integer`
* Change `PaymentIntent.amount_details.tip.amount` to be optional
* Add support for `payment_method_data` on `SetupIntentConfirmParams`, `SetupIntentCreateParams`, and `SetupIntentUpdateParams`
