// File generated from our OpenAPI spec

namespace Billing {
  export interface MeterCreateParams {
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
    export interface DefaultAggregation {
      /**
       * Specifies how events are aggregated. Allowed values are `count` to count the number of events, `sum` to sum each event's value and `last` to take the last event's value in the window.
       */
      formula: DefaultAggregation.Formula;
    }

    export interface CustomerMapping {
      /**
       * The key in the meter event payload to use for mapping the event to a customer.
       */
      event_payload_key: string;

      /**
       * The method for mapping a meter event to a customer. Must be `by_id`.
       */
      type: 'by_id';
    }

    export type EventTimeWindow = 'day' | 'hour';

    export interface ValueSettings {
      /**
       * The key in the usage event payload to use as the value for this meter. For example, if the event payload contains usage on a `bytes_used` field, then set the event_payload_key to "bytes_used".
       */
      event_payload_key: string;
    }

    namespace DefaultAggregation {
      export type Formula = 'count' | 'last' | 'sum';
    }
  }
}
namespace Billing {
  export interface MeterRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Billing {
  export interface MeterUpdateParams {
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
namespace Billing {
  export interface MeterListParams extends PaginationParams {
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
    export type Status = 'active' | 'inactive';
  }
}
namespace Billing {
  export interface MeterDeactivateParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Billing {
  export interface MeterListEventSummariesParams extends PaginationParams {
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
    export type ValueGroupingWindow = 'day' | 'hour';
  }
}
namespace Billing {
  export interface MeterReactivateParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
