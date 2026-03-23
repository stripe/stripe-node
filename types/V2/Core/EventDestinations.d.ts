// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Core {
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
          amazon_eventbridge?: EventDestination.AmazonEventbridge;

          /**
           * Azure Event Grid configuration.
           */
          azure_event_grid?: EventDestination.AzureEventGrid;

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
          metadata?: Stripe.Metadata;

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
          status: EventDestination.Status;

          /**
           * Additional information about event destination status.
           */
          status_details?: EventDestination.StatusDetails;

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
          webhook_endpoint?: EventDestination.WebhookEndpoint;
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

          interface AzureEventGrid {
            /**
             * The name of the Azure partner topic.
             */
            azure_partner_topic_name: string;

            /**
             * The status of the Azure partner topic.
             */
            azure_partner_topic_status: AzureEventGrid.AzurePartnerTopicStatus;

            /**
             * The Azure region.
             */
            azure_region: string;

            /**
             * The name of the Azure resource group.
             */
            azure_resource_group_name: string;

            /**
             * The Azure subscription ID.
             */
            azure_subscription_id: string;
          }

          namespace AzureEventGrid {
            type AzurePartnerTopicStatus =
              | 'activated'
              | 'deleted'
              | 'never_activated'
              | 'unknown';
          }

          type EventPayload = 'snapshot' | 'thin';

          type Status = 'disabled' | 'enabled';

          interface StatusDetails {
            /**
             * Details about why the event destination has been disabled.
             */
            disabled?: StatusDetails.Disabled;
          }

          namespace StatusDetails {
            interface Disabled {
              /**
               * Reason event destination has been disabled.
               */
              reason: Disabled.Reason;
            }

            namespace Disabled {
              type Reason =
                | 'no_aws_event_source_exists'
                | 'no_azure_partner_topic_exists'
                | 'user';
            }
          }

          type Type =
            | 'amazon_eventbridge'
            | 'azure_event_grid'
            | 'webhook_endpoint';

          interface WebhookEndpoint {
            /**
             * The signing secret of the webhook endpoint, only includable on creation.
             */
            signing_secret?: string;

            /**
             * The URL of the webhook endpoint, includable.
             */
            url?: string;
          }
        }
      }
    }
  }
}
