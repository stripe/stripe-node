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
           * Unique identifier for the PricingPlan.
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
          description: string | null;

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
          live_version: string | null;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * An internal key you can use to search for a particular PricingPlan. Maximum length of 200 characters.
           */
          lookup_key: string | null;

          /**
           * Set of key-value pairs that you can attach to an object.
           */
          metadata: Stripe.Metadata | null;

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
