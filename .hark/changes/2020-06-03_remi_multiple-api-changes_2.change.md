---
title: Multiple API changes
pr_url: https://github.com/stripe/stripe-node/pull/908
is_stripe_api_change: true
released_in_version: 8.57.0
---

* Add support for bg, cs, el, et, hu, lt, lv, mt, ro, ru, sk, sl and tr as new locale on Checkout `Session`
* Add `settings[sepa_debit_payments][creditor_id]` on `Account`
* Add support for Bancontact, EPS, Giropay and P24 on `PaymentMethod`, `PaymentIntent` and `SetupIntent`
* Add support for `order_item[parent]` on `Source` for Klarna
