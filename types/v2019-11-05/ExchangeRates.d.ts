declare namespace Stripe {
  /**
   * The ExchangeRate object.
   */
  interface ExchangeRate {
    /**
     * Unique identifier for the object. Represented as the three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) in lowercase.
     */
    id?: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'exchange_rate';

    /**
     * Hash where the keys are supported currencies and the values are the exchange rate at which the base id currency converts to the key currency.
     */
    rates?: {
      [key: string]: number;
    };
  }

  /**
   * Retrieves the exchange rates from the given currency to every supported currency.
   */
  interface ExchangeRateRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Returns a list of objects that contain the rates at which foreign currencies are converted to one another. Only shows the currencies for which Stripe supports.
   */
  interface ExchangeRateListParams {
    /**
     * A cursor for use in pagination. `ending_before` is the currency that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with the exchange rate for currency X your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
     */
    ending_before?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A limit on the number of objects to be returned. Limit can range between 1 and total number of supported payout currencies, and the default is the max.
     */
    limit?: number;

    /**
     * A cursor for use in pagination. `starting_after` is the currency that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with the exchange rate for currency X, your subsequent call can include `starting_after=X` in order to fetch the next page of the list.
     */
    starting_after?: string;
  }

  class ExchangeRatesResource {
    /**
     * Retrieves the exchange rates from the given currency to every supported currency.
     */
    retrieve(
      id: string,
      params?: ExchangeRateRetrieveParams,
      options?: RequestOptions
    ): Promise<ExchangeRate>;
    retrieve(id: string, options?: RequestOptions): Promise<ExchangeRate>;

    /**
     * Returns a list of objects that contain the rates at which foreign currencies are converted to one another. Only shows the currencies for which Stripe supports.
     */
    list(
      params?: ExchangeRateListParams,
      options?: RequestOptions
    ): ApiListPromise<ExchangeRate>;
    list(options?: RequestOptions): ApiListPromise<ExchangeRate>;
  }
}