---
title: Multiple API changes
pr_link: https://github.com/stripe/stripe-node/pull/883
is_stripe_api_change: true
released_in_version: 8.49.0
---

* Add `issuing` on `Balance`
* Add `br_cnpj` and `br_cpf` as `type` on `TaxId`
* Add `price` support in phases on `SubscriptionSchedule`
* Make `quantity` nullable on `SubscriptionSchedule` for upcoming API version change
