---
title: Multiple API changes
pr_link: https://github.com/stripe/stripe-node/pull/1053
is_stripe_api_change: true
released_in_version: 8.118.0
---

* Improving Typescript types for nullable parameters and introduced `Stripe.Emptyable` as a type
* Add support for `payment_method_options[card][cvc_token]` on `PaymentIntent`
* Add support for `cvc_update[cvc]` on `Token` creation
