---
title: Multiple API Changes
pr_url: https://github.com/stripe/stripe-node/pull/1108
is_stripe_api_change: true
released_in_version: 8.131.0
---

* Added support for `dynamic_tax_rates` on `Checkout.SessionCreateParams.line_items`
* Added support for `customer_details` on `Checkout.Session`
* Added support for `type` on `Issuing.TransactionListParams`
* Added support for `country` and `state` on `TaxRateUpdateParams`, `TaxRateCreateParams` and `TaxRate`
