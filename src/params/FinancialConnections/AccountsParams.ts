// File generated from our OpenAPI spec

namespace FinancialConnections {
  export interface AccountRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace FinancialConnections {
  export interface AccountListParams extends PaginationParams {
    /**
     * If present, only return accounts that belong to the specified account holder. `account_holder[customer]` and `account_holder[account]` are mutually exclusive.
     */
    account_holder?: AccountListParams.AccountHolder;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * If present, only return accounts that were collected as part of the given session.
     */
    session?: string;
  }

  namespace AccountListParams {
    export interface AccountHolder {
      /**
       * The ID of the Stripe account whose accounts will be retrieved.
       */
      account?: string;

      /**
       * The ID of the Stripe customer whose accounts will be retrieved.
       */
      customer?: string;
    }
  }
}
namespace FinancialConnections {
  export interface AccountDisconnectParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace FinancialConnections {
  export interface AccountListOwnersParams extends PaginationParams {
    /**
     * The ID of the ownership object to fetch owners from.
     */
    ownership: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace FinancialConnections {
  export interface AccountRefreshParams {
    /**
     * The list of account features that you would like to refresh.
     */
    features: Array<AccountRefreshParams.Feature>;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  namespace AccountRefreshParams {
    export type Feature = 'balance' | 'ownership' | 'transactions';
  }
}
namespace FinancialConnections {
  export interface AccountSubscribeParams {
    /**
     * The list of account features to which you would like to subscribe.
     */
    features: Array<'transactions'>;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace FinancialConnections {
  export interface AccountUnsubscribeParams {
    /**
     * The list of account features from which you would like to unsubscribe.
     */
    features: Array<'transactions'>;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
