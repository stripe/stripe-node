// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        /**
         * The PricingPlan object.
         */
        interface PricingPlan {
          /**
           * Unique identifier for the object.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.billing.pricing_plan';

          /**
           * Whether the PricingPlan is active.
           */
          active: boolean;

          /**
           * Time at which the object was created.
           */
          created: string;

          /**
           * The currency of the PricingPlan.
           */
          currency: string;

          /**
           * A description for pricing plan subscription.
           * Maximum length of 500 characters.
           */
          description?: string;

          /**
           * Display name of the PricingPlan.
           */
          display_name: string;

          /**
           * The ID of the latest version of the PricingPlan.
           */
          latest_version: string;

          /**
           * The ID of the live version of the PricingPlan.
           */
          live_version?: string;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * An internal key you can use to search for a particular PricingPlan. Maximum length of 200 characters.
           */
          lookup_key?: string;

          /**
           * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata?: Stripe.Metadata;

          /**
           * The Stripe Tax tax behavior - whether the PricingPlan is inclusive or exclusive of tax.
           */
          tax_behavior: PricingPlan.TaxBehavior;
        }

        namespace PricingPlan {
          type TaxBehavior = 'exclusive' | 'inclusive';
        }
      }
    }
  }
}
