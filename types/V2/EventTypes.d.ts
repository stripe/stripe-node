// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe.V2 {
    export type Event =
      | Stripe.Events.V1AccountUpdatedEvent
      | Stripe.Events.V1ApplicationFeeCreatedEvent
      | Stripe.Events.V1ApplicationFeeRefundedEvent
      | Stripe.Events.V1BillingMeterErrorReportTriggeredEvent
      | Stripe.Events.V1BillingMeterNoMeterFoundEvent
      | Stripe.Events.V1BillingPortalConfigurationCreatedEvent
      | Stripe.Events.V1BillingPortalConfigurationUpdatedEvent
      | Stripe.Events.V1CapabilityUpdatedEvent
      | Stripe.Events.V1ChargeCapturedEvent
      | Stripe.Events.V1ChargeDisputeClosedEvent
      | Stripe.Events.V1ChargeDisputeCreatedEvent
      | Stripe.Events.V1ChargeDisputeFundsReinstatedEvent
      | Stripe.Events.V1ChargeDisputeFundsWithdrawnEvent
      | Stripe.Events.V1ChargeDisputeUpdatedEvent
      | Stripe.Events.V1ChargeExpiredEvent
      | Stripe.Events.V1ChargeFailedEvent
      | Stripe.Events.V1ChargePendingEvent
      | Stripe.Events.V1ChargeRefundUpdatedEvent
      | Stripe.Events.V1ChargeRefundedEvent
      | Stripe.Events.V1ChargeSucceededEvent
      | Stripe.Events.V1ChargeUpdatedEvent
      | Stripe.Events.V1CheckoutSessionAsyncPaymentFailedEvent
      | Stripe.Events.V1CheckoutSessionAsyncPaymentSucceededEvent
      | Stripe.Events.V1CheckoutSessionCompletedEvent
      | Stripe.Events.V1CheckoutSessionExpiredEvent
      | Stripe.Events.V1ClimateOrderCanceledEvent
      | Stripe.Events.V1ClimateOrderCreatedEvent
      | Stripe.Events.V1ClimateOrderDelayedEvent
      | Stripe.Events.V1ClimateOrderDeliveredEvent
      | Stripe.Events.V1ClimateOrderProductSubstitutedEvent
      | Stripe.Events.V1ClimateProductCreatedEvent
      | Stripe.Events.V1ClimateProductPricingUpdatedEvent
      | Stripe.Events.V1CouponCreatedEvent
      | Stripe.Events.V1CouponDeletedEvent
      | Stripe.Events.V1CouponUpdatedEvent
      | Stripe.Events.V1CreditNoteCreatedEvent
      | Stripe.Events.V1CreditNoteUpdatedEvent
      | Stripe.Events.V1CreditNoteVoidedEvent
      | Stripe.Events.V1CustomerCreatedEvent
      | Stripe.Events.V1CustomerDeletedEvent
      | Stripe.Events.V1CustomerDiscountCreatedEvent
      | Stripe.Events.V1CustomerDiscountDeletedEvent
      | Stripe.Events.V1CustomerDiscountUpdatedEvent
      | Stripe.Events.V1CustomerSubscriptionCreatedEvent
      | Stripe.Events.V1CustomerSubscriptionDeletedEvent
      | Stripe.Events.V1CustomerSubscriptionPausedEvent
      | Stripe.Events.V1CustomerSubscriptionPendingUpdateAppliedEvent
      | Stripe.Events.V1CustomerSubscriptionPendingUpdateExpiredEvent
      | Stripe.Events.V1CustomerSubscriptionResumedEvent
      | Stripe.Events.V1CustomerSubscriptionTrialWillEndEvent
      | Stripe.Events.V1CustomerSubscriptionUpdatedEvent
      | Stripe.Events.V1CustomerTaxIdCreatedEvent
      | Stripe.Events.V1CustomerTaxIdDeletedEvent
      | Stripe.Events.V1CustomerTaxIdUpdatedEvent
      | Stripe.Events.V1CustomerUpdatedEvent
      | Stripe.Events.V1FileCreatedEvent
      | Stripe.Events.V1FinancialConnectionsAccountCreatedEvent
      | Stripe.Events.V1FinancialConnectionsAccountDeactivatedEvent
      | Stripe.Events.V1FinancialConnectionsAccountDisconnectedEvent
      | Stripe.Events.V1FinancialConnectionsAccountReactivatedEvent
      | Stripe.Events.V1FinancialConnectionsAccountRefreshedBalanceEvent
      | Stripe.Events.V1FinancialConnectionsAccountRefreshedOwnershipEvent
      | Stripe.Events.V1FinancialConnectionsAccountRefreshedTransactionsEvent
      | Stripe.Events.V1IdentityVerificationSessionCanceledEvent
      | Stripe.Events.V1IdentityVerificationSessionCreatedEvent
      | Stripe.Events.V1IdentityVerificationSessionProcessingEvent
      | Stripe.Events.V1IdentityVerificationSessionRedactedEvent
      | Stripe.Events.V1IdentityVerificationSessionRequiresInputEvent
      | Stripe.Events.V1IdentityVerificationSessionVerifiedEvent
      | Stripe.Events.V1InvoiceCreatedEvent
      | Stripe.Events.V1InvoiceDeletedEvent
      | Stripe.Events.V1InvoiceFinalizationFailedEvent
      | Stripe.Events.V1InvoiceFinalizedEvent
      | Stripe.Events.V1InvoiceMarkedUncollectibleEvent
      | Stripe.Events.V1InvoiceOverdueEvent
      | Stripe.Events.V1InvoiceOverpaidEvent
      | Stripe.Events.V1InvoicePaidEvent
      | Stripe.Events.V1InvoicePaymentActionRequiredEvent
      | Stripe.Events.V1InvoicePaymentFailedEvent
      | Stripe.Events.V1InvoicePaymentSucceededEvent
      | Stripe.Events.V1InvoiceSentEvent
      | Stripe.Events.V1InvoiceUpcomingEvent
      | Stripe.Events.V1InvoiceUpdatedEvent
      | Stripe.Events.V1InvoiceVoidedEvent
      | Stripe.Events.V1InvoiceWillBeDueEvent
      | Stripe.Events.V1InvoicePaymentPaidEvent
      | Stripe.Events.V1InvoiceitemCreatedEvent
      | Stripe.Events.V1InvoiceitemDeletedEvent
      | Stripe.Events.V1IssuingAuthorizationCreatedEvent
      | Stripe.Events.V1IssuingAuthorizationRequestEvent
      | Stripe.Events.V1IssuingAuthorizationUpdatedEvent
      | Stripe.Events.V1IssuingCardCreatedEvent
      | Stripe.Events.V1IssuingCardUpdatedEvent
      | Stripe.Events.V1IssuingCardholderCreatedEvent
      | Stripe.Events.V1IssuingCardholderUpdatedEvent
      | Stripe.Events.V1IssuingDisputeClosedEvent
      | Stripe.Events.V1IssuingDisputeCreatedEvent
      | Stripe.Events.V1IssuingDisputeFundsReinstatedEvent
      | Stripe.Events.V1IssuingDisputeFundsRescindedEvent
      | Stripe.Events.V1IssuingDisputeSubmittedEvent
      | Stripe.Events.V1IssuingDisputeUpdatedEvent
      | Stripe.Events.V1IssuingPersonalizationDesignActivatedEvent
      | Stripe.Events.V1IssuingPersonalizationDesignDeactivatedEvent
      | Stripe.Events.V1IssuingPersonalizationDesignRejectedEvent
      | Stripe.Events.V1IssuingPersonalizationDesignUpdatedEvent
      | Stripe.Events.V1IssuingTokenCreatedEvent
      | Stripe.Events.V1IssuingTokenUpdatedEvent
      | Stripe.Events.V1IssuingTransactionCreatedEvent
      | Stripe.Events.V1IssuingTransactionPurchaseDetailsReceiptUpdatedEvent
      | Stripe.Events.V1IssuingTransactionUpdatedEvent
      | Stripe.Events.V1MandateUpdatedEvent
      | Stripe.Events.V1PaymentIntentAmountCapturableUpdatedEvent
      | Stripe.Events.V1PaymentIntentCanceledEvent
      | Stripe.Events.V1PaymentIntentCreatedEvent
      | Stripe.Events.V1PaymentIntentPartiallyFundedEvent
      | Stripe.Events.V1PaymentIntentPaymentFailedEvent
      | Stripe.Events.V1PaymentIntentProcessingEvent
      | Stripe.Events.V1PaymentIntentRequiresActionEvent
      | Stripe.Events.V1PaymentIntentSucceededEvent
      | Stripe.Events.V1PaymentLinkCreatedEvent
      | Stripe.Events.V1PaymentLinkUpdatedEvent
      | Stripe.Events.V1PaymentMethodAttachedEvent
      | Stripe.Events.V1PaymentMethodAutomaticallyUpdatedEvent
      | Stripe.Events.V1PaymentMethodDetachedEvent
      | Stripe.Events.V1PaymentMethodUpdatedEvent
      | Stripe.Events.V1PayoutCanceledEvent
      | Stripe.Events.V1PayoutCreatedEvent
      | Stripe.Events.V1PayoutFailedEvent
      | Stripe.Events.V1PayoutPaidEvent
      | Stripe.Events.V1PayoutReconciliationCompletedEvent
      | Stripe.Events.V1PayoutUpdatedEvent
      | Stripe.Events.V1PersonCreatedEvent
      | Stripe.Events.V1PersonDeletedEvent
      | Stripe.Events.V1PersonUpdatedEvent
      | Stripe.Events.V1PlanCreatedEvent
      | Stripe.Events.V1PlanDeletedEvent
      | Stripe.Events.V1PlanUpdatedEvent
      | Stripe.Events.V1PriceCreatedEvent
      | Stripe.Events.V1PriceDeletedEvent
      | Stripe.Events.V1PriceUpdatedEvent
      | Stripe.Events.V1ProductCreatedEvent
      | Stripe.Events.V1ProductDeletedEvent
      | Stripe.Events.V1ProductUpdatedEvent
      | Stripe.Events.V1PromotionCodeCreatedEvent
      | Stripe.Events.V1PromotionCodeUpdatedEvent
      | Stripe.Events.V1QuoteAcceptedEvent
      | Stripe.Events.V1QuoteCanceledEvent
      | Stripe.Events.V1QuoteCreatedEvent
      | Stripe.Events.V1QuoteFinalizedEvent
      | Stripe.Events.V1RadarEarlyFraudWarningCreatedEvent
      | Stripe.Events.V1RadarEarlyFraudWarningUpdatedEvent
      | Stripe.Events.V1RefundCreatedEvent
      | Stripe.Events.V1RefundFailedEvent
      | Stripe.Events.V1RefundUpdatedEvent
      | Stripe.Events.V1ReviewClosedEvent
      | Stripe.Events.V1ReviewOpenedEvent
      | Stripe.Events.V1SetupIntentCanceledEvent
      | Stripe.Events.V1SetupIntentCreatedEvent
      | Stripe.Events.V1SetupIntentRequiresActionEvent
      | Stripe.Events.V1SetupIntentSetupFailedEvent
      | Stripe.Events.V1SetupIntentSucceededEvent
      | Stripe.Events.V1SigmaScheduledQueryRunCreatedEvent
      | Stripe.Events.V1SourceCanceledEvent
      | Stripe.Events.V1SourceChargeableEvent
      | Stripe.Events.V1SourceFailedEvent
      | Stripe.Events.V1SourceRefundAttributesRequiredEvent
      | Stripe.Events.V1SubscriptionScheduleAbortedEvent
      | Stripe.Events.V1SubscriptionScheduleCanceledEvent
      | Stripe.Events.V1SubscriptionScheduleCompletedEvent
      | Stripe.Events.V1SubscriptionScheduleCreatedEvent
      | Stripe.Events.V1SubscriptionScheduleExpiringEvent
      | Stripe.Events.V1SubscriptionScheduleReleasedEvent
      | Stripe.Events.V1SubscriptionScheduleUpdatedEvent
      | Stripe.Events.V1TaxRateCreatedEvent
      | Stripe.Events.V1TaxRateUpdatedEvent
      | Stripe.Events.V1TerminalReaderActionFailedEvent
      | Stripe.Events.V1TerminalReaderActionSucceededEvent
      | Stripe.Events.V1TerminalReaderActionUpdatedEvent
      | Stripe.Events.V1TestHelpersTestClockAdvancingEvent
      | Stripe.Events.V1TestHelpersTestClockCreatedEvent
      | Stripe.Events.V1TestHelpersTestClockDeletedEvent
      | Stripe.Events.V1TestHelpersTestClockInternalFailureEvent
      | Stripe.Events.V1TestHelpersTestClockReadyEvent
      | Stripe.Events.V1TopupCanceledEvent
      | Stripe.Events.V1TopupCreatedEvent
      | Stripe.Events.V1TopupFailedEvent
      | Stripe.Events.V1TopupReversedEvent
      | Stripe.Events.V1TopupSucceededEvent
      | Stripe.Events.V1TransferCreatedEvent
      | Stripe.Events.V1TransferReversedEvent
      | Stripe.Events.V1TransferUpdatedEvent
      | Stripe.Events.V2BillingBillSettingUpdatedEvent
      | Stripe.Events.V2BillingCadenceBilledEvent
      | Stripe.Events.V2BillingCadenceCanceledEvent
      | Stripe.Events.V2BillingCadenceCreatedEvent
      | Stripe.Events.V2BillingLicenseFeeCreatedEvent
      | Stripe.Events.V2BillingLicenseFeeUpdatedEvent
      | Stripe.Events.V2BillingLicenseFeeVersionCreatedEvent
      | Stripe.Events.V2BillingLicensedItemCreatedEvent
      | Stripe.Events.V2BillingLicensedItemUpdatedEvent
      | Stripe.Events.V2BillingMeteredItemCreatedEvent
      | Stripe.Events.V2BillingMeteredItemUpdatedEvent
      | Stripe.Events.V2BillingPricingPlanCreatedEvent
      | Stripe.Events.V2BillingPricingPlanUpdatedEvent
      | Stripe.Events.V2BillingPricingPlanComponentCreatedEvent
      | Stripe.Events.V2BillingPricingPlanComponentUpdatedEvent
      | Stripe.Events.V2BillingPricingPlanSubscriptionCollectionAwaitingCustomerActionEvent
      | Stripe.Events.V2BillingPricingPlanSubscriptionCollectionCurrentEvent
      | Stripe.Events.V2BillingPricingPlanSubscriptionCollectionPastDueEvent
      | Stripe.Events.V2BillingPricingPlanSubscriptionCollectionPausedEvent
      | Stripe.Events.V2BillingPricingPlanSubscriptionCollectionUnpaidEvent
      | Stripe.Events.V2BillingPricingPlanSubscriptionServicingActivatedEvent
      | Stripe.Events.V2BillingPricingPlanSubscriptionServicingCanceledEvent
      | Stripe.Events.V2BillingPricingPlanSubscriptionServicingPausedEvent
      | Stripe.Events.V2BillingPricingPlanVersionCreatedEvent
      | Stripe.Events.V2BillingRateCardCreatedEvent
      | Stripe.Events.V2BillingRateCardUpdatedEvent
      | Stripe.Events.V2BillingRateCardRateCreatedEvent
      | Stripe.Events.V2BillingRateCardSubscriptionActivatedEvent
      | Stripe.Events.V2BillingRateCardSubscriptionCanceledEvent
      | Stripe.Events.V2BillingRateCardSubscriptionCollectionAwaitingCustomerActionEvent
      | Stripe.Events.V2BillingRateCardSubscriptionCollectionCurrentEvent
      | Stripe.Events.V2BillingRateCardSubscriptionCollectionPastDueEvent
      | Stripe.Events.V2BillingRateCardSubscriptionCollectionPausedEvent
      | Stripe.Events.V2BillingRateCardSubscriptionCollectionUnpaidEvent
      | Stripe.Events.V2BillingRateCardSubscriptionServicingActivatedEvent
      | Stripe.Events.V2BillingRateCardSubscriptionServicingCanceledEvent
      | Stripe.Events.V2BillingRateCardSubscriptionServicingPausedEvent
      | Stripe.Events.V2BillingRateCardVersionCreatedEvent
      | Stripe.Events.V2CoreAccountClosedEvent
      | Stripe.Events.V2CoreAccountCreatedEvent
      | Stripe.Events.V2CoreAccountUpdatedEvent
      | Stripe.Events.V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent
      | Stripe.Events.V2CoreAccountIncludingConfigurationCustomerUpdatedEvent
      | Stripe.Events.V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent
      | Stripe.Events.V2CoreAccountIncludingConfigurationMerchantUpdatedEvent
      | Stripe.Events.V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent
      | Stripe.Events.V2CoreAccountIncludingConfigurationRecipientUpdatedEvent
      | Stripe.Events.V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEvent
      | Stripe.Events.V2CoreAccountIncludingConfigurationStorerUpdatedEvent
      | Stripe.Events.V2CoreAccountIncludingDefaultsUpdatedEvent
      | Stripe.Events.V2CoreAccountIncludingIdentityUpdatedEvent
      | Stripe.Events.V2CoreAccountIncludingRequirementsUpdatedEvent
      | Stripe.Events.V2CoreAccountLinkReturnedEvent
      | Stripe.Events.V2CoreAccountPersonCreatedEvent
      | Stripe.Events.V2CoreAccountPersonDeletedEvent
      | Stripe.Events.V2CoreAccountPersonUpdatedEvent
      | Stripe.Events.V2CoreClaimableSandboxClaimedEvent
      | Stripe.Events.V2CoreClaimableSandboxCreatedEvent
      | Stripe.Events.V2CoreClaimableSandboxExpiredEvent
      | Stripe.Events.V2CoreClaimableSandboxExpiringEvent
      | Stripe.Events.V2CoreClaimableSandboxSandboxDetailsOwnerAccountUpdatedEvent
      | Stripe.Events.V2CoreEventDestinationPingEvent
      | Stripe.Events.V2CoreHealthApiErrorFiringEvent
      | Stripe.Events.V2CoreHealthApiErrorResolvedEvent
      | Stripe.Events.V2CoreHealthApiLatencyFiringEvent
      | Stripe.Events.V2CoreHealthApiLatencyResolvedEvent
      | Stripe.Events.V2CoreHealthAuthorizationRateDropFiringEvent
      | Stripe.Events.V2CoreHealthAuthorizationRateDropResolvedEvent
      | Stripe.Events.V2CoreHealthEventGenerationFailureResolvedEvent
      | Stripe.Events.V2CoreHealthFraudRateIncreasedEvent
      | Stripe.Events.V2CoreHealthIssuingAuthorizationRequestErrorsFiringEvent
      | Stripe.Events.V2CoreHealthIssuingAuthorizationRequestErrorsResolvedEvent
      | Stripe.Events.V2CoreHealthIssuingAuthorizationRequestTimeoutFiringEvent
      | Stripe.Events.V2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEvent
      | Stripe.Events.V2CoreHealthPaymentMethodErrorFiringEvent
      | Stripe.Events.V2CoreHealthPaymentMethodErrorResolvedEvent
      | Stripe.Events.V2CoreHealthTrafficVolumeDropFiringEvent
      | Stripe.Events.V2CoreHealthTrafficVolumeDropResolvedEvent
      | Stripe.Events.V2CoreHealthWebhookLatencyFiringEvent
      | Stripe.Events.V2CoreHealthWebhookLatencyResolvedEvent
      | Stripe.Events.V2MoneyManagementAdjustmentCreatedEvent
      | Stripe.Events.V2MoneyManagementFinancialAccountCreatedEvent
      | Stripe.Events.V2MoneyManagementFinancialAccountUpdatedEvent
      | Stripe.Events.V2MoneyManagementFinancialAddressActivatedEvent
      | Stripe.Events.V2MoneyManagementFinancialAddressFailedEvent
      | Stripe.Events.V2MoneyManagementInboundTransferAvailableEvent
      | Stripe.Events.V2MoneyManagementInboundTransferBankDebitFailedEvent
      | Stripe.Events.V2MoneyManagementInboundTransferBankDebitProcessingEvent
      | Stripe.Events.V2MoneyManagementInboundTransferBankDebitQueuedEvent
      | Stripe.Events.V2MoneyManagementInboundTransferBankDebitReturnedEvent
      | Stripe.Events.V2MoneyManagementInboundTransferBankDebitSucceededEvent
      | Stripe.Events.V2MoneyManagementOutboundPaymentCanceledEvent
      | Stripe.Events.V2MoneyManagementOutboundPaymentCreatedEvent
      | Stripe.Events.V2MoneyManagementOutboundPaymentFailedEvent
      | Stripe.Events.V2MoneyManagementOutboundPaymentPostedEvent
      | Stripe.Events.V2MoneyManagementOutboundPaymentReturnedEvent
      | Stripe.Events.V2MoneyManagementOutboundPaymentUpdatedEvent
      | Stripe.Events.V2MoneyManagementOutboundTransferCanceledEvent
      | Stripe.Events.V2MoneyManagementOutboundTransferCreatedEvent
      | Stripe.Events.V2MoneyManagementOutboundTransferFailedEvent
      | Stripe.Events.V2MoneyManagementOutboundTransferPostedEvent
      | Stripe.Events.V2MoneyManagementOutboundTransferReturnedEvent
      | Stripe.Events.V2MoneyManagementOutboundTransferUpdatedEvent
      | Stripe.Events.V2MoneyManagementPayoutMethodUpdatedEvent
      | Stripe.Events.V2MoneyManagementReceivedCreditAvailableEvent
      | Stripe.Events.V2MoneyManagementReceivedCreditFailedEvent
      | Stripe.Events.V2MoneyManagementReceivedCreditReturnedEvent
      | Stripe.Events.V2MoneyManagementReceivedCreditSucceededEvent
      | Stripe.Events.V2MoneyManagementReceivedDebitCanceledEvent
      | Stripe.Events.V2MoneyManagementReceivedDebitFailedEvent
      | Stripe.Events.V2MoneyManagementReceivedDebitPendingEvent
      | Stripe.Events.V2MoneyManagementReceivedDebitSucceededEvent
      | Stripe.Events.V2MoneyManagementReceivedDebitUpdatedEvent
      | Stripe.Events.V2MoneyManagementRecipientVerificationCreatedEvent
      | Stripe.Events.V2MoneyManagementRecipientVerificationUpdatedEvent
      | Stripe.Events.V2MoneyManagementTransactionCreatedEvent
      | Stripe.Events.V2MoneyManagementTransactionUpdatedEvent
      | Stripe.Events.V2PaymentsOffSessionPaymentAuthorizationAttemptFailedEvent
      | Stripe.Events.V2PaymentsOffSessionPaymentAuthorizationAttemptStartedEvent
      | Stripe.Events.V2PaymentsOffSessionPaymentCanceledEvent
      | Stripe.Events.V2PaymentsOffSessionPaymentCreatedEvent
      | Stripe.Events.V2PaymentsOffSessionPaymentFailedEvent
      | Stripe.Events.V2PaymentsOffSessionPaymentSucceededEvent;

    export type PushedEvent =
      | Stripe.Events.PushedV1AccountUpdatedEvent
      | Stripe.Events.PushedV1ApplicationFeeCreatedEvent
      | Stripe.Events.PushedV1ApplicationFeeRefundedEvent
      | Stripe.Events.PushedV1BillingMeterErrorReportTriggeredEvent
      | Stripe.Events.PushedV1BillingMeterNoMeterFoundEvent
      | Stripe.Events.PushedV1BillingPortalConfigurationCreatedEvent
      | Stripe.Events.PushedV1BillingPortalConfigurationUpdatedEvent
      | Stripe.Events.PushedV1CapabilityUpdatedEvent
      | Stripe.Events.PushedV1ChargeCapturedEvent
      | Stripe.Events.PushedV1ChargeDisputeClosedEvent
      | Stripe.Events.PushedV1ChargeDisputeCreatedEvent
      | Stripe.Events.PushedV1ChargeDisputeFundsReinstatedEvent
      | Stripe.Events.PushedV1ChargeDisputeFundsWithdrawnEvent
      | Stripe.Events.PushedV1ChargeDisputeUpdatedEvent
      | Stripe.Events.PushedV1ChargeExpiredEvent
      | Stripe.Events.PushedV1ChargeFailedEvent
      | Stripe.Events.PushedV1ChargePendingEvent
      | Stripe.Events.PushedV1ChargeRefundUpdatedEvent
      | Stripe.Events.PushedV1ChargeRefundedEvent
      | Stripe.Events.PushedV1ChargeSucceededEvent
      | Stripe.Events.PushedV1ChargeUpdatedEvent
      | Stripe.Events.PushedV1CheckoutSessionAsyncPaymentFailedEvent
      | Stripe.Events.PushedV1CheckoutSessionAsyncPaymentSucceededEvent
      | Stripe.Events.PushedV1CheckoutSessionCompletedEvent
      | Stripe.Events.PushedV1CheckoutSessionExpiredEvent
      | Stripe.Events.PushedV1ClimateOrderCanceledEvent
      | Stripe.Events.PushedV1ClimateOrderCreatedEvent
      | Stripe.Events.PushedV1ClimateOrderDelayedEvent
      | Stripe.Events.PushedV1ClimateOrderDeliveredEvent
      | Stripe.Events.PushedV1ClimateOrderProductSubstitutedEvent
      | Stripe.Events.PushedV1ClimateProductCreatedEvent
      | Stripe.Events.PushedV1ClimateProductPricingUpdatedEvent
      | Stripe.Events.PushedV1CouponCreatedEvent
      | Stripe.Events.PushedV1CouponDeletedEvent
      | Stripe.Events.PushedV1CouponUpdatedEvent
      | Stripe.Events.PushedV1CreditNoteCreatedEvent
      | Stripe.Events.PushedV1CreditNoteUpdatedEvent
      | Stripe.Events.PushedV1CreditNoteVoidedEvent
      | Stripe.Events.PushedV1CustomerCreatedEvent
      | Stripe.Events.PushedV1CustomerDeletedEvent
      | Stripe.Events.PushedV1CustomerDiscountCreatedEvent
      | Stripe.Events.PushedV1CustomerDiscountDeletedEvent
      | Stripe.Events.PushedV1CustomerDiscountUpdatedEvent
      | Stripe.Events.PushedV1CustomerSubscriptionCreatedEvent
      | Stripe.Events.PushedV1CustomerSubscriptionDeletedEvent
      | Stripe.Events.PushedV1CustomerSubscriptionPausedEvent
      | Stripe.Events.PushedV1CustomerSubscriptionPendingUpdateAppliedEvent
      | Stripe.Events.PushedV1CustomerSubscriptionPendingUpdateExpiredEvent
      | Stripe.Events.PushedV1CustomerSubscriptionResumedEvent
      | Stripe.Events.PushedV1CustomerSubscriptionTrialWillEndEvent
      | Stripe.Events.PushedV1CustomerSubscriptionUpdatedEvent
      | Stripe.Events.PushedV1CustomerTaxIdCreatedEvent
      | Stripe.Events.PushedV1CustomerTaxIdDeletedEvent
      | Stripe.Events.PushedV1CustomerTaxIdUpdatedEvent
      | Stripe.Events.PushedV1CustomerUpdatedEvent
      | Stripe.Events.PushedV1FileCreatedEvent
      | Stripe.Events.PushedV1FinancialConnectionsAccountCreatedEvent
      | Stripe.Events.PushedV1FinancialConnectionsAccountDeactivatedEvent
      | Stripe.Events.PushedV1FinancialConnectionsAccountDisconnectedEvent
      | Stripe.Events.PushedV1FinancialConnectionsAccountReactivatedEvent
      | Stripe.Events.PushedV1FinancialConnectionsAccountRefreshedBalanceEvent
      | Stripe.Events.PushedV1FinancialConnectionsAccountRefreshedOwnershipEvent
      | Stripe.Events.PushedV1FinancialConnectionsAccountRefreshedTransactionsEvent
      | Stripe.Events.PushedV1IdentityVerificationSessionCanceledEvent
      | Stripe.Events.PushedV1IdentityVerificationSessionCreatedEvent
      | Stripe.Events.PushedV1IdentityVerificationSessionProcessingEvent
      | Stripe.Events.PushedV1IdentityVerificationSessionRedactedEvent
      | Stripe.Events.PushedV1IdentityVerificationSessionRequiresInputEvent
      | Stripe.Events.PushedV1IdentityVerificationSessionVerifiedEvent
      | Stripe.Events.PushedV1InvoiceCreatedEvent
      | Stripe.Events.PushedV1InvoiceDeletedEvent
      | Stripe.Events.PushedV1InvoiceFinalizationFailedEvent
      | Stripe.Events.PushedV1InvoiceFinalizedEvent
      | Stripe.Events.PushedV1InvoiceMarkedUncollectibleEvent
      | Stripe.Events.PushedV1InvoiceOverdueEvent
      | Stripe.Events.PushedV1InvoiceOverpaidEvent
      | Stripe.Events.PushedV1InvoicePaidEvent
      | Stripe.Events.PushedV1InvoicePaymentActionRequiredEvent
      | Stripe.Events.PushedV1InvoicePaymentFailedEvent
      | Stripe.Events.PushedV1InvoicePaymentSucceededEvent
      | Stripe.Events.PushedV1InvoiceSentEvent
      | Stripe.Events.PushedV1InvoiceUpcomingEvent
      | Stripe.Events.PushedV1InvoiceUpdatedEvent
      | Stripe.Events.PushedV1InvoiceVoidedEvent
      | Stripe.Events.PushedV1InvoiceWillBeDueEvent
      | Stripe.Events.PushedV1InvoicePaymentPaidEvent
      | Stripe.Events.PushedV1InvoiceitemCreatedEvent
      | Stripe.Events.PushedV1InvoiceitemDeletedEvent
      | Stripe.Events.PushedV1IssuingAuthorizationCreatedEvent
      | Stripe.Events.PushedV1IssuingAuthorizationRequestEvent
      | Stripe.Events.PushedV1IssuingAuthorizationUpdatedEvent
      | Stripe.Events.PushedV1IssuingCardCreatedEvent
      | Stripe.Events.PushedV1IssuingCardUpdatedEvent
      | Stripe.Events.PushedV1IssuingCardholderCreatedEvent
      | Stripe.Events.PushedV1IssuingCardholderUpdatedEvent
      | Stripe.Events.PushedV1IssuingDisputeClosedEvent
      | Stripe.Events.PushedV1IssuingDisputeCreatedEvent
      | Stripe.Events.PushedV1IssuingDisputeFundsReinstatedEvent
      | Stripe.Events.PushedV1IssuingDisputeFundsRescindedEvent
      | Stripe.Events.PushedV1IssuingDisputeSubmittedEvent
      | Stripe.Events.PushedV1IssuingDisputeUpdatedEvent
      | Stripe.Events.PushedV1IssuingPersonalizationDesignActivatedEvent
      | Stripe.Events.PushedV1IssuingPersonalizationDesignDeactivatedEvent
      | Stripe.Events.PushedV1IssuingPersonalizationDesignRejectedEvent
      | Stripe.Events.PushedV1IssuingPersonalizationDesignUpdatedEvent
      | Stripe.Events.PushedV1IssuingTokenCreatedEvent
      | Stripe.Events.PushedV1IssuingTokenUpdatedEvent
      | Stripe.Events.PushedV1IssuingTransactionCreatedEvent
      | Stripe.Events.PushedV1IssuingTransactionPurchaseDetailsReceiptUpdatedEvent
      | Stripe.Events.PushedV1IssuingTransactionUpdatedEvent
      | Stripe.Events.PushedV1MandateUpdatedEvent
      | Stripe.Events.PushedV1PaymentIntentAmountCapturableUpdatedEvent
      | Stripe.Events.PushedV1PaymentIntentCanceledEvent
      | Stripe.Events.PushedV1PaymentIntentCreatedEvent
      | Stripe.Events.PushedV1PaymentIntentPartiallyFundedEvent
      | Stripe.Events.PushedV1PaymentIntentPaymentFailedEvent
      | Stripe.Events.PushedV1PaymentIntentProcessingEvent
      | Stripe.Events.PushedV1PaymentIntentRequiresActionEvent
      | Stripe.Events.PushedV1PaymentIntentSucceededEvent
      | Stripe.Events.PushedV1PaymentLinkCreatedEvent
      | Stripe.Events.PushedV1PaymentLinkUpdatedEvent
      | Stripe.Events.PushedV1PaymentMethodAttachedEvent
      | Stripe.Events.PushedV1PaymentMethodAutomaticallyUpdatedEvent
      | Stripe.Events.PushedV1PaymentMethodDetachedEvent
      | Stripe.Events.PushedV1PaymentMethodUpdatedEvent
      | Stripe.Events.PushedV1PayoutCanceledEvent
      | Stripe.Events.PushedV1PayoutCreatedEvent
      | Stripe.Events.PushedV1PayoutFailedEvent
      | Stripe.Events.PushedV1PayoutPaidEvent
      | Stripe.Events.PushedV1PayoutReconciliationCompletedEvent
      | Stripe.Events.PushedV1PayoutUpdatedEvent
      | Stripe.Events.PushedV1PersonCreatedEvent
      | Stripe.Events.PushedV1PersonDeletedEvent
      | Stripe.Events.PushedV1PersonUpdatedEvent
      | Stripe.Events.PushedV1PlanCreatedEvent
      | Stripe.Events.PushedV1PlanDeletedEvent
      | Stripe.Events.PushedV1PlanUpdatedEvent
      | Stripe.Events.PushedV1PriceCreatedEvent
      | Stripe.Events.PushedV1PriceDeletedEvent
      | Stripe.Events.PushedV1PriceUpdatedEvent
      | Stripe.Events.PushedV1ProductCreatedEvent
      | Stripe.Events.PushedV1ProductDeletedEvent
      | Stripe.Events.PushedV1ProductUpdatedEvent
      | Stripe.Events.PushedV1PromotionCodeCreatedEvent
      | Stripe.Events.PushedV1PromotionCodeUpdatedEvent
      | Stripe.Events.PushedV1QuoteAcceptedEvent
      | Stripe.Events.PushedV1QuoteCanceledEvent
      | Stripe.Events.PushedV1QuoteCreatedEvent
      | Stripe.Events.PushedV1QuoteFinalizedEvent
      | Stripe.Events.PushedV1RadarEarlyFraudWarningCreatedEvent
      | Stripe.Events.PushedV1RadarEarlyFraudWarningUpdatedEvent
      | Stripe.Events.PushedV1RefundCreatedEvent
      | Stripe.Events.PushedV1RefundFailedEvent
      | Stripe.Events.PushedV1RefundUpdatedEvent
      | Stripe.Events.PushedV1ReviewClosedEvent
      | Stripe.Events.PushedV1ReviewOpenedEvent
      | Stripe.Events.PushedV1SetupIntentCanceledEvent
      | Stripe.Events.PushedV1SetupIntentCreatedEvent
      | Stripe.Events.PushedV1SetupIntentRequiresActionEvent
      | Stripe.Events.PushedV1SetupIntentSetupFailedEvent
      | Stripe.Events.PushedV1SetupIntentSucceededEvent
      | Stripe.Events.PushedV1SigmaScheduledQueryRunCreatedEvent
      | Stripe.Events.PushedV1SourceCanceledEvent
      | Stripe.Events.PushedV1SourceChargeableEvent
      | Stripe.Events.PushedV1SourceFailedEvent
      | Stripe.Events.PushedV1SourceRefundAttributesRequiredEvent
      | Stripe.Events.PushedV1SubscriptionScheduleAbortedEvent
      | Stripe.Events.PushedV1SubscriptionScheduleCanceledEvent
      | Stripe.Events.PushedV1SubscriptionScheduleCompletedEvent
      | Stripe.Events.PushedV1SubscriptionScheduleCreatedEvent
      | Stripe.Events.PushedV1SubscriptionScheduleExpiringEvent
      | Stripe.Events.PushedV1SubscriptionScheduleReleasedEvent
      | Stripe.Events.PushedV1SubscriptionScheduleUpdatedEvent
      | Stripe.Events.PushedV1TaxRateCreatedEvent
      | Stripe.Events.PushedV1TaxRateUpdatedEvent
      | Stripe.Events.PushedV1TerminalReaderActionFailedEvent
      | Stripe.Events.PushedV1TerminalReaderActionSucceededEvent
      | Stripe.Events.PushedV1TerminalReaderActionUpdatedEvent
      | Stripe.Events.PushedV1TestHelpersTestClockAdvancingEvent
      | Stripe.Events.PushedV1TestHelpersTestClockCreatedEvent
      | Stripe.Events.PushedV1TestHelpersTestClockDeletedEvent
      | Stripe.Events.PushedV1TestHelpersTestClockInternalFailureEvent
      | Stripe.Events.PushedV1TestHelpersTestClockReadyEvent
      | Stripe.Events.PushedV1TopupCanceledEvent
      | Stripe.Events.PushedV1TopupCreatedEvent
      | Stripe.Events.PushedV1TopupFailedEvent
      | Stripe.Events.PushedV1TopupReversedEvent
      | Stripe.Events.PushedV1TopupSucceededEvent
      | Stripe.Events.PushedV1TransferCreatedEvent
      | Stripe.Events.PushedV1TransferReversedEvent
      | Stripe.Events.PushedV1TransferUpdatedEvent
      | Stripe.Events.PushedV2BillingBillSettingUpdatedEvent
      | Stripe.Events.PushedV2BillingCadenceBilledEvent
      | Stripe.Events.PushedV2BillingCadenceCanceledEvent
      | Stripe.Events.PushedV2BillingCadenceCreatedEvent
      | Stripe.Events.PushedV2BillingLicenseFeeCreatedEvent
      | Stripe.Events.PushedV2BillingLicenseFeeUpdatedEvent
      | Stripe.Events.PushedV2BillingLicenseFeeVersionCreatedEvent
      | Stripe.Events.PushedV2BillingLicensedItemCreatedEvent
      | Stripe.Events.PushedV2BillingLicensedItemUpdatedEvent
      | Stripe.Events.PushedV2BillingMeteredItemCreatedEvent
      | Stripe.Events.PushedV2BillingMeteredItemUpdatedEvent
      | Stripe.Events.PushedV2BillingPricingPlanCreatedEvent
      | Stripe.Events.PushedV2BillingPricingPlanUpdatedEvent
      | Stripe.Events.PushedV2BillingPricingPlanComponentCreatedEvent
      | Stripe.Events.PushedV2BillingPricingPlanComponentUpdatedEvent
      | Stripe.Events.PushedV2BillingPricingPlanSubscriptionCollectionAwaitingCustomerActionEvent
      | Stripe.Events.PushedV2BillingPricingPlanSubscriptionCollectionCurrentEvent
      | Stripe.Events.PushedV2BillingPricingPlanSubscriptionCollectionPastDueEvent
      | Stripe.Events.PushedV2BillingPricingPlanSubscriptionCollectionPausedEvent
      | Stripe.Events.PushedV2BillingPricingPlanSubscriptionCollectionUnpaidEvent
      | Stripe.Events.PushedV2BillingPricingPlanSubscriptionServicingActivatedEvent
      | Stripe.Events.PushedV2BillingPricingPlanSubscriptionServicingCanceledEvent
      | Stripe.Events.PushedV2BillingPricingPlanSubscriptionServicingPausedEvent
      | Stripe.Events.PushedV2BillingPricingPlanVersionCreatedEvent
      | Stripe.Events.PushedV2BillingRateCardCreatedEvent
      | Stripe.Events.PushedV2BillingRateCardUpdatedEvent
      | Stripe.Events.PushedV2BillingRateCardRateCreatedEvent
      | Stripe.Events.PushedV2BillingRateCardSubscriptionActivatedEvent
      | Stripe.Events.PushedV2BillingRateCardSubscriptionCanceledEvent
      | Stripe.Events.PushedV2BillingRateCardSubscriptionCollectionAwaitingCustomerActionEvent
      | Stripe.Events.PushedV2BillingRateCardSubscriptionCollectionCurrentEvent
      | Stripe.Events.PushedV2BillingRateCardSubscriptionCollectionPastDueEvent
      | Stripe.Events.PushedV2BillingRateCardSubscriptionCollectionPausedEvent
      | Stripe.Events.PushedV2BillingRateCardSubscriptionCollectionUnpaidEvent
      | Stripe.Events.PushedV2BillingRateCardSubscriptionServicingActivatedEvent
      | Stripe.Events.PushedV2BillingRateCardSubscriptionServicingCanceledEvent
      | Stripe.Events.PushedV2BillingRateCardSubscriptionServicingPausedEvent
      | Stripe.Events.PushedV2BillingRateCardVersionCreatedEvent
      | Stripe.Events.PushedV2CoreAccountClosedEvent
      | Stripe.Events.PushedV2CoreAccountCreatedEvent
      | Stripe.Events.PushedV2CoreAccountUpdatedEvent
      | Stripe.Events.PushedV2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent
      | Stripe.Events.PushedV2CoreAccountIncludingConfigurationCustomerUpdatedEvent
      | Stripe.Events.PushedV2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent
      | Stripe.Events.PushedV2CoreAccountIncludingConfigurationMerchantUpdatedEvent
      | Stripe.Events.PushedV2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent
      | Stripe.Events.PushedV2CoreAccountIncludingConfigurationRecipientUpdatedEvent
      | Stripe.Events.PushedV2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEvent
      | Stripe.Events.PushedV2CoreAccountIncludingConfigurationStorerUpdatedEvent
      | Stripe.Events.PushedV2CoreAccountIncludingDefaultsUpdatedEvent
      | Stripe.Events.PushedV2CoreAccountIncludingIdentityUpdatedEvent
      | Stripe.Events.PushedV2CoreAccountIncludingRequirementsUpdatedEvent
      | Stripe.Events.PushedV2CoreAccountLinkReturnedEvent
      | Stripe.Events.PushedV2CoreAccountPersonCreatedEvent
      | Stripe.Events.PushedV2CoreAccountPersonDeletedEvent
      | Stripe.Events.PushedV2CoreAccountPersonUpdatedEvent
      | Stripe.Events.PushedV2CoreClaimableSandboxClaimedEvent
      | Stripe.Events.PushedV2CoreClaimableSandboxCreatedEvent
      | Stripe.Events.PushedV2CoreClaimableSandboxExpiredEvent
      | Stripe.Events.PushedV2CoreClaimableSandboxExpiringEvent
      | Stripe.Events.PushedV2CoreClaimableSandboxSandboxDetailsOwnerAccountUpdatedEvent
      | Stripe.Events.PushedV2CoreEventDestinationPingEvent
      | Stripe.Events.PushedV2CoreHealthApiErrorFiringEvent
      | Stripe.Events.PushedV2CoreHealthApiErrorResolvedEvent
      | Stripe.Events.PushedV2CoreHealthApiLatencyFiringEvent
      | Stripe.Events.PushedV2CoreHealthApiLatencyResolvedEvent
      | Stripe.Events.PushedV2CoreHealthAuthorizationRateDropFiringEvent
      | Stripe.Events.PushedV2CoreHealthAuthorizationRateDropResolvedEvent
      | Stripe.Events.PushedV2CoreHealthEventGenerationFailureResolvedEvent
      | Stripe.Events.PushedV2CoreHealthFraudRateIncreasedEvent
      | Stripe.Events.PushedV2CoreHealthIssuingAuthorizationRequestErrorsFiringEvent
      | Stripe.Events.PushedV2CoreHealthIssuingAuthorizationRequestErrorsResolvedEvent
      | Stripe.Events.PushedV2CoreHealthIssuingAuthorizationRequestTimeoutFiringEvent
      | Stripe.Events.PushedV2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEvent
      | Stripe.Events.PushedV2CoreHealthPaymentMethodErrorFiringEvent
      | Stripe.Events.PushedV2CoreHealthPaymentMethodErrorResolvedEvent
      | Stripe.Events.PushedV2CoreHealthTrafficVolumeDropFiringEvent
      | Stripe.Events.PushedV2CoreHealthTrafficVolumeDropResolvedEvent
      | Stripe.Events.PushedV2CoreHealthWebhookLatencyFiringEvent
      | Stripe.Events.PushedV2CoreHealthWebhookLatencyResolvedEvent
      | Stripe.Events.PushedV2MoneyManagementAdjustmentCreatedEvent
      | Stripe.Events.PushedV2MoneyManagementFinancialAccountCreatedEvent
      | Stripe.Events.PushedV2MoneyManagementFinancialAccountUpdatedEvent
      | Stripe.Events.PushedV2MoneyManagementFinancialAddressActivatedEvent
      | Stripe.Events.PushedV2MoneyManagementFinancialAddressFailedEvent
      | Stripe.Events.PushedV2MoneyManagementInboundTransferAvailableEvent
      | Stripe.Events.PushedV2MoneyManagementInboundTransferBankDebitFailedEvent
      | Stripe.Events.PushedV2MoneyManagementInboundTransferBankDebitProcessingEvent
      | Stripe.Events.PushedV2MoneyManagementInboundTransferBankDebitQueuedEvent
      | Stripe.Events.PushedV2MoneyManagementInboundTransferBankDebitReturnedEvent
      | Stripe.Events.PushedV2MoneyManagementInboundTransferBankDebitSucceededEvent
      | Stripe.Events.PushedV2MoneyManagementOutboundPaymentCanceledEvent
      | Stripe.Events.PushedV2MoneyManagementOutboundPaymentCreatedEvent
      | Stripe.Events.PushedV2MoneyManagementOutboundPaymentFailedEvent
      | Stripe.Events.PushedV2MoneyManagementOutboundPaymentPostedEvent
      | Stripe.Events.PushedV2MoneyManagementOutboundPaymentReturnedEvent
      | Stripe.Events.PushedV2MoneyManagementOutboundPaymentUpdatedEvent
      | Stripe.Events.PushedV2MoneyManagementOutboundTransferCanceledEvent
      | Stripe.Events.PushedV2MoneyManagementOutboundTransferCreatedEvent
      | Stripe.Events.PushedV2MoneyManagementOutboundTransferFailedEvent
      | Stripe.Events.PushedV2MoneyManagementOutboundTransferPostedEvent
      | Stripe.Events.PushedV2MoneyManagementOutboundTransferReturnedEvent
      | Stripe.Events.PushedV2MoneyManagementOutboundTransferUpdatedEvent
      | Stripe.Events.PushedV2MoneyManagementPayoutMethodUpdatedEvent
      | Stripe.Events.PushedV2MoneyManagementReceivedCreditAvailableEvent
      | Stripe.Events.PushedV2MoneyManagementReceivedCreditFailedEvent
      | Stripe.Events.PushedV2MoneyManagementReceivedCreditReturnedEvent
      | Stripe.Events.PushedV2MoneyManagementReceivedCreditSucceededEvent
      | Stripe.Events.PushedV2MoneyManagementReceivedDebitCanceledEvent
      | Stripe.Events.PushedV2MoneyManagementReceivedDebitFailedEvent
      | Stripe.Events.PushedV2MoneyManagementReceivedDebitPendingEvent
      | Stripe.Events.PushedV2MoneyManagementReceivedDebitSucceededEvent
      | Stripe.Events.PushedV2MoneyManagementReceivedDebitUpdatedEvent
      | Stripe.Events.PushedV2MoneyManagementRecipientVerificationCreatedEvent
      | Stripe.Events.PushedV2MoneyManagementRecipientVerificationUpdatedEvent
      | Stripe.Events.PushedV2MoneyManagementTransactionCreatedEvent
      | Stripe.Events.PushedV2MoneyManagementTransactionUpdatedEvent
      | Stripe.Events.PushedV2PaymentsOffSessionPaymentAuthorizationAttemptFailedEvent
      | Stripe.Events.PushedV2PaymentsOffSessionPaymentAuthorizationAttemptStartedEvent
      | Stripe.Events.PushedV2PaymentsOffSessionPaymentCanceledEvent
      | Stripe.Events.PushedV2PaymentsOffSessionPaymentCreatedEvent
      | Stripe.Events.PushedV2PaymentsOffSessionPaymentFailedEvent
      | Stripe.Events.PushedV2PaymentsOffSessionPaymentSucceededEvent;
  }

  namespace Stripe.Events {
    /**
     * Occurs whenever an account status or property has changed.
     */
    export interface V1AccountUpdatedEvent extends V2.EventBase {
      type: 'v1.account.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Account>;
    }
    export interface PushedV1AccountUpdatedEvent extends V2.EventBase {
      type: 'v1.account.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Account>;
      pull(): Promise<V1AccountUpdatedEvent>;
    }

    /**
     * Occurs whenever an application fee is created on a charge.
     */
    export interface V1ApplicationFeeCreatedEvent extends V2.EventBase {
      type: 'v1.application_fee.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<ApplicationFee>;
    }
    export interface PushedV1ApplicationFeeCreatedEvent extends V2.EventBase {
      type: 'v1.application_fee.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<ApplicationFee>;
      pull(): Promise<V1ApplicationFeeCreatedEvent>;
    }

    /**
     * Occurs whenever an application fee is refunded, whether from refunding a charge or from [refunding the application fee directly](#fee_refunds). This includes partial refunds.
     */
    export interface V1ApplicationFeeRefundedEvent extends V2.EventBase {
      type: 'v1.application_fee.refunded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<ApplicationFee>;
    }
    export interface PushedV1ApplicationFeeRefundedEvent extends V2.EventBase {
      type: 'v1.application_fee.refunded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<ApplicationFee>;
      pull(): Promise<V1ApplicationFeeRefundedEvent>;
    }

    /**
     * Occurs when a Meter has invalid async usage events.
     */
    export interface V1BillingMeterErrorReportTriggeredEvent
      extends V2.EventBase {
      type: 'v1.billing.meter.error_report_triggered';
      // Retrieves data specific to this event.
      data: V1BillingMeterErrorReportTriggeredEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Billing.Meter>;
    }
    export interface PushedV1BillingMeterErrorReportTriggeredEvent
      extends V2.EventBase {
      type: 'v1.billing.meter.error_report_triggered';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Billing.Meter>;
      pull(): Promise<V1BillingMeterErrorReportTriggeredEvent>;
    }

    namespace V1BillingMeterErrorReportTriggeredEvent {
      export interface Data {
        /**
         * Extra field included in the event's `data` when fetched from /v2/events.
         */
        developer_message_summary: string;

        /**
         * This contains information about why meter error happens.
         */
        reason: Data.Reason;

        /**
         * The end of the window that is encapsulated by this summary.
         */
        validation_end: string;

        /**
         * The start of the window that is encapsulated by this summary.
         */
        validation_start: string;
      }

      namespace Data {
        export interface Reason {
          /**
           * The total error count within this window.
           */
          error_count: number;

          /**
           * The error details.
           */
          error_types: Array<Reason.ErrorType>;
        }

        namespace Reason {
          export interface ErrorType {
            /**
             * Open Enum.
             */
            code: ErrorType.Code;

            /**
             * The number of errors of this type.
             */
            error_count: number;

            /**
             * A list of sample errors of this type.
             */
            sample_errors: Array<ErrorType.SampleError>;
          }

          namespace ErrorType {
            export type Code =
              | 'archived_meter'
              | 'meter_event_customer_not_found'
              | 'meter_event_dimension_count_too_high'
              | 'meter_event_invalid_value'
              | 'meter_event_no_customer_defined'
              | 'missing_dimension_payload_keys'
              | 'no_meter'
              | 'timestamp_in_future'
              | 'timestamp_too_far_in_past';

            export interface SampleError {
              /**
               * The error message.
               */
              error_message: string;

              /**
               * The request causes the error.
               */
              request: SampleError.Request;
            }

            namespace SampleError {
              export interface Request {
                /**
                 * The request idempotency key.
                 */
                identifier: string;
              }
            }
          }
        }
      }
    }

    /**
     * Occurs when a Meter's id is missing or invalid in async usage events.
     */
    export interface V1BillingMeterNoMeterFoundEvent extends V2.EventBase {
      type: 'v1.billing.meter.no_meter_found';
      // Retrieves data specific to this event.
      data: V1BillingMeterNoMeterFoundEvent.Data;
    }
    export interface PushedV1BillingMeterNoMeterFoundEvent
      extends V2.EventBase {
      type: 'v1.billing.meter.no_meter_found';
      pull(): Promise<V1BillingMeterNoMeterFoundEvent>;
    }

    namespace V1BillingMeterNoMeterFoundEvent {
      export interface Data {
        /**
         * Extra field included in the event's `data` when fetched from /v2/events.
         */
        developer_message_summary: string;

        /**
         * This contains information about why meter error happens.
         */
        reason: Data.Reason;

        /**
         * The end of the window that is encapsulated by this summary.
         */
        validation_end: string;

        /**
         * The start of the window that is encapsulated by this summary.
         */
        validation_start: string;
      }

      namespace Data {
        export interface Reason {
          /**
           * The total error count within this window.
           */
          error_count: number;

          /**
           * The error details.
           */
          error_types: Array<Reason.ErrorType>;
        }

        namespace Reason {
          export interface ErrorType {
            /**
             * Open Enum.
             */
            code: ErrorType.Code;

            /**
             * The number of errors of this type.
             */
            error_count: number;

            /**
             * A list of sample errors of this type.
             */
            sample_errors: Array<ErrorType.SampleError>;
          }

          namespace ErrorType {
            export type Code =
              | 'archived_meter'
              | 'meter_event_customer_not_found'
              | 'meter_event_dimension_count_too_high'
              | 'meter_event_invalid_value'
              | 'meter_event_no_customer_defined'
              | 'missing_dimension_payload_keys'
              | 'no_meter'
              | 'timestamp_in_future'
              | 'timestamp_too_far_in_past';

            export interface SampleError {
              /**
               * The error message.
               */
              error_message: string;

              /**
               * The request causes the error.
               */
              request: SampleError.Request;
            }

            namespace SampleError {
              export interface Request {
                /**
                 * The request idempotency key.
                 */
                identifier: string;
              }
            }
          }
        }
      }
    }

    /**
     * Occurs whenever a portal configuration is created.
     */
    export interface V1BillingPortalConfigurationCreatedEvent
      extends V2.EventBase {
      type: 'v1.billing_portal.configuration.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<BillingPortal.Configuration>;
    }
    export interface PushedV1BillingPortalConfigurationCreatedEvent
      extends V2.EventBase {
      type: 'v1.billing_portal.configuration.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<BillingPortal.Configuration>;
      pull(): Promise<V1BillingPortalConfigurationCreatedEvent>;
    }

    /**
     * Occurs whenever a portal configuration is updated.
     */
    export interface V1BillingPortalConfigurationUpdatedEvent
      extends V2.EventBase {
      type: 'v1.billing_portal.configuration.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<BillingPortal.Configuration>;
    }
    export interface PushedV1BillingPortalConfigurationUpdatedEvent
      extends V2.EventBase {
      type: 'v1.billing_portal.configuration.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<BillingPortal.Configuration>;
      pull(): Promise<V1BillingPortalConfigurationUpdatedEvent>;
    }

    /**
     * Occurs whenever a capability has new requirements or a new status.
     */
    export interface V1CapabilityUpdatedEvent extends V2.EventBase {
      type: 'v1.capability.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Capability>;
    }
    export interface PushedV1CapabilityUpdatedEvent extends V2.EventBase {
      type: 'v1.capability.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Capability>;
      pull(): Promise<V1CapabilityUpdatedEvent>;
    }

    /**
     * Occurs whenever a previously uncaptured charge is captured.
     */
    export interface V1ChargeCapturedEvent extends V2.EventBase {
      type: 'v1.charge.captured';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Charge>;
    }
    export interface PushedV1ChargeCapturedEvent extends V2.EventBase {
      type: 'v1.charge.captured';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Charge>;
      pull(): Promise<V1ChargeCapturedEvent>;
    }

    /**
     * Occurs when a dispute is closed and the dispute status changes to `lost`, `warning_closed`, or `won`.
     */
    export interface V1ChargeDisputeClosedEvent extends V2.EventBase {
      type: 'v1.charge.dispute.closed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Dispute>;
    }
    export interface PushedV1ChargeDisputeClosedEvent extends V2.EventBase {
      type: 'v1.charge.dispute.closed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Dispute>;
      pull(): Promise<V1ChargeDisputeClosedEvent>;
    }

    /**
     * Occurs whenever a customer disputes a charge with their bank.
     */
    export interface V1ChargeDisputeCreatedEvent extends V2.EventBase {
      type: 'v1.charge.dispute.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Dispute>;
    }
    export interface PushedV1ChargeDisputeCreatedEvent extends V2.EventBase {
      type: 'v1.charge.dispute.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Dispute>;
      pull(): Promise<V1ChargeDisputeCreatedEvent>;
    }

    /**
     * Occurs when funds are reinstated to your account after a dispute is closed. This includes [partially refunded payments](https://docs.stripe.com/disputes#disputes-on-partially-refunded-payments).
     */
    export interface V1ChargeDisputeFundsReinstatedEvent extends V2.EventBase {
      type: 'v1.charge.dispute.funds_reinstated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Dispute>;
    }
    export interface PushedV1ChargeDisputeFundsReinstatedEvent
      extends V2.EventBase {
      type: 'v1.charge.dispute.funds_reinstated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Dispute>;
      pull(): Promise<V1ChargeDisputeFundsReinstatedEvent>;
    }

    /**
     * Occurs when funds are removed from your account due to a dispute.
     */
    export interface V1ChargeDisputeFundsWithdrawnEvent extends V2.EventBase {
      type: 'v1.charge.dispute.funds_withdrawn';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Dispute>;
    }
    export interface PushedV1ChargeDisputeFundsWithdrawnEvent
      extends V2.EventBase {
      type: 'v1.charge.dispute.funds_withdrawn';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Dispute>;
      pull(): Promise<V1ChargeDisputeFundsWithdrawnEvent>;
    }

    /**
     * Occurs when the dispute is updated (usually with evidence).
     */
    export interface V1ChargeDisputeUpdatedEvent extends V2.EventBase {
      type: 'v1.charge.dispute.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Dispute>;
    }
    export interface PushedV1ChargeDisputeUpdatedEvent extends V2.EventBase {
      type: 'v1.charge.dispute.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Dispute>;
      pull(): Promise<V1ChargeDisputeUpdatedEvent>;
    }

    /**
     * Occurs whenever an uncaptured charge expires.
     */
    export interface V1ChargeExpiredEvent extends V2.EventBase {
      type: 'v1.charge.expired';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Charge>;
    }
    export interface PushedV1ChargeExpiredEvent extends V2.EventBase {
      type: 'v1.charge.expired';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Charge>;
      pull(): Promise<V1ChargeExpiredEvent>;
    }

    /**
     * Occurs whenever a failed charge attempt occurs.
     */
    export interface V1ChargeFailedEvent extends V2.EventBase {
      type: 'v1.charge.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Charge>;
    }
    export interface PushedV1ChargeFailedEvent extends V2.EventBase {
      type: 'v1.charge.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Charge>;
      pull(): Promise<V1ChargeFailedEvent>;
    }

    /**
     * Occurs whenever a pending charge is created.
     */
    export interface V1ChargePendingEvent extends V2.EventBase {
      type: 'v1.charge.pending';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Charge>;
    }
    export interface PushedV1ChargePendingEvent extends V2.EventBase {
      type: 'v1.charge.pending';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Charge>;
      pull(): Promise<V1ChargePendingEvent>;
    }

    /**
     * Occurs whenever a refund is updated on selected payment methods. For updates on all refunds, listen to `refund.updated` instead.
     */
    export interface V1ChargeRefundUpdatedEvent extends V2.EventBase {
      type: 'v1.charge.refund.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Refund>;
    }
    export interface PushedV1ChargeRefundUpdatedEvent extends V2.EventBase {
      type: 'v1.charge.refund.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Refund>;
      pull(): Promise<V1ChargeRefundUpdatedEvent>;
    }

    /**
     * Occurs whenever a charge is refunded, including partial refunds. Listen to `refund.created` for information about the refund.
     */
    export interface V1ChargeRefundedEvent extends V2.EventBase {
      type: 'v1.charge.refunded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Charge>;
    }
    export interface PushedV1ChargeRefundedEvent extends V2.EventBase {
      type: 'v1.charge.refunded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Charge>;
      pull(): Promise<V1ChargeRefundedEvent>;
    }

    /**
     * Occurs whenever a charge is successful.
     */
    export interface V1ChargeSucceededEvent extends V2.EventBase {
      type: 'v1.charge.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Charge>;
    }
    export interface PushedV1ChargeSucceededEvent extends V2.EventBase {
      type: 'v1.charge.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Charge>;
      pull(): Promise<V1ChargeSucceededEvent>;
    }

    /**
     * Occurs whenever a charge description or metadata is updated, or upon an asynchronous capture.
     */
    export interface V1ChargeUpdatedEvent extends V2.EventBase {
      type: 'v1.charge.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Charge>;
    }
    export interface PushedV1ChargeUpdatedEvent extends V2.EventBase {
      type: 'v1.charge.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Charge>;
      pull(): Promise<V1ChargeUpdatedEvent>;
    }

    /**
     * Occurs when a payment intent using a delayed payment method fails.
     */
    export interface V1CheckoutSessionAsyncPaymentFailedEvent
      extends V2.EventBase {
      type: 'v1.checkout.session.async_payment_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Checkout.Session>;
    }
    export interface PushedV1CheckoutSessionAsyncPaymentFailedEvent
      extends V2.EventBase {
      type: 'v1.checkout.session.async_payment_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Checkout.Session>;
      pull(): Promise<V1CheckoutSessionAsyncPaymentFailedEvent>;
    }

    /**
     * Occurs when a payment intent using a delayed payment method finally succeeds.
     */
    export interface V1CheckoutSessionAsyncPaymentSucceededEvent
      extends V2.EventBase {
      type: 'v1.checkout.session.async_payment_succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Checkout.Session>;
    }
    export interface PushedV1CheckoutSessionAsyncPaymentSucceededEvent
      extends V2.EventBase {
      type: 'v1.checkout.session.async_payment_succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Checkout.Session>;
      pull(): Promise<V1CheckoutSessionAsyncPaymentSucceededEvent>;
    }

    /**
     * Occurs when a Checkout Session has been successfully completed.
     */
    export interface V1CheckoutSessionCompletedEvent extends V2.EventBase {
      type: 'v1.checkout.session.completed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Checkout.Session>;
    }
    export interface PushedV1CheckoutSessionCompletedEvent
      extends V2.EventBase {
      type: 'v1.checkout.session.completed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Checkout.Session>;
      pull(): Promise<V1CheckoutSessionCompletedEvent>;
    }

    /**
     * Occurs when a Checkout Session is expired.
     */
    export interface V1CheckoutSessionExpiredEvent extends V2.EventBase {
      type: 'v1.checkout.session.expired';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Checkout.Session>;
    }
    export interface PushedV1CheckoutSessionExpiredEvent extends V2.EventBase {
      type: 'v1.checkout.session.expired';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Checkout.Session>;
      pull(): Promise<V1CheckoutSessionExpiredEvent>;
    }

    /**
     * Occurs when a Climate order is canceled.
     */
    export interface V1ClimateOrderCanceledEvent extends V2.EventBase {
      type: 'v1.climate.order.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Climate.Order>;
    }
    export interface PushedV1ClimateOrderCanceledEvent extends V2.EventBase {
      type: 'v1.climate.order.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Climate.Order>;
      pull(): Promise<V1ClimateOrderCanceledEvent>;
    }

    /**
     * Occurs when a Climate order is created.
     */
    export interface V1ClimateOrderCreatedEvent extends V2.EventBase {
      type: 'v1.climate.order.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Climate.Order>;
    }
    export interface PushedV1ClimateOrderCreatedEvent extends V2.EventBase {
      type: 'v1.climate.order.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Climate.Order>;
      pull(): Promise<V1ClimateOrderCreatedEvent>;
    }

    /**
     * Occurs when a Climate order is delayed.
     */
    export interface V1ClimateOrderDelayedEvent extends V2.EventBase {
      type: 'v1.climate.order.delayed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Climate.Order>;
    }
    export interface PushedV1ClimateOrderDelayedEvent extends V2.EventBase {
      type: 'v1.climate.order.delayed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Climate.Order>;
      pull(): Promise<V1ClimateOrderDelayedEvent>;
    }

    /**
     * Occurs when a Climate order is delivered.
     */
    export interface V1ClimateOrderDeliveredEvent extends V2.EventBase {
      type: 'v1.climate.order.delivered';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Climate.Order>;
    }
    export interface PushedV1ClimateOrderDeliveredEvent extends V2.EventBase {
      type: 'v1.climate.order.delivered';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Climate.Order>;
      pull(): Promise<V1ClimateOrderDeliveredEvent>;
    }

    /**
     * Occurs when a Climate order's product is substituted for another.
     */
    export interface V1ClimateOrderProductSubstitutedEvent
      extends V2.EventBase {
      type: 'v1.climate.order.product_substituted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Climate.Order>;
    }
    export interface PushedV1ClimateOrderProductSubstitutedEvent
      extends V2.EventBase {
      type: 'v1.climate.order.product_substituted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Climate.Order>;
      pull(): Promise<V1ClimateOrderProductSubstitutedEvent>;
    }

    /**
     * Occurs when a Climate product is created.
     */
    export interface V1ClimateProductCreatedEvent extends V2.EventBase {
      type: 'v1.climate.product.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Climate.Product>;
    }
    export interface PushedV1ClimateProductCreatedEvent extends V2.EventBase {
      type: 'v1.climate.product.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Climate.Product>;
      pull(): Promise<V1ClimateProductCreatedEvent>;
    }

    /**
     * Occurs when a Climate product is updated.
     */
    export interface V1ClimateProductPricingUpdatedEvent extends V2.EventBase {
      type: 'v1.climate.product.pricing_updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Climate.Product>;
    }
    export interface PushedV1ClimateProductPricingUpdatedEvent
      extends V2.EventBase {
      type: 'v1.climate.product.pricing_updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Climate.Product>;
      pull(): Promise<V1ClimateProductPricingUpdatedEvent>;
    }

    /**
     * Occurs whenever a coupon is created.
     */
    export interface V1CouponCreatedEvent extends V2.EventBase {
      type: 'v1.coupon.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Coupon>;
    }
    export interface PushedV1CouponCreatedEvent extends V2.EventBase {
      type: 'v1.coupon.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Coupon>;
      pull(): Promise<V1CouponCreatedEvent>;
    }

    /**
     * Occurs whenever a coupon is deleted.
     */
    export interface V1CouponDeletedEvent extends V2.EventBase {
      type: 'v1.coupon.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Coupon>;
    }
    export interface PushedV1CouponDeletedEvent extends V2.EventBase {
      type: 'v1.coupon.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Coupon>;
      pull(): Promise<V1CouponDeletedEvent>;
    }

    /**
     * Occurs whenever a coupon is updated.
     */
    export interface V1CouponUpdatedEvent extends V2.EventBase {
      type: 'v1.coupon.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Coupon>;
    }
    export interface PushedV1CouponUpdatedEvent extends V2.EventBase {
      type: 'v1.coupon.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Coupon>;
      pull(): Promise<V1CouponUpdatedEvent>;
    }

    /**
     * Occurs whenever a credit note is created.
     */
    export interface V1CreditNoteCreatedEvent extends V2.EventBase {
      type: 'v1.credit_note.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<CreditNote>;
    }
    export interface PushedV1CreditNoteCreatedEvent extends V2.EventBase {
      type: 'v1.credit_note.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<CreditNote>;
      pull(): Promise<V1CreditNoteCreatedEvent>;
    }

    /**
     * Occurs whenever a credit note is updated.
     */
    export interface V1CreditNoteUpdatedEvent extends V2.EventBase {
      type: 'v1.credit_note.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<CreditNote>;
    }
    export interface PushedV1CreditNoteUpdatedEvent extends V2.EventBase {
      type: 'v1.credit_note.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<CreditNote>;
      pull(): Promise<V1CreditNoteUpdatedEvent>;
    }

    /**
     * Occurs whenever a credit note is voided.
     */
    export interface V1CreditNoteVoidedEvent extends V2.EventBase {
      type: 'v1.credit_note.voided';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<CreditNote>;
    }
    export interface PushedV1CreditNoteVoidedEvent extends V2.EventBase {
      type: 'v1.credit_note.voided';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<CreditNote>;
      pull(): Promise<V1CreditNoteVoidedEvent>;
    }

    /**
     * Occurs whenever a new customer is created.
     */
    export interface V1CustomerCreatedEvent extends V2.EventBase {
      type: 'v1.customer.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Customer>;
    }
    export interface PushedV1CustomerCreatedEvent extends V2.EventBase {
      type: 'v1.customer.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Customer>;
      pull(): Promise<V1CustomerCreatedEvent>;
    }

    /**
     * Occurs whenever a customer is deleted.
     */
    export interface V1CustomerDeletedEvent extends V2.EventBase {
      type: 'v1.customer.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Customer>;
    }
    export interface PushedV1CustomerDeletedEvent extends V2.EventBase {
      type: 'v1.customer.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Customer>;
      pull(): Promise<V1CustomerDeletedEvent>;
    }

    /**
     * Occurs whenever a coupon is attached to a customer.
     */
    export interface V1CustomerDiscountCreatedEvent extends V2.EventBase {
      type: 'v1.customer.discount.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Discount>;
    }
    export interface PushedV1CustomerDiscountCreatedEvent extends V2.EventBase {
      type: 'v1.customer.discount.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Discount>;
      pull(): Promise<V1CustomerDiscountCreatedEvent>;
    }

    /**
     * Occurs whenever a coupon is removed from a customer.
     */
    export interface V1CustomerDiscountDeletedEvent extends V2.EventBase {
      type: 'v1.customer.discount.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Discount>;
    }
    export interface PushedV1CustomerDiscountDeletedEvent extends V2.EventBase {
      type: 'v1.customer.discount.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Discount>;
      pull(): Promise<V1CustomerDiscountDeletedEvent>;
    }

    /**
     * Occurs whenever a customer is switched from one coupon to another.
     */
    export interface V1CustomerDiscountUpdatedEvent extends V2.EventBase {
      type: 'v1.customer.discount.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Discount>;
    }
    export interface PushedV1CustomerDiscountUpdatedEvent extends V2.EventBase {
      type: 'v1.customer.discount.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Discount>;
      pull(): Promise<V1CustomerDiscountUpdatedEvent>;
    }

    /**
     * Occurs whenever a customer is signed up for a new plan.
     */
    export interface V1CustomerSubscriptionCreatedEvent extends V2.EventBase {
      type: 'v1.customer.subscription.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Subscription>;
    }
    export interface PushedV1CustomerSubscriptionCreatedEvent
      extends V2.EventBase {
      type: 'v1.customer.subscription.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Subscription>;
      pull(): Promise<V1CustomerSubscriptionCreatedEvent>;
    }

    /**
     * Occurs whenever a customer's subscription ends.
     */
    export interface V1CustomerSubscriptionDeletedEvent extends V2.EventBase {
      type: 'v1.customer.subscription.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Subscription>;
    }
    export interface PushedV1CustomerSubscriptionDeletedEvent
      extends V2.EventBase {
      type: 'v1.customer.subscription.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Subscription>;
      pull(): Promise<V1CustomerSubscriptionDeletedEvent>;
    }

    /**
     * Occurs whenever a customer's subscription is paused. Only applies when subscriptions enter `status=paused`, not when [payment collection](https://docs.stripe.com/billing/subscriptions/pause) is paused.
     */
    export interface V1CustomerSubscriptionPausedEvent extends V2.EventBase {
      type: 'v1.customer.subscription.paused';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Subscription>;
    }
    export interface PushedV1CustomerSubscriptionPausedEvent
      extends V2.EventBase {
      type: 'v1.customer.subscription.paused';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Subscription>;
      pull(): Promise<V1CustomerSubscriptionPausedEvent>;
    }

    /**
     * Occurs whenever a customer's subscription's pending update is applied, and the subscription is updated.
     */
    export interface V1CustomerSubscriptionPendingUpdateAppliedEvent
      extends V2.EventBase {
      type: 'v1.customer.subscription.pending_update_applied';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Subscription>;
    }
    export interface PushedV1CustomerSubscriptionPendingUpdateAppliedEvent
      extends V2.EventBase {
      type: 'v1.customer.subscription.pending_update_applied';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Subscription>;
      pull(): Promise<V1CustomerSubscriptionPendingUpdateAppliedEvent>;
    }

    /**
     * Occurs whenever a customer's subscription's pending update expires before the related invoice is paid.
     */
    export interface V1CustomerSubscriptionPendingUpdateExpiredEvent
      extends V2.EventBase {
      type: 'v1.customer.subscription.pending_update_expired';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Subscription>;
    }
    export interface PushedV1CustomerSubscriptionPendingUpdateExpiredEvent
      extends V2.EventBase {
      type: 'v1.customer.subscription.pending_update_expired';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Subscription>;
      pull(): Promise<V1CustomerSubscriptionPendingUpdateExpiredEvent>;
    }

    /**
     * Occurs whenever a customer's subscription is no longer paused. Only applies when a `status=paused` subscription is [resumed](https://docs.stripe.com/api/subscriptions/resume), not when [payment collection](https://docs.stripe.com/billing/subscriptions/pause) is resumed.
     */
    export interface V1CustomerSubscriptionResumedEvent extends V2.EventBase {
      type: 'v1.customer.subscription.resumed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Subscription>;
    }
    export interface PushedV1CustomerSubscriptionResumedEvent
      extends V2.EventBase {
      type: 'v1.customer.subscription.resumed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Subscription>;
      pull(): Promise<V1CustomerSubscriptionResumedEvent>;
    }

    /**
     * Occurs three days before a subscription's trial period is scheduled to end, or when a trial is ended immediately (using `trial_end=now`).
     */
    export interface V1CustomerSubscriptionTrialWillEndEvent
      extends V2.EventBase {
      type: 'v1.customer.subscription.trial_will_end';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Subscription>;
    }
    export interface PushedV1CustomerSubscriptionTrialWillEndEvent
      extends V2.EventBase {
      type: 'v1.customer.subscription.trial_will_end';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Subscription>;
      pull(): Promise<V1CustomerSubscriptionTrialWillEndEvent>;
    }

    /**
     * Occurs whenever a subscription changes (e.g., switching from one plan to another, or changing the status from trial to active).
     */
    export interface V1CustomerSubscriptionUpdatedEvent extends V2.EventBase {
      type: 'v1.customer.subscription.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Subscription>;
    }
    export interface PushedV1CustomerSubscriptionUpdatedEvent
      extends V2.EventBase {
      type: 'v1.customer.subscription.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Subscription>;
      pull(): Promise<V1CustomerSubscriptionUpdatedEvent>;
    }

    /**
     * Occurs whenever a tax ID is created for a customer.
     */
    export interface V1CustomerTaxIdCreatedEvent extends V2.EventBase {
      type: 'v1.customer.tax_id.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TaxId>;
    }
    export interface PushedV1CustomerTaxIdCreatedEvent extends V2.EventBase {
      type: 'v1.customer.tax_id.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TaxId>;
      pull(): Promise<V1CustomerTaxIdCreatedEvent>;
    }

    /**
     * Occurs whenever a tax ID is deleted from a customer.
     */
    export interface V1CustomerTaxIdDeletedEvent extends V2.EventBase {
      type: 'v1.customer.tax_id.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TaxId>;
    }
    export interface PushedV1CustomerTaxIdDeletedEvent extends V2.EventBase {
      type: 'v1.customer.tax_id.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TaxId>;
      pull(): Promise<V1CustomerTaxIdDeletedEvent>;
    }

    /**
     * Occurs whenever a customer's tax ID is updated.
     */
    export interface V1CustomerTaxIdUpdatedEvent extends V2.EventBase {
      type: 'v1.customer.tax_id.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TaxId>;
    }
    export interface PushedV1CustomerTaxIdUpdatedEvent extends V2.EventBase {
      type: 'v1.customer.tax_id.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TaxId>;
      pull(): Promise<V1CustomerTaxIdUpdatedEvent>;
    }

    /**
     * Occurs whenever any property of a customer changes.
     */
    export interface V1CustomerUpdatedEvent extends V2.EventBase {
      type: 'v1.customer.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Customer>;
    }
    export interface PushedV1CustomerUpdatedEvent extends V2.EventBase {
      type: 'v1.customer.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Customer>;
      pull(): Promise<V1CustomerUpdatedEvent>;
    }

    /**
     * Occurs whenever a new Stripe-generated file is available for your account.
     */
    export interface V1FileCreatedEvent extends V2.EventBase {
      type: 'v1.file.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<File>;
    }
    export interface PushedV1FileCreatedEvent extends V2.EventBase {
      type: 'v1.file.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<File>;
      pull(): Promise<V1FileCreatedEvent>;
    }

    /**
     * Occurs when a new Financial Connections account is created.
     */
    export interface V1FinancialConnectionsAccountCreatedEvent
      extends V2.EventBase {
      type: 'v1.financial_connections.account.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<FinancialConnections.Account>;
    }
    export interface PushedV1FinancialConnectionsAccountCreatedEvent
      extends V2.EventBase {
      type: 'v1.financial_connections.account.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<FinancialConnections.Account>;
      pull(): Promise<V1FinancialConnectionsAccountCreatedEvent>;
    }

    /**
     * Occurs when a Financial Connections account's status is updated from `active` to `inactive`.
     */
    export interface V1FinancialConnectionsAccountDeactivatedEvent
      extends V2.EventBase {
      type: 'v1.financial_connections.account.deactivated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<FinancialConnections.Account>;
    }
    export interface PushedV1FinancialConnectionsAccountDeactivatedEvent
      extends V2.EventBase {
      type: 'v1.financial_connections.account.deactivated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<FinancialConnections.Account>;
      pull(): Promise<V1FinancialConnectionsAccountDeactivatedEvent>;
    }

    /**
     * Occurs when a Financial Connections account is disconnected.
     */
    export interface V1FinancialConnectionsAccountDisconnectedEvent
      extends V2.EventBase {
      type: 'v1.financial_connections.account.disconnected';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<FinancialConnections.Account>;
    }
    export interface PushedV1FinancialConnectionsAccountDisconnectedEvent
      extends V2.EventBase {
      type: 'v1.financial_connections.account.disconnected';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<FinancialConnections.Account>;
      pull(): Promise<V1FinancialConnectionsAccountDisconnectedEvent>;
    }

    /**
     * Occurs when a Financial Connections account's status is updated from `inactive` to `active`.
     */
    export interface V1FinancialConnectionsAccountReactivatedEvent
      extends V2.EventBase {
      type: 'v1.financial_connections.account.reactivated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<FinancialConnections.Account>;
    }
    export interface PushedV1FinancialConnectionsAccountReactivatedEvent
      extends V2.EventBase {
      type: 'v1.financial_connections.account.reactivated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<FinancialConnections.Account>;
      pull(): Promise<V1FinancialConnectionsAccountReactivatedEvent>;
    }

    /**
     * Occurs when an Account’s `balance_refresh` status transitions from `pending` to either `succeeded` or `failed`.
     */
    export interface V1FinancialConnectionsAccountRefreshedBalanceEvent
      extends V2.EventBase {
      type: 'v1.financial_connections.account.refreshed_balance';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<FinancialConnections.Account>;
    }
    export interface PushedV1FinancialConnectionsAccountRefreshedBalanceEvent
      extends V2.EventBase {
      type: 'v1.financial_connections.account.refreshed_balance';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<FinancialConnections.Account>;
      pull(): Promise<V1FinancialConnectionsAccountRefreshedBalanceEvent>;
    }

    /**
     * Occurs when an Account’s `ownership_refresh` status transitions from `pending` to either `succeeded` or `failed`.
     */
    export interface V1FinancialConnectionsAccountRefreshedOwnershipEvent
      extends V2.EventBase {
      type: 'v1.financial_connections.account.refreshed_ownership';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<FinancialConnections.Account>;
    }
    export interface PushedV1FinancialConnectionsAccountRefreshedOwnershipEvent
      extends V2.EventBase {
      type: 'v1.financial_connections.account.refreshed_ownership';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<FinancialConnections.Account>;
      pull(): Promise<V1FinancialConnectionsAccountRefreshedOwnershipEvent>;
    }

    /**
     * Occurs when an Account’s `transaction_refresh` status transitions from `pending` to either `succeeded` or `failed`.
     */
    export interface V1FinancialConnectionsAccountRefreshedTransactionsEvent
      extends V2.EventBase {
      type: 'v1.financial_connections.account.refreshed_transactions';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<FinancialConnections.Account>;
    }
    export interface PushedV1FinancialConnectionsAccountRefreshedTransactionsEvent
      extends V2.EventBase {
      type: 'v1.financial_connections.account.refreshed_transactions';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<FinancialConnections.Account>;
      pull(): Promise<V1FinancialConnectionsAccountRefreshedTransactionsEvent>;
    }

    /**
     * Occurs whenever a VerificationSession is canceled.
     */
    export interface V1IdentityVerificationSessionCanceledEvent
      extends V2.EventBase {
      type: 'v1.identity.verification_session.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Identity.VerificationSession>;
    }
    export interface PushedV1IdentityVerificationSessionCanceledEvent
      extends V2.EventBase {
      type: 'v1.identity.verification_session.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Identity.VerificationSession>;
      pull(): Promise<V1IdentityVerificationSessionCanceledEvent>;
    }

    /**
     * Occurs whenever a VerificationSession is created.
     */
    export interface V1IdentityVerificationSessionCreatedEvent
      extends V2.EventBase {
      type: 'v1.identity.verification_session.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Identity.VerificationSession>;
    }
    export interface PushedV1IdentityVerificationSessionCreatedEvent
      extends V2.EventBase {
      type: 'v1.identity.verification_session.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Identity.VerificationSession>;
      pull(): Promise<V1IdentityVerificationSessionCreatedEvent>;
    }

    /**
     * Occurs whenever a VerificationSession transitions to processing.
     */
    export interface V1IdentityVerificationSessionProcessingEvent
      extends V2.EventBase {
      type: 'v1.identity.verification_session.processing';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Identity.VerificationSession>;
    }
    export interface PushedV1IdentityVerificationSessionProcessingEvent
      extends V2.EventBase {
      type: 'v1.identity.verification_session.processing';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Identity.VerificationSession>;
      pull(): Promise<V1IdentityVerificationSessionProcessingEvent>;
    }

    /**
     * Occurs whenever a VerificationSession is redacted.
     */
    export interface V1IdentityVerificationSessionRedactedEvent
      extends V2.EventBase {
      type: 'v1.identity.verification_session.redacted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Identity.VerificationSession>;
    }
    export interface PushedV1IdentityVerificationSessionRedactedEvent
      extends V2.EventBase {
      type: 'v1.identity.verification_session.redacted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Identity.VerificationSession>;
      pull(): Promise<V1IdentityVerificationSessionRedactedEvent>;
    }

    /**
     * Occurs whenever a VerificationSession transitions to require user input.
     */
    export interface V1IdentityVerificationSessionRequiresInputEvent
      extends V2.EventBase {
      type: 'v1.identity.verification_session.requires_input';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Identity.VerificationSession>;
    }
    export interface PushedV1IdentityVerificationSessionRequiresInputEvent
      extends V2.EventBase {
      type: 'v1.identity.verification_session.requires_input';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Identity.VerificationSession>;
      pull(): Promise<V1IdentityVerificationSessionRequiresInputEvent>;
    }

    /**
     * Occurs whenever a VerificationSession transitions to verified.
     */
    export interface V1IdentityVerificationSessionVerifiedEvent
      extends V2.EventBase {
      type: 'v1.identity.verification_session.verified';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Identity.VerificationSession>;
    }
    export interface PushedV1IdentityVerificationSessionVerifiedEvent
      extends V2.EventBase {
      type: 'v1.identity.verification_session.verified';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Identity.VerificationSession>;
      pull(): Promise<V1IdentityVerificationSessionVerifiedEvent>;
    }

    /**
     * Occurs whenever a new invoice is created. To learn how webhooks can be used with this event, and how they can affect it, see [Using Webhooks with Subscriptions](https://docs.stripe.com/subscriptions/webhooks).
     */
    export interface V1InvoiceCreatedEvent extends V2.EventBase {
      type: 'v1.invoice.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
    }
    export interface PushedV1InvoiceCreatedEvent extends V2.EventBase {
      type: 'v1.invoice.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
      pull(): Promise<V1InvoiceCreatedEvent>;
    }

    /**
     * Occurs whenever a draft invoice is deleted. Note: This event is not sent for [invoice previews](https://docs.stripe.com/api/invoices/create_preview).
     */
    export interface V1InvoiceDeletedEvent extends V2.EventBase {
      type: 'v1.invoice.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
    }
    export interface PushedV1InvoiceDeletedEvent extends V2.EventBase {
      type: 'v1.invoice.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
      pull(): Promise<V1InvoiceDeletedEvent>;
    }

    /**
     * Occurs whenever a draft invoice cannot be finalized. See the invoice’s [last finalization error](https://docs.stripe.com/api/invoices/object#invoice_object-last_finalization_error) for details.
     */
    export interface V1InvoiceFinalizationFailedEvent extends V2.EventBase {
      type: 'v1.invoice.finalization_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
    }
    export interface PushedV1InvoiceFinalizationFailedEvent
      extends V2.EventBase {
      type: 'v1.invoice.finalization_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
      pull(): Promise<V1InvoiceFinalizationFailedEvent>;
    }

    /**
     * Occurs whenever a draft invoice is finalized and updated to be an open invoice.
     */
    export interface V1InvoiceFinalizedEvent extends V2.EventBase {
      type: 'v1.invoice.finalized';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
    }
    export interface PushedV1InvoiceFinalizedEvent extends V2.EventBase {
      type: 'v1.invoice.finalized';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
      pull(): Promise<V1InvoiceFinalizedEvent>;
    }

    /**
     * Occurs whenever an invoice is marked uncollectible.
     */
    export interface V1InvoiceMarkedUncollectibleEvent extends V2.EventBase {
      type: 'v1.invoice.marked_uncollectible';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
    }
    export interface PushedV1InvoiceMarkedUncollectibleEvent
      extends V2.EventBase {
      type: 'v1.invoice.marked_uncollectible';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
      pull(): Promise<V1InvoiceMarkedUncollectibleEvent>;
    }

    /**
     * Occurs X number of days after an invoice becomes due&mdash;where X is determined by Automations.
     */
    export interface V1InvoiceOverdueEvent extends V2.EventBase {
      type: 'v1.invoice.overdue';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
    }
    export interface PushedV1InvoiceOverdueEvent extends V2.EventBase {
      type: 'v1.invoice.overdue';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
      pull(): Promise<V1InvoiceOverdueEvent>;
    }

    /**
     * Occurs when an invoice transitions to paid with a non-zero amount_overpaid.
     */
    export interface V1InvoiceOverpaidEvent extends V2.EventBase {
      type: 'v1.invoice.overpaid';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
    }
    export interface PushedV1InvoiceOverpaidEvent extends V2.EventBase {
      type: 'v1.invoice.overpaid';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
      pull(): Promise<V1InvoiceOverpaidEvent>;
    }

    /**
     * Occurs whenever an invoice payment attempt succeeds or an invoice is marked as paid out-of-band.
     */
    export interface V1InvoicePaidEvent extends V2.EventBase {
      type: 'v1.invoice.paid';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
    }
    export interface PushedV1InvoicePaidEvent extends V2.EventBase {
      type: 'v1.invoice.paid';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
      pull(): Promise<V1InvoicePaidEvent>;
    }

    /**
     * Occurs whenever an invoice payment attempt requires further user action to complete.
     */
    export interface V1InvoicePaymentActionRequiredEvent extends V2.EventBase {
      type: 'v1.invoice.payment_action_required';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
    }
    export interface PushedV1InvoicePaymentActionRequiredEvent
      extends V2.EventBase {
      type: 'v1.invoice.payment_action_required';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
      pull(): Promise<V1InvoicePaymentActionRequiredEvent>;
    }

    /**
     * Occurs whenever an invoice payment attempt fails, due to either a declined payment, including soft decline, or to the lack of a stored payment method.
     */
    export interface V1InvoicePaymentFailedEvent extends V2.EventBase {
      type: 'v1.invoice.payment_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
    }
    export interface PushedV1InvoicePaymentFailedEvent extends V2.EventBase {
      type: 'v1.invoice.payment_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
      pull(): Promise<V1InvoicePaymentFailedEvent>;
    }

    /**
     * Occurs whenever an invoice payment attempt succeeds.
     */
    export interface V1InvoicePaymentSucceededEvent extends V2.EventBase {
      type: 'v1.invoice.payment_succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
    }
    export interface PushedV1InvoicePaymentSucceededEvent extends V2.EventBase {
      type: 'v1.invoice.payment_succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
      pull(): Promise<V1InvoicePaymentSucceededEvent>;
    }

    /**
     * Occurs whenever an invoice email is sent out.
     */
    export interface V1InvoiceSentEvent extends V2.EventBase {
      type: 'v1.invoice.sent';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
    }
    export interface PushedV1InvoiceSentEvent extends V2.EventBase {
      type: 'v1.invoice.sent';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
      pull(): Promise<V1InvoiceSentEvent>;
    }

    /**
     * Occurs X number of days before a subscription is scheduled to create an invoice that is automatically charged&mdash;where X is determined by your [subscriptions settings](https://dashboard.stripe.com/account/billing/automatic). Note: The received `Invoice` object will not have an invoice ID.
     */
    export interface V1InvoiceUpcomingEvent extends V2.EventBase {
      type: 'v1.invoice.upcoming';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
    }
    export interface PushedV1InvoiceUpcomingEvent extends V2.EventBase {
      type: 'v1.invoice.upcoming';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
      pull(): Promise<V1InvoiceUpcomingEvent>;
    }

    /**
     * Occurs whenever an invoice changes (e.g., the invoice amount).
     */
    export interface V1InvoiceUpdatedEvent extends V2.EventBase {
      type: 'v1.invoice.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
    }
    export interface PushedV1InvoiceUpdatedEvent extends V2.EventBase {
      type: 'v1.invoice.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
      pull(): Promise<V1InvoiceUpdatedEvent>;
    }

    /**
     * Occurs whenever an invoice is voided.
     */
    export interface V1InvoiceVoidedEvent extends V2.EventBase {
      type: 'v1.invoice.voided';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
    }
    export interface PushedV1InvoiceVoidedEvent extends V2.EventBase {
      type: 'v1.invoice.voided';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
      pull(): Promise<V1InvoiceVoidedEvent>;
    }

    /**
     * Occurs X number of days before an invoice becomes due&mdash;where X is determined by Automations.
     */
    export interface V1InvoiceWillBeDueEvent extends V2.EventBase {
      type: 'v1.invoice.will_be_due';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
    }
    export interface PushedV1InvoiceWillBeDueEvent extends V2.EventBase {
      type: 'v1.invoice.will_be_due';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
      pull(): Promise<V1InvoiceWillBeDueEvent>;
    }

    /**
     * Occurs when an InvoicePayment is successfully paid.
     */
    export interface V1InvoicePaymentPaidEvent extends V2.EventBase {
      type: 'v1.invoice_payment.paid';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<InvoicePayment>;
    }
    export interface PushedV1InvoicePaymentPaidEvent extends V2.EventBase {
      type: 'v1.invoice_payment.paid';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<InvoicePayment>;
      pull(): Promise<V1InvoicePaymentPaidEvent>;
    }

    /**
     * Occurs whenever an invoice item is created.
     */
    export interface V1InvoiceitemCreatedEvent extends V2.EventBase {
      type: 'v1.invoiceitem.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<InvoiceItem>;
    }
    export interface PushedV1InvoiceitemCreatedEvent extends V2.EventBase {
      type: 'v1.invoiceitem.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<InvoiceItem>;
      pull(): Promise<V1InvoiceitemCreatedEvent>;
    }

    /**
     * Occurs whenever an invoice item is deleted.
     */
    export interface V1InvoiceitemDeletedEvent extends V2.EventBase {
      type: 'v1.invoiceitem.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<InvoiceItem>;
    }
    export interface PushedV1InvoiceitemDeletedEvent extends V2.EventBase {
      type: 'v1.invoiceitem.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<InvoiceItem>;
      pull(): Promise<V1InvoiceitemDeletedEvent>;
    }

    /**
     * Occurs whenever an authorization is created.
     */
    export interface V1IssuingAuthorizationCreatedEvent extends V2.EventBase {
      type: 'v1.issuing_authorization.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Authorization>;
    }
    export interface PushedV1IssuingAuthorizationCreatedEvent
      extends V2.EventBase {
      type: 'v1.issuing_authorization.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Authorization>;
      pull(): Promise<V1IssuingAuthorizationCreatedEvent>;
    }

    /**
     * Represents a synchronous request for authorization, see [Using your integration to handle authorization requests](https://docs.stripe.com/issuing/purchases/authorizations#authorization-handling).
     */
    export interface V1IssuingAuthorizationRequestEvent extends V2.EventBase {
      type: 'v1.issuing_authorization.request';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Authorization>;
    }
    export interface PushedV1IssuingAuthorizationRequestEvent
      extends V2.EventBase {
      type: 'v1.issuing_authorization.request';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Authorization>;
      pull(): Promise<V1IssuingAuthorizationRequestEvent>;
    }

    /**
     * Occurs whenever an authorization is updated.
     */
    export interface V1IssuingAuthorizationUpdatedEvent extends V2.EventBase {
      type: 'v1.issuing_authorization.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Authorization>;
    }
    export interface PushedV1IssuingAuthorizationUpdatedEvent
      extends V2.EventBase {
      type: 'v1.issuing_authorization.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Authorization>;
      pull(): Promise<V1IssuingAuthorizationUpdatedEvent>;
    }

    /**
     * Occurs whenever a card is created.
     */
    export interface V1IssuingCardCreatedEvent extends V2.EventBase {
      type: 'v1.issuing_card.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Card>;
    }
    export interface PushedV1IssuingCardCreatedEvent extends V2.EventBase {
      type: 'v1.issuing_card.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Card>;
      pull(): Promise<V1IssuingCardCreatedEvent>;
    }

    /**
     * Occurs whenever a card is updated.
     */
    export interface V1IssuingCardUpdatedEvent extends V2.EventBase {
      type: 'v1.issuing_card.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Card>;
    }
    export interface PushedV1IssuingCardUpdatedEvent extends V2.EventBase {
      type: 'v1.issuing_card.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Card>;
      pull(): Promise<V1IssuingCardUpdatedEvent>;
    }

    /**
     * Occurs whenever a cardholder is created.
     */
    export interface V1IssuingCardholderCreatedEvent extends V2.EventBase {
      type: 'v1.issuing_cardholder.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Cardholder>;
    }
    export interface PushedV1IssuingCardholderCreatedEvent
      extends V2.EventBase {
      type: 'v1.issuing_cardholder.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Cardholder>;
      pull(): Promise<V1IssuingCardholderCreatedEvent>;
    }

    /**
     * Occurs whenever a cardholder is updated.
     */
    export interface V1IssuingCardholderUpdatedEvent extends V2.EventBase {
      type: 'v1.issuing_cardholder.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Cardholder>;
    }
    export interface PushedV1IssuingCardholderUpdatedEvent
      extends V2.EventBase {
      type: 'v1.issuing_cardholder.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Cardholder>;
      pull(): Promise<V1IssuingCardholderUpdatedEvent>;
    }

    /**
     * Occurs whenever a dispute is won, lost or expired.
     */
    export interface V1IssuingDisputeClosedEvent extends V2.EventBase {
      type: 'v1.issuing_dispute.closed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Dispute>;
    }
    export interface PushedV1IssuingDisputeClosedEvent extends V2.EventBase {
      type: 'v1.issuing_dispute.closed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Dispute>;
      pull(): Promise<V1IssuingDisputeClosedEvent>;
    }

    /**
     * Occurs whenever a dispute is created.
     */
    export interface V1IssuingDisputeCreatedEvent extends V2.EventBase {
      type: 'v1.issuing_dispute.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Dispute>;
    }
    export interface PushedV1IssuingDisputeCreatedEvent extends V2.EventBase {
      type: 'v1.issuing_dispute.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Dispute>;
      pull(): Promise<V1IssuingDisputeCreatedEvent>;
    }

    /**
     * Occurs whenever funds are reinstated to your account for an Issuing dispute.
     */
    export interface V1IssuingDisputeFundsReinstatedEvent extends V2.EventBase {
      type: 'v1.issuing_dispute.funds_reinstated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Dispute>;
    }
    export interface PushedV1IssuingDisputeFundsReinstatedEvent
      extends V2.EventBase {
      type: 'v1.issuing_dispute.funds_reinstated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Dispute>;
      pull(): Promise<V1IssuingDisputeFundsReinstatedEvent>;
    }

    /**
     * Occurs whenever funds are deducted from your account for an Issuing dispute.
     */
    export interface V1IssuingDisputeFundsRescindedEvent extends V2.EventBase {
      type: 'v1.issuing_dispute.funds_rescinded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Dispute>;
    }
    export interface PushedV1IssuingDisputeFundsRescindedEvent
      extends V2.EventBase {
      type: 'v1.issuing_dispute.funds_rescinded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Dispute>;
      pull(): Promise<V1IssuingDisputeFundsRescindedEvent>;
    }

    /**
     * Occurs whenever a dispute is submitted.
     */
    export interface V1IssuingDisputeSubmittedEvent extends V2.EventBase {
      type: 'v1.issuing_dispute.submitted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Dispute>;
    }
    export interface PushedV1IssuingDisputeSubmittedEvent extends V2.EventBase {
      type: 'v1.issuing_dispute.submitted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Dispute>;
      pull(): Promise<V1IssuingDisputeSubmittedEvent>;
    }

    /**
     * Occurs whenever a dispute is updated.
     */
    export interface V1IssuingDisputeUpdatedEvent extends V2.EventBase {
      type: 'v1.issuing_dispute.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Dispute>;
    }
    export interface PushedV1IssuingDisputeUpdatedEvent extends V2.EventBase {
      type: 'v1.issuing_dispute.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Dispute>;
      pull(): Promise<V1IssuingDisputeUpdatedEvent>;
    }

    /**
     * Occurs whenever a personalization design is activated following the activation of the physical bundle that belongs to it.
     */
    export interface V1IssuingPersonalizationDesignActivatedEvent
      extends V2.EventBase {
      type: 'v1.issuing_personalization_design.activated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.PersonalizationDesign>;
    }
    export interface PushedV1IssuingPersonalizationDesignActivatedEvent
      extends V2.EventBase {
      type: 'v1.issuing_personalization_design.activated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.PersonalizationDesign>;
      pull(): Promise<V1IssuingPersonalizationDesignActivatedEvent>;
    }

    /**
     * Occurs whenever a personalization design is deactivated following the deactivation of the physical bundle that belongs to it.
     */
    export interface V1IssuingPersonalizationDesignDeactivatedEvent
      extends V2.EventBase {
      type: 'v1.issuing_personalization_design.deactivated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.PersonalizationDesign>;
    }
    export interface PushedV1IssuingPersonalizationDesignDeactivatedEvent
      extends V2.EventBase {
      type: 'v1.issuing_personalization_design.deactivated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.PersonalizationDesign>;
      pull(): Promise<V1IssuingPersonalizationDesignDeactivatedEvent>;
    }

    /**
     * Occurs whenever a personalization design is rejected by design review.
     */
    export interface V1IssuingPersonalizationDesignRejectedEvent
      extends V2.EventBase {
      type: 'v1.issuing_personalization_design.rejected';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.PersonalizationDesign>;
    }
    export interface PushedV1IssuingPersonalizationDesignRejectedEvent
      extends V2.EventBase {
      type: 'v1.issuing_personalization_design.rejected';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.PersonalizationDesign>;
      pull(): Promise<V1IssuingPersonalizationDesignRejectedEvent>;
    }

    /**
     * Occurs whenever a personalization design is updated.
     */
    export interface V1IssuingPersonalizationDesignUpdatedEvent
      extends V2.EventBase {
      type: 'v1.issuing_personalization_design.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.PersonalizationDesign>;
    }
    export interface PushedV1IssuingPersonalizationDesignUpdatedEvent
      extends V2.EventBase {
      type: 'v1.issuing_personalization_design.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.PersonalizationDesign>;
      pull(): Promise<V1IssuingPersonalizationDesignUpdatedEvent>;
    }

    /**
     * Occurs whenever an issuing digital wallet token is created.
     */
    export interface V1IssuingTokenCreatedEvent extends V2.EventBase {
      type: 'v1.issuing_token.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Token>;
    }
    export interface PushedV1IssuingTokenCreatedEvent extends V2.EventBase {
      type: 'v1.issuing_token.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Token>;
      pull(): Promise<V1IssuingTokenCreatedEvent>;
    }

    /**
     * Occurs whenever an issuing digital wallet token is updated.
     */
    export interface V1IssuingTokenUpdatedEvent extends V2.EventBase {
      type: 'v1.issuing_token.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Token>;
    }
    export interface PushedV1IssuingTokenUpdatedEvent extends V2.EventBase {
      type: 'v1.issuing_token.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Token>;
      pull(): Promise<V1IssuingTokenUpdatedEvent>;
    }

    /**
     * Occurs whenever an issuing transaction is created.
     */
    export interface V1IssuingTransactionCreatedEvent extends V2.EventBase {
      type: 'v1.issuing_transaction.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Transaction>;
    }
    export interface PushedV1IssuingTransactionCreatedEvent
      extends V2.EventBase {
      type: 'v1.issuing_transaction.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Transaction>;
      pull(): Promise<V1IssuingTransactionCreatedEvent>;
    }

    /**
     * Occurs whenever an issuing transaction is updated with receipt data.
     */
    export interface V1IssuingTransactionPurchaseDetailsReceiptUpdatedEvent
      extends V2.EventBase {
      type: 'v1.issuing_transaction.purchase_details_receipt_updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Transaction>;
    }
    export interface PushedV1IssuingTransactionPurchaseDetailsReceiptUpdatedEvent
      extends V2.EventBase {
      type: 'v1.issuing_transaction.purchase_details_receipt_updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Transaction>;
      pull(): Promise<V1IssuingTransactionPurchaseDetailsReceiptUpdatedEvent>;
    }

    /**
     * Occurs whenever an issuing transaction is updated.
     */
    export interface V1IssuingTransactionUpdatedEvent extends V2.EventBase {
      type: 'v1.issuing_transaction.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Transaction>;
    }
    export interface PushedV1IssuingTransactionUpdatedEvent
      extends V2.EventBase {
      type: 'v1.issuing_transaction.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Transaction>;
      pull(): Promise<V1IssuingTransactionUpdatedEvent>;
    }

    /**
     * Occurs whenever a Mandate is updated.
     */
    export interface V1MandateUpdatedEvent extends V2.EventBase {
      type: 'v1.mandate.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Mandate>;
    }
    export interface PushedV1MandateUpdatedEvent extends V2.EventBase {
      type: 'v1.mandate.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Mandate>;
      pull(): Promise<V1MandateUpdatedEvent>;
    }

    /**
     * Occurs when a PaymentIntent has funds to be captured. Check the `amount_capturable` property on the PaymentIntent to determine the amount that can be captured. You may capture the PaymentIntent with an `amount_to_capture` value up to the specified amount. [Learn more about capturing PaymentIntents.](https://docs.stripe.com/api/payment_intents/capture).
     */
    export interface V1PaymentIntentAmountCapturableUpdatedEvent
      extends V2.EventBase {
      type: 'v1.payment_intent.amount_capturable_updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentIntent>;
    }
    export interface PushedV1PaymentIntentAmountCapturableUpdatedEvent
      extends V2.EventBase {
      type: 'v1.payment_intent.amount_capturable_updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentIntent>;
      pull(): Promise<V1PaymentIntentAmountCapturableUpdatedEvent>;
    }

    /**
     * Occurs when a PaymentIntent is canceled.
     */
    export interface V1PaymentIntentCanceledEvent extends V2.EventBase {
      type: 'v1.payment_intent.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentIntent>;
    }
    export interface PushedV1PaymentIntentCanceledEvent extends V2.EventBase {
      type: 'v1.payment_intent.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentIntent>;
      pull(): Promise<V1PaymentIntentCanceledEvent>;
    }

    /**
     * Occurs when a new PaymentIntent is created.
     */
    export interface V1PaymentIntentCreatedEvent extends V2.EventBase {
      type: 'v1.payment_intent.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentIntent>;
    }
    export interface PushedV1PaymentIntentCreatedEvent extends V2.EventBase {
      type: 'v1.payment_intent.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentIntent>;
      pull(): Promise<V1PaymentIntentCreatedEvent>;
    }

    /**
     * Occurs when funds are applied to a customer_balance PaymentIntent and the 'amount_remaining' changes.
     */
    export interface V1PaymentIntentPartiallyFundedEvent extends V2.EventBase {
      type: 'v1.payment_intent.partially_funded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentIntent>;
    }
    export interface PushedV1PaymentIntentPartiallyFundedEvent
      extends V2.EventBase {
      type: 'v1.payment_intent.partially_funded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentIntent>;
      pull(): Promise<V1PaymentIntentPartiallyFundedEvent>;
    }

    /**
     * Occurs when a PaymentIntent has failed the attempt to create a payment method or a payment.
     */
    export interface V1PaymentIntentPaymentFailedEvent extends V2.EventBase {
      type: 'v1.payment_intent.payment_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentIntent>;
    }
    export interface PushedV1PaymentIntentPaymentFailedEvent
      extends V2.EventBase {
      type: 'v1.payment_intent.payment_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentIntent>;
      pull(): Promise<V1PaymentIntentPaymentFailedEvent>;
    }

    /**
     * Occurs when a PaymentIntent has started processing.
     */
    export interface V1PaymentIntentProcessingEvent extends V2.EventBase {
      type: 'v1.payment_intent.processing';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentIntent>;
    }
    export interface PushedV1PaymentIntentProcessingEvent extends V2.EventBase {
      type: 'v1.payment_intent.processing';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentIntent>;
      pull(): Promise<V1PaymentIntentProcessingEvent>;
    }

    /**
     * Occurs when a PaymentIntent transitions to requires_action state.
     */
    export interface V1PaymentIntentRequiresActionEvent extends V2.EventBase {
      type: 'v1.payment_intent.requires_action';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentIntent>;
    }
    export interface PushedV1PaymentIntentRequiresActionEvent
      extends V2.EventBase {
      type: 'v1.payment_intent.requires_action';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentIntent>;
      pull(): Promise<V1PaymentIntentRequiresActionEvent>;
    }

    /**
     * Occurs when a PaymentIntent has successfully completed payment.
     */
    export interface V1PaymentIntentSucceededEvent extends V2.EventBase {
      type: 'v1.payment_intent.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentIntent>;
    }
    export interface PushedV1PaymentIntentSucceededEvent extends V2.EventBase {
      type: 'v1.payment_intent.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentIntent>;
      pull(): Promise<V1PaymentIntentSucceededEvent>;
    }

    /**
     * Occurs when a payment link is created.
     */
    export interface V1PaymentLinkCreatedEvent extends V2.EventBase {
      type: 'v1.payment_link.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentLink>;
    }
    export interface PushedV1PaymentLinkCreatedEvent extends V2.EventBase {
      type: 'v1.payment_link.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentLink>;
      pull(): Promise<V1PaymentLinkCreatedEvent>;
    }

    /**
     * Occurs when a payment link is updated.
     */
    export interface V1PaymentLinkUpdatedEvent extends V2.EventBase {
      type: 'v1.payment_link.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentLink>;
    }
    export interface PushedV1PaymentLinkUpdatedEvent extends V2.EventBase {
      type: 'v1.payment_link.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentLink>;
      pull(): Promise<V1PaymentLinkUpdatedEvent>;
    }

    /**
     * Occurs whenever a new payment method is attached to a customer.
     */
    export interface V1PaymentMethodAttachedEvent extends V2.EventBase {
      type: 'v1.payment_method.attached';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentMethod>;
    }
    export interface PushedV1PaymentMethodAttachedEvent extends V2.EventBase {
      type: 'v1.payment_method.attached';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentMethod>;
      pull(): Promise<V1PaymentMethodAttachedEvent>;
    }

    /**
     * Occurs whenever a payment method's details are automatically updated by the network.
     */
    export interface V1PaymentMethodAutomaticallyUpdatedEvent
      extends V2.EventBase {
      type: 'v1.payment_method.automatically_updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentMethod>;
    }
    export interface PushedV1PaymentMethodAutomaticallyUpdatedEvent
      extends V2.EventBase {
      type: 'v1.payment_method.automatically_updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentMethod>;
      pull(): Promise<V1PaymentMethodAutomaticallyUpdatedEvent>;
    }

    /**
     * Occurs whenever a payment method is detached from a customer.
     */
    export interface V1PaymentMethodDetachedEvent extends V2.EventBase {
      type: 'v1.payment_method.detached';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentMethod>;
    }
    export interface PushedV1PaymentMethodDetachedEvent extends V2.EventBase {
      type: 'v1.payment_method.detached';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentMethod>;
      pull(): Promise<V1PaymentMethodDetachedEvent>;
    }

    /**
     * Occurs whenever a payment method is updated via the [PaymentMethod update API](https://docs.stripe.com/api/payment_methods/update).
     */
    export interface V1PaymentMethodUpdatedEvent extends V2.EventBase {
      type: 'v1.payment_method.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentMethod>;
    }
    export interface PushedV1PaymentMethodUpdatedEvent extends V2.EventBase {
      type: 'v1.payment_method.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentMethod>;
      pull(): Promise<V1PaymentMethodUpdatedEvent>;
    }

    /**
     * Occurs whenever a payout is canceled.
     */
    export interface V1PayoutCanceledEvent extends V2.EventBase {
      type: 'v1.payout.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Payout>;
    }
    export interface PushedV1PayoutCanceledEvent extends V2.EventBase {
      type: 'v1.payout.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Payout>;
      pull(): Promise<V1PayoutCanceledEvent>;
    }

    /**
     * Occurs whenever a payout is created.
     */
    export interface V1PayoutCreatedEvent extends V2.EventBase {
      type: 'v1.payout.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Payout>;
    }
    export interface PushedV1PayoutCreatedEvent extends V2.EventBase {
      type: 'v1.payout.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Payout>;
      pull(): Promise<V1PayoutCreatedEvent>;
    }

    /**
     * Occurs whenever a payout attempt fails.
     */
    export interface V1PayoutFailedEvent extends V2.EventBase {
      type: 'v1.payout.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Payout>;
    }
    export interface PushedV1PayoutFailedEvent extends V2.EventBase {
      type: 'v1.payout.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Payout>;
      pull(): Promise<V1PayoutFailedEvent>;
    }

    /**
     * Occurs whenever a payout is *expected* to be available in the destination account. If the payout fails, a `payout.failed` notification is also sent, at a later time.
     */
    export interface V1PayoutPaidEvent extends V2.EventBase {
      type: 'v1.payout.paid';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Payout>;
    }
    export interface PushedV1PayoutPaidEvent extends V2.EventBase {
      type: 'v1.payout.paid';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Payout>;
      pull(): Promise<V1PayoutPaidEvent>;
    }

    /**
     * Occurs whenever balance transactions paid out in an automatic payout can be queried.
     */
    export interface V1PayoutReconciliationCompletedEvent extends V2.EventBase {
      type: 'v1.payout.reconciliation_completed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Payout>;
    }
    export interface PushedV1PayoutReconciliationCompletedEvent
      extends V2.EventBase {
      type: 'v1.payout.reconciliation_completed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Payout>;
      pull(): Promise<V1PayoutReconciliationCompletedEvent>;
    }

    /**
     * Occurs whenever a payout is updated.
     */
    export interface V1PayoutUpdatedEvent extends V2.EventBase {
      type: 'v1.payout.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Payout>;
    }
    export interface PushedV1PayoutUpdatedEvent extends V2.EventBase {
      type: 'v1.payout.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Payout>;
      pull(): Promise<V1PayoutUpdatedEvent>;
    }

    /**
     * Occurs whenever a person associated with an account is created.
     */
    export interface V1PersonCreatedEvent extends V2.EventBase {
      type: 'v1.person.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Person>;
    }
    export interface PushedV1PersonCreatedEvent extends V2.EventBase {
      type: 'v1.person.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Person>;
      pull(): Promise<V1PersonCreatedEvent>;
    }

    /**
     * Occurs whenever a person associated with an account is deleted.
     */
    export interface V1PersonDeletedEvent extends V2.EventBase {
      type: 'v1.person.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Person>;
    }
    export interface PushedV1PersonDeletedEvent extends V2.EventBase {
      type: 'v1.person.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Person>;
      pull(): Promise<V1PersonDeletedEvent>;
    }

    /**
     * Occurs whenever a person associated with an account is updated.
     */
    export interface V1PersonUpdatedEvent extends V2.EventBase {
      type: 'v1.person.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Person>;
    }
    export interface PushedV1PersonUpdatedEvent extends V2.EventBase {
      type: 'v1.person.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Person>;
      pull(): Promise<V1PersonUpdatedEvent>;
    }

    /**
     * Occurs whenever a plan is created.
     */
    export interface V1PlanCreatedEvent extends V2.EventBase {
      type: 'v1.plan.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Plan>;
    }
    export interface PushedV1PlanCreatedEvent extends V2.EventBase {
      type: 'v1.plan.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Plan>;
      pull(): Promise<V1PlanCreatedEvent>;
    }

    /**
     * Occurs whenever a plan is deleted.
     */
    export interface V1PlanDeletedEvent extends V2.EventBase {
      type: 'v1.plan.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Plan>;
    }
    export interface PushedV1PlanDeletedEvent extends V2.EventBase {
      type: 'v1.plan.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Plan>;
      pull(): Promise<V1PlanDeletedEvent>;
    }

    /**
     * Occurs whenever a plan is updated.
     */
    export interface V1PlanUpdatedEvent extends V2.EventBase {
      type: 'v1.plan.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Plan>;
    }
    export interface PushedV1PlanUpdatedEvent extends V2.EventBase {
      type: 'v1.plan.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Plan>;
      pull(): Promise<V1PlanUpdatedEvent>;
    }

    /**
     * Occurs whenever a price is created.
     */
    export interface V1PriceCreatedEvent extends V2.EventBase {
      type: 'v1.price.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Price>;
    }
    export interface PushedV1PriceCreatedEvent extends V2.EventBase {
      type: 'v1.price.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Price>;
      pull(): Promise<V1PriceCreatedEvent>;
    }

    /**
     * Occurs whenever a price is deleted.
     */
    export interface V1PriceDeletedEvent extends V2.EventBase {
      type: 'v1.price.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Price>;
    }
    export interface PushedV1PriceDeletedEvent extends V2.EventBase {
      type: 'v1.price.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Price>;
      pull(): Promise<V1PriceDeletedEvent>;
    }

    /**
     * Occurs whenever a price is updated.
     */
    export interface V1PriceUpdatedEvent extends V2.EventBase {
      type: 'v1.price.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Price>;
    }
    export interface PushedV1PriceUpdatedEvent extends V2.EventBase {
      type: 'v1.price.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Price>;
      pull(): Promise<V1PriceUpdatedEvent>;
    }

    /**
     * Occurs whenever a product is created.
     */
    export interface V1ProductCreatedEvent extends V2.EventBase {
      type: 'v1.product.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Product>;
    }
    export interface PushedV1ProductCreatedEvent extends V2.EventBase {
      type: 'v1.product.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Product>;
      pull(): Promise<V1ProductCreatedEvent>;
    }

    /**
     * Occurs whenever a product is deleted.
     */
    export interface V1ProductDeletedEvent extends V2.EventBase {
      type: 'v1.product.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Product>;
    }
    export interface PushedV1ProductDeletedEvent extends V2.EventBase {
      type: 'v1.product.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Product>;
      pull(): Promise<V1ProductDeletedEvent>;
    }

    /**
     * Occurs whenever a product is updated.
     */
    export interface V1ProductUpdatedEvent extends V2.EventBase {
      type: 'v1.product.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Product>;
    }
    export interface PushedV1ProductUpdatedEvent extends V2.EventBase {
      type: 'v1.product.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Product>;
      pull(): Promise<V1ProductUpdatedEvent>;
    }

    /**
     * Occurs whenever a promotion code is created.
     */
    export interface V1PromotionCodeCreatedEvent extends V2.EventBase {
      type: 'v1.promotion_code.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PromotionCode>;
    }
    export interface PushedV1PromotionCodeCreatedEvent extends V2.EventBase {
      type: 'v1.promotion_code.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PromotionCode>;
      pull(): Promise<V1PromotionCodeCreatedEvent>;
    }

    /**
     * Occurs whenever a promotion code is updated.
     */
    export interface V1PromotionCodeUpdatedEvent extends V2.EventBase {
      type: 'v1.promotion_code.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PromotionCode>;
    }
    export interface PushedV1PromotionCodeUpdatedEvent extends V2.EventBase {
      type: 'v1.promotion_code.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PromotionCode>;
      pull(): Promise<V1PromotionCodeUpdatedEvent>;
    }

    /**
     * Occurs whenever a quote is accepted.
     */
    export interface V1QuoteAcceptedEvent extends V2.EventBase {
      type: 'v1.quote.accepted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Quote>;
    }
    export interface PushedV1QuoteAcceptedEvent extends V2.EventBase {
      type: 'v1.quote.accepted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Quote>;
      pull(): Promise<V1QuoteAcceptedEvent>;
    }

    /**
     * Occurs whenever a quote is canceled.
     */
    export interface V1QuoteCanceledEvent extends V2.EventBase {
      type: 'v1.quote.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Quote>;
    }
    export interface PushedV1QuoteCanceledEvent extends V2.EventBase {
      type: 'v1.quote.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Quote>;
      pull(): Promise<V1QuoteCanceledEvent>;
    }

    /**
     * Occurs whenever a quote is created.
     */
    export interface V1QuoteCreatedEvent extends V2.EventBase {
      type: 'v1.quote.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Quote>;
    }
    export interface PushedV1QuoteCreatedEvent extends V2.EventBase {
      type: 'v1.quote.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Quote>;
      pull(): Promise<V1QuoteCreatedEvent>;
    }

    /**
     * Occurs whenever a quote is finalized.
     */
    export interface V1QuoteFinalizedEvent extends V2.EventBase {
      type: 'v1.quote.finalized';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Quote>;
    }
    export interface PushedV1QuoteFinalizedEvent extends V2.EventBase {
      type: 'v1.quote.finalized';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Quote>;
      pull(): Promise<V1QuoteFinalizedEvent>;
    }

    /**
     * Occurs whenever an early fraud warning is created.
     */
    export interface V1RadarEarlyFraudWarningCreatedEvent extends V2.EventBase {
      type: 'v1.radar.early_fraud_warning.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Radar.EarlyFraudWarning>;
    }
    export interface PushedV1RadarEarlyFraudWarningCreatedEvent
      extends V2.EventBase {
      type: 'v1.radar.early_fraud_warning.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Radar.EarlyFraudWarning>;
      pull(): Promise<V1RadarEarlyFraudWarningCreatedEvent>;
    }

    /**
     * Occurs whenever an early fraud warning is updated.
     */
    export interface V1RadarEarlyFraudWarningUpdatedEvent extends V2.EventBase {
      type: 'v1.radar.early_fraud_warning.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Radar.EarlyFraudWarning>;
    }
    export interface PushedV1RadarEarlyFraudWarningUpdatedEvent
      extends V2.EventBase {
      type: 'v1.radar.early_fraud_warning.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Radar.EarlyFraudWarning>;
      pull(): Promise<V1RadarEarlyFraudWarningUpdatedEvent>;
    }

    /**
     * Occurs whenever a refund is created.
     */
    export interface V1RefundCreatedEvent extends V2.EventBase {
      type: 'v1.refund.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Refund>;
    }
    export interface PushedV1RefundCreatedEvent extends V2.EventBase {
      type: 'v1.refund.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Refund>;
      pull(): Promise<V1RefundCreatedEvent>;
    }

    /**
     * Occurs whenever a refund has failed.
     */
    export interface V1RefundFailedEvent extends V2.EventBase {
      type: 'v1.refund.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Refund>;
    }
    export interface PushedV1RefundFailedEvent extends V2.EventBase {
      type: 'v1.refund.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Refund>;
      pull(): Promise<V1RefundFailedEvent>;
    }

    /**
     * Occurs whenever a refund is updated.
     */
    export interface V1RefundUpdatedEvent extends V2.EventBase {
      type: 'v1.refund.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Refund>;
    }
    export interface PushedV1RefundUpdatedEvent extends V2.EventBase {
      type: 'v1.refund.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Refund>;
      pull(): Promise<V1RefundUpdatedEvent>;
    }

    /**
     * Occurs whenever a review is closed. The review's `reason` field indicates why: `approved`, `disputed`, `refunded`, `refunded_as_fraud`, or `canceled`.
     */
    export interface V1ReviewClosedEvent extends V2.EventBase {
      type: 'v1.review.closed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Review>;
    }
    export interface PushedV1ReviewClosedEvent extends V2.EventBase {
      type: 'v1.review.closed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Review>;
      pull(): Promise<V1ReviewClosedEvent>;
    }

    /**
     * Occurs whenever a review is opened.
     */
    export interface V1ReviewOpenedEvent extends V2.EventBase {
      type: 'v1.review.opened';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Review>;
    }
    export interface PushedV1ReviewOpenedEvent extends V2.EventBase {
      type: 'v1.review.opened';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Review>;
      pull(): Promise<V1ReviewOpenedEvent>;
    }

    /**
     * Occurs when a SetupIntent is canceled.
     */
    export interface V1SetupIntentCanceledEvent extends V2.EventBase {
      type: 'v1.setup_intent.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SetupIntent>;
    }
    export interface PushedV1SetupIntentCanceledEvent extends V2.EventBase {
      type: 'v1.setup_intent.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SetupIntent>;
      pull(): Promise<V1SetupIntentCanceledEvent>;
    }

    /**
     * Occurs when a new SetupIntent is created.
     */
    export interface V1SetupIntentCreatedEvent extends V2.EventBase {
      type: 'v1.setup_intent.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SetupIntent>;
    }
    export interface PushedV1SetupIntentCreatedEvent extends V2.EventBase {
      type: 'v1.setup_intent.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SetupIntent>;
      pull(): Promise<V1SetupIntentCreatedEvent>;
    }

    /**
     * Occurs when a SetupIntent is in requires_action state.
     */
    export interface V1SetupIntentRequiresActionEvent extends V2.EventBase {
      type: 'v1.setup_intent.requires_action';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SetupIntent>;
    }
    export interface PushedV1SetupIntentRequiresActionEvent
      extends V2.EventBase {
      type: 'v1.setup_intent.requires_action';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SetupIntent>;
      pull(): Promise<V1SetupIntentRequiresActionEvent>;
    }

    /**
     * Occurs when a SetupIntent has failed the attempt to setup a payment method.
     */
    export interface V1SetupIntentSetupFailedEvent extends V2.EventBase {
      type: 'v1.setup_intent.setup_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SetupIntent>;
    }
    export interface PushedV1SetupIntentSetupFailedEvent extends V2.EventBase {
      type: 'v1.setup_intent.setup_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SetupIntent>;
      pull(): Promise<V1SetupIntentSetupFailedEvent>;
    }

    /**
     * Occurs when an SetupIntent has successfully setup a payment method.
     */
    export interface V1SetupIntentSucceededEvent extends V2.EventBase {
      type: 'v1.setup_intent.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SetupIntent>;
    }
    export interface PushedV1SetupIntentSucceededEvent extends V2.EventBase {
      type: 'v1.setup_intent.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SetupIntent>;
      pull(): Promise<V1SetupIntentSucceededEvent>;
    }

    /**
     * Occurs whenever a Sigma scheduled query run finishes.
     */
    export interface V1SigmaScheduledQueryRunCreatedEvent extends V2.EventBase {
      type: 'v1.sigma.scheduled_query_run.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Sigma.ScheduledQueryRun>;
    }
    export interface PushedV1SigmaScheduledQueryRunCreatedEvent
      extends V2.EventBase {
      type: 'v1.sigma.scheduled_query_run.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Sigma.ScheduledQueryRun>;
      pull(): Promise<V1SigmaScheduledQueryRunCreatedEvent>;
    }

    /**
     * Occurs whenever a source is canceled.
     */
    export interface V1SourceCanceledEvent extends V2.EventBase {
      type: 'v1.source.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Source>;
    }
    export interface PushedV1SourceCanceledEvent extends V2.EventBase {
      type: 'v1.source.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Source>;
      pull(): Promise<V1SourceCanceledEvent>;
    }

    /**
     * Occurs whenever a source transitions to chargeable.
     */
    export interface V1SourceChargeableEvent extends V2.EventBase {
      type: 'v1.source.chargeable';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Source>;
    }
    export interface PushedV1SourceChargeableEvent extends V2.EventBase {
      type: 'v1.source.chargeable';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Source>;
      pull(): Promise<V1SourceChargeableEvent>;
    }

    /**
     * Occurs whenever a source fails.
     */
    export interface V1SourceFailedEvent extends V2.EventBase {
      type: 'v1.source.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Source>;
    }
    export interface PushedV1SourceFailedEvent extends V2.EventBase {
      type: 'v1.source.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Source>;
      pull(): Promise<V1SourceFailedEvent>;
    }

    /**
     * Occurs whenever the refund attributes are required on a receiver source to process a refund or a mispayment.
     */
    export interface V1SourceRefundAttributesRequiredEvent
      extends V2.EventBase {
      type: 'v1.source.refund_attributes_required';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Source>;
    }
    export interface PushedV1SourceRefundAttributesRequiredEvent
      extends V2.EventBase {
      type: 'v1.source.refund_attributes_required';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Source>;
      pull(): Promise<V1SourceRefundAttributesRequiredEvent>;
    }

    /**
     * Occurs whenever a subscription schedule is canceled due to the underlying subscription being canceled because of delinquency.
     */
    export interface V1SubscriptionScheduleAbortedEvent extends V2.EventBase {
      type: 'v1.subscription_schedule.aborted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SubscriptionSchedule>;
    }
    export interface PushedV1SubscriptionScheduleAbortedEvent
      extends V2.EventBase {
      type: 'v1.subscription_schedule.aborted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SubscriptionSchedule>;
      pull(): Promise<V1SubscriptionScheduleAbortedEvent>;
    }

    /**
     * Occurs whenever a subscription schedule is canceled.
     */
    export interface V1SubscriptionScheduleCanceledEvent extends V2.EventBase {
      type: 'v1.subscription_schedule.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SubscriptionSchedule>;
    }
    export interface PushedV1SubscriptionScheduleCanceledEvent
      extends V2.EventBase {
      type: 'v1.subscription_schedule.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SubscriptionSchedule>;
      pull(): Promise<V1SubscriptionScheduleCanceledEvent>;
    }

    /**
     * Occurs whenever a new subscription schedule is completed.
     */
    export interface V1SubscriptionScheduleCompletedEvent extends V2.EventBase {
      type: 'v1.subscription_schedule.completed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SubscriptionSchedule>;
    }
    export interface PushedV1SubscriptionScheduleCompletedEvent
      extends V2.EventBase {
      type: 'v1.subscription_schedule.completed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SubscriptionSchedule>;
      pull(): Promise<V1SubscriptionScheduleCompletedEvent>;
    }

    /**
     * Occurs whenever a new subscription schedule is created.
     */
    export interface V1SubscriptionScheduleCreatedEvent extends V2.EventBase {
      type: 'v1.subscription_schedule.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SubscriptionSchedule>;
    }
    export interface PushedV1SubscriptionScheduleCreatedEvent
      extends V2.EventBase {
      type: 'v1.subscription_schedule.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SubscriptionSchedule>;
      pull(): Promise<V1SubscriptionScheduleCreatedEvent>;
    }

    /**
     * Occurs 7 days before a subscription schedule will expire.
     */
    export interface V1SubscriptionScheduleExpiringEvent extends V2.EventBase {
      type: 'v1.subscription_schedule.expiring';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SubscriptionSchedule>;
    }
    export interface PushedV1SubscriptionScheduleExpiringEvent
      extends V2.EventBase {
      type: 'v1.subscription_schedule.expiring';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SubscriptionSchedule>;
      pull(): Promise<V1SubscriptionScheduleExpiringEvent>;
    }

    /**
     * Occurs whenever a new subscription schedule is released.
     */
    export interface V1SubscriptionScheduleReleasedEvent extends V2.EventBase {
      type: 'v1.subscription_schedule.released';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SubscriptionSchedule>;
    }
    export interface PushedV1SubscriptionScheduleReleasedEvent
      extends V2.EventBase {
      type: 'v1.subscription_schedule.released';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SubscriptionSchedule>;
      pull(): Promise<V1SubscriptionScheduleReleasedEvent>;
    }

    /**
     * Occurs whenever a subscription schedule is updated.
     */
    export interface V1SubscriptionScheduleUpdatedEvent extends V2.EventBase {
      type: 'v1.subscription_schedule.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SubscriptionSchedule>;
    }
    export interface PushedV1SubscriptionScheduleUpdatedEvent
      extends V2.EventBase {
      type: 'v1.subscription_schedule.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SubscriptionSchedule>;
      pull(): Promise<V1SubscriptionScheduleUpdatedEvent>;
    }

    /**
     * Occurs whenever a new tax rate is created.
     */
    export interface V1TaxRateCreatedEvent extends V2.EventBase {
      type: 'v1.tax_rate.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TaxRate>;
    }
    export interface PushedV1TaxRateCreatedEvent extends V2.EventBase {
      type: 'v1.tax_rate.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TaxRate>;
      pull(): Promise<V1TaxRateCreatedEvent>;
    }

    /**
     * Occurs whenever a tax rate is updated.
     */
    export interface V1TaxRateUpdatedEvent extends V2.EventBase {
      type: 'v1.tax_rate.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TaxRate>;
    }
    export interface PushedV1TaxRateUpdatedEvent extends V2.EventBase {
      type: 'v1.tax_rate.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TaxRate>;
      pull(): Promise<V1TaxRateUpdatedEvent>;
    }

    /**
     * Occurs whenever an action sent to a Terminal reader failed.
     */
    export interface V1TerminalReaderActionFailedEvent extends V2.EventBase {
      type: 'v1.terminal.reader.action_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Terminal.Reader>;
    }
    export interface PushedV1TerminalReaderActionFailedEvent
      extends V2.EventBase {
      type: 'v1.terminal.reader.action_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Terminal.Reader>;
      pull(): Promise<V1TerminalReaderActionFailedEvent>;
    }

    /**
     * Occurs whenever an action sent to a Terminal reader was successful.
     */
    export interface V1TerminalReaderActionSucceededEvent extends V2.EventBase {
      type: 'v1.terminal.reader.action_succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Terminal.Reader>;
    }
    export interface PushedV1TerminalReaderActionSucceededEvent
      extends V2.EventBase {
      type: 'v1.terminal.reader.action_succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Terminal.Reader>;
      pull(): Promise<V1TerminalReaderActionSucceededEvent>;
    }

    /**
     * Occurs whenever an action sent to a Terminal reader is updated.
     */
    export interface V1TerminalReaderActionUpdatedEvent extends V2.EventBase {
      type: 'v1.terminal.reader.action_updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Terminal.Reader>;
    }
    export interface PushedV1TerminalReaderActionUpdatedEvent
      extends V2.EventBase {
      type: 'v1.terminal.reader.action_updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Terminal.Reader>;
      pull(): Promise<V1TerminalReaderActionUpdatedEvent>;
    }

    /**
     * Occurs whenever a test clock starts advancing.
     */
    export interface V1TestHelpersTestClockAdvancingEvent extends V2.EventBase {
      type: 'v1.test_helpers.test_clock.advancing';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TestHelpers.TestClock>;
    }
    export interface PushedV1TestHelpersTestClockAdvancingEvent
      extends V2.EventBase {
      type: 'v1.test_helpers.test_clock.advancing';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TestHelpers.TestClock>;
      pull(): Promise<V1TestHelpersTestClockAdvancingEvent>;
    }

    /**
     * Occurs whenever a test clock is created.
     */
    export interface V1TestHelpersTestClockCreatedEvent extends V2.EventBase {
      type: 'v1.test_helpers.test_clock.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TestHelpers.TestClock>;
    }
    export interface PushedV1TestHelpersTestClockCreatedEvent
      extends V2.EventBase {
      type: 'v1.test_helpers.test_clock.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TestHelpers.TestClock>;
      pull(): Promise<V1TestHelpersTestClockCreatedEvent>;
    }

    /**
     * Occurs whenever a test clock is deleted.
     */
    export interface V1TestHelpersTestClockDeletedEvent extends V2.EventBase {
      type: 'v1.test_helpers.test_clock.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TestHelpers.TestClock>;
    }
    export interface PushedV1TestHelpersTestClockDeletedEvent
      extends V2.EventBase {
      type: 'v1.test_helpers.test_clock.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TestHelpers.TestClock>;
      pull(): Promise<V1TestHelpersTestClockDeletedEvent>;
    }

    /**
     * Occurs whenever a test clock fails to advance its frozen time.
     */
    export interface V1TestHelpersTestClockInternalFailureEvent
      extends V2.EventBase {
      type: 'v1.test_helpers.test_clock.internal_failure';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TestHelpers.TestClock>;
    }
    export interface PushedV1TestHelpersTestClockInternalFailureEvent
      extends V2.EventBase {
      type: 'v1.test_helpers.test_clock.internal_failure';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TestHelpers.TestClock>;
      pull(): Promise<V1TestHelpersTestClockInternalFailureEvent>;
    }

    /**
     * Occurs whenever a test clock transitions to a ready status.
     */
    export interface V1TestHelpersTestClockReadyEvent extends V2.EventBase {
      type: 'v1.test_helpers.test_clock.ready';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TestHelpers.TestClock>;
    }
    export interface PushedV1TestHelpersTestClockReadyEvent
      extends V2.EventBase {
      type: 'v1.test_helpers.test_clock.ready';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TestHelpers.TestClock>;
      pull(): Promise<V1TestHelpersTestClockReadyEvent>;
    }

    /**
     * Occurs whenever a top-up is canceled.
     */
    export interface V1TopupCanceledEvent extends V2.EventBase {
      type: 'v1.topup.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Topup>;
    }
    export interface PushedV1TopupCanceledEvent extends V2.EventBase {
      type: 'v1.topup.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Topup>;
      pull(): Promise<V1TopupCanceledEvent>;
    }

    /**
     * Occurs whenever a top-up is created.
     */
    export interface V1TopupCreatedEvent extends V2.EventBase {
      type: 'v1.topup.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Topup>;
    }
    export interface PushedV1TopupCreatedEvent extends V2.EventBase {
      type: 'v1.topup.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Topup>;
      pull(): Promise<V1TopupCreatedEvent>;
    }

    /**
     * Occurs whenever a top-up fails.
     */
    export interface V1TopupFailedEvent extends V2.EventBase {
      type: 'v1.topup.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Topup>;
    }
    export interface PushedV1TopupFailedEvent extends V2.EventBase {
      type: 'v1.topup.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Topup>;
      pull(): Promise<V1TopupFailedEvent>;
    }

    /**
     * Occurs whenever a top-up is reversed.
     */
    export interface V1TopupReversedEvent extends V2.EventBase {
      type: 'v1.topup.reversed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Topup>;
    }
    export interface PushedV1TopupReversedEvent extends V2.EventBase {
      type: 'v1.topup.reversed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Topup>;
      pull(): Promise<V1TopupReversedEvent>;
    }

    /**
     * Occurs whenever a top-up succeeds.
     */
    export interface V1TopupSucceededEvent extends V2.EventBase {
      type: 'v1.topup.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Topup>;
    }
    export interface PushedV1TopupSucceededEvent extends V2.EventBase {
      type: 'v1.topup.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Topup>;
      pull(): Promise<V1TopupSucceededEvent>;
    }

    /**
     * Occurs whenever a transfer is created.
     */
    export interface V1TransferCreatedEvent extends V2.EventBase {
      type: 'v1.transfer.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Transfer>;
    }
    export interface PushedV1TransferCreatedEvent extends V2.EventBase {
      type: 'v1.transfer.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Transfer>;
      pull(): Promise<V1TransferCreatedEvent>;
    }

    /**
     * Occurs whenever a transfer is reversed, including partial reversals.
     */
    export interface V1TransferReversedEvent extends V2.EventBase {
      type: 'v1.transfer.reversed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Transfer>;
    }
    export interface PushedV1TransferReversedEvent extends V2.EventBase {
      type: 'v1.transfer.reversed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Transfer>;
      pull(): Promise<V1TransferReversedEvent>;
    }

    /**
     * Occurs whenever a transfer's description or metadata is updated.
     */
    export interface V1TransferUpdatedEvent extends V2.EventBase {
      type: 'v1.transfer.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Transfer>;
    }
    export interface PushedV1TransferUpdatedEvent extends V2.EventBase {
      type: 'v1.transfer.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Transfer>;
      pull(): Promise<V1TransferUpdatedEvent>;
    }

    /**
     * This event occurs when a bill setting is updated.
     */
    export interface V2BillingBillSettingUpdatedEvent extends V2.EventBase {
      type: 'v2.billing.bill_setting.updated';
      // Retrieves data specific to this event.
      data: V2BillingBillSettingUpdatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.BillSetting>;
    }
    export interface PushedV2BillingBillSettingUpdatedEvent
      extends V2.EventBase {
      type: 'v2.billing.bill_setting.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.BillSetting>;
      pull(): Promise<V2BillingBillSettingUpdatedEvent>;
    }

    namespace V2BillingBillSettingUpdatedEvent {
      export interface Data {
        /**
         * Timestamp of when the object was updated.
         */
        updated: string;
      }
    }

    /**
     * Occurs when a billing Cadence generates an invoice.
     */
    export interface V2BillingCadenceBilledEvent extends V2.EventBase {
      type: 'v2.billing.cadence.billed';
      // Retrieves data specific to this event.
      data: V2BillingCadenceBilledEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.Cadence>;
    }
    export interface PushedV2BillingCadenceBilledEvent extends V2.EventBase {
      type: 'v2.billing.cadence.billed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.Cadence>;
      pull(): Promise<V2BillingCadenceBilledEvent>;
    }

    namespace V2BillingCadenceBilledEvent {
      export interface Data {
        /**
         * The IDs of the invoices that were generated by the tick for this Cadence.
         */
        invoices: Array<string>;
      }
    }

    /**
     * Occurs when a billing Cadence is canceled.
     */
    export interface V2BillingCadenceCanceledEvent extends V2.EventBase {
      type: 'v2.billing.cadence.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.Cadence>;
    }
    export interface PushedV2BillingCadenceCanceledEvent extends V2.EventBase {
      type: 'v2.billing.cadence.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.Cadence>;
      pull(): Promise<V2BillingCadenceCanceledEvent>;
    }

    /**
     * Occurs when a billing Cadence is created.
     */
    export interface V2BillingCadenceCreatedEvent extends V2.EventBase {
      type: 'v2.billing.cadence.created';
      // Retrieves data specific to this event.
      data: V2BillingCadenceCreatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.Cadence>;
    }
    export interface PushedV2BillingCadenceCreatedEvent extends V2.EventBase {
      type: 'v2.billing.cadence.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.Cadence>;
      pull(): Promise<V2BillingCadenceCreatedEvent>;
    }

    namespace V2BillingCadenceCreatedEvent {
      export interface Data {
        /**
         * Timestamp of when the object was created.
         */
        created: string;
      }
    }

    /**
     * Occurs when a LicenseFee is created.
     */
    export interface V2BillingLicenseFeeCreatedEvent extends V2.EventBase {
      type: 'v2.billing.license_fee.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.LicenseFee>;
    }
    export interface PushedV2BillingLicenseFeeCreatedEvent
      extends V2.EventBase {
      type: 'v2.billing.license_fee.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.LicenseFee>;
      pull(): Promise<V2BillingLicenseFeeCreatedEvent>;
    }

    /**
     * Occurs when a LicenseFee is updated.
     */
    export interface V2BillingLicenseFeeUpdatedEvent extends V2.EventBase {
      type: 'v2.billing.license_fee.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.LicenseFee>;
    }
    export interface PushedV2BillingLicenseFeeUpdatedEvent
      extends V2.EventBase {
      type: 'v2.billing.license_fee.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.LicenseFee>;
      pull(): Promise<V2BillingLicenseFeeUpdatedEvent>;
    }

    /**
     * Occurs when a LicenseFeeVersion is created.
     */
    export interface V2BillingLicenseFeeVersionCreatedEvent
      extends V2.EventBase {
      type: 'v2.billing.license_fee_version.created';
      // Retrieves data specific to this event.
      data: V2BillingLicenseFeeVersionCreatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.LicenseFeeVersion>;
    }
    export interface PushedV2BillingLicenseFeeVersionCreatedEvent
      extends V2.EventBase {
      type: 'v2.billing.license_fee_version.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.LicenseFeeVersion>;
      pull(): Promise<V2BillingLicenseFeeVersionCreatedEvent>;
    }

    namespace V2BillingLicenseFeeVersionCreatedEvent {
      export interface Data {
        /**
         * The ID of the LicenseFee that the LicenseFeeVersion belongs to.
         */
        license_fee_id: string;
      }
    }

    /**
     * Occurs when a LicensedItem is created.
     */
    export interface V2BillingLicensedItemCreatedEvent extends V2.EventBase {
      type: 'v2.billing.licensed_item.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.LicensedItem>;
    }
    export interface PushedV2BillingLicensedItemCreatedEvent
      extends V2.EventBase {
      type: 'v2.billing.licensed_item.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.LicensedItem>;
      pull(): Promise<V2BillingLicensedItemCreatedEvent>;
    }

    /**
     * Occurs when a LicensedItem is updated.
     */
    export interface V2BillingLicensedItemUpdatedEvent extends V2.EventBase {
      type: 'v2.billing.licensed_item.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.LicensedItem>;
    }
    export interface PushedV2BillingLicensedItemUpdatedEvent
      extends V2.EventBase {
      type: 'v2.billing.licensed_item.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.LicensedItem>;
      pull(): Promise<V2BillingLicensedItemUpdatedEvent>;
    }

    /**
     * Occurs when a MeteredItem is created.
     */
    export interface V2BillingMeteredItemCreatedEvent extends V2.EventBase {
      type: 'v2.billing.metered_item.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.MeteredItem>;
    }
    export interface PushedV2BillingMeteredItemCreatedEvent
      extends V2.EventBase {
      type: 'v2.billing.metered_item.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.MeteredItem>;
      pull(): Promise<V2BillingMeteredItemCreatedEvent>;
    }

    /**
     * Occurs when a MeteredItem is updated.
     */
    export interface V2BillingMeteredItemUpdatedEvent extends V2.EventBase {
      type: 'v2.billing.metered_item.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.MeteredItem>;
    }
    export interface PushedV2BillingMeteredItemUpdatedEvent
      extends V2.EventBase {
      type: 'v2.billing.metered_item.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.MeteredItem>;
      pull(): Promise<V2BillingMeteredItemUpdatedEvent>;
    }

    /**
     * Occurs when a PricingPlan is created.
     */
    export interface V2BillingPricingPlanCreatedEvent extends V2.EventBase {
      type: 'v2.billing.pricing_plan.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlan>;
    }
    export interface PushedV2BillingPricingPlanCreatedEvent
      extends V2.EventBase {
      type: 'v2.billing.pricing_plan.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlan>;
      pull(): Promise<V2BillingPricingPlanCreatedEvent>;
    }

    /**
     * Occurs when a PricingPlan is updated.
     */
    export interface V2BillingPricingPlanUpdatedEvent extends V2.EventBase {
      type: 'v2.billing.pricing_plan.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlan>;
    }
    export interface PushedV2BillingPricingPlanUpdatedEvent
      extends V2.EventBase {
      type: 'v2.billing.pricing_plan.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlan>;
      pull(): Promise<V2BillingPricingPlanUpdatedEvent>;
    }

    /**
     * Occurs when a PricingPlanComponent is created.
     */
    export interface V2BillingPricingPlanComponentCreatedEvent
      extends V2.EventBase {
      type: 'v2.billing.pricing_plan_component.created';
      // Retrieves data specific to this event.
      data: V2BillingPricingPlanComponentCreatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanComponent>;
    }
    export interface PushedV2BillingPricingPlanComponentCreatedEvent
      extends V2.EventBase {
      type: 'v2.billing.pricing_plan_component.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanComponent>;
      pull(): Promise<V2BillingPricingPlanComponentCreatedEvent>;
    }

    namespace V2BillingPricingPlanComponentCreatedEvent {
      export interface Data {
        /**
         * The ID of the PricingPlan that the PricingPlanComponent belongs to.
         */
        pricing_plan_id: string;
      }
    }

    /**
     * Occurs when a PricingPlanComponent is updated.
     */
    export interface V2BillingPricingPlanComponentUpdatedEvent
      extends V2.EventBase {
      type: 'v2.billing.pricing_plan_component.updated';
      // Retrieves data specific to this event.
      data: V2BillingPricingPlanComponentUpdatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanComponent>;
    }
    export interface PushedV2BillingPricingPlanComponentUpdatedEvent
      extends V2.EventBase {
      type: 'v2.billing.pricing_plan_component.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanComponent>;
      pull(): Promise<V2BillingPricingPlanComponentUpdatedEvent>;
    }

    namespace V2BillingPricingPlanComponentUpdatedEvent {
      export interface Data {
        /**
         * The ID of the PricingPlan that the PricingPlanComponent belongs to.
         */
        pricing_plan_id: string;
      }
    }

    /**
     * Occurs when a PricingPlanSubscription's collection is awaiting customer action.
     */
    export interface V2BillingPricingPlanSubscriptionCollectionAwaitingCustomerActionEvent
      extends V2.EventBase {
      type: 'v2.billing.pricing_plan_subscription.collection_awaiting_customer_action';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanSubscription>;
    }
    export interface PushedV2BillingPricingPlanSubscriptionCollectionAwaitingCustomerActionEvent
      extends V2.EventBase {
      type: 'v2.billing.pricing_plan_subscription.collection_awaiting_customer_action';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanSubscription>;
      pull(): Promise<
        V2BillingPricingPlanSubscriptionCollectionAwaitingCustomerActionEvent
      >;
    }

    /**
     * Occurs when a PricingPlanSubscription's collection is current.
     */
    export interface V2BillingPricingPlanSubscriptionCollectionCurrentEvent
      extends V2.EventBase {
      type: 'v2.billing.pricing_plan_subscription.collection_current';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanSubscription>;
    }
    export interface PushedV2BillingPricingPlanSubscriptionCollectionCurrentEvent
      extends V2.EventBase {
      type: 'v2.billing.pricing_plan_subscription.collection_current';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanSubscription>;
      pull(): Promise<V2BillingPricingPlanSubscriptionCollectionCurrentEvent>;
    }

    /**
     * Occurs when a PricingPlanSubscription's collection is past due.
     */
    export interface V2BillingPricingPlanSubscriptionCollectionPastDueEvent
      extends V2.EventBase {
      type: 'v2.billing.pricing_plan_subscription.collection_past_due';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanSubscription>;
    }
    export interface PushedV2BillingPricingPlanSubscriptionCollectionPastDueEvent
      extends V2.EventBase {
      type: 'v2.billing.pricing_plan_subscription.collection_past_due';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanSubscription>;
      pull(): Promise<V2BillingPricingPlanSubscriptionCollectionPastDueEvent>;
    }

    /**
     * Occurs when a PricingPlanSubscription's collection is paused.
     */
    export interface V2BillingPricingPlanSubscriptionCollectionPausedEvent
      extends V2.EventBase {
      type: 'v2.billing.pricing_plan_subscription.collection_paused';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanSubscription>;
    }
    export interface PushedV2BillingPricingPlanSubscriptionCollectionPausedEvent
      extends V2.EventBase {
      type: 'v2.billing.pricing_plan_subscription.collection_paused';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanSubscription>;
      pull(): Promise<V2BillingPricingPlanSubscriptionCollectionPausedEvent>;
    }

    /**
     * Occurs when a PricingPlanSubscription's collection is unpaid.
     */
    export interface V2BillingPricingPlanSubscriptionCollectionUnpaidEvent
      extends V2.EventBase {
      type: 'v2.billing.pricing_plan_subscription.collection_unpaid';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanSubscription>;
    }
    export interface PushedV2BillingPricingPlanSubscriptionCollectionUnpaidEvent
      extends V2.EventBase {
      type: 'v2.billing.pricing_plan_subscription.collection_unpaid';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanSubscription>;
      pull(): Promise<V2BillingPricingPlanSubscriptionCollectionUnpaidEvent>;
    }

    /**
     * Occurs when PricingPlanSubscription servicing is activated.
     */
    export interface V2BillingPricingPlanSubscriptionServicingActivatedEvent
      extends V2.EventBase {
      type: 'v2.billing.pricing_plan_subscription.servicing_activated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanSubscription>;
    }
    export interface PushedV2BillingPricingPlanSubscriptionServicingActivatedEvent
      extends V2.EventBase {
      type: 'v2.billing.pricing_plan_subscription.servicing_activated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanSubscription>;
      pull(): Promise<V2BillingPricingPlanSubscriptionServicingActivatedEvent>;
    }

    /**
     * Occurs when PricingPlanSubscription servicing is canceled.
     */
    export interface V2BillingPricingPlanSubscriptionServicingCanceledEvent
      extends V2.EventBase {
      type: 'v2.billing.pricing_plan_subscription.servicing_canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanSubscription>;
    }
    export interface PushedV2BillingPricingPlanSubscriptionServicingCanceledEvent
      extends V2.EventBase {
      type: 'v2.billing.pricing_plan_subscription.servicing_canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanSubscription>;
      pull(): Promise<V2BillingPricingPlanSubscriptionServicingCanceledEvent>;
    }

    /**
     * Occurs when PricingPlanSubscription servicing is paused.
     */
    export interface V2BillingPricingPlanSubscriptionServicingPausedEvent
      extends V2.EventBase {
      type: 'v2.billing.pricing_plan_subscription.servicing_paused';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanSubscription>;
    }
    export interface PushedV2BillingPricingPlanSubscriptionServicingPausedEvent
      extends V2.EventBase {
      type: 'v2.billing.pricing_plan_subscription.servicing_paused';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanSubscription>;
      pull(): Promise<V2BillingPricingPlanSubscriptionServicingPausedEvent>;
    }

    /**
     * Occurs when a PricingPlanVersion is created.
     */
    export interface V2BillingPricingPlanVersionCreatedEvent
      extends V2.EventBase {
      type: 'v2.billing.pricing_plan_version.created';
      // Retrieves data specific to this event.
      data: V2BillingPricingPlanVersionCreatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanVersion>;
    }
    export interface PushedV2BillingPricingPlanVersionCreatedEvent
      extends V2.EventBase {
      type: 'v2.billing.pricing_plan_version.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanVersion>;
      pull(): Promise<V2BillingPricingPlanVersionCreatedEvent>;
    }

    namespace V2BillingPricingPlanVersionCreatedEvent {
      export interface Data {
        /**
         * The ID of the PricingPlan that the PricingPlanVersion belongs to.
         */
        pricing_plan_id: string;
      }
    }

    /**
     * Occurs when a RateCard is created.
     */
    export interface V2BillingRateCardCreatedEvent extends V2.EventBase {
      type: 'v2.billing.rate_card.created';
      // Retrieves data specific to this event.
      data: V2BillingRateCardCreatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCard>;
    }
    export interface PushedV2BillingRateCardCreatedEvent extends V2.EventBase {
      type: 'v2.billing.rate_card.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCard>;
      pull(): Promise<V2BillingRateCardCreatedEvent>;
    }

    namespace V2BillingRateCardCreatedEvent {
      export interface Data {
        /**
         * Timestamp of when the object was created.
         */
        created: string;
      }
    }

    /**
     * Occurs when a RateCard is updated.
     */
    export interface V2BillingRateCardUpdatedEvent extends V2.EventBase {
      type: 'v2.billing.rate_card.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCard>;
    }
    export interface PushedV2BillingRateCardUpdatedEvent extends V2.EventBase {
      type: 'v2.billing.rate_card.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCard>;
      pull(): Promise<V2BillingRateCardUpdatedEvent>;
    }

    /**
     * Occurs when a RateCardRate is created.
     */
    export interface V2BillingRateCardRateCreatedEvent extends V2.EventBase {
      type: 'v2.billing.rate_card_rate.created';
      // Retrieves data specific to this event.
      data: V2BillingRateCardRateCreatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardRate>;
    }
    export interface PushedV2BillingRateCardRateCreatedEvent
      extends V2.EventBase {
      type: 'v2.billing.rate_card_rate.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardRate>;
      pull(): Promise<V2BillingRateCardRateCreatedEvent>;
    }

    namespace V2BillingRateCardRateCreatedEvent {
      export interface Data {
        /**
         * The ID of the BillableItem which this Rate is associated with.
         */
        billable_item: string;

        /**
         * Timestamp of when the object was created.
         */
        created: string;

        /**
         * The ID of the RateCard which this Rate belongs to.
         */
        rate_card: string;

        /**
         * The ID of the latest RateCard Version when the Rate was created.
         */
        rate_card_version: string;
      }
    }

    /**
     * Occurs when a RateCardSubscription is activated.
     */
    export interface V2BillingRateCardSubscriptionActivatedEvent
      extends V2.EventBase {
      type: 'v2.billing.rate_card_subscription.activated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
    }
    export interface PushedV2BillingRateCardSubscriptionActivatedEvent
      extends V2.EventBase {
      type: 'v2.billing.rate_card_subscription.activated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
      pull(): Promise<V2BillingRateCardSubscriptionActivatedEvent>;
    }

    /**
     * Occurs when a RateCardSubscription is canceled.
     */
    export interface V2BillingRateCardSubscriptionCanceledEvent
      extends V2.EventBase {
      type: 'v2.billing.rate_card_subscription.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
    }
    export interface PushedV2BillingRateCardSubscriptionCanceledEvent
      extends V2.EventBase {
      type: 'v2.billing.rate_card_subscription.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
      pull(): Promise<V2BillingRateCardSubscriptionCanceledEvent>;
    }

    /**
     * Occurs when a RateCardSubscription's collection is awaiting customer action.
     */
    export interface V2BillingRateCardSubscriptionCollectionAwaitingCustomerActionEvent
      extends V2.EventBase {
      type: 'v2.billing.rate_card_subscription.collection_awaiting_customer_action';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
    }
    export interface PushedV2BillingRateCardSubscriptionCollectionAwaitingCustomerActionEvent
      extends V2.EventBase {
      type: 'v2.billing.rate_card_subscription.collection_awaiting_customer_action';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
      pull(): Promise<
        V2BillingRateCardSubscriptionCollectionAwaitingCustomerActionEvent
      >;
    }

    /**
     * Occurs when a RateCardSubscription's collection is current.
     */
    export interface V2BillingRateCardSubscriptionCollectionCurrentEvent
      extends V2.EventBase {
      type: 'v2.billing.rate_card_subscription.collection_current';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
    }
    export interface PushedV2BillingRateCardSubscriptionCollectionCurrentEvent
      extends V2.EventBase {
      type: 'v2.billing.rate_card_subscription.collection_current';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
      pull(): Promise<V2BillingRateCardSubscriptionCollectionCurrentEvent>;
    }

    /**
     * Occurs when a RateCardSubscription's collection is past due.
     */
    export interface V2BillingRateCardSubscriptionCollectionPastDueEvent
      extends V2.EventBase {
      type: 'v2.billing.rate_card_subscription.collection_past_due';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
    }
    export interface PushedV2BillingRateCardSubscriptionCollectionPastDueEvent
      extends V2.EventBase {
      type: 'v2.billing.rate_card_subscription.collection_past_due';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
      pull(): Promise<V2BillingRateCardSubscriptionCollectionPastDueEvent>;
    }

    /**
     * Occurs when a RateCardSubscription's collection is paused.
     */
    export interface V2BillingRateCardSubscriptionCollectionPausedEvent
      extends V2.EventBase {
      type: 'v2.billing.rate_card_subscription.collection_paused';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
    }
    export interface PushedV2BillingRateCardSubscriptionCollectionPausedEvent
      extends V2.EventBase {
      type: 'v2.billing.rate_card_subscription.collection_paused';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
      pull(): Promise<V2BillingRateCardSubscriptionCollectionPausedEvent>;
    }

    /**
     * Occurs when a RateCardSubscription's collection is unpaid.
     */
    export interface V2BillingRateCardSubscriptionCollectionUnpaidEvent
      extends V2.EventBase {
      type: 'v2.billing.rate_card_subscription.collection_unpaid';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
    }
    export interface PushedV2BillingRateCardSubscriptionCollectionUnpaidEvent
      extends V2.EventBase {
      type: 'v2.billing.rate_card_subscription.collection_unpaid';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
      pull(): Promise<V2BillingRateCardSubscriptionCollectionUnpaidEvent>;
    }

    /**
     * Occurs when RateCardSubscription servicing is activated.
     */
    export interface V2BillingRateCardSubscriptionServicingActivatedEvent
      extends V2.EventBase {
      type: 'v2.billing.rate_card_subscription.servicing_activated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
    }
    export interface PushedV2BillingRateCardSubscriptionServicingActivatedEvent
      extends V2.EventBase {
      type: 'v2.billing.rate_card_subscription.servicing_activated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
      pull(): Promise<V2BillingRateCardSubscriptionServicingActivatedEvent>;
    }

    /**
     * Occurs when RateCardSubscription servicing is canceled.
     */
    export interface V2BillingRateCardSubscriptionServicingCanceledEvent
      extends V2.EventBase {
      type: 'v2.billing.rate_card_subscription.servicing_canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
    }
    export interface PushedV2BillingRateCardSubscriptionServicingCanceledEvent
      extends V2.EventBase {
      type: 'v2.billing.rate_card_subscription.servicing_canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
      pull(): Promise<V2BillingRateCardSubscriptionServicingCanceledEvent>;
    }

    /**
     * Occurs when RateCardSubscription servicing is paused.
     */
    export interface V2BillingRateCardSubscriptionServicingPausedEvent
      extends V2.EventBase {
      type: 'v2.billing.rate_card_subscription.servicing_paused';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
    }
    export interface PushedV2BillingRateCardSubscriptionServicingPausedEvent
      extends V2.EventBase {
      type: 'v2.billing.rate_card_subscription.servicing_paused';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
      pull(): Promise<V2BillingRateCardSubscriptionServicingPausedEvent>;
    }

    /**
     * Occurs when a RateCardVersion is created.
     */
    export interface V2BillingRateCardVersionCreatedEvent extends V2.EventBase {
      type: 'v2.billing.rate_card_version.created';
      // Retrieves data specific to this event.
      data: V2BillingRateCardVersionCreatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardVersion>;
    }
    export interface PushedV2BillingRateCardVersionCreatedEvent
      extends V2.EventBase {
      type: 'v2.billing.rate_card_version.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardVersion>;
      pull(): Promise<V2BillingRateCardVersionCreatedEvent>;
    }

    namespace V2BillingRateCardVersionCreatedEvent {
      export interface Data {
        /**
         * The ID of the RateCard that the RateCardVersion belongs to.
         */
        rate_card_id: string;
      }
    }

    /**
     * This event occurs when an account is closed.
     */
    export interface V2CoreAccountClosedEvent extends V2.EventBase {
      type: 'v2.core.account.closed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }
    export interface PushedV2CoreAccountClosedEvent extends V2.EventBase {
      type: 'v2.core.account.closed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
      pull(): Promise<V2CoreAccountClosedEvent>;
    }

    /**
     * Occurs when an Account is created.
     */
    export interface V2CoreAccountCreatedEvent extends V2.EventBase {
      type: 'v2.core.account.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }
    export interface PushedV2CoreAccountCreatedEvent extends V2.EventBase {
      type: 'v2.core.account.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
      pull(): Promise<V2CoreAccountCreatedEvent>;
    }

    /**
     * Occurs when an Account is updated.
     */
    export interface V2CoreAccountUpdatedEvent extends V2.EventBase {
      type: 'v2.core.account.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }
    export interface PushedV2CoreAccountUpdatedEvent extends V2.EventBase {
      type: 'v2.core.account.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
      pull(): Promise<V2CoreAccountUpdatedEvent>;
    }

    /**
     * Occurs when the status of an Account's customer configuration capability is updated.
     */
    export interface V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.account[configuration.customer].capability_status_updated';
      // Retrieves data specific to this event.
      data: V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }
    export interface PushedV2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.account[configuration.customer].capability_status_updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
      pull(): Promise<
        V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent
      >;
    }

    namespace V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent {
      export interface Data {
        /**
         * Open Enum. The capability which had its status updated.
         */
        updated_capability: 'automatic_indirect_tax';
      }
    }

    /**
     * Occurs when an Account's customer configuration is updated.
     */
    export interface V2CoreAccountIncludingConfigurationCustomerUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.account[configuration.customer].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }
    export interface PushedV2CoreAccountIncludingConfigurationCustomerUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.account[configuration.customer].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
      pull(): Promise<V2CoreAccountIncludingConfigurationCustomerUpdatedEvent>;
    }

    /**
     * Occurs when the status of an Account's merchant configuration capability is updated.
     */
    export interface V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.account[configuration.merchant].capability_status_updated';
      // Retrieves data specific to this event.
      data: V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }
    export interface PushedV2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.account[configuration.merchant].capability_status_updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
      pull(): Promise<
        V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent
      >;
    }

    namespace V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent {
      export interface Data {
        /**
         * Open Enum. The capability which had its status updated.
         */
        updated_capability: Data.UpdatedCapability;
      }

      namespace Data {
        export type UpdatedCapability =
          | 'ach_debit_payments'
          | 'acss_debit_payments'
          | 'affirm_payments'
          | 'afterpay_clearpay_payments'
          | 'alma_payments'
          | 'amazon_pay_payments'
          | 'au_becs_debit_payments'
          | 'bacs_debit_payments'
          | 'bancontact_payments'
          | 'blik_payments'
          | 'boleto_payments'
          | 'card_payments'
          | 'cartes_bancaires_payments'
          | 'cashapp_payments'
          | 'eps_payments'
          | 'fpx_payments'
          | 'gb_bank_transfer_payments'
          | 'grabpay_payments'
          | 'ideal_payments'
          | 'jcb_payments'
          | 'jp_bank_transfer_payments'
          | 'kakao_pay_payments'
          | 'klarna_payments'
          | 'konbini_payments'
          | 'kr_card_payments'
          | 'link_payments'
          | 'mobilepay_payments'
          | 'multibanco_payments'
          | 'mx_bank_transfer_payments'
          | 'naver_pay_payments'
          | 'oxxo_payments'
          | 'p24_payments'
          | 'payco_payments'
          | 'paynow_payments'
          | 'stripe_balance.payouts'
          | 'pay_by_bank_payments'
          | 'promptpay_payments'
          | 'revolut_pay_payments'
          | 'samsung_pay_payments'
          | 'sepa_bank_transfer_payments'
          | 'sepa_debit_payments'
          | 'swish_payments'
          | 'twint_payments'
          | 'us_bank_transfer_payments'
          | 'zip_payments';
      }
    }

    /**
     * Occurs when an Account's merchant configuration is updated.
     */
    export interface V2CoreAccountIncludingConfigurationMerchantUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.account[configuration.merchant].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }
    export interface PushedV2CoreAccountIncludingConfigurationMerchantUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.account[configuration.merchant].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
      pull(): Promise<V2CoreAccountIncludingConfigurationMerchantUpdatedEvent>;
    }

    /**
     * Occurs when the status of an Account's recipient configuration capability is updated.
     */
    export interface V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.account[configuration.recipient].capability_status_updated';
      // Retrieves data specific to this event.
      data: V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }
    export interface PushedV2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.account[configuration.recipient].capability_status_updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
      pull(): Promise<
        V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent
      >;
    }

    namespace V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent {
      export interface Data {
        /**
         * Open Enum. The capability which had its status updated.
         */
        updated_capability: Data.UpdatedCapability;
      }

      namespace Data {
        export type UpdatedCapability =
          | 'bank_accounts.local'
          | 'bank_accounts.wire'
          | 'cards'
          | 'crypto_wallets_v2'
          | 'stripe_balance.payouts'
          | 'stripe_balance.stripe_transfers'
          | 'stripe.transfers';
      }
    }

    /**
     * Occurs when a Recipient's configuration is updated.
     */
    export interface V2CoreAccountIncludingConfigurationRecipientUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.account[configuration.recipient].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }
    export interface PushedV2CoreAccountIncludingConfigurationRecipientUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.account[configuration.recipient].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
      pull(): Promise<V2CoreAccountIncludingConfigurationRecipientUpdatedEvent>;
    }

    /**
     * Occurs when the status of an Account's storer configuration capability is updated.
     */
    export interface V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.account[configuration.storer].capability_status_updated';
      // Retrieves data specific to this event.
      data: V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }
    export interface PushedV2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.account[configuration.storer].capability_status_updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
      pull(): Promise<
        V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEvent
      >;
    }

    namespace V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEvent {
      export interface Data {
        /**
         * Open Enum. The capability which had its status updated.
         */
        updated_capability: Data.UpdatedCapability;
      }

      namespace Data {
        export type UpdatedCapability =
          | 'financial_addressses.bank_accounts'
          | 'financial_addressses.crypto_wallets'
          | 'holds_currencies.eur'
          | 'holds_currencies.gbp'
          | 'holds_currencies.usd'
          | 'holds_currencies.usdc'
          | 'inbound_transfers.bank_accounts'
          | 'outbound_payments.bank_accounts'
          | 'outbound_payments.cards'
          | 'outbound_payments.crypto_wallets'
          | 'outbound_payments.financial_accounts'
          | 'outbound_transfers.bank_accounts'
          | 'outbound_transfers.crypto_wallets'
          | 'outbound_transfers.financial_accounts';
      }
    }

    /**
     * Occurs when a Storer's configuration is updated.
     */
    export interface V2CoreAccountIncludingConfigurationStorerUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.account[configuration.storer].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }
    export interface PushedV2CoreAccountIncludingConfigurationStorerUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.account[configuration.storer].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
      pull(): Promise<V2CoreAccountIncludingConfigurationStorerUpdatedEvent>;
    }

    /**
     * This event occurs when account defaults are created or updated.
     */
    export interface V2CoreAccountIncludingDefaultsUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.account[defaults].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }
    export interface PushedV2CoreAccountIncludingDefaultsUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.account[defaults].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
      pull(): Promise<V2CoreAccountIncludingDefaultsUpdatedEvent>;
    }

    /**
     * Occurs when an Identity is updated.
     */
    export interface V2CoreAccountIncludingIdentityUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.account[identity].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }
    export interface PushedV2CoreAccountIncludingIdentityUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.account[identity].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
      pull(): Promise<V2CoreAccountIncludingIdentityUpdatedEvent>;
    }

    /**
     * Occurs when an Account's requirements are updated.
     */
    export interface V2CoreAccountIncludingRequirementsUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.account[requirements].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }
    export interface PushedV2CoreAccountIncludingRequirementsUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.account[requirements].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
      pull(): Promise<V2CoreAccountIncludingRequirementsUpdatedEvent>;
    }

    /**
     * Occurs when the generated AccountLink is completed.
     */
    export interface V2CoreAccountLinkReturnedEvent extends V2.EventBase {
      type: 'v2.core.account_link.returned';
      // Retrieves data specific to this event.
      data: V2CoreAccountLinkReturnedEvent.Data;
    }
    export interface PushedV2CoreAccountLinkReturnedEvent extends V2.EventBase {
      type: 'v2.core.account_link.returned';
      pull(): Promise<V2CoreAccountLinkReturnedEvent>;
    }

    namespace V2CoreAccountLinkReturnedEvent {
      export interface Data {
        /**
         * The ID of the v2 account.
         */
        account_id: string;

        /**
         * Configurations on the Account that was onboarded via the account link.
         */
        configurations: Array<Data.Configuration>;

        /**
         * Open Enum. The use case type of the account link that has been completed.
         */
        use_case: Data.UseCase;
      }

      namespace Data {
        export type Configuration =
          | 'customer'
          | 'merchant'
          | 'recipient'
          | 'storer';

        export type UseCase = 'account_onboarding' | 'account_update';
      }
    }

    /**
     * Occurs when a Person is created.
     */
    export interface V2CoreAccountPersonCreatedEvent extends V2.EventBase {
      type: 'v2.core.account_person.created';
      // Retrieves data specific to this event.
      data: V2CoreAccountPersonCreatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.AccountPerson>;
    }
    export interface PushedV2CoreAccountPersonCreatedEvent
      extends V2.EventBase {
      type: 'v2.core.account_person.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.AccountPerson>;
      pull(): Promise<V2CoreAccountPersonCreatedEvent>;
    }

    namespace V2CoreAccountPersonCreatedEvent {
      export interface Data {
        /**
         * The ID of the v2 account.
         */
        account_id: string;
      }
    }

    /**
     * Occurs when a Person is deleted.
     */
    export interface V2CoreAccountPersonDeletedEvent extends V2.EventBase {
      type: 'v2.core.account_person.deleted';
      // Retrieves data specific to this event.
      data: V2CoreAccountPersonDeletedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.AccountPerson>;
    }
    export interface PushedV2CoreAccountPersonDeletedEvent
      extends V2.EventBase {
      type: 'v2.core.account_person.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.AccountPerson>;
      pull(): Promise<V2CoreAccountPersonDeletedEvent>;
    }

    namespace V2CoreAccountPersonDeletedEvent {
      export interface Data {
        /**
         * The ID of the v2 account.
         */
        account_id: string;
      }
    }

    /**
     * Occurs when a Person is updated.
     */
    export interface V2CoreAccountPersonUpdatedEvent extends V2.EventBase {
      type: 'v2.core.account_person.updated';
      // Retrieves data specific to this event.
      data: V2CoreAccountPersonUpdatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.AccountPerson>;
    }
    export interface PushedV2CoreAccountPersonUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.account_person.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.AccountPerson>;
      pull(): Promise<V2CoreAccountPersonUpdatedEvent>;
    }

    namespace V2CoreAccountPersonUpdatedEvent {
      export interface Data {
        /**
         * The ID of the v2 account.
         */
        account_id: string;
      }
    }

    /**
     * Occurs when a claimable sandbox is claimed.
     */
    export interface V2CoreClaimableSandboxClaimedEvent extends V2.EventBase {
      type: 'v2.core.claimable_sandbox.claimed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.ClaimableSandbox>;
    }
    export interface PushedV2CoreClaimableSandboxClaimedEvent
      extends V2.EventBase {
      type: 'v2.core.claimable_sandbox.claimed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.ClaimableSandbox>;
      pull(): Promise<V2CoreClaimableSandboxClaimedEvent>;
    }

    /**
     * Occurs when a claimable sandbox is created.
     */
    export interface V2CoreClaimableSandboxCreatedEvent extends V2.EventBase {
      type: 'v2.core.claimable_sandbox.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.ClaimableSandbox>;
    }
    export interface PushedV2CoreClaimableSandboxCreatedEvent
      extends V2.EventBase {
      type: 'v2.core.claimable_sandbox.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.ClaimableSandbox>;
      pull(): Promise<V2CoreClaimableSandboxCreatedEvent>;
    }

    /**
     * Occurs when a claimable sandbox expires.
     */
    export interface V2CoreClaimableSandboxExpiredEvent extends V2.EventBase {
      type: 'v2.core.claimable_sandbox.expired';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.ClaimableSandbox>;
    }
    export interface PushedV2CoreClaimableSandboxExpiredEvent
      extends V2.EventBase {
      type: 'v2.core.claimable_sandbox.expired';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.ClaimableSandbox>;
      pull(): Promise<V2CoreClaimableSandboxExpiredEvent>;
    }

    /**
     * Occurs when a claimable sandbox is expiring in 7 days.
     */
    export interface V2CoreClaimableSandboxExpiringEvent extends V2.EventBase {
      type: 'v2.core.claimable_sandbox.expiring';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.ClaimableSandbox>;
    }
    export interface PushedV2CoreClaimableSandboxExpiringEvent
      extends V2.EventBase {
      type: 'v2.core.claimable_sandbox.expiring';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.ClaimableSandbox>;
      pull(): Promise<V2CoreClaimableSandboxExpiringEvent>;
    }

    /**
     * Occurs when a claimable sandbox is activated by the user with the intention to go live and your Stripe app is installed on the live account.
     */
    export interface V2CoreClaimableSandboxSandboxDetailsOwnerAccountUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.claimable_sandbox.sandbox_details_owner_account_updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.ClaimableSandbox>;
    }
    export interface PushedV2CoreClaimableSandboxSandboxDetailsOwnerAccountUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.claimable_sandbox.sandbox_details_owner_account_updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.ClaimableSandbox>;
      pull(): Promise<
        V2CoreClaimableSandboxSandboxDetailsOwnerAccountUpdatedEvent
      >;
    }

    /**
     * A ping event used to test the connection to an EventDestination.
     */
    export interface V2CoreEventDestinationPingEvent extends V2.EventBase {
      type: 'v2.core.event_destination.ping';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.EventDestination>;
    }
    export interface PushedV2CoreEventDestinationPingEvent
      extends V2.EventBase {
      type: 'v2.core.event_destination.ping';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.EventDestination>;
      pull(): Promise<V2CoreEventDestinationPingEvent>;
    }

    /**
     * Occurs when an API error alert is firing.
     */
    export interface V2CoreHealthApiErrorFiringEvent extends V2.EventBase {
      type: 'v2.core.health.api_error.firing';
      // Retrieves data specific to this event.
      data: V2CoreHealthApiErrorFiringEvent.Data;
    }
    export interface PushedV2CoreHealthApiErrorFiringEvent
      extends V2.EventBase {
      type: 'v2.core.health.api_error.firing';
      pull(): Promise<V2CoreHealthApiErrorFiringEvent>;
    }

    namespace V2CoreHealthApiErrorFiringEvent {
      export interface Data {
        /**
         * The alert ID.
         */
        alert_id: string;

        /**
         * The grouping key for the alert.
         */
        grouping_key: string;

        /**
         * The user impact.
         */
        impact: Data.Impact;

        /**
         * The time when impact on the user experience was first detected.
         */
        started_at: string;

        /**
         * A short description of the alert.
         */
        summary: string;
      }

      namespace Data {
        export interface Impact {
          /**
           * The canonical path.
           */
          canonical_path: string;

          /**
           * The error code.
           */
          error_code?: string;

          /**
           * The HTTP method.
           */
          http_method: Impact.HttpMethod;

          /**
           * The HTTP status.
           */
          http_status: string;

          /**
           * The number of impacted requests.
           */
          impacted_requests: number;
        }

        namespace Impact {
          export type HttpMethod = 'DELETE' | 'GET' | 'POST' | 'PUT';
        }
      }
    }

    /**
     * Occurs when an API error alert is resolved.
     */
    export interface V2CoreHealthApiErrorResolvedEvent extends V2.EventBase {
      type: 'v2.core.health.api_error.resolved';
      // Retrieves data specific to this event.
      data: V2CoreHealthApiErrorResolvedEvent.Data;
    }
    export interface PushedV2CoreHealthApiErrorResolvedEvent
      extends V2.EventBase {
      type: 'v2.core.health.api_error.resolved';
      pull(): Promise<V2CoreHealthApiErrorResolvedEvent>;
    }

    namespace V2CoreHealthApiErrorResolvedEvent {
      export interface Data {
        /**
         * The grouping key for the alert.
         */
        grouping_key: string;

        /**
         * The user impact.
         */
        impact: Data.Impact;

        /**
         * The time when the user experience has returned to expected levels.
         */
        resolved_at: string;

        /**
         * The time when impact on the user experience was first detected.
         */
        started_at: string;

        /**
         * A short description of the alert.
         */
        summary: string;
      }

      namespace Data {
        export interface Impact {
          /**
           * The canonical path.
           */
          canonical_path: string;

          /**
           * The error code.
           */
          error_code?: string;

          /**
           * The HTTP method.
           */
          http_method: Impact.HttpMethod;

          /**
           * The HTTP status.
           */
          http_status: string;

          /**
           * The number of impacted requests.
           */
          impacted_requests: number;
        }

        namespace Impact {
          export type HttpMethod = 'DELETE' | 'GET' | 'POST' | 'PUT';
        }
      }
    }

    /**
     * Occurs when an API latency alert is firing.
     */
    export interface V2CoreHealthApiLatencyFiringEvent extends V2.EventBase {
      type: 'v2.core.health.api_latency.firing';
      // Retrieves data specific to this event.
      data: V2CoreHealthApiLatencyFiringEvent.Data;
    }
    export interface PushedV2CoreHealthApiLatencyFiringEvent
      extends V2.EventBase {
      type: 'v2.core.health.api_latency.firing';
      pull(): Promise<V2CoreHealthApiLatencyFiringEvent>;
    }

    namespace V2CoreHealthApiLatencyFiringEvent {
      export interface Data {
        /**
         * The alert ID.
         */
        alert_id: string;

        /**
         * The grouping key for the alert.
         */
        grouping_key: string;

        /**
         * The user impact.
         */
        impact: Data.Impact;

        /**
         * The time when impact on the user experience was first detected.
         */
        started_at: string;

        /**
         * A short description of the alert.
         */
        summary: string;
      }

      namespace Data {
        export interface Impact {
          /**
           * The canonical path.
           */
          canonical_path: string;

          /**
           * The HTTP method.
           */
          http_method: Impact.HttpMethod;

          /**
           * The HTTP status.
           */
          http_status: string;

          /**
           * The number of impacted requests.
           */
          impacted_requests: number;
        }

        namespace Impact {
          export type HttpMethod = 'DELETE' | 'GET' | 'POST' | 'PUT';
        }
      }
    }

    /**
     * Occurs when an API latency alert is resolved.
     */
    export interface V2CoreHealthApiLatencyResolvedEvent extends V2.EventBase {
      type: 'v2.core.health.api_latency.resolved';
      // Retrieves data specific to this event.
      data: V2CoreHealthApiLatencyResolvedEvent.Data;
    }
    export interface PushedV2CoreHealthApiLatencyResolvedEvent
      extends V2.EventBase {
      type: 'v2.core.health.api_latency.resolved';
      pull(): Promise<V2CoreHealthApiLatencyResolvedEvent>;
    }

    namespace V2CoreHealthApiLatencyResolvedEvent {
      export interface Data {
        /**
         * The grouping key for the alert.
         */
        grouping_key: string;

        /**
         * The user impact.
         */
        impact: Data.Impact;

        /**
         * The time when the user experience has returned to expected levels.
         */
        resolved_at: string;

        /**
         * The time when impact on the user experience was first detected.
         */
        started_at: string;

        /**
         * A short description of the alert.
         */
        summary: string;
      }

      namespace Data {
        export interface Impact {
          /**
           * The canonical path.
           */
          canonical_path: string;

          /**
           * The HTTP method.
           */
          http_method: Impact.HttpMethod;

          /**
           * The HTTP status.
           */
          http_status: string;

          /**
           * The number of impacted requests.
           */
          impacted_requests: number;
        }

        namespace Impact {
          export type HttpMethod = 'DELETE' | 'GET' | 'POST' | 'PUT';
        }
      }
    }

    /**
     * Occurs when an authorization rate drop alert is firing.
     */
    export interface V2CoreHealthAuthorizationRateDropFiringEvent
      extends V2.EventBase {
      type: 'v2.core.health.authorization_rate_drop.firing';
      // Retrieves data specific to this event.
      data: V2CoreHealthAuthorizationRateDropFiringEvent.Data;
    }
    export interface PushedV2CoreHealthAuthorizationRateDropFiringEvent
      extends V2.EventBase {
      type: 'v2.core.health.authorization_rate_drop.firing';
      pull(): Promise<V2CoreHealthAuthorizationRateDropFiringEvent>;
    }

    namespace V2CoreHealthAuthorizationRateDropFiringEvent {
      export interface Data {
        /**
         * The alert ID.
         */
        alert_id: string;

        /**
         * The grouping key for the alert.
         */
        grouping_key: string;

        /**
         * The user impact.
         */
        impact: Data.Impact;

        /**
         * The time when impact on the user experience was first detected.
         */
        started_at: string;

        /**
         * A short description of the alert.
         */
        summary: string;
      }

      namespace Data {
        export interface Impact {
          /**
           * The type of the charge.
           */
          charge_type: Impact.ChargeType;

          /**
           * The current authorization rate percentage.
           */
          current_percentage: string;

          /**
           * Dimensions that describe what subset of payments are impacted.
           */
          dimensions?: Array<Impact.Dimension>;

          /**
           * The type of the payment method.
           */
          payment_method_type: Impact.PaymentMethodType;

          /**
           * The previous authorization rate percentage.
           */
          previous_percentage: string;
        }

        namespace Impact {
          export type ChargeType = 'money_moving' | 'validation';

          export interface Dimension {
            /**
             * The issuer dimension.
             */
            issuer?: string;

            /**
             * The type of the dimension.
             */
            type: 'issuer';
          }

          export type PaymentMethodType =
            | 'acss_debit'
            | 'affirm'
            | 'afterpay_clearpay'
            | 'alipay'
            | 'alma'
            | 'amazon_pay'
            | 'apple_pay'
            | 'au_becs_debit'
            | 'bacs_debit'
            | 'bancontact'
            | 'blik'
            | 'boleto'
            | 'card'
            | 'card_present'
            | 'cartes_bancaires'
            | 'cashapp'
            | 'dummy_passthrough_card'
            | 'eps'
            | 'fpx'
            | 'giropay'
            | 'grabpay'
            | 'ideal'
            | 'interac_present'
            | 'kakao_pay'
            | 'klarna'
            | 'konbini'
            | 'link'
            | 'mobilepay'
            | 'multibanco'
            | 'naver_pay'
            | 'oxxo'
            | 'p24'
            | 'paper_check'
            | 'paynow'
            | 'paypal'
            | 'payto'
            | 'pay_by_bank'
            | 'pix'
            | 'promptpay'
            | 'revolut_pay'
            | 'sepa_debit'
            | 'sofort'
            | 'swish'
            | 'twint'
            | 'upi'
            | 'wechat_pay'
            | 'zip';
        }
      }
    }

    /**
     * Occurs when an authorization rate drop alert is resolved.
     */
    export interface V2CoreHealthAuthorizationRateDropResolvedEvent
      extends V2.EventBase {
      type: 'v2.core.health.authorization_rate_drop.resolved';
      // Retrieves data specific to this event.
      data: V2CoreHealthAuthorizationRateDropResolvedEvent.Data;
    }
    export interface PushedV2CoreHealthAuthorizationRateDropResolvedEvent
      extends V2.EventBase {
      type: 'v2.core.health.authorization_rate_drop.resolved';
      pull(): Promise<V2CoreHealthAuthorizationRateDropResolvedEvent>;
    }

    namespace V2CoreHealthAuthorizationRateDropResolvedEvent {
      export interface Data {
        /**
         * The grouping key for the alert.
         */
        grouping_key: string;

        /**
         * The user impact.
         */
        impact: Data.Impact;

        /**
         * The time when the user experience has returned to expected levels.
         */
        resolved_at: string;

        /**
         * The time when impact on the user experience was first detected.
         */
        started_at: string;

        /**
         * A short description of the alert.
         */
        summary: string;
      }

      namespace Data {
        export interface Impact {
          /**
           * The type of the charge.
           */
          charge_type: Impact.ChargeType;

          /**
           * The current authorization rate percentage.
           */
          current_percentage: string;

          /**
           * Dimensions that describe what subset of payments are impacted.
           */
          dimensions?: Array<Impact.Dimension>;

          /**
           * The type of the payment method.
           */
          payment_method_type: Impact.PaymentMethodType;

          /**
           * The previous authorization rate percentage.
           */
          previous_percentage: string;
        }

        namespace Impact {
          export type ChargeType = 'money_moving' | 'validation';

          export interface Dimension {
            /**
             * The issuer dimension.
             */
            issuer?: string;

            /**
             * The type of the dimension.
             */
            type: 'issuer';
          }

          export type PaymentMethodType =
            | 'acss_debit'
            | 'affirm'
            | 'afterpay_clearpay'
            | 'alipay'
            | 'alma'
            | 'amazon_pay'
            | 'apple_pay'
            | 'au_becs_debit'
            | 'bacs_debit'
            | 'bancontact'
            | 'blik'
            | 'boleto'
            | 'card'
            | 'card_present'
            | 'cartes_bancaires'
            | 'cashapp'
            | 'dummy_passthrough_card'
            | 'eps'
            | 'fpx'
            | 'giropay'
            | 'grabpay'
            | 'ideal'
            | 'interac_present'
            | 'kakao_pay'
            | 'klarna'
            | 'konbini'
            | 'link'
            | 'mobilepay'
            | 'multibanco'
            | 'naver_pay'
            | 'oxxo'
            | 'p24'
            | 'paper_check'
            | 'paynow'
            | 'paypal'
            | 'payto'
            | 'pay_by_bank'
            | 'pix'
            | 'promptpay'
            | 'revolut_pay'
            | 'sepa_debit'
            | 'sofort'
            | 'swish'
            | 'twint'
            | 'upi'
            | 'wechat_pay'
            | 'zip';
        }
      }
    }

    /**
     * Occurs when an event generation failure alert is resolved.
     */
    export interface V2CoreHealthEventGenerationFailureResolvedEvent
      extends V2.EventBase {
      type: 'v2.core.health.event_generation_failure.resolved';
      // Retrieves data specific to this event.
      data: V2CoreHealthEventGenerationFailureResolvedEvent.Data;
    }
    export interface PushedV2CoreHealthEventGenerationFailureResolvedEvent
      extends V2.EventBase {
      type: 'v2.core.health.event_generation_failure.resolved';
      pull(): Promise<V2CoreHealthEventGenerationFailureResolvedEvent>;
    }

    namespace V2CoreHealthEventGenerationFailureResolvedEvent {
      export interface Data {
        /**
         * The alert ID.
         */
        alert_id: string;

        /**
         * The grouping key for the alert.
         */
        grouping_key: string;

        /**
         * The user impact.
         */
        impact: Data.Impact;

        /**
         * The time when the user experience has returned to expected levels.
         */
        resolved_at: string;

        /**
         * A short description of the alert.
         */
        summary: string;
      }

      namespace Data {
        export interface Impact {
          /**
           * The account id the event should have been generated for. Only present when the account is a connected account.
           */
          account?: string;

          /**
           * The type of event that Stripe failed to generate.
           */
          event_type: string;

          /**
           * Indicates if the event was for livemode or not.
           */
          livemode: boolean;

          /**
           * The number of webhooks that Stripe failed to create and deliver.
           */
          missing_delivery_attempts: number;

          /**
           * The related object id.
           */
          related_object_id: string;
        }
      }
    }

    /**
     * Occurs when the fraud rate has increased.
     */
    export interface V2CoreHealthFraudRateIncreasedEvent extends V2.EventBase {
      type: 'v2.core.health.fraud_rate.increased';
      // Retrieves data specific to this event.
      data: V2CoreHealthFraudRateIncreasedEvent.Data;
    }
    export interface PushedV2CoreHealthFraudRateIncreasedEvent
      extends V2.EventBase {
      type: 'v2.core.health.fraud_rate.increased';
      pull(): Promise<V2CoreHealthFraudRateIncreasedEvent>;
    }

    namespace V2CoreHealthFraudRateIncreasedEvent {
      export interface Data {
        /**
         * The alert ID.
         */
        alert_id: string;

        /**
         * The grouping key for the alert.
         */
        grouping_key: string;

        /**
         * The user impact.
         */
        impact: Data.Impact;

        /**
         * The time when the user experience has returned to expected levels.
         */
        resolved_at?: string;

        /**
         * The time when impact on the user experience was first detected.
         */
        started_at: string;

        /**
         * A short description of the alert.
         */
        summary: string;
      }

      namespace Data {
        export interface Impact {
          /**
           * Fraud attack type.
           */
          attack_type: Impact.AttackType;

          /**
           * The number of impacted requests which are detected.
           */
          impacted_requests: number;

          /**
           * Estimated aggregated amount for the impacted requests.
           */
          realized_fraud_amount: V2.Amount;
        }

        namespace Impact {
          export type AttackType = 'spike' | 'sustained_attack';
        }
      }
    }

    /**
     * Occurs when an issuing authorization request errors alert is firing.
     */
    export interface V2CoreHealthIssuingAuthorizationRequestErrorsFiringEvent
      extends V2.EventBase {
      type: 'v2.core.health.issuing_authorization_request_errors.firing';
      // Retrieves data specific to this event.
      data: V2CoreHealthIssuingAuthorizationRequestErrorsFiringEvent.Data;
    }
    export interface PushedV2CoreHealthIssuingAuthorizationRequestErrorsFiringEvent
      extends V2.EventBase {
      type: 'v2.core.health.issuing_authorization_request_errors.firing';
      pull(): Promise<V2CoreHealthIssuingAuthorizationRequestErrorsFiringEvent>;
    }

    namespace V2CoreHealthIssuingAuthorizationRequestErrorsFiringEvent {
      export interface Data {
        /**
         * The grouping key for the alert.
         */
        grouping_key: string;

        /**
         * The user impact.
         */
        impact: Data.Impact;

        /**
         * The time when impact on the user experience was first detected.
         */
        started_at: string;

        /**
         * A short description of the alert.
         */
        summary: string;
      }

      namespace Data {
        export interface Impact {
          /**
           * Estimated aggregated amount for the approved requests.
           */
          approved_amount?: V2.Amount;

          /**
           * The number of approved requests which are impacted.
           */
          approved_impacted_requests?: number;

          /**
           * Estimated aggregated amount for the declined requests.
           */
          declined_amount?: V2.Amount;

          /**
           * The number of declined requests which are impacted.
           */
          declined_impacted_requests?: number;
        }
      }
    }

    /**
     * Occurs when an issuing authorization request errors alert is resolved.
     */
    export interface V2CoreHealthIssuingAuthorizationRequestErrorsResolvedEvent
      extends V2.EventBase {
      type: 'v2.core.health.issuing_authorization_request_errors.resolved';
      // Retrieves data specific to this event.
      data: V2CoreHealthIssuingAuthorizationRequestErrorsResolvedEvent.Data;
    }
    export interface PushedV2CoreHealthIssuingAuthorizationRequestErrorsResolvedEvent
      extends V2.EventBase {
      type: 'v2.core.health.issuing_authorization_request_errors.resolved';
      pull(): Promise<
        V2CoreHealthIssuingAuthorizationRequestErrorsResolvedEvent
      >;
    }

    namespace V2CoreHealthIssuingAuthorizationRequestErrorsResolvedEvent {
      export interface Data {
        /**
         * The grouping key for the alert.
         */
        grouping_key: string;

        /**
         * The user impact.
         */
        impact: Data.Impact;

        /**
         * The time when the user experience has returned to expected levels.
         */
        resolved_at: string;

        /**
         * The time when impact on the user experience was first detected.
         */
        started_at: string;

        /**
         * A short description of the alert.
         */
        summary: string;
      }

      namespace Data {
        export interface Impact {
          /**
           * Estimated aggregated amount for the approved requests.
           */
          approved_amount?: V2.Amount;

          /**
           * The number of approved requests which are impacted.
           */
          approved_impacted_requests?: number;

          /**
           * Estimated aggregated amount for the declined requests.
           */
          declined_amount?: V2.Amount;

          /**
           * The number of declined requests which are impacted.
           */
          declined_impacted_requests?: number;
        }
      }
    }

    /**
     * Occurs when an issuing authorization request timeout alert is firing.
     */
    export interface V2CoreHealthIssuingAuthorizationRequestTimeoutFiringEvent
      extends V2.EventBase {
      type: 'v2.core.health.issuing_authorization_request_timeout.firing';
      // Retrieves data specific to this event.
      data: V2CoreHealthIssuingAuthorizationRequestTimeoutFiringEvent.Data;
    }
    export interface PushedV2CoreHealthIssuingAuthorizationRequestTimeoutFiringEvent
      extends V2.EventBase {
      type: 'v2.core.health.issuing_authorization_request_timeout.firing';
      pull(): Promise<
        V2CoreHealthIssuingAuthorizationRequestTimeoutFiringEvent
      >;
    }

    namespace V2CoreHealthIssuingAuthorizationRequestTimeoutFiringEvent {
      export interface Data {
        /**
         * The alert ID.
         */
        alert_id: string;

        /**
         * The grouping key for the alert.
         */
        grouping_key: string;

        /**
         * The user impact.
         */
        impact: Data.Impact;

        /**
         * The time when impact on the user experience was first detected.
         */
        started_at: string;

        /**
         * A short description of the alert.
         */
        summary: string;
      }

      namespace Data {
        export interface Impact {
          /**
           * Estimated aggregated amount for the approved requests.
           */
          approved_amount?: V2.Amount;

          /**
           * The number of approved requests which are impacted.
           */
          approved_impacted_requests?: number;

          /**
           * Estimated aggregated amount for the declined requests.
           */
          declined_amount?: V2.Amount;

          /**
           * The number of declined requests which are impacted.
           */
          declined_impacted_requests?: number;
        }
      }
    }

    /**
     * Occurs when an issuing authorization request timeout alert is resolved.
     */
    export interface V2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEvent
      extends V2.EventBase {
      type: 'v2.core.health.issuing_authorization_request_timeout.resolved';
      // Retrieves data specific to this event.
      data: V2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEvent.Data;
    }
    export interface PushedV2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEvent
      extends V2.EventBase {
      type: 'v2.core.health.issuing_authorization_request_timeout.resolved';
      pull(): Promise<
        V2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEvent
      >;
    }

    namespace V2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEvent {
      export interface Data {
        /**
         * The grouping key for the alert.
         */
        grouping_key: string;

        /**
         * The user impact.
         */
        impact: Data.Impact;

        /**
         * The time when the user experience has returned to expected levels.
         */
        resolved_at: string;

        /**
         * The time when impact on the user experience was first detected.
         */
        started_at: string;

        /**
         * A short description of the alert.
         */
        summary: string;
      }

      namespace Data {
        export interface Impact {
          /**
           * Estimated aggregated amount for the approved requests.
           */
          approved_amount?: V2.Amount;

          /**
           * The number of approved requests which are impacted.
           */
          approved_impacted_requests?: number;

          /**
           * Estimated aggregated amount for the declined requests.
           */
          declined_amount?: V2.Amount;

          /**
           * The number of declined requests which are impacted.
           */
          declined_impacted_requests?: number;
        }
      }
    }

    /**
     * Occurs when a payment method error alert is firing.
     */
    export interface V2CoreHealthPaymentMethodErrorFiringEvent
      extends V2.EventBase {
      type: 'v2.core.health.payment_method_error.firing';
      // Retrieves data specific to this event.
      data: V2CoreHealthPaymentMethodErrorFiringEvent.Data;
    }
    export interface PushedV2CoreHealthPaymentMethodErrorFiringEvent
      extends V2.EventBase {
      type: 'v2.core.health.payment_method_error.firing';
      pull(): Promise<V2CoreHealthPaymentMethodErrorFiringEvent>;
    }

    namespace V2CoreHealthPaymentMethodErrorFiringEvent {
      export interface Data {
        /**
         * The alert ID.
         */
        alert_id: string;

        /**
         * The grouping key for the alert.
         */
        grouping_key: string;

        /**
         * The user impact.
         */
        impact: Data.Impact;

        /**
         * The time when impact on the user experience was first detected.
         */
        started_at: string;

        /**
         * A short description of the alert.
         */
        summary: string;
      }

      namespace Data {
        export interface Impact {
          /**
           * The returned error code.
           */
          error_code?: string;

          /**
           * The number of impacted requests.
           */
          impacted_requests: number;

          /**
           * The type of the payment method.
           */
          payment_method_type: Impact.PaymentMethodType;
        }

        namespace Impact {
          export type PaymentMethodType =
            | 'acss_debit'
            | 'affirm'
            | 'afterpay_clearpay'
            | 'alipay'
            | 'alma'
            | 'amazon_pay'
            | 'apple_pay'
            | 'au_becs_debit'
            | 'bacs_debit'
            | 'bancontact'
            | 'blik'
            | 'boleto'
            | 'card'
            | 'card_present'
            | 'cartes_bancaires'
            | 'cashapp'
            | 'dummy_passthrough_card'
            | 'eps'
            | 'fpx'
            | 'giropay'
            | 'grabpay'
            | 'ideal'
            | 'interac_present'
            | 'kakao_pay'
            | 'klarna'
            | 'konbini'
            | 'link'
            | 'mobilepay'
            | 'multibanco'
            | 'naver_pay'
            | 'oxxo'
            | 'p24'
            | 'paper_check'
            | 'paynow'
            | 'paypal'
            | 'payto'
            | 'pay_by_bank'
            | 'pix'
            | 'promptpay'
            | 'revolut_pay'
            | 'sepa_debit'
            | 'sofort'
            | 'swish'
            | 'twint'
            | 'upi'
            | 'wechat_pay'
            | 'zip';
        }
      }
    }

    /**
     * Occurs when a payment method error alert is resolved.
     */
    export interface V2CoreHealthPaymentMethodErrorResolvedEvent
      extends V2.EventBase {
      type: 'v2.core.health.payment_method_error.resolved';
      // Retrieves data specific to this event.
      data: V2CoreHealthPaymentMethodErrorResolvedEvent.Data;
    }
    export interface PushedV2CoreHealthPaymentMethodErrorResolvedEvent
      extends V2.EventBase {
      type: 'v2.core.health.payment_method_error.resolved';
      pull(): Promise<V2CoreHealthPaymentMethodErrorResolvedEvent>;
    }

    namespace V2CoreHealthPaymentMethodErrorResolvedEvent {
      export interface Data {
        /**
         * The grouping key for the alert.
         */
        grouping_key: string;

        /**
         * The user impact.
         */
        impact: Data.Impact;

        /**
         * The time when the user experience has returned to expected levels.
         */
        resolved_at: string;

        /**
         * The time when impact on the user experience was first detected.
         */
        started_at: string;

        /**
         * A short description of the alert.
         */
        summary: string;
      }

      namespace Data {
        export interface Impact {
          /**
           * The returned error code.
           */
          error_code?: string;

          /**
           * The number of impacted requests.
           */
          impacted_requests: number;

          /**
           * The type of the payment method.
           */
          payment_method_type: Impact.PaymentMethodType;
        }

        namespace Impact {
          export type PaymentMethodType =
            | 'acss_debit'
            | 'affirm'
            | 'afterpay_clearpay'
            | 'alipay'
            | 'alma'
            | 'amazon_pay'
            | 'apple_pay'
            | 'au_becs_debit'
            | 'bacs_debit'
            | 'bancontact'
            | 'blik'
            | 'boleto'
            | 'card'
            | 'card_present'
            | 'cartes_bancaires'
            | 'cashapp'
            | 'dummy_passthrough_card'
            | 'eps'
            | 'fpx'
            | 'giropay'
            | 'grabpay'
            | 'ideal'
            | 'interac_present'
            | 'kakao_pay'
            | 'klarna'
            | 'konbini'
            | 'link'
            | 'mobilepay'
            | 'multibanco'
            | 'naver_pay'
            | 'oxxo'
            | 'p24'
            | 'paper_check'
            | 'paynow'
            | 'paypal'
            | 'payto'
            | 'pay_by_bank'
            | 'pix'
            | 'promptpay'
            | 'revolut_pay'
            | 'sepa_debit'
            | 'sofort'
            | 'swish'
            | 'twint'
            | 'upi'
            | 'wechat_pay'
            | 'zip';
        }
      }
    }

    /**
     * Occurs when a traffic volume drop alert is firing.
     */
    export interface V2CoreHealthTrafficVolumeDropFiringEvent
      extends V2.EventBase {
      type: 'v2.core.health.traffic_volume_drop.firing';
      // Retrieves data specific to this event.
      data: V2CoreHealthTrafficVolumeDropFiringEvent.Data;
    }
    export interface PushedV2CoreHealthTrafficVolumeDropFiringEvent
      extends V2.EventBase {
      type: 'v2.core.health.traffic_volume_drop.firing';
      pull(): Promise<V2CoreHealthTrafficVolumeDropFiringEvent>;
    }

    namespace V2CoreHealthTrafficVolumeDropFiringEvent {
      export interface Data {
        /**
         * The alert ID.
         */
        alert_id: string;

        /**
         * The grouping key for the alert.
         */
        grouping_key: string;

        /**
         * The user impact.
         */
        impact: Data.Impact;

        /**
         * The time when impact on the user experience was first detected.
         */
        started_at: string;

        /**
         * A short description of the alert.
         */
        summary: string;
      }

      namespace Data {
        export interface Impact {
          /**
           * The total volume of payment requests within the latest observation time window.
           */
          actual_traffic: number;

          /**
           * The expected volume of payment requests within the latest observation time window.
           */
          expected_traffic?: number;

          /**
           * The size of the observation time window.
           */
          time_window: string;
        }
      }
    }

    /**
     * Occurs when a traffic volume drop alert is resolved.
     */
    export interface V2CoreHealthTrafficVolumeDropResolvedEvent
      extends V2.EventBase {
      type: 'v2.core.health.traffic_volume_drop.resolved';
      // Retrieves data specific to this event.
      data: V2CoreHealthTrafficVolumeDropResolvedEvent.Data;
    }
    export interface PushedV2CoreHealthTrafficVolumeDropResolvedEvent
      extends V2.EventBase {
      type: 'v2.core.health.traffic_volume_drop.resolved';
      pull(): Promise<V2CoreHealthTrafficVolumeDropResolvedEvent>;
    }

    namespace V2CoreHealthTrafficVolumeDropResolvedEvent {
      export interface Data {
        /**
         * The grouping key for the alert.
         */
        grouping_key: string;

        /**
         * The user impact.
         */
        impact: Data.Impact;

        /**
         * The time when the user experience has returned to expected levels.
         */
        resolved_at: string;

        /**
         * The time when impact on the user experience was first detected.
         */
        started_at: string;

        /**
         * A short description of the alert.
         */
        summary: string;
      }

      namespace Data {
        export interface Impact {
          /**
           * The total volume of payment requests within the latest observation time window.
           */
          actual_traffic: number;

          /**
           * The expected volume of payment requests within the latest observation time window.
           */
          expected_traffic?: number;

          /**
           * The size of the observation time window.
           */
          time_window: string;
        }
      }
    }

    /**
     * Occurs when a webhook latency alert is firing.
     */
    export interface V2CoreHealthWebhookLatencyFiringEvent
      extends V2.EventBase {
      type: 'v2.core.health.webhook_latency.firing';
      // Retrieves data specific to this event.
      data: V2CoreHealthWebhookLatencyFiringEvent.Data;
    }
    export interface PushedV2CoreHealthWebhookLatencyFiringEvent
      extends V2.EventBase {
      type: 'v2.core.health.webhook_latency.firing';
      pull(): Promise<V2CoreHealthWebhookLatencyFiringEvent>;
    }

    namespace V2CoreHealthWebhookLatencyFiringEvent {
      export interface Data {
        /**
         * The alert ID.
         */
        alert_id: string;

        /**
         * The grouping key for the alert.
         */
        grouping_key: string;

        /**
         * The user impact.
         */
        impact: Data.Impact;

        /**
         * The time when impact on the user experience was first detected.
         */
        started_at: string;

        /**
         * A short description of the alert.
         */
        summary: string;
      }

      namespace Data {
        export interface Impact {
          /**
           * The number of impacted requests.
           */
          impacted_requests: number;
        }
      }
    }

    /**
     * Occurs when a webhook latency alert is resolved.
     */
    export interface V2CoreHealthWebhookLatencyResolvedEvent
      extends V2.EventBase {
      type: 'v2.core.health.webhook_latency.resolved';
      // Retrieves data specific to this event.
      data: V2CoreHealthWebhookLatencyResolvedEvent.Data;
    }
    export interface PushedV2CoreHealthWebhookLatencyResolvedEvent
      extends V2.EventBase {
      type: 'v2.core.health.webhook_latency.resolved';
      pull(): Promise<V2CoreHealthWebhookLatencyResolvedEvent>;
    }

    namespace V2CoreHealthWebhookLatencyResolvedEvent {
      export interface Data {
        /**
         * The grouping key for the alert.
         */
        grouping_key: string;

        /**
         * The user impact.
         */
        impact: Data.Impact;

        /**
         * The time when the user experience has returned to expected levels.
         */
        resolved_at: string;

        /**
         * The time when impact on the user experience was first detected.
         */
        started_at: string;

        /**
         * A short description of the alert.
         */
        summary: string;
      }

      namespace Data {
        export interface Impact {
          /**
           * The number of impacted requests.
           */
          impacted_requests: number;
        }
      }
    }

    /**
     * Occurs when an Adjustment is created.
     */
    export interface V2MoneyManagementAdjustmentCreatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.adjustment.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.Adjustment>;
    }
    export interface PushedV2MoneyManagementAdjustmentCreatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.adjustment.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.Adjustment>;
      pull(): Promise<V2MoneyManagementAdjustmentCreatedEvent>;
    }

    /**
     * Occurs when a FinancialAccount is created.
     */
    export interface V2MoneyManagementFinancialAccountCreatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.financial_account.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.FinancialAccount>;
    }
    export interface PushedV2MoneyManagementFinancialAccountCreatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.financial_account.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.FinancialAccount>;
      pull(): Promise<V2MoneyManagementFinancialAccountCreatedEvent>;
    }

    /**
     * Occurs when a FinancialAccount is updated.
     */
    export interface V2MoneyManagementFinancialAccountUpdatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.financial_account.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.FinancialAccount>;
    }
    export interface PushedV2MoneyManagementFinancialAccountUpdatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.financial_account.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.FinancialAccount>;
      pull(): Promise<V2MoneyManagementFinancialAccountUpdatedEvent>;
    }

    /**
     * Occurs when a FinancialAddress is activated and is ready to receive funds.
     */
    export interface V2MoneyManagementFinancialAddressActivatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.financial_address.activated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.FinancialAddress>;
    }
    export interface PushedV2MoneyManagementFinancialAddressActivatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.financial_address.activated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.FinancialAddress>;
      pull(): Promise<V2MoneyManagementFinancialAddressActivatedEvent>;
    }

    /**
     * Occurs when a FinancialAddress fails to activate and can not receive funds.
     */
    export interface V2MoneyManagementFinancialAddressFailedEvent
      extends V2.EventBase {
      type: 'v2.money_management.financial_address.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.FinancialAddress>;
    }
    export interface PushedV2MoneyManagementFinancialAddressFailedEvent
      extends V2.EventBase {
      type: 'v2.money_management.financial_address.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.FinancialAddress>;
      pull(): Promise<V2MoneyManagementFinancialAddressFailedEvent>;
    }

    /**
     * Occurs when an InboundTransfer's funds are made available.
     */
    export interface V2MoneyManagementInboundTransferAvailableEvent
      extends V2.EventBase {
      type: 'v2.money_management.inbound_transfer.available';
      // Retrieves data specific to this event.
      data: V2MoneyManagementInboundTransferAvailableEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.InboundTransfer>;
    }
    export interface PushedV2MoneyManagementInboundTransferAvailableEvent
      extends V2.EventBase {
      type: 'v2.money_management.inbound_transfer.available';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.InboundTransfer>;
      pull(): Promise<V2MoneyManagementInboundTransferAvailableEvent>;
    }

    namespace V2MoneyManagementInboundTransferAvailableEvent {
      export interface Data {
        /**
         * The transaction ID of the received credit.
         */
        transaction_id: string;
      }
    }

    /**
     * Occurs when an InboundTransfer fails.
     */
    export interface V2MoneyManagementInboundTransferBankDebitFailedEvent
      extends V2.EventBase {
      type: 'v2.money_management.inbound_transfer.bank_debit_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.InboundTransfer>;
    }
    export interface PushedV2MoneyManagementInboundTransferBankDebitFailedEvent
      extends V2.EventBase {
      type: 'v2.money_management.inbound_transfer.bank_debit_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.InboundTransfer>;
      pull(): Promise<V2MoneyManagementInboundTransferBankDebitFailedEvent>;
    }

    /**
     * Occurs when an InboundTransfer starts processing.
     */
    export interface V2MoneyManagementInboundTransferBankDebitProcessingEvent
      extends V2.EventBase {
      type: 'v2.money_management.inbound_transfer.bank_debit_processing';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.InboundTransfer>;
    }
    export interface PushedV2MoneyManagementInboundTransferBankDebitProcessingEvent
      extends V2.EventBase {
      type: 'v2.money_management.inbound_transfer.bank_debit_processing';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.InboundTransfer>;
      pull(): Promise<V2MoneyManagementInboundTransferBankDebitProcessingEvent>;
    }

    /**
     * Occurs when an InboundTransfer is queued.
     */
    export interface V2MoneyManagementInboundTransferBankDebitQueuedEvent
      extends V2.EventBase {
      type: 'v2.money_management.inbound_transfer.bank_debit_queued';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.InboundTransfer>;
    }
    export interface PushedV2MoneyManagementInboundTransferBankDebitQueuedEvent
      extends V2.EventBase {
      type: 'v2.money_management.inbound_transfer.bank_debit_queued';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.InboundTransfer>;
      pull(): Promise<V2MoneyManagementInboundTransferBankDebitQueuedEvent>;
    }

    /**
     * Occurs when an InboundTransfer is returned.
     */
    export interface V2MoneyManagementInboundTransferBankDebitReturnedEvent
      extends V2.EventBase {
      type: 'v2.money_management.inbound_transfer.bank_debit_returned';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.InboundTransfer>;
    }
    export interface PushedV2MoneyManagementInboundTransferBankDebitReturnedEvent
      extends V2.EventBase {
      type: 'v2.money_management.inbound_transfer.bank_debit_returned';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.InboundTransfer>;
      pull(): Promise<V2MoneyManagementInboundTransferBankDebitReturnedEvent>;
    }

    /**
     * Occurs when an InboundTransfer succeeds.
     */
    export interface V2MoneyManagementInboundTransferBankDebitSucceededEvent
      extends V2.EventBase {
      type: 'v2.money_management.inbound_transfer.bank_debit_succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.InboundTransfer>;
    }
    export interface PushedV2MoneyManagementInboundTransferBankDebitSucceededEvent
      extends V2.EventBase {
      type: 'v2.money_management.inbound_transfer.bank_debit_succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.InboundTransfer>;
      pull(): Promise<V2MoneyManagementInboundTransferBankDebitSucceededEvent>;
    }

    /**
     * Occurs when an OutboundPayment transitions into the canceled state.
     */
    export interface V2MoneyManagementOutboundPaymentCanceledEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_payment.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundPayment>;
    }
    export interface PushedV2MoneyManagementOutboundPaymentCanceledEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_payment.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundPayment>;
      pull(): Promise<V2MoneyManagementOutboundPaymentCanceledEvent>;
    }

    /**
     * Occurs when an OutboundPayment is created.
     */
    export interface V2MoneyManagementOutboundPaymentCreatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_payment.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundPayment>;
    }
    export interface PushedV2MoneyManagementOutboundPaymentCreatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_payment.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundPayment>;
      pull(): Promise<V2MoneyManagementOutboundPaymentCreatedEvent>;
    }

    /**
     * Occurs when an OutboundPayment transitions into the failed state.
     */
    export interface V2MoneyManagementOutboundPaymentFailedEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_payment.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundPayment>;
    }
    export interface PushedV2MoneyManagementOutboundPaymentFailedEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_payment.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundPayment>;
      pull(): Promise<V2MoneyManagementOutboundPaymentFailedEvent>;
    }

    /**
     * Occurs when an OutboundPayment transitions into the posted state.
     */
    export interface V2MoneyManagementOutboundPaymentPostedEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_payment.posted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundPayment>;
    }
    export interface PushedV2MoneyManagementOutboundPaymentPostedEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_payment.posted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundPayment>;
      pull(): Promise<V2MoneyManagementOutboundPaymentPostedEvent>;
    }

    /**
     * Occurs when an OutboundPayment transitions into the returned state.
     */
    export interface V2MoneyManagementOutboundPaymentReturnedEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_payment.returned';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundPayment>;
    }
    export interface PushedV2MoneyManagementOutboundPaymentReturnedEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_payment.returned';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundPayment>;
      pull(): Promise<V2MoneyManagementOutboundPaymentReturnedEvent>;
    }

    /**
     * Occurs when an OutboundPayment is updated.
     */
    export interface V2MoneyManagementOutboundPaymentUpdatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_payment.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundPayment>;
    }
    export interface PushedV2MoneyManagementOutboundPaymentUpdatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_payment.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundPayment>;
      pull(): Promise<V2MoneyManagementOutboundPaymentUpdatedEvent>;
    }

    /**
     * Occurs when an OutboundTransfer transitions into the canceled state.
     */
    export interface V2MoneyManagementOutboundTransferCanceledEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_transfer.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundTransfer>;
    }
    export interface PushedV2MoneyManagementOutboundTransferCanceledEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_transfer.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundTransfer>;
      pull(): Promise<V2MoneyManagementOutboundTransferCanceledEvent>;
    }

    /**
     * Occurs when an OutboundTransfer is created.
     */
    export interface V2MoneyManagementOutboundTransferCreatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_transfer.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundTransfer>;
    }
    export interface PushedV2MoneyManagementOutboundTransferCreatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_transfer.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundTransfer>;
      pull(): Promise<V2MoneyManagementOutboundTransferCreatedEvent>;
    }

    /**
     * Occurs when an OutboundTransfer transitions into the failed state.
     */
    export interface V2MoneyManagementOutboundTransferFailedEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_transfer.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundTransfer>;
    }
    export interface PushedV2MoneyManagementOutboundTransferFailedEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_transfer.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundTransfer>;
      pull(): Promise<V2MoneyManagementOutboundTransferFailedEvent>;
    }

    /**
     * Occurs when an OutboundTransfer transitions into the posted state.
     */
    export interface V2MoneyManagementOutboundTransferPostedEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_transfer.posted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundTransfer>;
    }
    export interface PushedV2MoneyManagementOutboundTransferPostedEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_transfer.posted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundTransfer>;
      pull(): Promise<V2MoneyManagementOutboundTransferPostedEvent>;
    }

    /**
     * Occurs when an OutboundTransfer transitions into the returned state.
     */
    export interface V2MoneyManagementOutboundTransferReturnedEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_transfer.returned';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundTransfer>;
    }
    export interface PushedV2MoneyManagementOutboundTransferReturnedEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_transfer.returned';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundTransfer>;
      pull(): Promise<V2MoneyManagementOutboundTransferReturnedEvent>;
    }

    /**
     * Event that is emitted every time an Outbound Transfer is updated.
     */
    export interface V2MoneyManagementOutboundTransferUpdatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_transfer.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundTransfer>;
    }
    export interface PushedV2MoneyManagementOutboundTransferUpdatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_transfer.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundTransfer>;
      pull(): Promise<V2MoneyManagementOutboundTransferUpdatedEvent>;
    }

    /**
     * Occurs when a PayoutMethod is updated.
     */
    export interface V2MoneyManagementPayoutMethodUpdatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.payout_method.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.PayoutMethod>;
    }
    export interface PushedV2MoneyManagementPayoutMethodUpdatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.payout_method.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.PayoutMethod>;
      pull(): Promise<V2MoneyManagementPayoutMethodUpdatedEvent>;
    }

    /**
     * Occurs when a ReceivedCredit's funds are received and are available in your balance.
     */
    export interface V2MoneyManagementReceivedCreditAvailableEvent
      extends V2.EventBase {
      type: 'v2.money_management.received_credit.available';
      // Retrieves data specific to this event.
      data: V2MoneyManagementReceivedCreditAvailableEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedCredit>;
    }
    export interface PushedV2MoneyManagementReceivedCreditAvailableEvent
      extends V2.EventBase {
      type: 'v2.money_management.received_credit.available';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedCredit>;
      pull(): Promise<V2MoneyManagementReceivedCreditAvailableEvent>;
    }

    namespace V2MoneyManagementReceivedCreditAvailableEvent {
      export interface Data {
        /**
         * The transaction ID of the received credit.
         */
        transaction_id: string;
      }
    }

    /**
     * Occurs when a ReceivedCredit is attempted to your balance and fails. See the status_details for more information.
     */
    export interface V2MoneyManagementReceivedCreditFailedEvent
      extends V2.EventBase {
      type: 'v2.money_management.received_credit.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedCredit>;
    }
    export interface PushedV2MoneyManagementReceivedCreditFailedEvent
      extends V2.EventBase {
      type: 'v2.money_management.received_credit.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedCredit>;
      pull(): Promise<V2MoneyManagementReceivedCreditFailedEvent>;
    }

    /**
     * Occurs when a ReceivedCredit is reversed, returned to the originator, and deducted from your balance.
     */
    export interface V2MoneyManagementReceivedCreditReturnedEvent
      extends V2.EventBase {
      type: 'v2.money_management.received_credit.returned';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedCredit>;
    }
    export interface PushedV2MoneyManagementReceivedCreditReturnedEvent
      extends V2.EventBase {
      type: 'v2.money_management.received_credit.returned';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedCredit>;
      pull(): Promise<V2MoneyManagementReceivedCreditReturnedEvent>;
    }

    /**
     * Occurs when a ReceivedCredit succeeds.
     */
    export interface V2MoneyManagementReceivedCreditSucceededEvent
      extends V2.EventBase {
      type: 'v2.money_management.received_credit.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedCredit>;
    }
    export interface PushedV2MoneyManagementReceivedCreditSucceededEvent
      extends V2.EventBase {
      type: 'v2.money_management.received_credit.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedCredit>;
      pull(): Promise<V2MoneyManagementReceivedCreditSucceededEvent>;
    }

    /**
     * Occurs when a ReceivedDebit is canceled.
     */
    export interface V2MoneyManagementReceivedDebitCanceledEvent
      extends V2.EventBase {
      type: 'v2.money_management.received_debit.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedDebit>;
    }
    export interface PushedV2MoneyManagementReceivedDebitCanceledEvent
      extends V2.EventBase {
      type: 'v2.money_management.received_debit.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedDebit>;
      pull(): Promise<V2MoneyManagementReceivedDebitCanceledEvent>;
    }

    /**
     * Occurs when a ReceivedDebit fails.
     */
    export interface V2MoneyManagementReceivedDebitFailedEvent
      extends V2.EventBase {
      type: 'v2.money_management.received_debit.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedDebit>;
    }
    export interface PushedV2MoneyManagementReceivedDebitFailedEvent
      extends V2.EventBase {
      type: 'v2.money_management.received_debit.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedDebit>;
      pull(): Promise<V2MoneyManagementReceivedDebitFailedEvent>;
    }

    /**
     * Occurs when a ReceivedDebit is set to pending.
     */
    export interface V2MoneyManagementReceivedDebitPendingEvent
      extends V2.EventBase {
      type: 'v2.money_management.received_debit.pending';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedDebit>;
    }
    export interface PushedV2MoneyManagementReceivedDebitPendingEvent
      extends V2.EventBase {
      type: 'v2.money_management.received_debit.pending';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedDebit>;
      pull(): Promise<V2MoneyManagementReceivedDebitPendingEvent>;
    }

    /**
     * Occurs when a ReceivedDebit succeeds.
     */
    export interface V2MoneyManagementReceivedDebitSucceededEvent
      extends V2.EventBase {
      type: 'v2.money_management.received_debit.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedDebit>;
    }
    export interface PushedV2MoneyManagementReceivedDebitSucceededEvent
      extends V2.EventBase {
      type: 'v2.money_management.received_debit.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedDebit>;
      pull(): Promise<V2MoneyManagementReceivedDebitSucceededEvent>;
    }

    /**
     * Occurs when a ReceivedDebit is updated.
     */
    export interface V2MoneyManagementReceivedDebitUpdatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.received_debit.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedDebit>;
    }
    export interface PushedV2MoneyManagementReceivedDebitUpdatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.received_debit.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedDebit>;
      pull(): Promise<V2MoneyManagementReceivedDebitUpdatedEvent>;
    }

    /**
     * Occurs when a RecipientVerification is created.
     */
    export interface V2MoneyManagementRecipientVerificationCreatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.recipient_verification.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.RecipientVerification>;
    }
    export interface PushedV2MoneyManagementRecipientVerificationCreatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.recipient_verification.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.RecipientVerification>;
      pull(): Promise<V2MoneyManagementRecipientVerificationCreatedEvent>;
    }

    /**
     * Occurs when a RecipientVerification is updated.
     */
    export interface V2MoneyManagementRecipientVerificationUpdatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.recipient_verification.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.RecipientVerification>;
    }
    export interface PushedV2MoneyManagementRecipientVerificationUpdatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.recipient_verification.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.RecipientVerification>;
      pull(): Promise<V2MoneyManagementRecipientVerificationUpdatedEvent>;
    }

    /**
     * Occurs when a Transaction is created.
     */
    export interface V2MoneyManagementTransactionCreatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.transaction.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.Transaction>;
    }
    export interface PushedV2MoneyManagementTransactionCreatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.transaction.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.Transaction>;
      pull(): Promise<V2MoneyManagementTransactionCreatedEvent>;
    }

    /**
     * Occurs when a Transaction is updated.
     */
    export interface V2MoneyManagementTransactionUpdatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.transaction.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.Transaction>;
    }
    export interface PushedV2MoneyManagementTransactionUpdatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.transaction.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.Transaction>;
      pull(): Promise<V2MoneyManagementTransactionUpdatedEvent>;
    }

    /**
     * Sent after a failed authorization if there are still retries available on the OffSessionPayment.
     */
    export interface V2PaymentsOffSessionPaymentAuthorizationAttemptFailedEvent
      extends V2.EventBase {
      type: 'v2.payments.off_session_payment.authorization_attempt_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Payments.OffSessionPayment>;
    }
    export interface PushedV2PaymentsOffSessionPaymentAuthorizationAttemptFailedEvent
      extends V2.EventBase {
      type: 'v2.payments.off_session_payment.authorization_attempt_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Payments.OffSessionPayment>;
      pull(): Promise<
        V2PaymentsOffSessionPaymentAuthorizationAttemptFailedEvent
      >;
    }

    /**
     * Sent when our internal scheduling system kicks off an attempt at authorization, whether it's a
     * retry or an initial authorization.
     */
    export interface V2PaymentsOffSessionPaymentAuthorizationAttemptStartedEvent
      extends V2.EventBase {
      type: 'v2.payments.off_session_payment.authorization_attempt_started';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Payments.OffSessionPayment>;
    }
    export interface PushedV2PaymentsOffSessionPaymentAuthorizationAttemptStartedEvent
      extends V2.EventBase {
      type: 'v2.payments.off_session_payment.authorization_attempt_started';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Payments.OffSessionPayment>;
      pull(): Promise<
        V2PaymentsOffSessionPaymentAuthorizationAttemptStartedEvent
      >;
    }

    /**
     * Sent immediately following a user's call to the Off-Session Payments cancel endpoint.
     */
    export interface V2PaymentsOffSessionPaymentCanceledEvent
      extends V2.EventBase {
      type: 'v2.payments.off_session_payment.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Payments.OffSessionPayment>;
    }
    export interface PushedV2PaymentsOffSessionPaymentCanceledEvent
      extends V2.EventBase {
      type: 'v2.payments.off_session_payment.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Payments.OffSessionPayment>;
      pull(): Promise<V2PaymentsOffSessionPaymentCanceledEvent>;
    }

    /**
     * Sent immediately following a user's call to the Off-Session Payments create endpoint.
     */
    export interface V2PaymentsOffSessionPaymentCreatedEvent
      extends V2.EventBase {
      type: 'v2.payments.off_session_payment.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Payments.OffSessionPayment>;
    }
    export interface PushedV2PaymentsOffSessionPaymentCreatedEvent
      extends V2.EventBase {
      type: 'v2.payments.off_session_payment.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Payments.OffSessionPayment>;
      pull(): Promise<V2PaymentsOffSessionPaymentCreatedEvent>;
    }

    /**
     * Sent after a failed authorization if there are no retries remaining, or if the failure is unretryable.
     */
    export interface V2PaymentsOffSessionPaymentFailedEvent
      extends V2.EventBase {
      type: 'v2.payments.off_session_payment.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Payments.OffSessionPayment>;
    }
    export interface PushedV2PaymentsOffSessionPaymentFailedEvent
      extends V2.EventBase {
      type: 'v2.payments.off_session_payment.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Payments.OffSessionPayment>;
      pull(): Promise<V2PaymentsOffSessionPaymentFailedEvent>;
    }

    /**
     * Sent immediately after a successful authorization.
     */
    export interface V2PaymentsOffSessionPaymentSucceededEvent
      extends V2.EventBase {
      type: 'v2.payments.off_session_payment.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Payments.OffSessionPayment>;
    }
    export interface PushedV2PaymentsOffSessionPaymentSucceededEvent
      extends V2.EventBase {
      type: 'v2.payments.off_session_payment.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Payments.OffSessionPayment>;
      pull(): Promise<V2PaymentsOffSessionPaymentSucceededEvent>;
    }
  }
}
