// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {PaymentProfile} from './../../../V2/Provisioning/PaymentProfiles.js';
import {RequestOptions, Response} from '../../../../lib.js';

export class UpdateLimitResource extends StripeResource {
  /**
   * Updates the usage limit on the payment profile for a provider.
   */
  update(
    params: V2.Provisioning.PaymentProfile.UpdateLimitUpdateParams,
    options?: RequestOptions
  ): Promise<Response<PaymentProfile>> {
    return this._makeRequest(
      'POST',
      '/v2/provisioning/payment_profile/update_limit',
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
export namespace V2 {
  export namespace Provisioning {
    export namespace PaymentProfile {
      export interface UpdateLimitUpdateParams {
        /**
         * New usage limit to apply.
         */
        usage_limits: UpdateLimitUpdateParams.UsageLimits;

        /**
         * Whether the billing operation should use Stripe live-mode objects. When omitted, this
         * resolves from the authenticated request context.
         */
        livemode?: boolean;

        /**
         * Provider to update the usage limit for.
         */
        provider?: string;
      }

      export namespace UpdateLimitUpdateParams {
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
}
