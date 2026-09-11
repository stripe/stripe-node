---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/1785
is_stripe_api_change: true
released_in_version: 12.5.0
---

* Add support for `paypal` on `Charge.payment_method_details`, `Checkout.SessionCreateParams.payment_method_options`, `Mandate.payment_method_details`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodCreateParams`, `PaymentMethod`, `SetupAttempt.payment_method_details`, `SetupIntent.payment_method_options`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentConfirmParams.payment_method_options`, `SetupIntentCreateParams.payment_method_data`, `SetupIntentCreateParams.payment_method_options`, `SetupIntentUpdateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_options`
* Add support for `network_token` on `Charge.payment_method_details.card`
* Add support for new value `paypal` on enums `Checkout.SessionCreateParams.payment_method_types[]` and `PaymentMethodCreateParams.type`
* Add support for `taxability_reason` and `taxable_amount` on `Checkout.Session.shipping_cost.taxes[]`, `Checkout.Session.total_details.breakdown.taxes[]`, `CreditNote.shipping_cost.taxes[]`, `CreditNote.tax_amounts[]`, `Invoice.shipping_cost.taxes[]`, `Invoice.total_tax_amounts[]`, `LineItem.taxes[]`, `Quote.computed.recurring.total_details.breakdown.taxes[]`, `Quote.computed.upfront.total_details.breakdown.taxes[]`, and `Quote.total_details.breakdown.taxes[]`
* Add support for new value `paypal` on enums `CustomerListPaymentMethodsParams.type` and `PaymentMethodListParams.type`
* Add support for new value `paypal` on enums `Invoice.payment_settings.payment_method_types[]`, `InvoiceCreateParams.payment_settings.payment_method_types[]`, `InvoiceUpdateParams.payment_settings.payment_method_types[]`, `Subscription.payment_settings.payment_method_types[]`, `SubscriptionCreateParams.payment_settings.payment_method_types[]`, and `SubscriptionUpdateParams.payment_settings.payment_method_types[]`
* Add support for new value `paypal` on enums `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
* Add support for new value `eftpos_au` on enums `PaymentIntent.payment_method_options.card.network`, `PaymentIntentConfirmParams.payment_method_options.card.network`, `PaymentIntentCreateParams.payment_method_options.card.network`, `PaymentIntentUpdateParams.payment_method_options.card.network`, `SetupIntent.payment_method_options.card.network`, `SetupIntentConfirmParams.payment_method_options.card.network`, `SetupIntentCreateParams.payment_method_options.card.network`, `SetupIntentUpdateParams.payment_method_options.card.network`, `Subscription.payment_settings.payment_method_options.card.network`, `SubscriptionCreateParams.payment_settings.payment_method_options.card.network`, and `SubscriptionUpdateParams.payment_settings.payment_method_options.card.network`
* Add support for new value `paypal` on enums `PaymentLink.payment_method_types[]`, `PaymentLinkCreateParams.payment_method_types[]`, and `PaymentLinkUpdateParams.payment_method_types[]`
* Add support for `brand`, `cardholder_name`, `country`, `exp_month`, `exp_year`, `fingerprint`, `funding`, `last4`, `networks`, and `read_method` on `PaymentMethod.card_present` and `PaymentMethod.interac_present`
* Add support for `preferred_locales` on `PaymentMethod.interac_present`
* Add support for new value `paypal` on enum `PaymentMethod.type`
* Add support for `effective_percentage` on `TaxRate`
* Add support for `gb_bank_transfer` and `jp_bank_transfer` on `CustomerCashBalanceTransaction.Funded.BankTransfer`
