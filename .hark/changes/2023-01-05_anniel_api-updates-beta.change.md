---
title: API Updates for beta branch
pr_url: https://github.com/stripe/stripe-node/pull/1648
is_stripe_api_change: true
released_in_version: 11.7.0-beta.1
---

* Updated stable APIs to the latest version
* Add support for `mark_stale_quote` method on resource `Quote`
* Add support for `duration` and `line_ends_at` on `QuoteCreateParams.subscription_data.bill_on_acceptance.bill_until`, `QuoteCreateParams.subscription_data_overrides[].bill_on_acceptance.bill_until`, `QuoteUpdateParams.subscription_data.bill_on_acceptance.bill_until`, and `QuoteUpdateParams.subscription_data_overrides[].bill_on_acceptance.bill_until`
* Remove support for `line_starts_at` on `QuoteCreateParams.subscription_data.bill_on_acceptance.bill_until`, `QuoteCreateParams.subscription_data_overrides[].bill_on_acceptance.bill_until`, `QuoteUpdateParams.subscription_data.bill_on_acceptance.bill_until`, and `QuoteUpdateParams.subscription_data_overrides[].bill_on_acceptance.bill_until`
* Add support for `metadata` on `Terminal.Reader.action.refund_payment` and `TerminalReaderRefundPaymentParams`
