---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/1774
is_stripe_api_change: true
released_in_version: 12.4.0
---

* Add support for `link` on `Checkout.Session.payment_method_options` and `Checkout.SessionCreateParams.payment_method_options`
* Add support for `brand`, `country`, `description`, `exp_month`, `exp_year`, `fingerprint`, `funding`, `iin`, `issuer`, `last4`, `network`, and `wallet` on `SetupAttempt.payment_method_details.card`
