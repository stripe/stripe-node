// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        /**
         * A set of component subscriptions for a Pricing Plan Subscription.
         */
        interface PricingPlanSubscriptionComponents {
          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.billing.pricing_plan_subscription_components';

          /**
           * The component subscriptions of the Pricing Plan Subscription.
           */
          components: Array<PricingPlanSubscriptionComponents.Component>;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;
        }

        namespace PricingPlanSubscriptionComponents {
          interface Component {
            /**
             * The Pricing Plan Component associated with this component subscription.
             */
            pricing_plan_component: string;

            /**
             * The type of subscription.
             */
            type: Component.Type;

            /**
             * The ID of the License Fee Subscription.
             */
            license_fee_subscription?: string;

            /**
             * The ID of the Rate Card Subscription.
             */
            rate_card_subscription?: string;
          }

          namespace Component {
            type Type = 'license_fee_subscription' | 'rate_card_subscription';
          }
        }
      }
    }
  }
}
