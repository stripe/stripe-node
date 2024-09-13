// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface QuotePhaseRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface QuotePhaseListLineItemsParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class QuotePhasesResource {
      /**
       * Retrieves the quote phase with the given ID.
       */
      retrieve(
        id: string,
        params?: QuotePhaseRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.QuotePhase>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.QuotePhase>>;

      /**
       * When retrieving a quote phase, there is an includable line_items property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.
       */
      listLineItems(
        id: string,
        params?: QuotePhaseListLineItemsParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.LineItem>;
      listLineItems(
        id: string,
        options?: RequestOptions
      ): ApiListPromise<Stripe.LineItem>;
    }
  }
}
