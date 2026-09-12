---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1354
is_stripe_api_change: true
released_in_version: 8.204.0
---

* Add support for `setup_future_usage` on `PaymentIntentCreateParams.payment_method_options.*`
* Add support for new values `bbpos_wisepad3` and `stripe_m2` on enums `Terminal.ReaderListParams.device_type` and `Terminal.Reader.device_type`
* Add support for `object` on `ExternalAccountListParams` (fixes #1351)
