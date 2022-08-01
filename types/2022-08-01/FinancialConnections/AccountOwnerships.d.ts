// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace FinancialConnections {
      /**
       * The AccountOwnership object.
       */
      interface AccountOwnership {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'financial_connections.account_ownership';

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * A paginated list of owners for this account.
         */
        owners: ApiList<Stripe.FinancialConnections.AccountOwner>;
      }
    }
  }
}
