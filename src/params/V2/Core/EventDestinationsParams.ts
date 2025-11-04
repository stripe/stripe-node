// File generated from our OpenAPI spec

namespace V2 {
  namespace Core {
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
       * Where events should be routed from.
       */
      events_from?: Array<EventDestinationCreateParams.EventsFrom>;

      /**
       * Additional fields to include in the response.
       */
      include?: Array<EventDestinationCreateParams.Include>;

      /**
       * Metadata.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * If using the snapshot event payload, the API version events are rendered as.
       */
      snapshot_api_version?: string;

      /**
       * Webhook endpoint configuration.
       */
      webhook_endpoint?: EventDestinationCreateParams.WebhookEndpoint;
    }

    namespace EventDestinationCreateParams {
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

      export type EventsFrom = 'other_accounts' | 'self';

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
namespace V2 {
  namespace Core {
    export interface EventDestinationRetrieveParams {
      /**
       * Additional fields to include in the response.
       */
      include?: Array<'webhook_endpoint.url'>;
    }
  }
}
namespace V2 {
  namespace Core {
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
      metadata?: Stripe.MetadataParam;

      /**
       * Event destination name.
       */
      name?: string;

      /**
       * Webhook endpoint configuration.
       */
      webhook_endpoint?: EventDestinationUpdateParams.WebhookEndpoint;
    }

    namespace EventDestinationUpdateParams {
      export interface WebhookEndpoint {
        /**
         * The URL of the webhook endpoint.
         */
        url: string;
      }
    }
  }
}
namespace V2 {
  namespace Core {
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
namespace V2 {
  namespace Core {
    export interface EventDestinationDeleteParams {}
  }
}
namespace V2 {
  namespace Core {
    export interface EventDestinationDisableParams {}
  }
}
namespace V2 {
  namespace Core {
    export interface EventDestinationEnableParams {}
  }
}
namespace V2 {
  namespace Core {
    export interface EventDestinationPingParams {}
  }
}
