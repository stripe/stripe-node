---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1179
is_stripe_api_change: true
released_in_version: 8.158.0
---

* Added support for `boleto_payments` on `Account.capabilities`
* Added support for `boleto` and `oxxo` on `Checkout.SessionCreateParams.payment_method_options` and `Checkout.Session.payment_method_options`
* Added support for `boleto` and `oxxo` as members of the `type` enum inside `Checkout.SessionCreateParams.payment_method_types[]`.
