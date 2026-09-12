---
title: Update generated code for private-preview
pr_url: https://github.com/stripe/stripe-node/pull/2757
is_breaking: true
is_stripe_api_change: true
released_in_version: 22.4.0-alpha.1
---

* Add support for new resources `V2.Billing.ContractPricingLineQuantityChange`, `V2.Core.Health.AlertHistoryEntry`, `V2.Core.Health.Alert`, `V2.MoneyManagement.FinancialAddressDebitSimulation`, and `V2.MoneyManagement.PayoutIntent`
* ⚠️ Remove support for resource `V2.Billing.ContractLicensePricingQuantityChange`
* Add support for `report_offer_acceptance` method on resource `Issuing.CreditUnderwritingRecord`
* Add support for `provisional_credit` test helper method on resource `Issuing.Dispute`
* Add support for `report_early_fraud_warning` method on resource `PaymentAttemptRecord`
* Add support for `search` method on resource `PaymentRecord`
* Add support for `debit` method on resource `V2.MoneyManagement.FinancialAddressDebitSimulation`
* Add support for `cancel`, `create`, `list`, `retrieve`, and `update` methods on resource `V2.MoneyManagement.PayoutIntent`
* Add support for `list` and `retrieve` methods on resource `V2.Core.Health.Alert`
* Add support for `del` method on resource `V2.Billing.Contract`
* ⚠️ Remove support for `performance_location_details` on `Tax.TransactionLineItem`
* Add support for `financial_accounts_transactions`, `financial_accounts`, and `recipients_list` on `AccountSession.components` and `AccountSessionCreateParams.components`
* Add support for `location` and `reader` on `Charge.payment_method_details.gift_card`, `GiftCardOperation`, `PaymentAttemptRecord.payment_method_details.gift_card`, and `PaymentRecord.payment_method_details.gift_card`
* Add support for `subscription` on `Checkout.SessionCreateParams.items[]`
* Add support for `items` on `Checkout.Session`
* Add support for `brand` on `Checkout.Session.current_attempt.payment_method_details.card`
* Add support for `network_data` on `Issuing.AuthorizationCaptureParams.testHelpers` and `Issuing.TransactionCreateForceCaptureParams.testHelpers`
* Add support for `enriched_merchant_data` on `Issuing.Authorization`
* Add support for `available_balance` and `current_balance` on `Issuing.Authorization.balance_response`
* ⚠️ Remove support for `amount` on `Issuing.Authorization.balance_response`
* Add support for `decision_deadline_updated_at` on `Issuing.CreditUnderwritingRecord`
* Add support for `acquirer_reference_number` on `Issuing.Transaction.network_data`
* Change `PaymentAttemptRecordReportRefundParams.outcome` to be optional
* Add support for `tip` on `PaymentIntentCaptureParams.amount_details`, `PaymentIntentConfirmParams.amount_details`, `PaymentIntentCreateParams.amount_details`, `PaymentIntentDecrementAuthorizationParams.amount_details`, `PaymentIntentIncrementAuthorizationParams.amount_details`, and `PaymentIntentUpdateParams.amount_details`
* Add support for `billing_cycle_anchor` on `V2.Billing.ContractCreateParams` and `V2.Billing.Contract`
* ⚠️ Remove support for `contract_line_details`, `contract_value_details`, and `license_quantities` on `V2.Billing.Contract`
* Add support for `bill_settings_details` on `V2.Billing.Contract.billing_settings` and `V2.Billing.ContractCreateParams.billing_settings`
* Add support for `billing_profile_details` and `collection_settings_details` on `V2.Billing.Contract.billing_settings`
* ⚠️ Remove support for `contract_billing_details` on `V2.Billing.Contract.billing_settings` and `V2.Billing.ContractCreateParams.billing_settings`
* ⚠️ Change type of `V2.Billing.Contract.one_time_fees` from `array(an object)` to `an object`
* ⚠️ Change type of `V2.Billing.Contract.pricing_lines` from `array(an object)` to `an object`
* ⚠️ Change type of `V2.Billing.Contract.pricing_overrides` from `array(an object)` to `an object`
* ⚠️ Change `V2.Billing.Contract.pricing_lines` to be optional
* ⚠️ Change `V2.Billing.Contract.pricing_overrides` to be optional
* ⚠️ Add support for new value `money_manager` on enums `V2.Core.Account.applied_configurations`, `V2.Core.AccountCloseParams.applied_configurations`, and `V2.Core.AccountListParams.applied_configurations`
* ⚠️ Remove support for value `storer` from enums `V2.Core.Account.applied_configurations`, `V2.Core.AccountCloseParams.applied_configurations`, and `V2.Core.AccountListParams.applied_configurations`
* Add support for `ach`, `becs`, `eft`, `fedwire`, `fps`, `npp`, `rtp`, `sepa_credit`, `sepa_instant`, and `swift` on `V2.Core.Account.configuration.recipient.capabilities.bank_accounts`, `V2.Core.AccountCreateParams.configuration.recipient.capabilities.bank_accounts`, and `V2.Core.AccountUpdateParams.configuration.recipient.capabilities.bank_accounts`
* Add support for `consumer_money_manager` on `V2.Core.Account.identity.attestations.terms_of_service`, `V2.Core.AccountCreateParams.identity.attestations.terms_of_service`, and `V2.Core.AccountUpdateParams.identity.attestations.terms_of_service`
* Add support for `crypto_money_manager` on `V2.Core.Account.identity.attestations.terms_of_service`, `V2.Core.AccountCreateParams.identity.attestations.terms_of_service`, and `V2.Core.AccountTokenCreateParams.identity.attestations.terms_of_service`
* ⚠️ Remove support for `consumer_storer` on `V2.Core.Account.identity.attestations.terms_of_service`, `V2.Core.AccountCreateParams.identity.attestations.terms_of_service`, and `V2.Core.AccountUpdateParams.identity.attestations.terms_of_service`
* ⚠️ Remove support for `crypto_storer` on `V2.Core.Account.identity.attestations.terms_of_service`, `V2.Core.AccountCreateParams.identity.attestations.terms_of_service`, and `V2.Core.AccountTokenCreateParams.identity.attestations.terms_of_service`
* Add support for `attachment` on `V2.MoneyManagement.OutboundPayment.delivery_options.paper_check` and `V2.MoneyManagement.OutboundPaymentCreateParams.delivery_options.paper_check`
* Add support for `payout_method_options` on `V2.MoneyManagement.OutboundPayment.to`, `V2.MoneyManagement.OutboundPaymentCreateParams.to`, `V2.MoneyManagement.OutboundTransfer.to`, and `V2.MoneyManagement.OutboundTransferCreateParams.to`
* Add support for `returned` on `V2.MoneyManagement.ReceivedDebit.status_details`
* Add support for `returned_at` on `V2.MoneyManagement.ReceivedDebit.status_transitions`
* Add support for `payout_intent` on `V2.MoneyManagement.OutboundPaymentCreateParams`
* Add support for `include` on `V2.Billing.ContractListParams`
* ⚠️ Remove support for `contract_lines` on `V2.Billing.ContractCreateParams`
* ⚠️ Remove support for `license_quantity_actions` on `V2.Billing.ContractCreateParams` and `V2.Billing.ContractUpdateParams`
* ⚠️ Add support for `billing_profile_details` and `collection_settings_details` on `V2.Billing.ContractCreateParams.billing_settings`
* ⚠️ Add support for new value `billing_settings` on enums `V2.Billing.ContractActivateParams.include`, `V2.Billing.ContractCancelParams.include`, `V2.Billing.ContractCreateParams.include`, `V2.Billing.ContractRetrieveParams.include`, and `V2.Billing.ContractUpdateParams.include`
* ⚠️ Remove support for values `contract_line_details` and `license_quantities` from enums `V2.Billing.ContractActivateParams.include`, `V2.Billing.ContractCancelParams.include`, `V2.Billing.ContractCreateParams.include`, `V2.Billing.ContractRetrieveParams.include`, and `V2.Billing.ContractUpdateParams.include`
* ⚠️ Add support for `amount`, `bill_at`, and `product` on `V2.Billing.ContractCreateParams.one_time_fees[]`
* Add support for `lookup_key` on `V2.Billing.ContractCreateParams.one_time_fees[]`
* ⚠️ Remove support for `bill_schedule`, `billable_item_type`, and `product_details` on `V2.Billing.ContractCreateParams.one_time_fees[]`
* Add support for `pricing_overrides` and `quantity_changes` on `V2.Billing.ContractCreateParams.pricing_lines[].pricing.price_details` and `V2.Billing.ContractUpdateParams.pricing_line_actions[].add.pricing.price_details`
* ⚠️ Remove support for `quantity` on `V2.Billing.ContractCreateParams.pricing_lines[].pricing.price_details` and `V2.Billing.ContractUpdateParams.pricing_line_actions[].add.pricing.price_details`
* ⚠️ Remove support for `overwrite_price` on `V2.Billing.ContractCreateParams.pricing_overrides[]`
* Add support for `pricing_line_ids` and `pricing_line_lookup_keys` on `V2.Billing.ContractCreateParams.pricing_overrides[].multiplier.criteria[]` and `V2.Billing.ContractUpdateParams.pricing_override_actions[].add.multiplier.criteria[]`
* ⚠️ Remove support for `billable_item_ids`, `billable_item_lookup_keys`, `billable_item_types`, `metadata_conditions`, and `rate_card_ids` on `V2.Billing.ContractCreateParams.pricing_overrides[].multiplier.criteria[]` and `V2.Billing.ContractUpdateParams.pricing_override_actions[].add.multiplier.criteria[]`
* ⚠️ Change type of `V2.Billing.ContractCreateParams.pricing_overrides[].type` and `V2.Billing.ContractUpdateParams.pricing_override_actions[].add.type` from `enum('multiplier'|'overwrite_price')` to `literal('multiplier')`
* Change `V2.Billing.ContractCreateParams.pricing_overrides` to be optional
* Change `V2.Billing.ContractCreateParams.pricing_overrides[].multiplier.criteria` to be optional
* Add support for `pricing` on `V2.Billing.ContractUpdateParams.pricing_line_actions[].update`
* ⚠️ Remove support for `price` on `V2.Billing.ContractUpdateParams.pricing_override_actions[].add.overwrite_price`
* Add support for `cancel_pricing_lines` and `proration_behavior` on `V2.Billing.ContractCancelParams`
* Add support for new values `bank_accounts.ach`, `bank_accounts.becs`, `bank_accounts.eft`, `bank_accounts.fedwire`, `bank_accounts.fps`, `bank_accounts.npp`, `bank_accounts.rtp`, `bank_accounts.sepa_credit`, `bank_accounts.sepa_instant`, and `bank_accounts.swift` on enum `EventsV2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent.updated_capability`
* Add support for event notifications `V2MoneyManagementDebitDisputeFailedEvent`, `V2MoneyManagementDebitDisputeSubmittedEvent`, and `V2MoneyManagementDebitDisputeSucceededEvent` with related object `V2.MoneyManagement.DebitDispute`
* Add support for error codes `us_bank_account_microdeposits_cannot_be_confirmed` and `us_bank_account_microdeposits_cannot_be_sent` on `ControlledByAlternateResourceError`
* Add support for error code `payout_intent_not_cancelable` on `NotCancelableError`
