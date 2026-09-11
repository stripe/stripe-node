---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/2222
is_stripe_api_change: true
released_in_version: 17.4.0
---

* Add support for `respond` test helper method on resource `Issuing.Authorization`
* Add support for `authorizer` on `AccountPersonsParams.relationship` and `TokenCreateParams.person.relationship`
* Change type of `Account.future_requirements.disabled_reason` and `Account.requirements.disabled_reason` from `string` to `enum`
* Change `AccountSession.components.account_management.features.disable_stripe_user_authentication`, `AccountSession.components.account_onboarding.features.disable_stripe_user_authentication`, `AccountSession.components.balances.features.disable_stripe_user_authentication`, `AccountSession.components.notification_banner.features.disable_stripe_user_authentication`, and `AccountSession.components.payouts.features.disable_stripe_user_authentication` to be required
* Add support for `adaptive_pricing` on `Checkout.SessionCreateParams` and `Checkout.Session`
* Add support for `mandate_options` on `Checkout.Session.payment_method_options.bacs_debit`, `Checkout.Session.payment_method_options.sepa_debit`, `Checkout.SessionCreateParams.payment_method_options.bacs_debit`, and `Checkout.SessionCreateParams.payment_method_options.sepa_debit`
* Add support for `request_extended_authorization`, `request_incremental_authorization`, `request_multicapture`, and `request_overcapture` on `Checkout.Session.payment_method_options.card` and `Checkout.SessionCreateParams.payment_method_options.card`
* Add support for `capture_method` on `Checkout.SessionCreateParams.payment_method_options.kakao_pay`, `Checkout.SessionCreateParams.payment_method_options.kr_card`, `Checkout.SessionCreateParams.payment_method_options.naver_pay`, `Checkout.SessionCreateParams.payment_method_options.payco`, and `Checkout.SessionCreateParams.payment_method_options.samsung_pay`
* Add support for new value `subscribe` on enums `Checkout.Session.submit_type`, `Checkout.SessionCreateParams.submit_type`, `PaymentLink.submit_type`, and `PaymentLinkCreateParams.submit_type`
* Add support for new value `li_vat` on enums `Checkout.Session.customer_details.tax_ids[].type`, `Invoice.customer_tax_ids[].type`, `Tax.Calculation.customer_details.tax_ids[].type`, `Tax.Transaction.customer_details.tax_ids[].type`, and `TaxId.type`
* Add support for new value `li_vat` on enums `CustomerCreateParams.tax_id_data[].type`, `InvoiceCreatePreviewParams.customer_details.tax_ids[].type`, `InvoiceUpcomingLinesParams.customer_details.tax_ids[].type`, `InvoiceUpcomingParams.customer_details.tax_ids[].type`, `Tax.CalculationCreateParams.customer_details.tax_ids[].type`, and `TaxIdCreateParams.type`
* Add support for new value `financial_account_statement` on enums `File.purpose` and `FileListParams.purpose`
* Add support for `account_holder_address`, `account_holder_name`, `account_type`, and `bank_address` on `FundingInstructions.bank_transfer.financial_addresses[].aba`, `FundingInstructions.bank_transfer.financial_addresses[].swift`, `PaymentIntent.next_action.display_bank_transfer_instructions.financial_addresses[].aba`, and `PaymentIntent.next_action.display_bank_transfer_instructions.financial_addresses[].swift`
* Add support for new value `service_tax` on enums `InvoiceAddLinesParams.lines[].tax_amounts[].tax_rate_data.tax_type`, `InvoiceUpdateLinesParams.lines[].tax_amounts[].tax_rate_data.tax_type`, `Tax.Calculation.shipping_cost.tax_breakdown[].tax_rate_details.tax_type`, `Tax.Calculation.tax_breakdown[].tax_rate_details.tax_type`, `Tax.CalculationLineItem.tax_breakdown[].tax_rate_details.tax_type`, `Tax.Transaction.shipping_cost.tax_breakdown[].tax_rate_details.tax_type`, `TaxRate.tax_type`, `TaxRateCreateParams.tax_type`, and `TaxRateUpdateParams.tax_type`
* Add support for `merchant_amount` and `merchant_currency` on `Issuing.AuthorizationCreateParams.testHelpers`
* Change `Issuing.AuthorizationCreateParams.testHelpers.amount` to be optional
* Add support for `fraud_challenges` and `verified_by_fraud_challenge` on `Issuing.Authorization`
* Add support for new value `link` on enums `PaymentIntent.payment_method_options.card.network`, `PaymentIntentConfirmParams.payment_method_options.card.network`, `PaymentIntentCreateParams.payment_method_options.card.network`, `PaymentIntentUpdateParams.payment_method_options.card.network`, `SetupIntent.payment_method_options.card.network`, `SetupIntentConfirmParams.payment_method_options.card.network`, `SetupIntentCreateParams.payment_method_options.card.network`, `SetupIntentUpdateParams.payment_method_options.card.network`, `Subscription.payment_settings.payment_method_options.card.network`, `SubscriptionCreateParams.payment_settings.payment_method_options.card.network`, and `SubscriptionUpdateParams.payment_settings.payment_method_options.card.network`
* Add support for `submit_type` on `PaymentLinkUpdateParams`
* Add support for `trace_id` on `Payout`
* Add support for `network_decline_code` on `Refund.destination_details.blik` and `Refund.destination_details.swish`
* Change type of `Treasury.InboundTransfer.origin_payment_method` from `string` to `string | null`
* Add support for new value `2024-11-20.acacia` on enum `WebhookEndpointCreateParams.api_version`
