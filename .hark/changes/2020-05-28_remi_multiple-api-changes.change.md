---
title: Multiple API changes
pr_link: https://github.com/stripe/stripe-node/pull/904
is_stripe_api_change: true
released_in_version: 8.56.0
---

* Add `payment_method_details[card][three_d_secure][authentication_flow]` on `Charge`
* Add `line_items[][price_data][product_data]` on Checkout `Session` creation
