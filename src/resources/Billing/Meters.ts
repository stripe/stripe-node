// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {MeterEventSummary} from './MeterEventSummaries.js';
import {PaginationParams} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';

export class MeterResource extends StripeResource {
  /**
   * Retrieve a list of billing meters.
   */
  list(
    params?: Billing.MeterListParams,
    options?: RequestOptions
  ): ApiListPromise<Meter> {
    return this._makeRequest('GET', '/v1/billing/meters', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * Creates a billing meter.
   */
  create(
    params: Billing.MeterCreateParams,
    options?: RequestOptions
  ): Promise<Response<Meter>> {
    return this._makeRequest(
      'POST',
      '/v1/billing/meters',
      params,
      options
    ) as any;
  }
  /**
   * Retrieves a billing meter given an ID.
   */
  retrieve(
    id: string,
    params?: Billing.MeterRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Meter>> {
    return this._makeRequest(
      'GET',
      `/v1/billing/meters/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Updates a billing meter.
   */
  update(
    id: string,
    params?: Billing.MeterUpdateParams,
    options?: RequestOptions
  ): Promise<Response<Meter>> {
    return this._makeRequest(
      'POST',
      `/v1/billing/meters/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * When a meter is deactivated, no more meter events will be accepted for this meter. You can't attach a deactivated meter to a price.
   */
  deactivate(
    id: string,
    params?: Billing.MeterDeactivateParams,
    options?: RequestOptions
  ): Promise<Response<Meter>> {
    return this._makeRequest(
      'POST',
      `/v1/billing/meters/${id}/deactivate`,
      params,
      options
    ) as any;
  }
  /**
   * When a meter is reactivated, events for this meter can be accepted and you can attach the meter to a price.
   */
  reactivate(
    id: string,
    params?: Billing.MeterReactivateParams,
    options?: RequestOptions
  ): Promise<Response<Meter>> {
    return this._makeRequest(
      'POST',
      `/v1/billing/meters/${id}/reactivate`,
      params,
      options
    ) as any;
  }
  /**
   * Retrieve a list of billing meter event summaries.
   */
  listEventSummaries(
    id: string,
    params: Billing.MeterListEventSummariesParams,
    options?: RequestOptions
  ): ApiListPromise<MeterEventSummary> {
    return this._makeRequest(
      'GET',
      `/v1/billing/meters/${id}/event_summaries`,
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
}
export interface Meter {
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
   * Set of keys that will be used to group meter events by.
   */
  dimension_payload_keys?: Array<string> | null;

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
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
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
export namespace Billing {
  export namespace Meter {
    export interface CustomerMapping {
      /**
       * The key in the meter event payload to use for mapping the event to a customer.
       */
      event_payload_key: string;

      /**
       * The method for mapping a meter event to a customer.
       */
      type: 'by_id';
    }

    export interface DefaultAggregation {
      /**
       * Specifies how events are aggregated.
       */
      formula: DefaultAggregation.Formula;
    }

    export type EventTimeWindow = 'day' | 'hour';

    export type Status = 'active' | 'inactive';

    export interface StatusTransitions {
      /**
       * The time the meter was deactivated, if any. Measured in seconds since Unix epoch.
       */
      deactivated_at: number | null;
    }

    export interface ValueSettings {
      /**
       * The key in the meter event payload to use as the value for this meter.
       */
      event_payload_key: string;
    }

    export namespace DefaultAggregation {
      export type Formula = 'count' | 'last' | 'sum';
    }
  }
}
export namespace Billing {
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
     * Set of keys that will be used to group meter events by. Each key must be present in the event payload.
     */
    dimension_payload_keys?: Array<string>;

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

  export namespace MeterCreateParams {
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

    export namespace DefaultAggregation {
      export type Formula = 'count' | 'last' | 'sum';
    }
  }
}
export namespace Billing {
  export interface MeterRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Billing {
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
export namespace Billing {
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

  export namespace MeterListParams {
    export type Status = 'active' | 'inactive';
  }
}
export namespace Billing {
  export interface MeterDeactivateParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Billing {
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
     * Key-value pairs used to filter meter events by dimension values. If specified, event summaries will be generated with only matching meter events.
     */
    dimension_filters?: {
      [key: string]: string;
    };

    /**
     * List of dimension payload keys to group by. If specified, event summaries will be grouped by the given dimension payload key values.
     */
    dimension_group_by_keys?: Array<string>;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * List of tenant payload keys to filter on. Must be used together with tenant_operator and tenant_values. Cannot be used with tenant_filters.
     */
    tenant_keys?: Array<string>;

    /**
     * The operator to apply when filtering by tenant values. Must be used together with tenant_keys and tenant_values. Cannot be used with tenant_filters.
     */
    tenant_operator?: MeterListEventSummariesParams.TenantOperator;

    /**
     * List of value lists corresponding to each key in tenant_keys. Each element contains the values to filter on for the corresponding tenant key. Must be used together with tenant_operator and tenant_keys. Cannot be used with tenant_filters.
     */
    tenant_values?: Array<Array<string>>;

    /**
     * Specifies what granularity to use when generating event summaries. If not specified, a single event summary would be returned for the specified time range. For hourly granularity, start and end times must align with hour boundaries (e.g., 00:00, 01:00, ..., 23:00). For daily granularity, start and end times must align with UTC day boundaries (00:00 UTC).
     */
    value_grouping_window?: MeterListEventSummariesParams.ValueGroupingWindow;
  }

  export namespace MeterListEventSummariesParams {
    export type TenantOperator = 'excludes' | 'includes';

    export type ValueGroupingWindow = 'day' | 'hour';
  }
}
export namespace Billing {
  export interface MeterReactivateParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
