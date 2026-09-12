---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1462
is_stripe_api_change: true
released_in_version: 9.11.0
---

* Add support for `deliver_card`, `fail_card`, `return_card`, and `ship_card` test helper methods on resource `Issuing.Card`
* Change type of `PaymentLink.payment_method_types[]`, `PaymentLinkCreateParams.payment_method_types[]`, and `PaymentLinkUpdateParams.payment_method_types[]` from `literal('card')` to `enum`
* Add support for `hosted_regulatory_receipt_url` on `Treasury.ReceivedCredit` and `Treasury.ReceivedDebit`
