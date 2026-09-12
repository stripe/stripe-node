---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/1734
is_stripe_api_change: true
released_in_version: 11.17.0
---

* Remove support for `create` method on resource `Tax.Transaction`
  * This is not a breaking change, as this method was deprecated before the Tax Transactions API was released in favor of the `createFromCalculation` method.
* Add support for `export_license_id` and `export_purpose_code` on `Account.company`, `AccountCreateParams.company`, `AccountUpdateParams.company`, and `TokenCreateParams.account.company`
* Remove support for value `deleted` from enum `Invoice.status`
  * This is not a breaking change, as `deleted` was never returned or accepted as input.
* Add support for `amount_tip` on `Terminal.ReaderPresentPaymentMethodParams.testHelpers`
