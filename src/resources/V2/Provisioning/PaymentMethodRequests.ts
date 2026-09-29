// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {RequestOptions, Response} from '../../../lib.js';

export class PaymentMethodRequestResource extends StripeResource {
  /**
   * Creates a request for a customer to authorize a new payment method.
   */
  create(
    params?: V2.Provisioning.PaymentMethodRequestCreateParams,
    options?: RequestOptions
  ): Promise<Response<PaymentMethodRequest>> {
    return this._makeRequest(
      'POST',
      '/v2/provisioning/payment_method_requests',
      params,
      options,
      {
        requestSchema: {
          kind: 'object',
          fields: {
            usage_limits: {
              kind: 'object',
              fields: {max_amount: {kind: 'int64_string'}},
            },
          },
        },
      }
    ) as any;
  }
}
export interface PaymentMethodRequest {
  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.provisioning.payment_method_request';

  /**
   * URL for the customer to complete payment method authorization.
   */
  checkout_session_url: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Status of the payment method request.
   */
  status: PaymentMethodRequest.Status;
}
export namespace PaymentMethodRequest {
  export type Status = 'checkout_initiated' | 'complete';
}
export namespace V2 {
  export namespace Provisioning {
    export interface PaymentMethodRequestCreateParams {
      /**
       * Whether the billing operation should use Stripe live-mode objects. When omitted, this
       * resolves from the authenticated request context.
       */
      livemode?: boolean;

      /**
       * Owner of the requested payment method.
       */
      payment_method_owner?: 'platform';

      /**
       * Connected account to source the payment method from.
       */
      source_account?: string;

      /**
       * Customer to source the payment method from.
       */
      source_customer?: string;

      /**
       * Existing payment method to reuse instead of collecting a new one.
       */
      source_payment_method?: string;

      /**
       * Usage limit to apply to the requested payment method.
       */
      usage_limits?: PaymentMethodRequestCreateParams.UsageLimits;
    }

    export namespace PaymentMethodRequestCreateParams {
      export interface UsageLimits {
        /**
         * Three-letter ISO currency code for `max_amount`.
         */
        currency: string;

        /**
         * Maximum amount that can be charged per recurring interval.
         */
        max_amount: bigint;

        /**
         * Interval over which `max_amount` applies.
         */
        recurring_interval: UsageLimits.RecurringInterval;
      }

      export namespace UsageLimits {
        export type RecurringInterval = 'month' | 'week' | 'year';
      }
    }
  }
}
