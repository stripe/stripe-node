---
title: Update generated code for beta
pr_url: https://github.com/stripe/stripe-node/pull/2219
is_stripe_api_change: true
released_in_version: 17.4.0-beta.2
---

* Add support for new resources `Issuing.FraudLiabilityDebit`, `PaymentAttemptRecord`, and `PaymentRecord`
* Add support for `list` and `retrieve` methods on resources `FraudLiabilityDebit` and `PaymentAttemptRecord`
* Add support for `report_payment_attempt_canceled`, `report_payment_attempt_failed`, `report_payment_attempt_guaranteed`, `report_payment_attempt`, `report_payment`, and `retrieve` methods on resource `PaymentRecord`
* Change type of `Account.future_requirements.disabled_reason` and `Account.requirements.disabled_reason` from `string` to `enum`
* Remove support for `money_movement` on `AccountSessionCreateParams.components.financial_account.features`
* Add support for `card_management`, `card_spend_dispute_management`, `cardholder_management`, and `spend_control_management` on `AccountSessionCreateParams.components.issuing_card.features`
* Add support for `disable_stripe_user_authentication` on `AccountSessionCreateParams.components.issuing_cards_list.features`
* Change `AccountSession.components.account_management.features.disable_stripe_user_authentication`, `AccountSession.components.account_onboarding.features.disable_stripe_user_authentication`, `AccountSession.components.balances.features.disable_stripe_user_authentication`, `AccountSession.components.notification_banner.features.disable_stripe_user_authentication`, and `AccountSession.components.payouts.features.disable_stripe_user_authentication` to be required
* Add support for `adaptive_pricing` on `Checkout.SessionCreateParams` and `Checkout.Session`
* Add support for `mandate_options` on `Checkout.Session.payment_method_options.bacs_debit`, `Checkout.Session.payment_method_options.sepa_debit`, `Checkout.SessionCreateParams.payment_method_options.bacs_debit`, and `Checkout.SessionCreateParams.payment_method_options.sepa_debit`
* Add support for `request_decremental_authorization`, `request_extended_authorization`, `request_incremental_authorization`, `request_multicapture`, and `request_overcapture` on `Checkout.Session.payment_method_options.card` and `Checkout.SessionCreateParams.payment_method_options.card`
* Add support for `capture_method` on `Checkout.SessionCreateParams.payment_method_options.kakao_pay`, `Checkout.SessionCreateParams.payment_method_options.kr_card`, `Checkout.SessionCreateParams.payment_method_options.naver_pay`, `Checkout.SessionCreateParams.payment_method_options.payco`, and `Checkout.SessionCreateParams.payment_method_options.samsung_pay`
* Add support for new value `li_vat` on enums `Checkout.Session.collected_information.tax_ids[].type`, `Checkout.Session.customer_details.tax_ids[].type`, `Invoice.customer_tax_ids[].type`, `Order.tax_details.tax_ids[].type`, `Tax.Calculation.customer_details.tax_ids[].type`, `Tax.Transaction.customer_details.tax_ids[].type`, and `TaxId.type`
* Add support for new value `li_vat` on enums `CustomerCreateParams.tax_id_data[].type`, `InvoiceCreatePreviewParams.customer_details.tax_ids[].type`, `InvoiceUpcomingLinesParams.customer_details.tax_ids[].type`, `InvoiceUpcomingParams.customer_details.tax_ids[].type`, `OrderCreateParams.tax_details.tax_ids[].type`, `OrderUpdateParams.tax_details.tax_ids[].type`, `Tax.CalculationCreateParams.customer_details.tax_ids[].type`, and `TaxIdCreateParams.type`
* Add support for new values `invoice.payment_attempt_required` and `issuing_fraud_liability_debit.created` on enum `Event.type`
* Add support for `account_holder_address`, `account_holder_name`, `account_type`, and `bank_address` on `FundingInstructions.bank_transfer.financial_addresses[].aba`, `FundingInstructions.bank_transfer.financial_addresses[].swift`, `PaymentIntent.next_action.display_bank_transfer_instructions.financial_addresses[].aba`, and `PaymentIntent.next_action.display_bank_transfer_instructions.financial_addresses[].swift`
* Add support for new value `custom` on enums `Invoice.payment_settings.payment_method_types[]`, `InvoiceCreateParams.payment_settings.payment_method_types[]`, `InvoiceUpdateParams.payment_settings.payment_method_types[]`, `Subscription.payment_settings.payment_method_types[]`, `SubscriptionCreateParams.payment_settings.payment_method_types[]`, and `SubscriptionUpdateParams.payment_settings.payment_method_types[]`
* Add support for new value `service_tax` on enums `InvoiceAddLinesParams.lines[].tax_amounts[].tax_rate_data.tax_type`, `InvoiceUpdateLinesParams.lines[].tax_amounts[].tax_rate_data.tax_type`, `Tax.Calculation.shipping_cost.tax_breakdown[].tax_rate_details.tax_type`, `Tax.Calculation.tax_breakdown[].tax_rate_details.tax_type`, `Tax.CalculationLineItem.tax_breakdown[].tax_rate_details.tax_type`, `Tax.Transaction.shipping_cost.tax_breakdown[].tax_rate_details.tax_type`, `TaxRate.tax_type`, `TaxRateCreateParams.tax_type`, and `TaxRateUpdateParams.tax_type`
* Add support for `payment_record_data` and `payment_record` on `InvoiceAttachPaymentParams`
* Remove support for `out_of_band_payment` on `InvoiceAttachPaymentParams`
* Add support for `amount_overpaid` on `Invoice`
* Add support for `merchant_amount` and `merchant_currency` on `Issuing.AuthorizationCreateParams.testHelpers`
* Change `Issuing.AuthorizationCreateParams.testHelpers.amount` to be optional
* Add support for new value `link` on enums `PaymentIntent.payment_method_options.card.network`, `PaymentIntentConfirmParams.payment_method_options.card.network`, `PaymentIntentCreateParams.payment_method_options.card.network`, `PaymentIntentUpdateParams.payment_method_options.card.network`, `SetupIntent.payment_method_options.card.network`, `SetupIntentConfirmParams.payment_method_options.card.network`, `SetupIntentCreateParams.payment_method_options.card.network`, `SetupIntentUpdateParams.payment_method_options.card.network`, `Subscription.payment_settings.payment_method_options.card.network`, `SubscriptionCreateParams.payment_settings.payment_method_options.card.network`, and `SubscriptionUpdateParams.payment_settings.payment_method_options.card.network`
* Add support for `submit_type` on `PaymentLinkUpdateParams`
* Change type of `Treasury.InboundTransfer.origin_payment_method` from `string` to `string | null`
* Add support for new values `invoice.payment_attempt_required` and `issuing_fraud_liability_debit.created` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
