---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/1759
is_stripe_api_change: true
released_in_version: 12.2.0
---

* Change `Checkout.Session.currency_conversion` to be required
* Change `Identity.VerificationReport.options` and `Identity.VerificationReport.type` to be optional
* Change type of `Identity.VerificationSession.options` from `VerificationSessionOptions` to `VerificationSessionOptions | null`
* Change type of `Identity.VerificationSession.type` from `enum('document'|'id_number')` to `enum('document'|'id_number') | null`
