// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      /**
       * The EventDestination object.
       */
      interface EventDestination {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value of the object field.
         */
        object: 'event_destination';

        /**
         * Amazon EventBridge configuration.
         */
        amazon_eventbridge: EventDestination.AmazonEventbridge | null;

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
         * Closed Enum. Namespace of events being subscribed to.
         */
        event_namespace: EventDestination.EventNamespace;

        /**
         * Open Enum. Where events should be routed from.
         */
        events_from: Array<EventDestination.EventsFrom> | null;

        /**
         * Metadata.
         */
        metadata: Stripe.Metadata | null;

        /**
         * Event destination name.
         */
        name: string;

        /**
         * Closed Enum. Status. It can be set to either enabled or disabled.
         */
        status: EventDestination.Status;

        /**
         * Additional information about event destination status.
         */
        status_details: EventDestination.StatusDetails | null;

        /**
         * Closed Enum. Event destination type.
         */
        type: EventDestination.Type;

        /**
         * Time at which the object was last updated.
         */
        updated: string;

        /**
         * If using the v1 event namespace, the API version events are rendered as.
         */
        v1_api_version: string | null;

        /**
         * Webhook endpoint configuration.
         */
        webhook_endpoint: EventDestination.WebhookEndpoint | null;
      }

      namespace EventDestination {
        interface AmazonEventbridge {
          /**
           * The AWS account ID.
           */
          aws_account_id: string;

          /**
           * The ARN of the AWS event source.
           */
          aws_event_source_arn: string;

          /**
           * Closed Enum. The state of the AWS event source.
           */
          aws_event_source_status: AmazonEventbridge.AwsEventSourceStatus;
        }

        namespace AmazonEventbridge {
          type AwsEventSourceStatus =
            | 'active'
            | 'deleted'
            | 'pending'
            | 'unknown';
        }

        type EventNamespace = 'v1' | 'v2';

        type EventsFrom = 'accounts' | 'self';

        type Status = 'disabled' | 'enabled';

        interface StatusDetails {
          /**
           * Details about why the event destination has been disabled.
           */
          disabled: StatusDetails.Disabled | null;
        }

        namespace StatusDetails {
          interface Disabled {
            /**
             * Closed Enum. Reason event destination has been disabled.
             */
            reason: Disabled.Reason;
          }

          namespace Disabled {
            type Reason = 'no_aws_event_source_exists' | 'user';
          }
        }

        type Type = 'amazon_eventbridge' | 'webhook_endpoint';

        interface WebhookEndpoint {
          /**
           * The URL of the webhook endpoint.
           */
          url: string;
        }
      }
    }
  }
}
