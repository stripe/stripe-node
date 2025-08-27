// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        interface LicenseFeeCreateParams {
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
          metadata?: Stripe.MetadataParam;

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

        namespace LicenseFeeCreateParams {
          type ServiceInterval = 'day' | 'month' | 'week' | 'year';

          type TaxBehavior = 'exclusive' | 'inclusive';

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
            up_to_decimal?: string;

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
            divide_by: number;

            /**
             * After division, round the result up or down.
             */
            round: TransformQuantity.Round;
          }

          namespace TransformQuantity {
            type Round = 'down' | 'up';
          }
        }
      }

      namespace Billing {
        interface LicenseFeeRetrieveParams {}
      }

      namespace Billing {
        interface LicenseFeeUpdateParams {
          /**
           * A customer-facing name for the License Fee.
           * This name is used in Stripe-hosted products like the Customer Portal and Checkout. It does not show up on Invoices.
           * Maximum length of 250 characters.
           */
          display_name: string;

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
          metadata?: Stripe.MetadataParam;

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

        namespace LicenseFeeUpdateParams {
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
            up_to_decimal?: string;

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
            divide_by: number;

            /**
             * After division, round the result up or down.
             */
            round: TransformQuantity.Round;
          }

          namespace TransformQuantity {
            type Round = 'down' | 'up';
          }
        }
      }

      namespace Billing {
        interface LicenseFeeListParams {
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

      namespace Billing {
        class LicenseFeesResource {
          versions: Stripe.V2.Billing.LicenseFees.VersionsResource;

          /**
           * Create a License Fee object.
           */
          create(
            params: LicenseFeeCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.LicenseFee>>;

          /**
           * Retrieve a License Fee object.
           */
          retrieve(
            id: string,
            params?: LicenseFeeRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.LicenseFee>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.LicenseFee>>;

          /**
           * Update a License Fee object.
           */
          update(
            id: string,
            params: LicenseFeeUpdateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.LicenseFee>>;

          /**
           * List all License Fee objects.
           */
          list(
            params: LicenseFeeListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Billing.LicenseFee>;
        }
      }
    }
  }
}
