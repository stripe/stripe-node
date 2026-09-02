// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {RequestOptions, Response} from '../../../lib.js';

export class PaymentRetrySignalResource extends StripeResource {
  /**
   * Retrieves a payment retry signal by ID.
   */
  retrieve(
    id: string,
    params?: V2.Signals.PaymentRetrySignalRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<PaymentRetrySignal>> {
    return this._makeRequest(
      'GET',
      `/v2/signals/payment_retry_signals/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface PaymentRetrySignal {
  /**
   * Unique identifier for the signal.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.signals.payment_retry_signal';

  /**
   * When this signal was created.
   */
  created: string;

  /**
   * The evaluation that generated this signal.
   */
  evaluation: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * The payment intent this signal relates to.
   */
  payment_intent?: string;

  /**
   * The payment record this signal relates to.
   */
  payment_record: string;

  /**
   * The retry recommendation.
   */
  recommendation: PaymentRetrySignal.Recommendation;
}
export namespace PaymentRetrySignal {
  export interface Recommendation {
    /**
     * The recommended action to take.
     */
    action: Recommendation.Action;

    /**
     * Human-readable reason for the recommendation.
     */
    reason: string;
  }

  export namespace Recommendation {
    export type Action = 'give_up' | 'retry_now' | 'wait';
  }
}
export namespace V2 {
  export namespace Signals {
    export interface PaymentRetrySignalRetrieveParams {}
  }
}
