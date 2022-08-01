// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The ExchangeRate object.
     */
    interface ExchangeRate {
      /**
       * Unique identifier for the object. Represented as the three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) in lowercase.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'exchange_rate';

      /**
       * Hash where the keys are supported currencies and the values are the exchange rate at which the base id currency converts to the key currency.
       */
      rates: {
        [key: string]: number;
      };
    }

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
       * Retrieves the exchange rates from the given currency to every supported currency.
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
       * Returns a list of objects that contain the rates at which foreign currencies are converted to one another. Only shows the currencies for which Stripe supports.
       */
      list(
        params?: ExchangeRateListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.ExchangeRate>;
      list(options?: RequestOptions): ApiListPromise<Stripe.ExchangeRate>;
    }
  }
}
