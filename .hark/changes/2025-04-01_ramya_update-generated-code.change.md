---
title: Update generated code for beta
pr_url: https://github.com/stripe/stripe-node/pull/2288
is_stripe_api_change: true
released_in_version: 18.1.0-beta.1
---

This release changes the pinned API version to `2025-03-31.preview`

### Breaking Changes
* Remove support for `amount_overpaid` on `InvoicePayment`
* Remove support for values `out_of_band_payment` and `payment_record` from enum `InvoicePayment.payment.type`
* Remove support for `interchange_fees`, `net_total`, `network_fees`, and `transaction_volume` on `Issuing.Settlement`
* Remove support for `billing_thresholds` on `QuotePreviewSubscriptionSchedule.default_settings`, `QuotePreviewSubscriptionSchedule.phases[].items[]`, and `QuotePreviewSubscriptionSchedule.phases[]`
* Remove support for `coupon` on `QuotePreviewSubscriptionSchedule.phases[]`
* Remove support for `value` on `Terminal.Reader.action.collect_inputs.inputs[].selection.choices[]`, `Terminal.Reader.action.collect_inputs.inputs[].selection`, and `Terminal.ReaderCollectInputsParams.inputs[].selection.choices[]`
* Change `Checkout.Session.permissions.update` to be optional
* Change type of `InvoicePayment.is_default` from `boolean | null` to `boolean`
* Change `Invoice.amount_overpaid` and `QuotePreviewInvoice.amount_overpaid` to be required
* Change type of `PaymentAttemptRecord.payment_method_details.type` and `PaymentRecord.payment_method_details.type` from `literal('custom')` to `string`
* Change type of `PaymentAttemptRecord.payment_record` from `string` to `string | null`
* Change `PaymentAttemptRecord.payment_method_details.custom` and `PaymentRecord.payment_method_details.custom` to be optional
* Change `PaymentRecordReportPaymentParams.payment_reference` to be optional
* Change type of `PaymentRecord.latest_payment_attempt_record` from `string` to `string | null`

### Additions
* Add support for new resources `BalanceSettings`
* Add support for `retrieve` and `update` methods on resource `BalanceSettings`
* Add support for `create`, `del`, `list`, `retrieve`, and `update` methods on a new `ExternalAccountService` class to access cards and bank accounts made available in the new path `v1/external_accounts`. Access this via `StripeClient.externalAccounts`
* Add support for `stripe_balance_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
* Add support for `customer_account` on `Billing.CreditBalanceSummaryRetrieveParams`, `Billing.CreditBalanceSummary`, `Billing.CreditBalanceTransactionListParams`, `Billing.CreditGrantCreateParams`, `Billing.CreditGrantListParams`, `Billing.CreditGrant`, `BillingPortal.SessionCreateParams`, `BillingPortal.Session`, `Checkout.SessionCreateParams`, `Checkout.SessionListParams`, `Checkout.Session`, `ConfirmationToken.payment_method_preview`, `CreditNoteListParams`, `CreditNote`, `CustomerBalanceTransaction`, `CustomerCashBalanceTransaction`, `CustomerCashBalance`, `CustomerPaymentMethod`, `CustomerSessionCreateParams`, `CustomerSession`, `CustomerTaxId.owner`, `CustomerTaxId`, `Customer`, `Discount`, `FinancialConnections.Account.account_holder`, `FinancialConnections.AccountListParams.account_holder`, `FinancialConnections.Session.account_holder`, `FinancialConnections.SessionCreateParams.account_holder`, `InvoiceCreateParams`, `InvoiceCreatePreviewParams`, `InvoiceItemCreateParams`, `InvoiceItemListParams`, `InvoiceItem`, `InvoiceListParams`, `Invoice`, `PaymentIntentCreateParams`, `PaymentIntentListParams`, `PaymentIntentUpdateParams`, `PaymentIntent`, `PaymentMethodAttachParams`, `PaymentMethod`, `PromotionCodeCreateParams`, `PromotionCodeListParams`, `PromotionCode`, `QuoteCreateParams`, `QuoteListParams`, `QuotePreviewInvoice`, `QuotePreviewSubscriptionSchedule`, `QuoteUpdateParams`, `Quote`, `SetupAttempt`, `SetupIntentCreateParams`, `SetupIntentListParams`, `SetupIntentUpdateParams`, `SetupIntent`, `SubscriptionCreateParams`, `SubscriptionListParams`, `SubscriptionScheduleCreateParams`, `SubscriptionScheduleListParams`, `SubscriptionSchedule`, `Subscription`, `TaxId.owner`, `TaxIdCreateParams.owner`, `TaxIdListParams.owner`, and `TaxId`
* Add support for `stripe_balance` on `Charge.payment_method_details`, `ConfirmationToken.payment_method_preview`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `CustomerPaymentMethod`, `PaymentAttemptRecord.payment_method_details`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodCreateParams`, `PaymentMethod`, `PaymentRecord.payment_method_details`, `SetupAttempt.payment_method_details`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
* Add support for `update_line_items` and `update_shipping_details` on `Checkout.Session.permissions` and `Checkout.SessionCreateParams.permissions`
* Add support for `provider` on `Checkout.Session.automatic_tax`, `Invoice.automatic_tax`, `Quote.automatic_tax`, and `QuotePreviewInvoice.automatic_tax`
* Add support for `tax_calculation_reference` on `CreditNoteLineItem`, `CreditNotePreviewLines`, `InvoiceLineItem`, `LineItem`, `PaymentLinkLineItem`, `QuoteComputedUpfrontLineItems`, `QuoteLineItem`, and `SessionLineItem`
* Add support for `payment_method_options` on `ConfirmationTokenCreateParams.testHelpers`
* Add support for `installments` on `ConfirmationToken.payment_method_options.card`
* Add support for `context` on `Event`
* Add support for `related_customer_account` on `Identity.VerificationSession`, `identity.VerificationSessionCreateParams`, and `identity.VerificationSessionListParams`
* Add support for `network_data` on `Issuing.DisputeSettlementDetail`
* Add support for `interchange_fees_amount`, `net_total_amount`, `network_fees_amount`, `other_fees_amount`, `other_fees_count`, and `transaction_amount` on `Issuing.Settlement`
* Add support for `reported_by` on `PaymentAttemptRecord`
* Add support for `ach_credit_transfer`, `ach_debit`, `acss_debit`, `affirm`, `afterpay_clearpay`, `alipay`, `alma`, `amazon_pay`, `au_becs_debit`, `bacs_debit`, `bancontact`, `blik`, `boleto`, `card_present`, `card`, `cashapp`, `customer_balance`, `eps`, `fpx`, `giropay`, `gopay`, `grabpay`, `id_bank_transfer`, `ideal`, `interac_present`, `kakao_pay`, `klarna`, `konbini`, `kr_card`, `link`, `mb_way`, `mobilepay`, `multibanco`, `naver_pay`, `nz_bank_account`, `oxxo`, `p24`, `pay_by_bank`, `payco`, `paynow`, `paypal`, `payto`, `pix`, `promptpay`, `qris`, `rechnung`, `revolut_pay`, `samsung_pay`, `satispay`, `sepa_credit_transfer`, `sepa_debit`, `shopeepay`, `sofort`, `stripe_account`, `swish`, `twint`, `us_bank_account`, `wechat_pay`, `wechat`, and `zip` on `PaymentAttemptRecord.payment_method_details` and `PaymentRecord.payment_method_details`
* Add support for `payout_method` on `PayoutCreateParams` and `Payout`
* Add support for `confirmation_secret`, `parent`, and `total_taxes` on `QuotePreviewInvoice`
* Add support for new values `forwarding_api_retryable_upstream_error`, `setup_intent_mobile_wallet_unsupported`, `v2_account_disconnection_unsupported`, and `v2_account_missing_configuration` on enum `QuotePreviewInvoice.last_finalization_error.code`
* Add support for new values `klarna`, `nz_bank_account`, and `stripe_balance` on enum `QuotePreviewInvoice.payment_settings.payment_method_types`
* Add support for `id` and `text` on `Terminal.Reader.action.collect_inputs.inputs[].selection.choices[]`, `Terminal.Reader.action.collect_inputs.inputs[].selection`, and `Terminal.ReaderCollectInputsParams.inputs[].selection.choices[]`

#### New APIs for Money CardManagement

* Add support for new resources `V2.FinancialAddressCreditSimulation`, `V2.FinancialAddressGeneratedMicrodeposits`, `V2.MoneyManagement.Adjustment`, `V2.MoneyManagement.FinancialAccount`, `V2.MoneyManagement.FinancialAddress`, `V2.MoneyManagement.InboundTransfer`, `V2.MoneyManagement.OutboundPaymentQuote`, `V2.MoneyManagement.OutboundPayment`, `V2.MoneyManagement.OutboundSetupIntent`, `V2.MoneyManagement.OutboundTransfer`, `V2.MoneyManagement.PayoutMethod`, `V2.MoneyManagement.PayoutMethodsBankAccountSpec`, `V2.MoneyManagement.ReceivedCredit`, `V2.MoneyManagement.ReceivedDebit`, `V2.MoneyManagement.TransactionEntry`, and `V2.MoneyManagement.Transaction`
* Add support for `create` method on resource `V2.MoneyManagement.OutboundPaymentQuote`
* Add support for `list` and `retrieve` methods on resources `V2.MoneyManagement.Adjustment`, `V2.MoneyManagement.FinancialAccount`, `V2.MoneyManagement.ReceivedCredit`, `V2.MoneyManagement.ReceivedDebit`, `V2.MoneyManagement.TransactionEntry`, and `V2.MoneyManagement.Transaction`
* Add support for `create`, `list`, and `retrieve` methods on resources `V2.MoneyManagement.FinancialAddress` and `V2.MoneyManagement.InboundTransfer`
* Add support for `cancel`, `create`, `list`, and `retrieve` methods on resources `V2.MoneyManagement.OutboundPayment` and `V2.MoneyManagement.OutboundTransfer`
* Add support for `archive`, `list`, `retrieve`, and `unarchive` methods on resource `V2.MoneyManagement.PayoutMethod`
* Add support for `cancel`, `create`, `list`, `retrieve`, and `update` methods on resource `V2.MoneyManagement.OutboundSetupIntent`
* Add support for `retrieve` method on resource `V2.MoneyManagement.PayoutMethodsBankAccountSpec`
* Add support for new values `account_number`, `fedwire_routing_number`, and `routing_number` on enum `invalid_payment_method.invalid_param`
* Add support for new thin event `V2MoneyManagementFinancialAccountCreatedEvent` with related object `V2.MoneyManagement.FinancialAccount`
* Add support for new thin events `V2MoneyManagementFinancialAddressActivatedEvent` and `V2MoneyManagementFinancialAddressFailedEvent` with related object `V2.MoneyManagement.FinancialAddress`
* Add support for new thin events `V2MoneyManagementInboundTransferAvailableEvent`, `V2MoneyManagementInboundTransferBankDebitFailedEvent`, `V2MoneyManagementInboundTransferBankDebitProcessingEvent`, `V2MoneyManagementInboundTransferBankDebitQueuedEvent`, `V2MoneyManagementInboundTransferBankDebitReturnedEvent`, and `V2MoneyManagementInboundTransferBankDebitSucceededEvent` with related object `V2.MoneyManagement.InboundTransfer`
* Add support for new thin events `V2MoneyManagementOutboundPaymentCanceledEvent`, `V2MoneyManagementOutboundPaymentCreatedEvent`, `V2MoneyManagementOutboundPaymentFailedEvent`, `V2MoneyManagementOutboundPaymentPostedEvent`, and `V2MoneyManagementOutboundPaymentReturnedEvent` with related object `V2.MoneyManagement.OutboundPayment`
* Add support for new thin events `V2MoneyManagementOutboundTransferCanceledEvent`, `V2MoneyManagementOutboundTransferCreatedEvent`, `V2MoneyManagementOutboundTransferFailedEvent`, `V2MoneyManagementOutboundTransferPostedEvent`, and `V2MoneyManagementOutboundTransferReturnedEvent` with related object `V2.MoneyManagement.OutboundTransfer`
* Add support for new thin events `V2MoneyManagementReceivedCreditAvailableEvent`, `V2MoneyManagementReceivedCreditFailedEvent`, `V2MoneyManagementReceivedCreditReturnedEvent`, and `V2MoneyManagementReceivedCreditSucceededEvent` with related object `V2.MoneyManagement.ReceivedCredit`
* Add support for new thin events `V2MoneyManagementReceivedDebitCanceledEvent`, `V2MoneyManagementReceivedDebitFailedEvent`, `V2MoneyManagementReceivedDebitPendingEvent`, `V2MoneyManagementReceivedDebitSucceededEvent`, and `V2MoneyManagementReceivedDebitUpdatedEvent` with related object `V2.MoneyManagement.ReceivedDebit`
* Add support for new error types `AlreadyCanceledError`, `BlockedByStripeError`, `ControlledByDashboardError`, `FeatureNotEnabledError`, `FinancialAccountNotOpenError`, `InsufficientFundsError`, `InvalidPayoutMethodError`, `NotCancelableError`, and `RecipientNotNotifiableError`


#### New APIs for Accounts v2 in private preview
See [SaaS platform payments with subscription billing using Accounts v2](https://docs.stripe.com/connect/accounts-v2/saas-platform-payments-billing)

* Add support for new resources `V2.Core.AccountLink`, `V2.Core.Account`, `V2.Core.Person`, `V2.Core.Vault.GbBankAccount`, `V2.Core.Vault.UsBankAccount`
* Add support for `close`, `create`, `list`, `retrieve`, and `update` methods on resource `V2.Core.Account`
* Add support for `create` method on resource `V2.Core.AccountLink`
* Add support for `acknowledge_confirmation_of_payee`, `archive`, `create`, `initiate_confirmation_of_payee`, and `retrieve` methods on resource `V2.Core.Vault.GbBankAccount`
* Add support for `archive`, `create`, `retrieve`, and `update` methods on resource `V2.Core.Vault.UsBankAccount`
* Add support for new thin events `V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent`, `V2CoreAccountIncludingConfigurationCustomerUpdatedEvent`, `V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent`, `V2CoreAccountIncludingConfigurationMerchantUpdatedEvent`, `V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent`, `V2CoreAccountIncludingConfigurationRecipientUpdatedEvent`, `V2CoreAccountIncludingIdentityUpdatedEvent`, and `V2CoreAccountIncludingRequirementsUpdatedEvent`
* Add support for new thin event `V2CoreAccountLinkCompletedEvent` with related object `V2.Core.AccountLink`
* Add support for new thin events `V2CoreAccountPersonCreatedEvent`, `V2CoreAccountPersonDeletedEvent`, and `V2CoreAccountPersonUpdatedEvent` with related object `V2.Core.Person`

### Changes
* Change `Billing.CreditBalanceSummaryRetrieveParams.customer`, `Billing.CreditBalanceTransactionListParams.customer`, `Billing.CreditGrantCreateParams.customer`, `BillingPortal.SessionCreateParams.customer`, `CustomerSessionCreateParams.customer`, `InvoiceItemCreateParams.customer`, `PaymentMethodAttachParams.customer`, and `SubscriptionCreateParams.customer` to be optional
* Change `CreditNote.refunds` to be required
* Change type of `PaymentAttemptRecord.payment_method_details.custom` and `PaymentRecord.payment_method_details.custom` from `PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCustomDetails | null` to `PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCustomDetails`
* Change `OrderCreateParams.payment.settings.payment_method_options.wechat_pay.client` and `OrderUpdateParams.payment.settings.payment_method_options.wechat_pay.client` to be optional
