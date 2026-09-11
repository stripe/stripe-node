---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1271
is_stripe_api_change: true
released_in_version: 8.182.0
---

* Change `Charge.payment_method_details.klarna.payment_method_category`, `Charge.payment_method_details.klarna.preferred_locale`, `Checkout.Session.customer_details.phone`, and `PaymentMethod.klarna.dob` to be required
* Add support for new value `klarna` on enum `Checkout.SessionCreateParams.payment_method_types[]`
