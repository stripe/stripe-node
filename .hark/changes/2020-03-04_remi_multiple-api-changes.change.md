---
title: Multiple API changes
pr_url: https://github.com/stripe/stripe-node/pull/829
is_stripe_api_change: true
released_in_version: 8.27.0
---

- Add support for `account` as a parameter on `Token` to create Account tokens
- Add support for `verification_data.expiry_check` on Issuing `Authorization`
- Add support for `incorrect_cvc` and `incorrect_expiry` as a value for `request_history.reason` on Issuing `Authorization`
