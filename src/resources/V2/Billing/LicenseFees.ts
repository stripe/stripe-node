// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {LicensedItem} from './LicensedItems.js';
import {MetadataParam, Decimal, Metadata} from '../../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';
import {VersionResource} from './LicenseFees/Versions.js';
const stripeMethod = StripeResource.method;
import {Stripe} from '../../../stripe.core.js';
export class LicenseFeeResource extends StripeResource {
  versions: VersionResource;

  constructor(private readonly stripe: Stripe) {
    super(stripe);
    this.versions = new VersionResource(stripe);
  }
  /**
   * List all License Fee objects.
   */
  list(
    params: V2.Billing.LicenseFeeListParams,
    options?: RequestOptions
  ): ApiListPromise<LicenseFee>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/billing/license_fees',
      methodType: 'list',
      responseSchema: {
        kind: 'object',
        fields: {
          data: {
            kind: 'array',
            element: {
              kind: 'object',
              fields: {
                tiers: {
                  kind: 'array',
                  element: {
                    kind: 'object',
                    fields: {up_to_decimal: {kind: 'decimal_string'}},
                  },
                },
                transform_quantity: {
                  kind: 'object',
                  fields: {divide_by: {kind: 'int64_string'}},
                },
              },
            },
          },
        },
      },
    }).call(this, ...args);
  }

  /**
   * Create a License Fee object.
   */
  create(
    params: V2.Billing.LicenseFeeCreateParams,
    options?: RequestOptions
  ): Promise<Response<LicenseFee>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/billing/license_fees',
      requestSchema: {
        kind: 'object',
        fields: {
          tiers: {
            kind: 'array',
            element: {
              kind: 'object',
              fields: {up_to_decimal: {kind: 'decimal_string'}},
            },
          },
          transform_quantity: {
            kind: 'object',
            fields: {divide_by: {kind: 'int64_string'}},
          },
        },
      },
      responseSchema: {
        kind: 'object',
        fields: {
          tiers: {
            kind: 'array',
            element: {
              kind: 'object',
              fields: {up_to_decimal: {kind: 'decimal_string'}},
            },
          },
          transform_quantity: {
            kind: 'object',
            fields: {divide_by: {kind: 'int64_string'}},
          },
        },
      },
    }).call(this, ...args);
  }

  /**
   * Retrieve a License Fee object.
   */
  retrieve(
    id: string,
    params?: V2.Billing.LicenseFeeRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<LicenseFee>>;
  retrieve(id: string, options?: RequestOptions): Promise<Response<LicenseFee>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/billing/license_fees/{id}',
      responseSchema: {
        kind: 'object',
        fields: {
          tiers: {
            kind: 'array',
            element: {
              kind: 'object',
              fields: {up_to_decimal: {kind: 'decimal_string'}},
            },
          },
          transform_quantity: {
            kind: 'object',
            fields: {divide_by: {kind: 'int64_string'}},
          },
        },
      },
    }).call(this, ...args);
  }

  /**
   * Update a License Fee object.
   */
  update(
    id: string,
    params?: V2.Billing.LicenseFeeUpdateParams,
    options?: RequestOptions
  ): Promise<Response<LicenseFee>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/billing/license_fees/{id}',
      requestSchema: {
        kind: 'object',
        fields: {
          tiers: {
            kind: 'array',
            element: {
              kind: 'object',
              fields: {up_to_decimal: {kind: 'decimal_string'}},
            },
          },
          transform_quantity: {
            kind: 'object',
            fields: {divide_by: {kind: 'int64_string'}},
          },
        },
      },
      responseSchema: {
        kind: 'object',
        fields: {
          tiers: {
            kind: 'array',
            element: {
              kind: 'object',
              fields: {up_to_decimal: {kind: 'decimal_string'}},
            },
          },
          transform_quantity: {
            kind: 'object',
            fields: {divide_by: {kind: 'int64_string'}},
          },
        },
      },
    }).call(this, ...args);
  }
}
export interface LicenseFee {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.billing.license_fee';

  /**
   * Whether this License Fee is active. Inactive License Fees cannot be used in new activations or be modified.
   */
  active: boolean;

  /**
   * Timestamp of when the object was created.
   */
  created: string;

  /**
   * Three-letter ISO currency code, in lowercase. Must be a supported currency.
   */
  currency: string;

  /**
   * A customer-facing name for the license fee.
   * This name is used in Stripe-hosted products like the Customer Portal and Checkout. It does not show up on Invoices.
   * Maximum length of 250 characters.
   */
  display_name: string;

  /**
   * A Licensed Item represents a billable item whose pricing is based on license fees. You can use license fees
   * to specify the pricing and create subscriptions to these items.
   */
  licensed_item: LicensedItem;

  /**
   * The ID of the License Fee Version that will be used by all subscriptions when no specific version is specified.
   */
  live_version: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * An internal key you can use to search for a particular License Fee. Maximum length of 200 characters.
   */
  lookup_key?: string;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: Metadata;

  /**
   * The service cycle configuration for this License Fee.
   */
  service_cycle: V2.Billing.LicenseFee.ServiceCycle;

  /**
   * The Stripe Tax tax behavior - whether the license fee is inclusive or exclusive of tax.
   */
  tax_behavior: V2.Billing.LicenseFee.TaxBehavior;

  /**
   * Defines whether the tiering price should be graduated or volume-based. In volume-based tiering, the maximum
   * quantity within a period determines the per-unit price. In graduated tiering, the pricing changes as the quantity
   * grows into new tiers. Can only be set if `tiers` is set.
   */
  tiering_mode?: V2.Billing.LicenseFee.TieringMode;

  /**
   * Each element represents a pricing tier. Cannot be set if `unit_amount` is provided.
   */
  tiers: Array<V2.Billing.LicenseFee.Tier>;

  /**
   * Apply a transformation to the reported usage or set quantity before computing the amount billed.
   */
  transform_quantity?: V2.Billing.LicenseFee.TransformQuantity;

  /**
   * The per-unit amount to be charged, represented as a decimal string in minor currency units with at most 12 decimal
   * places. Cannot be set if `tiers` is provided.
   */
  unit_amount?: string;
}
export namespace V2 {
  export namespace Billing {
    export namespace LicenseFee {
      export interface ServiceCycle {
        /**
         * The interval for assessing service.
         */
        interval: ServiceCycle.Interval;

        /**
         * The length of the interval for assessing service. For example, set this to 3 and `interval` to `"month"` in
         * order to specify quarterly service.
         */
        interval_count: number;
      }

      export type TaxBehavior = 'exclusive' | 'inclusive';

      export type TieringMode = 'graduated' | 'volume';

      export interface Tier {
        /**
         * Price for the entire tier, represented as a decimal string in minor currency units with at most 12 decimal places.
         */
        flat_amount?: string;

        /**
         * Per-unit price for units included in this tier, represented as a decimal string in minor currency units with at
         * most 12 decimal places.
         */
        unit_amount?: string;

        /**
         * Up to and including this quantity will be contained in the tier. Only one of `up_to_decimal` and `up_to_inf` may
         * be set.
         */
        up_to_decimal?: Decimal;

        /**
         * No upper bound to this tier. Only one of `up_to_decimal` and `up_to_inf` may be set.
         */
        up_to_inf?: 'inf';
      }

      export interface TransformQuantity {
        /**
         * Divide usage by this number.
         */
        divide_by: bigint;

        /**
         * After division, round the result up or down.
         */
        round: TransformQuantity.Round;
      }

      export namespace ServiceCycle {
        export type Interval = 'day' | 'month' | 'week' | 'year';
      }

      export namespace TransformQuantity {
        export type Round = 'down' | 'up';
      }
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface LicenseFeeCreateParams {
      /**
       * Three-letter ISO currency code, in lowercase. Must be a supported currency.
       */
      currency: string;

      /**
       * A customer-facing name for the License Fee.
       * This name is used in Stripe-hosted products like the Customer Portal and Checkout. It does not show up on Invoices.
       * Maximum length of 250 characters.
       */
      display_name: string;

      /**
       * The Licensed Item that this License Fee binds to.
       */
      licensed_item: string;

      /**
       * The interval for assessing service. For example, a monthly license fee with a rate of $1 for the first 10 "workloads"
       * and $2 thereafter means "$1 per workload up to 10 workloads during a month of service." This is similar to but
       * distinct from billing interval; the service interval deals with the rate at which the customer accumulates fees,
       * while the billing interval in Cadence deals with the rate the customer is billed.
       */
      service_interval: LicenseFeeCreateParams.ServiceInterval;

      /**
       * The length of the interval for assessing service. For example, set this to 3 and `service_interval` to `"month"` in
       * order to specify quarterly service.
       */
      service_interval_count: number;

      /**
       * The Stripe Tax tax behavior - whether the license fee is inclusive or exclusive of tax.
       */
      tax_behavior: LicenseFeeCreateParams.TaxBehavior;

      /**
       * An internal key you can use to search for a particular license fee. Maximum length of 200 characters.
       */
      lookup_key?: string;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: MetadataParam;

      /**
       * Defines whether the tiered price should be graduated or volume-based. In volume-based tiering, the maximum
       * quantity within a period determines the per-unit price. In graduated tiering, the pricing changes as the quantity
       * grows into new tiers. Can only be set if `tiers` is set.
       */
      tiering_mode?: LicenseFeeCreateParams.TieringMode;

      /**
       * Each element represents a pricing tier. Cannot be set if `unit_amount` is provided.
       */
      tiers?: Array<LicenseFeeCreateParams.Tier>;

      /**
       * Apply a transformation to the reported usage or set quantity before computing the amount billed.
       */
      transform_quantity?: LicenseFeeCreateParams.TransformQuantity;

      /**
       * The per-unit amount to be charged, represented as a decimal string in minor currency units with at most 12 decimal
       * places. Cannot be set if `tiers` is provided.
       */
      unit_amount?: string;
    }

    export namespace LicenseFeeCreateParams {
      export type ServiceInterval = 'day' | 'month' | 'week' | 'year';

      export type TaxBehavior = 'exclusive' | 'inclusive';

      export type TieringMode = 'graduated' | 'volume';

      export interface Tier {
        /**
         * Price for the entire tier, represented as a decimal string in minor currency units with at most 12 decimal places.
         */
        flat_amount?: string;

        /**
         * Per-unit price for units included in this tier, represented as a decimal string in minor currency units with at
         * most 12 decimal places.
         */
        unit_amount?: string;

        /**
         * Up to and including this quantity will be contained in the tier. Only one of `up_to_decimal` and `up_to_inf` may
         * be set.
         */
        up_to_decimal?: Decimal;

        /**
         * No upper bound to this tier. Only one of `up_to_decimal` and `up_to_inf` may be set.
         */
        up_to_inf?: 'inf';
      }

      export interface TransformQuantity {
        /**
         * Divide usage by this number.
         */
        divide_by: bigint;

        /**
         * After division, round the result up or down.
         */
        round: TransformQuantity.Round;
      }

      export namespace TransformQuantity {
        export type Round = 'down' | 'up';
      }
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface LicenseFeeRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Billing {
    export interface LicenseFeeUpdateParams {
      /**
       * A customer-facing name for the License Fee.
       * This name is used in Stripe-hosted products like the Customer Portal and Checkout. It does not show up on Invoices.
       * Maximum length of 250 characters.
       */
      display_name?: string;

      /**
       * Changes the version that new license fee will use. Providing `live_version = "latest"` will set the
       * license fee's `live_version` to its latest version.
       */
      live_version?: string;

      /**
       * An internal key you can use to search for a particular license fee. Maximum length of 200 characters.
       */
      lookup_key?: string;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: MetadataParam;

      /**
       * Defines whether the tiered price should be graduated or volume-based. In volume-based tiering, the maximum
       * quantity within a period determines the per-unit price. In graduated tiering, the pricing changes as the quantity
       * grows into new tiers. Can only be set if `tiers` is set.
       */
      tiering_mode?: LicenseFeeUpdateParams.TieringMode;

      /**
       * Each element represents a pricing tier. Cannot be set if `unit_amount` is provided.
       */
      tiers?: Array<LicenseFeeUpdateParams.Tier>;

      /**
       * Apply a transformation to the reported usage or set quantity before computing the amount billed.
       */
      transform_quantity?: LicenseFeeUpdateParams.TransformQuantity;

      /**
       * The per-unit amount to be charged, represented as a decimal string in minor currency units with at most 12 decimal
       * places. Cannot be set if `tiers` is provided.
       */
      unit_amount?: string;
    }

    export namespace LicenseFeeUpdateParams {
      export type TieringMode = 'graduated' | 'volume';

      export interface Tier {
        /**
         * Price for the entire tier, represented as a decimal string in minor currency units with at most 12 decimal places.
         */
        flat_amount?: string;

        /**
         * Per-unit price for units included in this tier, represented as a decimal string in minor currency units with at
         * most 12 decimal places.
         */
        unit_amount?: string;

        /**
         * Up to and including this quantity will be contained in the tier. Only one of `up_to_decimal` and `up_to_inf` may
         * be set.
         */
        up_to_decimal?: Decimal;

        /**
         * No upper bound to this tier. Only one of `up_to_decimal` and `up_to_inf` may be set.
         */
        up_to_inf?: 'inf';
      }

      export interface TransformQuantity {
        /**
         * Divide usage by this number.
         */
        divide_by: bigint;

        /**
         * After division, round the result up or down.
         */
        round: TransformQuantity.Round;
      }

      export namespace TransformQuantity {
        export type Round = 'down' | 'up';
      }
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface LicenseFeeListParams {
      /**
       * Filter by lookup keys.
       * You can specify up to 10 lookup keys.
       */
      lookup_keys: Array<string>;

      /**
       * Filter by licensed item.
       */
      licensed_item?: string;

      /**
       * Optionally set the maximum number of results per page. Defaults to 20.
       */
      limit?: number;
    }
  }
}
