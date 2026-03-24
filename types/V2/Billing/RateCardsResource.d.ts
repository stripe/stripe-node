// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        interface RateCardCreateParams {
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
           * The interval for assessing service. For example, a monthly RateCard with a rate of $1 for the first 10 "workloads"
           * and $2 thereafter means "$1 per workload up to 10 workloads during a month of service." This is similar to but
           * distinct from billing interval; the service interval deals with the rate at which the customer accumulates fees,
           * while the billing interval in Cadence deals with the rate the customer is billed.
           */
          service_interval: RateCardCreateParams.ServiceInterval;

          /**
           * The length of the interval for assessing service. For example, set this to 3 and `service_interval` to `"month"` in
           * order to specify quarterly service.
           */
          service_interval_count: number;

          /**
           * The Stripe Tax tax behavior - whether the rates are inclusive or exclusive of tax.
           */
          tax_behavior: RateCardCreateParams.TaxBehavior;

          /**
           * An internal key you can use to search for a particular RateCard. Maximum length of 200 characters.
           */
          lookup_key?: string;

          /**
           * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata?: Stripe.MetadataParam;
        }

        namespace RateCardCreateParams {
          type ServiceInterval = 'day' | 'month' | 'week' | 'year';

          type TaxBehavior = 'exclusive' | 'inclusive';
        }
      }

      namespace Billing {
        interface RateCardRetrieveParams {}
      }

      namespace Billing {
        interface RateCardUpdateParams {
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
           * Changes the version that new RateCard activations will use. Providing `live_version = "latest"` will set the
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
          metadata?: Stripe.MetadataParam;
        }
      }

      namespace Billing {
        interface RateCardListParams {
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

      namespace Billing {
        interface RateCardModifyRatesParams {
          /**
           * The list of RateCard rates to create or update. Maximum of 100 rates.
           */
          rates_to_create: Array<RateCardModifyRatesParams.RatesToCreate>;

          /**
           * The list of RateCard rates to delete. Maximum of 100 rates.
           */
          rates_to_delete: Array<RateCardModifyRatesParams.RatesToDelete>;
        }

        namespace RateCardModifyRatesParams {
          interface RatesToCreate {
            /**
             * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
             */
            metadata?: Stripe.MetadataParam;

            /**
             * The Metered Item that this rate binds to. Cannot be set if `metered_item_data` is provided, and must be set if it isn't.
             */
            metered_item?: string;

            /**
             * The data to create a metered item that binds to this rate. Cannot be set if `metered_item` is provided, and must be set if it isn't.
             */
            metered_item_data?: RatesToCreate.MeteredItemData;

            /**
             * Defines whether the tiered price should be graduated or volume-based. In volume-based tiering, the maximum
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

          namespace RatesToCreate {
            interface MeteredItemData {
              /**
               * Description that customers will see in the invoice line item.
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

            namespace MeteredItemData {
              interface MeterSegmentCondition {
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

            interface Tier {
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

            type TieringMode = 'graduated' | 'volume';

            interface TransformQuantity {
              /**
               * Divide usage by this number.
               */
              divide_by: bigint;

              /**
               * After division, round the result up or down.
               */
              round: TransformQuantity.Round;
            }

            namespace TransformQuantity {
              type Round = 'down' | 'up';
            }
          }

          interface RatesToDelete {
            /**
             * The ID of the RateCard rate to delete.
             */
            id: string;
          }
        }
      }

      namespace Billing {
        class RateCardsResource {
          customPricingUnitOverageRates: Stripe.V2.Billing.RateCards.CustomPricingUnitOverageRatesResource;
          rates: Stripe.V2.Billing.RateCards.RatesResource;
          versions: Stripe.V2.Billing.RateCards.VersionsResource;

          /**
           * Create a Rate Card object.
           */
          create(
            params: RateCardCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.RateCard>>;

          /**
           * Retrieve the latest version of a Rate Card object.
           */
          retrieve(
            id: string,
            params?: RateCardRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.RateCard>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.RateCard>>;

          /**
           * Update a Rate Card object.
           */
          update(
            id: string,
            params?: RateCardUpdateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.RateCard>>;

          /**
           * List all Rate Card objects.
           */
          list(
            params?: RateCardListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Billing.RateCard>;
          list(
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Billing.RateCard>;

          /**
           * Creates, updates, and/or deletes multiple Rates on a Rate Card atomically.
           */
          modifyRates(
            id: string,
            params: RateCardModifyRatesParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.RateCardVersion>>;
        }
      }
    }
  }
}
