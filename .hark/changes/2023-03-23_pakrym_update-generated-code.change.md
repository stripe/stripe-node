---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/1730
is_stripe_api_change: true
released_in_version: 11.16.0
---

* Add support for new resources `Tax.CalculationLineItem`, `Tax.Calculation`, `Tax.TransactionLineItem`, and `Tax.Transaction`
* Add support for `create` and `list_line_items` methods on resource `Calculation`
* Add support for `create_from_calculation`, `create_reversal`, `create`, `list_line_items`, and `retrieve` methods on resource `Transaction`
* Add support for new value `link` on enum `Checkout.SessionCreateParams.payment_method_types[]`
* Add support for `currency_conversion` on `Checkout.Session`
* Add support for new value `link` on enums `PaymentLink.payment_method_types[]`, `PaymentLinkCreateParams.payment_method_types[]`, and `PaymentLinkUpdateParams.payment_method_types[]`
* Add support for `automatic_payment_methods` on `SetupIntentCreateParams` and `SetupIntent`
