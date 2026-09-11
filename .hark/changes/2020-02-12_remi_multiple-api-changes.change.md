---
title: Multiple API changes reflect in Typescript definitions
pr_link: https://github.com/stripe/stripe-node/pull/803
released_in_version: 8.16.0
---

- Add `fpx` as a valid `source_type` on `Balance`, `Payout` and `Transfer`
- Add `fpx` support on Checkout `Session`
- Fields inside `verification_data` on Issuing `Authorization` are now enums
- Support updating `payment_method_options` on `PaymentIntent` and `SetupIntent`
