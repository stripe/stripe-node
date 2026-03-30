// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {RangeQueryParam} from '../../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';
const stripeMethod = StripeResource.method;

export class EventResource extends StripeResource {
  /**
   * List events, going back up to 30 days.
   */
  list(
    params?: V2.Core.EventListParams,
    options?: RequestOptions
  ): ApiListPromise<Event>;
  list(options?: RequestOptions): ApiListPromise<Event>;
  list(...args: any[]): Promise<Response<any>> {
    const transformResponseData = (response: any): any => {
      return {
        ...response,
        data: response.data.map(this.addFetchRelatedObjectIfNeeded.bind(this)),
      };
    };

    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/core/events',
      methodType: 'list',
      transformResponseData: transformResponseData,
    }).call(this, ...args);
  }

  /**
   * Retrieves the details of an event.
   */
  retrieve(
    id: string,
    params?: V2.Core.EventRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Event>>;
  retrieve(id: string, options?: RequestOptions): Promise<Response<Event>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    const transformResponseData = (response: any): any => {
      return this.addFetchRelatedObjectIfNeeded(response);
    };

    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/core/events/{id}',
      transformResponseData: transformResponseData,
    }).call(this, ...args);
  }

  /**
   * @private
   *
   * For internal use in stripe-node.
   *
   * @param pulledEvent The retrieved event object
   * @returns The retrieved event object with a fetchRelatedObject method,
   * if pulledEvent.related_object is valid (non-null and has a url)
   */
  addFetchRelatedObjectIfNeeded(pulledEvent: any): any {
    if (!pulledEvent.related_object || !pulledEvent.related_object.url) {
      return pulledEvent;
    }
    return {
      ...pulledEvent,
      fetchRelatedObject: (): Promise<null | any> =>
        // call stripeMethod with 'this' resource to fetch
        // the related object. 'this' is needed to construct
        // and send the request, but the method spec controls
        // the url endpoint and method, so it doesn't matter
        // that 'this' is an Events resource object here
        stripeMethod({
          method: 'GET',
          fullPath: pulledEvent.related_object.url,
        }).apply(this, [
          {
            stripeContext: pulledEvent.context,
            headers: {
              'Stripe-Request-Trigger': `event=${pulledEvent.id}`,
            },
          },
        ]),
    };
  }
}
export interface EventBase {
  /**
   * Unique identifier for the event.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.core.event';

  /**
   * Before and after changes for the primary related object.
   */
  changes?: V2.Core.Event.Changes;

  /**
   * Authentication context needed to fetch the event or related object.
   */
  context?: string;

  /**
   * Time at which the object was created.
   */
  created: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Reason for the event.
   */
  reason?: V2.Core.Event.Reason;

  /**
   * The type of the event.
   */
  type: string;
}
export namespace V2 {
  export namespace Core {
    export namespace Event {
      export type Changes = {
        [key: string]: unknown;
      };

      export interface Reason {
        /**
         * Event reason type.
         */
        type: 'request';

        /**
         * Information on the API request that instigated the event.
         */
        request?: Reason.Request;
      }

      export namespace Reason {
        export interface Request {
          /**
           * The client details that made the request.
           */
          client?: Request.Client;

          /**
           * ID of the API request that caused the event.
           */
          id: string;

          /**
           * The idempotency key transmitted during the request.
           */
          idempotency_key: string;
        }

        export namespace Request {
          export interface Client {
            /**
             * The type of the client.
             */
            type: Client.Type;

            /**
             * API key that triggered the event.
             */
            api_key?: Client.ApiKey;

            /**
             * Dashboard user that triggered the event.
             */
            dashboard_user?: Client.DashboardUser;

            /**
             * Stripe action that triggered the event.
             */
            stripe_action?: Client.StripeAction;
          }

          export namespace Client {
            export type Type = 'api_key' | 'dashboard_user' | 'stripe_action';

            export interface ApiKey {
              /**
               * The ID of the API key.
               */
              id: string;
            }

            export interface DashboardUser {
              /**
               * The email of the dashboard user.
               */
              email: string;

              /**
               * The IP address of the user.
               */
              ip_address: string;

              /**
               * The machine identifier of the user.
               */
              machine_identifier: string;
            }

            export type StripeAction = {
              [key: string]: unknown;
            };
          }
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Core {
    export interface EventRetrieveParams {
      /**
       * Additional fields to include in the response.
       */
      include?: Array<'reason.request.client'>;
    }
  }
}
export namespace V2 {
  export namespace Core {
    export interface EventListParams {
      /**
       * Set of filters to query events within a range of `created` timestamps.
       */
      created?: RangeQueryParam;

      /**
       * Additional fields to include in the response.
       */
      include?: Array<'reason.request.client'>;

      /**
       * The page size.
       */
      limit?: number;

      /**
       * Primary object ID used to retrieve related events.
       */
      object_id?: string;

      /**
       * An array of up to 20 strings containing specific event names.
       */
      types?: Array<string>;
    }
  }
}
import {Core} from './index.js';
import {V1Billing} from './../../V1Billing/index.js';
import {Billing} from './../Billing/index.js';
import {MoneyManagement} from './../MoneyManagement/index.js';
import {Payments} from './../Payments/index.js';
import {Reporting} from './../Reporting/index.js';
export type Event =
  | V1AccountSignalsIncludingDelinquencyCreatedEvent
  | V1BillingMeterErrorReportTriggeredEvent
  | V1BillingMeterNoMeterFoundEvent
  | V2BillingCadenceBilledEvent
  | V2BillingCadenceCanceledEvent
  | V2BillingCadenceCreatedEvent
  | V2BillingLicenseFeeCreatedEvent
  | V2BillingLicenseFeeUpdatedEvent
  | V2BillingLicenseFeeVersionCreatedEvent
  | V2BillingLicensedItemCreatedEvent
  | V2BillingLicensedItemUpdatedEvent
  | V2BillingMeteredItemCreatedEvent
  | V2BillingMeteredItemUpdatedEvent
  | V2BillingPricingPlanCreatedEvent
  | V2BillingPricingPlanUpdatedEvent
  | V2BillingPricingPlanComponentCreatedEvent
  | V2BillingPricingPlanComponentUpdatedEvent
  | V2BillingPricingPlanSubscriptionCollectionAwaitingCustomerActionEvent
  | V2BillingPricingPlanSubscriptionCollectionCurrentEvent
  | V2BillingPricingPlanSubscriptionCollectionPastDueEvent
  | V2BillingPricingPlanSubscriptionCollectionPausedEvent
  | V2BillingPricingPlanSubscriptionCollectionUnpaidEvent
  | V2BillingPricingPlanSubscriptionServicingActivatedEvent
  | V2BillingPricingPlanSubscriptionServicingCanceledEvent
  | V2BillingPricingPlanSubscriptionServicingPausedEvent
  | V2BillingPricingPlanVersionCreatedEvent
  | V2BillingRateCardCreatedEvent
  | V2BillingRateCardUpdatedEvent
  | V2BillingRateCardCustomPricingUnitOverageRateCreatedEvent
  | V2BillingRateCardRateCreatedEvent
  | V2BillingRateCardSubscriptionActivatedEvent
  | V2BillingRateCardSubscriptionCanceledEvent
  | V2BillingRateCardSubscriptionCollectionAwaitingCustomerActionEvent
  | V2BillingRateCardSubscriptionCollectionCurrentEvent
  | V2BillingRateCardSubscriptionCollectionPastDueEvent
  | V2BillingRateCardSubscriptionCollectionPausedEvent
  | V2BillingRateCardSubscriptionCollectionUnpaidEvent
  | V2BillingRateCardSubscriptionServicingActivatedEvent
  | V2BillingRateCardSubscriptionServicingCanceledEvent
  | V2BillingRateCardSubscriptionServicingPausedEvent
  | V2BillingRateCardVersionCreatedEvent
  | V2CoreAccountClosedEvent
  | V2CoreAccountCreatedEvent
  | V2CoreAccountUpdatedEvent
  | V2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEvent
  | V2CoreAccountIncludingConfigurationCardCreatorUpdatedEvent
  | V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent
  | V2CoreAccountIncludingConfigurationCustomerUpdatedEvent
  | V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent
  | V2CoreAccountIncludingConfigurationMerchantUpdatedEvent
  | V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent
  | V2CoreAccountIncludingConfigurationRecipientUpdatedEvent
  | V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEvent
  | V2CoreAccountIncludingConfigurationStorerUpdatedEvent
  | V2CoreAccountIncludingDefaultsUpdatedEvent
  | V2CoreAccountIncludingFutureRequirementsUpdatedEvent
  | V2CoreAccountIncludingIdentityUpdatedEvent
  | V2CoreAccountIncludingRequirementsUpdatedEvent
  | V2CoreAccountLinkReturnedEvent
  | V2CoreAccountPersonCreatedEvent
  | V2CoreAccountPersonDeletedEvent
  | V2CoreAccountPersonUpdatedEvent
  | V2CoreAccountSignalsFraudulentWebsiteReadyEvent
  | V2CoreBatchJobBatchFailedEvent
  | V2CoreBatchJobCanceledEvent
  | V2CoreBatchJobCompletedEvent
  | V2CoreBatchJobCreatedEvent
  | V2CoreBatchJobReadyForUploadEvent
  | V2CoreBatchJobTimeoutEvent
  | V2CoreBatchJobUpdatedEvent
  | V2CoreBatchJobUploadTimeoutEvent
  | V2CoreBatchJobValidatingEvent
  | V2CoreBatchJobValidationFailedEvent
  | V2CoreClaimableSandboxClaimedEvent
  | V2CoreClaimableSandboxCreatedEvent
  | V2CoreClaimableSandboxExpiredEvent
  | V2CoreClaimableSandboxExpiringEvent
  | V2CoreClaimableSandboxSandboxDetailsOwnerAccountUpdatedEvent
  | V2CoreEventDestinationPingEvent
  | V2CoreHealthApiErrorFiringEvent
  | V2CoreHealthApiErrorResolvedEvent
  | V2CoreHealthApiLatencyFiringEvent
  | V2CoreHealthApiLatencyResolvedEvent
  | V2CoreHealthAuthorizationRateDropFiringEvent
  | V2CoreHealthAuthorizationRateDropResolvedEvent
  | V2CoreHealthEventGenerationFailureResolvedEvent
  | V2CoreHealthFraudRateIncreasedEvent
  | V2CoreHealthIssuingAuthorizationRequestErrorsFiringEvent
  | V2CoreHealthIssuingAuthorizationRequestErrorsResolvedEvent
  | V2CoreHealthIssuingAuthorizationRequestTimeoutFiringEvent
  | V2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEvent
  | V2CoreHealthPaymentMethodErrorFiringEvent
  | V2CoreHealthPaymentMethodErrorResolvedEvent
  | V2CoreHealthSepaDebitDelayedFiringEvent
  | V2CoreHealthSepaDebitDelayedResolvedEvent
  | V2CoreHealthTrafficVolumeDropFiringEvent
  | V2CoreHealthTrafficVolumeDropResolvedEvent
  | V2CoreHealthWebhookLatencyFiringEvent
  | V2CoreHealthWebhookLatencyResolvedEvent
  | V2IamApiKeyCreatedEvent
  | V2IamApiKeyDefaultSecretRevealedEvent
  | V2IamApiKeyExpiredEvent
  | V2IamApiKeyPermissionsUpdatedEvent
  | V2IamApiKeyRotatedEvent
  | V2IamApiKeyUpdatedEvent
  | V2IamStripeAccessGrantApprovedEvent
  | V2IamStripeAccessGrantCanceledEvent
  | V2IamStripeAccessGrantDeniedEvent
  | V2IamStripeAccessGrantRemovedEvent
  | V2IamStripeAccessGrantRequestedEvent
  | V2IamStripeAccessGrantUpdatedEvent
  | V2MoneyManagementAdjustmentCreatedEvent
  | V2MoneyManagementFinancialAccountCreatedEvent
  | V2MoneyManagementFinancialAccountUpdatedEvent
  | V2MoneyManagementFinancialAddressActivatedEvent
  | V2MoneyManagementFinancialAddressFailedEvent
  | V2MoneyManagementInboundTransferAvailableEvent
  | V2MoneyManagementInboundTransferBankDebitFailedEvent
  | V2MoneyManagementInboundTransferBankDebitProcessingEvent
  | V2MoneyManagementInboundTransferBankDebitQueuedEvent
  | V2MoneyManagementInboundTransferBankDebitReturnedEvent
  | V2MoneyManagementInboundTransferBankDebitSucceededEvent
  | V2MoneyManagementOutboundPaymentCanceledEvent
  | V2MoneyManagementOutboundPaymentCreatedEvent
  | V2MoneyManagementOutboundPaymentFailedEvent
  | V2MoneyManagementOutboundPaymentPostedEvent
  | V2MoneyManagementOutboundPaymentReturnedEvent
  | V2MoneyManagementOutboundPaymentUpdatedEvent
  | V2MoneyManagementOutboundTransferCanceledEvent
  | V2MoneyManagementOutboundTransferCreatedEvent
  | V2MoneyManagementOutboundTransferFailedEvent
  | V2MoneyManagementOutboundTransferPostedEvent
  | V2MoneyManagementOutboundTransferReturnedEvent
  | V2MoneyManagementOutboundTransferUpdatedEvent
  | V2MoneyManagementPayoutMethodCreatedEvent
  | V2MoneyManagementPayoutMethodUpdatedEvent
  | V2MoneyManagementReceivedCreditAvailableEvent
  | V2MoneyManagementReceivedCreditFailedEvent
  | V2MoneyManagementReceivedCreditReturnedEvent
  | V2MoneyManagementReceivedCreditSucceededEvent
  | V2MoneyManagementReceivedDebitCanceledEvent
  | V2MoneyManagementReceivedDebitFailedEvent
  | V2MoneyManagementReceivedDebitPendingEvent
  | V2MoneyManagementReceivedDebitSucceededEvent
  | V2MoneyManagementReceivedDebitUpdatedEvent
  | V2MoneyManagementRecipientVerificationCreatedEvent
  | V2MoneyManagementRecipientVerificationUpdatedEvent
  | V2MoneyManagementTransactionCreatedEvent
  | V2MoneyManagementTransactionUpdatedEvent
  | V2PaymentsOffSessionPaymentAttemptFailedEvent
  | V2PaymentsOffSessionPaymentAttemptStartedEvent
  | V2PaymentsOffSessionPaymentAuthorizationAttemptFailedEvent
  | V2PaymentsOffSessionPaymentAuthorizationAttemptStartedEvent
  | V2PaymentsOffSessionPaymentCanceledEvent
  | V2PaymentsOffSessionPaymentCreatedEvent
  | V2PaymentsOffSessionPaymentFailedEvent
  | V2PaymentsOffSessionPaymentRequiresCaptureEvent
  | V2PaymentsOffSessionPaymentSucceededEvent
  | V2PaymentsSettlementAllocationIntentCanceledEvent
  | V2PaymentsSettlementAllocationIntentCreatedEvent
  | V2PaymentsSettlementAllocationIntentErroredEvent
  | V2PaymentsSettlementAllocationIntentFundsNotReceivedEvent
  | V2PaymentsSettlementAllocationIntentMatchedEvent
  | V2PaymentsSettlementAllocationIntentNotFoundEvent
  | V2PaymentsSettlementAllocationIntentSettledEvent
  | V2PaymentsSettlementAllocationIntentSubmittedEvent
  | V2PaymentsSettlementAllocationIntentSplitCanceledEvent
  | V2PaymentsSettlementAllocationIntentSplitCreatedEvent
  | V2PaymentsSettlementAllocationIntentSplitSettledEvent
  | V2ReportingReportRunCreatedEvent
  | V2ReportingReportRunFailedEvent
  | V2ReportingReportRunSucceededEvent
  | V2ReportingReportRunUpdatedEvent
  | V2SignalsAccountSignalFraudulentMerchantReadyEvent;

export type EventNotification =
  | V1AccountSignalsIncludingDelinquencyCreatedEventNotification
  | V1BillingMeterErrorReportTriggeredEventNotification
  | V1BillingMeterNoMeterFoundEventNotification
  | V2BillingCadenceBilledEventNotification
  | V2BillingCadenceCanceledEventNotification
  | V2BillingCadenceCreatedEventNotification
  | V2BillingLicenseFeeCreatedEventNotification
  | V2BillingLicenseFeeUpdatedEventNotification
  | V2BillingLicenseFeeVersionCreatedEventNotification
  | V2BillingLicensedItemCreatedEventNotification
  | V2BillingLicensedItemUpdatedEventNotification
  | V2BillingMeteredItemCreatedEventNotification
  | V2BillingMeteredItemUpdatedEventNotification
  | V2BillingPricingPlanCreatedEventNotification
  | V2BillingPricingPlanUpdatedEventNotification
  | V2BillingPricingPlanComponentCreatedEventNotification
  | V2BillingPricingPlanComponentUpdatedEventNotification
  | V2BillingPricingPlanSubscriptionCollectionAwaitingCustomerActionEventNotification
  | V2BillingPricingPlanSubscriptionCollectionCurrentEventNotification
  | V2BillingPricingPlanSubscriptionCollectionPastDueEventNotification
  | V2BillingPricingPlanSubscriptionCollectionPausedEventNotification
  | V2BillingPricingPlanSubscriptionCollectionUnpaidEventNotification
  | V2BillingPricingPlanSubscriptionServicingActivatedEventNotification
  | V2BillingPricingPlanSubscriptionServicingCanceledEventNotification
  | V2BillingPricingPlanSubscriptionServicingPausedEventNotification
  | V2BillingPricingPlanVersionCreatedEventNotification
  | V2BillingRateCardCreatedEventNotification
  | V2BillingRateCardUpdatedEventNotification
  | V2BillingRateCardCustomPricingUnitOverageRateCreatedEventNotification
  | V2BillingRateCardRateCreatedEventNotification
  | V2BillingRateCardSubscriptionActivatedEventNotification
  | V2BillingRateCardSubscriptionCanceledEventNotification
  | V2BillingRateCardSubscriptionCollectionAwaitingCustomerActionEventNotification
  | V2BillingRateCardSubscriptionCollectionCurrentEventNotification
  | V2BillingRateCardSubscriptionCollectionPastDueEventNotification
  | V2BillingRateCardSubscriptionCollectionPausedEventNotification
  | V2BillingRateCardSubscriptionCollectionUnpaidEventNotification
  | V2BillingRateCardSubscriptionServicingActivatedEventNotification
  | V2BillingRateCardSubscriptionServicingCanceledEventNotification
  | V2BillingRateCardSubscriptionServicingPausedEventNotification
  | V2BillingRateCardVersionCreatedEventNotification
  | V2CoreAccountClosedEventNotification
  | V2CoreAccountCreatedEventNotification
  | V2CoreAccountUpdatedEventNotification
  | V2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEventNotification
  | V2CoreAccountIncludingConfigurationCardCreatorUpdatedEventNotification
  | V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEventNotification
  | V2CoreAccountIncludingConfigurationCustomerUpdatedEventNotification
  | V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEventNotification
  | V2CoreAccountIncludingConfigurationMerchantUpdatedEventNotification
  | V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEventNotification
  | V2CoreAccountIncludingConfigurationRecipientUpdatedEventNotification
  | V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEventNotification
  | V2CoreAccountIncludingConfigurationStorerUpdatedEventNotification
  | V2CoreAccountIncludingDefaultsUpdatedEventNotification
  | V2CoreAccountIncludingFutureRequirementsUpdatedEventNotification
  | V2CoreAccountIncludingIdentityUpdatedEventNotification
  | V2CoreAccountIncludingRequirementsUpdatedEventNotification
  | V2CoreAccountLinkReturnedEventNotification
  | V2CoreAccountPersonCreatedEventNotification
  | V2CoreAccountPersonDeletedEventNotification
  | V2CoreAccountPersonUpdatedEventNotification
  | V2CoreAccountSignalsFraudulentWebsiteReadyEventNotification
  | V2CoreBatchJobBatchFailedEventNotification
  | V2CoreBatchJobCanceledEventNotification
  | V2CoreBatchJobCompletedEventNotification
  | V2CoreBatchJobCreatedEventNotification
  | V2CoreBatchJobReadyForUploadEventNotification
  | V2CoreBatchJobTimeoutEventNotification
  | V2CoreBatchJobUpdatedEventNotification
  | V2CoreBatchJobUploadTimeoutEventNotification
  | V2CoreBatchJobValidatingEventNotification
  | V2CoreBatchJobValidationFailedEventNotification
  | V2CoreClaimableSandboxClaimedEventNotification
  | V2CoreClaimableSandboxCreatedEventNotification
  | V2CoreClaimableSandboxExpiredEventNotification
  | V2CoreClaimableSandboxExpiringEventNotification
  | V2CoreClaimableSandboxSandboxDetailsOwnerAccountUpdatedEventNotification
  | V2CoreEventDestinationPingEventNotification
  | V2CoreHealthApiErrorFiringEventNotification
  | V2CoreHealthApiErrorResolvedEventNotification
  | V2CoreHealthApiLatencyFiringEventNotification
  | V2CoreHealthApiLatencyResolvedEventNotification
  | V2CoreHealthAuthorizationRateDropFiringEventNotification
  | V2CoreHealthAuthorizationRateDropResolvedEventNotification
  | V2CoreHealthEventGenerationFailureResolvedEventNotification
  | V2CoreHealthFraudRateIncreasedEventNotification
  | V2CoreHealthIssuingAuthorizationRequestErrorsFiringEventNotification
  | V2CoreHealthIssuingAuthorizationRequestErrorsResolvedEventNotification
  | V2CoreHealthIssuingAuthorizationRequestTimeoutFiringEventNotification
  | V2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEventNotification
  | V2CoreHealthPaymentMethodErrorFiringEventNotification
  | V2CoreHealthPaymentMethodErrorResolvedEventNotification
  | V2CoreHealthSepaDebitDelayedFiringEventNotification
  | V2CoreHealthSepaDebitDelayedResolvedEventNotification
  | V2CoreHealthTrafficVolumeDropFiringEventNotification
  | V2CoreHealthTrafficVolumeDropResolvedEventNotification
  | V2CoreHealthWebhookLatencyFiringEventNotification
  | V2CoreHealthWebhookLatencyResolvedEventNotification
  | V2IamApiKeyCreatedEventNotification
  | V2IamApiKeyDefaultSecretRevealedEventNotification
  | V2IamApiKeyExpiredEventNotification
  | V2IamApiKeyPermissionsUpdatedEventNotification
  | V2IamApiKeyRotatedEventNotification
  | V2IamApiKeyUpdatedEventNotification
  | V2IamStripeAccessGrantApprovedEventNotification
  | V2IamStripeAccessGrantCanceledEventNotification
  | V2IamStripeAccessGrantDeniedEventNotification
  | V2IamStripeAccessGrantRemovedEventNotification
  | V2IamStripeAccessGrantRequestedEventNotification
  | V2IamStripeAccessGrantUpdatedEventNotification
  | V2MoneyManagementAdjustmentCreatedEventNotification
  | V2MoneyManagementFinancialAccountCreatedEventNotification
  | V2MoneyManagementFinancialAccountUpdatedEventNotification
  | V2MoneyManagementFinancialAddressActivatedEventNotification
  | V2MoneyManagementFinancialAddressFailedEventNotification
  | V2MoneyManagementInboundTransferAvailableEventNotification
  | V2MoneyManagementInboundTransferBankDebitFailedEventNotification
  | V2MoneyManagementInboundTransferBankDebitProcessingEventNotification
  | V2MoneyManagementInboundTransferBankDebitQueuedEventNotification
  | V2MoneyManagementInboundTransferBankDebitReturnedEventNotification
  | V2MoneyManagementInboundTransferBankDebitSucceededEventNotification
  | V2MoneyManagementOutboundPaymentCanceledEventNotification
  | V2MoneyManagementOutboundPaymentCreatedEventNotification
  | V2MoneyManagementOutboundPaymentFailedEventNotification
  | V2MoneyManagementOutboundPaymentPostedEventNotification
  | V2MoneyManagementOutboundPaymentReturnedEventNotification
  | V2MoneyManagementOutboundPaymentUpdatedEventNotification
  | V2MoneyManagementOutboundTransferCanceledEventNotification
  | V2MoneyManagementOutboundTransferCreatedEventNotification
  | V2MoneyManagementOutboundTransferFailedEventNotification
  | V2MoneyManagementOutboundTransferPostedEventNotification
  | V2MoneyManagementOutboundTransferReturnedEventNotification
  | V2MoneyManagementOutboundTransferUpdatedEventNotification
  | V2MoneyManagementPayoutMethodCreatedEventNotification
  | V2MoneyManagementPayoutMethodUpdatedEventNotification
  | V2MoneyManagementReceivedCreditAvailableEventNotification
  | V2MoneyManagementReceivedCreditFailedEventNotification
  | V2MoneyManagementReceivedCreditReturnedEventNotification
  | V2MoneyManagementReceivedCreditSucceededEventNotification
  | V2MoneyManagementReceivedDebitCanceledEventNotification
  | V2MoneyManagementReceivedDebitFailedEventNotification
  | V2MoneyManagementReceivedDebitPendingEventNotification
  | V2MoneyManagementReceivedDebitSucceededEventNotification
  | V2MoneyManagementReceivedDebitUpdatedEventNotification
  | V2MoneyManagementRecipientVerificationCreatedEventNotification
  | V2MoneyManagementRecipientVerificationUpdatedEventNotification
  | V2MoneyManagementTransactionCreatedEventNotification
  | V2MoneyManagementTransactionUpdatedEventNotification
  | V2PaymentsOffSessionPaymentAttemptFailedEventNotification
  | V2PaymentsOffSessionPaymentAttemptStartedEventNotification
  | V2PaymentsOffSessionPaymentAuthorizationAttemptFailedEventNotification
  | V2PaymentsOffSessionPaymentAuthorizationAttemptStartedEventNotification
  | V2PaymentsOffSessionPaymentCanceledEventNotification
  | V2PaymentsOffSessionPaymentCreatedEventNotification
  | V2PaymentsOffSessionPaymentFailedEventNotification
  | V2PaymentsOffSessionPaymentRequiresCaptureEventNotification
  | V2PaymentsOffSessionPaymentSucceededEventNotification
  | V2PaymentsSettlementAllocationIntentCanceledEventNotification
  | V2PaymentsSettlementAllocationIntentCreatedEventNotification
  | V2PaymentsSettlementAllocationIntentErroredEventNotification
  | V2PaymentsSettlementAllocationIntentFundsNotReceivedEventNotification
  | V2PaymentsSettlementAllocationIntentMatchedEventNotification
  | V2PaymentsSettlementAllocationIntentNotFoundEventNotification
  | V2PaymentsSettlementAllocationIntentSettledEventNotification
  | V2PaymentsSettlementAllocationIntentSubmittedEventNotification
  | V2PaymentsSettlementAllocationIntentSplitCanceledEventNotification
  | V2PaymentsSettlementAllocationIntentSplitCreatedEventNotification
  | V2PaymentsSettlementAllocationIntentSplitSettledEventNotification
  | V2ReportingReportRunCreatedEventNotification
  | V2ReportingReportRunFailedEventNotification
  | V2ReportingReportRunSucceededEventNotification
  | V2ReportingReportRunUpdatedEventNotification
  | V2SignalsAccountSignalFraudulentMerchantReadyEventNotification;

import {StripeContext} from '../../../StripeContext.js';

export namespace V2 {
  export namespace Core {
    export namespace Events {
      export interface RelatedObject {
        /**
         * Unique identifier for the object relevant to the event.
         */ id: string;
        /**
         * Type of the object relevant to the event.
         */ type: string;
        /**
         * URL to retrieve the resource.
         */ url: string;
      }
    }
  }
}

/**
 * Represents the shape of an EventNotification that the SDK didn't know about when it was generated.
 */

export interface UnknownEventNotification extends EventNotificationBase {
  /**
   * Object containing the reference to API resource relevant to the event.
   */ related_object: V2.Core.Events.RelatedObject | null;
  /**
   * Fetches the full object corresponding to the `related_object` field. Returns `null` if there is no `related_object`.
   */ fetchRelatedObject: () => Promise<unknown>;
  /**
   * Fetches the full Event object corresponding to this notification.
   */ fetchEvent: () => Promise<EventBase>;
}

export interface EventNotificationBase extends Omit<EventBase, 'context'> {
  context?: StripeContext;
}

/**
 * Occurs when a delinquency signal is created for an account.
 */
export interface V1AccountSignalsIncludingDelinquencyCreatedEvent
  extends EventBase {
  type: 'v1.account_signals[delinquency].created';
  // Retrieves data specific to this event.
  data: V1AccountSignalsIncludingDelinquencyCreatedEvent.Data;
}
export interface V1AccountSignalsIncludingDelinquencyCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.account_signals[delinquency].created';
  fetchEvent(): Promise<V1AccountSignalsIncludingDelinquencyCreatedEvent>;
}

export namespace V1AccountSignalsIncludingDelinquencyCreatedEvent {
  export interface Data {
    /**
     * The account for which the signals belong to.
     */
    account: string;

    /**
     * Time at which the signal was evaluated.
     */
    evaluated_at: string;

    /**
     * Array of objects representing individual factors that contributed to the calculated probability of delinquency.
     */
    indicators: Array<Data.Indicator>;

    /**
     * The probability of delinquency. Can be between 0.00 and 100.00.
     */
    probability?: Decimal;

    /**
     * Categorical assessment of the delinquency risk based on probability.
     */
    risk_level: Data.RiskLevel;

    /**
     * Unique identifier for the delinquency signal.
     */
    signal_id: string;
  }

  export namespace Data {
    export interface Indicator {
      /**
       * A brief explanation of how this indicator contributed to the delinquency probability.
       */
      description: string;

      /**
       * The effect this indicator had on the overall risk level.
       */
      impact: Indicator.Impact;

      /**
       * The name of the specific indicator used in the risk assessment.
       */
      indicator: Indicator.Indicator;
    }

    export type RiskLevel =
      | 'elevated'
      | 'highest'
      | 'low'
      | 'normal'
      | 'not_assessed'
      | 'unknown';

    export namespace Indicator {
      export type Impact =
        | 'decrease'
        | 'neutral'
        | 'slight_increase'
        | 'strong_increase';

      export type Indicator =
        | 'account_balance'
        | 'aov'
        | 'charge_concentration'
        | 'disputes'
        | 'dispute_window'
        | 'duplicates'
        | 'exposure'
        | 'firmographic'
        | 'lifetime_metrics'
        | 'payment_processing'
        | 'payment_volume'
        | 'payouts'
        | 'refunds'
        | 'tenure'
        | 'transfers';
    }
  }
}

/**
 * Occurs when a Meter has invalid async usage events.
 */
export interface V1BillingMeterErrorReportTriggeredEvent extends EventBase {
  type: 'v1.billing.meter.error_report_triggered';
  // Retrieves data specific to this event.
  data: V1BillingMeterErrorReportTriggeredEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Billing.Meter>;
}
export interface V1BillingMeterErrorReportTriggeredEventNotification
  extends EventNotificationBase {
  type: 'v1.billing.meter.error_report_triggered';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Billing.Meter>;
  fetchEvent(): Promise<V1BillingMeterErrorReportTriggeredEvent>;
}

export namespace V1BillingMeterErrorReportTriggeredEvent {
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

  export namespace Data {
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

    export namespace Reason {
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

      export namespace ErrorType {
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

        export namespace SampleError {
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
export interface V1BillingMeterNoMeterFoundEvent extends EventBase {
  type: 'v1.billing.meter.no_meter_found';
  // Retrieves data specific to this event.
  data: V1BillingMeterNoMeterFoundEvent.Data;
}
export interface V1BillingMeterNoMeterFoundEventNotification
  extends EventNotificationBase {
  type: 'v1.billing.meter.no_meter_found';
  fetchEvent(): Promise<V1BillingMeterNoMeterFoundEvent>;
}

export namespace V1BillingMeterNoMeterFoundEvent {
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

  export namespace Data {
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

    export namespace Reason {
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

      export namespace ErrorType {
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

        export namespace SampleError {
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
export interface V2BillingCadenceBilledEvent extends EventBase {
  type: 'v2.billing.cadence.billed';
  // Retrieves data specific to this event.
  data: V2BillingCadenceBilledEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.Cadence>;
}
export interface V2BillingCadenceBilledEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.cadence.billed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.Cadence>;
  fetchEvent(): Promise<V2BillingCadenceBilledEvent>;
}

export namespace V2BillingCadenceBilledEvent {
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
export interface V2BillingCadenceCanceledEvent extends EventBase {
  type: 'v2.billing.cadence.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.Cadence>;
}
export interface V2BillingCadenceCanceledEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.cadence.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.Cadence>;
  fetchEvent(): Promise<V2BillingCadenceCanceledEvent>;
}

/**
 * Occurs when a billing Cadence is created.
 */
export interface V2BillingCadenceCreatedEvent extends EventBase {
  type: 'v2.billing.cadence.created';
  // Retrieves data specific to this event.
  data: V2BillingCadenceCreatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.Cadence>;
}
export interface V2BillingCadenceCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.cadence.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.Cadence>;
  fetchEvent(): Promise<V2BillingCadenceCreatedEvent>;
}

export namespace V2BillingCadenceCreatedEvent {
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
export interface V2BillingLicenseFeeCreatedEvent extends EventBase {
  type: 'v2.billing.license_fee.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.LicenseFee>;
}
export interface V2BillingLicenseFeeCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.license_fee.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.LicenseFee>;
  fetchEvent(): Promise<V2BillingLicenseFeeCreatedEvent>;
}

/**
 * Occurs when a LicenseFee is updated.
 */
export interface V2BillingLicenseFeeUpdatedEvent extends EventBase {
  type: 'v2.billing.license_fee.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.LicenseFee>;
}
export interface V2BillingLicenseFeeUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.license_fee.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.LicenseFee>;
  fetchEvent(): Promise<V2BillingLicenseFeeUpdatedEvent>;
}

/**
 * Occurs when a LicenseFeeVersion is created.
 */
export interface V2BillingLicenseFeeVersionCreatedEvent extends EventBase {
  type: 'v2.billing.license_fee_version.created';
  // Retrieves data specific to this event.
  data: V2BillingLicenseFeeVersionCreatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.LicenseFeeVersion>;
}
export interface V2BillingLicenseFeeVersionCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.license_fee_version.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.LicenseFeeVersion>;
  fetchEvent(): Promise<V2BillingLicenseFeeVersionCreatedEvent>;
}

export namespace V2BillingLicenseFeeVersionCreatedEvent {
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
export interface V2BillingLicensedItemCreatedEvent extends EventBase {
  type: 'v2.billing.licensed_item.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.LicensedItem>;
}
export interface V2BillingLicensedItemCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.licensed_item.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.LicensedItem>;
  fetchEvent(): Promise<V2BillingLicensedItemCreatedEvent>;
}

/**
 * Occurs when a LicensedItem is updated.
 */
export interface V2BillingLicensedItemUpdatedEvent extends EventBase {
  type: 'v2.billing.licensed_item.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.LicensedItem>;
}
export interface V2BillingLicensedItemUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.licensed_item.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.LicensedItem>;
  fetchEvent(): Promise<V2BillingLicensedItemUpdatedEvent>;
}

/**
 * Occurs when a MeteredItem is created.
 */
export interface V2BillingMeteredItemCreatedEvent extends EventBase {
  type: 'v2.billing.metered_item.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.MeteredItem>;
}
export interface V2BillingMeteredItemCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.metered_item.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.MeteredItem>;
  fetchEvent(): Promise<V2BillingMeteredItemCreatedEvent>;
}

/**
 * Occurs when a MeteredItem is updated.
 */
export interface V2BillingMeteredItemUpdatedEvent extends EventBase {
  type: 'v2.billing.metered_item.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.MeteredItem>;
}
export interface V2BillingMeteredItemUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.metered_item.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.MeteredItem>;
  fetchEvent(): Promise<V2BillingMeteredItemUpdatedEvent>;
}

/**
 * Occurs when a PricingPlan is created.
 */
export interface V2BillingPricingPlanCreatedEvent extends EventBase {
  type: 'v2.billing.pricing_plan.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlan>;
}
export interface V2BillingPricingPlanCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.pricing_plan.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlan>;
  fetchEvent(): Promise<V2BillingPricingPlanCreatedEvent>;
}

/**
 * Occurs when a PricingPlan is updated.
 */
export interface V2BillingPricingPlanUpdatedEvent extends EventBase {
  type: 'v2.billing.pricing_plan.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlan>;
}
export interface V2BillingPricingPlanUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.pricing_plan.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlan>;
  fetchEvent(): Promise<V2BillingPricingPlanUpdatedEvent>;
}

/**
 * Occurs when a PricingPlanComponent is created.
 */
export interface V2BillingPricingPlanComponentCreatedEvent extends EventBase {
  type: 'v2.billing.pricing_plan_component.created';
  // Retrieves data specific to this event.
  data: V2BillingPricingPlanComponentCreatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanComponent>;
}
export interface V2BillingPricingPlanComponentCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.pricing_plan_component.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanComponent>;
  fetchEvent(): Promise<V2BillingPricingPlanComponentCreatedEvent>;
}

export namespace V2BillingPricingPlanComponentCreatedEvent {
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
export interface V2BillingPricingPlanComponentUpdatedEvent extends EventBase {
  type: 'v2.billing.pricing_plan_component.updated';
  // Retrieves data specific to this event.
  data: V2BillingPricingPlanComponentUpdatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanComponent>;
}
export interface V2BillingPricingPlanComponentUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.pricing_plan_component.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanComponent>;
  fetchEvent(): Promise<V2BillingPricingPlanComponentUpdatedEvent>;
}

export namespace V2BillingPricingPlanComponentUpdatedEvent {
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
  extends EventBase {
  type: 'v2.billing.pricing_plan_subscription.collection_awaiting_customer_action';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanSubscription>;
}
export interface V2BillingPricingPlanSubscriptionCollectionAwaitingCustomerActionEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.pricing_plan_subscription.collection_awaiting_customer_action';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanSubscription>;
  fetchEvent(): Promise<
    V2BillingPricingPlanSubscriptionCollectionAwaitingCustomerActionEvent
  >;
}

/**
 * Occurs when a PricingPlanSubscription's collection is current.
 */
export interface V2BillingPricingPlanSubscriptionCollectionCurrentEvent
  extends EventBase {
  type: 'v2.billing.pricing_plan_subscription.collection_current';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanSubscription>;
}
export interface V2BillingPricingPlanSubscriptionCollectionCurrentEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.pricing_plan_subscription.collection_current';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanSubscription>;
  fetchEvent(): Promise<V2BillingPricingPlanSubscriptionCollectionCurrentEvent>;
}

/**
 * Occurs when a PricingPlanSubscription's collection is past due.
 */
export interface V2BillingPricingPlanSubscriptionCollectionPastDueEvent
  extends EventBase {
  type: 'v2.billing.pricing_plan_subscription.collection_past_due';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanSubscription>;
}
export interface V2BillingPricingPlanSubscriptionCollectionPastDueEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.pricing_plan_subscription.collection_past_due';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanSubscription>;
  fetchEvent(): Promise<V2BillingPricingPlanSubscriptionCollectionPastDueEvent>;
}

/**
 * Occurs when a PricingPlanSubscription's collection is paused.
 */
export interface V2BillingPricingPlanSubscriptionCollectionPausedEvent
  extends EventBase {
  type: 'v2.billing.pricing_plan_subscription.collection_paused';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanSubscription>;
}
export interface V2BillingPricingPlanSubscriptionCollectionPausedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.pricing_plan_subscription.collection_paused';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanSubscription>;
  fetchEvent(): Promise<V2BillingPricingPlanSubscriptionCollectionPausedEvent>;
}

/**
 * Occurs when a PricingPlanSubscription's collection is unpaid.
 */
export interface V2BillingPricingPlanSubscriptionCollectionUnpaidEvent
  extends EventBase {
  type: 'v2.billing.pricing_plan_subscription.collection_unpaid';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanSubscription>;
}
export interface V2BillingPricingPlanSubscriptionCollectionUnpaidEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.pricing_plan_subscription.collection_unpaid';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanSubscription>;
  fetchEvent(): Promise<V2BillingPricingPlanSubscriptionCollectionUnpaidEvent>;
}

/**
 * Occurs when PricingPlanSubscription servicing is activated.
 */
export interface V2BillingPricingPlanSubscriptionServicingActivatedEvent
  extends EventBase {
  type: 'v2.billing.pricing_plan_subscription.servicing_activated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanSubscription>;
}
export interface V2BillingPricingPlanSubscriptionServicingActivatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.pricing_plan_subscription.servicing_activated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanSubscription>;
  fetchEvent(): Promise<
    V2BillingPricingPlanSubscriptionServicingActivatedEvent
  >;
}

/**
 * Occurs when PricingPlanSubscription servicing is canceled.
 */
export interface V2BillingPricingPlanSubscriptionServicingCanceledEvent
  extends EventBase {
  type: 'v2.billing.pricing_plan_subscription.servicing_canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanSubscription>;
}
export interface V2BillingPricingPlanSubscriptionServicingCanceledEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.pricing_plan_subscription.servicing_canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanSubscription>;
  fetchEvent(): Promise<V2BillingPricingPlanSubscriptionServicingCanceledEvent>;
}

/**
 * Occurs when PricingPlanSubscription servicing is paused.
 */
export interface V2BillingPricingPlanSubscriptionServicingPausedEvent
  extends EventBase {
  type: 'v2.billing.pricing_plan_subscription.servicing_paused';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanSubscription>;
}
export interface V2BillingPricingPlanSubscriptionServicingPausedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.pricing_plan_subscription.servicing_paused';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanSubscription>;
  fetchEvent(): Promise<V2BillingPricingPlanSubscriptionServicingPausedEvent>;
}

/**
 * Occurs when a PricingPlanVersion is created.
 */
export interface V2BillingPricingPlanVersionCreatedEvent extends EventBase {
  type: 'v2.billing.pricing_plan_version.created';
  // Retrieves data specific to this event.
  data: V2BillingPricingPlanVersionCreatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanVersion>;
}
export interface V2BillingPricingPlanVersionCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.pricing_plan_version.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanVersion>;
  fetchEvent(): Promise<V2BillingPricingPlanVersionCreatedEvent>;
}

export namespace V2BillingPricingPlanVersionCreatedEvent {
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
export interface V2BillingRateCardCreatedEvent extends EventBase {
  type: 'v2.billing.rate_card.created';
  // Retrieves data specific to this event.
  data: V2BillingRateCardCreatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCard>;
}
export interface V2BillingRateCardCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.rate_card.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCard>;
  fetchEvent(): Promise<V2BillingRateCardCreatedEvent>;
}

export namespace V2BillingRateCardCreatedEvent {
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
export interface V2BillingRateCardUpdatedEvent extends EventBase {
  type: 'v2.billing.rate_card.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCard>;
}
export interface V2BillingRateCardUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.rate_card.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCard>;
  fetchEvent(): Promise<V2BillingRateCardUpdatedEvent>;
}

/**
 * Occurs when a RateCardCustomPricingUnitOverageRate is created.
 */
export interface V2BillingRateCardCustomPricingUnitOverageRateCreatedEvent
  extends EventBase {
  type: 'v2.billing.rate_card_custom_pricing_unit_overage_rate.created';
  // Retrieves data specific to this event.
  data: V2BillingRateCardCustomPricingUnitOverageRateCreatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardCustomPricingUnitOverageRate>;
}
export interface V2BillingRateCardCustomPricingUnitOverageRateCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.rate_card_custom_pricing_unit_overage_rate.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardCustomPricingUnitOverageRate>;
  fetchEvent(): Promise<
    V2BillingRateCardCustomPricingUnitOverageRateCreatedEvent
  >;
}

export namespace V2BillingRateCardCustomPricingUnitOverageRateCreatedEvent {
  export interface Data {
    /**
     * Timestamp of when the object was created.
     */
    created: string;

    /**
     * The ID of the custom pricing unit this overage rate applies to.
     */
    custom_pricing_unit: string;

    /**
     * The ID of the RateCard which this custom pricing unit overage rate belongs to.
     */
    rate_card: string;

    /**
     * The ID of the RateCard Version when the custom pricing unit overage rate was created.
     */
    rate_card_version: string;
  }
}

/**
 * Occurs when a RateCardRate is created.
 */
export interface V2BillingRateCardRateCreatedEvent extends EventBase {
  type: 'v2.billing.rate_card_rate.created';
  // Retrieves data specific to this event.
  data: V2BillingRateCardRateCreatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardRate>;
}
export interface V2BillingRateCardRateCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.rate_card_rate.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardRate>;
  fetchEvent(): Promise<V2BillingRateCardRateCreatedEvent>;
}

export namespace V2BillingRateCardRateCreatedEvent {
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
export interface V2BillingRateCardSubscriptionActivatedEvent extends EventBase {
  type: 'v2.billing.rate_card_subscription.activated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
}
export interface V2BillingRateCardSubscriptionActivatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.rate_card_subscription.activated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
  fetchEvent(): Promise<V2BillingRateCardSubscriptionActivatedEvent>;
}

/**
 * Occurs when a RateCardSubscription is canceled.
 */
export interface V2BillingRateCardSubscriptionCanceledEvent extends EventBase {
  type: 'v2.billing.rate_card_subscription.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
}
export interface V2BillingRateCardSubscriptionCanceledEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.rate_card_subscription.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
  fetchEvent(): Promise<V2BillingRateCardSubscriptionCanceledEvent>;
}

/**
 * Occurs when a RateCardSubscription's collection is awaiting customer action.
 */
export interface V2BillingRateCardSubscriptionCollectionAwaitingCustomerActionEvent
  extends EventBase {
  type: 'v2.billing.rate_card_subscription.collection_awaiting_customer_action';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
}
export interface V2BillingRateCardSubscriptionCollectionAwaitingCustomerActionEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.rate_card_subscription.collection_awaiting_customer_action';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
  fetchEvent(): Promise<
    V2BillingRateCardSubscriptionCollectionAwaitingCustomerActionEvent
  >;
}

/**
 * Occurs when a RateCardSubscription's collection is current.
 */
export interface V2BillingRateCardSubscriptionCollectionCurrentEvent
  extends EventBase {
  type: 'v2.billing.rate_card_subscription.collection_current';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
}
export interface V2BillingRateCardSubscriptionCollectionCurrentEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.rate_card_subscription.collection_current';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
  fetchEvent(): Promise<V2BillingRateCardSubscriptionCollectionCurrentEvent>;
}

/**
 * Occurs when a RateCardSubscription's collection is past due.
 */
export interface V2BillingRateCardSubscriptionCollectionPastDueEvent
  extends EventBase {
  type: 'v2.billing.rate_card_subscription.collection_past_due';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
}
export interface V2BillingRateCardSubscriptionCollectionPastDueEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.rate_card_subscription.collection_past_due';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
  fetchEvent(): Promise<V2BillingRateCardSubscriptionCollectionPastDueEvent>;
}

/**
 * Occurs when a RateCardSubscription's collection is paused.
 */
export interface V2BillingRateCardSubscriptionCollectionPausedEvent
  extends EventBase {
  type: 'v2.billing.rate_card_subscription.collection_paused';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
}
export interface V2BillingRateCardSubscriptionCollectionPausedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.rate_card_subscription.collection_paused';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
  fetchEvent(): Promise<V2BillingRateCardSubscriptionCollectionPausedEvent>;
}

/**
 * Occurs when a RateCardSubscription's collection is unpaid.
 */
export interface V2BillingRateCardSubscriptionCollectionUnpaidEvent
  extends EventBase {
  type: 'v2.billing.rate_card_subscription.collection_unpaid';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
}
export interface V2BillingRateCardSubscriptionCollectionUnpaidEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.rate_card_subscription.collection_unpaid';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
  fetchEvent(): Promise<V2BillingRateCardSubscriptionCollectionUnpaidEvent>;
}

/**
 * Occurs when RateCardSubscription servicing is activated.
 */
export interface V2BillingRateCardSubscriptionServicingActivatedEvent
  extends EventBase {
  type: 'v2.billing.rate_card_subscription.servicing_activated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
}
export interface V2BillingRateCardSubscriptionServicingActivatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.rate_card_subscription.servicing_activated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
  fetchEvent(): Promise<V2BillingRateCardSubscriptionServicingActivatedEvent>;
}

/**
 * Occurs when RateCardSubscription servicing is canceled.
 */
export interface V2BillingRateCardSubscriptionServicingCanceledEvent
  extends EventBase {
  type: 'v2.billing.rate_card_subscription.servicing_canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
}
export interface V2BillingRateCardSubscriptionServicingCanceledEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.rate_card_subscription.servicing_canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
  fetchEvent(): Promise<V2BillingRateCardSubscriptionServicingCanceledEvent>;
}

/**
 * Occurs when RateCardSubscription servicing is paused.
 */
export interface V2BillingRateCardSubscriptionServicingPausedEvent
  extends EventBase {
  type: 'v2.billing.rate_card_subscription.servicing_paused';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
}
export interface V2BillingRateCardSubscriptionServicingPausedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.rate_card_subscription.servicing_paused';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
  fetchEvent(): Promise<V2BillingRateCardSubscriptionServicingPausedEvent>;
}

/**
 * Occurs when a RateCardVersion is created.
 */
export interface V2BillingRateCardVersionCreatedEvent extends EventBase {
  type: 'v2.billing.rate_card_version.created';
  // Retrieves data specific to this event.
  data: V2BillingRateCardVersionCreatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardVersion>;
}
export interface V2BillingRateCardVersionCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.rate_card_version.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardVersion>;
  fetchEvent(): Promise<V2BillingRateCardVersionCreatedEvent>;
}

export namespace V2BillingRateCardVersionCreatedEvent {
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
export interface V2CoreAccountClosedEvent extends EventBase {
  type: 'v2.core.account.closed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountClosedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account.closed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<V2CoreAccountClosedEvent>;
}

/**
 * Occurs when an Account is created.
 */
export interface V2CoreAccountCreatedEvent extends EventBase {
  type: 'v2.core.account.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<V2CoreAccountCreatedEvent>;
}

/**
 * Occurs when an Account is updated.
 */
export interface V2CoreAccountUpdatedEvent extends EventBase {
  type: 'v2.core.account.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<V2CoreAccountUpdatedEvent>;
}

/**
 * Occurs when the status of an Account's card creator configuration capability is updated.
 */
export interface V2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEvent
  extends EventBase {
  type: 'v2.core.account[configuration.card_creator].capability_status_updated';
  // Retrieves data specific to this event.
  data: V2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account[configuration.card_creator].capability_status_updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<
    V2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEvent
  >;
}

export namespace V2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEvent {
  export interface Data {
    /**
     * Open Enum. The capability which had its status updated.
     */
    updated_capability: Data.UpdatedCapability;
  }

  export namespace Data {
    export type UpdatedCapability =
      | 'commercial.celtic.charge_card'
      | 'commercial.celtic.spend_card'
      | 'commercial.cross_river_bank.charge_card'
      | 'commercial.cross_river_bank.prepaid_card'
      | 'commercial.cross_river_bank.spend_card'
      | 'commercial.fifth_third.charge_card'
      | 'commercial.lead.prepaid_card'
      | 'commercial.stripe.charge_card'
      | 'commercial.stripe.prepaid_card'
      | 'consumer.celtic.revolving_credit_card'
      | 'consumer.cross_river_bank.prepaid_card'
      | 'consumer.lead.prepaid_card';
  }
}

/**
 * Occurs when a Card Creator's configuration is updated.
 */
export interface V2CoreAccountIncludingConfigurationCardCreatorUpdatedEvent
  extends EventBase {
  type: 'v2.core.account[configuration.card_creator].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingConfigurationCardCreatorUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account[configuration.card_creator].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<
    V2CoreAccountIncludingConfigurationCardCreatorUpdatedEvent
  >;
}

/**
 * Occurs when the status of an Account's customer configuration capability is updated.
 */
export interface V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent
  extends EventBase {
  type: 'v2.core.account[configuration.customer].capability_status_updated';
  // Retrieves data specific to this event.
  data: V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account[configuration.customer].capability_status_updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<
    V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent
  >;
}

export namespace V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent {
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
  extends EventBase {
  type: 'v2.core.account[configuration.customer].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingConfigurationCustomerUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account[configuration.customer].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<
    V2CoreAccountIncludingConfigurationCustomerUpdatedEvent
  >;
}

/**
 * Occurs when the status of an Account's merchant configuration capability is updated.
 */
export interface V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent
  extends EventBase {
  type: 'v2.core.account[configuration.merchant].capability_status_updated';
  // Retrieves data specific to this event.
  data: V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account[configuration.merchant].capability_status_updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<
    V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent
  >;
}

export namespace V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent {
  export interface Data {
    /**
     * Open Enum. The capability which had its status updated.
     */
    updated_capability: Data.UpdatedCapability;
  }

  export namespace Data {
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
  extends EventBase {
  type: 'v2.core.account[configuration.merchant].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingConfigurationMerchantUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account[configuration.merchant].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<
    V2CoreAccountIncludingConfigurationMerchantUpdatedEvent
  >;
}

/**
 * Occurs when the status of an Account's recipient configuration capability is updated.
 */
export interface V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent
  extends EventBase {
  type: 'v2.core.account[configuration.recipient].capability_status_updated';
  // Retrieves data specific to this event.
  data: V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account[configuration.recipient].capability_status_updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<
    V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent
  >;
}

export namespace V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent {
  export interface Data {
    /**
     * Open Enum. The capability which had its status updated.
     */
    updated_capability: Data.UpdatedCapability;
  }

  export namespace Data {
    export type UpdatedCapability =
      | 'bank_accounts.instant'
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
  extends EventBase {
  type: 'v2.core.account[configuration.recipient].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingConfigurationRecipientUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account[configuration.recipient].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<
    V2CoreAccountIncludingConfigurationRecipientUpdatedEvent
  >;
}

/**
 * Occurs when the status of an Account's storer configuration capability is updated.
 */
export interface V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEvent
  extends EventBase {
  type: 'v2.core.account[configuration.storer].capability_status_updated';
  // Retrieves data specific to this event.
  data: V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account[configuration.storer].capability_status_updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<
    V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEvent
  >;
}

export namespace V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEvent {
  export interface Data {
    /**
     * Open Enum. The capability which had its status updated.
     */
    updated_capability: Data.UpdatedCapability;
  }

  export namespace Data {
    export type UpdatedCapability =
      | 'consumer.holds_currencies.usd'
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
  extends EventBase {
  type: 'v2.core.account[configuration.storer].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingConfigurationStorerUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account[configuration.storer].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<V2CoreAccountIncludingConfigurationStorerUpdatedEvent>;
}

/**
 * This event occurs when account defaults are created or updated.
 */
export interface V2CoreAccountIncludingDefaultsUpdatedEvent extends EventBase {
  type: 'v2.core.account[defaults].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingDefaultsUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account[defaults].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<V2CoreAccountIncludingDefaultsUpdatedEvent>;
}

/**
 * Occurs when an Account's future requirements are updated.
 */
export interface V2CoreAccountIncludingFutureRequirementsUpdatedEvent
  extends EventBase {
  type: 'v2.core.account[future_requirements].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingFutureRequirementsUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account[future_requirements].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<V2CoreAccountIncludingFutureRequirementsUpdatedEvent>;
}

/**
 * Occurs when an Identity is updated.
 */
export interface V2CoreAccountIncludingIdentityUpdatedEvent extends EventBase {
  type: 'v2.core.account[identity].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingIdentityUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account[identity].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<V2CoreAccountIncludingIdentityUpdatedEvent>;
}

/**
 * Occurs when an Account's requirements are updated.
 */
export interface V2CoreAccountIncludingRequirementsUpdatedEvent
  extends EventBase {
  type: 'v2.core.account[requirements].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingRequirementsUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account[requirements].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<V2CoreAccountIncludingRequirementsUpdatedEvent>;
}

/**
 * Occurs when the generated AccountLink is completed.
 */
export interface V2CoreAccountLinkReturnedEvent extends EventBase {
  type: 'v2.core.account_link.returned';
  // Retrieves data specific to this event.
  data: V2CoreAccountLinkReturnedEvent.Data;
}
export interface V2CoreAccountLinkReturnedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account_link.returned';
  fetchEvent(): Promise<V2CoreAccountLinkReturnedEvent>;
}

export namespace V2CoreAccountLinkReturnedEvent {
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

  export namespace Data {
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
export interface V2CoreAccountPersonCreatedEvent extends EventBase {
  type: 'v2.core.account_person.created';
  // Retrieves data specific to this event.
  data: V2CoreAccountPersonCreatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.AccountPerson>;
}
export interface V2CoreAccountPersonCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account_person.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.AccountPerson>;
  fetchEvent(): Promise<V2CoreAccountPersonCreatedEvent>;
}

export namespace V2CoreAccountPersonCreatedEvent {
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
export interface V2CoreAccountPersonDeletedEvent extends EventBase {
  type: 'v2.core.account_person.deleted';
  // Retrieves data specific to this event.
  data: V2CoreAccountPersonDeletedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.AccountPerson>;
}
export interface V2CoreAccountPersonDeletedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account_person.deleted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.AccountPerson>;
  fetchEvent(): Promise<V2CoreAccountPersonDeletedEvent>;
}

export namespace V2CoreAccountPersonDeletedEvent {
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
export interface V2CoreAccountPersonUpdatedEvent extends EventBase {
  type: 'v2.core.account_person.updated';
  // Retrieves data specific to this event.
  data: V2CoreAccountPersonUpdatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.AccountPerson>;
}
export interface V2CoreAccountPersonUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account_person.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.AccountPerson>;
  fetchEvent(): Promise<V2CoreAccountPersonUpdatedEvent>;
}

export namespace V2CoreAccountPersonUpdatedEvent {
  export interface Data {
    /**
     * The ID of the v2 account.
     */
    account_id: string;
  }
}

/**
 * Occurs when a Fraudulent Website signal is ready for an account.
 */
export interface V2CoreAccountSignalsFraudulentWebsiteReadyEvent
  extends EventBase {
  type: 'v2.core.account_signals.fraudulent_website_ready';
  // Retrieves data specific to this event.
  data: V2CoreAccountSignalsFraudulentWebsiteReadyEvent.Data;
}
export interface V2CoreAccountSignalsFraudulentWebsiteReadyEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account_signals.fraudulent_website_ready';
  fetchEvent(): Promise<V2CoreAccountSignalsFraudulentWebsiteReadyEvent>;
}

export namespace V2CoreAccountSignalsFraudulentWebsiteReadyEvent {
  export interface Data {
    /**
     * The account for which the signals belong to. Empty if this was an entityless request.
     */
    account?: string;

    /**
     * Human readable description of concerns found in the website, produced by LLM. If risk_level is unknown, this explains why evaluation could not run.
     */
    details: string;

    /**
     * Time at which the signal was evaluated.
     */
    evaluated_at: string;

    /**
     * Unique identifier for the fraudulent website evaluation request.
     */
    evaluation_id: string;

    /**
     * Risk level for the fraudulent website signal. If evaluation could not run (like invalid website), we return unknown.
     */
    risk_level: Data.RiskLevel;

    /**
     * Unique identifier for the fraudulent website signal.
     */
    signal_id: string;
  }

  export namespace Data {
    export type RiskLevel =
      | 'elevated'
      | 'highest'
      | 'low'
      | 'normal'
      | 'not_assessed'
      | 'unknown';
  }
}

/**
 * Occurs when a batch job fails.
 */
export interface V2CoreBatchJobBatchFailedEvent extends EventBase {
  type: 'v2.core.batch_job.batch_failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
}
export interface V2CoreBatchJobBatchFailedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.batch_job.batch_failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
  fetchEvent(): Promise<V2CoreBatchJobBatchFailedEvent>;
}

/**
 * Occurs when a batch job is canceled.
 */
export interface V2CoreBatchJobCanceledEvent extends EventBase {
  type: 'v2.core.batch_job.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
}
export interface V2CoreBatchJobCanceledEventNotification
  extends EventNotificationBase {
  type: 'v2.core.batch_job.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
  fetchEvent(): Promise<V2CoreBatchJobCanceledEvent>;
}

/**
 * Occurs on completion of a batch job.
 */
export interface V2CoreBatchJobCompletedEvent extends EventBase {
  type: 'v2.core.batch_job.completed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
}
export interface V2CoreBatchJobCompletedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.batch_job.completed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
  fetchEvent(): Promise<V2CoreBatchJobCompletedEvent>;
}

/**
 * Occurs on creation of a batch job.
 */
export interface V2CoreBatchJobCreatedEvent extends EventBase {
  type: 'v2.core.batch_job.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
}
export interface V2CoreBatchJobCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.batch_job.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
  fetchEvent(): Promise<V2CoreBatchJobCreatedEvent>;
}

/**
 * Occurs on submission of a batch job.
 */
export interface V2CoreBatchJobReadyForUploadEvent extends EventBase {
  type: 'v2.core.batch_job.ready_for_upload';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
}
export interface V2CoreBatchJobReadyForUploadEventNotification
  extends EventNotificationBase {
  type: 'v2.core.batch_job.ready_for_upload';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
  fetchEvent(): Promise<V2CoreBatchJobReadyForUploadEvent>;
}

/**
 * Occurs when a batch job times out.
 */
export interface V2CoreBatchJobTimeoutEvent extends EventBase {
  type: 'v2.core.batch_job.timeout';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
}
export interface V2CoreBatchJobTimeoutEventNotification
  extends EventNotificationBase {
  type: 'v2.core.batch_job.timeout';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
  fetchEvent(): Promise<V2CoreBatchJobTimeoutEvent>;
}

/**
 * Occurs when a batch job is updated.
 */
export interface V2CoreBatchJobUpdatedEvent extends EventBase {
  type: 'v2.core.batch_job.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
}
export interface V2CoreBatchJobUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.batch_job.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
  fetchEvent(): Promise<V2CoreBatchJobUpdatedEvent>;
}

/**
 * Occurs when merchant fails to upload a file in time.
 */
export interface V2CoreBatchJobUploadTimeoutEvent extends EventBase {
  type: 'v2.core.batch_job.upload_timeout';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
}
export interface V2CoreBatchJobUploadTimeoutEventNotification
  extends EventNotificationBase {
  type: 'v2.core.batch_job.upload_timeout';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
  fetchEvent(): Promise<V2CoreBatchJobUploadTimeoutEvent>;
}

/**
 * Occurs when a batch job proceeds to the validation stage.
 */
export interface V2CoreBatchJobValidatingEvent extends EventBase {
  type: 'v2.core.batch_job.validating';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
}
export interface V2CoreBatchJobValidatingEventNotification
  extends EventNotificationBase {
  type: 'v2.core.batch_job.validating';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
  fetchEvent(): Promise<V2CoreBatchJobValidatingEvent>;
}

/**
 * Occurs when a batch job fails on validation.
 */
export interface V2CoreBatchJobValidationFailedEvent extends EventBase {
  type: 'v2.core.batch_job.validation_failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
}
export interface V2CoreBatchJobValidationFailedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.batch_job.validation_failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
  fetchEvent(): Promise<V2CoreBatchJobValidationFailedEvent>;
}

/**
 * Occurs when a claimable sandbox is claimed.
 */
export interface V2CoreClaimableSandboxClaimedEvent extends EventBase {
  type: 'v2.core.claimable_sandbox.claimed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.ClaimableSandbox>;
}
export interface V2CoreClaimableSandboxClaimedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.claimable_sandbox.claimed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.ClaimableSandbox>;
  fetchEvent(): Promise<V2CoreClaimableSandboxClaimedEvent>;
}

/**
 * Occurs when a claimable sandbox is created.
 */
export interface V2CoreClaimableSandboxCreatedEvent extends EventBase {
  type: 'v2.core.claimable_sandbox.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.ClaimableSandbox>;
}
export interface V2CoreClaimableSandboxCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.claimable_sandbox.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.ClaimableSandbox>;
  fetchEvent(): Promise<V2CoreClaimableSandboxCreatedEvent>;
}

/**
 * Occurs when a claimable sandbox expires.
 */
export interface V2CoreClaimableSandboxExpiredEvent extends EventBase {
  type: 'v2.core.claimable_sandbox.expired';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.ClaimableSandbox>;
}
export interface V2CoreClaimableSandboxExpiredEventNotification
  extends EventNotificationBase {
  type: 'v2.core.claimable_sandbox.expired';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.ClaimableSandbox>;
  fetchEvent(): Promise<V2CoreClaimableSandboxExpiredEvent>;
}

/**
 * Occurs when a claimable sandbox is expiring in 7 days.
 */
export interface V2CoreClaimableSandboxExpiringEvent extends EventBase {
  type: 'v2.core.claimable_sandbox.expiring';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.ClaimableSandbox>;
}
export interface V2CoreClaimableSandboxExpiringEventNotification
  extends EventNotificationBase {
  type: 'v2.core.claimable_sandbox.expiring';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.ClaimableSandbox>;
  fetchEvent(): Promise<V2CoreClaimableSandboxExpiringEvent>;
}

/**
 * Occurs when a claimable sandbox is activated by the user with the intention to go live and your Stripe app is installed on the live account.
 */
export interface V2CoreClaimableSandboxSandboxDetailsOwnerAccountUpdatedEvent
  extends EventBase {
  type: 'v2.core.claimable_sandbox.sandbox_details_owner_account_updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.ClaimableSandbox>;
}
export interface V2CoreClaimableSandboxSandboxDetailsOwnerAccountUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.claimable_sandbox.sandbox_details_owner_account_updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.ClaimableSandbox>;
  fetchEvent(): Promise<
    V2CoreClaimableSandboxSandboxDetailsOwnerAccountUpdatedEvent
  >;
}

/**
 * A ping event used to test the connection to an EventDestination.
 */
export interface V2CoreEventDestinationPingEvent extends EventBase {
  type: 'v2.core.event_destination.ping';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.EventDestination>;
}
export interface V2CoreEventDestinationPingEventNotification
  extends EventNotificationBase {
  type: 'v2.core.event_destination.ping';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.EventDestination>;
  fetchEvent(): Promise<V2CoreEventDestinationPingEvent>;
}

/**
 * Occurs when an API error alert is firing.
 */
export interface V2CoreHealthApiErrorFiringEvent extends EventBase {
  type: 'v2.core.health.api_error.firing';
  // Retrieves data specific to this event.
  data: V2CoreHealthApiErrorFiringEvent.Data;
}
export interface V2CoreHealthApiErrorFiringEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.api_error.firing';
  fetchEvent(): Promise<V2CoreHealthApiErrorFiringEvent>;
}

export namespace V2CoreHealthApiErrorFiringEvent {
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

  export namespace Data {
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
      impacted_requests_percentage?: Decimal;

      /**
       * The top impacted connected accounts (only for platforms).
       */
      top_impacted_accounts?: Array<Impact.TopImpactedAccount>;
    }

    export namespace Impact {
      export type HttpMethod = 'DELETE' | 'GET' | 'POST' | 'PUT';

      export interface TopImpactedAccount {
        /**
         * The account ID of the impacted connected account.
         */
        account: string;

        /**
         * The number of impacted requests.
         */
        impacted_requests: number;

        /**
         * The percentage of impacted requests.
         */
        impacted_requests_percentage?: Decimal;
      }
    }
  }
}

/**
 * Occurs when an API error alert is resolved.
 */
export interface V2CoreHealthApiErrorResolvedEvent extends EventBase {
  type: 'v2.core.health.api_error.resolved';
  // Retrieves data specific to this event.
  data: V2CoreHealthApiErrorResolvedEvent.Data;
}
export interface V2CoreHealthApiErrorResolvedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.api_error.resolved';
  fetchEvent(): Promise<V2CoreHealthApiErrorResolvedEvent>;
}

export namespace V2CoreHealthApiErrorResolvedEvent {
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

  export namespace Data {
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
      impacted_requests_percentage?: Decimal;

      /**
       * The top impacted connected accounts (only for platforms).
       */
      top_impacted_accounts?: Array<Impact.TopImpactedAccount>;
    }

    export namespace Impact {
      export type HttpMethod = 'DELETE' | 'GET' | 'POST' | 'PUT';

      export interface TopImpactedAccount {
        /**
         * The account ID of the impacted connected account.
         */
        account: string;

        /**
         * The number of impacted requests.
         */
        impacted_requests: number;

        /**
         * The percentage of impacted requests.
         */
        impacted_requests_percentage?: Decimal;
      }
    }
  }
}

/**
 * Occurs when an API latency alert is firing.
 */
export interface V2CoreHealthApiLatencyFiringEvent extends EventBase {
  type: 'v2.core.health.api_latency.firing';
  // Retrieves data specific to this event.
  data: V2CoreHealthApiLatencyFiringEvent.Data;
}
export interface V2CoreHealthApiLatencyFiringEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.api_latency.firing';
  fetchEvent(): Promise<V2CoreHealthApiLatencyFiringEvent>;
}

export namespace V2CoreHealthApiLatencyFiringEvent {
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

  export namespace Data {
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
      impacted_requests_percentage?: Decimal;

      /**
       * The top impacted connected accounts (only for platforms).
       */
      top_impacted_accounts?: Array<Impact.TopImpactedAccount>;
    }

    export namespace Impact {
      export type HttpMethod = 'DELETE' | 'GET' | 'POST' | 'PUT';

      export interface TopImpactedAccount {
        /**
         * The account ID of the impacted connected account.
         */
        account: string;

        /**
         * The number of impacted requests.
         */
        impacted_requests: number;

        /**
         * The percentage of impacted requests.
         */
        impacted_requests_percentage?: Decimal;
      }
    }
  }
}

/**
 * Occurs when an API latency alert is resolved.
 */
export interface V2CoreHealthApiLatencyResolvedEvent extends EventBase {
  type: 'v2.core.health.api_latency.resolved';
  // Retrieves data specific to this event.
  data: V2CoreHealthApiLatencyResolvedEvent.Data;
}
export interface V2CoreHealthApiLatencyResolvedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.api_latency.resolved';
  fetchEvent(): Promise<V2CoreHealthApiLatencyResolvedEvent>;
}

export namespace V2CoreHealthApiLatencyResolvedEvent {
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

  export namespace Data {
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
      impacted_requests_percentage?: Decimal;

      /**
       * The top impacted connected accounts (only for platforms).
       */
      top_impacted_accounts?: Array<Impact.TopImpactedAccount>;
    }

    export namespace Impact {
      export type HttpMethod = 'DELETE' | 'GET' | 'POST' | 'PUT';

      export interface TopImpactedAccount {
        /**
         * The account ID of the impacted connected account.
         */
        account: string;

        /**
         * The number of impacted requests.
         */
        impacted_requests: number;

        /**
         * The percentage of impacted requests.
         */
        impacted_requests_percentage?: Decimal;
      }
    }
  }
}

/**
 * Occurs when an authorization rate drop alert is firing.
 */
export interface V2CoreHealthAuthorizationRateDropFiringEvent
  extends EventBase {
  type: 'v2.core.health.authorization_rate_drop.firing';
  // Retrieves data specific to this event.
  data: V2CoreHealthAuthorizationRateDropFiringEvent.Data;
}
export interface V2CoreHealthAuthorizationRateDropFiringEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.authorization_rate_drop.firing';
  fetchEvent(): Promise<V2CoreHealthAuthorizationRateDropFiringEvent>;
}

export namespace V2CoreHealthAuthorizationRateDropFiringEvent {
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

  export namespace Data {
    export interface Impact {
      /**
       * The type of the charge.
       */
      charge_type: Impact.ChargeType;

      /**
       * The current authorization rate percentage.
       */
      current_percentage: Decimal;

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
      previous_percentage: Decimal;
    }

    export namespace Impact {
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
  extends EventBase {
  type: 'v2.core.health.authorization_rate_drop.resolved';
  // Retrieves data specific to this event.
  data: V2CoreHealthAuthorizationRateDropResolvedEvent.Data;
}
export interface V2CoreHealthAuthorizationRateDropResolvedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.authorization_rate_drop.resolved';
  fetchEvent(): Promise<V2CoreHealthAuthorizationRateDropResolvedEvent>;
}

export namespace V2CoreHealthAuthorizationRateDropResolvedEvent {
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

  export namespace Data {
    export interface Impact {
      /**
       * The type of the charge.
       */
      charge_type: Impact.ChargeType;

      /**
       * The current authorization rate percentage.
       */
      current_percentage: Decimal;

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
      previous_percentage: Decimal;
    }

    export namespace Impact {
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
  extends EventBase {
  type: 'v2.core.health.event_generation_failure.resolved';
  // Retrieves data specific to this event.
  data: V2CoreHealthEventGenerationFailureResolvedEvent.Data;
}
export interface V2CoreHealthEventGenerationFailureResolvedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.event_generation_failure.resolved';
  fetchEvent(): Promise<V2CoreHealthEventGenerationFailureResolvedEvent>;
}

export namespace V2CoreHealthEventGenerationFailureResolvedEvent {
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

  export namespace Data {
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

    export namespace Impact {
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
export interface V2CoreHealthFraudRateIncreasedEvent extends EventBase {
  type: 'v2.core.health.fraud_rate.increased';
  // Retrieves data specific to this event.
  data: V2CoreHealthFraudRateIncreasedEvent.Data;
}
export interface V2CoreHealthFraudRateIncreasedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.fraud_rate.increased';
  fetchEvent(): Promise<V2CoreHealthFraudRateIncreasedEvent>;
}

export namespace V2CoreHealthFraudRateIncreasedEvent {
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

  export namespace Data {
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

    export namespace Impact {
      export type AttackType = 'spike' | 'sustained_attack';
    }
  }
}

/**
 * Occurs when an issuing authorization request errors alert is firing.
 */
export interface V2CoreHealthIssuingAuthorizationRequestErrorsFiringEvent
  extends EventBase {
  type: 'v2.core.health.issuing_authorization_request_errors.firing';
  // Retrieves data specific to this event.
  data: V2CoreHealthIssuingAuthorizationRequestErrorsFiringEvent.Data;
}
export interface V2CoreHealthIssuingAuthorizationRequestErrorsFiringEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.issuing_authorization_request_errors.firing';
  fetchEvent(): Promise<
    V2CoreHealthIssuingAuthorizationRequestErrorsFiringEvent
  >;
}

export namespace V2CoreHealthIssuingAuthorizationRequestErrorsFiringEvent {
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

  export namespace Data {
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
  extends EventBase {
  type: 'v2.core.health.issuing_authorization_request_errors.resolved';
  // Retrieves data specific to this event.
  data: V2CoreHealthIssuingAuthorizationRequestErrorsResolvedEvent.Data;
}
export interface V2CoreHealthIssuingAuthorizationRequestErrorsResolvedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.issuing_authorization_request_errors.resolved';
  fetchEvent(): Promise<
    V2CoreHealthIssuingAuthorizationRequestErrorsResolvedEvent
  >;
}

export namespace V2CoreHealthIssuingAuthorizationRequestErrorsResolvedEvent {
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

  export namespace Data {
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
  extends EventBase {
  type: 'v2.core.health.issuing_authorization_request_timeout.firing';
  // Retrieves data specific to this event.
  data: V2CoreHealthIssuingAuthorizationRequestTimeoutFiringEvent.Data;
}
export interface V2CoreHealthIssuingAuthorizationRequestTimeoutFiringEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.issuing_authorization_request_timeout.firing';
  fetchEvent(): Promise<
    V2CoreHealthIssuingAuthorizationRequestTimeoutFiringEvent
  >;
}

export namespace V2CoreHealthIssuingAuthorizationRequestTimeoutFiringEvent {
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

  export namespace Data {
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
  extends EventBase {
  type: 'v2.core.health.issuing_authorization_request_timeout.resolved';
  // Retrieves data specific to this event.
  data: V2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEvent.Data;
}
export interface V2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.issuing_authorization_request_timeout.resolved';
  fetchEvent(): Promise<
    V2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEvent
  >;
}

export namespace V2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEvent {
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

  export namespace Data {
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
export interface V2CoreHealthPaymentMethodErrorFiringEvent extends EventBase {
  type: 'v2.core.health.payment_method_error.firing';
  // Retrieves data specific to this event.
  data: V2CoreHealthPaymentMethodErrorFiringEvent.Data;
}
export interface V2CoreHealthPaymentMethodErrorFiringEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.payment_method_error.firing';
  fetchEvent(): Promise<V2CoreHealthPaymentMethodErrorFiringEvent>;
}

export namespace V2CoreHealthPaymentMethodErrorFiringEvent {
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

  export namespace Data {
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
      impacted_requests_percentage?: Decimal;

      /**
       * The type of the payment method.
       */
      payment_method_type: Impact.PaymentMethodType;

      /**
       * The top impacted connected accounts (only for platforms).
       */
      top_impacted_accounts?: Array<Impact.TopImpactedAccount>;
    }

    export namespace Impact {
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

      export interface TopImpactedAccount {
        /**
         * The account ID of the impacted connected account.
         */
        account: string;

        /**
         * The number of impacted requests.
         */
        impacted_requests: number;

        /**
         * The percentage of impacted requests.
         */
        impacted_requests_percentage?: Decimal;
      }
    }
  }
}

/**
 * Occurs when a payment method error alert is resolved.
 */
export interface V2CoreHealthPaymentMethodErrorResolvedEvent extends EventBase {
  type: 'v2.core.health.payment_method_error.resolved';
  // Retrieves data specific to this event.
  data: V2CoreHealthPaymentMethodErrorResolvedEvent.Data;
}
export interface V2CoreHealthPaymentMethodErrorResolvedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.payment_method_error.resolved';
  fetchEvent(): Promise<V2CoreHealthPaymentMethodErrorResolvedEvent>;
}

export namespace V2CoreHealthPaymentMethodErrorResolvedEvent {
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

  export namespace Data {
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
      impacted_requests_percentage?: Decimal;

      /**
       * The type of the payment method.
       */
      payment_method_type: Impact.PaymentMethodType;

      /**
       * The top impacted connected accounts (only for platforms).
       */
      top_impacted_accounts?: Array<Impact.TopImpactedAccount>;
    }

    export namespace Impact {
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

      export interface TopImpactedAccount {
        /**
         * The account ID of the impacted connected account.
         */
        account: string;

        /**
         * The number of impacted requests.
         */
        impacted_requests: number;

        /**
         * The percentage of impacted requests.
         */
        impacted_requests_percentage?: Decimal;
      }
    }
  }
}

/**
 * Occurs when a SEPA debit delayed alert is firing.
 */
export interface V2CoreHealthSepaDebitDelayedFiringEvent extends EventBase {
  type: 'v2.core.health.sepa_debit_delayed.firing';
  // Retrieves data specific to this event.
  data: V2CoreHealthSepaDebitDelayedFiringEvent.Data;
}
export interface V2CoreHealthSepaDebitDelayedFiringEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.sepa_debit_delayed.firing';
  fetchEvent(): Promise<V2CoreHealthSepaDebitDelayedFiringEvent>;
}

export namespace V2CoreHealthSepaDebitDelayedFiringEvent {
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

  export namespace Data {
    export interface Impact {
      /**
       * The number of impacted payments.
       */
      impacted_payments: number;

      /**
       * The percentage of impacted payments.
       */
      impacted_payments_percentage: Decimal;
    }
  }
}

/**
 * Occurs when a SEPA debit delayed alert is resolved.
 */
export interface V2CoreHealthSepaDebitDelayedResolvedEvent extends EventBase {
  type: 'v2.core.health.sepa_debit_delayed.resolved';
  // Retrieves data specific to this event.
  data: V2CoreHealthSepaDebitDelayedResolvedEvent.Data;
}
export interface V2CoreHealthSepaDebitDelayedResolvedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.sepa_debit_delayed.resolved';
  fetchEvent(): Promise<V2CoreHealthSepaDebitDelayedResolvedEvent>;
}

export namespace V2CoreHealthSepaDebitDelayedResolvedEvent {
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

  export namespace Data {
    export interface Impact {
      /**
       * The number of impacted payments.
       */
      impacted_payments: number;

      /**
       * The percentage of impacted payments.
       */
      impacted_payments_percentage: Decimal;
    }
  }
}

/**
 * Occurs when a traffic volume drop alert is firing.
 */
export interface V2CoreHealthTrafficVolumeDropFiringEvent extends EventBase {
  type: 'v2.core.health.traffic_volume_drop.firing';
  // Retrieves data specific to this event.
  data: V2CoreHealthTrafficVolumeDropFiringEvent.Data;
}
export interface V2CoreHealthTrafficVolumeDropFiringEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.traffic_volume_drop.firing';
  fetchEvent(): Promise<V2CoreHealthTrafficVolumeDropFiringEvent>;
}

export namespace V2CoreHealthTrafficVolumeDropFiringEvent {
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

  export namespace Data {
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
export interface V2CoreHealthTrafficVolumeDropResolvedEvent extends EventBase {
  type: 'v2.core.health.traffic_volume_drop.resolved';
  // Retrieves data specific to this event.
  data: V2CoreHealthTrafficVolumeDropResolvedEvent.Data;
}
export interface V2CoreHealthTrafficVolumeDropResolvedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.traffic_volume_drop.resolved';
  fetchEvent(): Promise<V2CoreHealthTrafficVolumeDropResolvedEvent>;
}

export namespace V2CoreHealthTrafficVolumeDropResolvedEvent {
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

  export namespace Data {
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
export interface V2CoreHealthWebhookLatencyFiringEvent extends EventBase {
  type: 'v2.core.health.webhook_latency.firing';
  // Retrieves data specific to this event.
  data: V2CoreHealthWebhookLatencyFiringEvent.Data;
}
export interface V2CoreHealthWebhookLatencyFiringEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.webhook_latency.firing';
  fetchEvent(): Promise<V2CoreHealthWebhookLatencyFiringEvent>;
}

export namespace V2CoreHealthWebhookLatencyFiringEvent {
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

  export namespace Data {
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
export interface V2CoreHealthWebhookLatencyResolvedEvent extends EventBase {
  type: 'v2.core.health.webhook_latency.resolved';
  // Retrieves data specific to this event.
  data: V2CoreHealthWebhookLatencyResolvedEvent.Data;
}
export interface V2CoreHealthWebhookLatencyResolvedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.webhook_latency.resolved';
  fetchEvent(): Promise<V2CoreHealthWebhookLatencyResolvedEvent>;
}

export namespace V2CoreHealthWebhookLatencyResolvedEvent {
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

  export namespace Data {
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
export interface V2IamApiKeyCreatedEvent extends EventBase {
  type: 'v2.iam.api_key.created';
}
export interface V2IamApiKeyCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.iam.api_key.created';
  fetchEvent(): Promise<V2IamApiKeyCreatedEvent>;
}

/**
 * Occurs when the default API Key's secret is revealed.
 */
export interface V2IamApiKeyDefaultSecretRevealedEvent extends EventBase {
  type: 'v2.iam.api_key.default_secret_revealed';
}
export interface V2IamApiKeyDefaultSecretRevealedEventNotification
  extends EventNotificationBase {
  type: 'v2.iam.api_key.default_secret_revealed';
  fetchEvent(): Promise<V2IamApiKeyDefaultSecretRevealedEvent>;
}

/**
 * Occurs when an API Key is expired.
 */
export interface V2IamApiKeyExpiredEvent extends EventBase {
  type: 'v2.iam.api_key.expired';
}
export interface V2IamApiKeyExpiredEventNotification
  extends EventNotificationBase {
  type: 'v2.iam.api_key.expired';
  fetchEvent(): Promise<V2IamApiKeyExpiredEvent>;
}

/**
 * Occurs when an API Key's permissions are updated.
 */
export interface V2IamApiKeyPermissionsUpdatedEvent extends EventBase {
  type: 'v2.iam.api_key.permissions_updated';
}
export interface V2IamApiKeyPermissionsUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.iam.api_key.permissions_updated';
  fetchEvent(): Promise<V2IamApiKeyPermissionsUpdatedEvent>;
}

/**
 * Occurs when an API Key is rotated.
 */
export interface V2IamApiKeyRotatedEvent extends EventBase {
  type: 'v2.iam.api_key.rotated';
  // Retrieves data specific to this event.
  data: V2IamApiKeyRotatedEvent.Data;
}
export interface V2IamApiKeyRotatedEventNotification
  extends EventNotificationBase {
  type: 'v2.iam.api_key.rotated';
  fetchEvent(): Promise<V2IamApiKeyRotatedEvent>;
}

export namespace V2IamApiKeyRotatedEvent {
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
export interface V2IamApiKeyUpdatedEvent extends EventBase {
  type: 'v2.iam.api_key.updated';
}
export interface V2IamApiKeyUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.iam.api_key.updated';
  fetchEvent(): Promise<V2IamApiKeyUpdatedEvent>;
}

/**
 * Occurs when a Stripe Access Grant is approved.
 */
export interface V2IamStripeAccessGrantApprovedEvent extends EventBase {
  type: 'v2.iam.stripe_access_grant.approved';
}
export interface V2IamStripeAccessGrantApprovedEventNotification
  extends EventNotificationBase {
  type: 'v2.iam.stripe_access_grant.approved';
  fetchEvent(): Promise<V2IamStripeAccessGrantApprovedEvent>;
}

/**
 * Occurs when a Stripe Access Grant is canceled by the requesting Stripe.
 */
export interface V2IamStripeAccessGrantCanceledEvent extends EventBase {
  type: 'v2.iam.stripe_access_grant.canceled';
}
export interface V2IamStripeAccessGrantCanceledEventNotification
  extends EventNotificationBase {
  type: 'v2.iam.stripe_access_grant.canceled';
  fetchEvent(): Promise<V2IamStripeAccessGrantCanceledEvent>;
}

/**
 * Occurs when a Stripe Access Grant is denied (was pending, then denied by the customer).
 */
export interface V2IamStripeAccessGrantDeniedEvent extends EventBase {
  type: 'v2.iam.stripe_access_grant.denied';
}
export interface V2IamStripeAccessGrantDeniedEventNotification
  extends EventNotificationBase {
  type: 'v2.iam.stripe_access_grant.denied';
  fetchEvent(): Promise<V2IamStripeAccessGrantDeniedEvent>;
}

/**
 * Occurs when a Stripe Access Grant is removed (was approved, and then removed by the customer).
 */
export interface V2IamStripeAccessGrantRemovedEvent extends EventBase {
  type: 'v2.iam.stripe_access_grant.removed';
}
export interface V2IamStripeAccessGrantRemovedEventNotification
  extends EventNotificationBase {
  type: 'v2.iam.stripe_access_grant.removed';
  fetchEvent(): Promise<V2IamStripeAccessGrantRemovedEvent>;
}

/**
 * Occurs when a Stripe Access Grant is requested.
 */
export interface V2IamStripeAccessGrantRequestedEvent extends EventBase {
  type: 'v2.iam.stripe_access_grant.requested';
}
export interface V2IamStripeAccessGrantRequestedEventNotification
  extends EventNotificationBase {
  type: 'v2.iam.stripe_access_grant.requested';
  fetchEvent(): Promise<V2IamStripeAccessGrantRequestedEvent>;
}

/**
 * Occurs when a Stripe Access Grant is updated.
 */
export interface V2IamStripeAccessGrantUpdatedEvent extends EventBase {
  type: 'v2.iam.stripe_access_grant.updated';
}
export interface V2IamStripeAccessGrantUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.iam.stripe_access_grant.updated';
  fetchEvent(): Promise<V2IamStripeAccessGrantUpdatedEvent>;
}

/**
 * Occurs when an Adjustment is created.
 */
export interface V2MoneyManagementAdjustmentCreatedEvent extends EventBase {
  type: 'v2.money_management.adjustment.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.Adjustment>;
}
export interface V2MoneyManagementAdjustmentCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.adjustment.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.Adjustment>;
  fetchEvent(): Promise<V2MoneyManagementAdjustmentCreatedEvent>;
}

/**
 * Occurs when a FinancialAccount is created.
 */
export interface V2MoneyManagementFinancialAccountCreatedEvent
  extends EventBase {
  type: 'v2.money_management.financial_account.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.FinancialAccount>;
}
export interface V2MoneyManagementFinancialAccountCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.financial_account.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.FinancialAccount>;
  fetchEvent(): Promise<V2MoneyManagementFinancialAccountCreatedEvent>;
}

/**
 * Occurs when a FinancialAccount is updated.
 */
export interface V2MoneyManagementFinancialAccountUpdatedEvent
  extends EventBase {
  type: 'v2.money_management.financial_account.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.FinancialAccount>;
}
export interface V2MoneyManagementFinancialAccountUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.financial_account.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.FinancialAccount>;
  fetchEvent(): Promise<V2MoneyManagementFinancialAccountUpdatedEvent>;
}

/**
 * Occurs when a FinancialAddress is activated and is ready to receive funds.
 */
export interface V2MoneyManagementFinancialAddressActivatedEvent
  extends EventBase {
  type: 'v2.money_management.financial_address.activated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.FinancialAddress>;
}
export interface V2MoneyManagementFinancialAddressActivatedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.financial_address.activated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.FinancialAddress>;
  fetchEvent(): Promise<V2MoneyManagementFinancialAddressActivatedEvent>;
}

/**
 * Occurs when a FinancialAddress fails to activate and can not receive funds.
 */
export interface V2MoneyManagementFinancialAddressFailedEvent
  extends EventBase {
  type: 'v2.money_management.financial_address.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.FinancialAddress>;
}
export interface V2MoneyManagementFinancialAddressFailedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.financial_address.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.FinancialAddress>;
  fetchEvent(): Promise<V2MoneyManagementFinancialAddressFailedEvent>;
}

/**
 * Occurs when an InboundTransfer's funds are made available.
 */
export interface V2MoneyManagementInboundTransferAvailableEvent
  extends EventBase {
  type: 'v2.money_management.inbound_transfer.available';
  // Retrieves data specific to this event.
  data: V2MoneyManagementInboundTransferAvailableEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.InboundTransfer>;
}
export interface V2MoneyManagementInboundTransferAvailableEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.inbound_transfer.available';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.InboundTransfer>;
  fetchEvent(): Promise<V2MoneyManagementInboundTransferAvailableEvent>;
}

export namespace V2MoneyManagementInboundTransferAvailableEvent {
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
  extends EventBase {
  type: 'v2.money_management.inbound_transfer.bank_debit_failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.InboundTransfer>;
}
export interface V2MoneyManagementInboundTransferBankDebitFailedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.inbound_transfer.bank_debit_failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.InboundTransfer>;
  fetchEvent(): Promise<V2MoneyManagementInboundTransferBankDebitFailedEvent>;
}

/**
 * Occurs when an InboundTransfer starts processing.
 */
export interface V2MoneyManagementInboundTransferBankDebitProcessingEvent
  extends EventBase {
  type: 'v2.money_management.inbound_transfer.bank_debit_processing';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.InboundTransfer>;
}
export interface V2MoneyManagementInboundTransferBankDebitProcessingEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.inbound_transfer.bank_debit_processing';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.InboundTransfer>;
  fetchEvent(): Promise<
    V2MoneyManagementInboundTransferBankDebitProcessingEvent
  >;
}

/**
 * Occurs when an InboundTransfer is queued.
 */
export interface V2MoneyManagementInboundTransferBankDebitQueuedEvent
  extends EventBase {
  type: 'v2.money_management.inbound_transfer.bank_debit_queued';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.InboundTransfer>;
}
export interface V2MoneyManagementInboundTransferBankDebitQueuedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.inbound_transfer.bank_debit_queued';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.InboundTransfer>;
  fetchEvent(): Promise<V2MoneyManagementInboundTransferBankDebitQueuedEvent>;
}

/**
 * Occurs when an InboundTransfer is returned.
 */
export interface V2MoneyManagementInboundTransferBankDebitReturnedEvent
  extends EventBase {
  type: 'v2.money_management.inbound_transfer.bank_debit_returned';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.InboundTransfer>;
}
export interface V2MoneyManagementInboundTransferBankDebitReturnedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.inbound_transfer.bank_debit_returned';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.InboundTransfer>;
  fetchEvent(): Promise<V2MoneyManagementInboundTransferBankDebitReturnedEvent>;
}

/**
 * Occurs when an InboundTransfer succeeds.
 */
export interface V2MoneyManagementInboundTransferBankDebitSucceededEvent
  extends EventBase {
  type: 'v2.money_management.inbound_transfer.bank_debit_succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.InboundTransfer>;
}
export interface V2MoneyManagementInboundTransferBankDebitSucceededEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.inbound_transfer.bank_debit_succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.InboundTransfer>;
  fetchEvent(): Promise<
    V2MoneyManagementInboundTransferBankDebitSucceededEvent
  >;
}

/**
 * Occurs when an OutboundPayment transitions into the canceled state.
 */
export interface V2MoneyManagementOutboundPaymentCanceledEvent
  extends EventBase {
  type: 'v2.money_management.outbound_payment.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundPayment>;
}
export interface V2MoneyManagementOutboundPaymentCanceledEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.outbound_payment.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundPayment>;
  fetchEvent(): Promise<V2MoneyManagementOutboundPaymentCanceledEvent>;
}

/**
 * Occurs when an OutboundPayment is created.
 */
export interface V2MoneyManagementOutboundPaymentCreatedEvent
  extends EventBase {
  type: 'v2.money_management.outbound_payment.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundPayment>;
}
export interface V2MoneyManagementOutboundPaymentCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.outbound_payment.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundPayment>;
  fetchEvent(): Promise<V2MoneyManagementOutboundPaymentCreatedEvent>;
}

/**
 * Occurs when an OutboundPayment transitions into the failed state.
 */
export interface V2MoneyManagementOutboundPaymentFailedEvent extends EventBase {
  type: 'v2.money_management.outbound_payment.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundPayment>;
}
export interface V2MoneyManagementOutboundPaymentFailedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.outbound_payment.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundPayment>;
  fetchEvent(): Promise<V2MoneyManagementOutboundPaymentFailedEvent>;
}

/**
 * Occurs when an OutboundPayment transitions into the posted state.
 */
export interface V2MoneyManagementOutboundPaymentPostedEvent extends EventBase {
  type: 'v2.money_management.outbound_payment.posted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundPayment>;
}
export interface V2MoneyManagementOutboundPaymentPostedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.outbound_payment.posted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundPayment>;
  fetchEvent(): Promise<V2MoneyManagementOutboundPaymentPostedEvent>;
}

/**
 * Occurs when an OutboundPayment transitions into the returned state.
 */
export interface V2MoneyManagementOutboundPaymentReturnedEvent
  extends EventBase {
  type: 'v2.money_management.outbound_payment.returned';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundPayment>;
}
export interface V2MoneyManagementOutboundPaymentReturnedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.outbound_payment.returned';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundPayment>;
  fetchEvent(): Promise<V2MoneyManagementOutboundPaymentReturnedEvent>;
}

/**
 * Occurs when an OutboundPayment is updated.
 */
export interface V2MoneyManagementOutboundPaymentUpdatedEvent
  extends EventBase {
  type: 'v2.money_management.outbound_payment.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundPayment>;
}
export interface V2MoneyManagementOutboundPaymentUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.outbound_payment.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundPayment>;
  fetchEvent(): Promise<V2MoneyManagementOutboundPaymentUpdatedEvent>;
}

/**
 * Occurs when an OutboundTransfer transitions into the canceled state.
 */
export interface V2MoneyManagementOutboundTransferCanceledEvent
  extends EventBase {
  type: 'v2.money_management.outbound_transfer.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundTransfer>;
}
export interface V2MoneyManagementOutboundTransferCanceledEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.outbound_transfer.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundTransfer>;
  fetchEvent(): Promise<V2MoneyManagementOutboundTransferCanceledEvent>;
}

/**
 * Occurs when an OutboundTransfer is created.
 */
export interface V2MoneyManagementOutboundTransferCreatedEvent
  extends EventBase {
  type: 'v2.money_management.outbound_transfer.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundTransfer>;
}
export interface V2MoneyManagementOutboundTransferCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.outbound_transfer.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundTransfer>;
  fetchEvent(): Promise<V2MoneyManagementOutboundTransferCreatedEvent>;
}

/**
 * Occurs when an OutboundTransfer transitions into the failed state.
 */
export interface V2MoneyManagementOutboundTransferFailedEvent
  extends EventBase {
  type: 'v2.money_management.outbound_transfer.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundTransfer>;
}
export interface V2MoneyManagementOutboundTransferFailedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.outbound_transfer.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundTransfer>;
  fetchEvent(): Promise<V2MoneyManagementOutboundTransferFailedEvent>;
}

/**
 * Occurs when an OutboundTransfer transitions into the posted state.
 */
export interface V2MoneyManagementOutboundTransferPostedEvent
  extends EventBase {
  type: 'v2.money_management.outbound_transfer.posted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundTransfer>;
}
export interface V2MoneyManagementOutboundTransferPostedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.outbound_transfer.posted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundTransfer>;
  fetchEvent(): Promise<V2MoneyManagementOutboundTransferPostedEvent>;
}

/**
 * Occurs when an OutboundTransfer transitions into the returned state.
 */
export interface V2MoneyManagementOutboundTransferReturnedEvent
  extends EventBase {
  type: 'v2.money_management.outbound_transfer.returned';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundTransfer>;
}
export interface V2MoneyManagementOutboundTransferReturnedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.outbound_transfer.returned';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundTransfer>;
  fetchEvent(): Promise<V2MoneyManagementOutboundTransferReturnedEvent>;
}

/**
 * Event that is emitted every time an Outbound Transfer is updated.
 */
export interface V2MoneyManagementOutboundTransferUpdatedEvent
  extends EventBase {
  type: 'v2.money_management.outbound_transfer.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundTransfer>;
}
export interface V2MoneyManagementOutboundTransferUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.outbound_transfer.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundTransfer>;
  fetchEvent(): Promise<V2MoneyManagementOutboundTransferUpdatedEvent>;
}

/**
 * Occurs when a PayoutMethod is created.
 */
export interface V2MoneyManagementPayoutMethodCreatedEvent extends EventBase {
  type: 'v2.money_management.payout_method.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.PayoutMethod>;
}
export interface V2MoneyManagementPayoutMethodCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.payout_method.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.PayoutMethod>;
  fetchEvent(): Promise<V2MoneyManagementPayoutMethodCreatedEvent>;
}

/**
 * Occurs when a PayoutMethod is updated.
 */
export interface V2MoneyManagementPayoutMethodUpdatedEvent extends EventBase {
  type: 'v2.money_management.payout_method.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.PayoutMethod>;
}
export interface V2MoneyManagementPayoutMethodUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.payout_method.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.PayoutMethod>;
  fetchEvent(): Promise<V2MoneyManagementPayoutMethodUpdatedEvent>;
}

/**
 * Occurs when a ReceivedCredit's funds are received and are available in your balance.
 */
export interface V2MoneyManagementReceivedCreditAvailableEvent
  extends EventBase {
  type: 'v2.money_management.received_credit.available';
  // Retrieves data specific to this event.
  data: V2MoneyManagementReceivedCreditAvailableEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedCredit>;
}
export interface V2MoneyManagementReceivedCreditAvailableEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.received_credit.available';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedCredit>;
  fetchEvent(): Promise<V2MoneyManagementReceivedCreditAvailableEvent>;
}

export namespace V2MoneyManagementReceivedCreditAvailableEvent {
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
export interface V2MoneyManagementReceivedCreditFailedEvent extends EventBase {
  type: 'v2.money_management.received_credit.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedCredit>;
}
export interface V2MoneyManagementReceivedCreditFailedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.received_credit.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedCredit>;
  fetchEvent(): Promise<V2MoneyManagementReceivedCreditFailedEvent>;
}

/**
 * Occurs when a ReceivedCredit is reversed, returned to the originator, and deducted from your balance.
 */
export interface V2MoneyManagementReceivedCreditReturnedEvent
  extends EventBase {
  type: 'v2.money_management.received_credit.returned';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedCredit>;
}
export interface V2MoneyManagementReceivedCreditReturnedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.received_credit.returned';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedCredit>;
  fetchEvent(): Promise<V2MoneyManagementReceivedCreditReturnedEvent>;
}

/**
 * Occurs when a ReceivedCredit succeeds.
 */
export interface V2MoneyManagementReceivedCreditSucceededEvent
  extends EventBase {
  type: 'v2.money_management.received_credit.succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedCredit>;
}
export interface V2MoneyManagementReceivedCreditSucceededEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.received_credit.succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedCredit>;
  fetchEvent(): Promise<V2MoneyManagementReceivedCreditSucceededEvent>;
}

/**
 * Occurs when a ReceivedDebit is canceled.
 */
export interface V2MoneyManagementReceivedDebitCanceledEvent extends EventBase {
  type: 'v2.money_management.received_debit.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedDebit>;
}
export interface V2MoneyManagementReceivedDebitCanceledEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.received_debit.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedDebit>;
  fetchEvent(): Promise<V2MoneyManagementReceivedDebitCanceledEvent>;
}

/**
 * Occurs when a ReceivedDebit fails.
 */
export interface V2MoneyManagementReceivedDebitFailedEvent extends EventBase {
  type: 'v2.money_management.received_debit.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedDebit>;
}
export interface V2MoneyManagementReceivedDebitFailedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.received_debit.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedDebit>;
  fetchEvent(): Promise<V2MoneyManagementReceivedDebitFailedEvent>;
}

/**
 * Occurs when a ReceivedDebit is set to pending.
 */
export interface V2MoneyManagementReceivedDebitPendingEvent extends EventBase {
  type: 'v2.money_management.received_debit.pending';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedDebit>;
}
export interface V2MoneyManagementReceivedDebitPendingEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.received_debit.pending';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedDebit>;
  fetchEvent(): Promise<V2MoneyManagementReceivedDebitPendingEvent>;
}

/**
 * Occurs when a ReceivedDebit succeeds.
 */
export interface V2MoneyManagementReceivedDebitSucceededEvent
  extends EventBase {
  type: 'v2.money_management.received_debit.succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedDebit>;
}
export interface V2MoneyManagementReceivedDebitSucceededEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.received_debit.succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedDebit>;
  fetchEvent(): Promise<V2MoneyManagementReceivedDebitSucceededEvent>;
}

/**
 * Occurs when a ReceivedDebit is updated.
 */
export interface V2MoneyManagementReceivedDebitUpdatedEvent extends EventBase {
  type: 'v2.money_management.received_debit.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedDebit>;
}
export interface V2MoneyManagementReceivedDebitUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.received_debit.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedDebit>;
  fetchEvent(): Promise<V2MoneyManagementReceivedDebitUpdatedEvent>;
}

/**
 * Occurs when a RecipientVerification is created.
 */
export interface V2MoneyManagementRecipientVerificationCreatedEvent
  extends EventBase {
  type: 'v2.money_management.recipient_verification.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.RecipientVerification>;
}
export interface V2MoneyManagementRecipientVerificationCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.recipient_verification.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.RecipientVerification>;
  fetchEvent(): Promise<V2MoneyManagementRecipientVerificationCreatedEvent>;
}

/**
 * Occurs when a RecipientVerification is updated.
 */
export interface V2MoneyManagementRecipientVerificationUpdatedEvent
  extends EventBase {
  type: 'v2.money_management.recipient_verification.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.RecipientVerification>;
}
export interface V2MoneyManagementRecipientVerificationUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.recipient_verification.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.RecipientVerification>;
  fetchEvent(): Promise<V2MoneyManagementRecipientVerificationUpdatedEvent>;
}

/**
 * Occurs when a Transaction is created.
 */
export interface V2MoneyManagementTransactionCreatedEvent extends EventBase {
  type: 'v2.money_management.transaction.created';
  // Retrieves data specific to this event.
  data: V2MoneyManagementTransactionCreatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.Transaction>;
}
export interface V2MoneyManagementTransactionCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.transaction.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.Transaction>;
  fetchEvent(): Promise<V2MoneyManagementTransactionCreatedEvent>;
}

export namespace V2MoneyManagementTransactionCreatedEvent {
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
export interface V2MoneyManagementTransactionUpdatedEvent extends EventBase {
  type: 'v2.money_management.transaction.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.Transaction>;
}
export interface V2MoneyManagementTransactionUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.transaction.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.Transaction>;
  fetchEvent(): Promise<V2MoneyManagementTransactionUpdatedEvent>;
}

/**
 * Sent after a failed attempt if there are still retries available on the OffSessionPayment.
 */
export interface V2PaymentsOffSessionPaymentAttemptFailedEvent
  extends EventBase {
  type: 'v2.payments.off_session_payment.attempt_failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
}
export interface V2PaymentsOffSessionPaymentAttemptFailedEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.off_session_payment.attempt_failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
  fetchEvent(): Promise<V2PaymentsOffSessionPaymentAttemptFailedEvent>;
}

/**
 * Sent when our internal scheduling system kicks off an attempt, whether it's a
 * retry or an initial attempt.
 */
export interface V2PaymentsOffSessionPaymentAttemptStartedEvent
  extends EventBase {
  type: 'v2.payments.off_session_payment.attempt_started';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
}
export interface V2PaymentsOffSessionPaymentAttemptStartedEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.off_session_payment.attempt_started';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
  fetchEvent(): Promise<V2PaymentsOffSessionPaymentAttemptStartedEvent>;
}

/**
 * Sent after a failed authorization if there are still retries available on the OffSessionPayment.
 * This event has been renamed this to attempt_failed, but we are keeping this around for backwards compatibility.
 */
export interface V2PaymentsOffSessionPaymentAuthorizationAttemptFailedEvent
  extends EventBase {
  type: 'v2.payments.off_session_payment.authorization_attempt_failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
}
export interface V2PaymentsOffSessionPaymentAuthorizationAttemptFailedEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.off_session_payment.authorization_attempt_failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
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
  extends EventBase {
  type: 'v2.payments.off_session_payment.authorization_attempt_started';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
}
export interface V2PaymentsOffSessionPaymentAuthorizationAttemptStartedEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.off_session_payment.authorization_attempt_started';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
  fetchEvent(): Promise<
    V2PaymentsOffSessionPaymentAuthorizationAttemptStartedEvent
  >;
}

/**
 * Sent immediately following a user's call to the Off-Session Payments cancel endpoint.
 */
export interface V2PaymentsOffSessionPaymentCanceledEvent extends EventBase {
  type: 'v2.payments.off_session_payment.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
}
export interface V2PaymentsOffSessionPaymentCanceledEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.off_session_payment.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
  fetchEvent(): Promise<V2PaymentsOffSessionPaymentCanceledEvent>;
}

/**
 * Sent immediately following a user's call to the Off-Session Payments create endpoint.
 */
export interface V2PaymentsOffSessionPaymentCreatedEvent extends EventBase {
  type: 'v2.payments.off_session_payment.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
}
export interface V2PaymentsOffSessionPaymentCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.off_session_payment.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
  fetchEvent(): Promise<V2PaymentsOffSessionPaymentCreatedEvent>;
}

/**
 * Sent after a failed authorization if there are no retries remaining, or if the failure is unretryable.
 */
export interface V2PaymentsOffSessionPaymentFailedEvent extends EventBase {
  type: 'v2.payments.off_session_payment.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
}
export interface V2PaymentsOffSessionPaymentFailedEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.off_session_payment.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
  fetchEvent(): Promise<V2PaymentsOffSessionPaymentFailedEvent>;
}

/**
 * Sent when the off-session payment becomes available for capture.
 */
export interface V2PaymentsOffSessionPaymentRequiresCaptureEvent
  extends EventBase {
  type: 'v2.payments.off_session_payment.requires_capture';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
}
export interface V2PaymentsOffSessionPaymentRequiresCaptureEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.off_session_payment.requires_capture';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
  fetchEvent(): Promise<V2PaymentsOffSessionPaymentRequiresCaptureEvent>;
}

/**
 * Sent immediately after a successful authorization.
 */
export interface V2PaymentsOffSessionPaymentSucceededEvent extends EventBase {
  type: 'v2.payments.off_session_payment.succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
}
export interface V2PaymentsOffSessionPaymentSucceededEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.off_session_payment.succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
  fetchEvent(): Promise<V2PaymentsOffSessionPaymentSucceededEvent>;
}

/**
 * Occurs when a SettlementAllocationIntent is canceled.
 */
export interface V2PaymentsSettlementAllocationIntentCanceledEvent
  extends EventBase {
  type: 'v2.payments.settlement_allocation_intent.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntent>;
}
export interface V2PaymentsSettlementAllocationIntentCanceledEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.settlement_allocation_intent.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntent>;
  fetchEvent(): Promise<V2PaymentsSettlementAllocationIntentCanceledEvent>;
}

/**
 * Occurs when a SettlementAllocationIntent is created.
 */
export interface V2PaymentsSettlementAllocationIntentCreatedEvent
  extends EventBase {
  type: 'v2.payments.settlement_allocation_intent.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntent>;
}
export interface V2PaymentsSettlementAllocationIntentCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.settlement_allocation_intent.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntent>;
  fetchEvent(): Promise<V2PaymentsSettlementAllocationIntentCreatedEvent>;
}

/**
 * Occurs when an error occurs in reconciling a SettlementAllocationIntent.
 */
export interface V2PaymentsSettlementAllocationIntentErroredEvent
  extends EventBase {
  type: 'v2.payments.settlement_allocation_intent.errored';
  // Retrieves data specific to this event.
  data: V2PaymentsSettlementAllocationIntentErroredEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntent>;
}
export interface V2PaymentsSettlementAllocationIntentErroredEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.settlement_allocation_intent.errored';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntent>;
  fetchEvent(): Promise<V2PaymentsSettlementAllocationIntentErroredEvent>;
}

export namespace V2PaymentsSettlementAllocationIntentErroredEvent {
  export interface Data {
    /**
     * Stripe doc link to debug the issue.
     */
    doc_url?: string;

    /**
     * User Message detailing the reason code and possible resolution .
     */
    message: string;

    /**
     * Open Enum. The `errored` status reason.
     */
    reason_code: 'amount_mismatch';
  }
}

/**
 * Occurs when SettlementAllocationIntent's `expected_settlement_date` is one day away and no matching ReceivedCredit exists.
 */
export interface V2PaymentsSettlementAllocationIntentFundsNotReceivedEvent
  extends EventBase {
  type: 'v2.payments.settlement_allocation_intent.funds_not_received';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntent>;
}
export interface V2PaymentsSettlementAllocationIntentFundsNotReceivedEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.settlement_allocation_intent.funds_not_received';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntent>;
  fetchEvent(): Promise<
    V2PaymentsSettlementAllocationIntentFundsNotReceivedEvent
  >;
}

/**
 * Occurs when a SettlementAllocationIntent is matched.
 */
export interface V2PaymentsSettlementAllocationIntentMatchedEvent
  extends EventBase {
  type: 'v2.payments.settlement_allocation_intent.matched';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntent>;
}
export interface V2PaymentsSettlementAllocationIntentMatchedEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.settlement_allocation_intent.matched';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntent>;
  fetchEvent(): Promise<V2PaymentsSettlementAllocationIntentMatchedEvent>;
}

/**
 * Occurs when a ReceivedCredit has no SettlementAllocationIntent matching it.
 */
export interface V2PaymentsSettlementAllocationIntentNotFoundEvent
  extends EventBase {
  type: 'v2.payments.settlement_allocation_intent.not_found';
  // Retrieves data specific to this event.
  data: V2PaymentsSettlementAllocationIntentNotFoundEvent.Data;
}
export interface V2PaymentsSettlementAllocationIntentNotFoundEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.settlement_allocation_intent.not_found';
  fetchEvent(): Promise<V2PaymentsSettlementAllocationIntentNotFoundEvent>;
}

export namespace V2PaymentsSettlementAllocationIntentNotFoundEvent {
  export interface Data {
    /**
     * The ID of the ReceivedCredit.
     */
    received_credit_id: string;
  }
}

/**
 * Occurs when a SettlementAllocationIntent is settled.
 */
export interface V2PaymentsSettlementAllocationIntentSettledEvent
  extends EventBase {
  type: 'v2.payments.settlement_allocation_intent.settled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntent>;
}
export interface V2PaymentsSettlementAllocationIntentSettledEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.settlement_allocation_intent.settled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntent>;
  fetchEvent(): Promise<V2PaymentsSettlementAllocationIntentSettledEvent>;
}

/**
 * Occurs when a SettlementAllocationIntent is submitted.
 */
export interface V2PaymentsSettlementAllocationIntentSubmittedEvent
  extends EventBase {
  type: 'v2.payments.settlement_allocation_intent.submitted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntent>;
}
export interface V2PaymentsSettlementAllocationIntentSubmittedEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.settlement_allocation_intent.submitted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntent>;
  fetchEvent(): Promise<V2PaymentsSettlementAllocationIntentSubmittedEvent>;
}

/**
 * Occurs when a SettlementAllocationIntentSplit is canceled.
 */
export interface V2PaymentsSettlementAllocationIntentSplitCanceledEvent
  extends EventBase {
  type: 'v2.payments.settlement_allocation_intent_split.canceled';
  // Retrieves data specific to this event.
  data: V2PaymentsSettlementAllocationIntentSplitCanceledEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntentSplit>;
}
export interface V2PaymentsSettlementAllocationIntentSplitCanceledEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.settlement_allocation_intent_split.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntentSplit>;
  fetchEvent(): Promise<V2PaymentsSettlementAllocationIntentSplitCanceledEvent>;
}

export namespace V2PaymentsSettlementAllocationIntentSplitCanceledEvent {
  export interface Data {
    /**
     * The ID of the SettlementAllocationIntent this split belongs to.
     */
    settlement_allocation_intent_id: string;
  }
}

/**
 * Occurs when a SettlementAllocationIntentSplit is created.
 */
export interface V2PaymentsSettlementAllocationIntentSplitCreatedEvent
  extends EventBase {
  type: 'v2.payments.settlement_allocation_intent_split.created';
  // Retrieves data specific to this event.
  data: V2PaymentsSettlementAllocationIntentSplitCreatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntentSplit>;
}
export interface V2PaymentsSettlementAllocationIntentSplitCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.settlement_allocation_intent_split.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntentSplit>;
  fetchEvent(): Promise<V2PaymentsSettlementAllocationIntentSplitCreatedEvent>;
}

export namespace V2PaymentsSettlementAllocationIntentSplitCreatedEvent {
  export interface Data {
    /**
     * The ID of the SettlementAllocationIntent this split belongs to.
     */
    settlement_allocation_intent_id: string;
  }
}

/**
 * Occurs when a SettlementAllocationIntentSplit is settled.
 */
export interface V2PaymentsSettlementAllocationIntentSplitSettledEvent
  extends EventBase {
  type: 'v2.payments.settlement_allocation_intent_split.settled';
  // Retrieves data specific to this event.
  data: V2PaymentsSettlementAllocationIntentSplitSettledEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntentSplit>;
}
export interface V2PaymentsSettlementAllocationIntentSplitSettledEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.settlement_allocation_intent_split.settled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntentSplit>;
  fetchEvent(): Promise<V2PaymentsSettlementAllocationIntentSplitSettledEvent>;
}

export namespace V2PaymentsSettlementAllocationIntentSplitSettledEvent {
  export interface Data {
    /**
     * The ID of the SettlementAllocationIntent this split belongs to.
     */
    settlement_allocation_intent_id: string;
  }
}

/**
 * Occurs when a ReportRun is created.
 */
export interface V2ReportingReportRunCreatedEvent extends EventBase {
  type: 'v2.reporting.report_run.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Reporting.ReportRun>;
}
export interface V2ReportingReportRunCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.reporting.report_run.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Reporting.ReportRun>;
  fetchEvent(): Promise<V2ReportingReportRunCreatedEvent>;
}

/**
 * Occurs when a ReportRun has failed to complete.
 */
export interface V2ReportingReportRunFailedEvent extends EventBase {
  type: 'v2.reporting.report_run.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Reporting.ReportRun>;
}
export interface V2ReportingReportRunFailedEventNotification
  extends EventNotificationBase {
  type: 'v2.reporting.report_run.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Reporting.ReportRun>;
  fetchEvent(): Promise<V2ReportingReportRunFailedEvent>;
}

/**
 * Occurs when a ReportRun has successfully completed.
 */
export interface V2ReportingReportRunSucceededEvent extends EventBase {
  type: 'v2.reporting.report_run.succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Reporting.ReportRun>;
}
export interface V2ReportingReportRunSucceededEventNotification
  extends EventNotificationBase {
  type: 'v2.reporting.report_run.succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Reporting.ReportRun>;
  fetchEvent(): Promise<V2ReportingReportRunSucceededEvent>;
}

/**
 * Occurs when a ReportRun is updated.
 */
export interface V2ReportingReportRunUpdatedEvent extends EventBase {
  type: 'v2.reporting.report_run.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Reporting.ReportRun>;
}
export interface V2ReportingReportRunUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.reporting.report_run.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Reporting.ReportRun>;
  fetchEvent(): Promise<V2ReportingReportRunUpdatedEvent>;
}

/**
 * Occurs when a fraudulent merchant signal is ready for an account.
 */
export interface V2SignalsAccountSignalFraudulentMerchantReadyEvent
  extends EventBase {
  type: 'v2.signals.account_signal.fraudulent_merchant_ready';
  // Retrieves data specific to this event.
  data: V2SignalsAccountSignalFraudulentMerchantReadyEvent.Data;
}
export interface V2SignalsAccountSignalFraudulentMerchantReadyEventNotification
  extends EventNotificationBase {
  type: 'v2.signals.account_signal.fraudulent_merchant_ready';
  fetchEvent(): Promise<V2SignalsAccountSignalFraudulentMerchantReadyEvent>;
}

export namespace V2SignalsAccountSignalFraudulentMerchantReadyEvent {
  export interface Data {
    /**
     * Account ID that this signal is associated with.
     */
    account: string;

    /**
     * Timestamp when the signal was evaluated.
     */
    evaluated_at: string;

    /**
     * Fraudulent merchant signal data. Present when type is fraudulent_merchant.
     */
    fraudulent_merchant?: Data.FraudulentMerchant;

    /**
     * Unique identifier for this account signal.
     */
    id: string;

    /**
     * The type of account signal. Currently only fraudulent_merchant is supported.
     */
    type: 'fraudulent_merchant';
  }

  export namespace Data {
    export interface FraudulentMerchant {
      /**
       * Array of objects representing individual factors that contributed to the calculated probability. Maximum of 3.
       */
      indicators: Array<FraudulentMerchant.Indicator>;

      /**
       * The probability of the merchant being fraudulent. Can be between 0.00 and 100.00. May be empty if the risk_level is UNKNOWN or NOT_ASSESSED.
       */
      probability?: Decimal;

      /**
       * Categorical assessment of the fraudulent merchant risk based on probability.
       */
      risk_level: FraudulentMerchant.RiskLevel;
    }

    export namespace FraudulentMerchant {
      export interface Indicator {
        /**
         * A brief explanation of how this indicator contributed to the fraudulent merchant probability.
         */
        description: string;

        /**
         * The effect this indicator had on the overall risk level.
         */
        impact: Indicator.Impact;

        /**
         * The name of the specific indicator used in the risk assessment.
         */
        indicator: Indicator.Indicator;
      }

      export type RiskLevel =
        | 'elevated'
        | 'highest'
        | 'low'
        | 'normal'
        | 'not_assessed'
        | 'unknown';

      export namespace Indicator {
        export type Impact =
          | 'decrease'
          | 'neutral'
          | 'slight_increase'
          | 'strong_increase';

        export type Indicator =
          | 'bank_account'
          | 'business_information_and_account_activity'
          | 'disputes'
          | 'failures'
          | 'geolocation'
          | 'other'
          | 'other_related_accounts'
          | 'other_transaction_activity'
          | 'owner_email'
          | 'web_presence';
      }
    }
  }
}

export declare namespace Events {
  export {
    UnknownEventNotification,
    V1AccountSignalsIncludingDelinquencyCreatedEvent,
    V1BillingMeterErrorReportTriggeredEvent,
    V1BillingMeterNoMeterFoundEvent,
    V2BillingCadenceBilledEvent,
    V2BillingCadenceCanceledEvent,
    V2BillingCadenceCreatedEvent,
    V2BillingLicenseFeeCreatedEvent,
    V2BillingLicenseFeeUpdatedEvent,
    V2BillingLicenseFeeVersionCreatedEvent,
    V2BillingLicensedItemCreatedEvent,
    V2BillingLicensedItemUpdatedEvent,
    V2BillingMeteredItemCreatedEvent,
    V2BillingMeteredItemUpdatedEvent,
    V2BillingPricingPlanCreatedEvent,
    V2BillingPricingPlanUpdatedEvent,
    V2BillingPricingPlanComponentCreatedEvent,
    V2BillingPricingPlanComponentUpdatedEvent,
    V2BillingPricingPlanSubscriptionCollectionAwaitingCustomerActionEvent,
    V2BillingPricingPlanSubscriptionCollectionCurrentEvent,
    V2BillingPricingPlanSubscriptionCollectionPastDueEvent,
    V2BillingPricingPlanSubscriptionCollectionPausedEvent,
    V2BillingPricingPlanSubscriptionCollectionUnpaidEvent,
    V2BillingPricingPlanSubscriptionServicingActivatedEvent,
    V2BillingPricingPlanSubscriptionServicingCanceledEvent,
    V2BillingPricingPlanSubscriptionServicingPausedEvent,
    V2BillingPricingPlanVersionCreatedEvent,
    V2BillingRateCardCreatedEvent,
    V2BillingRateCardUpdatedEvent,
    V2BillingRateCardCustomPricingUnitOverageRateCreatedEvent,
    V2BillingRateCardRateCreatedEvent,
    V2BillingRateCardSubscriptionActivatedEvent,
    V2BillingRateCardSubscriptionCanceledEvent,
    V2BillingRateCardSubscriptionCollectionAwaitingCustomerActionEvent,
    V2BillingRateCardSubscriptionCollectionCurrentEvent,
    V2BillingRateCardSubscriptionCollectionPastDueEvent,
    V2BillingRateCardSubscriptionCollectionPausedEvent,
    V2BillingRateCardSubscriptionCollectionUnpaidEvent,
    V2BillingRateCardSubscriptionServicingActivatedEvent,
    V2BillingRateCardSubscriptionServicingCanceledEvent,
    V2BillingRateCardSubscriptionServicingPausedEvent,
    V2BillingRateCardVersionCreatedEvent,
    V2CoreAccountClosedEvent,
    V2CoreAccountCreatedEvent,
    V2CoreAccountUpdatedEvent,
    V2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEvent,
    V2CoreAccountIncludingConfigurationCardCreatorUpdatedEvent,
    V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent,
    V2CoreAccountIncludingConfigurationCustomerUpdatedEvent,
    V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent,
    V2CoreAccountIncludingConfigurationMerchantUpdatedEvent,
    V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent,
    V2CoreAccountIncludingConfigurationRecipientUpdatedEvent,
    V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEvent,
    V2CoreAccountIncludingConfigurationStorerUpdatedEvent,
    V2CoreAccountIncludingDefaultsUpdatedEvent,
    V2CoreAccountIncludingFutureRequirementsUpdatedEvent,
    V2CoreAccountIncludingIdentityUpdatedEvent,
    V2CoreAccountIncludingRequirementsUpdatedEvent,
    V2CoreAccountLinkReturnedEvent,
    V2CoreAccountPersonCreatedEvent,
    V2CoreAccountPersonDeletedEvent,
    V2CoreAccountPersonUpdatedEvent,
    V2CoreAccountSignalsFraudulentWebsiteReadyEvent,
    V2CoreBatchJobBatchFailedEvent,
    V2CoreBatchJobCanceledEvent,
    V2CoreBatchJobCompletedEvent,
    V2CoreBatchJobCreatedEvent,
    V2CoreBatchJobReadyForUploadEvent,
    V2CoreBatchJobTimeoutEvent,
    V2CoreBatchJobUpdatedEvent,
    V2CoreBatchJobUploadTimeoutEvent,
    V2CoreBatchJobValidatingEvent,
    V2CoreBatchJobValidationFailedEvent,
    V2CoreClaimableSandboxClaimedEvent,
    V2CoreClaimableSandboxCreatedEvent,
    V2CoreClaimableSandboxExpiredEvent,
    V2CoreClaimableSandboxExpiringEvent,
    V2CoreClaimableSandboxSandboxDetailsOwnerAccountUpdatedEvent,
    V2CoreEventDestinationPingEvent,
    V2CoreHealthApiErrorFiringEvent,
    V2CoreHealthApiErrorResolvedEvent,
    V2CoreHealthApiLatencyFiringEvent,
    V2CoreHealthApiLatencyResolvedEvent,
    V2CoreHealthAuthorizationRateDropFiringEvent,
    V2CoreHealthAuthorizationRateDropResolvedEvent,
    V2CoreHealthEventGenerationFailureResolvedEvent,
    V2CoreHealthFraudRateIncreasedEvent,
    V2CoreHealthIssuingAuthorizationRequestErrorsFiringEvent,
    V2CoreHealthIssuingAuthorizationRequestErrorsResolvedEvent,
    V2CoreHealthIssuingAuthorizationRequestTimeoutFiringEvent,
    V2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEvent,
    V2CoreHealthPaymentMethodErrorFiringEvent,
    V2CoreHealthPaymentMethodErrorResolvedEvent,
    V2CoreHealthSepaDebitDelayedFiringEvent,
    V2CoreHealthSepaDebitDelayedResolvedEvent,
    V2CoreHealthTrafficVolumeDropFiringEvent,
    V2CoreHealthTrafficVolumeDropResolvedEvent,
    V2CoreHealthWebhookLatencyFiringEvent,
    V2CoreHealthWebhookLatencyResolvedEvent,
    V2IamApiKeyCreatedEvent,
    V2IamApiKeyDefaultSecretRevealedEvent,
    V2IamApiKeyExpiredEvent,
    V2IamApiKeyPermissionsUpdatedEvent,
    V2IamApiKeyRotatedEvent,
    V2IamApiKeyUpdatedEvent,
    V2IamStripeAccessGrantApprovedEvent,
    V2IamStripeAccessGrantCanceledEvent,
    V2IamStripeAccessGrantDeniedEvent,
    V2IamStripeAccessGrantRemovedEvent,
    V2IamStripeAccessGrantRequestedEvent,
    V2IamStripeAccessGrantUpdatedEvent,
    V2MoneyManagementAdjustmentCreatedEvent,
    V2MoneyManagementFinancialAccountCreatedEvent,
    V2MoneyManagementFinancialAccountUpdatedEvent,
    V2MoneyManagementFinancialAddressActivatedEvent,
    V2MoneyManagementFinancialAddressFailedEvent,
    V2MoneyManagementInboundTransferAvailableEvent,
    V2MoneyManagementInboundTransferBankDebitFailedEvent,
    V2MoneyManagementInboundTransferBankDebitProcessingEvent,
    V2MoneyManagementInboundTransferBankDebitQueuedEvent,
    V2MoneyManagementInboundTransferBankDebitReturnedEvent,
    V2MoneyManagementInboundTransferBankDebitSucceededEvent,
    V2MoneyManagementOutboundPaymentCanceledEvent,
    V2MoneyManagementOutboundPaymentCreatedEvent,
    V2MoneyManagementOutboundPaymentFailedEvent,
    V2MoneyManagementOutboundPaymentPostedEvent,
    V2MoneyManagementOutboundPaymentReturnedEvent,
    V2MoneyManagementOutboundPaymentUpdatedEvent,
    V2MoneyManagementOutboundTransferCanceledEvent,
    V2MoneyManagementOutboundTransferCreatedEvent,
    V2MoneyManagementOutboundTransferFailedEvent,
    V2MoneyManagementOutboundTransferPostedEvent,
    V2MoneyManagementOutboundTransferReturnedEvent,
    V2MoneyManagementOutboundTransferUpdatedEvent,
    V2MoneyManagementPayoutMethodCreatedEvent,
    V2MoneyManagementPayoutMethodUpdatedEvent,
    V2MoneyManagementReceivedCreditAvailableEvent,
    V2MoneyManagementReceivedCreditFailedEvent,
    V2MoneyManagementReceivedCreditReturnedEvent,
    V2MoneyManagementReceivedCreditSucceededEvent,
    V2MoneyManagementReceivedDebitCanceledEvent,
    V2MoneyManagementReceivedDebitFailedEvent,
    V2MoneyManagementReceivedDebitPendingEvent,
    V2MoneyManagementReceivedDebitSucceededEvent,
    V2MoneyManagementReceivedDebitUpdatedEvent,
    V2MoneyManagementRecipientVerificationCreatedEvent,
    V2MoneyManagementRecipientVerificationUpdatedEvent,
    V2MoneyManagementTransactionCreatedEvent,
    V2MoneyManagementTransactionUpdatedEvent,
    V2PaymentsOffSessionPaymentAttemptFailedEvent,
    V2PaymentsOffSessionPaymentAttemptStartedEvent,
    V2PaymentsOffSessionPaymentAuthorizationAttemptFailedEvent,
    V2PaymentsOffSessionPaymentAuthorizationAttemptStartedEvent,
    V2PaymentsOffSessionPaymentCanceledEvent,
    V2PaymentsOffSessionPaymentCreatedEvent,
    V2PaymentsOffSessionPaymentFailedEvent,
    V2PaymentsOffSessionPaymentRequiresCaptureEvent,
    V2PaymentsOffSessionPaymentSucceededEvent,
    V2PaymentsSettlementAllocationIntentCanceledEvent,
    V2PaymentsSettlementAllocationIntentCreatedEvent,
    V2PaymentsSettlementAllocationIntentErroredEvent,
    V2PaymentsSettlementAllocationIntentFundsNotReceivedEvent,
    V2PaymentsSettlementAllocationIntentMatchedEvent,
    V2PaymentsSettlementAllocationIntentNotFoundEvent,
    V2PaymentsSettlementAllocationIntentSettledEvent,
    V2PaymentsSettlementAllocationIntentSubmittedEvent,
    V2PaymentsSettlementAllocationIntentSplitCanceledEvent,
    V2PaymentsSettlementAllocationIntentSplitCreatedEvent,
    V2PaymentsSettlementAllocationIntentSplitSettledEvent,
    V2ReportingReportRunCreatedEvent,
    V2ReportingReportRunFailedEvent,
    V2ReportingReportRunSucceededEvent,
    V2ReportingReportRunUpdatedEvent,
    V2SignalsAccountSignalFraudulentMerchantReadyEvent,
    V1AccountSignalsIncludingDelinquencyCreatedEventNotification,
    V1BillingMeterErrorReportTriggeredEventNotification,
    V1BillingMeterNoMeterFoundEventNotification,
    V2BillingCadenceBilledEventNotification,
    V2BillingCadenceCanceledEventNotification,
    V2BillingCadenceCreatedEventNotification,
    V2BillingLicenseFeeCreatedEventNotification,
    V2BillingLicenseFeeUpdatedEventNotification,
    V2BillingLicenseFeeVersionCreatedEventNotification,
    V2BillingLicensedItemCreatedEventNotification,
    V2BillingLicensedItemUpdatedEventNotification,
    V2BillingMeteredItemCreatedEventNotification,
    V2BillingMeteredItemUpdatedEventNotification,
    V2BillingPricingPlanCreatedEventNotification,
    V2BillingPricingPlanUpdatedEventNotification,
    V2BillingPricingPlanComponentCreatedEventNotification,
    V2BillingPricingPlanComponentUpdatedEventNotification,
    V2BillingPricingPlanSubscriptionCollectionAwaitingCustomerActionEventNotification,
    V2BillingPricingPlanSubscriptionCollectionCurrentEventNotification,
    V2BillingPricingPlanSubscriptionCollectionPastDueEventNotification,
    V2BillingPricingPlanSubscriptionCollectionPausedEventNotification,
    V2BillingPricingPlanSubscriptionCollectionUnpaidEventNotification,
    V2BillingPricingPlanSubscriptionServicingActivatedEventNotification,
    V2BillingPricingPlanSubscriptionServicingCanceledEventNotification,
    V2BillingPricingPlanSubscriptionServicingPausedEventNotification,
    V2BillingPricingPlanVersionCreatedEventNotification,
    V2BillingRateCardCreatedEventNotification,
    V2BillingRateCardUpdatedEventNotification,
    V2BillingRateCardCustomPricingUnitOverageRateCreatedEventNotification,
    V2BillingRateCardRateCreatedEventNotification,
    V2BillingRateCardSubscriptionActivatedEventNotification,
    V2BillingRateCardSubscriptionCanceledEventNotification,
    V2BillingRateCardSubscriptionCollectionAwaitingCustomerActionEventNotification,
    V2BillingRateCardSubscriptionCollectionCurrentEventNotification,
    V2BillingRateCardSubscriptionCollectionPastDueEventNotification,
    V2BillingRateCardSubscriptionCollectionPausedEventNotification,
    V2BillingRateCardSubscriptionCollectionUnpaidEventNotification,
    V2BillingRateCardSubscriptionServicingActivatedEventNotification,
    V2BillingRateCardSubscriptionServicingCanceledEventNotification,
    V2BillingRateCardSubscriptionServicingPausedEventNotification,
    V2BillingRateCardVersionCreatedEventNotification,
    V2CoreAccountClosedEventNotification,
    V2CoreAccountCreatedEventNotification,
    V2CoreAccountUpdatedEventNotification,
    V2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEventNotification,
    V2CoreAccountIncludingConfigurationCardCreatorUpdatedEventNotification,
    V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEventNotification,
    V2CoreAccountIncludingConfigurationCustomerUpdatedEventNotification,
    V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEventNotification,
    V2CoreAccountIncludingConfigurationMerchantUpdatedEventNotification,
    V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEventNotification,
    V2CoreAccountIncludingConfigurationRecipientUpdatedEventNotification,
    V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEventNotification,
    V2CoreAccountIncludingConfigurationStorerUpdatedEventNotification,
    V2CoreAccountIncludingDefaultsUpdatedEventNotification,
    V2CoreAccountIncludingFutureRequirementsUpdatedEventNotification,
    V2CoreAccountIncludingIdentityUpdatedEventNotification,
    V2CoreAccountIncludingRequirementsUpdatedEventNotification,
    V2CoreAccountLinkReturnedEventNotification,
    V2CoreAccountPersonCreatedEventNotification,
    V2CoreAccountPersonDeletedEventNotification,
    V2CoreAccountPersonUpdatedEventNotification,
    V2CoreAccountSignalsFraudulentWebsiteReadyEventNotification,
    V2CoreBatchJobBatchFailedEventNotification,
    V2CoreBatchJobCanceledEventNotification,
    V2CoreBatchJobCompletedEventNotification,
    V2CoreBatchJobCreatedEventNotification,
    V2CoreBatchJobReadyForUploadEventNotification,
    V2CoreBatchJobTimeoutEventNotification,
    V2CoreBatchJobUpdatedEventNotification,
    V2CoreBatchJobUploadTimeoutEventNotification,
    V2CoreBatchJobValidatingEventNotification,
    V2CoreBatchJobValidationFailedEventNotification,
    V2CoreClaimableSandboxClaimedEventNotification,
    V2CoreClaimableSandboxCreatedEventNotification,
    V2CoreClaimableSandboxExpiredEventNotification,
    V2CoreClaimableSandboxExpiringEventNotification,
    V2CoreClaimableSandboxSandboxDetailsOwnerAccountUpdatedEventNotification,
    V2CoreEventDestinationPingEventNotification,
    V2CoreHealthApiErrorFiringEventNotification,
    V2CoreHealthApiErrorResolvedEventNotification,
    V2CoreHealthApiLatencyFiringEventNotification,
    V2CoreHealthApiLatencyResolvedEventNotification,
    V2CoreHealthAuthorizationRateDropFiringEventNotification,
    V2CoreHealthAuthorizationRateDropResolvedEventNotification,
    V2CoreHealthEventGenerationFailureResolvedEventNotification,
    V2CoreHealthFraudRateIncreasedEventNotification,
    V2CoreHealthIssuingAuthorizationRequestErrorsFiringEventNotification,
    V2CoreHealthIssuingAuthorizationRequestErrorsResolvedEventNotification,
    V2CoreHealthIssuingAuthorizationRequestTimeoutFiringEventNotification,
    V2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEventNotification,
    V2CoreHealthPaymentMethodErrorFiringEventNotification,
    V2CoreHealthPaymentMethodErrorResolvedEventNotification,
    V2CoreHealthSepaDebitDelayedFiringEventNotification,
    V2CoreHealthSepaDebitDelayedResolvedEventNotification,
    V2CoreHealthTrafficVolumeDropFiringEventNotification,
    V2CoreHealthTrafficVolumeDropResolvedEventNotification,
    V2CoreHealthWebhookLatencyFiringEventNotification,
    V2CoreHealthWebhookLatencyResolvedEventNotification,
    V2IamApiKeyCreatedEventNotification,
    V2IamApiKeyDefaultSecretRevealedEventNotification,
    V2IamApiKeyExpiredEventNotification,
    V2IamApiKeyPermissionsUpdatedEventNotification,
    V2IamApiKeyRotatedEventNotification,
    V2IamApiKeyUpdatedEventNotification,
    V2IamStripeAccessGrantApprovedEventNotification,
    V2IamStripeAccessGrantCanceledEventNotification,
    V2IamStripeAccessGrantDeniedEventNotification,
    V2IamStripeAccessGrantRemovedEventNotification,
    V2IamStripeAccessGrantRequestedEventNotification,
    V2IamStripeAccessGrantUpdatedEventNotification,
    V2MoneyManagementAdjustmentCreatedEventNotification,
    V2MoneyManagementFinancialAccountCreatedEventNotification,
    V2MoneyManagementFinancialAccountUpdatedEventNotification,
    V2MoneyManagementFinancialAddressActivatedEventNotification,
    V2MoneyManagementFinancialAddressFailedEventNotification,
    V2MoneyManagementInboundTransferAvailableEventNotification,
    V2MoneyManagementInboundTransferBankDebitFailedEventNotification,
    V2MoneyManagementInboundTransferBankDebitProcessingEventNotification,
    V2MoneyManagementInboundTransferBankDebitQueuedEventNotification,
    V2MoneyManagementInboundTransferBankDebitReturnedEventNotification,
    V2MoneyManagementInboundTransferBankDebitSucceededEventNotification,
    V2MoneyManagementOutboundPaymentCanceledEventNotification,
    V2MoneyManagementOutboundPaymentCreatedEventNotification,
    V2MoneyManagementOutboundPaymentFailedEventNotification,
    V2MoneyManagementOutboundPaymentPostedEventNotification,
    V2MoneyManagementOutboundPaymentReturnedEventNotification,
    V2MoneyManagementOutboundPaymentUpdatedEventNotification,
    V2MoneyManagementOutboundTransferCanceledEventNotification,
    V2MoneyManagementOutboundTransferCreatedEventNotification,
    V2MoneyManagementOutboundTransferFailedEventNotification,
    V2MoneyManagementOutboundTransferPostedEventNotification,
    V2MoneyManagementOutboundTransferReturnedEventNotification,
    V2MoneyManagementOutboundTransferUpdatedEventNotification,
    V2MoneyManagementPayoutMethodCreatedEventNotification,
    V2MoneyManagementPayoutMethodUpdatedEventNotification,
    V2MoneyManagementReceivedCreditAvailableEventNotification,
    V2MoneyManagementReceivedCreditFailedEventNotification,
    V2MoneyManagementReceivedCreditReturnedEventNotification,
    V2MoneyManagementReceivedCreditSucceededEventNotification,
    V2MoneyManagementReceivedDebitCanceledEventNotification,
    V2MoneyManagementReceivedDebitFailedEventNotification,
    V2MoneyManagementReceivedDebitPendingEventNotification,
    V2MoneyManagementReceivedDebitSucceededEventNotification,
    V2MoneyManagementReceivedDebitUpdatedEventNotification,
    V2MoneyManagementRecipientVerificationCreatedEventNotification,
    V2MoneyManagementRecipientVerificationUpdatedEventNotification,
    V2MoneyManagementTransactionCreatedEventNotification,
    V2MoneyManagementTransactionUpdatedEventNotification,
    V2PaymentsOffSessionPaymentAttemptFailedEventNotification,
    V2PaymentsOffSessionPaymentAttemptStartedEventNotification,
    V2PaymentsOffSessionPaymentAuthorizationAttemptFailedEventNotification,
    V2PaymentsOffSessionPaymentAuthorizationAttemptStartedEventNotification,
    V2PaymentsOffSessionPaymentCanceledEventNotification,
    V2PaymentsOffSessionPaymentCreatedEventNotification,
    V2PaymentsOffSessionPaymentFailedEventNotification,
    V2PaymentsOffSessionPaymentRequiresCaptureEventNotification,
    V2PaymentsOffSessionPaymentSucceededEventNotification,
    V2PaymentsSettlementAllocationIntentCanceledEventNotification,
    V2PaymentsSettlementAllocationIntentCreatedEventNotification,
    V2PaymentsSettlementAllocationIntentErroredEventNotification,
    V2PaymentsSettlementAllocationIntentFundsNotReceivedEventNotification,
    V2PaymentsSettlementAllocationIntentMatchedEventNotification,
    V2PaymentsSettlementAllocationIntentNotFoundEventNotification,
    V2PaymentsSettlementAllocationIntentSettledEventNotification,
    V2PaymentsSettlementAllocationIntentSubmittedEventNotification,
    V2PaymentsSettlementAllocationIntentSplitCanceledEventNotification,
    V2PaymentsSettlementAllocationIntentSplitCreatedEventNotification,
    V2PaymentsSettlementAllocationIntentSplitSettledEventNotification,
    V2ReportingReportRunCreatedEventNotification,
    V2ReportingReportRunFailedEventNotification,
    V2ReportingReportRunSucceededEventNotification,
    V2ReportingReportRunUpdatedEventNotification,
    V2SignalsAccountSignalFraudulentMerchantReadyEventNotification,
  };
}
