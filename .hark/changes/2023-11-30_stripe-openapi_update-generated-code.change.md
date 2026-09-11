---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/1965
is_stripe_api_change: true
released_in_version: 14.7.0
---

* Add support for new resources `Climate.Order`, `Climate.Product`, and `Climate.Supplier`
* Add support for `cancel`, `create`, `list`, `retrieve`, and `update` methods on resource `Order`
* Add support for `list` and `retrieve` methods on resources `Product` and `Supplier`
* Add support for new value `financial_connections_account_inactive` on enums `Invoice.last_finalization_error.code`, `PaymentIntent.last_payment_error.code`, `SetupAttempt.setup_error.code`, `SetupIntent.last_setup_error.code`, and `StripeError.code`
* Add support for new values `climate_order_purchase` and `climate_order_refund` on enum `BalanceTransaction.type`
* Add support for `created` on `Checkout.SessionListParams`
* Add support for `validate_location` on `CustomerCreateParams.tax` and `CustomerUpdateParams.tax`
* Add support for new values `climate.order.canceled`, `climate.order.created`, `climate.order.delayed`, `climate.order.delivered`, `climate.order.product_substituted`, `climate.product.created`, and `climate.product.pricing_updated` on enum `Event.type`
* Add support for new value `challenge` on enums `PaymentIntent.payment_method_options.card.request_three_d_secure` and `SetupIntent.payment_method_options.card.request_three_d_secure`
* Add support for new values `climate_order_purchase` and `climate_order_refund` on enum `Reporting.ReportRunCreateParams.parameters.reporting_category`
* Add support for new values `climate.order.canceled`, `climate.order.created`, `climate.order.delayed`, `climate.order.delivered`, `climate.order.product_substituted`, `climate.product.created`, and `climate.product.pricing_updated` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
