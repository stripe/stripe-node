// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Core {
        interface EventDestinationCreateParams {
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
          interface AmazonEventbridge {
            /**
             * The AWS account ID.
             */
            aws_account_id: string;

            /**
             * The region of the AWS event source.
             */
            aws_region: string;
          }

          type EventPayload = 'snapshot' | 'thin';

          type EventsFrom = 'other_accounts' | 'self';

          type Include =
            | 'webhook_endpoint.signing_secret'
            | 'webhook_endpoint.url';

          type Type = 'amazon_eventbridge' | 'webhook_endpoint';

          interface WebhookEndpoint {
            /**
             * The URL of the webhook endpoint.
             */
            url: string;
          }
        }
      }

      namespace Core {
        interface EventDestinationRetrieveParams {
          /**
           * Additional fields to include in the response.
           */
          include?: Array<'webhook_endpoint.url'>;
        }
      }

      namespace Core {
        interface EventDestinationUpdateParams {
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
          interface WebhookEndpoint {
            /**
             * The URL of the webhook endpoint.
             */
            url: string;
          }
        }
      }

      namespace Core {
        interface EventDestinationListParams {
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

      namespace Core {
        interface EventDestinationDeleteParams {}
      }

      namespace Core {
        interface EventDestinationDisableParams {}
      }

      namespace Core {
        interface EventDestinationEnableParams {}
      }

      namespace Core {
        interface EventDestinationPingParams {}
      }

      namespace Core {
        class EventDestinationsResource {
          /**
           * Create a new event destination.
           */
          create(
            params: EventDestinationCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.EventDestination>>;

          /**
           * Retrieves the details of an event destination.
           */
          retrieve(
            id: string,
            params?: EventDestinationRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.EventDestination>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.EventDestination>>;

          /**
           * Update the details of an event destination.
           */
          update(
            id: string,
            params?: EventDestinationUpdateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.EventDestination>>;

          /**
           * Lists all event destinations.
           */
          list(
            params?: EventDestinationListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.EventDestination>;
          list(
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.EventDestination>;

          /**
           * Delete an event destination.
           */
          del(
            id: string,
            params?: EventDestinationDeleteParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.EventDestination>>;
          del(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.EventDestination>>;

          /**
           * Disable an event destination.
           */
          disable(
            id: string,
            params?: EventDestinationDisableParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.EventDestination>>;
          disable(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.EventDestination>>;

          /**
           * Enable an event destination.
           */
          enable(
            id: string,
            params?: EventDestinationEnableParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.EventDestination>>;
          enable(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.EventDestination>>;

          /**
           * Send a `ping` event to an event destination.
           */
          ping(
            id: string,
            params?: EventDestinationPingParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Event>>;
          ping(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Event>>;
        }
      }
    }
  }
}
