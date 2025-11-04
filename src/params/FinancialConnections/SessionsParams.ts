// File generated from our OpenAPI spec

namespace FinancialConnections {
  export interface SessionCreateParams {
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
     * List of data features that you would like to retrieve upon account creation.
     */
    prefetch?: Array<SessionCreateParams.Prefetch>;

    /**
     * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
     */
    return_url?: string;
  }

  namespace SessionCreateParams {
    export interface AccountHolder {
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

    export type Permission =
      | 'balances'
      | 'ownership'
      | 'payment_method'
      | 'transactions';

    export interface Filters {
      /**
       * Restricts the Session to subcategories of accounts that can be linked. Valid subcategories are: `checking`, `savings`, `mortgage`, `line_of_credit`, `credit_card`.
       */
      account_subcategories?: Array<Filters.AccountSubcategory>;

      /**
       * List of countries from which to collect accounts.
       */
      countries?: Array<string>;
    }

    export type Prefetch = 'balances' | 'ownership' | 'transactions';

    namespace AccountHolder {
      export type Type = 'account' | 'customer';
    }

    namespace Filters {
      export type AccountSubcategory =
        | 'checking'
        | 'credit_card'
        | 'line_of_credit'
        | 'mortgage'
        | 'savings';
    }
  }
}
namespace FinancialConnections {
  export interface SessionRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
