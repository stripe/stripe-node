// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {Account} from './../Accounts.js';
import {Customer} from './../Customers.js';
import {OtherString} from '../../shared.js';
import {RequestOptions, Response} from '../../lib.js';

export class ConsentResource extends StripeResource {
  /**
   * Retrieves the details of a Financial Connections Consent.
   */
  retrieve(
    id: string,
    params?: FinancialConnections.ConsentRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Consent>> {
    return this._makeRequest(
      'GET',
      `/v1/financial_connections/consents/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Creates a Financial Connections Consent object for an account holder.
   */
  create(
    params: FinancialConnections.ConsentCreateParams,
    options?: RequestOptions
  ): Promise<Response<Consent>> {
    return this._makeRequest(
      'POST',
      '/v1/financial_connections/consents',
      params,
      options
    ) as any;
  }
}
export interface Consent {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'financial_connections.consent';

  account_holder: Consent.AccountHolder;

  /**
   * The exact localized text that must be displayed before collecting affirmative consent.
   */
  consent_text: string;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * The exclusive time after which this Consent can no longer be used as launch evidence.
   */
  expires_at: number;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * The BCP 47 locale used to render `consent_text`.
   */
  locale: string;
}
export namespace Consent {
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

  export namespace AccountHolder {
    export type Type = 'account' | 'customer' | OtherString;
  }
}
export namespace FinancialConnections {
  export interface ConsentCreateParams {
    /**
     * The account holder for whom the Consent is issued.
     */
    account_holder: ConsentCreateParams.AccountHolder;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The customer's preferred locale for the consent text, expressed as a BCP 47 language tag. If omitted, Stripe uses the default locale.
     */
    locale?: string;
  }

  export namespace ConsentCreateParams {
    export interface AccountHolder {
      /**
       * The ID of the Account for whom the Consent is issued. Required when `type` is `account`.
       */
      account?: string;

      /**
       * The ID of the Customer for whom the Consent is issued. Required when `type` is `customer` unless `customer_account` is provided.
       */
      customer?: string;

      /**
       * The ID of an Account representing the Customer for whom the Consent is issued. Required when `type` is `customer` unless `customer` is provided.
       */
      customer_account?: string;

      /**
       * The type of account holder for whom the Consent is issued.
       */
      type: AccountHolder.Type;
    }

    export namespace AccountHolder {
      export type Type = 'account' | 'customer' | OtherString;
    }
  }
}
export namespace FinancialConnections {
  export interface ConsentRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
