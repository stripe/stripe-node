// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {GrantedToken} from './../../SharedPayment/GrantedTokens.js';
import {Emptyable} from '../../../shared.js';
import {RequestOptions, Response} from '../../../lib.js';
const stripeMethod = StripeResource.method;

export class GrantedTokenResource extends StripeResource {
  /**
   * Creates a new test SharedPaymentGrantedToken object. This endpoint is only available in test mode and allows sellers to create SharedPaymentGrantedTokens for testing their integration
   */
  create(
    params: TestHelpers.SharedPayment.GrantedTokenCreateParams,
    options?: RequestOptions
  ): Promise<Response<GrantedToken>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/test_helpers/shared_payment/granted_tokens',
    }).call(this, ...args);
  }

  /**
   * Revokes a test SharedPaymentGrantedToken object. This endpoint is only available in test mode and allows sellers to revoke SharedPaymentGrantedTokens for testing their integration
   */
  revoke(
    id: string,
    params?: TestHelpers.SharedPayment.GrantedTokenRevokeParams,
    options?: RequestOptions
  ): Promise<Response<GrantedToken>>;
  revoke(id: string, options?: RequestOptions): Promise<Response<GrantedToken>>;
  revoke(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath:
        '/v1/test_helpers/shared_payment/granted_tokens/{shared_payment_granted_token}/revoke',
    }).call(this, ...args);
  }
}
export namespace TestHelpers {
  export namespace SharedPayment {
    export interface GrantedTokenCreateParams {
      /**
       * The PaymentMethod that is going to be shared by the SharedPaymentGrantedToken.
       */
      payment_method: string;

      /**
       * Limits on how this SharedPaymentGrantedToken can be used.
       */
      usage_limits: GrantedTokenCreateParams.UsageLimits;

      /**
       * The Customer that the SharedPaymentGrantedToken belongs to. Should match the Customer that the PaymentMethod is attached to if any.
       */
      customer?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to the SharedPaymentGrantedToken.
       */
      shared_metadata?: Emptyable<{
        [key: string]: string;
      }>;
    }

    export namespace GrantedTokenCreateParams {
      export interface UsageLimits {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * Time at which this SharedPaymentToken expires and can no longer be used to confirm a PaymentIntent.
         */
        expires_at?: number;

        /**
         * Max amount that can be captured using this SharedPaymentToken
         */
        max_amount: number;

        /**
         * The recurring interval at which the shared payment token's amount usage restrictions reset.
         */
        recurring_interval?: UsageLimits.RecurringInterval;
      }

      export namespace UsageLimits {
        export type RecurringInterval = 'month' | 'week' | 'year';
      }
    }
  }
}
export namespace TestHelpers {
  export namespace SharedPayment {
    export interface GrantedTokenRevokeParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }
  }
}
