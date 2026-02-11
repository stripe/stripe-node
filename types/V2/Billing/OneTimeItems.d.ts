// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        /**
         * A one-time item represents a product that can be charged as a one-time line item,
         * used for overage charges when custom pricing unit credits are exhausted.
         */
        interface OneTimeItem {
          /**
           * Unique identifier for the object.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.billing.one_time_item';

          /**
           * Timestamp of when the object was created.
           */
          created: string;

          /**
           * Description that customers will see in the invoice line item.
           * Maximum length of 250 characters.
           */
          display_name: string;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * An internal key you can use to search for a particular one-time item.
           * Maximum length of 200 characters.
           */
          lookup_key?: string;

          /**
           * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata?: Stripe.Metadata;

          /**
           * Stripe Tax details.
           */
          tax_details?: OneTimeItem.TaxDetails;

          /**
           * The unit to use when displaying prices for this one-time item. For example, set this field
           * to "credit" for the display to show "(price) per credit".
           * Maximum length of 100 characters.
           */
          unit_label?: string;
        }

        namespace OneTimeItem {
          interface TaxDetails {
            /**
             * Product tax code (PTC).
             */
            tax_code: string;
          }
        }
      }
    }
  }
}
