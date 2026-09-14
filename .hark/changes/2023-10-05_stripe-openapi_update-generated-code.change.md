---
title: Update generated code for beta
pr_url: https://github.com/stripe/stripe-node/pull/1917
is_stripe_api_change: true
released_in_version: 13.10.0-beta.1
---

* Add support for `mark_draft` and `mark_stale` methods on resource `Quote`
* Remove support for `draft_quote`, `mark_stale_quote`, and `preview_invoice_lines` methods on resource `Quote`
* Add support for `liability` on `Checkout.Session.automatic_tax` and `Checkout.SessionCreateParams.automatic_tax`
* Add support for `issuer` on `Checkout.Session.invoice_creation.invoice_data` and `Checkout.SessionCreateParams.invoice_creation.invoice_data`
* Add support for `invoice_settings` on `Checkout.SessionCreateParams.subscription_data`
* Add support for `personalization_design` on `Issuing.CardListParams`
* Add support for `allow_backdated_lines` on `QuoteCreateParams`, `QuoteUpdateParams`, and `Quote`
