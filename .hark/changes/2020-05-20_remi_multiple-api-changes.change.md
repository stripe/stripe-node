---
title: Multiple API changes
pr_link: https://github.com/stripe/stripe-node/pull/897
is_stripe_api_change: true
released_in_version: 8.54.0
---

* Add `anticipation_repayment` as a `type` on `BalanceTransaction`
* Add `interac_present` as a `type` on `PaymentMethod`
* Add `payment_method_details[interac_present]` on `Charge`
* Add `transfer_data` on `SubscriptionSchedule`
