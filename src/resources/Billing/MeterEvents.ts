// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {RequestOptions} from '../../lib.js';
import {Response} from '../../lib.js';
const stripeMethod = StripeResource.method;
export class MeterEventResource extends StripeResource {
  /**
   * Creates a billing meter event.
   */
  create(
    params: Billing.MeterEventCreateParams,
    options?: RequestOptions
  ): Promise<Response<MeterEvent>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/billing/meter_events',
    }).call(this, ...args);
  }
}
export interface MeterEvent {
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'billing.meter_event';

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * The name of the meter event. Corresponds with the `event_name` field on a meter.
   */
  event_name: string;

  /**
   * A unique identifier for the event.
   */
  identifier: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * The payload of the event. This contains the fields corresponding to a meter's `customer_mapping.event_payload_key` (default is `stripe_customer_id`) and `value_settings.event_payload_key` (default is `value`). Read more about the [payload](https://stripe.com/docs/billing/subscriptions/usage-based/recording-usage#payload-key-overrides).
   */
  payload: {
    [key: string]: string;
  };

  /**
   * The timestamp passed in when creating the event. Measured in seconds since the Unix epoch.
   */
  timestamp: number;
}
export namespace Billing {
  export interface MeterEventCreateParams {
    /**
     * The name of the meter event. Corresponds with the `event_name` field on a meter.
     */
    event_name: string;

    /**
     * The payload of the event. This must contain the fields corresponding to a meter's `customer_mapping.event_payload_key` (default is `stripe_customer_id`) and `value_settings.event_payload_key` (default is `value`). Read more about the [payload](https://docs.stripe.com/billing/subscriptions/usage-based/recording-usage#payload-key-overrides).
     */
    payload: {
      [key: string]: string;
    };

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A unique identifier for the event. If not provided, one is generated. We recommend using UUID-like identifiers. We will enforce uniqueness within a rolling period of at least 24 hours. The enforcement of uniqueness primarily addresses issues arising from accidental retries or other problems occurring within extremely brief time intervals. This approach helps prevent duplicate entries and ensures data integrity in high-frequency operations.
     */
    identifier?: string;

    /**
     * The time of the event. Measured in seconds since the Unix epoch. Must be within the past 35 calendar days or up to 5 minutes in the future. Defaults to current timestamp if not specified.
     */
    timestamp?: number;
  }
}
