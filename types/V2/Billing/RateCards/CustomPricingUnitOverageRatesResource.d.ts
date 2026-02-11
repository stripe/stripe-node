// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        namespace RateCards {
          interface CustomPricingUnitOverageRateCreateParams {
            /**
             * The ID of the custom pricing unit this overage rate applies to.
             */
            custom_pricing_unit: string;

            /**
             * The ID of the one-time item to use for overage line items.
             */
            one_time_item: string;

            /**
             * The per-unit amount to charge for overages, represented as a decimal string in minor currency units with at most 12 decimal places.
             */
            unit_amount: string;

            /**
             * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
             */
            metadata?: Stripe.MetadataParam;
          }
        }
      }

      namespace Billing {
        namespace RateCards {
          interface CustomPricingUnitOverageRateRetrieveParams {}
        }
      }

      namespace Billing {
        namespace RateCards {
          interface CustomPricingUnitOverageRateListParams {
            /**
             * Optionally set the maximum number of results per page. Defaults to 20.
             */
            limit?: number;

            /**
             * Optionally filter by a RateCard version. If not specified, defaults to the latest version.
             */
            rate_card_version?: string;
          }
        }
      }

      namespace Billing {
        namespace RateCards {
          interface CustomPricingUnitOverageRateDeleteParams {}
        }
      }

      namespace Billing {
        namespace RateCards {
          class CustomPricingUnitOverageRatesResource {
            /**
             * Create a Rate Card Custom Pricing Unit Overage Rate on a Rate Card.
             */
            create(
              id: string,
              params: CustomPricingUnitOverageRateCreateParams,
              options?: RequestOptions
            ): Promise<
              Stripe.Response<
                Stripe.V2.Billing.RateCardCustomPricingUnitOverageRate
              >
            >;

            /**
             * Retrieve a Rate Card Custom Pricing Unit Overage Rate from a Rate Card.
             */
            retrieve(
              rateCardId: string,
              id: string,
              params?: CustomPricingUnitOverageRateRetrieveParams,
              options?: RequestOptions
            ): Promise<
              Stripe.Response<
                Stripe.V2.Billing.RateCardCustomPricingUnitOverageRate
              >
            >;
            retrieve(
              rateCardId: string,
              id: string,
              options?: RequestOptions
            ): Promise<
              Stripe.Response<
                Stripe.V2.Billing.RateCardCustomPricingUnitOverageRate
              >
            >;

            /**
             * List all Rate Card Custom Pricing Unit Overage Rates on a Rate Card.
             */
            list(
              id: string,
              params?: CustomPricingUnitOverageRateListParams,
              options?: RequestOptions
            ): ApiListPromise<
              Stripe.V2.Billing.RateCardCustomPricingUnitOverageRate
            >;
            list(
              id: string,
              options?: RequestOptions
            ): ApiListPromise<
              Stripe.V2.Billing.RateCardCustomPricingUnitOverageRate
            >;

            /**
             * Delete a Rate Card Custom Pricing Unit Overage Rate from a Rate Card.
             */
            del(
              rateCardId: string,
              id: string,
              params?: CustomPricingUnitOverageRateDeleteParams,
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
