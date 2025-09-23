// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        interface MeteredItemCreateParams {
          /**
           * Description that customers will see in the invoice line item.
           * Maximum length of 250 characters.
           */
          display_name: string;

          /**
           * ID of the Meter that measures usage for this Metered Item.
           */
          meter: string;

          /**
           * Optional array of Meter dimensions to group event dimension keys for invoice line items.
           */
          invoice_presentation_dimensions?: Array<string>;

          /**
           * An internal key you can use to search for a particular billable item.
           * Must be unique among billable items.
           * Maximum length of 200 characters.
           */
          lookup_key?: string;

          /**
           * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata?: Stripe.MetadataParam;

          /**
           * Optional array of Meter segments to filter event dimension keys for billing.
           */
          meter_segment_conditions?: Array<
            MeteredItemCreateParams.MeterSegmentCondition
          >;

          /**
           * Stripe Tax details.
           */
          tax_details?: MeteredItemCreateParams.TaxDetails;

          /**
           * The unit to use when displaying prices for this billable item in places like Checkout. For example, set this field
           * to "CPU-hour" for Checkout to display "(price) per CPU-hour", or "1 million events" to display "(price) per 1
           * million events".
           * Maximum length of 100 characters.
           */
          unit_label?: string;
        }

        namespace MeteredItemCreateParams {
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

          interface TaxDetails {
            /**
             * Product tax code (PTC).
             */
            tax_code: string;
          }
        }
      }

      namespace Billing {
        interface MeteredItemRetrieveParams {}
      }

      namespace Billing {
        interface MeteredItemUpdateParams {
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
          lookup_key?: string;

          /**
           * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata?: Stripe.MetadataParam;

          /**
           * Stripe Tax details.
           */
          tax_details?: MeteredItemUpdateParams.TaxDetails;

          /**
           * The unit to use when displaying prices for this billable item in places like Checkout. For example, set this field
           * to "CPU-hour" for Checkout to display "(price) per CPU-hour", or "1 million events" to display "(price) per 1
           * million events".
           * Maximum length of 100 characters.
           * To remove the unit_label from the object, set it to null in the request.
           */
          unit_label?: string;
        }

        namespace MeteredItemUpdateParams {
          interface TaxDetails {
            /**
             * Product tax code (PTC).
             */
            tax_code: string;
          }
        }
      }

      namespace Billing {
        interface MeteredItemListParams {
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
        class MeteredItemsResource {
          /**
           * Create a Metered Item object.
           */
          create(
            params: MeteredItemCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.MeteredItem>>;

          /**
           * Retrieve a Metered Item object.
           */
          retrieve(
            id: string,
            params?: MeteredItemRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.MeteredItem>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.MeteredItem>>;

          /**
           * Update a Metered Item object. At least one of the fields is required.
           */
          update(
            id: string,
            params?: MeteredItemUpdateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.MeteredItem>>;

          /**
           * List all Metered Item objects in reverse chronological order of creation.
           */
          list(
            params?: MeteredItemListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Billing.MeteredItem>;
          list(
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Billing.MeteredItem>;
        }
      }
    }
  }
}
