// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {RequestOptions, Response} from '../../lib.js';

export class GrantedTokenResource extends StripeResource {
  /**
   * Retrieves an existing SharedPaymentGrantedToken object
   */
  retrieve(
    id: string,
    params?: SharedPayment.GrantedTokenRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<GrantedToken>> {
    return this._makeRequest(
      'GET',
      `/v1/shared_payment/granted_tokens/${id}`,
      params,
      options
    ) as any;
  }
}
export interface GrantedToken {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'shared_payment.granted_token';

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Time at which this SharedPaymentGrantedToken expires and can no longer be used to confirm a PaymentIntent.
   */
  deactivated_at: number | null;

  /**
   * The reason why the SharedPaymentGrantedToken has been deactivated.
   */
  deactivated_reason: SharedPayment.GrantedToken.DeactivatedReason | null;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * Metadata about the SharedPaymentGrantedToken.
   */
  shared_metadata: {
    [key: string]: string;
  } | null;

  /**
   * Some details about how the SharedPaymentGrantedToken has been used already.
   */
  usage_details: SharedPayment.GrantedToken.UsageDetails | null;

  /**
   * Limits on how this SharedPaymentGrantedToken can be used.
   */
  usage_limits: SharedPayment.GrantedToken.UsageLimits | null;
}
export namespace SharedPayment {
  export namespace GrantedToken {
    export type DeactivatedReason =
      | 'consumed'
      | 'expired'
      | 'resolved'
      | 'revoked';

    export interface UsageDetails {
      /**
       * The total amount captured using this SharedPaymentToken.
       */
      amount_captured: UsageDetails.AmountCaptured | null;
    }

    export interface UsageLimits {
      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * Time at which this SharedPaymentToken expires and can no longer be used to confirm a PaymentIntent.
       */
      expires_at: number | null;

      /**
       * Max amount that can be captured using this SharedPaymentToken.
       */
      max_amount: number;

      /**
       * The recurring interval at which the shared payment token's amount usage restrictions reset.
       */
      recurring_interval?: UsageLimits.RecurringInterval | null;
    }

    export namespace UsageDetails {
      export interface AmountCaptured {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * Integer value of the amount in the smallest currency unit.
         */
        value: number;
      }
    }

    export namespace UsageLimits {
      export type RecurringInterval = 'month' | 'week' | 'year';
    }
  }
}
export namespace SharedPayment {
  export interface GrantedTokenRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
