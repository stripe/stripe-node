---
title: API Updates for beta branch
pr_url: https://github.com/stripe/stripe-node/pull/1686
is_stripe_api_change: true
released_in_version: 11.12.0-beta.1
---

* Updated stable APIs to the latest version
* Change type of `Quote.status_details.canceled` from `QuotesResourceStatusDetailsCanceledStatusDetails | null` to `QuotesResourceStatusDetailsCanceledStatusDetails`
* Change type of `Quote.status_details.stale` from `QuotesResourceStatusDetailsStaleStatusDetails | null` to `QuotesResourceStatusDetailsStaleStatusDetails`
* Change `Quote.status_details.canceled` and `Quote.status_details.stale` to be optional
* Remove support for `reference` on `Tax.Calculation` and `TaxCalculationCreateParams`
* Add support for `reference` on `TaxTransactionCreateParams`
