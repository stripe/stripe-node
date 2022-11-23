// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * `Exchange Rate` objects allow you to determine the rates that Stripe is
     * currently using to convert from one currency to another. Since this number is
     * variable throughout the day, there are various reasons why you might want to
     * know the current rate (for example, to dynamically price an item for a user
     * with a default payment in a foreign currency).
     *
     * If you want a guarantee that the charge is made with a certain exchange rate
     * you expect is current, you can pass in `exchange_rate` to charges endpoints.
     * If the value is no longer up to date, the charge won't go through. Please
     * refer to our [Exchange Rates API](https://stripe.com/docs/exchange-rates) guide for more
     * details.
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
  }
}
