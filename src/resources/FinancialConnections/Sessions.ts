// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {Account} from './Accounts.js';
import {Token} from './../Tokens.js';
import {Customer} from './../Customers.js';
import {OtherString, Emptyable} from '../../shared.js';
import {RequestOptions, Response, ApiList} from '../../lib.js';

export class SessionResource extends StripeResource {
  /**
   * Retrieves the details of a Financial Connections Session
   */
  retrieve(
    id: string,
    params?: FinancialConnections.SessionRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Session>> {
    return this._makeRequest(
      'GET',
      `/v1/financial_connections/sessions/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * To launch the Financial Connections authorization flow, create a Session. The session's client_secret can be used to launch the flow using Stripe.js.
   */
  create(
    params: FinancialConnections.SessionCreateParams,
    options?: RequestOptions
  ): Promise<Response<Session>> {
    return this._makeRequest(
      'POST',
      '/v1/financial_connections/sessions',
      params,
      options
    ) as any;
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
  account_holder: Session.AccountHolder | null;

  /**
   * The accounts that were collected as part of this Session.
   */
  accounts: ApiList<Account>;

  /**
   * Tokenization is the process Stripe uses to collect sensitive card or bank
   * account details, or personally identifiable information (PII), directly from
   * your customers in a secure manner. A token representing this information is
   * returned to your server to use. Use our
   * [recommended payments integrations](https://docs.stripe.com/payments) to perform this process
   * on the client-side. This guarantees that no sensitive card data touches your server,
   * and allows your integration to operate in a PCI-compliant way.
   *
   * If you can't use client-side tokenization, you can also create tokens using
   * the API with either your publishable or secret API key. If
   * your integration uses this method, you're responsible for any PCI compliance
   * that it might require, and you must keep your secret API key safe. Unlike with
   * client-side tokenization, your customer's information isn't sent directly to
   * Stripe, so we can't determine how it's handled or stored.
   *
   * You can't store or use tokens more than once. To store card or bank account
   * information for later use, create [Customer](https://docs.stripe.com/api#customers)
   * objects or [External accounts](https://docs.stripe.com/api#external_accounts).
   * [Radar](https://docs.stripe.com/radar), our integrated solution for automatic fraud protection,
   * performs best with integrations that use client-side tokenization.
   */
  bank_account_token?: Token;

  /**
   * A value that will be passed to the client to launch the authentication flow.
   */
  client_secret: string | null;

  filters?: Session.Filters;

  limits?: Session.Limits;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
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
}
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

    /**
     * Whether the Session should require that linked accounts support payments and retrieve account numbers before completion.
     */
    require_payment_method_support?: Filters.RequirePaymentMethodSupport;
  }

  export interface Limits {
    /**
     * The number of accounts that can be linked in this Session.
     */
    accounts: number;
  }

  export interface ManualEntry {
    /**
     * Controls how manual entry of bank account details is presented to the user.
     */
    mode?: ManualEntry.Mode;
  }

  export type Permission =
    | 'balances'
    | 'ownership'
    | 'payment_method'
    | 'transactions'
    | OtherString;

  export type Prefetch =
    | 'balances'
    | 'ownership'
    | 'transactions'
    | OtherString;

  export namespace AccountHolder {
    export type Type = 'account' | 'customer' | OtherString;
  }

  export namespace Filters {
    export type AccountSubcategory =
      | 'checking'
      | 'credit_card'
      | 'line_of_credit'
      | 'mortgage'
      | 'savings'
      | OtherString;

    export type RequirePaymentMethodSupport = 'all' | 'at_least_one' | 'none';
  }

  export namespace ManualEntry {
    export type Mode = 'automatic' | 'disabled' | OtherString;
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
     * Settings for configuring Session-specific limits.
     */
    limits?: SessionCreateParams.Limits;

    /**
     * Customize manual entry behavior
     */
    manual_entry?: SessionCreateParams.ManualEntry;

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

      /**
       * Whether the session should require payment method support and successful account number retrieval before completion.
       */
      require_payment_method_support?: Filters.RequirePaymentMethodSupport;
    }

    export interface Limits {
      /**
       * The number of accounts that can be linked in this Session. Pass an empty value to allow any number of accounts.
       */
      accounts: Emptyable<number>;
    }

    export interface ManualEntry {
      /**
       * How manual entry should be handled.
       */
      mode?: ManualEntry.Mode;
    }

    export type Prefetch =
      | 'balances'
      | 'ownership'
      | 'transactions'
      | OtherString;

    export namespace AccountHolder {
      export type Type = 'account' | 'customer' | OtherString;
    }

    export namespace Filters {
      export type AccountSubcategory =
        | 'checking'
        | 'credit_card'
        | 'line_of_credit'
        | 'mortgage'
        | 'savings'
        | OtherString;

      export type RequirePaymentMethodSupport = 'all' | 'at_least_one' | 'none';
    }

    export namespace ManualEntry {
      export type Mode = 'automatic' | 'disabled' | OtherString;
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
