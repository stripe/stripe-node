// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        /**
         * The PricingPlanVersion object.
         */
        interface PricingPlanVersion {
          /**
           * Unique identifier for the PricingPlanVersion.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.billing.pricing_plan_version';

          /**
           * Time at which the object was created.
           */
          created: string;

          /**
           * The timestamp when this version became inactive.
           */
          end_date: string;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * The ID of the PricingPlan this version belongs to.
           */
          pricing_plan: string;

          /**
           * The timestamp when this version became active.
           */
          start_date: string;
        }
      }
    }
  }
}
