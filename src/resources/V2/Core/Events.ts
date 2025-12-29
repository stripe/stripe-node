// This file is manually maintained
import {Response} from '../../../lib.js';
import {StripeResource} from '../../../StripeResource.js';
import {StripeContext} from '../../../StripeContext.js';
import {Billing} from '../../Billing/index.js';
import {EventDestination} from './EventDestinations.js';

const stripeMethod = StripeResource.method;

export class EventResource extends StripeResource {
  retrieve(...args: any[]): Promise<Response<any>> {
    const transformResponseData = (response: any): any => {
      return this.addFetchRelatedObjectIfNeeded(response);
    };
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/core/events/{id}',
      transformResponseData,
    }).apply(this, args);
  }

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
      transformResponseData,
    }).apply(this, args);
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
  changes?: Event.Changes;

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
  reason?: Event.Reason;

  /**
   * The type of the event.
   */
  type: string;
}

export interface EventNotificationBase extends Omit<EventBase, 'context'> {
  context?: StripeContext;
}

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

export type Event =
  | Events.V1BillingMeterErrorReportTriggeredEvent
  | Events.V1BillingMeterNoMeterFoundEvent
  | Events.V2CoreEventDestinationPingEvent;
export type EventNotification =
  | Events.V1BillingMeterErrorReportTriggeredEventNotification
  | Events.V1BillingMeterNoMeterFoundEventNotification
  | Events.V2CoreEventDestinationPingEventNotification;

export namespace Events {
  /**
   * Object containing the reference to API resource relevant to the event.
   */
  export interface RelatedObject {
    /**
     * Unique identifier for the object relevant to the event.
     */
    id: string;

    /**
     * Type of the object relevant to the event.
     */
    type: string;

    /**
     * URL to retrieve the resource.
     */
    url: string;
  }

  /**
   * Represents the shape of an EventNotification that the SDK didn't know about when it was generated.
   */
  export interface UnknownEventNotification extends EventNotificationBase {
    /**
     * Object containing the reference to API resource relevant to the event.
     */
    related_object: Events.RelatedObject | null;
    /**
     * Fetches the full object corresponding to the `related_object` field.
     * Returns `null` if there is no `related_object`.
     */
    fetchRelatedObject: () => Promise<unknown>;
    /**
     * Fetches the full Event object corresponding to this notification.
     */
    fetchEvent: () => Promise<EventBase>;
  }

  /**
   * Occurs when a Meter has invalid async usage events.
   */
  export interface V1BillingMeterErrorReportTriggeredEvent extends EventBase {
    type: 'v1.billing.meter.error_report_triggered';
    // Retrieves data specific to this event.
    data: V1BillingMeterErrorReportTriggeredEvent.Data;
    // Object containing the reference to API resource relevant to the event.
    related_object: Events.RelatedObject;
    // Retrieves the object associated with the event.
    fetchRelatedObject(): Promise<Billing.Meter>;
  }
  export interface V1BillingMeterErrorReportTriggeredEventNotification
    extends EventNotificationBase {
    type: 'v1.billing.meter.error_report_triggered';
    // Object containing the reference to API resource relevant to the event.
    related_object: RelatedObject;
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
   * A ping event used to test the connection to an EventDestination.
   */
  export interface V2CoreEventDestinationPingEvent extends EventBase {
    type: 'v2.core.event_destination.ping';
    // Object containing the reference to API resource relevant to the event.
    related_object: Events.RelatedObject;
    // Retrieves the object associated with the event.
    fetchRelatedObject(): Promise<EventDestination>;
  }
  export interface V2CoreEventDestinationPingEventNotification
    extends EventNotificationBase {
    type: 'v2.core.event_destination.ping';
    // Object containing the reference to API resource relevant to the event.
    related_object: Events.RelatedObject;
    // Retrieves the object associated with the event.
    fetchRelatedObject(): Promise<EventDestination>;
    fetchEvent(): Promise<V2CoreEventDestinationPingEvent>;
  }
}
