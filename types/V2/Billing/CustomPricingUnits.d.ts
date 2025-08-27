// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        /**
         * The Custom Pricing Unit object.
         */
        interface CustomPricingUnit {
          /**
           * Unique identifier for the object.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.billing.custom_pricing_unit';

          /**
           * Whether the custom pricing unit is active.
           */
          active: boolean;

          /**
           * Timestamp of when the object was created.
           */
          created: string;

          /**
           * Description that customers will see in the invoice line item.
           * Maximum length of 10 characters.
           */
          display_name: string;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * An internal key you can use to search for a particular Custom Pricing Unit.
           * Maximum length of 200 characters.
           */
          lookup_key: string | null;

          /**
           * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata: Stripe.Metadata | null;
        }
      }
    }
  }
}
