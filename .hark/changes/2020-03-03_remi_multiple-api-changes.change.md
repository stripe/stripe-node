---
title: "Multiple API changes:"
pr_link: https://github.com/stripe/stripe-node/pull/826
is_breaking: true
released_in_version: 8.25.0
---

- ⚠️ Types are now for the API version `2020-03-02`. This is a breaking change for TypeScript users
- Remove `uob_regional` as a value on `bank` for FPX as this is deprecated and was never used
- Add support for `next_invoice_sequence` on `Customer`
- Add support for `proration_behavior` on `SubscriptionItem` delete
