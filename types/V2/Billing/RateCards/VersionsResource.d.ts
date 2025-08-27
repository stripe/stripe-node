// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        namespace RateCards {
          interface VersionRetrieveParams {}
        }
      }

      namespace Billing {
        namespace RateCards {
          interface VersionListParams {
            /**
             * Optionally set the maximum number of results per page. Defaults to 20.
             */
            limit?: number;
          }
        }
      }

      namespace Billing {
        namespace RateCards {
          class VersionsResource {
            /**
             * Retrieve a specific version of a Rate Card object.
             */
            retrieve(
              rateCardId: string,
              id: string,
              params?: VersionRetrieveParams,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Billing.RateCardVersion>>;
            retrieve(
              rateCardId: string,
              id: string,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Billing.RateCardVersion>>;

            /**
             * List the versions of a Rate Card object. Results are sorted in reverse chronological order (most recent first).
             */
            list(
              id: string,
              params?: VersionListParams,
              options?: RequestOptions
            ): ApiListPromise<Stripe.V2.Billing.RateCardVersion>;
            list(
              id: string,
              options?: RequestOptions
            ): ApiListPromise<Stripe.V2.Billing.RateCardVersion>;
          }
        }
      }
    }
  }
}
