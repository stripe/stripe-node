---
title: Multiple API changes
pr_link: https://github.com/stripe/stripe-node/pull/899
is_stripe_api_change: true
released_in_version: 8.55.0
---

* Add support for `ae_trn`, `cl_tin` and `sa_vat` as `type` on `TaxId`
* Add `result` and `result_reason` inside `payment_method_details[card][three_d_secure]` on `Charge`
