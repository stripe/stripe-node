---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/2001
is_stripe_api_change: true
released_in_version: 14.15.0
---

* Add support for `swish` payment method throughout the API
* Add support for `relationship` on `AccountCreateParams.individual`, `AccountUpdateParams.individual`, and `TokenCreateParams.account.individual`
* Add support for `jurisdiction_level` on `TaxRate`
* Change type of `Terminal.Reader.status` from `string` to `enum('offline'|'online')`
