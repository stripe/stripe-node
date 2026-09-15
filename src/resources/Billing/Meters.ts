// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {MeterEventSummary} from './MeterEventSummaries.js';
import {
  ApplyExpandListItem,
  ApplyExpand,
  OtherString,
  PaginationParams,
} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';

export class MeterResource extends StripeResource {
  /**
   * Retrieve a list of billing meters.
   */
  list<E extends string = never>(
    params?: Billing.MeterListParams<E>,
    options?: RequestOptions
  ): ApiListPromise<ApplyExpandListItem<Meter, E>> {
    return this._makeRequest('GET', '/v1/billing/meters', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * Creates a billing meter.
   */
  create<E extends string = never>(
    params: Billing.MeterCreateParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<Meter, E>>> {
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
  retrieve<E extends string = never>(
    id: string,
    params?: Billing.MeterRetrieveParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<Meter, E>>> {
    return this._makeRequest(
      'GET',
      `/v1/billing/meters/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Updates a billing meter.
   */
  update<E extends string = never>(
    id: string,
    params?: Billing.MeterUpdateParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<Meter, E>>> {
    return this._makeRequest(
      'POST',
      `/v1/billing/meters/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * When a meter is deactivated, no more meter events will be accepted for this meter. You can't attach a deactivated meter to a price.
   */
  deactivate<E extends string = never>(
    id: string,
    params?: Billing.MeterDeactivateParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<Meter, E>>> {
    return this._makeRequest(
      'POST',
      `/v1/billing/meters/${encodeURIComponent(id)}/deactivate`,
      params,
      options
    ) as any;
  }
  /**
   * When a meter is reactivated, events for this meter can be accepted and you can attach the meter to a price.
   */
  reactivate<E extends string = never>(
    id: string,
    params?: Billing.MeterReactivateParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<Meter, E>>> {
    return this._makeRequest(
      'POST',
      `/v1/billing/meters/${encodeURIComponent(id)}/reactivate`,
      params,
      options
    ) as any;
  }
  /**
   * Retrieve a list of billing meter event summaries.
   */
  listEventSummaries<E extends string = never>(
    id: string,
    params: Billing.MeterListEventSummariesParams<E>,
    options?: RequestOptions
  ): ApiListPromise<ApplyExpandListItem<MeterEventSummary, E>> {
    return this._makeRequest(
      'GET',
      `/v1/billing/meters/${encodeURIComponent(id)}/event_summaries`,
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

  customer_mapping: Meter.CustomerMapping;

  default_aggregation: Meter.DefaultAggregation;

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
  event_time_window: Meter.EventTimeWindow | null;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * The meter's status.
   */
  status: Meter.Status;

  status_transitions: Meter.StatusTransitions;

  /**
   * Time at which the object was last updated. Measured in seconds since the Unix epoch.
   */
  updated: number;

  value_settings: Meter.ValueSettings;
}
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

  export type EventTimeWindow = 'day' | 'hour' | OtherString;

  export type Status = 'active' | 'inactive' | OtherString;

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
    export type Formula = 'count' | 'last' | 'sum' | OtherString;
  }
}
export namespace Billing {
  export interface MeterCreateParams<E extends string = string> {
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
    expand?: Array<E>;

    /**
     * Fields that specify how to calculate a meter event's value.
     */
    value_settings?: MeterCreateParams.ValueSettings;
  }

  export namespace MeterCreateParams {
    export interface DefaultAggregation {
      /**
       * Specifies how events are aggregated.
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

    export type EventTimeWindow = 'day' | 'hour' | OtherString;

    export interface ValueSettings {
      /**
       * The key in the usage event payload to use as the value for this meter. For example, if the event payload contains usage on a `bytes_used` field, then set the event_payload_key to "bytes_used".
       */
      event_payload_key: string;
    }

    export namespace DefaultAggregation {
      export type Formula = 'count' | 'last' | 'sum' | OtherString;
    }
  }
}
export namespace Billing {
  export interface MeterRetrieveParams<E extends string = string> {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<E>;
  }
}
export namespace Billing {
  export interface MeterUpdateParams<E extends string = string> {
    /**
     * The meter's name. Not visible to the customer.
     */
    display_name?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<E>;
  }
}
export namespace Billing {
  export interface MeterListParams<E extends string = string>
    extends PaginationParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<E>;

    /**
     * Filter results to only include meters with the given status.
     */
    status?: MeterListParams.Status;
  }

  export namespace MeterListParams {
    export type Status = 'active' | 'inactive' | OtherString;
  }
}
export namespace Billing {
  export interface MeterDeactivateParams<E extends string = string> {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<E>;
  }
}
export namespace Billing {
  export interface MeterListEventSummariesParams<E extends string = string>
    extends PaginationParams {
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
    expand?: Array<E>;

    /**
     * Specifies what granularity to use when generating event summaries. If not specified, a single event summary would be returned for the specified time range. For hourly granularity, start and end times must align with hour boundaries (e.g., 00:00, 01:00, ..., 23:00). For daily granularity, start and end times must align with UTC day boundaries (00:00 UTC).
     */
    value_grouping_window?: MeterListEventSummariesParams.ValueGroupingWindow;
  }

  export namespace MeterListEventSummariesParams {
    export type ValueGroupingWindow = 'day' | 'hour' | OtherString;
  }
}
export namespace Billing {
  export interface MeterReactivateParams<E extends string = string> {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<E>;
  }
}
