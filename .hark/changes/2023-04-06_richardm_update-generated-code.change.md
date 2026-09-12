---
title: Update generated code for beta
pr_url: https://github.com/stripe/stripe-node/pull/1737
is_stripe_api_change: true
released_in_version: 12.1.0-beta.1
---

* Add support for `treasury_transaction` on `CapitalFinancingTransactionListParams`
* Add support for `transaction` on `Capital.FinancingTransaction.details`
* Add support for new value `link` on enums `Charge.payment_method_details.card.wallet.type` and `PaymentMethod.card.wallet.type`
* Change `IssuingCardholderCreateParams.type` to be optional
* Add support for `country` on `PaymentMethod.link`
* Add support for `status_details` on `PaymentMethod.us_bank_account`
