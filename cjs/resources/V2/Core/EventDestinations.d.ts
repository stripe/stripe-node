import { StripeResource } from '../../../StripeResource.js';
import { RequestOptions } from '../../../Types.js';
import { MetadataParam, Metadata } from '../../../shared.js';
import { ApiListPromise, Response } from '../../../lib.js';
import { DeletedObject } from './../../V2/DeletedObject.js';
export declare class EventDestinationResource extends StripeResource {
    /**
     * Lists all event destinations.
     */
    list(params?: V2.Core.EventDestinationListParams, options?: RequestOptions): ApiListPromise<EventDestination>;
    list(options?: RequestOptions): ApiListPromise<EventDestination>;
    /**
     * Create a new event destination.
     */
    create(params: V2.Core.EventDestinationCreateParams, options?: RequestOptions): Promise<Response<EventDestination>>;
    /**
     * Delete an event destination.
     */
    del(id: string, params?: V2.Core.EventDestinationDeleteParams, options?: RequestOptions): Promise<Response<DeletedObject>>;
    del(id: string, options?: RequestOptions): Promise<Response<DeletedObject>>;
    /**
     * Retrieves the details of an event destination.
     */
    retrieve(id: string, params?: V2.Core.EventDestinationRetrieveParams, options?: RequestOptions): Promise<Response<EventDestination>>;
    retrieve(id: string, options?: RequestOptions): Promise<Response<EventDestination>>;
    /**
     * Update the details of an event destination.
     */
    update(id: string, params?: V2.Core.EventDestinationUpdateParams, options?: RequestOptions): Promise<Response<EventDestination>>;
    /**
     * Disable an event destination.
     */
    disable(id: string, params?: V2.Core.EventDestinationDisableParams, options?: RequestOptions): Promise<Response<EventDestination>>;
    disable(id: string, options?: RequestOptions): Promise<Response<EventDestination>>;
    /**
     * Enable an event destination.
     */
    enable(id: string, params?: V2.Core.EventDestinationEnableParams, options?: RequestOptions): Promise<Response<EventDestination>>;
    enable(id: string, options?: RequestOptions): Promise<Response<EventDestination>>;
    /**
     * Send a `ping` event to an event destination.
     */
    ping(id: string, params?: V2.Core.EventDestinationPingParams, options?: RequestOptions): Promise<Response<Event>>;
    ping(id: string, options?: RequestOptions): Promise<Response<Event>>;
}
export /**
 * Set up an event destination to receive events from Stripe across multiple destination types, including [webhook endpoints](https://docs.stripe.com/webhooks) and [Amazon EventBridge](https://docs.stripe.com/event-destinations/eventbridge). Event destinations support receiving [thin events](https://docs.stripe.com/api/v2/events) and [snapshot events](https://docs.stripe.com/api/events).
 */ interface EventDestination {
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
     * Where events should be routed from.
     */
    events_from?: Array<V2.Core.EventDestination.EventsFrom>;
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
export declare namespace V2 {
    namespace Core {
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
            type EventPayload = 'snapshot' | 'thin';
            type EventsFrom = 'other_accounts' | 'self';
            type Status = 'disabled' | 'enabled';
            interface StatusDetails {
                /**
                 * Details about why the event destination has been disabled.
                 */
                disabled?: StatusDetails.Disabled;
            }
            type Type = 'amazon_eventbridge' | 'webhook_endpoint';
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
            namespace AmazonEventbridge {
                type AwsEventSourceStatus = 'active' | 'deleted' | 'pending' | 'unknown';
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
        }
    }
}
export declare namespace V2 {
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
        namespace EventDestinationCreateParams {
            type EventPayload = 'snapshot' | 'thin';
            type Type = 'amazon_eventbridge' | 'webhook_endpoint';
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
            type EventsFrom = 'other_accounts' | 'self';
            type Include = 'webhook_endpoint.signing_secret' | 'webhook_endpoint.url';
            interface WebhookEndpoint {
                /**
                 * The URL of the webhook endpoint.
                 */
                url: string;
            }
        }
    }
}
export declare namespace V2 {
    namespace Core {
        interface EventDestinationRetrieveParams {
            /**
             * Additional fields to include in the response.
             */
            include?: Array<'webhook_endpoint.url'>;
        }
    }
}
export declare namespace V2 {
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
        namespace EventDestinationUpdateParams {
            interface WebhookEndpoint {
                /**
                 * The URL of the webhook endpoint.
                 */
                url: string;
            }
        }
    }
}
export declare namespace V2 {
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
}
export declare namespace V2 {
    namespace Core {
        interface EventDestinationDeleteParams {
        }
    }
}
export declare namespace V2 {
    namespace Core {
        interface EventDestinationDisableParams {
        }
    }
}
export declare namespace V2 {
    namespace Core {
        interface EventDestinationEnableParams {
        }
    }
}
export declare namespace V2 {
    namespace Core {
        interface EventDestinationPingParams {
        }
    }
}
