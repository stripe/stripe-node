// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        interface PricingPlanSubscriptionRetrieveParams {}
      }

      namespace Billing {
        interface PricingPlanSubscriptionUpdateParams {
          /**
           * When set to true, the `servicing_status_transition.will_cancel_at` field will be cleared.
           */
          clear_cancel_at?: boolean;

          /**
           * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata?: Stripe.MetadataParam;
        }
      }

      namespace Billing {
        interface PricingPlanSubscriptionListParams {
          /**
           * Filter by Billing Cadence ID. Mutually exclusive with `payer`, `pricing_plan`, and `pricing_plan_version`.
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
           * Filter by Pricing Plan Version ID. Mutually exlcusive with `billing_cadence`, `payer`, and `pricing_plan`.
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
             * The ID of the Customer object. If provided, only Pricing Plan Subscriptions that are subscribed on the cadences with the specified payer will be returned.
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
          components: Stripe.V2.Billing.PricingPlanSubscriptions.ComponentsResource;

          /**
           * Retrieve a Pricing Plan Subscription object.
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
           * Update a Pricing Plan Subscription object.
           */
          update(
            id: string,
            params?: PricingPlanSubscriptionUpdateParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.Billing.PricingPlanSubscription>
          >;

          /**
           * List all Pricing Plan Subscription objects.
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
