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
           * Unique identifier for the object.
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
           * Details if this component is a License Fee.
           */
          license_fee?: PricingPlanComponent.LicenseFee;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * An internal key you can use to search for a particular PricingPlanComponent.
           */
          lookup_key?: string;

          /**
           * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata?: Stripe.Metadata;

          /**
           * The ID of the Pricing Plan this component belongs to.
           */
          pricing_plan: string;

          /**
           * The ID of the Pricing Plan Version this component belongs to.
           */
          pricing_plan_version: string;

          /**
           * Details if this component is a Rate Card.
           */
          rate_card?: PricingPlanComponent.RateCard;

          /**
           * Details if this component is a Service Action.
           */
          service_action?: PricingPlanComponent.ServiceAction;

          /**
           * The type of the PricingPlanComponent.
           */
          type: PricingPlanComponent.Type;
        }

        namespace PricingPlanComponent {
          interface LicenseFee {
            /**
             * The ID of the License Fee.
             */
            id: string;

            /**
             * The version of the LicenseFee. Defaults to 'latest', if not specified.
             */
            version?: string;
          }

          interface RateCard {
            /**
             * The ID of the Rate Card.
             */
            id: string;

            /**
             * The version of the RateCard. Defaults to 'latest', if not specified.
             */
            version?: string;
          }

          interface ServiceAction {
            /**
             * The ID of the service action.
             */
            id: string;
          }

          type Type = 'license_fee' | 'rate_card' | 'service_action';
        }
      }
    }
  }
}
