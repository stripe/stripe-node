// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe.V2.Core {
    export type Event =
      | Stripe.Events.V1BillingMeterErrorReportTriggeredEvent
      | Stripe.Events.V1BillingMeterNoMeterFoundEvent
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
      | Stripe.Events.V2IamApiKeyCreatedEvent
      | Stripe.Events.V2IamApiKeyDefaultSecretRevealedEvent
      | Stripe.Events.V2IamApiKeyExpiredEvent
      | Stripe.Events.V2IamApiKeyPermissionsUpdatedEvent
      | Stripe.Events.V2IamApiKeyRotatedEvent
      | Stripe.Events.V2IamApiKeyUpdatedEvent
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
      | Stripe.Events.V2PaymentsOffSessionPaymentAttemptFailedEvent
      | Stripe.Events.V2PaymentsOffSessionPaymentAttemptStartedEvent
      | Stripe.Events.V2PaymentsOffSessionPaymentAuthorizationAttemptFailedEvent
      | Stripe.Events.V2PaymentsOffSessionPaymentAuthorizationAttemptStartedEvent
      | Stripe.Events.V2PaymentsOffSessionPaymentCanceledEvent
      | Stripe.Events.V2PaymentsOffSessionPaymentCreatedEvent
      | Stripe.Events.V2PaymentsOffSessionPaymentFailedEvent
      | Stripe.Events.V2PaymentsOffSessionPaymentRequiresCaptureEvent
      | Stripe.Events.V2PaymentsOffSessionPaymentSucceededEvent
      | Stripe.Events.V2ReportingReportRunCreatedEvent
      | Stripe.Events.V2ReportingReportRunFailedEvent
      | Stripe.Events.V2ReportingReportRunSucceededEvent
      | Stripe.Events.V2ReportingReportRunUpdatedEvent;

    export type EventNotification =
      | Stripe.Events.V1BillingMeterErrorReportTriggeredEventNotification
      | Stripe.Events.V1BillingMeterNoMeterFoundEventNotification
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
      | Stripe.Events.V2IamApiKeyCreatedEventNotification
      | Stripe.Events.V2IamApiKeyDefaultSecretRevealedEventNotification
      | Stripe.Events.V2IamApiKeyExpiredEventNotification
      | Stripe.Events.V2IamApiKeyPermissionsUpdatedEventNotification
      | Stripe.Events.V2IamApiKeyRotatedEventNotification
      | Stripe.Events.V2IamApiKeyUpdatedEventNotification
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
      | Stripe.Events.V2PaymentsOffSessionPaymentAttemptFailedEventNotification
      | Stripe.Events.V2PaymentsOffSessionPaymentAttemptStartedEventNotification
      | Stripe.Events.V2PaymentsOffSessionPaymentAuthorizationAttemptFailedEventNotification
      | Stripe.Events.V2PaymentsOffSessionPaymentAuthorizationAttemptStartedEventNotification
      | Stripe.Events.V2PaymentsOffSessionPaymentCanceledEventNotification
      | Stripe.Events.V2PaymentsOffSessionPaymentCreatedEventNotification
      | Stripe.Events.V2PaymentsOffSessionPaymentFailedEventNotification
      | Stripe.Events.V2PaymentsOffSessionPaymentRequiresCaptureEventNotification
      | Stripe.Events.V2PaymentsOffSessionPaymentSucceededEventNotification
      | Stripe.Events.V2ReportingReportRunCreatedEventNotification
      | Stripe.Events.V2ReportingReportRunFailedEventNotification
      | Stripe.Events.V2ReportingReportRunSucceededEventNotification
      | Stripe.Events.V2ReportingReportRunUpdatedEventNotification;
  }

  namespace Stripe.Events {
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
          | 'commercial.lead.prepaid_card'
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

          /**
           * The percentage of impacted requests.
           */
          impacted_requests_percentage?: string;
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

          /**
           * The percentage of impacted requests.
           */
          impacted_requests_percentage?: string;
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

          /**
           * The percentage of impacted requests.
           */
          impacted_requests_percentage?: string;
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

          /**
           * The percentage of impacted requests.
           */
          impacted_requests_percentage?: string;
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
           * The context the event should have been generated for. Only present when the account is a connected account.
           */
          context?: string;

          /**
           * The type of event that Stripe failed to generate.
           */
          event_type: string;

          /**
           * The related object details.
           */
          related_object: Impact.RelatedObject;
        }

        namespace Impact {
          export interface RelatedObject {
            /**
             * The ID of the related object (e.g., "pi_...").
             */
            id: string;

            /**
             * The type of the related object (e.g., "payment_intent").
             */
            type: string;

            /**
             * The API URL for the related object (e.g., "/v1/payment_intents/pi_...").
             */
            url: string;
          }
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
          realized_fraud_amount: Impact.RealizedFraudAmount;
        }

        namespace Impact {
          export type AttackType = 'spike' | 'sustained_attack';

          export interface RealizedFraudAmount {
            /**
             * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
             */
            value?: number;

            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency?: string;
          }
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
          approved_amount?: Impact.ApprovedAmount;

          /**
           * The number of approved requests which are impacted.
           */
          approved_impacted_requests?: number;

          /**
           * Estimated aggregated amount for the declined requests.
           */
          declined_amount?: Impact.DeclinedAmount;

          /**
           * The number of declined requests which are impacted.
           */
          declined_impacted_requests?: number;
        }

        namespace Impact {
          export interface ApprovedAmount {
            /**
             * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
             */
            value?: number;

            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency?: string;
          }

          export interface DeclinedAmount {
            /**
             * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
             */
            value?: number;

            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency?: string;
          }
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
          approved_amount?: Impact.ApprovedAmount;

          /**
           * The number of approved requests which are impacted.
           */
          approved_impacted_requests?: number;

          /**
           * Estimated aggregated amount for the declined requests.
           */
          declined_amount?: Impact.DeclinedAmount;

          /**
           * The number of declined requests which are impacted.
           */
          declined_impacted_requests?: number;
        }

        namespace Impact {
          export interface ApprovedAmount {
            /**
             * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
             */
            value?: number;

            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency?: string;
          }

          export interface DeclinedAmount {
            /**
             * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
             */
            value?: number;

            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency?: string;
          }
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
          approved_amount?: Impact.ApprovedAmount;

          /**
           * The number of approved requests which are impacted.
           */
          approved_impacted_requests?: number;

          /**
           * Estimated aggregated amount for the declined requests.
           */
          declined_amount?: Impact.DeclinedAmount;

          /**
           * The number of declined requests which are impacted.
           */
          declined_impacted_requests?: number;
        }

        namespace Impact {
          export interface ApprovedAmount {
            /**
             * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
             */
            value?: number;

            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency?: string;
          }

          export interface DeclinedAmount {
            /**
             * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
             */
            value?: number;

            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency?: string;
          }
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
          approved_amount?: Impact.ApprovedAmount;

          /**
           * The number of approved requests which are impacted.
           */
          approved_impacted_requests?: number;

          /**
           * Estimated aggregated amount for the declined requests.
           */
          declined_amount?: Impact.DeclinedAmount;

          /**
           * The number of declined requests which are impacted.
           */
          declined_impacted_requests?: number;
        }

        namespace Impact {
          export interface ApprovedAmount {
            /**
             * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
             */
            value?: number;

            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency?: string;
          }

          export interface DeclinedAmount {
            /**
             * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
             */
            value?: number;

            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency?: string;
          }
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
           * The percentage of impacted requests.
           */
          impacted_requests_percentage?: string;

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
           * The percentage of impacted requests.
           */
          impacted_requests_percentage?: string;

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
     * Occurs when an API Key is created.
     */
    export interface V2IamApiKeyCreatedEvent extends V2.Core.EventBase {
      type: 'v2.iam.api_key.created';
    }
    export interface V2IamApiKeyCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.iam.api_key.created';
      fetchEvent(): Promise<V2IamApiKeyCreatedEvent>;
    }

    /**
     * Occurs when the default API Key's secret is revealed.
     */
    export interface V2IamApiKeyDefaultSecretRevealedEvent
      extends V2.Core.EventBase {
      type: 'v2.iam.api_key.default_secret_revealed';
    }
    export interface V2IamApiKeyDefaultSecretRevealedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.iam.api_key.default_secret_revealed';
      fetchEvent(): Promise<V2IamApiKeyDefaultSecretRevealedEvent>;
    }

    /**
     * Occurs when an API Key is expired.
     */
    export interface V2IamApiKeyExpiredEvent extends V2.Core.EventBase {
      type: 'v2.iam.api_key.expired';
    }
    export interface V2IamApiKeyExpiredEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.iam.api_key.expired';
      fetchEvent(): Promise<V2IamApiKeyExpiredEvent>;
    }

    /**
     * Occurs when an API Key's permissions are updated.
     */
    export interface V2IamApiKeyPermissionsUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v2.iam.api_key.permissions_updated';
    }
    export interface V2IamApiKeyPermissionsUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.iam.api_key.permissions_updated';
      fetchEvent(): Promise<V2IamApiKeyPermissionsUpdatedEvent>;
    }

    /**
     * Occurs when an API Key is rotated.
     */
    export interface V2IamApiKeyRotatedEvent extends V2.Core.EventBase {
      type: 'v2.iam.api_key.rotated';
      // Retrieves data specific to this event.
      data: V2IamApiKeyRotatedEvent.Data;
    }
    export interface V2IamApiKeyRotatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.iam.api_key.rotated';
      fetchEvent(): Promise<V2IamApiKeyRotatedEvent>;
    }

    namespace V2IamApiKeyRotatedEvent {
      export interface Data {
        /**
         * ID of the new key that was created due to rotation.
         */
        new_api_key: string;
      }
    }

    /**
     * Occurs when an API Key is updated.
     */
    export interface V2IamApiKeyUpdatedEvent extends V2.Core.EventBase {
      type: 'v2.iam.api_key.updated';
    }
    export interface V2IamApiKeyUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.iam.api_key.updated';
      fetchEvent(): Promise<V2IamApiKeyUpdatedEvent>;
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
     * Sent after a failed attempt if there are still retries available on the OffSessionPayment.
     */
    export interface V2PaymentsOffSessionPaymentAttemptFailedEvent
      extends V2.Core.EventBase {
      type: 'v2.payments.off_session_payment.attempt_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Payments.OffSessionPayment>;
    }
    export interface V2PaymentsOffSessionPaymentAttemptFailedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.payments.off_session_payment.attempt_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Payments.OffSessionPayment>;
      fetchEvent(): Promise<V2PaymentsOffSessionPaymentAttemptFailedEvent>;
    }

    /**
     * Sent when our internal scheduling system kicks off an attempt, whether it's a
     * retry or an initial attempt.
     */
    export interface V2PaymentsOffSessionPaymentAttemptStartedEvent
      extends V2.Core.EventBase {
      type: 'v2.payments.off_session_payment.attempt_started';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Payments.OffSessionPayment>;
    }
    export interface V2PaymentsOffSessionPaymentAttemptStartedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.payments.off_session_payment.attempt_started';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Payments.OffSessionPayment>;
      fetchEvent(): Promise<V2PaymentsOffSessionPaymentAttemptStartedEvent>;
    }

    /**
     * Sent after a failed authorization if there are still retries available on the OffSessionPayment.
     * This event has been renamed this to attempt_failed, but we are keeping this around for backwards compatibility.
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
     * This event has been renamed this to attempt_failed, but we are keeping this around for backwards compatibility.
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
     * Sent when the off-session payment becomes available for capture.
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

    /**
     * Occurs when a ReportRun is created.
     */
    export interface V2ReportingReportRunCreatedEvent
      extends V2.Core.EventBase {
      type: 'v2.reporting.report_run.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Reporting.ReportRun>;
    }
    export interface V2ReportingReportRunCreatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.reporting.report_run.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Reporting.ReportRun>;
      fetchEvent(): Promise<V2ReportingReportRunCreatedEvent>;
    }

    /**
     * Occurs when a ReportRun has failed to complete.
     */
    export interface V2ReportingReportRunFailedEvent extends V2.Core.EventBase {
      type: 'v2.reporting.report_run.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Reporting.ReportRun>;
    }
    export interface V2ReportingReportRunFailedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.reporting.report_run.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Reporting.ReportRun>;
      fetchEvent(): Promise<V2ReportingReportRunFailedEvent>;
    }

    /**
     * Occurs when a ReportRun has successfully completed.
     */
    export interface V2ReportingReportRunSucceededEvent
      extends V2.Core.EventBase {
      type: 'v2.reporting.report_run.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Reporting.ReportRun>;
    }
    export interface V2ReportingReportRunSucceededEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.reporting.report_run.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Reporting.ReportRun>;
      fetchEvent(): Promise<V2ReportingReportRunSucceededEvent>;
    }

    /**
     * Occurs when a ReportRun is updated.
     */
    export interface V2ReportingReportRunUpdatedEvent
      extends V2.Core.EventBase {
      type: 'v2.reporting.report_run.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Reporting.ReportRun>;
    }
    export interface V2ReportingReportRunUpdatedEventNotification
      extends V2.Core.EventNotificationBase {
      type: 'v2.reporting.report_run.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: V2.Core.Events.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Reporting.ReportRun>;
      fetchEvent(): Promise<V2ReportingReportRunUpdatedEvent>;
    }
  }
}
