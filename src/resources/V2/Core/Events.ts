// File generated from our OpenAPI spec

import { StripeContext } from '../../../StripeContext.js';

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

export type Event = unknown

export type EventNotification = unknown

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

export declare namespace Events {
  export {
    UnknownEventNotification,
  };
}
