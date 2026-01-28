// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Reserve {
      interface HoldRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface HoldListParams extends PaginationParams {
        /**
         * Only return ReserveHolds associated with the currency specified by this currency code. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency?: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Only return ReserveHolds that are releasable.
         */
        is_releasable?: boolean;

        reason?: HoldListParams.Reason;

        /**
         * Only return ReserveHolds associated with the ReservePlan specified by this ReservePlan ID.
         */
        reserve_plan?: string;

        /**
         * Only return ReserveHolds associated with the ReserveRelease specified by this ReserveRelease ID.
         */
        reserve_release?: string;

        /**
         * Only return ReserveHolds associated with the Charge specified by this source charge ID.
         */
        source_charge?: string;
      }

      namespace HoldListParams {
        type Reason = 'charge' | 'standalone';
      }

      class HoldsResource {
        /**
         * Retrieve a ReserveHold.
         */
        retrieve(
          id: string,
          params?: HoldRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Reserve.Hold>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Reserve.Hold>>;

        /**
         * Returns a list of ReserveHolds previously created. The ReserveHolds are returned in sorted order, with the most recent ReserveHolds appearing first.
         */
        list(
          params?: HoldListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Reserve.Hold>;
        list(options?: RequestOptions): ApiListPromise<Stripe.Reserve.Hold>;
      }
    }
  }
}
