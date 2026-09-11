---
title: Multiple API changes
pr_link: https://github.com/stripe/stripe-node/pull/1088
is_stripe_api_change: true
released_in_version: 8.128.0
---

* Add newlines for consistency.
* Prefix deleted references with `Stripe.` for consistency.
* Add support for `bank` on `PaymentMethod[eps]`.
* Add support for `tos_shown_and_accepted` to `payment_method_options[p24]` on `PaymentMethod`.
