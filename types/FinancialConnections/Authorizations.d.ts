// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace FinancialConnections {
      /**
       * An Authorization represents the set of credentials used to connect a group of Financial Connections Accounts.
       */
      interface Authorization {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'financial_connections.authorization';

        /**
         * The account holder that this authorization belongs to.
         */
        account_holder?: Authorization.AccountHolder | null;

        /**
         * The ID of the Financial Connections Institution this account belongs to. Note that this relationship may sometimes change in rare circumstances (e.g. institution mergers).
         */
        institution?: string | Stripe.FinancialConnections.Institution | null;

        /**
         * The name of the institution that this authorization belongs to.
         */
        institution_name: string;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The status of the connection to the Authorization.
         */
        status: Authorization.Status;

        status_details: Authorization.StatusDetails;
      }

      namespace Authorization {
        interface AccountHolder {
          /**
           * The ID of the Stripe account that this account belongs to. Only available when `account_holder.type` is `account`.
           */
          account?: string | Stripe.Account;

          /**
           * The ID for an Account representing a customer that this account belongs to. Only available when `account_holder.type` is `customer`.
           */
          customer?: string | Stripe.Customer;

          customer_account?: string;

          /**
           * Type of account holder that this account belongs to.
           */
          type: AccountHolder.Type;
        }

        namespace AccountHolder {
          type Type = 'account' | 'customer';
        }

        type Status = 'active' | 'disconnected' | 'inactive';

        interface StatusDetails {
          inactive?: StatusDetails.Inactive;
        }

        namespace StatusDetails {
          interface Inactive {
            /**
             * The action (if any) to relink the inactive Authorization.
             */
            action: Inactive.Action;
          }

          namespace Inactive {
            type Action = 'none' | 'relink_required';
          }
        }
      }
    }
  }
}
