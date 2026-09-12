---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1516
is_stripe_api_change: true
released_in_version: 10.3.0
---

* Add support for new resource `CustomerCashBalanceTransaction`
* Remove support for value `paypal` from enums `Order.payment.settings.payment_method_types[]`, `OrderCreateParams.payment.settings.payment_method_types[]`, and `OrderUpdateParams.payment.settings.payment_method_types[]`
* Add support for `currency` on `PaymentLink`
* Add support for `network` on `SetupIntentConfirmParams.payment_method_options.card`, `SetupIntentCreateParams.payment_method_options.card`, `SetupIntentUpdateParams.payment_method_options.card`, `Subscription.payment_settings.payment_method_options.card`, `SubscriptionCreateParams.payment_settings.payment_method_options.card`, and `SubscriptionUpdateParams.payment_settings.payment_method_options.card`
* Change `Subscription.currency` to be required
* Change type of `Topup.source` from `Source` to `Source | null`
* Add support for new value `customer_cash_balance_transaction.created` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
