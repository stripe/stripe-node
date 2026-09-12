---
title: Change `StripeSignatureVerificationError` to have `header` and `payload` fields instead of `detail`. To access these properties, use `err.header` and `err.payload` instead of `err.detail.header` and `err.detail.payload`.
pr_url: https://github.com/stripe/stripe-node/pull/1574
is_breaking: true
section: ⚠️ Changed
released_in_version: 11.0.0
---
