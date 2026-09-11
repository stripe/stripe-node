---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1631
is_stripe_api_change: true
released_in_version: 11.2.0
---

* Add support for `india_international_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
* Add support for `invoice_creation` on `Checkout.Session` and `Checkout.SessionCreateParams`
* Add support for `invoice` on `Checkout.Session`
* Add support for `metadata` on `SubscriptionSchedule.phases[].items[]`, `SubscriptionScheduleCreateParams.phases[].items[]`, and `SubscriptionScheduleUpdateParams.phases[].items[]`
