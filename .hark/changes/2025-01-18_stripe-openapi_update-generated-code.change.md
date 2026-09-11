---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/2247
is_stripe_api_change: true
released_in_version: 17.6.0-beta.2
---

* Add support for `pay_by_bank_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
* Add support for `directorship_declaration` on `AccountCreateParams.company`, `AccountUpdateParams.company`, and `TokenCreateParams.account.company`
* Add support for `proof_of_ultimate_beneficial_ownership` on `AccountCreateParams.documents` and `AccountUpdateParams.documents`
* Add support for `tax_threshold_monitoring` on `AccountSessionCreateParams.components`
* Add support for `financial_account_transactions`, `financial_account`, `issuing_card`, and `issuing_cards_list` on `AccountSession.components`
* Change `Billing.CreditBalanceTransaction.credit.credits_application_invoice_voided` to be required
* Add support for new value `always_invoice` on enums `BillingPortal.Configuration.features.subscription_cancel.proration_behavior`, `BillingPortal.ConfigurationCreateParams.features.subscription_cancel.proration_behavior`, and `BillingPortal.ConfigurationUpdateParams.features.subscription_cancel.proration_behavior`
* Add support for `pay_by_bank` on `Charge.payment_method_details`, `Checkout.SessionCreateParams.payment_method_options`, `ConfirmationToken.payment_method_preview`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, `PaymentMethodConfiguration`, `PaymentMethodCreateParams`, `PaymentMethodUpdateParams`, `PaymentMethod`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
* Add support for new value `pay_by_bank` on enum `Checkout.SessionCreateParams.payment_method_types[]`
* Add support for new value `SD` on enums `Checkout.Session.shipping_address_collection.allowed_countries[]`, `Checkout.SessionCreateParams.shipping_address_collection.allowed_countries[]`, `PaymentLink.shipping_address_collection.allowed_countries[]`, `PaymentLinkCreateParams.shipping_address_collection.allowed_countries[]`, and `PaymentLinkUpdateParams.shipping_address_collection.allowed_countries[]`
* Add support for `discounts` on `Checkout.Session`
* Add support for new value `pay_by_bank` on enums `ConfirmationTokenCreateParams.testHelpers.payment_method_data.type`, `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
* Add support for new value `pay_by_bank` on enums `ConfirmationToken.payment_method_preview.type` and `PaymentMethod.type`
* Add support for new value `pay_by_bank` on enums `CustomerListPaymentMethodsParams.type`, `PaymentMethodCreateParams.type`, and `PaymentMethodListParams.type`
* Add support for new value `pay_by_bank` on enums `PaymentLink.payment_method_types[]`, `PaymentLinkCreateParams.payment_method_types[]`, and `PaymentLinkUpdateParams.payment_method_types[]`
* Add support for `jpy` on `Terminal.Configuration.tipping`, `Terminal.ConfigurationCreateParams.tipping`, and `Terminal.ConfigurationUpdateParams.tipping`
* Add support for new value `2025-01-27.acacia` on enum `WebhookEndpointCreateParams.api_version`
