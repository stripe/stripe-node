// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {Account} from './Accounts.js';
import {Customer} from './../Customers.js';
import {RequestOptions, Response, ApiList} from '../../lib.js';
const stripeMethod = StripeResource.method;
export class SessionResource extends StripeResource {
  /**
   * Retrieves the details of a Financial Connections Session
   */
  retrieve(
    id: string,
    params?: FinancialConnections.SessionRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Session>>;
  retrieve(id: string, options?: RequestOptions): Promise<Response<Session>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/financial_connections/sessions/{session}',
    }).call(this, ...args);
  }

  /**
   * To launch the Financial Connections authorization flow, create a Session. The session's client_secret can be used to launch the flow using Stripe.js.
   */
  create(
    params: FinancialConnections.SessionCreateParams,
    options?: RequestOptions
  ): Promise<Response<Session>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/financial_connections/sessions',
    }).call(this, ...args);
  }
}
export interface Session {
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
  account_holder: FinancialConnections.Session.AccountHolder | null;

  /**
   * The accounts that were collected as part of this Session.
   */
  accounts: ApiList<Account>;

  /**
   * A value that will be passed to the client to launch the authentication flow.
   */
  client_secret: string | null;

  filters?: FinancialConnections.Session.Filters;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Permissions requested for accounts collected during this session.
   */
  permissions: Array<FinancialConnections.Session.Permission>;

  /**
   * Data features requested to be retrieved upon account creation.
   */
  prefetch: Array<FinancialConnections.Session.Prefetch> | null;

  /**
   * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
   */
  return_url?: string;
}
export namespace FinancialConnections {
  export namespace Session {
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

    export interface Filters {
      /**
       * Restricts the Session to subcategories of accounts that can be linked. Valid subcategories are: `checking`, `savings`, `mortgage`, `line_of_credit`, `credit_card`.
       */
      account_subcategories: Array<Filters.AccountSubcategory> | null;

      /**
       * List of countries from which to filter accounts.
       */
      countries: Array<string> | null;
    }

    export type Permission =
      | 'balances'
      | 'ownership'
      | 'payment_method'
      | 'transactions';

    export type Prefetch = 'balances' | 'ownership' | 'transactions';

    export namespace AccountHolder {
      export type Type = 'account' | 'customer';
    }

    export namespace Filters {
      export type AccountSubcategory =
        | 'checking'
        | 'credit_card'
        | 'line_of_credit'
        | 'mortgage'
        | 'savings';
    }
  }
}
export namespace FinancialConnections {
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

  export namespace SessionCreateParams {
    export interface AccountHolder {
      /**
       * The ID of the Stripe account whose accounts you will retrieve. Only available when `type` is `account`.
       */
      account?: string;

      /**
       * The ID of the Stripe customer whose accounts you will retrieve. Only available when `type` is `customer`.
       */
      customer?: string;

      /**
       * The ID of Account representing a customer whose accounts you will retrieve. Only available when `type` is `customer`.
       */
      customer_account?: string;

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

    export namespace AccountHolder {
      export type Type = 'account' | 'customer';
    }

    export namespace Filters {
      export type AccountSubcategory =
        | 'checking'
        | 'credit_card'
        | 'line_of_credit'
        | 'mortgage'
        | 'savings';
    }
  }
}
export namespace FinancialConnections {
  export interface SessionRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
