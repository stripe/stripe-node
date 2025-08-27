// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        /**
         * A Metered Item represents a billable item whose pricing is based on usage, measured by a meter. You can use rate cards
         * to specify the pricing and create subscriptions to these items.
         */
        interface MeteredItem {
          /**
           * Unique identifier for the object.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.billing.metered_item';

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
           * Optional array of Meter dimensions to group event dimension keys for invoice line items.
           */
          invoice_presentation_dimensions: Array<string>;

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
           * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata: Stripe.Metadata | null;

          /**
           * ID of the Meter that measures usage for this Metered Item.
           */
          meter: string;

          /**
           * Optional array of Meter segments to filter event dimension keys for billing.
           */
          meter_segment_conditions: Array<MeteredItem.MeterSegmentCondition>;

          /**
           * Stripe Tax details.
           */
          tax_details: MeteredItem.TaxDetails | null;

          /**
           * The unit to use when displaying prices for this billable item in places like Checkout. For example, set this field
           * to "CPU-hour" for Checkout to display "(price) per CPU-hour", or "1 million events" to display "(price) per 1
           * million events".
           * Maximum length of 100 characters.
           */
          unit_label: string | null;
        }

        namespace MeteredItem {
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
    }
  }
}
