---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/1884
is_stripe_api_change: true
released_in_version: 13.4.0
---

* Add support for new resource `AccountSession`
* Add support for `create` method on resource `AccountSession`
* Add support for new values `obligation_inbound`, `obligation_outbound`, `obligation_payout_failure`, `obligation_payout`, `obligation_reversal_inbound`, and `obligation_reversal_outbound` on enum `BalanceTransaction.type`
* Change type of `Event.type` from `string` to `enum`
* Add support for `application` on `PaymentLink`
* Add support for new value `obligation` on enum `Reporting.ReportRunCreateParams.parameters.reporting_category`
