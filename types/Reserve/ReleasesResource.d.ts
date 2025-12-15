// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Reserve {
      interface ReleaseRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface ReleaseListParams extends PaginationParams {
        /**
         * Only return ReserveReleases associated with the currency specified by this currency code. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency?: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Only return ReserveReleases associated with the ReserveHold specified by this ReserveHold ID.
         */
        reserve_hold?: string;

        /**
         * Only return ReserveReleases associated with the ReservePlan specified by this ReservePlan ID.
         */
        reserve_plan?: string;
      }

      class ReleasesResource {
        /**
         * Retrieve a ReserveRelease.
         */
        retrieve(
          id: string,
          params?: ReleaseRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Reserve.Release>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Reserve.Release>>;

        /**
         * Returns a list of ReserveReleases previously created. The ReserveReleases are returned in sorted order, with the most recent ReserveReleases appearing first.
         */
        list(
          params?: ReleaseListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Reserve.Release>;
        list(options?: RequestOptions): ApiListPromise<Stripe.Reserve.Release>;
      }
    }
  }
}
