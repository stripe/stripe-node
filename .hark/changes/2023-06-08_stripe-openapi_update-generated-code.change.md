---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/1809
is_stripe_api_change: true
released_in_version: 12.9.0
---

* Change `Charge.payment_method_details.cashapp.buyer_id`, `Charge.payment_method_details.cashapp.cashtag`, `PaymentMethod.cashapp.buyer_id`, and `PaymentMethod.cashapp.cashtag` to be required
* Add support for `taxability_reason` on `Tax.Calculation.tax_breakdown[]`
