// File generated from our OpenAPI spec

export interface EventRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface EventListParams extends PaginationParams {
  /**
   * Only return events that were created during the given date interval.
   */
  created?: Stripe.RangeQueryParam | number;

  /**
   * Filter events by whether all webhooks were successfully delivered. If false, events which are still pending or have failed all delivery attempts to a webhook endpoint will be returned.
   */
  delivery_success?: boolean;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * A string containing a specific event name, or group of events using * as a wildcard. The list will be filtered to include only events with a matching event property.
   */
  type?: string;

  /**
   * An array of up to 20 strings containing specific event names. The list will be filtered to include only events with a matching event property. You may pass either `type` or `types`, but not both.
   */
  types?: Array<string>;
}
