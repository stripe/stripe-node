// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      /**
       * The FinancialAddressGeneratedMicrodeposits object.
       */
      interface FinancialAddressGeneratedMicrodeposits {
        /**
         * String representing the object's type. Objects of the same type share the same value of the object field.
         */
        object: 'financial_address_generated_microdeposits';

        /**
         * The amounts of the microdeposits that were generated.
         */
        amounts: Array<FinancialAddressGeneratedMicrodeposits.Amount>;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Closed Enum. The status of the request.
         */
        status: 'accepted';
      }

      namespace FinancialAddressGeneratedMicrodeposits {
        interface Amount {
          /**
           * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
           */
          value?: number;

          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency?: string;
        }
      }
    }
  }
}
