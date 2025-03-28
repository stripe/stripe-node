// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Capital {
      interface FinancingOfferRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface FinancingOfferListParams extends PaginationParams {
        /**
         * limit list to offers belonging to given connected account
         */
        connected_account?: string;

        /**
         * Only return offers that were created during the given date interval.
         */
        created?: Stripe.RangeQueryParam | number;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * limit list to offers with given status
         */
        status?: FinancingOfferListParams.Status;
      }

      namespace FinancingOfferListParams {
        type Status =
          | 'accepted'
          | 'canceled'
          | 'completed'
          | 'delivered'
          | 'expired'
          | 'fully_repaid'
          | 'paid_out'
          | 'rejected'
          | 'revoked'
          | 'undelivered';
      }

      interface FinancingOfferMarkDeliveredParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class FinancingOffersResource {
        /**
         * Get the details of the financing offer
         */
        retrieve(
          id: string,
          params?: FinancingOfferRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Capital.FinancingOffer>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Capital.FinancingOffer>>;

        /**
         * Retrieves the financing offers available for Connected accounts that belong to your platform.
         */
        list(
          params?: FinancingOfferListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Capital.FinancingOffer>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.Capital.FinancingOffer>;

        /**
         * Acknowledges that platform has received and delivered the financing_offer to
         * the intended merchant recipient.
         */
        markDelivered(
          id: string,
          params?: FinancingOfferMarkDeliveredParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Capital.FinancingOffer>>;
        markDelivered(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Capital.FinancingOffer>>;
      }
    }
  }
}
