---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/1867
is_stripe_api_change: true
released_in_version: 12.18.0
---

* Add support for new values `incorporated_partnership` and `unincorporated_partnership` on enums `Account.company.structure`, `AccountCreateParams.company.structure`, `AccountUpdateParams.company.structure`, and `TokenCreateParams.account.company.structure`
* Add support for new value `payment_reversal` on enum `BalanceTransaction.type`
* Change `Invoice.subscription_details.metadata` and `Invoice.subscription_details` to be required
