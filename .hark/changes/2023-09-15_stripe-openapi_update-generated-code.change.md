---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/1905
is_stripe_api_change: true
released_in_version: 13.6.0
---

* Add support for new resource `PaymentMethodConfiguration`
* Add support for `create`, `list`, `retrieve`, and `update` methods on resource `PaymentMethodConfiguration`
* Add support for `payment_method_configuration` on `Checkout.SessionCreateParams`, `PaymentIntentCreateParams`, `PaymentIntentUpdateParams`, `SetupIntentCreateParams`, and `SetupIntentUpdateParams`
* Add support for `payment_method_configuration_details` on `Checkout.Session`, `PaymentIntent`, and `SetupIntent`
