// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {RateCardVersion} from './RateCardVersions.js';
import {MetadataParam, Decimal, Metadata} from '../../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';
import {CustomPricingUnitOverageRateResource} from './RateCards/CustomPricingUnitOverageRates.js';
import {RateResource} from './RateCards/Rates.js';
import {VersionResource} from './RateCards/Versions.js';
import {Stripe} from '../../../stripe.core.js';
export class RateCardResource extends StripeResource {
  customPricingUnitOverageRates: CustomPricingUnitOverageRateResource;
  rates: RateResource;
  versions: VersionResource;

  constructor(private readonly stripe: Stripe) {
    super(stripe);
    this.customPricingUnitOverageRates = new CustomPricingUnitOverageRateResource(
      stripe
    );
    this.rates = new RateResource(stripe);
    this.versions = new VersionResource(stripe);
  }
  /**
   * List all Rate Card objects.
   */
  list(
    params?: V2.Billing.RateCardListParams,
    options?: RequestOptions
  ): ApiListPromise<RateCard> {
    return this._makeRequest('GET', '/v2/billing/rate_cards', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * Create a Rate Card object.
   */
  create(
    params: V2.Billing.RateCardCreateParams,
    options?: RequestOptions
  ): Promise<Response<RateCard>> {
    return this._makeRequest(
      'POST',
      '/v2/billing/rate_cards',
      params,
      options
    ) as any;
  }
  /**
   * Retrieve the latest version of a Rate Card object.
   */
  retrieve(
    id: string,
    params?: V2.Billing.RateCardRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<RateCard>> {
    return this._makeRequest(
      'GET',
      `/v2/billing/rate_cards/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Update a Rate Card object.
   */
  update(
    id: string,
    params?: V2.Billing.RateCardUpdateParams,
    options?: RequestOptions
  ): Promise<Response<RateCard>> {
    return this._makeRequest(
      'POST',
      `/v2/billing/rate_cards/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Creates, updates, and/or deletes multiple Rates on a Rate Card atomically.
   */
  modifyRates(
    id: string,
    params: V2.Billing.RateCardModifyRatesParams,
    options?: RequestOptions
  ): Promise<Response<RateCardVersion>> {
    return this._makeRequest(
      'POST',
      `/v2/billing/rate_cards/${id}/modify_rates`,
      params,
      options,
      {
        requestSchema: {
          kind: 'object',
          fields: {
            rates_to_create: {
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
      }
    ) as any;
  }
}
export interface RateCard {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.billing.rate_card';

  /**
   * Whether this RateCard is active. Inactive RateCards cannot be used in new activations or have new rates added.
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
   * A customer-facing name for the Rate Card.
   * This name is used in Stripe-hosted products like the Customer Portal and Checkout. It does not show up on Invoices.
   * Maximum length of 250 characters.
   */
  display_name: string;

  /**
   * The ID of this rate card's most recently created version.
   */
  latest_version: string;

  /**
   * The ID of the Rate Card Version used by all subscriptions when no specific version is specified.
   */
  live_version: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * An internal key you can use to search for a particular RateCard. Maximum length of 200 characters.
   */
  lookup_key?: string;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: Metadata;

  /**
   * The service cycle configuration for this Rate Card. For example, a monthly Rate Card with a rate of 1 USD for the
   * first 10 "workloads" and 2 USD thereafter means "1 USD per workload up to 10 workloads during a month of service."
   * This is similar to but distinct from billing interval; the service interval deals with the rate at which the
   * customer accumulates fees, while the billing interval in Cadence deals with the rate the customer is billed.
   */
  service_cycle: V2.Billing.RateCard.ServiceCycle;

  /**
   * The interval for assessing service. For example, a monthly Rate Card with a rate of 1 USD for the first 10 "workloads"
   * and 2 USD thereafter means "1 USD per workload up to 10 workloads during a month of service." This is similar to but
   * distinct from billing interval; the service interval deals with the rate at which the customer accumulates fees,
   * while the billing interval in Cadence deals with the rate the customer is billed.
   */
  service_interval: V2.Billing.RateCard.ServiceInterval;

  /**
   * The length of the interval for assessing service. For example, set this to 3 and `service_interval` to `"month"`
   * to specify quarterly service.
   */
  service_interval_count: number;

  /**
   * The tax behavior for Stripe Tax — whether the rate card price includes or excludes tax.
   */
  tax_behavior: V2.Billing.RateCard.TaxBehavior;
}
export namespace V2 {
  export namespace Billing {
    export namespace RateCard {
      export interface ServiceCycle {
        /**
         * The interval for assessing service.
         */
        interval: ServiceCycle.Interval;

        /**
         * The length of the interval for assessing service. For example, set this to 3 and `interval` to `"month"`
         * to specify quarterly service.
         */
        interval_count: number;
      }

      export type ServiceInterval = 'day' | 'month' | 'week' | 'year';

      export type TaxBehavior = 'exclusive' | 'inclusive';

      export namespace ServiceCycle {
        export type Interval = 'day' | 'month' | 'week' | 'year';
      }
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface RateCardCreateParams {
      /**
       * The currency of this RateCard.
       */
      currency: string;

      /**
       * A customer-facing name for the RateCard.
       * This name is used in Stripe-hosted products like the Customer Portal and Checkout. It does not show up on Invoices.
       * Maximum length of 250 characters.
       */
      display_name: string;

      /**
       * The interval for assessing service. For example, a monthly RateCard with a rate of 1 USD for the first 10 "workloads"
       * and 2 USD thereafter means "1 USD per workload up to 10 workloads during a month of service." This is similar to but
       * distinct from billing interval; the service interval deals with the rate at which the customer accumulates fees,
       * while the billing interval in Cadence deals with the rate the customer is billed.
       */
      service_interval: RateCardCreateParams.ServiceInterval;

      /**
       * The length of the interval for assessing service. For example, set this to 3 and `service_interval` to `"month"`
       * to specify quarterly service.
       */
      service_interval_count: number;

      /**
       * The tax behavior for Stripe Tax — whether the rate card price includes or excludes tax.
       */
      tax_behavior: RateCardCreateParams.TaxBehavior;

      /**
       * An internal key you can use to search for a particular RateCard. Maximum length of 200 characters.
       */
      lookup_key?: string;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: MetadataParam;
    }

    export namespace RateCardCreateParams {
      export type ServiceInterval = 'day' | 'month' | 'week' | 'year';

      export type TaxBehavior = 'exclusive' | 'inclusive';
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface RateCardRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Billing {
    export interface RateCardUpdateParams {
      /**
       * Sets whether the RateCard is active. Inactive RateCards cannot be used in new activations or have new rates added.
       */
      active?: boolean;

      /**
       * A customer-facing name for the RateCard.
       * This name is used in Stripe-hosted products like the Customer Portal and Checkout. It does not show up on Invoices.
       * Maximum length of 250 characters.
       */
      display_name?: string;

      /**
       * Changes the version that new RateCard activations use. Providing `live_version = "latest"` sets the
       * RateCard's `live_version` to its latest version.
       */
      live_version?: string;

      /**
       * An internal key you can use to search for a particular RateCard. Maximum length of 200 characters.
       */
      lookup_key?: string;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: MetadataParam;
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface RateCardListParams {
      /**
       * Optionally filter to active/inactive RateCards.
       */
      active?: boolean;

      /**
       * Optionally set the maximum number of results per page. Defaults to 20.
       */
      limit?: number;

      /**
       * Filter by lookup keys.
       * You can specify up to 10 lookup keys.
       */
      lookup_keys?: Array<string>;
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface RateCardModifyRatesParams {
      /**
       * The list of RateCard rates to create or update. Maximum of 100 rates.
       */
      rates_to_create: Array<RateCardModifyRatesParams.RatesToCreate>;

      /**
       * The list of RateCard rates to delete. Maximum of 100 rates.
       */
      rates_to_delete: Array<RateCardModifyRatesParams.RatesToDelete>;
    }

    export namespace RateCardModifyRatesParams {
      export interface RatesToCreate {
        /**
         * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata?: MetadataParam;

        /**
         * The Metered Item that this rate binds to. Cannot be set if `metered_item_data` is provided, and must be set if it isn't.
         */
        metered_item?: string;

        /**
         * The data to create a metered item that binds to this rate. Cannot be set if `metered_item` is provided, and must be set if it isn't.
         */
        metered_item_data?: RatesToCreate.MeteredItemData;

        /**
         * Defines whether the tiered price is graduated or volume-based. In volume-based tiering, the maximum
         * quantity within a period determines the per-unit price. In graduated tiering, the pricing changes as the quantity
         * grows into new tiers. Can only be set if `tiers` is set.
         */
        tiering_mode?: RatesToCreate.TieringMode;

        /**
         * Each element represents a pricing tier. Cannot be set if `unit_amount` is provided.
         */
        tiers?: Array<RatesToCreate.Tier>;

        /**
         * Apply a transformation to the reported usage or set quantity before computing the amount billed.
         */
        transform_quantity?: RatesToCreate.TransformQuantity;

        /**
         * The per-unit amount to be charged, represented as a decimal string in minor currency units with at most 12 decimal
         * places. Cannot be set if `tiers` is provided.
         */
        unit_amount?: string;
      }

      export interface RatesToDelete {
        /**
         * The ID of the RateCard rate to delete.
         */
        id: string;
      }

      export namespace RatesToCreate {
        export interface MeteredItemData {
          /**
           * Description that customers see in the invoice line item.
           * Maximum length of 250 characters.
           */
          display_name: string;

          /**
           * An internal key you can use to search for a particular metered item.
           * Must be unique among metered items.
           * Maximum length of 200 characters.
           */
          lookup_key?: string;

          /**
           * ID of the Meter that measures usage for this Metered Item.
           */
          meter: string;

          /**
           * Optional array of Meter segments to filter event dimension keys for billing.
           */
          meter_segment_conditions: Array<
            MeteredItemData.MeterSegmentCondition
          >;

          /**
           * The unit to use when displaying prices for this billable item in places like Checkout. For example, set this field
           * to "CPU-hour" for Checkout to display "(price) per CPU-hour", or "1 million events" to display "(price) per 1
           * million events".
           * Maximum length of 100 characters.
           */
          unit_label?: string;
        }

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
           * Up to and including this quantity is contained in the tier. Only one of `up_to_decimal` and `up_to_inf` may
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

        export namespace MeteredItemData {
          export interface MeterSegmentCondition {
            /**
             * A Meter dimension.
             */
            dimension: string;

            /**
             * To count usage towards this metered item, the dimension must have this value.
             */
            value: string;
          }
        }

        export namespace TransformQuantity {
          export type Round = 'down' | 'up';
        }
      }
    }
  }
}
