// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace TestHelpers {
      interface CustomerFundCashBalanceParams {
        /**
         * Amount intended to be collected by this PaymentIntent. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
         */
        amount: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        reference?: string;
      }

      class CustomersResource {
        /**
         * Create an incoming testmode bank transfer
         */
        fundCashBalance(
          id: string,
          params: CustomerFundCashBalanceParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.CustomerCashBalanceTransaction>>;
      }
    }
  }
}
