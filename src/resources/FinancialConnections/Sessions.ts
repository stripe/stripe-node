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
   * Settings for the Hosted UI mode.
   */
  hosted?: FinancialConnections.Session.Hosted | null;

  limits?: FinancialConnections.Session.Limits;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  manual_entry?: FinancialConnections.Session.ManualEntry;

  /**
   * Permissions requested for accounts collected during this session.
   */
  permissions: Array<FinancialConnections.Session.Permission>;

  /**
   * Data features requested to be retrieved upon account creation.
   */
  prefetch: Array<FinancialConnections.Session.Prefetch> | null;

  relink_options?: FinancialConnections.Session.RelinkOptions;

  relink_result?: FinancialConnections.Session.RelinkResult;

  /**
   * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
   */
  return_url?: string;

  /**
   * The current state of the session.
   */
  status?: FinancialConnections.Session.Status;

  status_details?: FinancialConnections.Session.StatusDetails;

  /**
   * The UI mode for this session.
   */
  ui_mode?: FinancialConnections.Session.UiMode;

  /**
   * The hosted URL for this Session. Redirect customers to this URL to take them to the hosted authentication flow. This value is only present when the Session is active and the `ui_mode` is `hosted`.
   */
  url?: string | null;
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

      /**
       * Stripe ID of the institution with which the customer should be directed to log in.
       */
      institution?: string;
    }

    export interface Hosted {
      /**
       * How the user enters the hosted flow. You can only use the values `email` and `url` if you provide `relink_options`.
       */
      delivery_method?: Hosted.DeliveryMethod;

      /**
       * The URL to redirect your customer back to after they link their accounts or cancel this Session. This parameter is required if `ui_mode` is `hosted`.
       */
      return_url: string | null;
    }

    export interface Limits {
      /**
       * The number of accounts that can be linked in this Session.
       */
      accounts: number;
    }

    export interface ManualEntry {}

    export type Permission =
      | 'balances'
      | 'ownership'
      | 'payment_method'
      | 'transactions';

    export type Prefetch =
      | 'balances'
      | 'inferred_balances'
      | 'ownership'
      | 'transactions';

    export interface RelinkOptions {
      /**
       * Requires the end user to repair this specific account during the authentication flow instead of connecting a different one.
       */
      account?: string | null;

      /**
       * The authorization to relink in the Session.
       */
      authorization: string;
    }

    export interface RelinkResult {
      /**
       * The account relinked in the Session. Only present if `relink_options[account]` is set and relink is successful.
       */
      account: string | null;

      /**
       * The authorization relinked in the Session. Only present if relink is successful.
       */
      authorization: string | null;

      /**
       * Reason for why relink failed. One of `no_authorization`, `no_account`, or `other`.
       */
      failure_reason: RelinkResult.FailureReason | null;
    }

    export type Status = 'cancelled' | 'failed' | 'pending' | 'succeeded';

    export interface StatusDetails {
      cancelled?: StatusDetails.Cancelled;
    }

    export type UiMode = 'hosted' | 'modal';

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

    export namespace Hosted {
      export type DeliveryMethod = 'email' | 'url';
    }

    export namespace RelinkResult {
      export type FailureReason = 'no_account' | 'no_authorization' | 'other';
    }

    export namespace StatusDetails {
      export interface Cancelled {
        /**
         * The reason for the Session being cancelled.
         */
        reason: Cancelled.Reason;
      }

      export namespace Cancelled {
        export type Reason = 'custom_manual_entry' | 'other';
      }
    }
  }
}
export namespace FinancialConnections {
  export interface SessionCreateParams {
    /**
     * List of data features that you would like to request access to.
     *
     * Possible values are `balances`, `transactions`, `ownership`, and `payment_method`.
     */
    permissions: Array<SessionCreateParams.Permission>;

    /**
     * The account holder to link accounts for.
     */
    account_holder?: SessionCreateParams.AccountHolder;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Filters to restrict the kinds of accounts to collect.
     */
    filters?: SessionCreateParams.Filters;

    /**
     * Settings for hosted Sessions. Required if `ui_mode` is `hosted`.
     */
    hosted?: SessionCreateParams.Hosted;

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
     * Options for specifying a Session targeted to relinking an authorization.
     */
    relink_options?: SessionCreateParams.RelinkOptions;

    /**
     * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
     */
    return_url?: string;

    /**
     * The UI mode of the Session. Defaults to `modal`.
     */
    ui_mode?: SessionCreateParams.UiMode;
  }

  export namespace SessionCreateParams {
    export type Permission =
      | 'balances'
      | 'ownership'
      | 'payment_method'
      | 'transactions';

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
       * Stripe ID of the institution with which the customer should be directed to log in.
       */
      institution?: string;
    }

    export interface Hosted {
      /**
       * How the user should enter the hosted flow. The values `email` and `url` can only be used if `relink_options` is provided.
       */
      delivery_method?: Hosted.DeliveryMethod;
    }

    export interface Limits {
      /**
       * The number of accounts that can be linked in this Session.
       */
      accounts: number;
    }

    export interface ManualEntry {
      /**
       * How manual entry should be handled.
       */
      mode?: ManualEntry.Mode;
    }

    export type Prefetch =
      | 'balances'
      | 'inferred_balances'
      | 'ownership'
      | 'transactions';

    export interface RelinkOptions {
      /**
       * The account to relink. Must belong to the authorization specified in `authorization`.
       */
      account?: string;

      /**
       * The authorization to relink.
       */
      authorization: string;
    }

    export type UiMode = 'hosted' | 'modal';

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

    export namespace Hosted {
      export type DeliveryMethod = 'email' | 'url';
    }

    export namespace ManualEntry {
      export type Mode = 'automatic' | 'custom';
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
