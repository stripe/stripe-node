// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        namespace PricingPlanSubscriptions {
          interface ComponentRetrieveParams {}
        }
      }

      namespace Billing {
        namespace PricingPlanSubscriptions {
          class ComponentsResource {
            /**
             * Retrieve a Pricing Plan Subscription's components.
             */
            retrieve(
              id: string,
              params?: ComponentRetrieveParams,
              options?: RequestOptions
            ): Promise<
              Stripe.Response<
                Stripe.V2.Billing.PricingPlanSubscriptionComponents
              >
            >;
            retrieve(
              id: string,
              options?: RequestOptions
            ): Promise<
              Stripe.Response<
                Stripe.V2.Billing.PricingPlanSubscriptionComponents
              >
            >;
          }
        }
      }
    }
  }
}
