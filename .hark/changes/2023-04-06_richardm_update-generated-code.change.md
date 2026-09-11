---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/1738
is_stripe_api_change: true
released_in_version: 11.18.0
---

* Add support for new value `link` on enums `Charge.payment_method_details.card.wallet.type` and `PaymentMethod.card.wallet.type`
* Change `Issuing.CardholderCreateParams.type` to be optional
* Add support for `country` on `PaymentMethod.link`
* Add support for `status_details` on `PaymentMethod.us_bank_account`
