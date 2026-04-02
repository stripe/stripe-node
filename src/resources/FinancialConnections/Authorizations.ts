// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {Institution} from './Institutions.js';
import {Account} from './../Accounts.js';
import {Customer} from './../Customers.js';
import {RequestOptions, Response} from '../../lib.js';

export class AuthorizationResource extends StripeResource {
  /**
   * Retrieves the details of an Financial Connections Authorization.
   */
  retrieve(
    id: string,
    params?: FinancialConnections.AuthorizationRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Authorization>> {
    return this._makeRequest(
      'GET',
      `/v1/financial_connections/authorizations/${id}`,
      params,
      options
    ) as any;
  }
}
export interface Authorization {
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
  account_holder?: FinancialConnections.Authorization.AccountHolder | null;

  /**
   * The ID of the Financial Connections Institution this account belongs to. Note that this relationship may sometimes change in rare circumstances (e.g. institution mergers).
   */
  institution?: string | Institution | null;

  /**
   * The name of the institution that this authorization belongs to.
   */
  institution_name: string;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * The status of the connection to the Authorization.
   */
  status: FinancialConnections.Authorization.Status;

  status_details: FinancialConnections.Authorization.StatusDetails;
}
export namespace FinancialConnections {
  export namespace Authorization {
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

    export type Status = 'active' | 'disconnected' | 'inactive';

    export interface StatusDetails {
      inactive?: StatusDetails.Inactive;
    }

    export namespace AccountHolder {
      export type Type = 'account' | 'customer';
    }

    export namespace StatusDetails {
      export interface Inactive {
        /**
         * The action (if any) to relink the inactive Authorization.
         */
        action: Inactive.Action;
      }

      export namespace Inactive {
        export type Action = 'none' | 'relink_required';
      }
    }
  }
}
export namespace FinancialConnections {
  export interface AuthorizationRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
