// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        interface PricingPlanSubscriptionRetrieveParams {}
      }

      namespace Billing {
        interface PricingPlanSubscriptionListParams {
          /**
           * Filter by Cadence ID. Mutually exclusive with `payer`, `pricing_plan`, and `pricing_plan_version`.
           */
          billing_cadence?: string;

          /**
           * Optionally set the maximum number of results per page. Defaults to 20.
           */
          limit?: number;

          /**
           * Filter by payer. Mutually exclusive with `billing_cadence`, `pricing_plan`, and `pricing_plan_version`.
           */
          payer?: PricingPlanSubscriptionListParams.Payer;

          /**
           * Filter by PricingPlan ID. Mutually exlcusive with `billing_cadence`, `payer`, and `pricing_plan_version`.
           */
          pricing_plan?: string;

          /**
           * Filter by PricingPlanVersion ID. Mutually exlcusive with `billing_cadence`, `payer`, and `pricing_plan`.
           */
          pricing_plan_version?: string;

          /**
           * Filter by servicing status.
           */
          servicing_status?: PricingPlanSubscriptionListParams.ServicingStatus;
        }

        namespace PricingPlanSubscriptionListParams {
          interface Payer {
            /**
             * The ID of the Customer object. If provided, only PricingPlanSubscriptions that are subscribed on the Cadences with the specified Payer will be returned.
             */
            customer?: string;

            /**
             * A string identifying the type of the payer. Currently the only supported value is `customer`.
             */
            type: 'customer';
          }

          type ServicingStatus = 'active' | 'canceled' | 'paused' | 'pending';
        }
      }

      namespace Billing {
        class PricingPlanSubscriptionsResource {
          /**
           * Retrieve a PricingPlanSubscription object.
           */
          retrieve(
            id: string,
            params?: PricingPlanSubscriptionRetrieveParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.Billing.PricingPlanSubscription>
          >;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.Billing.PricingPlanSubscription>
          >;

          /**
           * List all PricingPlanSubscription objects.
           */
          list(
            params?: PricingPlanSubscriptionListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Billing.PricingPlanSubscription>;
          list(
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Billing.PricingPlanSubscription>;
        }
      }
    }
  }
}
