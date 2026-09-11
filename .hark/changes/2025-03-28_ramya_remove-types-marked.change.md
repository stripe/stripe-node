---
title: Remove types that were marked as deprecated in Feb 2024
pr_link: https://github.com/stripe/stripe-node/pull/2286
is_breaking: true
section: ⚠️ Other Breaking changes in the SDK
released_in_version: 18.0.0
---

* Remove `AccountDebitSource` in favor of `Account`
* Remove `CapabilityListParams` in favor of `AccountListCapabilitiesParams`
* Remove `CapabilityRetrieveParams` in favor of `AccountRetrieveCapabilityParams`
* Remove `CapabilityUpdateParams` in favor of `AccountUpdateCapabilityParams`
* Remove `CashBalanceRetrieveParams` in favor of `CustomerRetrieveCashBalanceParams`
* Remove `CashBalanceUpdateParams` in favor of `CustomerUpdateCashBalanceParams`
* Remove `CreditNoteLineItemListParams` in favor of `CreditNoteListLineItemsParams`
* Remove `CustomerBalanceTransactionCreateParams` in favor of `CustomerCreateBalanceTransactionParams`
* Remove `CustomerBalanceTransactionListParams` in favor of `CustomerListBalanceTransactionsParams`
* Remove `CustomerBalanceTransactionRetrieveParams` in favor of `CustomerRetrieveBalanceTransactionParams`
* Remove `CustomerBalanceTransactionUpdateParams` in favor of `CustomerUpdateBalanceTransactionParams`
* Remove `CustomerCashBalanceTransactionListParams` in favor of `CustomerListCashBalanceTransactionsParams`
* Remove `CustomerCashBalanceTransactionRetrieveParams` in favor of `CustomerRetrieveCashBalanceTransactionParams`
* Remove `CustomerSourceCreateParams` in favor of `CustomerCreateSourceParams`
* Remove `CustomerSourceDeleteParams` in favor of `CustomerDeleteSourceParams`
* Remove `CustomerSourceListParams` in favor of `CustomerListSourcesParams`
* Remove `CustomerSourceRetrieveParams` in favor of `CustomerRetrieveSourceParams`
* Remove `CustomerSourceUpdateParams` in favor of `CustomerUpdateSourceParams`
* Remove `CustomerSourceVerifyParams` in favor of `CustomerVerifySourceParams`
* Remove `ExternalAccountCreateParams` in favor of `AccountCreateExternalAccountParams`
* Remove `ExternalAccountDeleteParams` in favor of `AccountDeleteExternalAccountParams`
* Remove `ExternalAccountListParams` in favor of `AccountListExternalAccountsParams`
* Remove `ExternalAccountRetrieveParams` in favor of `AccountRetrieveExternalAccountParams`
* Remove `ExternalAccountUpdateParams` in favor of `AccountUpdateExternalAccountParams`
* Remove `FeeRefundCreateParams` in favor of `ApplicationFeeCreateRefundParams`
* Remove `FeeRefundListParams` in favor of `ApplicationFeeListRefundsParams`
* Remove `FeeRefundRetrieveParams` in favor of `ApplicationFeeRetrieveRefundParams`
* Remove `FeeRefundUpdateParams` in favor of `ApplicationFeeUpdateRefundParams`
* Remove `InvoiceLineItemListParams` in favor of `InvoiceListLineItemsParams`
* Remove `InvoiceLineItemUpdateParams` in favor of `InvoiceUpdateLineItemParams`
* Remove `LoginLinkCreateParams` in favor of `AccountCreateLoginLinkParams`
* Remove `PersonCreateParams` in favor of `AccountCreatePersonParams`
* Remove `PersonDeleteParams` in favor of `AccountDeletePersonParams`
* Remove `PersonListParams` in favor of `AccountListPersonsParams`
* Remove `PersonRetrieveParams` in favor of `AccountRetrievePersonParams`
* Remove `PersonUpdateParams` in favor of `AccountUpdatePersonParams`
* Remove `TransferReversalCreateParams` in favor of `TransferCreateReversalParams`
* Remove `TransferReversalListParams` in favor of `TransferListReversalsParams`
* Remove `TransferReversalRetrieveParams` in favor of `TransferRetrieveReversalParams`
* Remove `TransferReversalUpdateParams` in favor of `TransferUpdateReversalParams`
