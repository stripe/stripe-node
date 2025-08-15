// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        interface CustomPricingUnitCreateParams {
          /**
           * Description that customers will see in the invoice line item.
           * Maximum length of 250 characters.
           */
          display_name: string;

          /**
           * An internal key you can use to search for a particular CustomPricingUnit item.
           * Must be unique among items.
           * Maximum length of 200 characters.
           */
          lookup_key?: string;

          /**
           * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata?: Stripe.MetadataParam;
        }
      }

      namespace Billing {
        interface CustomPricingUnitRetrieveParams {}
      }

      namespace Billing {
        interface CustomPricingUnitUpdateParams {
          /**
           * Whether the CustomPricingUnit is active.
           */
          active?: boolean;

          /**
           * Set of key-value pairs that you can attach to an object.
           */
          metadata?: Stripe.MetadataParam;
        }
      }

      namespace Billing {
        interface CustomPricingUnitListParams {
          /**
           * Filter for active/inactive CustomPricingUnits. Mutually exclusive with `lookup_keys`.
           */
          active?: boolean;

          /**
           * Optionally set the maximum number of results per page. Defaults to 20.
           */
          limit?: number;

          /**
           * Filter by lookup keys. Mutually exclusive with `active`.
           * You can specify up to 10 lookup keys.
           */
          lookup_keys?: Array<string>;
        }
      }

      namespace Billing {
        class CustomPricingUnitsResource {
          /**
           * Create a CustomPricingUnit object.
           */
          create(
            params: CustomPricingUnitCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.CustomPricingUnit>>;

          /**
           * Retrieve a CustomPricingUnit object.
           */
          retrieve(
            id: string,
            params?: CustomPricingUnitRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.CustomPricingUnit>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.CustomPricingUnit>>;

          /**
           * Update a CustomPricingUnit object.
           */
          update(
            id: string,
            params?: CustomPricingUnitUpdateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.CustomPricingUnit>>;

          /**
           * List all CustomPricingUnit objects.
           */
          list(
            params?: CustomPricingUnitListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Billing.CustomPricingUnit>;
          list(
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Billing.CustomPricingUnit>;
        }
      }
    }
  }
}
