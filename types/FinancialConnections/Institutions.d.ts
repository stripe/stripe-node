// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace FinancialConnections {
      /**
       * An institution represents a banking institution which may be available for an end user to select in the Financial Connections authentication flow.
       */
      interface Institution {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'financial_connections.institution';

        features: Institution.Features;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The name of this institution.
         */
        name: string;

        /**
         * A list of routing numbers which are known to correspond to this institution.
         */
        routing_numbers: Array<string>;

        /**
         * The status of this institution in the Financial Connections authentication flow.
         */
        status: Institution.Status;

        /**
         * The URL for this institution's website.
         */
        url: string | null;
      }

      namespace Institution {
        interface Features {
          balances: Features.Balances;

          ownership: Features.Ownership;

          payment_method: Features.PaymentMethod;

          transactions: Features.Transactions;
        }

        namespace Features {
          interface Balances {
            /**
             * Whether the given feature is supported by this institution.
             */
            supported: boolean;
          }

          interface Ownership {
            /**
             * Whether the given feature is supported by this institution.
             */
            supported: boolean;
          }

          interface PaymentMethod {
            /**
             * Whether the given feature is supported by this institution.
             */
            supported: boolean;
          }

          interface Transactions {
            /**
             * Whether the given feature is supported by this institution.
             */
            supported: boolean;
          }
        }

        type Status = 'active' | 'degraded' | 'inactive';
      }
    }
  }
}
