// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        /**
         * A LicensedItem represents a billable item whose pricing is based on license fees. You can use LicenseFees
         * to specify the pricing and create Subscriptions to these items.
         */
        interface LicensedItem {
          /**
           * The ID of the LicensedItem.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.billing.licensed_item';

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
           * An internal key you can use to search for a particular billable item.
           * Maximum length of 200 characters.
           */
          lookup_key: string | null;

          /**
           * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata: Stripe.Metadata | null;

          /**
           * Stripe Tax details.
           */
          tax_details: LicensedItem.TaxDetails | null;

          /**
           * The unit to use when displaying prices for this billable item in places like Checkout. For example, set this field
           * to "seat" for Checkout to display "(price) per seat", or "environment" to display "(price) per environment".
           * Maximum length of 100 characters.
           */
          unit_label: string | null;
        }

        namespace LicensedItem {
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
