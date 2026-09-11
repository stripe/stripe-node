---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/2250
is_stripe_api_change: true
released_in_version: 17.6.0
---

* Add support for `close` method on resource `Treasury.FinancialAccount`
* Add support for `pay_by_bank_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
* Add support for `directorship_declaration` and `ownership_exemption_reason` on `Account.company`, `AccountCreateParams.company`, `AccountUpdateParams.company`, and `TokenCreateParams.account.company`
* Add support for `proof_of_ultimate_beneficial_ownership` on `AccountCreateParams.documents` and `AccountUpdateParams.documents`
* Add support for `financial_account` on `AccountSession.components`, `AccountSessionCreateParams.components`, and `Treasury.OutboundTransfer.destination_payment_method_details`
* Add support for `financial_account_transactions`, `issuing_card`, and `issuing_cards_list` on `AccountSession.components` and `AccountSessionCreateParams.components`
* Add support for `advice_code` on `Charge.outcome`, `Invoice.last_finalization_error`, `PaymentIntent.last_payment_error`, `SetupAttempt.setup_error`, `SetupIntent.last_setup_error`, and `StripeError`
* Change `Billing.CreditBalanceTransaction.credit.credits_application_invoice_voided`, `Card.regulated_status`, `Charge.payment_method_details.card.network_transaction_id`, `Charge.payment_method_details.card.regulated_status`, `ConfirmationToken.payment_method_preview.card.regulated_status`, `CreditNote.pretax_credit_amounts`, `Invoice.total_pretax_credit_amounts`, `Issuing.Authorization.merchant_data.tax_id`, `Issuing.Transaction.merchant_data.tax_id`, and `PaymentMethod.card.regulated_status` to be required
* Add support for `pay_by_bank` on `Charge.payment_method_details`, `Checkout.SessionCreateParams.payment_method_options`, `ConfirmationToken.payment_method_preview`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, `PaymentMethodConfiguration`, `PaymentMethodCreateParams`, `PaymentMethodUpdateParams`, `PaymentMethod`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
* Add support for `country` on `Charge.payment_method_details.paypal`, `ConfirmationToken.payment_method_preview.paypal`, and `PaymentMethod.paypal`
* Add support for new value `pay_by_bank` on enums `Checkout.SessionCreateParams.payment_method_types[]`, `CustomerListPaymentMethodsParams.type`, `PaymentMethodCreateParams.type`, and `PaymentMethodListParams.type`
* Add support for new value `SD` on enums `Checkout.Session.shipping_address_collection.allowed_countries[]`, `Checkout.SessionCreateParams.shipping_address_collection.allowed_countries[]`, `PaymentLink.shipping_address_collection.allowed_countries[]`, `PaymentLinkCreateParams.shipping_address_collection.allowed_countries[]`, and `PaymentLinkUpdateParams.shipping_address_collection.allowed_countries[]`
* Add support for `discounts` on `Checkout.Session`
* Add support for new value `pay_by_bank` on enums `ConfirmationTokenCreateParams.testHelpers.payment_method_data.type`, `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
* Add support for new value `pay_by_bank` on enums `ConfirmationToken.payment_method_preview.type` and `PaymentMethod.type`
* Add support for new value `pay_by_bank` on enums `PaymentLink.payment_method_types[]`, `PaymentLinkCreateParams.payment_method_types[]`, and `PaymentLinkUpdateParams.payment_method_types[]`
* Add support for `phone_number_collection` on `PaymentLinkUpdateParams`
* Add support for `jpy` on `Terminal.Configuration.tipping`, `Terminal.ConfigurationCreateParams.tipping`, and `Terminal.ConfigurationUpdateParams.tipping`
* Add support for `nickname` on `Treasury.FinancialAccountCreateParams`, `Treasury.FinancialAccountUpdateParams`, and `Treasury.FinancialAccount`
* Add support for `forwarding_settings` on `Treasury.FinancialAccountUpdateParams`
* Add support for `is_default` on `Treasury.FinancialAccount`
* Add support for `destination_payment_method_data` on `Treasury.OutboundTransferCreateParams`
* Change type of `Treasury.OutboundTransfer.destination_payment_method_details.type` from `literal('us_bank_account')` to `enum('financial_account'|'us_bank_account')`
* Add support for new value `outbound_transfer` on enums `Treasury.ReceivedCredit.linked_flows.source_flow_details.type` and `Treasury.ReceivedCreditListParams.linked_flows.source_flow_type`
* Add support for `outbound_transfer` on `Treasury.ReceivedCredit.linked_flows.source_flow_details`
* Add support for new value `2025-01-27.acacia` on enum `WebhookEndpointCreateParams.api_version`
