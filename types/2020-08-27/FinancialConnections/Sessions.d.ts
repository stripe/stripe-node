// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace FinancialConnections {
      /**
       * The Session object.
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

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Permissions requested for accounts collected during this session.
         */
        permissions: Array<Session.Permission>;

        /**
         * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
         */
        return_url?: string;
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
           * List of countries from which to filter accounts.
           */
          countries: Array<string> | null;
        }

        type Permission =
          | 'balances'
          | 'ownership'
          | 'payment_method'
          | 'transactions';
      }

      interface SessionCreateParams {
        /**
         * The account holder to link accounts for.
         */
        account_holder: SessionCreateParams.AccountHolder;

        /**
         * List of data features that you would like to request access to.
         *
         * Possible values are `balances`, `transactions`, `ownership`, and `payment_method`.
         */
        permissions: Array<SessionCreateParams.Permission>;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Filters to restrict the kinds of accounts to collect.
         */
        filters?: SessionCreateParams.Filters;

        /**
         * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
         */
        return_url?: string;
      }

      namespace SessionCreateParams {
        interface AccountHolder {
          /**
           * The ID of the Stripe account whose accounts will be retrieved. Should only be present if `type` is `account`.
           */
          account?: string;

          /**
           * The ID of the Stripe customer whose accounts will be retrieved. Should only be present if `type` is `customer`.
           */
          customer?: string;

          /**
           * Type of account holder to collect accounts for.
           */
          type: AccountHolder.Type;
        }

        namespace AccountHolder {
          type Type = 'account' | 'customer';
        }

        interface Filters {
          /**
           * List of countries from which to collect accounts.
           */
          countries: Array<string>;
        }

        type Permission =
          | 'balances'
          | 'ownership'
          | 'payment_method'
          | 'transactions';
      }

      interface SessionRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class SessionsResource {
        /**
         * To launch the Financial Connections authorization flow, create a Session. The session's client_secret can be used to launch the flow using Stripe.js.
         */
        create(
          params: SessionCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.FinancialConnections.Session>>;

        /**
         * Retrieves the details of a Financial Connections Session
         */
        retrieve(
          id: string,
          params?: SessionRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.FinancialConnections.Session>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.FinancialConnections.Session>>;
      }
    }
  }
}
