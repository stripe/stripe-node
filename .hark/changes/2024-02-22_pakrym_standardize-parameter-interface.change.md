---
title: Standardize parameter interface names
pr_url: https://github.com/stripe/stripe-node/pull/2025
released_in_version: 14.18.0
---

- `CapabilityListParams` renamed to `AccountListCapabilitiesParams`
- `CapabilityRetrieveParams` renamed to `AccountRetrieveCapabilityParams`
- `CapabilityUpdateParams` renamed to `AccountUpdateCapabilityParams`
- `CashBalanceRetrieveParams` renamed to `CustomerRetrieveCashBalanceParams`
- `CashBalanceUpdateParams` renamed to `CustomerUpdateCashBalanceParams`
- `CreditNoteLineItemListParams` renamed to `CreditNoteListLineItemsParams`
- `CustomerBalanceTransactionCreateParams` renamed to `CustomerCreateBalanceTransactionParams`
- `CustomerBalanceTransactionListParams` renamed to `CustomerListBalanceTransactionsParams`
- `CustomerBalanceTransactionRetrieveParams` renamed to `CustomerRetrieveBalanceTransactionParams`
- `CustomerBalanceTransactionUpdateParams` renamed to `CustomerUpdateBalanceTransactionParams`
- `CustomerCashBalanceTransactionListParams` renamed to `CustomerListCashBalanceTransactionsParams`
- `CustomerCashBalanceTransactionRetrieveParams` renamed to `CustomerRetrieveCashBalanceTransactionParams`
- `CustomerSourceCreateParams` renamed to `CustomerCreateSourceParams`
- `CustomerSourceDeleteParams` renamed to `CustomerDeleteSourceParams`
- `CustomerSourceListParams` renamed to `CustomerListSourcesParams`
- `CustomerSourceRetrieveParams` renamed to `CustomerRetrieveSourceParams`
- `CustomerSourceUpdateParams` renamed to `CustomerUpdateSourceParams`
- `CustomerSourceVerifyParams` renamed to `CustomerVerifySourceParams`
- `ExternalAccountCreateParams` renamed to `AccountCreateExternalAccountParams`
- `ExternalAccountDeleteParams` renamed to `AccountDeleteExternalAccountParams`
- `ExternalAccountListParams` renamed to `AccountListExternalAccountsParams`
- `ExternalAccountRetrieveParams` renamed to `AccountRetrieveExternalAccountParams`
- `ExternalAccountUpdateParams` renamed to `AccountUpdateExternalAccountParams`
- `FeeRefundCreateParams` renamed to `ApplicationFeeCreateRefundParams`
- `FeeRefundListParams` renamed to `ApplicationFeeListRefundsParams`
- `FeeRefundRetrieveParams` renamed to `ApplicationFeeRetrieveRefundParams`
- `FeeRefundUpdateParams` renamed to `ApplicationFeeUpdateRefundParams`
- `InvoiceLineItemListParams` renamed to `InvoiceListLineItemsParams`
- `InvoiceLineItemUpdateParams` renamed to `InvoiceUpdateLineItemParams`
- `LoginLinkCreateParams` renamed to `AccountCreateLoginLinkParams`
- `PersonCreateParams` renamed to `AccountCreatePersonParams`
- `PersonDeleteParams` renamed to `AccountDeletePersonParams`
- `PersonListParams` renamed to `AccountListPersonsParams`
- `PersonRetrieveParams` renamed to `AccountRetrievePersonParams`
- `PersonUpdateParams` renamed to `AccountUpdatePersonParams`
- `TaxIdCreateParams` renamed to `CustomerCreateTaxIdParams`
- `TaxIdDeleteParams` renamed to `CustomerDeleteTaxIdParams`
- `TaxIdListParams` renamed to `CustomerListTaxIdsParams`
- `TaxIdRetrieveParams` renamed to `CustomerRetrieveTaxIdParams`
- `TransferReversalCreateParams` renamed to `TransferCreateReversalParams`
- `TransferReversalListParams` renamed to `TransferListReversalsParams`
- `TransferReversalRetrieveParams` renamed to `TransferRetrieveReversalParams`
- `TransferReversalUpdateParams` renamed to `TransferUpdateReversalParams`
- `UsageRecordCreateParams` renamed to `SubscriptionItemCreateUsageRecordParams`
- `UsageRecordSummaryListParams` renamed to `SubscriptionItemListUsageRecordSummariesParams`

Old names will still work but are deprecated and will be removed in future versions.
