// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        interface OneTimeItemCreateParams {
          /**
           * Description that customers will see in the invoice line item.
           * Maximum length of 250 characters.
           */
          display_name: string;

          /**
           * An internal key you can use to search for a particular one-time item.
           * Must be unique among billable items.
           * Maximum length of 200 characters.
           */
          lookup_key?: string;

          /**
           * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata?: Stripe.MetadataParam;

          /**
           * Stripe Tax details.
           */
          tax_details?: OneTimeItemCreateParams.TaxDetails;

          /**
           * The unit to use when displaying prices for this one-time item. For example, set this field
           * to "credit" for the display to show "(price) per credit".
           * Maximum length of 100 characters.
           */
          unit_label?: string;
        }

        namespace OneTimeItemCreateParams {
          interface TaxDetails {
            /**
             * Product tax code (PTC).
             */
            tax_code: string;
          }
        }
      }

      namespace Billing {
        interface OneTimeItemRetrieveParams {}
      }

      namespace Billing {
        interface OneTimeItemUpdateParams {
          /**
           * Description that customers will see in the invoice line item.
           * Maximum length of 250 characters.
           */
          display_name?: string;

          /**
           * An internal key you can use to search for a particular one-time item.
           * Maximum length of 200 characters.
           * To remove the lookup_key from the object, set it to null in the request.
           */
          lookup_key?: string;

          /**
           * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata?: Stripe.MetadataParam;

          /**
           * Stripe Tax details.
           */
          tax_details?: OneTimeItemUpdateParams.TaxDetails;

          /**
           * The unit to use when displaying prices for this one-time item. For example, set this field
           * to "credit" for the display to show "(price) per credit".
           * Maximum length of 100 characters.
           */
          unit_label?: string;
        }

        namespace OneTimeItemUpdateParams {
          interface TaxDetails {
            /**
             * Product tax code (PTC).
             */
            tax_code: string;
          }
        }
      }

      namespace Billing {
        interface OneTimeItemListParams {
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
        class OneTimeItemsResource {
          /**
           * Create a One-Time Item object.
           */
          create(
            params: OneTimeItemCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.OneTimeItem>>;

          /**
           * Retrieve a One-Time Item object.
           */
          retrieve(
            id: string,
            params?: OneTimeItemRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.OneTimeItem>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.OneTimeItem>>;

          /**
           * Update a One-Time Item object.
           */
          update(
            id: string,
            params?: OneTimeItemUpdateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.OneTimeItem>>;

          /**
           * List all One-Time Item objects in reverse chronological order of creation.
           */
          list(
            params?: OneTimeItemListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Billing.OneTimeItem>;
          list(
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Billing.OneTimeItem>;
        }
      }
    }
  }
}
