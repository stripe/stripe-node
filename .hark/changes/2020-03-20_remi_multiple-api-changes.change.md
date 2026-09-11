---
title: "Multiple API changes for Issuing:"
pr_link: https://github.com/stripe/stripe-node/pull/842
released_in_version: 8.33.0
---

- Add `amount`, `currency`, `merchant_amount` and `merchant_currency` on `Authorization`
- Add `amount`, `currency`, `merchant_amount` and `merchant_currency` inside `request_history` on `Authorization`
- Add `pending_request` on `Authorization`
- Add `amount` when approving an `Authorization`
- Add `replaced_by` on `Card`
