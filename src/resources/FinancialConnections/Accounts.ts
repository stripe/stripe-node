// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {AccountOwner} from './AccountOwners.js';
import {AccountOwnership} from './AccountOwnerships.js';
import {Customer} from './../Customers.js';
import {PaginationParams} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';
const stripeMethod = StripeResource.method;
export class AccountResource extends StripeResource {
  /**
   * Returns a list of Financial Connections Account objects.
   */
  list(
    params?: FinancialConnections.AccountListParams,
    options?: RequestOptions
  ): ApiListPromise<Account>;
  list(options?: RequestOptions): ApiListPromise<Account>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/financial_connections/accounts',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Retrieves the details of an Financial Connections Account.
   */
  retrieve(
    id: string,
    params?: FinancialConnections.AccountRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Account>>;
  retrieve(id: string, options?: RequestOptions): Promise<Response<Account>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/financial_connections/accounts/{account}',
    }).call(this, ...args);
  }

  /**
   * Disables your access to a Financial Connections Account. You will no longer be able to access data associated with the account (e.g. balances, transactions).
   */
  disconnect(
    id: string,
    params?: FinancialConnections.AccountDisconnectParams,
    options?: RequestOptions
  ): Promise<Response<Account>>;
  disconnect(id: string, options?: RequestOptions): Promise<Response<Account>>;
  disconnect(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/financial_connections/accounts/{account}/disconnect',
    }).call(this, ...args);
  }

  /**
   * Refreshes the data associated with a Financial Connections Account.
   */
  refresh(
    id: string,
    params: FinancialConnections.AccountRefreshParams,
    options?: RequestOptions
  ): Promise<Response<Account>>;
  refresh(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/financial_connections/accounts/{account}/refresh',
    }).call(this, ...args);
  }

  /**
   * Subscribes to periodic refreshes of data associated with a Financial Connections Account. When the account status is active, data is typically refreshed once a day.
   */
  subscribe(
    id: string,
    params: FinancialConnections.AccountSubscribeParams,
    options?: RequestOptions
  ): Promise<Response<Account>>;
  subscribe(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/financial_connections/accounts/{account}/subscribe',
    }).call(this, ...args);
  }

  /**
   * Unsubscribes from periodic refreshes of data associated with a Financial Connections Account.
   */
  unsubscribe(
    id: string,
    params: FinancialConnections.AccountUnsubscribeParams,
    options?: RequestOptions
  ): Promise<Response<Account>>;
  unsubscribe(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/financial_connections/accounts/{account}/unsubscribe',
    }).call(this, ...args);
  }

  /**
   * Lists all owners for a given Account
   */
  listOwners(
    id: string,
    params: FinancialConnections.AccountListOwnersParams,
    options?: RequestOptions
  ): ApiListPromise<AccountOwner>;
  listOwners(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/financial_connections/accounts/{account}/owners',
      methodType: 'list',
    }).call(this, ...args);
  }
}
export interface Account {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'financial_connections.account';

  /**
   * The account holder that this account belongs to.
   */
  account_holder: FinancialConnections.Account.AccountHolder | null;

  /**
   * Details about the account numbers.
   */
  account_numbers: Array<FinancialConnections.Account.AccountNumber> | null;

  /**
   * The most recent information about the account's balance.
   */
  balance: FinancialConnections.Account.Balance | null;

  /**
   * The state of the most recent attempt to refresh the account balance.
   */
  balance_refresh: FinancialConnections.Account.BalanceRefresh | null;

  /**
   * The type of the account. Account category is further divided in `subcategory`.
   */
  category: FinancialConnections.Account.Category;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * A human-readable name that has been assigned to this account, either by the account holder or by the institution.
   */
  display_name: string | null;

  /**
   * The name of the institution that holds this account.
   */
  institution_name: string;

  /**
   * The last 4 digits of the account number. If present, this will be 4 numeric characters.
   */
  last4: string | null;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * The most recent information about the account's owners.
   */
  ownership: string | AccountOwnership | null;

  /**
   * The state of the most recent attempt to refresh the account owners.
   */
  ownership_refresh: FinancialConnections.Account.OwnershipRefresh | null;

  /**
   * The list of permissions granted by this account.
   */
  permissions: Array<FinancialConnections.Account.Permission> | null;

  /**
   * The status of the link to the account.
   */
  status: FinancialConnections.Account.Status;

  /**
   * If `category` is `cash`, one of:
   *
   *  - `checking`
   *  - `savings`
   *  - `other`
   *
   * If `category` is `credit`, one of:
   *
   *  - `mortgage`
   *  - `line_of_credit`
   *  - `credit_card`
   *  - `other`
   *
   * If `category` is `investment` or `other`, this will be `other`.
   */
  subcategory: FinancialConnections.Account.Subcategory;

  /**
   * The list of data refresh subscriptions requested on this account.
   */
  subscriptions: Array<'transactions'> | null;

  /**
   * The [PaymentMethod type](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type)(s) that can be created from this account.
   */
  supported_payment_method_types: Array<
    FinancialConnections.Account.SupportedPaymentMethodType
  >;

  /**
   * The state of the most recent attempt to refresh the account transactions.
   */
  transaction_refresh: FinancialConnections.Account.TransactionRefresh | null;
}
export namespace FinancialConnections {
  export namespace Account {
    export interface AccountHolder {
      /**
       * The ID of the Stripe account that this account belongs to. Only available when `account_holder.type` is `account`.
       */
      account?: string | Account;

      /**
       * The ID for an Account representing a customer that this account belongs to. Only available when `account_holder.type` is `customer`.
       */
      customer?: string | Customer;

      customer_account?: string;

      /**
       * Type of account holder that this account belongs to.
       */
      type: AccountHolder.Type;
    }

    export interface AccountNumber {
      /**
       * When the account number is expected to expire, if applicable.
       */
      expected_expiry_date: number | null;

      /**
       * The type of account number associated with the account.
       */
      identifier_type: AccountNumber.IdentifierType;

      /**
       * Whether the account number is currently active and usable for transactions.
       */
      status: AccountNumber.Status;

      /**
       * The payment networks that the account number can be used for.
       */
      supported_networks: Array<'ach'>;
    }

    export interface Balance {
      /**
       * The time that the external institution calculated this balance. Measured in seconds since the Unix epoch.
       */
      as_of: number;

      cash?: Balance.Cash;

      credit?: Balance.Credit;

      /**
       * The balances owed to (or by) the account holder, before subtracting any outbound pending transactions or adding any inbound pending transactions.
       *
       * Each key is a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.
       *
       * Each value is a integer amount. A positive amount indicates money owed to the account holder. A negative amount indicates money owed by the account holder.
       */
      current: {
        [key: string]: number;
      };

      /**
       * The `type` of the balance. An additional hash is included on the balance with a name matching this value.
       */
      type: Balance.Type;
    }

    export interface BalanceRefresh {
      /**
       * The time at which the last refresh attempt was initiated. Measured in seconds since the Unix epoch.
       */
      last_attempted_at: number;

      /**
       * Time at which the next balance refresh can be initiated. This value will be `null` when `status` is `pending`. Measured in seconds since the Unix epoch.
       */
      next_refresh_available_at: number | null;

      /**
       * The status of the last refresh attempt.
       */
      status: BalanceRefresh.Status;
    }

    export type Category = 'cash' | 'credit' | 'investment' | 'other';

    export interface OwnershipRefresh {
      /**
       * The time at which the last refresh attempt was initiated. Measured in seconds since the Unix epoch.
       */
      last_attempted_at: number;

      /**
       * Time at which the next ownership refresh can be initiated. This value will be `null` when `status` is `pending`. Measured in seconds since the Unix epoch.
       */
      next_refresh_available_at: number | null;

      /**
       * The status of the last refresh attempt.
       */
      status: OwnershipRefresh.Status;
    }

    export type Permission =
      | 'balances'
      | 'ownership'
      | 'payment_method'
      | 'transactions';

    export type Status = 'active' | 'disconnected' | 'inactive';

    export type Subcategory =
      | 'checking'
      | 'credit_card'
      | 'line_of_credit'
      | 'mortgage'
      | 'other'
      | 'savings';

    export type SupportedPaymentMethodType = 'link' | 'us_bank_account';

    export interface TransactionRefresh {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * The time at which the last refresh attempt was initiated. Measured in seconds since the Unix epoch.
       */
      last_attempted_at: number;

      /**
       * Time at which the next transaction refresh can be initiated. This value will be `null` when `status` is `pending`. Measured in seconds since the Unix epoch.
       */
      next_refresh_available_at: number | null;

      /**
       * The status of the last refresh attempt.
       */
      status: TransactionRefresh.Status;
    }

    export namespace AccountHolder {
      export type Type = 'account' | 'customer';
    }

    export namespace AccountNumber {
      export type IdentifierType =
        | 'account_number'
        | 'tokenized_account_number';

      export type Status = 'deactivated' | 'transactable';
    }

    export namespace Balance {
      export interface Cash {
        /**
         * The funds available to the account holder. Typically this is the current balance after subtracting any outbound pending transactions and adding any inbound pending transactions.
         *
         * Each key is a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.
         *
         * Each value is a integer amount. A positive amount indicates money owed to the account holder. A negative amount indicates money owed by the account holder.
         */
        available: {
          [key: string]: number;
        } | null;
      }

      export interface Credit {
        /**
         * The credit that has been used by the account holder.
         *
         * Each key is a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.
         *
         * Each value is a integer amount. A positive amount indicates money owed to the account holder. A negative amount indicates money owed by the account holder.
         */
        used: {
          [key: string]: number;
        } | null;
      }

      export type Type = 'cash' | 'credit';
    }

    export namespace BalanceRefresh {
      export type Status = 'failed' | 'pending' | 'succeeded';
    }

    export namespace OwnershipRefresh {
      export type Status = 'failed' | 'pending' | 'succeeded';
    }

    export namespace TransactionRefresh {
      export type Status = 'failed' | 'pending' | 'succeeded';
    }
  }
}
export namespace FinancialConnections {
  export interface AccountRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace FinancialConnections {
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

  export namespace AccountListParams {
    export interface AccountHolder {
      /**
       * The ID of the Stripe account whose accounts you will retrieve.
       */
      account?: string;

      /**
       * The ID of the Stripe customer whose accounts you will retrieve.
       */
      customer?: string;

      /**
       * The ID of the Account representing a customer whose accounts you will retrieve.
       */
      customer_account?: string;
    }
  }
}
export namespace FinancialConnections {
  export interface AccountDisconnectParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace FinancialConnections {
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
export namespace FinancialConnections {
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

  export namespace AccountRefreshParams {
    export type Feature = 'balance' | 'ownership' | 'transactions';
  }
}
export namespace FinancialConnections {
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
export namespace FinancialConnections {
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
