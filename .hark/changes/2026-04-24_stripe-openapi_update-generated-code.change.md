---
title: Update generated code for beta
pr_url: https://github.com/stripe/stripe-node/pull/2693
is_breaking: true
is_stripe_api_change: true
released_in_version: 22.2.0-beta.2
---

* Add support for new resources `V2.Commerce.ProductCatalogImport`, `V2.Data.Reporting.QueryRun`, `V2.Extend.WorkflowRun`, `V2.Extend.Workflow`, `V2.Iam.ActivityLog`, `V2.Network.BusinessProfile`, and `V2.OrchestratedCommerce.Agreement`
* Add support for `confirm`, `create`, `list`, `retrieve`, and `terminate` methods on resource `V2.OrchestratedCommerce.Agreement`
* Add support for `me` and `retrieve` methods on resource `V2.Network.BusinessProfile`
* Add support for `list` method on resource `V2.Iam.ActivityLog`
* Add support for `list` and `retrieve` methods on resource `V2.Extend.WorkflowRun`
* Add support for `invoke`, `list`, and `retrieve` methods on resource `V2.Extend.Workflow`
* Add support for `create` and `retrieve` methods on resources `V2.Commerce.ProductCatalogImport` and `V2.Data.Reporting.QueryRun`
* ⚠️ Change type of `V2.Billing.Cadence.settings_data.collection.payment_method_options.konbini`, `V2.Billing.CollectionSetting.payment_method_options.konbini`, `V2.Billing.CollectionSettingCreateParams.payment_method_options.konbini`, `V2.Billing.CollectionSettingUpdateParams.payment_method_options.konbini`, and `V2.Billing.CollectionSettingVersion.payment_method_options.konbini` from `map(string: dynamic)` to `an object`
* ⚠️ Change type of `V2.Billing.Cadence.settings_data.collection.payment_method_options.sepa_debit`, `V2.Billing.CollectionSetting.payment_method_options.sepa_debit`, `V2.Billing.CollectionSettingCreateParams.payment_method_options.sepa_debit`, `V2.Billing.CollectionSettingUpdateParams.payment_method_options.sepa_debit`, and `V2.Billing.CollectionSettingVersion.payment_method_options.sepa_debit` from `map(string: dynamic)` to `an object`
* ⚠️ Add support for new values `cn_bank_account` and `jp_bank_account` on enum `V2.Core.Account.configuration.recipient.default_outbound_destination.type`
* ⚠️ Add support for new values `futsu` and `toza` on enums `V2.Core.Vault.GbBankAccount.bank_account_type` and `V2.MoneyManagement.PayoutMethod.bank_account.bank_account_type`
* ⚠️ Change type of `V2.MoneyManagement.InboundTransfer.transfer_history[].bank_debit_processing` from `map(string: dynamic)` to `an object`
* ⚠️ Change type of `V2.MoneyManagement.InboundTransfer.transfer_history[].bank_debit_queued` from `map(string: dynamic)` to `an object`
* ⚠️ Change type of `V2.MoneyManagement.InboundTransfer.transfer_history[].bank_debit_succeeded` from `map(string: dynamic)` to `an object`
* ⚠️ Add support for new value `payout_method_amount_limit_exceeded` on enum `V2.MoneyManagement.OutboundTransfer.status_details.failed.reason`
* ⚠️ Add support for new values `inbound_transfer_reversal`, `outbound_payment_reversal`, `outbound_transfer_reversal`, `received_credit_reversal`, `received_debit_reversal`, and `stripe_fee_tax` on enums `V2.MoneyManagement.Transaction.category` and `V2.MoneyManagement.TransactionEntry.transaction_details.category`
* ⚠️ Remove support for value `return` from enums `V2.MoneyManagement.Transaction.category` and `V2.MoneyManagement.TransactionEntry.transaction_details.category`
* Add support for new values `futsu` and `toza` on enums `V2.Core.Vault.GbBankAccountCreateParams.bank_account_type`, `V2.MoneyManagement.OutboundSetupIntentCreateParams.payout_method_data.bank_account.bank_account_type`, and `V2.MoneyManagement.OutboundSetupIntentUpdateParams.payout_method_data.bank_account.bank_account_type`
* Change type of `V2.Core.BatchJobCreateParams.endpoint.http_method` from `literal('post')` to `enum('delete'|'post')`
* ⚠️ Add support for new value `meter_event_value_too_many_digits` on enums `EventsV1BillingMeterErrorReportTriggeredEvent.reason.error_types[].code` and `EventsV1BillingMeterNoMeterFoundEvent.reason.error_types[].code`
* Add support for `treasury_transaction` on `EventsV2MoneyManagementTransactionCreatedEvent`
* Add support for event notifications `V2CommerceProductCatalogImportsFailedEvent`, `V2CommerceProductCatalogImportsProcessingEvent`, `V2CommerceProductCatalogImportsSucceededEvent`, and `V2CommerceProductCatalogImportsSucceededWithErrorsEvent` with related object `V2.Commerce.ProductCatalogImport`
* Add support for event notifications `V2DataReportingQueryRunCreatedEvent`, `V2DataReportingQueryRunFailedEvent`, `V2DataReportingQueryRunSucceededEvent`, and `V2DataReportingQueryRunUpdatedEvent` with related object `V2.Data.Reporting.QueryRun`
* Add support for event notifications `V2ExtendWorkflowRunFailedEvent`, `V2ExtendWorkflowRunStartedEvent`, and `V2ExtendWorkflowRunSucceededEvent` with related object `V2.Extend.WorkflowRun`
* Add support for event notifications `V2OrchestratedCommerceAgreementConfirmedEvent`, `V2OrchestratedCommerceAgreementCreatedEvent`, `V2OrchestratedCommerceAgreementPartiallyConfirmedEvent`, and `V2OrchestratedCommerceAgreementTerminatedEvent` with related object `V2.OrchestratedCommerce.Agreement`
* Add support for error type `CannotProceedError`
