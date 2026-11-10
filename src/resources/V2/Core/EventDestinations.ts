// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {Event} from './Events.js';
import {MetadataParam, OtherString, Metadata} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';
import {DeletedObject} from './../../V2/DeletedObject.js';

export class EventDestinationResource extends StripeResource {
  /**
   * Lists all event destinations.
   */
  list(
    params?: V2.Core.EventDestinationListParams,
    options?: RequestOptions
  ): V2ListPromise<EventDestination> {
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
      `/v2/core/event_destinations/${encodeURIComponent(id)}`,
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
      `/v2/core/event_destinations/${encodeURIComponent(id)}`,
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
      `/v2/core/event_destinations/${encodeURIComponent(id)}`,
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
      `/v2/core/event_destinations/${encodeURIComponent(id)}/disable`,
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
      `/v2/core/event_destinations/${encodeURIComponent(id)}/enable`,
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
      `/v2/core/event_destinations/${encodeURIComponent(id)}/ping`,
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
   * Configuration for delivering events through an Amazon EventBridge partner event source.
   */
  amazon_eventbridge?: EventDestination.AmazonEventbridge;

  /**
   * Configuration for delivering events through an Azure Event Grid partner topic.
   */
  azure_event_grid?: EventDestination.AzureEventGrid;

  /**
   * The time when the destination was created.
   */
  created: string;

  /**
   * An optional user-defined description of the destination's purpose.
   */
  description: string;

  /**
   * The list of event types enabled for delivery to this destination.
   */
  enabled_events: Array<string>;

  /**
   * Whether to deliver as snapshot or thin events.
   */
  event_payload: EventDestination.EventPayload;

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
   * User-defined key/value data for the destination; it has no effect on event matching or delivery.
   */
  metadata?: Metadata;

  /**
   * A user-defined label for identifying the destination in Stripe.
   */
  name: string;

  /**
   * For snapshot events only, the Stripe API version used to render event objects. You can't change this value after you create the event destination. Thin events are not pinned to an API version.
   */
  snapshot_api_version?: string;

  /**
   * Whether Stripe currently attempts delivery. Stripe attempts delivery to enabled destinations when their provider configuration is active; disabled destinations do not receive delivery attempts.
   */
  status: EventDestination.Status;

  /**
   * Additional lifecycle context for the destination status, when available.
   */
  status_details?: EventDestination.StatusDetails;

  /**
   * The delivery transport. Chosen when the destination is created and cannot be changed by update.
   */
  type: EventDestination.Type;

  /**
   * The time when the destination object was last updated.
   */
  updated: string;

  /**
   * Configuration for delivering events to a webhook endpoint. Live mode requires HTTPS; sandbox mode also supports HTTP.
   */
  webhook_endpoint?: EventDestination.WebhookEndpoint;
}
export namespace EventDestination {
  export interface AmazonEventbridge {
    /**
     * The AWS account ID that owns the event bus receiving events.
     */
    aws_account_id: string;

    /**
     * The ARN of the Stripe-created partner event source in your AWS account.
     */
    aws_event_source_arn: string;

    /**
     * The AWS-reported lifecycle state of the partner event source.
     */
    aws_event_source_status: AmazonEventbridge.AwsEventSourceStatus;
  }

  export interface AzureEventGrid {
    /**
     * The name of the Stripe-created partner topic that receives events.
     */
    azure_partner_topic_name: string;

    /**
     * The Azure-reported lifecycle state of the partner topic.
     */
    azure_partner_topic_status: AzureEventGrid.AzurePartnerTopicStatus;

    /**
     * The Azure region where the partner topic is located.
     */
    azure_region: string;

    /**
     * The Azure resource group containing the partner topic.
     */
    azure_resource_group_name: string;

    /**
     * The Azure subscription containing the resource group and partner topic.
     */
    azure_subscription_id: string;
  }

  export type EventPayload = 'snapshot' | 'thin';

  export type Status = 'disabled' | 'enabled';

  export interface StatusDetails {
    /**
     * Present when the destination was disabled; identifies the cause, time, and provider-side object involved when available.
     */
    disabled?: StatusDetails.Disabled;
  }

  export type Type =
    | 'amazon_eventbridge'
    | 'azure_event_grid'
    | 'webhook_endpoint'
    | OtherString;

  export interface WebhookEndpoint {
    /**
     * The secret used to verify Stripe signatures on delivered events. Returned only in the create response when explicitly included; public API clients cannot retrieve it later.
     */
    signing_secret?: string;

    /**
     * The URL where Stripe sends matching events. Live mode requires HTTPS; sandbox mode also supports HTTP. Returned only when explicitly included.
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

  export namespace AzureEventGrid {
    export type AzurePartnerTopicStatus =
      | 'activated'
      | 'deleted'
      | 'never_activated'
      | 'unknown'
      | OtherString;
  }

  export namespace StatusDetails {
    export interface Disabled {
      /**
       * Reason event destination has been disabled.
       */
      reason: Disabled.Reason;
    }

    export namespace Disabled {
      export type Reason =
        | 'no_aws_event_source_exists'
        | 'no_azure_partner_topic_exists'
        | 'user'
        | OtherString;
    }
  }
}
export namespace V2 {
  export namespace Core {
    export interface EventDestinationCreateParams {
      /**
       * The list of event types enabled for delivery to this destination.
       */
      enabled_events: Array<string>;

      /**
       * Whether to deliver as snapshot or thin events.
       */
      event_payload: EventDestinationCreateParams.EventPayload;

      /**
       * A user-defined label for identifying the destination.
       */
      name: string;

      /**
       * The delivery transport. Chosen when the destination is created and cannot be changed by update.
       */
      type: EventDestinationCreateParams.Type;

      /**
       * AWS account and region where Stripe creates the EventBridge partner event source.
       */
      amazon_eventbridge?: EventDestinationCreateParams.AmazonEventbridge;

      /**
       * Azure subscription, resource group, and region where Stripe creates the partner topic.
       */
      azure_event_grid?: EventDestinationCreateParams.AzureEventGrid;

      /**
       * An optional user-defined description of the destination's purpose.
       */
      description?: string;

      /**
       * The account or organization scopes that can supply events. Use this with `enabled_events` to define the subscription.
       * `@self`: Receive events from the account that owns the event destination.
       * `@accounts`: Receive events emitted from other accounts you manage, including your v1 and v2 accounts.
       * `@organization_members`: Receive events from accounts directly linked to the organization.
       * `@organization_members/@accounts`: Receive events from all accounts connected to any platform accounts in the organization.
       */
      events_from?: Array<string>;

      /**
       * Include normally redacted webhook fields in the create response. Public API clients must include `webhook_endpoint.signing_secret` to receive the signing secret.
       */
      include?: Array<EventDestinationCreateParams.Include>;

      /**
       * User-defined key/value data for the destination.
       */
      metadata?: MetadataParam;

      /**
       * For snapshot events only, the Stripe API version used to render event objects; do not provide this for thin events.
       */
      snapshot_api_version?: string;

      /**
       * Delivery target for the webhook endpoint. Live mode requires HTTPS; sandbox mode also supports HTTP.
       */
      webhook_endpoint?: EventDestinationCreateParams.WebhookEndpoint;
    }

    export namespace EventDestinationCreateParams {
      export type EventPayload = 'snapshot' | 'thin';

      export type Type =
        | 'amazon_eventbridge'
        | 'azure_event_grid'
        | 'webhook_endpoint'
        | OtherString;

      export interface AmazonEventbridge {
        /**
         * Your AWS account where Stripe creates the partner event source.
         */
        aws_account_id: string;

        /**
         * The AWS region where Stripe creates the partner event source.
         */
        aws_region: string;
      }

      export interface AzureEventGrid {
        /**
         * The Azure region where Stripe creates the partner topic.
         */
        azure_region: string;

        /**
         * The Azure resource group where Stripe creates the partner topic.
         */
        azure_resource_group_name: string;

        /**
         * The Azure subscription where Stripe creates the partner topic.
         */
        azure_subscription_id: string;
      }

      export type Include =
        | 'webhook_endpoint.signing_secret'
        | 'webhook_endpoint.url'
        | OtherString;

      export interface WebhookEndpoint {
        /**
         * The URL where Stripe sends matching events. Live mode requires HTTPS; sandbox mode also supports HTTP.
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
      include?: Array<EventDestinationRetrieveParams.Include>;
    }

    export namespace EventDestinationRetrieveParams {
      export type Include = 'webhook_endpoint.url' | OtherString;
    }
  }
}
export namespace V2 {
  export namespace Core {
    export interface EventDestinationUpdateParams {
      /**
       * An optional user-defined description of the destination's purpose; it does not control routing.
       */
      description?: string;

      /**
       * The list of event types enabled for delivery to this destination. Event scopes are configured when the destination is created.
       */
      enabled_events?: Array<string>;

      /**
       * Include the normally redacted `webhook_endpoint.url` in the response.
       */
      include?: Array<EventDestinationUpdateParams.Include>;

      /**
       * Metadata.
       */
      metadata?: MetadataParam;

      /**
       * A user-defined label for identifying the destination; it does not control routing.
       */
      name?: string;

      /**
       * New delivery target for the webhook endpoint. Live mode requires HTTPS; sandbox mode also supports HTTP.
       */
      webhook_endpoint?: EventDestinationUpdateParams.WebhookEndpoint;
    }

    export namespace EventDestinationUpdateParams {
      export type Include = 'webhook_endpoint.url' | OtherString;

      export interface WebhookEndpoint {
        /**
         * The URL where Stripe sends matching events. Live mode requires HTTPS; sandbox mode also supports HTTP.
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
       * Include the normally redacted `webhook_endpoint.url` in each returned destination.
       */
      include?: Array<EventDestinationListParams.Include>;

      /**
       * The page size.
       */
      limit?: number;
    }

    export namespace EventDestinationListParams {
      export type Include = 'webhook_endpoint.url' | OtherString;
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
