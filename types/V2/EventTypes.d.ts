// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe.V2 {
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
      | Stripe.Events.V2MoneyManagementTransactionCreatedEvent
      | Stripe.Events.V2MoneyManagementTransactionUpdatedEvent
      | Stripe.Events.V2PaymentsOffSessionPaymentAuthorizationAttemptFailedEvent
      | Stripe.Events.V2PaymentsOffSessionPaymentAuthorizationAttemptStartedEvent
      | Stripe.Events.V2PaymentsOffSessionPaymentCanceledEvent
      | Stripe.Events.V2PaymentsOffSessionPaymentCreatedEvent
      | Stripe.Events.V2PaymentsOffSessionPaymentFailedEvent
      | Stripe.Events.V2PaymentsOffSessionPaymentSucceededEvent
      | Stripe.Events.V2ReportingReportRunCreatedEvent
      | Stripe.Events.V2ReportingReportRunFailedEvent
      | Stripe.Events.V2ReportingReportRunSucceededEvent
      | Stripe.Events.V2ReportingReportRunUpdatedEvent;

    export type PushedEvent =
      | Stripe.Events.PushedV1BillingMeterErrorReportTriggeredEvent
      | Stripe.Events.PushedV1BillingMeterNoMeterFoundEvent
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
      | Stripe.Events.PushedV2MoneyManagementTransactionCreatedEvent
      | Stripe.Events.PushedV2MoneyManagementTransactionUpdatedEvent
      | Stripe.Events.PushedV2PaymentsOffSessionPaymentAuthorizationAttemptFailedEvent
      | Stripe.Events.PushedV2PaymentsOffSessionPaymentAuthorizationAttemptStartedEvent
      | Stripe.Events.PushedV2PaymentsOffSessionPaymentCanceledEvent
      | Stripe.Events.PushedV2PaymentsOffSessionPaymentCreatedEvent
      | Stripe.Events.PushedV2PaymentsOffSessionPaymentFailedEvent
      | Stripe.Events.PushedV2PaymentsOffSessionPaymentSucceededEvent
      | Stripe.Events.PushedV2ReportingReportRunCreatedEvent
      | Stripe.Events.PushedV2ReportingReportRunFailedEvent
      | Stripe.Events.PushedV2ReportingReportRunSucceededEvent
      | Stripe.Events.PushedV2ReportingReportRunUpdatedEvent;
  }

  namespace Stripe.Events {
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
          | 'holds_currencies.eur'
          | 'holds_currencies.gbp'
          | 'holds_currencies.usd'
          | 'inbound_transfers.bank_accounts'
          | 'outbound_payments.bank_accounts'
          | 'outbound_payments.cards'
          | 'outbound_payments.financial_accounts'
          | 'outbound_transfers.bank_accounts'
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
      fetchRelatedObject(): Promise<V2.Core.Person>;
    }
    export interface PushedV2CoreAccountPersonCreatedEvent
      extends V2.EventBase {
      type: 'v2.core.account_person.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Person>;
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
      fetchRelatedObject(): Promise<V2.Core.Person>;
    }
    export interface PushedV2CoreAccountPersonDeletedEvent
      extends V2.EventBase {
      type: 'v2.core.account_person.deleted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Person>;
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
      fetchRelatedObject(): Promise<V2.Core.Person>;
    }
    export interface PushedV2CoreAccountPersonUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.account_person.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Person>;
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
          error_code: string | null;

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
          error_code: string | null;

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
          dimensions: Array<Impact.Dimension> | null;

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
            issuer: string | null;

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
          dimensions: Array<Impact.Dimension> | null;

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
            issuer: string | null;

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
          account: string | null;

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
        resolved_at: string | null;

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
          approved_amount: V2.Amount | null;

          /**
           * The number of approved requests which are impacted.
           */
          approved_impacted_requests: number | null;

          /**
           * Estimated aggregated amount for the declined requests.
           */
          declined_amount: V2.Amount | null;

          /**
           * The number of declined requests which are impacted.
           */
          declined_impacted_requests: number | null;
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
          approved_amount: V2.Amount | null;

          /**
           * The number of approved requests which are impacted.
           */
          approved_impacted_requests: number | null;

          /**
           * Estimated aggregated amount for the declined requests.
           */
          declined_amount: V2.Amount | null;

          /**
           * The number of declined requests which are impacted.
           */
          declined_impacted_requests: number | null;
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
          error_code: string | null;

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
          error_code: string | null;

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
          expected_traffic: number | null;

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
          expected_traffic: number | null;

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

    /**
     * Occurs when a ReportRun is created.
     */
    export interface V2ReportingReportRunCreatedEvent extends V2.EventBase {
      type: 'v2.reporting.report_run.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Reporting.ReportRun>;
    }
    export interface PushedV2ReportingReportRunCreatedEvent
      extends V2.EventBase {
      type: 'v2.reporting.report_run.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Reporting.ReportRun>;
      pull(): Promise<V2ReportingReportRunCreatedEvent>;
    }

    /**
     * Occurs when a ReportRun has failed to complete.
     */
    export interface V2ReportingReportRunFailedEvent extends V2.EventBase {
      type: 'v2.reporting.report_run.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Reporting.ReportRun>;
    }
    export interface PushedV2ReportingReportRunFailedEvent
      extends V2.EventBase {
      type: 'v2.reporting.report_run.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Reporting.ReportRun>;
      pull(): Promise<V2ReportingReportRunFailedEvent>;
    }

    /**
     * Occurs when a ReportRun has successfully completed.
     */
    export interface V2ReportingReportRunSucceededEvent extends V2.EventBase {
      type: 'v2.reporting.report_run.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Reporting.ReportRun>;
    }
    export interface PushedV2ReportingReportRunSucceededEvent
      extends V2.EventBase {
      type: 'v2.reporting.report_run.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Reporting.ReportRun>;
      pull(): Promise<V2ReportingReportRunSucceededEvent>;
    }

    /**
     * Occurs when a ReportRun is updated.
     */
    export interface V2ReportingReportRunUpdatedEvent extends V2.EventBase {
      type: 'v2.reporting.report_run.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Reporting.ReportRun>;
    }
    export interface PushedV2ReportingReportRunUpdatedEvent
      extends V2.EventBase {
      type: 'v2.reporting.report_run.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Reporting.ReportRun>;
      pull(): Promise<V2ReportingReportRunUpdatedEvent>;
    }
  }
}
