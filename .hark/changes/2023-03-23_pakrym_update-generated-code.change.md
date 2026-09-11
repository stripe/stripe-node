---
title: Update generated code for beta (new)
pr_link: https://github.com/stripe/stripe-node/pull/1724
is_stripe_api_change: true
released_in_version: 11.17.0-beta.1
---

* Add support for new resources `Tax.CalculationLineItem` and `Tax.TransactionLineItem`
* Add support for `collect_inputs` method on resource `Terminal.Reader`
* Add support for `financing_offer` on `Capital.FinancingSummary`
* Add support for new value `link` on enum `CheckoutSessionCreateParams.payment_method_types[]`
* Add support for `fx_rate` on `Checkout.Session.currency_conversion`
* Add support for new value `link` on enums `PaymentLink.payment_method_types[]`, `PaymentLinkCreateParams.payment_method_types[]`, and `PaymentLinkUpdateParams.payment_method_types[]`
* Add support for `automatic_payment_methods` on `SetupIntentCreateParams` and `SetupIntent`
* Remove support for `preview` on `TaxCalculationCreateParams`
* Change type of `Tax.Calculation.line_items[]` from `LineItem` to `Tax.CalculationLineItem`
* Change type of `Tax.Transaction.line_items[]` from `LineItem` to `Tax.TransactionLineItem`
* Add support for `collect_inputs` on `Terminal.Reader.action`
* Add support for new value `collect_inputs` on enum `Terminal.Reader.action.type`
