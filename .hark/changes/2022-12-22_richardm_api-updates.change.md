---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1642
is_stripe_api_change: true
released_in_version: 11.5.0
---

* Add support for new value `merchant_default` on enums `CashBalanceUpdateParams.settings.reconciliation_mode`, `CustomerCreateParams.cash_balance.settings.reconciliation_mode`, and `CustomerUpdateParams.cash_balance.settings.reconciliation_mode`
* Add support for `using_merchant_default` on `CashBalance.settings`
* Change `Checkout.SessionCreateParams.cancel_url` to be optional
* Change type of `Checkout.Session.cancel_url` from `string` to `string | null`
