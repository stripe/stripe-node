// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {Event} from './Events.js';
import {MetadataParam, Metadata} from '../../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';
import {DeletedObject} from './../../V2/DeletedObject.js';

export class EventDestinationResource extends StripeResource {
  /**
   * Lists all event destinations.
   */
  list(
    params?: V2.Core.EventDestinationListParams,
    options?: RequestOptions
  ): ApiListPromise<EventDestination> {
    return this._makeRequest(
      'GET',
      '/v2/core/event_destinations',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Create a new event destination.
   */
  create(
    params: V2.Core.EventDestinationCreateParams,
    options?: RequestOptions
  ): Promise<Response<EventDestination>> {
    return this._makeRequest(
      'POST',
      '/v2/core/event_destinations',
      params,
      options
    ) as any;
  }
  /**
   * Delete an event destination.
   */
  del(
    id: string,
    params?: V2.Core.EventDestinationDeleteParams,
    options?: RequestOptions
  ): Promise<Response<DeletedObject>> {
    return this._makeRequest(
      'DELETE',
      `/v2/core/event_destinations/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Retrieves the details of an event destination.
   */
  retrieve(
    id: string,
    params?: V2.Core.EventDestinationRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<EventDestination>> {
    return this._makeRequest(
      'GET',
      `/v2/core/event_destinations/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Update the details of an event destination.
   */
  update(
    id: string,
    params?: V2.Core.EventDestinationUpdateParams,
    options?: RequestOptions
  ): Promise<Response<EventDestination>> {
    return this._makeRequest(
      'POST',
      `/v2/core/event_destinations/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Disable an event destination.
   */
  disable(
    id: string,
    params?: V2.Core.EventDestinationDisableParams,
    options?: RequestOptions
  ): Promise<Response<EventDestination>> {
    return this._makeRequest(
      'POST',
      `/v2/core/event_destinations/${id}/disable`,
      params,
      options
    ) as any;
  }
  /**
   * Enable an event destination.
   */
  enable(
    id: string,
    params?: V2.Core.EventDestinationEnableParams,
    options?: RequestOptions
  ): Promise<Response<EventDestination>> {
    return this._makeRequest(
      'POST',
      `/v2/core/event_destinations/${id}/enable`,
      params,
      options
    ) as any;
  }
  /**
   * Send a `ping` event to an event destination.
   */
  ping(
    id: string,
    params?: V2.Core.EventDestinationPingParams,
    options?: RequestOptions
  ): Promise<Response<Event>> {
    return this._makeRequest(
      'POST',
      `/v2/core/event_destinations/${id}/ping`,
      params,
      options
    ) as any;
  }
}
export interface EventDestination {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.core.event_destination';

  /**
   * Amazon EventBridge configuration.
   */
  amazon_eventbridge?: V2.Core.EventDestination.AmazonEventbridge;

  /**
   * Time at which the object was created.
   */
  created: string;

  /**
   * An optional description of what the event destination is used for.
   */
  description: string;

  /**
   * The list of events to enable for this endpoint.
   */
  enabled_events: Array<string>;

  /**
   * Payload type of events being subscribed to.
   */
  event_payload: V2.Core.EventDestination.EventPayload;

  /**
   * Specifies which accounts' events route to this destination.
   * `@self`: Receive events from the account that owns the event destination.
   * `@accounts`: Receive events emitted from other accounts you manage which includes your v1 and v2 accounts.
   * `@organization_members`: Receive events from accounts directly linked to the organization.
   * `@organization_members/@accounts`: Receive events from all accounts connected to any platform accounts in the organization.
   */
  events_from?: Array<string>;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Metadata.
   */
  metadata?: Metadata;

  /**
   * Event destination name.
   */
  name: string;

  /**
   * If using the snapshot event payload, the API version events are rendered as.
   */
  snapshot_api_version?: string;

  /**
   * Status. It can be set to either enabled or disabled.
   */
  status: V2.Core.EventDestination.Status;

  /**
   * Additional information about event destination status.
   */
  status_details?: V2.Core.EventDestination.StatusDetails;

  /**
   * Event destination type.
   */
  type: V2.Core.EventDestination.Type;

  /**
   * Time at which the object was last updated.
   */
  updated: string;

  /**
   * Webhook endpoint configuration.
   */
  webhook_endpoint?: V2.Core.EventDestination.WebhookEndpoint;
}
export namespace V2 {
  export namespace Core {
    export namespace EventDestination {
      export interface AmazonEventbridge {
        /**
         * The AWS account ID.
         */
        aws_account_id: string;

        /**
         * The ARN of the AWS event source.
         */
        aws_event_source_arn: string;

        /**
         * The state of the AWS event source.
         */
        aws_event_source_status: AmazonEventbridge.AwsEventSourceStatus;
      }

      export type EventPayload = 'snapshot' | 'thin';

      export type Status = 'disabled' | 'enabled';

      export interface StatusDetails {
        /**
         * Details about why the event destination has been disabled.
         */
        disabled?: StatusDetails.Disabled;
      }

      export type Type = 'amazon_eventbridge' | 'webhook_endpoint';

      export interface WebhookEndpoint {
        /**
         * The signing secret of the webhook endpoint, only includable on creation.
         */
        signing_secret?: string;

        /**
         * The URL of the webhook endpoint, includable.
         */
        url?: string;
      }

      export namespace AmazonEventbridge {
        export type AwsEventSourceStatus =
          | 'active'
          | 'deleted'
          | 'pending'
          | 'unknown';
      }

      export namespace StatusDetails {
        export interface Disabled {
          /**
           * Reason event destination has been disabled.
           */
          reason: Disabled.Reason;
        }

        export namespace Disabled {
          export type Reason = 'no_aws_event_source_exists' | 'user';
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Core {
    export interface EventDestinationCreateParams {
      /**
       * The list of events to enable for this endpoint.
       */
      enabled_events: Array<string>;

      /**
       * Payload type of events being subscribed to.
       */
      event_payload: EventDestinationCreateParams.EventPayload;

      /**
       * Event destination name.
       */
      name: string;

      /**
       * Event destination type.
       */
      type: EventDestinationCreateParams.Type;

      /**
       * Amazon EventBridge configuration.
       */
      amazon_eventbridge?: EventDestinationCreateParams.AmazonEventbridge;

      /**
       * An optional description of what the event destination is used for.
       */
      description?: string;

      /**
       * Specifies which accounts' events route to this destination.
       * `@self`: Receive events from the account that owns the event destination.
       * `@accounts`: Receive events emitted from other accounts you manage which includes your v1 and v2 accounts.
       * `@organization_members`: Receive events from accounts directly linked to the organization.
       * `@organization_members/@accounts`: Receive events from all accounts connected to any platform accounts in the organization.
       */
      events_from?: Array<string>;

      /**
       * Additional fields to include in the response.
       */
      include?: Array<EventDestinationCreateParams.Include>;

      /**
       * Metadata.
       */
      metadata?: MetadataParam;

      /**
       * If using the snapshot event payload, the API version events are rendered as.
       */
      snapshot_api_version?: string;

      /**
       * Webhook endpoint configuration.
       */
      webhook_endpoint?: EventDestinationCreateParams.WebhookEndpoint;
    }

    export namespace EventDestinationCreateParams {
      export type EventPayload = 'snapshot' | 'thin';

      export type Type = 'amazon_eventbridge' | 'webhook_endpoint';

      export interface AmazonEventbridge {
        /**
         * The AWS account ID.
         */
        aws_account_id: string;

        /**
         * The region of the AWS event source.
         */
        aws_region: string;
      }

      export type Include =
        | 'webhook_endpoint.signing_secret'
        | 'webhook_endpoint.url';

      export interface WebhookEndpoint {
        /**
         * The URL of the webhook endpoint.
         */
        url: string;
      }
    }
  }
}
export namespace V2 {
  export namespace Core {
    export interface EventDestinationRetrieveParams {
      /**
       * Additional fields to include in the response.
       */
      include?: Array<'webhook_endpoint.url'>;
    }
  }
}
export namespace V2 {
  export namespace Core {
    export interface EventDestinationUpdateParams {
      /**
       * An optional description of what the event destination is used for.
       */
      description?: string;

      /**
       * The list of events to enable for this endpoint.
       */
      enabled_events?: Array<string>;

      /**
       * Additional fields to include in the response. Currently supports `webhook_endpoint.url`.
       */
      include?: Array<'webhook_endpoint.url'>;

      /**
       * Metadata.
       */
      metadata?: MetadataParam;

      /**
       * Event destination name.
       */
      name?: string;

      /**
       * Webhook endpoint configuration.
       */
      webhook_endpoint?: EventDestinationUpdateParams.WebhookEndpoint;
    }

    export namespace EventDestinationUpdateParams {
      export interface WebhookEndpoint {
        /**
         * The URL of the webhook endpoint.
         */
        url: string;
      }
    }
  }
}
export namespace V2 {
  export namespace Core {
    export interface EventDestinationListParams {
      /**
       * Additional fields to include in the response. Currently supports `webhook_endpoint.url`.
       */
      include?: Array<'webhook_endpoint.url'>;

      /**
       * The page size.
       */
      limit?: number;
    }
  }
}
export namespace V2 {
  export namespace Core {
    export interface EventDestinationDeleteParams {}
  }
}
export namespace V2 {
  export namespace Core {
    export interface EventDestinationDisableParams {}
  }
}
export namespace V2 {
  export namespace Core {
    export interface EventDestinationEnableParams {}
  }
}
export namespace V2 {
  export namespace Core {
    export interface EventDestinationPingParams {}
  }
}
