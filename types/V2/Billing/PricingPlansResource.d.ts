// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        interface PricingPlanCreateParams {
          /**
           * The currency of the PricingPlan.
           */
          currency: string;

          /**
           * Display name of the PricingPlan. Maximum 250 characters.
           */
          display_name: string;

          /**
           * The Stripe Tax tax behavior - whether the PricingPlan is inclusive or exclusive of tax.
           */
          tax_behavior: PricingPlanCreateParams.TaxBehavior;

          /**
           * Description of pricing plan subscription.
           */
          description?: string;

          /**
           * An internal key you can use to search for a particular PricingPlan. Maximum length of 200 characters.
           */
          lookup_key?: string;

          /**
           * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata?: Stripe.MetadataParam;
        }

        namespace PricingPlanCreateParams {
          type TaxBehavior = 'exclusive' | 'inclusive';
        }
      }

      namespace Billing {
        interface PricingPlanRetrieveParams {}
      }

      namespace Billing {
        interface PricingPlanUpdateParams {
          /**
           * Whether the PricingPlan is active.
           */
          active?: boolean;

          /**
           * Description of pricing plan subscription.
           */
          description?: string;

          /**
           * Display name of the PricingPlan. Maximum 250 characters.
           */
          display_name?: string;

          /**
           * The ID of the live version of the PricingPlan.
           */
          live_version?: string;

          /**
           * An internal key you can use to search for a particular PricingPlan. Maximum length of 200 characters.
           */
          lookup_key?: string;

          /**
           * Set of key-value pairs that you can attach to an object.
           */
          metadata?: Stripe.MetadataParam;
        }
      }

      namespace Billing {
        interface PricingPlanListParams {
          /**
           * Filter for active/inactive PricingPlans. Mutually exclusive with `lookup_keys`.
           */
          active?: boolean;

          /**
           * Optionally set the maximum number of results per page. Defaults to 20.
           */
          limit?: number;

          /**
           * Filter by lookup keys. Mutually exclusive with `active`.
           * You can specify up to 10 lookup keys.
           */
          lookup_keys?: Array<string>;
        }
      }

      namespace Billing {
        class PricingPlansResource {
          components: Stripe.V2.Billing.PricingPlans.ComponentsResource;
          versions: Stripe.V2.Billing.PricingPlans.VersionsResource;

          /**
           * Create a Pricing Plan object.
           */
          create(
            params: PricingPlanCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.PricingPlan>>;

          /**
           * Retrieve a Pricing Plan object.
           */
          retrieve(
            id: string,
            params?: PricingPlanRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.PricingPlan>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.PricingPlan>>;

          /**
           * Update a Pricing Plan object.
           */
          update(
            id: string,
            params?: PricingPlanUpdateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.PricingPlan>>;

          /**
           * List all Pricing Plan objects.
           */
          list(
            params?: PricingPlanListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Billing.PricingPlan>;
          list(
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Billing.PricingPlan>;
        }
      }
    }
  }
}
