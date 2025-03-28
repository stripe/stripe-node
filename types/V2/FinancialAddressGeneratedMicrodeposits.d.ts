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
        amounts: Array<Amount>;

        /**
         * Closed Enum. The status of the request.
         */
        status: 'accepted';
      }
    }
  }
}
