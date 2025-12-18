import { StripeResource } from '../../StripeResource.js';
import { RequestOptions } from '../../Types.js';
import { MeterEventSummary } from './MeterEventSummaries.js';
import { PaginationParams } from '../../shared.js';
import { ApiListPromise, Response } from '../../lib.js';
export declare class MeterResource extends StripeResource {
    /**
     * Retrieve a list of billing meters.
     */
    list(params?: Billing.MeterListParams, options?: RequestOptions): ApiListPromise<Meter>;
    list(options?: RequestOptions): ApiListPromise<Meter>;
    /**
     * Creates a billing meter.
     */
    create(params: Billing.MeterCreateParams, options?: RequestOptions): Promise<Response<Meter>>;
    /**
     * Retrieves a billing meter given an ID.
     */
    retrieve(id: string, params?: Billing.MeterRetrieveParams, options?: RequestOptions): Promise<Response<Meter>>;
    retrieve(id: string, options?: RequestOptions): Promise<Response<Meter>>;
    /**
     * Updates a billing meter.
     */
    update(id: string, params?: Billing.MeterUpdateParams, options?: RequestOptions): Promise<Response<Meter>>;
    /**
     * When a meter is deactivated, no more meter events will be accepted for this meter. You can't attach a deactivated meter to a price.
     */
    deactivate(id: string, params?: Billing.MeterDeactivateParams, options?: RequestOptions): Promise<Response<Meter>>;
    deactivate(id: string, options?: RequestOptions): Promise<Response<Meter>>;
    /**
     * When a meter is reactivated, events for this meter can be accepted and you can attach the meter to a price.
     */
    reactivate(id: string, params?: Billing.MeterReactivateParams, options?: RequestOptions): Promise<Response<Meter>>;
    reactivate(id: string, options?: RequestOptions): Promise<Response<Meter>>;
    /**
     * Retrieve a list of billing meter event summaries.
     */
    listEventSummaries(id: string, params: Billing.MeterListEventSummariesParams, options?: RequestOptions): ApiListPromise<MeterEventSummary>;
}
export /**
 * Meters specify how to aggregate meter events over a billing period. Meter events represent the actions that customers take in your system. Meters attach to prices and form the basis of the bill.
 *
 * Related guide: [Usage based billing](https://docs.stripe.com/billing/subscriptions/usage-based)
 */ interface Meter {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'billing.meter';
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    customer_mapping: Billing.Meter.CustomerMapping;
    default_aggregation: Billing.Meter.DefaultAggregation;
    /**
     * The meter's name.
     */
    display_name: string;
    /**
     * The name of the meter event to record usage for. Corresponds with the `event_name` field on meter events.
     */
    event_name: string;
    /**
     * The time window which meter events have been pre-aggregated for, if any.
     */
    event_time_window: Billing.Meter.EventTimeWindow | null;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * The meter's status.
     */
    status: Billing.Meter.Status;
    status_transitions: Billing.Meter.StatusTransitions;
    /**
     * Time at which the object was last updated. Measured in seconds since the Unix epoch.
     */
    updated: number;
    value_settings: Billing.Meter.ValueSettings;
}
export declare namespace Billing {
    namespace Meter {
        interface CustomerMapping {
            /**
             * The key in the meter event payload to use for mapping the event to a customer.
             */
            event_payload_key: string;
            /**
             * The method for mapping a meter event to a customer.
             */
            type: 'by_id';
        }
        interface DefaultAggregation {
            /**
             * Specifies how events are aggregated.
             */
            formula: DefaultAggregation.Formula;
        }
        type EventTimeWindow = 'day' | 'hour';
        type Status = 'active' | 'inactive';
        interface StatusTransitions {
            /**
             * The time the meter was deactivated, if any. Measured in seconds since Unix epoch.
             */
            deactivated_at: number | null;
        }
        interface ValueSettings {
            /**
             * The key in the meter event payload to use as the value for this meter.
             */
            event_payload_key: string;
        }
        namespace DefaultAggregation {
            type Formula = 'count' | 'last' | 'sum';
        }
    }
}
export declare namespace Billing {
    interface MeterCreateParams {
        /**
         * The default settings to aggregate a meter's events with.
         */
        default_aggregation: MeterCreateParams.DefaultAggregation;
        /**
         * The meter's name. Not visible to the customer.
         */
        display_name: string;
        /**
         * The name of the meter event to record usage for. Corresponds with the `event_name` field on meter events.
         */
        event_name: string;
        /**
         * Fields that specify how to map a meter event to a customer.
         */
        customer_mapping?: MeterCreateParams.CustomerMapping;
        /**
         * The time window which meter events have been pre-aggregated for, if any.
         */
        event_time_window?: MeterCreateParams.EventTimeWindow;
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
        /**
         * Fields that specify how to calculate a meter event's value.
         */
        value_settings?: MeterCreateParams.ValueSettings;
    }
    namespace MeterCreateParams {
        interface DefaultAggregation {
            /**
             * Specifies how events are aggregated. Allowed values are `count` to count the number of events, `sum` to sum each event's value and `last` to take the last event's value in the window.
             */
            formula: DefaultAggregation.Formula;
        }
        interface CustomerMapping {
            /**
             * The key in the meter event payload to use for mapping the event to a customer.
             */
            event_payload_key: string;
            /**
             * The method for mapping a meter event to a customer. Must be `by_id`.
             */
            type: 'by_id';
        }
        type EventTimeWindow = 'day' | 'hour';
        interface ValueSettings {
            /**
             * The key in the usage event payload to use as the value for this meter. For example, if the event payload contains usage on a `bytes_used` field, then set the event_payload_key to "bytes_used".
             */
            event_payload_key: string;
        }
        namespace DefaultAggregation {
            type Formula = 'count' | 'last' | 'sum';
        }
    }
}
export declare namespace Billing {
    interface MeterRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
export declare namespace Billing {
    interface MeterUpdateParams {
        /**
         * The meter's name. Not visible to the customer.
         */
        display_name?: string;
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
export declare namespace Billing {
    interface MeterListParams extends PaginationParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
        /**
         * Filter results to only include meters with the given status.
         */
        status?: MeterListParams.Status;
    }
    namespace MeterListParams {
        type Status = 'active' | 'inactive';
    }
}
export declare namespace Billing {
    interface MeterDeactivateParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
export declare namespace Billing {
    interface MeterListEventSummariesParams extends PaginationParams {
        /**
         * The customer for which to fetch event summaries.
         */
        customer: string;
        /**
         * The timestamp from when to stop aggregating meter events (exclusive). Must be aligned with minute boundaries.
         */
        end_time: number;
        /**
         * The timestamp from when to start aggregating meter events (inclusive). Must be aligned with minute boundaries.
         */
        start_time: number;
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
        /**
         * Specifies what granularity to use when generating event summaries. If not specified, a single event summary would be returned for the specified time range. For hourly granularity, start and end times must align with hour boundaries (e.g., 00:00, 01:00, ..., 23:00). For daily granularity, start and end times must align with UTC day boundaries (00:00 UTC).
         */
        value_grouping_window?: MeterListEventSummariesParams.ValueGroupingWindow;
    }
    namespace MeterListEventSummariesParams {
        type ValueGroupingWindow = 'day' | 'hour';
    }
}
export declare namespace Billing {
    interface MeterReactivateParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
