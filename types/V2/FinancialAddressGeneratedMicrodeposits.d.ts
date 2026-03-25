// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      /**
       * Generated Microdeposits represent verification deposits sent to a financial address for ownership verification, containing the deposited amounts and status.
       */
      interface FinancialAddressGeneratedMicrodeposits {
        /**
         * String representing the object's type. Objects of the same type share the same value of the object field.
         */
        object: 'financial_address_generated_microdeposits';

        /**
         * The amounts of the microdeposits that were generated.
         */
        amounts: Array<Amount>;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Closed Enum. The status of the request.
         */
        status: 'accepted';
      }
    }
  }
}
