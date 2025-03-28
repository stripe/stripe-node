// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace FinancialConnections {
      /**
       * A Financial Connections Session is the secure way to programmatically launch the client-side Stripe.js modal that lets your users link their accounts.
       */
      interface Session {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'financial_connections.session';

        /**
         * The account holder for whom accounts are collected in this session.
         */
        account_holder: Session.AccountHolder | null;

        /**
         * The accounts that were collected as part of this Session.
         */
        accounts: ApiList<Stripe.FinancialConnections.Account>;

        /**
         * A value that will be passed to the client to launch the authentication flow.
         */
        client_secret: string;

        filters?: Session.Filters;

        limits?: Session.Limits;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        manual_entry?: Session.ManualEntry;

        /**
         * Permissions requested for accounts collected during this session.
         */
        permissions: Array<Session.Permission>;

        /**
         * Data features requested to be retrieved upon account creation.
         */
        prefetch: Array<Session.Prefetch> | null;

        /**
         * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
         */
        return_url?: string;

        /**
         * The current state of the session.
         */
        status?: Session.Status;

        status_details?: Session.StatusDetails;
      }

      namespace Session {
        interface AccountHolder {
          /**
           * The ID of the Stripe account this account belongs to. Should only be present if `account_holder.type` is `account`.
           */
          account?: string | Stripe.Account;

          /**
           * ID of the Stripe customer this account belongs to. Present if and only if `account_holder.type` is `customer`.
           */
          customer?: string | Stripe.Customer;

          /**
           * Type of account holder that this account belongs to.
           */
          type: AccountHolder.Type;
        }

        namespace AccountHolder {
          type Type = 'account' | 'customer';
        }

        interface Filters {
          /**
           * Restricts the Session to subcategories of accounts that can be linked. Valid subcategories are: `checking`, `savings`, `mortgage`, `line_of_credit`, `credit_card`.
           */
          account_subcategories: Array<Filters.AccountSubcategory> | null;

          /**
           * List of countries from which to filter accounts.
           */
          countries: Array<string> | null;

          /**
           * Stripe ID of the institution with which the customer should be directed to log in.
           */
          institution?: string;
        }

        namespace Filters {
          type AccountSubcategory =
            | 'checking'
            | 'credit_card'
            | 'line_of_credit'
            | 'mortgage'
            | 'savings';
        }

        interface Limits {
          /**
           * The number of accounts that can be linked in this Session.
           */
          accounts: number;
        }

        interface ManualEntry {}

        type Permission =
          | 'balances'
          | 'ownership'
          | 'payment_method'
          | 'transactions';

        type Prefetch =
          | 'balances'
          | 'inferred_balances'
          | 'ownership'
          | 'transactions';

        type Status = 'cancelled' | 'failed' | 'pending' | 'succeeded';

        interface StatusDetails {
          cancelled?: StatusDetails.Cancelled;
        }

        namespace StatusDetails {
          interface Cancelled {
            /**
             * The reason for the Session being cancelled.
             */
            reason: Cancelled.Reason;
          }

          namespace Cancelled {
            type Reason = 'custom_manual_entry' | 'other';
          }
        }
      }
    }
  }
}
