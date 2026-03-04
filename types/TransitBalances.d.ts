// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * Funds that are in transit and destined for another balance or another connected account.
     */
    interface TransitBalance {
      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'transit_balance';

      balance: TransitBalance.Balance;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
       */
      livemode: boolean;
    }

    namespace TransitBalance {
      interface Balance {
        available: number;

        pending: number;
      }
    }
  }
}
