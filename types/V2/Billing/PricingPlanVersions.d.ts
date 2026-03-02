// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        /**
         * A Pricing Plan Version represents a specific configuration of a Pricing Plan at a point in time. Versions are created
         * automatically when you update a Pricing Plan, allowing you to track changes and manage which version is active for new
         * subscriptions. Each version has a start date and optionally an end date if it has been superseded.
         */
        interface PricingPlanVersion {
          /**
           * Unique identifier for the object.
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
           * The timestamp when this version became inactive. Null if it's the latest version.
           */
          end_date?: string;

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
