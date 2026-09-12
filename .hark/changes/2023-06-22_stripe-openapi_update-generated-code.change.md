---
title: Update generated code for beta
pr_url: https://github.com/stripe/stripe-node/pull/1821
is_stripe_api_change: true
released_in_version: 12.11.0-beta.1
---

* Add support for new resource `CustomerSession`
* Add support for `create` method on resource `CustomerSession`
* Change type of `Tax.Registration.country_options.us.type` and `TaxRegistrationCreateParams.country_options.us.type` from `literal('state_sales_tax')` to `enum('local_lease_tax'|'state_sales_tax')`
