---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/1943
is_stripe_api_change: true
released_in_version: 14.3.0
---

* Add support for new resource `Tax.Registration`
* Add support for `create`, `list`, and `update` methods on resource `Registration`
* Add support for `revolut_pay_payments` on `Account` APIs.
* Add support for new value `token_card_network_invalid` on error code enums.
* Add support for new value `payment_unreconciled` on enum `BalanceTransaction.type`
* Add support for `revolut_pay` throughout the API.
* Change `.paypal.payer_email` to be required in several locations.
* Add support for `aba` and `swift` on `FundingInstructions.bank_transfer.financial_addresses[]` and `PaymentIntent.next_action.display_bank_transfer_instructions.financial_addresses[]`
* Add support for new values `ach`, `domestic_wire_us`, and `swift` on enums `FundingInstructions.bank_transfer.financial_addresses[].supported_networks[]` and `PaymentIntent.next_action.display_bank_transfer_instructions.financial_addresses[].supported_networks[]`
* Add support for new values `aba` and `swift` on enums `FundingInstructions.bank_transfer.financial_addresses[].type` and `PaymentIntent.next_action.display_bank_transfer_instructions.financial_addresses[].type`
* Add support for `url` on `Issuing.Authorization.merchant_data`, `Issuing.AuthorizationCreateParams.testHelpers.merchant_data`, `Issuing.Transaction.merchant_data`, `Issuing.TransactionCreateForceCaptureParams.testHelpers.merchant_data`, and `Issuing.TransactionCreateUnlinkedRefundParams.testHelpers.merchant_data`
* Add support for `authentication_exemption` and `three_d_secure` on `Issuing.Authorization.verification_data` and `Issuing.AuthorizationCreateParams.testHelpers.verification_data`
* Add support for `description` on `PaymentLink.payment_intent_data`, `PaymentLinkCreateParams.payment_intent_data`, and `PaymentLinkUpdateParams.payment_intent_data`
* Add support for new value `unreconciled_customer_funds` on enum `Reporting.ReportRunCreateParams.parameters.reporting_category`
