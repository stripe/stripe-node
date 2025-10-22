// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe.V2.Core {
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
      | Stripe.Events.V2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEvent
      | Stripe.Events.V2CoreAccountIncludingConfigurationCardCreatorUpdatedEvent
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
      | Stripe.Events.V2PaymentsOffSessionPaymentRequiresCaptureEvent
      | Stripe.Events.V2PaymentsOffSessionPaymentSucceededEvent;

    export type EventNotification =
      | Stripe.Events.V1AccountUpdatedEventNotification
      | Stripe.Events.V1ApplicationFeeCreatedEventNotification
      | Stripe.Events.V1ApplicationFeeRefundedEventNotification
      | Stripe.Events.V1BillingMeterErrorReportTriggeredEventNotification
      | Stripe.Events.V1BillingMeterNoMeterFoundEventNotification
      | Stripe.Events.V1BillingPortalConfigurationCreatedEventNotification
      | Stripe.Events.V1BillingPortalConfigurationUpdatedEventNotification
      | Stripe.Events.V1CapabilityUpdatedEventNotification
      | Stripe.Events.V1ChargeCapturedEventNotification
      | Stripe.Events.V1ChargeDisputeClosedEventNotification
      | Stripe.Events.V1ChargeDisputeCreatedEventNotification
      | Stripe.Events.V1ChargeDisputeFundsReinstatedEventNotification
      | Stripe.Events.V1ChargeDisputeFundsWithdrawnEventNotification
      | Stripe.Events.V1ChargeDisputeUpdatedEventNotification
      | Stripe.Events.V1ChargeExpiredEventNotification
      | Stripe.Events.V1ChargeFailedEventNotification
      | Stripe.Events.V1ChargePendingEventNotification
      | Stripe.Events.V1ChargeRefundUpdatedEventNotification
      | Stripe.Events.V1ChargeRefundedEventNotification
      | Stripe.Events.V1ChargeSucceededEventNotification
      | Stripe.Events.V1ChargeUpdatedEventNotification
      | Stripe.Events.V1CheckoutSessionAsyncPaymentFailedEventNotification
      | Stripe.Events.V1CheckoutSessionAsyncPaymentSucceededEventNotification
      | Stripe.Events.V1CheckoutSessionCompletedEventNotification
      | Stripe.Events.V1CheckoutSessionExpiredEventNotification
      | Stripe.Events.V1ClimateOrderCanceledEventNotification
      | Stripe.Events.V1ClimateOrderCreatedEventNotification
      | Stripe.Events.V1ClimateOrderDelayedEventNotification
      | Stripe.Events.V1ClimateOrderDeliveredEventNotification
      | Stripe.Events.V1ClimateOrderProductSubstitutedEventNotification
      | Stripe.Events.V1ClimateProductCreatedEventNotification
      | Stripe.Events.V1ClimateProductPricingUpdatedEventNotification
      | Stripe.Events.V1CouponCreatedEventNotification
      | Stripe.Events.V1CouponDeletedEventNotification
      | Stripe.Events.V1CouponUpdatedEventNotification
      | Stripe.Events.V1CreditNoteCreatedEventNotification
      | Stripe.Events.V1CreditNoteUpdatedEventNotification
      | Stripe.Events.V1CreditNoteVoidedEventNotification
      | Stripe.Events.V1CustomerCreatedEventNotification
      | Stripe.Events.V1CustomerDeletedEventNotification
      | Stripe.Events.V1CustomerSubscriptionCreatedEventNotification
      | Stripe.Events.V1CustomerSubscriptionDeletedEventNotification
      | Stripe.Events.V1CustomerSubscriptionPausedEventNotification
      | Stripe.Events.V1CustomerSubscriptionPendingUpdateAppliedEventNotification
      | Stripe.Events.V1CustomerSubscriptionPendingUpdateExpiredEventNotification
      | Stripe.Events.V1CustomerSubscriptionResumedEventNotification
      | Stripe.Events.V1CustomerSubscriptionTrialWillEndEventNotification
      | Stripe.Events.V1CustomerSubscriptionUpdatedEventNotification
      | Stripe.Events.V1CustomerTaxIdCreatedEventNotification
      | Stripe.Events.V1CustomerTaxIdDeletedEventNotification
      | Stripe.Events.V1CustomerTaxIdUpdatedEventNotification
      | Stripe.Events.V1CustomerUpdatedEventNotification
      | Stripe.Events.V1FileCreatedEventNotification
      | Stripe.Events.V1FinancialConnectionsAccountCreatedEventNotification
      | Stripe.Events.V1FinancialConnectionsAccountDeactivatedEventNotification
      | Stripe.Events.V1FinancialConnectionsAccountDisconnectedEventNotification
      | Stripe.Events.V1FinancialConnectionsAccountReactivatedEventNotification
      | Stripe.Events.V1FinancialConnectionsAccountRefreshedBalanceEventNotification
      | Stripe.Events.V1FinancialConnectionsAccountRefreshedOwnershipEventNotification
      | Stripe.Events.V1FinancialConnectionsAccountRefreshedTransactionsEventNotification
      | Stripe.Events.V1IdentityVerificationSessionCanceledEventNotification
      | Stripe.Events.V1IdentityVerificationSessionCreatedEventNotification
      | Stripe.Events.V1IdentityVerificationSessionProcessingEventNotification
      | Stripe.Events.V1IdentityVerificationSessionRedactedEventNotification
      | Stripe.Events.V1IdentityVerificationSessionRequiresInputEventNotification
      | Stripe.Events.V1IdentityVerificationSessionVerifiedEventNotification
      | Stripe.Events.V1InvoiceCreatedEventNotification
      | Stripe.Events.V1InvoiceDeletedEventNotification
      | Stripe.Events.V1InvoiceFinalizationFailedEventNotification
      | Stripe.Events.V1InvoiceFinalizedEventNotification
      | Stripe.Events.V1InvoiceMarkedUncollectibleEventNotification
      | Stripe.Events.V1InvoiceOverdueEventNotification
      | Stripe.Events.V1InvoiceOverpaidEventNotification
      | Stripe.Events.V1InvoicePaidEventNotification
      | Stripe.Events.V1InvoicePaymentActionRequiredEventNotification
      | Stripe.Events.V1InvoicePaymentFailedEventNotification
      | Stripe.Events.V1InvoicePaymentSucceededEventNotification
      | Stripe.Events.V1InvoiceSentEventNotification
      | Stripe.Events.V1InvoiceUpcomingEventNotification
      | Stripe.Events.V1InvoiceUpdatedEventNotification
      | Stripe.Events.V1InvoiceVoidedEventNotification
      | Stripe.Events.V1InvoiceWillBeDueEventNotification
      | Stripe.Events.V1InvoicePaymentPaidEventNotification
      | Stripe.Events.V1InvoiceitemCreatedEventNotification
      | Stripe.Events.V1InvoiceitemDeletedEventNotification
      | Stripe.Events.V1IssuingAuthorizationCreatedEventNotification
      | Stripe.Events.V1IssuingAuthorizationRequestEventNotification
      | Stripe.Events.V1IssuingAuthorizationUpdatedEventNotification
      | Stripe.Events.V1IssuingCardCreatedEventNotification
      | Stripe.Events.V1IssuingCardUpdatedEventNotification
      | Stripe.Events.V1IssuingCardholderCreatedEventNotification
      | Stripe.Events.V1IssuingCardholderUpdatedEventNotification
      | Stripe.Events.V1IssuingDisputeClosedEventNotification
      | Stripe.Events.V1IssuingDisputeCreatedEventNotification
      | Stripe.Events.V1IssuingDisputeFundsReinstatedEventNotification
      | Stripe.Events.V1IssuingDisputeFundsRescindedEventNotification
      | Stripe.Events.V1IssuingDisputeSubmittedEventNotification
      | Stripe.Events.V1IssuingDisputeUpdatedEventNotification
      | Stripe.Events.V1IssuingPersonalizationDesignActivatedEventNotification
      | Stripe.Events.V1IssuingPersonalizationDesignDeactivatedEventNotification
      | Stripe.Events.V1IssuingPersonalizationDesignRejectedEventNotification
      | Stripe.Events.V1IssuingPersonalizationDesignUpdatedEventNotification
      | Stripe.Events.V1IssuingTokenCreatedEventNotification
      | Stripe.Events.V1IssuingTokenUpdatedEventNotification
      | Stripe.Events.V1IssuingTransactionCreatedEventNotification
      | Stripe.Events.V1IssuingTransactionPurchaseDetailsReceiptUpdatedEventNotification
      | Stripe.Events.V1IssuingTransactionUpdatedEventNotification
      | Stripe.Events.V1MandateUpdatedEventNotification
      | Stripe.Events.V1PaymentIntentAmountCapturableUpdatedEventNotification
      | Stripe.Events.V1PaymentIntentCanceledEventNotification
      | Stripe.Events.V1PaymentIntentCreatedEventNotification
      | Stripe.Events.V1PaymentIntentPartiallyFundedEventNotification
      | Stripe.Events.V1PaymentIntentPaymentFailedEventNotification
      | Stripe.Events.V1PaymentIntentProcessingEventNotification
      | Stripe.Events.V1PaymentIntentRequiresActionEventNotification
      | Stripe.Events.V1PaymentIntentSucceededEventNotification
      | Stripe.Events.V1PaymentLinkCreatedEventNotification
      | Stripe.Events.V1PaymentLinkUpdatedEventNotification
      | Stripe.Events.V1PaymentMethodAttachedEventNotification
      | Stripe.Events.V1PaymentMethodAutomaticallyUpdatedEventNotification
      | Stripe.Events.V1PaymentMethodDetachedEventNotification
      | Stripe.Events.V1PaymentMethodUpdatedEventNotification
      | Stripe.Events.V1PayoutCanceledEventNotification
      | Stripe.Events.V1PayoutCreatedEventNotification
      | Stripe.Events.V1PayoutFailedEventNotification
      | Stripe.Events.V1PayoutPaidEventNotification
      | Stripe.Events.V1PayoutReconciliationCompletedEventNotification
      | Stripe.Events.V1PayoutUpdatedEventNotification
      | Stripe.Events.V1PersonCreatedEventNotification
      | Stripe.Events.V1PersonDeletedEventNotification
      | Stripe.Events.V1PersonUpdatedEventNotification
      | Stripe.Events.V1PlanCreatedEventNotification
      | Stripe.Events.V1PlanDeletedEventNotification
      | Stripe.Events.V1PlanUpdatedEventNotification
      | Stripe.Events.V1PriceCreatedEventNotification
      | Stripe.Events.V1PriceDeletedEventNotification
      | Stripe.Events.V1PriceUpdatedEventNotification
      | Stripe.Events.V1ProductCreatedEventNotification
      | Stripe.Events.V1ProductDeletedEventNotification
      | Stripe.Events.V1ProductUpdatedEventNotification
      | Stripe.Events.V1PromotionCodeCreatedEventNotification
      | Stripe.Events.V1PromotionCodeUpdatedEventNotification
      | Stripe.Events.V1QuoteAcceptedEventNotification
      | Stripe.Events.V1QuoteCanceledEventNotification
      | Stripe.Events.V1QuoteCreatedEventNotification
      | Stripe.Events.V1QuoteFinalizedEventNotification
      | Stripe.Events.V1RadarEarlyFraudWarningCreatedEventNotification
      | Stripe.Events.V1RadarEarlyFraudWarningUpdatedEventNotification
      | Stripe.Events.V1RefundCreatedEventNotification
      | Stripe.Events.V1RefundFailedEventNotification
      | Stripe.Events.V1RefundUpdatedEventNotification
      | Stripe.Events.V1ReviewClosedEventNotification
      | Stripe.Events.V1ReviewOpenedEventNotification
      | Stripe.Events.V1SetupIntentCanceledEventNotification
      | Stripe.Events.V1SetupIntentCreatedEventNotification
      | Stripe.Events.V1SetupIntentRequiresActionEventNotification
      | Stripe.Events.V1SetupIntentSetupFailedEventNotification
      | Stripe.Events.V1SetupIntentSucceededEventNotification
      | Stripe.Events.V1SigmaScheduledQueryRunCreatedEventNotification
      | Stripe.Events.V1SourceCanceledEventNotification
      | Stripe.Events.V1SourceChargeableEventNotification
      | Stripe.Events.V1SourceFailedEventNotification
      | Stripe.Events.V1SourceRefundAttributesRequiredEventNotification
      | Stripe.Events.V1SubscriptionScheduleAbortedEventNotification
      | Stripe.Events.V1SubscriptionScheduleCanceledEventNotification
      | Stripe.Events.V1SubscriptionScheduleCompletedEventNotification
      | Stripe.Events.V1SubscriptionScheduleCreatedEventNotification
      | Stripe.Events.V1SubscriptionScheduleExpiringEventNotification
      | Stripe.Events.V1SubscriptionScheduleReleasedEventNotification
      | Stripe.Events.V1SubscriptionScheduleUpdatedEventNotification
      | Stripe.Events.V1TaxRateCreatedEventNotification
      | Stripe.Events.V1TaxRateUpdatedEventNotification
      | Stripe.Events.V1TerminalReaderActionFailedEventNotification
      | Stripe.Events.V1TerminalReaderActionSucceededEventNotification
      | Stripe.Events.V1TerminalReaderActionUpdatedEventNotification
      | Stripe.Events.V1TestHelpersTestClockAdvancingEventNotification
      | Stripe.Events.V1TestHelpersTestClockCreatedEventNotification
      | Stripe.Events.V1TestHelpersTestClockDeletedEventNotification
      | Stripe.Events.V1TestHelpersTestClockInternalFailureEventNotification
      | Stripe.Events.V1TestHelpersTestClockReadyEventNotification
      | Stripe.Events.V1TopupCanceledEventNotification
      | Stripe.Events.V1TopupCreatedEventNotification
      | Stripe.Events.V1TopupFailedEventNotification
      | Stripe.Events.V1TopupReversedEventNotification
      | Stripe.Events.V1TopupSucceededEventNotification
      | Stripe.Events.V1TransferCreatedEventNotification
      | Stripe.Events.V1TransferReversedEventNotification
      | Stripe.Events.V1TransferUpdatedEventNotification
      | Stripe.Events.V2BillingCadenceBilledEventNotification
      | Stripe.Events.V2BillingCadenceCanceledEventNotification
      | Stripe.Events.V2BillingCadenceCreatedEventNotification
      | Stripe.Events.V2BillingLicenseFeeCreatedEventNotification
      | Stripe.Events.V2BillingLicenseFeeUpdatedEventNotification
      | Stripe.Events.V2BillingLicenseFeeVersionCreatedEventNotification
      | Stripe.Events.V2BillingLicensedItemCreatedEventNotification
      | Stripe.Events.V2BillingLicensedItemUpdatedEventNotification
      | Stripe.Events.V2BillingMeteredItemCreatedEventNotification
      | Stripe.Events.V2BillingMeteredItemUpdatedEventNotification
      | Stripe.Events.V2BillingPricingPlanCreatedEventNotification
      | Stripe.Events.V2BillingPricingPlanUpdatedEventNotification
      | Stripe.Events.V2BillingPricingPlanComponentCreatedEventNotification
      | Stripe.Events.V2BillingPricingPlanComponentUpdatedEventNotification
      | Stripe.Events.V2BillingPricingPlanSubscriptionCollectionAwaitingCustomerActionEventNotification
      | Stripe.Events.V2BillingPricingPlanSubscriptionCollectionCurrentEventNotification
      | Stripe.Events.V2BillingPricingPlanSubscriptionCollectionPastDueEventNotification
      | Stripe.Events.V2BillingPricingPlanSubscriptionCollectionPausedEventNotification
      | Stripe.Events.V2BillingPricingPlanSubscriptionCollectionUnpaidEventNotification
      | Stripe.Events.V2BillingPricingPlanSubscriptionServicingActivatedEventNotification
      | Stripe.Events.V2BillingPricingPlanSubscriptionServicingCanceledEventNotification
      | Stripe.Events.V2BillingPricingPlanSubscriptionServicingPausedEventNotification
      | Stripe.Events.V2BillingPricingPlanVersionCreatedEventNotification
      | Stripe.Events.V2BillingRateCardCreatedEventNotification
      | Stripe.Events.V2BillingRateCardUpdatedEventNotification
      | Stripe.Events.V2BillingRateCardRateCreatedEventNotification
      | Stripe.Events.V2BillingRateCardSubscriptionActivatedEventNotification
      | Stripe.Events.V2BillingRateCardSubscriptionCanceledEventNotification
      | Stripe.Events.V2BillingRateCardSubscriptionCollectionAwaitingCustomerActionEventNotification
      | Stripe.Events.V2BillingRateCardSubscriptionCollectionCurrentEventNotification
      | Stripe.Events.V2BillingRateCardSubscriptionCollectionPastDueEventNotification
      | Stripe.Events.V2BillingRateCardSubscriptionCollectionPausedEventNotification
      | Stripe.Events.V2BillingRateCardSubscriptionCollectionUnpaidEventNotification
      | Stripe.Events.V2BillingRateCardSubscriptionServicingActivatedEventNotification
      | Stripe.Events.V2BillingRateCardSubscriptionServicingCanceledEventNotification
      | Stripe.Events.V2BillingRateCardSubscriptionServicingPausedEventNotification
      | Stripe.Events.V2BillingRateCardVersionCreatedEventNotification
      | Stripe.Events.V2CoreAccountClosedEventNotification
      | Stripe.Events.V2CoreAccountCreatedEventNotification
      | Stripe.Events.V2CoreAccountUpdatedEventNotification
      | Stripe.Events.V2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEventNotification
      | Stripe.Events.V2CoreAccountIncludingConfigurationCardCreatorUpdatedEventNotification
      | Stripe.Events.V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEventNotification
      | Stripe.Events.V2CoreAccountIncludingConfigurationCustomerUpdatedEventNotification
      | Stripe.Events.V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEventNotification
      | Stripe.Events.V2CoreAccountIncludingConfigurationMerchantUpdatedEventNotification
      | Stripe.Events.V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEventNotification
      | Stripe.Events.V2CoreAccountIncludingConfigurationRecipientUpdatedEventNotification
      | Stripe.Events.V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEventNotification
      | Stripe.Events.V2CoreAccountIncludingConfigurationStorerUpdatedEventNotification
      | Stripe.Events.V2CoreAccountIncludingDefaultsUpdatedEventNotification
      | Stripe.Events.V2CoreAccountIncludingIdentityUpdatedEventNotification
      | Stripe.Events.V2CoreAccountIncludingRequirementsUpdatedEventNotification
      | Stripe.Events.V2CoreAccountLinkReturnedEventNotification
      | Stripe.Events.V2CoreAccountPersonCreatedEventNotification
      | Stripe.Events.V2CoreAccountPersonDeletedEventNotification
      | Stripe.Events.V2CoreAccountPersonUpdatedEventNotification
      | Stripe.Events.V2CoreClaimableSandboxClaimedEventNotification
      | Stripe.Events.V2CoreClaimableSandboxCreatedEventNotification
      | Stripe.Events.V2CoreClaimableSandboxExpiredEventNotification
      | Stripe.Events.V2CoreClaimableSandboxExpiringEventNotification
      | Stripe.Events.V2CoreClaimableSandboxSandboxDetailsOwnerAccountUpdatedEventNotification
      | Stripe.Events.V2CoreEventDestinationPingEventNotification
      | Stripe.Events.V2CoreHealthApiErrorFiringEventNotification
      | Stripe.Events.V2CoreHealthApiErrorResolvedEventNotification
      | Stripe.Events.V2CoreHealthApiLatencyFiringEventNotification
      | Stripe.Events.V2CoreHealthApiLatencyResolvedEventNotification
      | Stripe.Events.V2CoreHealthAuthorizationRateDropFiringEventNotification
      | Stripe.Events.V2CoreHealthAuthorizationRateDropResolvedEventNotification
      | Stripe.Events.V2CoreHealthEventGenerationFailureResolvedEventNotification
      | Stripe.Events.V2CoreHealthFraudRateIncreasedEventNotification
      | Stripe.Events.V2CoreHealthIssuingAuthorizationRequestErrorsFiringEventNotification
      | Stripe.Events.V2CoreHealthIssuingAuthorizationRequestErrorsResolvedEventNotification
      | Stripe.Events.V2CoreHealthIssuingAuthorizationRequestTimeoutFiringEventNotification
      | Stripe.Events.V2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEventNotification
      | Stripe.Events.V2CoreHealthPaymentMethodErrorFiringEventNotification
      | Stripe.Events.V2CoreHealthPaymentMethodErrorResolvedEventNotification
      | Stripe.Events.V2CoreHealthTrafficVolumeDropFiringEventNotification
      | Stripe.Events.V2CoreHealthTrafficVolumeDropResolvedEventNotification
      | Stripe.Events.V2CoreHealthWebhookLatencyFiringEventNotification
      | Stripe.Events.V2CoreHealthWebhookLatencyResolvedEventNotification
      | Stripe.Events.V2MoneyManagementAdjustmentCreatedEventNotification
      | Stripe.Events.V2MoneyManagementFinancialAccountCreatedEventNotification
      | Stripe.Events.V2MoneyManagementFinancialAccountUpdatedEventNotification
      | Stripe.Events.V2MoneyManagementFinancialAddressActivatedEventNotification
      | Stripe.Events.V2MoneyManagementFinancialAddressFailedEventNotification
      | Stripe.Events.V2MoneyManagementInboundTransferAvailableEventNotification
      | Stripe.Events.V2MoneyManagementInboundTransferBankDebitFailedEventNotification
      | Stripe.Events.V2MoneyManagementInboundTransferBankDebitProcessingEventNotification
      | Stripe.Events.V2MoneyManagementInboundTransferBankDebitQueuedEventNotification
      | Stripe.Events.V2MoneyManagementInboundTransferBankDebitReturnedEventNotification
      | Stripe.Events.V2MoneyManagementInboundTransferBankDebitSucceededEventNotification
      | Stripe.Events.V2MoneyManagementOutboundPaymentCanceledEventNotification
      | Stripe.Events.V2MoneyManagementOutboundPaymentCreatedEventNotification
      | Stripe.Events.V2MoneyManagementOutboundPaymentFailedEventNotification
      | Stripe.Events.V2MoneyManagementOutboundPaymentPostedEventNotification
      | Stripe.Events.V2MoneyManagementOutboundPaymentReturnedEventNotification
      | Stripe.Events.V2MoneyManagementOutboundPaymentUpdatedEventNotification
      | Stripe.Events.V2MoneyManagementOutboundTransferCanceledEventNotification
      | Stripe.Events.V2MoneyManagementOutboundTransferCreatedEventNotification
      | Stripe.Events.V2MoneyManagementOutboundTransferFailedEventNotification
      | Stripe.Events.V2MoneyManagementOutboundTransferPostedEventNotification
      | Stripe.Events.V2MoneyManagementOutboundTransferReturnedEventNotification
      | Stripe.Events.V2MoneyManagementOutboundTransferUpdatedEventNotification
      | Stripe.Events.V2MoneyManagementPayoutMethodUpdatedEventNotification
      | Stripe.Events.V2MoneyManagementReceivedCreditAvailableEventNotification
      | Stripe.Events.V2MoneyManagementReceivedCreditFailedEventNotification
      | Stripe.Events.V2MoneyManagementReceivedCreditReturnedEventNotification
      | Stripe.Events.V2MoneyManagementReceivedCreditSucceededEventNotification
      | Stripe.Events.V2MoneyManagementReceivedDebitCanceledEventNotification
      | Stripe.Events.V2MoneyManagementReceivedDebitFailedEventNotification
      | Stripe.Events.V2MoneyManagementReceivedDebitPendingEventNotification
      | Stripe.Events.V2MoneyManagementReceivedDebitSucceededEventNotification
      | Stripe.Events.V2MoneyManagementReceivedDebitUpdatedEventNotification
      | Stripe.Events.V2MoneyManagementRecipientVerificationCreatedEventNotification
      | Stripe.Events.V2MoneyManagementRecipientVerificationUpdatedEventNotification
      | Stripe.Events.V2MoneyManagementTransactionCreatedEventNotification
      | Stripe.Events.V2MoneyManagementTransactionUpdatedEventNotification
      | Stripe.Events.V2PaymentsOffSessionPaymentAuthorizationAttemptFailedEventNotification
      | Stripe.Events.V2PaymentsOffSessionPaymentAuthorizationAttemptStartedEventNotification
      | Stripe.Events.V2PaymentsOffSessionPaymentCanceledEventNotification
      | Stripe.Events.V2PaymentsOffSessionPaymentCreatedEventNotification
      | Stripe.Events.V2PaymentsOffSessionPaymentFailedEventNotification
      | Stripe.Events.V2PaymentsOffSessionPaymentRequiresCaptureEventNotification
      | Stripe.Events.V2PaymentsOffSessionPaymentSucceededEventNotification;
  }

  namespace Stripe.Events {
    /**
     * Occurs whenever an account status or property has changed.
     */
    export interface V1AccountUpdatedEvent extends V2.Core.EventBase {
      type: 'v1.account.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Account>;
    }
    export interface V1AccountUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.account.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Account>;
      fetchEvent(): Promise<V1AccountUpdatedEvent>;
    }

    /**
     * Occurs whenever an application fee is created on a charge.
     */
    export interface V1ApplicationFeeCreatedEvent extends V2.Core.EventBase {
      type: 'v1.application_fee.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<ApplicationFee>;
    }
    export interface V1ApplicationFeeCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.application_fee.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<ApplicationFee>;
      fetchEvent(): Promise<V1ApplicationFeeCreatedEvent>;
    }

    /**
     * Occurs whenever an application fee is refunded, whether from refunding a charge or from [refunding the application fee directly](#fee_refunds). This includes partial refunds.
     */
    export interface V1ApplicationFeeRefundedEvent extends V2.Core.EventBase {
      type: 'v1.application_fee.refunded';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<ApplicationFee>;
    }
    export interface V1ApplicationFeeRefundedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.application_fee.refunded';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<ApplicationFee>;
      fetchEvent(): Promise<V1ApplicationFeeRefundedEvent>;
    }

    /**
     * Occurs when a Meter has invalid async usage events.
     */
    export interface V1BillingMeterErrorReportTriggeredEvent
      extends V2.Core.EventBase {
      type: 'v1.billing.meter.error_report_triggered';
      // Retrieves data specific to this event.
      data: V1BillingMeterErrorReportTriggeredEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Billing.Meter>;
    }
    export interface V1BillingMeterErrorReportTriggeredEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.billing.meter.error_report_triggered';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Billing.Meter>;
      fetchEvent(): Promise<V1BillingMeterErrorReportTriggeredEvent>;
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
    export interface V1BillingMeterNoMeterFoundEvent extends V2.Core.EventBase {
      type: 'v1.billing.meter.no_meter_found';
      // Retrieves data specific to this event.
      data: V1BillingMeterNoMeterFoundEvent.Data;
    }
    export interface V1BillingMeterNoMeterFoundEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.billing.meter.no_meter_found';
      fetchEvent(): Promise<V1BillingMeterNoMeterFoundEvent>;
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
      extends V2.Core.EventBase {
      type: 'v1.billing_portal.configuration.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<BillingPortal.Configuration>;
    }
    export interface V1BillingPortalConfigurationCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.billing_portal.configuration.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<BillingPortal.Configuration>;
      fetchEvent(): Promise<V1BillingPortalConfigurationCreatedEvent>;
    }

    /**
     * Occurs whenever a portal configuration is updated.
     */
    export interface V1BillingPortalConfigurationUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v1.billing_portal.configuration.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<BillingPortal.Configuration>;
    }
    export interface V1BillingPortalConfigurationUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.billing_portal.configuration.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<BillingPortal.Configuration>;
      fetchEvent(): Promise<V1BillingPortalConfigurationUpdatedEvent>;
    }

    /**
     * Occurs whenever a capability has new requirements or a new status.
     */
    export interface V1CapabilityUpdatedEvent extends V2.Core.EventBase {
      type: 'v1.capability.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Capability>;
    }
    export interface V1CapabilityUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.capability.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Capability>;
      fetchEvent(): Promise<V1CapabilityUpdatedEvent>;
    }

    /**
     * Occurs whenever a previously uncaptured charge is captured.
     */
    export interface V1ChargeCapturedEvent extends V2.Core.EventBase {
      type: 'v1.charge.captured';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Charge>;
    }
    export interface V1ChargeCapturedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.charge.captured';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Charge>;
      fetchEvent(): Promise<V1ChargeCapturedEvent>;
    }

    /**
     * Occurs when a dispute is closed and the dispute status changes to `lost`, `warning_closed`, or `won`.
     */
    export interface V1ChargeDisputeClosedEvent extends V2.Core.EventBase {
      type: 'v1.charge.dispute.closed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Dispute>;
    }
    export interface V1ChargeDisputeClosedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.charge.dispute.closed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Dispute>;
      fetchEvent(): Promise<V1ChargeDisputeClosedEvent>;
    }

    /**
     * Occurs whenever a customer disputes a charge with their bank.
     */
    export interface V1ChargeDisputeCreatedEvent extends V2.Core.EventBase {
      type: 'v1.charge.dispute.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Dispute>;
    }
    export interface V1ChargeDisputeCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.charge.dispute.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Dispute>;
      fetchEvent(): Promise<V1ChargeDisputeCreatedEvent>;
    }

    /**
     * Occurs when funds are reinstated to your account after a dispute is closed. This includes [partially refunded payments](https://docs.stripe.com/disputes#disputes-on-partially-refunded-payments).
     */
    export interface V1ChargeDisputeFundsReinstatedEvent
      extends V2.Core.EventBase {
      type: 'v1.charge.dispute.funds_reinstated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Dispute>;
    }
    export interface V1ChargeDisputeFundsReinstatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.charge.dispute.funds_reinstated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Dispute>;
      fetchEvent(): Promise<V1ChargeDisputeFundsReinstatedEvent>;
    }

    /**
     * Occurs when funds are removed from your account due to a dispute.
     */
    export interface V1ChargeDisputeFundsWithdrawnEvent
      extends V2.Core.EventBase {
      type: 'v1.charge.dispute.funds_withdrawn';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Dispute>;
    }
    export interface V1ChargeDisputeFundsWithdrawnEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.charge.dispute.funds_withdrawn';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Dispute>;
      fetchEvent(): Promise<V1ChargeDisputeFundsWithdrawnEvent>;
    }

    /**
     * Occurs when the dispute is updated (usually with evidence).
     */
    export interface V1ChargeDisputeUpdatedEvent extends V2.Core.EventBase {
      type: 'v1.charge.dispute.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Dispute>;
    }
    export interface V1ChargeDisputeUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.charge.dispute.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Dispute>;
      fetchEvent(): Promise<V1ChargeDisputeUpdatedEvent>;
    }

    /**
     * Occurs whenever an uncaptured charge expires.
     */
    export interface V1ChargeExpiredEvent extends V2.Core.EventBase {
      type: 'v1.charge.expired';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Charge>;
    }
    export interface V1ChargeExpiredEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.charge.expired';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Charge>;
      fetchEvent(): Promise<V1ChargeExpiredEvent>;
    }

    /**
     * Occurs whenever a failed charge attempt occurs.
     */
    export interface V1ChargeFailedEvent extends V2.Core.EventBase {
      type: 'v1.charge.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Charge>;
    }
    export interface V1ChargeFailedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.charge.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Charge>;
      fetchEvent(): Promise<V1ChargeFailedEvent>;
    }

    /**
     * Occurs whenever a pending charge is created.
     */
    export interface V1ChargePendingEvent extends V2.Core.EventBase {
      type: 'v1.charge.pending';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Charge>;
    }
    export interface V1ChargePendingEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.charge.pending';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Charge>;
      fetchEvent(): Promise<V1ChargePendingEvent>;
    }

    /**
     * Occurs whenever a refund is updated on selected payment methods. For updates on all refunds, listen to `refund.updated` instead.
     */
    export interface V1ChargeRefundUpdatedEvent extends V2.Core.EventBase {
      type: 'v1.charge.refund.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Refund>;
    }
    export interface V1ChargeRefundUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.charge.refund.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Refund>;
      fetchEvent(): Promise<V1ChargeRefundUpdatedEvent>;
    }

    /**
     * Occurs whenever a charge is refunded, including partial refunds. Listen to `refund.created` for information about the refund.
     */
    export interface V1ChargeRefundedEvent extends V2.Core.EventBase {
      type: 'v1.charge.refunded';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Charge>;
    }
    export interface V1ChargeRefundedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.charge.refunded';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Charge>;
      fetchEvent(): Promise<V1ChargeRefundedEvent>;
    }

    /**
     * Occurs whenever a charge is successful.
     */
    export interface V1ChargeSucceededEvent extends V2.Core.EventBase {
      type: 'v1.charge.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Charge>;
    }
    export interface V1ChargeSucceededEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.charge.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Charge>;
      fetchEvent(): Promise<V1ChargeSucceededEvent>;
    }

    /**
     * Occurs whenever a charge description or metadata is updated, or upon an asynchronous capture.
     */
    export interface V1ChargeUpdatedEvent extends V2.Core.EventBase {
      type: 'v1.charge.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Charge>;
    }
    export interface V1ChargeUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.charge.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Charge>;
      fetchEvent(): Promise<V1ChargeUpdatedEvent>;
    }

    /**
     * Occurs when a payment intent using a delayed payment method fails.
     */
    export interface V1CheckoutSessionAsyncPaymentFailedEvent
      extends V2.Core.EventBase {
      type: 'v1.checkout.session.async_payment_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Checkout.Session>;
    }
    export interface V1CheckoutSessionAsyncPaymentFailedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.checkout.session.async_payment_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Checkout.Session>;
      fetchEvent(): Promise<V1CheckoutSessionAsyncPaymentFailedEvent>;
    }

    /**
     * Occurs when a payment intent using a delayed payment method finally succeeds.
     */
    export interface V1CheckoutSessionAsyncPaymentSucceededEvent
      extends V2.Core.EventBase {
      type: 'v1.checkout.session.async_payment_succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Checkout.Session>;
    }
    export interface V1CheckoutSessionAsyncPaymentSucceededEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.checkout.session.async_payment_succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Checkout.Session>;
      fetchEvent(): Promise<V1CheckoutSessionAsyncPaymentSucceededEvent>;
    }

    /**
     * Occurs when a Checkout Session has been successfully completed.
     */
    export interface V1CheckoutSessionCompletedEvent extends V2.Core.EventBase {
      type: 'v1.checkout.session.completed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Checkout.Session>;
    }
    export interface V1CheckoutSessionCompletedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.checkout.session.completed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Checkout.Session>;
      fetchEvent(): Promise<V1CheckoutSessionCompletedEvent>;
    }

    /**
     * Occurs when a Checkout Session is expired.
     */
    export interface V1CheckoutSessionExpiredEvent extends V2.Core.EventBase {
      type: 'v1.checkout.session.expired';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Checkout.Session>;
    }
    export interface V1CheckoutSessionExpiredEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.checkout.session.expired';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Checkout.Session>;
      fetchEvent(): Promise<V1CheckoutSessionExpiredEvent>;
    }

    /**
     * Occurs when a Climate order is canceled.
     */
    export interface V1ClimateOrderCanceledEvent extends V2.Core.EventBase {
      type: 'v1.climate.order.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Climate.Order>;
    }
    export interface V1ClimateOrderCanceledEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.climate.order.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Climate.Order>;
      fetchEvent(): Promise<V1ClimateOrderCanceledEvent>;
    }

    /**
     * Occurs when a Climate order is created.
     */
    export interface V1ClimateOrderCreatedEvent extends V2.Core.EventBase {
      type: 'v1.climate.order.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Climate.Order>;
    }
    export interface V1ClimateOrderCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.climate.order.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Climate.Order>;
      fetchEvent(): Promise<V1ClimateOrderCreatedEvent>;
    }

    /**
     * Occurs when a Climate order is delayed.
     */
    export interface V1ClimateOrderDelayedEvent extends V2.Core.EventBase {
      type: 'v1.climate.order.delayed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Climate.Order>;
    }
    export interface V1ClimateOrderDelayedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.climate.order.delayed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Climate.Order>;
      fetchEvent(): Promise<V1ClimateOrderDelayedEvent>;
    }

    /**
     * Occurs when a Climate order is delivered.
     */
    export interface V1ClimateOrderDeliveredEvent extends V2.Core.EventBase {
      type: 'v1.climate.order.delivered';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Climate.Order>;
    }
    export interface V1ClimateOrderDeliveredEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.climate.order.delivered';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Climate.Order>;
      fetchEvent(): Promise<V1ClimateOrderDeliveredEvent>;
    }

    /**
     * Occurs when a Climate order's product is substituted for another.
     */
    export interface V1ClimateOrderProductSubstitutedEvent
      extends V2.Core.EventBase {
      type: 'v1.climate.order.product_substituted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Climate.Order>;
    }
    export interface V1ClimateOrderProductSubstitutedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.climate.order.product_substituted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Climate.Order>;
      fetchEvent(): Promise<V1ClimateOrderProductSubstitutedEvent>;
    }

    /**
     * Occurs when a Climate product is created.
     */
    export interface V1ClimateProductCreatedEvent extends V2.Core.EventBase {
      type: 'v1.climate.product.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Climate.Product>;
    }
    export interface V1ClimateProductCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.climate.product.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Climate.Product>;
      fetchEvent(): Promise<V1ClimateProductCreatedEvent>;
    }

    /**
     * Occurs when a Climate product is updated.
     */
    export interface V1ClimateProductPricingUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v1.climate.product.pricing_updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Climate.Product>;
    }
    export interface V1ClimateProductPricingUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.climate.product.pricing_updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Climate.Product>;
      fetchEvent(): Promise<V1ClimateProductPricingUpdatedEvent>;
    }

    /**
     * Occurs whenever a coupon is created.
     */
    export interface V1CouponCreatedEvent extends V2.Core.EventBase {
      type: 'v1.coupon.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Coupon>;
    }
    export interface V1CouponCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.coupon.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Coupon>;
      fetchEvent(): Promise<V1CouponCreatedEvent>;
    }

    /**
     * Occurs whenever a coupon is deleted.
     */
    export interface V1CouponDeletedEvent extends V2.Core.EventBase {
      type: 'v1.coupon.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Coupon>;
    }
    export interface V1CouponDeletedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.coupon.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Coupon>;
      fetchEvent(): Promise<V1CouponDeletedEvent>;
    }

    /**
     * Occurs whenever a coupon is updated.
     */
    export interface V1CouponUpdatedEvent extends V2.Core.EventBase {
      type: 'v1.coupon.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Coupon>;
    }
    export interface V1CouponUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.coupon.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Coupon>;
      fetchEvent(): Promise<V1CouponUpdatedEvent>;
    }

    /**
     * Occurs whenever a credit note is created.
     */
    export interface V1CreditNoteCreatedEvent extends V2.Core.EventBase {
      type: 'v1.credit_note.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<CreditNote>;
    }
    export interface V1CreditNoteCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.credit_note.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<CreditNote>;
      fetchEvent(): Promise<V1CreditNoteCreatedEvent>;
    }

    /**
     * Occurs whenever a credit note is updated.
     */
    export interface V1CreditNoteUpdatedEvent extends V2.Core.EventBase {
      type: 'v1.credit_note.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<CreditNote>;
    }
    export interface V1CreditNoteUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.credit_note.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<CreditNote>;
      fetchEvent(): Promise<V1CreditNoteUpdatedEvent>;
    }

    /**
     * Occurs whenever a credit note is voided.
     */
    export interface V1CreditNoteVoidedEvent extends V2.Core.EventBase {
      type: 'v1.credit_note.voided';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<CreditNote>;
    }
    export interface V1CreditNoteVoidedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.credit_note.voided';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<CreditNote>;
      fetchEvent(): Promise<V1CreditNoteVoidedEvent>;
    }

    /**
     * Occurs whenever a new customer is created.
     */
    export interface V1CustomerCreatedEvent extends V2.Core.EventBase {
      type: 'v1.customer.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Customer>;
    }
    export interface V1CustomerCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.customer.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Customer>;
      fetchEvent(): Promise<V1CustomerCreatedEvent>;
    }

    /**
     * Occurs whenever a customer is deleted.
     */
    export interface V1CustomerDeletedEvent extends V2.Core.EventBase {
      type: 'v1.customer.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Customer>;
    }
    export interface V1CustomerDeletedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.customer.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Customer>;
      fetchEvent(): Promise<V1CustomerDeletedEvent>;
    }

    /**
     * Occurs whenever a customer is signed up for a new plan.
     */
    export interface V1CustomerSubscriptionCreatedEvent
      extends V2.Core.EventBase {
      type: 'v1.customer.subscription.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Subscription>;
    }
    export interface V1CustomerSubscriptionCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.customer.subscription.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Subscription>;
      fetchEvent(): Promise<V1CustomerSubscriptionCreatedEvent>;
    }

    /**
     * Occurs whenever a customer's subscription ends.
     */
    export interface V1CustomerSubscriptionDeletedEvent
      extends V2.Core.EventBase {
      type: 'v1.customer.subscription.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Subscription>;
    }
    export interface V1CustomerSubscriptionDeletedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.customer.subscription.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Subscription>;
      fetchEvent(): Promise<V1CustomerSubscriptionDeletedEvent>;
    }

    /**
     * Occurs whenever a customer's subscription is paused. Only applies when subscriptions enter `status=paused`, not when [payment collection](https://docs.stripe.com/billing/subscriptions/pause) is paused.
     */
    export interface V1CustomerSubscriptionPausedEvent
      extends V2.Core.EventBase {
      type: 'v1.customer.subscription.paused';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Subscription>;
    }
    export interface V1CustomerSubscriptionPausedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.customer.subscription.paused';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Subscription>;
      fetchEvent(): Promise<V1CustomerSubscriptionPausedEvent>;
    }

    /**
     * Occurs whenever a customer's subscription's pending update is applied, and the subscription is updated.
     */
    export interface V1CustomerSubscriptionPendingUpdateAppliedEvent
      extends V2.Core.EventBase {
      type: 'v1.customer.subscription.pending_update_applied';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Subscription>;
    }
    export interface V1CustomerSubscriptionPendingUpdateAppliedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.customer.subscription.pending_update_applied';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Subscription>;
      fetchEvent(): Promise<V1CustomerSubscriptionPendingUpdateAppliedEvent>;
    }

    /**
     * Occurs whenever a customer's subscription's pending update expires before the related invoice is paid.
     */
    export interface V1CustomerSubscriptionPendingUpdateExpiredEvent
      extends V2.Core.EventBase {
      type: 'v1.customer.subscription.pending_update_expired';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Subscription>;
    }
    export interface V1CustomerSubscriptionPendingUpdateExpiredEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.customer.subscription.pending_update_expired';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Subscription>;
      fetchEvent(): Promise<V1CustomerSubscriptionPendingUpdateExpiredEvent>;
    }

    /**
     * Occurs whenever a customer's subscription is no longer paused. Only applies when a `status=paused` subscription is [resumed](https://docs.stripe.com/api/subscriptions/resume), not when [payment collection](https://docs.stripe.com/billing/subscriptions/pause) is resumed.
     */
    export interface V1CustomerSubscriptionResumedEvent
      extends V2.Core.EventBase {
      type: 'v1.customer.subscription.resumed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Subscription>;
    }
    export interface V1CustomerSubscriptionResumedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.customer.subscription.resumed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Subscription>;
      fetchEvent(): Promise<V1CustomerSubscriptionResumedEvent>;
    }

    /**
     * Occurs three days before a subscription's trial period is scheduled to end, or when a trial is ended immediately (using `trial_end=now`).
     */
    export interface V1CustomerSubscriptionTrialWillEndEvent
      extends V2.Core.EventBase {
      type: 'v1.customer.subscription.trial_will_end';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Subscription>;
    }
    export interface V1CustomerSubscriptionTrialWillEndEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.customer.subscription.trial_will_end';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Subscription>;
      fetchEvent(): Promise<V1CustomerSubscriptionTrialWillEndEvent>;
    }

    /**
     * Occurs whenever a subscription changes (e.g., switching from one plan to another, or changing the status from trial to active).
     */
    export interface V1CustomerSubscriptionUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v1.customer.subscription.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Subscription>;
    }
    export interface V1CustomerSubscriptionUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.customer.subscription.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Subscription>;
      fetchEvent(): Promise<V1CustomerSubscriptionUpdatedEvent>;
    }

    /**
     * Occurs whenever a tax ID is created for a customer.
     */
    export interface V1CustomerTaxIdCreatedEvent extends V2.Core.EventBase {
      type: 'v1.customer.tax_id.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TaxId>;
    }
    export interface V1CustomerTaxIdCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.customer.tax_id.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TaxId>;
      fetchEvent(): Promise<V1CustomerTaxIdCreatedEvent>;
    }

    /**
     * Occurs whenever a tax ID is deleted from a customer.
     */
    export interface V1CustomerTaxIdDeletedEvent extends V2.Core.EventBase {
      type: 'v1.customer.tax_id.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TaxId>;
    }
    export interface V1CustomerTaxIdDeletedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.customer.tax_id.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TaxId>;
      fetchEvent(): Promise<V1CustomerTaxIdDeletedEvent>;
    }

    /**
     * Occurs whenever a customer's tax ID is updated.
     */
    export interface V1CustomerTaxIdUpdatedEvent extends V2.Core.EventBase {
      type: 'v1.customer.tax_id.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TaxId>;
    }
    export interface V1CustomerTaxIdUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.customer.tax_id.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TaxId>;
      fetchEvent(): Promise<V1CustomerTaxIdUpdatedEvent>;
    }

    /**
     * Occurs whenever any property of a customer changes.
     */
    export interface V1CustomerUpdatedEvent extends V2.Core.EventBase {
      type: 'v1.customer.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Customer>;
    }
    export interface V1CustomerUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.customer.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Customer>;
      fetchEvent(): Promise<V1CustomerUpdatedEvent>;
    }

    /**
     * Occurs whenever a new Stripe-generated file is available for your account.
     */
    export interface V1FileCreatedEvent extends V2.Core.EventBase {
      type: 'v1.file.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<File>;
    }
    export interface V1FileCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.file.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<File>;
      fetchEvent(): Promise<V1FileCreatedEvent>;
    }

    /**
     * Occurs when a new Financial Connections account is created.
     */
    export interface V1FinancialConnectionsAccountCreatedEvent
      extends V2.Core.EventBase {
      type: 'v1.financial_connections.account.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<FinancialConnections.Account>;
    }
    export interface V1FinancialConnectionsAccountCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.financial_connections.account.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<FinancialConnections.Account>;
      fetchEvent(): Promise<V1FinancialConnectionsAccountCreatedEvent>;
    }

    /**
     * Occurs when a Financial Connections account's status is updated from `active` to `inactive`.
     */
    export interface V1FinancialConnectionsAccountDeactivatedEvent
      extends V2.Core.EventBase {
      type: 'v1.financial_connections.account.deactivated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<FinancialConnections.Account>;
    }
    export interface V1FinancialConnectionsAccountDeactivatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.financial_connections.account.deactivated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<FinancialConnections.Account>;
      fetchEvent(): Promise<V1FinancialConnectionsAccountDeactivatedEvent>;
    }

    /**
     * Occurs when a Financial Connections account is disconnected.
     */
    export interface V1FinancialConnectionsAccountDisconnectedEvent
      extends V2.Core.EventBase {
      type: 'v1.financial_connections.account.disconnected';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<FinancialConnections.Account>;
    }
    export interface V1FinancialConnectionsAccountDisconnectedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.financial_connections.account.disconnected';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<FinancialConnections.Account>;
      fetchEvent(): Promise<V1FinancialConnectionsAccountDisconnectedEvent>;
    }

    /**
     * Occurs when a Financial Connections account's status is updated from `inactive` to `active`.
     */
    export interface V1FinancialConnectionsAccountReactivatedEvent
      extends V2.Core.EventBase {
      type: 'v1.financial_connections.account.reactivated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<FinancialConnections.Account>;
    }
    export interface V1FinancialConnectionsAccountReactivatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.financial_connections.account.reactivated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<FinancialConnections.Account>;
      fetchEvent(): Promise<V1FinancialConnectionsAccountReactivatedEvent>;
    }

    /**
     * Occurs when an Account’s `balance_refresh` status transitions from `pending` to either `succeeded` or `failed`.
     */
    export interface V1FinancialConnectionsAccountRefreshedBalanceEvent
      extends V2.Core.EventBase {
      type: 'v1.financial_connections.account.refreshed_balance';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<FinancialConnections.Account>;
    }
    export interface V1FinancialConnectionsAccountRefreshedBalanceEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.financial_connections.account.refreshed_balance';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<FinancialConnections.Account>;
      fetchEvent(): Promise<V1FinancialConnectionsAccountRefreshedBalanceEvent>;
    }

    /**
     * Occurs when an Account’s `ownership_refresh` status transitions from `pending` to either `succeeded` or `failed`.
     */
    export interface V1FinancialConnectionsAccountRefreshedOwnershipEvent
      extends V2.Core.EventBase {
      type: 'v1.financial_connections.account.refreshed_ownership';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<FinancialConnections.Account>;
    }
    export interface V1FinancialConnectionsAccountRefreshedOwnershipEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.financial_connections.account.refreshed_ownership';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<FinancialConnections.Account>;
      fetchEvent(): Promise<
        V1FinancialConnectionsAccountRefreshedOwnershipEvent
      >;
    }

    /**
     * Occurs when an Account’s `transaction_refresh` status transitions from `pending` to either `succeeded` or `failed`.
     */
    export interface V1FinancialConnectionsAccountRefreshedTransactionsEvent
      extends V2.Core.EventBase {
      type: 'v1.financial_connections.account.refreshed_transactions';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<FinancialConnections.Account>;
    }
    export interface V1FinancialConnectionsAccountRefreshedTransactionsEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.financial_connections.account.refreshed_transactions';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<FinancialConnections.Account>;
      fetchEvent(): Promise<
        V1FinancialConnectionsAccountRefreshedTransactionsEvent
      >;
    }

    /**
     * Occurs whenever a VerificationSession is canceled.
     */
    export interface V1IdentityVerificationSessionCanceledEvent
      extends V2.Core.EventBase {
      type: 'v1.identity.verification_session.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Identity.VerificationSession>;
    }
    export interface V1IdentityVerificationSessionCanceledEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.identity.verification_session.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Identity.VerificationSession>;
      fetchEvent(): Promise<V1IdentityVerificationSessionCanceledEvent>;
    }

    /**
     * Occurs whenever a VerificationSession is created.
     */
    export interface V1IdentityVerificationSessionCreatedEvent
      extends V2.Core.EventBase {
      type: 'v1.identity.verification_session.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Identity.VerificationSession>;
    }
    export interface V1IdentityVerificationSessionCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.identity.verification_session.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Identity.VerificationSession>;
      fetchEvent(): Promise<V1IdentityVerificationSessionCreatedEvent>;
    }

    /**
     * Occurs whenever a VerificationSession transitions to processing.
     */
    export interface V1IdentityVerificationSessionProcessingEvent
      extends V2.Core.EventBase {
      type: 'v1.identity.verification_session.processing';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Identity.VerificationSession>;
    }
    export interface V1IdentityVerificationSessionProcessingEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.identity.verification_session.processing';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Identity.VerificationSession>;
      fetchEvent(): Promise<V1IdentityVerificationSessionProcessingEvent>;
    }

    /**
     * Occurs whenever a VerificationSession is redacted.
     */
    export interface V1IdentityVerificationSessionRedactedEvent
      extends V2.Core.EventBase {
      type: 'v1.identity.verification_session.redacted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Identity.VerificationSession>;
    }
    export interface V1IdentityVerificationSessionRedactedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.identity.verification_session.redacted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Identity.VerificationSession>;
      fetchEvent(): Promise<V1IdentityVerificationSessionRedactedEvent>;
    }

    /**
     * Occurs whenever a VerificationSession transitions to require user input.
     */
    export interface V1IdentityVerificationSessionRequiresInputEvent
      extends V2.Core.EventBase {
      type: 'v1.identity.verification_session.requires_input';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Identity.VerificationSession>;
    }
    export interface V1IdentityVerificationSessionRequiresInputEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.identity.verification_session.requires_input';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Identity.VerificationSession>;
      fetchEvent(): Promise<V1IdentityVerificationSessionRequiresInputEvent>;
    }

    /**
     * Occurs whenever a VerificationSession transitions to verified.
     */
    export interface V1IdentityVerificationSessionVerifiedEvent
      extends V2.Core.EventBase {
      type: 'v1.identity.verification_session.verified';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Identity.VerificationSession>;
    }
    export interface V1IdentityVerificationSessionVerifiedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.identity.verification_session.verified';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Identity.VerificationSession>;
      fetchEvent(): Promise<V1IdentityVerificationSessionVerifiedEvent>;
    }

    /**
     * Occurs whenever a new invoice is created. To learn how webhooks can be used with this event, and how they can affect it, see [Using Webhooks with Subscriptions](https://docs.stripe.com/subscriptions/webhooks).
     */
    export interface V1InvoiceCreatedEvent extends V2.Core.EventBase {
      type: 'v1.invoice.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
    }
    export interface V1InvoiceCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.invoice.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
      fetchEvent(): Promise<V1InvoiceCreatedEvent>;
    }

    /**
     * Occurs whenever a draft invoice is deleted. Note: This event is not sent for [invoice previews](https://docs.stripe.com/api/invoices/create_preview).
     */
    export interface V1InvoiceDeletedEvent extends V2.Core.EventBase {
      type: 'v1.invoice.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
    }
    export interface V1InvoiceDeletedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.invoice.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
      fetchEvent(): Promise<V1InvoiceDeletedEvent>;
    }

    /**
     * Occurs whenever a draft invoice cannot be finalized. See the invoice’s [last finalization error](https://docs.stripe.com/api/invoices/object#invoice_object-last_finalization_error) for details.
     */
    export interface V1InvoiceFinalizationFailedEvent
      extends V2.Core.EventBase {
      type: 'v1.invoice.finalization_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
    }
    export interface V1InvoiceFinalizationFailedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.invoice.finalization_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
      fetchEvent(): Promise<V1InvoiceFinalizationFailedEvent>;
    }

    /**
     * Occurs whenever a draft invoice is finalized and updated to be an open invoice.
     */
    export interface V1InvoiceFinalizedEvent extends V2.Core.EventBase {
      type: 'v1.invoice.finalized';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
    }
    export interface V1InvoiceFinalizedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.invoice.finalized';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
      fetchEvent(): Promise<V1InvoiceFinalizedEvent>;
    }

    /**
     * Occurs whenever an invoice is marked uncollectible.
     */
    export interface V1InvoiceMarkedUncollectibleEvent
      extends V2.Core.EventBase {
      type: 'v1.invoice.marked_uncollectible';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
    }
    export interface V1InvoiceMarkedUncollectibleEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.invoice.marked_uncollectible';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
      fetchEvent(): Promise<V1InvoiceMarkedUncollectibleEvent>;
    }

    /**
     * Occurs X number of days after an invoice becomes due&mdash;where X is determined by Automations.
     */
    export interface V1InvoiceOverdueEvent extends V2.Core.EventBase {
      type: 'v1.invoice.overdue';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
    }
    export interface V1InvoiceOverdueEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.invoice.overdue';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
      fetchEvent(): Promise<V1InvoiceOverdueEvent>;
    }

    /**
     * Occurs when an invoice transitions to paid with a non-zero amount_overpaid.
     */
    export interface V1InvoiceOverpaidEvent extends V2.Core.EventBase {
      type: 'v1.invoice.overpaid';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
    }
    export interface V1InvoiceOverpaidEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.invoice.overpaid';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
      fetchEvent(): Promise<V1InvoiceOverpaidEvent>;
    }

    /**
     * Occurs whenever an invoice payment attempt succeeds or an invoice is marked as paid out-of-band.
     */
    export interface V1InvoicePaidEvent extends V2.Core.EventBase {
      type: 'v1.invoice.paid';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
    }
    export interface V1InvoicePaidEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.invoice.paid';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
      fetchEvent(): Promise<V1InvoicePaidEvent>;
    }

    /**
     * Occurs whenever an invoice payment attempt requires further user action to complete.
     */
    export interface V1InvoicePaymentActionRequiredEvent
      extends V2.Core.EventBase {
      type: 'v1.invoice.payment_action_required';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
    }
    export interface V1InvoicePaymentActionRequiredEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.invoice.payment_action_required';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
      fetchEvent(): Promise<V1InvoicePaymentActionRequiredEvent>;
    }

    /**
     * Occurs whenever an invoice payment attempt fails, due to either a declined payment, including soft decline, or to the lack of a stored payment method.
     */
    export interface V1InvoicePaymentFailedEvent extends V2.Core.EventBase {
      type: 'v1.invoice.payment_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
    }
    export interface V1InvoicePaymentFailedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.invoice.payment_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
      fetchEvent(): Promise<V1InvoicePaymentFailedEvent>;
    }

    /**
     * Occurs whenever an invoice payment attempt succeeds.
     */
    export interface V1InvoicePaymentSucceededEvent extends V2.Core.EventBase {
      type: 'v1.invoice.payment_succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
    }
    export interface V1InvoicePaymentSucceededEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.invoice.payment_succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
      fetchEvent(): Promise<V1InvoicePaymentSucceededEvent>;
    }

    /**
     * Occurs whenever an invoice email is sent out.
     */
    export interface V1InvoiceSentEvent extends V2.Core.EventBase {
      type: 'v1.invoice.sent';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
    }
    export interface V1InvoiceSentEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.invoice.sent';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
      fetchEvent(): Promise<V1InvoiceSentEvent>;
    }

    /**
     * Occurs X number of days before a subscription is scheduled to create an invoice that is automatically charged&mdash;where X is determined by your [subscriptions settings](https://dashboard.stripe.com/account/billing/automatic). Note: The received `Invoice` object will not have an invoice ID.
     */
    export interface V1InvoiceUpcomingEvent extends V2.Core.EventBase {
      type: 'v1.invoice.upcoming';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
    }
    export interface V1InvoiceUpcomingEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.invoice.upcoming';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
      fetchEvent(): Promise<V1InvoiceUpcomingEvent>;
    }

    /**
     * Occurs whenever an invoice changes (e.g., the invoice amount).
     */
    export interface V1InvoiceUpdatedEvent extends V2.Core.EventBase {
      type: 'v1.invoice.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
    }
    export interface V1InvoiceUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.invoice.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
      fetchEvent(): Promise<V1InvoiceUpdatedEvent>;
    }

    /**
     * Occurs whenever an invoice is voided.
     */
    export interface V1InvoiceVoidedEvent extends V2.Core.EventBase {
      type: 'v1.invoice.voided';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
    }
    export interface V1InvoiceVoidedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.invoice.voided';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
      fetchEvent(): Promise<V1InvoiceVoidedEvent>;
    }

    /**
     * Occurs X number of days before an invoice becomes due&mdash;where X is determined by Automations.
     */
    export interface V1InvoiceWillBeDueEvent extends V2.Core.EventBase {
      type: 'v1.invoice.will_be_due';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
    }
    export interface V1InvoiceWillBeDueEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.invoice.will_be_due';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Invoice>;
      fetchEvent(): Promise<V1InvoiceWillBeDueEvent>;
    }

    /**
     * Occurs when an InvoicePayment is successfully paid.
     */
    export interface V1InvoicePaymentPaidEvent extends V2.Core.EventBase {
      type: 'v1.invoice_payment.paid';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<InvoicePayment>;
    }
    export interface V1InvoicePaymentPaidEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.invoice_payment.paid';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<InvoicePayment>;
      fetchEvent(): Promise<V1InvoicePaymentPaidEvent>;
    }

    /**
     * Occurs whenever an invoice item is created.
     */
    export interface V1InvoiceitemCreatedEvent extends V2.Core.EventBase {
      type: 'v1.invoiceitem.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<InvoiceItem>;
    }
    export interface V1InvoiceitemCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.invoiceitem.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<InvoiceItem>;
      fetchEvent(): Promise<V1InvoiceitemCreatedEvent>;
    }

    /**
     * Occurs whenever an invoice item is deleted.
     */
    export interface V1InvoiceitemDeletedEvent extends V2.Core.EventBase {
      type: 'v1.invoiceitem.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<InvoiceItem>;
    }
    export interface V1InvoiceitemDeletedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.invoiceitem.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<InvoiceItem>;
      fetchEvent(): Promise<V1InvoiceitemDeletedEvent>;
    }

    /**
     * Occurs whenever an authorization is created.
     */
    export interface V1IssuingAuthorizationCreatedEvent
      extends V2.Core.EventBase {
      type: 'v1.issuing_authorization.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Authorization>;
    }
    export interface V1IssuingAuthorizationCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.issuing_authorization.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Authorization>;
      fetchEvent(): Promise<V1IssuingAuthorizationCreatedEvent>;
    }

    /**
     * Represents a synchronous request for authorization, see [Using your integration to handle authorization requests](https://docs.stripe.com/issuing/purchases/authorizations#authorization-handling).
     */
    export interface V1IssuingAuthorizationRequestEvent
      extends V2.Core.EventBase {
      type: 'v1.issuing_authorization.request';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Authorization>;
    }
    export interface V1IssuingAuthorizationRequestEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.issuing_authorization.request';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Authorization>;
      fetchEvent(): Promise<V1IssuingAuthorizationRequestEvent>;
    }

    /**
     * Occurs whenever an authorization is updated.
     */
    export interface V1IssuingAuthorizationUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v1.issuing_authorization.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Authorization>;
    }
    export interface V1IssuingAuthorizationUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.issuing_authorization.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Authorization>;
      fetchEvent(): Promise<V1IssuingAuthorizationUpdatedEvent>;
    }

    /**
     * Occurs whenever a card is created.
     */
    export interface V1IssuingCardCreatedEvent extends V2.Core.EventBase {
      type: 'v1.issuing_card.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Card>;
    }
    export interface V1IssuingCardCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.issuing_card.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Card>;
      fetchEvent(): Promise<V1IssuingCardCreatedEvent>;
    }

    /**
     * Occurs whenever a card is updated.
     */
    export interface V1IssuingCardUpdatedEvent extends V2.Core.EventBase {
      type: 'v1.issuing_card.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Card>;
    }
    export interface V1IssuingCardUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.issuing_card.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Card>;
      fetchEvent(): Promise<V1IssuingCardUpdatedEvent>;
    }

    /**
     * Occurs whenever a cardholder is created.
     */
    export interface V1IssuingCardholderCreatedEvent extends V2.Core.EventBase {
      type: 'v1.issuing_cardholder.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Cardholder>;
    }
    export interface V1IssuingCardholderCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.issuing_cardholder.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Cardholder>;
      fetchEvent(): Promise<V1IssuingCardholderCreatedEvent>;
    }

    /**
     * Occurs whenever a cardholder is updated.
     */
    export interface V1IssuingCardholderUpdatedEvent extends V2.Core.EventBase {
      type: 'v1.issuing_cardholder.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Cardholder>;
    }
    export interface V1IssuingCardholderUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.issuing_cardholder.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Cardholder>;
      fetchEvent(): Promise<V1IssuingCardholderUpdatedEvent>;
    }

    /**
     * Occurs whenever a dispute is won, lost or expired.
     */
    export interface V1IssuingDisputeClosedEvent extends V2.Core.EventBase {
      type: 'v1.issuing_dispute.closed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Dispute>;
    }
    export interface V1IssuingDisputeClosedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.issuing_dispute.closed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Dispute>;
      fetchEvent(): Promise<V1IssuingDisputeClosedEvent>;
    }

    /**
     * Occurs whenever a dispute is created.
     */
    export interface V1IssuingDisputeCreatedEvent extends V2.Core.EventBase {
      type: 'v1.issuing_dispute.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Dispute>;
    }
    export interface V1IssuingDisputeCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.issuing_dispute.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Dispute>;
      fetchEvent(): Promise<V1IssuingDisputeCreatedEvent>;
    }

    /**
     * Occurs whenever funds are reinstated to your account for an Issuing dispute.
     */
    export interface V1IssuingDisputeFundsReinstatedEvent
      extends V2.Core.EventBase {
      type: 'v1.issuing_dispute.funds_reinstated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Dispute>;
    }
    export interface V1IssuingDisputeFundsReinstatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.issuing_dispute.funds_reinstated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Dispute>;
      fetchEvent(): Promise<V1IssuingDisputeFundsReinstatedEvent>;
    }

    /**
     * Occurs whenever funds are deducted from your account for an Issuing dispute.
     */
    export interface V1IssuingDisputeFundsRescindedEvent
      extends V2.Core.EventBase {
      type: 'v1.issuing_dispute.funds_rescinded';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Dispute>;
    }
    export interface V1IssuingDisputeFundsRescindedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.issuing_dispute.funds_rescinded';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Dispute>;
      fetchEvent(): Promise<V1IssuingDisputeFundsRescindedEvent>;
    }

    /**
     * Occurs whenever a dispute is submitted.
     */
    export interface V1IssuingDisputeSubmittedEvent extends V2.Core.EventBase {
      type: 'v1.issuing_dispute.submitted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Dispute>;
    }
    export interface V1IssuingDisputeSubmittedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.issuing_dispute.submitted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Dispute>;
      fetchEvent(): Promise<V1IssuingDisputeSubmittedEvent>;
    }

    /**
     * Occurs whenever a dispute is updated.
     */
    export interface V1IssuingDisputeUpdatedEvent extends V2.Core.EventBase {
      type: 'v1.issuing_dispute.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Dispute>;
    }
    export interface V1IssuingDisputeUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.issuing_dispute.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Dispute>;
      fetchEvent(): Promise<V1IssuingDisputeUpdatedEvent>;
    }

    /**
     * Occurs whenever a personalization design is activated following the activation of the physical bundle that belongs to it.
     */
    export interface V1IssuingPersonalizationDesignActivatedEvent
      extends V2.Core.EventBase {
      type: 'v1.issuing_personalization_design.activated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.PersonalizationDesign>;
    }
    export interface V1IssuingPersonalizationDesignActivatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.issuing_personalization_design.activated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.PersonalizationDesign>;
      fetchEvent(): Promise<V1IssuingPersonalizationDesignActivatedEvent>;
    }

    /**
     * Occurs whenever a personalization design is deactivated following the deactivation of the physical bundle that belongs to it.
     */
    export interface V1IssuingPersonalizationDesignDeactivatedEvent
      extends V2.Core.EventBase {
      type: 'v1.issuing_personalization_design.deactivated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.PersonalizationDesign>;
    }
    export interface V1IssuingPersonalizationDesignDeactivatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.issuing_personalization_design.deactivated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.PersonalizationDesign>;
      fetchEvent(): Promise<V1IssuingPersonalizationDesignDeactivatedEvent>;
    }

    /**
     * Occurs whenever a personalization design is rejected by design review.
     */
    export interface V1IssuingPersonalizationDesignRejectedEvent
      extends V2.Core.EventBase {
      type: 'v1.issuing_personalization_design.rejected';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.PersonalizationDesign>;
    }
    export interface V1IssuingPersonalizationDesignRejectedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.issuing_personalization_design.rejected';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.PersonalizationDesign>;
      fetchEvent(): Promise<V1IssuingPersonalizationDesignRejectedEvent>;
    }

    /**
     * Occurs whenever a personalization design is updated.
     */
    export interface V1IssuingPersonalizationDesignUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v1.issuing_personalization_design.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.PersonalizationDesign>;
    }
    export interface V1IssuingPersonalizationDesignUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.issuing_personalization_design.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.PersonalizationDesign>;
      fetchEvent(): Promise<V1IssuingPersonalizationDesignUpdatedEvent>;
    }

    /**
     * Occurs whenever an issuing digital wallet token is created.
     */
    export interface V1IssuingTokenCreatedEvent extends V2.Core.EventBase {
      type: 'v1.issuing_token.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Token>;
    }
    export interface V1IssuingTokenCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.issuing_token.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Token>;
      fetchEvent(): Promise<V1IssuingTokenCreatedEvent>;
    }

    /**
     * Occurs whenever an issuing digital wallet token is updated.
     */
    export interface V1IssuingTokenUpdatedEvent extends V2.Core.EventBase {
      type: 'v1.issuing_token.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Token>;
    }
    export interface V1IssuingTokenUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.issuing_token.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Token>;
      fetchEvent(): Promise<V1IssuingTokenUpdatedEvent>;
    }

    /**
     * Occurs whenever an issuing transaction is created.
     */
    export interface V1IssuingTransactionCreatedEvent
      extends V2.Core.EventBase {
      type: 'v1.issuing_transaction.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Transaction>;
    }
    export interface V1IssuingTransactionCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.issuing_transaction.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Transaction>;
      fetchEvent(): Promise<V1IssuingTransactionCreatedEvent>;
    }

    /**
     * Occurs whenever an issuing transaction is updated with receipt data.
     */
    export interface V1IssuingTransactionPurchaseDetailsReceiptUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v1.issuing_transaction.purchase_details_receipt_updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Transaction>;
    }
    export interface V1IssuingTransactionPurchaseDetailsReceiptUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.issuing_transaction.purchase_details_receipt_updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Transaction>;
      fetchEvent(): Promise<
        V1IssuingTransactionPurchaseDetailsReceiptUpdatedEvent
      >;
    }

    /**
     * Occurs whenever an issuing transaction is updated.
     */
    export interface V1IssuingTransactionUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v1.issuing_transaction.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Transaction>;
    }
    export interface V1IssuingTransactionUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.issuing_transaction.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Issuing.Transaction>;
      fetchEvent(): Promise<V1IssuingTransactionUpdatedEvent>;
    }

    /**
     * Occurs whenever a Mandate is updated.
     */
    export interface V1MandateUpdatedEvent extends V2.Core.EventBase {
      type: 'v1.mandate.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Mandate>;
    }
    export interface V1MandateUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.mandate.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Mandate>;
      fetchEvent(): Promise<V1MandateUpdatedEvent>;
    }

    /**
     * Occurs when a PaymentIntent has funds to be captured. Check the `amount_capturable` property on the PaymentIntent to determine the amount that can be captured. You may capture the PaymentIntent with an `amount_to_capture` value up to the specified amount. [Learn more about capturing PaymentIntents.](https://docs.stripe.com/api/payment_intents/capture).
     */
    export interface V1PaymentIntentAmountCapturableUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v1.payment_intent.amount_capturable_updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentIntent>;
    }
    export interface V1PaymentIntentAmountCapturableUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.payment_intent.amount_capturable_updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentIntent>;
      fetchEvent(): Promise<V1PaymentIntentAmountCapturableUpdatedEvent>;
    }

    /**
     * Occurs when a PaymentIntent is canceled.
     */
    export interface V1PaymentIntentCanceledEvent extends V2.Core.EventBase {
      type: 'v1.payment_intent.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentIntent>;
    }
    export interface V1PaymentIntentCanceledEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.payment_intent.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentIntent>;
      fetchEvent(): Promise<V1PaymentIntentCanceledEvent>;
    }

    /**
     * Occurs when a new PaymentIntent is created.
     */
    export interface V1PaymentIntentCreatedEvent extends V2.Core.EventBase {
      type: 'v1.payment_intent.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentIntent>;
    }
    export interface V1PaymentIntentCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.payment_intent.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentIntent>;
      fetchEvent(): Promise<V1PaymentIntentCreatedEvent>;
    }

    /**
     * Occurs when funds are applied to a customer_balance PaymentIntent and the 'amount_remaining' changes.
     */
    export interface V1PaymentIntentPartiallyFundedEvent
      extends V2.Core.EventBase {
      type: 'v1.payment_intent.partially_funded';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentIntent>;
    }
    export interface V1PaymentIntentPartiallyFundedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.payment_intent.partially_funded';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentIntent>;
      fetchEvent(): Promise<V1PaymentIntentPartiallyFundedEvent>;
    }

    /**
     * Occurs when a PaymentIntent has failed the attempt to create a payment method or a payment.
     */
    export interface V1PaymentIntentPaymentFailedEvent
      extends V2.Core.EventBase {
      type: 'v1.payment_intent.payment_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentIntent>;
    }
    export interface V1PaymentIntentPaymentFailedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.payment_intent.payment_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentIntent>;
      fetchEvent(): Promise<V1PaymentIntentPaymentFailedEvent>;
    }

    /**
     * Occurs when a PaymentIntent has started processing.
     */
    export interface V1PaymentIntentProcessingEvent extends V2.Core.EventBase {
      type: 'v1.payment_intent.processing';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentIntent>;
    }
    export interface V1PaymentIntentProcessingEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.payment_intent.processing';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentIntent>;
      fetchEvent(): Promise<V1PaymentIntentProcessingEvent>;
    }

    /**
     * Occurs when a PaymentIntent transitions to requires_action state.
     */
    export interface V1PaymentIntentRequiresActionEvent
      extends V2.Core.EventBase {
      type: 'v1.payment_intent.requires_action';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentIntent>;
    }
    export interface V1PaymentIntentRequiresActionEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.payment_intent.requires_action';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentIntent>;
      fetchEvent(): Promise<V1PaymentIntentRequiresActionEvent>;
    }

    /**
     * Occurs when a PaymentIntent has successfully completed payment.
     */
    export interface V1PaymentIntentSucceededEvent extends V2.Core.EventBase {
      type: 'v1.payment_intent.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentIntent>;
    }
    export interface V1PaymentIntentSucceededEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.payment_intent.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentIntent>;
      fetchEvent(): Promise<V1PaymentIntentSucceededEvent>;
    }

    /**
     * Occurs when a payment link is created.
     */
    export interface V1PaymentLinkCreatedEvent extends V2.Core.EventBase {
      type: 'v1.payment_link.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentLink>;
    }
    export interface V1PaymentLinkCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.payment_link.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentLink>;
      fetchEvent(): Promise<V1PaymentLinkCreatedEvent>;
    }

    /**
     * Occurs when a payment link is updated.
     */
    export interface V1PaymentLinkUpdatedEvent extends V2.Core.EventBase {
      type: 'v1.payment_link.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentLink>;
    }
    export interface V1PaymentLinkUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.payment_link.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentLink>;
      fetchEvent(): Promise<V1PaymentLinkUpdatedEvent>;
    }

    /**
     * Occurs whenever a new payment method is attached to a customer.
     */
    export interface V1PaymentMethodAttachedEvent extends V2.Core.EventBase {
      type: 'v1.payment_method.attached';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentMethod>;
    }
    export interface V1PaymentMethodAttachedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.payment_method.attached';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentMethod>;
      fetchEvent(): Promise<V1PaymentMethodAttachedEvent>;
    }

    /**
     * Occurs whenever a payment method's details are automatically updated by the network.
     */
    export interface V1PaymentMethodAutomaticallyUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v1.payment_method.automatically_updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentMethod>;
    }
    export interface V1PaymentMethodAutomaticallyUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.payment_method.automatically_updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentMethod>;
      fetchEvent(): Promise<V1PaymentMethodAutomaticallyUpdatedEvent>;
    }

    /**
     * Occurs whenever a payment method is detached from a customer.
     */
    export interface V1PaymentMethodDetachedEvent extends V2.Core.EventBase {
      type: 'v1.payment_method.detached';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentMethod>;
    }
    export interface V1PaymentMethodDetachedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.payment_method.detached';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentMethod>;
      fetchEvent(): Promise<V1PaymentMethodDetachedEvent>;
    }

    /**
     * Occurs whenever a payment method is updated via the [PaymentMethod update API](https://docs.stripe.com/api/payment_methods/update).
     */
    export interface V1PaymentMethodUpdatedEvent extends V2.Core.EventBase {
      type: 'v1.payment_method.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentMethod>;
    }
    export interface V1PaymentMethodUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.payment_method.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PaymentMethod>;
      fetchEvent(): Promise<V1PaymentMethodUpdatedEvent>;
    }

    /**
     * Occurs whenever a payout is canceled.
     */
    export interface V1PayoutCanceledEvent extends V2.Core.EventBase {
      type: 'v1.payout.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Payout>;
    }
    export interface V1PayoutCanceledEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.payout.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Payout>;
      fetchEvent(): Promise<V1PayoutCanceledEvent>;
    }

    /**
     * Occurs whenever a payout is created.
     */
    export interface V1PayoutCreatedEvent extends V2.Core.EventBase {
      type: 'v1.payout.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Payout>;
    }
    export interface V1PayoutCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.payout.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Payout>;
      fetchEvent(): Promise<V1PayoutCreatedEvent>;
    }

    /**
     * Occurs whenever a payout attempt fails.
     */
    export interface V1PayoutFailedEvent extends V2.Core.EventBase {
      type: 'v1.payout.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Payout>;
    }
    export interface V1PayoutFailedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.payout.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Payout>;
      fetchEvent(): Promise<V1PayoutFailedEvent>;
    }

    /**
     * Occurs whenever a payout is *expected* to be available in the destination account. If the payout fails, a `payout.failed` notification is also sent, at a later time.
     */
    export interface V1PayoutPaidEvent extends V2.Core.EventBase {
      type: 'v1.payout.paid';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Payout>;
    }
    export interface V1PayoutPaidEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.payout.paid';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Payout>;
      fetchEvent(): Promise<V1PayoutPaidEvent>;
    }

    /**
     * Occurs whenever balance transactions paid out in an automatic payout can be queried.
     */
    export interface V1PayoutReconciliationCompletedEvent
      extends V2.Core.EventBase {
      type: 'v1.payout.reconciliation_completed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Payout>;
    }
    export interface V1PayoutReconciliationCompletedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.payout.reconciliation_completed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Payout>;
      fetchEvent(): Promise<V1PayoutReconciliationCompletedEvent>;
    }

    /**
     * Occurs whenever a payout is updated.
     */
    export interface V1PayoutUpdatedEvent extends V2.Core.EventBase {
      type: 'v1.payout.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Payout>;
    }
    export interface V1PayoutUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.payout.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Payout>;
      fetchEvent(): Promise<V1PayoutUpdatedEvent>;
    }

    /**
     * Occurs whenever a person associated with an account is created.
     */
    export interface V1PersonCreatedEvent extends V2.Core.EventBase {
      type: 'v1.person.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Person>;
    }
    export interface V1PersonCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.person.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Person>;
      fetchEvent(): Promise<V1PersonCreatedEvent>;
    }

    /**
     * Occurs whenever a person associated with an account is deleted.
     */
    export interface V1PersonDeletedEvent extends V2.Core.EventBase {
      type: 'v1.person.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Person>;
    }
    export interface V1PersonDeletedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.person.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Person>;
      fetchEvent(): Promise<V1PersonDeletedEvent>;
    }

    /**
     * Occurs whenever a person associated with an account is updated.
     */
    export interface V1PersonUpdatedEvent extends V2.Core.EventBase {
      type: 'v1.person.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Person>;
    }
    export interface V1PersonUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.person.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Person>;
      fetchEvent(): Promise<V1PersonUpdatedEvent>;
    }

    /**
     * Occurs whenever a plan is created.
     */
    export interface V1PlanCreatedEvent extends V2.Core.EventBase {
      type: 'v1.plan.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Plan>;
    }
    export interface V1PlanCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.plan.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Plan>;
      fetchEvent(): Promise<V1PlanCreatedEvent>;
    }

    /**
     * Occurs whenever a plan is deleted.
     */
    export interface V1PlanDeletedEvent extends V2.Core.EventBase {
      type: 'v1.plan.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Plan>;
    }
    export interface V1PlanDeletedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.plan.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Plan>;
      fetchEvent(): Promise<V1PlanDeletedEvent>;
    }

    /**
     * Occurs whenever a plan is updated.
     */
    export interface V1PlanUpdatedEvent extends V2.Core.EventBase {
      type: 'v1.plan.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Plan>;
    }
    export interface V1PlanUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.plan.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Plan>;
      fetchEvent(): Promise<V1PlanUpdatedEvent>;
    }

    /**
     * Occurs whenever a price is created.
     */
    export interface V1PriceCreatedEvent extends V2.Core.EventBase {
      type: 'v1.price.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Price>;
    }
    export interface V1PriceCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.price.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Price>;
      fetchEvent(): Promise<V1PriceCreatedEvent>;
    }

    /**
     * Occurs whenever a price is deleted.
     */
    export interface V1PriceDeletedEvent extends V2.Core.EventBase {
      type: 'v1.price.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Price>;
    }
    export interface V1PriceDeletedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.price.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Price>;
      fetchEvent(): Promise<V1PriceDeletedEvent>;
    }

    /**
     * Occurs whenever a price is updated.
     */
    export interface V1PriceUpdatedEvent extends V2.Core.EventBase {
      type: 'v1.price.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Price>;
    }
    export interface V1PriceUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.price.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Price>;
      fetchEvent(): Promise<V1PriceUpdatedEvent>;
    }

    /**
     * Occurs whenever a product is created.
     */
    export interface V1ProductCreatedEvent extends V2.Core.EventBase {
      type: 'v1.product.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Product>;
    }
    export interface V1ProductCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.product.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Product>;
      fetchEvent(): Promise<V1ProductCreatedEvent>;
    }

    /**
     * Occurs whenever a product is deleted.
     */
    export interface V1ProductDeletedEvent extends V2.Core.EventBase {
      type: 'v1.product.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Product>;
    }
    export interface V1ProductDeletedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.product.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Product>;
      fetchEvent(): Promise<V1ProductDeletedEvent>;
    }

    /**
     * Occurs whenever a product is updated.
     */
    export interface V1ProductUpdatedEvent extends V2.Core.EventBase {
      type: 'v1.product.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Product>;
    }
    export interface V1ProductUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.product.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Product>;
      fetchEvent(): Promise<V1ProductUpdatedEvent>;
    }

    /**
     * Occurs whenever a promotion code is created.
     */
    export interface V1PromotionCodeCreatedEvent extends V2.Core.EventBase {
      type: 'v1.promotion_code.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PromotionCode>;
    }
    export interface V1PromotionCodeCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.promotion_code.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PromotionCode>;
      fetchEvent(): Promise<V1PromotionCodeCreatedEvent>;
    }

    /**
     * Occurs whenever a promotion code is updated.
     */
    export interface V1PromotionCodeUpdatedEvent extends V2.Core.EventBase {
      type: 'v1.promotion_code.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PromotionCode>;
    }
    export interface V1PromotionCodeUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.promotion_code.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<PromotionCode>;
      fetchEvent(): Promise<V1PromotionCodeUpdatedEvent>;
    }

    /**
     * Occurs whenever a quote is accepted.
     */
    export interface V1QuoteAcceptedEvent extends V2.Core.EventBase {
      type: 'v1.quote.accepted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Quote>;
    }
    export interface V1QuoteAcceptedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.quote.accepted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Quote>;
      fetchEvent(): Promise<V1QuoteAcceptedEvent>;
    }

    /**
     * Occurs whenever a quote is canceled.
     */
    export interface V1QuoteCanceledEvent extends V2.Core.EventBase {
      type: 'v1.quote.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Quote>;
    }
    export interface V1QuoteCanceledEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.quote.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Quote>;
      fetchEvent(): Promise<V1QuoteCanceledEvent>;
    }

    /**
     * Occurs whenever a quote is created.
     */
    export interface V1QuoteCreatedEvent extends V2.Core.EventBase {
      type: 'v1.quote.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Quote>;
    }
    export interface V1QuoteCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.quote.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Quote>;
      fetchEvent(): Promise<V1QuoteCreatedEvent>;
    }

    /**
     * Occurs whenever a quote is finalized.
     */
    export interface V1QuoteFinalizedEvent extends V2.Core.EventBase {
      type: 'v1.quote.finalized';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Quote>;
    }
    export interface V1QuoteFinalizedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.quote.finalized';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Quote>;
      fetchEvent(): Promise<V1QuoteFinalizedEvent>;
    }

    /**
     * Occurs whenever an early fraud warning is created.
     */
    export interface V1RadarEarlyFraudWarningCreatedEvent
      extends V2.Core.EventBase {
      type: 'v1.radar.early_fraud_warning.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Radar.EarlyFraudWarning>;
    }
    export interface V1RadarEarlyFraudWarningCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.radar.early_fraud_warning.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Radar.EarlyFraudWarning>;
      fetchEvent(): Promise<V1RadarEarlyFraudWarningCreatedEvent>;
    }

    /**
     * Occurs whenever an early fraud warning is updated.
     */
    export interface V1RadarEarlyFraudWarningUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v1.radar.early_fraud_warning.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Radar.EarlyFraudWarning>;
    }
    export interface V1RadarEarlyFraudWarningUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.radar.early_fraud_warning.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Radar.EarlyFraudWarning>;
      fetchEvent(): Promise<V1RadarEarlyFraudWarningUpdatedEvent>;
    }

    /**
     * Occurs whenever a refund is created.
     */
    export interface V1RefundCreatedEvent extends V2.Core.EventBase {
      type: 'v1.refund.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Refund>;
    }
    export interface V1RefundCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.refund.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Refund>;
      fetchEvent(): Promise<V1RefundCreatedEvent>;
    }

    /**
     * Occurs whenever a refund has failed.
     */
    export interface V1RefundFailedEvent extends V2.Core.EventBase {
      type: 'v1.refund.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Refund>;
    }
    export interface V1RefundFailedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.refund.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Refund>;
      fetchEvent(): Promise<V1RefundFailedEvent>;
    }

    /**
     * Occurs whenever a refund is updated.
     */
    export interface V1RefundUpdatedEvent extends V2.Core.EventBase {
      type: 'v1.refund.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Refund>;
    }
    export interface V1RefundUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.refund.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Refund>;
      fetchEvent(): Promise<V1RefundUpdatedEvent>;
    }

    /**
     * Occurs whenever a review is closed. The review's `reason` field indicates why: `approved`, `disputed`, `refunded`, `refunded_as_fraud`, or `canceled`.
     */
    export interface V1ReviewClosedEvent extends V2.Core.EventBase {
      type: 'v1.review.closed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Review>;
    }
    export interface V1ReviewClosedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.review.closed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Review>;
      fetchEvent(): Promise<V1ReviewClosedEvent>;
    }

    /**
     * Occurs whenever a review is opened.
     */
    export interface V1ReviewOpenedEvent extends V2.Core.EventBase {
      type: 'v1.review.opened';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Review>;
    }
    export interface V1ReviewOpenedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.review.opened';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Review>;
      fetchEvent(): Promise<V1ReviewOpenedEvent>;
    }

    /**
     * Occurs when a SetupIntent is canceled.
     */
    export interface V1SetupIntentCanceledEvent extends V2.Core.EventBase {
      type: 'v1.setup_intent.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SetupIntent>;
    }
    export interface V1SetupIntentCanceledEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.setup_intent.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SetupIntent>;
      fetchEvent(): Promise<V1SetupIntentCanceledEvent>;
    }

    /**
     * Occurs when a new SetupIntent is created.
     */
    export interface V1SetupIntentCreatedEvent extends V2.Core.EventBase {
      type: 'v1.setup_intent.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SetupIntent>;
    }
    export interface V1SetupIntentCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.setup_intent.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SetupIntent>;
      fetchEvent(): Promise<V1SetupIntentCreatedEvent>;
    }

    /**
     * Occurs when a SetupIntent is in requires_action state.
     */
    export interface V1SetupIntentRequiresActionEvent
      extends V2.Core.EventBase {
      type: 'v1.setup_intent.requires_action';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SetupIntent>;
    }
    export interface V1SetupIntentRequiresActionEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.setup_intent.requires_action';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SetupIntent>;
      fetchEvent(): Promise<V1SetupIntentRequiresActionEvent>;
    }

    /**
     * Occurs when a SetupIntent has failed the attempt to setup a payment method.
     */
    export interface V1SetupIntentSetupFailedEvent extends V2.Core.EventBase {
      type: 'v1.setup_intent.setup_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SetupIntent>;
    }
    export interface V1SetupIntentSetupFailedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.setup_intent.setup_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SetupIntent>;
      fetchEvent(): Promise<V1SetupIntentSetupFailedEvent>;
    }

    /**
     * Occurs when an SetupIntent has successfully setup a payment method.
     */
    export interface V1SetupIntentSucceededEvent extends V2.Core.EventBase {
      type: 'v1.setup_intent.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SetupIntent>;
    }
    export interface V1SetupIntentSucceededEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.setup_intent.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SetupIntent>;
      fetchEvent(): Promise<V1SetupIntentSucceededEvent>;
    }

    /**
     * Occurs whenever a Sigma scheduled query run finishes.
     */
    export interface V1SigmaScheduledQueryRunCreatedEvent
      extends V2.Core.EventBase {
      type: 'v1.sigma.scheduled_query_run.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Sigma.ScheduledQueryRun>;
    }
    export interface V1SigmaScheduledQueryRunCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.sigma.scheduled_query_run.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Sigma.ScheduledQueryRun>;
      fetchEvent(): Promise<V1SigmaScheduledQueryRunCreatedEvent>;
    }

    /**
     * Occurs whenever a source is canceled.
     */
    export interface V1SourceCanceledEvent extends V2.Core.EventBase {
      type: 'v1.source.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Source>;
    }
    export interface V1SourceCanceledEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.source.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Source>;
      fetchEvent(): Promise<V1SourceCanceledEvent>;
    }

    /**
     * Occurs whenever a source transitions to chargeable.
     */
    export interface V1SourceChargeableEvent extends V2.Core.EventBase {
      type: 'v1.source.chargeable';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Source>;
    }
    export interface V1SourceChargeableEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.source.chargeable';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Source>;
      fetchEvent(): Promise<V1SourceChargeableEvent>;
    }

    /**
     * Occurs whenever a source fails.
     */
    export interface V1SourceFailedEvent extends V2.Core.EventBase {
      type: 'v1.source.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Source>;
    }
    export interface V1SourceFailedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.source.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Source>;
      fetchEvent(): Promise<V1SourceFailedEvent>;
    }

    /**
     * Occurs whenever the refund attributes are required on a receiver source to process a refund or a mispayment.
     */
    export interface V1SourceRefundAttributesRequiredEvent
      extends V2.Core.EventBase {
      type: 'v1.source.refund_attributes_required';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Source>;
    }
    export interface V1SourceRefundAttributesRequiredEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.source.refund_attributes_required';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Source>;
      fetchEvent(): Promise<V1SourceRefundAttributesRequiredEvent>;
    }

    /**
     * Occurs whenever a subscription schedule is canceled due to the underlying subscription being canceled because of delinquency.
     */
    export interface V1SubscriptionScheduleAbortedEvent
      extends V2.Core.EventBase {
      type: 'v1.subscription_schedule.aborted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SubscriptionSchedule>;
    }
    export interface V1SubscriptionScheduleAbortedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.subscription_schedule.aborted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SubscriptionSchedule>;
      fetchEvent(): Promise<V1SubscriptionScheduleAbortedEvent>;
    }

    /**
     * Occurs whenever a subscription schedule is canceled.
     */
    export interface V1SubscriptionScheduleCanceledEvent
      extends V2.Core.EventBase {
      type: 'v1.subscription_schedule.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SubscriptionSchedule>;
    }
    export interface V1SubscriptionScheduleCanceledEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.subscription_schedule.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SubscriptionSchedule>;
      fetchEvent(): Promise<V1SubscriptionScheduleCanceledEvent>;
    }

    /**
     * Occurs whenever a new subscription schedule is completed.
     */
    export interface V1SubscriptionScheduleCompletedEvent
      extends V2.Core.EventBase {
      type: 'v1.subscription_schedule.completed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SubscriptionSchedule>;
    }
    export interface V1SubscriptionScheduleCompletedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.subscription_schedule.completed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SubscriptionSchedule>;
      fetchEvent(): Promise<V1SubscriptionScheduleCompletedEvent>;
    }

    /**
     * Occurs whenever a new subscription schedule is created.
     */
    export interface V1SubscriptionScheduleCreatedEvent
      extends V2.Core.EventBase {
      type: 'v1.subscription_schedule.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SubscriptionSchedule>;
    }
    export interface V1SubscriptionScheduleCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.subscription_schedule.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SubscriptionSchedule>;
      fetchEvent(): Promise<V1SubscriptionScheduleCreatedEvent>;
    }

    /**
     * Occurs 7 days before a subscription schedule will expire.
     */
    export interface V1SubscriptionScheduleExpiringEvent
      extends V2.Core.EventBase {
      type: 'v1.subscription_schedule.expiring';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SubscriptionSchedule>;
    }
    export interface V1SubscriptionScheduleExpiringEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.subscription_schedule.expiring';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SubscriptionSchedule>;
      fetchEvent(): Promise<V1SubscriptionScheduleExpiringEvent>;
    }

    /**
     * Occurs whenever a new subscription schedule is released.
     */
    export interface V1SubscriptionScheduleReleasedEvent
      extends V2.Core.EventBase {
      type: 'v1.subscription_schedule.released';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SubscriptionSchedule>;
    }
    export interface V1SubscriptionScheduleReleasedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.subscription_schedule.released';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SubscriptionSchedule>;
      fetchEvent(): Promise<V1SubscriptionScheduleReleasedEvent>;
    }

    /**
     * Occurs whenever a subscription schedule is updated.
     */
    export interface V1SubscriptionScheduleUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v1.subscription_schedule.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SubscriptionSchedule>;
    }
    export interface V1SubscriptionScheduleUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.subscription_schedule.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<SubscriptionSchedule>;
      fetchEvent(): Promise<V1SubscriptionScheduleUpdatedEvent>;
    }

    /**
     * Occurs whenever a new tax rate is created.
     */
    export interface V1TaxRateCreatedEvent extends V2.Core.EventBase {
      type: 'v1.tax_rate.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TaxRate>;
    }
    export interface V1TaxRateCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.tax_rate.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TaxRate>;
      fetchEvent(): Promise<V1TaxRateCreatedEvent>;
    }

    /**
     * Occurs whenever a tax rate is updated.
     */
    export interface V1TaxRateUpdatedEvent extends V2.Core.EventBase {
      type: 'v1.tax_rate.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TaxRate>;
    }
    export interface V1TaxRateUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.tax_rate.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TaxRate>;
      fetchEvent(): Promise<V1TaxRateUpdatedEvent>;
    }

    /**
     * Occurs whenever an action sent to a Terminal reader failed.
     */
    export interface V1TerminalReaderActionFailedEvent
      extends V2.Core.EventBase {
      type: 'v1.terminal.reader.action_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Terminal.Reader>;
    }
    export interface V1TerminalReaderActionFailedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.terminal.reader.action_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Terminal.Reader>;
      fetchEvent(): Promise<V1TerminalReaderActionFailedEvent>;
    }

    /**
     * Occurs whenever an action sent to a Terminal reader was successful.
     */
    export interface V1TerminalReaderActionSucceededEvent
      extends V2.Core.EventBase {
      type: 'v1.terminal.reader.action_succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Terminal.Reader>;
    }
    export interface V1TerminalReaderActionSucceededEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.terminal.reader.action_succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Terminal.Reader>;
      fetchEvent(): Promise<V1TerminalReaderActionSucceededEvent>;
    }

    /**
     * Occurs whenever an action sent to a Terminal reader is updated.
     */
    export interface V1TerminalReaderActionUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v1.terminal.reader.action_updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Terminal.Reader>;
    }
    export interface V1TerminalReaderActionUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.terminal.reader.action_updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Terminal.Reader>;
      fetchEvent(): Promise<V1TerminalReaderActionUpdatedEvent>;
    }

    /**
     * Occurs whenever a test clock starts advancing.
     */
    export interface V1TestHelpersTestClockAdvancingEvent
      extends V2.Core.EventBase {
      type: 'v1.test_helpers.test_clock.advancing';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TestHelpers.TestClock>;
    }
    export interface V1TestHelpersTestClockAdvancingEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.test_helpers.test_clock.advancing';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TestHelpers.TestClock>;
      fetchEvent(): Promise<V1TestHelpersTestClockAdvancingEvent>;
    }

    /**
     * Occurs whenever a test clock is created.
     */
    export interface V1TestHelpersTestClockCreatedEvent
      extends V2.Core.EventBase {
      type: 'v1.test_helpers.test_clock.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TestHelpers.TestClock>;
    }
    export interface V1TestHelpersTestClockCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.test_helpers.test_clock.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TestHelpers.TestClock>;
      fetchEvent(): Promise<V1TestHelpersTestClockCreatedEvent>;
    }

    /**
     * Occurs whenever a test clock is deleted.
     */
    export interface V1TestHelpersTestClockDeletedEvent
      extends V2.Core.EventBase {
      type: 'v1.test_helpers.test_clock.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TestHelpers.TestClock>;
    }
    export interface V1TestHelpersTestClockDeletedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.test_helpers.test_clock.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TestHelpers.TestClock>;
      fetchEvent(): Promise<V1TestHelpersTestClockDeletedEvent>;
    }

    /**
     * Occurs whenever a test clock fails to advance its frozen time.
     */
    export interface V1TestHelpersTestClockInternalFailureEvent
      extends V2.Core.EventBase {
      type: 'v1.test_helpers.test_clock.internal_failure';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TestHelpers.TestClock>;
    }
    export interface V1TestHelpersTestClockInternalFailureEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.test_helpers.test_clock.internal_failure';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TestHelpers.TestClock>;
      fetchEvent(): Promise<V1TestHelpersTestClockInternalFailureEvent>;
    }

    /**
     * Occurs whenever a test clock transitions to a ready status.
     */
    export interface V1TestHelpersTestClockReadyEvent
      extends V2.Core.EventBase {
      type: 'v1.test_helpers.test_clock.ready';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TestHelpers.TestClock>;
    }
    export interface V1TestHelpersTestClockReadyEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.test_helpers.test_clock.ready';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<TestHelpers.TestClock>;
      fetchEvent(): Promise<V1TestHelpersTestClockReadyEvent>;
    }

    /**
     * Occurs whenever a top-up is canceled.
     */
    export interface V1TopupCanceledEvent extends V2.Core.EventBase {
      type: 'v1.topup.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Topup>;
    }
    export interface V1TopupCanceledEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.topup.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Topup>;
      fetchEvent(): Promise<V1TopupCanceledEvent>;
    }

    /**
     * Occurs whenever a top-up is created.
     */
    export interface V1TopupCreatedEvent extends V2.Core.EventBase {
      type: 'v1.topup.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Topup>;
    }
    export interface V1TopupCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.topup.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Topup>;
      fetchEvent(): Promise<V1TopupCreatedEvent>;
    }

    /**
     * Occurs whenever a top-up fails.
     */
    export interface V1TopupFailedEvent extends V2.Core.EventBase {
      type: 'v1.topup.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Topup>;
    }
    export interface V1TopupFailedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.topup.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Topup>;
      fetchEvent(): Promise<V1TopupFailedEvent>;
    }

    /**
     * Occurs whenever a top-up is reversed.
     */
    export interface V1TopupReversedEvent extends V2.Core.EventBase {
      type: 'v1.topup.reversed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Topup>;
    }
    export interface V1TopupReversedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.topup.reversed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Topup>;
      fetchEvent(): Promise<V1TopupReversedEvent>;
    }

    /**
     * Occurs whenever a top-up succeeds.
     */
    export interface V1TopupSucceededEvent extends V2.Core.EventBase {
      type: 'v1.topup.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Topup>;
    }
    export interface V1TopupSucceededEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.topup.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Topup>;
      fetchEvent(): Promise<V1TopupSucceededEvent>;
    }

    /**
     * Occurs whenever a transfer is created.
     */
    export interface V1TransferCreatedEvent extends V2.Core.EventBase {
      type: 'v1.transfer.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Transfer>;
    }
    export interface V1TransferCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.transfer.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Transfer>;
      fetchEvent(): Promise<V1TransferCreatedEvent>;
    }

    /**
     * Occurs whenever a transfer is reversed, including partial reversals.
     */
    export interface V1TransferReversedEvent extends V2.Core.EventBase {
      type: 'v1.transfer.reversed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Transfer>;
    }
    export interface V1TransferReversedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.transfer.reversed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Transfer>;
      fetchEvent(): Promise<V1TransferReversedEvent>;
    }

    /**
     * Occurs whenever a transfer's description or metadata is updated.
     */
    export interface V1TransferUpdatedEvent extends V2.Core.EventBase {
      type: 'v1.transfer.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Transfer>;
    }
    export interface V1TransferUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v1.transfer.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Transfer>;
      fetchEvent(): Promise<V1TransferUpdatedEvent>;
    }

    /**
     * Occurs when a billing Cadence generates an invoice.
     */
    export interface V2BillingCadenceBilledEvent extends V2.Core.EventBase {
      type: 'v2.billing.cadence.billed';
      // Retrieves data specific to this event.
      data: V2BillingCadenceBilledEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.Cadence>;
    }
    export interface V2BillingCadenceBilledEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.cadence.billed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.Cadence>;
      fetchEvent(): Promise<V2BillingCadenceBilledEvent>;
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
    export interface V2BillingCadenceCanceledEvent extends V2.Core.EventBase {
      type: 'v2.billing.cadence.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.Cadence>;
    }
    export interface V2BillingCadenceCanceledEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.cadence.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.Cadence>;
      fetchEvent(): Promise<V2BillingCadenceCanceledEvent>;
    }

    /**
     * Occurs when a billing Cadence is created.
     */
    export interface V2BillingCadenceCreatedEvent extends V2.Core.EventBase {
      type: 'v2.billing.cadence.created';
      // Retrieves data specific to this event.
      data: V2BillingCadenceCreatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.Cadence>;
    }
    export interface V2BillingCadenceCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.cadence.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.Cadence>;
      fetchEvent(): Promise<V2BillingCadenceCreatedEvent>;
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
    export interface V2BillingLicenseFeeCreatedEvent extends V2.Core.EventBase {
      type: 'v2.billing.license_fee.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.LicenseFee>;
    }
    export interface V2BillingLicenseFeeCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.license_fee.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.LicenseFee>;
      fetchEvent(): Promise<V2BillingLicenseFeeCreatedEvent>;
    }

    /**
     * Occurs when a LicenseFee is updated.
     */
    export interface V2BillingLicenseFeeUpdatedEvent extends V2.Core.EventBase {
      type: 'v2.billing.license_fee.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.LicenseFee>;
    }
    export interface V2BillingLicenseFeeUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.license_fee.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.LicenseFee>;
      fetchEvent(): Promise<V2BillingLicenseFeeUpdatedEvent>;
    }

    /**
     * Occurs when a LicenseFeeVersion is created.
     */
    export interface V2BillingLicenseFeeVersionCreatedEvent
      extends V2.Core.EventBase {
      type: 'v2.billing.license_fee_version.created';
      // Retrieves data specific to this event.
      data: V2BillingLicenseFeeVersionCreatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.LicenseFeeVersion>;
    }
    export interface V2BillingLicenseFeeVersionCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.license_fee_version.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.LicenseFeeVersion>;
      fetchEvent(): Promise<V2BillingLicenseFeeVersionCreatedEvent>;
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
    export interface V2BillingLicensedItemCreatedEvent
      extends V2.Core.EventBase {
      type: 'v2.billing.licensed_item.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.LicensedItem>;
    }
    export interface V2BillingLicensedItemCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.licensed_item.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.LicensedItem>;
      fetchEvent(): Promise<V2BillingLicensedItemCreatedEvent>;
    }

    /**
     * Occurs when a LicensedItem is updated.
     */
    export interface V2BillingLicensedItemUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v2.billing.licensed_item.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.LicensedItem>;
    }
    export interface V2BillingLicensedItemUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.licensed_item.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.LicensedItem>;
      fetchEvent(): Promise<V2BillingLicensedItemUpdatedEvent>;
    }

    /**
     * Occurs when a MeteredItem is created.
     */
    export interface V2BillingMeteredItemCreatedEvent
      extends V2.Core.EventBase {
      type: 'v2.billing.metered_item.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.MeteredItem>;
    }
    export interface V2BillingMeteredItemCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.metered_item.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.MeteredItem>;
      fetchEvent(): Promise<V2BillingMeteredItemCreatedEvent>;
    }

    /**
     * Occurs when a MeteredItem is updated.
     */
    export interface V2BillingMeteredItemUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v2.billing.metered_item.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.MeteredItem>;
    }
    export interface V2BillingMeteredItemUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.metered_item.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.MeteredItem>;
      fetchEvent(): Promise<V2BillingMeteredItemUpdatedEvent>;
    }

    /**
     * Occurs when a PricingPlan is created.
     */
    export interface V2BillingPricingPlanCreatedEvent
      extends V2.Core.EventBase {
      type: 'v2.billing.pricing_plan.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlan>;
    }
    export interface V2BillingPricingPlanCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.pricing_plan.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlan>;
      fetchEvent(): Promise<V2BillingPricingPlanCreatedEvent>;
    }

    /**
     * Occurs when a PricingPlan is updated.
     */
    export interface V2BillingPricingPlanUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v2.billing.pricing_plan.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlan>;
    }
    export interface V2BillingPricingPlanUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.pricing_plan.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlan>;
      fetchEvent(): Promise<V2BillingPricingPlanUpdatedEvent>;
    }

    /**
     * Occurs when a PricingPlanComponent is created.
     */
    export interface V2BillingPricingPlanComponentCreatedEvent
      extends V2.Core.EventBase {
      type: 'v2.billing.pricing_plan_component.created';
      // Retrieves data specific to this event.
      data: V2BillingPricingPlanComponentCreatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanComponent>;
    }
    export interface V2BillingPricingPlanComponentCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.pricing_plan_component.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanComponent>;
      fetchEvent(): Promise<V2BillingPricingPlanComponentCreatedEvent>;
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
      extends V2.Core.EventBase {
      type: 'v2.billing.pricing_plan_component.updated';
      // Retrieves data specific to this event.
      data: V2BillingPricingPlanComponentUpdatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanComponent>;
    }
    export interface V2BillingPricingPlanComponentUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.pricing_plan_component.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanComponent>;
      fetchEvent(): Promise<V2BillingPricingPlanComponentUpdatedEvent>;
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
      extends V2.Core.EventBase {
      type: 'v2.billing.pricing_plan_subscription.collection_awaiting_customer_action';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanSubscription>;
    }
    export interface V2BillingPricingPlanSubscriptionCollectionAwaitingCustomerActionEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.pricing_plan_subscription.collection_awaiting_customer_action';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanSubscription>;
      fetchEvent(): Promise<
        V2BillingPricingPlanSubscriptionCollectionAwaitingCustomerActionEvent
      >;
    }

    /**
     * Occurs when a PricingPlanSubscription's collection is current.
     */
    export interface V2BillingPricingPlanSubscriptionCollectionCurrentEvent
      extends V2.Core.EventBase {
      type: 'v2.billing.pricing_plan_subscription.collection_current';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanSubscription>;
    }
    export interface V2BillingPricingPlanSubscriptionCollectionCurrentEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.pricing_plan_subscription.collection_current';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanSubscription>;
      fetchEvent(): Promise<
        V2BillingPricingPlanSubscriptionCollectionCurrentEvent
      >;
    }

    /**
     * Occurs when a PricingPlanSubscription's collection is past due.
     */
    export interface V2BillingPricingPlanSubscriptionCollectionPastDueEvent
      extends V2.Core.EventBase {
      type: 'v2.billing.pricing_plan_subscription.collection_past_due';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanSubscription>;
    }
    export interface V2BillingPricingPlanSubscriptionCollectionPastDueEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.pricing_plan_subscription.collection_past_due';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanSubscription>;
      fetchEvent(): Promise<
        V2BillingPricingPlanSubscriptionCollectionPastDueEvent
      >;
    }

    /**
     * Occurs when a PricingPlanSubscription's collection is paused.
     */
    export interface V2BillingPricingPlanSubscriptionCollectionPausedEvent
      extends V2.Core.EventBase {
      type: 'v2.billing.pricing_plan_subscription.collection_paused';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanSubscription>;
    }
    export interface V2BillingPricingPlanSubscriptionCollectionPausedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.pricing_plan_subscription.collection_paused';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanSubscription>;
      fetchEvent(): Promise<
        V2BillingPricingPlanSubscriptionCollectionPausedEvent
      >;
    }

    /**
     * Occurs when a PricingPlanSubscription's collection is unpaid.
     */
    export interface V2BillingPricingPlanSubscriptionCollectionUnpaidEvent
      extends V2.Core.EventBase {
      type: 'v2.billing.pricing_plan_subscription.collection_unpaid';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanSubscription>;
    }
    export interface V2BillingPricingPlanSubscriptionCollectionUnpaidEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.pricing_plan_subscription.collection_unpaid';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanSubscription>;
      fetchEvent(): Promise<
        V2BillingPricingPlanSubscriptionCollectionUnpaidEvent
      >;
    }

    /**
     * Occurs when PricingPlanSubscription servicing is activated.
     */
    export interface V2BillingPricingPlanSubscriptionServicingActivatedEvent
      extends V2.Core.EventBase {
      type: 'v2.billing.pricing_plan_subscription.servicing_activated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanSubscription>;
    }
    export interface V2BillingPricingPlanSubscriptionServicingActivatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.pricing_plan_subscription.servicing_activated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanSubscription>;
      fetchEvent(): Promise<
        V2BillingPricingPlanSubscriptionServicingActivatedEvent
      >;
    }

    /**
     * Occurs when PricingPlanSubscription servicing is canceled.
     */
    export interface V2BillingPricingPlanSubscriptionServicingCanceledEvent
      extends V2.Core.EventBase {
      type: 'v2.billing.pricing_plan_subscription.servicing_canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanSubscription>;
    }
    export interface V2BillingPricingPlanSubscriptionServicingCanceledEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.pricing_plan_subscription.servicing_canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanSubscription>;
      fetchEvent(): Promise<
        V2BillingPricingPlanSubscriptionServicingCanceledEvent
      >;
    }

    /**
     * Occurs when PricingPlanSubscription servicing is paused.
     */
    export interface V2BillingPricingPlanSubscriptionServicingPausedEvent
      extends V2.Core.EventBase {
      type: 'v2.billing.pricing_plan_subscription.servicing_paused';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanSubscription>;
    }
    export interface V2BillingPricingPlanSubscriptionServicingPausedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.pricing_plan_subscription.servicing_paused';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanSubscription>;
      fetchEvent(): Promise<
        V2BillingPricingPlanSubscriptionServicingPausedEvent
      >;
    }

    /**
     * Occurs when a PricingPlanVersion is created.
     */
    export interface V2BillingPricingPlanVersionCreatedEvent
      extends V2.Core.EventBase {
      type: 'v2.billing.pricing_plan_version.created';
      // Retrieves data specific to this event.
      data: V2BillingPricingPlanVersionCreatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanVersion>;
    }
    export interface V2BillingPricingPlanVersionCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.pricing_plan_version.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.PricingPlanVersion>;
      fetchEvent(): Promise<V2BillingPricingPlanVersionCreatedEvent>;
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
    export interface V2BillingRateCardCreatedEvent extends V2.Core.EventBase {
      type: 'v2.billing.rate_card.created';
      // Retrieves data specific to this event.
      data: V2BillingRateCardCreatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCard>;
    }
    export interface V2BillingRateCardCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.rate_card.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCard>;
      fetchEvent(): Promise<V2BillingRateCardCreatedEvent>;
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
    export interface V2BillingRateCardUpdatedEvent extends V2.Core.EventBase {
      type: 'v2.billing.rate_card.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCard>;
    }
    export interface V2BillingRateCardUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.rate_card.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCard>;
      fetchEvent(): Promise<V2BillingRateCardUpdatedEvent>;
    }

    /**
     * Occurs when a RateCardRate is created.
     */
    export interface V2BillingRateCardRateCreatedEvent
      extends V2.Core.EventBase {
      type: 'v2.billing.rate_card_rate.created';
      // Retrieves data specific to this event.
      data: V2BillingRateCardRateCreatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardRate>;
    }
    export interface V2BillingRateCardRateCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.rate_card_rate.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardRate>;
      fetchEvent(): Promise<V2BillingRateCardRateCreatedEvent>;
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
      extends V2.Core.EventBase {
      type: 'v2.billing.rate_card_subscription.activated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
    }
    export interface V2BillingRateCardSubscriptionActivatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.rate_card_subscription.activated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
      fetchEvent(): Promise<V2BillingRateCardSubscriptionActivatedEvent>;
    }

    /**
     * Occurs when a RateCardSubscription is canceled.
     */
    export interface V2BillingRateCardSubscriptionCanceledEvent
      extends V2.Core.EventBase {
      type: 'v2.billing.rate_card_subscription.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
    }
    export interface V2BillingRateCardSubscriptionCanceledEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.rate_card_subscription.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
      fetchEvent(): Promise<V2BillingRateCardSubscriptionCanceledEvent>;
    }

    /**
     * Occurs when a RateCardSubscription's collection is awaiting customer action.
     */
    export interface V2BillingRateCardSubscriptionCollectionAwaitingCustomerActionEvent
      extends V2.Core.EventBase {
      type: 'v2.billing.rate_card_subscription.collection_awaiting_customer_action';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
    }
    export interface V2BillingRateCardSubscriptionCollectionAwaitingCustomerActionEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.rate_card_subscription.collection_awaiting_customer_action';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
      fetchEvent(): Promise<
        V2BillingRateCardSubscriptionCollectionAwaitingCustomerActionEvent
      >;
    }

    /**
     * Occurs when a RateCardSubscription's collection is current.
     */
    export interface V2BillingRateCardSubscriptionCollectionCurrentEvent
      extends V2.Core.EventBase {
      type: 'v2.billing.rate_card_subscription.collection_current';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
    }
    export interface V2BillingRateCardSubscriptionCollectionCurrentEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.rate_card_subscription.collection_current';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
      fetchEvent(): Promise<
        V2BillingRateCardSubscriptionCollectionCurrentEvent
      >;
    }

    /**
     * Occurs when a RateCardSubscription's collection is past due.
     */
    export interface V2BillingRateCardSubscriptionCollectionPastDueEvent
      extends V2.Core.EventBase {
      type: 'v2.billing.rate_card_subscription.collection_past_due';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
    }
    export interface V2BillingRateCardSubscriptionCollectionPastDueEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.rate_card_subscription.collection_past_due';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
      fetchEvent(): Promise<
        V2BillingRateCardSubscriptionCollectionPastDueEvent
      >;
    }

    /**
     * Occurs when a RateCardSubscription's collection is paused.
     */
    export interface V2BillingRateCardSubscriptionCollectionPausedEvent
      extends V2.Core.EventBase {
      type: 'v2.billing.rate_card_subscription.collection_paused';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
    }
    export interface V2BillingRateCardSubscriptionCollectionPausedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.rate_card_subscription.collection_paused';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
      fetchEvent(): Promise<V2BillingRateCardSubscriptionCollectionPausedEvent>;
    }

    /**
     * Occurs when a RateCardSubscription's collection is unpaid.
     */
    export interface V2BillingRateCardSubscriptionCollectionUnpaidEvent
      extends V2.Core.EventBase {
      type: 'v2.billing.rate_card_subscription.collection_unpaid';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
    }
    export interface V2BillingRateCardSubscriptionCollectionUnpaidEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.rate_card_subscription.collection_unpaid';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
      fetchEvent(): Promise<V2BillingRateCardSubscriptionCollectionUnpaidEvent>;
    }

    /**
     * Occurs when RateCardSubscription servicing is activated.
     */
    export interface V2BillingRateCardSubscriptionServicingActivatedEvent
      extends V2.Core.EventBase {
      type: 'v2.billing.rate_card_subscription.servicing_activated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
    }
    export interface V2BillingRateCardSubscriptionServicingActivatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.rate_card_subscription.servicing_activated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
      fetchEvent(): Promise<
        V2BillingRateCardSubscriptionServicingActivatedEvent
      >;
    }

    /**
     * Occurs when RateCardSubscription servicing is canceled.
     */
    export interface V2BillingRateCardSubscriptionServicingCanceledEvent
      extends V2.Core.EventBase {
      type: 'v2.billing.rate_card_subscription.servicing_canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
    }
    export interface V2BillingRateCardSubscriptionServicingCanceledEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.rate_card_subscription.servicing_canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
      fetchEvent(): Promise<
        V2BillingRateCardSubscriptionServicingCanceledEvent
      >;
    }

    /**
     * Occurs when RateCardSubscription servicing is paused.
     */
    export interface V2BillingRateCardSubscriptionServicingPausedEvent
      extends V2.Core.EventBase {
      type: 'v2.billing.rate_card_subscription.servicing_paused';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
    }
    export interface V2BillingRateCardSubscriptionServicingPausedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.rate_card_subscription.servicing_paused';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardSubscription>;
      fetchEvent(): Promise<V2BillingRateCardSubscriptionServicingPausedEvent>;
    }

    /**
     * Occurs when a RateCardVersion is created.
     */
    export interface V2BillingRateCardVersionCreatedEvent
      extends V2.Core.EventBase {
      type: 'v2.billing.rate_card_version.created';
      // Retrieves data specific to this event.
      data: V2BillingRateCardVersionCreatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardVersion>;
    }
    export interface V2BillingRateCardVersionCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.billing.rate_card_version.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Billing.RateCardVersion>;
      fetchEvent(): Promise<V2BillingRateCardVersionCreatedEvent>;
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
    export interface V2CoreAccountClosedEvent extends V2.Core.EventBase {
      type: 'v2.core.account.closed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }
    export interface V2CoreAccountClosedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.account.closed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
      fetchEvent(): Promise<V2CoreAccountClosedEvent>;
    }

    /**
     * Occurs when an Account is created.
     */
    export interface V2CoreAccountCreatedEvent extends V2.Core.EventBase {
      type: 'v2.core.account.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }
    export interface V2CoreAccountCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.account.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
      fetchEvent(): Promise<V2CoreAccountCreatedEvent>;
    }

    /**
     * Occurs when an Account is updated.
     */
    export interface V2CoreAccountUpdatedEvent extends V2.Core.EventBase {
      type: 'v2.core.account.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }
    export interface V2CoreAccountUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.account.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
      fetchEvent(): Promise<V2CoreAccountUpdatedEvent>;
    }

    /**
     * Occurs when the status of an Account's card creator configuration capability is updated.
     */
    export interface V2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v2.core.account[configuration.card_creator].capability_status_updated';
      // Retrieves data specific to this event.
      data: V2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }
    export interface V2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.account[configuration.card_creator].capability_status_updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
      fetchEvent(): Promise<
        V2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEvent
      >;
    }

    namespace V2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEvent {
      export interface Data {
        /**
         * Open Enum. The capability which had its status updated.
         */
        updated_capability: Data.UpdatedCapability;
      }

      namespace Data {
        export type UpdatedCapability =
          | 'commercial.celtic.charge_card'
          | 'commercial.celtic.spend_card'
          | 'commercial.cross_river_bank.charge_card'
          | 'commercial.cross_river_bank.spend_card'
          | 'commercial.stripe.charge_card'
          | 'commercial.stripe.prepaid_card';
      }
    }

    /**
     * Occurs when a Card Creator's configuration is updated.
     */
    export interface V2CoreAccountIncludingConfigurationCardCreatorUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v2.core.account[configuration.card_creator].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }
    export interface V2CoreAccountIncludingConfigurationCardCreatorUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.account[configuration.card_creator].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
      fetchEvent(): Promise<
        V2CoreAccountIncludingConfigurationCardCreatorUpdatedEvent
      >;
    }

    /**
     * Occurs when the status of an Account's customer configuration capability is updated.
     */
    export interface V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v2.core.account[configuration.customer].capability_status_updated';
      // Retrieves data specific to this event.
      data: V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }
    export interface V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.account[configuration.customer].capability_status_updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
      fetchEvent(): Promise<
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
      extends V2.Core.EventBase {
      type: 'v2.core.account[configuration.customer].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }
    export interface V2CoreAccountIncludingConfigurationCustomerUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.account[configuration.customer].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
      fetchEvent(): Promise<
        V2CoreAccountIncludingConfigurationCustomerUpdatedEvent
      >;
    }

    /**
     * Occurs when the status of an Account's merchant configuration capability is updated.
     */
    export interface V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v2.core.account[configuration.merchant].capability_status_updated';
      // Retrieves data specific to this event.
      data: V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }
    export interface V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.account[configuration.merchant].capability_status_updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
      fetchEvent(): Promise<
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
      extends V2.Core.EventBase {
      type: 'v2.core.account[configuration.merchant].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }
    export interface V2CoreAccountIncludingConfigurationMerchantUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.account[configuration.merchant].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
      fetchEvent(): Promise<
        V2CoreAccountIncludingConfigurationMerchantUpdatedEvent
      >;
    }

    /**
     * Occurs when the status of an Account's recipient configuration capability is updated.
     */
    export interface V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v2.core.account[configuration.recipient].capability_status_updated';
      // Retrieves data specific to this event.
      data: V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }
    export interface V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.account[configuration.recipient].capability_status_updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
      fetchEvent(): Promise<
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
      extends V2.Core.EventBase {
      type: 'v2.core.account[configuration.recipient].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }
    export interface V2CoreAccountIncludingConfigurationRecipientUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.account[configuration.recipient].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
      fetchEvent(): Promise<
        V2CoreAccountIncludingConfigurationRecipientUpdatedEvent
      >;
    }

    /**
     * Occurs when the status of an Account's storer configuration capability is updated.
     */
    export interface V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v2.core.account[configuration.storer].capability_status_updated';
      // Retrieves data specific to this event.
      data: V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }
    export interface V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.account[configuration.storer].capability_status_updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
      fetchEvent(): Promise<
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
      extends V2.Core.EventBase {
      type: 'v2.core.account[configuration.storer].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }
    export interface V2CoreAccountIncludingConfigurationStorerUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.account[configuration.storer].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
      fetchEvent(): Promise<
        V2CoreAccountIncludingConfigurationStorerUpdatedEvent
      >;
    }

    /**
     * This event occurs when account defaults are created or updated.
     */
    export interface V2CoreAccountIncludingDefaultsUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v2.core.account[defaults].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }
    export interface V2CoreAccountIncludingDefaultsUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.account[defaults].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
      fetchEvent(): Promise<V2CoreAccountIncludingDefaultsUpdatedEvent>;
    }

    /**
     * Occurs when an Identity is updated.
     */
    export interface V2CoreAccountIncludingIdentityUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v2.core.account[identity].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }
    export interface V2CoreAccountIncludingIdentityUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.account[identity].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
      fetchEvent(): Promise<V2CoreAccountIncludingIdentityUpdatedEvent>;
    }

    /**
     * Occurs when an Account's requirements are updated.
     */
    export interface V2CoreAccountIncludingRequirementsUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v2.core.account[requirements].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }
    export interface V2CoreAccountIncludingRequirementsUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.account[requirements].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
      fetchEvent(): Promise<V2CoreAccountIncludingRequirementsUpdatedEvent>;
    }

    /**
     * Occurs when the generated AccountLink is completed.
     */
    export interface V2CoreAccountLinkReturnedEvent extends V2.Core.EventBase {
      type: 'v2.core.account_link.returned';
      // Retrieves data specific to this event.
      data: V2CoreAccountLinkReturnedEvent.Data;
    }
    export interface V2CoreAccountLinkReturnedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.account_link.returned';
      fetchEvent(): Promise<V2CoreAccountLinkReturnedEvent>;
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
    export interface V2CoreAccountPersonCreatedEvent extends V2.Core.EventBase {
      type: 'v2.core.account_person.created';
      // Retrieves data specific to this event.
      data: V2CoreAccountPersonCreatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.AccountPerson>;
    }
    export interface V2CoreAccountPersonCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.account_person.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.AccountPerson>;
      fetchEvent(): Promise<V2CoreAccountPersonCreatedEvent>;
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
    export interface V2CoreAccountPersonDeletedEvent extends V2.Core.EventBase {
      type: 'v2.core.account_person.deleted';
      // Retrieves data specific to this event.
      data: V2CoreAccountPersonDeletedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.AccountPerson>;
    }
    export interface V2CoreAccountPersonDeletedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.account_person.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.AccountPerson>;
      fetchEvent(): Promise<V2CoreAccountPersonDeletedEvent>;
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
    export interface V2CoreAccountPersonUpdatedEvent extends V2.Core.EventBase {
      type: 'v2.core.account_person.updated';
      // Retrieves data specific to this event.
      data: V2CoreAccountPersonUpdatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.AccountPerson>;
    }
    export interface V2CoreAccountPersonUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.account_person.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.AccountPerson>;
      fetchEvent(): Promise<V2CoreAccountPersonUpdatedEvent>;
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
    export interface V2CoreClaimableSandboxClaimedEvent
      extends V2.Core.EventBase {
      type: 'v2.core.claimable_sandbox.claimed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.ClaimableSandbox>;
    }
    export interface V2CoreClaimableSandboxClaimedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.claimable_sandbox.claimed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.ClaimableSandbox>;
      fetchEvent(): Promise<V2CoreClaimableSandboxClaimedEvent>;
    }

    /**
     * Occurs when a claimable sandbox is created.
     */
    export interface V2CoreClaimableSandboxCreatedEvent
      extends V2.Core.EventBase {
      type: 'v2.core.claimable_sandbox.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.ClaimableSandbox>;
    }
    export interface V2CoreClaimableSandboxCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.claimable_sandbox.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.ClaimableSandbox>;
      fetchEvent(): Promise<V2CoreClaimableSandboxCreatedEvent>;
    }

    /**
     * Occurs when a claimable sandbox expires.
     */
    export interface V2CoreClaimableSandboxExpiredEvent
      extends V2.Core.EventBase {
      type: 'v2.core.claimable_sandbox.expired';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.ClaimableSandbox>;
    }
    export interface V2CoreClaimableSandboxExpiredEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.claimable_sandbox.expired';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.ClaimableSandbox>;
      fetchEvent(): Promise<V2CoreClaimableSandboxExpiredEvent>;
    }

    /**
     * Occurs when a claimable sandbox is expiring in 7 days.
     */
    export interface V2CoreClaimableSandboxExpiringEvent
      extends V2.Core.EventBase {
      type: 'v2.core.claimable_sandbox.expiring';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.ClaimableSandbox>;
    }
    export interface V2CoreClaimableSandboxExpiringEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.claimable_sandbox.expiring';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.ClaimableSandbox>;
      fetchEvent(): Promise<V2CoreClaimableSandboxExpiringEvent>;
    }

    /**
     * Occurs when a claimable sandbox is activated by the user with the intention to go live and your Stripe app is installed on the live account.
     */
    export interface V2CoreClaimableSandboxSandboxDetailsOwnerAccountUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v2.core.claimable_sandbox.sandbox_details_owner_account_updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.ClaimableSandbox>;
    }
    export interface V2CoreClaimableSandboxSandboxDetailsOwnerAccountUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.claimable_sandbox.sandbox_details_owner_account_updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.ClaimableSandbox>;
      fetchEvent(): Promise<
        V2CoreClaimableSandboxSandboxDetailsOwnerAccountUpdatedEvent
      >;
    }

    /**
     * A ping event used to test the connection to an EventDestination.
     */
    export interface V2CoreEventDestinationPingEvent extends V2.Core.EventBase {
      type: 'v2.core.event_destination.ping';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.EventDestination>;
    }
    export interface V2CoreEventDestinationPingEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.event_destination.ping';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.EventDestination>;
      fetchEvent(): Promise<V2CoreEventDestinationPingEvent>;
    }

    /**
     * Occurs when an API error alert is firing.
     */
    export interface V2CoreHealthApiErrorFiringEvent extends V2.Core.EventBase {
      type: 'v2.core.health.api_error.firing';
      // Retrieves data specific to this event.
      data: V2CoreHealthApiErrorFiringEvent.Data;
    }
    export interface V2CoreHealthApiErrorFiringEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.health.api_error.firing';
      fetchEvent(): Promise<V2CoreHealthApiErrorFiringEvent>;
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
    export interface V2CoreHealthApiErrorResolvedEvent
      extends V2.Core.EventBase {
      type: 'v2.core.health.api_error.resolved';
      // Retrieves data specific to this event.
      data: V2CoreHealthApiErrorResolvedEvent.Data;
    }
    export interface V2CoreHealthApiErrorResolvedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.health.api_error.resolved';
      fetchEvent(): Promise<V2CoreHealthApiErrorResolvedEvent>;
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
    export interface V2CoreHealthApiLatencyFiringEvent
      extends V2.Core.EventBase {
      type: 'v2.core.health.api_latency.firing';
      // Retrieves data specific to this event.
      data: V2CoreHealthApiLatencyFiringEvent.Data;
    }
    export interface V2CoreHealthApiLatencyFiringEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.health.api_latency.firing';
      fetchEvent(): Promise<V2CoreHealthApiLatencyFiringEvent>;
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
    export interface V2CoreHealthApiLatencyResolvedEvent
      extends V2.Core.EventBase {
      type: 'v2.core.health.api_latency.resolved';
      // Retrieves data specific to this event.
      data: V2CoreHealthApiLatencyResolvedEvent.Data;
    }
    export interface V2CoreHealthApiLatencyResolvedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.health.api_latency.resolved';
      fetchEvent(): Promise<V2CoreHealthApiLatencyResolvedEvent>;
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
      extends V2.Core.EventBase {
      type: 'v2.core.health.authorization_rate_drop.firing';
      // Retrieves data specific to this event.
      data: V2CoreHealthAuthorizationRateDropFiringEvent.Data;
    }
    export interface V2CoreHealthAuthorizationRateDropFiringEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.health.authorization_rate_drop.firing';
      fetchEvent(): Promise<V2CoreHealthAuthorizationRateDropFiringEvent>;
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
            | 'billie'
            | 'blik'
            | 'boleto'
            | 'card'
            | 'card_present'
            | 'cartes_bancaires'
            | 'cashapp'
            | 'crypto'
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
            | 'kriya'
            | 'kr_card'
            | 'link'
            | 'mb_way'
            | 'mobilepay'
            | 'mondu'
            | 'multibanco'
            | 'naver_pay'
            | 'ng_bank'
            | 'ng_bank_transfer'
            | 'ng_card'
            | 'ng_market'
            | 'ng_ussd'
            | 'ng_wallet'
            | 'oxxo'
            | 'p24'
            | 'paper_check'
            | 'payco'
            | 'paynow'
            | 'paypal'
            | 'paypay'
            | 'payto'
            | 'pay_by_bank'
            | 'pix'
            | 'promptpay'
            | 'rechnung'
            | 'revolut_pay'
            | 'samsung_pay'
            | 'satispay'
            | 'scalapay'
            | 'sepa_debit'
            | 'sequra'
            | 'sofort'
            | 'sunbit'
            | 'swish'
            | 'twint'
            | 'upi'
            | 'us_bank_account'
            | 'vipps'
            | 'wechat_pay'
            | 'zip';
        }
      }
    }

    /**
     * Occurs when an authorization rate drop alert is resolved.
     */
    export interface V2CoreHealthAuthorizationRateDropResolvedEvent
      extends V2.Core.EventBase {
      type: 'v2.core.health.authorization_rate_drop.resolved';
      // Retrieves data specific to this event.
      data: V2CoreHealthAuthorizationRateDropResolvedEvent.Data;
    }
    export interface V2CoreHealthAuthorizationRateDropResolvedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.health.authorization_rate_drop.resolved';
      fetchEvent(): Promise<V2CoreHealthAuthorizationRateDropResolvedEvent>;
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
            | 'billie'
            | 'blik'
            | 'boleto'
            | 'card'
            | 'card_present'
            | 'cartes_bancaires'
            | 'cashapp'
            | 'crypto'
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
            | 'kriya'
            | 'kr_card'
            | 'link'
            | 'mb_way'
            | 'mobilepay'
            | 'mondu'
            | 'multibanco'
            | 'naver_pay'
            | 'ng_bank'
            | 'ng_bank_transfer'
            | 'ng_card'
            | 'ng_market'
            | 'ng_ussd'
            | 'ng_wallet'
            | 'oxxo'
            | 'p24'
            | 'paper_check'
            | 'payco'
            | 'paynow'
            | 'paypal'
            | 'paypay'
            | 'payto'
            | 'pay_by_bank'
            | 'pix'
            | 'promptpay'
            | 'rechnung'
            | 'revolut_pay'
            | 'samsung_pay'
            | 'satispay'
            | 'scalapay'
            | 'sepa_debit'
            | 'sequra'
            | 'sofort'
            | 'sunbit'
            | 'swish'
            | 'twint'
            | 'upi'
            | 'us_bank_account'
            | 'vipps'
            | 'wechat_pay'
            | 'zip';
        }
      }
    }

    /**
     * Occurs when an event generation failure alert is resolved.
     */
    export interface V2CoreHealthEventGenerationFailureResolvedEvent
      extends V2.Core.EventBase {
      type: 'v2.core.health.event_generation_failure.resolved';
      // Retrieves data specific to this event.
      data: V2CoreHealthEventGenerationFailureResolvedEvent.Data;
    }
    export interface V2CoreHealthEventGenerationFailureResolvedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.health.event_generation_failure.resolved';
      fetchEvent(): Promise<V2CoreHealthEventGenerationFailureResolvedEvent>;
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
    export interface V2CoreHealthFraudRateIncreasedEvent
      extends V2.Core.EventBase {
      type: 'v2.core.health.fraud_rate.increased';
      // Retrieves data specific to this event.
      data: V2CoreHealthFraudRateIncreasedEvent.Data;
    }
    export interface V2CoreHealthFraudRateIncreasedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.health.fraud_rate.increased';
      fetchEvent(): Promise<V2CoreHealthFraudRateIncreasedEvent>;
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
      extends V2.Core.EventBase {
      type: 'v2.core.health.issuing_authorization_request_errors.firing';
      // Retrieves data specific to this event.
      data: V2CoreHealthIssuingAuthorizationRequestErrorsFiringEvent.Data;
    }
    export interface V2CoreHealthIssuingAuthorizationRequestErrorsFiringEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.health.issuing_authorization_request_errors.firing';
      fetchEvent(): Promise<
        V2CoreHealthIssuingAuthorizationRequestErrorsFiringEvent
      >;
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
      extends V2.Core.EventBase {
      type: 'v2.core.health.issuing_authorization_request_errors.resolved';
      // Retrieves data specific to this event.
      data: V2CoreHealthIssuingAuthorizationRequestErrorsResolvedEvent.Data;
    }
    export interface V2CoreHealthIssuingAuthorizationRequestErrorsResolvedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.health.issuing_authorization_request_errors.resolved';
      fetchEvent(): Promise<
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
      extends V2.Core.EventBase {
      type: 'v2.core.health.issuing_authorization_request_timeout.firing';
      // Retrieves data specific to this event.
      data: V2CoreHealthIssuingAuthorizationRequestTimeoutFiringEvent.Data;
    }
    export interface V2CoreHealthIssuingAuthorizationRequestTimeoutFiringEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.health.issuing_authorization_request_timeout.firing';
      fetchEvent(): Promise<
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
      extends V2.Core.EventBase {
      type: 'v2.core.health.issuing_authorization_request_timeout.resolved';
      // Retrieves data specific to this event.
      data: V2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEvent.Data;
    }
    export interface V2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.health.issuing_authorization_request_timeout.resolved';
      fetchEvent(): Promise<
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
      extends V2.Core.EventBase {
      type: 'v2.core.health.payment_method_error.firing';
      // Retrieves data specific to this event.
      data: V2CoreHealthPaymentMethodErrorFiringEvent.Data;
    }
    export interface V2CoreHealthPaymentMethodErrorFiringEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.health.payment_method_error.firing';
      fetchEvent(): Promise<V2CoreHealthPaymentMethodErrorFiringEvent>;
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
            | 'billie'
            | 'blik'
            | 'boleto'
            | 'card'
            | 'card_present'
            | 'cartes_bancaires'
            | 'cashapp'
            | 'crypto'
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
            | 'kriya'
            | 'kr_card'
            | 'link'
            | 'mb_way'
            | 'mobilepay'
            | 'mondu'
            | 'multibanco'
            | 'naver_pay'
            | 'ng_bank'
            | 'ng_bank_transfer'
            | 'ng_card'
            | 'ng_market'
            | 'ng_ussd'
            | 'ng_wallet'
            | 'oxxo'
            | 'p24'
            | 'paper_check'
            | 'payco'
            | 'paynow'
            | 'paypal'
            | 'paypay'
            | 'payto'
            | 'pay_by_bank'
            | 'pix'
            | 'promptpay'
            | 'rechnung'
            | 'revolut_pay'
            | 'samsung_pay'
            | 'satispay'
            | 'scalapay'
            | 'sepa_debit'
            | 'sequra'
            | 'sofort'
            | 'sunbit'
            | 'swish'
            | 'twint'
            | 'upi'
            | 'us_bank_account'
            | 'vipps'
            | 'wechat_pay'
            | 'zip';
        }
      }
    }

    /**
     * Occurs when a payment method error alert is resolved.
     */
    export interface V2CoreHealthPaymentMethodErrorResolvedEvent
      extends V2.Core.EventBase {
      type: 'v2.core.health.payment_method_error.resolved';
      // Retrieves data specific to this event.
      data: V2CoreHealthPaymentMethodErrorResolvedEvent.Data;
    }
    export interface V2CoreHealthPaymentMethodErrorResolvedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.health.payment_method_error.resolved';
      fetchEvent(): Promise<V2CoreHealthPaymentMethodErrorResolvedEvent>;
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
            | 'billie'
            | 'blik'
            | 'boleto'
            | 'card'
            | 'card_present'
            | 'cartes_bancaires'
            | 'cashapp'
            | 'crypto'
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
            | 'kriya'
            | 'kr_card'
            | 'link'
            | 'mb_way'
            | 'mobilepay'
            | 'mondu'
            | 'multibanco'
            | 'naver_pay'
            | 'ng_bank'
            | 'ng_bank_transfer'
            | 'ng_card'
            | 'ng_market'
            | 'ng_ussd'
            | 'ng_wallet'
            | 'oxxo'
            | 'p24'
            | 'paper_check'
            | 'payco'
            | 'paynow'
            | 'paypal'
            | 'paypay'
            | 'payto'
            | 'pay_by_bank'
            | 'pix'
            | 'promptpay'
            | 'rechnung'
            | 'revolut_pay'
            | 'samsung_pay'
            | 'satispay'
            | 'scalapay'
            | 'sepa_debit'
            | 'sequra'
            | 'sofort'
            | 'sunbit'
            | 'swish'
            | 'twint'
            | 'upi'
            | 'us_bank_account'
            | 'vipps'
            | 'wechat_pay'
            | 'zip';
        }
      }
    }

    /**
     * Occurs when a traffic volume drop alert is firing.
     */
    export interface V2CoreHealthTrafficVolumeDropFiringEvent
      extends V2.Core.EventBase {
      type: 'v2.core.health.traffic_volume_drop.firing';
      // Retrieves data specific to this event.
      data: V2CoreHealthTrafficVolumeDropFiringEvent.Data;
    }
    export interface V2CoreHealthTrafficVolumeDropFiringEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.health.traffic_volume_drop.firing';
      fetchEvent(): Promise<V2CoreHealthTrafficVolumeDropFiringEvent>;
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
      extends V2.Core.EventBase {
      type: 'v2.core.health.traffic_volume_drop.resolved';
      // Retrieves data specific to this event.
      data: V2CoreHealthTrafficVolumeDropResolvedEvent.Data;
    }
    export interface V2CoreHealthTrafficVolumeDropResolvedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.health.traffic_volume_drop.resolved';
      fetchEvent(): Promise<V2CoreHealthTrafficVolumeDropResolvedEvent>;
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
      extends V2.Core.EventBase {
      type: 'v2.core.health.webhook_latency.firing';
      // Retrieves data specific to this event.
      data: V2CoreHealthWebhookLatencyFiringEvent.Data;
    }
    export interface V2CoreHealthWebhookLatencyFiringEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.health.webhook_latency.firing';
      fetchEvent(): Promise<V2CoreHealthWebhookLatencyFiringEvent>;
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
      extends V2.Core.EventBase {
      type: 'v2.core.health.webhook_latency.resolved';
      // Retrieves data specific to this event.
      data: V2CoreHealthWebhookLatencyResolvedEvent.Data;
    }
    export interface V2CoreHealthWebhookLatencyResolvedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.core.health.webhook_latency.resolved';
      fetchEvent(): Promise<V2CoreHealthWebhookLatencyResolvedEvent>;
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
      extends V2.Core.EventBase {
      type: 'v2.money_management.adjustment.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.Adjustment>;
    }
    export interface V2MoneyManagementAdjustmentCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.adjustment.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.Adjustment>;
      fetchEvent(): Promise<V2MoneyManagementAdjustmentCreatedEvent>;
    }

    /**
     * Occurs when a FinancialAccount is created.
     */
    export interface V2MoneyManagementFinancialAccountCreatedEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.financial_account.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.FinancialAccount>;
    }
    export interface V2MoneyManagementFinancialAccountCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.financial_account.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.FinancialAccount>;
      fetchEvent(): Promise<V2MoneyManagementFinancialAccountCreatedEvent>;
    }

    /**
     * Occurs when a FinancialAccount is updated.
     */
    export interface V2MoneyManagementFinancialAccountUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.financial_account.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.FinancialAccount>;
    }
    export interface V2MoneyManagementFinancialAccountUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.financial_account.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.FinancialAccount>;
      fetchEvent(): Promise<V2MoneyManagementFinancialAccountUpdatedEvent>;
    }

    /**
     * Occurs when a FinancialAddress is activated and is ready to receive funds.
     */
    export interface V2MoneyManagementFinancialAddressActivatedEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.financial_address.activated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.FinancialAddress>;
    }
    export interface V2MoneyManagementFinancialAddressActivatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.financial_address.activated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.FinancialAddress>;
      fetchEvent(): Promise<V2MoneyManagementFinancialAddressActivatedEvent>;
    }

    /**
     * Occurs when a FinancialAddress fails to activate and can not receive funds.
     */
    export interface V2MoneyManagementFinancialAddressFailedEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.financial_address.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.FinancialAddress>;
    }
    export interface V2MoneyManagementFinancialAddressFailedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.financial_address.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.FinancialAddress>;
      fetchEvent(): Promise<V2MoneyManagementFinancialAddressFailedEvent>;
    }

    /**
     * Occurs when an InboundTransfer's funds are made available.
     */
    export interface V2MoneyManagementInboundTransferAvailableEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.inbound_transfer.available';
      // Retrieves data specific to this event.
      data: V2MoneyManagementInboundTransferAvailableEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.InboundTransfer>;
    }
    export interface V2MoneyManagementInboundTransferAvailableEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.inbound_transfer.available';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.InboundTransfer>;
      fetchEvent(): Promise<V2MoneyManagementInboundTransferAvailableEvent>;
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
      extends V2.Core.EventBase {
      type: 'v2.money_management.inbound_transfer.bank_debit_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.InboundTransfer>;
    }
    export interface V2MoneyManagementInboundTransferBankDebitFailedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.inbound_transfer.bank_debit_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.InboundTransfer>;
      fetchEvent(): Promise<
        V2MoneyManagementInboundTransferBankDebitFailedEvent
      >;
    }

    /**
     * Occurs when an InboundTransfer starts processing.
     */
    export interface V2MoneyManagementInboundTransferBankDebitProcessingEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.inbound_transfer.bank_debit_processing';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.InboundTransfer>;
    }
    export interface V2MoneyManagementInboundTransferBankDebitProcessingEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.inbound_transfer.bank_debit_processing';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.InboundTransfer>;
      fetchEvent(): Promise<
        V2MoneyManagementInboundTransferBankDebitProcessingEvent
      >;
    }

    /**
     * Occurs when an InboundTransfer is queued.
     */
    export interface V2MoneyManagementInboundTransferBankDebitQueuedEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.inbound_transfer.bank_debit_queued';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.InboundTransfer>;
    }
    export interface V2MoneyManagementInboundTransferBankDebitQueuedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.inbound_transfer.bank_debit_queued';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.InboundTransfer>;
      fetchEvent(): Promise<
        V2MoneyManagementInboundTransferBankDebitQueuedEvent
      >;
    }

    /**
     * Occurs when an InboundTransfer is returned.
     */
    export interface V2MoneyManagementInboundTransferBankDebitReturnedEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.inbound_transfer.bank_debit_returned';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.InboundTransfer>;
    }
    export interface V2MoneyManagementInboundTransferBankDebitReturnedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.inbound_transfer.bank_debit_returned';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.InboundTransfer>;
      fetchEvent(): Promise<
        V2MoneyManagementInboundTransferBankDebitReturnedEvent
      >;
    }

    /**
     * Occurs when an InboundTransfer succeeds.
     */
    export interface V2MoneyManagementInboundTransferBankDebitSucceededEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.inbound_transfer.bank_debit_succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.InboundTransfer>;
    }
    export interface V2MoneyManagementInboundTransferBankDebitSucceededEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.inbound_transfer.bank_debit_succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.InboundTransfer>;
      fetchEvent(): Promise<
        V2MoneyManagementInboundTransferBankDebitSucceededEvent
      >;
    }

    /**
     * Occurs when an OutboundPayment transitions into the canceled state.
     */
    export interface V2MoneyManagementOutboundPaymentCanceledEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.outbound_payment.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundPayment>;
    }
    export interface V2MoneyManagementOutboundPaymentCanceledEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.outbound_payment.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundPayment>;
      fetchEvent(): Promise<V2MoneyManagementOutboundPaymentCanceledEvent>;
    }

    /**
     * Occurs when an OutboundPayment is created.
     */
    export interface V2MoneyManagementOutboundPaymentCreatedEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.outbound_payment.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundPayment>;
    }
    export interface V2MoneyManagementOutboundPaymentCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.outbound_payment.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundPayment>;
      fetchEvent(): Promise<V2MoneyManagementOutboundPaymentCreatedEvent>;
    }

    /**
     * Occurs when an OutboundPayment transitions into the failed state.
     */
    export interface V2MoneyManagementOutboundPaymentFailedEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.outbound_payment.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundPayment>;
    }
    export interface V2MoneyManagementOutboundPaymentFailedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.outbound_payment.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundPayment>;
      fetchEvent(): Promise<V2MoneyManagementOutboundPaymentFailedEvent>;
    }

    /**
     * Occurs when an OutboundPayment transitions into the posted state.
     */
    export interface V2MoneyManagementOutboundPaymentPostedEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.outbound_payment.posted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundPayment>;
    }
    export interface V2MoneyManagementOutboundPaymentPostedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.outbound_payment.posted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundPayment>;
      fetchEvent(): Promise<V2MoneyManagementOutboundPaymentPostedEvent>;
    }

    /**
     * Occurs when an OutboundPayment transitions into the returned state.
     */
    export interface V2MoneyManagementOutboundPaymentReturnedEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.outbound_payment.returned';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundPayment>;
    }
    export interface V2MoneyManagementOutboundPaymentReturnedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.outbound_payment.returned';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundPayment>;
      fetchEvent(): Promise<V2MoneyManagementOutboundPaymentReturnedEvent>;
    }

    /**
     * Occurs when an OutboundPayment is updated.
     */
    export interface V2MoneyManagementOutboundPaymentUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.outbound_payment.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundPayment>;
    }
    export interface V2MoneyManagementOutboundPaymentUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.outbound_payment.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundPayment>;
      fetchEvent(): Promise<V2MoneyManagementOutboundPaymentUpdatedEvent>;
    }

    /**
     * Occurs when an OutboundTransfer transitions into the canceled state.
     */
    export interface V2MoneyManagementOutboundTransferCanceledEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.outbound_transfer.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundTransfer>;
    }
    export interface V2MoneyManagementOutboundTransferCanceledEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.outbound_transfer.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundTransfer>;
      fetchEvent(): Promise<V2MoneyManagementOutboundTransferCanceledEvent>;
    }

    /**
     * Occurs when an OutboundTransfer is created.
     */
    export interface V2MoneyManagementOutboundTransferCreatedEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.outbound_transfer.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundTransfer>;
    }
    export interface V2MoneyManagementOutboundTransferCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.outbound_transfer.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundTransfer>;
      fetchEvent(): Promise<V2MoneyManagementOutboundTransferCreatedEvent>;
    }

    /**
     * Occurs when an OutboundTransfer transitions into the failed state.
     */
    export interface V2MoneyManagementOutboundTransferFailedEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.outbound_transfer.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundTransfer>;
    }
    export interface V2MoneyManagementOutboundTransferFailedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.outbound_transfer.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundTransfer>;
      fetchEvent(): Promise<V2MoneyManagementOutboundTransferFailedEvent>;
    }

    /**
     * Occurs when an OutboundTransfer transitions into the posted state.
     */
    export interface V2MoneyManagementOutboundTransferPostedEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.outbound_transfer.posted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundTransfer>;
    }
    export interface V2MoneyManagementOutboundTransferPostedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.outbound_transfer.posted';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundTransfer>;
      fetchEvent(): Promise<V2MoneyManagementOutboundTransferPostedEvent>;
    }

    /**
     * Occurs when an OutboundTransfer transitions into the returned state.
     */
    export interface V2MoneyManagementOutboundTransferReturnedEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.outbound_transfer.returned';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundTransfer>;
    }
    export interface V2MoneyManagementOutboundTransferReturnedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.outbound_transfer.returned';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundTransfer>;
      fetchEvent(): Promise<V2MoneyManagementOutboundTransferReturnedEvent>;
    }

    /**
     * Event that is emitted every time an Outbound Transfer is updated.
     */
    export interface V2MoneyManagementOutboundTransferUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.outbound_transfer.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundTransfer>;
    }
    export interface V2MoneyManagementOutboundTransferUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.outbound_transfer.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundTransfer>;
      fetchEvent(): Promise<V2MoneyManagementOutboundTransferUpdatedEvent>;
    }

    /**
     * Occurs when a PayoutMethod is updated.
     */
    export interface V2MoneyManagementPayoutMethodUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.payout_method.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.PayoutMethod>;
    }
    export interface V2MoneyManagementPayoutMethodUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.payout_method.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.PayoutMethod>;
      fetchEvent(): Promise<V2MoneyManagementPayoutMethodUpdatedEvent>;
    }

    /**
     * Occurs when a ReceivedCredit's funds are received and are available in your balance.
     */
    export interface V2MoneyManagementReceivedCreditAvailableEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.received_credit.available';
      // Retrieves data specific to this event.
      data: V2MoneyManagementReceivedCreditAvailableEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedCredit>;
    }
    export interface V2MoneyManagementReceivedCreditAvailableEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.received_credit.available';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedCredit>;
      fetchEvent(): Promise<V2MoneyManagementReceivedCreditAvailableEvent>;
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
      extends V2.Core.EventBase {
      type: 'v2.money_management.received_credit.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedCredit>;
    }
    export interface V2MoneyManagementReceivedCreditFailedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.received_credit.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedCredit>;
      fetchEvent(): Promise<V2MoneyManagementReceivedCreditFailedEvent>;
    }

    /**
     * Occurs when a ReceivedCredit is reversed, returned to the originator, and deducted from your balance.
     */
    export interface V2MoneyManagementReceivedCreditReturnedEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.received_credit.returned';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedCredit>;
    }
    export interface V2MoneyManagementReceivedCreditReturnedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.received_credit.returned';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedCredit>;
      fetchEvent(): Promise<V2MoneyManagementReceivedCreditReturnedEvent>;
    }

    /**
     * Occurs when a ReceivedCredit succeeds.
     */
    export interface V2MoneyManagementReceivedCreditSucceededEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.received_credit.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedCredit>;
    }
    export interface V2MoneyManagementReceivedCreditSucceededEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.received_credit.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedCredit>;
      fetchEvent(): Promise<V2MoneyManagementReceivedCreditSucceededEvent>;
    }

    /**
     * Occurs when a ReceivedDebit is canceled.
     */
    export interface V2MoneyManagementReceivedDebitCanceledEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.received_debit.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedDebit>;
    }
    export interface V2MoneyManagementReceivedDebitCanceledEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.received_debit.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedDebit>;
      fetchEvent(): Promise<V2MoneyManagementReceivedDebitCanceledEvent>;
    }

    /**
     * Occurs when a ReceivedDebit fails.
     */
    export interface V2MoneyManagementReceivedDebitFailedEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.received_debit.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedDebit>;
    }
    export interface V2MoneyManagementReceivedDebitFailedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.received_debit.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedDebit>;
      fetchEvent(): Promise<V2MoneyManagementReceivedDebitFailedEvent>;
    }

    /**
     * Occurs when a ReceivedDebit is set to pending.
     */
    export interface V2MoneyManagementReceivedDebitPendingEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.received_debit.pending';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedDebit>;
    }
    export interface V2MoneyManagementReceivedDebitPendingEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.received_debit.pending';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedDebit>;
      fetchEvent(): Promise<V2MoneyManagementReceivedDebitPendingEvent>;
    }

    /**
     * Occurs when a ReceivedDebit succeeds.
     */
    export interface V2MoneyManagementReceivedDebitSucceededEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.received_debit.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedDebit>;
    }
    export interface V2MoneyManagementReceivedDebitSucceededEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.received_debit.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedDebit>;
      fetchEvent(): Promise<V2MoneyManagementReceivedDebitSucceededEvent>;
    }

    /**
     * Occurs when a ReceivedDebit is updated.
     */
    export interface V2MoneyManagementReceivedDebitUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.received_debit.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedDebit>;
    }
    export interface V2MoneyManagementReceivedDebitUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.received_debit.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedDebit>;
      fetchEvent(): Promise<V2MoneyManagementReceivedDebitUpdatedEvent>;
    }

    /**
     * Occurs when a RecipientVerification is created.
     */
    export interface V2MoneyManagementRecipientVerificationCreatedEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.recipient_verification.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.RecipientVerification>;
    }
    export interface V2MoneyManagementRecipientVerificationCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.recipient_verification.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.RecipientVerification>;
      fetchEvent(): Promise<V2MoneyManagementRecipientVerificationCreatedEvent>;
    }

    /**
     * Occurs when a RecipientVerification is updated.
     */
    export interface V2MoneyManagementRecipientVerificationUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.recipient_verification.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.RecipientVerification>;
    }
    export interface V2MoneyManagementRecipientVerificationUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.recipient_verification.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.RecipientVerification>;
      fetchEvent(): Promise<V2MoneyManagementRecipientVerificationUpdatedEvent>;
    }

    /**
     * Occurs when a Transaction is created.
     */
    export interface V2MoneyManagementTransactionCreatedEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.transaction.created';
      // Retrieves data specific to this event.
      data: V2MoneyManagementTransactionCreatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.Transaction>;
    }
    export interface V2MoneyManagementTransactionCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.transaction.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.Transaction>;
      fetchEvent(): Promise<V2MoneyManagementTransactionCreatedEvent>;
    }

    namespace V2MoneyManagementTransactionCreatedEvent {
      export interface Data {
        /**
         * Id of the v1 Transaction corresponding to this Transaction.
         */
        v1_id?: string;
      }
    }

    /**
     * Occurs when a Transaction is updated.
     */
    export interface V2MoneyManagementTransactionUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v2.money_management.transaction.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.Transaction>;
    }
    export interface V2MoneyManagementTransactionUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.money_management.transaction.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.Transaction>;
      fetchEvent(): Promise<V2MoneyManagementTransactionUpdatedEvent>;
    }

    /**
     * Sent after a failed authorization if there are still retries available on the OffSessionPayment.
     */
    export interface V2PaymentsOffSessionPaymentAuthorizationAttemptFailedEvent
      extends V2.Core.EventBase {
      type: 'v2.payments.off_session_payment.authorization_attempt_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Payments.OffSessionPayment>;
    }
    export interface V2PaymentsOffSessionPaymentAuthorizationAttemptFailedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.payments.off_session_payment.authorization_attempt_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Payments.OffSessionPayment>;
      fetchEvent(): Promise<
        V2PaymentsOffSessionPaymentAuthorizationAttemptFailedEvent
      >;
    }

    /**
     * Sent when our internal scheduling system kicks off an attempt at authorization, whether it's a
     * retry or an initial authorization.
     */
    export interface V2PaymentsOffSessionPaymentAuthorizationAttemptStartedEvent
      extends V2.Core.EventBase {
      type: 'v2.payments.off_session_payment.authorization_attempt_started';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Payments.OffSessionPayment>;
    }
    export interface V2PaymentsOffSessionPaymentAuthorizationAttemptStartedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.payments.off_session_payment.authorization_attempt_started';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Payments.OffSessionPayment>;
      fetchEvent(): Promise<
        V2PaymentsOffSessionPaymentAuthorizationAttemptStartedEvent
      >;
    }

    /**
     * Sent immediately following a user's call to the Off-Session Payments cancel endpoint.
     */
    export interface V2PaymentsOffSessionPaymentCanceledEvent
      extends V2.Core.EventBase {
      type: 'v2.payments.off_session_payment.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Payments.OffSessionPayment>;
    }
    export interface V2PaymentsOffSessionPaymentCanceledEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.payments.off_session_payment.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Payments.OffSessionPayment>;
      fetchEvent(): Promise<V2PaymentsOffSessionPaymentCanceledEvent>;
    }

    /**
     * Sent immediately following a user's call to the Off-Session Payments create endpoint.
     */
    export interface V2PaymentsOffSessionPaymentCreatedEvent
      extends V2.Core.EventBase {
      type: 'v2.payments.off_session_payment.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Payments.OffSessionPayment>;
    }
    export interface V2PaymentsOffSessionPaymentCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.payments.off_session_payment.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Payments.OffSessionPayment>;
      fetchEvent(): Promise<V2PaymentsOffSessionPaymentCreatedEvent>;
    }

    /**
     * Sent after a failed authorization if there are no retries remaining, or if the failure is unretryable.
     */
    export interface V2PaymentsOffSessionPaymentFailedEvent
      extends V2.Core.EventBase {
      type: 'v2.payments.off_session_payment.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Payments.OffSessionPayment>;
    }
    export interface V2PaymentsOffSessionPaymentFailedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.payments.off_session_payment.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Payments.OffSessionPayment>;
      fetchEvent(): Promise<V2PaymentsOffSessionPaymentFailedEvent>;
    }

    /**
     * Off-Session payment requires capture event definition.
     */
    export interface V2PaymentsOffSessionPaymentRequiresCaptureEvent
      extends V2.Core.EventBase {
      type: 'v2.payments.off_session_payment.requires_capture';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Payments.OffSessionPayment>;
    }
    export interface V2PaymentsOffSessionPaymentRequiresCaptureEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.payments.off_session_payment.requires_capture';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Payments.OffSessionPayment>;
      fetchEvent(): Promise<V2PaymentsOffSessionPaymentRequiresCaptureEvent>;
    }

    /**
     * Sent immediately after a successful authorization.
     */
    export interface V2PaymentsOffSessionPaymentSucceededEvent
      extends V2.Core.EventBase {
      type: 'v2.payments.off_session_payment.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Payments.OffSessionPayment>;
    }
    export interface V2PaymentsOffSessionPaymentSucceededEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.payments.off_session_payment.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Payments.OffSessionPayment>;
      fetchEvent(): Promise<V2PaymentsOffSessionPaymentSucceededEvent>;
    }
  }
}
