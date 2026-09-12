---
title: Update generated code for private-preview
pr_url: https://github.com/stripe/stripe-node/pull/2463
is_stripe_api_change: true
released_in_version: 19.2.0-alpha.3
---

* Add support for new resources `DelegatedCheckout.RequestedSession` and `Identity.BlocklistEntry`
* Add support for `confirm`, `create`, `expire`, `retrieve`, and `update` methods on resource `DelegatedCheckout.RequestedSession`
* Add support for `create`, `disable`, `list`, and `retrieve` methods on resource `Identity.BlocklistEntry`
* Add support for `blocked_by_entry` on `Identity.VerificationReport.document`, `Identity.VerificationReport.selfie`, and `Identity.VerificationReportListParams`
