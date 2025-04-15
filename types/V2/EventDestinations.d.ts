// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      /**
       * Set up an event destination to receive events from Stripe across multiple destination types, including [webhook endpoints](https://docs.stripe.com/webhooks) and [Amazon EventBridge](https://docs.stripe.com/event-destinations/eventbridge). Event destinations support receiving [thin events](https://docs.stripe.com/api/v2/events) and [snapshot events](https://docs.stripe.com/api/events).
       */
      interface EventDestination {
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
         * Payload type of events being subscribed to.
         */
        event_payload: EventDestination.EventPayload;

        /**
         * Where events should be routed from.
         */
        events_from: Array<EventDestination.EventsFrom> | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Metadata.
         */
        metadata: Stripe.Metadata | null;

        /**
         * Event destination name.
         */
        name: string;

        /**
         * If using the snapshot event payload, the API version events are rendered as.
         */
        snapshot_api_version: string | null;

        /**
         * Status. It can be set to either enabled or disabled.
         */
        status: EventDestination.Status;

        /**
         * Additional information about event destination status.
         */
        status_details: EventDestination.StatusDetails | null;

        /**
         * Event destination type.
         */
        type: EventDestination.Type;

        /**
         * Time at which the object was last updated.
         */
        updated: string;

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
           * The state of the AWS event source.
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

        type EventPayload = 'snapshot' | 'thin';

        type EventsFrom = 'other_accounts' | 'self';

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
             * Reason event destination has been disabled.
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
           * The signing secret of the webhook endpoint, only includable on creation.
           */
          signing_secret: string | null;

          /**
           * The URL of the webhook endpoint, includable.
           */
          url: string | null;
        }
      }
    }
  }
}
