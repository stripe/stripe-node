// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {RequestOptions, Response} from '../../lib.js';

export class MeterEventAdjustmentResource extends StripeResource {
  /**
   * Creates a billing meter event adjustment.
   */
  create(
    params: Billing.MeterEventAdjustmentCreateParams,
    options?: RequestOptions
  ): Promise<Response<MeterEventAdjustment>> {
    return this._makeRequest(
      'POST',
      '/v1/billing/meter_event_adjustments',
      params,
      options
    );
  }
}
export interface MeterEventAdjustment {
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'billing.meter_event_adjustment';

  /**
   * Specifies which event to cancel.
   */
  cancel: Billing.MeterEventAdjustment.Cancel | null;

  /**
   * The name of the meter event. Corresponds with the `event_name` field on a meter.
   */
  event_name: string;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * The meter event adjustment's status.
   */
  status: Billing.MeterEventAdjustment.Status;

  /**
   * Specifies whether to cancel a single event or a range of events for a time period. Time period cancellation is not supported yet.
   */
  type: 'cancel';
}
export namespace Billing {
  export namespace MeterEventAdjustment {
    export interface Cancel {
      /**
       * Unique identifier for the event.
       */
      identifier: string | null;
    }

    export type Status = 'complete' | 'pending';
  }
}
export namespace Billing {
  export interface MeterEventAdjustmentCreateParams {
    /**
     * The name of the meter event. Corresponds with the `event_name` field on a meter.
     */
    event_name: string;

    /**
     * Specifies whether to cancel a single event or a range of events for a time period. Time period cancellation is not supported yet.
     */
    type: 'cancel';

    /**
     * Specifies which event to cancel.
     */
    cancel?: MeterEventAdjustmentCreateParams.Cancel;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export namespace MeterEventAdjustmentCreateParams {
    export interface Cancel {
      /**
       * Unique identifier for the event. You can only cancel events within 24 hours of Stripe receiving them.
       */
      identifier?: string;
    }
  }
}
