// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {RequestOptions, Response} from '../../../lib.js';
import {UpdateLimitResource} from './PaymentProfile/UpdateLimit.js';
import {Stripe} from '../../../stripe.core.js';
export class PaymentProfileResource extends StripeResource {
  updateLimit: UpdateLimitResource;

  constructor(private readonly stripe: Stripe) {
    super(stripe);
    this.updateLimit = new UpdateLimitResource(stripe);
  }
  /**
   * Retrieves the payment profile for the current project.
   */
  retrieve(
    params?: V2.Provisioning.PaymentProfileRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<PaymentProfile>> {
    return this._makeRequest(
      'GET',
      '/v2/provisioning/payment_profile',
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            providers: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  usage_limits: {
                    kind: 'object',
                    fields: {max_amount: {kind: 'int64_string'}},
                  },
                },
              },
            },
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
export interface PaymentProfile {
  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.provisioning.payment_profile';

  /**
   * Last 4 digits of the card on the payment method.
   */
  card_last4: string;

  /**
   * Whether the payment method is in live mode.
   */
  livemode: boolean;

  /**
   * Owner of the payment method.
   */
  payment_method_owner?: 'platform';

  /**
   * Providers the payment method is shared with, and their usage limits.
   */
  providers: Array<PaymentProfile.Provider>;

  /**
   * Deprecated: use providers instead.
   */
  shared_with_providers: Array<string>;

  /**
   * Usage limit applied to the payment method.
   */
  usage_limits?: PaymentProfile.UsageLimits;
}
export namespace PaymentProfile {
  export interface Provider {
    /**
     * Provider the payment method is shared with.
     */
    provider: string;

    /**
     * Usage limit applied to the payment method for this provider.
     */
    usage_limits?: Provider.UsageLimits;
  }

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

  export namespace Provider {
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

  export namespace UsageLimits {
    export type RecurringInterval = 'month' | 'week' | 'year';
  }
}
export namespace V2 {
  export namespace Provisioning {
    export interface PaymentProfileRetrieveParams {
      /**
       * Whether the billing operation should use Stripe live-mode objects. When omitted, this
       * resolves from the authenticated request context.
       */
      livemode?: boolean;
    }
  }
}
