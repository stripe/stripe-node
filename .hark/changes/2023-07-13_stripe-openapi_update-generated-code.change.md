---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/1838
is_stripe_api_change: true
released_in_version: 12.13.0
---

* Add support for new resource `Tax.Settings`
* Add support for `retrieve` and `update` methods on resource `Settings`
* Add support for new value `invalid_tax_location` on enums `Invoice.last_finalization_error.code`, `PaymentIntent.last_payment_error.code`, `SetupAttempt.setup_error.code`, `SetupIntent.last_setup_error.code`, and `StripeError.code`
* Add support for `order_id` on `Charge.payment_method_details.afterpay_clearpay`
* Add support for `allow_redirects` on `PaymentIntent.automatic_payment_methods`, `PaymentIntentCreateParams.automatic_payment_methods`, `SetupIntent.automatic_payment_methods`, and `SetupIntentCreateParams.automatic_payment_methods`
* Add support for new values `amusement_tax` and `communications_tax` on enums `Tax.Calculation.shipping_cost.tax_breakdown[].tax_rate_details.tax_type`, `Tax.Calculation.tax_breakdown[].tax_rate_details.tax_type`, `Tax.CalculationLineItem.tax_breakdown[].tax_rate_details.tax_type`, and `Tax.Transaction.shipping_cost.tax_breakdown[].tax_rate_details.tax_type`
* Add support for `product` on `Tax.TransactionLineItem`
* Add support for new value `tax.settings.updated` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
