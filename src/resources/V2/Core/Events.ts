// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {RangeQueryParam, Decimal} from '../../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';

export class EventResource extends StripeResource {
  /**
   * List events, going back up to 30 days.
   */
  list(
    params?: V2.Core.EventListParams,
    options?: RequestOptions
  ): ApiListPromise<Event> {
    const transformResponseData = (response: any): any => {
      return {
        ...response,
        data: response.data.map(this.addFetchRelatedObjectIfNeeded.bind(this)),
      };
    };
    return this._makeRequest('GET', '/v2/core/events', params, options, {
      methodType: 'list',
      transformResponseData: transformResponseData,
    }) as any;
  }
  /**
   * Retrieves the details of an event.
   */
  retrieve(
    id: string,
    params?: V2.Core.EventRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Event>> {
    const transformResponseData = (response: any): any => {
      return this.addFetchRelatedObjectIfNeeded(response);
    };
    return this._makeRequest('GET', `/v2/core/events/${id}`, params, options, {
      transformResponseData: transformResponseData,
    }) as any;
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
        this._makeRequest('GET', pulledEvent.related_object.url, undefined, {
          stripeContext: pulledEvent.context,
          headers: {
            'Stripe-Request-Trigger': `event=${pulledEvent.id}`,
          },
        }),
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
         * Information on the API request that instigated the event.
         */
        request?: Reason.Request;

        /**
         * Event reason type.
         */
        type: 'request';
      }

      export namespace Reason {
        export interface Request {
          /**
           * ID of the API request that caused the event.
           */
          id: string;

          /**
           * The idempotency key transmitted during the request.
           */
          idempotency_key: string;
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Core {
    export interface EventRetrieveParams {}
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
import {Billing as V1Billing} from './../../Billing/index.js';
import {MoneyManagement} from './../MoneyManagement/index.js';
export type Event =
  | V1BillingMeterErrorReportTriggeredEvent
  | V1BillingMeterNoMeterFoundEvent
  | V2CoreAccountClosedEvent
  | V2CoreAccountCreatedEvent
  | V2CoreAccountUpdatedEvent
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
  | V2CoreEventDestinationPingEvent
  | V2CoreHealthEventGenerationFailureResolvedEvent
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
  | V2MoneyManagementTransactionCreatedEvent
  | V2MoneyManagementTransactionUpdatedEvent;

export type EventNotification =
  | V1BillingMeterErrorReportTriggeredEventNotification
  | V1BillingMeterNoMeterFoundEventNotification
  | V2CoreAccountClosedEventNotification
  | V2CoreAccountCreatedEventNotification
  | V2CoreAccountUpdatedEventNotification
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
  | V2CoreEventDestinationPingEventNotification
  | V2CoreHealthEventGenerationFailureResolvedEventNotification
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
  | V2MoneyManagementTransactionCreatedEventNotification
  | V2MoneyManagementTransactionUpdatedEventNotification;

import {StripeContext} from '../../../StripeContext.js';

import {V2Amount} from '../V2Amounts.js';

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
 */ export interface UnknownEventNotification extends EventNotificationBase {
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

export declare namespace Events {
  export {
    UnknownEventNotification,
    V1BillingMeterErrorReportTriggeredEvent,
    V1BillingMeterNoMeterFoundEvent,
    V2CoreAccountClosedEvent,
    V2CoreAccountCreatedEvent,
    V2CoreAccountUpdatedEvent,
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
    V2CoreEventDestinationPingEvent,
    V2CoreHealthEventGenerationFailureResolvedEvent,
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
    V2MoneyManagementTransactionCreatedEvent,
    V2MoneyManagementTransactionUpdatedEvent,
    V1BillingMeterErrorReportTriggeredEventNotification,
    V1BillingMeterNoMeterFoundEventNotification,
    V2CoreAccountClosedEventNotification,
    V2CoreAccountCreatedEventNotification,
    V2CoreAccountUpdatedEventNotification,
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
    V2CoreEventDestinationPingEventNotification,
    V2CoreHealthEventGenerationFailureResolvedEventNotification,
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
    V2MoneyManagementTransactionCreatedEventNotification,
    V2MoneyManagementTransactionUpdatedEventNotification,
  };
}
