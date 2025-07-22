// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      /**
       * The FinancialAddressCreditSimulation object.
       */
      interface FinancialAddressCreditSimulation {
        /**
         * String representing the object's type. Objects of the same type share the same value of the object field.
         */
        object: 'financial_address_credit_simulation';

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The status of the request, signifying whether a simulated credit was initiated.
         */
        status: string;
      }
    }
  }
}
