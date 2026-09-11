---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1188
is_stripe_api_change: true
released_in_version: 8.161.0
---

* Add support for new resource `Quote`
* Add support for `quote` on `Invoice`
* Add support for new value `quote_accept` on enum `Invoice.billing_reason`
* Changed type of `Charge.payment_method_details.card.three_d_secure.result`, `SetupAttempt.payment_method_details.card.three_d_secure.result`, `Charge.payment_method_details.card.three_d_secure.version`, and `SetupAttempt.payment_method_details.card.three_d_secure.version` to be nullable.
