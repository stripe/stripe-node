// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        interface LicensedItemCreateParams {
          /**
           * Description that customers will see in the invoice line item.
           * Maximum length of 250 characters.
           */
          display_name: string;

          /**
           * An internal key you can use to search for a particular billable item.
           * Must be unique among billable items.
           * Maximum length of 200 characters.
           */
          lookup_key?: string;

          /**
           * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata?: Stripe.MetadataParam;

          /**
           * Stripe Tax details.
           */
          tax_details?: LicensedItemCreateParams.TaxDetails;

          /**
           * The unit to use when displaying prices for this billable item in places like Checkout. For example, set this field
           * to "seat" for Checkout to display "(price) per seat", or "environment" to display "(price) per environment".
           * Maximum length of 100 characters.
           */
          unit_label?: string;
        }

        namespace LicensedItemCreateParams {
          interface TaxDetails {
            /**
             * Product tax code (PTC).
             */
            tax_code: string;
          }
        }
      }

      namespace Billing {
        interface LicensedItemRetrieveParams {}
      }

      namespace Billing {
        interface LicensedItemUpdateParams {
          /**
           * Description that customers will see in the invoice line item.
           * Maximum length of 250 characters.
           */
          display_name?: string;

          /**
           * An internal key you can use to search for a particular billable item.
           * Maximum length of 200 characters.
           * To remove the lookup_key from the object, set it to null in the request.
           */
          lookup_key?: string | null;

          /**
           * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata?: Stripe.MetadataParam;

          /**
           * Stripe Tax details.
           */
          tax_details?: LicensedItemUpdateParams.TaxDetails;

          /**
           * The unit to use when displaying prices for this billable item in places like Checkout. For example, set this field
           * to "seat" for Checkout to display "(price) per seat", or "environment" to display "(price) per environment".
           * Maximum length of 100 characters.
           */
          unit_label?: string | null;
        }

        namespace LicensedItemUpdateParams {
          interface TaxDetails {
            /**
             * Product tax code (PTC).
             */
            tax_code: string;
          }
        }
      }

      namespace Billing {
        interface LicensedItemListParams {
          /**
           * Optionally set the maximum number of results per page. Defaults to 20.
           */
          limit?: number;
        }
      }

      namespace Billing {
        class LicensedItemsResource {
          /**
           * Create a LicensedItem object.
           */
          create(
            params: LicensedItemCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.LicensedItem>>;

          /**
           * Retrieve a LicensedItem object.
           */
          retrieve(
            id: string,
            params?: LicensedItemRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.LicensedItem>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.LicensedItem>>;

          /**
           * Update a LicensedItem object. At least one of the fields is required.
           */
          update(
            id: string,
            params?: LicensedItemUpdateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.LicensedItem>>;

          /**
           * List all LicensedItem objects in reverse chronological order of creation.
           */
          list(
            params?: LicensedItemListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Billing.LicensedItem>;
          list(
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Billing.LicensedItem>;
        }
      }
    }
  }
}
