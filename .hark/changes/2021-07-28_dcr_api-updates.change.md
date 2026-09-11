---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1203
is_stripe_api_change: true
released_in_version: 8.166.0
---

* Bugfix: add missing autopagination methods to `Quote.listLineItems` and `Quote.listComputedUpfrontLineItems`
* Add support for `account_type` on `BankAccount`, `ExternalAccountUpdateParams`, and `TokenCreateParams.bank_account`
* Add support for `category_code` on `Issuing.Authorization.merchant_data` and `Issuing.Transaction.merchant_data`
* Add support for new value `redacted` on enum `Review.closed_reason`
* Remove duplicate type definition for `Account.retrieve`.
* Fix some `attributes` fields mistakenly defined as `Stripe.Metadata`
