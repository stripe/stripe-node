// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        namespace PricingPlans {
          interface VersionRetrieveParams {}
        }
      }

      namespace Billing {
        namespace PricingPlans {
          interface VersionListParams {
            /**
             * Optionally set the maximum number of results per page. Defaults to 20.
             */
            limit?: number;
          }
        }
      }

      namespace Billing {
        namespace PricingPlans {
          class VersionsResource {
            /**
             * Retrieve a specific Pricing Plan Version of a Pricing Plan.
             */
            retrieve(
              pricingPlanId: string,
              id: string,
              params?: VersionRetrieveParams,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Billing.PricingPlanVersion>>;
            retrieve(
              pricingPlanId: string,
              id: string,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Billing.PricingPlanVersion>>;

            /**
             * List all Pricing Plan Versions of a Pricing Plan.
             */
            list(
              id: string,
              params?: VersionListParams,
              options?: RequestOptions
            ): ApiListPromise<Stripe.V2.Billing.PricingPlanVersion>;
            list(
              id: string,
              options?: RequestOptions
            ): ApiListPromise<Stripe.V2.Billing.PricingPlanVersion>;
          }
        }
      }
    }
  }
}
