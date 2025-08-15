// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        /**
         * The PricingPlanComponent object.
         */
        interface PricingPlanComponent {
          /**
           * Unique identifier for the PricingPlanComponent.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.billing.pricing_plan_component';

          /**
           * Time at which the object was created.
           */
          created: string;

          /**
           * Details if this component is a LicenseFee.
           */
          license_fee: PricingPlanComponent.LicenseFee | null;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * An internal key you can use to search for a particular PricingPlanComponent.
           */
          lookup_key: string | null;

          /**
           * Set of key-value pairs that you can attach to an object.
           */
          metadata: Stripe.Metadata | null;

          /**
           * The ID of the PricingPlan this component belongs to.
           */
          pricing_plan: string;

          /**
           * The ID of the PricingPlanVersion this component belongs to.
           */
          pricing_plan_version: string;

          /**
           * Details if this component is a RateCard.
           */
          rate_card: PricingPlanComponent.RateCard | null;

          /**
           * Details if this component is a ServiceAction.
           */
          service_action: PricingPlanComponent.ServiceAction | null;

          /**
           * The type of the PricingPlanComponent.
           */
          type: PricingPlanComponent.Type;
        }

        namespace PricingPlanComponent {
          interface LicenseFee {
            /**
             * The ID of the LicenseFee.
             */
            id: string;

            /**
             * The version of the LicenseFee.
             */
            version: string;
          }

          interface RateCard {
            /**
             * The ID of the RateCard.
             */
            id: string;

            /**
             * The version of the RateCard.
             */
            version: string;
          }

          interface ServiceAction {
            /**
             * The ID of the ServiceAction.
             */
            id: string;

            /**
             * The version of the ServiceAction.
             */
            version: string;
          }

          type Type = 'license_fee' | 'rate_card' | 'service_action';
        }
      }
    }
  }
}
