---
title: Update generated code for private-preview
pr_url: https://github.com/stripe/stripe-node/pull/2689
is_breaking: true
is_stripe_api_change: true
released_in_version: 22.2.0-alpha.1
---

* Add support for new resources `V2.Commerce.ProductCatalogImport`, `V2.Core.ApprovalRequest`, `V2.Extend.WorkflowRun`, `V2.Extend.Workflow`, `V2.Iam.ActivityLog`, `V2.Network.BusinessProfile`, and `V2.OrchestratedCommerce.Agreement`
* ⚠️ Remove support for resources `V2.Core.WorkflowRun` and `V2.Core.Workflow`
* Add support for `confirm`, `create`, `list`, `retrieve`, and `terminate` methods on resource `V2.OrchestratedCommerce.Agreement`
* Add support for `me` and `retrieve` methods on resource `V2.Network.BusinessProfile`
* Add support for `list` method on resource `V2.Iam.ActivityLog`
* Add support for `list` and `retrieve` methods on resource `V2.Extend.WorkflowRun`
* Add support for `invoke`, `list`, and `retrieve` methods on resource `V2.Extend.Workflow`
* Add support for `cancel`, `execute`, `list`, `retrieve`, and `submit` methods on resource `V2.Core.ApprovalRequest`
* Add support for `create` and `retrieve` methods on resource `V2.Commerce.ProductCatalogImport`
* ⚠️ Remove support for `list` and `retrieve` methods on resource `V2.Core.WorkflowRun`
* ⚠️ Remove support for `invoke`, `list`, and `retrieve` methods on resource `V2.Core.Workflow`
* Add support for `renew_onboarding_link` method on resource `V2.Core.ClaimableSandbox`
* ⚠️ Remove support for `customer` on `SharedPayment.IssuedToken`
* Change type of `SharedPayment.IssuedToken.payment_method` from `string | null` to `string`
* Add support for `bill_management` and `send_money` on `AccountSession.components.bills.features`
* Add support for `gift_card` on `Charge.payment_method_details`, `PaymentAttemptRecord.payment_method_details`, and `PaymentRecord.payment_method_details`
* Add support for `custom_payment_method_types` on `Checkout.SessionCreateParams` and `Checkout.Session`
* Add support for `payment_record` on `Checkout.Session`
* ⚠️ Remove support for `shared_payment_granted_token` on `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntent`, `PaymentMethod`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
* Add support for `payment_method` on `ConfirmationToken.payment_method_preview.sepa_debit.generated_from`, `PaymentMethod.sepa_debit.generated_from`, and `SharedPayment.GrantedToken.payment_method_details.sepa_debit.generated_from`
* ⚠️ Change type of `DelegatedCheckout.RequestedSession.fulfillment_details.fulfillment_options[].type`, `DelegatedCheckout.RequestedSession.fulfillment_details.selected_fulfillment_option.type`, `DelegatedCheckout.RequestedSession.fulfillment_details.selected_fulfillment_option_overrides[].type`, `DelegatedCheckout.RequestedSessionUpdateParams.fulfillment_details.selected_fulfillment_option.type`, and `DelegatedCheckout.RequestedSessionUpdateParams.fulfillment_details.selected_fulfillment_option_overrides[].type` from `string` to `enum('digital'|'shipping')`
* Add support for `return_url` on `DelegatedCheckout.RequestedSessionConfirmParams`
* Add support for `buyer_consents` on `DelegatedCheckout.RequestedSession`
* Add support for `crypto_transactions` on `Issuing.Authorization`, `Issuing.Dispute`, and `Issuing.Transaction`
* Add support for `payment_facilitator_id` and `sub_merchant_id` on `Issuing.Authorization.merchant_data` and `Issuing.Transaction.merchant_data`
* Add support for `identifiers` on `OrderCreateParams.line_items[].product_data`, `OrderUpdateParams.line_items[].product_data`, `ProductCreateParams`, `ProductUpdateParams`, and `Product`
* Add support for `agent_details` on `PaymentIntent`
* Add support for `external_reference` on `PriceCreateParams` and `PriceUpdateParams`
* Add support for `login_succeeded` and `registration_succeeded` on `Radar.AccountEvaluation.events[]` and `Radar.AccountEvaluationUpdateParams`
* Add support for `print_content` on `Terminal.Reader.action`
* ⚠️ Add support for new value `print_content` on enum `Terminal.Reader.action.type`
* ⚠️ Add support for new values `cn_bank_account` and `jp_bank_account` on enum `V2.Core.Account.configuration.recipient.default_outbound_destination.type`
* ⚠️ Add support for new values `bm_crn`, `bo_tin`, `bt_tpn`, `co_nit`, `ec_ruc`, `eg_tin`, `gh_tin`, `gy_tin`, `hn_rtn`, `jm_trn`, `jo_crn`, `ke_pin`, `ky_crn`, `lk_tin`, `mo_tin`, `mv_tin`, `ng_tin`, `pa_ruc`, `ph_tin`, `py_ruc`, `sl_tin`, `sv_nit`, `uy_ruc`, `vg_cn`, and `za_tin` on enum `V2.Core.Account.identity.business_details.id_numbers[].type`
* ⚠️ Add support for new values `bm_pp`, `bo_ci`, `bt_cid`, `eg_tin`, `gh_pin`, `gy_tin`, `hn_rtn`, `jm_trn`, `jo_pin`, `ky_pp`, `lk_nic`, `mo_bir`, `mt_nic`, `mv_tin`, `pa_ruc`, `ph_tin`, `py_ruc`, `si_pin`, `sv_nit`, and `vg_pp` on enums `V2.Core.Account.identity.individual.id_numbers[].type` and `V2.Core.AccountPerson.id_numbers[].type`
* Add support for `app_channel` on `V2.Core.ClaimableSandboxCreateParams` and `V2.Core.ClaimableSandbox`
* Add support for `onboarding_link_details` and `owner_details` on `V2.Core.ClaimableSandbox`
* ⚠️ Remove support for `claim_url` on `V2.Core.ClaimableSandbox`
* ⚠️ Remove support for `owner_account` on `V2.Core.ClaimableSandbox.sandbox_details`
* ⚠️ Add support for new value `live` on enum `V2.Core.ClaimableSandbox.status`
* Add support for `snapshot_event` on `V2.Core.Event`
* ⚠️ Add support for new values `futsu` and `toza` on enums `V2.Core.Vault.GbBankAccount.bank_account_type` and `V2.MoneyManagement.PayoutMethod.bank_account.bank_account_type`
* ⚠️ Change `V2.MoneyManagement.CurrencyConversion.financial_account` to be optional
* Add support for `multiprocessor_settlement` on `V2.MoneyManagement.FinancialAccount`
* ⚠️ Add support for new value `multiprocessor_settlement` on enum `V2.MoneyManagement.FinancialAccount.type`
* Add support for `ca_bank_account` on `V2.MoneyManagement.FinancialAddress.credentials` and `V2.MoneyManagement.ReceivedCredit.bank_transfer`
* ⚠️ Add support for new value `ca_bank_account` on enum `V2.MoneyManagement.FinancialAddress.credentials.type`
* ⚠️ Add support for new value `tempo` on enum `V2.MoneyManagement.PayoutMethod.crypto_wallet.network`
* ⚠️ Add support for new value `ca_bank_account` on enum `V2.MoneyManagement.ReceivedCredit.bank_transfer.origin_type`
* ⚠️ Remove support for value `return` from enums `V2.MoneyManagement.Transaction.category` and `V2.MoneyManagement.TransactionEntry.transaction_details.category`
* Add support for `amount_details` and `payment_details` on `V2.Payments.OffSessionPaymentCaptureParams`, `V2.Payments.OffSessionPaymentCreateParams`, and `V2.Payments.OffSessionPayment`
* Add support for `description` on `V2.Payments.OffSessionPaymentCreateParams` and `V2.Payments.OffSessionPayment`
* Add support for new value `acss` on enum `V2.FinancialAddressCreditSimulationCreditParams.network`
* Add support for `mcc` on `V2.Payments.OffSessionPaymentCreateParams.payment_method_options.card`
* Change `V2.Payments.OffSessionPaymentCreateParams.payment_method_options.card.network_transaction_id` to be optional
* Add support for new values `futsu` and `toza` on enums `V2.Core.Vault.GbBankAccountCreateParams.bank_account_type`, `V2.MoneyManagement.OutboundSetupIntentCreateParams.payout_method_data.bank_account.bank_account_type`, and `V2.MoneyManagement.OutboundSetupIntentUpdateParams.payout_method_data.bank_account.bank_account_type`
* Add support for new value `tempo` on enum `V2.MoneyManagement.OutboundSetupIntentCreateParams.payout_method_data.crypto_wallet.network`
* Add support for new value `credentials.ca_bank_account.account_number` on enums `V2.MoneyManagement.FinancialAddressListParams.include` and `V2.MoneyManagement.FinancialAddressRetrieveParams.include`
* Add support for new value `ca_bank_account` on enum `V2.MoneyManagement.FinancialAddressCreateParams.type`
* Add support for new value `multiprocessor_settlement` on enum `V2.MoneyManagement.FinancialAccountListParams.types`
* Add support for `storage` on `V2.MoneyManagement.FinancialAccountUpdateParams`
* Add support for `fx_quote` on `V2.MoneyManagement.CurrencyConversionCreateParams`
* Change `V2.MoneyManagement.CurrencyConversionCreateParams.financial_account` to be optional
* ⚠️ Add support for `onboarding_link_details` on `V2.Core.ClaimableSandboxCreateParams`
* Change type of `V2.Core.BatchJobCreateParams.endpoint.http_method` from `literal('post')` to `enum('delete'|'post')`
* Add support for new values `bm_crn`, `bo_tin`, `bt_tpn`, `co_nit`, `ec_ruc`, `eg_tin`, `gh_tin`, `gy_tin`, `hn_rtn`, `jm_trn`, `jo_crn`, `ke_pin`, `ky_crn`, `lk_tin`, `mo_tin`, `mv_tin`, `ng_tin`, `pa_ruc`, `ph_tin`, `py_ruc`, `sl_tin`, `sv_nit`, `uy_ruc`, `vg_cn`, and `za_tin` on enums `V2.Core.AccountCreateParams.identity.business_details.id_numbers[].type`, `V2.Core.AccountTokenCreateParams.identity.business_details.id_numbers[].type`, and `V2.Core.AccountUpdateParams.identity.business_details.id_numbers[].type`
* Add support for new values `bm_pp`, `bo_ci`, `bt_cid`, `eg_tin`, `gh_pin`, `gy_tin`, `hn_rtn`, `jm_trn`, `jo_pin`, `ky_pp`, `lk_nic`, `mo_bir`, `mt_nic`, `mv_tin`, `pa_ruc`, `ph_tin`, `py_ruc`, `si_pin`, `sv_nit`, and `vg_pp` on enums `V2.Core.AccountCreateParams.identity.individual.id_numbers[].type`, `V2.Core.AccountPersonCreateParams.id_numbers[].type`, `V2.Core.AccountPersonTokenCreateParams.id_numbers[].type`, `V2.Core.AccountPersonUpdateParams.id_numbers[].type`, `V2.Core.AccountTokenCreateParams.identity.individual.id_numbers[].type`, and `V2.Core.AccountUpdateParams.identity.individual.id_numbers[].type`
* ⚠️ Add support for new value `meter_event_value_too_many_digits` on enums `EventsV1BillingMeterErrorReportTriggeredEvent.reason.error_types[].code` and `EventsV1BillingMeterNoMeterFoundEvent.reason.error_types[].code`
* Add support for `treasury_transaction` on `EventsV2MoneyManagementTransactionCreatedEvent`
* Add support for event notifications `V1AccountApplicationAuthorizedEvent`, `V1AccountApplicationDeauthorizedEvent`, `V1AccountExternalAccountCreatedEvent`, `V1AccountExternalAccountDeletedEvent`, `V1AccountExternalAccountUpdatedEvent`, `V1BillingPortalSessionCreatedEvent`, `V1EntitlementsActiveEntitlementSummaryUpdatedEvent`, `V2CoreHealthMeterEventSummariesDelayedFiringEvent`, and `V2CoreHealthMeterEventSummariesDelayedResolvedEvent`
* Add support for event notification `V1AccountUpdatedEvent` with related object `Account`
* Add support for event notifications `V1ApplicationFeeCreatedEvent` and `V1ApplicationFeeRefundedEvent` with related object `ApplicationFee`
* Add support for event notification `V1ApplicationFeeRefundUpdatedEvent` with related object `FeeRefund`
* Add support for event notification `V1BalanceAvailableEvent` with related object `Balance`
* Add support for event notification `V1BillingAlertTriggeredEvent` with related object `Billing.Alert`
* Add support for event notifications `V1BillingPortalConfigurationCreatedEvent` and `V1BillingPortalConfigurationUpdatedEvent` with related object `BillingPortal.Configuration`
* Add support for event notification `V1CapabilityUpdatedEvent` with related object `Capability`
* Add support for event notification `V1CashBalanceFundsAvailableEvent` with related object `CashBalance`
* Add support for event notifications `V1ChargeCapturedEvent`, `V1ChargeExpiredEvent`, `V1ChargeFailedEvent`, `V1ChargePendingEvent`, `V1ChargeRefundedEvent`, `V1ChargeSucceededEvent`, and `V1ChargeUpdatedEvent` with related object `Charge`
* Add support for event notifications `V1ChargeDisputeClosedEvent`, `V1ChargeDisputeCreatedEvent`, `V1ChargeDisputeFundsReinstatedEvent`, `V1ChargeDisputeFundsWithdrawnEvent`, and `V1ChargeDisputeUpdatedEvent` with related object `Dispute`
* Add support for event notifications `V1ChargeRefundUpdatedEvent`, `V1RefundCreatedEvent`, `V1RefundFailedEvent`, and `V1RefundUpdatedEvent` with related object `Refund`
* Add support for event notifications `V1CheckoutSessionAsyncPaymentFailedEvent`, `V1CheckoutSessionAsyncPaymentSucceededEvent`, `V1CheckoutSessionCompletedEvent`, and `V1CheckoutSessionExpiredEvent` with related object `Checkout.Session`
* Add support for event notifications `V1ClimateOrderCanceledEvent`, `V1ClimateOrderCreatedEvent`, `V1ClimateOrderDelayedEvent`, `V1ClimateOrderDeliveredEvent`, and `V1ClimateOrderProductSubstitutedEvent` with related object `Climate.Order`
* Add support for event notifications `V1ClimateProductCreatedEvent` and `V1ClimateProductPricingUpdatedEvent` with related object `Climate.Product`
* Add support for event notifications `V1CouponCreatedEvent`, `V1CouponDeletedEvent`, and `V1CouponUpdatedEvent` with related object `Coupon`
* Add support for event notifications `V1CreditNoteCreatedEvent`, `V1CreditNoteUpdatedEvent`, and `V1CreditNoteVoidedEvent` with related object `CreditNote`
* Add support for event notifications `V1CustomerCreatedEvent`, `V1CustomerDeletedEvent`, and `V1CustomerUpdatedEvent` with related object `Customer`
* Add support for event notifications `V1CustomerSubscriptionCreatedEvent`, `V1CustomerSubscriptionDeletedEvent`, `V1CustomerSubscriptionPausedEvent`, `V1CustomerSubscriptionPendingUpdateAppliedEvent`, `V1CustomerSubscriptionPendingUpdateExpiredEvent`, `V1CustomerSubscriptionResumedEvent`, `V1CustomerSubscriptionTrialWillEndEvent`, and `V1CustomerSubscriptionUpdatedEvent` with related object `Subscription`
* Add support for event notifications `V1CustomerTaxIdCreatedEvent`, `V1CustomerTaxIdDeletedEvent`, and `V1CustomerTaxIdUpdatedEvent` with related object `TaxId`
* Add support for event notification `V1CustomerCashBalanceTransactionCreatedEvent` with related object `CustomerCashBalanceTransaction`
* Add support for event notification `V1FileCreatedEvent` with related object `File`
* Add support for event notifications `V1FinancialConnectionsAccountCreatedEvent`, `V1FinancialConnectionsAccountDeactivatedEvent`, `V1FinancialConnectionsAccountDisconnectedEvent`, `V1FinancialConnectionsAccountReactivatedEvent`, `V1FinancialConnectionsAccountRefreshedBalanceEvent`, `V1FinancialConnectionsAccountRefreshedOwnershipEvent`, and `V1FinancialConnectionsAccountRefreshedTransactionsEvent` with related object `FinancialConnections.Account`
* Add support for event notifications `V1IdentityVerificationSessionCanceledEvent`, `V1IdentityVerificationSessionCreatedEvent`, `V1IdentityVerificationSessionProcessingEvent`, `V1IdentityVerificationSessionRedactedEvent`, `V1IdentityVerificationSessionRequiresInputEvent`, and `V1IdentityVerificationSessionVerifiedEvent` with related object `Identity.VerificationSession`
* Add support for event notifications `V1InvoiceCreatedEvent`, `V1InvoiceDeletedEvent`, `V1InvoiceFinalizationFailedEvent`, `V1InvoiceFinalizedEvent`, `V1InvoiceMarkedUncollectibleEvent`, `V1InvoiceOverdueEvent`, `V1InvoiceOverpaidEvent`, `V1InvoicePaidEvent`, `V1InvoicePaymentActionRequiredEvent`, `V1InvoicePaymentFailedEvent`, `V1InvoicePaymentSucceededEvent`, `V1InvoiceSentEvent`, `V1InvoiceUpcomingEvent`, `V1InvoiceUpdatedEvent`, `V1InvoiceVoidedEvent`, and `V1InvoiceWillBeDueEvent` with related object `Invoice`
* Add support for event notification `V1InvoicePaymentPaidEvent` with related object `InvoicePayment`
* Add support for event notifications `V1InvoiceitemCreatedEvent` and `V1InvoiceitemDeletedEvent` with related object `InvoiceItem`
* Add support for event notifications `V1IssuingAuthorizationCreatedEvent`, `V1IssuingAuthorizationRequestEvent`, and `V1IssuingAuthorizationUpdatedEvent` with related object `Issuing.Authorization`
* Add support for event notifications `V1IssuingCardCreatedEvent` and `V1IssuingCardUpdatedEvent` with related object `Issuing.Card`
* Add support for event notifications `V1IssuingCardholderCreatedEvent` and `V1IssuingCardholderUpdatedEvent` with related object `Issuing.Cardholder`
* Add support for event notifications `V1IssuingDisputeClosedEvent`, `V1IssuingDisputeCreatedEvent`, `V1IssuingDisputeFundsReinstatedEvent`, `V1IssuingDisputeFundsRescindedEvent`, `V1IssuingDisputeSubmittedEvent`, and `V1IssuingDisputeUpdatedEvent` with related object `Issuing.Dispute`
* Add support for event notifications `V1IssuingPersonalizationDesignActivatedEvent`, `V1IssuingPersonalizationDesignDeactivatedEvent`, `V1IssuingPersonalizationDesignRejectedEvent`, and `V1IssuingPersonalizationDesignUpdatedEvent` with related object `Issuing.PersonalizationDesign`
* Add support for event notifications `V1IssuingTokenCreatedEvent` and `V1IssuingTokenUpdatedEvent` with related object `Issuing.Token`
* Add support for event notifications `V1IssuingTransactionCreatedEvent`, `V1IssuingTransactionPurchaseDetailsReceiptUpdatedEvent`, and `V1IssuingTransactionUpdatedEvent` with related object `Issuing.Transaction`
* Add support for event notification `V1MandateUpdatedEvent` with related object `Mandate`
* Add support for event notifications `V1PaymentIntentAmountCapturableUpdatedEvent`, `V1PaymentIntentCanceledEvent`, `V1PaymentIntentCreatedEvent`, `V1PaymentIntentPartiallyFundedEvent`, `V1PaymentIntentPaymentFailedEvent`, `V1PaymentIntentProcessingEvent`, `V1PaymentIntentRequiresActionEvent`, and `V1PaymentIntentSucceededEvent` with related object `PaymentIntent`
* Add support for event notifications `V1PaymentLinkCreatedEvent` and `V1PaymentLinkUpdatedEvent` with related object `PaymentLink`
* Add support for event notifications `V1PaymentMethodAttachedEvent`, `V1PaymentMethodAutomaticallyUpdatedEvent`, `V1PaymentMethodDetachedEvent`, and `V1PaymentMethodUpdatedEvent` with related object `PaymentMethod`
* Add support for event notifications `V1PayoutCanceledEvent`, `V1PayoutCreatedEvent`, `V1PayoutFailedEvent`, `V1PayoutPaidEvent`, `V1PayoutReconciliationCompletedEvent`, and `V1PayoutUpdatedEvent` with related object `Payout`
* Add support for event notifications `V1PersonCreatedEvent`, `V1PersonDeletedEvent`, and `V1PersonUpdatedEvent` with related object `Person`
* Add support for event notifications `V1PlanCreatedEvent`, `V1PlanDeletedEvent`, and `V1PlanUpdatedEvent` with related object `Plan`
* Add support for event notifications `V1PriceCreatedEvent`, `V1PriceDeletedEvent`, and `V1PriceUpdatedEvent` with related object `Price`
* Add support for event notifications `V1ProductCreatedEvent`, `V1ProductDeletedEvent`, and `V1ProductUpdatedEvent` with related object `Product`
* Add support for event notifications `V1PromotionCodeCreatedEvent` and `V1PromotionCodeUpdatedEvent` with related object `PromotionCode`
* Add support for event notifications `V1QuoteAcceptedEvent`, `V1QuoteCanceledEvent`, `V1QuoteCreatedEvent`, and `V1QuoteFinalizedEvent` with related object `Quote`
* Add support for event notifications `V1RadarEarlyFraudWarningCreatedEvent` and `V1RadarEarlyFraudWarningUpdatedEvent` with related object `Radar.EarlyFraudWarning`
* Add support for event notifications `V1ReviewClosedEvent` and `V1ReviewOpenedEvent` with related object `Review`
* Add support for event notifications `V1SetupIntentCanceledEvent`, `V1SetupIntentCreatedEvent`, `V1SetupIntentRequiresActionEvent`, `V1SetupIntentSetupFailedEvent`, and `V1SetupIntentSucceededEvent` with related object `SetupIntent`
* Add support for event notification `V1SigmaScheduledQueryRunCreatedEvent` with related object `Sigma.ScheduledQueryRun`
* Add support for event notifications `V1SourceCanceledEvent`, `V1SourceChargeableEvent`, `V1SourceFailedEvent`, and `V1SourceRefundAttributesRequiredEvent` with related object `Source`
* Add support for event notifications `V1SubscriptionScheduleAbortedEvent`, `V1SubscriptionScheduleCanceledEvent`, `V1SubscriptionScheduleCompletedEvent`, `V1SubscriptionScheduleCreatedEvent`, `V1SubscriptionScheduleExpiringEvent`, `V1SubscriptionScheduleReleasedEvent`, and `V1SubscriptionScheduleUpdatedEvent` with related object `SubscriptionSchedule`
* Add support for event notification `V1TaxSettingsUpdatedEvent` with related object `Tax.Settings`
* Add support for event notifications `V1TaxRateCreatedEvent` and `V1TaxRateUpdatedEvent` with related object `TaxRate`
* Add support for event notifications `V1TerminalReaderActionFailedEvent`, `V1TerminalReaderActionSucceededEvent`, and `V1TerminalReaderActionUpdatedEvent` with related object `Terminal.Reader`
* Add support for event notifications `V1TestHelpersTestClockAdvancingEvent`, `V1TestHelpersTestClockCreatedEvent`, `V1TestHelpersTestClockDeletedEvent`, `V1TestHelpersTestClockInternalFailureEvent`, and `V1TestHelpersTestClockReadyEvent` with related object `TestHelpers.TestClock`
* Add support for event notifications `V1TopupCanceledEvent`, `V1TopupCreatedEvent`, `V1TopupFailedEvent`, `V1TopupReversedEvent`, and `V1TopupSucceededEvent` with related object `Topup`
* Add support for event notifications `V1TransferCreatedEvent`, `V1TransferReversedEvent`, and `V1TransferUpdatedEvent` with related object `Transfer`
* Add support for event notifications `V2CommerceProductCatalogImportsFailedEvent`, `V2CommerceProductCatalogImportsProcessingEvent`, `V2CommerceProductCatalogImportsSucceededEvent`, and `V2CommerceProductCatalogImportsSucceededWithErrorsEvent` with related object `V2.Commerce.ProductCatalogImport`
* Add support for event notifications `V2CoreApprovalRequestApprovedEvent`, `V2CoreApprovalRequestCanceledEvent`, `V2CoreApprovalRequestFailedEvent`, `V2CoreApprovalRequestRejectedEvent`, and `V2CoreApprovalRequestSucceededEvent` with related object `V2.Core.ApprovalRequest`
* Add support for event notification `V2CoreClaimableSandboxUpdatedEvent` with related object `V2.Core.ClaimableSandbox`
* Add support for event notifications `V2ExtendWorkflowRunFailedEvent`, `V2ExtendWorkflowRunStartedEvent`, and `V2ExtendWorkflowRunSucceededEvent` with related object `V2.Extend.WorkflowRun`
* Add support for event notifications `V2OrchestratedCommerceAgreementConfirmedEvent`, `V2OrchestratedCommerceAgreementCreatedEvent`, `V2OrchestratedCommerceAgreementPartiallyConfirmedEvent`, and `V2OrchestratedCommerceAgreementTerminatedEvent` with related object `V2.OrchestratedCommerce.Agreement`
* ⚠️ Remove support for event notification `V2CoreClaimableSandboxSandboxDetailsOwnerAccountUpdatedEvent` with related object `V2.Core.ClaimableSandbox`
* Add support for error type `FxQuoteExpiredError`
* Add support for error codes `invalid_workflow_input_parameters` and `workflow_not_invokable` on `CannotProceedError`
