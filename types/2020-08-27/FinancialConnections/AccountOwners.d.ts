// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace FinancialConnections {
      /**
       * The AccountOwner object.
       */
      interface AccountOwner {
        id: string;

        object: 'financial_connections.account_owner';

        /**
         * The email address of the owner.
         */
        email: string | null;

        /**
         * The full name of the owner.
         */
        name: string;

        /**
         * The ownership object that this owner belongs to.
         */
        ownership: string;

        /**
         * The raw phone number of the owner.
         */
        phone: string | null;

        /**
         * The raw physical address of the owner.
         */
        raw_address: string | null;

        /**
         * The timestamp of the refresh that updated this owner.
         */
        refreshed_at: number | null;
      }
    }
  }
}
