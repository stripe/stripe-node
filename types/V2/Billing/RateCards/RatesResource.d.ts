// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        namespace RateCards {
          interface RateCreateParams {
            /**
             * The custom pricing unit that this rate binds to.
             */
            custom_pricing_unit_amount?: RateCreateParams.CustomPricingUnitAmount;

            /**
             * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
             */
            metadata?: Stripe.MetadataParam;

            /**
             * The Metered Item that this rate binds to.
             */
            metered_item?: string;

            /**
             * Defines whether the tiered price should be graduated or volume-based. In volume-based tiering, the maximum
             * quantity within a period determines the per-unit price. In graduated tiering, the pricing changes as the quantity
             * grows into new tiers. Can only be set if `tiers` is set.
             */
            tiering_mode?: RateCreateParams.TieringMode;

            /**
             * Each element represents a pricing tier. Cannot be set if `unit_amount` is provided.
             */
            tiers?: Array<RateCreateParams.Tier>;

            /**
             * Apply a transformation to the reported usage or set quantity before computing the amount billed.
             */
            transform_quantity?: RateCreateParams.TransformQuantity;

            /**
             * The per-unit amount to be charged, represented as a decimal string in minor currency units with at most 12 decimal
             * places. Cannot be set if `tiers` is provided.
             */
            unit_amount?: string;
          }

          namespace RateCreateParams {
            interface CustomPricingUnitAmount {
              /**
               * The id of the custom pricing unit.
               */
              id: string;

              /**
               * The unit value for the custom pricing unit, as a string.
               */
              value: string;
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
      }

      namespace Billing {
        namespace RateCards {
          interface RateRetrieveParams {}
        }
      }

      namespace Billing {
        namespace RateCards {
          interface RateListParams {
            /**
             * Optionally set the maximum number of results per page. Defaults to 20.
             */
            limit?: number;

            /**
             * Optionally filter by a Metered Item.
             */
            metered_item?: string;

            /**
             * Optionally filter by a RateCard version. If not specified, defaults to the latest version.
             */
            rate_card_version?: string;
          }
        }
      }

      namespace Billing {
        namespace RateCards {
          interface RateDeleteParams {}
        }
      }

      namespace Billing {
        namespace RateCards {
          class RatesResource {
            /**
             * Set the Rate for a Metered Item on the latest version of a Rate Card object. This will create a new Rate Card version
             * if the Metered Item already has a rate on the Rate Card.
             */
            create(
              id: string,
              params?: RateCreateParams,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Billing.RateCardRate>>;
            create(
              id: string,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Billing.RateCardRate>>;

            /**
             * Retrieve a Rate object.
             */
            retrieve(
              rateCardId: string,
              id: string,
              params?: RateRetrieveParams,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Billing.RateCardRate>>;
            retrieve(
              rateCardId: string,
              id: string,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Billing.RateCardRate>>;

            /**
             * List all Rates associated with a Rate Card for a specific version (defaults to latest). Rates remain active for all subsequent versions until a new rate is created for the same Metered Item.
             */
            list(
              id: string,
              params?: RateListParams,
              options?: RequestOptions
            ): ApiListPromise<Stripe.V2.Billing.RateCardRate>;
            list(
              id: string,
              options?: RequestOptions
            ): ApiListPromise<Stripe.V2.Billing.RateCardRate>;

            /**
             * Remove an existing Rate from a Rate Card. This will create a new Rate Card Version without that Rate.
             */
            del(
              rateCardId: string,
              id: string,
              params?: RateDeleteParams,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.DeletedObject>>;
            del(
              rateCardId: string,
              id: string,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.DeletedObject>>;
          }
        }
      }
    }
  }
}
