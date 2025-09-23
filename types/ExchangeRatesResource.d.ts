// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface ExchangeRateRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface ExchangeRateListParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class ExchangeRatesResource {
      /**
       * [Deprecated] The ExchangeRate APIs are deprecated. Please use the [FX Quotes API](https://docs.stripe.com/payments/currencies/localize-prices/fx-quotes-api) instead.
       *
       * Retrieves the exchange rates from the given currency to every supported currency.
       * @deprecated
       */
      retrieve(
        id: string,
        params?: ExchangeRateRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.ExchangeRate>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.ExchangeRate>>;

      /**
       * [Deprecated] The ExchangeRate APIs are deprecated. Please use the [FX Quotes API](https://docs.stripe.com/payments/currencies/localize-prices/fx-quotes-api) instead.
       *
       * Returns a list of objects that contain the rates at which foreign currencies are converted to one another. Only shows the currencies for which Stripe supports.
       * @deprecated
       */
      list(
        params?: ExchangeRateListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.ExchangeRate>;
      list(options?: RequestOptions): ApiListPromise<Stripe.ExchangeRate>;
    }
  }
}
