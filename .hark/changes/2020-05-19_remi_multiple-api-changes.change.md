---
title: Multiple API changes
pr_link: https://github.com/stripe/stripe-node/pull/895
is_stripe_api_change: true
released_in_version: 8.53.0
---

* Add support for `issuing_dispute` as a `type` on `BalanceTransaction`
* Add `balance_transactions` as an array of `BalanceTransaction` on Issuing `Dispute`
* Add `fingerprint` and `transaction_id` in `payment_method_details[alipay]` on `Charge`
* Add `transfer_data[amount]` on `Invoice`
* Add `transfer_data[amount_percent]` on `Subscription`
* Add `price.created`, `price.deleted` and `price.updated` on `Event`
