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
  | V2CoreAccountIncludingDefaultsUpdatedEvent
  | V2CoreAccountIncludingFutureRequirementsUpdatedEvent
  | V2CoreAccountIncludingIdentityUpdatedEvent
  | V2CoreAccountIncludingRequirementsUpdatedEvent
  | V2CoreAccountLinkReturnedEvent
  | V2CoreAccountPersonCreatedEvent
  | V2CoreAccountPersonDeletedEvent
  | V2CoreAccountPersonUpdatedEvent
  | V2CoreEventDestinationPingEvent;

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
  | V2CoreAccountIncludingDefaultsUpdatedEventNotification
  | V2CoreAccountIncludingFutureRequirementsUpdatedEventNotification
  | V2CoreAccountIncludingIdentityUpdatedEventNotification
  | V2CoreAccountIncludingRequirementsUpdatedEventNotification
  | V2CoreAccountLinkReturnedEventNotification
  | V2CoreAccountPersonCreatedEventNotification
  | V2CoreAccountPersonDeletedEventNotification
  | V2CoreAccountPersonUpdatedEventNotification
  | V2CoreEventDestinationPingEventNotification;

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
    export type Configuration = 'customer' | 'merchant' | 'recipient';

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
    V2CoreAccountIncludingDefaultsUpdatedEvent,
    V2CoreAccountIncludingFutureRequirementsUpdatedEvent,
    V2CoreAccountIncludingIdentityUpdatedEvent,
    V2CoreAccountIncludingRequirementsUpdatedEvent,
    V2CoreAccountLinkReturnedEvent,
    V2CoreAccountPersonCreatedEvent,
    V2CoreAccountPersonDeletedEvent,
    V2CoreAccountPersonUpdatedEvent,
    V2CoreEventDestinationPingEvent,
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
    V2CoreAccountIncludingDefaultsUpdatedEventNotification,
    V2CoreAccountIncludingFutureRequirementsUpdatedEventNotification,
    V2CoreAccountIncludingIdentityUpdatedEventNotification,
    V2CoreAccountIncludingRequirementsUpdatedEventNotification,
    V2CoreAccountLinkReturnedEventNotification,
    V2CoreAccountPersonCreatedEventNotification,
    V2CoreAccountPersonDeletedEventNotification,
    V2CoreAccountPersonUpdatedEventNotification,
    V2CoreEventDestinationPingEventNotification,
  };
}
