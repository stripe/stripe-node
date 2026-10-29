---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/2883
semver_level: major
is_stripe_api_change: true
released_in_version: 23.2.0-beta.1
---

* Add support for new resources `PaymentPlan`, `V2.Data.QueryRun`, `V2.Data.ReportRun`, `V2.Data.Report`, and `V2.Data.Schema`
* Add support for `create`, `list`, `retrieve`, and `update` methods on resource `PaymentPlan`
* Add support for `list` and `retrieve` methods on resources `V2.Data.Report` and `V2.Data.Schema`
* Add support for `create` and `retrieve` methods on resources `V2.Data.QueryRun` and `V2.Data.ReportRun`
* ⚠️ Remove support for `acknowledge_confirmation_of_payee` and `initiate_confirmation_of_payee` methods on resource `V2.Core.Vault.GbBankAccount`
* Add support for new value `issuing.application_rejected_because_prohibited_business` on enum `AccountNotice.reason`
* Add support for `settlement_currencies` on `BalanceSettingUpdateParams.payments` and `BalanceSettings.payments`
* Add support for `default_settlement_currency` on `BalanceSettings.payments`
* Add support for `wero` on `Charge.payment_method_details`, `ConfirmationToken.payment_method_preview`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `PaymentAttemptRecord.payment_method_details`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, `PaymentMethodConfiguration`, `PaymentMethodCreateParams`, `PaymentMethod`, `PaymentRecord.payment_method_details`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
* Add support for new value `mandiri` on enums `Charge.payment_method_details.id_bank_transfer.bank`, `ConfirmationToken.payment_method_preview.id_bank_transfer.bank`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data.id_bank_transfer.bank`, `PaymentAttemptRecord.payment_method_details.id_bank_transfer.bank`, `PaymentIntentConfirmParams.payment_method_data.id_bank_transfer.bank`, `PaymentIntentCreateParams.payment_method_data.id_bank_transfer.bank`, `PaymentIntentUpdateParams.payment_method_data.id_bank_transfer.bank`, `PaymentMethod.id_bank_transfer.bank`, `PaymentMethodCreateParams.id_bank_transfer.bank`, `PaymentRecord.payment_method_details.id_bank_transfer.bank`, `SetupAttempt.payment_method_details.id_bank_transfer.bank`, `SetupIntentConfirmParams.payment_method_data.id_bank_transfer.bank`, `SetupIntentCreateParams.payment_method_data.id_bank_transfer.bank`, and `SetupIntentUpdateParams.payment_method_data.id_bank_transfer.bank`
* Add support for new values `au_acn`, `au_wpn`, `bw_vat`, `ci_vat`, `cz_dic`, `fr_siren`, `fr_siret`, `fr_spi`, `gh_tin`, `is_kt`, `md_cf`, `mu_vat`, `mz_nuit`, `nz_bn`, `pt_nif`, `sm_coe`, `tt_bir`, and `tt_vat` on enums `Checkout.Session.collected_information.tax_id.type`, `Order.tax_details.tax_ids[].type`, and `QuotePreviewInvoice.customer_tax_ids[].type`
* Add support for new value `wero` on enums `ConfirmationTokenCreateParams.testHelpers.payment_method_data.type`, `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
* Add support for `external_token` on `ConfirmationTokenCreateParams.testHelpers.payment_method_data.us_bank_account`, `PaymentIntentConfirmParams.payment_method_data.us_bank_account`, `PaymentIntentCreateParams.payment_method_data.us_bank_account`, `PaymentIntentUpdateParams.payment_method_data.us_bank_account`, `PaymentMethodCreateParams.us_bank_account`, `SetupIntentConfirmParams.payment_method_data.us_bank_account`, `SetupIntentCreateParams.payment_method_data.us_bank_account`, `SetupIntentUpdateParams.payment_method_data.us_bank_account`, and `Treasury.OutboundPaymentCreateParams.destination_payment_method_data.us_bank_account`
* Add support for new value `wero` on enums `ConfirmationToken.payment_method_preview.type` and `PaymentMethod.type`
* Add support for new value `wero` on enums `CustomerListPaymentMethodsParams.type`, `PaymentMethodCreateParams.type`, and `PaymentMethodListParams.type`
* ⚠️ Change type of `Dispute.evidence.appeal` from `DisputeAppeal` to `DisputeAppeal | null`
* Change `Dispute.evidence_details.submission_method` to be required
* Change `Dispute.intended_submission_method` to be required
* Add support for `payment_plan` on `Invoice`
* Add support for new values `au_acn`, `au_wpn`, `bw_vat`, `ci_vat`, `cz_dic`, `fr_siren`, `fr_siret`, `fr_spi`, `gh_tin`, `is_kt`, `md_cf`, `mu_vat`, `mz_nuit`, `nz_bn`, `pt_nif`, `sm_coe`, `tt_bir`, and `tt_vat` on enums `OrderCreateParams.tax_details.tax_ids[].type` and `OrderUpdateParams.tax_details.tax_ids[].type`
* Add support for new value `wero` on enums `PaymentIntent.excluded_payment_method_types`, `PaymentIntentConfirmParams.excluded_payment_method_types`, `PaymentIntentCreateParams.excluded_payment_method_types`, `PaymentIntentUpdateParams.excluded_payment_method_types`, `SetupIntent.excluded_payment_method_types`, `SetupIntentCreateParams.excluded_payment_method_types`, and `SetupIntentUpdateParams.excluded_payment_method_types`
* Add support for new value `sequra` on enum `QuotePreviewInvoice.payment_settings.payment_method_types`
* Change `QuotePreviewSubscriptionSchedule.pause_schedules` to be required
* ⚠️ Remove support for `default_outbound_destination` on `V2.Core.Account.configuration.recipient` and `V2.Core.AccountUpdateParams.configuration.recipient`
* Add support for `crypto_wallets` on `V2.Core.Account.configuration.recipient.capabilities`, `V2.Core.AccountCreateParams.configuration.recipient.capabilities`, and `V2.Core.AccountUpdateParams.configuration.recipient.capabilities`
* Add support for `ach`, `fedwire`, `fps`, `rtp`, `sepa`, and `swift` on `V2.Core.Account.configuration.recipient.capabilities.bank_accounts`, `V2.Core.AccountCreateParams.configuration.recipient.capabilities.bank_accounts`, and `V2.Core.AccountUpdateParams.configuration.recipient.capabilities.bank_accounts`
* ⚠️ Remove support for `wire` on `V2.Core.Account.configuration.recipient.capabilities.bank_accounts`, `V2.Core.AccountCreateParams.configuration.recipient.capabilities.bank_accounts`, and `V2.Core.AccountUpdateParams.configuration.recipient.capabilities.bank_accounts`
* ⚠️ Add support for new value `physical` on enum `V2.Core.Account.identity.business_details.additional_addresses[].purpose`
* Add support for `proof_of_business_presence` on `V2.Core.Account.identity.business_details.documents`, `V2.Core.AccountCreateParams.identity.business_details.documents`, `V2.Core.AccountTokenCreateParams.identity.business_details.documents`, and `V2.Core.AccountUpdateParams.identity.business_details.documents`
* Add support for `partial_output_file` on `V2.Core.BatchJob.status_details.batch_failed`
* Add support for `fingerprint` on `V2.Core.Vault.GbBankAccount`, `V2.Core.Vault.UsBankAccount`, and `V2.MoneyManagement.PayoutMethod.bank_account`
* ⚠️ Remove support for values `futsu` and `toza` from enums `V2.Core.Vault.GbBankAccount.bank_account_type` and `V2.Core.Vault.GbBankAccountCreateParams.bank_account_type`
* Add support for `fedwire_fingerprint` on `V2.Core.Vault.UsBankAccount`
* ⚠️ Remove support for values `balance_exchange` and `inbound_payment` from enum `V2.MoneyManagement.Adjustment.adjusted_flow.type`
* Add support for `address` on `V2.MoneyManagement.FinancialAddress.bank_account.aba`
* ⚠️ Remove support for `account_holder_address` on `V2.MoneyManagement.FinancialAddress.bank_account.aba`
* ⚠️ Remove support for `last4` on `V2.MoneyManagement.FinancialAddress.bank_account.aba`, `V2.MoneyManagement.FinancialAddress.bank_account.iban`, and `V2.MoneyManagement.FinancialAddress.bank_account.sort_code`
* ⚠️ Remove support for `country` on `V2.MoneyManagement.FinancialAddress.bank_account.iban`
* Change `V2.MoneyManagement.FinancialAddress.bank_account.aba.account_number` and `V2.MoneyManagement.FinancialAddress.bank_account.sort_code.account_number` to be required
* Change `V2.MoneyManagement.FinancialAddress.bank_account.iban.iban` to be required
* Change `V2.MoneyManagement.FinancialAddress.settlement_currency` to be required
* Add support for `tax_amount` on `V2.MoneyManagement.OutboundPaymentQuote.estimated_fees[]`
* ⚠️ Remove support for values `becs`, `eft`, `npp`, and `sepa_instant` from enum `V2.MoneyManagement.OutboundPaymentQuote.estimated_fees[].network_fee_details.network`
* Add support for new value `next_day_payout_fee` on enum `V2.MoneyManagement.OutboundPaymentQuote.estimated_fees[].type`
* Add support for `payout_method_options` on `V2.MoneyManagement.OutboundPayment.to`, `V2.MoneyManagement.OutboundPaymentCreateParams.to`, `V2.MoneyManagement.OutboundPaymentQuote.to`, `V2.MoneyManagement.OutboundPaymentQuoteCreateParams.to`, `V2.MoneyManagement.OutboundTransfer.to`, and `V2.MoneyManagement.OutboundTransferCreateParams.to`
* Add support for `payout_intent` and `tracking_details` on `V2.MoneyManagement.OutboundPayment`
* Add support for `recipient_verification` on `V2.MoneyManagement.OutboundPaymentCreateParams` and `V2.MoneyManagement.OutboundPayment`
* ⚠️ Change `V2.MoneyManagement.OutboundPayment.to.payout_method` and `V2.MoneyManagement.OutboundSetupIntent.payout_method` to be optional
* Add support for `crypto_wallet` on `V2.MoneyManagement.OutboundSetupIntentCreateParams.payout_method_data` and `V2.MoneyManagement.PayoutMethod`
* Add support for `network` on `V2.MoneyManagement.ReceivedCredit.bank_transfer`
* ⚠️ Remove support for `gb_bank_account`, `sepa_bank_account`, and `us_bank_account` on `V2.MoneyManagement.ReceivedCredit.bank_transfer`
* ⚠️ Remove support for `network` on `V2.MoneyManagement.ReceivedCredit.bank_transfer.originating_bank_account.aba`, `V2.MoneyManagement.ReceivedCredit.bank_transfer.originating_bank_account.iban`, and `V2.MoneyManagement.ReceivedCredit.bank_transfer.originating_bank_account.sort_code`
* Add support for `fee_batch` on `V2.MoneyManagement.Transaction.flow` and `V2.MoneyManagement.TransactionEntry.transaction_details.flow`
* ⚠️ Remove support for `fee_transaction` on `V2.MoneyManagement.Transaction.flow` and `V2.MoneyManagement.TransactionEntry.transaction_details.flow`
* ⚠️ Add support for new value `fee_batch` on enums `V2.MoneyManagement.Transaction.flow.type` and `V2.MoneyManagement.TransactionEntry.transaction_details.flow.type`
* ⚠️ Remove support for value `fee_transaction` from enums `V2.MoneyManagement.Transaction.flow.type` and `V2.MoneyManagement.TransactionEntry.transaction_details.flow.type`
* Add support for `metadata` and `regulatory_receipt` on `V2.MoneyManagement.Transaction`
* Add support for `contact_email` on `V2.Signals.AccountActivity.account_details.data`, `V2.Signals.AccountActivityCreateParams.account_details.data`, `V2.Signals.AccountEvaluation.account_details.data`, and `V2.Signals.AccountEvaluationCreateParams.account_details.data`
* Add support for new values `fedwire` and `sepa` on enum `V2.MoneyManagement.FinancialAddressCreditSimulationCreditParams.network`
* Add support for `statement_descriptor` on `V2.MoneyManagement.OutboundPaymentCreateParams` and `V2.MoneyManagement.OutboundTransferCreateParams`
* ⚠️ Remove support for `created_gt`, `created_gte`, `created_lt`, and `created_lte` on `V2.MoneyManagement.OutboundPaymentListParams`
* ⚠️ Change type of `V2.MoneyManagement.OutboundPaymentListParams.created` from `DateTime` to `an object`
* ⚠️ Remove support for `settlement_currency` on `V2.MoneyManagement.FinancialAddressCreateParams`
* Add support for new value `eur` on enum `V2.MoneyManagement.FinancialAddressCreateParams.bank_account.currency`
* ⚠️ Remove support for `deposit_insurance_eligibility` on `V2.MoneyManagement.FinancialAccountCreateParams.storage`
* ⚠️ Change type of `V2.Core.Vault.UsBankAccountListParams.verification_status` from `string` to `enum('awaiting_verification'|'unverified'|'verification_failed'|'verified')`
* Add support for new value `physical` on enums `V2.Core.AccountCreateParams.identity.business_details.additional_addresses[].purpose`, `V2.Core.AccountTokenCreateParams.identity.business_details.additional_addresses[].purpose`, and `V2.Core.AccountUpdateParams.identity.business_details.additional_addresses[].purpose`
* Add support for snapshot events `PaymentPlanCreatedEvent`, `PaymentPlanInstallmentDueEvent`, `PaymentPlanInstallmentPaidEvent`, `PaymentPlanInstallmentWillBeDueEvent`, and `PaymentPlanUpdatedEvent` with resource `PaymentPlan`
* Add support for event notifications `V2DataQueryRunCreatedEvent`, `V2DataQueryRunFailedEvent`, `V2DataQueryRunSucceededEvent`, and `V2DataQueryRunUpdatedEvent` with related object `V2.Data.QueryRun`
* Add support for event notifications `V2DataReportRunCreatedEvent`, `V2DataReportRunFailedEvent`, `V2DataReportRunSucceededEvent`, and `V2DataReportRunUpdatedEvent` with related object `V2.Data.ReportRun`
* Add support for error codes `smart_disputes_not_available`, `subscription_update_trial_after_billing_cycle_anchor`, `three_d_secure_authentication_not_supported`, and `three_d_secure_authentication_upstream_error` on `QuotePreviewInvoice.last_finalization_error`
* ⚠️ Remove support for error code `blocked_payout_method_card` on `BlockedByStripeError`
* Add support for error code `us_bank_account_microdeposits_requires_routing_number` on `CannotProceedError`
* Add support for error codes `gb_bank_account_cannot_be_unarchived` and `us_bank_account_cannot_be_unarchived` on `ControlledByAlternateResourceError`
* ⚠️ Remove support for error code `outbound_flow_from_closed_financial_account_unsupported` on `FeatureNotEnabledError`
* ⚠️ Remove support for error code `invalid_payout_method_card` on `InvalidPayoutMethodError`
* Add support for error code `payout_intent_not_cancelable` on `NotCancelableError`
* ⚠️ Remove support for error code `archived_payout_method_card` on `QuotaExceededError`
