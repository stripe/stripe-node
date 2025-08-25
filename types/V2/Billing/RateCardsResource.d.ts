// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        interface RateCardCreateParams {
          /**
           * The currency of this RateCard.
           */
          currency: string;

          /**
           * A customer-facing name for the RateCard.
           * This name is used in Stripe-hosted products like the Customer Portal and Checkout. It does not show up on Invoices.
           * Maximum length of 250 characters.
           */
          display_name: string;

          /**
           * The interval for assessing service. For example, a monthly RateCard with a rate of $1 for the first 10 "workloads"
           * and $2 thereafter means "$1 per workload up to 10 workloads during a month of service." This is similar to but
           * distinct from billing interval; the service interval deals with the rate at which the customer accumulates fees,
           * while the billing interval in Cadence deals with the rate the customer is billed.
           */
          service_interval: RateCardCreateParams.ServiceInterval;

          /**
           * The length of the interval for assessing service. For example, set this to 3 and `service_interval` to `"month"` in
           * order to specify quarterly service.
           */
          service_interval_count: number;

          /**
           * The Stripe Tax tax behavior - whether the rates are inclusive or exclusive of tax.
           */
          tax_behavior: RateCardCreateParams.TaxBehavior;

          /**
           * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata?: Stripe.MetadataParam;
        }

        namespace RateCardCreateParams {
          type ServiceInterval = 'day' | 'month' | 'week' | 'year';

          type TaxBehavior = 'exclusive' | 'inclusive';
        }
      }

      namespace Billing {
        interface RateCardRetrieveParams {}
      }

      namespace Billing {
        interface RateCardUpdateParams {
          /**
           * Sets whether the RateCard is active. Inactive RateCards cannot be used in new activations or have new rates added.
           */
          active?: boolean;

          /**
           * A customer-facing name for the RateCard.
           * This name is used in Stripe-hosted products like the Customer Portal and Checkout. It does not show up on Invoices.
           * Maximum length of 250 characters.
           */
          display_name?: string;

          /**
           * Changes the version that new RateCard activations will use. Providing `live_version = "latest"` will set the
           * RateCard's `live_version` to its latest version.
           */
          live_version?: string;

          /**
           * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata?: Stripe.MetadataParam;
        }
      }

      namespace Billing {
        interface RateCardListParams {
          /**
           * Optionally filter to active/inactive RateCards.
           */
          active?: boolean;

          /**
           * Optionally set the maximum number of results per page. Defaults to 20.
           */
          limit?: number;
        }
      }

      namespace Billing {
        class RateCardsResource {
          rates: Stripe.V2.Billing.RateCards.RatesResource;
          versions: Stripe.V2.Billing.RateCards.VersionsResource;

          /**
           * Create a RateCard object.
           */
          create(
            params: RateCardCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.RateCard>>;

          /**
           * Retrieve the latest version of a RateCard object.
           */
          retrieve(
            id: string,
            params?: RateCardRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.RateCard>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.RateCard>>;

          /**
           * Update a RateCard object.
           */
          update(
            id: string,
            params?: RateCardUpdateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.RateCard>>;

          /**
           * List all RateCard objects.
           */
          list(
            params?: RateCardListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Billing.RateCard>;
          list(
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Billing.RateCard>;
        }
      }
    }
  }
}
