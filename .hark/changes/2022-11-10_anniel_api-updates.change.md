---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1615
is_breaking: true
is_stripe_api_change: true
released_in_version: 11.0.0
---

* ⚠️ Remove support for `tos_shown_and_accepted` on `Checkout.SessionCreateParams.payment_method_options.paynow`. The property was mistakenly released and never worked.
